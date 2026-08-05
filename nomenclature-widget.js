// Builds the collapsible/dropdown nomenclature panel from nomenclature-data.js
// and mounts it into <div id="nomenclature-widget"></div>.
//
// Usage: include nomenclature-data.js, then this file, then have
//   <div id="nomenclature-widget"></div>
// somewhere on the page (typically just above Fig. 1 / the first figure).
//
// Shouldn't need edits — edit nomenclature-data.js to add/change terms.

(function () {
  function buildTermsTable(group) {
    var rows = group.terms.map(function (t) {
      return (
        '<tr>' +
          '<td class="nom-symbol">' + t.symbol + '</td>' +
          '<td>' + t.meaning + '</td>' +
          '<td class="nom-notes">' + (t.notes || '') + '</td>' +
        '</tr>'
      );
    }).join('');

    return (
      '<tr class="nom-group-row"><td colspan="3">' + group.title + '</td></tr>' +
      rows
    );
  }

  function buildRelationsTable(relations) {
    return relations.map(function (r) {
      return (
        '<tr>' +
          '<td>' + r.relation + '</td>' +
          '<td class="nom-notes">' + r.where + '</td>' +
        '</tr>'
      );
    }).join('');
  }

  function render() {
    var mount = document.getElementById('nomenclature-widget');
    if (!mount) return;
    if (typeof NOMENCLATURE_GROUPS === 'undefined') {
      console.error('nomenclature-widget.js: NOMENCLATURE_GROUPS not found — include nomenclature-data.js first.');
      return;
    }

    var termRows = NOMENCLATURE_GROUPS.map(buildTermsTable).join('');

    var relationsSection = '';
    if (typeof NOMENCLATURE_RELATIONS !== 'undefined' && NOMENCLATURE_RELATIONS.length) {
      relationsSection =
        '<h4 style="margin:1.25rem 0 0.5rem;">Key relations (for cross-reference, not definitions)</h4>' +
        '<table class="nom-table">' +
          '<thead><tr><th>Relation</th><th>Where it applies</th></tr></thead>' +
          '<tbody>' + buildRelationsTable(NOMENCLATURE_RELATIONS) + '</tbody>' +
        '</table>';
    }

    mount.innerHTML =
      '<details class="nom-details">' +
        '<summary class="nom-summary">Nomenclature</summary>' +
        '<div class="nom-panel">' +
          '<table class="nom-table">' +
            '<thead><tr><th>Symbol</th><th>Meaning</th><th>Notes</th></tr></thead>' +
            '<tbody>' + termRows + '</tbody>' +
          '</table>' +
          relationsSection +
        '</div>' +
      '</details>';

    // Re-trigger MathJax so symbols/relations render after injection.
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([mount]).catch(function (err) {
        console.error('MathJax typeset error in nomenclature widget:', err);
      });
    } else if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset([mount]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
