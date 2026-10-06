import { Router } from "express";
import { bankCourses, sampleBankQuestions } from "../lib/quizBank.js";

const router = Router();

const MAX_QUESTIONS = 40;
const DEFAULT_QUESTIONS = 10;

router.get("/quiz-bank/courses", (_req, res) => {
  res.json({ courses: bankCourses() });
});

router.get("/quiz-bank/questions", (req, res) => {
  const known = new Set(bankCourses().map((c) => c.slug));
  const raw = typeof req.query.courses === "string" ? req.query.courses : "";
  const requested = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const unknown = requested.filter((s) => !known.has(s));
  if (unknown.length > 0) return res.status(400).json({ error: `Unknown course: ${unknown.join(", ")}` });

  const parsed = Number(req.query.count);
  const count = Number.isFinite(parsed) && parsed >= 1 ? Math.min(Math.floor(parsed), MAX_QUESTIONS) : DEFAULT_QUESTIONS;

  res.json({ questions: sampleBankQuestions(requested, count) });
});

export default router;
