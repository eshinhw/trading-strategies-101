import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import type { Course } from "../types/course";
import { COURSE_FAMILIES, CourseIcon, courseAccent } from "../lib/courseVisuals";

// The landing page's course browser: every course placed on a map grouped by asset-class family.
// Hovering (or focusing) a course previews it in the panel on the right.

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

export function AssetMap({ courses }: { courses: Course[] | null }) {
  const [selectedSlug, setSelectedSlug] = useState("options");

  const bySlug = useMemo(() => new Map((courses ?? []).map((c) => [c.slug, c])), [courses]);
  const selected = bySlug.get(selectedSlug) ?? courses?.[0] ?? null;
  const selectedAccent = selected ? courseAccent(selected.slug) : "#7c6cff";
  const familyOfSelected = selected ? COURSE_FAMILIES.find((f) => f.slugs.includes(selected.slug)) : undefined;

  const totalLessons = (courses ?? []).reduce((sum, c) => sum + (c.lessonCount ?? 0), 0);
  const totalStrategies = (courses ?? []).reduce((sum, c) => sum + c.strategyCount, 0);
  const moduleTitles = selected?.moduleTitles ?? [];

  return (
    <section id="courses" className="relative overflow-hidden border-t border-[#2a3040] bg-[#0e1117] py-16">
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Explore the curriculum</div>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#e6e8ec] sm:text-4xl">
              Eighteen asset classes, one map.
            </h2>
          </div>
          {courses && (
            <div className="flex gap-6 sm:pb-1">
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{courses.length}</div>
                <div className="text-xs text-[#898781]">courses</div>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{totalLessons}</div>
                <div className="text-xs text-[#898781]">lessons</div>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{totalStrategies}</div>
                <div className="text-xs text-[#898781]">strategies</div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div
            className="rounded-2xl border border-[#2a3040] bg-[#0e1117] p-4 sm:p-5"
            style={{ backgroundImage: "radial-gradient(rgba(154,163,178,0.16) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          >
            {!courses && <p className="p-4 text-sm text-[#898781]">Loading courses…</p>}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
              {COURSE_FAMILIES.map((family) => {
                const members = family.slugs.map((s) => bySlug.get(s)).filter((c): c is Course => Boolean(c));
                if (courses && members.length === 0) return null;
                return (
                  <div
                    key={family.name}
                    className="flex flex-col gap-2 rounded-2xl border p-3.5"
                    style={{ borderColor: `${family.accent}59`, background: `${family.accent}12` }}
                  >
                    <div
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]"
                      style={{ color: family.accent }}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ background: family.accent }} />
                      {family.name}
                    </div>
                    {members.map((c) => {
                      const isSelected = c.slug === selected?.slug;
                      return (
                        <Link
                          key={c.slug}
                          to={`/courses/${c.slug}`}
                          onMouseEnter={() => setSelectedSlug(c.slug)}
                          onFocus={() => setSelectedSlug(c.slug)}
                          style={
                            {
                              borderColor: isSelected ? family.accent : undefined,
                              background: isSelected ? `${family.accent}33` : undefined,
                              boxShadow: isSelected ? `0 0 0 3px ${family.accent}2e, 0 0 24px ${family.accent}59` : undefined,
                            } as CSSProperties
                          }
                          className="flex items-center gap-2.5 rounded-xl border border-[#2a3040] bg-[#12151d] px-2.5 py-2 transition duration-200 hover:-translate-y-px"
                        >
                          <span
                            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg border"
                            style={{
                              background: isSelected ? family.accent : `${family.accent}26`,
                              borderColor: isSelected ? family.accent : `${family.accent}59`,
                              color: isSelected ? "#0b0d12" : family.accent,
                            }}
                          >
                            <CourseIcon slug={c.slug} className="h-[17px] w-[17px]" />
                          </span>
                          <span className={`flex-1 text-sm ${isSelected ? "font-semibold" : ""} text-[#e6e8ec]`}>
                            {c.title}
                          </span>
                          {c.lessonCount ? <span className="text-xs text-[#898781]">{c.lessonCount}</span> : null}
                        </Link>
                      );
                    })}
                    {family.note && <p className="mt-1 text-xs leading-relaxed text-[#898781]">{family.note}</p>}
                  </div>
                );
              })}
            </div>
            <div className="mt-3.5 flex items-center justify-between text-xs text-[#898781]">
              <span>Numbers show lessons in each course.</span>
              <span className="hidden sm:inline">Hover a course to preview it.</span>
            </div>
          </div>

          {selected && (
            <aside
              className="relative hidden flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#1b2030] to-[#12151d] p-6 lg:flex"
              style={{ borderColor: `${selectedAccent}80`, boxShadow: `0 0 40px ${selectedAccent}2e` }}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                style={{ background: selectedAccent, opacity: 0.25 }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-[#0b0d12]"
                  style={{ background: selectedAccent }}
                >
                  <CourseIcon slug={selected.slug} className="h-[26px] w-[26px]" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: selectedAccent }}>
                    {familyOfSelected?.name ?? ""}
                  </div>
                  <div className="text-2xl font-bold text-[#e6e8ec]">{selected.title}</div>
                </div>
              </div>
              <p className="relative mt-4 line-clamp-6 text-sm leading-relaxed text-[#9aa3b2]">{selected.description}</p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {selected.lessonCount ? <Chip>{selected.lessonCount} lessons</Chip> : null}
                {selected.moduleCount ? <Chip>{selected.moduleCount} modules</Chip> : null}
                {selected.strategyCount > 0 ? <Chip>{selected.strategyCount} strategies</Chip> : null}
              </div>
              {moduleTitles.length > 0 && (
                <>
                  <div className="relative mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-[#898781]">
                    What you'll cover
                  </div>
                  <ul className="relative mt-2.5 flex flex-col gap-2 text-sm text-[#e6e8ec]">
                    {moduleTitles.slice(0, 5).map((t) => (
                      <li key={t} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: selectedAccent }} />
                        <span>{t}</span>
                      </li>
                    ))}
                    {moduleTitles.length > 5 && (
                      <li className="pl-4 text-xs text-[#898781]">+ {moduleTitles.length - 5} more modules</li>
                    )}
                  </ul>
                </>
              )}
              <Link
                to={`/courses/${selected.slug}`}
                className="relative mt-auto block rounded-lg px-5 py-3 text-center font-semibold text-[#0b0d12] transition hover:brightness-110"
                style={{ background: selectedAccent, marginTop: "1.5rem" }}
              >
                Open the {selected.title} course →
              </Link>
            </aside>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/courses" className="text-sm text-[#a99dff] hover:underline">
            See every course with progress →
          </Link>
        </div>
      </div>
    </section>
  );
}
