import { Router } from "express";
import { courses } from "../data/courses/index.js";

const router = Router();

function slugParam(v: string | string[]): string {
  return Array.isArray(v) ? v[0] : v;
}

router.get("/", (_req, res) => {
  res.json({ courses });
});

router.get("/:slug", (req, res) => {
  const course = courses.find((c) => c.slug === slugParam(req.params.slug));
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

export default router;
