import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ConceptLesson, ConceptQuizQuestion, LessonBlock } from "./types.js";

// Concept lessons live as Markdown files under server/content/lessons/<group>/<slug>.md and are
// parsed into the same ConceptLesson objects the rest of the server already uses. See
// server/content/README.md for the authoring format.

const CONTENT_ROOT = fileURLToPath(new URL("../../../content/lessons", import.meta.url));
const STRATEGY_QUIZ_ROOT = fileURLToPath(new URL("../../../content/strategy-quizzes", import.meta.url));

class LessonParseError extends Error {
  constructor(file: string, line: number, message: string) {
    super(`${file}:${line}: ${message}`);
  }
}

const ORDERED_ITEM = /^\d+\.\s+(.*)$/;
const UNORDERED_ITEM = /^[-*]\s+(.*)$/;

function parseFrontmatter(lines: string[], file: string): { meta: Record<string, string>; next: number } {
  if (lines[0]?.trim() !== "---") throw new LessonParseError(file, 1, "file must start with a --- front matter block");
  const meta: Record<string, string> = {};
  let i = 1;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "---") return { meta, next: i + 1 };
    if (line.trim() === "") continue;
    const colon = line.indexOf(":");
    if (colon === -1) throw new LessonParseError(file, i + 1, `expected "key: value", got "${line}"`);
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }
  throw new LessonParseError(file, lines.length, "front matter block is never closed with ---");
}

