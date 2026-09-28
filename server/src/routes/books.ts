import { Router } from "express";
import { books, bookCategories } from "../data/books/index.js";
import type { Book } from "../data/books/types.js";

const router = Router();

// A search URL rather than a guessed /dp/<ASIN> link: it can't go stale or
// point at the wrong edition, and it lands on live prices and availability.
function amazonUrlFor(book: Book): string {
  if (book.amazonUrl) return book.amazonUrl;
  const query = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.amazon.com/s?k=${query}&i=stripbooks`;
}

router.get("/", (_req, res) => {
  res.json({ categories: bookCategories, books: books.map((book) => ({ ...book, amazonUrl: amazonUrlFor(book) })) });
});

export default router;
