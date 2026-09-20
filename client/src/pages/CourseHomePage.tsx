import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchModules } from "../api";
import type { ModulesResponse } from "../types/curriculum";
import { useAuth } from "../auth/AuthContext";

export function CourseHomePage() {
  const { user } = useAuth();
  const [data, setData] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchModules().then(setData).catch((e) => setError(e.message));
  }, [user]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Options Strategy Course</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          A structured course for early-career analysts and traders, built from{" "}
          <em>151 Trading Strategies</em> (Kakushadze &amp; Serur, 2018). Work through modules in
          order — each one builds on strategies from the last — with an interactive payoff
          sandbox and a short knowledge check on every lesson.
        </p>
        {!user && (
          <div className="mt-4 rounded-lg border border-[#4f8cff]/30 bg-[#4f8cff]/10 px-4 py-3 text-sm text-[#9aa3b2]">
            You can browse and try lessons without an account, but{" "}
            <Link to="/signup" className="text-[#4f8cff] hover:underline">
              sign up
            </Link>{" "}
            to save your progress and unlock modules as you complete them.
          </div>
        )}
      </header>

      {error && <p className="text-red-400">{error}</p>}
      {!data && !error && <p className="text-[#898781]">Loading course…</p>}

      {data && (
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

          <div className="flex flex-col gap-3">
            {data.modules
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((m, i) => (
                <ModuleRow key={m.slug} module={m} index={i + 1} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

function ModuleRow({ module: m, index }: { module: ModulesResponse["modules"][number]; index: number }) {
  const pct = m.totalLessons ? Math.round((m.completedLessons / m.totalLessons) * 100) : 0;

  const content = (
    <div
      className={`flex items-center gap-4 rounded-xl border p-5 transition ${
        m.unlocked
          ? "border-[#2a3040] bg-[#141821] hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
          : "border-[#2a3040]/60 bg-[#101319] opacity-60"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          m.completed
            ? "bg-emerald-500/20 text-emerald-400"
            : m.unlocked
              ? "bg-[#4f8cff]/20 text-[#4f8cff]"
              : "bg-[#1b2029] text-[#898781]"
        }`}
      >
        {m.completed ? "✓" : index}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[#e6e8ec]">{m.title}</h3>
          {!m.unlocked && (
            <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">
              Locked
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-[#9aa3b2]">{m.description}</p>
        {m.unlocked && (
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-[#1b2029]">
              <div className="h-full rounded-full bg-[#4f8cff]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs text-[#898781]">
              {m.completedLessons}/{m.totalLessons}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return m.unlocked ? <Link to={`/module/${m.slug}`}>{content}</Link> : <div>{content}</div>;
}
