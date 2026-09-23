import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { attachUser, requireAuth } from "../lib/auth.js";
import {
  modules,
  resolveLesson,
  getModuleForLesson,
  computeModuleStatuses,
  allLessonSlugs,
  isPaperStrategy,
} from "../data/curriculum/index.js";
import { generatePracticeParams } from "../data/curriculum/practiceParams.js";
import { buildStrategyQuestions, gradeStrategySubmission, gradeConceptSubmission } from "../lib/grading.js";
import type { StrategySubmission } from "../lib/grading.js";
import { completedLessonSlugs } from "../lib/progress.js";

const router = Router();
router.use(attachUser);

function slugParam(v: string | string[]): string {
  return Array.isArray(v) ? v[0] : v;
}

function mapLessons(
  lessonSlugs: string[],
  courseSlug: string,
  progressBySlug: Map<string, { completed: boolean; bestScore: number | null }>,
) {
  return lessonSlugs.map((slug) => {
    const resolved = resolveLesson(slug);
    const progress = progressBySlug.get(slug);
    return {
      slug,
      kind: resolved?.kind,
      title: resolved?.kind === "concept" ? resolved.lesson.title : resolved?.strategy.name,
      summary: resolved?.kind === "concept" ? resolved.lesson.summary : resolved?.strategy.content.summary,
      isPaperStrategy: resolved ? isPaperStrategy(courseSlug, resolved) : false,
      completed: progress?.completed ?? false,
      bestScore: progress?.bestScore ?? null,
    };
  });
}

router.get("/modules", async (req, res) => {
  const courseSlug = typeof req.query.course === "string" ? req.query.course : "options";
  const completed = await completedLessonSlugs(req.userId);
  const statuses = computeModuleStatuses(courseSlug, completed);
  const courseLessonSlugs = allLessonSlugs(courseSlug);
  const courseCompleted = new Set([...completed].filter((s) => courseLessonSlugs.includes(s)));

  let progressRows: { lessonSlug: string; completed: boolean; bestScore: number | null }[] = [];
  if (req.userId) {
    progressRows = await prisma.lessonProgress.findMany({
      where: { userId: req.userId, lessonSlug: { in: courseLessonSlugs } },
      select: { lessonSlug: true, completed: true, bestScore: true },
    });
  }
  const progressBySlug = new Map(progressRows.map((r) => [r.lessonSlug, r]));

  res.json({
    signedIn: Boolean(req.userId),
    totalLessons: courseLessonSlugs.length,
    totalCompleted: courseCompleted.size,
    modules: statuses.map((s) => ({
      slug: s.module.slug,
      title: s.module.title,
      description: s.module.description,
      order: s.module.order,
      prerequisiteModuleSlugs: s.module.prerequisiteModuleSlugs,
      totalLessons: s.totalLessons,
      completedLessons: s.completedLessons,
      unlocked: s.unlocked,
      completed: s.completed,
      lessons: s.unlocked ? mapLessons(s.module.lessonSlugs, courseSlug, progressBySlug) : [],
    })),
  });
});

router.get("/modules/:slug", async (req, res) => {
  const module = modules.find((m) => m.slug === slugParam(req.params.slug));
  if (!module) return res.status(404).json({ error: "Module not found" });

  const completed = await completedLessonSlugs(req.userId);
  const statuses = computeModuleStatuses(module.courseSlug, completed);
  const status = statuses.find((s) => s.module.slug === module.slug)!;

  let progressRows: { lessonSlug: string; completed: boolean; bestScore: number | null }[] = [];
  if (req.userId) {
    progressRows = await prisma.lessonProgress.findMany({
      where: { userId: req.userId, lessonSlug: { in: module.lessonSlugs } },
      select: { lessonSlug: true, completed: true, bestScore: true },
    });
  }
  const progressBySlug = new Map(progressRows.map((r) => [r.lessonSlug, r]));

  res.json({
    slug: module.slug,
    courseSlug: module.courseSlug,
    title: module.title,
    description: module.description,
    unlocked: status.unlocked,
    completed: status.completed,
    lessons: mapLessons(module.lessonSlugs, module.courseSlug, progressBySlug),
  });
});

router.get("/lessons/:slug", async (req, res) => {
  const slug = slugParam(req.params.slug);
  const resolved = resolveLesson(slug);
  if (!resolved) return res.status(404).json({ error: "Lesson not found" });

  const module = getModuleForLesson(slug);
  const siblingSlugs = module?.lessonSlugs ?? [];
  const idx = siblingSlugs.indexOf(slug);
  const prevLessonSlug = idx > 0 ? siblingSlugs[idx - 1] : null;
  const nextLessonSlug = idx >= 0 && idx < siblingSlugs.length - 1 ? siblingSlugs[idx + 1] : null;

  let progress: { completed: boolean; bestScore: number | null; attempts: number } | null = null;
  if (req.userId) {
    const row = await prisma.lessonProgress.findUnique({
      where: { userId_lessonSlug: { userId: req.userId, lessonSlug: slug } },
    });
    progress = row ? { completed: row.completed, bestScore: row.bestScore, attempts: row.attempts } : null;
  }

  const base = {
    moduleSlug: module?.slug ?? null,
    moduleTitle: module?.title ?? null,
    courseSlug: module?.courseSlug ?? null,
    prevLessonSlug,
    nextLessonSlug,
    progress,
    isPaperStrategy: isPaperStrategy(module?.courseSlug, resolved),
  };

  if (resolved.kind === "concept") {
    const { kind, ...rest } = resolved.lesson;
    // quiz is sent in full, including correctIndex/explanation, so the client
    // can grade each question the instant it's answered rather than only
    // revealing correctness after the whole quiz is submitted.
    return res.json({ ...base, kind, ...rest });
  }

  const practiceParams = generatePracticeParams(resolved.strategy);
  const questions = buildStrategyQuestions(resolved.strategy);
  res.json({
    ...base,
    kind: "strategy",
    strategy: resolved.strategy,
    practiceParams,
    questions,
  });
});

router.post("/lessons/:slug/submit", requireAuth, async (req, res) => {
  const slug = slugParam(req.params.slug);
  const resolved = resolveLesson(slug);
  if (!resolved) return res.status(404).json({ error: "Lesson not found" });

  const grade =
    resolved.kind === "concept"
      ? gradeConceptSubmission(resolved.lesson, req.body?.answers ?? {})
      : gradeStrategySubmission(resolved.strategy, req.body as StrategySubmission);

  const existing = await prisma.lessonProgress.findUnique({
    where: { userId_lessonSlug: { userId: req.userId!, lessonSlug: slug } },
  });

  const wasCompleted = existing?.completed ?? false;
  const nowCompleted = wasCompleted || grade.passed;
  const bestScore = Math.max(existing?.bestScore ?? 0, grade.score);

  await prisma.lessonProgress.upsert({
    where: { userId_lessonSlug: { userId: req.userId!, lessonSlug: slug } },
    create: {
      userId: req.userId!,
      lessonSlug: slug,
      completed: nowCompleted,
      bestScore,
      attempts: 1,
      completedAt: nowCompleted ? new Date() : null,
    },
    update: {
      completed: nowCompleted,
      bestScore,
      attempts: { increment: 1 },
      completedAt: !wasCompleted && nowCompleted ? new Date() : undefined,
    },
  });

  res.json({
    score: grade.score,
    passed: grade.passed,
    results: grade.results,
    lessonNewlyCompleted: !wasCompleted && nowCompleted,
    bestScore,
  });
});

export default router;
