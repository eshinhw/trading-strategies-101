---
slug: bearish-long-seagull-spread
---

# Quiz

1. {#q1} When might a trader use a bearish long seagull?
   - They expect the stock to rise, so they want the long call to gain value as the stock moves higher in price
   - They want to collect the maximum premium, so they avoid buying the further out-of-the-money protective call
   - They want unlimited risk in exchange for a larger credit, which is what the extra long call helps them to avoid
   - [x] They are bearish and want a low-cost trade but are not comfortable with the unlimited upside risk of a short combo
   > The extra long call caps the risk of a short combo.

2. {#q2} What does the extra long call do?
   - [x] It caps what would otherwise be unlimited risk on a rally, in exchange for a slightly higher cost
   - It makes the profit unlimited
   - It removes all risk from the trade, because the extra long call pays out at every price at expiration
   - It adds to the credit, because the extra long call earns a premium while the other options are open
   > The protection reduces the credit versus the uninsured version.

3. {#q3} How is a bearish long seagull built?
   - Sell an out-of-the-money put, buy an at-the-money call, and sell a further out-of-the-money call, same expiration
   - [x] Buy an out-of-the-money put, sell an at-the-money call, and buy a further out-of-the-money call, same expiration
   - Buy two puts below the price and sell a call at the money, so that a small decline pays for the position
   - Buy a call and a put at the same strike, then sell a further call to reduce the cost of the protection
   > A short combo with a protective call.

4. {#q4} The stock rallies unexpectedly to 150. What happens?
   - The loss is unlimited, because the short call at the money is exposed to a very large rally in the stock
   - The trader earns the maximum profit, because the long call gains value as the stock moves sharply higher
   - [x] The loss is capped near the call spread width instead of growing without bound
   - The trader keeps the credit, because the long call cancels any loss that the short call would have created
   > The long call limits the loss.

5. {#calc1} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. What is the maximum loss at expiration, per share?
   - $20
   - [x] $10
   - $90
   - $11
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum loss is $10 per share. Formula: L_max = K3 - K2 - netCF.

6. {#bk1} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. What is the maximum profit at expiration, per share?
   - $20
   - $10
   - $91
   - [x] $90
   > For this position (K1 = 90, K2 = 100, K3 = 110), the maximum profit is $90 per share. Formula: P_max = K1 + netCF.

7. {#bk2} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. What is the break-even stock price at expiration, per share?
   - $20
   - [x] $90
   - $10
   - $91
   > For this position (K1 = 90, K2 = 100, K3 = 110), the break-even stock price is $90 per share. Formula: S* = K1 + netCF (netCF>0) or K2 + netCF (netCF<0).

8. {#bk3} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. What is the maximum profit on 5 contracts (100 shares each), in dollars?
   - $450
   - $9,000
   - $54,000
   - [x] $45,000
   > The maximum profit is $90 per share. One contract covers 100 shares, so 5 contracts give $90 × 100 × 5 = $45,000.

9. {#bk4} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. The stock is at $110 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$10
   - +$10
   - −$9
   - −$11
   > At $110 the legs are worth −$10 per share before the premium, and the net premium adds $0, for −$10 per share (given K1 = 90, K2 = 100, K3 = 110).

10. {#bk5} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. At expiration the stock is at $113. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$20
   - −$1,000
   - [x] −$2,000
   - +$2,000
   > Per share the position makes −$10 at $113. For 2 contracts: −$10 × 100 × 2 = −$2,000.

11. {#bk6} [calc] A trader builds a Bearish Long Seagull Spread: buys one $90 put, sells one $100 call, and buys one $110 call, for no net premium. What is the ratio of maximum profit to maximum loss?
   - [x] 9 to 1
   - 0.11 to 1
   - 90 to 1
   - 10 to 1
   > Maximum profit is $90 and maximum loss is $10 per share, so the ratio is $90 / $10 = 9 to 1.
