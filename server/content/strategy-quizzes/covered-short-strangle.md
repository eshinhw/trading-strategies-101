---
slug: covered-short-strangle
---

# Quiz

1. How does a covered short strangle differ from a covered short straddle?
   - The strikes are the same, collecting more premium
   - It uses long options instead of short ones, which protects the shares but removes most of the income earned
   - [x] The strikes are spread apart, which collects less premium but leaves more room before a bad outcome
   - It involves no stock at all, which removes the obligation to buy shares if the put is assigned at expiration
   > Spreading the strikes is more forgiving but pays less.

2. Who is a covered short strangle designed for?
   - A trader who expects a big move in either direction and wants the position to profit from the size of it
   - A trader who wants to short the stock and collect income from the put and the call premiums together
   - A trader who wants no obligations at all and is happy to give up the income in exchange for that safety
   - [x] A moderately bullish stock owner who would happily buy more shares at a lower price and wants income beyond a covered call
   > It adds an out-of-the-money put to a covered call.

3. How is a covered short strangle built?
   - [x] Hold 100 shares, sell an out-of-the-money call above the price, and sell an out-of-the-money put below it, same expiration
   - Hold 100 shares and buy a call and a put, paying a premium for protection on both sides of the price
   - Short 100 shares, sell an out-of-the-money call below the price and an out-of-the-money put above it
   - Hold 100 shares and sell two at-the-money calls, doubling the income from the shares that are already owned
   > The call covers the shares, and the put is secured by cash or margin.

4. The stock stays between the two strikes. What happens?
   - The investor is assigned the put and must buy more shares, since both options are exercised by expiration
   - [x] The investor simply collects the premium, and both options expire worthless
   - The shares are called away at the call strike, since the stock finished between the two strikes at expiration
   - The investor loses the premium, because options that expire worthless take the credit back from the seller
   > If neither strike is reached, the premium is kept.

5. {#calc1} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the maximum profit at expiration, per share?
   - $5
   - $95
   - $100
   - [x] $10
   > For this position (S0 = 100, K = 105, Kp = 95, net credit = 5), the maximum profit is $10 per share. Formula: P_max = K - S0 + C.
