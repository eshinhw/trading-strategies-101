---
slug: bullish-long-seagull-spread
---

# Quiz

1. {#q1} When might a trader use a bullish long seagull?
   - They expect the stock to fall, so they want the long put to gain value as the stock moves lower in price
   - They want to collect the maximum premium, so they avoid buying the further out-of-the-money protective put
   - They want unlimited risk in exchange for a larger credit, which is what the extra long put helps them to avoid
   - [x] They are bullish and want a low-cost trade but are not comfortable with the large downside risk of a long combo
   > The extra long put limits the risk of a long combo.

2. {#q2} What does the extra long put do?
   - [x] It limits how much can be lost if the stock drops, in exchange for a slightly higher cost
   - It makes the profit unlimited
   - It removes all risk from the trade, because the extra long put pays out at every price at expiration
   - It adds to the credit, because the extra long put earns a premium while the other options are open
   > The protection reduces the credit versus the uninsured version.

3. {#q3} How is a bullish long seagull built?
   - Sell an out-of-the-money call, buy an at-the-money put, and sell a further out-of-the-money put, same expiration
   - [x] Buy an out-of-the-money put, sell an at-the-money put, and buy a further out-of-the-money call, same expiration
   - Buy two calls above the price and sell a put at the money, so that a small rally pays for the position
   - Buy a call and a put at the same strike, then sell a further put to reduce the cost of the protection
   > A long combo with a protective put.

4. {#q4} The stock drops unexpectedly to 60. What happens?
   - The loss is unlimited, because the short put at the money is exposed to a very large decline in the stock
   - The trader earns the maximum profit, because the long put gains value as the stock moves sharply lower
   - [x] The loss is capped near the put spread width instead of growing as much as a plain long combo's downside would
   - The trader keeps the credit, because the long put cancels any loss that the short put would have created
   > The long put limits the loss.

5. {#calc1} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. What is the break-even stock price at expiration, per share?
   - $20
   - $10
   - [x] $100
   - $101
   > For this position (K1 = 90, K2 = 100, K3 = 110), the break-even stock price is $100 per share. Formula: S* = K3 + netCF (netCF>0) or K2 + netCF (netCF<0).

6. {#bk1} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. What is the maximum loss at expiration, per share?
   - $20
   - $100
   - $11
   - [x] $10
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum loss is $10 per share. Formula: L_max = K2 - K1 - netCF.

7. {#bk2} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. What is the maximum loss on 4 contracts (100 shares each), in dollars?
   - $40
   - [x] $4,000
   - $1,000
   - $5,000
   > The maximum loss is $10 per share. One contract covers 100 shares, so 4 contracts give $10 × 100 × 4 = $4,000.

8. {#bk3} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. The stock is at $113 at expiration. What is the profit or loss per share, counting the premium?
   - −$3
   - +$4
   - +$2
   - [x] +$3
   > At $113 the legs are worth +$3 per share before the premium, and the net premium adds $0, for +$3 per share (given K1 = 90, K2 = 100, K3 = 110).

9. {#bk4} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. The stock is at $122 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$12
   - −$12
   - +$13
   - +$11
   > At $122 the legs are worth +$12 per share before the premium, and the net premium adds $0, for +$12 per share (given K1 = 90, K2 = 100, K3 = 110).

10. {#bk5} [calc] A trader builds a Bullish Long Seagull Spread: buys one $90 put, sells one $100 put, and buys one $110 call, for no net premium. At expiration the stock is at $78. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$20
   - −$1,000
   - [x] −$2,000
   - +$2,000
   > Per share the position makes −$10 at $78. For 2 contracts: −$10 × 100 × 2 = −$2,000.
