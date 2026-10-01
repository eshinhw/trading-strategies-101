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

// Greek letters used for option Greeks (Delta, Theta, Gamma, Vega, Sigma, Rho) — a quiet nod to
// the quantitative side of options, drifting slowly behind the hero text. Purely decorative, so
// it's aria-hidden and never intercepts clicks.
const HERO_SYMBOLS = [
  { char: "Δ", left: "6%", top: "12%", delay: "0s" },
  { char: "Θ", left: "92%", top: "10%", delay: "1.2s" },
  { char: "Γ", left: "16%", top: "72%", delay: "2.1s" },
  { char: "ν", left: "80%", top: "68%", delay: "0.6s" },
  { char: "σ", left: "50%", top: "6%", delay: "3s" },
  { char: "ρ", left: "38%", top: "82%", delay: "1.8s" },
];

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #7c6cff, transparent)" }}
      />
      <svg className="absolute inset-x-0 top-6 h-14 w-full opacity-40" viewBox="0 0 1100 60" preserveAspectRatio="none">
        <polyline
          points="0,40 60,35 120,42 180,28 240,33 300,20 360,26 420,15 480,22 540,12 600,18 660,8 720,14 780,6 840,12 900,4 960,10 1020,2 1080,8"
          fill="none"
          stroke="#7c6cff"
          strokeWidth="2"
        />
      </svg>
      {HERO_SYMBOLS.map(({ char, left, top, delay }) => (
        <span
          key={char}
          className="absolute font-serif text-4xl text-[#7c6cff] opacity-[0.09]"
          style={{ left, top, animation: "hero-symbol-drift 9s ease-in-out infinite", animationDelay: delay }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#2a3040]">
      <HeroBackground />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#e6e8ec] sm:text-5xl">
            Master trading strategies by understanding, not memorizing.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#9aa3b2]">
            Learn trading strategies by doing—not just reading. Explore real-world lessons across options, commodities,
            and more, test your knowledge as you go, and use interactive payoff tools to see how strategies perform in
            real time for options.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/signup"
              className="rounded-lg bg-[#7c6cff] px-5 py-2.5 font-medium text-white hover:bg-[#6552f0]"
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

  return (
    <section id="courses" className="border-t border-[#2a3040] bg-[#0e1117] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-[#e6e8ec]">18 courses, one per asset class</h2>

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
        <Link to="/signup" className="rounded-lg bg-[#7c6cff] px-5 py-2.5 font-medium text-white hover:bg-[#6552f0]">
          Sign up free
        </Link>
        <Link to="/login" className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
          Already have an account? Sign in
        </Link>
      </div>
    </section>
  );
}
