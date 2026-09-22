import { useEffect, useMemo, useState } from "react";
import { fetchBooks } from "../api";
import type { Book, BookCategoryInfo, BooksResponse } from "../types/book";

const LEVEL_LABEL: Record<Book["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const LEVEL_CLASSES: Record<Book["level"], string> = {
  beginner: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  intermediate: "border-[#34c98a]/30 bg-[#34c98a]/10 text-[#34c98a]",
  advanced: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const LEVELS: Book["level"][] = ["beginner", "intermediate", "advanced"];

export function BooksPage() {
  const [data, setData] = useState<BooksResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Book["level"] | "all">("all");

  useEffect(() => {
    fetchBooks()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  const filteredBooks = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.books.filter((b) => {
      const matchesLevel = level === "all" || b.level === level;
      const matchesQuery = q === "" || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [data, query, level]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6f2ec]">Books</h1>
        <p className="mt-2 max-w-2xl text-[#8fada0]">
          Reading recommended across trading desks and quant research teams — the books that keep showing up on
          industry reading lists, grouped by what they're actually useful for.
        </p>
      </header>

      {error && <p className="text-red-400">{error}</p>}
      {!data && !error && <p className="text-[#6f8a7c]">Loading books…</p>}

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

          {filteredBooks.length === 0 ? (
            <p className="text-[#6f8a7c]">No books match your search.</p>
          ) : (
            <div className="flex flex-col gap-10">
              {data.categories.map((category) => (
                <CategorySection
                  key={category.slug}
                  category={category}
                  books={filteredBooks.filter((b) => b.category === category.slug)}
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
          ? "border-[#34c98a]/30 bg-[#34c98a]/10 text-[#34c98a]"
          : "border-[#1e3d2f] text-[#8fada0] hover:border-[#2c5942] hover:text-[#e6f2ec]"
      }`}
    >
      {label}
    </button>
  );
}

function CategorySection({ category, books }: { category: BookCategoryInfo; books: Book[] }) {
  if (books.length === 0) return null;
  return (
    <section>
      <h2 className="text-xl font-bold text-[#e6f2ec]">{category.title}</h2>
      <p className="mt-1 max-w-2xl text-sm text-[#8fada0]">{category.description}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </section>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[#e6f2ec]">{book.title}</h3>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[book.level]}`}>
          {LEVEL_LABEL[book.level]}
        </span>
      </div>
      <div className="text-sm text-[#6f8a7c]">
        {book.author} · {book.year}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#8fada0]">{book.summary}</p>
      <p className="mt-auto pt-3 text-xs text-[#6f8a7c]">{book.whyItsHere}</p>
    </div>
  );
}
