// A small save-for-later toggle for catalog cards and rows. Saved items live in the visitor's own browser.
export function BookmarkButton({
  saved,
  onToggle,
  label,
}: {
  saved: boolean;
  onToggle: () => void;
  /** what is being saved, for the accessible name, e.g. a book's title */
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from your saved list` : `Save ${label} for later`}
      title={saved ? "Saved. Click to remove" : "Save for later"}
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition ${
        saved ? "text-[#a99dff] hover:bg-white/5" : "text-[#898781] hover:bg-white/5 hover:text-[#e6e8ec]"
      }`}
    >
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
        <path d="M5.5 3.5h9a1 1 0 0 1 1 1V17l-5.5-3.5L4.5 17V4.5a1 1 0 0 1 1-1Z" />
      </svg>
    </button>
  );
}
