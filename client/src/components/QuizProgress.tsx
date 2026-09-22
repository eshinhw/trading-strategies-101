export function QuizProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8fada0]">
          Knowledge check
        </h3>
        <span className="text-xs text-[#6f8a7c]">
          Question {current + 1} of {total}
        </span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current ? "bg-[#14b8a6]" : i === current ? "bg-[#14b8a6]/40" : "bg-[#142b20]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
