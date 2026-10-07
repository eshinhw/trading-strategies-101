---
slug: etf-r-squared
---

# Quiz

1. {#bk1} [calc] A price series regressed against time has a correlation of 0.9. What is the R-squared?
   - 0.90
   - 0.45
   - 0.95
   - [x] 0.81
   > R-squared is the correlation squared: 0.9² = 0.81.

2. {#bk2} [calc] A trend filter ranks ETFs by annualized slope times R-squared. An ETF has an annualized slope of 12% and an R-squared of 0.81. What is its score?
   - 12%
   - [x] 9.7%
   - 14.8%
   - 6%
   > Score = 12% × 0.81 = 9.72%.

3. {#bk3} [calc] A trend rule only trades ETFs with an R-squared above 0.6. ETF X has a slope of 20% a year and an R-squared of 0.45. ETF Y has a slope of 8% and an R-squared of 0.75. Which is traded?
   - Only ETF X
   - Both
   - Neither
   - [x] Only ETF Y
   > ETF X's R-squared of 0.45 is below 0.6, so the trend is too choppy. Only Y passes.

4. {#bk4} [calc] A regression of an ETF's price on time has a correlation of 0.95. What is the R-squared?
   - [x] 0.9025
   - 0.95
   - 0.475
   - 0.975
   > R-squared = correlation squared = 0.95² = 0.9025.

5. {#bk5} [calc] ETF A has a trend slope of 15% a year with an R-squared of 0.40. ETF B has a slope of 10% with an R-squared of 0.85. Using slope × R-squared as the score, which ranks higher?
   - ETF A, 6.0% against 8.5%
   - ETF A, 15% against 10%
   - [x] ETF B, 8.5% against 6.0%
   - They tie
   > A scores 15% × 0.40 = 6.0%. B scores 10% × 0.85 = 8.5%. B is the smoother, more trustworthy trend.

6. {#bk6} [calc] A strategy only trades ETFs with an R-squared of at least 0.70. Three ETFs have R-squared values of 0.82, 0.64 and 0.71. How many pass the filter?
   - [x] 2
   - 1
   - 3
   - 0
   > 0.82 and 0.71 are at least 0.70. 0.64 fails.

7. {#bk7} [calc] A trend has an R-squared of 0.81. What share of the price variation is NOT explained by the straight-line trend?
   - 81%
   - 9%
   - [x] 19%
   - 0.81%
   > 1 − 0.81 = 0.19, so 19% is unexplained noise around the trend.

8. {#bk8} An ETF's price trend has an R-squared close to 1. What does that say about the trend?
   - The price is certain to keep rising
   - The trend is choppy and unreliable
   - The ETF is certain to beat its index
   - [x] It is a smooth trend that a straight line fits well
   > A high R-squared means a smooth, steady trend. A low one means a choppy, noisy path.

9. {#bk9} How is an R-squared signal typically used in a strategy?
   - As the only signal that decides direction
   - [x] As a filter on top of another signal, to judge how much to trust the trend already identified
   - To measure the ETF's expense ratio
   - To set the number of ETF shares
   > R-squared says nothing about direction. It is quality control on momentum or trend-following.

10. {#bk10} Two trends cover the same net price move. Which is more trustworthy for a momentum trade?
   - [x] The one with the higher R-squared, reflecting steadier, persistent buying pressure
   - The one with the lower R-squared
   - They are equally trustworthy
   - The one with more volume spikes
   > A smooth uptrend is more likely to continue than a jagged one that happens to end at the same price.
