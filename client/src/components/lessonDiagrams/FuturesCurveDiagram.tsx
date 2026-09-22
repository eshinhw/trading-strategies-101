const COLOR = {
  contango: "#4f8cff",
  backwardation: "#f2b84b",
  text: "#9aa3b2",
  grid: "#2a3040",
};

export function FuturesCurveDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Two futures curve shapes across contract months: an upward-sloping contango curve and a downward-sloping backwardation curve">
      <line x1="40" y1="200" x2="580" y2="200" stroke={COLOR.grid} strokeWidth="1" />
      <text x="580" y="220" textAnchor="end" fontSize="12" fill={COLOR.text}>
        Further-dated contracts →
      </text>

      <path
        d="M 60 165 C 140 142, 230 115, 320 90 C 390 72, 450 58, 500 42"
        fill="none"
        stroke={COLOR.contango}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="165" r="4" fill={COLOR.contango} />
      <circle cx="500" cy="42" r="4" fill={COLOR.contango} />
      <text x="500" y="28" textAnchor="end" fontSize="12" fill={COLOR.contango} fontWeight="600">
        Contango
      </text>

      <path
        d="M 60 60 C 140 82, 230 112, 320 138 C 390 158, 450 170, 500 180"
        fill="none"
        stroke={COLOR.backwardation}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="4" fill={COLOR.backwardation} />
      <circle cx="500" cy="180" r="4" fill={COLOR.backwardation} />
      <text x="500" y="196" textAnchor="end" fontSize="12" fill={COLOR.backwardation} fontWeight="600">
        Backwardation
      </text>

      <text x="60" y="45" fontSize="11" fill={COLOR.text}>
        Spot
      </text>
    </svg>
  );
}
