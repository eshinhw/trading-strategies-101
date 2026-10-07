import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { fetchBankCourses, fetchConstructionExercises } from "../api";
import type { ConstructionExerciseSummary } from "../types/construction";
import type { BankCourse } from "../types/practice";
import { ACCENT } from "../lib/courseVisuals";
import { SIMULATOR_PRESETS } from "../lib/simulatorPresets";
import { AnswerProgressBar } from "../components/AnswerProgressBar";

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

function AnimatedPreview({ compact = false }: { compact?: boolean }) {
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
      className={
        compact
          ? "relative h-full bg-[#0e1117] p-4"
          : "relative min-h-[260px] border-t border-[#2a3040] bg-[#0e1117] p-5 lg:border-l lg:border-t-0"
      }
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`absolute z-10 flex items-start justify-between gap-3 ${compact ? "inset-x-4 top-3" : "inset-x-5 top-4"}`}>
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
      <div className={`flex h-full items-center ${compact ? "pb-4 pt-5" : "pt-6"}`}>
        <PayoffPreview example={example} />
      </div>
      <div className={`absolute flex items-center justify-between text-[11px] text-[#898781] ${compact ? "bottom-2 left-4 right-4" : "bottom-3 left-5 right-5"}`}>
        <span>{compact ? "" : "Example output"}</span>
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

// Counts up to `target` once it is known (instantly for reduced motion), so the headline number lands with a little life.
function useCountUp(target: number | null, ms = 900): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (target === null) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / ms);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return value;
}

function QuizBankStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#0e1117]/70 px-3.5 py-2.5">
      <div className="text-xl font-bold tabular-nums text-[#e6e8ec]">{value}</div>
      <div className="text-[11px] text-[#898781]">{label}</div>
    </div>
  );
}

