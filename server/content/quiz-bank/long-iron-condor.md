---
slug: long-iron-condor
---

# Quiz

1. {#q1} Why is the iron condor one of the most widely used income strategies?
   - [x] It collects income with strictly limited, known-in-advance risk when the stock stays in a range
   - It has unlimited profit potential, because the long options gain value whenever the stock makes a large move
   - It profits from a large move in either direction, since the long wings are cheap compared with a straddle
   - It requires no margin, because the long options remove every possible obligation that the short options create
   > Both long options cap the total risk on each side.

2. {#q2} How is it more forgiving than an iron butterfly?
   - It collects a larger credit than an iron butterfly, because the long wings are placed much further from the money
   - [x] The short strikes are out of the money rather than at the money, so the stock has more room before losses begin
   - It has unlimited profit, because the extra distance between the strikes leaves the position open to a big move
   - It has no risk, because the wider spacing between the strikes means the options can never finish in the money
   > A wider profit range comes at the cost of a smaller credit.

3. {#q3} How is a long iron condor built?
   - Buy an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Sell a straddle and buy a strangle at the same strike, collecting a credit that is not at risk of loss
   - [x] Sell an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Buy a call and a put at the same strike, then sell a further call and put to reduce the overall cost
   > It is a bull put spread plus a bear call spread.

4. {#q4} The stock breaks out far beyond one of the long wings. What happens?
   - The loss is unlimited, because the short call is exposed to a very large rally beyond the long wing
   - The trader earns the maximum profit, because the long wing gains value when the stock breaks out far
   - The trader keeps the full credit, because the long wing cancels any loss that the short option creates
   - [x] The loss is capped at the wing width minus the credit received
   > The long options define the maximum loss.

5. {#calc1} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the maximum loss at expiration, per share?
   - [x] $6
   - $4
   - $30
   - $91
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4), the maximum loss is $6 per share. Formula: L_max = κ - C, equidistant strikes with gap κ.

6. {#bk1} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the maximum profit at expiration, per share?
   - [x] $4
   - $6
   - $30
   - $91
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4), the maximum profit is $4 per share. Formula: P_max = C.

7. {#bk2} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - $30
   - [x] $91
   - $6
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4), the lower break-even stock price is $91 per share. Formula: S*_up = K3 + C; S*_down = K2 - C.

8. {#bk3} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the upper break-even stock price at expiration, per share?
   - [x] $109
   - $91
   - $30
   - $6
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4), the upper break-even stock price is $109 per share. Formula: S*_up = K3 + C; S*_down = K2 - C.

9. {#bk4} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. At expiration the stock is at $77. What is the trader's profit or loss per share, counting the premium?
   - +$6
   - −$10
   - +$2
   - [x] −$6
   > At $77 the option legs are worth −$10 per share before the premium, and the net premium adds +$4, for −$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4).

10. {#bk5} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$4
   - [x] +$4
   - +$12
   - +$5
   > At $103 the option legs are worth $0 per share before the premium, and the net premium adds +$4, for +$4 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4).

11. {#bk6} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - $12
   - $400
   - $1,600
   - [x] $1,200
   > The maximum profit is $4 per share. One contract covers 100 shares, so 3 contracts give $4 × 100 × 3 = $1,200.

12. {#bk7} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. The stock is at $73 at expiration. What is the profit or loss per share, counting the premium?
   - +$6
   - [x] −$6
   - −$10
   - +$2
   > At $73 the legs are worth −$10 per share before the premium, and the net premium adds +$4, for −$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4).

13. {#bk8} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. The stock is at $82 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$6
   - +$6
   - −$10
   - +$2
   > At $82 the legs are worth −$10 per share before the premium, and the net premium adds +$4, for −$6 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4).

14. {#bk9} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. At expiration the stock is at $85. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - −$42
   - −$600
   - [x] −$4,200
   - +$4,200
   > Per share the position makes −$6 at $85. For 7 contracts: −$6 × 100 × 7 = −$4,200.

15. {#bk10} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. How much cash is received up front in total if the trader opens 4 contracts (100 shares each)?
   - $16
   - $400
   - [x] $1,600
   - $2,000
   > The net credit is $4 per share. For 4 contracts: $4 × 100 × 4 = $1,600.

16. {#bk11} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 0.67 to 1
   - 1.5 to 1
   - 4 to 1
   - 6 to 1
   > Maximum profit is $4 and maximum loss is $6 per share, so the ratio is $4 / $6 = 0.67 to 1.
