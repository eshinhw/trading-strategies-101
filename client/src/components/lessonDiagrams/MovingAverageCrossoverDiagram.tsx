const COLOR = {
  price: "#5b6272",
  fast: "#4f8cff",
  slow: "#f2b84b",
  good: "#34d399",
  critical: "#f87171",
  grid: "#2a3040",
  text: "#9aa3b2",
};

export function MovingAverageCrossoverDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Fast and slow moving averages crossing, marking a buy and a sell signal">
      <line x1="20" y1="210" x2="580" y2="210" stroke={COLOR.grid} strokeWidth="1" />

      <path
        d="M 20 150 C 60 120, 100 170, 140 140 S 220 90, 260 130 S 340 190, 380 150 S 460 80, 500 110 S 560 60, 580 70"
        fill="none"
        stroke={COLOR.price}
        strokeWidth="1.5"
        opacity="0.55"
      />

      <path
        d="M 20 165 C 90 150, 130 150, 180 140 C 260 122, 320 128, 380 145 C 440 162, 500 110, 580 85"
        fill="none"
        stroke={COLOR.slow}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20 175 C 90 175, 130 160, 180 130 C 250 90, 320 155, 380 158 C 440 160, 500 95, 580 75"
        fill="none"
        stroke={COLOR.fast}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="222" cy="112" r="5" fill={COLOR.good} />
      <line x1="222" y1="112" x2="222" y2="40" stroke={COLOR.good} strokeDasharray="3 3" strokeWidth="1" />
      <text x="222" y="30" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Buy
      </text>

      <circle cx="405" cy="155" r="5" fill={COLOR.critical} />
      <line x1="405" y1="155" x2="405" y2="205" stroke={COLOR.critical} strokeDasharray="3 3" strokeWidth="1" />
      <text x="405" y="222" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.critical}>
        Sell
      </text>

      <line x1="480" y1="18" x2="500" y2="18" stroke={COLOR.fast} strokeWidth="2.5" />
      <text x="506" y="22" fontSize="12" fill={COLOR.text}>
        Fast MA
      </text>
      <line x1="480" y1="36" x2="500" y2="36" stroke={COLOR.slow} strokeWidth="2.5" />
      <text x="506" y="40" fontSize="12" fill={COLOR.text}>
        Slow MA
      </text>
    </svg>
  );
}
