# Strategy Desk

An interactive guide to the trading strategies from
[*151 Trading Strategies*](https://ssrn.com/abstract=3247865) (Kakushadze & Serur, 2018) —
starting with the 58 options strategies from section 2, with plain-English
"when / why / how" explanations, scenario-based examples, and a live payoff
diagram you can drive by adjusting strikes, premiums, and (for calendar/diagonal
spreads) volatility and time to expiration.

More asset classes from the paper (stocks, futures, FX, fixed income, etc.) can
be added later following the same pattern.

## Stack

- **`server/`** — Node/Express + TypeScript API serving strategy definitions
  (legs, adjustable parameters, plain-English content, and the paper's original
  formulas) as JSON. The data lives in `server/src/data/options/*.ts`.
- **`client/`** — Vite + React + TypeScript + Tailwind frontend. All payoff math
  (the payoff curve, breakevens, max profit/loss) runs client-side in
  `client/src/engine/`, driven by the leg definitions the API returns — so
  adjusting a slider recomputes the chart instantly with no round trip.

### How the payoff engine works

Most strategies are **intrinsic-value** structures (any combination of long/short
stock, calls, and puts at various strikes): payoff at expiration is a sum of
each leg's intrinsic value plus a net cash flow at entry. Since that's piecewise
linear in the stock price, max profit/loss and breakevens are derived exactly —
by evaluating at every strike (the only places the function can kink) and by
checking the slope far from the money (to detect unlimited profit/loss) —
rather than hardcoded per strategy.

Calendar and diagonal spreads involve two different expirations, so they use a
small Black-Scholes pricer (`client/src/engine/blackScholes.ts`) to value the
still-alive long leg at the short leg's expiration, matching the paper's
treatment of those strategies.

## Development

```bash
npm --prefix server install
npm --prefix client install

npm run dev:server   # API on http://localhost:4000
npm run dev:client   # app on http://localhost:5173 (proxies /api to the server)
```

## Attribution

Strategy mechanics, formulas, and categorization are drawn from Kakushadze, Z.
and Serur, J.A., *151 Trading Strategies* (2018), freely available on
[SSRN](https://ssrn.com/abstract=3247865). Plain-English explanations and
scenarios are original to this project.
