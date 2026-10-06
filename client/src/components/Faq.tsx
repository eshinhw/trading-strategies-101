import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Do I need an account?",
    a: "No. You can browse every course and read every lesson, and quizzes explain each answer as you go. A free account saves your progress, shows you where to continue, and unlocks each course's final quiz.",
  },
  {
    q: "Is it free?",
    a: "Yes, creating an account is free.",
  },
  {
    q: "Do I need a finance background?",
    a: "No. Every course starts with what the asset is and why it exists, then moves on to how it's priced and used, and only then to the strategies built on it.",
  },
  {
    q: "Which course should I start with?",
    a: (
      <>
        Any of them: nothing is locked behind prerequisites. If you're not sure, the “What do you do?” section above suggests a path for your role, or you can{" "}
        <Link to="/courses" className="text-[#a99dff] hover:underline">
          browse all courses
        </Link>
        .
      </>
    ),
  },
  {
    q: "Is this investment advice?",
    a: "No. Everything here is educational content. Nothing on the site is investment advice, and past performance of any strategy does not guarantee future results.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-[#2a3040] py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Questions</div>
          <h2 className="mt-2 text-3xl font-bold text-[#e6e8ec] sm:text-4xl">Before you start</h2>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl border border-[#2a3040] bg-[#141821] open:border-[#7c6cff]/40 open:bg-[#171c26]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-[#e6e8ec] [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-[#898781] transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 8 5 5 5-5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed text-[#9aa3b2]">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
