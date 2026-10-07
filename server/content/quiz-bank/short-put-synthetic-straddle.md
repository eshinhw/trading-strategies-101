---
slug: short-put-synthetic-straddle
---

# Quiz

1. {#q1} Why would a trader build a short straddle from short stock plus short puts?
   - [x] They already have the short stock on and would rather sell puts than layer on separate short options
   - Because it has lower risk than a short straddle, since the short stock offsets any loss on the short puts
   - Because it has a different profit shape than a short straddle
   - Because puts always pay more than calls, so building the position this way always collects the larger credit
   > The payoff matches a short straddle using an existing short stock position.

2. {#q2} What market view does a short put synthetic straddle express?
   - The stock will make a big move in either direction, so the trader wants to collect premium on both sides
   - [x] The stock will stay flat, the same as a short straddle
   - The stock will rise sharply, since the short stock then loses value and the short puts expire worthless
   - The stock will fall sharply, since the short stock gains and the short puts gain as the price moves down
   > Short stock plus two short puts profits when the stock stays near the strike.

3. {#q3} How is a short put synthetic straddle built?
   - Buy 100 shares of stock and sell 2 at-the-money calls at the same strike, collecting the premium
   - Short 100 shares of stock and buy 2 at-the-money puts at the same strike, so that the short is insured
   - [x] Short 100 shares of stock and sell 2 at-the-money puts at the same strike
   - Buy 100 shares of stock and buy 2 at-the-money calls at the same strike, to protect against a decline
   > Two short puts against short stock replicate a short call plus a short put.

4. {#q4} The stock rallies sharply. What is the main risk?
   - The loss is limited to the premium, because the short puts expire worthless when the stock rallies sharply
   - The puts become more valuable, since a rising stock raises the value of puts that have been sold short
   - The position earns the maximum profit
   - [x] The short stock loss is not offset by much, similar to the upside risk of a plain short straddle
   > The risk is concentrated on the upside, where only the premium cushions the short stock loss.

5. {#calc1} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100 and sells two $100 puts, with a net option premium of $8 received. What is the upper break-even stock price at expiration, per share?
   - [x] $108
   - $100
   - $92
   - $8
   > For this position (S0 = 100, K = 100, net credit = 8), the upper break-even stock price is $108 per share. Formula: S*_up = S0 + C; S*_down = 2K - S0 - C.

6. {#bk1} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. What is the maximum profit at expiration, per share?
   - $92
   - [x] $8
   - $108
   - $9
   > For this position (S0 = 100, K = 100, net credit = 8), the maximum profit is $8 per share. Formula: P_max = S0 - K + C.

7. {#bk2} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. What is the lower break-even stock price at expiration, per share?
   - $108
   - $8
   - $93
   - [x] $92
   > For this position (S0 = 100, K = 100, net credit = 8), the lower break-even stock price is $92 per share. Formula: S*_up = S0 + C; S*_down = 2K - S0 - C.

8. {#bk3} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$5
   - [x] +$5
   - −$3
   - +$21
   > At $103 the option legs are worth −$3 per share before the premium, and the net premium adds +$8, for +$5 per share (given S0 = 100, K = 100, net credit = 8).

9. {#bk4} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $80
   - $800
   - [x] $8,000
   - $8,800
   > The maximum profit is $8 per share. One contract covers 100 shares, so 10 contracts give $8 × 100 × 10 = $8,000.

10. {#bk5} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$8
   - −$8
   - +$24
   - +$9
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$8, for +$8 per share (given S0 = 100, K = 100, net credit = 8).

11. {#bk6} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - −$1
   - [x] +$7
   - +$23
   > At $101 the legs are worth −$1 per share before the premium, and the net premium adds +$8, for +$7 per share (given S0 = 100, K = 100, net credit = 8).

12. {#bk7} [calc] A trader builds a Short Put Synthetic Straddle: is short the stock, sold at $100, and sells two $100 puts, with a net option premium of $8 received. At expiration the stock is at $103. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - [x] +$1,000
   - +$10
   - +$500
   - −$1,000
   > Per share the position makes +$5 at $103. For 2 contracts: +$5 × 100 × 2 = +$1,000.
