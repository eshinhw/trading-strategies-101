---
slug: short-iron-condor
---

# Quiz

1. {#q1} When might a trader use a short iron condor?
   - They expect the stock to stay in a range, so they want the short options to lose their value over time
   - [x] They expect a breakout in either direction and want defined, limited risk instead of a naked directional bet
   - They want to collect income from a quiet market, so they sell an out-of-the-money put spread and call spread
   - They want unlimited profit from a breakout, so they avoid selling any of the options further from the money
   > It profits from a move beyond the wings.

2. {#q2} Why is it cheaper than a long straddle or strangle?
   - It collects a credit instead of paying one
   - It has unlimited profit, because the sold wings gain value whenever the stock breaks out of the range
   - [x] The sold wings offset part of the cost, and the debit paid is the maximum loss
   - It has no maximum loss, because the sold wings cannot cancel the cost of the options that are bought
   > The tradeoff is a capped maximum profit.

3. {#q3} How is a short iron condor built?
   - Sell an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Sell a straddle and buy a strangle at the same strike, collecting a credit that is not at risk of loss
   - Buy a call and a put at the same strike, then sell a further call and put to increase the overall cost
   - [x] Buy an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   > It is a bear put spread plus a bull call spread.

4. {#q4} The stock stays range-bound. What happens?
   - [x] The trader loses the debit paid
   - The trader earns the maximum profit, because the bought options keep their value if the stock stays put
   - The trader loses an unlimited amount, because the sold wings are exposed to a very large move upward
   - The trader keeps a credit
   > Without a breakout, the options expire worthless.

5. {#calc1} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - [x] $91
   - $30
   - $6
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4), the lower break-even stock price is $91 per share. Formula: S*_up = K3 + D; S*_down = K2 - D.

6. {#bk1} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the maximum loss at expiration, per share?
   - $6
   - $30
   - [x] $4
   - $91
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4), the maximum loss is $4 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the maximum profit at expiration, per share?
   - [x] $6
   - $4
   - $30
   - $91
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4), the maximum profit is $6 per share. Formula: P_max = κ - D, equidistant strikes with gap κ.

8. {#bk3} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the upper break-even stock price at expiration, per share?
   - $91
   - $30
   - [x] $109
   - $6
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4), the upper break-even stock price is $109 per share. Formula: S*_up = K3 + D; S*_down = K2 - D.

9. {#bk4} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. At expiration the stock is at $123. What is the trader's profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$10
   - +$14
   > At $123 the option legs are worth +$10 per share before the premium, and the net premium adds −$4, for +$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4).

10. {#bk5} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the maximum loss on 5 contracts (100 shares each), in dollars?
   - $20
   - $400
   - $2,400
   - [x] $2,000
   > The maximum loss is $4 per share. One contract covers 100 shares, so 5 contracts give $4 × 100 × 5 = $2,000.

11. {#bk6} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. The stock is at $73 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$10
   - +$14
   > At $73 the legs are worth +$10 per share before the premium, and the net premium adds −$4, for +$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4).

12. {#bk7} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. The stock is at $82 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - +$10
   - +$14
   - [x] +$6
   > At $82 the legs are worth +$10 per share before the premium, and the net premium adds −$4, for +$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4).

13. {#bk8} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. At expiration the stock is at $85. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - +$42
   - +$600
   - [x] +$4,200
   - −$4,200
   > Per share the position makes +$6 at $85. For 7 contracts: +$6 × 100 × 7 = +$4,200.

14. {#bk9} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. How much cash is paid up front in total if the trader opens 10 contracts (100 shares each)?
   - [x] $4,000
   - $40
   - $400
   - $4,400
   > The net debit is $4 per share. For 10 contracts: $4 × 100 × 10 = $4,000.

15. {#bk10} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 1.5 to 1
   - 0.67 to 1
   - 6 to 1
   - 4 to 1
   > Maximum profit is $6 and maximum loss is $4 per share, so the ratio is $6 / $4 = 1.5 to 1.
