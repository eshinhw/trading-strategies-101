---
slug: misc-tips-treasury-arbitrage
title: TIPS-Treasury Arbitrage
summary: A relative-value trade on the breakeven-inflation gap between TIPS and nominal Treasuries, positioning for that spread to move toward a fair-value estimate — commonly financed using repo, connecting directly back to the Cash course.
---

## The Core Trade

This strategy trades the breakeven-inflation relationship, covered earlier in this course, directly: taking a long position in one of TIPS or nominal Treasuries and a short position in the matched-maturity other, positioned for the breakeven-inflation gap to move toward whatever level the trader estimates is fair.

## Why the Spread Can Drift From Fair Value

Because TIPS are less liquid than nominal Treasuries, and because the two instruments attract somewhat different natural buyers, breakeven inflation can drift away from a pure inflation-expectation read for reasons that have little to do with actual inflation expectations — exactly the kind of gap this strategy is designed to exploit.

## Financing the Trade With Repo

Because this trade involves being long one government security and short another, it's commonly financed and executed using repo, covered in the Cash course's Strategies module: the securities themselves serve as collateral for the financing needed to hold both legs of the position, keeping the trade's own capital requirement relatively modest relative to its face value.

## The Risk of Being Wrong About "Fair"

This strategy's central risk is straightforward: the spread can stay away from, or move further from, the trader's fair-value estimate for a long time, especially during periods of unusual stress when liquidity differences between TIPS and nominal Treasuries widen rather than narrow, which is exactly when this kind of relative-value trade tends to be tested hardest.

## Example

A trader thinks 10-year breakeven inflation is too high.

- Current breakeven: 2.7%
- The trader's fair-value estimate: 2.3%
- Trade: long $100 million of 10-year nominal Treasuries, short $100 million of matched-maturity TIPS, both financed in the repo market
- Duration of both bonds: about 8

**Profit if the spread narrows to 2.3%**

$$
2.7\% - 2.3\% = 0.4\% \quad\Rightarrow\quad 8 \times 0.4\% \times \$100\text{M} = \boxed{+\$3{,}200{,}000}
$$

**If the spread widens 0.4% instead**

$$
-\$3{,}200{,}000
$$

**Not a bet on interest rates: all yields rise 1%**

$$
\text{Long nominal: } -8 \times 1\% \times \$100\text{M} = -\$8\text{M} \qquad \text{Short TIPS: } +8 \times 1\% \times \$100\text{M} = +\$8\text{M}
$$

$$
-\$8\text{M} + \$8\text{M} = \$0
$$

The trade makes money only if the gap between the two bonds changes, and the overall level of rates cancels out. The trader expresses the "breakeven too high" view by owning the nominal bond and shorting the TIPS.

# Quiz

1. What relationship does this strategy trade directly?
   - [x] The breakeven-inflation gap between TIPS and matched-maturity nominal Treasuries
   - The exchange rate between two currencies
   - The credit spread between two unrelated corporate bonds
   - This strategy has no connection to breakeven inflation
   > This strategy is a direct application of the breakeven-inflation concept covered earlier in the course, traded as a relative-value position.

2. Why can breakeven inflation drift from a pure read on inflation expectations?
   - [x] TIPS are less liquid than nominal Treasuries and the two attract somewhat different natural buyers
   - Breakeven inflation is always a perfectly pure reflection of inflation expectations with no other influence
   - TIPS and nominal Treasuries are always identically liquid
   - There is no possible reason for breakeven inflation to deviate from fair value
   > Liquidity and buyer-base differences between the two instruments are exactly what can push the spread away from a pure inflation-expectation reading.

3. How is this trade commonly financed?
   - [x] Using repo, with the securities themselves serving as collateral, connecting directly to the Cash course's Strategies module
   - Exclusively through unsecured personal loans
   - This trade requires no financing of any kind
   - Only through equity crowdfunding platforms
   > Repo financing lets the trade be executed with relatively modest capital relative to its face value, using the securities as collateral.

4. What is the central risk of this strategy?
   - [x] The spread can stay away from, or move further from, the trader's fair-value estimate for a long time, especially during stress
   - The strategy carries no risk once the repo financing is arranged
   - The only risk is a change in the color of the Treasury certificate
   - TIPS and nominal Treasuries can never actually diverge in price
   > Like any relative-value trade, the risk is that the anticipated convergence doesn't happen, or is delayed, particularly during periods of market stress.

5. In the example, what specific position does the trader take to express the view that breakeven inflation is too high?
   - [x] Long the nominal Treasury and short the matched-maturity TIPS
   - Long both the nominal Treasury and the TIPS in equal amounts
   - Short both the nominal Treasury and the TIPS
   - The example describes no specific position
   > Believing breakeven inflation is too high means betting the spread narrows, expressed by being long the nominal bond and short the TIPS.
