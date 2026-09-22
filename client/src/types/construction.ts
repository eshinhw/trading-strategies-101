export interface ConstructionExerciseSummary {
  slug: string;
  moduleSlug: string;
  title: string;
}

export interface ConstructionCandidate {
  slug: string;
  name: string;
}

export interface ConstructionExerciseDetail {
  slug: string;
  moduleSlug: string;
  moduleTitle: string | null;
  title: string;
  scenario: string;
  goalChecklist: string[];
  candidates: ConstructionCandidate[];
}

export interface ConstructionChecklistItem {
  label: string;
  met: boolean;
}

export interface ConstructionGradeResult {
  passed: boolean;
  checklist: ConstructionChecklistItem[];
  stats: {
    breakevens: number[];
    maxProfit: number | "unlimited";
    maxLoss: number | "unlimited";
  };
}
