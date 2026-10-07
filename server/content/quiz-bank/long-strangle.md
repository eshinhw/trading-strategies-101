---
slug: long-strangle
---

# Quiz

1. {#q1} Why choose a long strangle over a long straddle?
   - It profits from a smaller move than a straddle
   - [x] It costs less up front, in exchange for needing a bigger move to break even
   - It has a higher maximum profit than a straddle, because the strikes are placed further from the price
   - It has no risk of losing the premium, because the out-of-the-money options cannot finish worthless
   > Out-of-the-money strikes lower the cost but push the breakevens further away.

2. {#q2} What does a long strangle need to profit?
   - A small move above the call strike only, since the put side of the position does not need to pay off
   - The stock to stay between the two strikes, so that both of the options keep their time value intact
   - [x] A large move in either direction beyond one of the breakevens
   - A decline in implied volatility, since cheaper options are what make the position profitable at expiration
   > Both options are out of the money, so the stock must travel before either has value.

3. {#q3} How is a long strangle built?
   - Buy a call and a put at the same strike and expiration, so that both options start at the money
   - Sell an out-of-the-money call and put at different strikes, collecting a credit for the position
   - Buy an in-the-money call and put at different strikes, so that both options hold intrinsic value
   - [x] Buy an out-of-the-money call and an out-of-the-money put with the same expiration
   > The strikes differ, with the call above and the put below the current price.

4. {#q4} The stock rises only modestly, to a level between the strikes and the call's breakeven. What happens?
   - [x] A move that would have helped a straddle does nothing for the strangle, and the premium is lost
   - The strangle earns its maximum profit, because the small rise still moves the call toward its strike
   - The put gains enough to offset the loss
   - The strangle is assigned shares, because the call finishes in the money by the date of expiration
   > A small move is not enough to move either out-of-the-money option into profit.

5. {#calc1} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. What is the lower break-even stock price at expiration, per share?
   - [x] $91
   - $109
   - $10
   - $4
   > For this position (K1 = 105, K2 = 95, net debit = 4), the lower break-even stock price is $91 per share. Formula: S*_up = K1 + D; S*_down = K2 - D.

6. {#bk1} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. What is the maximum loss at expiration, per share?
   - [x] $4
   - $10
   - $91
   - $109
   > For this position (K1 = 105, K2 = 95, net debit = 4), the maximum loss is $4 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. What is the upper break-even stock price at expiration, per share?
   - $91
   - $10
   - [x] $109
   - $4
   > For this position (K1 = 105, K2 = 95, net debit = 4), the upper break-even stock price is $109 per share. Formula: S*_up = K1 + D; S*_down = K2 - D.

8. {#bk3} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - [x] +$4
   - −$4
   - +$8
   - +$12
   > At $113 the option legs are worth +$8 per share before the premium, and the net premium adds −$4, for +$4 per share (given K1 = 105, K2 = 95, net debit = 4).

9. {#bk4} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. What is the maximum loss on 5 contracts (100 shares each), in dollars?
   - $20
   - $400
   - $2,400
   - [x] $2,000
   > The maximum loss is $4 per share. One contract covers 100 shares, so 5 contracts give $4 × 100 × 5 = $2,000.

10. {#bk5} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - −$8
   - [x] +$8
   - +$12
   - +$16
   > At $83 the legs are worth +$12 per share before the premium, and the net premium adds −$4, for +$8 per share (given K1 = 105, K2 = 95, net debit = 4).

11. {#bk6} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. The stock is at $92 at expiration. What is the profit or loss per share, counting the premium?
   - +$1
   - +$3
   - +$7
   - [x] −$1
   > At $92 the legs are worth +$3 per share before the premium, and the net premium adds −$4, for −$1 per share (given K1 = 105, K2 = 95, net debit = 4).

12. {#bk7} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. At expiration the stock is at $95. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - −$20
   - [x] −$2,000
   - −$400
   - +$2,000
   > Per share the position makes −$4 at $95. For 5 contracts: −$4 × 100 × 5 = −$2,000.

13. {#bk8} [calc] A trader builds a Long Strangle: buys one $105 call and buys one $95 put, for a net debit of $4 per share. How much cash is paid up front in total if the trader opens 4 contracts (100 shares each)?
   - [x] $1,600
   - $16
   - $400
   - $2,000
   > The net debit is $4 per share. For 4 contracts: $4 × 100 × 4 = $1,600.
