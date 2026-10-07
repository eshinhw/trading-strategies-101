---
slug: long-put-synthetic-straddle
---

# Quiz

1. Why would a trader build a straddle from long stock plus puts?
   - Because it has lower risk than a straddle, since the long stock position offsets the cost of the puts
   - Because it has a different profit shape than a straddle, which better suits a trader with a bearish view
   - Because puts always cost less than calls, so building the position this way is always the cheaper choice
   - [x] They may already hold the shares and prefer to add puts rather than unwind the stock to build a straddle from scratch
   > The payoff matches a long straddle using an existing stock position.

2. What market view does a long put synthetic straddle express?
   - [x] A big move in either direction, the same as a long straddle
   - The stock will stay in a narrow range
   - The stock will only rise, since the shares gain value and the two puts are held only as cheap insurance
   - The stock will only fall, since the two puts gain value and the shares lose very little in return
   > Long stock plus two long puts profits from a large move either way.

3. How is a long put synthetic straddle built?
   - Short 100 shares and buy 2 calls
   - [x] Buy or hold 100 shares of stock and buy 2 at-the-money puts at the same strike
   - Buy 100 shares of stock and sell 2 at-the-money puts at the same strike, collecting the premium
   - Short 100 shares of stock and sell 2 at-the-money puts at the same strike, so the short is covered
   > Two puts against long stock replicate a call plus a put.

4. The stock jumps sharply higher. What happens to this position?
   - The position loses the premium and the stock, since the puts expire worthless while the shares rise
   - The puts offset the shares and the position breaks even
   - [x] The shares gain while the puts expire worthless, so it still profits
   - The position is assigned shares, because the puts finish in the money when the stock rises sharply
   > A large rally is profitable thanks to the long stock.

5. {#calc1} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100 and buys two $100 puts, with a net option premium of $8 paid. What is the lower break-even stock price at expiration, per share?
   - $100
   - [x] $92
   - $108
   - $8
   > For this position (S0 = 100, K = 100, net debit = 8), the lower break-even stock price is $92 per share. Formula: S*_up = S0 + D; S*_down = 2K - S0 - D.
