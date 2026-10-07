---
slug: short-synthetic-forward
---

# Quiz

1. {#q1} Why might a trader use a short synthetic forward?
   - To earn dividends from the underlying shares while holding only options rather than the stock itself
   - To limit the loss to the premium paid, since the position has a small and known maximum loss
   - To profit from a rise in the stock
   - [x] To get short-stock exposure through options instead of borrowing shares
   > The combination replicates a short stock position.

2. {#q2} How does a short synthetic forward behave?
   - [x] Like a short stock position, gaining as the stock falls and losing as it rises, with little net cost
   - Like a position with a limited loss and unlimited gain, since the long put caps the cost of the trade
   - Like a long stock position, because the short call gains as the stock rises and the put loses value
   - Like a position that earns a steady premium, since the options are held at the same strike and date
   > Long put plus short call has stock-like inverse exposure.

3. {#q3} How is a short synthetic forward built?
   - Buy a call and buy a put at the same strike and expiration, so that the position profits from a big move
   - [x] Buy an at-the-money put and sell an at-the-money call with the same strike and expiration
   - Buy a call and sell a put at the same strike and expiration, so that the position behaves like owning
   - Sell a put at one strike and buy a put at a lower strike
   > The combination is the mirror image of the long synthetic forward.

4. {#q4} The stock rallies strongly. What happens to a short synthetic forward?
   - The loss is limited to a small premium, because the long put protects the position on the upside
   - It gains value, because the short call expires worthless when the stock rises above the strike
   - [x] It loses roughly dollar for dollar, like a short stock position, because the short call moves against you
   - Nothing happens, because the long put and the short call cancel out each other's changes in value
   > The short call has unlimited loss potential as the stock rises.

5. {#calc1} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. What is the break-even stock price at expiration, per share?
   - $0
   - $101
   - [x] $100
   - $99
   > For this position (K = 100), the break-even stock price is $100 per share. Formula: S* = K + netCF.

6. {#bk1} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. What is the maximum profit at expiration, per share?
   - $0
   - [x] $100
   - $101
   - $99
   > For this position (K = 100), the maximum profit is $100 per share. Formula: P_max = K + netCF.

7. {#bk2} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $1,000
   - $10,000
   - $110,000
   - [x] $100,000
   > The maximum profit is $100 per share. One contract covers 100 shares, so 10 contracts give $100 × 100 × 10 = $100,000.

8. {#bk3} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. The stock is at $88 at expiration. What is the profit or loss per share, counting the premium?
   - −$12
   - [x] +$12
   - +$13
   - +$11
   > At $88 the legs are worth +$12 per share before the premium, and the net premium adds $0, for +$12 per share (given K = 100).

9. {#bk4} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. The stock is at $97 at expiration. What is the profit or loss per share, counting the premium?
   - −$3
   - +$4
   - [x] +$3
   - +$2
   > At $97 the legs are worth +$3 per share before the premium, and the net premium adds $0, for +$3 per share (given K = 100).

10. {#bk5} [calc] A trader builds a Short Synthetic Forward: buys one $100 put and sells one $100 call, for no net premium. At expiration the stock is at $101. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - [x] −$600
   - −$6
   - −$100
   - +$600
   > Per share the position makes −$1 at $101. For 6 contracts: −$1 × 100 × 6 = −$600.
