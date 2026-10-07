---
slug: etf-leveraged-etfs
---

# Quiz

1. {#q1} What does a leveraged ETF's stated multiple (e.g., "2x") actually apply to?
   - The ETF's return over its entire lifetime
   - [x] A single trading day's return of the underlying index
   - The ETF's return over exactly one calendar year
   - The dividend yield of the underlying index
   > LETFs reset their leverage daily, so the stated multiple is only accurate for a single day's return, not for longer holding periods.

2. {#q2} What is "volatility decay" (or beta slippage) in the context of leveraged ETFs?
   - The guaranteed steady appreciation of an LETF over time
   - [x] The effect where daily rebalancing causes long-term LETF returns to diverge from, and often underperform, a simple multiple of the index's own long-term return, especially in choppy markets
   - A regulatory fee charged on all leveraged ETFs
   - The process of an LETF converting into a regular, unleveraged ETF
   > Because daily resets compound differently than a simple multiple would suggest, an LETF held over time in a volatile, sideways market can underperform, or even lose money, relative to what its stated multiple might suggest, even if the underlying index ends up flat.

3. {#q3} Can a 2x leveraged ETF lose money even if its underlying index ends up completely flat over the holding period?
   - No, this is mathematically impossible
   - [x] Yes — in a choppy, sideways market, daily rebalancing can cause the LETF to lose money even when the underlying index is flat over the same period
   - Only if the index falls to zero
   - Only on the first day the LETF is issued
   > This is the core consequence of volatility decay — the daily "buy high, sell low" effect of rebalancing in a choppy market can erode an LETF's value even without a net move in the underlying index.

4. {#q4} What factor most strongly increases the size of an LETF's volatility decay over time?
   - The underlying index's dividend yield
   - [x] The underlying index's volatility and the length of the holding period
   - The number of shares outstanding in the LETF
   - The LETF's expense ratio alone
   > The more volatile and choppy the underlying index, and the longer the LETF is held, the further its actual return tends to diverge from a simple multiple of the index's return.

5. {#q5} How might a trader try to directly exploit the volatility decay effect in leveraged ETFs?
   - By buying and holding a single LETF for decades regardless of market conditions
   - [x] By shorting a pair of same-underlying leveraged ETFs (e.g., both the 3x-long and 3x-short versions), aiming to collect decay from both sides
   - Volatility decay cannot be traded directly under any strategy
   - By only ever trading unleveraged ETFs
   > A short position in both directions of a leveraged pair can, under the right conditions, profit from the structural drag of daily rebalancing itself, rather than from betting on the underlying index's direction — though a strong sustained trend in either direction still poses a real risk to this trade.

6. {#calc1} [calc] An index rises 10% one day and falls 10% the next. A 2x daily-reset ETF starting at $10,000 follows it. What is the ETF worth after the two days?
   - [x] $9,600
   - $10,000
   - $9,900
   - $9,800
   > Day 1: +20% gives $12,000. Day 2: −20% gives $9,600. The index itself ended at 1.10 × 0.90 = 0.99, down only 1%, which is volatility decay.

7. {#calc2} [calc] A 3x daily-reset ETF holds $50,000 and the index falls 2% in a day. What is the ETF worth afterwards?
   - $49,000
   - $44,000
   - [x] $47,000
   - $48,000
   > The ETF falls 3 × 2% = 6%, and $50,000 × 0.94 = $47,000.

8. {#bk1} [calc] A 2× daily leveraged ETF is held while the index goes up 10% one day and down 10% the next. What is the ETF's two-day return?
   - [x] −4.00%
   - −1.00%
   - 0.00%
   - −2.00%
   > Day one: 1 + 2×0.1 = 1.20. Day two: 1 − 2×0.1 = 0.80. The product is 0.9600, a −4.00% return, worse than 2× the index's −1.00%.

9. {#bk2} [calc] A 3× daily leveraged ETF is held while the index goes up 10% one day and down 10% the next. What is the ETF's two-day return?
   - −1.00%
   - 0.00%
   - [x] −9.00%
   - −3.00%
   > Day one: 1 + 3×0.1 = 1.30. Day two: 1 − 3×0.1 = 0.70. The product is 0.9100, a −9.00% return, worse than 3× the index's −1.00%.

10. {#bk3} [calc] A 2× daily leveraged ETF is held while the index goes up 5% one day and down 5% the next. What is the ETF's two-day return?
   - [x] −1.00%
   - −0.25%
   - 0.00%
   - −0.50%
   > Day one: 1 + 2×0.05 = 1.10. Day two: 1 − 2×0.05 = 0.90. The product is 0.9900, a −1.00% return, worse than 2× the index's −0.25%.

11. {#bk4} [calc] An index rises 5% one day and falls 5% the next. A 2x daily leveraged ETF starts at $100. What is its value after two days?
   - $100
   - $98
   - $101
   - [x] $99
   > Day one: $100 × 1.10 = $110. Day two: $110 × 0.90 = $99.

12. {#bk5} [calc] An index rises 3% one day and falls 3% the next. A 3x daily leveraged ETF starts at $100. What is its value after two days?
   - $100
   - [x] $99.19
   - $99.91
   - $98.00
   > Day one: $100 × 1.09 = $109. Day two: $109 × 0.91 = $99.19.

13. {#bk6} [calc] The approximate annual volatility drag on a leveraged ETF is 0.5 × L × (L − 1) × σ². For a 2x ETF and index volatility of 20%, what is the drag?
   - 8%
   - 2%
   - 40%
   - [x] 4%
   > 0.5 × 2 × 1 × 0.04 = 0.04, or 4% a year.

14. {#bk7} [calc] Using drag = 0.5 × L × (L − 1) × σ², what is the annual drag for a 3x ETF when index volatility is 20%?
   - 4%
   - [x] 12%
   - 6%
   - 24%
   > 0.5 × 3 × 2 × 0.04 = 0.12, or 12% a year.

15. {#bk8} [calc] A flat but choppy index moves +2%, −2%, +2%, −2% and so on for 10 days. A 2x daily ETF starts at $100. About what is it worth after 10 days (5 up-and-down pairs)?
   - [x] $99.20
   - $100.00
   - $104.00
   - $96.00
   > Each pair multiplies the ETF by 1.04 × 0.96 = 0.9984. After 5 pairs: $100 × 0.9984^5 = $99.20, a small loss while the index is nearly flat.

16. {#bk9} [calc] An index rises 1% a day for 5 days. What is the 5-day return of a 2x daily leveraged ETF?
   - 10.00%
   - 10.20%
   - [x] 10.41%
   - 5.10%
   > The ETF rises 2% a day: 1.02^5 = 1.1041, a 10.41% gain, slightly more than twice the index's 5.10% in a steady trend.

17. {#bk10} [calc] A 2x daily leveraged ETF holds $10,000 and the index falls 10% in one day. What is the ETF worth after that day?
   - [x] $8,000
   - $9,000
   - $7,000
   - $9,800
   > The ETF falls 2 × 10% = 20%, so $10,000 × 0.80 = $8,000.

18. {#bk11} [calc] A 2x daily ETF has $10,000 of assets and $20,000 of exposure. The index falls 10%, leaving $8,000 of assets and $18,000 of exposure. How much exposure must the fund sell to restore 2x leverage?
   - $1,000
   - $4,000
   - [x] $2,000
   - $18,000
   > At 2x, $8,000 of assets needs $16,000 of exposure. $18,000 − $16,000 = $2,000 must be sold.

19. {#bk12} What does a 2x leveraged ETF aim to deliver?
   - [x] Twice the index's return each day, reset daily
   - Twice the index's return over any holding period
   - The index's return with half the risk
   - The index's return plus a fixed 2%
   > The daily reset is crucial: over longer periods the result can differ from twice the index's return.

20. {#bk13} What is volatility decay in a leveraged ETF?
   - A fee charged for volatile days
   - A rise in value during volatile markets
   - [x] Daily rebalancing and compounding erode value in choppy markets, even when the index ends flat
   - The ETF's price rising each day for free
   > Gains and losses compound differently from a simple multiple, so a choppy, sideways market can leave a leveraged ETF down.

21. {#bk14} Under what conditions can a leveraged ETF track its stated multiple reasonably well over time?
   - In a choppy market with high volatility
   - [x] In a smoothly trending market with low volatility
   - Only in a market that never moves
   - Never
   > The decay grows with the index's volatility and the holding period, so steady trends hurt less.
