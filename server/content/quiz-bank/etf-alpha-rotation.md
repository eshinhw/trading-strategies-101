---
slug: etf-alpha-rotation
---

# Quiz

1. {#q1} How does alpha rotation's ranking signal differ from plain momentum rotation's?
   - They are identical — both use only trailing return
   - [x] Alpha rotation uses a broader, combined score built from multiple signals, not just trailing return alone
   - Alpha rotation ignores price entirely
   - Alpha rotation can only be used with individual stocks, not ETFs
   > While momentum rotation ranks sectors purely by trailing return, alpha rotation blends momentum with other signals — valuation, volatility, macro sensitivity, and so on — into one composite score.

2. {#q2} What is a limitation of relying on trailing return (pure momentum) alone, that motivates alpha rotation?
   - Trailing return is always a perfect, noise-free predictor
   - [x] Trailing return only reflects what has already happened and can be noisy and reactive, without explaining why a sector is moving
   - Trailing return cannot be computed for sector ETFs
   - Momentum has no relationship to future sector performance
   > Pure trailing-return momentum is backward-looking and doesn't distinguish between genuine forward-looking strength and noise, which is part of the motivation for blending in additional signals.

3. {#q3} How is alpha rotation's combined score typically constructed?
   - By using only the single highest-scoring signal for each sector
   - [x] By standardizing each individual signal, weighting them by reliability and independence, and combining them into one composite ranking
   - By ignoring all signals except trading volume
   - By randomly assigning scores to each sector
   > This mirrors the standard approach used for any multifactor or alpha-combo construction — standardize, weight by quality and independence, then combine into a single ranking.

4. {#q4} What is a potential downside of including additional signals beyond trailing return in alpha rotation?
   - Additional signals always improve the strategy with no risk
   - [x] A poorly-chosen or stale additional signal can drag down the combined score rather than improve it
   - Additional signals make the strategy impossible to compute
   - There is no downside to adding more signals
   > Just as with any alpha combo, the quality of each included signal matters — a weak or outdated signal can hurt the composite score's predictive power rather than help it.

5. {#q5} What is the potential benefit of alpha rotation's richer information set compared to pure price momentum?
   - It guarantees the strategy will never underperform
   - [x] It can, in principle, react to shifts in sector leadership earlier or more accurately than pure price momentum alone
   - It eliminates the need for any rebalancing
   - It only works during market holidays
   > By drawing on more than just trailing return, alpha rotation aims to anticipate or confirm sector leadership shifts using information that raw price momentum alone wouldn't capture.

6. {#calc1} [calc] A sector scores +1.5 on momentum (weight 50%), −0.5 on valuation (weight 30%) and +0.4 on low volatility (weight 20%). What is its composite alpha score?
   - +1.40
   - +0.47
   - +0.20
   - [x] +0.68
   > 0.5 × 1.5 + 0.3 × (−0.5) + 0.2 × 0.4 = 0.75 − 0.15 + 0.08 = +0.68.

7. {#bk1} [calc] Two ETFs are scored 70% on momentum and 30% on value. ETF A has a momentum score of 80 and a value score of 40. ETF B has 60 and 70. Which has the higher combined score?
   - ETF B, 68 against 63
   - ETF A, 60 against 65
   - They tie at 64
   - [x] ETF A, 68 against 63
   > A = 0.7 × 80 + 0.3 × 40 = 68. B = 0.7 × 60 + 0.3 × 70 = 63. ETF A scores higher.

8. {#bk2} [calc] An alpha score blends momentum (weight 50%), value (30%) and low volatility (20%). An ETF scores 90, 50 and 30 on them. What is its combined score?
   - 56.7
   - [x] 66
   - 70
   - 50
   > Score = 0.5 × 90 + 0.3 × 50 + 0.2 × 30 = 45 + 15 + 6 = 66.

9. {#bk3} [calc] A rotation buys the 3 highest-scoring of 10 ETFs with equal weights. How much of the portfolio does each ETF get, and how much is not invested?
   - 10% each and 70% uninvested
   - 30% each and 10% uninvested
   - 3.3% each and 90% uninvested
   - [x] 33.3% each and 0% uninvested
   > Three ETFs equally weighted get 1/3 each, so the portfolio is fully invested.

10. {#bk4} [calc] A sector ETF has z-scores of +1.2 for momentum, −0.4 for value and +0.5 for low volatility. The weights are 50%, 30% and 20%. What is its combined score?
   - [x] 0.58
   - 1.30
   - 0.43
   - 0.30
   > 0.5 × 1.2 + 0.3 × (−0.4) + 0.2 × 0.5 = 0.60 − 0.12 + 0.10 = 0.58.

11. {#bk5} [calc] A sector ETF's trailing return is 8%. The average across all sectors is 5% with a standard deviation of 3%. What is its momentum z-score?
   - 3.0
   - 0.6
   - [x] 1.0
   - 1.6
   > (8% − 5%) / 3% = 1.0.

12. {#bk6} [calc] Sector A scores 0.58 and Sector B scores 0.46 on a combined alpha. A rotation holds the top-scoring one. Which does it hold, and what is the score gap?
   - [x] Sector A, by 0.12
   - Sector B, by 0.12
   - Sector A, by 0.58
   - Sector B, by 0.46
   > A's score is higher: 0.58 − 0.46 = 0.12.

13. {#bk7} How does alpha rotation differ from plain sector momentum rotation?
   - It ranks sectors by name
   - It holds every sector equally
   - [x] It ranks sectors by a combined score from several signals, not by trailing return alone
   - It uses only value measures
   > The composite blends momentum with valuation-style and other signals.

14. {#bk8} Why blend other signals with trailing return?
   - Trailing return is always wrong
   - Other signals are guaranteed to be better
   - Trailing return is unavailable for ETFs
   - [x] Trailing return is noisy and reactive, telling only what already happened and not why
   > A richer score can react to sector leadership shifts earlier or more accurately, though it depends on the quality of the inputs.
