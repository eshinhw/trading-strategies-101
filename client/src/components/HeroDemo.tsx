import { useEffect, useMemo, useState } from "react";
import { fetchLesson } from "../api";
import type { LessonDetail } from "../types/curriculum";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { PayoffChart } from "./PayoffChart";
import { StatTile } from "./StatTile";

const DEMO_LESSON_SLUG = "long-straddle";

function defaultsFor(params: { key: string; default: number }[]): ParamValues {
  const values: ParamValues = {};
  for (const p of params) values[p.key] = p.default;
  return values;
}

// Split out of LandingPage and lazy-loaded there: this is the only page-level
// caller of PayoffChart, which pulls in recharts — without the split, every
// landing-page visit (the highest-traffic route) paid for that chunk even
// though it's otherwise scoped to lesson pages.
export function HeroDemo() {
  const [lesson, setLesson] = useState<LessonDetail | null>(null);

  useEffect(() => {
    fetchLesson(DEMO_LESSON_SLUG)
      .then(setLesson)
      .catch(() => setLesson(null));
  }, []);

  const stats = useMemo(() => {
    if (!lesson || lesson.kind !== "strategy") return null;
    const params = defaultsFor(lesson.strategy.params);
    const [lo, hi] = defaultRange(lesson.strategy, params);
    return computePayoffStats(lesson.strategy, params, lo, hi);
  }, [lesson]);

  return (
    <div className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 shadow-2xl shadow-black/40">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-[#898781]">Live from the Options course</div>
          <h3 className="font-semibold text-[#e6e8ec]">
            {lesson?.kind === "strategy" ? lesson.strategy.name : "Long straddle"}
          </h3>
        </div>
        <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#9aa3b2]">Interactive</span>
      </div>

      {stats ? (
        <>
          <PayoffChart curve={stats.curve} breakevens={stats.breakevens} />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
            <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
          </div>
        </>
      ) : (
        <div className="flex h-[360px] items-center justify-center text-sm text-[#898781]">Loading demo…</div>
      )}
      <p className="mt-3 text-xs text-[#898781]">
        This interactive payoff tool is built into every Options lesson — every chart in the course is live, not a
        screenshot. Other live courses pair each lesson with a written explainer and a knowledge-check quiz instead.
      </p>
    </div>
  );
}
