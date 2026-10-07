---
slug: protective-call
---

# Quiz

1. When does a protective call make sense?
   - You own the stock and are worried about a sudden drop in price ahead of an important announcement
   - You expect the stock to stay flat and want to collect extra premium on shares that you already own
   - You want to profit from volatility in both directions
   - [x] You are short the stock and worry about a squeeze or sudden rally
   > It limits the risk of a short stock position.

2. What does buying the call do for a short stock position?
   - [x] It caps how much you can lose if the stock rallies against your short
   - It guarantees a profit if the stock rises
   - It removes the need to borrow shares, since the call can be exercised in place of the short position
   - It increases the profit from a decline, since the call becomes more valuable as the stock falls
   > The worst case is fixed at the strike plus the premium, instead of being unlimited.

3. How is a protective call built?
   - Buy 100 shares and buy one put per 100 shares, so that the shares are insured against any drop
   - [x] Short 100 shares and buy one call per 100 shares shorted, sized to the maximum rally you will tolerate
   - Short 100 shares and sell one put per 100 shares, so that premium is collected against the position
   - Buy 100 shares and sell one call per 100 shares, so that the premium cushions a small decline
   > The long call is the insurance against a rally.

4. A trader shorts shares at 100 and buys a 105 call for 3. The stock spikes to 130. What happens?
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
