import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Course } from "../types/course";
import { CourseIcon, courseAccent } from "../lib/courseVisuals";

interface PathStep {
  slug: string;
  why: string;
}

interface Role {
  id: string;
  label: string;
  blurb: string;
  icon: ReactNode;
  path: PathStep[];
}

// Each role's suggested order of courses. These are editorial picks, not computed — change the slugs or the
// one-line reasons freely, as long as the slugs match real courses (missing ones are skipped).
const ROLES: Role[] = [
  {
    id: "trader",
    label: "Trader",
    blurb: "Price, structure and execute positions with confidence.",
    icon: <path d="M6 4v16M6 8H4v7h4V8H6ZM12 3v18M12 7h-2v8h4V7h-2ZM18 6v14M18 10h-2v6h4v-6h-2Z" />,
    path: [
      { slug: "options", why: "Payoffs, the Greeks, and every strategy from a single leg to a condor." },
      { slug: "futures", why: "Margin, mark-to-market, and how orders get filled in an exchange market." },
      { slug: "volatility", why: "What implied volatility says, and how volatility itself is traded." },
      { slug: "stocks", why: "Momentum, mean-reversion, and the strategies built on price." },
    ],
  },
  {
    id: "analyst",
    label: "Research analyst",
    blurb: "Value assets and turn a view into a thesis.",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.8-4.8" />
      </>
    ),
    path: [
      { slug: "stocks", why: "How shares are valued, and what drives their prices." },
      { slug: "fixed-income", why: "Yield, duration and the credit view behind every bond." },
      { slug: "indexes", why: "How benchmarks are built, weighted and tracked." },
      { slug: "global-macro", why: "Turning a macro view into a specific trade." },
    ],
  },
  {
    id: "risk",
    label: "Risk manager",
    blurb: "Measure, hedge and limit what a book can lose.",
    icon: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </>
    ),
    path: [
      { slug: "fixed-income", why: "Duration, yield curves and credit spreads: the vocabulary of rate and credit risk." },
      { slug: "volatility", why: "What the VIX and implied volatility measure, and how volatility is traded." },
      { slug: "futures", why: "Margin, mark-to-market, and the clearinghouse behind exchange-traded risk." },
      { slug: "structured-assets", why: "Tranches, the waterfall, and how credit risk gets sliced up and passed on." },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    blurb: "Understand what happens after the trade is agreed.",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 11l1.5 1.5L13.5 9.5M9 17h6" />
      </>
    ),
    path: [
      { slug: "futures", why: "Margin, daily settlement, delivery and the clearinghouse guarantee." },
      { slug: "forwards", why: "Contract terms, documentation, settlement and counterparty credit risk." },
      { slug: "cash", why: "Money markets, collateralized lending and the rules that police them." },
      { slug: "etfs", why: "How ETFs are created, redeemed and traded." },
    ],
  },
  {
    id: "sales",
    label: "Sales & structuring",
    blurb: "Explain products clearly and build what clients need.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M17 14c2.4 0 4 1.8 4 4.5" />
      </>
    ),
    path: [
      { slug: "options", why: "The payoffs clients ask about, from covered calls to condors." },
      { slug: "structured-assets", why: "Tranches, the waterfall, and credit swaps explained plainly." },
      { slug: "convertibles", why: "Why issuers sell convertibles and investors buy them." },
      { slug: "fx", why: "Forward pricing and how clients hedge currency risk." },
    ],
  },
  {
    id: "student",
    label: "Student or career changer",
    blurb: "Build a solid base, one asset class at a time.",
    icon: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </>
    ),
    path: [
      { slug: "stocks", why: "The most familiar asset: what a share is and how markets work." },
      { slug: "fixed-income", why: "Bonds, yields, and the idea of duration." },
      { slug: "forwards", why: "The simplest derivative, and the idea behind all the others." },
      { slug: "options", why: "Calls, puts and the payoff diagrams that make derivatives click." },
    ],
  },
];

const VIOLET = "#7c6cff";

