import type { ReactNode } from "react";

// Lightweight inline formatting for lesson paragraphs: **bold**, *italic*, __underline__.
// Parsed into React elements (never raw HTML), and nesting isn't supported.
const TOKEN = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*)/g;

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("__") && part.endsWith("__") && part.length > 4) {
      return <u key={i}>{part.slice(2, -2)}</u>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
  return <>{nodes}</>;
}
