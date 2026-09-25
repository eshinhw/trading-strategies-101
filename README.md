# Trading Strategies 101

An educational course platform for early-career analysts and traders, built from
[*151 Trading Strategies*](https://ssrn.com/abstract=3247865) (Kakushadze & Serur, 2018).
The paper's 18 asset-class chapters are all live as courses — 173 strategies in
total, from a simple covered call to municipal bond tax arbitrage, weather
derivatives, and (covered for historical and regulatory context, not as
guidance) money laundering and loan sharking.

Each course is split into a **Basics** module (core concepts for that asset
class) and a **Strategies** module (the book's own numbered strategies for
that chapter). Every lesson pairs a plain-English explanation with a short,
server-graded knowledge check; Options additionally gets a live, interactive
payoff sandbox per lesson, and its 11 strategy modules (beyond Basics) unlock
through their own internal prerequisite sequence (e.g. Condors requires
Butterflies, since a condor is a butterfly with its middle strike split in
two) — every other course's Basics and Strategies are both open from the
start, with only each course's final exam gated behind actually completing
every lesson.

Beyond the courses: a **Books** and a **Papers** page (citations plus original
summaries, not reproduced text) for further reading, and a handful of
**Construction exercises** — scenario-based drills where you pick and
configure a strategy yourself against a stated goal, rather than working
through a pre-picked one.

## Stack

- **`server/`** — Node/Express + TypeScript API.
  - Options' strategy mechanics (legs, adjustable parameters, content,
    formulas) live in `src/data/options/*.ts`. Every other course's content —
    Basics and Strategies alike — is concept-lesson prose plus a
    hand-authored multiple-choice quiz, in `src/data/curriculum/*ConceptLessons.ts`
    (one file per course).
  - Curriculum structure (modules, prerequisites, lesson ordering) lives in
    `src/data/curriculum/modules.ts` — plain data, not database rows, so
    editing or adding a course doesn't require a migration.
  - Accounts and per-lesson/per-exam progress are the only things actually
    persisted, in SQLite via Prisma (`prisma/schema.prisma`). Auth is
    email+password (bcrypt) with a JWT in an httpOnly cookie.
  - Options' knowledge-check questions are generated from strategy metadata
    and graded by a server-side copy of the payoff engine (`src/engine/`), so
    a learner can't spoof a correct answer from the client. Every other
    course's quiz questions are hand-authored and graded by direct answer-key
    comparison.
- **`client/`** — Vite + React + TypeScript + Tailwind frontend. All payoff
  math for Options' interactive sandbox runs client-side (`src/engine/`),
  driven by the leg definitions the API returns, so dragging a slider (or
  typing a value directly) recomputes the chart instantly with no round trip.

### How the payoff engine works

Most Options strategies are **intrinsic-value** structures (any combination of
long/short stock, calls, and puts at various strikes): payoff at expiration is
a sum of each leg's intrinsic value plus a net cash flow at entry. Since
that's piecewise linear in the stock price, max profit/loss and breakevens
are derived exactly — by evaluating at every strike (the only places the
function can kink) and by checking the slope far from the money (to detect
unlimited profit/loss) — rather than hardcoded per strategy.

Calendar and diagonal spreads involve two different expirations, so they use a
small Black-Scholes pricer (`engine/blackScholes.ts`) to value the still-alive
long leg at the short leg's expiration, matching the paper's treatment of those
strategies. The exact same engine logic exists on both client (for the live
sandbox) and server (as the source of truth for grading).

### Curriculum structure

`server/src/data/curriculum/modules.ts` defines a DAG, not a linear list: each
module declares `prerequisiteModuleSlugs`, and a module unlocks only once all
of its prerequisites are fully completed. In practice, only Options uses this
for anything beyond an empty array — its 11 strategy modules (beyond Basics)
build on each other in a deliberate sequence. Every other course's Basics and
Strategies modules both have no prerequisites, so they're browsable immediately; a
course's final exam is the only thing still gated, via a separate check
(`isCourseFullyComplete` in `src/lib/exam.ts`) that requires every lesson in
every module to be completed, independent of the module DAG. Module/lesson
completion status is never stored directly — it's always derived on the fly
from the learner's `LessonProgress` rows plus the curriculum structure, so the
two can't drift out of sync.

## Development

```bash
npm --prefix server install
npm --prefix client install

cp server/.env.example server/.env   # then set your own JWT_SECRET
cd server && npx prisma migrate dev  # creates dev.db

npm run dev:server   # API on http://localhost:4000
npm run dev:client   # app on http://localhost:5173 (proxies /api to the server)
```

## Deployment

Deployed as a single service on [Railway](https://railway.app) — the Express
server also serves the client's built assets in production
(`server/src/index.ts`, active only when `NODE_ENV=production`), so there's
one origin, no CORS/cross-domain cookie config, and one process to run.

```bash
npm run build   # installs + builds both client and server (root package.json)
npm start       # runs `prisma migrate deploy`, then the built server
```

`railway.json` pins the build/start commands so Railway doesn't have to guess
in a two-`package.json` monorepo with no root lockfile. The SQLite database
needs a persistent volume mounted (e.g. at `/data`, with
`DATABASE_URL=file:/data/prod.db`) — without one, the database resets on
every deploy.

## Attribution

Strategy mechanics, formulas, and categorization are drawn from Kakushadze, Z.
and Serur, J.A., *151 Trading Strategies* (2018), freely available on
[SSRN](https://ssrn.com/abstract=3247865). Plain-English explanations,
scenarios, and all course content are original to this project. The Books and
Papers pages likewise store only citation metadata and original summaries —
never reproduced text — for the same copyright reasons.
