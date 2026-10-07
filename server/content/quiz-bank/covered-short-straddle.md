---
slug: covered-short-straddle
---

# Quiz

1. {#q1} Who is a covered short straddle designed for?
   - A bearish trader who wants to short the stock and collect income from both the call and the put premiums
   - A trader who expects a big move in either direction and wants the position to profit from the size of it
   - [x] A moderately bullish stock owner who is comfortable buying more shares at today's price and wants more income than a covered call
   - A trader who wants no downside exposure at all and is willing to give up all of the upside to achieve that
   > It adds a short put to a covered call to roughly double the premium.

2. {#q2} What is the cost of the extra income compared with a covered call?
   - Less upside than a covered call, since the short put caps the gain on the shares at a lower price
   - The loss is limited to the premium
   - There is no additional cost, because the premium from the put is received without any added obligation
   - [x] More downside exposure, since the trader is also obliged to buy more stock if it falls
   > The short put adds an obligation to buy at the strike.

3. {#q3} How is a covered short straddle built?
   - [x] Hold 100 shares, then sell an at-the-money call and an at-the-money put with the same strike and expiration
   - Short 100 shares, then sell an at-the-money call and an at-the-money put with the same strike and expiration
   - Hold 100 shares, then buy an at-the-money call and an at-the-money put with the same strike and expiration
   - Hold 100 shares, then sell only an out-of-the-money call, keeping the premium without taking on a put
   > The shares cover the call, and the put is backed by cash or margin.

4. {#q4} The stock falls to 85 in a position opened at 100. What happens?
   - The put expires worthless and the shares are unaffected, so the investor keeps the full premium and no loss
   - [x] The put is assigned, so the investor buys another 100 shares at a net cost near 94, on top of the loss on the original shares
   - The investor keeps the full premium and has no loss, because the call premium offsets the entire drop in the shares
   - The call is exercised and the shares are sold at 100, so the investor locks in the full premium on the way out
   > The premium reduces the effective purchase price, but the investor now owns twice the stock.

5. {#calc1} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. What is the maximum loss at expiration, per share?
   - [x] $194
   - $100
   - $97
   - $6
   > For this position (S0 = 100, K = 100, net credit = 6), the maximum loss is $194 per share. Formula: L_max = S0 + K - C.

6. {#bk1} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. What is the maximum profit at expiration, per share?
   - $0
   - $97
   - [x] $6
   - $194
   > For this position (S0 = 100, K = 100, net credit = 6), the maximum profit is $6 per share. Formula: P_max = K - S0 + C.

7. {#bk2} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. What is the break-even stock price at expiration, per share?
   - [x] $97
   - $6
   - $194
   - $0
   > For this position (S0 = 100, K = 100, net credit = 6), the break-even stock price is $97 per share. Formula: S* = (S0 + K - C) / 2.

8. {#bk3} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. At expiration the stock is at $92. What is the trader's profit or loss per share, counting the premium?
   - +$10
   - −$16
   - [x] −$10
   - +$2
   > At $92 the option legs are worth −$16 per share before the premium, and the net premium adds +$6, for −$10 per share (given S0 = 100, K = 100, net credit = 6).

9. {#bk4} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$18
   - +$7
   > At $103 the option legs are worth $0 per share before the premium, and the net premium adds +$6, for +$6 per share (given S0 = 100, K = 100, net credit = 6).

10. {#bk5} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $48
   - $600
   - $5,400
   - [x] $4,800
   > The maximum profit is $6 per share. One contract covers 100 shares, so 8 contracts give $6 × 100 × 8 = $4,800.

11. {#bk6} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$18
   - +$7
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$6, for +$6 per share (given S0 = 100, K = 100, net credit = 6).

12. {#bk7} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - +$18
   - +$7
   - [x] +$6
   > At $101 the legs are worth $0 per share before the premium, and the net premium adds +$6, for +$6 per share (given S0 = 100, K = 100, net credit = 6).

13. {#bk8} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. At expiration the stock is at $103. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - +$18
   - +$600
   - [x] +$1,800
   - −$1,800
   > Per share the position makes +$6 at $103. For 3 contracts: +$6 × 100 × 3 = +$1,800.

14. {#bk9} [calc] A trader builds a Covered Short Straddle: owns the stock, bought at $100, sells one $100 call, and sells one $100 put, with a net option premium of $6 received. What is the ratio of maximum profit to maximum loss?
   - [x] 0.03 to 1
   - 32.33 to 1
   - 6 to 1
   - 194 to 1
   > Maximum profit is $6 and maximum loss is $194 per share, so the ratio is $6 / $194 = 0.03 to 1.
