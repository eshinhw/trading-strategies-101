const COLOR = {
  mid: "#9aa3b2",
  bid: "#34d399",
  ask: "#f87171",
  text: "#9aa3b2",
  band: "#2a3040",
};

export function BidAskSpreadDiagram() {
  return (
    <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Bid and ask quotes around a mid price, then skewing lower as inventory builds up">
      <text x="20" y="40" fontSize="12" fill={COLOR.text}>
        Mid
      </text>
      <line x1="20" y1="110" x2="330" y2="110" stroke={COLOR.mid} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />

      <line x1="20" y1="85" x2="330" y2="85" stroke={COLOR.ask} strokeWidth="2.5" />
      <line x1="20" y1="135" x2="330" y2="135" stroke={COLOR.bid} strokeWidth="2.5" />
      <line x1="160" y1="85" x2="160" y2="135" stroke={COLOR.text} strokeWidth="1" strokeDasharray="3 3" />
      <text x="166" y="112" fontSize="12" fill={COLOR.text}>
        Spread
      </text>

      <text x="335" y="88" fontSize="12" fill={COLOR.ask}>
        Ask
      </text>
      <text x="335" y="138" fontSize="12" fill={COLOR.bid}>
        Bid
      </text>

      <line x1="358" y1="60" x2="358" y2="205" stroke={COLOR.band} strokeWidth="2" />
      <text x="368" y="50" fontSize="12" fill={COLOR.text}>
        Long inventory builds up
      </text>

      <line x1="385" y1="110" x2="575" y2="155" stroke={COLOR.mid} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      <line x1="385" y1="85" x2="575" y2="130" stroke={COLOR.ask} strokeWidth="2.5" />
      <line x1="385" y1="135" x2="575" y2="180" stroke={COLOR.bid} strokeWidth="2.5" />

      <text x="480" y="205" textAnchor="middle" fontSize="12" fill={COLOR.text}>
        <tspan x="480" dy="0">Quotes skew lower to</tspan>
        <tspan x="480" dy="16">shed inventory</tspan>
      </text>
    </svg>
  );
}
