import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../api";
import type { Course } from "../types/course";
import { RolePicker } from "../components/RolePicker";
import { AssetMap } from "../components/AssetMap";
import { RiskRewardHero } from "../components/RiskRewardHero";
import { Reveal } from "../components/Reveal";
import { TryItSection } from "../components/TryItSection";
import { PayoffPlayground } from "../components/PayoffPlayground";
import { Faq } from "../components/Faq";

export function LandingPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch(() => setCourses(null));
  }, []);

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
      <Hero courses={courses} />
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <PayoffPlayground />
      </Reveal>
      <Reveal>
        <TryItSection />
      </Reveal>
      <Reveal>
        <AssetMap courses={courses} />
      </Reveal>
      <Reveal>
        <RolePicker courses={courses} />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <FinalCta />
    </div>
  );
}

// Asset-class tickers spanning the curriculum (equities/index options, commodities, crypto, rates,
// metals, credit) — a quiet nod to the breadth of the platform, drifting slowly behind the hero
// text. Purely decorative, so it's aria-hidden and never intercepts clicks.
const HERO_SYMBOLS = [
  { char: "SPX", left: "6%", top: "12%", delay: "0s" },
  { char: "WTI", left: "92%", top: "10%", delay: "1.2s" },
  { char: "BTC", left: "16%", top: "72%", delay: "2.1s" },
  { char: "10Y", left: "80%", top: "68%", delay: "0.6s" },
  { char: "XAU", left: "50%", top: "6%", delay: "3s" },
  { char: "CDS", left: "38%", top: "82%", delay: "1.8s" },
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
          className="absolute font-mono text-2xl tracking-wider text-[#7c6cff] opacity-[0.09]"
          style={{ left, top, animation: "hero-symbol-drift 9s ease-in-out infinite", animationDelay: delay }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function Hero({ courses }: { courses: Course[] | null }) {
  const totalLessons = (courses ?? []).reduce((n, c) => n + (c.lessonCount ?? 0), 0);
  const totalStrategies = (courses ?? []).reduce((n, c) => n + c.strategyCount, 0);
  return (
    <section className="relative overflow-hidden border-b border-[#2a3040]">
      <HeroBackground />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#e6e8ec] sm:text-5xl">
            Master trading strategies by understanding, not memorizing.
          </h1>
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
          <div className="mt-8 flex min-h-[52px] gap-8 border-t border-[#2a3040] pt-5">
            {courses && (
              <>
                {[
                  [courses.length, "courses"],
                  [totalLessons, "lessons"],
                  [totalStrategies, "strategies"],
                ].map(([n, label]) => (
                  <div key={label} className="rr-point">
                    <div className="text-2xl font-bold leading-none text-[#e6e8ec]">{n}</div>
                    <div className="mt-1 text-xs text-[#898781]">{label}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <RiskRewardHero />
      </div>
    </section>
  );
}

// One small illustration per core value. Purely decorative, so each is aria-hidden.
function AssetGridVisual() {
  const opacities = [1, 0.55, 0.8, 0.4, 0.9, 0.6, 0.5, 1, 0.7, 0.45, 0.85, 0.6, 0.75, 0.5, 1, 0.65, 0.4, 0.9];
  return (
    <div aria-hidden="true">
      <div className="grid grid-cols-9 gap-1.5">
        {opacities.map((o, i) => (
          <div
            key={i}
            className="aspect-square rounded-md bg-[#7c6cff] transition-transform duration-300 group-hover:scale-110"
            style={{ opacity: o, transitionDelay: `${i * 12}ms` }}
          />
        ))}
      </div>
      <div className="mt-2 text-xs text-[#898781]">18 asset classes, one shared foundation</div>
    </div>
  );
}

function TheoryVsPracticeVisual() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      <div>
        <div className="mb-1 flex justify-between text-xs text-[#898781]">
          <span>Theory</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-[#1b2029]">
          <div className="h-full w-1/5 rounded-full bg-[#4a5263]" />
        </div>
      </div>
      <div>
        <div className="mb-1 flex justify-between text-xs text-[#e6e8ec]">
          <span>What you'll actually use</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-[#1b2029]">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#7c6cff] to-[#a99dff] transition-all duration-500 group-hover:w-[92%]" />
        </div>
      </div>
    </div>
  );
}

function RepetitionVisual() {
  const heights = [28, 42, 55, 70, 88];
  return (
    <div aria-hidden="true">
      <div className="flex h-16 items-end gap-2">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#7c6cff]/40 to-[#7c6cff] transition-all duration-500"
            style={{ height: `${h}%`, opacity: 0.45 + i * 0.14 }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-[#898781]">
        <span>Attempt 1</span>
        <span>Fresh questions every time</span>
      </div>
    </div>
  );
}

function ValueIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7c6cff]/30 bg-[#7c6cff]/15 text-[#a99dff]">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  );
}

function Features() {
  const items = [
    {
      number: "01",
      title: "Core knowledge for every professional",
      body: "What each asset is, why it exists, and how it's priced and used, across 18 asset classes.",
      icon: (
        <>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 17.5 9 5 9-5" opacity="0.5" />
        </>
      ),
      visual: <AssetGridVisual />,
    },
    {
      number: "02",
      title: "Practical, with minimum theory",
      body: "Short explainers, a worked example in every lesson, and only the formulas that matter.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </>
      ),
      visual: <TheoryVsPracticeVisual />,
    },
    {
      number: "03",
      title: "Hands-on practice, maximum repetition",
      body: "A quiz after every lesson, a fresh final quiz each attempt, and a payoff simulator to rebuild positions freely.",
      icon: (
        <>
          <path d="M17 2 21 6l-4 4" />
          <path d="M3 11V9a3 3 0 0 1 3-3h15" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v2a3 3 0 0 1-3 3H3" />
        </>
      ),
      visual: <RepetitionVisual />,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#1b2030] to-[#12151d] p-7 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-[#7c6cff]/50"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c6cff] to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7c6cff]/10 blur-3xl transition group-hover:bg-[#7c6cff]/20" />
            <div className="pointer-events-none absolute right-5 top-4 select-none text-5xl font-bold text-[#7c6cff]/10">
              {it.number}
            </div>

            <ValueIcon>{it.icon}</ValueIcon>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[#e6e8ec]">{it.title}</h3>
            <p className="mb-6 mt-2 text-sm leading-relaxed text-[#9aa3b2]">{it.body}</p>
            <div className="mt-auto border-t border-[#2a3040] pt-5">{it.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#e6e8ec]">Ready to start?</h2>
      <p className="mx-auto mt-2 max-w-md text-[#9aa3b2]">
        Save your progress and unlock modules as you complete them.
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
