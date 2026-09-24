import { fetchPapers } from "../api";
import type { Paper } from "../types/paper";
import { CatalogPage } from "../components/CatalogPage";

const LEVEL_LABEL: Record<Paper["level"], string> = {
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const LEVEL_CLASSES: Record<Paper["level"], string> = {
  intermediate: "border-[#4f8cff]/30 bg-[#4f8cff]/10 text-[#4f8cff]",
  advanced: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const LEVELS: Paper["level"][] = ["intermediate", "advanced"];

export function PapersPage() {
  return (
    <CatalogPage
      title="Papers"
      description="The foundational research behind the strategies in this curriculum — citations and our own summary of what each paper actually shows, not the papers themselves."
      searchPlaceholder="Search by title or author…"
      loadingLabel="Loading papers…"
      emptyLabel="No papers match your search."
      fetchData={() => fetchPapers().then((d) => ({ categories: d.categories, items: d.papers }))}
      levels={LEVELS}
      levelLabel={LEVEL_LABEL}
      getLevel={(paper) => paper.level}
      getCategorySlug={(paper) => paper.category}
      matchesQuery={(paper, q) => paper.title.toLowerCase().includes(q) || paper.authors.toLowerCase().includes(q)}
      gridColsClassName="sm:grid-cols-2 lg:grid-cols-3"
      renderCard={(paper) => <PaperCard key={paper.slug} paper={paper} />}
    />
  );
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="flex flex-col rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[#e6e8ec]">{paper.title}</h3>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[paper.level]}`}>
          {LEVEL_LABEL[paper.level]}
        </span>
      </div>
      <div className="text-sm text-[#898781]">{paper.authors}</div>
      <div className="text-xs text-[#898781]">
        {paper.venue} · {paper.year}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{paper.summary}</p>
      <p className="mt-auto pt-3 text-xs text-[#898781]">{paper.whyItsHere}</p>
    </div>
  );
}