const QUIZ_BANK_POINTS = [
  "Pick any mix of courses, or a single module",
  "Instant explanations and a streak counter",
  "Retry the questions you missed",
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

function GreeksPreview() {
  return (
    <svg viewBox="0 0 280 150" className="h-full w-full p-4" aria-hidden="true">
      {[30, 60, 90, 120].map((y) => (
        <line key={y} x1="0" x2="280" y1={y} y2={y} stroke="#2a3040" strokeOpacity="0.5" strokeDasharray="2 5" />
      ))}
      <line x1="140" x2="140" y1="8" y2="140" stroke="#a99dff" strokeOpacity="0.35" strokeDasharray="4 4" />
      {/* delta: an S-curve from 0 to 1 */}
      <path d="M0 132 C80 130 100 124 140 78 S200 22 280 20" fill="none" stroke="#7c6cff" strokeWidth="2.5" strokeLinecap="round" />
      {/* gamma: a bell centred on the strike */}
      <path d="M0 138 C70 138 100 128 140 52 C180 128 210 138 280 138" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
      {/* theta: a dip at the strike */}
      <path d="M0 40 C70 42 100 54 140 100 C180 54 210 42 280 40" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 0" />
      <g fontSize="10" fontWeight="600">
        <text x="228" y="14" fill="#7c6cff">Delta</text>
        <text x="146" y="40" fill="#34d399">Gamma</text>
        <text x="8" y="32" fill="#fbbf24">Theta</text>
      </g>
    </svg>
  );
}

function ToolCard({
  to,
  title,
  description,
  cta,
  preview,
  tint,
  footer,
}: {
  to: string;
  title: string;
  description: string;
  cta: string;
  preview: ReactNode;
  tint: string;
  /** extra links under the card; they sit outside the card's own link so they can be links too */
  footer?: ReactNode;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow transition duration-200 hover:-translate-y-0.5 hover:border-[#7c6cff]/50">
      <Link to={to} className="flex flex-1 flex-col">
        <div className="relative h-[220px] border-b border-[#2a3040] bg-[#0e1117]">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl" style={{ background: tint, opacity: 0.14 }} />
          <div className="relative h-full">{preview}</div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-bold text-[#e6e8ec]">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9aa3b2]">{description}</p>
          <span className="mt-auto pt-4 text-sm font-semibold text-[#a99dff]">
            {cta} <span className="inline-block transition group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </Link>
      {footer && <div className="border-t border-[#2a3040] px-5 py-4">{footer}</div>}
    </div>
  );
}

// A larger version of the Quiz Bank card's preview for the featured slot: a question mid-session, with the
// green/red progress bar showing how the earlier answers went.
function QuizBankFeaturedPreview() {
  const choices = ["Intrinsic value and time value", "Strike and expiration", "Delta and gamma"];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6 sm:p-8" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#898781]">Question 5 of 10</span>
        <span className="rounded-full border border-amber-400/50 bg-amber-400/15 px-2 py-0.5 text-[11px] font-medium text-amber-300">
          Streak 2
        </span>
      </div>
      <AnswerProgressBar
        accent={ACCENT.rates}
        label="Example progress"
        statuses={["correct", "correct", "wrong", "correct", "current", "pending", "pending", "pending", "pending", "pending"]}
      />
      <div className="mt-1 text-base font-medium text-[#e6e8ec]">What are the two parts of an option's premium?</div>
      {choices.map((c, i) => (
        <div
          key={c}
          className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm ${
            i === 0 ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-200" : "border-[#2a3040] text-[#898781]"
          }`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${
              i === 0 ? "bg-emerald-500 text-[#06281c]" : "bg-[#1b2029]"
            }`}
          >
            {i === 0 ? "✓" : String.fromCharCode(65 + i)}
          </span>
          {c}
        </div>
      ))}
    </div>
  );
}

// Courses to jump straight into from the Quiz Bank card (the Quiz Bank itself opens with that course selected).
const QUIZ_BANK_COURSES = [
  { slug: "options", title: "Options" },
  { slug: "futures", title: "Futures" },
  { slug: "forwards", title: "Forwards" },
  { slug: "stocks", title: "Stocks" },
  { slug: "fixed-income", title: "Fixed Income" },
  { slug: "fx", title: "Foreign Exchange" },
  { slug: "volatility", title: "Volatility" },
  { slug: "commodities", title: "Commodities" },
];

const GREEK_LINKS = [
  { id: "delta", label: "Delta" },
  { id: "gamma", label: "Gamma" },
  { id: "theta", label: "Theta" },
  { id: "vega", label: "Vega" },
  { id: "rho", label: "Rho" },
];

export function PracticePage() {
  const [exercises, setExercises] = useState<ConstructionExerciseSummary[]>([]);
  const [bank, setBank] = useState<BankCourse[] | null>(null);
  const accent = ACCENT.derivatives;
  const totalQuestions = bank ? bank.reduce((n, c) => n + c.questionCount, 0) : null;
  const totalModules = bank ? bank.reduce((n, c) => n + c.modules.length, 0) : null;
  const animatedTotal = useCountUp(totalQuestions);
  const countBySlug = new Map((bank ?? []).map((c) => [c.slug, c.questionCount]));

  useEffect(() => {
    fetchConstructionExercises()
      .then(setExercises)
      .catch(() => setExercises([]));
    fetchBankCourses()
      .then(setBank)
      .catch(() => setBank([]));
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
              Interactive tools for drilling what the courses teach.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10">
        <Section title="Practice tools" description="Build intuition and get the repetitions in. None of these affect your course progress.">
          <div className="relative grid overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow transition duration-200 hover:border-[#7c6cff]/50 lg:grid-cols-[1fr_1.1fr]">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: ACCENT.rates, opacity: 0.12 }}
            />
            <div className="relative flex flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#e6e8ec]">Quiz Bank</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">Mixed questions from every lesson's knowledge check.</p>
              <div className="mt-5 grid grid-cols-3 gap-2.5" aria-label="Quiz Bank size">
                {bank === null ? (
                  [0, 1, 2].map((i) => <div key={i} className="h-[58px] animate-pulse rounded-xl border border-[#2a3040] bg-[#0e1117]/70" />)
                ) : totalQuestions ? (
                  <>
                    <QuizBankStat value={animatedTotal.toLocaleString()} label="practice questions" />
                    <QuizBankStat value={String(bank.length)} label="courses" />
                    <QuizBankStat value={String(totalModules)} label="modules to target" />
                  </>
                ) : null}
              </div>
              <ol className="mt-5 flex flex-col gap-2.5">
                {QUIZ_BANK_POINTS.map((point, i) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#e6e8ec]">
                    <span
                      className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-[#0b0d12]"
                      style={{ background: ACCENT.rates }}
                    >
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ol>
              <Link
                to="/practice/quiz-bank"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110"
                style={{ background: ACCENT.rates }}
              >
                Open the Quiz Bank <span aria-hidden="true">→</span>
              </Link>

              <div className="mt-6 border-t border-[#2a3040] pt-4">
                <div className="mb-2 text-xs text-[#898781]">
                  Or jump straight into a course{bank?.length ? " (questions available)" : ""}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {QUIZ_BANK_COURSES.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/practice/quiz-bank?course=${c.slug}`}
                      className="rounded-full border border-[#2a3040] px-3 py-1 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10 hover:text-[#e6e8ec]"
                    >
                      {c.title}
                      {countBySlug.has(c.slug) && (
                        <span className="ml-1.5 tabular-nums text-[#6b7280]">{countBySlug.get(c.slug)}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[260px] border-t border-[#2a3040] bg-[#0e1117] lg:border-l lg:border-t-0">
              <QuizBankFeaturedPreview />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ToolCard
              to="/practice/options-payoff-simulator"
              title="Options Payoff Simulator"
              description="Build a position leg by leg and watch the payoff update live. A match with a course strategy is explained automatically."
              cta="Open the simulator"
              preview={<AnimatedPreview compact />}
              tint={ACCENT.derivatives}
              footer={
                <>
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
                </>
              }
            />
            <ToolCard
              to="/practice/greeks-explorer"
              title="Greeks Explorer"
              description="Move the stock price, volatility, time and rates, and watch the price and every Greek respond."
              cta="Open the Greeks Explorer"
              preview={<GreeksPreview />}
              tint={ACCENT.derivatives}
              footer={
                <>
                  <div className="mb-2 text-xs text-[#898781]">Or jump straight to a Greek</div>
                  <div className="flex flex-wrap gap-1.5">
                    {GREEK_LINKS.map((g) => (
                      <Link
                        key={g.id}
                        to={`/practice/greeks-explorer?greek=${g.id}`}
                        className="rounded-full border border-[#2a3040] px-3 py-1 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10 hover:text-[#e6e8ec]"
                      >
                        {g.label}
                      </Link>
                    ))}
                  </div>
                </>
              }
            />
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
              to="/practice/quiz-bank"
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
                Every lesson ends with a short quiz that explains each answer. For more reps, the Quiz Bank mixes questions
                from any courses.
              </p>
              <span className="mt-auto pt-4 text-sm font-medium text-[#a99dff]">
                Open the Quiz Bank <span className="inline-block transition group-hover:translate-x-0.5">→</span>
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
                Finish a course's modules to unlock a no-hints test with fresh questions each attempt.
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
