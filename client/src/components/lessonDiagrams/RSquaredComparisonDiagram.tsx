const COLOR = {
  trend: "#4f8cff",
  fit: "#9aa3b2",
  good: "#34d399",
  critical: "#f87171",
  text: "#9aa3b2",
};

export function RSquaredComparisonDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="A smooth high R-squared uptrend compared with a choppy low R-squared trend that ends at the same place">
      <text x="150" y="18" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        High R² — smooth, trustworthy trend
      </text>
      <line x1="30" y1="180" x2="270" y2="40" stroke={COLOR.fit} strokeWidth="1.5" strokeDasharray="4 4" />
      <path
        d="M 30 180 C 80 155, 120 135, 160 112 C 200 90, 235 62, 270 40"
        fill="none"
        stroke={COLOR.trend}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line x1="300" y1="0" x2="300" y2="240" stroke={COLOR.text} strokeWidth="1" opacity="0.3" />

      <text x="450" y="18" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.critical}>
        Low R² — choppy, same net move
      </text>
      <line x1="330" y1="180" x2="570" y2="40" stroke={COLOR.fit} strokeWidth="1.5" strokeDasharray="4 4" />
      <path
        d="M 330 180 C 350 150, 365 200, 385 165 C 400 140, 380 110, 400 95
           C 420 80, 450 130, 470 100 C 485 78, 460 60, 480 55
           C 510 47, 530 90, 545 65 C 555 48, 560 45, 570 40"
        fill="none"
        stroke={COLOR.trend}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <text x="150" y="225" textAnchor="middle" fontSize="12" fill={COLOR.text}>
        Trade this
      </text>
      <text x="450" y="225" textAnchor="middle" fontSize="12" fill={COLOR.text}>
        Skip this
      </text>
    </svg>
  );
}
