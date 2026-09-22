const COLOR = {
  price: "#4f8cff",
  bound: "#9aa3b2",
  critical: "#f87171",
  text: "#9aa3b2",
};

export function ChannelDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Price oscillating inside a channel, then breaking out above it">
      <line x1="20" y1="60" x2="440" y2="100" stroke={COLOR.bound} strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="20" y1="170" x2="440" y2="210" stroke={COLOR.bound} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="446" y="104" fontSize="12" fill={COLOR.text}>
        Resistance
      </text>
      <text x="446" y="214" fontSize="12" fill={COLOR.text}>
        Support
      </text>

      <path
        d="M 20 140 C 60 175, 90 175, 120 150 C 155 122, 175 96, 210 98
           C 245 100, 260 150, 290 172 C 320 194, 345 188, 380 155
           C 410 126, 420 108, 440 100
           C 465 90, 500 60, 540 30"
        fill="none"
        stroke={COLOR.price}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="120" cy="150" r="4" fill={COLOR.bound} />
      <circle cx="210" cy="98" r="4" fill={COLOR.bound} />
      <circle cx="290" cy="172" r="4" fill={COLOR.bound} />
      <circle cx="380" cy="155" r="4" fill={COLOR.bound} />

      <line x1="440" y1="100" x2="440" y2="30" stroke={COLOR.critical} strokeDasharray="3 3" strokeWidth="1" />
      <text x="480" y="28" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.critical}>
        Breakout
      </text>
    </svg>
  );
}
