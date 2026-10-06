export interface BankCourse {
  slug: string;
  title: string;
  questionCount: number;
}

export interface BankQuestion {
  id: string;
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
