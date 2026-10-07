---
slug: indexes-cash-and-carry-arbitrage
title: Cash-and-Carry Arbitrage
summary: Buying an index's stocks and selling index futures against them, capturing a mispricing between the futures price and its fair, cost-of-carry value.
---

## Spot, Futures, and Cost of Carry

Cash-and-carry arbitrage exploits the relationship between an index's futures price and its current ("spot") value: in theory, a futures contract on an index should trade at spot plus the cost of carrying that position to expiration — mainly financing costs, minus any dividends the underlying stocks pay out before expiration. When the actual futures price trades above this "fair value," the arbitrage is to buy the underlying basket of stocks, the "cash" side, and simultaneously sell the futures contract, going "short the carry," locking in a profit as the two converge by expiration.

## Why It's Close to Risk-Free

The trade is close to risk-free in principle: at expiration, the futures contract settles against the actual index level, so the long stock basket and the short futures position converge to the same value regardless of where the market ends up — the profit comes from the initial mispricing, not from taking a view on market direction. This is why the trade is called "arbitrage" rather than a directional bet.

## Real-World Frictions

In practice, real friction narrows or eliminates the opportunity: buying every stock in an index in the correct weights involves transaction costs and tracking error, the financing rate used to compute fair value may differ from what an arbitrageur can actually borrow at, and dividend payments, which reduce the futures' fair value, can be uncertain or change before expiration — all of which mean the "riskless" trade carries real execution risk that erodes the theoretical profit.

## Who Actually Trades It

Because index futures are heavily traded and closely watched by many market participants, the cash-and-carry mispricing tends to be small and short-lived in liquid markets — it's a trade that depends on speed and low transaction costs to capture a thin margin reliably, which is why it's typically the domain of large institutional trading desks with the infrastructure to trade a full stock basket efficiently, rather than a place individual traders can easily compete.

# Quiz

1. What relationship does cash-and-carry arbitrage exploit?
   - The relationship between two unrelated stocks
   - [x] The relationship between an index futures price and its spot value plus the cost of carry (financing minus dividends)
   - The relationship between a stock's price and its earnings
   - The relationship between bond yields and stock prices
   > The trade is based on the theoretical "fair value" link between an index's spot price and its futures price, which should differ only by the cost of carrying that position (financing costs minus expected dividends).

2. What does an arbitrageur do when index futures trade above their theoretical fair value?
   - Sell the underlying stocks and sell the futures
   - [x] Buy the underlying stocks (the "cash" side) and sell the futures contract
   - Buy both the stocks and the futures
   - Do nothing, since no opportunity exists
   > When futures are priced rich relative to fair value, the arbitrage is to buy the stocks and short the futures, capturing the mispricing as the two converge by expiration.

3. Why is this trade close to risk-free in principle?
   - Because the underlying stocks never change in price
   - [x] Because at expiration the futures settle against the actual index level, so the long stock basket and short futures converge to the same value regardless of market direction
   - Because arbitrage trades are guaranteed by regulators
   - Because the trade requires no capital
   > The long stock position and short futures position are designed to converge at expiration no matter where the market goes, isolating the initial mispricing rather than a directional bet.

4. What real-world frictions can erode the theoretical profit of cash-and-carry arbitrage?
   - There are no real frictions — the trade is always perfectly profitable
   - [x] Transaction costs and tracking error from trading a full stock basket, financing-rate differences, and uncertainty in dividend payments
   - The trade can only be executed once per year
   - Index futures cannot be shorted under any circumstances
   > In practice, real costs and uncertainties — trading the whole basket, actual borrowing rates, and dividend timing — mean the "riskless" trade carries genuine execution risk that can erode the theoretical arbitrage profit.

5. Why is cash-and-carry arbitrage typically the domain of large institutional desks rather than individual traders?
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
