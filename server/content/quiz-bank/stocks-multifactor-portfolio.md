---
slug: stocks-multifactor-portfolio
---

# Quiz

1. {#q1} What is the main idea behind a multifactor portfolio?
   - Relying on a single factor for all stock selection decisions
   - [x] Combining several relatively independent factors into one composite score, so it's unlikely all of them underperform at the same time
   - Ignoring all quantitative factors and using only qualitative judgment
   - Trading exclusively based on company size
   > Multifactor portfolios diversify across signals like value, momentum, and quality precisely because each factor has its own stretches of underperformance, and combining relatively uncorrelated factors smooths the overall ride.

2. {#q2} How is a stock's combined multifactor score typically constructed?
   - By using only the single highest-ranked factor per stock
   - [x] By standardizing each factor's ranking (e.g., via z-scores) so different factors become comparable, then averaging or weighting them together
   - By ignoring all factors and using market capitalization alone
   - By picking one random factor for each stock
   > Since factors are measured in different units and scales, they're typically standardized before being combined into a single composite ranking used to build the portfolio.

3. {#q3} Why does it matter that the factors combined in a multifactor portfolio be reasonably independent of each other?
   - It doesn't matter — any factors can be combined with equal benefit
   - [x] If factors are highly correlated, combining them doesn't provide real diversification — they're effectively the same signal counted twice
   - Independent factors are illegal to combine
   - Only exactly two factors can ever be combined
   > The diversification benefit of a multifactor approach comes from combining factors that behave differently from each other — redundant, highly correlated factors don't add that benefit.

4. {#q4} What is "factor mining"?
   - A rigorous, economically justified process for selecting factors
   - [x] The risk of including a factor just because it looked good in a backtest, without a sound economic or behavioral rationale
   - The process of physically extracting minerals used in computer chips
   - A required regulatory filing for factor-based funds
   > Factor mining refers to over-fitting a factor selection to historical data without a real underlying rationale, which risks including a factor that won't actually hold up going forward.

5. {#q5} What is the main tradeoff of a multifactor portfolio compared to a single-factor portfolio?
   - Multifactor portfolios always have higher returns in every single year
   - [x] A multifactor blend may underperform a single factor in that factor's best years, but is designed to avoid the multi-year underperformance any single factor eventually goes through
   - There is no meaningful tradeoff at all
   - Multifactor portfolios cannot be constructed using standardized scores
   > Combining factors sacrifices some peak performance in a single factor's best years in exchange for more consistent, less extreme performance over the full cycle.

6. {#calc1} [calc] A stock has z-scores of +1.2 on value, −0.4 on momentum and +0.8 on quality. With equal weights, what is its composite score?
   - +1.6
   - +0.80
   - [x] About +0.53
   - −0.40
   > The average is (1.2 − 0.4 + 0.8) / 3 = 1.6 / 3 ≈ 0.53.

7. {#bk1} [calc] A stock's z-scores are value +1.5, momentum +0.5, and quality −0.2. The composite uses weights of 40%, 30% and 30%. What is the composite score?
   - 1.80
   - [x] 0.69
   - 0.60
   - 0.50
   > Composite = 0.40 × 1.5 + 0.30 × 0.5 + 0.30 × (−0.2) = 0.60 + 0.15 − 0.06 = 0.69.

8. {#bk2} [calc] Two factors each have a Sharpe ratio of 0.5 and are uncorrelated. What is the Sharpe ratio of the best combination of the two, using the rule that uncorrelated Sharpe ratios combine as the square root of the sum of squares?
   - 1.00
   - 0.50
   - 0.25
   - [x] 0.71
   > Combining uncorrelated signals gives √(0.5² + 0.5²) = √0.5 = 0.71.

9. {#bk3} [calc] A stock ranks in the top 20% on value, the top 20% on momentum, and the bottom 20% on quality. If each factor gets an equal weight of 1/3 and the scores are +1, +1 and −1, what is the composite?
   - +1.00
   - [x] +0.33
   - 0.00
   - −0.33
   > Composite = (1 + 1 − 1) / 3 = +0.33.

10. {#bk4} [calc] Two factor portfolios earn 6% and 4% a year. A multifactor portfolio holds 60% of the first and 40% of the second. What is its expected return?
   - 5%
   - 10%
   - [x] 5.2%
   - 4.8%
   > 0.60 × 6% + 0.40 × 4% = 3.6% + 1.6% = 5.2%.

11. {#bk5} [calc] A stock's z-scores are value +2.0, momentum −1.0 and quality +0.5. With equal weights, what is the composite score?
   - [x] +0.5
   - +1.5
   - +2.0
   - −0.5
   > (2.0 − 1.0 + 0.5) / 3 = +0.5.

12. {#bk6} Why should the factors in a multifactor portfolio be reasonably independent?
   - So that all of them perform best at the same time
   - So that the portfolio holds fewer stocks
   - [x] So they are not just the same signal counted twice, and each adds its own diversification
   - So that each factor has the same name
   > If factors are highly correlated, combining them adds little beyond the single factor.
