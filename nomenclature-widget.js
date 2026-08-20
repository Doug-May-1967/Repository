// Nomenclature header button + dropdown.
// Reads NOMENCLATURE_GROUPS and NOMENCLATURE_RELATIONS from nomenclature-data.js.
// Call render() once per page; the button is injected into <header nav>.

(function () {

  function buildTermsTable() {
    var rows = NOMENCLATURE_GROUPS.map(function (group) {
      var termRows = group.terms.map(function (t) {
        return (
          '<tr>' +
            '<td class="nom-symbol">' + t.symbol + '</td>' +
            '<td>' + t.meaning + '</td>' +
            '<td class="nom-notes">' + (t.notes || '') + '</td>' +
          '</tr>'
        );
      }).join('');
      return '<tr class="nom-group-row"><td colspan="3">' + group.title + '</td></tr>' + termRows;
    }).join('');

    return (
      '<table class="nom-table">' +
        '<thead><tr><th>Symbol</th><th>Meaning</th><th>Notes</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>'
    );
  }

  function buildRelationsTable() {
    if (typeof NOMENCLATURE_RELATIONS === 'undefined' || !NOMENCLATURE_RELATIONS.length) return '';
    var rows = NOMENCLATURE_RELATIONS.map(function (r) {
      return (
        '<tr>' +
          '<td>' + r.relation + '</td>' +
          '<td class="nom-notes">' + r.where + '</td>' +
        '</tr>'
      );
    }).join('');
    return (
      '<p class="nom-relations-head">Key relations (cross-reference, not definitions)</p>' +
      '<table class="nom-table">' +
        '<thead><tr><th>Relation</th><th>Where it applies</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>'
    );
  }

  function positionDropdown(dropdown) {
    var header = document.querySelector('header');
    if (header) {
      dropdown.style.top = header.getBoundingClientRect().bottom + 'px';
    }
  }

  function render() {
    if (typeof NOMENCLATURE_GROUPS === 'undefined') {
      console.error('nomenclature-widget.js: NOMENCLATURE_GROUPS not found');
      return;
    }

    // ── Build dropdown panel ──
    var dropdown = document.createElement('div');
    dropdown.className = 'nom-dropdown';
    dropdown.id = 'nom-dropdown';
    dropdown.setAttribute('role', 'dialog');
    dropdown.setAttribute('aria-label', 'Nomenclature');
    dropdown.innerHTML = buildTermsTable() + buildRelationsTable();
    document.body.appendChild(dropdown);

    // ── Inject button into nav ──
    var nav = document.querySelector('header nav');
    if (!nav) return;
    var btn = document.createElement('button');
    btn.className = 'nom-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'nom-dropdown');
    btn.textContent = 'Nomenclature \u25BE';
    nav.appendChild(btn);

    // ── Toggle logic ──
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dropdown.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        positionDropdown(dropdown);
        // Typeset any new MathJax content
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([dropdown]).catch(function (err) {
            console.error('MathJax error in nom dropdown:', err);
          });
        } else if (window.MathJax && window.MathJax.typeset) {
          window.MathJax.typeset([dropdown]);
        }
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Reposition if window resizes (sticky header height can shift)
    window.addEventListener('resize', function () {
      if (dropdown.classList.contains('is-open')) positionDropdown(dropdown);
    });

    // Remove old in-page widget div if present
    var oldWidget = document.getElementById('nomenclature-widget');
    if (oldWidget) oldWidget.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
