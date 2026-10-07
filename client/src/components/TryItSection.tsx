import { useState } from "react";
import { Link } from "react-router-dom";
import { ACCENT } from "../lib/courseVisuals";
import { QuizChoiceOption } from "./QuizChoiceOption";
import { QuizFeedback } from "./QuizFeedback";

// A taste of the product on the landing page: one real-style knowledge-check question per course family,
// answerable without signing up. Nothing is graded or saved here — it mirrors what a lesson quiz feels like.
interface Sample {
  id: string;
  course: string;
  accent: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  lessonSlug: string;
  lessonTitle: string;
}

const SAMPLES: Sample[] = [
  {
    id: "options",
    course: "Options",
    accent: ACCENT.derivatives,
    prompt: "What are the two parts of an option's premium?",
    choices: ["Strike and expiration", "Intrinsic value and time value", "Delta and gamma", "Bid and ask"],
    correctIndex: 1,
    explanation:
      "Premium equals what the option would be worth if exercised now (intrinsic value) plus extra value for the chance of further gains (time value).",
    lessonSlug: "concept-how-options-are-priced",
    lessonTitle: "How Options Are Priced",
  },
  {
    id: "fixed-income",
    course: "Fixed Income",
    accent: ACCENT.rates,
    prompt: "Market interest rates rise. What generally happens to the price of an existing fixed-rate bond?",
    choices: ["It rises", "It falls", "It stays exactly the same", "It doubles"],
    correctIndex: 1,
    explanation:
      "The bond's fixed coupons look less attractive next to newly issued, higher-yielding bonds, so its price falls until its yield matches the market.",
    lessonSlug: "fixed-income-duration",
    lessonTitle: "Duration",
  },
  {
    id: "futures",
    course: "Futures",
    accent: ACCENT.macro,
    prompt: "What does novation do in a futures clearinghouse?",
    choices: [
      "Cancels the trade once it is matched",
      "Makes the buyer and seller renegotiate the price",
      "Replaces the original trade with two contracts, each facing the clearinghouse",
      "Applies only to forward contracts",
    ],
    correctIndex: 2,
    explanation:
      "The clearinghouse steps in as the counterparty to both sides, so neither trader has to worry about the credit of whoever they were matched with.",
    lessonSlug: "futures-clearinghouses-and-novation",
    lessonTitle: "Clearinghouses and Novation",
  },
];

export function TryItSection() {
  const [sampleId, setSampleId] = useState(SAMPLES[0].id);
  const [picked, setPicked] = useState<Record<string, number>>({});
  const sample = SAMPLES.find((s) => s.id === sampleId) ?? SAMPLES[0];
  const answer = picked[sample.id];
  const checked = answer !== undefined;
  const correct = answer === sample.correctIndex;

  return (
    <section className="relative overflow-hidden border-t border-[#2a3040] py-16">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Try it now</div>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#e6e8ec] sm:text-4xl">This is how every lesson ends.</h2>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-[#c3c9d4]">
            {[
              "Conceptual questions: when, how and why, not arithmetic",
              "Instant explanations, whether you're right or wrong",
              "Pass at 70% to complete the lesson",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#7c6cff]/50 bg-[#7c6cff]/20 text-[11px] font-bold text-[#c4bbff]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#7c6cff]/25 bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 shadow-2xl shadow-black/40 sm:p-6">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-colors duration-500"
            style={{ background: sample.accent, opacity: 0.18 }}
          />
          <div className="relative">
            <div role="tablist" aria-label="Sample course" className="mb-5 flex flex-wrap gap-1.5">
              {SAMPLES.map((s) => {
                const active = s.id === sample.id;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSampleId(s.id)}
                    className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition"
                    style={{
                      borderColor: active ? `${s.accent}80` : "#2a3040",
                      background: active ? `${s.accent}22` : "transparent",
                      color: active ? "#e6e8ec" : "#9aa3b2",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                    {s.course}
                    {picked[s.id] !== undefined && (
                      <span aria-hidden="true" className={picked[s.id] === s.correctIndex ? "text-emerald-400" : "text-amber-400"}>
                        {picked[s.id] === s.correctIndex ? "✓" : "•"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#898781]">Knowledge check</div>
            <p className="mb-4 text-base font-medium leading-relaxed text-[#e6e8ec]">{sample.prompt}</p>

            <div className="flex flex-col gap-2">
              {sample.choices.map((choice, i) => (
                <QuizChoiceOption
                  key={`${sample.id}-${i}`}
                  name={`sample-${sample.id}`}
                  index={i}
                  label={choice}
                  isSelected={answer === i}
                  isCorrectChoice={i === sample.correctIndex}
                  isChecked={checked}
                  onSelect={() => !checked && setPicked((p) => ({ ...p, [sample.id]: i }))}
                />
              ))}
            </div>

            {checked ? (
              <>
                <QuizFeedback correct={correct}>
                  <span className="font-medium">{correct ? "Correct." : "Not quite."}</span>{" "}
                  <span className="text-[#9aa3b2]">{sample.explanation}</span>
                </QuizFeedback>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/lesson/${sample.lessonSlug}`}
                    className="rounded-lg bg-[#7c6cff] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                  >
                    Read “{sample.lessonTitle}” →
                  </Link>
                  <button
                    onClick={() =>
                      setPicked((p) => {
                        const next = { ...p };
                        delete next[sample.id];
                        return next;
                      })
                    }
                    className="text-sm text-[#a99dff] hover:underline"
                  >
                    Try again
                  </button>
                </div>
              </>
            ) : (
              <p className="mt-4 text-xs text-[#898781]">Pick an answer to see the explanation.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
