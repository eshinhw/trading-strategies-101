const COLOR = {
  peer: "#5b6272",
  outlier: "#4f8cff",
  good: "#34d399",
  text: "#9aa3b2",
  band: "#2a3040",
};

export function ClusterDeviationDiagram() {
  const peers = [
    "M 20 120 C 100 112, 180 118, 260 108 C 340 98, 420 105, 500 95 C 540 90, 560 88, 580 86",
    "M 20 128 C 100 122, 180 126, 260 118 C 340 110, 420 113, 500 105 C 540 100, 560 98, 580 96",
    "M 20 112 C 100 108, 180 110, 260 100 C 340 92, 420 96, 500 88 C 540 84, 560 82, 580 80",
  ];

  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Several peer stocks moving together while one diverges below the group and then reverts back to the average">
      <rect x="20" y="78" width="560" height="55" fill={COLOR.band} opacity="0.35" />
      <text x="30" y="70" fontSize="12" fill={COLOR.text}>
        Cluster average band
      </text>

      {peers.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={COLOR.peer} strokeWidth="1.5" opacity="0.6" />
      ))}

      <path
        d="M 20 120 C 100 116, 160 130, 200 165 C 230 190, 250 205, 280 195
           C 320 182, 340 145, 370 118 C 400 92, 440 90, 480 92
           C 520 94, 550 90, 580 88"
        fill="none"
        stroke={COLOR.outlier}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="280" cy="195" r="5" fill={COLOR.good} />
      <line x1="280" y1="195" x2="280" y2="220" stroke={COLOR.good} strokeDasharray="3 3" strokeWidth="1" />
      <text x="280" y="234" textAnchor="middle" fontSize="12" fontWeight="600" fill={COLOR.good}>
        Buy the laggard
      </text>

      <line x1="440" y1="18" x2="460" y2="18" stroke={COLOR.outlier} strokeWidth="2.5" />
      <text x="466" y="22" fontSize="12" fill={COLOR.text}>
        Diverging stock
      </text>
      <line x1="440" y1="36" x2="460" y2="36" stroke={COLOR.peer} strokeWidth="1.5" />
      <text x="466" y="40" fontSize="12" fill={COLOR.text}>
        Peers
      </text>
    </svg>
  );
}
