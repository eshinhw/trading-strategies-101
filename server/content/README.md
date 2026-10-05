# Lesson content

Concept lessons are plain Markdown files: `content/lessons/<course>/<lesson-slug>.md`.
Edit a file, save, and the dev server reloads it. (A mistake in a file stops the server with a
`file:line` message saying what to fix.) To add a lesson, create a new `.md` file in the right
course folder and list its `slug` in the module's `lessonSlugs` in `src/data/curriculum/modules.ts`.

## Format

```markdown
---
slug: futures-what-is-a-forward-contract
title: The Forward Contract
summary: One-line description shown under the lesson title.
---

Text before the first heading is allowed (shown in an unlabeled section).

## Section Heading

A paragraph. Separate paragraphs with a blank line. Wrapped lines inside a paragraph are joined,
so you can hard-wrap long text however you like.

Inline formatting: **bold**, *italic*, __underline__.

- Bulleted item
- Another item that can
  continue on an indented line

1. Numbered item
2. Another numbered item

![diagram-id](Optional caption)

@video https://example.com/clip | Optional caption

# Quiz

1. Question text?
   - A wrong answer
   - [x] The correct answer (mark exactly one with [x])
   - Another wrong answer
   > Explanation shown after the learner answers.

2. {#custom-id} Optional: give a question an explicit id (default is q1, q2, ...)
   - Choice
   - [x] Choice
   > Explanation.
```

## Rules

- Front matter needs `slug`, `title` and `summary`, each on a single line.
- `## ` is the only heading level. Each one becomes a section, and appears in the "on this page" outline.
- `![diagram-id]` must match a diagram component on the client (`client/src/components/lessonDiagrams`).
- `# Quiz` must be the last section. Every question needs 2+ choices, exactly one `[x]`, and a `>` explanation.
- Don't rename a question's id (or reorder quiz questions that use default ids) once learners have
  used the lesson, in case progress is keyed to it.
