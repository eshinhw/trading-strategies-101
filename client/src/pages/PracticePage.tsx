import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { fetchConstructionExercises } from "../api";
import type { ConstructionExerciseSummary } from "../types/construction";
import { ACCENT } from "../lib/courseVisuals";
import { SIMULATOR_PRESETS } from "../lib/simulatorPresets";

// Illustrative payoff shapes the featured card cycles through (SVG units: zero line at y=120, higher
// profit = smaller y). They preview what the simulator draws; they aren't computed from real inputs.
interface PreviewExample {
  name: string;
  legs: string[];
  points: [number, number][];
  /** mark the lowest point (the strike) — only meaningful for a single V-shaped payoff */
  markLow?: boolean;
}

const ZERO_Y = 120;
const EXAMPLES: PreviewExample[] = [
  { name: "Long straddle", legs: ["+1 Call", "+1 Put"], points: [[0, 20], [180, 186], [360, 20]], markLow: true },
  { name: "Bull call spread", legs: ["+1 Call", "−1 Call"], points: [[0, 170], [130, 170], [230, 70], [360, 70]] },
  {
    name: "Long iron condor",
    legs: ["+1 Put", "−1 Put", "−1 Call", "+1 Call"],
    points: [[0, 165], [85, 165], [145, 75], [215, 75], [275, 165], [360, 165]],
  },
  { name: "Covered call", legs: ["+100 Stock", "−1 Call"], points: [[0, 200], [230, 60], [360, 60]] },
  {
    name: "Long call butterfly",
    legs: ["+1 Call", "−2 Call", "+1 Call"],
    points: [[0, 160], [100, 160], [180, 60], [260, 160], [360, 160]],
  },
];

function breakevensOf(points: [number, number][]): number[] {
  const out: number[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    if ((y1 - ZERO_Y) * (y2 - ZERO_Y) < 0) out.push(x1 + ((ZERO_Y - y1) / (y2 - y1)) * (x2 - x1));
  }
  return out;
}

function PayoffPreview({ example }: { example: PreviewExample }) {
  const line = example.points.map(([x, y]) => `${x},${y}`).join(" ");
  const first = example.points[0];
  const last = example.points[example.points.length - 1];
  const area = `M${first[0]},${first[1]} ${example.points
    .slice(1)
    .map(([x, y]) => `L${x},${y}`)
    .join(" ")} L${last[0]},${ZERO_Y} L${first[0]},${ZERO_Y} Z`;
  const breakevens = breakevensOf(example.points);
  const low = example.points.reduce((a, p) => (p[1] > a[1] ? p : a));

  return (
    <svg viewBox="0 0 360 210" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pp-profit" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="1" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pp-loss" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0" stopColor="#f87171" stopOpacity="0.4" />
          <stop offset="1" stopColor="#f87171" stopOpacity="0" />
        </linearGradient>
        <clipPath id="pp-top">
          <rect x="0" y="0" width="360" height={ZERO_Y} />
        </clipPath>
        <clipPath id="pp-bottom">
          <rect x="0" y={ZERO_Y} width="360" height={210 - ZERO_Y} />
        </clipPath>
      </defs>
      {[30, 70, 110, 150, 190].map((y) => (
        <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="#2a3040" strokeOpacity="0.55" strokeDasharray="2 5" />
      ))}
      {[60, 120, 180, 240, 300].map((x) => (
        <line key={x} x1={x} x2={x} y1="14" y2="196" stroke="#2a3040" strokeOpacity="0.45" strokeDasharray="2 5" />
      ))}
      <line x1="0" x2="360" y1={ZERO_Y} y2={ZERO_Y} stroke="#9aa3b2" strokeOpacity="0.5" />

      {/* keyed on the example so each one fades in when the preview changes */}
      <g key={example.name} className="rr-point">
        <path d={area} fill="url(#pp-profit)" clipPath="url(#pp-top)" />
        <path d={area} fill="url(#pp-loss)" clipPath="url(#pp-bottom)" />
        <polyline
          points={line}
          fill="none"
          stroke="#7c6cff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 6px rgba(124,108,255,0.7))" }}
        />
        <g fill="#0e1117" stroke="#e6e8ec" strokeWidth="1.5">
          {breakevens.map((x) => (
            <circle key={x} cx={x} cy={ZERO_Y} r="4" />
          ))}
        </g>
        {example.markLow && low[1] > ZERO_Y && <circle cx={low[0]} cy={low[1]} r="4.5" fill="#7c6cff" />}
        <g fontSize="10" fill="#9aa3b2" textAnchor="middle">
          {breakevens.map((x) => (
            <text key={x} x={x} y={ZERO_Y - 10}>
              Break-even
            </text>
          ))}
        </g>
      </g>
      <g fontSize="10">
        <text x="8" y="14" fill="#34d399">
          Profit
        </text>
        <text x="8" y="204" fill="#f87171">
          Loss
        </text>
      </g>
    </svg>
  );
}

