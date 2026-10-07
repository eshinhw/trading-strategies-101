import type {
  User,
  ModulesResponse,
  ModuleDetail,
  LessonDetail,
  GradeResponse,
} from "./types/curriculum";
import type { Course } from "./types/course";
import type { FinalQuizStatus, FinalQuizQuestion, FinalQuizAnswerSubmission, FinalQuizGradeResponse } from "./types/finalQuiz";
import type { BooksResponse } from "./types/book";
import type { PapersResponse } from "./types/paper";
import type { ConstructionExerciseSummary, ConstructionExerciseDetail, ConstructionGradeResult } from "./types/construction";
import type { Strategy } from "./types/strategy";
import type { BankCourse, BankQuestion, QuestionKind } from "./types/practice";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  if (res.status === 204) return undefined as T;
  return res.json();
}

// --- auth ---

export function signup(email: string, password: string, name: string): Promise<{ user: User }> {
  return request("/api/auth/signup", { method: "POST", body: JSON.stringify({ email, password, name }) });
}

export function login(email: string, password: string): Promise<{ user: User }> {
  return request("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
}

export function logout(): Promise<void> {
  return request("/api/auth/logout", { method: "POST" });
}

export function fetchMe(): Promise<{ user: User }> {
  return request("/api/auth/me");
}

export function fetchAuthProviders(): Promise<{ google: boolean }> {
  return request("/api/auth/providers");
}

/** A full-page navigation (not fetch): the server redirects to Google and, after sign-in, back to `from`. */
export function googleSignInUrl(from: string): string {
  return `/api/auth/google?${new URLSearchParams({ from })}`;
}

// --- courses ---

export function fetchCourses(): Promise<Course[]> {
  return request<{ courses: Course[] }>("/api/courses").then((d) => d.courses);
}

export function fetchCourse(slug: string): Promise<Course> {
  return request(`/api/courses/${slug}`);
}

// --- final quiz ---

export function fetchFinalQuizStatus(courseSlug: string): Promise<FinalQuizStatus> {
  return request(`/api/courses/${courseSlug}/final-quiz-status`);
}

export function fetchFinalQuiz(courseSlug: string): Promise<FinalQuizQuestion[]> {
  return request<{ questions: FinalQuizQuestion[] }>(`/api/courses/${courseSlug}/final-quiz`).then((d) => d.questions);
}

export function submitFinalQuiz(courseSlug: string, answers: FinalQuizAnswerSubmission[]): Promise<FinalQuizGradeResponse> {
  return request(`/api/courses/${courseSlug}/final-quiz/submit`, {
    method: "POST",
    body: JSON.stringify({ answers }),
  });
}

// --- books ---

export function fetchBooks(): Promise<BooksResponse> {
  return request("/api/books");
}

// --- papers ---

export function fetchPapers(): Promise<PapersResponse> {
  return request("/api/papers");
}

// --- construction exercises ---

export function fetchConstructionExercises(): Promise<ConstructionExerciseSummary[]> {
  return request<{ exercises: ConstructionExerciseSummary[] }>("/api/construction").then((d) => d.exercises);
}

export function fetchConstructionExercise(slug: string): Promise<ConstructionExerciseDetail> {
  return request(`/api/construction/${slug}`);
}

export function submitConstruction(
  slug: string,
  strategySlug: string,
  params: Record<string, number>,
): Promise<ConstructionGradeResult> {
  return request(`/api/construction/${slug}/submit`, {
    method: "POST",
    body: JSON.stringify({ strategySlug, params }),
  });
}

// --- curriculum ---

export function fetchModules(courseSlug: string): Promise<ModulesResponse> {
  return request(`/api/curriculum/modules?course=${courseSlug}`);
}

export function fetchModule(slug: string): Promise<ModuleDetail> {
  return request(`/api/curriculum/modules/${slug}`);
}

export function fetchLesson(slug: string): Promise<LessonDetail> {
  return request(`/api/curriculum/lessons/${slug}`);
}

export function fetchOptionsStrategies(): Promise<{ strategies: Strategy[] }> {
  return request(`/api/curriculum/options-strategies`);
}

export function submitLesson(slug: string, body: unknown): Promise<GradeResponse> {
  return request(`/api/curriculum/lessons/${slug}/submit`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// --- practice ---

export function fetchBankCourses(): Promise<BankCourse[]> {
  return request<{ courses: BankCourse[] }>("/api/practice/quiz-bank/courses").then((d) => d.courses);
}

export function fetchBankQuestions(
  courses: string[],
  count: number,
  modules: string[] = [],
  kind: QuestionKind | "all" = "all",
  strategies: string[] = [],
): Promise<BankQuestion[]> {
  const params = new URLSearchParams({ count: String(count) });
  if (courses.length > 0) params.set("courses", courses.join(","));
  if (modules.length > 0) params.set("modules", modules.join(","));
  if (kind !== "all") params.set("kind", kind);
  if (strategies.length > 0) params.set("strategies", strategies.join(","));
  return request<{ questions: BankQuestion[] }>(`/api/practice/quiz-bank/questions?${params}`).then((d) => d.questions);
}

export function fetchBankQuestionsByIds(ids: string[], count: number): Promise<BankQuestion[]> {
  const params = new URLSearchParams({ ids: ids.join(","), count: String(count) });
  return request<{ questions: BankQuestion[] }>(`/api/practice/quiz-bank/questions?${params}`).then((d) => d.questions);
}
