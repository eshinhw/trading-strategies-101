---
slug: long-call-synthetic-straddle
---

# Quiz

1. Why would a trader build a straddle from short stock plus calls?
   - [x] Puts may be illiquid or unattractively priced, or the trader may already hold the short stock position
   - Because it has lower risk than a straddle, since the short stock position offsets the cost of the calls
   - Because it has a different profit shape than a straddle
   - Because calls always cost less than puts, so building the position this way is always the cheaper choice
   > The payoff matches a long straddle without needing to buy a put.

2. What market view does a long call synthetic straddle express?
   - The stock will stay in a narrow range
   - [x] A big move in either direction, the same as a long straddle
   - The stock will only rise, since the two calls gain value and the short stock loses very little in return
   - The stock will only fall, since the short stock gains while the calls are held only as cheap insurance
   > Short stock plus two long calls profits from a large move either way.

3. How is a long call synthetic straddle built?
   - Buy 100 shares of stock and buy 2 at-the-money puts at the same strike, so the shares are insured
   - Short 100 shares of stock and sell 2 at-the-money calls at the same strike, collecting the premium
   - [x] Short 100 shares of stock and buy 2 at-the-money calls at the same strike
   - Buy 100 shares of stock and sell 2 at-the-money calls at the same strike, so the shares are covered
   > Two calls against the short stock replicate a call plus a put.

4. The stock falls sharply. What happens to this position?
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
