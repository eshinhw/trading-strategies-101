const COLOR = {
  price: "#4f8cff",
  average: "#9aa3b2",
  band: "#2a3040",
  good: "#34d399",
  critical: "#f87171",
  text: "#9aa3b2",
};

export function MeanReversionBandDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Price wandering inside a band around its moving average, with a buy signal below the band and a sell signal above it">
      <path
        d="M 20 60 C 120 55, 200 60, 300 65 C 400 70, 480 68, 580 62"
        fill="none"
        stroke={COLOR.band}
        strokeWidth="60"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 20 60 C 120 55, 200 60, 300 65 C 400 70, 480 68, 580 62"
        fill="none"
        stroke={COLOR.average}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      <path
        d="M 20 65 C 60 90, 90 130, 110 155 C 125 175, 130 185, 150 178
           C 175 168, 190 120, 210 85 C 220 65, 225 30, 245 25
           C 265 20, 275 45, 290 65 C 310 90, 330 68, 345 62
           C 400 66, 460 90, 490 140 C 505 165, 510 178, 525 172
           C 545 165, 560 110, 580 70"
        fill="none"
        stroke={COLOR.price}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="150" cy="178" r="5" fill={COLOR.good} />
      <text x="150" y="205" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Buy
      </text>

      <circle cx="245" cy="25" r="5" fill={COLOR.critical} />
      <text x="245" y="16" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.critical}>
        Sell
      </text>

      <circle cx="525" cy="172" r="5" fill={COLOR.good} />
      <text x="525" y="199" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Buy
      </text>
    </svg>
  );
}
