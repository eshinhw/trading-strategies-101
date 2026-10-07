---
slug: strip
---

# Quiz

1. {#q1} When is a strip more appropriate than a straddle?
   - You expect the stock to stay flat, so you want an extra put to benefit from the passing of time
   - [x] You expect a big move but lean bearish about which direction is more likely
   - You lean bullish about the direction and want an extra call to profit from a rise in the stock
   - You want to sell volatility, so you want an extra short put to collect more premium from the options
   > A strip adds an extra put to tilt a straddle toward a decline.

2. {#q2} How does a strip's payoff differ from a straddle's?
   - A rally makes more money than an equal-sized decline, because the extra option is a call rather than a put
   - It profits only when the stock falls, because the single call does not offer any protection on the upside
   - [x] A decline makes more money than an equal-sized rally, while the call still protects if the stock rises
   - It has limited profit on the downside, because the extra puts are offset by the sold options at the strike
   > The extra put skews the payoff toward the downside.

3. {#q3} How is a strip built?
   - Buy 2 at-the-money calls and 1 at-the-money put with the same strike and expiration, tilting the position bullish
   - Sell 1 at-the-money call and 2 at-the-money puts with the same strike, collecting a larger premium up front
   - Buy 1 call and sell 2 puts
   - [x] Buy 1 at-the-money call and 2 at-the-money puts with the same strike and expiration
   > One call and two puts give the bearish tilt.

4. {#q4} What is the maximum loss of a strip?
   - [x] The total debit paid, which occurs if the stock finishes at the strike
   - Unlimited, because the extra puts keep losing value as long as the stock stays below the strike price
   - Zero, because the single call protects the position against any loss that the puts could suffer
   - Only the cost of the call
   > All options expire worthless at the strike, so the whole premium is lost.

5. {#calc1} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. What is the upper break-even stock price at expiration, per share?
   - $95.50
   - $9
   - $0
   - [x] $109
   > For this position (K = 100, net debit = 9), the upper break-even stock price is $109 per share. Formula: S*_up = K + D; S*_down = K - D/2.

6. {#bk1} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. What is the maximum loss at expiration, per share?
   - [x] $9
   - $0
   - $95.50
   - $109
   > For this position (K = 100, net debit = 9), the maximum loss is $9 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - $9
   - [x] $95.50
   - $0
   > For this position (K = 100, net debit = 9), the lower break-even stock price is $95.50 per share. Formula: S*_up = K + D; S*_down = K - D/2.

8. {#bk3} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. At expiration the stock is at $92. What is the trader's profit or loss per share, counting the premium?
   - [x] +$7
   - −$7
   - +$16
   - +$25
   > At $92 the option legs are worth +$16 per share before the premium, and the net premium adds −$9, for +$7 per share (given K = 100, net debit = 9).

9. {#bk4} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$6
   - +$3
   - +$12
   - [x] −$6
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds −$9, for −$6 per share (given K = 100, net debit = 9).

10. {#bk5} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $72
   - [x] $7,200
   - $900
   - $8,100
   > The maximum loss is $9 per share. One contract covers 100 shares, so 8 contracts give $9 × 100 × 8 = $7,200.

11. {#bk6} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. The stock is at $88 at expiration. What is the profit or loss per share, counting the premium?
   - −$15
   - +$24
   - +$33
   - [x] +$15
   > At $88 the legs are worth +$24 per share before the premium, and the net premium adds −$9, for +$15 per share (given K = 100, net debit = 9).

12. {#bk7} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. The stock is at $97 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - [x] −$3
   - +$6
   - +$15
   > At $97 the legs are worth +$6 per share before the premium, and the net premium adds −$9, for −$3 per share (given K = 100, net debit = 9).

13. {#bk8} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. At expiration the stock is at $100. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - [x] −$1,800
   - −$18
   - −$900
   - +$1,800
   > Per share the position makes −$9 at $100. For 2 contracts: −$9 × 100 × 2 = −$1,800.

14. {#bk9} [calc] A trader builds a Strip: buys one $100 call and buys two $100 puts, for a net debit of $9 per share. How much cash is paid up front in total if the trader opens 2 contracts (100 shares each)?
   - $18
   - $900
   - [x] $1,800
   - $2,700
   > The net debit is $9 per share. For 2 contracts: $9 × 100 × 2 = $1,800.
