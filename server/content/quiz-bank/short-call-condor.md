---
slug: short-call-condor
---

# Quiz

1. {#q1} When might a trader use a short call condor?
   - They expect the stock to stay in a tight range and want a cheap bet on that outcome at expiration
   - [x] They expect the stock to break out of a range in either direction but want defined, modest risk, safer than a short strangle
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect no movement at all and want to collect premium without any risk on the position
   > It profits from a move outside the range.

2. {#q2} What is the trade-off compared with a short strangle?
   - The loss is unlimited, but the gain is larger, because the outer short calls are exposed to a large move
   - The profit is unlimited, because the long inner calls keep gaining as the stock moves further away
   - [x] The loss is capped, but the maximum gain is much smaller
   - There is no risk at all, because the long inner calls cancel the short outer calls at every price
   > Long options inside the range cap the loss.

3. {#q3} How is a short call condor built?
   - Buy 1 call below the range, sell 2 inside it, and buy 1 above the range, with the strikes evenly spaced out
   - Sell 2 calls at the middle and buy the wings, so that the position profits most when the stock stays put
   - Buy a call and a put at the same strike, then sell a call and a put at strikes on either side of the price
   - [x] Sell 1 call below the range, buy 1 at its lower edge, buy 1 at its upper edge, and sell 1 above, evenly spaced
   > It is the reverse of a long call condor.

4. {#q4} The stock ends inside the range between the inner strikes. What happens?
   - [x] The trader has the worst, though still capped, result
   - The trader earns the maximum profit, because the long inner calls finish at their most valuable level
   - The trader loses an unlimited amount
   - The trader is assigned shares at the lower short strike, because the outer options finish in the money
   > The credit is kept in full only if the stock ends outside the range.

5. {#calc1} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the maximum loss at expiration, per share?
   - $3
   - $30
   - $88
   - [x] $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the maximum loss is $7 per share. Formula: L_max = κ - C, equidistant strikes with gap κ.

6. {#bk1} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $3
   - $7
   - $30
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the maximum profit is $3 per share. Formula: P_max = C.

7. {#bk2} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $112
   - $30
   - [x] $88
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the lower break-even stock price is $88 per share. Formula: S*_up = K4 - C; S*_down = K1 + C.

8. {#bk3} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - [x] $112
   - $88
   - $30
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - C; S*_down = K1 + C.

9. {#bk4} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. At expiration the stock is at $77. What is the trader's profit or loss per share, counting the premium?
   - −$3
   - +$9
   - +$4
   - [x] +$3
   > At $77 the option legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

10. {#bk5} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$7
   - [x] −$7
   - −$10
   - −$1
   > At $103 the option legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

11. {#bk6} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the maximum loss on 3 contracts (100 shares each), in dollars?
   - $21
   - $700
   - $2,800
   - [x] $2,100
   > The maximum loss is $7 per share. One contract covers 100 shares, so 3 contracts give $7 × 100 × 3 = $2,100.

12. {#bk7} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - [x] −$7
   - −$10
   - −$1
   > At $100 the legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

13. {#bk8} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$7
   - +$7
   - −$10
   - −$1
   > At $101 the legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3).

14. {#bk9} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. At expiration the stock is at $105. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - −$21
   - −$700
   - [x] −$2,100
   - +$2,100
   > Per share the position makes −$7 at $105. For 3 contracts: −$7 × 100 × 3 = −$2,100.

15. {#bk10} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. How much cash is received up front in total if the trader opens 10 contracts (100 shares each)?
   - [x] $3,000
   - $30
   - $300
   - $3,300
   > The net credit is $3 per share. For 10 contracts: $3 × 100 × 10 = $3,000.

16. {#bk11} [calc] A trader builds a Short Call Condor: sells one $85 call, buys one $95 call, buys one $105 call, and sells one $115 call, for a net credit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 2.33 to 1
   - 3 to 1
   - [x] 0.43 to 1
   - 7 to 1
   > Maximum profit is $3 and maximum loss is $7 per share, so the ratio is $3 / $7 = 0.43 to 1.
