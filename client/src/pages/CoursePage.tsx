import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourse, fetchModules, fetchExamStatus } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import type { ExamStatus } from "../types/exam";
import { LessonListItem } from "../components/LessonListItem";

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setCourse(null);
    setError(null);
    fetchCourse(slug)
      .then(setCourse)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!course) {
    return <div className="mx-auto max-w-7xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Link to="/courses" className="text-sm text-[#4f8cff] hover:underline">
        ← All Courses
      </Link>

      <header className="mt-4 mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {/* <span className="rounded-full border border-[#2a3040] px-2.5 py-0.5 text-xs text-[#9aa3b2]">
            §{course.section}
          </span> */}
          {course.status === "coming-soon" && (
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              Coming soon
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{course.title}</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">{course.description}</p>
      </header>

      {course.status === "available" ? (
        <AvailableCourseModules slug={course.slug} />
      ) : (
        <ComingSoonStrategies course={course} />
      )}
    </div>
  );
}

function AvailableCourseModules({ slug }: { slug: string }) {
  const [data, setData] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(null);
    setError(null);
    fetchModules(slug)
      .then(setData)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) return <p className="text-red-400">{error}</p>;
  if (!data) return <p className="text-[#898781]">Loading modules…</p>;

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1b2029]">
          <div
            className="h-full rounded-full bg-[#4f8cff] transition-all"
            style={{ width: `${(data.totalCompleted / data.totalLessons) * 100}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-sm text-[#9aa3b2]">
          {data.totalCompleted} / {data.totalLessons} lessons
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {data.modules
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((m) => (
            <ModuleSection key={m.slug} module={m} />
          ))}
      </div>

      <ExamSection slug={slug} />
    </>
  );
}

function ExamSection({ slug }: { slug: string }) {
  const [status, setStatus] = useState<ExamStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExamStatus(slug)
      .then(setStatus)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error || !status) return null; // no exam for this course, or still loading — stay quiet either way

  const passed = status.progress?.passed ?? false;

  return (
    <div
      className={`mt-6 rounded-xl border p-5 ${
        status.unlocked
          ? passed
            ? "card-glow border-emerald-500/30 bg-emerald-500/10"
            : "card-glow border-[#4f8cff]/30 bg-[#4f8cff]/10"
          : "border-[#2a3040]/60 bg-[#101319] opacity-60"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[#e6e8ec]">Final Quiz</h3>
            {passed && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                Completed
              </span>
            )}
            {!status.unlocked && (
              <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">Locked</span>
            )}
          </div>
          <p className="mt-1 text-sm text-[#9aa3b2]">
            {status.unlocked
              ? passed
                ? `You've completed this course — best score ${Math.round((status.progress?.bestScore ?? 0) * 100)}%. Retake any time.`
                : "A no-hints test across every module, answers revealed only at the end — the real capstone for this course."
              : "Complete every module above to unlock the final quiz."}
          </p>
        </div>
        {status.unlocked && (
          <Link
            to={`/courses/${slug}/exam`}
            className="shrink-0 rounded-lg bg-[#4f8cff] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d7ce0]"
          >
            {passed ? "Retake quiz" : "Take the quiz"}
          </Link>
        )}
      </div>
    </div>
  );
}

function ModuleSection({ module: m }: { module: ModulesResponse["modules"][number] }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[#e6e8ec]">{m.title}</h3>
          {!m.unlocked && (
            <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">Locked</span>
          )}
        </div>
        {m.unlocked && (
          <span className="whitespace-nowrap text-xs text-[#898781]">
            {m.completedLessons}/{m.totalLessons}
          </span>
        )}
      </div>

      {!m.unlocked ? (
        <p className="text-sm text-[#898781]">Complete the prerequisite module(s) above to unlock.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {m.lessons.map((lesson) => (
            <LessonListItem key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
}

function ComingSoonStrategies({ course }: { course: Course }) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">What this course will cover</h3>
      <p className="mb-4 text-sm text-[#898781]">
        {course.strategyCount} strategies from §{course.section} of the curriculum — lessons for this course haven't
        been built yet.
      </p>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {course.strategyTitles?.map((title) => (
          <li key={title} className="flex items-start gap-2 text-sm text-[#e6e8ec]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4f8cff]" />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
