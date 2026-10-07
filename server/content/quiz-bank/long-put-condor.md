---
slug: long-put-condor
---

# Quiz

1. {#q1} How does a long put condor differ from a long put butterfly?
   - It has a single middle strike
   - It profits from a large move, because the outer long puts gain value when the stock breaks out of the range
   - It has unlimited profit, because the extra long put at the lowest strike keeps gaining as the stock continues down
   - [x] The middle short strike is split into two, which widens the profit zone but lowers the maximum payoff
   > A condor trades a smaller maximum profit for a better chance of landing in the profitable range.

2. {#q2} What view does a long put condor express?
   - [x] The stock will settle somewhere within a range, not necessarily at one exact price
   - The stock will break out sharply
   - The stock will rise steadily through every strike, so the trader wants all four of the puts to gain in value
   - The stock will fall steadily below every strike, so the trader wants the short puts to gain in value
   > The profit zone spans the area between the two short strikes.

3. {#q3} How is a long put condor built?
   - Sell 1 put below the range, buy 2 inside it, and sell 1 above the range, with the strikes evenly spaced out
   - [x] Buy 1 put well below the range, sell 1 at its lower edge, sell 1 at its upper edge, and buy 1 well above, evenly spaced
   - Buy 2 puts at the middle and sell the wings, so that the position gains most from a move in either direction
   - Buy a put and a call at the same strike, then sell a put and a call at strikes on either side of the price
   > Four strikes, same expiration.

4. {#q4} The stock makes a large move far outside the wings. What happens?
   - The trader earns the maximum profit, because the long outer puts finish at their most valuable level
   - The trader loses an unlimited amount, because the short puts are exposed to a very large move downward
   - [x] The trader loses the debit paid, and no more
   - The trader is assigned shares at the upper short strike, because the options finish in the money
   > Risk is limited to the debit.

5. {#calc1} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $7
   - $3
   - $30
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum profit is $7 per share. Formula: P_max = κ - D, equidistant strikes with gap κ.

6. {#bk1} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - $30
   - [x] $3
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - [x] $88
   - $112
   - $30
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the lower break-even stock price is $88 per share. Formula: S*_up = K4 - D; S*_down = K1 + D.

8. {#bk3} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $88
   - $30
   - [x] $112
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - D; S*_down = K1 + D.

9. {#bk4} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$10
   - +$13
   > At $103 the option legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

10. {#bk5} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the maximum loss on 5 contracts (100 shares each), in dollars?
   - $15
   - $300
   - $1,800
   - [x] $1,500
   > The maximum loss is $3 per share. One contract covers 100 shares, so 5 contracts give $3 × 100 × 5 = $1,500.

11. {#bk6} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. The stock is at $73 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - [x] −$3
   - −$2
   - −$4
   > At $73 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

12. {#bk7} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. The stock is at $82 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - −$2
   - −$4
   - [x] −$3
   > At $82 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

13. {#bk8} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. At expiration the stock is at $85. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$6
   - −$300
   - [x] −$600
   - +$600
   > Per share the position makes −$3 at $85. For 2 contracts: −$3 × 100 × 2 = −$600.

14. {#bk9} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 5 contracts (100 shares each)?
   - [x] $1,500
   - $15
   - $300
   - $1,800
   > The net debit is $3 per share. For 5 contracts: $3 × 100 × 5 = $1,500.

15. {#bk10} [calc] A trader builds a Long Put Condor: buys one $85 put, sells one $95 put, sells one $105 put, and buys one $115 put, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.43 to 1
   - 7 to 1
   - 3 to 1
   - [x] 2.33 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
