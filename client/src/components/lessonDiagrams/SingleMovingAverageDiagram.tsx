const COLOR = {
  price: "#4f8cff",
  ma: "#f2b84b",
  good: "#34d399",
  critical: "#f87171",
  text: "#9aa3b2",
};

export function SingleMovingAverageDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Price crossing above and below its moving average, marking long and exit signals">
      <path
        d="M 20 165 C 90 160, 150 150, 200 140 C 260 128, 320 112, 380 100 C 440 88, 510 72, 580 55"
        fill="none"
        stroke={COLOR.ma}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M 20 190 C 50 175, 70 150, 95 148 C 115 146, 125 170, 145 152
           C 165 134, 185 120, 210 138 C 230 152, 245 145, 260 122
           C 280 94, 300 105, 320 95 C 350 80, 370 108, 390 95
           C 415 78, 440 82, 460 68 C 490 48, 530 55, 580 30"
        fill="none"
        stroke={COLOR.price}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="160" cy="140" r="5" fill={COLOR.good} />
      <line x1="160" y1="140" x2="160" y2="200" stroke={COLOR.good} strokeDasharray="3 3" strokeWidth="1" />
      <text x="160" y="216" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Long
      </text>

      <circle cx="250" cy="128" r="5" fill={COLOR.critical} />
      <line x1="250" y1="128" x2="250" y2="200" stroke={COLOR.critical} strokeDasharray="3 3" strokeWidth="1" />
      <text x="250" y="216" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.critical}>
        Exit
      </text>

      <circle cx="316" cy="97" r="5" fill={COLOR.good} />
      <line x1="316" y1="97" x2="316" y2="200" stroke={COLOR.good} strokeDasharray="3 3" strokeWidth="1" />
      <text x="316" y="216" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Long
      </text>

      <line x1="440" y1="18" x2="460" y2="18" stroke={COLOR.price} strokeWidth="2.5" />
      <text x="466" y="22" fontSize="12" fill={COLOR.text}>
        Price
      </text>
      <line x1="440" y1="36" x2="460" y2="36" stroke={COLOR.ma} strokeWidth="2.5" />
      <text x="466" y="40" fontSize="12" fill={COLOR.text}>
        Moving average
      </text>
    </svg>
  );
}
