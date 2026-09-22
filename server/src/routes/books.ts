import { Router } from "express";
import { books, bookCategories } from "../data/books/index.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ categories: bookCategories, books });
});

export default router;
