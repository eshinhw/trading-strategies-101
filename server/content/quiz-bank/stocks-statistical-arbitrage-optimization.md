---
slug: stocks-statistical-arbitrage-optimization
---

# Quiz

1. {#q1} In a large statistical arbitrage operation, how is the exact size of each individual stock position typically decided?
   - By trading a fixed dollar amount in every stock regardless of forecast
   - [x] As a formal optimization problem that weighs all simultaneous forecasts and constraints together, rather than name-by-name
   - Purely at random
   - Only for the single stock with the highest forecast, ignoring all others
   > With hundreds or thousands of simultaneous return forecasts, position sizing is treated as a portfolio-level optimization problem rather than a series of independent, individual decisions.

2. {#q2} What does a typical stat-arb portfolio optimization try to maximize or minimize?
   - Only the number of stocks traded, with no other consideration
   - [x] Expected return minus a penalty for estimated risk minus a penalty for transaction costs
   - Only the portfolio's total dollar size
   - The number of sectors represented in the portfolio
   > The optimization balances the portfolio's expected return (from the forecasts) against the risk it's taking on and the cost of trading into that portfolio.

3. {#q3} What is "dollar-neutrality," as a constraint in stat-arb portfolio construction?
   - Holding only long positions, never short
   - [x] Keeping roughly equal long and short dollar exposure in the portfolio
   - Never trading in dollar-denominated stocks
   - Holding exactly one dollar of every stock
   > Dollar-neutrality is a common constraint that keeps the portfolio's overall long exposure roughly balanced against its short exposure, reducing unintended directional market exposure.

4. {#q4} Why does a stat-arb optimizer typically penalize turnover (trading too much, too fast)?
   - Turnover has no cost or downside in a real portfolio
   - [x] Because trading hundreds of names, especially quickly, incurs real transaction costs that erode returns if left unchecked
   - Regulations forbid any turnover in a stat-arb portfolio
   - Turnover always improves the portfolio's risk profile with no cost
   > Moving quickly toward an "optimal" portfolio based on today's forecasts can require large trades, which are costly at scale — penalizing turnover keeps the resulting trading manageable and cost-effective.

5. {#q5} Why is portfolio-construction optimization treated as its own discipline, separate from generating the underlying return forecasts?
   - Because forecasts and portfolio construction are always exactly the same thing
   - [x] Because the same underlying forecasts can produce very different real portfolios, with very different risk and return profiles, depending on how the optimization is set up
   - Because optimization has no effect on the resulting portfolio
   - Because only one possible portfolio can ever be built from a given set of forecasts
   > How forecasts, risk, and costs are weighed and constrained in the optimization meaningfully shapes the resulting portfolio, which is why it's treated as a distinct step and discipline from generating the forecasts themselves.

6. {#calc1} [calc] A stat-arb book has $200 million of gross positions, an expected alpha of 5 basis points a day, and it trades 30% of the book daily at a cost of 1.5 basis points of traded value. What is the expected daily profit after costs?
   - [x] $91,000
   - $100,000
   - $9,000
   - $109,000
   > Alpha is $200M × 0.05% = $100,000. Trading $60M at 0.015% costs $9,000, so the net is $91,000.

7. {#bk1} [calc] A statistical-arbitrage optimizer maximizes expected return minus (risk aversion / 2) × variance. A portfolio has an expected return of 6%, volatility of 20%, and risk aversion of 2. What is the objective value?
   - 6%
   - [x] 2%
   - 4%
   - −2%
   > Objective = 6% − (2 / 2) × (0.20)² = 6% − 4% = 2%.

8. {#bk2} [calc] A $100 million statistical-arbitrage book turns over 20% of its value per day and each trade costs 10 basis points. What are the daily trading costs?
   - $200,000
   - $2,000
   - $100,000
   - [x] $20,000
   > Traded value = 20% × $100 million = $20 million. Cost = $20 million × 0.10% = $20,000.

9. {#bk3} [calc] A portfolio is long $60 million and short $60 million of stocks on $50 million of capital. What is the gross leverage?
   - 1.2×
   - [x] 2.4×
   - 0×
   - 2.0×
   > Gross exposure = $60 million + $60 million = $120 million. Leverage = $120 million / $50 million = 2.4×.

10. {#bk4} [calc] An optimizer's forecast for a stock is +30 basis points, and trading it costs 12 basis points one way. What is the expected return net of costs for a round trip?
   - +18 basis points
   - +30 basis points
   - [x] +6 basis points
   - −6 basis points
   > A round trip costs 12 + 12 = 24 basis points. Net = 30 − 24 = +6.

11. {#bk5} [calc] A portfolio targets 10% annual volatility but its risk model shows 12.5%. By what factor should positions be scaled to meet the target?
   - [x] 0.8
   - 1.25
   - 0.1
   - 12.5
   > Scale = target / current = 10% / 12.5% = 0.8.

12. {#bk6} Why does a statistical-arbitrage optimizer penalize turnover?
   - To force the portfolio to hold only one stock
   - Because turnover creates dividends
   - [x] Trading costs and the disagreement between forecasts and risk models make large daily changes expensive
   - Because exchanges ban frequent trading
   > A penalty on turnover keeps the portfolio near yesterday's holdings unless a trade is worth its cost.
