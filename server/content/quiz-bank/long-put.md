---
slug: long-put
---

# Quiz

1. {#q1} Which view fits buying a put option?
   - [x] You expect a meaningful drop within a defined time and want to profit without shorting the stock
   - You expect the stock to rise steadily over the next few months and want to lower the cost of owning it
   - You expect a modest rise and want to lower your cost
   - You already own the shares and are confident they will keep rising, so you want more exposure to gains
   > A long put is a bearish, limited-risk position.

2. {#q2} Why might a trader prefer buying a put to shorting the stock?
   - A put pays a dividend every month, whereas a short sale of the stock does not pay anything at all
   - [x] The loss is limited to the premium, while shorting stock carries unlimited risk
   - A put never expires, so the trader can hold it for as long as the view takes to play out
   - A put always costs less than the stock's potential loss
   > A put buyer cannot lose more than the premium, but a short seller can lose without limit if the stock rises.

3. {#q3} How is a long put typically set up?
   - Sell one put far below the current price and keep the premium, hoping that it expires worthless
   - Buy a put that expires within a few days so that time decay works strongly in the buyer's favor
   - [x] Buy one put at or slightly below the current price, with enough time for the decline to happen
   - Short the stock and sell a call against it so that the premium cushions any rise in the price
   > The put must have enough time for the expected decline to occur.

4. {#q4} A trader buys a put and the stock finishes above the strike at expiration. What happens?
   - The trader must buy 100 shares at the strike price, which creates a loss in addition to the premium
   - The trader owes the difference between the stock and the strike
   - The trader keeps the premium, since an out-of-the-money option always favors its buyer
   - [x] The put expires worthless and the trader loses only the premium paid
   > Out-of-the-money options expire worthless, and the buyer's loss is the premium.

5. {#calc1} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. What is the break-even stock price at expiration, per share?
   - $4
   - [x] $96
   - $97
   - $95
   > For this position (K = 100, net debit = 4), the break-even stock price is $96 per share. Formula: S* = K - D.

6. {#bk1} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. What is the maximum loss at expiration, per share?
   - $96
   - $5
   - $3
   - [x] $4
   > For this position (K = 100, net debit = 4), the maximum loss is $4 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. What is the maximum profit at expiration, per share?
   - $4
   - [x] $96
   - $97
   - $95
   > For this position (K = 100, net debit = 4), the maximum profit is $96 per share. Formula: P_max = K - D.

8. {#bk3} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $32
   - $400
   - $3,600
   - [x] $3,200
   > The maximum loss is $4 per share. One contract covers 100 shares, so 8 contracts give $4 × 100 × 8 = $3,200.

9. {#bk4} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$4
   - +$4
   - −$3
   - −$5
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds −$4, for −$4 per share (given K = 100, net debit = 4).

10. {#bk5} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$4
   - −$3
   - [x] −$4
   - −$5
   > At $101 the legs are worth $0 per share before the premium, and the net premium adds −$4, for −$4 per share (given K = 100, net debit = 4).

11. {#bk6} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. At expiration the stock is at $103. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - [x] −$800
   - −$8
   - −$400
   - +$800
   > Per share the position makes −$4 at $103. For 2 contracts: −$4 × 100 × 2 = −$800.

12. {#bk7} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. How much cash is paid up front in total if the trader opens 2 contracts (100 shares each)?
   - $8
   - $400
   - [x] $800
   - $1,200
   > The net debit is $4 per share. For 2 contracts: $4 × 100 × 2 = $800.

13. {#bk8} [calc] A trader builds a Long Put: buys one $100 put, for a net debit of $4 per share. What is the ratio of maximum profit to maximum loss?
   - 0.04 to 1
   - 96 to 1
   - 4 to 1
   - [x] 24 to 1
   > Maximum profit is $96 and maximum loss is $4 per share, so the ratio is $96 / $4 = 24 to 1.
