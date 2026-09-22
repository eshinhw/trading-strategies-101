import { Router } from "express";
import { courses } from "../data/courses/index.js";
import { prisma } from "../lib/prisma.js";
import { attachUser, requireAuth } from "../lib/auth.js";
import { completedLessonSlugs } from "../lib/progress.js";
import { isExaminableCourse, isCourseFullyComplete, generateExamQuestions, gradeExamSubmission } from "../lib/exam.js";
import type { ExamAnswerSubmission } from "../lib/exam.js";

const router = Router();
router.use(attachUser);

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

router.get("/:slug/exam-status", async (req, res) => {
  const courseSlug = slugParam(req.params.slug);
  if (!isExaminableCourse(courseSlug)) {
    return res.status(404).json({ error: "This course doesn't have an exam yet" });
  }

  const completed = await completedLessonSlugs(req.userId);
  const unlocked = isCourseFullyComplete(courseSlug, completed);

  let progress: { passed: boolean; bestScore: number | null; attempts: number } | null = null;
  if (req.userId) {
    const row = await prisma.courseProgress.findUnique({
      where: { userId_courseSlug: { userId: req.userId, courseSlug } },
    });
    progress = row ? { passed: row.passed, bestScore: row.bestScore, attempts: row.attempts } : null;
  }

  res.json({ unlocked, signedIn: Boolean(req.userId), progress });
});

router.get("/:slug/exam", async (req, res) => {
  const courseSlug = slugParam(req.params.slug);
  if (!isExaminableCourse(courseSlug)) {
    return res.status(404).json({ error: "This course doesn't have an exam yet" });
  }

  const completed = await completedLessonSlugs(req.userId);
  if (!isCourseFullyComplete(courseSlug, completed)) {
    return res.status(403).json({ error: "Complete every module in this course before taking the exam." });
  }

  res.json({ questions: generateExamQuestions(courseSlug) });
});

router.post("/:slug/exam/submit", requireAuth, async (req, res) => {
  const courseSlug = slugParam(req.params.slug);
  if (!isExaminableCourse(courseSlug)) {
    return res.status(404).json({ error: "This course doesn't have an exam yet" });
  }

  const completed = await completedLessonSlugs(req.userId);
  if (!isCourseFullyComplete(courseSlug, completed)) {
    return res.status(403).json({ error: "Complete every module in this course before taking the exam." });
  }

  const answers = (req.body?.answers ?? []) as ExamAnswerSubmission[];
  const grade = gradeExamSubmission(answers);

  const existing = await prisma.courseProgress.findUnique({
    where: { userId_courseSlug: { userId: req.userId!, courseSlug } },
  });

  const wasPassed = existing?.passed ?? false;
  const nowPassed = wasPassed || grade.passed;
  const bestScore = Math.max(existing?.bestScore ?? 0, grade.score);

  await prisma.courseProgress.upsert({
    where: { userId_courseSlug: { userId: req.userId!, courseSlug } },
    create: {
      userId: req.userId!,
      courseSlug,
      passed: nowPassed,
      bestScore,
      attempts: 1,
      completedAt: nowPassed ? new Date() : null,
    },
    update: {
      passed: nowPassed,
      bestScore,
      attempts: { increment: 1 },
      completedAt: !wasPassed && nowPassed ? new Date() : undefined,
    },
  });

  res.json({
    score: grade.score,
    passed: grade.passed,
    results: grade.results,
    courseNewlyCompleted: !wasPassed && nowPassed,
    bestScore,
  });
});

export default router;
