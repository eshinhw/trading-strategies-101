# Strategy Desk

An educational course platform for early-career analysts and traders, built from
[*151 Trading Strategies*](https://ssrn.com/abstract=3247865) (Kakushadze & Serur, 2018).
The pilot course covers the 58 options strategies from section 2, organized into
12 modules that unlock as you complete prerequisites — e.g. Condors requires
Butterflies, since a condor is a butterfly with its middle strike split in two.

Each lesson pairs a plain-English "when / why / how" explanation and scenario
with the same interactive payoff sandbox from the project's original version
(adjust strikes, premiums, and — for calendar/diagonal spreads — volatility and
time to expiration), followed by a short knowledge check that's graded
server-side and tracked per account.

More asset classes from the paper (stocks, futures, FX, fixed income, etc.) can
be added later as additional courses, following the same pattern.

## Stack

- **`server/`** — Node/Express + TypeScript API.
  - Strategy mechanics (legs, adjustable parameters, content, formulas) live in
    `src/data/options/*.ts`, same as before.
  - Curriculum structure (modules, prerequisites, lesson ordering, foundations
    content) lives in `src/data/curriculum/*.ts` — plain data, not database rows,
    so editing the course doesn't require a migration.
  - Accounts and per-lesson progress are the only things actually persisted, in
    SQLite via Prisma (`prisma/schema.prisma`). Auth is email+password
    (bcrypt) with a JWT in an httpOnly cookie.
  - Knowledge-check questions are generated from strategy metadata, not
    hand-authored, and graded by a server-side copy of the payoff engine
    (`src/engine/`) so a learner can't spoof a correct answer from the client.
- **`client/`** — Vite + React + TypeScript + Tailwind frontend. All payoff math
  for the interactive sandbox runs client-side (`src/engine/`), driven by the
  leg definitions the API returns, so dragging a slider recomputes the chart
  instantly with no round trip.

### How the payoff engine works

Most strategies are **intrinsic-value** structures (any combination of long/short
stock, calls, and puts at various strikes): payoff at expiration is a sum of
each leg's intrinsic value plus a net cash flow at entry. Since that's piecewise
linear in the stock price, max profit/loss and breakevens are derived exactly —
by evaluating at every strike (the only places the function can kink) and by
checking the slope far from the money (to detect unlimited profit/loss) —
rather than hardcoded per strategy.

Calendar and diagonal spreads involve two different expirations, so they use a
small Black-Scholes pricer (`engine/blackScholes.ts`) to value the still-alive
long leg at the short leg's expiration, matching the paper's treatment of those
strategies. The exact same engine logic exists on both client (for the live
sandbox) and server (as the source of truth for grading).

### Curriculum structure

`server/src/data/curriculum/modules.ts` defines a DAG, not a linear list: each
module declares `prerequisiteModuleSlugs`, and a module unlocks only once all
of its prerequisites are fully completed. Module/lesson completion status is
never stored directly — it's always derived on the fly from the learner's
`LessonProgress` rows plus the curriculum structure, so the two can't drift out
of sync.

## Development

```bash
npm --prefix server install
npm --prefix client install

cp server/.env.example server/.env   # then set your own JWT_SECRET
cd server && npx prisma migrate dev  # creates dev.db

npm run dev:server   # API on http://localhost:4000
npm run dev:client   # app on http://localhost:5173 (proxies /api to the server)
```

## Attribution

Strategy mechanics, formulas, and categorization are drawn from Kakushadze, Z.
and Serur, J.A., *151 Trading Strategies* (2018), freely available on
[SSRN](https://ssrn.com/abstract=3247865). Plain-English explanations,
scenarios, and all course content are original to this project.
