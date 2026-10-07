---
slug: bullish-short-seagull-spread
---

# Quiz

1. {#q1} When might a trader use a bullish short seagull?
   - [x] They are bullish, want a capped-upside rally trade without paying cash up front, and accept being obligated to buy the stock lower if wrong
   - They want protection against any decline in the stock, so they buy the put rather than selling it
   - They expect the stock to fall, so they want the short put to gain in value as the price moves lower
   - They want unlimited upside, so they avoid selling the further out-of-the-money call in the structure
   > It is a low-cost bullish trade with risk on the downside.

2. {#q2} How does the position pay for itself?
   - Selling a call spread funds the long put
   - [x] Selling the out-of-the-money put funds most or all of the cost of the call spread
   - The stock pays for it, because the dividends from the shares are used to buy the call spread in the position
   - It is funded by a loan, which is repaid from the gains on the long call if the stock rises past the strike
   > The put premium offsets the call spread's debit.

3. {#q3} How is a bullish short seagull built?
   - Buy an out-of-the-money put, sell an at-the-money call, and buy a further out-of-the-money call, same expiration
   - Sell an at-the-money put and buy two calls above it, so that a small rise in the stock pays for the position
   - [x] Sell an out-of-the-money put, buy an at-the-money call, and sell a further out-of-the-money call, same expiration
   - Buy a put and sell a put at different strikes, so that the premiums received roughly offset the cost of the calls
   > A bull call spread financed by a short put.

4. {#q4} The stock drops to 80 instead of rising. What happens?
   - The trader keeps the credit and has no obligations, because the put expires worthless when the stock falls
   - The trader gains from the call spread, because the long call gains value when the stock moves lower in price
   - The trader loses only a small debit, because the short put is covered by the long call at the same strike
   - [x] The trader is assigned the put and effectively buys the stock at the put strike, as if the put had been sold alone
   > The short put is the risk in this structure.

5. {#calc1} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. What is the maximum loss at expiration, per share?
   - $20
   - $10
   - [x] $90
   - $91
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum loss is $90 per share. Formula: L_max = K1 + netCF.

6. {#bk1} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. What is the maximum profit at expiration, per share?
   - $20
   - $90
   - $11
   - [x] $10
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum profit is $10 per share. Formula: P_max = K3 - K2 + netCF.

7. {#bk2} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. What is the break-even stock price at expiration, per share?
   - $20
   - [x] $90
   - $10
   - $91
   > For this position (K1 = 90, K2 = 100, K3 = 110), the break-even stock price is $90 per share. Formula: S* = K2 + netCF (netCF>0) or K1 + netCF (netCF<0).

8. {#bk3} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - $30
   - $1,000
   - $4,000
   - [x] $3,000
   > The maximum profit is $10 per share. One contract covers 100 shares, so 3 contracts give $10 × 100 × 3 = $3,000.

9. {#bk4} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. The stock is at $110 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$10
   - −$10
   - +$11
   - +$9
   > At $110 the legs are worth +$10 per share before the premium, and the net premium adds $0, for +$10 per share (given K1 = 90, K2 = 100, K3 = 110).

10. {#bk5} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. At expiration the stock is at $113. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - +$30
   - +$1,000
   - [x] +$3,000
   - −$3,000
   > Per share the position makes +$10 at $113. For 3 contracts: +$10 × 100 × 3 = +$3,000.

11. {#bk6} [calc] A trader builds a Bullish Short Seagull Spread: sells one $90 put, buys one $100 call, and sells one $110 call, for no net premium. What is the ratio of maximum profit to maximum loss?
   - [x] 0.11 to 1
   - 9 to 1
   - 10 to 1
   - 90 to 1
   > Maximum profit is $10 and maximum loss is $90 per share, so the ratio is $10 / $90 = 0.11 to 1.
