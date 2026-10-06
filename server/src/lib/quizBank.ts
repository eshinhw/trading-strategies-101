import { courses } from "../data/courses/index.js";
import { modulesForCourse, resolveLesson, quizForLesson } from "../data/curriculum/index.js";

// The QuizBank is open practice over the lessons' own knowledge-check questions: nothing is graded or saved here,
// so (like a lesson page) the answer and explanation travel with each question for instant feedback.

export interface BankQuestion {
  id: string; // unique across the pool: "<lessonSlug>:<questionId>"
  courseSlug: string;
  courseTitle: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface BankCourse {
  slug: string;
  title: string;
  questionCount: number;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function poolForCourse(courseSlug: string): BankQuestion[] {
  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) return [];
  const out: BankQuestion[] = [];
  for (const module of modulesForCourse(courseSlug)) {
    for (const lessonSlug of module.lessonSlugs) {
      const resolved = resolveLesson(lessonSlug);
      if (!resolved) continue;
      const lessonTitle = resolved.kind === "concept" ? resolved.lesson.title : resolved.strategy.name;
      for (const q of quizForLesson(lessonSlug)) {
        out.push({
          id: `${lessonSlug}:${q.id}`,
          courseSlug,
          courseTitle: course.title,
          moduleTitle: module.title,
          lessonSlug,
          lessonTitle,
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

/** Every course that has at least one question, with how many. */
export function bankCourses(): BankCourse[] {
  return courses
    .map((c) => ({ slug: c.slug, title: c.title, questionCount: poolForCourse(c.slug).length }))
    .filter((c) => c.questionCount > 0);
}

/**
 * A random set of questions from the given courses (all courses if none are named). Courses are sampled evenly, so
 * a big course (Options) doesn't drown out a small one, and questions are spread across lessons: at most two per
 * lesson until the pool runs short, so a session doesn't camp on one topic.
 */
export function sampleBankQuestions(courseSlugs: string[], count: number): BankQuestion[] {
  const slugs = courseSlugs.length > 0 ? courseSlugs : courses.map((c) => c.slug);
  const queues = slugs.map((slug) => shuffle(poolForCourse(slug))).filter((q) => q.length > 0);

  const perLesson = new Map<string, number>();
  const picked: BankQuestion[] = [];
  const leftovers: BankQuestion[] = [];

  // Round-robin: one question from each course in turn.
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
