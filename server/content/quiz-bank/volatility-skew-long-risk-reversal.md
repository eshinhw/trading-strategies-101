---
slug: volatility-skew-long-risk-reversal
---

# Quiz

1. {#q1} What does "volatility skew" describe?
   - The fact that all options on an underlying always trade at the same implied volatility
   - [x] The pattern where options at different strikes on the same underlying and expiration trade at different implied volatilities
   - The historical volatility of a stock over the past year
   - A regulatory limit on how much implied volatility can change per day
   > Skew describes how implied volatility varies across strikes for options on the same underlying and expiration, rather than being uniform.

2. {#q2} For most equity indexes and many stocks, which options typically carry higher implied volatility?
   - Out-of-the-money calls
   - [x] Out-of-the-money puts
   - At-the-money options only
   - Implied volatility is always identical across all strikes
   > Out-of-the-money puts typically trade at higher implied volatility than out-of-the-money calls, reflecting greater demand for downside protection.

3. {#q3} How is a "long risk reversal" constructed?
   - Long a put and short a call
   - [x] Long a call and short a put
   - Long both a call and a put at the same strike
   - Short both a call and a put
   > A long risk reversal combines a long call with a short put, typically at different out-of-the-money strikes, creating a position that behaves like a leveraged long stock position.

4. {#q4} Why can a long risk reversal often be constructed at a lower net cost than a comparable long call alone?
   - Because calls are always more expensive than puts regardless of skew
   - [x] Because the put being sold typically carries higher implied volatility (and is relatively more expensive) than the call being bought, partially or fully offsetting the call's cost
   - Because risk reversals require no premium to be paid or received
   - Because puts and calls always have identical implied volatility
   > Skew means the sold put is often richer than the bought call at a similar distance from the money, which can reduce or eliminate the net cost of the position.

5. {#q5} What additional exposure does a long risk reversal carry beyond a simple directional bet on the stock?
   - No additional exposure — it is purely a directional bet with no other factors
   - [x] An implicit exposure to changes in the volatility skew itself, since a shift in skew can affect the position's P&L in addition to the stock's price move
   - Exposure to a completely unrelated company's stock price
   - Exposure to interest rates only, with no relationship to the stock at all
   > Because the position's cost and value are tied to the relative implied volatilities of the put and call, a shift in skew (such as puts becoming even richer during a selloff) can affect the trade's P&L on top of the underlying's own price movement.

6. {#calc1} [calc] A trader buys a 105 call for $2.10 and sells a 95 put for $2.40. What is the net premium per share, and what is the profit per contract if the stock ends at 108?
   - A $0.30 debit, and $270
   - A $0.30 credit, and $300
   - [x] A $0.30 credit, and $330
   - A $4.50 debit, and $330
   > The put brings in $2.40 and the call costs $2.10, a $0.30 credit. At 108 the call is worth $3.00, so the profit is ($3.00 + $0.30) × 100 = $330.

7. {#calc2} [calc] A long risk reversal buys a 105 call and sells a 95 put for a $0.30 net credit. Below which stock price at expiration does the trade start to lose money?
   - [x] $94.70
   - $95.30
   - $105.30
   - $95.00
   > The short put begins to lose below its strike, but the credit cushions it by $0.30: 95 − 0.30 = $94.70.

8. {#bk1} [calc] A 25-delta call has an implied volatility of 18 and a 25-delta put has an implied volatility of 22. What is the risk reversal (call volatility minus put volatility)?
   - [x] −4 volatility points
   - +4 volatility points
   - 40 volatility points
   - −22 volatility points
   > 18 − 22 = −4 volatility points, a negative skew.

9. {#bk2} [calc] A long risk reversal buys a $110 call for $2.00 and sells a $90 put for $2.50. At expiration the stock is at $115. What is the profit per share?
   - +$5.00
   - +$3.00
   - [x] +$5.50
   - +$0.50
   > The call is worth $5 and the put expires worthless. Net = $5 + ($2.50 − $2.00 premium received) = $5.50.
