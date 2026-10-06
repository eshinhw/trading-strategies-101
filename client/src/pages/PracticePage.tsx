import { Link } from "react-router-dom";
import { ACCENT } from "../lib/courseVisuals";

// A static payoff-curve illustration (a long-straddle V shape) — just a visual preview for the
// catalog card, not the real chart, so it costs nothing to render (no recharts, no data).
function PayoffSimulatorPreview() {
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
      </defs>
      {/* grid */}
      {[30, 70, 110, 150, 190].map((y) => (
        <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="#2a3040" strokeOpacity="0.55" strokeDasharray="2 5" />
      ))}
      {[60, 120, 180, 240, 300].map((x) => (
        <line key={x} x1={x} x2={x} y1="14" y2="196" stroke="#2a3040" strokeOpacity="0.45" strokeDasharray="2 5" />
      ))}
      {/* zero line */}
      <line x1="0" x2="360" y1="120" y2="120" stroke="#9aa3b2" strokeOpacity="0.5" />
      {/* profit wings and loss pocket */}
      <polygon points="0,20 118,120 0,120" fill="url(#pp-profit)" />
      <polygon points="242,120 360,20 360,120" fill="url(#pp-profit)" />
      <polygon points="118,120 180,186 242,120" fill="url(#pp-loss)" />
      {/* payoff line */}
      <polyline
        points="0,20 118,120 180,186 242,120 360,20"
        fill="none"
        stroke="#7c6cff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 6px rgba(124,108,255,0.7))" }}
      />
      {/* break-evens and strike */}
      <g fill="#0e1117" stroke="#e6e8ec" strokeWidth="1.5">
        <circle cx="118" cy="120" r="4" />
        <circle cx="242" cy="120" r="4" />
      </g>
      <line x1="180" x2="180" y1="14" y2="196" stroke="#7c6cff" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="180" cy="186" r="4.5" fill="#7c6cff" />
      <g fontSize="10" fill="#9aa3b2">
        <text x="180" y="207" textAnchor="middle">
          Strike
        </text>
        <text x="118" y="110" textAnchor="middle">
          Break-even
        </text>
        <text x="242" y="110" textAnchor="middle">
          Break-even
        </text>
        <text x="8" y="14" fill="#34d399">
          Profit
        </text>
        <text x="352" y="176" fill="#f87171" textAnchor="end">
          Max loss = premium paid
        </text>
      </g>
    </svg>
  );
}

// Static for now — practice tools aren't curriculum content from the API,
// just standalone routes. Add an entry here for each new tool.
const PRACTICE_TOOLS = [
  {
    slug: "options-payoff-simulator",
    title: "Options Payoff Simulator",
    description:
      "Build a position leg by leg — stock, calls, puts, long or short — and watch the payoff update live. If what you build matches a strategy from the course, its explanation shows up automatically.",
    tag: "Options",
    accent: ACCENT.derivatives,
    steps: [
      "Set the entry price and expiry assumptions",
      "Add legs: stock, calls and puts, long or short",
      "Read the payoff, break-evens and max profit or loss",
      "See which named strategy you've built",
    ],
    legs: ["+1 Call", "+1 Put"],
    preview: <PayoffSimulatorPreview />,
  },
];

export function PracticePage() {
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
              Interactive tools for drilling the concepts and strategies covered throughout the courses — no lesson or
              quiz attached, just a sandbox to build intuition.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10">
        {PRACTICE_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            to={`/practice/${tool.slug}`}
            className="group relative grid overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow transition duration-200 hover:border-[#7c6cff]/60 lg:grid-cols-[1fr_1.1fr]"
          >
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: tool.accent, opacity: 0.12 }}
            />
            <div className="relative flex flex-col p-6 sm:p-8">
              <span
                className="w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium"
                style={{ borderColor: `${tool.accent}55`, background: `${tool.accent}1a`, color: tool.accent }}
              >
                {tool.tag}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[#e6e8ec]">{tool.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">{tool.description}</p>
              <ol className="mt-5 flex flex-col gap-2.5">
                {tool.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#e6e8ec]">
                    <span
                      className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-[#0b0d12]"
                      style={{ background: tool.accent }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <span
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b0d12] transition group-hover:brightness-110"
                style={{ background: tool.accent }}
              >
                Open the simulator <span aria-hidden="true">→</span>
              </span>
            </div>

            <div className="relative min-h-[240px] border-t border-[#2a3040] bg-[#0e1117] p-5 lg:border-l lg:border-t-0">
              <div className="absolute right-4 top-4 flex gap-1.5">
                {tool.legs.map((leg) => (
                  <span
                    key={leg}
                    className="rounded-md border border-[#2a3040] bg-[#141821] px-2 py-0.5 text-[11px] font-medium text-[#9aa3b2]"
                  >
                    {leg}
                  </span>
                ))}
              </div>
              <div className="flex h-full items-center">{tool.preview}</div>
              <div className="absolute bottom-3 left-5 text-[11px] text-[#898781]">Long straddle · example output</div>
            </div>
          </Link>
        ))}

        <div className="rounded-2xl border border-dashed border-[#2a3040] p-6 text-center">
          <div className="text-sm font-semibold text-[#e6e8ec]">More practice tools are on the way</div>
          <p className="mx-auto mt-1 max-w-md text-sm text-[#898781]">
            In the meantime, every course lesson ends with a quiz — the fastest way to check what stuck.
          </p>
          <Link to="/courses" className="mt-3 inline-block text-sm text-[#a99dff] hover:underline">
            Browse courses →
          </Link>
        </div>
      </div>
    </div>
  );
}
