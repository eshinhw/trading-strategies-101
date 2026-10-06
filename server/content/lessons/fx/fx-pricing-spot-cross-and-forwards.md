---
slug: fx-pricing-spot-cross-and-forwards
title: FX Pricing: Spot, Cross Rates, and Forwards
summary: How a dealer quotes a currency pair with a bid and an ask, how a rate between two non-dollar currencies is derived from their dollar rates, and how a forward rate is calculated from the spot rate and the two interest rates.
---

## Quoting a Price: Bid and Ask

A dealer doesn't quote a single price for a currency pair, it quotes two: the bid, the price at which the dealer will buy the base currency from you, and the ask, the price at which the dealer will sell it to you. The ask is always higher than the bid, and the gap between them, the spread, is the dealer's compensation. A EUR/USD quote of 1.1000 / 1.1002 has a spread of 0.0002, which is 2 pips, so a round trip of buying and immediately selling back costs about 2 pips before the market has moved at all.

## Cross Rates

Many pairs, like EUR/GBP, aren't traded directly in large volume, so their price is usually derived from two pairs that include the dollar. Since EUR/GBP is the number of pounds one euro buys, and each euro buys EUR/USD dollars while each pound costs GBP/USD dollars, the cross rate is the ratio of the two:

$$
\text{EUR/GBP} = \frac{\text{EUR/USD}}{\text{GBP/USD}}
$$

If EUR/USD is 1.10 and GBP/USD is 1.25, then EUR/GBP is 1.10 / 1.25 = 0.88. If the cross rate in the market ever drifts away from this relationship, a trader can buy in one place and sell in another for a riskless profit, which is the idea behind the triangular arbitrage strategy covered later in this course.

## Pricing a Forward

A forward rate fixes today the exchange rate for a conversion on a future date. It isn't a forecast of where spot will be, it's set by the interest rate difference, which is the logic of interest rate parity. For a pair quoted as base/quote, with the interest rates for the period to the forward date written as r with a time T in years, the forward rate is:

$$
F = S \times \frac{1 + r_{\text{quote}}\,T}{1 + r_{\text{base}}\,T}
$$

The currency with the higher interest rate trades at a forward discount, because holding it earns more interest and the forward price has to offset that advantage. When the quote currency has the higher rate, as in the example below, the forward rate is above spot.

## Forward Points

In practice, dealers don't quote the whole forward rate. They quote the forward points, the difference between the forward and spot rates expressed in pips, and the forward rate is spot plus those points:

$$
\text{forward points} = (F - S) \times 10{,}000
$$

For most pairs a pip is 0.0001, which is why points are the difference scaled by 10,000. Points are positive when the forward is above spot (a forward premium) and negative when it's below (a forward discount), and they grow with both the interest rate difference and the time to the forward date.

## Example

Suppose EUR/USD spot is 1.1000, the three-month dollar interest rate is 5% a year, the three-month euro rate is 3% a year, and the period is 0.25 years. The forward rate is:

$$
F = 1.1000 \times \frac{1 + 0.05 \times 0.25}{1 + 0.03 \times 0.25} = 1.1000 \times \frac{1.0125}{1.0075} \approx 1.1055
$$

The forward points are about 55, so a dealer would quote the three-month outright forward as spot plus roughly 55 pips. The dollar has the higher rate, so it trades at a forward discount, which is the same as saying the euro trades at a forward premium of about 55 pips against it. A company selling euros forward, like the exporter in the hedging lesson, locks in about 1.1055 rather than today's 1.1000.

# Quiz

1. What does the spread in an FX quote represent?
   - The difference between today's price and yesterday's price
   - [x] The gap between the bid and the ask, which is the dealer's compensation and the cost of an immediate round trip
   - The interest rate difference between the two currencies
   - A tax charged by the central bank
   > A dealer buys at the bid and sells at the ask, so the spread between them is how the dealer earns a return and what a trader pays to enter and exit.

2. EUR/USD is 1.20 and GBP/USD is 1.50. What is the cross rate EUR/GBP?
   - 1.80
   - 0.60
   - [x] 0.80, because EUR/GBP = 1.20 / 1.50
   - 1.25
   > The cross rate is the ratio of the two dollar pairs: EUR/GBP = (EUR/USD) / (GBP/USD) = 1.20 / 1.50 = 0.80.

3. What determines the forward rate for a currency pair?
   - A forecast of where the spot rate will be on the forward date
   - [x] The spot rate adjusted by the interest rate difference between the two currencies over the period
   - The preference of the central bank
   - The size of the trader's position
   > The forward rate follows from interest rate parity: it equals spot adjusted for the two interest rates, not a prediction of future spot.

4. In EUR/USD, the dollar interest rate is higher than the euro interest rate. How does the forward rate compare with spot?
   - The forward rate is below spot, because the euro is the higher-yielding currency
   - [x] The forward rate is above spot, so the dollar, the higher-rate currency, trades at a forward discount
   - The forward rate always equals spot
   - It cannot be determined
   > When the quote currency (USD) has the higher rate, the forward ratio is above one, so F is above S and the higher-yielding dollar is at a forward discount.

5. What are forward points?
   - The profit a dealer makes on a forward
   - The number of days until the forward date
   - The bid-ask spread on a forward contract
   - [x] The difference between the forward and spot rates, expressed in pips, which a dealer adds to spot to quote the forward
   > Dealers quote forwards as spot plus forward points, with the points reflecting the interest rate difference and the time to the forward date.
