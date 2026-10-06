import type { PayoffPoint } from "../engine/payoff";

const COLOR = {
  profit: "#34d399",
  loss: "#f87171",
  grid: "#2a3040",
  axis: "#4a5263",
  text: "#898781",
  strongText: "#e6e8ec",
};

const W = 720;
const H = 380;
const M = { top: 28, right: 28, bottom: 60, left: 72 };

function money(n: number): string {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  return `${sign}$${abs % 1 === 0 ? abs.toFixed(0) : abs.toFixed(2)}`;
}

// 1-2-5 "nice" step so y-axis ticks land on round numbers.
function niceStep(range: number, targetTicks = 4): number {
  const raw = range / targetTicks;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const frac = raw / pow;
  const nice = frac < 1.5 ? 1 : frac < 3.5 ? 2 : frac < 7.5 ? 5 : 10;
  return nice * pow;
}

export interface DiagramMarker {
  value: number;
  label: string;
}

// A static, non-interactive payoff-at-expiration picture: profit/loss shading around the zero
// line, breakeven dots, and labeled strikes. It renders from the strategy's own default numbers,
// so it always matches the lesson text rather than being a separately maintained image file.
export function StaticPayoffDiagram({
  curve,
  breakevens,
  markers,
  maxProfit,
  maxLoss,
  title,
}: {
  curve: PayoffPoint[];
  breakevens: number[];
  markers: DiagramMarker[];
  maxProfit: number | "unlimited";
  maxLoss: number | "unlimited";
  title: string;
}) {
  const xs = curve.map((p) => p.spot);
  const ys = curve.map((p) => p.pnl);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const rawMax = Math.max(...ys, 0);
  const rawMin = Math.min(...ys, 0);
  const pad = Math.max((rawMax - rawMin) * 0.12, 1);
  const yMax = rawMax + pad;
  const yMin = rawMin - pad;

  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const sx = (x: number) => M.left + ((x - xMin) / (xMax - xMin || 1)) * plotW;
  const sy = (y: number) => M.top + ((yMax - y) / (yMax - yMin || 1)) * plotH;
  const y0 = sy(0);

  const linePath = curve.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.spot).toFixed(1)},${sy(p.pnl).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${sx(xMax).toFixed(1)},${y0.toFixed(1)} L${sx(xMin).toFixed(1)},${y0.toFixed(1)} Z`;

  const step = niceStep(yMax - yMin);
  const yTicks: number[] = [];
  for (let t = Math.ceil(yMin / step) * step; t <= yMax; t += step) yTicks.push(Math.round(t * 100) / 100);

  // Drop strike/price labels that would sit on top of one another.
  const placed: { x: number; label: string; value: number }[] = [];
  for (const m of [...markers].sort((a, b) => a.value - b.value)) {
    const x = sx(m.value);
    if (x < M.left || x > W - M.right) continue;
    if (placed.length === 0 || x - placed[placed.length - 1].x > 62) placed.push({ x, label: m.label, value: m.value });
  }

  const summary =
    `Payoff diagram at expiration for ${title}. ` +
    `Maximum profit ${maxProfit === "unlimited" ? "unlimited" : money(maxProfit)}, ` +
    `maximum loss ${maxLoss === "unlimited" ? "unlimited" : money(maxLoss)}` +
    (breakevens.length ? `, breakeven ${breakevens.map((b) => money(b)).join(" and ")}.` : ".");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={summary} className="h-auto w-full">
      <defs>
        <clipPath id="clip-profit">
          <rect x={M.left} y={M.top} width={plotW} height={Math.max(y0 - M.top, 0)} />
        </clipPath>
        <clipPath id="clip-loss">
          <rect x={M.left} y={y0} width={plotW} height={Math.max(M.top + plotH - y0, 0)} />
        </clipPath>
      </defs>

      {yTicks.map((t) => (
        <g key={t}>
          <line x1={M.left} x2={W - M.right} y1={sy(t)} y2={sy(t)} stroke={COLOR.grid} strokeDasharray="3 4" />
          <text x={M.left - 10} y={sy(t) + 4} textAnchor="end" fontSize="12" fill={COLOR.text}>
            {money(t)}
          </text>
        </g>
      ))}

      <path d={areaPath} fill={COLOR.profit} fillOpacity="0.22" clipPath="url(#clip-profit)" />
      <path d={areaPath} fill={COLOR.loss} fillOpacity="0.22" clipPath="url(#clip-loss)" />

      {placed.map((m) => (
        <g key={`${m.value}-${m.label}`}>
          <line x1={m.x} x2={m.x} y1={M.top} y2={M.top + plotH} stroke={COLOR.grid} strokeDasharray="2 4" />
          <text x={m.x} y={M.top + plotH + 18} textAnchor="middle" fontSize="12" fill={COLOR.text}>
            {m.label}
          </text>
          <text x={m.x} y={M.top + plotH + 33} textAnchor="middle" fontSize="12" fill={COLOR.strongText}>
            {money(m.value)}
          </text>
        </g>
      ))}

      <line x1={M.left} x2={W - M.right} y1={y0} y2={y0} stroke={COLOR.axis} strokeWidth="1.5" />
      <line x1={M.left} x2={M.left} y1={M.top} y2={M.top + plotH} stroke={COLOR.axis} />

      <path d={linePath} fill="none" stroke={COLOR.profit} strokeWidth="3" strokeLinejoin="round" clipPath="url(#clip-profit)" />
      <path d={linePath} fill="none" stroke={COLOR.loss} strokeWidth="3" strokeLinejoin="round" clipPath="url(#clip-loss)" />

      {breakevens
        .filter((b) => b >= xMin && b <= xMax)
        .map((b, i) => (
          <g key={`be-${i}`}>
            <circle cx={sx(b)} cy={y0} r="5" fill="#0b0d12" stroke={COLOR.strongText} strokeWidth="2" />
            <text
              x={sx(b)}
              y={y0 - 14}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill={COLOR.strongText}
              stroke="#141821"
              strokeWidth="4"
              paintOrder="stroke"
              strokeLinejoin="round"
            >
              BE {money(b)}
            </text>
          </g>
        ))}

      <text x={M.left + plotW / 2} y={H - 8} textAnchor="middle" fontSize="12" fill={COLOR.text}>
        Stock price at expiration
      </text>
      <text
        transform={`translate(16 ${M.top + plotH / 2}) rotate(-90)`}
        textAnchor="middle"
        fontSize="12"
        fill={COLOR.text}
      >
        Profit / Loss
      </text>
    </svg>
  );
}
