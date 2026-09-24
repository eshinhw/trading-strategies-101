import { useEffect, useMemo, useState } from "react";
import { fetchPapers } from "../api";
import type { Paper, PaperCategoryInfo, PapersResponse } from "../types/paper";

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
  const [data, setData] = useState<PapersResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Paper["level"] | "all">("all");

  useEffect(() => {
    fetchPapers()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  const filteredPapers = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.papers.filter((p) => {
      const matchesLevel = level === "all" || p.level === level;
      const matchesQuery = q === "" || p.title.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [data, query, level]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Papers</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          The foundational research behind the strategies in this curriculum — citations and our own summary of
          what each paper actually shows, not the papers themselves.
        </p>
      </header>

      {error && <p className="text-red-400">{error}</p>}
      {!data && !error && <p className="text-[#898781]">Loading papers…</p>}

      {data && (
        <>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or author…"
              className="input w-full sm:max-w-xs"
            />
            <div className="flex flex-wrap items-center gap-1.5">
              <LevelChip label="All levels" active={level === "all"} onClick={() => setLevel("all")} />
              {LEVELS.map((lvl) => (
                <LevelChip key={lvl} label={LEVEL_LABEL[lvl]} active={level === lvl} onClick={() => setLevel(lvl)} />
              ))}
            </div>
          </div>

          {filteredPapers.length === 0 ? (
            <p className="text-[#898781]">No papers match your search.</p>
          ) : (
            <div className="flex flex-col gap-10">
              {data.categories.map((category) => (
                <CategorySection
                  key={category.slug}
                  category={category}
                  papers={filteredPapers.filter((p) => p.category === category.slug)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function LevelChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition ${
        active
          ? "border-[#4f8cff]/30 bg-[#4f8cff]/10 text-[#4f8cff]"
          : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150] hover:text-[#e6e8ec]"
      }`}
    >
      {label}
    </button>
  );
}

function CategorySection({ category, papers }: { category: PaperCategoryInfo; papers: Paper[] }) {
  if (papers.length === 0) return null;
  return (
    <section>
      <h2 className="text-xl font-bold text-[#e6e8ec]">{category.title}</h2>
      <p className="mt-1 max-w-2xl text-sm text-[#9aa3b2]">{category.description}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {papers.map((paper) => (
          <PaperCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
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
