import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Course } from "../types/course";

// Landing-page version of the course card: a per-course icon and accent colour, lesson/module counts,
// and a hover lift. (The plain CourseCard is still used on the Courses page.)

const ACCENT = {
  derivatives: "#7c6cff",
  equities: "#5aa9ff",
  rates: "#2dd4bf",
  real: "#fbbf24",
  macro: "#f472b6",
  other: "#a3a9b8",
} as const;

const ACCENT_BY_COURSE: Record<string, string> = {
  forwards: ACCENT.derivatives,
  futures: ACCENT.derivatives,
  options: ACCENT.derivatives,
  volatility: ACCENT.derivatives,
  convertibles: ACCENT.derivatives,
  stocks: ACCENT.equities,
  etfs: ACCENT.equities,
  indexes: ACCENT.equities,
  "fixed-income": ACCENT.rates,
  cash: ACCENT.rates,
  "structured-assets": ACCENT.rates,
  "distressed-assets": ACCENT.rates,
  "tax-arbitrage": ACCENT.rates,
  commodities: ACCENT.real,
  "real-estate": ACCENT.real,
  fx: ACCENT.macro,
  "global-macro": ACCENT.macro,
  cryptocurrencies: ACCENT.macro,
  "miscellaneous-assets": ACCENT.other,
};

const ICONS: Record<string, ReactNode> = {
  forwards: (
    <>
      <path d="M4 12h13" />
      <path d="m13 7 5 5-5 5" />
      <circle cx="20" cy="12" r="1.2" fill="currentColor" />
    </>
  ),
  futures: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </>
  ),
  options: <polyline points="3 17 12 17 21 6" />,
  stocks: <polyline points="3 17 9 11 13 15 21 6" />,
  etfs: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v8h8" />
    </>
  ),
  "fixed-income": (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />
    </>
  ),
  indexes: <path d="M5 20V11M12 20V5M19 20v-7" />,
  volatility: <polyline points="2 12 6 4 10 20 14 4 18 20 22 12" />,
  fx: (
    <>
      <path d="M4 8h15m-3-3 3 3-3 3" />
      <path d="M20 16H5m3-3-3 3 3 3" />
    </>
  ),
  commodities: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M6 8h12M6 16h12" />
    </>
  ),
  "real-estate": (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10M10 20v-6h4v6" />
    </>
  ),
  "structured-assets": (
    <>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <rect x="4" y="10" width="16" height="4" rx="1" opacity="0.7" />
      <rect x="4" y="16" width="16" height="4" rx="1" opacity="0.45" />
    </>
  ),
  convertibles: (
    <>
      <path d="M17 3l3 3-3 3" />
      <path d="M4 11V9a3 3 0 0 1 3-3h13" />
      <path d="m7 21-3-3 3-3" />
      <path d="M20 13v2a3 3 0 0 1-3 3H4" />
    </>
  ),
  cash: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  cryptocurrencies: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m12 12 8-4.5M12 12v9M12 12 4 7.5" />
    </>
  ),
  "global-macro": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  "distressed-assets": (
    <>
      <path d="M12 4 2.5 20h19L12 4Z" />
      <path d="M12 10v4.5M12 17.5v.01" />
    </>
  ),
  "tax-arbitrage": (
    <>
      <path d="M5 19 19 5" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </>
  ),
  "miscellaneous-assets": (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <circle cx="17" cy="7.5" r="3.2" />
      <path d="m7.5 14 3.5 6h-7l3.5-6Z" />
      <path d="M14 17h6M17 14v6" />
    </>
  ),
};

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

export function CourseShowcaseCard({ course }: { course: Course }) {
  const accent = ACCENT_BY_COURSE[course.slug] ?? ACCENT.other;
  const available = course.status === "available";

  return (
    <Link
      to={`/courses/${course.slug}`}
      style={{ "--accent": accent } as CSSProperties}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] ${
        available ? "border-[#2a3040]" : "border-[#2a3040]/60 opacity-80"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: accent, opacity: 0.14 }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0.6 }} />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
          style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {ICONS[course.slug] ?? ICONS["miscellaneous-assets"]}
          </svg>
        </div>
        {!available && (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="relative mt-4 text-lg font-semibold text-[#e6e8ec]">{course.title}</h3>
      <p className="relative mt-1.5 line-clamp-3 text-sm leading-relaxed text-[#9aa3b2]">{course.description}</p>

      <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {course.lessonCount ? <Chip>{course.lessonCount} lessons</Chip> : null}
          {course.moduleCount ? <Chip>{course.moduleCount} modules</Chip> : null}
          {course.strategyCount > 0 ? <Chip>{course.strategyCount} strategies</Chip> : null}
        </div>
        <span
          className="shrink-0 translate-x-[-4px] text-sm opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: accent }}
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
