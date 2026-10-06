import { useState, type ReactNode } from "react";
import type { ConceptQuizPrompt } from "../types/curriculum";
import { submitLesson } from "../api";
import { QuizResultPanel, type QuizNext } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";
import { QuizChoiceOption } from "./QuizChoiceOption";
import { QuizFeedback } from "./QuizFeedback";
import { QuizNavButtons } from "./QuizNavButtons";
import { InlineText } from "./InlineText";
import type { GradeResponse, LessonProgress } from "../types/curriculum";

export function ConceptQuiz({
  lessonSlug,
  questions,
  onGraded,
  nextLesson,
  progress,
}: {
  lessonSlug: string;
  questions: ConceptQuizPrompt[];
  onGraded?: (result: GradeResponse) => void;
  nextLesson?: QuizNext;
  /** the learner's history on this lesson, if signed in */
  progress?: LessonProgress | null;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isChecked = Boolean(checked[q?.id]);
  const isCorrect = answers[q?.id] === q?.correctIndex;

  function selectChoice(choiceIndex: number) {
    if (isChecked) return; // locked once checked — no changing your answer after seeing it
    setAnswers((a) => ({ ...a, [q.id]: choiceIndex }));
    setChecked((c) => ({ ...c, [q.id]: true }));
  }

  async function finish(finalAnswers: Record<string, number>) {
    setAuthRequired(false);
    setSubmitting(true);
    try {
      const res = await submitLesson(lessonSlug, { answers: finalAnswers });
      setResult(res);
      onGraded?.(res);
    } catch (err) {
      if (err instanceof Error && err.message.toLowerCase().includes("not signed in")) {
        setAuthRequired(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (isLast) {
      finish(answers);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function retry() {
    setResult(null);
    setAnswers({});
    setChecked({});
    setCurrentIndex(0);
  }

  if (result) {
    return (
      <QuizCard progress={progress}>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Knowledge check</h3>
        <QuizResultPanel result={result} onRetry={retry} next={nextLesson} />
      </QuizCard>
    );
  }

  return (
    <QuizCard progress={progress}>
      <QuizProgress current={currentIndex} total={questions.length} />

      <p className="mb-4 text-base font-medium leading-relaxed text-[#e6e8ec]">
        <InlineText text={q.prompt} />
      </p>
      <div className="flex flex-col gap-2">
        {q.choices.map((choice, ci) => (
          <QuizChoiceOption
            key={ci}
            name={q.id}
            index={ci}
            label={<InlineText text={choice} />}
            isSelected={answers[q.id] === ci}
            isCorrectChoice={ci === q.correctIndex}
            isChecked={isChecked}
            onSelect={() => selectChoice(ci)}
            onKeyDown={(e) => {
              // once checked, Enter advances — kept on the input (rather
              // than disabling it) so it's still focused and can receive
              // the keypress; selectChoice() already no-ops further
              // changes once checked.
              if (e.key === "Enter" && isChecked) {
                e.preventDefault();
                next();
              }
            }}
          />
        ))}
      </div>

      {isChecked && (
        <QuizFeedback correct={isCorrect}>
          <span className="font-medium">{isCorrect ? "Correct." : "Not quite."}</span>{" "}
          <span className="text-[#9aa3b2]"><InlineText text={q.explanation} /></span>
        </QuizFeedback>
      )}

      <QuizNavButtons
        onBack={() => setCurrentIndex((i) => i - 1)}
        backDisabled={currentIndex === 0}
        isChecked={isChecked}
        isLast={isLast}
        submitting={submitting}
        onNext={next}
      />

      {authRequired && (
        <p className="mt-3 text-sm text-amber-400">
          Sign in to submit and save your progress on this lesson.
        </p>
      )}
    </QuizCard>
  );
}

function QuizCard({ children, progress }: { children: ReactNode; progress?: LessonProgress | null }) {
  return (
    <section
      id="knowledge-check"
      className="relative scroll-mt-32 overflow-hidden rounded-2xl border border-[#7c6cff]/25 bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 sm:p-6"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#7c6cff] opacity-15 blur-3xl" />
      <div className="relative">
        {progress && progress.attempts > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-[#898781]">
            {progress.completed && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-400">
                ✓ Passed
              </span>
            )}
            {progress.bestScore !== null && <span>Best score {Math.round(progress.bestScore * 100)}%</span>}
            <span>
              · {progress.attempts} attempt{progress.attempts === 1 ? "" : "s"}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
