import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

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
          ? "border-[#7c6cff]/40 bg-[#7c6cff]/15 text-[#a99dff]"
          : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150] hover:text-[#e6e8ec]"
      }`}
    >
      {label}
    </button>
  );
}

function TopicChip({
  label,
  count,
  accent,
  active,
  onClick,
}: {
  label: string;
  count: number;
  accent?: string;
  active: boolean;
  onClick: () => void;
}) {
  const color = accent ?? "#7c6cff";
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition hover:text-[#e6e8ec]"
      style={{
        borderColor: active ? `${color}80` : "#2a3040",
        background: active ? `${color}22` : "transparent",
        color: active ? "#e6e8ec" : "#9aa3b2",
      }}
    >
      {accent && <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />}
      {label}
      <span className="text-[#898781]">{count}</span>
    </button>
  );
}

export interface BookmarkControls {
  saved: boolean;
  toggle: () => void;
}

function loadSaved(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : []);
  } catch {
    return new Set();
  }
}

// Shared shell for the Books and Papers pages — same header, search box, topic + level filters and
// category-grouped card grid, differing only in field names (author vs authors) and the card
// itself. See BooksPage.tsx / PapersPage.tsx for the domain-specific pieces each one plugs in.
export function CatalogPage<TItem, TLevel extends string, TCategory extends CatalogCategory>({
  eyebrow,
  title,
  description,
  itemNoun,
  searchPlaceholder,
  loadingLabel,
  emptyLabel,
  fetchData,
  levels,
  levelLabel,
  getLevel,
  getCategorySlug,
  getCategoryAccent,
  matchesQuery,
  gridColsClassName = "sm:grid-cols-2",
  renderCard,
  renderRow,
  renderTimeline,
  sorters,
  getId,
  bookmarkKey,
  renderOverview,
}: {
  eyebrow: string;
  title: string;
  description: string;
  itemNoun: string; // plural, e.g. "books"
  searchPlaceholder: string;
  loadingLabel: string;
  emptyLabel: string;
  fetchData: () => Promise<{ categories: TCategory[]; items: TItem[] }>;
  levels: TLevel[];
  levelLabel: Record<TLevel, string>;
  getLevel: (item: TItem) => TLevel;
  getCategorySlug: (item: TItem) => string;
  getCategoryAccent: (slug: string) => string;
  matchesQuery: (item: TItem, q: string) => boolean;
  gridColsClassName?: string;
  renderCard: (item: TItem, accent: string, bookmark?: BookmarkControls) => ReactNode;
  /** a compact one-line layout; when given, a Cards / List toggle appears */
  renderRow?: (item: TItem, accent: string, bookmark?: BookmarkControls) => ReactNode;
  /** a chronological layout over the filtered items; when given, a Timeline option joins the layout toggle */
  renderTimeline?: (
    items: TItem[],
    helpers: {
      accentOf: (item: TItem) => string;
      categoryOf: (item: TItem) => TCategory | undefined;
      bookmarkOf: (item: TItem) => BookmarkControls | undefined;
    },
  ) => ReactNode;
  /** a visual summary shown above the filters; sees every item, which of them match the filters, and the topic filter */
  renderOverview?: (ctx: {
    items: TItem[];
    matching: TItem[];
    categories: TCategory[];
    accentOf: (item: TItem) => string;
    activeTopic: string;
    onSelectTopic: (slug: string) => void;
  }) => ReactNode;
  /** extra sort orders; the catalog's own order ("Recommended") is always the default */
  sorters?: { id: string; label: string; compare: (a: TItem, b: TItem) => number }[];
  /** with bookmarkKey, learners can save items for later (kept in this browser) and filter to just those */
  getId?: (item: TItem) => string;
  bookmarkKey?: string;
}) {
  const [data, setData] = useState<{ categories: TCategory[]; items: TItem[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Filters, sort and layout live in the URL (?q=&level=&topic=&sort=&view=&saved=1), so a filtered view can be
  // shared, survives a refresh, and is restored by the back button.
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (updates: Record<string, string | null>) =>
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        for (const [key, value] of Object.entries(updates)) {
          if (value === null || value === "") next.delete(key);
          else next.set(key, value);
        }
        return next;
      },
      { replace: true },
    );

  const query = searchParams.get("q") ?? "";
  const levelParam = searchParams.get("level");
  const level: TLevel | "all" = levels.includes(levelParam as TLevel) ? (levelParam as TLevel) : "all";
  const topicParam = searchParams.get("topic");
  const topic = topicParam && data?.categories.some((c) => c.slug === topicParam) ? topicParam : "all";
  const sortParam = searchParams.get("sort");
  const sortId = sorters?.some((x) => x.id === sortParam) ? (sortParam as string) : "recommended";
  const viewParam = searchParams.get("view");
  const view: "cards" | "list" | "timeline" =
    viewParam === "list" && renderRow ? "list" : viewParam === "timeline" && renderTimeline ? "timeline" : "cards";
  const onlySaved = Boolean(bookmarkKey) && searchParams.get("saved") === "1";

  const setQuery = (v: string) => setParams({ q: v });
  const setLevel = (v: TLevel | "all") => setParams({ level: v === "all" ? null : v });
  const setTopic = (v: string) => setParams({ topic: v === "all" ? null : v });
  const setSortId = (v: string) => setParams({ sort: v === "recommended" ? null : v });
  const setView = (v: "cards" | "list" | "timeline") => setParams({ view: v === "cards" ? null : v });

  const [saved, setSaved] = useState<Set<string>>(() => (bookmarkKey ? loadSaved(bookmarkKey) : new Set()));
  const toggleSaved = (id: string) =>
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      if (bookmarkKey) {
        try {
          localStorage.setItem(bookmarkKey, JSON.stringify([...next]));
        } catch {
          // storage unavailable — the list just won't persist
        }
      }
      return next;
    });
  const bookmarkFor = (item: TItem): BookmarkControls | undefined =>
    bookmarkKey && getId ? { saved: saved.has(getId(item)), toggle: () => toggleSaved(getId(item)) } : undefined;

  const [expanded, setExpanded] = useState<Set<string>>(new Set());

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
    const matching = data.items.filter((item) => {
      const matchesLevel = level === "all" || getLevel(item) === level;
      const matchesTopic = topic === "all" || getCategorySlug(item) === topic;
      const matchesSearch = q === "" || matchesQuery(item, q);
      const matchesSaved = !onlySaved || (getId ? saved.has(getId(item)) : true);
      return matchesLevel && matchesTopic && matchesSearch && matchesSaved;
    });
    const sorter = sorters?.find((x) => x.id === sortId);
    return sorter ? matching.slice().sort(sorter.compare) : matching;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, query, level, topic, sortId, onlySaved, saved]);

  const filtersActive = query.trim() !== "" || level !== "all" || topic !== "all" || onlySaved;
  // A long category shows only its first few entries until expanded, unless the learner is filtering.
  const collapseAfter = view === "list" ? 10 : 6;
  const toggleExpanded = (slug: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  const clearFilters = () => setParams({ q: null, level: null, topic: null, saved: null });

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of data?.items ?? []) counts.set(getCategorySlug(item), (counts.get(getCategorySlug(item)) ?? 0) + 1);
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">{eyebrow}</div>
            <h1 className="mt-2 text-4xl font-bold text-[#e6e8ec]">{title}</h1>
            <p className="mt-3 leading-relaxed text-[#9aa3b2]">{description}</p>
          </div>
          {data && (
            <div className="flex gap-6 sm:pb-1">
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{data.items.length}</div>
                <div className="text-xs text-[#898781]">{itemNoun}</div>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{data.categories.length}</div>
                <div className="text-xs text-[#898781]">topics</div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {error && <p className="text-red-400">{error}</p>}
        {!data && !error && <p className="text-[#898781]">{loadingLabel}</p>}

        {data && (
          <>
            {renderOverview &&
              renderOverview({
                items: data.items,
                matching: filteredItems,
                categories: data.categories,
                accentOf: (item) => getCategoryAccent(getCategorySlug(item)),
                activeTopic: topic,
                onSelectTopic: (slug) => setTopic(topic === slug ? "all" : slug),
              })}
            <div className="mb-8 rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-sm">
                  <svg
                    viewBox="0 0 20 20"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#898781]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="9" r="5.5" />
                    <path d="m13.5 13.5 3.5 3.5" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
                    className="input w-full !pl-9"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs text-[#898781]">Level</span>
                  <LevelChip label="All" active={level === "all"} onClick={() => setLevel("all")} />
                  {levels.map((lvl) => (
                    <LevelChip key={lvl} label={levelLabel[lvl]} active={level === lvl} onClick={() => setLevel(lvl)} />
                  ))}
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-[#2a3040] pt-3">
                <span className="mr-1 text-xs text-[#898781]">Topic</span>
                <TopicChip label="All" count={data.items.length} active={topic === "all"} onClick={() => setTopic("all")} />
                {data.categories.map((c) => (
                  <TopicChip
                    key={c.slug}
                    label={c.title}
                    count={topicCounts.get(c.slug) ?? 0}
                    accent={getCategoryAccent(c.slug)}
                    active={topic === c.slug}
                    onClick={() => setTopic(topic === c.slug ? "all" : c.slug)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#898781]">
                Showing <span className="font-medium text-[#e6e8ec]">{filteredItems.length}</span> of {data.items.length}{" "}
                {itemNoun}
                {filtersActive && (
                  <button onClick={clearFilters} className="ml-3 text-[#a99dff] hover:underline">
                    Clear filters
                  </button>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {bookmarkKey && (
                  <button
                    onClick={() => setParams({ saved: onlySaved ? null : "1" })}
                    aria-pressed={onlySaved}
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${
                      onlySaved
                        ? "border-[#7c6cff]/50 bg-[#7c6cff]/15 text-[#e6e8ec]"
                        : "border-[#2a3040] text-[#9aa3b2] hover:text-[#e6e8ec]"
                    }`}
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={onlySaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5.5 3.5h9a1 1 0 0 1 1 1V17l-5.5-3.5L4.5 17V4.5a1 1 0 0 1 1-1Z" />
                    </svg>
                    Saved <span className="text-[#898781]">{saved.size}</span>
                  </button>
                )}
                {sorters && sorters.length > 0 && (
                  <label className="flex items-center gap-2 text-xs text-[#898781]">
                    Sort
                    <select
                      value={sortId}
                      onChange={(e) => setSortId(e.target.value)}
                      className="rounded-lg border border-[#2a3040] bg-[#141821] px-2.5 py-1.5 text-xs text-[#e6e8ec] focus:border-[#7c6cff] focus:outline-none [&>option]:bg-[#141821]"
                    >
                      <option value="recommended">Recommended</option>
                      {sorters.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.label}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                {(renderRow || renderTimeline) && (
                  <div role="radiogroup" aria-label="Layout" className="flex rounded-lg border border-[#2a3040] bg-[#141821] p-0.5">
                    {(
                      [
                        ["cards", "Cards", true],
                        ["list", "List", Boolean(renderRow)],
                        ["timeline", "Timeline", Boolean(renderTimeline)],
                      ] as const
                    )
                      .filter(([, , available]) => available)
                      .map(([key, label]) => (
                        <button
                          key={key}
                          role="radio"
                          aria-checked={view === key}
                          onClick={() => setView(key)}
                          className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                            view === key ? "bg-[#7c6cff]/20 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#2a3040] p-10 text-center">
                <p className="text-[#9aa3b2]">
                  {onlySaved && saved.size === 0
                    ? `You haven't saved any ${itemNoun} yet. Use the bookmark on a card to build your reading list.`
                    : emptyLabel}
                </p>
                {filtersActive && (
                  <button onClick={clearFilters} className="mt-3 text-sm text-[#a99dff] hover:underline">
                    Clear filters
                  </button>
                )}
              </div>
            ) : view === "timeline" && renderTimeline ? (
              renderTimeline(filteredItems, {
                accentOf: (item) => getCategoryAccent(getCategorySlug(item)),
                categoryOf: (item) => data.categories.find((c) => c.slug === getCategorySlug(item)),
                bookmarkOf: bookmarkFor,
              })
            ) : (
              <div className="flex flex-col gap-12">
                {data.categories.map((category) => {
                  const items = filteredItems.filter((item) => getCategorySlug(item) === category.slug);
                  if (items.length === 0) return null;
                  const accent = getCategoryAccent(category.slug);
                  return (
                    <section key={category.slug}>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-8 w-1 shrink-0 rounded-full"
                          style={{ background: accent, boxShadow: `0 0 14px ${accent}80` }}
                        />
                        <div>
                          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#e6e8ec]">
                            {category.title}
                            <span
                              className="rounded-full border px-2 py-0.5 text-xs font-medium"
                              style={{ borderColor: `${accent}50`, background: `${accent}18`, color: accent }}
                            >
                              {items.length}
                            </span>
                          </h2>
                          <p className="mt-0.5 text-sm text-[#9aa3b2]">{category.description}</p>
                        </div>
                      </div>
                      {(() => {
                        const collapsible = !filtersActive && items.length > collapseAfter;
                        const isOpen = expanded.has(category.slug);
                        const visible = collapsible && !isOpen ? items.slice(0, collapseAfter) : items;
                        return (
                          <>
                            {view === "list" && renderRow ? (
                              <div className="mt-5 flex flex-col gap-2">{visible.map((item) => renderRow(item, accent, bookmarkFor(item)))}</div>
                            ) : (
                              <div className={`mt-5 grid grid-cols-1 gap-4 ${gridColsClassName}`}>
                                {visible.map((item) => renderCard(item, accent, bookmarkFor(item)))}
                              </div>
                            )}
                            {collapsible && (
                              <div className="mt-4 flex justify-center">
                                <button
                                  onClick={() => toggleExpanded(category.slug)}
                                  aria-expanded={isOpen}
                                  className="rounded-full border border-[#2a3040] px-4 py-1.5 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:text-[#e6e8ec]"
                                >
                                  {isOpen ? "Show fewer" : `Show all ${items.length} in ${category.title}`}
                                </button>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </section>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
