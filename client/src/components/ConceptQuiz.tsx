import { useState } from "react";
import type { ConceptQuizPrompt } from "../types/curriculum";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";
import { QuizChoiceOption } from "./QuizChoiceOption";
import { QuizFeedback } from "./QuizFeedback";
import { QuizNavButtons } from "./QuizNavButtons";
import type { GradeResponse } from "../types/curriculum";

export function ConceptQuiz({
  lessonSlug,
  questions,
  onGraded,
}: {
  lessonSlug: string;
  questions: ConceptQuizPrompt[];
  onGraded?: (result: GradeResponse) => void;
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
      <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Knowledge check
        </h3>
        <QuizResultPanel result={result} onRetry={retry} />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <QuizProgress current={currentIndex} total={questions.length} />

      <p className="mb-3 text-sm text-[#e6e8ec]">{q.prompt}</p>
      <div className="flex flex-col gap-1.5">
        {q.choices.map((choice, ci) => (
          <QuizChoiceOption
            key={ci}
            name={q.id}
            label={choice}
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
          <span className="text-[#9aa3b2]">{q.explanation}</span>
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
    </div>
  );
}
