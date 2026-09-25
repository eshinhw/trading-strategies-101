import { conceptLessons, resolveLesson, modulesForCourse } from "../data/curriculum/index.js";
import { optionsStrategies } from "../data/options/index.js";
import { generatePracticeParams } from "../data/curriculum/practiceParams.js";
import { computePayoffStats } from "../engine/payoff.js";
import {
  buildStrategyQuestions,
  numericMatches,
  fmtAnswer,
  OUTLOOK_CHOICES,
  NET_POSITION_CHOICES,
  PASS_THRESHOLD,
} from "./grading.js";
import type { NumericAnswer } from "./grading.js";

const EXAMINABLE_COURSES = new Set([
  "options",
  "futures",
  "stocks",
  "etfs",
  "fixed-income",
  "indexes",
  "volatility",
  "fx",
  "commodities",
  "real-estate",
  "structured-assets",
  "convertibles",
  "cash",
]);

// Every module contributes at least this many lessons — Options has exactly
// 12 modules, so 1 lesson/module lands here and this constant preserves its
// exam exactly as it was. A course with fewer modules (Futures/ETFs have
// just 1) instead pulls proportionally more lessons from each of its
// modules, so a single-module course still gets a real, multi-lesson exam
// instead of one lesson repeated.
const TARGET_SAMPLED_LESSONS = 12;

// The first half of a shuffled lesson order contributes an extra question
// each, landing the total around 18 without hand-tuning per course.
function questionBudgetFor(lessonIndex: number, totalLessons: number): number {
  return lessonIndex < Math.ceil(totalLessons / 2) ? 2 : 1;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface ExamQuestion {
  id: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  kind: "concept" | "strategy";
  questionId: string;
  prompt: string;
  type: "mcq" | "numeric-or-unlimited";
  choices?: string[];
  /** strategy questions only — the scenario shown, and the labels to display it */
  practiceParams?: Record<string, number>;
  paramDefs?: { key: string; label: string }[];
}

export function isExaminableCourse(courseSlug: string): boolean {
  return EXAMINABLE_COURSES.has(courseSlug);
}

/** Fresh random sample each call — retaking the exam won't just be memorization. */
export function generateExamQuestions(courseSlug: string): ExamQuestion[] {
  if (!isExaminableCourse(courseSlug)) return [];

  const modules = modulesForCourse(courseSlug);
  if (modules.length === 0) return [];

  // Every module contributes at least this many lessons, so the exam always
  // covers the whole course regardless of how many (or few) modules it has.
  const lessonsPerModule = Math.max(1, Math.ceil(TARGET_SAMPLED_LESSONS / modules.length));

  const sampledLessons: { moduleSlug: string; moduleTitle: string; lessonSlug: string }[] = [];
  for (const module of shuffle(modules)) {
    for (const lessonSlug of shuffle(module.lessonSlugs).slice(0, lessonsPerModule)) {
      sampledLessons.push({ moduleSlug: module.slug, moduleTitle: module.title, lessonSlug });
    }
  }

  const questions: ExamQuestion[] = [];

  sampledLessons.forEach(({ moduleSlug, moduleTitle, lessonSlug }, i) => {
    const resolved = resolveLesson(lessonSlug);
    if (!resolved) return;

    const desiredCount = questionBudgetFor(i, sampledLessons.length);

    if (resolved.kind === "concept") {
      const picked = shuffle(resolved.lesson.quiz).slice(0, desiredCount);
      for (const q of picked) {
        questions.push({
          id: `${lessonSlug}:${q.id}`,
          moduleSlug,
          moduleTitle,
          lessonSlug,
          lessonTitle: resolved.lesson.title,
          kind: "concept",
          questionId: q.id,
          prompt: q.prompt,
          type: "mcq",
          choices: q.choices,
        });
      }
    } else {
      const strategy = resolved.strategy;
      const practiceParams = generatePracticeParams(strategy);
      const picked = shuffle(buildStrategyQuestions(strategy)).slice(0, desiredCount);
      for (const q of picked) {
        questions.push({
          id: `${lessonSlug}:${q.id}`,
          moduleSlug,
          moduleTitle,
          lessonSlug,
          lessonTitle: strategy.name,
          kind: "strategy",
          questionId: q.id,
          prompt: q.prompt,
          type: q.type,
          choices: q.choices ? [...q.choices] : undefined,
          practiceParams,
          paramDefs: strategy.params.map((p) => ({ key: p.key, label: p.label })),
        });
      }
    }
  });

  return shuffle(questions);
}

export interface ExamAnswerSubmission {
  id: string;
  lessonSlug: string;
  moduleTitle: string;
  lessonTitle: string;
  kind: "concept" | "strategy";
  questionId: string;
  prompt: string;
  choiceIndex?: number;
  numeric?: NumericAnswer;
  practiceParams?: Record<string, number>;
}

export interface ExamQuestionResult {
  id: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface ExamGradeResult {
  score: number;
  passed: boolean;
  results: ExamQuestionResult[];
}

function gradeOne(a: ExamAnswerSubmission): ExamQuestionResult {
  const base = {
    id: a.id,
    moduleTitle: a.moduleTitle,
    lessonSlug: a.lessonSlug,
    lessonTitle: a.lessonTitle,
    prompt: a.prompt,
  };

  if (a.kind === "concept") {
    const lesson = conceptLessons.find((l) => l.slug === a.lessonSlug);
    const q = lesson?.quiz.find((qq) => qq.id === a.questionId);
    if (!q) return { ...base, correct: false, correctAnswer: "—" };
    return {
      ...base,
      correct: a.choiceIndex === q.correctIndex,
      correctAnswer: q.choices[q.correctIndex],
      explanation: q.explanation,
    };
  }

  const strategy = optionsStrategies.find((s) => s.slug === a.lessonSlug);
  if (!strategy || !a.practiceParams) return { ...base, correct: false, correctAnswer: "—" };

  if (a.questionId === "maxProfit" || a.questionId === "maxLoss") {
    const stats = computePayoffStats(strategy, a.practiceParams);
    const correctVal = a.questionId === "maxProfit" ? stats.maxProfit : stats.maxLoss;
    return { ...base, correct: numericMatches(correctVal, a.numeric), correctAnswer: fmtAnswer(correctVal) };
  }
  if (a.questionId === "outlook") {
    const correctIndex = OUTLOOK_CHOICES.indexOf(strategy.outlook);
    return { ...base, correct: a.choiceIndex === correctIndex, correctAnswer: OUTLOOK_CHOICES[correctIndex] };
  }
  // netPosition
  const correctIndex = strategy.netPosition === "debit" ? 0 : 1;
  return { ...base, correct: a.choiceIndex === correctIndex, correctAnswer: NET_POSITION_CHOICES[correctIndex] };
}

export function gradeExamSubmission(answers: ExamAnswerSubmission[]): ExamGradeResult {
  const results = answers.map(gradeOne);
  const score = results.length ? results.filter((r) => r.correct).length / results.length : 0;
  return { score, passed: score >= PASS_THRESHOLD, results };
}

/** Whether every module in the course has been fully completed — the exam's unlock condition. */
export function isCourseFullyComplete(courseSlug: string, completedLessonSlugs: Set<string>): boolean {
  if (!isExaminableCourse(courseSlug)) return false;
  return modulesForCourse(courseSlug).every((m) => m.lessonSlugs.every((slug) => completedLessonSlugs.has(slug)));
}
