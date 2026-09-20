export interface ConceptQuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface ConceptLesson {
  kind: "concept";
  slug: string;
  title: string;
  summary: string;
  /** paragraphs of body text */
  body: string[];
  quiz: ConceptQuizQuestion[];
}

export interface StrategyLessonRef {
  kind: "strategy";
  /** lesson slug === the underlying Strategy.slug */
  slug: string;
}

export type LessonRef = ConceptLesson | StrategyLessonRef;

export interface Module {
  slug: string;
  title: string;
  description: string;
  order: number;
  prerequisiteModuleSlugs: string[];
  lessonSlugs: string[];
}
