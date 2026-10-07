/** "concept": tests an idea directly. "calc": a short business scenario where you work out a number first. */
export type QuestionKind = "concept" | "calc";

export interface BankModule {
  slug: string;
  title: string;
  questionCount: number;
  conceptCount: number;
  calcCount: number;
}

/** A strategy lesson that can be drilled on its own in the Quiz Bank. */
export interface BankStrategy {
  slug: string;
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
  modules: BankModule[];
  strategies: BankStrategy[];
}

export interface BankQuestion {
  id: string;
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
