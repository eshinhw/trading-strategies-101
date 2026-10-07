---
slug: misc-inflation-hedging-inflation-swaps
title: Inflation Hedging – Inflation Swaps
summary: Trading the inflation swap itself as a standalone instrument — its fixed-versus-floating structure, its own version of breakeven inflation, and how a swap-based view differs from holding an inflation-linked bond directly.
---

## The Swap's Basic Structure

An inflation swap exchanges a fixed payment for a floating payment tied to realized inflation over the swap's term, letting each side take a pure inflation view without needing to buy or sell any underlying bond. One side, in effect, "pays" a fixed inflation assumption and "receives" whatever inflation actually turns out to be; the other side takes the opposite position.

## Zero-Coupon vs. Year-on-Year Structures

A zero-coupon inflation swap settles the entire cumulative inflation difference in a single payment at maturity, closely mirroring the breakeven-inflation concept covered earlier in this course. A year-on-year swap instead exchanges payments periodically based on each period's own inflation reading, which changes the risk profile to be more sensitive to the path of inflation over time, not just its cumulative total.

## Why Trade the Swap Instead of a Bond

An inflation swap isolates a pure inflation view without the bond-specific frictions that come with holding an actual inflation-linked bond directly — no need to source specific bond supply, less exposure to that bond's own liquidity premium, and more flexibility in choosing the exact maturity and structure of the exposure.

## The Swap Market's Own Supply and Demand

Because the swap market has its own set of natural users, corporations and pension funds hedging inflation-linked liabilities, for example, swap-implied inflation can trade at a persistent difference from bond-market breakeven inflation, creating a further relative-value opportunity between the two related but distinct markets.

## Example

A pension fund owes an inflation-linked payment of $30 million in 17 years. Inflation-linked bonds exist only at maturities of 10, 20 and 30 years.

**With bonds**

The closest is a 20-year bond. It matures 3 years after the liability, so the hedge ends at the wrong time and the fund is left with a mismatch.

**With a 17-year zero-coupon inflation swap**

- Notional: $20 million
- The fund pays a fixed rate of 2.40% a year, compounded for 17 years
- It receives the actual inflation, compounded for 17 years

$$
\text{Fixed leg: } \$20\text{M} \times (1.024^{17} - 1) = \$20\text{M} \times 0.4966 = \$9.93\text{M}
$$

**If inflation averages 3.4% a year**

$$
\text{Floating leg: } \$20\text{M} \times (1.034^{17} - 1) = \$20\text{M} \times 0.7654 = \$15.31\text{M}
$$

$$
\$15.31\text{M} - \$9.93\text{M} = \boxed{+\$5.38\text{M received}}
$$

That payment offsets the extra amount the fund owes because inflation was higher than the 2.40% priced in.

The swap can be set to exactly 17 years and to the size needed, so the swap market solves a hedging need the bond market alone could not match as precisely.

# Quiz

1. What does an inflation swap exchange?
   - [x] A fixed payment for a floating payment tied to realized inflation over the swap's term
   - One stock for another stock of equal value
   - A fixed amount of foreign currency for domestic currency
   - Inflation swaps involve no exchange of payments at all
   > The fixed-for-floating structure is the core mechanism that lets each side take a pure view on realized inflation.

2. How does a zero-coupon inflation swap differ from a year-on-year swap?
   - [x] Zero-coupon settles the entire cumulative inflation difference at maturity; year-on-year exchanges payments periodically based on each period's inflation
   - The two structures are functionally identical in every respect
   - A year-on-year swap only ever settles once, at maturity
   - Zero-coupon swaps make payments every single day
   > The timing of settlement is the key structural difference, which changes each structure's sensitivity to the path versus the cumulative total of inflation.

3. Why might an investor prefer an inflation swap over directly holding an inflation-linked bond?
   - [x] It avoids bond-specific frictions like sourcing supply and bond-specific liquidity premiums, with more flexibility in maturity and structure
   - Inflation swaps are always risk-free, unlike inflation-linked bonds
   - There is no meaningful difference between the two approaches
   - Inflation swaps cannot be used to express any inflation view
   > The swap market's flexibility and separation from bond-specific frictions is exactly why some investors prefer it for isolating a pure inflation view.

4. Why can swap-implied inflation trade at a persistent difference from bond-market breakeven inflation?
   - [x] The swap market has its own distinct set of natural users and supply/demand dynamics
   - The two markets are mathematically required to always match exactly
   - Swap-implied inflation has no relationship to bond-market breakeven inflation
   - Only one of the two markets is ever actually functional at a given time
   > Different participant bases and flows between the two related but distinct markets can sustain a persistent gap between them, creating its own relative-value opportunity.

5. In the example, why does the pension fund prefer a swap over buying inflation-linked bonds directly?
   - [x] The swap lets it match the exact maturity profile of its liabilities more precisely than available bonds could
   - Inflation-linked bonds are illegal for pension funds to hold
   - Swaps guarantee a higher return than bonds in every scenario
   - The example gives no reason for the fund's preference
   > The swap's structural flexibility is exactly what lets the fund tailor its hedge more precisely to its specific liability profile than the bond market could offer.

6. {#calc1} [calc] A 10-year zero-coupon inflation swap on $10 million has a fixed rate of 2.5%. Inflation averages 3.0% a year. About how much does the receiver of inflation collect?
   - [x] About $638,000
   - About $500,000
   - About $5,000,000
   - About $64,000
   > The floating leg is $10M × (1.03^10 − 1) ≈ $3.44M and the fixed leg is $10M × (1.025^10 − 1) ≈ $2.80M, so the receiver collects about $638,000.

7. {#calc2} [calc] A 5-year zero-coupon inflation swap on $20 million pays fixed at 2.4% a year. Inflation averages 2.9%. About how much does the receiver of inflation collect?
   - About $100,000
   - About $2.9 million
   - [x] About $555,000
   - About $5.5 million
   > The floating leg is $20M × (1.029⁵ − 1) and the fixed leg is $20M × (1.024⁵ − 1). The difference is about $555,000.
