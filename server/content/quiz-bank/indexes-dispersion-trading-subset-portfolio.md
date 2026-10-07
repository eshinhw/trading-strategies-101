---
slug: indexes-dispersion-trading-subset-portfolio
---

# Quiz

1. {#q1} What does a full, classically-constructed dispersion trade require?
   - A position in a single representative stock only
   - [x] A position in every single component of the index alongside the index option itself
   - No position in any individual stocks at all
   - A position only in the index's largest competitor
   > The classic version of dispersion trading involves the entire basket of index components, which for a broad index means managing many individual positions.

2. {#q2} How does a subset-portfolio dispersion trade differ from the full-basket version?
   - It uses more components than the full-basket version
   - [x] It selects a smaller, carefully chosen group of components to represent the basket side, rather than using every single name
   - It eliminates the index option leg of the trade entirely
   - It is mathematically identical to the full-basket version in every respect
   > Rather than trading the entire basket, a subset approach approximates it with fewer, carefully selected names to reduce cost and complexity.

3. {#q3} How is the subset of components typically chosen?
   - Entirely at random from the full index
   - [x] Weighting toward the largest, most liquid, most heavily-weighted constituents, since they contribute most to the index's volatility and correlation structure
   - Only the smallest, least liquid names in the index
   - Names are chosen alphabetically
   > The subset is designed to preserve as much of the full basket's characteristics as possible, so it emphasizes the constituents that matter most to the index's own behavior.

4. {#q4} What risk does using a subset instead of the full basket introduce?
   - There is no additional risk — subsets behave identically to the full basket
   - [x] Basis risk between the subset's realized correlation and the true, full-index-wide correlation the trade is meant to capture
   - The risk that the index itself stops being calculated
   - The risk of unlimited losses regardless of market conditions
   > Correlation can behave differently among the excluded smaller names than among the included large ones, so a subset approximation may not track the true index-wide correlation relationship perfectly.

5. {#q5} What is the main benefit of using a subset portfolio despite this approximation risk?
   - It guarantees a higher return than the full-basket version
   - [x] It meaningfully cuts transaction costs, margin requirements, and monitoring effort, making the strategy practical for participants who can't justify full-basket overhead
   - It eliminates all correlation risk from the trade
   - It requires holding every stock in the index anyway
   > The subset approach is a deliberate tradeoff — some precision given up in exchange for a meaningfully lower cost and complexity to implement and maintain.

6. {#calc1} [calc] A full dispersion trade needs 50 option positions at $1,500 of setup cost each. A subset version uses 15 positions. How much cheaper is the subset to set up?
   - $22,500
   - $75,000
   - $35,000
   - [x] $52,500
   > The full basket costs 50 × $1,500 = $75,000, and the subset costs 15 × $1,500 = $22,500, a saving of $52,500.

7. {#bk1} [calc] A dispersion trade buys single-stock variance on a subset of stocks and sells index variance. The index implied volatility is 20% and the average stock implied volatility is 30%. What is the ratio of average stock to index volatility?
   - 0.67
   - 10
   - 0.5
   - [x] 1.5
   > 30 / 20 = 1.5. A big gap can mean implied correlation is high enough to make dispersion attractive.

8. {#bk2} [calc] A trader holds variance exposure in 10 of an index's 500 stocks, equally weighted with a total vega notional of $500,000. What is the vega notional per stock?
   - $1,000
   - [x] $50,000
   - $500,000
   - $5,000
   > $500,000 / 10 = $50,000 per stock.

9. {#bk3} [calc] A subset of 10 stocks represents 30% of the index's weight. If the index rises 2%, and the subset rises 3.5%, by how much does the subset outperform the index?
   - 3.5 percentage points
   - 5.5 percentage points
   - 0.6 percentage points
   - [x] 1.5 percentage points
   > 3.5% − 2% = 1.5 percentage points.
