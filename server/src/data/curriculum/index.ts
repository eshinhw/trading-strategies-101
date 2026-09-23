import { optionsStrategies } from "../options/index.js";
import { courses } from "../courses/index.js";
import { conceptLessons as foundationsConceptLessons } from "./conceptLessons.js";
import { futuresConceptLessons } from "./futuresConceptLessons.js";
import { stocksConceptLessons } from "./stocksConceptLessons.js";
import { etfConceptLessons } from "./etfConceptLessons.js";
import { fixedIncomeConceptLessons } from "./fixedIncomeConceptLessons.js";
import { indexesConceptLessons } from "./indexesConceptLessons.js";
import { volatilityConceptLessons } from "./volatilityConceptLessons.js";
import { fxConceptLessons } from "./fxConceptLessons.js";
import { commoditiesConceptLessons } from "./commoditiesConceptLessons.js";
import { realEstateConceptLessons } from "./realEstateConceptLessons.js";
import { structuredAssetsConceptLessons } from "./structuredAssetsConceptLessons.js";
import { modules } from "./modules.js";
import type { Module } from "./types.js";

export const conceptLessons = [
  ...foundationsConceptLessons,
  ...futuresConceptLessons,
  ...stocksConceptLessons,
  ...etfConceptLessons,
  ...fixedIncomeConceptLessons,
  ...indexesConceptLessons,
  ...volatilityConceptLessons,
  ...fxConceptLessons,
  ...commoditiesConceptLessons,
  ...realEstateConceptLessons,
  ...structuredAssetsConceptLessons,
];
export { modules };

const strategyBySlug = new Map(optionsStrategies.map((s) => [s.slug, s]));
const conceptBySlug = new Map(conceptLessons.map((l) => [l.slug, l]));
const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));

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
 */
export function computeModuleStatuses(courseSlug: string, completedLessonSlugs: Set<string>): ModuleStatus[] {
  const completedModules = new Set<string>();

  // modules are declared in an order where prerequisites precede dependents,
  // so a single pass is enough to know each module's completion by the time
  // something else depends on it.
  const statuses: ModuleStatus[] = modulesForCourse(courseSlug).map((module) => {
    const totalLessons = module.lessonSlugs.length;
    const completedLessons = module.lessonSlugs.filter((s) => completedLessonSlugs.has(s)).length;
    const completed = completedLessons === totalLessons;
    const unlocked = module.prerequisiteModuleSlugs.every((p) => completedModules.has(p));
    if (completed) completedModules.add(module.slug);
    return { module, totalLessons, completedLessons, unlocked, completed };
  });

  return statuses;
}
