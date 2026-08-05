// Single source of truth for the site-wide nomenclature panel.
// Edit this file only — nomenclature-widget.js reads from it on every page
// that includes both scripts, so a change here updates the whole site.
//
// Status: all four open items from 8/3 resolved —
//   1. Phi / Phi_h / Phi_c disambiguated (three distinct symbols)
//   2. H_C retired in favor of Phi_c
//   3. R' defined
//   4. Format: collapsible dropdown (not persistent sidebar)

const NOMENCLATURE_GROUPS = [
  {
    title: "Spherical reference frame (Fig. 1)",
    terms: [
      {
        symbol: "\\(R\\)",
        meaning: "Radius vector from spherical center to satellite/body",
        notes: "General 3D radius, not the in-plane orbital r"
      },
      {
        symbol: "\\(\\Theta\\)",
        meaning: "Azimuthal angle in the spherical frame",
        notes: "Measured in the x\u2013y reference plane"
      },
      {
        symbol: "\\(\\Phi\\)",
        meaning: "Polar/colatitude-type angle in the spherical frame",
        notes: "Classical spherical-coordinate variable — distinct from \\(\\Phi_c\\) and \\(\\Phi_h\\) below, which carry their own subscripts precisely to avoid conflating with this one"
      },
      {
        symbol: "x, y, z",
        meaning: "Cartesian axes of the spherical frame",
        notes: "Classical convention per Fig. 1"
      }
    ]
  },
  {
    title: "Conical reference frame (Section I / Framework)",
    terms: [
      {
        symbol: "Apex",
        meaning: "Common origin of the cone, shared with the spherical frame's center",
        notes: "Singular point; also the rectilinear reference point (r \u2192 0 limit)"
      },
      {
        symbol: "45\u00b0 half-angle cone",
        meaning: "The fixed reference cone (90\u00b0 apex angle) that elliptical orbits occupy",
        notes: "Structural constant — does not vary with e"
      },
      {
        symbol: "\\(\\Phi_c\\)",
        meaning: "Cone half-angle",
        notes: "Varies with eccentricity. Carries both eccentricity relations: \\(\\sin(2\\Phi_c) = e\\) (elliptical), \\(\\sin(\\Phi_c) = 1/e\\) (hyperbolic). Replaces the earlier H_C notation."
      },
      {
        symbol: "\\(\\Phi_h\\)",
        meaning: "Angle to the angular momentum vector \\(\\mathbf{h}\\)",
        notes: "Fixed at 90\u00b0 for the hyperbolic case by construction. Does not appear in the eccentricity relations — those belong to \\(\\Phi_c\\). Magnitude of \\(\\mathbf{h}\\): general definition \\(h = r^2\\dot\\theta\\) (holds for both conic types). Elliptical closed form: \\(\\sqrt{ap}\\). Hyperbolic closed form in terms of a, p: [open — not yet resolved]."
      },
      {
        symbol: "\\(\\rho\\)",
        meaning: "Offset / semi-conjugate axis, \\(\\rho = \\sqrt{ap} = b\\)",
        notes: "Same quantity as the magnitude of h referenced by \\(\\Phi_h\\) above"
      }
    ]
  },
  {
    title: "Orbit elements and geometry",
    terms: [
      {
        symbol: "\\(e\\)",
        meaning: "Eccentricity",
        notes: "Also watch for collision with E (eccentric anomaly) in dense passages — spell out when adjacent"
      },
      {
        symbol: "\\(a\\)",
        meaning: "Semi-major axis",
        notes: "Signed: positive for ellipse, negative for hyperbola per your energy convention"
      },
      {
        symbol: "\\(p\\)",
        meaning: "Semi-latus rectum (semi-parameter)",
        notes: "p \u2192 0 in the rectilinear limit (e = 1); this is the source of the division-by-zero discussed on the Rectilinear slide"
      },
      {
        symbol: "\\(b\\)",
        meaning: "Semi-conjugate axis",
        notes: "Same value as \\(\\rho\\) above"
      },
      {
        symbol: "\\(r\\)",
        meaning: "In-plane orbital radius (satellite to focus)",
        notes: "Distinct from R (spherical-frame radius)"
      },
      {
        symbol: "\\(R'\\)",
        meaning: "Component of R perpendicular to the cone centerline, extending to the satellite/body",
        notes: "Appears in \\(R^2 = r^2 + 2a(r-p) + R'^2\\)"
      },
      {
        symbol: "\\(\\theta\\)",
        meaning: "True anomaly",
        notes: "In-plane angle"
      },
      {
        symbol: "\\(E\\)",
        meaning: "Eccentric anomaly",
        notes: "Watch for collision with e (eccentricity) — see above"
      },
      {
        symbol: "\\(M\\)",
        meaning: "Mean anomaly",
        notes: "\\(M = E - \\sin E\\) (Kepler's equation)"
      },
      {
        symbol: "\\(S(\\theta)\\)",
        meaning: "General satellite position, \\(S(\\theta) = (\\rho,\\ r\\sin\\theta,\\ ae - r\\cos\\theta)\\)",
        notes: "Coordinate triple in the conic frame"
      }
    ]
  }
];

const NOMENCLATURE_RELATIONS = [
  {
    relation: "\\(R^2 = r^2 + ap\\)",
    where: "Elliptical reference frame — the \"load-bearing\" cone relation"
  },
  {
    relation: "\\(R^2 = r^2 + 2a(r - p) + R'^2\\)",
    where: "General form"
  },
  {
    relation: "\\(\\sin(2\\Phi_c) = e\\)",
    where: "Elliptical case"
  },
  {
    relation: "\\(\\sin(\\Phi_c) = 1/e\\)",
    where: "Hyperbolic case"
  },
  {
    relation: "\\(R = r + a\\)",
    where: "Apex-distance relation, hyperbolic Dandelin-sphere analog"
  },
  {
    relation: "\\(aE - a\\sin E = a(E - \\sin E) = aM\\)",
    where: "Rectilinear (e=1) tangent-line construction, AAS 05-354"
  }
];
