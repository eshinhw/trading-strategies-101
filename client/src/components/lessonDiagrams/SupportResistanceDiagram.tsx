const COLOR = {
  price: "#4f8cff",
  resistance: "#f87171",
  support: "#34d399",
  text: "#9aa3b2",
};

export function SupportResistanceDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Price repeatedly bouncing off a support level and being rejected at a resistance level">
      <line x1="20" y1="60" x2="580" y2="60" stroke={COLOR.resistance} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="586" y="64" fontSize="12" fill={COLOR.text}>
        Resistance
      </text>

      <line x1="20" y1="190" x2="580" y2="190" stroke={COLOR.support} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="586" y="194" fontSize="12" fill={COLOR.text}>
        Support
      </text>

      <path
        d="M 20 150 C 60 110, 90 65, 120 62 C 150 60, 170 100, 150 140
           C 130 180, 90 188, 100 190 C 120 192, 170 150, 210 105
           C 240 72, 260 60, 280 62 C 300 64, 280 110, 250 150
           C 220 190, 190 188, 220 190 C 260 192, 320 140, 360 100
           C 390 68, 410 60, 430 63 C 450 66, 420 120, 390 155
           C 370 178, 340 190, 360 190 C 420 190, 500 140, 540 90
           C 555 72, 565 60, 580 45"
        fill="none"
        stroke={COLOR.price}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="122" cy="62" r="4" fill={COLOR.resistance} />
      <circle cx="282" cy="62" r="4" fill={COLOR.resistance} />
      <circle cx="432" cy="63" r="4" fill={COLOR.resistance} />

      <circle cx="102" cy="190" r="4" fill={COLOR.support} />
      <circle cx="222" cy="190" r="4" fill={COLOR.support} />
      <circle cx="362" cy="190" r="4" fill={COLOR.support} />
    </svg>
  );
}
