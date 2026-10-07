---
slug: short-call-synthetic-straddle
---

# Quiz

1. {#q1} Why would a trader build a short straddle from long stock plus short calls?
   - Because it has lower risk than a short straddle, since the shares offset any loss on the short calls
   - [x] They already own the shares and would rather sell calls than layer on separate short options
   - Because it has a different profit shape than a short straddle, which better suits a trader with a bullish view
   - Because calls always pay more than puts, so building the position this way always collects the larger credit
   > The payoff matches a short straddle using an existing stock position.

2. {#q2} What market view does a short call synthetic straddle express?
   - The stock will make a big move in either direction, so the trader wants to collect premium on both sides
   - The stock will rise sharply, since the two short calls then gain value and the shares appreciate as well
   - [x] The stock will stay flat, the same as a short straddle
   - The stock will fall sharply, since the shares lose value and the short calls gain as the price moves down
   > Long stock plus two short calls profits when the stock stays near the strike.

3. {#q3} How is a short call synthetic straddle built?
   - Short 100 shares and sell 2 puts
   - Buy 100 shares of stock and buy 2 at-the-money puts at the same strike, so that the shares are insured
   - Short 100 shares of stock and buy 2 at-the-money calls at the same strike, to protect the short position
   - [x] Buy or hold 100 shares of stock and sell 2 at-the-money calls at the same strike
   > Two short calls against long stock replicate a short call plus a short put.

4. {#q4} The stock drops sharply. What is the main risk?
   - [x] The stock loss is not offset by much, similar to the downside risk of a plain short straddle
   - The loss is limited to the premium, because the short calls expire worthless when the stock drops sharply
   - The calls become more valuable, since a falling stock raises the value of calls that have been sold short
   - The position earns the maximum profit
   > The risk is concentrated on the downside, where only the premium cushions the stock loss.

5. {#calc1} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100 and sells two $100 calls, with a net option premium of $8 received. What is the maximum profit at expiration, per share?
   - [x] $8
   - $92
   - $100
   - $108
   > For this position (S0 = 100, K = 100, net credit = 8), the maximum profit is $8 per share. Formula: P_max = K - S0 + C.

6. {#bk1} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. What is the lower break-even stock price at expiration, per share?
   - [x] $92
   - $108
   - $8
   - $93
   > For this position (S0 = 100, K = 100, net credit = 8), the lower break-even stock price is $92 per share. Formula: S*_up = 2K - S0 + C; S*_down = S0 - C.

7. {#bk2} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. What is the upper break-even stock price at expiration, per share?
   - $92
   - $8
   - [x] $108
   - $109
   > For this position (S0 = 100, K = 100, net credit = 8), the upper break-even stock price is $108 per share. Formula: S*_up = 2K - S0 + C; S*_down = S0 - C.

8. {#bk3} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - [x] +$5
   - −$5
   - −$3
   - +$21
   > At $103 the option legs are worth −$3 per share before the premium, and the net premium adds +$8, for +$5 per share (given S0 = 100, K = 100, net credit = 8).

9. {#bk4} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. What is the maximum profit on 4 contracts (100 shares each), in dollars?
   - $32
   - $800
   - $4,000
   - [x] $3,200
   > The maximum profit is $8 per share. One contract covers 100 shares, so 4 contracts give $8 × 100 × 4 = $3,200.

10. {#bk5} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. The stock is at $88 at expiration. What is the profit or loss per share, counting the premium?
   - +$4
   - [x] −$4
   - −$12
   - +$12
   > At $88 the legs are worth −$12 per share before the premium, and the net premium adds +$8, for −$4 per share (given S0 = 100, K = 100, net credit = 8).

11. {#bk6} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. The stock is at $97 at expiration. What is the profit or loss per share, counting the premium?
   - −$5
   - −$3
   - +$21
   - [x] +$5
   > At $97 the legs are worth −$3 per share before the premium, and the net premium adds +$8, for +$5 per share (given S0 = 100, K = 100, net credit = 8).

12. {#bk7} [calc] A trader builds a Short Call Synthetic Straddle: owns the stock, bought at $100, and sells two $100 calls, with a net option premium of $8 received. At expiration the stock is at $100. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - +$56
   - [x] +$5,600
   - +$800
   - −$5,600
   > Per share the position makes +$8 at $100. For 7 contracts: +$8 × 100 × 7 = +$5,600.
