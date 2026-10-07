---
slug: collar
---

# Quiz

1. {#q1} When is a collar most appropriate?
   - You want unlimited upside and no downside at all, and you are willing to pay a large premium to get it
   - You expect a big rally and want to add to your shares while keeping the cost of the position very low
   - [x] You hold stock with unrealized gains you want to protect without paying much cash, and you accept giving up some upside
   - You want to profit from a decline in the stock, so you protect only the upside with a call that you buy
   > A collar protects a position at little or no cost.

2. {#q2} Why does a collar often cost close to nothing?
   - The put is given away free by the exchange, which is why the position costs almost nothing to put on
   - The call is bought rather than sold, so its premium is received to pay for the protection of the put
   - The stock itself pays the cost of the position, since the dividends are used to buy the put protection
   - [x] The premium from the sold call largely pays for the put that is bought
   > Selling upside funds the downside protection.

3. {#q3} How is a collar built?
   - [x] Hold 100 shares, buy an out-of-the-money put, and sell an out-of-the-money call, with strikes chosen so the premiums roughly offset
   - Short 100 shares, buy an out-of-the-money call, and sell an out-of-the-money put, so the premiums roughly offset
   - Hold 100 shares and sell both a call and a put, so the premiums collected are as large as possible
   - Hold 100 shares and buy both a call and a put, so the position is protected and can profit in both directions
   > The put is the floor and the call is the cap.

4. {#q4} A collar is placed on stock at 100 with a 95 put and a 105 call. The stock rallies to 130. What happens?
   - The investor keeps the full gain to 130
   - [x] The gain is capped near 105 because the shares are called away
   - The investor loses money, because the put costs more than any gain that the shares have produced so far
   - The put pays out a large gain, because the stock moved far enough away from the strike of the put option
   > The sold call limits the upside, in exchange for the cheap protection.

5. {#calc1} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. What is the maximum loss at expiration, per share?
   - $10
   - $100
   - $6
   - [x] $5
   > For this position (S0 = 100, K1 = 95, K2 = 105), the maximum loss is $5 per share. Formula: L_max = S0 - K1 - netCF.

6. {#bk1} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. What is the maximum profit at expiration, per share?
   - $10
   - $100
   - [x] $5
   - $6
   > For this position (S0 = 100, K1 = 95, K2 = 105), the maximum profit is $5 per share. Formula: P_max = K2 - S0 + netCF.

7. {#bk2} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. What is the break-even stock price at expiration, per share?
   - [x] $100
   - $10
   - $5
   - $101
   > For this position (S0 = 100, K1 = 95, K2 = 105), the break-even stock price is $100 per share. Formula: S* = S0 - netCF.

8. {#bk3} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $50
   - $500
   - [x] $5,000
   - $5,500
   > The maximum profit is $5 per share. One contract covers 100 shares, so 10 contracts give $5 × 100 × 10 = $5,000.

9. {#bk4} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - +$5
   - [x] −$5
   - −$4
   - −$6
   > At $83 the legs are worth −$5 per share before the premium, and the net premium adds $0, for −$5 per share (given S0 = 100, K1 = 95, K2 = 105).

10. {#bk5} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. The stock is at $92 at expiration. What is the profit or loss per share, counting the premium?
   - +$5
   - −$4
   - −$6
   - [x] −$5
   > At $92 the legs are worth −$5 per share before the premium, and the net premium adds $0, for −$5 per share (given S0 = 100, K1 = 95, K2 = 105).

11. {#bk6} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. At expiration the stock is at $95. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - −$15
   - [x] −$1,500
   - −$500
   - +$1,500
   > Per share the position makes −$5 at $95. For 3 contracts: −$5 × 100 × 3 = −$1,500.

12. {#bk7} [calc] A trader builds a Collar: owns the stock, bought at $100, buys one $95 put, and sells one $105 call, for no net premium. What is the ratio of maximum profit to maximum loss?
   - 5 to 1
   - 2 to 1
   - 0.5 to 1
   - [x] 1 to 1
   > Maximum profit is $5 and maximum loss is $5 per share, so the ratio is $5 / $5 = 1 to 1.
