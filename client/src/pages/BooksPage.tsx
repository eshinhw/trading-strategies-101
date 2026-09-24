import { fetchBooks } from "../api";
import type { Book } from "../types/book";
import { CatalogPage } from "../components/CatalogPage";

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

export function BooksPage() {
  return (
    <CatalogPage
      title="Books"
      description="Reading recommended across trading desks and quant research teams — the books that keep showing up on industry reading lists, grouped by what they're actually useful for."
      searchPlaceholder="Search by title or author…"
      loadingLabel="Loading books…"
      emptyLabel="No books match your search."
      fetchData={() => fetchBooks().then((d) => ({ categories: d.categories, items: d.books }))}
      levels={LEVELS}
      levelLabel={LEVEL_LABEL}
      getLevel={(book) => book.level}
      getCategorySlug={(book) => book.category}
      matchesQuery={(book, q) => book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q)}
      renderCard={(book) => <BookCard key={book.slug} book={book} />}
    />
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[#e6e8ec]">{book.title}</h3>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[book.level]}`}>
          {LEVEL_LABEL[book.level]}
        </span>
      </div>
      <div className="text-sm text-[#898781]">
        {book.author} · {book.year}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#9aa3b2]">{book.summary}</p>
      <p className="mt-auto pt-3 text-xs text-[#898781]">{book.whyItsHere}</p>
    </div>
  );
}
