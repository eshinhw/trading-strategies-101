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
      description="Books that keep showing up on trading-desk and quant reading lists, grouped by what they're useful for."
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
      renderOverview={(ctx) => (ctx.matching.length === ctx.items.length ? <StartHere items={ctx.items} accentOf={ctx.accentOf} /> : null)}
    />
  );
}

// Approachable first reads, shown above the filters until the learner starts narrowing the list.
const START_HERE_TITLES = ["Market Wizards", "Liar's Poker", "The Big Short", "Trading in the Zone"];

function StartHere({ items, accentOf }: { items: Book[]; accentOf: (book: Book) => string }) {
  const picks = START_HERE_TITLES.map((t) => items.find((b) => b.title === t)).filter((b): b is Book => Boolean(b));
  if (picks.length === 0) return null;
  return (
    <section className="mb-8" aria-label="Start here">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Start here</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((book, i) => {
          const accent = accentOf(book);
          return (
            <a
              key={book.slug}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group items-center gap-3 rounded-xl border border-[#2a3040] bg-[#141821] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] ${i < 2 ? "flex" : "hidden sm:flex"}`}
              style={{ "--accent": `${accent}99` } as CSSProperties}
            >
              <BookCover book={book} accent={accent} small />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-[#e6e8ec]">{book.title}</span>
                <span className="block truncate text-xs text-[#898781]">
                  {book.author} · {book.year}
                </span>
              </span>
              <span aria-hidden="true" className="text-[#a99dff] opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </a>
          );
        })}
      </div>
    </section>
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

// The cover is drawn on a 150 x 212 canvas with a 110-wide text column. Georgia bold averages about 0.6em per
// character, so each size below fits `COLUMN / (size * 0.6)` characters on a line.
const COVER_W = 150;
const COVER_H = 212;
const COLUMN = 110;
const TITLE_SIZES = [26, 22, 19, 17, 15, 13];

function wrapTitle(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Largest type size at which the whole title fits the column and the space above the author line.
function fitTitle(text: string): { size: number; lines: string[] } {
  for (const size of TITLE_SIZES) {
    const lines = wrapTitle(text, Math.floor(COLUMN / (size * 0.6)));
    const fits = lines.every((l) => l.length * size * 0.6 <= COLUMN + 1) && lines.length * size * 1.1 <= 112;
    if (fits) return { size, lines };
  }
  const size = TITLE_SIZES[TITLE_SIZES.length - 1];
  return { size, lines: wrapTitle(text, Math.floor(COLUMN / (size * 0.6))) };
}

const COVER_INK = "#0b0d12";
const COVER_FONT = 'Georgia, "Times New Roman", serif';

// A typographic paperback-style cover in the category's colour: the title in large serif type, the author below.
// Decorative — we don't ship real cover art. The card-size cover has room to read the title; the list-row
// thumbnail is too small for that, so it shows the monogram instead.
function BookCover({ book, accent, small = false }: { book: Book; accent: string; small?: boolean }) {
  const surname = book.author.split(",")[0].split(" and ")[0].split(" ").slice(-1)[0];
  const { size, lines } = fitTitle(book.title.split(":")[0]);
  const frame = (
    <rect x="10" y="10" width={COVER_W - 20} height={COVER_H - 20} rx="2" fill="none" stroke={COVER_INK} strokeOpacity="0.5" />
  );
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${COVER_W} ${COVER_H}`}
      className={`shrink-0 rounded-[5px] shadow-lg shadow-black/50 ${
        small ? "h-[56px] w-[40px]" : "h-[141px] w-[100px] max-sm:h-[113px] max-sm:w-[80px]"
      }`}
    >
      <rect width={COVER_W} height={COVER_H} fill={accent} />
      {frame}
      {small ? (
        <text
          x={COVER_W / 2}
          y={COVER_H / 2 + 22}
          textAnchor="middle"
          fontSize="62"
          fontWeight="700"
          fill={COVER_INK}
          fillOpacity="0.85"
          fontFamily={COVER_FONT}
        >
          {monogram(book.title)[0]}
        </text>
      ) : (
        <>
          {lines.map((line, i) => (
            <text
              key={i}
              x="20"
              y={44 + i * size * 1.1}
              fontSize={size}
              fontWeight="700"
              fill={COVER_INK}
              fontFamily={COVER_FONT}
            >
              {line}
            </text>
          ))}
          <line x1="20" y1="170" x2="52" y2="170" stroke={COVER_INK} strokeWidth="2" />
          <text x="20" y="190" fontSize="12" fontWeight="700" letterSpacing="0.7" fill={COVER_INK} fontFamily="inherit">
            {surname.toUpperCase()}
          </text>
        </>
      )}
    </svg>
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
