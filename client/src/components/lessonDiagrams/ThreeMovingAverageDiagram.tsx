const COLOR = {
  fast: "#4f8cff",
  medium: "#f2b84b",
  slow: "#9aa3b2",
  good: "#34d399",
  band: "#2a3040",
  text: "#9aa3b2",
};

export function ThreeMovingAverageDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Three moving averages of different lengths aligning short above medium above long, confirming a trend">
      <rect x="300" y="30" width="220" height="150" fill={COLOR.band} opacity="0.4" />
      <text x="410" y="20" textAnchor="middle" fontSize="12" fill={COLOR.good} fontWeight="600">
        Aligned — trend confirmed
      </text>

      <path
        d="M 20 150 C 80 150, 140 148, 200 143 C 260 137, 320 120, 380 100 C 440 82, 480 70, 520 62 C 550 57, 565 55, 580 54"
        fill="none"
        stroke={COLOR.slow}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20 160 C 80 158, 140 152, 200 138 C 260 122, 320 100, 380 82 C 440 65, 480 52, 520 44 C 550 39, 565 37, 580 36"
        fill="none"
        stroke={COLOR.medium}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20 170 C 80 168, 140 155, 200 130 C 260 105, 320 78, 380 62 C 440 46, 480 32, 520 25 C 550 21, 565 19, 580 18"
        fill="none"
        stroke={COLOR.fast}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line x1="440" y1="200" x2="460" y2="200" stroke={COLOR.fast} strokeWidth="2.5" />
      <text x="466" y="204" fontSize="12" fill={COLOR.text}>
        Short
      </text>
      <line x1="440" y1="216" x2="460" y2="216" stroke={COLOR.medium} strokeWidth="2.5" />
      <text x="466" y="220" fontSize="12" fill={COLOR.text}>
        Medium
      </text>
      <line x1="510" y1="200" x2="530" y2="200" stroke={COLOR.slow} strokeWidth="2.5" />
      <text x="536" y="204" fontSize="12" fill={COLOR.text}>
        Long
      </text>
    </svg>
  );
}
