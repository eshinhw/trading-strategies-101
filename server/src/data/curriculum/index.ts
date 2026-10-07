import { optionsStrategies } from "../options/index.js";
import { courses } from "../courses/index.js";
import { loadQuizBank, loadConceptLessonsFromMarkdown, loadStrategyQuizzes } from "./markdownLessons.js";
import { modules } from "./modules.js";
import type { ConceptLesson, ConceptQuizQuestion, Module } from "./types.js";

export const conceptLessons: ConceptLesson[] = loadConceptLessonsFromMarkdown();
export { modules };

const strategyBySlug = new Map(optionsStrategies.map((s) => [s.slug, s]));
const conceptBySlug = new Map(conceptLessons.map((l) => [l.slug, l]));
const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));

// Every Options strategy lesson has a conceptual knowledge check, authored as Markdown in
// content/strategy-quizzes/<slug>.md. Fail loudly at startup if one is missing or orphaned.
export const strategyQuizzes = loadStrategyQuizzes();
{
  const missing = optionsStrategies.filter((s) => !strategyQuizzes.has(s.slug)).map((s) => s.slug);
  if (missing.length) throw new Error(`Missing strategy quiz file(s) in content/strategy-quizzes: ${missing.join(", ")}`);
  const unknown = [...strategyQuizzes.keys()].filter((slug) => !strategyBySlug.has(slug));
  if (unknown.length) throw new Error(`Strategy quiz file(s) with no matching strategy: ${unknown.join(", ")}`);
}

// The Quiz Bank's own questions (content/quiz-bank/<lesson-slug>.md), separate from the lessons' knowledge checks. Each
// file must belong to a real lesson, and ids must be unique within it, since the bank ids are lesson:question.
const quizBank = loadQuizBank();
{
  for (const [slug, questions] of quizBank) {
    if (!conceptBySlug.has(slug) && !strategyBySlug.has(slug)) throw new Error(`content/quiz-bank/${slug}.md has no matching lesson`);
    const seen = new Set<string>();
    for (const q of questions) {
      if (seen.has(q.id)) throw new Error(`content/quiz-bank/${slug}.md: question id "${q.id}" is used twice`);
      seen.add(q.id);
    }
  }
}

/** A lesson's Quiz Bank questions (not its knowledge check). */
export function bankQuestionsForLesson(slug: string): ConceptQuizQuestion[] {
  return quizBank.get(slug) ?? [];
}

/** The knowledge-check questions for any lesson, concept or strategy. */
export function quizForLesson(slug: string): ConceptQuizQuestion[] {
  return conceptBySlug.get(slug)?.quiz ?? strategyQuizzes.get(slug) ?? [];
}

export type ResolvedLesson =
  | { kind: "concept"; lesson: (typeof conceptLessons)[number] }
  | { kind: "strategy"; strategy: (typeof optionsStrategies)[number] };

export function resolveLesson(slug: string): ResolvedLesson | undefined {
  const concept = conceptBySlug.get(slug);
  if (concept) return { kind: "concept", lesson: concept };
  const strategy = strategyBySlug.get(slug);
  if (strategy) return { kind: "strategy", strategy };
  return undefined;
}

export function getModuleForLesson(lessonSlug: string): Module | undefined {
  return modules.find((m) => m.lessonSlugs.includes(lessonSlug));
}

const courseBySlug = new Map(courses.map((c) => [c.slug, c]));

/**
 * True when a lesson is one of the paper's own numbered strategies, rather
 * than supplementary content (a "Basics" concept lesson, a worked example,
 * etc.) written for this course. Every Options strategy lesson qualifies
 * automatically — that course has no supplementary strategy-kind lessons —
 * while a concept lesson qualifies only if its title is one of the course's
 * `strategyTitles`, which are copied verbatim from the paper's table of
 * contents (see the comment atop courses/index.ts).
 */
export function isPaperStrategy(courseSlug: string | null | undefined, resolved: ResolvedLesson): boolean {
  if (resolved.kind === "strategy") return true;
  if (!courseSlug) return false;
  const titles = courseBySlug.get(courseSlug)?.strategyTitles;
  return titles?.includes(resolved.lesson.title) ?? false;
}

export function getModule(slug: string): Module | undefined {
  return moduleBySlug.get(slug);
}

/** Modules belonging to one course, in declared display order. */
export function modulesForCourse(courseSlug: string): Module[] {
  return modules.filter((m) => m.courseSlug === courseSlug);
}

/** All lesson slugs in one course's curriculum, in module/display order. */
export function allLessonSlugs(courseSlug: string): string[] {
  return modulesForCourse(courseSlug).flatMap((m) => m.lessonSlugs);
}

export interface ModuleStatus {
  module: Module;
  totalLessons: number;
  completedLessons: number;
  unlocked: boolean;
  completed: boolean;
}

/**
 * Derives unlock/completion status for every module in one course from a set
 * of completed lesson slugs — nothing about module status is stored; it's
 * always computed fresh from the curriculum structure plus the learner's
 * LessonProgress rows.
 *
 * `forceUnlockAll` skips the prerequisite check entirely (every module comes
 * back unlocked) without touching `completed`/`completedLessons`, which stay
 * tied to real progress — used to give specific accounts full visibility
 * into content without faking their progress.
 */
export function computeModuleStatuses(
  courseSlug: string,
  completedLessonSlugs: Set<string>,
  forceUnlockAll = false,
): ModuleStatus[] {
  const completedModules = new Set<string>();

  // modules are declared in an order where prerequisites precede dependents,
  // so a single pass is enough to know each module's completion by the time
  // something else depends on it.
  const statuses: ModuleStatus[] = modulesForCourse(courseSlug).map((module) => {
    const totalLessons = module.lessonSlugs.length;
    const completedLessons = module.lessonSlugs.filter((s) => completedLessonSlugs.has(s)).length;
    const completed = completedLessons === totalLessons;
    const unlocked = forceUnlockAll || module.prerequisiteModuleSlugs.every((p) => completedModules.has(p));
    if (completed) completedModules.add(module.slug);
    return { module, totalLessons, completedLessons, unlocked, completed };
  });

  return statuses;
}
