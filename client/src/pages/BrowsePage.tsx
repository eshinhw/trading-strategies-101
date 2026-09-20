import { useEffect, useMemo, useState } from "react";
import { fetchStrategies } from "../api";
import type { StrategySummary } from "../types/strategy";
import { StrategyCard } from "../components/StrategyCard";

const OUTLOOKS = ["all", "bullish", "bearish", "neutral"] as const;
const STYLES = ["all", "income", "capital-gain", "hedging", "volatility", "sideways"] as const;

export function BrowsePage() {
  const [strategies, setStrategies] = useState<StrategySummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [outlook, setOutlook] = useState<(typeof OUTLOOKS)[number]>("all");
  const [style, setStyle] = useState<(typeof STYLES)[number]>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchStrategies()
      .then(setStrategies)
      .catch((e) => setError(e.message));
  }, []);

  const filtered = useMemo(() => {
    if (!strategies) return [];
    return strategies.filter((s) => {
      if (outlook !== "all" && s.outlook !== outlook) return false;
      if (style !== "all" && s.style !== style) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!s.name.toLowerCase().includes(q) && !s.summary.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [strategies, outlook, style, query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Strategy Desk</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          An interactive guide to the options strategies from{" "}
          <em>151 Trading Strategies</em> (Kakushadze &amp; Serur, 2018) — adjust strikes and
          premiums, see the payoff diagram update live, and read plain-English guidance on when,
          why, and how each one is used.
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search strategies…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xs rounded-lg border border-[#2a3040] bg-[#141821] px-3 py-2 text-sm text-[#e6e8ec] placeholder:text-[#898781] focus:border-[#4f8cff] focus:outline-none"
        />
        <div className="flex flex-wrap gap-2">
          <FilterGroup label="Outlook" options={OUTLOOKS} value={outlook} onChange={setOutlook} />
          <FilterGroup label="Type" options={STYLES} value={style} onChange={setStyle} />
        </div>
      </div>

      {error && <p className="text-red-400">Failed to load strategies: {error}</p>}
      {!strategies && !error && <p className="text-[#898781]">Loading strategies…</p>}

      {strategies && (
        <>
          <p className="mb-4 text-sm text-[#898781]">
            {filtered.length} of {strategies.length} strategies
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <StrategyCard key={s.slug} strategy={s} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1 rounded-lg border border-[#2a3040] bg-[#141821] p-1 text-xs">
      <span className="px-2 text-[#898781]">{label}</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-md px-2.5 py-1 capitalize transition ${
            value === opt
              ? "bg-[#4f8cff] text-white"
              : "text-[#9aa3b2] hover:bg-[#1b2029]"
          }`}
        >
          {opt.replace("-", " ")}
        </button>
      ))}
    </div>
  );
}