function parseBody(lines: string[], startLine: number, file: string): LessonBlock[] {
  const blocks: LessonBlock[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push(list.ordered ? { type: "list", ordered: true, items: list.items } : { type: "list", items: list.items });
    list = null;
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
  };

  // A "$$ ... $$" display-math block may span several lines (even with blank lines inside), so it
  // is collected whole and emitted as one paragraph whose text keeps its line breaks.
  let math = null as { lines: string[]; startLine: number } | null;

  lines.forEach((raw, idx) => {
    const lineNo = startLine + idx;
    const trimmed = raw.trim();

    if (math) {
      math.lines.push(trimmed);
      if (trimmed.endsWith("$$")) {
        blocks.push({ type: "paragraph", text: math.lines.join("\n") });
        math = null;
      }
      return;
    }

    if (trimmed.startsWith("$$")) {
      flushAll();
      if (trimmed.length >= 4 && trimmed.endsWith("$$")) blocks.push({ type: "paragraph", text: trimmed });
      else math = { lines: [trimmed], startLine: lineNo };
      return;
    }

    if (trimmed === "") return flushAll();

    if (/^#{1,6}\s/.test(trimmed)) {
      const hashes = /^(#+)/.exec(trimmed)![1].length;
      if (hashes >= 3 && hashes <= 5) {
        flushAll();
        blocks.push({ type: "subheading", level: hashes as 3 | 4 | 5, text: trimmed.slice(hashes).trim() });
        return;
      }
      if (hashes !== 2) {
        throw new LessonParseError(file, lineNo, 'only "##" (section) and "###" to "#####" (sub headings) are supported inside a lesson body');
      }
      flushAll();
      blocks.push({ type: "heading", text: trimmed.slice(3).trim() });
      return;
    }

    const image = /^!\[([^\]]+)\](?:\((.*)\))?$/.exec(trimmed);
    if (image) {
      flushAll();
      const caption = image[2]?.trim();
      blocks.push(caption ? { type: "image", diagramId: image[1], caption } : { type: "image", diagramId: image[1] });
      return;
    }

    if (trimmed.startsWith("@video ")) {
      flushAll();
      const [url, ...rest] = trimmed.slice("@video ".length).split("|");
      const caption = rest.join("|").trim();
      blocks.push(caption ? { type: "video", url: url.trim(), caption } : { type: "video", url: url.trim() });
      return;
    }

    const isIndented = /^\s{2,}\S/.test(raw);
    const ordered = !isIndented ? ORDERED_ITEM.exec(trimmed) : null;
    const unordered = !isIndented && !ordered ? UNORDERED_ITEM.exec(trimmed) : null;
    const item = ordered ?? unordered;
    if (item) {
      flushParagraph();
      const isOrdered = Boolean(ordered);
      if (list && list.ordered !== isOrdered) flushList();
      if (!list) list = { ordered: isOrdered, items: [] };
      list.items.push(item[1].trim());
      return;
    }

    if (isIndented && list) {
      list.items[list.items.length - 1] += ` ${trimmed}`;
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  if (math) throw new LessonParseError(file, math.startLine, 'this "$$" math block is never closed with "$$"');
  flushAll();
  return blocks;
}

function parseQuiz(lines: string[], startLine: number, file: string): ConceptQuizQuestion[] {
  const questions: ConceptQuizQuestion[] = [];
  let current: (ConceptQuizQuestion & { _correct: number[]; _line: number }) | null = null;
  let last: "prompt" | "choice" | "explanation" = "prompt";

  const finish = () => {
    if (!current) return;
    const { _correct, _line, ...q } = current;
    if (q.choices.length < 2) throw new LessonParseError(file, _line, `question "${q.id}" needs at least 2 choices`);
    if (_correct.length !== 1) {
      throw new LessonParseError(file, _line, `question "${q.id}" must mark exactly one correct choice with [x]`);
    }
    if (!q.explanation) throw new LessonParseError(file, _line, `question "${q.id}" needs a "> explanation" line`);
    questions.push({ ...q, correctIndex: _correct[0] });
    current = null;
  };

  lines.forEach((raw, idx) => {
    const lineNo = startLine + idx;
    const trimmed = raw.trim();
    if (trimmed === "") return;

    const start = /^(\d+)\.\s+(?:\{#([\w-]+)\}\s+)?(?:\[(calc|concept)\]\s+)?(.*)$/.exec(raw);
    if (start) {
      finish();
      current = {
        id: start[2] ?? `q${start[1]}`,
        kind: start[3] === "calc" ? "calc" : "concept",
        prompt: start[4].trim(),
        choices: [],
        correctIndex: -1,
        explanation: "",
        _correct: [],
        _line: lineNo,
      };
      last = "prompt";
      return;
    }
    if (!current) throw new LessonParseError(file, lineNo, "expected a numbered question like \"1. Question text\"");

    const choice = /^\s*-\s+(\[x\]\s+)?(.*)$/i.exec(raw);
    if (choice) {
      if (choice[1]) current._correct.push(current.choices.length);
      current.choices.push(choice[2].trim());
      last = "choice";
      return;
    }
    const explanation = /^\s*>\s?(.*)$/.exec(raw);
    if (explanation) {
      current.explanation = current.explanation ? `${current.explanation} ${explanation[1].trim()}` : explanation[1].trim();
      last = "explanation";
      return;
    }

    if (last === "prompt") current.prompt += ` ${trimmed}`;
    else if (last === "choice") current.choices[current.choices.length - 1] += ` ${trimmed}`;
    else current.explanation += ` ${trimmed}`;
  });

  finish();
  return questions;
}

export function parseLessonMarkdown(source: string, file = "lesson.md"): ConceptLesson {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const { meta, next } = parseFrontmatter(lines, file);
  for (const key of ["slug", "title", "summary"]) {
    if (!meta[key]) throw new LessonParseError(file, 1, `front matter is missing "${key}"`);
  }

  const quizAt = lines.findIndex((l, i) => i >= next && l.trim() === "# Quiz");
  const bodyEnd = quizAt === -1 ? lines.length : quizAt;
  const body = parseBody(lines.slice(next, bodyEnd), next + 1, file);
  const quiz = quizAt === -1 ? [] : parseQuiz(lines.slice(quizAt + 1), quizAt + 2, file);

  return { kind: "concept", slug: meta.slug, title: meta.title, summary: meta.summary, body, quiz };
}

export function loadConceptLessonsFromMarkdown(root = CONTENT_ROOT): ConceptLesson[] {
  if (!fs.existsSync(root)) return [];
  const lessons: ConceptLesson[] = [];
  const seen = new Map<string, string>();
  const groups = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  for (const group of groups) {
    const files = fs
      .readdirSync(path.join(root, group))
      .filter((f) => f.endsWith(".md"))
      .sort();
    for (const f of files) {
      const rel = `${group}/${f}`;
      const lesson = parseLessonMarkdown(fs.readFileSync(path.join(root, group, f), "utf8"), rel);
      const dupe = seen.get(lesson.slug);
      if (dupe) throw new Error(`Duplicate lesson slug "${lesson.slug}" in ${rel} and ${dupe}`);
      seen.set(lesson.slug, rel);
      lessons.push(lesson);
    }
  }
  return lessons;
}

// An Options strategy lesson's body lives in code (server/src/data/options), but its knowledge-check
// quiz is authored as Markdown like a concept lesson's: content/strategy-quizzes/<strategy-slug>.md,
// with a `slug:` front matter line and a "# Quiz" section.
export function parseStrategyQuizMarkdown(source: string, file = "quiz.md"): { slug: string; quiz: ConceptQuizQuestion[] } {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const { meta, next } = parseFrontmatter(lines, file);
  if (!meta.slug) throw new LessonParseError(file, 1, 'front matter is missing "slug"');
  const quizAt = lines.findIndex((l, i) => i >= next && l.trim() === "# Quiz");
  if (quizAt === -1) throw new LessonParseError(file, next + 1, 'missing a "# Quiz" section');
  const quiz = parseQuiz(lines.slice(quizAt + 1), quizAt + 2, file);
  if (quiz.length === 0) throw new LessonParseError(file, quizAt + 1, "the quiz has no questions");
  return { slug: meta.slug, quiz };
}

export function loadStrategyQuizzes(root = STRATEGY_QUIZ_ROOT): Map<string, ConceptQuizQuestion[]> {
  const quizzes = new Map<string, ConceptQuizQuestion[]>();
  if (!fs.existsSync(root)) return quizzes;
  for (const f of fs.readdirSync(root).filter((name) => name.endsWith(".md")).sort()) {
    const { slug, quiz } = parseStrategyQuizMarkdown(fs.readFileSync(path.join(root, f), "utf8"), `strategy-quizzes/${f}`);
    if (slug !== f.replace(/\.md$/, "")) throw new Error(`strategy-quizzes/${f}: slug "${slug}" must match the file name`);
    quizzes.set(slug, quiz);
  }
  return quizzes;
}
