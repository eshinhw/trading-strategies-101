---
slug: fx-triangular-arbitrage
---

# Quiz

1. {#q1} What relationship should exist between the three exchange rates connecting three currencies, in an efficient market?
   - The three rates should have no relationship to each other whatsoever
   - [x] They should be mutually consistent — converting through all three back to the starting currency should return approximately the same amount you started with
   - Two of the three rates should always be identical to each other
   - The three rates should always sum to exactly 1.0
   > In an efficient market, the three exchange rates between three currencies should be internally consistent, since any inconsistency would represent an exploitable mispricing.

2. {#q2} What does a trader do when a triangular arbitrage opportunity exists?
   - Hold a single currency position and wait for it to appreciate
   - [x] Execute a sequence of three trades around the "triangle," converting through all three currencies and ending with more of the starting currency
   - Buy and sell the exact same currency pair twice in a row
   - Avoid trading entirely until the rates become consistent
   > The arbitrage is captured by executing all three trades in sequence, ending up with a small profit in the original starting currency due to the momentary inconsistency.

3. {#q3} Why is triangular arbitrage considered close to riskless?
   - Because it requires taking a strong directional view on one currency
   - [x] Because it requires zero directional view — the trader isn't betting on any currency's direction, only on the internal consistency of the three rates
   - Because currency prices never change once a trade begins
   - Because the trade is guaranteed by international regulators
   > The trade doesn't depend on where any currency's price goes — it captures a mathematical inconsistency between three quoted rates, independent of market direction.

4. {#q4} Why does triangular arbitrage tend to be small and extremely short-lived in liquid major currency pairs?
   - Because major currency pairs are rarely traded
   - [x] Because any persistent mispricing would be rapidly traded away by market participants and automated systems constantly monitoring for exactly this inconsistency
   - Because triangular arbitrage is illegal in major currency markets
   - Because exchange rates are fixed by central banks and never fluctuate
   > Given how closely monitored and heavily traded major currency pairs are, any inconsistency between their rates tends to be corrected very quickly by other market participants.

5. {#q5} What is required to capture triangular arbitrage opportunities reliably?
   - A large directional bet on a single currency's future direction
   - [x] Very fast execution, low transaction costs, and the ability to simultaneously monitor and trade many currency pairs at once
   - Slow, careful analysis over several days before executing any trade
   - No special infrastructure is required at all
   > Because the opportunity is fleeting and thin, capturing it reliably requires speed and infrastructure typically associated with automated trading systems and market makers with low-latency access.

6. {#calc1} [calc] EUR/USD is 1.1000, GBP/USD is 1.2800, and EUR/GBP is quoted at 0.8600. A trader converts $1,000,000 to euros, then to pounds, then back to dollars. What is the profit?
   - About $7,270
   - About $0
   - About $72
   - [x] About $727
   > $1,000,000 / 1.10 = €909,091. × 0.86 = £781,818. × 1.28 ≈ $1,000,727, a profit of about $727 before costs.

7. {#bk1} [calc] EUR/USD is 1.1000 and USD/JPY is 150.00. What EUR/JPY rate removes any triangular arbitrage?
   - 136.36
   - 151.10
   - 1.0000
   - [x] 165.00
   > EUR/JPY = EUR/USD × USD/JPY = 1.1000 × 150.00 = 165.00.

8. {#bk2} [calc] EUR/USD is 1.1000, USD/JPY is 150.00, but EUR/JPY trades at 166.00. Starting with €1 million, sell euros for yen, convert yen to dollars, and dollars back to euros. What is the profit (ignoring costs)?
   - €60,606
   - [x] €6,061
   - €606
   - €0
   > €1,000,000 × 166 = ¥166,000,000, which buys $1,106,667 at 150, which buys €1,006,061 at 1.10. The gain is about €6,061.

9. {#bk3} [calc] EUR/USD is 1.1000 and GBP/USD is 1.2500, so the consistent EUR/GBP rate is 0.8800. EUR/GBP actually trades at 0.8900 (pounds per euro). Starting with €1,000,000, sell euros for pounds, pounds for dollars, and dollars for euros. What is the profit?
   - €113,636
   - €0
   - €5,682
   - [x] €11,364
   > €1,000,000 × 0.8900 = £890,000. £890,000 × 1.2500 = $1,112,500. $1,112,500 / 1.1000 = €1,011,364. Profit = €11,364.
