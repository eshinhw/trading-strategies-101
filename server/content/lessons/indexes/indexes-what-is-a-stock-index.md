---
slug: indexes-what-is-a-stock-index
title: The Stock Index
summary: A single number built from a defined basket of stocks, meant to represent the performance of a market or a slice of it.
---

## A Basket, Reduced to One Number

A stock index tracks a defined group of stocks — say, the 500 largest U.S. companies for the S&P 500 — and combines their individual prices into a single number meant to represent how that group is performing as a whole, without an investor needing to track every constituent individually.

## Price-Weighted Indices

A price-weighted index, like the Dow Jones Industrial Average, gives each stock influence in proportion to its raw share price — a $500 stock moves the index far more than a $50 stock, regardless of which company is actually larger, an odd quirk that's mostly a historical artifact of how the earliest indices were built before better methods existed.

## Market-Cap-Weighted Indices

Most major indices today, including the S&P 500, are market-cap-weighted instead: each stock's influence on the index is proportional to its total market capitalization, so a company's actual economic size, not its arbitrary per-share price, determines how much it moves the index.

## Equal-Weighted Indices

A less common alternative is an equal-weighted index, which gives every constituent the same influence regardless of size, deliberately reducing the outsized impact the largest few companies otherwise have in a market-cap-weighted version — a choice that changes an index's behavior meaningfully, especially when a handful of giant companies dominate a market-cap-weighted benchmark.

## Example

A tiny index covers four companies, weighted two ways.

- A: market cap $2,000 billion, return +10%
- B: market cap $1,000 billion, return 0%
- C: market cap $500 billion, return −10%
- D: market cap $500 billion, return +20%
- Total market cap: $4,000 billion

**Market-cap weights**

$$
A = \frac{2{,}000}{4{,}000} = 50\% \qquad B = 25\% \qquad C = 12.5\% \qquad D = 12.5\%
$$

**Market-cap-weighted index return**

$$
0.50 \times 10\% + 0.25 \times 0\% + 0.125 \times (-10\%) + 0.125 \times 20\% = \boxed{6.25\%}
$$

**Equal-weighted index return (25% each)**

$$
\frac{10\% + 0\% - 10\% + 20\%}{4} = \boxed{5.00\%}
$$

- In the standard index, the largest company (A) drives half of the result.
- The equal-weighted version spreads exposure evenly. Here D's 20% counts for as much as A's 10%.

Neither is more correct. The investor chooses between bets weighted by economic size and a broader spread.

# Quiz

1. What does a stock index do?
   - [x] Combines the prices of a defined basket of stocks into a single number representing that group's overall performance
   - Tracks the price of exactly one company
   - Guarantees a fixed annual return to investors
   - Sets interest rates for the broader economy
   > An index reduces many individual stock prices into one representative figure, letting the market's performance be tracked without following every constituent separately.

2. In a price-weighted index, what determines a stock's influence?
   - [x] Its raw per-share price, regardless of the company's actual size
   - Its total market capitalization
   - The number of employees the company has
   - Every stock has identical influence
   > A price-weighted index like the Dow gives more influence to stocks with a higher raw share price, an artifact of how the index was originally constructed rather than a measure of company size.

3. How does a market-cap-weighted index differ from a price-weighted one?
   - [x] Each stock's influence is proportional to its total market capitalization, reflecting actual company size rather than share price
   - Every constituent has exactly equal influence
   - Only the largest company in the index is counted at all
   - There is no difference between the two weighting methods
   > Market-cap weighting ties a stock's influence to its real economic size (price times shares outstanding), which is why most major indices, including the S&P 500, use this method.

4. What does an equal-weighted index do differently?
   - [x] It gives every constituent the same influence, reducing the outsized impact of the largest few companies
   - It only includes the single largest company
   - It weights stocks by their raw share price
   - It excludes all technology companies
   > Equal weighting deliberately flattens each constituent's influence to the same level, in contrast to market-cap weighting, where a handful of giant companies can dominate the index's behavior.

5. Why does weighting methodology matter for how an index behaves?
   - [x] It determines how much any individual stock's price move actually affects the overall index level
   - Weighting methodology has no effect on an index's behavior
   - All weighting methods always produce identical index values
   - Weighting only matters for bond indices, never stock indices
   > Because different weighting schemes give different stocks different amounts of influence, the same set of constituent price moves can produce meaningfully different index results depending on the method used.

6. {#calc1} [calc] Two stocks have market caps of $300 billion (return +10%) and $100 billion (return −10%). What is the return of a market-cap-weighted index of the two?
   - 0%
   - [x] +5%
   - +7.5%
   - +2.5%
   > The weights are 75% and 25%, so the return is 0.75 × 10% + 0.25 × (−10%) = +5%. An equal-weighted index would return 0%.

7. {#calc2} [calc] An equal-weighted index holds four stocks that return +10%, +2%, −4% and 0%. What is the index return?
   - +8%
   - +2.5%
   - +1%
   - [x] +2%
   > The average is (10 + 2 − 4 + 0) / 4 = +2%.
