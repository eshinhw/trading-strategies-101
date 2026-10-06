import { useId, useMemo } from "react";
import type { Strategy } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";

// A tiny payoff-at-expiration shape for a strategy, drawn from its own default numbers. Decorative: the lesson
// title next to it already says what it is, so it's hidden from assistive tech.
export function PayoffSparkline({ strategy, width = 76, height = 36 }: { strategy: Strategy; width?: number; height?: number }) {
  const id = useId();

  const curve = useMemo(() => {
    const params: ParamValues = {};
    for (const p of strategy.params) params[p.key] = p.default;
    const [lo, hi] = defaultRange(strategy, params);
    return computePayoffStats(strategy, params, lo, hi).curve;
  }, [strategy]);

  if (curve.length < 2) return null;

  const pad = 3;
  const xs = curve.map((p) => p.spot);
  const ys = curve.map((p) => p.pnl);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  // keep the zero line inside the frame even when a payoff never crosses it
  const yMin = Math.min(0, ...ys);
  const yMax = Math.max(0, ...ys);
  const ySpan = yMax - yMin || 1;
  const px = (x: number) => pad + ((x - xMin) / (xMax - xMin || 1)) * (width - 2 * pad);
  const py = (y: number) => pad + (1 - (y - yMin) / ySpan) * (height - 2 * pad);
  const zeroY = py(0);

  const line = curve.map((p, i) => `${i === 0 ? "M" : "L"}${px(p.spot).toFixed(1)} ${py(p.pnl).toFixed(1)}`).join(" ");
  const area = `${line} L${px(xs[xs.length - 1]).toFixed(1)} ${zeroY.toFixed(1)} L${px(xs[0]).toFixed(1)} ${zeroY.toFixed(1)} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" className="block">
      <defs>
        <clipPath id={`${id}-top`}>
          <rect x="0" y="0" width={width} height={zeroY} />
        </clipPath>
        <clipPath id={`${id}-bottom`}>
          <rect x="0" y={zeroY} width={width} height={height - zeroY} />
        </clipPath>
      </defs>
      <path d={area} fill="#34d399" fillOpacity="0.22" clipPath={`url(#${id}-top)`} />
      <path d={area} fill="#f87171" fillOpacity="0.25" clipPath={`url(#${id}-bottom)`} />
      <line x1="0" x2={width} y1={zeroY} y2={zeroY} stroke="#4a5263" strokeWidth="1" strokeDasharray="2 3" />
      <path d={line} fill="none" stroke="#a99dff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
