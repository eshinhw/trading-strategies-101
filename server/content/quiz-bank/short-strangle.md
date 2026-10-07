---
slug: short-strangle
---

# Quiz

1. {#q1} Why choose a short strangle over a short straddle?
   - It collects a larger premium than a straddle does, because the options are further from the money
   - It has limited risk, since the out-of-the-money options cannot lose more than the premium collected
   - [x] It gives a wider cushion for the stock to move before losing money, in exchange for a smaller premium
   - It profits from a large move, because the strikes are placed far enough from the current stock price
   > Spreading the strikes apart reduces the credit but widens the profit range.

2. {#q2} What does a short strangle need to be profitable?
   - A move beyond either strike, so that one of the options finishes in the money and earns its intrinsic value
   - A rise in implied volatility, since more expensive options make the short position worth more to the seller
   - A very large move in one direction
   - [x] The stock to stay within a range, between the two short strikes plus or minus the premium
   > The premium collected cushions small moves outside the strikes.

3. {#q3} How is a short strangle built?
   - [x] Sell an out-of-the-money call and an out-of-the-money put with the same expiration
   - Buy an out-of-the-money call and put, paying a premium for protection against a large move in either direction
   - Sell a call and a put at the same strike
   - Sell an in-the-money call and put, which collects more premium but starts with intrinsic value to give back
   > The strikes are placed on either side of the current price.

4. {#q4} The stock stays between the strikes at expiration. What happens?
   - The trader must buy and sell shares at the strikes, since both options are exercised at expiration
   - [x] Both options expire worthless and the trader keeps the entire credit
   - The trader loses the premium, because options that expire worthless take the credit back from the seller
   - The trader earns unlimited profit, because the position gains more the longer the stock stays in range
   > If neither option is in the money, the full credit is kept.

5. {#calc1} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - [x] $91
   - $10
   - $4
   > For this position (K1 = 105, K2 = 95, net credit = 4), the lower break-even stock price is $91 per share. Formula: S*_up = K1 + C; S*_down = K2 - C.

6. {#bk1} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. What is the maximum profit at expiration, per share?
   - $10
   - [x] $4
   - $91
   - $109
   > For this position (K1 = 105, K2 = 95, net credit = 4), the maximum profit is $4 per share. Formula: P_max = C.

7. {#bk2} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. What is the upper break-even stock price at expiration, per share?
   - $91
   - $10
   - $4
   - [x] $109
   > For this position (K1 = 105, K2 = 95, net credit = 4), the upper break-even stock price is $109 per share. Formula: S*_up = K1 + C; S*_down = K2 - C.

8. {#bk3} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$4
   - [x] +$4
   - +$12
   - +$5
   > At $103 the option legs are worth $0 per share before the premium, and the net premium adds +$4, for +$4 per share (given K1 = 105, K2 = 95, net credit = 4).

9. {#bk4} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - +$4
   - −$8
   - [x] −$4
   - −$3
   > At $113 the option legs are worth −$8 per share before the premium, and the net premium adds +$4, for −$4 per share (given K1 = 105, K2 = 95, net credit = 4).

10. {#bk5} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. What is the maximum profit on 4 contracts (100 shares each), in dollars?
   - [x] $1,600
   - $16
   - $400
   - $2,000
   > The maximum profit is $4 per share. One contract covers 100 shares, so 4 contracts give $4 × 100 × 4 = $1,600.

11. {#bk6} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$4
   - +$12
   - [x] +$4
   - +$5
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$4, for +$4 per share (given K1 = 105, K2 = 95, net credit = 4).

12. {#bk7} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$4
   - −$4
   - +$12
   - +$5
   > At $101 the legs are worth $0 per share before the premium, and the net premium adds +$4, for +$4 per share (given K1 = 105, K2 = 95, net credit = 4).

13. {#bk8} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. At expiration the stock is at $105. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - +$20
   - [x] +$2,000
   - +$400
   - −$2,000
   > Per share the position makes +$4 at $105. For 5 contracts: +$4 × 100 × 5 = +$2,000.

14. {#bk9} [calc] A trader builds a Short Strangle: sells one $105 call and sells one $95 put, for a net credit of $4 per share. How much cash is received up front in total if the trader opens 6 contracts (100 shares each)?
   - $24
   - $400
   - $2,800
   - [x] $2,400
   > The net credit is $4 per share. For 6 contracts: $4 × 100 × 6 = $2,400.
