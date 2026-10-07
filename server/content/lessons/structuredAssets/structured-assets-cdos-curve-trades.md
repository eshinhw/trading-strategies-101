---
slug: structured-assets-cdos-curve-trades
title: CDOs – Curve Trades
summary: Betting on how the credit curve across different tranche maturities steepens or flattens, rather than on the outright level of spreads.
---

## A Credit Curve, Not Just a Spread Level

Just as bonds of different maturities trace out a yield curve, CDO and credit-index tranches of different maturities — say, 5-year and 10-year — trace out a credit curve: a term structure of spreads reflecting how default risk is expected to build up over different time horizons.

## Steepening and Flattening Views

A curve trade takes a position on the curve's shape rather than its overall level. A steepener bets the gap between longer- and shorter-dated tranche spreads will widen, while a flattener bets that gap will narrow, regardless of which direction spreads move overall.

## Constructing the Trade

A typical curve trade goes long protection on one maturity and sells protection on another, in a ratio sized so the position's sensitivity to a parallel shift in the whole curve roughly cancels out, leaving a position that mainly profits or loses based on the curve's shape changing — similar in spirit to the yield-curve spread trades used in fixed income.

## What Moves the Credit Curve

A credit curve's shape often reflects the market's view of near-term versus longer-term default risk. An unusually steep curve can signal near-term stability with longer-run concerns, while an inverted or flat curve can signal acute near-term stress that's expected to either resolve, or is already priced in across every maturity.

## Example

Two tranche maturities on the same structure.

- 5-year tranche spread: 400 basis points
- 10-year tranche spread: 550 basis points
- Gap: 550 − 400 = 150 basis points

The trader expects the gap to widen and puts on a steepener.

**Sizing the position**

- Sell protection on $10 million of the 5-year tranche (spread duration about 4.5)
- Buy protection on the 10-year tranche (spread duration about 8), sized so both legs have the same sensitivity

$$
\$10\text{M} \times 4.5 \times 0.01\% = \$4{,}500 \text{ per basis point}
$$

$$
\text{10-year notional} = \frac{\$4{,}500}{8 \times 0.01\%} = \$5.6\text{M} \quad\Rightarrow\quad \$5.6\text{M} \times 8 \times 0.01\% = \$4{,}500 \text{ per basis point}
$$

**Spreads rise 100 basis points in parallel (the gap stays at 150)**

$$
\text{5-year (sold protection): } -100 \times \$4{,}500 = -\$450{,}000
$$

$$
\text{10-year (bought protection): } +100 \times \$4{,}500 = +\$450{,}000
$$

$$
-\$450{,}000 + \$450{,}000 = \$0
$$

**The gap widens to 200 basis points (the 10-year spread rises 50 basis points, the 5-year is unchanged)**

$$
50 \times \$4{,}500 = \boxed{+\$225{,}000}
$$

The trade profits from the gap widening, not from the overall level of spreads.

# Quiz

1. What is a "credit curve"?
   - [x] The term structure of spreads across CDO or credit-index tranches of different maturities
   - A single spread level with no relationship to maturity
   - A curve showing a company's stock price over time
   - A measure of how many names are in an underlying pool
   > Just like a bond yield curve plots yields against maturity, a credit curve plots credit spreads against tranche maturity, reflecting expectations about default risk over different time horizons.

2. What does a "steepener" curve trade bet on?
   - [x] That the gap between longer- and shorter-dated tranche spreads will widen
   - That all spreads will move to exactly zero
   - That the gap between longer- and shorter-dated spreads will narrow
   - That the credit index will stop trading entirely
   > A steepener specifically bets on the spread between two maturities widening — a bet on the curve's shape, not its overall level.

3. How is a typical credit curve trade constructed?
   - [x] Long protection on one maturity and sold protection on another, sized so sensitivity to a parallel shift in the whole curve largely cancels out
   - A single outright long position with no offsetting leg
   - Always buying protection on every available maturity equally
   - It cannot be constructed using protection at all
   > By taking offsetting positions across two maturities, sized to cancel out a parallel shift, the trade isolates a bet on the curve's shape rather than its overall level.

4. What can an unusually steep credit curve signal?
   - [x] Near-term stability paired with longer-run default concerns
   - That the reference entities are guaranteed never to default
   - That the underlying pool has been completely eliminated
   - Nothing meaningful about default risk expectations
   > A steep curve reflects a market view where near-term risk looks contained, but longer-dated maturities price in greater concern about default risk further out.

5. How is a credit curve trade similar to a fixed-income yield-curve spread trade?
   - [x] Both bet on the shape of a term structure changing, rather than on the outright level of rates or spreads
   - Both require physical delivery of a bond
   - Both are only available to government issuers
   - They share no similarities at all
   > Both trade types isolate a bet on how a term structure's shape changes — steepening or flattening — independent of the market's overall level of rates or spreads.

6. A steepener is put on when the 5-year/10-year credit curve gap is 150bps (400bps vs. 550bps). The gap later widens to 200bps. What does the position profit from?
   - [x] The additional 50bps of curve steepening, regardless of the overall direction spreads moved
   - A rise in the 5-year spread alone, unrelated to the 10-year spread
   - The position only profits if both spreads fall to zero
   - There is no profit, since curve trades never respond to spread changes
   > Because the position is sized to cancel out a parallel shift in the curve, its P&L comes from the change in the gap itself — here, the additional 50bps of steepening — not from the overall spread level.

7. {#calc1} [calc] A duration-matched steepener has a sensitivity of $5,000 per basis point on each leg. The curve gap widens from 120 to 160 basis points. What is the profit?
   - $40,000
   - $800,000
   - $160,000
   - [x] $200,000
   > The gap widened by 40 basis points, and 40 × $5,000 = $200,000. A parallel move in the level of spreads would not change the result.

8. {#calc2} [calc] A flattener is duration-matched at $4,000 per basis point. The curve gap narrows from 130 to 90 basis points. What is the profit?
   - $40,000
   - [x] $160,000
   - $520,000
   - $360,000
   > The gap moved 40 basis points in the trade's favor, and 40 × $4,000 = $160,000.
