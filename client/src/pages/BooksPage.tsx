import type { CSSProperties } from "react";
import { fetchBooks } from "../api";
import type { Book } from "../types/book";
import { CatalogPage, type BookmarkControls } from "../components/CatalogPage";
import { BookmarkButton } from "../components/BookmarkButton";
import { ACCENT } from "../lib/courseVisuals";

const LEVEL_LABEL: Record<Book["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const LEVEL_CLASSES: Record<Book["level"], string> = {
  beginner: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  intermediate: "border-[#4f8cff]/30 bg-[#4f8cff]/10 text-[#4f8cff]",
  advanced: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const LEVELS: Book["level"][] = ["beginner", "intermediate", "advanced"];

const CATEGORY_ACCENT: Record<string, string> = {
  "quant-derivatives": ACCENT.derivatives,
  "market-structure": ACCENT.equities,
  "psychology-process": ACCENT.macro,
  "fundamentals-valuation": ACCENT.rates,
  "memoirs-history": ACCENT.real,
};
const accentFor = (slug: string) => CATEGORY_ACCENT[slug] ?? ACCENT.other;

export function BooksPage() {
  return (
    <CatalogPage
      eyebrow="Reading list"
      title="Books"
      itemNoun="books"
      description="Reading recommended across trading desks and quant research teams — the books that keep showing up on industry reading lists, grouped by what they're actually useful for."
      searchPlaceholder="Search by title, author or topic…"
      loadingLabel="Loading books…"
      emptyLabel="No books match your search."
      fetchData={() => fetchBooks().then((d) => ({ categories: d.categories, items: d.books }))}
      levels={LEVELS}
      levelLabel={LEVEL_LABEL}
      getLevel={(book) => book.level}
      getCategorySlug={(book) => book.category}
      getCategoryAccent={accentFor}
      matchesQuery={(book, q) =>
        [book.title, book.author, book.summary, book.whyItsHere].some((field) => field.toLowerCase().includes(q))
      }
      getId={(book) => book.slug}
      bookmarkKey="books:saved"
      renderCard={(book, accent, bookmark) => <BookCard key={book.slug} book={book} accent={accent} bookmark={bookmark} />}
      renderRow={(book, accent, bookmark) => <BookRow key={book.slug} book={book} accent={accent} bookmark={bookmark} />}
      sorters={SORTERS}
    />
  );
}

const LEVEL_ORDER: Record<Book["level"], number> = { beginner: 0, intermediate: 1, advanced: 2 };

const SORTERS = [
  { id: "newest", label: "Newest first", compare: (a: Book, b: Book) => b.year - a.year },
  { id: "oldest", label: "Oldest first", compare: (a: Book, b: Book) => a.year - b.year },
  { id: "title", label: "Title A–Z", compare: (a: Book, b: Book) => a.title.localeCompare(b.title) },
  {
    id: "level",
    label: "Easiest first",
    compare: (a: Book, b: Book) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || a.title.localeCompare(b.title),
  },
];

const STOP_WORDS = new Set(["a", "an", "and", "of", "on", "the", "to", "for", "in", "with", "by"]);

// Initials of the significant title words, e.g. "Options, Futures, and Other Derivatives" -> "OFO".
function monogram(title: string) {
  const words = title.split(/[\s,:–-]+/).filter((w) => w && !STOP_WORDS.has(w.toLowerCase()));
  return words
    .slice(0, 3)
    .map((w) => w[0].toUpperCase())
    .join("");
}

// A stylised book cover in the category's colour — decorative, we don't ship real cover art.
function BookCover({ book, accent, small = false }: { book: Book; accent: string; small?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex shrink-0 flex-col justify-between overflow-hidden rounded-r-md rounded-l-sm shadow-lg shadow-black/50 ${
        small ? "h-[56px] w-[40px] p-1" : "h-[116px] w-[82px] p-2.5 max-sm:h-[92px] max-sm:w-[64px]"
      }`}
      style={{ background: `linear-gradient(150deg, ${accent} 0%, ${accent}99 55%, #0e1117 130%)` }}
    >
      <span className="absolute inset-y-0 left-0 w-2 bg-black/25" />
      <span className="absolute inset-y-0 left-2 w-px bg-white/25" />
      <span
        className={`pl-2 font-extrabold leading-none tracking-tight text-[#0b0d12]/85 ${small ? "text-[11px]" : "text-[22px]"}`}
      >
        {monogram(book.title)}
      </span>
      {!small && (
        <span className="pl-2 text-[9px] font-semibold uppercase leading-tight tracking-wide text-[#0b0d12]/70">
          {book.author.split(",")[0].split(" ").slice(-1)[0]}
          <span className="block font-normal">{book.year}</span>
        </span>
      )}
    </div>
  );
}

function BookCard({ book, accent, bookmark }: { book: Book; accent: string; bookmark?: BookmarkControls }) {
  return (
    <article
      className="group flex gap-4 rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
      style={{ "--accent": `${accent}99` } as CSSProperties}
    >
      <BookCover book={book} accent={accent} />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug text-[#e6e8ec]">{book.title}</h3>
          <span className="flex shrink-0 items-center gap-1">
            <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[book.level]}`}>
              {LEVEL_LABEL[book.level]}
            </span>
            {bookmark && <BookmarkButton saved={bookmark.saved} onToggle={bookmark.toggle} label={book.title} />}
          </span>
        </div>
        <div className="mt-0.5 text-sm text-[#898781]">
          {book.author} · {book.year}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{book.summary}</p>
        <p
          className="mt-3 border-l-2 pl-3 text-xs leading-relaxed text-[#898781]"
          style={{ borderColor: `${accent}80` }}
        >
          {book.whyItsHere}
        </p>
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1 pt-4 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
        >
          View on Amazon <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </article>
  );
}

// Compact one-line layout for the List view.
function BookRow({ book, accent, bookmark }: { book: Book; accent: string; bookmark?: BookmarkControls }) {
  return (
    <article
      className="group flex items-center gap-4 rounded-xl border border-[#2a3040] bg-[#141821] px-4 py-3 transition duration-200 hover:border-[var(--accent)]"
      style={{ "--accent": `${accent}99` } as CSSProperties}
    >
      <BookCover book={book} accent={accent} small />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-semibold text-[#e6e8ec]">{book.title}</h3>
          <span className="text-sm text-[#898781]">
            {book.author} · {book.year}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-[#9aa3b2]">{book.summary}</p>
      </div>
      <span className={`hidden shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium sm:inline ${LEVEL_CLASSES[book.level]}`}>
        {LEVEL_LABEL[book.level]}
      </span>
      {bookmark && <BookmarkButton saved={bookmark.saved} onToggle={bookmark.toggle} label={book.title} />}
      <a
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-sm font-medium text-[#a99dff] hover:text-[#c4bbff]"
      >
        Amazon <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
