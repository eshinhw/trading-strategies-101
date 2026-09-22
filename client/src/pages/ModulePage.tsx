import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchModule } from "../api";
import type { ModuleDetail } from "../types/curriculum";
import { useAuth } from "../auth/AuthContext";

export function ModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const [module, setModule] = useState<ModuleDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setModule(null);
    fetchModule(slug).then(setModule).catch((e) => setError(e.message));
  }, [slug, user]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses/options" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← Back to course
        </Link>
      </div>
    );
  }

  if (!module) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to="/courses/options" className="text-sm text-[#4f8cff] hover:underline">
        ← All modules
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{module.title}</h1>
        <p className="mt-2 text-[#9aa3b2]">{module.description}</p>
      </header>

      {!module.unlocked ? (
        <p className="rounded-lg border border-[#2a3040] bg-[#141821] px-4 py-3 text-sm text-[#898781]">
          This module is locked. Complete its prerequisite module(s) first.
        </p>
      ) : (
        <ol className="flex flex-col gap-2">
          {module.lessons.map((lesson, i) => (
            <li key={lesson.slug}>
              <Link
                to={`/lesson/${lesson.slug}`}
                className="flex items-center gap-4 rounded-lg border border-[#2a3040] bg-[#141821] p-4 transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    lesson.completed
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-[#1b2029] text-[#898781]"
                  }`}
                >
                  {lesson.completed ? "✓" : i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-[#e6e8ec]">{lesson.title}</div>
                  <div className="truncate text-sm text-[#9aa3b2]">{lesson.summary}</div>
                </div>
                {lesson.kind === "concept" && (
                  <span className="shrink-0 rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">
                    Concept
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
