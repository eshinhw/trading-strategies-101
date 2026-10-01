import { Link } from "react-router-dom";

// A tiny, static payoff-curve illustration (a long-straddle-ish V shape) — just a visual preview
// for the catalog card, not the real chart, so it costs nothing to render (no recharts, no data).
function PayoffSimulatorPreview() {
  return (
    <svg viewBox="0 0 280 90" className="h-full w-full" aria-hidden="true">
      <polygon points="0,10 100,75 100,45 0,45" fill="#34d399" fillOpacity="0.25" />
      <polygon points="180,75 280,10 280,45 180,45" fill="#34d399" fillOpacity="0.25" />
      <polygon points="100,75 140,85 180,75 180,45 100,45" fill="#f87171" fillOpacity="0.25" />
      <line x1="0" y1="45" x2="280" y2="45" stroke="#2a3040" strokeWidth="1" strokeDasharray="4 3" />
      <polyline
        points="0,10 100,75 140,85 180,75 280,10"
        fill="none"
        stroke="#7c6cff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Static for now — practice tools aren't curriculum content from the API,
// just standalone routes. Add an entry here for each new tool.
const PRACTICE_TOOLS = [
  {
    slug: "option-payout-simulator",
    title: "Option Payout Simulator",
    description:
      "Build a position leg by leg — stock, calls, puts, long or short — and watch the payoff update live. If what you build matches a strategy from the course, its explanation shows up automatically.",
    tag: "Options",
    preview: <PayoffSimulatorPreview />,
  },
];

export function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Practice</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          Interactive tools for drilling the concepts and strategies covered throughout the courses — no lesson or
          quiz attached, just a sandbox to build intuition.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PRACTICE_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            to={`/practice/${tool.slug}`}
            className="flex flex-col overflow-hidden rounded-xl border border-[#2a3040] bg-[#141821] card-glow transition hover:border-[#7c6cff]/50 hover:bg-[#171c26]"
          >
            {tool.preview && <div className="h-24 border-b border-[#2a3040] bg-[#0e1117] p-3">{tool.preview}</div>}
            <div className="flex flex-col p-5">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[#e6e8ec]">{tool.title}</h3>
                <span className="shrink-0 rounded-full border border-[#7c6cff]/30 bg-[#7c6cff]/10 px-2 py-0.5 text-xs font-medium text-[#7c6cff]">
                  {tool.tag}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
