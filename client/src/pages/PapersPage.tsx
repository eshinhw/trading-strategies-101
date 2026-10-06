import type { CSSProperties } from "react";
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
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[paper.level]}`}>
          {LEVEL_LABEL[paper.level]}
        </span>
      </div>
      <h3 className="mt-3 font-semibold leading-snug text-[#e6e8ec]">{paper.title}</h3>
      <div className="mt-0.5 text-sm text-[#898781]">{paper.authors}</div>
      <div className="text-xs italic text-[#898781]">{paper.venue}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{paper.summary}</p>
      <p className="mt-3 border-l-2 pl-3 text-xs leading-relaxed text-[#898781]" style={{ borderColor: `${accent}80` }}>
        {paper.whyItsHere}
      </p>
      <a
        href={paper.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-fit items-center gap-1 pt-4 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
      >
        {LINK_LABEL[paper.link.kind]} <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
      </a>
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
