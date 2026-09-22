const COLOR = {
  stockA: "#4f8cff",
  stockB: "#f2b84b",
  good: "#34d399",
  text: "#9aa3b2",
  band: "#2a3040",
};

export function PairsTradingDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Two historically correlated stocks moving together, diverging, then converging back">
      <rect x="260" y="20" width="110" height="200" fill={COLOR.band} opacity="0.4" />
      <text x="315" y="16" textAnchor="middle" fontSize="12" fill={COLOR.text}>
        Divergence
      </text>

      <path
        d="M 20 150 C 80 140, 140 130, 200 120 C 240 114, 260 108, 290 90
           C 320 72, 345 55, 370 60 C 410 68, 440 100, 480 110
           C 520 120, 550 118, 580 115"
        fill="none"
        stroke={COLOR.stockA}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20 155 C 80 145, 140 135, 200 126 C 240 120, 260 140, 290 165
           C 320 190, 345 200, 370 195 C 410 186, 440 150, 480 130
           C 520 112, 550 116, 580 118"
        fill="none"
        stroke={COLOR.stockB}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line x1="370" y1="60" x2="370" y2="195" stroke={COLOR.good} strokeDasharray="3 3" strokeWidth="1" />
      <text x="370" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Spread reverts
      </text>

      <line x1="440" y1="16" x2="460" y2="16" stroke={COLOR.stockA} strokeWidth="2.5" />
      <text x="466" y="20" fontSize="12" fill={COLOR.text}>
        Stock A
      </text>
      <line x1="440" y1="34" x2="460" y2="34" stroke={COLOR.stockB} strokeWidth="2.5" />
      <text x="466" y="38" fontSize="12" fill={COLOR.text}>
        Stock B
      </text>
    </svg>
  );
}
