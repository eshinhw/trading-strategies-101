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
        <Link to="/courses/options" className="mt-4 inline-block text-[#34c98a] hover:underline">
          ← Back to course
        </Link>
      </div>
    );
  }

  if (!module) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#6f8a7c]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to="/courses/options" className="text-sm text-[#34c98a] hover:underline">
        ← All modules
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#e6f2ec]">{module.title}</h1>
        <p className="mt-2 text-[#8fada0]">{module.description}</p>
      </header>

      {!module.unlocked ? (
        <p className="rounded-lg border border-[#1e3d2f] bg-[#0e2118] px-4 py-3 text-sm text-[#6f8a7c]">
          This module is locked. Complete its prerequisite module(s) first.
        </p>
      ) : (
        <ol className="flex flex-col gap-2">
          {module.lessons.map((lesson, i) => (
            <li key={lesson.slug}>
              <Link
                to={`/lesson/${lesson.slug}`}
                className="flex items-center gap-4 rounded-lg border border-[#1e3d2f] bg-[#0e2118] p-4 transition hover:border-[#34c98a]/50 hover:bg-[#12281d]"
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    lesson.completed
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-[#142b20] text-[#6f8a7c]"
                  }`}
                >
                  {lesson.completed ? "✓" : i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-[#e6f2ec]">{lesson.title}</div>
                  <div className="truncate text-sm text-[#8fada0]">{lesson.summary}</div>
                </div>
                {lesson.kind === "concept" && (
                  <span className="shrink-0 rounded-full border border-[#1e3d2f] px-2 py-0.5 text-xs text-[#6f8a7c]">
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
