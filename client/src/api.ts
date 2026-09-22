import type {
  User,
  ModulesResponse,
  ModuleDetail,
  LessonDetail,
  GradeResponse,
} from "./types/curriculum";
import type { Course } from "./types/course";
import type { ExamStatus, ExamQuestion, ExamAnswerSubmission, ExamGradeResponse } from "./types/exam";

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

// --- courses ---

export function fetchCourses(): Promise<Course[]> {
  return request<{ courses: Course[] }>("/api/courses").then((d) => d.courses);
}

export function fetchCourse(slug: string): Promise<Course> {
  return request(`/api/courses/${slug}`);
}

// --- exam ---

export function fetchExamStatus(courseSlug: string): Promise<ExamStatus> {
  return request(`/api/courses/${courseSlug}/exam-status`);
}

export function fetchExam(courseSlug: string): Promise<ExamQuestion[]> {
  return request<{ questions: ExamQuestion[] }>(`/api/courses/${courseSlug}/exam`).then((d) => d.questions);
}

export function submitExam(courseSlug: string, answers: ExamAnswerSubmission[]): Promise<ExamGradeResponse> {
  return request(`/api/courses/${courseSlug}/exam/submit`, {
    method: "POST",
    body: JSON.stringify({ answers }),
  });
}

// --- curriculum ---

export function fetchModules(): Promise<ModulesResponse> {
  return request("/api/curriculum/modules");
}

export function fetchModule(slug: string): Promise<ModuleDetail> {
  return request(`/api/curriculum/modules/${slug}`);
}

export function fetchLesson(slug: string): Promise<LessonDetail> {
  return request(`/api/curriculum/lessons/${slug}`);
}

export function submitLesson(slug: string, body: unknown): Promise<GradeResponse> {
  return request(`/api/curriculum/lessons/${slug}/submit`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
