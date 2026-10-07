# Lesson content

Concept lessons are plain Markdown files: `content/lessons/<folder>/<lesson-slug>.md`. Folders are just
for organizing (e.g. `forwards/` and `futures/` match the Forwards and Futures courses) — any
folder name works, and the lesson's `slug` is what the app uses.
Edit a file, save, and the dev server reloads it. (A mistake in a file stops the server with a
`file:line` message saying what to fix.) To add a lesson, create a new `.md` file in the right
folder and list its `slug` in the module's `lessonSlugs` in `src/data/curriculum/modules.ts`.

## Format

```markdown
---
slug: what-is-a-forward-contract
title: The Forward Contract
summary: One-line description shown under the lesson title.
---

Text before the first heading is allowed (shown in an unlabeled section).

## Section Heading

A paragraph. Separate paragraphs with a blank line. Wrapped lines inside a paragraph are joined,
so you can hard-wrap long text however you like.

Inline formatting: **bold**, *italic*, __underline__.

Math (LaTeX): inline like $F = S_0 e^{rT}$, or a centered equation on its own lines:

$$
F_0 = S_0\,e^{rT}
$$

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

3. {#calc1} [calc] A business scenario with numbers where the learner has to work out the answer. What is the result?
   - A plausible wrong number
   - [x] The correct number
   - Another plausible wrong number
   > Show the working in the explanation.
```

## Question kinds (Quiz Bank)

Every question is either a **concept check** (the default: true/false or multiple choice that tests an idea
directly) or a **calculation** (a short business scenario where the learner computes a number and then picks it
from the choices). Put `[calc]` right after the number, and the optional `{#id}`, to mark a calculation; `[concept]`
is accepted too but is the default. The Quiz Bank lets learners practise either kind or both, and lessons show
both kinds in their knowledge check.

Writing a good calculation question:

- Give 2 or more numbers in the scenario so there is something to compute, and make every choice a number
  (money, a percentage, a count) rather than a sentence.
- Make the wrong choices the answers a learner gets from the usual mistakes (forgetting to halve, mixing up a
  rate and a dollar amount, using the wrong leg).
- Put the working in the explanation, so a wrong answer teaches the method.

### Bank-only extra questions

To add practice questions without lengthening a lesson's knowledge check, put them in
`content/quiz-bank/<lesson-slug>.md` (the file name must equal the lesson's `slug`). The file has the same
`---` / `slug:` front matter and `# Quiz` section as a strategy quiz, with ids of the form `{#bk1}`, `{#bk2}`.
These questions appear in the Quiz Bank only; ids must not collide with the lesson's own quiz ids.

## Rules

- Math: inline `$...$` needs no space just inside the dollar signs and the closing `$` can't be followed
  by a digit, so prices like "$5 and $6" stay plain text. Write `\$` for a literal dollar sign (inside
  an equation too, e.g. `\$65{,}000`). A `$$` block runs from a line starting `$$` to the next line
  ending `$$` (blank lines allowed inside) and uses plain LaTeX with no `[ ]` or `\( \)` wrappers.
  Math also works in list items and quiz text.
- Front matter needs `slug`, `title` and `summary`, each on a single line.
- `## Heading` starts a section and appears in the "on this page" outline. `### `, `#### ` and `##### ` add
  progressively smaller sub headings inside the current section (not in the outline). No other levels.
- `![diagram-id]` must match a diagram component on the client (`client/src/components/lessonDiagrams`).
- `# Quiz` must be the last section. Every question needs 2+ choices, exactly one `[x]`, and a `>` explanation.
- Don't rename a question's id (or reorder quiz questions that use default ids) once learners have
  used the lesson, in case progress is keyed to it.

## Options strategy quizzes

The Options strategy lessons (Long Call, Covered Call, Iron Condor, ...) are defined in code under
`src/data/options`, but each one's knowledge-check quiz lives here as Markdown, one file per strategy:
`content/strategy-quizzes/<strategy-slug>.md`.

```markdown
---
slug: covered-call
---

# Quiz

1. Which investor is the best fit for a covered call?
   - Someone who expects a big rally
   - [x] Someone who owns the stock and expects it to stay flat or rise only modestly
   - Someone who expects the stock to crash
   - Someone who wants unlimited upside
   > Explanation shown after the learner answers.
```

- The file name must match the `slug:` line and the strategy's slug. The server refuses to start if a strategy has no
  quiz file, or if a quiz file has no matching strategy.
- Questions test the concepts (when to use the strategy, why, how it is built, and what happens in a scenario), not
  payoff arithmetic. Same question format and rules as a concept lesson's quiz.
- The Final Quiz for the Options course samples from these questions too.
- Keep the wrong answers about as long and as specific as the right one, and vary which choice is correct, so the
  answer can't be guessed from its length or position.
