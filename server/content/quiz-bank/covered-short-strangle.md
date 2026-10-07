---
slug: covered-short-strangle
---

# Quiz

1. {#q1} How does a covered short strangle differ from a covered short straddle?
   - The strikes are the same, collecting more premium
   - It uses long options instead of short ones, which protects the shares but removes most of the income earned
   - [x] The strikes are spread apart, which collects less premium but leaves more room before a bad outcome
   - It involves no stock at all, which removes the obligation to buy shares if the put is assigned at expiration
   > Spreading the strikes is more forgiving but pays less.

2. {#q2} Who is a covered short strangle designed for?
   - A trader who expects a big move in either direction and wants the position to profit from the size of it
   - A trader who wants to short the stock and collect income from the put and the call premiums together
   - A trader who wants no obligations at all and is happy to give up the income in exchange for that safety
   - [x] A moderately bullish stock owner who would happily buy more shares at a lower price and wants income beyond a covered call
   > It adds an out-of-the-money put to a covered call.

3. {#q3} How is a covered short strangle built?
   - [x] Hold 100 shares, sell an out-of-the-money call above the price, and sell an out-of-the-money put below it, same expiration
   - Hold 100 shares and buy a call and a put, paying a premium for protection on both sides of the price
   - Short 100 shares, sell an out-of-the-money call below the price and an out-of-the-money put above it
   - Hold 100 shares and sell two at-the-money calls, doubling the income from the shares that are already owned
   > The call covers the shares, and the put is secured by cash or margin.

4. {#q4} The stock stays between the two strikes. What happens?
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

6. {#bk1} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the maximum loss at expiration, per share?
   - $95
   - $10
   - [x] $190
   - $5
   > For this position (S0 = 100, K = 105, Kp = 95, net credit = 5), the maximum loss is $190 per share. Formula: L_max = S0 + K' - C.

7. {#bk2} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the break-even stock price at expiration, per share?
   - [x] $95
   - $10
   - $5
   - $190
   > For this position (S0 = 100, K = 105, Kp = 95, net credit = 5), the break-even stock price is $95 per share. Formula: n/a (two-sided, solve numerically).

8. {#bk3} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. At expiration the stock is at $87. What is the trader's profit or loss per share, counting the premium?
   - +$16
   - −$21
   - [x] −$16
   - −$6
   > At $87 the option legs are worth −$21 per share before the premium, and the net premium adds +$5, for −$16 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

9. {#bk4} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$8
   - [x] +$8
   - +$3
   - +$18
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds +$5, for +$8 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

10. {#bk5} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $100
   - $1,000
   - $11,000
   - [x] $10,000
   > The maximum profit is $10 per share. One contract covers 100 shares, so 10 contracts give $10 × 100 × 10 = $10,000.

11. {#bk6} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$5
   - [x] +$5
   - +$15
   - +$6
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$5, for +$5 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

12. {#bk7} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - +$1
   - +$16
   - [x] +$6
   > At $101 the legs are worth +$1 per share before the premium, and the net premium adds +$5, for +$6 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

13. {#bk8} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. At expiration the stock is at $105. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - +$70
   - +$1,000
   - [x] +$7,000
   - −$7,000
   > Per share the position makes +$10 at $105. For 7 contracts: +$10 × 100 × 7 = +$7,000.

14. {#bk9} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the ratio of maximum profit to maximum loss?
   - [x] 0.05 to 1
   - 19 to 1
   - 10 to 1
   - 190 to 1
   > Maximum profit is $10 and maximum loss is $190 per share, so the ratio is $10 / $190 = 0.05 to 1.
