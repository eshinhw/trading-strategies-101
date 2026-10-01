import { Link } from "react-router-dom";

// Static for now — practice tools aren't curriculum content from the API,
// just standalone routes. Add an entry here for each new tool.
const PRACTICE_TOOLS = [
  {
    slug: "option-payout-simulator",
    title: "Option Payout Simulator",
    description:
      "Pick any strategy from the Options course — covered calls, straddles, condors, and everything else — and freely tweak strikes, premiums, and volatility to see max profit, max loss, and breakeven recalculate live.",
    tag: "Options",
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            to={`/practice/${tool.slug}`}
            className="flex flex-col rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5 transition hover:border-[#7c6cff]/50 hover:bg-[#171c26]"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <h3 className="font-semibold text-[#e6e8ec]">{tool.title}</h3>
              <span className="shrink-0 rounded-full border border-[#7c6cff]/30 bg-[#7c6cff]/10 px-2 py-0.5 text-xs font-medium text-[#7c6cff]">
                {tool.tag}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
