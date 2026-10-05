import type { ReactNode } from "react";
import katex from "katex";

// Lightweight inline formatting for lesson text: **bold**, *italic*, __underline__ and $math$.
// Parsed into React elements (never raw HTML apart from KaTeX's own output), and nesting isn't
// supported. Inline math follows Pandoc's rules so prices like "$5 and $6" aren't mistaken for it:
// the opening $ must be followed by a non-space, the closing $ must follow a non-space and not be
// followed by a digit. Write \$ for a literal dollar sign.
const TOKEN = /(\\\$|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|\$(?=\S)[^$\n]*?(?<=\S)\$(?!\d))/g;

function renderMath(latex: string, displayMode: boolean): string {
  return katex.renderToString(latex, { throwOnError: false, displayMode });
}

// A paragraph that is nothing but "$$ ... $$" is typeset as a centered display equation.
export function displayMathOf(text: string): string | null {
  const m = /^\$\$([\s\S]+)\$\$$/.exec(text.trim());
  return m ? m[1].trim() : null;
}

export function DisplayMath({ latex }: { latex: string }) {
  return (
    <div
      className="overflow-x-auto text-center text-[#e6e8ec] [&_.katex-display]:my-1"
      dangerouslySetInnerHTML={{ __html: renderMath(latex, true) }}
    />
  );
}

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = text.split(TOKEN).map((part, i) => {
    if (part === "\\$") return "$";
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("__") && part.endsWith("__") && part.length > 4) {
      return <u key={i}>{part.slice(2, -2)}</u>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
      return <span key={i} dangerouslySetInnerHTML={{ __html: renderMath(part.slice(1, -1), false) }} />;
    }
    return part;
  });
  return <>{nodes}</>;
}
