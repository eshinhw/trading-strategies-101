---
slug: structured-assets-cdos-curve-trades
---

# Quiz

1. {#q1} What is a "credit curve"?
   - [x] The term structure of spreads across CDO or credit-index tranches of different maturities
   - A single spread level with no relationship to maturity
   - A curve showing a company's stock price over time
   - A measure of how many names are in an underlying pool
   > Just like a bond yield curve plots yields against maturity, a credit curve plots credit spreads against tranche maturity, reflecting expectations about default risk over different time horizons.

2. {#q2} What does a "steepener" curve trade bet on?
   - [x] That the gap between longer- and shorter-dated tranche spreads will widen
   - That all spreads will move to exactly zero
   - That the gap between longer- and shorter-dated spreads will narrow
   - That the credit index will stop trading entirely
   > A steepener specifically bets on the spread between two maturities widening — a bet on the curve's shape, not its overall level.

3. {#q3} How is a typical credit curve trade constructed?
   - [x] Long protection on one maturity and sold protection on another, sized so sensitivity to a parallel shift in the whole curve largely cancels out
   - A single outright long position with no offsetting leg
   - Always buying protection on every available maturity equally
   - It cannot be constructed using protection at all
   > By taking offsetting positions across two maturities, sized to cancel out a parallel shift, the trade isolates a bet on the curve's shape rather than its overall level.

4. {#q4} What can an unusually steep credit curve signal?
   - [x] Near-term stability paired with longer-run default concerns
   - That the reference entities are guaranteed never to default
   - That the underlying pool has been completely eliminated
   - Nothing meaningful about default risk expectations
   > A steep curve reflects a market view where near-term risk looks contained, but longer-dated maturities price in greater concern about default risk further out.

5. {#q5} How is a credit curve trade similar to a fixed-income yield-curve spread trade?
   - [x] Both bet on the shape of a term structure changing, rather than on the outright level of rates or spreads
   - Both require physical delivery of a bond
   - Both are only available to government issuers
   - They share no similarities at all
   > Both trade types isolate a bet on how a term structure's shape changes — steepening or flattening — independent of the market's overall level of rates or spreads.

6. {#q6} A steepener is put on when the 5-year/10-year credit curve gap is 150bps (400bps vs. 550bps). The gap later widens to 200bps. What does the position profit from?
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

9. {#bk1} [calc] A curve trade is long a 5-year tranche (DV01 4.2) and short a 10-year tranche (DV01 7.5) so that the DV01s match. What notional of the 10-year is sold per 1 of the 5-year bought?
   - 1.79
   - [x] 0.56
   - 1.00
   - 3.3
   > For equal DV01, notional ratio = 4.2 / 7.5 = 0.56.

10. {#bk2} [calc] A tranche curve trade has a net DV01 of $3,000 per basis point on the 5s10s spread. The spread widens by 12 basis points in the trade's favour. What is the profit?
   - $3,000
   - $360,000
   - $250
   - [x] $36,000
   > Profit = $3,000 × 12 = $36,000.