function AnimatedPreview() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % EXAMPLES.length), 3400);
    return () => window.clearInterval(id);
  }, [paused]);

  const example = EXAMPLES[index];
  return (
    <div
      className="relative min-h-[260px] border-t border-[#2a3040] bg-[#0e1117] p-5 lg:border-l lg:border-t-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-x-5 top-4 z-10 flex items-start justify-between gap-3">
        <div className="text-sm font-semibold text-[#e6e8ec]">{example.name}</div>
        <div key={example.name} className="rr-point flex flex-wrap justify-end gap-1.5">
          {example.legs.map((leg, i) => (
            <span
              key={i}
              className="rounded-md border border-[#2a3040] bg-[#141821] px-2 py-0.5 text-[11px] font-medium text-[#9aa3b2]"
            >
              {leg}
            </span>
          ))}
        </div>
      </div>
      <div className="flex h-full items-center pt-6">
        <PayoffPreview example={example} />
      </div>
      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-[11px] text-[#898781]">
        <span>Example output</span>
        <div className="flex items-center gap-1.5">
          {EXAMPLES.map((e, i) => (
            <button
              key={e.name}
              onClick={(ev) => {
                ev.preventDefault();
                setIndex(i);
              }}
              aria-label={`Show ${e.name}`}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === index ? 18 : 6, background: i === index ? ACCENT.derivatives : "#2a3040" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  "Set the entry price and expiry assumptions",
  "Add legs: stock, calls and puts, long or short",
  "Read the payoff, break-evens and max profit or loss",
  "See which named strategy you've built",
];

function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section>
      <div className="flex items-start gap-3">
        <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-[#7c6cff] shadow-[0_0_14px_#7c6cff80]" />
        <div>
          <h2 className="text-xl font-bold text-[#e6e8ec]">{title}</h2>
          <p className="mt-0.5 text-sm text-[#9aa3b2]">{description}</p>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function PracticePage() {
  const [exercises, setExercises] = useState<ConstructionExerciseSummary[]>([]);
  const accent = ACCENT.derivatives;

  useEffect(() => {
    fetchConstructionExercises()
      .then(setExercises)
      .catch(() => setExercises([]));
  }, []);

  return (
    <div>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Hands-on</div>
            <h1 className="mt-2 text-4xl font-bold text-[#e6e8ec]">Practice</h1>
            <p className="mt-3 leading-relaxed text-[#9aa3b2]">
              Interactive tools for drilling the concepts and strategies covered throughout the courses. Build things,
              break things, and get a feel for how each strategy behaves.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10">
        <Section title="Simulators" description="Sandboxes with no lesson or quiz attached, just a place to build intuition.">
          <div className="relative grid overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow transition duration-200 hover:border-[#7c6cff]/50 lg:grid-cols-[1fr_1.1fr]">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: accent, opacity: 0.12 }}
            />
            <div className="relative flex flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#e6e8ec]">Options Payoff Simulator</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">
                Build a position leg by leg, stock, calls, puts, long or short, and watch the payoff update live. If what
                you build matches a strategy from the course, its explanation shows up automatically.
              </p>
              <ol className="mt-5 flex flex-col gap-2.5">
                {STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#e6e8ec]">
                    <span
                      className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-[#0b0d12]"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                to="/practice/options-payoff-simulator"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110"
                style={{ background: accent }}
              >
                Open the simulator <span aria-hidden="true">→</span>
              </Link>

              <div className="mt-6 border-t border-[#2a3040] pt-4">
                <div className="mb-2 text-xs text-[#898781]">Or jump in with a ready-made position</div>
                <div className="flex flex-wrap gap-1.5">
                  {SIMULATOR_PRESETS.map((p) => (
                    <Link
                      key={p.id}
                      to={`/practice/options-payoff-simulator?preset=${p.id}`}
                      className="rounded-full border border-[#2a3040] px-3 py-1 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10 hover:text-[#e6e8ec]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <AnimatedPreview />
          </div>
        </Section>

        <Section title="More ways to practice" description="Beyond the simulator, every course has built-in practice.">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-[#2a3040] bg-[#141821] p-5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl border text-lg"
                style={{ background: `${accent}22`, borderColor: `${accent}55` }}
                aria-hidden="true"
              >
                🛠
              </span>
              <h3 className="mt-3 font-semibold text-[#e6e8ec]">Construction exercises</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">
                You get a goal and no hint, then pick and configure the strategy yourself.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {exercises.slice(0, 3).map((ex) => (
                  <li key={ex.slug}>
                    <Link
                      to={`/construction/${ex.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-lg border border-[#2a3040] bg-[#0e1117] px-3 py-2 text-sm text-[#e6e8ec] transition hover:border-[#7c6cff]/50"
                    >
                      <span className="truncate">{ex.title}</span>
                      <span aria-hidden="true" className="shrink-0 text-[#a99dff] transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
                {exercises.length === 0 && <li className="text-sm text-[#898781]">Open the Options course to find them.</li>}
              </ul>
            </div>

            <Link
              to="/courses"
              className="group flex flex-col rounded-2xl border border-[#2a3040] bg-[#141821] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#7c6cff]/50"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl border text-lg"
                style={{ background: `${ACCENT.rates}22`, borderColor: `${ACCENT.rates}55` }}
                aria-hidden="true"
              >
                ✅
              </span>
              <h3 className="mt-3 font-semibold text-[#e6e8ec]">Lesson knowledge checks</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">
                Every lesson ends with a short quiz that explains each answer as you go, the fastest way to see what stuck.
              </p>
              <span className="mt-auto pt-4 text-sm font-medium text-[#a99dff]">
                Browse courses <span className="inline-block transition group-hover:translate-x-0.5">→</span>
              </span>
            </Link>

            <Link
              to="/courses"
              className="group flex flex-col rounded-2xl border border-[#2a3040] bg-[#141821] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#7c6cff]/50"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl border text-lg"
                style={{ background: `${ACCENT.macro}22`, borderColor: `${ACCENT.macro}55` }}
                aria-hidden="true"
              >
                🏁
              </span>
              <h3 className="mt-3 font-semibold text-[#e6e8ec]">Final quizzes</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">
                Finish a course's modules to unlock a no-hints test across all of it, with a fresh set of questions each
                attempt.
              </p>
              <span className="mt-auto pt-4 text-sm font-medium text-[#a99dff]">
                Pick a course <span className="inline-block transition group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
}
