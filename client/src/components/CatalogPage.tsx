import { useEffect, useMemo, useState, type ReactNode } from "react";

export interface CatalogCategory {
  slug: string;
  title: string;
  description: string;
}

export function LevelChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
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

// Shared shell for the Books and Papers pages — same search box + level-chip
// filter + category-grouped card grid, differing only in field names (author
// vs authors) and the card itself. See BooksPage.tsx / PapersPage.tsx for the
// domain-specific pieces each one plugs in.
export function CatalogPage<TItem, TLevel extends string, TCategory extends CatalogCategory>({
  title,
  description,
  searchPlaceholder,
  loadingLabel,
  emptyLabel,
  fetchData,
  levels,
  levelLabel,
  getLevel,
  getCategorySlug,
  matchesQuery,
  gridColsClassName = "sm:grid-cols-2",
  renderCard,
}: {
  title: string;
  description: string;
  searchPlaceholder: string;
  loadingLabel: string;
  emptyLabel: string;
  fetchData: () => Promise<{ categories: TCategory[]; items: TItem[] }>;
  levels: TLevel[];
  levelLabel: Record<TLevel, string>;
  getLevel: (item: TItem) => TLevel;
  getCategorySlug: (item: TItem) => string;
  matchesQuery: (item: TItem, q: string) => boolean;
  gridColsClassName?: string;
  renderCard: (item: TItem) => ReactNode;
}) {
  const [data, setData] = useState<{ categories: TCategory[]; items: TItem[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<TLevel | "all">("all");

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch((e) => setError(e.message));
    // fetchData/matchesQuery/etc. are stable per-page constants, not
    // reactive inputs — re-running this on every render would refetch in a
    // loop since the caller passes a fresh closure each time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredItems = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.items.filter((item) => {
      const matchesLevel = level === "all" || getLevel(item) === level;
      const matchesSearch = q === "" || matchesQuery(item, q);
      return matchesLevel && matchesSearch;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, query, level]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{title}</h1>
        <p className="mt-4 max-w-2xl text-[#9aa3b2]">{description}</p>
      </header>

      {error && <p className="text-red-400">{error}</p>}
      {!data && !error && <p className="text-[#898781]">{loadingLabel}</p>}

      {data && (
        <>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
              <LevelChip label="All levels" active={level === "all"} onClick={() => setLevel("all")} />
              {levels.map((lvl) => (
                <LevelChip key={lvl} label={levelLabel[lvl]} active={level === lvl} onClick={() => setLevel(lvl)} />
              ))}
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="input w-full sm:max-w-xs"
            />
          </div>

          {filteredItems.length === 0 ? (
            <p className="text-[#898781]">{emptyLabel}</p>
          ) : (
            <div className="flex flex-col gap-10">
              {data.categories.map((category) => {
                const items = filteredItems.filter((item) => getCategorySlug(item) === category.slug);
                if (items.length === 0) return null;
                return (
                  <section key={category.slug}>
                    <h2 className="text-xl font-bold text-[#e6e8ec]">{category.title}</h2>
                    <p className="mt-1 max-w-2xl text-sm text-[#9aa3b2]">{category.description}</p>
                    <div className={`mt-4 grid grid-cols-1 gap-4 ${gridColsClassName}`}>
                      {items.map((item) => renderCard(item))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
