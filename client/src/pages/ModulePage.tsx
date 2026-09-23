import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchModule, fetchConstructionExercises } from "../api";
import type { ModuleDetail } from "../types/curriculum";
import type { ConstructionExerciseSummary } from "../types/construction";
import { useAuth } from "../auth/AuthContext";

export function ModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const [module, setModule] = useState<ModuleDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<ConstructionExerciseSummary[]>([]);

  useEffect(() => {
    if (!slug) return;
    setModule(null);
    fetchModule(slug).then(setModule).catch((e) => setError(e.message));
    fetchConstructionExercises()
      .then((all) => setExercises(all.filter((ex) => ex.moduleSlug === slug)))
      .catch(() => setExercises([]));
  }, [slug, user]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← All courses
        </Link>
      </div>
    );
  }

  if (!module) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to={`/courses/${module.courseSlug}`} className="text-sm text-[#4f8cff] hover:underline">
        ← All modules
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{module.title}</h1>
        <p className="mt-2 text-[#9aa3b2]">{module.description}</p>
      </header>

      {!module.unlocked ? (
        <p className="rounded-lg border border-[#2a3040] bg-[#141821] card-glow px-4 py-3 text-sm text-[#898781]">
          This module is locked. Complete its prerequisite module(s) first.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {module.lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              to={`/lesson/${lesson.slug}`}
              className="flex items-center gap-3 rounded-lg border border-[#2a3040] bg-[#141821] card-glow p-3 transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  lesson.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-[#1b2029] text-[#898781]"
                }`}
              >
                {lesson.completed ? "✓" : ""}
              </div>
              <div className="min-w-0 flex-1 truncate text-sm text-[#e6e8ec]">{lesson.title}</div>
            </Link>
          ))}
        </div>
      )}

      {module.unlocked && exercises.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
            Construction exercises
          </h2>
          <p className="mb-4 text-sm text-[#898781]">
            No pre-picked strategy — you're given a goal and pick + configure the strategy yourself.
          </p>
          <ol className="flex flex-col gap-2">
            {exercises.map((ex) => (
              <li key={ex.slug}>
                <Link
                  to={`/construction/${ex.slug}`}
                  className="flex items-center gap-4 rounded-lg border border-[#2a3040] bg-[#141821] card-glow p-4 transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
                >
                  <div className="min-w-0 flex-1 font-medium text-[#e6e8ec]">{ex.title}</div>
                  <span className="shrink-0 rounded-full border border-[#4f8cff]/30 bg-[#4f8cff]/10 px-2 py-0.5 text-xs font-medium text-[#4f8cff]">
                    Build it
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
