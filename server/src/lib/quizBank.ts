import { courses } from "../data/courses/index.js";
import { bankExtrasForLesson, modulesForCourse, resolveLesson, quizForLesson } from "../data/curriculum/index.js";
import type { QuestionKind } from "../data/curriculum/types.js";

// The QuizBank is open practice over the lessons' own knowledge-check questions, plus bank-only extras (content/quiz-bank): nothing is graded or saved here,
// so (like a lesson page) the answer and explanation travel with each question for instant feedback.

export interface BankQuestion {
  id: string; // unique across the pool: "<lessonSlug>:<questionId>"
  courseSlug: string;
  courseTitle: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  kind: QuestionKind;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

/** Which kind of question a session draws from. */
export type KindFilter = QuestionKind | "all";

export interface BankModule {
  slug: string;
  title: string;
  questionCount: number;
  conceptCount: number;
  calcCount: number;
}

/** A strategy lesson (an Options strategy, or a lesson in a course's "Strategies" module) a learner can drill on its own. */
export interface BankStrategy {
  slug: string; // the lesson slug
  title: string;
  moduleSlug: string;
  moduleTitle: string;
  questionCount: number;
  conceptCount: number;
  calcCount: number;
}

export interface BankCourse {
  slug: string;
  title: string;
  questionCount: number;
  conceptCount: number;
  calcCount: number;
  /** in curriculum order, so a learner can narrow a session to part of a course */
  modules: BankModule[];
  /** the course's strategy lessons, in curriculum order */
  strategies: BankStrategy[];
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const matchesKind = (q: BankQuestion, kind: KindFilter) => kind === "all" || q.kind === kind;

/** Strategy lessons are the Options strategies plus every lesson in a module named for strategies or trades. */
const STRATEGY_MODULE = /strateg|trades/i;

function poolForCourse(courseSlug: string): BankQuestion[] {
  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) return [];
  const out: BankQuestion[] = [];
  for (const module of modulesForCourse(courseSlug)) {
    for (const lessonSlug of module.lessonSlugs) {
      const resolved = resolveLesson(lessonSlug);
      if (!resolved) continue;
      const lessonTitle = resolved.kind === "concept" ? resolved.lesson.title : resolved.strategy.name;
      for (const q of [...quizForLesson(lessonSlug), ...bankExtrasForLesson(lessonSlug)]) {
        out.push({
          id: `${lessonSlug}:${q.id}`,
          courseSlug,
          courseTitle: course.title,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          lessonSlug,
          lessonTitle,
          kind: q.kind,
          prompt: q.prompt,
          choices: q.choices,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
        });
      }
    }
  }
  return out;
}

/** Every course that has at least one question, with how many of each kind, and how they split across its modules. */
export function bankCourses(): BankCourse[] {
  return courses
    .map((c) => {
      const pool = poolForCourse(c.slug);
      const countOf = (list: BankQuestion[], kind: QuestionKind) => list.filter((q) => q.kind === kind).length;
      const modules = modulesForCourse(c.slug)
        .slice()
        .sort((a, b) => a.order - b.order)
        .map((m) => {
          const inModule = pool.filter((q) => q.moduleSlug === m.slug);
          return {
            slug: m.slug,
            title: m.title,
            questionCount: inModule.length,
            conceptCount: countOf(inModule, "concept"),
            calcCount: countOf(inModule, "calc"),
          };
        })
        .filter((m) => m.questionCount > 0);
      const strategies: BankStrategy[] = [];
      for (const m of modulesForCourse(c.slug).slice().sort((a, b) => a.order - b.order)) {
        for (const lessonSlug of m.lessonSlugs) {
          const resolved = resolveLesson(lessonSlug);
          if (!resolved || !(resolved.kind === "strategy" || STRATEGY_MODULE.test(m.title))) continue;
          const inLesson = pool.filter((q) => q.lessonSlug === lessonSlug);
          if (inLesson.length === 0) continue;
          strategies.push({
            slug: lessonSlug,
            title: inLesson[0].lessonTitle,
            moduleSlug: m.slug,
            moduleTitle: m.title,
            questionCount: inLesson.length,
            conceptCount: countOf(inLesson, "concept"),
            calcCount: countOf(inLesson, "calc"),
          });
        }
      }
      return {
        slug: c.slug,
        title: c.title,
        questionCount: pool.length,
        conceptCount: countOf(pool, "concept"),
        calcCount: countOf(pool, "calc"),
        modules,
        strategies,
      };
    })
    .filter((c) => c.questionCount > 0);
}

/** Specific questions by id (as saved from an earlier session), in random order. Unknown ids are ignored. */
export function bankQuestionsByIds(ids: string[], count: number): BankQuestion[] {
  const wanted = new Set(ids);
  if (wanted.size === 0) return [];
  const found = courses.flatMap((c) => poolForCourse(c.slug)).filter((q) => wanted.has(q.id));
  return shuffle(found).slice(0, count);
}

/**
 * A random set of questions from the given courses (all courses if none are named). Courses are sampled evenly, so
 * a big course (Options) doesn't drown out a small one, and questions are spread across lessons: at most two per
 * lesson until the pool runs short, so a session doesn't camp on one topic.
 *
 * Naming lessonSlugs (strategies) narrows the session to those lessons and spreads it evenly across them.
 *
 * With kind "all" the session is about one calculation for every two concept checks (as far as each kind has
 * enough questions), so calculations don't vanish into the much larger concept pool.
 */
export function sampleBankQuestions(
  courseSlugs: string[],
  count: number,
  moduleSlugs: string[] = [],
  kind: KindFilter = "all",
  lessonSlugs: string[] = [],
): BankQuestion[] {
  if (kind !== "all") return sampleOneKind(courseSlugs, count, moduleSlugs, kind, new Set(), lessonSlugs);

  const calc = sampleOneKind(courseSlugs, Math.round(count / 3), moduleSlugs, "calc", new Set(), lessonSlugs);
  const taken = new Set(calc.map((q) => q.id));
  const concept = sampleOneKind(courseSlugs, count - calc.length, moduleSlugs, "concept", taken, lessonSlugs);
  concept.forEach((q) => taken.add(q.id));
  const picked = [...calc, ...concept];
  if (picked.length < count) picked.push(...sampleOneKind(courseSlugs, count - picked.length, moduleSlugs, "all", taken, lessonSlugs));
  return shuffle(picked);
}

function sampleOneKind(
  courseSlugs: string[],
  count: number,
  moduleSlugs: string[],
  kind: KindFilter,
  exclude: Set<string>,
  lessonSlugs: string[] = [],
): BankQuestion[] {
  if (count <= 0) return [];
  const slugs = courseSlugs.length > 0 ? courseSlugs : courses.map((c) => c.slug);
  const onlyModules = new Set(moduleSlugs);
  const onlyLessons = new Set(lessonSlugs);
  const pool = slugs
    .flatMap(poolForCourse)
    .filter(
      (q) =>
        (onlyLessons.size === 0 || onlyLessons.has(q.lessonSlug)) &&
        (onlyModules.size === 0 || onlyModules.has(q.moduleSlug)) &&
        matchesKind(q, kind) &&
        !exclude.has(q.id),
    );

  // Sample evenly across the chosen strategies, else across modules when the learner narrowed to modules, else across courses.
  const groups = new Map<string, BankQuestion[]>();
  for (const q of pool) {
    const key = onlyLessons.size > 0 ? q.lessonSlug : onlyModules.size > 0 ? q.moduleSlug : q.courseSlug;
    groups.set(key, [...(groups.get(key) ?? []), q]);
  }
  const queues = [...groups.values()].map((g) => shuffle(g));

  const perLesson = new Map<string, number>();
  const picked: BankQuestion[] = [];
  const leftovers: BankQuestion[] = [];

  // Round-robin: one question from each group in turn.
  while (picked.length < count && queues.some((q) => q.length > 0)) {
    for (const queue of queues) {
      if (picked.length >= count) break;
      const q = queue.shift();
      if (!q) continue;
      const used = perLesson.get(q.lessonSlug) ?? 0;
      if (used < 2) {
        picked.push(q);
        perLesson.set(q.lessonSlug, used + 1);
      } else {
        leftovers.push(q);
      }
    }
  }
  for (const q of shuffle(leftovers)) {
    if (picked.length >= count) break;
    picked.push(q);
  }
  return shuffle(picked);
}
