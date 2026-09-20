export function QuizProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Knowledge check
        </h3>
        <span className="text-xs text-[#898781]">
          Question {current + 1} of {total}
        </span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current ? "bg-[#4f8cff]" : i === current ? "bg-[#4f8cff]/40" : "bg-[#1b2029]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
