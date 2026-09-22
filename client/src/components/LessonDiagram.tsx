import { lessonDiagrams } from "./lessonDiagrams";

export function LessonDiagram({ diagramId, caption }: { diagramId: string; caption?: string }) {
  const Diagram = lessonDiagrams[diagramId];
  if (!Diagram) return null;

  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <Diagram />
      {caption && <p className="mt-3 text-center text-sm text-[#9aa3b2]">{caption}</p>}
    </div>
  );
}
