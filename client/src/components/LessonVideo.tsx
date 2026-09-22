// No lesson populates a video block yet — this exists so the content-block
// schema (server/src/data/curriculum/types.ts LessonBlock) is ready to use
// without further client work once a real video URL is added to a lesson.
export function LessonVideo({ url, caption }: { url: string; caption?: string }) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={url}
          title={caption ?? "Lesson video"}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <p className="mt-3 text-center text-sm text-[#9aa3b2]">{caption}</p>}
    </div>
  );
}
