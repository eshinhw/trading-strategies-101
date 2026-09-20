import { Link } from "react-router-dom";
import type { StrategySummary } from "../types/strategy";
import { OutlookBadge, PlainBadge } from "./Badge";

export function StrategyCard({ strategy }: { strategy: StrategySummary }) {
  return (
    <Link
      to={`/strategy/${strategy.slug}`}
      className="group flex flex-col rounded-xl border border-[#2a3040] bg-[#141821] p-5 transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <OutlookBadge outlook={strategy.outlook} />
        <PlainBadge>{strategy.style.replace("-", " ")}</PlainBadge>
        <PlainBadge>{strategy.legCount}-leg</PlainBadge>
      </div>
      <h3 className="text-base font-semibold text-[#e6e8ec] group-hover:text-[#4f8cff]">
        {strategy.name}
      </h3>
      {strategy.aka && <div className="text-xs text-[#898781]">{strategy.aka}</div>}
      <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">{strategy.summary}</p>
    </Link>
  );
}
