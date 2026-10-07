---
slug: bearish-short-seagull-spread
---

# Quiz

1. {#q1} When might a trader use a bearish short seagull?
   - [x] They are bearish, want a capped-downside decline trade without paying cash up front, and accept exposure if the stock rallies hard
   - They want protection against any rally in the stock, so they buy the call rather than selling it
   - They expect the stock to rise, so they want the short call to gain in value as the price moves higher
   - They want unlimited downside, so they avoid selling the further out-of-the-money call in the structure
   > It is a low-cost bearish trade with risk on the upside.

2. {#q2} How does the position pay for itself?
   - Selling a put spread funds the long call, so the premiums received from the puts pay for the upside cover
   - [x] Selling the out-of-the-money call funds most or all of the cost of the put spread
   - The stock pays for it, because the dividends from the shares are used to buy the put spread in the position
   - It is funded by a loan, which is repaid from the gains on the long put if the stock falls past the strike
   > The call premium offsets the put spread's debit.

3. {#q3} How is a bearish short seagull built?
   - Buy an out-of-the-money call, sell an at-the-money put, and buy a further out-of-the-money put, same expiration
   - Sell an at-the-money call and buy two puts below it, so that a small decline in the stock pays for the position
   - [x] Sell an out-of-the-money put, buy an at-the-money put, and sell a further out-of-the-money call, same expiration
   - Buy a call and sell a call at different strikes, so that the premiums received roughly offset the cost of the puts
   > A bear put spread financed by a short call.

4. {#q4} The stock spikes to 140 instead of falling. What happens?
   - The trader keeps the credit and has no obligations
   - The trader gains from the put spread, because the long put gains value when the stock moves higher in price
   - The loss is capped at a small debit, because the short call is covered by the long put at the same strike
   - [x] The loss grows without bound, just as if the call had been sold alone
   > The short call is the risk in this structure.

5. {#calc1} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. What is the maximum profit at expiration, per share?
   - $20
   - [x] $10
   - $100
   - $11
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum profit is $10 per share. Formula: P_max = K2 - K1 + netCF.

6. {#bk1} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. What is the break-even stock price at expiration, per share?
   - [x] $100
   - $20
   - $10
   - $101
   > For this position (K1 = 90, K2 = 100, K3 = 110), the break-even stock price is $100 per share. Formula: S* = K2 + netCF (netCF>0) or K3 + netCF (netCF<0).

7. {#bk2} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $80
   - $1,000
   - [x] $8,000
   - $9,000
   > The maximum profit is $10 per share. One contract covers 100 shares, so 8 contracts give $10 × 100 × 8 = $8,000.

8. {#bk3} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$10
   - −$10
   - +$11
   - +$9
   > At $78 the legs are worth +$10 per share before the premium, and the net premium adds $0, for +$10 per share (given K1 = 90, K2 = 100, K3 = 110).

9. {#bk4} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - −$10
   - +$11
   - +$9
   - [x] +$10
   > At $87 the legs are worth +$10 per share before the premium, and the net premium adds $0, for +$10 per share (given K1 = 90, K2 = 100, K3 = 110).

10. {#bk5} [calc] A trader builds a Bearish Short Seagull Spread: sells one $90 put, buys one $100 put, and sells one $110 call, for no net premium. At expiration the stock is at $90. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - +$60
   - [x] +$6,000
   - +$1,000
   - −$6,000
   > Per share the position makes +$10 at $90. For 6 contracts: +$10 × 100 × 6 = +$6,000.
