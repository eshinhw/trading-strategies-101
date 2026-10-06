import { useState, type CSSProperties } from "react";
import { fetchPapers } from "../api";
import type { Paper } from "../types/paper";
import { CatalogPage } from "../components/CatalogPage";
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
      description="The foundational research behind the strategies in this curriculum — citations and our own summary of what each paper actually shows, not the papers themselves."
      searchPlaceholder="Search by title or author…"
      loadingLabel="Loading papers…"
      emptyLabel="No papers match your search."
      fetchData={() => fetchPapers().then((d) => ({ categories: d.categories, items: d.papers }))}
      levels={LEVELS}
      levelLabel={LEVEL_LABEL}
      getLevel={(paper) => paper.level}
      getCategorySlug={(paper) => paper.category}
      getCategoryAccent={accentFor}
      matchesQuery={(paper, q) => paper.title.toLowerCase().includes(q) || paper.authors.toLowerCase().includes(q)}
      gridColsClassName="sm:grid-cols-2 lg:grid-cols-3"
      renderCard={(paper, accent) => <PaperCard key={paper.slug} paper={paper} accent={accent} />}
      renderRow={(paper, accent) => <PaperRow key={paper.slug} paper={paper} accent={accent} />}
      renderTimeline={(papers, { accentOf, categoryOf }) => (
        <PaperTimeline papers={papers} accentOf={accentOf} categoryTitleOf={(p) => categoryOf(p)?.title} />
      )}
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
  ssrn: "Download on SSRN",
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

// Whether the paper is free to read (SSRN) or sits behind its publisher.
function AccessTag({ paper }: { paper: Paper }) {
  return paper.link.kind === "ssrn" ? (
    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
      Free on SSRN
    </span>
  ) : (
    <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-[11px] text-[#898781]">Publisher</span>
  );
}

// Papers in chronological order down a rail, grouped by decade, so the history of the field reads top to bottom.
function PaperTimeline({
  papers,
  accentOf,
  categoryTitleOf,
}: {
  papers: Paper[];
  accentOf: (p: Paper) => string;
  categoryTitleOf: (p: Paper) => string | undefined;
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
                      <AccessTag paper={paper} />
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
                      <CopyCitation paper={paper} />
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

function PaperCard({ paper, accent }: { paper: Paper; accent: string }) {
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
          <AccessTag paper={paper} />
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[paper.level]}`}>
            {LEVEL_LABEL[paper.level]}
          </span>
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
function PaperRow({ paper, accent }: { paper: Paper; accent: string }) {
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
