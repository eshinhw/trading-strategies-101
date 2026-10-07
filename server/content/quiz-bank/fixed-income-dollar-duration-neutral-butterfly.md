---
slug: fixed-income-dollar-duration-neutral-butterfly
---

# Quiz

1. {#q1} What three points on the yield curve does a dollar-duration-neutral butterfly trade use?
   - Only the shortest available maturity, sized three different ways
   - [x] A short maturity and a long maturity (the "wings") and an intermediate maturity (the "body")
   - Three bonds all with the exact same maturity
   - Only maturities beyond 30 years
   > The butterfly trade combines a short-maturity wing, a long-maturity wing, and an intermediate-maturity body into one position.

2. {#q2} What does it mean for the trade to be "dollar-duration-neutral"?
   - The trade has no interest-rate exposure at any maturity
   - [x] The position's total dollar duration nets to zero, so a parallel shift in rates across the whole curve leaves its value largely unaffected
   - The trade requires exactly one dollar of capital
   - The trade is neutral only to changes in credit risk, not interest rates
   > Sizing the wing and body positions so their dollar durations offset means the trade doesn't gain or lose value from a uniform, parallel move in interest rates.

3. {#q3} What does the trade's return actually depend on, once it's neutral to a parallel shift?
   - The overall direction interest rates move
   - [x] How the curve's curvature changes — specifically, whether the body's yield moves relative to the average of the two wings
   - The trade has no possible source of return once neutralized
   - Changes in the stock market unrelated to bonds
   > With parallel-shift risk removed, the trade's profit or loss comes from changes in the curve's shape at that middle point, not from the overall level of rates.

4. {#q4} If the body's yield falls relative to the wings (the curve becomes more "bowed"), what happens to a position short the body and long the wings?
   - It loses money
   - [x] It profits
   - It has no effect on the position
   - The position is automatically closed
   > A position short the body and long the wings is designed to profit when the curve bows in that direction — the body's relative yield decline benefits the short-body leg.

5. {#q5} Why is sizing the wing positions correctly so important to this trade?
   - Sizing doesn't matter as long as both wings are held
   - [x] Because dollar duration depends on both price and duration, the wings must be carefully sized so their combined dollar duration truly offsets the body's — otherwise unwanted parallel-shift exposure remains
   - Incorrect sizing has no effect on the trade's risk profile
   - The wings must always be sized as exactly equal dollar amounts
   > Simply putting equal dollar amounts in each wing isn't enough — the dollar-duration calculation, which accounts for both price and duration, must be used to properly offset the body, or the trade retains unintended exposure to a parallel rate move.

6. {#calc1} [calc] A trader is short $10 million of a 5-year note (DV01 $450 per $1 million) and puts half of that risk in each wing. How much 10-year notional (DV01 $800 per $1 million) is needed?
   - About $5.63 million
   - [x] About $2.81 million
   - About $11.84 million
   - About $0.56 million
   > The body's DV01 is 10 × $450 = $4,500, so each wing needs $2,250. For the 10-year that is $2,250 / $800 per million ≈ $2.81 million.

7. {#bk1} [calc] A butterfly is long $10 million of 2-year notes (DV01 $190 per $1 million) and $4 million of 10-year notes (DV01 $850 per $1 million). What face amount of 5-year notes (DV01 $460 per $1 million) must be sold to make the position DV01-neutral?
   - $14.00 million
   - $5.00 million
   - [x] $11.52 million
   - $6.24 million
   > The wings carry DV01 of 10 × $190 + 4 × $850 = $5,300. Selling $5,300 / $460 = $11.52 million of 5-year notes offsets it.

8. {#bk2} [calc] A butterfly spread is defined as 2 × body yield − short-wing yield − long-wing yield. The 2-year yields 3.00%, the 5-year yields 4.20% and the 10-year yields 5.00%. What is the butterfly spread?
   - [x] 0.40%
   - −0.40%
   - 1.20%
   - 0.20%
   > 2 × 4.20% − 3.00% − 5.00% = 8.40% − 8.00% = 0.40%.

9. {#bk3} [calc] A dollar-duration-neutral butterfly is short the body with a DV01 of $5,000 per basis point. The butterfly spread falls 6 basis points. If the position profits from a fall in the spread at its full DV01 per basis point, what is the gain?
   - $5,000
   - $300,000
   - [x] $30,000
   - $833
   > Gain = $5,000 × 6 = $30,000.
