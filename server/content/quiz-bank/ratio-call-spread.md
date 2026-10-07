---
slug: ratio-call-spread
---

# Quiz

1. {#q1} Who would use a ratio call spread?
   - Someone who expects a large rally and wants the long call to produce unlimited profit if the stock jumps
   - [x] Someone who expects the stock to stay flat or drift lower, wants income, and accepts open-ended risk on a hard rally
   - Someone who wants limited risk in every scenario and is willing to collect a smaller credit to obtain it
   - Someone who expects a large move in either direction and wants to profit from the size of that move alone
   > It is a bearish to neutral credit strategy with an uncovered short call.

2. {#q2} What is the main risk of a ratio call spread?
   - The loss is limited to the credit, because the long call protects the position against every rally
   - The loss is limited to the width of the strikes
   - [x] Past the upper breakeven, losses are unlimited, since the position is net short calls
   - There is no loss if the stock rises, because the long call gains more than the short calls give back
   > The extra short call is uncovered.

3. {#q3} How is a ratio call spread built?
   - Sell an in-the-money call and buy more calls at a higher strike
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - Sell a call and sell a put at the same strike, so that the position collects premium from both of the legs
   - [x] Buy an in-the-money call and sell more calls than you bought at a higher strike, same expiration
   > The short calls outnumber the long calls.

4. {#q4} The stock unexpectedly rallies to 140. What happens?
   - [x] The extra uncovered short call produces a large, growing loss
   - The trader earns the maximum profit, because the long call gains more than the short calls lose in a rally
   - The trader keeps the credit, because the short calls expire worthless whenever the stock rises sharply higher
   - The loss is capped at a small amount
   > A big rally is the scenario the position is exposed to.

5. {#calc1} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. What is the break-even stock price at expiration, per share?
   - $7
   - $5
   - $2
   - [x] $107
   > For this position (K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2), the break-even stock price is $107 per share. Formula: S*_down = K2 - netCF/NL; S*_up = (NS×K1 - NL×K2 + netCF)/(NS-NL).

6. {#bk1} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. What is the maximum profit at expiration, per share?
   - $5
   - $2
   - [x] $7
   - $107
   > For this position (K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2), the maximum profit is $7 per share. Formula: P_max = NL×(K1 - K2) + netCF.

7. {#bk2} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. At expiration the stock is at $101. What is the trader's profit or loss per share, counting the premium?
   - [x] +$6
   - −$6
   - +$4
   - +$10
   > At $101 the option legs are worth +$4 per share before the premium, and the net premium adds +$2, for +$6 per share (given K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2).

8. {#bk3} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. At expiration the stock is at $108. What is the trader's profit or loss per share, counting the premium?
   - +$1
   - −$3
   - [x] −$1
   - +$3
   > At $108 the option legs are worth −$3 per share before the premium, and the net premium adds +$2, for −$1 per share (given K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2).

9. {#bk4} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $70
   - [x] $7,000
   - $700
   - $7,700
   > The maximum profit is $7 per share. One contract covers 100 shares, so 10 contracts give $7 × 100 × 10 = $7,000.

10. {#bk5} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - −$2
   - +$6
   - +$3
   - [x] +$2
   > At $83 the legs are worth $0 per share before the premium, and the net premium adds +$2, for +$2 per share (given K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2).

11. {#bk6} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. The stock is at $92 at expiration. What is the profit or loss per share, counting the premium?
   - −$2
   - [x] +$2
   - +$6
   - +$3
   > At $92 the legs are worth $0 per share before the premium, and the net premium adds +$2, for +$2 per share (given K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2).

12. {#bk7} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. At expiration the stock is at $95. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - +$4
   - +$200
   - −$400
   - [x] +$400
   > Per share the position makes +$2 at $95. For 2 contracts: +$2 × 100 × 2 = +$400.

13. {#bk8} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. How much cash is received up front in total if the trader opens 8 contracts (100 shares each)?
   - $16
   - $200
   - [x] $1,600
   - $1,800
   > The net credit is $2 per share. For 8 contracts: $2 × 100 × 8 = $1,600.
