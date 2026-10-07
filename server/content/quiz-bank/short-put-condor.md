---
slug: short-put-condor
---

# Quiz

1. {#q1} When might a trader use a short put condor?
   - [x] They expect the stock to break out of a range in either direction but want defined, modest risk, safer than a short strangle
   - They expect the stock to stay in a tight range and want a cheap bet on that outcome at expiration
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect no movement at all and want to collect premium without any risk on the position
   > It profits from a move outside the range.

2. {#q2} What is the trade-off compared with a short strangle?
   - The loss is unlimited but the gain is larger
   - [x] The loss is capped, but the maximum gain is much smaller
   - The profit is unlimited, because the long inner puts keep gaining as the stock moves further away
   - There is no risk at all, because the long inner puts cancel the short outer puts at every price
   > Long options inside the range cap the loss.

3. {#q3} How is a short put condor built?
   - Buy 1 put below the range, sell 2 inside it, and buy 1 above the range, with the strikes evenly spaced out
   - Sell 2 puts at the middle and buy the wings, so that the position profits most when the stock stays put
   - [x] Sell 1 put below the range, buy 1 at its lower edge, buy 1 at its upper edge, and sell 1 above, evenly spaced
   - Buy a put and a call at the same strike, then sell a put and a call at strikes on either side of the price
   > It is the reverse of a long put condor.

4. {#q4} The stock ends outside the range, beyond the outer strikes. What happens?
   - The trader loses the full width of the strikes, because the outer short puts finish deep in the money
   - The trader earns unlimited profit
   - The trader is assigned shares at the upper short strike, because the options finish in the money
   - [x] The trader keeps close to the full credit
   > A breakout is the outcome the position is built for.

5. {#calc1} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $88
   - [x] $112
   - $30
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - C; S*_down = K1 + C.

6. {#bk1} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the maximum loss at expiration, per share?
   - $3
   - [x] $7
   - $30
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the maximum loss is $7 per share. Formula: L_max = κ - C, equidistant strikes with gap κ.

7. {#bk2} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the maximum profit at expiration, per share?
   - $7
   - $30
   - $88
   - [x] $3
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the maximum profit is $3 per share. Formula: P_max = C.

8. {#bk3} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $112
   - [x] $88
   - $30
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the lower break-even stock price is $88 per share. Formula: S*_up = K4 - C; S*_down = K1 + C.

9. {#bk4} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$7
   - −$10
   - [x] −$7
   - −$1
   > At $103 the option legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

10. {#bk5} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. At expiration the stock is at $123. What is the trader's profit or loss per share, counting the premium?
   - [x] +$3
   - −$3
   - +$9
   - +$4
   > At $123 the option legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

11. {#bk6} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $24
   - $300
   - [x] $2,400
   - $2,700
   > The maximum profit is $3 per share. One contract covers 100 shares, so 8 contracts give $3 × 100 × 8 = $2,400.

12. {#bk7} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$7
   - +$7
   - −$10
   - −$1
   > At $100 the legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

13. {#bk8} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - [x] −$7
   - −$10
   - −$1
   > At $101 the legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

14. {#bk9} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. At expiration the stock is at $105. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - −$21
   - −$700
   - +$2,100
   - [x] −$2,100
   > Per share the position makes −$7 at $105. For 3 contracts: −$7 × 100 × 3 = −$2,100.

15. {#bk10} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. How much cash is received up front in total if the trader opens 8 contracts (100 shares each)?
   - $24
   - [x] $2,400
   - $300
   - $2,700
   > The net credit is $3 per share. For 8 contracts: $3 × 100 × 8 = $2,400.

16. {#bk11} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 2.33 to 1
   - 3 to 1
   - 7 to 1
   - [x] 0.43 to 1
   > Maximum profit is $3 and maximum loss is $7 per share, so the ratio is $3 / $7 = 0.43 to 1.
