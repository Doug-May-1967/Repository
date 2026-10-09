// Single source of truth for the site-wide nomenclature panel.
// Edit this file only — nomenclature-widget.js reads from it on every page
// that includes both scripts, so a change here updates the whole site.
//
// Synced from Nomenclature.docx (Paper - 2026).

const NOMENCLATURE_GROUPS = [
  {
    title: "Spherical reference frame (Fig. 1)",
    terms: [
      {
        symbol: "\\(R\\)",
        meaning: "Radius vector from spherical center to satellite/body"
      },
      {
        symbol: "x, y, z",
        meaning: "Cartesian axes of the spherical frame"
      },
      {
        symbol: "\\(\\Theta\\)",
        meaning: "Azimuthal angle in the spherical frame"
      },
      {
        symbol: "\\(\\Phi\\)",
        meaning: "Polar angle in the spherical frame"
      }
    ]
  },
  {
    title: "Conical reference frame (Framework)",
    terms: [
      {
        symbol: "Apex",
        meaning: "Common origins of the conical and spherical frames"
      },
      {
        symbol: "\\(\\Phi_c\\)",
        meaning: "Cone half-angle"
      },
      {
        symbol: "\\(\\Phi_h\\)",
        meaning: "Polar angle to the angular momentum vector \\(\\mathbf{h}\\)"
      },
      {
        symbol: "\\(\\rho\\)",
        meaning: "Orbit plane offset from spherical center"
      }
    ]
  },
  {
    title: "Orbit elements and geometry",
    terms: [
      {
        symbol: "\\(E\\)",
        meaning: "Eccentric anomaly"
      },
      {
        symbol: "\\(R'\\)",
        meaning: "Local conic circumference radius"
      },
      {
        symbol: "\\(S\\)",
        meaning: "Satellite position"
      },
      {
        symbol: "\\(a\\)",
        meaning: "Semi-major axis"
      },
      {
        symbol: "g",
        meaning: "Gravitational acceleration vector at Gaussian surface",
        vector: true
      },
      {
        symbol: "h",
        meaning: "Angular momentum vector",
        vector: true
      },
      {
        symbol: "n",
        meaning: "Outward unit normal on Gaussian surface",
        vector: true
      },
      {
        symbol: "\\(p\\)",
        meaning: "Semi-latus rectum, semi-parameter"
      },
      {
        symbol: "\\(r\\)",
        meaning: "In-plane radius vector"
      },
      {
        symbol: "\\(\\Omega\\)",
        meaning: "Solid angle subtended by conic sector (steradians)"
      },
      {
        symbol: "\\(\\mu\\)",
        meaning: "Unique primary body gravitational constant"
      },
      {
        symbol: "\\(\\lambda\\)",
        meaning: "Logarithmic position variable"
      }
    ]
  },
  {
    title: "Hyperbolic construction (Hyperbolic page)",
    terms: [
      {
        symbol: "\\(Q\\)",
        meaning: "Center of the Dandelin sphere, on the cone axis"
      },
      {
        symbol: "\\(T\\)",
        meaning: "Point where a cone surface line touches the circle of contact"
      },
      {
        symbol: "\\(S'\\)",
        meaning: "Position of \\(S\\) revolved about the cone axis onto the cone outline"
      },
      {
        symbol: "\\(r''\\)",
        meaning: "Distance from the hyperbola center \\(O\\) to the satellite \\(S\\)"
      },
      {
        symbol: "\\(\\delta\\)",
        meaning: "Turn angle between the incoming and outgoing asymptote directions"
      }
    ]
  }
];
