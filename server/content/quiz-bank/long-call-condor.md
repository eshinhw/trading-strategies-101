---
slug: long-call-condor
---

# Quiz

1. {#q1} How does a long call condor differ from a long call butterfly?
   - [x] The middle short strike is split into two, which widens the profit zone but lowers the maximum payoff
   - It has a single middle strike, which makes the profit zone narrower but raises the maximum payoff of the trade
   - It profits from a large move, because the outer long calls gain value when the stock breaks out of the range
   - It has unlimited profit, because the extra long call at the top strike keeps gaining as the stock continues up
   > A condor trades a smaller maximum profit for a better chance of landing in the profitable range.

2. {#q2} What view does a long call condor express?
   - The stock will break out sharply in either direction, so the trader wants the outer long calls to pay off
   - [x] The stock will settle somewhere within a range, not necessarily at one exact price
   - The stock will rise steadily through every strike, so the trader wants all four of the calls to gain in value
   - The stock will fall steadily below every strike, so the trader wants the short calls to gain in value
   > The profit zone spans the area between the two short strikes.

3. {#q3} How is a long call condor built?
   - Sell 1 call below the range, buy 2 inside it, and sell 1 above the range, with the strikes evenly spaced out
   - Buy 2 calls at the middle and sell the wings, so that the position gains most from a move in either direction
   - [x] Buy 1 call well below the range, sell 1 at its lower edge, sell 1 at its upper edge, and buy 1 well above, evenly spaced
   - Buy a call and a put at the same strike, then sell a call and a put at strikes on either side of the price
   > Four strikes, same expiration.

4. {#q4} The stock finishes inside the range between the two short strikes. What happens?
   - The trader loses the full debit, because the short calls finish inside the range with no value left
   - The trader loses an unlimited amount
   - The trader is assigned shares at the lower short strike, because the options finish in the money
   - [x] The trader captures the maximum profit
   > Both short calls expire in the profitable zone.

5. {#calc1} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $112
   - $30
   - [x] $88
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the lower break-even stock price is $88 per share. Formula: S*_up = K4 - D; S*_down = K1 + D.

6. {#bk1} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - $30
   - [x] $3
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $7
   - $3
   - $30
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum profit is $7 per share. Formula: P_max = κ - D, equidistant strikes with gap κ.

8. {#bk3} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $88
   - $30
   - [x] $112
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - D; S*_down = K1 + D.

9. {#bk4} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$10
   - +$13
   > At $103 the option legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

10. {#bk5} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $24
   - $300
   - $2,700
   - [x] $2,400
   > The maximum loss is $3 per share. One contract covers 100 shares, so 8 contracts give $3 × 100 × 8 = $2,400.

11. {#bk6} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$10
   - +$13
   > At $100 the legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

12. {#bk7} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - +$10
   - +$13
   - [x] +$7
   > At $101 the legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

13. {#bk8} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. At expiration the stock is at $105. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - +$21
   - +$700
   - [x] +$2,100
   - −$2,100
   > Per share the position makes +$7 at $105. For 3 contracts: +$7 × 100 × 3 = +$2,100.

14. {#bk9} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 4 contracts (100 shares each)?
   - [x] $1,200
   - $12
   - $300
   - $1,500
   > The net debit is $3 per share. For 4 contracts: $3 × 100 × 4 = $1,200.

15. {#bk10} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.43 to 1
   - 7 to 1
   - [x] 2.33 to 1
   - 3 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
