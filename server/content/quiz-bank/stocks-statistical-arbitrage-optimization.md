---
slug: stocks-statistical-arbitrage-optimization
---

# Quiz

1. {#bk1} [calc] A statistical-arbitrage optimizer maximizes expected return minus (risk aversion / 2) × variance. A portfolio has an expected return of 6%, volatility of 20%, and risk aversion of 2. What is the objective value?
   - 6%
   - [x] 2%
   - 4%
   - −2%
   > Objective = 6% − (2 / 2) × (0.20)² = 6% − 4% = 2%.

2. {#bk2} [calc] A $100 million statistical-arbitrage book turns over 20% of its value per day and each trade costs 10 basis points. What are the daily trading costs?
   - $200,000
   - $2,000
   - $100,000
   - [x] $20,000
   > Traded value = 20% × $100 million = $20 million. Cost = $20 million × 0.10% = $20,000.

3. {#bk3} [calc] A portfolio is long $60 million and short $60 million of stocks on $50 million of capital. What is the gross leverage?
   - 1.2×
   - [x] 2.4×
   - 0×
   - 2.0×
   > Gross exposure = $60 million + $60 million = $120 million. Leverage = $120 million / $50 million = 2.4×.

4. {#bk4} [calc] An optimizer's forecast for a stock is +30 basis points, and trading it costs 12 basis points one way. What is the expected return net of costs for a round trip?
   - +18 basis points
   - +30 basis points
   - [x] +6 basis points
   - −6 basis points
   > A round trip costs 12 + 12 = 24 basis points. Net = 30 − 24 = +6.

5. {#bk5} [calc] A portfolio targets 10% annual volatility but its risk model shows 12.5%. By what factor should positions be scaled to meet the target?
   - [x] 0.8
   - 1.25
   - 0.1
   - 12.5
   > Scale = target / current = 10% / 12.5% = 0.8.

6. {#bk6} Why does a statistical-arbitrage optimizer penalize turnover?
   - To force the portfolio to hold only one stock
   - Because turnover creates dividends
   - [x] Trading costs and the disagreement between forecasts and risk models make large daily changes expensive
   - Because exchanges ban frequent trading
   > A penalty on turnover keeps the portfolio near yesterday's holdings unless a trade is worth its cost.
