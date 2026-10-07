---
slug: long-synthetic-forward
---

# Quiz

1. Why might a trader use a long synthetic forward instead of owning the stock?
   - To earn dividends from the underlying shares while holding only options rather than the stock itself
   - To cap the downside at the premium paid, since the position has a limited and known maximum loss
   - [x] To get stock-like exposure through the options market, for reasons such as margin, tax, or access
   - To profit from a drop in the stock, since the combination gains value when the price falls
   > The combination replicates a long stock position using options.

2. How does a long synthetic forward behave?
   - Like a position with a limited loss and unlimited gain, since the long call caps the cost of the trade
   - Like a short stock position, because the short put gains as the stock falls and the call loses value
   - Like a position that earns a steady premium, since the options are held at the same strike and date
   - [x] Almost exactly like owning the stock, with little net cost because the call premium is offset by the put premium
   > Long call plus short put has uncapped upside and uncapped downside, like the stock.

3. How is a long synthetic forward built?
   - [x] Buy an at-the-money call and sell an at-the-money put with the same strike and expiration
   - Buy a call and buy a put at the same strike and expiration, so that the position profits from a big move
   - Sell a call and buy a put at the same strike and expiration, so that the position behaves like shorting
   - Buy a call at one strike and sell a call at a higher strike, so that part of the cost is financed
   > Same strike and expiration are what make it mimic the stock.

4. The stock falls sharply. What happens to a long synthetic forward?
   - The loss is limited to a small premium, because the long call protects the position on the downside
   - [x] It loses roughly dollar for dollar, like holding the stock, because the short put moves against you
   - It gains value, because the short put expires worthless when the stock drops below the strike
   - Nothing happens, because the long call and the short put cancel out each other's changes in value
   > The short put creates stock-like downside exposure.

5. {#calc1} [calc] A trader builds a Long Synthetic Forward: buys one $100 call and sells one $100 put, for no net premium. What is the break-even stock price at expiration, per share?
   - $0
   - [x] $100
   - $101
   - $99
   > For this position (K = 100), the break-even stock price is $100 per share. Formula: S* = K - netCF.
