import { useState, type CSSProperties } from "react";
import { fetchPapers } from "../api";
import type { Paper } from "../types/paper";
import { CatalogPage, type BookmarkControls } from "../components/CatalogPage";
import { BookmarkButton } from "../components/BookmarkButton";
import { ACCENT } from "../lib/courseVisuals";

const LEVEL_LABEL: Record<Paper["level"], string> = {
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const LEVEL_CLASSES: Record<Paper["level"], string> = {
  intermediate: "border-[#4f8cff]/30 bg-[#4f8cff]/10 text-[#4f8cff]",
  advanced: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const LEVELS: Paper["level"][] = ["intermediate", "advanced"];

const CATEGORY_ACCENT: Record<string, string> = {
  "asset-pricing-portfolio-theory": ACCENT.equities,
  "derivatives-pricing": ACCENT.derivatives,
  "factor-investing": ACCENT.rates,
  "risk-management": ACCENT.macro,
  "market-microstructure-execution": ACCENT.real,
};
const accentFor = (slug: string) => CATEGORY_ACCENT[slug] ?? ACCENT.other;

export function PapersPage() {
  return (
    <CatalogPage
      eyebrow="Research library"
      title="Papers"
      itemNoun="papers"
      description="The research behind the strategies in this curriculum: citations, plus our own summary of what each paper shows."
      searchPlaceholder="Search by title, author or topic…"
      loadingLabel="Loading papers…"
      emptyLabel="No papers match your search."
      fetchData={() => fetchPapers().then((d) => ({ categories: d.categories, items: d.papers }))}
      levels={LEVELS}
      levelLabel={LEVEL_LABEL}
      getLevel={(paper) => paper.level}
      getCategorySlug={(paper) => paper.category}
      getCategoryAccent={accentFor}
      matchesQuery={(paper, q) =>
        [paper.title, paper.authors, paper.venue, paper.summary, paper.whyItsHere].some((field) =>
          field.toLowerCase().includes(q),
        )
      }
      getId={(paper) => paper.slug}
      bookmarkKey="papers:saved"
      gridColsClassName="sm:grid-cols-2 lg:grid-cols-3"
      renderCard={(paper, accent, bookmark) => <PaperCard key={paper.slug} paper={paper} accent={accent} bookmark={bookmark} />}
      renderRow={(paper, accent, bookmark) => <PaperRow key={paper.slug} paper={paper} accent={accent} bookmark={bookmark} />}
      renderTimeline={(papers, { accentOf, categoryOf, bookmarkOf }) => (
        <PaperTimeline
          papers={papers}
          accentOf={accentOf}
          categoryTitleOf={(p) => categoryOf(p)?.title}
          bookmarkOf={bookmarkOf}
        />
      )}
      renderOverview={(ctx) => <ResearchMap {...ctx} />}
      sorters={SORTERS}
    />
  );
}

const SORTERS = [
  { id: "newest", label: "Newest first", compare: (a: Paper, b: Paper) => b.year - a.year },
  { id: "oldest", label: "Oldest first", compare: (a: Paper, b: Paper) => a.year - b.year },
  { id: "title", label: "Title A–Z", compare: (a: Paper, b: Paper) => a.title.localeCompare(b.title) },
];

const LINK_LABEL: Record<Paper["link"]["kind"], string> = {
  ssrn: "Read free on SSRN",
  publisher: "View at publisher (DOI)",
};

function citationOf(paper: Paper): string {
  return `${paper.authors} (${paper.year}). ${paper.title}. ${paper.venue}.`;
}

// Copies a plain-text citation for the paper to the clipboard.
function CopyCitation({ paper }: { paper: Paper }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    const text = citationOf(paper);
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // The async clipboard API needs a secure context and permission; fall back to a hidden textarea.
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(area);
    }
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy citation for ${paper.title}`}
      className={`text-xs transition hover:text-[#e6e8ec] ${state === "failed" ? "text-red-400" : "text-[#898781]"}`}
    >
      {state === "copied" ? "✓ Copied" : state === "failed" ? "Couldn't copy" : "Copy citation"}
    </button>
  );
}

// Papers in chronological order down a rail, grouped by decade, so the history of the field reads top to bottom.
function PaperTimeline({
  papers,
  accentOf,
  categoryTitleOf,
  bookmarkOf,
}: {
  papers: Paper[];
  accentOf: (p: Paper) => string;
  categoryTitleOf: (p: Paper) => string | undefined;
  bookmarkOf: (p: Paper) => BookmarkControls | undefined;
}) {
  const sorted = papers.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  const byDecade = new Map<number, Paper[]>();
  for (const p of sorted) {
    const decade = Math.floor(p.year / 10) * 10;
    byDecade.set(decade, [...(byDecade.get(decade) ?? []), p]);
  }

  return (
    <div className="relative">
      <div className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-[#7c6cff]/60 via-[#2a3040] to-[#2a3040]/30" aria-hidden="true" />
      <div className="flex flex-col gap-10">
        {[...byDecade.entries()].map(([decade, group]) => (
          <section key={decade}>
            <h2 className="relative mb-4 flex items-center gap-4 text-xl font-bold text-[#e6e8ec]">
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#7c6cff]/60 bg-[#12151d]">
                <span className="h-2 w-2 rounded-full bg-[#7c6cff]" />
              </span>
              {decade}s
            </h2>
            <div className="flex flex-col gap-4 pl-10">
              {group.map((paper) => {
                const accent = accentOf(paper);
                return (
                  <article
                    key={paper.slug}
                    className="relative rounded-2xl border border-[#2a3040] bg-[#141821] p-5 transition duration-200 hover:border-[var(--accent)]"
                    style={{ "--accent": `${accent}99` } as CSSProperties}
                  >
                    <span
                      className="absolute -left-[34.5px] top-6 h-2.5 w-2.5 rounded-full ring-4 ring-[#0b0d12]"
                      style={{ background: accent }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-2xl font-bold tabular-nums leading-none" style={{ color: accent }}>
                        {paper.year}
                      </span>
                      {categoryTitleOf(paper) && (
                        <span
                          className="rounded-full border px-2 py-0.5 text-[11px] font-medium"
                          style={{ borderColor: `${accent}55`, background: `${accent}14`, color: accent }}
                        >
                          {categoryTitleOf(paper)}
                        </span>
                      )}
                      <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${LEVEL_CLASSES[paper.level]}`}>
                        {LEVEL_LABEL[paper.level]}
                      </span>
                    </div>
                    <h3 className="mt-3 font-semibold leading-snug text-[#e6e8ec]">{paper.title}</h3>
                    <div className="mt-0.5 text-sm text-[#898781]">
                      {paper.authors} · <span className="italic">{paper.venue}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{paper.summary}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <a
                        href={paper.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
                      >
                        {LINK_LABEL[paper.link.kind]} <span aria-hidden="true">↗</span>
                      </a>
                      <span className="flex items-center gap-3">
                        <CopyCitation paper={paper} />
                        {bookmarkOf(paper) && (
                          <BookmarkButton
                            saved={bookmarkOf(paper)!.saved}
                            onToggle={bookmarkOf(paper)!.toggle}
                            label={paper.title}
                          />
                        )}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

interface ResearchMapProps {
  items: Paper[];
  matching: Paper[];
  categories: { slug: string; title: string }[];
  accentOf: (p: Paper) => string;
  activeTopic: string;
  onSelectTopic: (slug: string) => void;
}

// The whole library on one picture: a lane per research area, a dot per paper placed by year. Dots that don't
// match the current filters dim out, and clicking a lane label filters to that area.
function ResearchMap({ items, matching, categories, accentOf, activeTopic, onSelectTopic }: ResearchMapProps) {
  const [hovered, setHovered] = useState<Paper | null>(null);
  if (items.length === 0) return null;

  const years = items.map((p) => p.year);
  const start = Math.floor(Math.min(...years) / 10) * 10;
  const end = Math.ceil((Math.max(...years) + 1) / 10) * 10;
  const pct = (year: number) => ((year - start) / (end - start)) * 100;
  const ticks: number[] = [];
  for (let y = start; y <= end; y += 10) ticks.push(y);
  const matchingSlugs = new Set(matching.map((p) => p.slug));

  return (
    <section className="mb-8 rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4 sm:p-5" aria-label="Research map">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">The research at a glance</h2>
        <span className="text-xs text-[#898781]">
          {start}–{end - 1}
        </span>
      </div>

      <div className="flex flex-col">
        {categories.map((c) => {
          const lane = items.filter((p) => p.category === c.slug);
          if (lane.length === 0) return null;
          const accent = accentOf(lane[0]);
          const active = activeTopic === c.slug;
          return (
            <div key={c.slug} className="flex items-center gap-3 border-t border-[#2a3040]/60 first:border-t-0">
              <button
                onClick={() => onSelectTopic(c.slug)}
                aria-pressed={active}
                className={`hidden w-56 shrink-0 truncate py-2.5 text-left text-xs transition sm:block ${
                  active ? "font-semibold text-[#e6e8ec]" : "text-[#9aa3b2] hover:text-[#e6e8ec]"
                }`}
                title={`Filter to ${c.title}`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: accent }} />
                {c.title}
              </button>
              <div className="relative h-8 flex-1">
                <div className="absolute inset-x-0 top-1/2 h-px bg-[#2a3040]/70" aria-hidden="true" />
                {hovered && hovered.category === c.slug && (
                  <span
                    className={`pointer-events-none absolute bottom-full z-20 mb-1 max-w-[320px] truncate rounded-lg border border-[#2a3040] bg-[#0e1117] px-2.5 py-1.5 text-xs text-[#e6e8ec] shadow-lg shadow-black/40 ${
                      pct(hovered.year) > 70 ? "-translate-x-full" : pct(hovered.year) > 15 ? "-translate-x-1/2" : ""
                    }`}
                    style={{ left: `${pct(hovered.year)}%` }}
                  >
                    <span className="font-semibold">{hovered.year}</span> · {hovered.title}
                  </span>
                )}
                {lane.map((paper) => {
                  // Papers from the same year in the same lane would sit on top of each other, so fan them out.
                  const sameYear = lane.filter((p) => p.year === paper.year);
                  const offset = (sameYear.indexOf(paper) - (sameYear.length - 1) / 2) * 13;
                  const on = matchingSlugs.has(paper.slug);
                  return (
                    <button
                      key={paper.slug}
                      type="button"
                      onMouseEnter={() => setHovered(paper)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(paper)}
                      onBlur={() => setHovered(null)}
                      aria-label={`${paper.title}, ${paper.authors}, ${paper.year}`}
                      className="absolute top-1/2 h-3 w-3 -translate-x-1/2 rounded-full ring-2 ring-[#141821] transition hover:scale-150 focus-visible:scale-150 focus-visible:outline-none"
                      style={{
                        left: `${pct(paper.year)}%`,
                        marginTop: `${offset - 6}px`,
                        background: accent,
                        opacity: on ? 1 : 0.2,
                        boxShadow: hovered?.slug === paper.slug ? `0 0 0 4px ${accent}40` : undefined,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-3">
          <span className="hidden w-56 shrink-0 sm:block" />
          <div className="relative h-5 flex-1 border-t border-[#2a3040]">
            {ticks.map((y) => (
              <span
                key={y}
                className="absolute top-1 -translate-x-1/2 text-[10px] tabular-nums text-[#898781]"
                style={{ left: `${pct(y)}%` }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 sm:hidden">
        {categories.map((c) => {
          const lane = items.find((p) => p.category === c.slug);
          if (!lane) return null;
          const active = activeTopic === c.slug;
          return (
            <button
              key={c.slug}
              onClick={() => onSelectTopic(c.slug)}
              aria-pressed={active}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] transition ${
                active ? "border-[#7c6cff]/60 bg-[#7c6cff]/15 text-[#e6e8ec]" : "border-[#2a3040] text-[#9aa3b2]"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentOf(lane) }} />
              {c.title}
            </button>
          );
        })}
      </div>

      <p className="mt-3 min-h-[20px] text-xs text-[#898781]" aria-live="polite">
        {hovered ? (
          <>
            <span className="font-medium text-[#e6e8ec]">{hovered.year}</span> · {hovered.title}{" "}
            <span className="text-[#898781]">· {hovered.authors}</span>
          </>
        ) : (
          "Each dot is a paper, placed by year. Hover or focus one to read it. Click a research area to filter."
        )}
      </p>
    </section>
  );
}

function PaperCard({ paper, accent, bookmark }: { paper: Paper; accent: string; bookmark?: BookmarkControls }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
      style={{ "--accent": `${accent}99` } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-2xl font-bold tabular-nums leading-none" style={{ color: accent }}>
          {paper.year}
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[paper.level]}`}>
            {LEVEL_LABEL[paper.level]}
          </span>
          {bookmark && <BookmarkButton saved={bookmark.saved} onToggle={bookmark.toggle} label={paper.title} />}
        </span>
      </div>
      <h3 className="mt-3 font-semibold leading-snug text-[#e6e8ec]">{paper.title}</h3>
      <div className="mt-0.5 text-sm text-[#898781]">{paper.authors}</div>
      <div className="text-xs italic text-[#898781]">{paper.venue}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{paper.summary}</p>
      <p className="mt-3 border-l-2 pl-3 text-xs leading-relaxed text-[#898781]" style={{ borderColor: `${accent}80` }}>
        {paper.whyItsHere}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <a
          href={paper.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
        >
          {LINK_LABEL[paper.link.kind]} <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
        </a>
        <CopyCitation paper={paper} />
      </div>
    </article>
  );
}

// Compact one-line layout for the List view.
function PaperRow({ paper, accent, bookmark }: { paper: Paper; accent: string; bookmark?: BookmarkControls }) {
  return (
    <article
      className="group flex items-center gap-4 rounded-xl border border-[#2a3040] bg-[#141821] px-4 py-3 transition duration-200 hover:border-[var(--accent)]"
      style={{ "--accent": `${accent}99` } as CSSProperties}
    >
      <span className="w-12 shrink-0 text-lg font-bold tabular-nums" style={{ color: accent }}>
        {paper.year}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-[#e6e8ec]">{paper.title}</h3>
        <p className="truncate text-sm text-[#898781]">
          {paper.authors} · <span className="italic">{paper.venue}</span>
        </p>
      </div>
      <span className={`hidden shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium sm:inline ${LEVEL_CLASSES[paper.level]}`}>
        {LEVEL_LABEL[paper.level]}
      </span>
      {bookmark && <BookmarkButton saved={bookmark.saved} onToggle={bookmark.toggle} label={paper.title} />}
      <a
        href={paper.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
      >
        {paper.link.kind === "ssrn" ? "SSRN" : "DOI"} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
