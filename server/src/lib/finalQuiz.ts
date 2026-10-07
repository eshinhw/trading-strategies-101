import { resolveLesson, modulesForCourse, quizForLesson } from "../data/curriculum/index.js";
import { PASS_THRESHOLD } from "./grading.js";

const FINAL_QUIZ_COURSES = new Set([
  "options",
  "forwards",
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
  "cryptocurrencies",
  "global-macro",
  "distressed-assets",
  "tax-arbitrage",
  "miscellaneous-assets",
]);

// Every module contributes at least this many lessons — Options has exactly
// 12 modules, so 1 lesson/module lands here and this constant preserves its
// final quiz exactly as it was. A course with fewer modules (Futures/ETFs have
// just 1) instead pulls proportionally more lessons from each of its
// modules, so a single-module course still gets a real, multi-lesson final quiz
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

export interface FinalQuizQuestion {
  id: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  questionId: string;
  prompt: string;
  choices: string[];
}

export function hasFinalQuiz(courseSlug: string): boolean {
  return FINAL_QUIZ_COURSES.has(courseSlug);
}

/** Fresh random sample each call — retaking the final quiz won't just be memorization. */
export function generateFinalQuizQuestions(courseSlug: string): FinalQuizQuestion[] {
  if (!hasFinalQuiz(courseSlug)) return [];

  const modules = modulesForCourse(courseSlug);
  if (modules.length === 0) return [];

  // Every module contributes at least this many lessons, so the final quiz always
  // covers the whole course regardless of how many (or few) modules it has.
  const lessonsPerModule = Math.max(1, Math.ceil(TARGET_SAMPLED_LESSONS / modules.length));

  const sampledLessons: { moduleSlug: string; moduleTitle: string; lessonSlug: string }[] = [];
  for (const module of shuffle(modules)) {
    for (const lessonSlug of shuffle(module.lessonSlugs).slice(0, lessonsPerModule)) {
      sampledLessons.push({ moduleSlug: module.slug, moduleTitle: module.title, lessonSlug });
    }
  }

  const questions: FinalQuizQuestion[] = [];

  sampledLessons.forEach(({ moduleSlug, moduleTitle, lessonSlug }, i) => {
    const resolved = resolveLesson(lessonSlug);
    if (!resolved) return;

    const lessonTitle = resolved.kind === "concept" ? resolved.lesson.title : resolved.strategy.name;
    const picked = shuffle(quizForLesson(lessonSlug)).slice(0, questionBudgetFor(i, sampledLessons.length));
    for (const q of picked) {
      questions.push({
        id: `${lessonSlug}:${q.id}`,
        moduleSlug,
        moduleTitle,
        lessonSlug,
        lessonTitle,
        questionId: q.id,
        prompt: q.prompt,
        choices: q.choices,
      });
    }
  });

  return shuffle(questions);
}

export interface FinalQuizAnswerSubmission {
  id: string;
  lessonSlug: string;
  moduleTitle: string;
  lessonTitle: string;
  questionId: string;
  prompt: string;
  choiceIndex?: number;
}

export interface FinalQuizQuestionResult {
  id: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface FinalQuizGradeResult {
  score: number;
  passed: boolean;
  results: FinalQuizQuestionResult[];
}

function gradeOne(a: FinalQuizAnswerSubmission): FinalQuizQuestionResult {
  const base = {
    id: a.id,
    moduleTitle: a.moduleTitle,
    lessonSlug: a.lessonSlug,
    lessonTitle: a.lessonTitle,
    prompt: a.prompt,
  };

  const q = quizForLesson(a.lessonSlug).find((qq) => qq.id === a.questionId);
  if (!q) return { ...base, correct: false, correctAnswer: "—" };
  return {
    ...base,
    correct: a.choiceIndex === q.correctIndex,
    correctAnswer: q.choices[q.correctIndex],
    explanation: q.explanation,
  };
}

export function gradeFinalQuizSubmission(answers: FinalQuizAnswerSubmission[]): FinalQuizGradeResult {
  const results = answers.map(gradeOne);
  const score = results.length ? results.filter((r) => r.correct).length / results.length : 0;
  return { score, passed: score >= PASS_THRESHOLD, results };
}

/** Whether every module in the course has been fully completed — the final quiz's unlock condition. */
export function isCourseFullyComplete(courseSlug: string, completedLessonSlugs: Set<string>): boolean {
  if (!hasFinalQuiz(courseSlug)) return false;
  return modulesForCourse(courseSlug).every((m) => m.lessonSlugs.every((slug) => completedLessonSlugs.has(slug)));
}
