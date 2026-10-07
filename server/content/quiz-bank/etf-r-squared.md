---
slug: etf-r-squared
---

# Quiz

1. {#q1} What does R-squared measure when applied to a price trend?
   - The exact future price of the asset
   - [x] How well a straight line fits the price plotted against time — how smooth and consistent the trend has been
   - The company's total dividend payments
   - The number of shares traded per day
   > R-squared, borrowed from regression analysis, quantifies how cleanly price has been moving in one direction over time, from 0 (no consistent fit) to 1 (a perfectly smooth trend).

2. {#q2} What does a low R-squared indicate about a price trend, even if it ended up moving in one net direction?
   - That the trend was extremely smooth and consistent
   - [x] That the price got to roughly the same place through choppy, erratic movement rather than steady, consistent movement
   - That the asset had zero trading volume
   - That the trend is guaranteed to continue
   > A low R-squared means the straight-line fit is poor — the price bounced around a lot on its way to the net result, rather than moving smoothly and consistently.

3. {#q3} How is R-squared typically used in a trading strategy?
   - As the sole signal determining which direction to trade
   - [x] As a filter layered on top of another signal like momentum, favoring smoother, higher-R-squared trends and skipping choppier ones
   - It has no practical trading application
   - To determine a company's credit rating
   > R-squared doesn't provide directional information on its own — it's typically used to filter or rank trends already identified by a directional signal, favoring the cleanest ones.

4. {#q4} Why might a smooth, high-R-squared trend be considered more trustworthy than a choppy one with the same total return?
   - Smooth trends are always guaranteed to reverse immediately
   - [x] A smooth trend reflects steady, persistent buying (or selling) pressure and is thought more likely to continue than noisy, directionless action that happened to net out positive
   - R-squared has no relationship to trend quality
   - Choppy trends always outperform smooth trends
   > The underlying idea is that consistent, low-noise price action reflects a more genuine, persistent trend than erratic movement that merely arrived at a similar net result.

5. {#q5} What role does R-squared play relative to a directional signal like momentum?
   - It replaces the need for any directional signal entirely
   - [x] It acts as a quality-control layer — telling you how much to trust a trend you've already identified, not which direction to trade
   - It always contradicts whatever the momentum signal indicates
   - It can only be computed once per year
   > R-squared is combined with, not substituted for, a directional signal — it helps concentrate capital in the trends most likely to persist rather than treating every qualifying trend as equally reliable.

6. {#calc1} [calc] A sector ETF's price against time over 60 days has an R-squared of 0.81. What is the correlation between price and time, and how much of the price variation does the trend line explain?
   - 0.81, and 90%
   - 0.9, and 90%
   - [x] 0.9, and 81%
   - 0.66, and 81%
   > The correlation is the square root of R-squared: √0.81 = 0.9. The line explains 81% of the variation, so this is a clean trend.

7. {#bk1} [calc] A price series regressed against time has a correlation of 0.9. What is the R-squared?
   - 0.90
   - 0.45
   - 0.95
   - [x] 0.81
   > R-squared is the correlation squared: 0.9² = 0.81.

8. {#bk2} [calc] A trend filter ranks ETFs by annualized slope times R-squared. An ETF has an annualized slope of 12% and an R-squared of 0.81. What is its score?
   - 12%
   - [x] 9.7%
   - 14.8%
   - 6%
   > Score = 12% × 0.81 = 9.72%.

9. {#bk3} [calc] A trend rule only trades ETFs with an R-squared above 0.6. ETF X has a slope of 20% a year and an R-squared of 0.45. ETF Y has a slope of 8% and an R-squared of 0.75. Which is traded?
   - Only ETF X
   - Both
   - Neither
   - [x] Only ETF Y
   > ETF X's R-squared of 0.45 is below 0.6, so the trend is too choppy. Only Y passes.

10. {#bk4} [calc] A regression of an ETF's price on time has a correlation of 0.95. What is the R-squared?
   - [x] 0.9025
   - 0.95
   - 0.475
   - 0.975
   > R-squared = correlation squared = 0.95² = 0.9025.

11. {#bk5} [calc] ETF A has a trend slope of 15% a year with an R-squared of 0.40. ETF B has a slope of 10% with an R-squared of 0.85. Using slope × R-squared as the score, which ranks higher?
   - ETF A, 6.0% against 8.5%
   - ETF A, 15% against 10%
   - [x] ETF B, 8.5% against 6.0%
   - They tie
   > A scores 15% × 0.40 = 6.0%. B scores 10% × 0.85 = 8.5%. B is the smoother, more trustworthy trend.

12. {#bk6} [calc] A strategy only trades ETFs with an R-squared of at least 0.70. Three ETFs have R-squared values of 0.82, 0.64 and 0.71. How many pass the filter?
   - [x] 2
   - 1
   - 3
   - 0
   > 0.82 and 0.71 are at least 0.70. 0.64 fails.

13. {#bk7} [calc] A trend has an R-squared of 0.81. What share of the price variation is NOT explained by the straight-line trend?
   - 81%
   - 9%
   - [x] 19%
   - 0.81%
   > 1 − 0.81 = 0.19, so 19% is unexplained noise around the trend.

14. {#bk8} An ETF's price trend has an R-squared close to 1. What does that say about the trend?
   - The price is certain to keep rising
   - The trend is choppy and unreliable
   - The ETF is certain to beat its index
   - [x] It is a smooth trend that a straight line fits well
   > A high R-squared means a smooth, steady trend. A low one means a choppy, noisy path.

15. {#bk9} How is an R-squared signal typically used in a strategy?
   - As the only signal that decides direction
   - [x] As a filter on top of another signal, to judge how much to trust the trend already identified
   - To measure the ETF's expense ratio
   - To set the number of ETF shares
   > R-squared says nothing about direction. It is quality control on momentum or trend-following.

16. {#bk10} Two trends cover the same net price move. Which is more trustworthy for a momentum trade?
   - [x] The one with the higher R-squared, reflecting steadier, persistent buying pressure
   - The one with the lower R-squared
   - They are equally trustworthy
   - The one with more volume spikes
   > A smooth uptrend is more likely to continue than a jagged one that happens to end at the same price.
