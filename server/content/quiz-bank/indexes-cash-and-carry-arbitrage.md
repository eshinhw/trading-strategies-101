---
slug: indexes-cash-and-carry-arbitrage
---

# Quiz

1. {#q1} What relationship does cash-and-carry arbitrage exploit?
   - The relationship between two unrelated stocks
   - [x] The relationship between an index futures price and its spot value plus the cost of carry (financing minus dividends)
   - The relationship between a stock's price and its earnings
   - The relationship between bond yields and stock prices
   > The trade is based on the theoretical "fair value" link between an index's spot price and its futures price, which should differ only by the cost of carrying that position (financing costs minus expected dividends).

2. {#q2} What does an arbitrageur do when index futures trade above their theoretical fair value?
   - Sell the underlying stocks and sell the futures
   - [x] Buy the underlying stocks (the "cash" side) and sell the futures contract
   - Buy both the stocks and the futures
   - Do nothing, since no opportunity exists
   > When futures are priced rich relative to fair value, the arbitrage is to buy the stocks and short the futures, capturing the mispricing as the two converge by expiration.

3. {#q3} Why is index cash-and-carry arbitrage (long the stock basket, short the index futures) close to risk-free in principle?
   - Because the underlying stocks never change in price
   - [x] Because at expiration the futures settle against the actual index level, so the long stock basket and short futures converge to the same value regardless of market direction
   - Because arbitrage trades are guaranteed by regulators
   - Because the trade requires no capital
   > The long stock position and short futures position are designed to converge at expiration no matter where the market goes, isolating the initial mispricing rather than a directional bet.

4. {#q4} What real-world frictions can erode the theoretical profit of cash-and-carry arbitrage?
   - There are no real frictions — the trade is always perfectly profitable
   - [x] Transaction costs and tracking error from trading a full stock basket, financing-rate differences, and uncertainty in dividend payments
   - The trade can only be executed once per year
   - Index futures cannot be shorted under any circumstances
   > In practice, real costs and uncertainties — trading the whole basket, actual borrowing rates, and dividend timing — mean the "riskless" trade carries genuine execution risk that can erode the theoretical arbitrage profit.

5. {#q5} Why is cash-and-carry arbitrage typically the domain of large institutional desks rather than individual traders?
   - It is illegal for individual traders to participate
   - [x] The mispricing tends to be small and short-lived in liquid markets, requiring speed and low transaction costs to capture reliably
   - Index futures are not available to retail traders under any regulation
   - Institutional desks receive a fixed government subsidy for this trade
   > Because index futures are heavily traded and closely monitored, the opportunity is usually thin and fleeting, favoring participants with the infrastructure to trade a full basket efficiently and quickly.

6. {#calc1} [calc] An index is at 4,000, the financing rate is 4%, and dividends yield 1.5%. For a 6-month future, the fair price is 4,000 × (1 + (4% − 1.5%) × 0.5). If futures trade at 4,070 (multiplier $50), what is the arbitrage profit per contract?
   - $3,500
   - [x] $1,000
   - $200
   - $4,000
   > Fair value is 4,000 × 1.0125 = 4,050. The future is 20 points rich, and 20 × $50 = $1,000 per contract.

7. {#calc2} [calc] An index is at 5,000, the financing rate is 5%, dividends yield 2%, and the future expires in 3 months. What is the fair futures price?
   - 5,062.5
   - 5,000
   - 5,175
   - [x] 5,037.5
   > The net carry is 5% − 2% = 3% a year, or 0.75% for 3 months: 5,000 × 1.0075 = 5,037.5.

8. {#bk1} [calc] The index is at 4,500, the rate is 4%, and the dividend yield is 2%. The future expiring in 6 months trades at 4,560. Ignoring costs, what is the cash-and-carry profit per contract (multiplier $50)?
   - [x] $739
   - −$739
   - $3,000
   - $15
   > Fair value is 4,500 × e^((4% − 2%) × 0.5) = 4,545.23. The future is 14.77 points rich, so selling it and buying the stocks earns 14.77 × $50 = $739.

9. {#bk2} [calc] The index is at 5,000, the rate is 3%, and the dividend yield is 1%. The future expiring in 12 months trades at 5,130. Ignoring costs, what is the cash-and-carry profit per contract (multiplier $50)?
   - −$1,450
   - $6,500
   - [x] $1,450
   - $29
   > Fair value is 5,000 × e^((3% − 1%) × 1) = 5,101.01. The future is 28.99 points rich, so selling it and buying the stocks earns 28.99 × $50 = $1,450.
