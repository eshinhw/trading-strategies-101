const COLOR = {
  index: "#9aa3b2",
  letf: "#f87171",
  text: "#9aa3b2",
};

export function LeveragedEtfDecayDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="A choppy but flat index compared to a 2x leveraged ETF that steadily decays over the same period">
      <line x1="20" y1="120" x2="580" y2="120" stroke={COLOR.index} strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

      <path
        d="M 20 120 C 50 90, 80 150, 110 115 C 140 85, 170 145, 200 120
           C 230 95, 260 150, 290 118 C 320 90, 350 148, 380 122
           C 410 96, 440 146, 470 120 C 500 92, 530 148, 560 118 L 580 122"
        fill="none"
        stroke={COLOR.index}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M 20 120 C 50 65, 80 175, 110 130 C 140 80, 170 185, 200 145
           C 230 95, 260 195, 290 155 C 320 105, 350 205, 380 165
           C 410 115, 440 210, 470 175 C 500 130, 530 215, 560 185 L 580 190"
        fill="none"
        stroke={COLOR.letf}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line x1="580" y1="122" x2="580" y2="190" stroke={COLOR.text} strokeDasharray="3 3" strokeWidth="1" />
      <text x="540" y="150" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.letf}>
        Decay
      </text>

      <line x1="60" y1="20" x2="80" y2="20" stroke={COLOR.index} strokeWidth="2.5" />
      <text x="86" y="24" fontSize="12" fill={COLOR.text}>
        Index (flat over period)
      </text>
      <line x1="280" y1="20" x2="300" y2="20" stroke={COLOR.letf} strokeWidth="2.5" />
      <text x="306" y="24" fontSize="12" fill={COLOR.text}>
        2x LETF
      </text>
    </svg>
  );
}
