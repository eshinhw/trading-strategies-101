export interface BankModule {
  slug: string;
  title: string;
  questionCount: number;
}

export interface BankCourse {
  slug: string;
  title: string;
  questionCount: number;
  modules: BankModule[];
}

export interface BankQuestion {
  id: string;
  courseSlug: string;
  courseTitle: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}
