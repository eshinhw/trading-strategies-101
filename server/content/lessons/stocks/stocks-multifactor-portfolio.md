---
slug: stocks-multifactor-portfolio
title: Multifactor Portfolio
summary: Combining several independent factors — like value, momentum, and quality — into a single composite score, rather than relying on any one factor alone.
---

## Why Combine Factors

Individual factors like value, momentum, and low-volatility each capture a different, partial explanation for why some stocks outperform others, and each one goes through extended stretches of underperformance on its own — value can lag for years, momentum can suffer sharp reversals. A multifactor portfolio combines several factors into a single composite score per stock, on the idea that factors with low correlation to each other smooth out the ride, since it's unlikely all of them underperform at the same time.

## Building the Composite Score

A typical construction ranks every stock in the universe on each individual factor, say value, momentum, and quality, converts each ranking to a standardized score, a z-score for example, so factors measured in different units become comparable, and then averages or weights those scores into one combined ranking used to build the final portfolio.

## Choosing the Right Factors

Choosing which factors to combine matters as much as the combining method: factors should ideally be reasonably independent of each other, so they're not really just the same signal twice, and each should have a sound economic or behavioral rationale for existing, rather than being included just because it looked good in a backtest — a risk sometimes called "factor mining."

## Consistency Over Peak Performance

Multifactor portfolios trade off peak performance for consistency: a single-factor portfolio might outperform a multifactor blend in the specific years that factor is most in favor, but the multifactor blend is designed to avoid the multi-year underperformance stretches that any single factor eventually goes through, which is often the more important property for an investor who has to actually hold the strategy through difficult periods.

# Quiz

1. What is the main idea behind a multifactor portfolio?
   - Relying on a single factor for all stock selection decisions
   - [x] Combining several relatively independent factors into one composite score, so it's unlikely all of them underperform at the same time
   - Ignoring all quantitative factors and using only qualitative judgment
   - Trading exclusively based on company size
   > Multifactor portfolios diversify across signals like value, momentum, and quality precisely because each factor has its own stretches of underperformance, and combining relatively uncorrelated factors smooths the overall ride.

2. How is a stock's combined multifactor score typically constructed?
   - By using only the single highest-ranked factor per stock
   - [x] By standardizing each factor's ranking (e.g., via z-scores) so different factors become comparable, then averaging or weighting them together
   - By ignoring all factors and using market capitalization alone
   - By picking one random factor for each stock
   > Since factors are measured in different units and scales, they're typically standardized before being combined into a single composite ranking used to build the portfolio.

3. Why does it matter that the factors combined in a multifactor portfolio be reasonably independent of each other?
   - It doesn't matter — any factors can be combined with equal benefit
   - [x] If factors are highly correlated, combining them doesn't provide real diversification — they're effectively the same signal counted twice
   - Independent factors are illegal to combine
   - Only exactly two factors can ever be combined
   > The diversification benefit of a multifactor approach comes from combining factors that behave differently from each other — redundant, highly correlated factors don't add that benefit.

4. What is "factor mining"?
   - A rigorous, economically justified process for selecting factors
   - [x] The risk of including a factor just because it looked good in a backtest, without a sound economic or behavioral rationale
   - The process of physically extracting minerals used in computer chips
   - A required regulatory filing for factor-based funds
   > Factor mining refers to over-fitting a factor selection to historical data without a real underlying rationale, which risks including a factor that won't actually hold up going forward.

5. What is the main tradeoff of a multifactor portfolio compared to a single-factor portfolio?
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
