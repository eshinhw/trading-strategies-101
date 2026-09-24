import { Router } from "express";
import { papers, paperCategories } from "../data/papers/index.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ categories: paperCategories, papers });
});

export default router;
