import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../api";
import type { Course } from "../types/course";
import { CourseCard } from "../components/CourseCard";

// Lazy-loaded because it's the only landing-page component that pulls in
// recharts (via PayoffChart) — see HeroDemo.tsx for why this split exists.
const HeroDemo = lazy(() => import("../components/HeroDemo").then((m) => ({ default: m.HeroDemo })));

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
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#e6e8ec] sm:text-5xl">
            Master trading strategies by understanding them, not memorizing.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#9aa3b2]">
            Learn trading strategies by doing—not just reading. Explore real-world lessons across options, commodities,
            and more, test your knowledge as you go, and use interactive payoff tools to see how strategies perform in
            real time for options.
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
          <p className="mt-4 text-sm text-[#898781]">Browse and try any lesson before you sign up.</p>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[458px] items-center justify-center rounded-2xl border border-[#2a3040] bg-[#141821] card-glow text-sm text-[#898781]">
              Loading demo…
            </div>
          }
        >
          <HeroDemo />
        </Suspense>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "Learn by doing",
      body: "Options lessons come with a real interactive payoff tool — change strikes, premiums, even volatility, and watch max profit, max loss, and breakeven recalculate live. Every other course pairs a focused explainer with a knowledge-check quiz after each lesson.",
    },
    {
      title: "Prove it, don't just read it",
      body: "Every lesson ends with a knowledge check, and every course wraps up with a final quiz pulling questions from across the whole curriculum. In Options, that means working out max profit or loss from a fresh set of numbers each attempt — nothing to memorize.",
    },
    {
      title: "One course per asset class",
      body: "The curriculum spans 18 asset classes, from options to distressed debt to cryptocurrencies. A growing set of courses is live already, with the rest ordered so complex strategies build on simpler ones instead of feeling like a new vocabulary.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-6">
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
    fetchCourses()
      .then(setCourses)
      .catch(() => setCourses(null));
  }, []);

  const availableCount = courses?.filter((c) => c.status === "available").length;

  return (
    <section id="courses" className="border-t border-[#2a3040] bg-[#0e1117] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-[#e6e8ec]">18 courses, one per asset class</h2>
        {availableCount !== undefined && (
          <p className="mt-2 text-[#9aa3b2]">{availableCount} available now — the rest are on the roadmap.</p>
        )}

        {courses && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#e6e8ec]">Ready to start?</h2>
      <p className="mx-auto mt-2 max-w-md text-[#9aa3b2]">
        Create a free account to save your progress and unlock modules as you complete them.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link to="/signup" className="rounded-lg bg-[#4f8cff] px-5 py-2.5 font-medium text-white hover:bg-[#3d7ce0]">
          Sign up free
        </Link>
        <Link to="/login" className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
          Already have an account? Sign in
        </Link>
      </div>
    </section>
  );
}