export function RolePicker({ courses }: { courses: Course[] | null }) {
  const [roleId, setRoleId] = useState("risk");
  const role = ROLES.find((r) => r.id === roleId) ?? ROLES[0];

  const steps = role.path
    .map((s) => ({ ...s, course: courses?.find((c) => c.slug === s.slug) }))
    .filter((s): s is PathStep & { course: Course } => Boolean(s.course));
  const totalLessons = steps.reduce((sum, s) => sum + (s.course.lessonCount ?? 0), 0);

  return (
    <section className="border-t border-[#2a3040] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Start where you work</div>
          <h2 className="mt-2 text-3xl font-bold text-[#e6e8ec] sm:text-4xl">What do you do?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[#9aa3b2]">
            Pick your role and we'll suggest the courses that matter most to it, in the order that makes them easiest to
            learn.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {ROLES.map((r) => {
            const selected = r.id === roleId;
            return (
              <button
                key={r.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setRoleId(r.id)}
                className={`relative flex flex-col items-center gap-2.5 rounded-2xl border px-3 py-4 text-center transition duration-200 ${
                  selected
                    ? "border-[#7c6cff] bg-gradient-to-b from-[#7c6cff]/25 to-[#7c6cff]/10 shadow-[0_0_0_3px_rgba(124,108,255,0.18),0_0_28px_rgba(124,108,255,0.35)]"
                    : "border-[#2a3040] bg-[#141821] hover:-translate-y-0.5 hover:border-[#7c6cff]/50"
                }`}
              >
                {selected && (
                  <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#7c6cff] text-xs font-bold text-white">
                    ✓
                  </span>
                )}
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                    selected ? "border-[#7c6cff] bg-[#7c6cff] text-white" : "border-[#7c6cff]/25 bg-[#7c6cff]/12 text-[#a99dff]"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {r.icon}
                  </svg>
                </span>
                <span className={`text-sm ${selected ? "font-bold" : "font-semibold"} text-[#e6e8ec]`}>{r.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#898781]">
              Your suggested path as a {role.label.toLowerCase()}
            </div>

            {!courses && <p className="mt-4 text-sm text-[#898781]">Loading courses…</p>}

            <ol className="mt-4">
              {steps.map((s, i) => {
                const accent = courseAccent(s.slug);
                const last = i === steps.length - 1;
                return (
                  <li key={s.slug} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          i === 0 ? "text-[#0b0d12]" : "border-2 text-[#a99dff]"
                        }`}
                        style={i === 0 ? { background: accent } : { borderColor: VIOLET }}
                      >
                        {i + 1}
                      </div>
                      {!last && <div className="my-1 w-0.5 flex-1 bg-[#2a3040]" />}
                    </div>
                    <Link
                      to={`/courses/${s.slug}`}
                      className={`group flex flex-1 items-center gap-4 rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] px-4 py-3.5 transition duration-200 hover:border-[#7c6cff]/60 ${
                        last ? "" : "mb-3.5"
                      }`}
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                        style={{ background: `${accent}26`, borderColor: `${accent}66`, color: accent }}
                      >
                        <CourseIcon slug={s.slug} />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center gap-2">
                          <span className="font-semibold text-[#e6e8ec]">{s.course.title}</span>
                          {i === 0 && (
                            <span className="rounded-full bg-[#2dd4bf]/15 px-2 py-0.5 text-[11px] font-semibold text-[#6fe3d1]">
                              Start here
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-sm text-[#9aa3b2]">{s.why}</span>
                      </span>
                      {s.course.lessonCount ? (
                        <span className="hidden whitespace-nowrap rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2] sm:inline">
                          {s.course.lessonCount} lessons
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#7c6cff]/50 bg-gradient-to-b from-[#1b2030] to-[#12151d] p-6 shadow-[0_0_40px_rgba(124,108,255,0.18)]">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7c6cff]/25 blur-3xl" />
            <div className="relative text-xs font-semibold uppercase tracking-[0.08em] text-[#a99dff]">Your path</div>
            <div className="relative mt-1.5 text-2xl font-bold text-[#e6e8ec]">{role.label}</div>
            <p className="relative mt-2 text-sm text-[#9aa3b2]">{role.blurb}</p>
            <div className="relative mt-5 flex gap-6">
              <div>
                <div className="text-3xl font-bold text-[#e6e8ec]">{steps.length}</div>
                <div className="text-xs text-[#898781]">courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#e6e8ec]">{totalLessons}</div>
                <div className="text-xs text-[#898781]">lessons</div>
              </div>
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-[#9aa3b2]">
              Each course opens with what the asset is and why it exists, then how it's priced and used, so the path
              builds in the right order.
            </p>
            {steps[0] && (
              <Link
                to={`/courses/${steps[0].slug}`}
                className="relative mt-6 block rounded-lg bg-[#7c6cff] px-5 py-3 text-center font-semibold text-white hover:bg-[#6552f0]"
              >
                Start this path →
              </Link>
            )}
            <div className="relative mt-3 text-center text-sm text-[#898781]">
              or{" "}
              <a href="#courses" className="text-[#a99dff] hover:underline">
                browse every course
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
