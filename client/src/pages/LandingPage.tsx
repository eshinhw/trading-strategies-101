import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLesson, fetchCourses } from "../api";
import type { LessonDetail } from "../types/curriculum";
import type { Course } from "../types/course";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";
import { Footer } from "../components/Footer";

const DEMO_LESSON_SLUG = "long-straddle";

export function LandingPage() {
  // Support deep-linking to the courses section (e.g. "back to all modules"
  // links from a module/lesson page) even when this is a fresh route mount,
  // which the browser's native hash-scroll doesn't handle in an SPA.
  useEffect(() => {
    if (window.location.hash === "#courses") {
      document.getElementById("courses")?.scrollIntoView();
    }
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <CoursesPreview />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#2a3040]">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #4f8cff, transparent)" }}
      />
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-block rounded-full border border-[#4f8cff]/30 bg-[#4f8cff]/10 px-3 py-1 text-xs font-medium text-[#4f8cff]">
            For early-career analysts &amp; traders
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#e6e8ec] sm:text-5xl">
            Learn trading strategies by using them, not memorizing them.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#9aa3b2]">
            Trading Strategies 101 turns a structured curriculum — 18 asset classes, one course
            each — into hands-on lessons. Options is live now: adjust real parameters, watch the
            payoff diagram respond, then prove you understand it with a knowledge check graded
            against the real math.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/signup"
              className="rounded-lg bg-[#4f8cff] px-5 py-2.5 font-medium text-white hover:bg-[#3d7ce0]"
            >
              Start learning — it's free
            </Link>
            <a href="#courses" className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
              Browse all courses ↓
            </a>
          </div>
          <p className="mt-4 text-sm text-[#898781]">
            No credit card. Browse and try any lesson before you sign up.
          </p>
        </div>
        <HeroDemo />
      </div>
    </section>
  );
}

function defaultsFor(params: { key: string; default: number }[]): ParamValues {
  const values: ParamValues = {};
  for (const p of params) values[p.key] = p.default;
  return values;
}

function HeroDemo() {
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
    <div className="rounded-2xl border border-[#2a3040] bg-[#141821] p-5 shadow-2xl shadow-black/40">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-[#898781]">Live from the Options course</div>
          <h3 className="font-semibold text-[#e6e8ec]">
            {lesson?.kind === "strategy" ? lesson.strategy.name : "Long straddle"}
          </h3>
        </div>
        <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#9aa3b2]">
          Interactive
        </span>
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
        <div className="flex h-[360px] items-center justify-center text-sm text-[#898781]">
          Loading demo…
        </div>
      )}
      <p className="mt-3 text-xs text-[#898781]">
        This is the same tool that's in every options lesson — every chart in the course is live,
        not a screenshot.
      </p>
    </div>
  );
}

function Features() {
  const items = [
    {
      title: "Learn by doing",
      body: "Every options lesson comes with the real interactive payoff tool. Change strikes, premiums, even volatility, and watch max profit, max loss, and breakeven recalculate live.",
    },
    {
      title: "Prove it, don't just read it",
      body: "Each lesson ends with a short check: given a fresh set of numbers, work out the max profit or loss yourself. The numbers are randomized every attempt, so there's nothing to memorize.",
    },
    {
      title: "One course per asset class",
      body: "The curriculum spans 18 asset classes, from options to distressed debt to cryptocurrencies. Each one gets its own course here, ordered so complex strategies build on simpler ones instead of feeling like a new vocabulary.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-[#2a3040] bg-[#141821] p-6">
            <h3 className="mb-2 font-semibold text-[#e6e8ec]">{it.title}</h3>
            <p className="text-sm leading-relaxed text-[#9aa3b2]">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CoursesPreview() {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    fetchCourses().then(setCourses).catch(() => setCourses(null));
  }, []);

  return (
    <section id="courses" className="border-t border-[#2a3040] bg-[#0e1117] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-[#e6e8ec]">18 courses, one per asset class</h2>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          Options is live with 58 strategies across 12 modules. The rest are on the roadmap, each
          with its real strategy list already mapped out.
        </p>

        {courses && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {courses.map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className={`flex flex-col rounded-xl border p-5 transition ${
                  c.status === "available"
                    ? "border-[#2a3040] bg-[#141821] hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
                    : "border-[#2a3040]/60 bg-[#101319] hover:border-[#2a3040]"
                }`}
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-[#e6e8ec]">{c.title}</h3>
                  {c.status === "available" ? (
                    <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      Available
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">{c.description}</p>
                <div className="mt-auto pt-3 text-xs text-[#898781]">{c.strategyCount} strategies</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#e6e8ec]">Ready to start?</h2>
      <p className="mx-auto mt-2 max-w-md text-[#9aa3b2]">
        Create a free account to save your progress and unlock modules as you complete them.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/signup"
          className="rounded-lg bg-[#4f8cff] px-5 py-2.5 font-medium text-white hover:bg-[#3d7ce0]"
        >
          Sign up free
        </Link>
        <Link to="/login" className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
          Already have an account? Sign in
        </Link>
      </div>
    </section>
  );
}

