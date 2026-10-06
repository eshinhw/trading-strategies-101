import { Router } from "express";
import { bankCourses, bankQuestionsByIds, sampleBankQuestions } from "../lib/quizBank.js";

const router = Router();

const MAX_QUESTIONS = 40;
const DEFAULT_QUESTIONS = 10;

router.get("/quiz-bank/courses", (_req, res) => {
  res.json({ courses: bankCourses() });
});

router.get("/quiz-bank/questions", (req, res) => {
  const parsedCount = Number(req.query.count);
  const wanted = Number.isFinite(parsedCount) && parsedCount >= 1 ? Math.min(Math.floor(parsedCount), MAX_QUESTIONS) : DEFAULT_QUESTIONS;

  // ?ids=a,b,c re-serves specific questions (a learner's missed ones), overriding the course selection
  if (typeof req.query.ids === "string" && req.query.ids.length > 0) {
    const ids = req.query.ids
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 200);
    return res.json({ questions: bankQuestionsByIds(ids, wanted) });
  }

  const known = new Set(bankCourses().map((c) => c.slug));
  const raw = typeof req.query.courses === "string" ? req.query.courses : "";
  const requested = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const unknown = requested.filter((s) => !known.has(s));
  if (unknown.length > 0) return res.status(400).json({ error: `Unknown course: ${unknown.join(", ")}` });

  // ?modules=a,b narrows the session to those modules (within the chosen courses, or any course)
  const knownModules = new Set(bankCourses().flatMap((c) => c.modules.map((m) => m.slug)));
  const requestedModules = (typeof req.query.modules === "string" ? req.query.modules : "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const unknownModules = requestedModules.filter((s) => !knownModules.has(s));
  if (unknownModules.length > 0) return res.status(400).json({ error: `Unknown module: ${unknownModules.join(", ")}` });

  res.json({ questions: sampleBankQuestions(requested, wanted, requestedModules) });
});

export default router;
