---
slug: bullish-long-seagull-spread
---

# Quiz

1. When might a trader use a bullish long seagull?
   - They expect the stock to fall, so they want the long put to gain value as the stock moves lower in price
   - They want to collect the maximum premium, so they avoid buying the further out-of-the-money protective put
   - They want unlimited risk in exchange for a larger credit, which is what the extra long put helps them to avoid
   - [x] They are bullish and want a low-cost trade but are not comfortable with the large downside risk of a long combo
   > The extra long put limits the risk of a long combo.

2. What does the extra long put do?
   - [x] It limits how much can be lost if the stock drops, in exchange for a slightly higher cost
   - It makes the profit unlimited
   - It removes all risk from the trade, because the extra long put pays out at every price at expiration
   - It adds to the credit, because the extra long put earns a premium while the other options are open
   > The protection reduces the credit versus the uninsured version.

3. How is a bullish long seagull built?
   - Sell an out-of-the-money call, buy an at-the-money put, and sell a further out-of-the-money put, same expiration
   - [x] Buy an out-of-the-money put, sell an at-the-money put, and buy a further out-of-the-money call, same expiration
   - Buy two calls above the price and sell a put at the money, so that a small rally pays for the position
   - Buy a call and a put at the same strike, then sell a further put to reduce the cost of the protection
   > A long combo with a protective put.

4. The stock drops unexpectedly to 60. What happens?
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
