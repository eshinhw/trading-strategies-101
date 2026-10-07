---
slug: long-call-synthetic-straddle
---

# Quiz

1. {#q1} Why would a trader build a straddle from short stock plus calls?
   - [x] Puts may be illiquid or unattractively priced, or the trader may already hold the short stock position
   - Because it has lower risk than a straddle, since the short stock position offsets the cost of the calls
   - Because it has a different profit shape than a straddle
   - Because calls always cost less than puts, so building the position this way is always the cheaper choice
   > The payoff matches a long straddle without needing to buy a put.

2. {#q2} What market view does a long call synthetic straddle express?
   - The stock will stay in a narrow range
   - [x] A big move in either direction, the same as a long straddle
   - The stock will only rise, since the two calls gain value and the short stock loses very little in return
   - The stock will only fall, since the short stock gains while the calls are held only as cheap insurance
   > Short stock plus two long calls profits from a large move either way.

3. {#q3} How is a long call synthetic straddle built?
   - Buy 100 shares of stock and buy 2 at-the-money puts at the same strike, so the shares are insured
   - Short 100 shares of stock and sell 2 at-the-money calls at the same strike, collecting the premium
   - [x] Short 100 shares of stock and buy 2 at-the-money calls at the same strike
   - Buy 100 shares of stock and sell 2 at-the-money calls at the same strike, so the shares are covered
   > Two calls against the short stock replicate a call plus a put.

4. {#q4} The stock falls sharply. What happens to this position?
   - The position loses the premium and the stock, since the calls expire worthless while the short stock rises
   - The calls offset the short stock and the position breaks even, so the fall in the stock has no net effect
   - The position is assigned shares, because the calls finish in the money when the stock declines sharply
   - [x] The short stock gains while the calls expire worthless, so it still profits
   > A large drop is profitable thanks to the short stock.

5. {#calc1} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100 and buys two $100 calls, with a net option premium of $8 paid. What is the lower break-even stock price at expiration, per share?
   - $100
   - $108
   - $8
   - [x] $92
   > For this position (S0 = 100, K = 100, net debit = 8), the lower break-even stock price is $92 per share. Formula: S*_up = 2K - S0 + D; S*_down = S0 - D.

6. {#bk1} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. What is the maximum loss at expiration, per share?
   - [x] $8
   - $92
   - $108
   - $9
   > For this position (S0 = 100, K = 100, net debit = 8), the maximum loss is $8 per share. Formula: L_max = D - (S0 - K).

7. {#bk2} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. What is the upper break-even stock price at expiration, per share?
   - $92
   - $8
   - [x] $108
   - $109
   > For this position (S0 = 100, K = 100, net debit = 8), the upper break-even stock price is $108 per share. Formula: S*_up = 2K - S0 + D; S*_down = S0 - D.

8. {#bk3} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - [x] −$5
   - +$5
   - +$3
   - +$11
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds −$8, for −$5 per share (given S0 = 100, K = 100, net debit = 8).

9. {#bk4} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. What is the maximum loss on 3 contracts (100 shares each), in dollars?
   - $24
   - $800
   - $3,200
   - [x] $2,400
   > The maximum loss is $8 per share. One contract covers 100 shares, so 3 contracts give $8 × 100 × 3 = $2,400.

10. {#bk5} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - +$8
   - [x] −$8
   - −$7
   - −$9
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds −$8, for −$8 per share (given S0 = 100, K = 100, net debit = 8).

11. {#bk6} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - +$1
   - +$9
   - [x] −$7
   > At $101 the legs are worth +$1 per share before the premium, and the net premium adds −$8, for −$7 per share (given S0 = 100, K = 100, net debit = 8).

12. {#bk7} [calc] A trader builds a Long Call Synthetic Straddle: is short the stock, sold at $100, and buys two $100 calls, with a net option premium of $8 paid. At expiration the stock is at $103. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - −$35
   - [x] −$3,500
   - −$500
   - +$3,500
   > Per share the position makes −$5 at $103. For 7 contracts: −$5 × 100 × 7 = −$3,500.
