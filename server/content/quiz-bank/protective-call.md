---
slug: protective-call
---

# Quiz

1. {#q1} When does a protective call make sense?
   - You own the stock and are worried about a sudden drop in price ahead of an important announcement
   - You expect the stock to stay flat and want to collect extra premium on shares that you already own
   - You want to profit from volatility in both directions
   - [x] You are short the stock and worry about a squeeze or sudden rally
   > It limits the risk of a short stock position.

2. {#q2} What does buying the call do for a short stock position?
   - [x] It caps how much you can lose if the stock rallies against your short
   - It guarantees a profit if the stock rises
   - It removes the need to borrow shares, since the call can be exercised in place of the short position
   - It increases the profit from a decline, since the call becomes more valuable as the stock falls
   > The worst case is fixed at the strike plus the premium, instead of being unlimited.

3. {#q3} How is a protective call built?
   - Buy 100 shares and buy one put per 100 shares, so that the shares are insured against any drop
   - [x] Short 100 shares and buy one call per 100 shares shorted, sized to the maximum rally you will tolerate
   - Short 100 shares and sell one put per 100 shares, so that premium is collected against the position
   - Buy 100 shares and sell one call per 100 shares, so that the premium cushions a small decline
   > The long call is the insurance against a rally.

4. {#q4} A trader shorts shares at 100 and buys a 105 call for 3. The stock spikes to 130. What happens?
   - The loss is unlimited, because the call only helps after the stock has fallen below the strike price
   - The trader profits from the rally, because the call gains value faster than the short shares lose it
   - [x] The loss is capped near the strike plus the premium instead of growing with the stock
   - The call expires worthless and the trader keeps the premium, with no loss on the short shares at all
   > The call gains as the stock rises and offsets losses on the short stock above the strike.

5. {#calc1} [calc] A trader builds a Protective Call: is short the stock, sold at $100 and buys one $105 call, with a net option premium of $3 paid. What is the break-even stock price at expiration, per share?
   - $100
   - $8
   - $3
   - [x] $97
   > For this position (S0 = 100, K = 105, net debit = 3), the break-even stock price is $97 per share. Formula: S* = S0 - D.

6. {#bk1} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. What is the maximum loss at expiration, per share?
   - $3
   - $97
   - [x] $8
   - $9
   > For this position (S0 = 100, K = 105, net debit = 3), the maximum loss is $8 per share. Formula: L_max = K - S0 + D.

7. {#bk2} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. What is the maximum profit at expiration, per share?
   - [x] $97
   - $8
   - $3
   - $98
   > For this position (S0 = 100, K = 105, net debit = 3), the maximum profit is $97 per share. Formula: P_max = S0 - D.

8. {#bk3} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - +$8
   - −$5
   - [x] −$8
   - −$2
   > At $106 the option legs are worth −$5 per share before the premium, and the net premium adds −$3, for −$8 per share (given S0 = 100, K = 105, net debit = 3).

9. {#bk4} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - +$8
   - [x] −$8
   - −$5
   - −$2
   > At $113 the option legs are worth −$5 per share before the premium, and the net premium adds −$3, for −$8 per share (given S0 = 100, K = 105, net debit = 3).

10. {#bk5} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $970
   - $9,700
   - $106,700
   - [x] $97,000
   > The maximum profit is $97 per share. One contract covers 100 shares, so 10 contracts give $97 × 100 × 10 = $97,000.

11. {#bk6} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. The stock is at $103 at expiration. What is the profit or loss per share, counting the premium?
   - +$6
   - [x] −$6
   - −$3
   - −$5
   > At $103 the legs are worth −$3 per share before the premium, and the net premium adds −$3, for −$6 per share (given S0 = 100, K = 105, net debit = 3).

12. {#bk7} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. The stock is at $104 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - −$4
   - −$1
   - [x] −$7
   > At $104 the legs are worth −$4 per share before the premium, and the net premium adds −$3, for −$7 per share (given S0 = 100, K = 105, net debit = 3).

13. {#bk8} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. At expiration the stock is at $105. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - −$56
   - −$800
   - [x] −$5,600
   - +$5,600
   > Per share the position makes −$8 at $105. For 7 contracts: −$8 × 100 × 7 = −$5,600.

14. {#bk9} [calc] A trader builds a Protective Call: is short the stock, sold at $100, and buys one $105 call, with a net option premium of $3 paid. What is the ratio of maximum profit to maximum loss?
   - [x] 12.13 to 1
   - 0.08 to 1
   - 97 to 1
   - 8 to 1
   > Maximum profit is $97 and maximum loss is $8 per share, so the ratio is $97 / $8 = 12.13 to 1.
