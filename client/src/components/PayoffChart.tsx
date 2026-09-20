import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from "recharts";
import type { PayoffPoint } from "../engine/payoff";

const COLOR = {
  good: "#0ca30c",
  critical: "#d03b3b",
  line: "#3987e5",
  grid: "#2c2c2a",
  baseline: "#383835",
  mutedText: "#898781",
  primaryText: "#e6e8ec",
};

function fmtMoney(n: number): string {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

function ChartTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const point: PayoffPoint = payload[0].payload;
  const positive = point.pnl >= 0;
  return (
    <div
      style={{
        background: "#1b2029",
        border: "1px solid #2a3040",
        borderRadius: 8,
        padding: "8px 12px",
        fontSize: 13,
      }}
    >
      <div style={{ color: COLOR.mutedText }}>Stock price: ${point.spot.toFixed(2)}</div>
      <div style={{ color: positive ? COLOR.good : COLOR.critical, fontWeight: 600 }}>
        P&L: {fmtMoney(point.pnl)}
      </div>
    </div>
  );
}

export function PayoffChart({
  curve,
  breakevens,
  currentPrice,
}: {
  curve: PayoffPoint[];
  breakevens: number[];
  currentPrice?: number;
}) {
  const pnls = curve.map((p) => p.pnl);
  const dataMax = Math.max(...pnls, 0);
  const dataMin = Math.min(...pnls, 0);
  // fraction of the y-domain, from the top, where pnl = 0 sits — used to split
  // the area fill into a profit-green top and loss-red bottom at the right point.
  const gradientOffset = dataMax === dataMin ? 0 : dataMax / (dataMax - dataMin);

  return (
    <ResponsiveContainer width="100%" height={360}>
      <ComposedChart data={curve} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
        <defs>
          <linearGradient id="pnlFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset={gradientOffset} stopColor={COLOR.good} stopOpacity={0.35} />
            <stop offset={gradientOffset} stopColor={COLOR.critical} stopOpacity={0.35} />
          </linearGradient>
          <linearGradient id="pnlStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset={gradientOffset} stopColor={COLOR.good} />
            <stop offset={gradientOffset} stopColor={COLOR.critical} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={COLOR.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="spot"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickFormatter={(v) => `$${Math.round(v)}`}
          stroke={COLOR.mutedText}
          tick={{ fill: COLOR.mutedText, fontSize: 12 }}
          label={{
            value: "Stock price at expiration",
            position: "insideBottom",
            offset: -4,
            fill: COLOR.mutedText,
            fontSize: 12,
          }}
        />
        <YAxis
          tickFormatter={(v) => `$${v}`}
          stroke={COLOR.mutedText}
          tick={{ fill: COLOR.mutedText, fontSize: 12 }}
          label={{
            value: "Profit / Loss",
            angle: -90,
            position: "insideLeft",
            fill: COLOR.mutedText,
            fontSize: 12,
          }}
        />
        <Tooltip content={<ChartTooltip />} />
        <ReferenceLine y={0} stroke={COLOR.baseline} strokeWidth={1.5} />
        {currentPrice !== undefined && (
          <ReferenceLine
            x={currentPrice}
            stroke={COLOR.line}
            strokeDasharray="4 4"
            label={{ value: "Current", position: "top", fill: COLOR.line, fontSize: 11 }}
          />
        )}
        {breakevens.map((be, i) => (
          <ReferenceLine
            key={i}
            x={be}
            stroke={COLOR.mutedText}
            strokeDasharray="2 4"
            label={{
              value: `B/E $${be.toFixed(0)}`,
              position: i % 2 === 0 ? "insideTopLeft" : "insideTopRight",
              fill: COLOR.mutedText,
              fontSize: 11,
            }}
          />
        ))}
        <Area
          type="monotone"
          dataKey="pnl"
          stroke="url(#pnlStroke)"
          strokeWidth={2}
          fill="url(#pnlFill)"
          isAnimationActive={false}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
