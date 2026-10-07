---
slug: short-call
---

# Quiz

1. {#q1} Which view fits selling a call without owning the stock?
   - The stock will rally sharply and you want unlimited upside
   - The trader already owns the shares and wants a floor placed under their value to limit any declines
   - [x] The stock will stay flat, drift lower, or at least not rise above the strike by expiration
   - The stock will make a very large move in either direction, though the trader is unsure which way
   > A short call profits when the stock stays below the strike, so it is bearish to neutral.

2. {#q2} What is the trade-off of a naked short call?
   - You pay a small premium up front and your loss is limited to that amount if the stock rallies
   - You collect a premium, and your profit is unlimited if the stock rises while the loss is capped
   - You receive a premium, and the loss is limited to the distance between two strikes if the stock rallies
   - [x] You collect a limited premium up front, but your loss grows without limit if the stock rallies
   > The profit is capped at the premium while the loss is unlimited, which is why the trade is risky.

3. {#q3} Why do brokers restrict naked short calls and require margin?
   - [x] Because the potential loss on a sharp rally has no ceiling, so the broker needs collateral
   - Because the premium collected must be refunded to the buyer until the option has finally expired
   - Because only professional market makers are legally permitted to sell calls on listed stocks
   - Because brokers pay interest on short option positions, which has to be funded in advance by the seller
   > Unlimited downside risk is the reason for margin requirements and account approval.

4. {#q4} A trader sells a call and the stock finishes below the strike at expiration. What happens?
   - The trader must deliver 100 shares at the strike price and loses the premium that was collected
   - [x] The call expires worthless and the trader keeps the entire premium
   - The trader loses the premium, since the option expired out of the money for the seller
   - The trader owes the buyer the difference between the stock price and the strike price
   > If the option expires out of the money, the seller keeps the credit received.

5. {#calc1} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. What is the maximum profit at expiration, per share?
   - [x] $4
   - $104
   - $5
   - $3
   > For this position (K = 100, net credit = 4), the maximum profit is $4 per share. Formula: P_max = C.

6. {#bk1} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. What is the break-even stock price at expiration, per share?
   - $4
   - $105
   - $103
   - [x] $104
   > For this position (K = 100, net credit = 4), the break-even stock price is $104 per share. Formula: S* = K + C.

7. {#bk2} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$1
   - [x] +$1
   - −$3
   - +$9
   > At $103 the option legs are worth −$3 per share before the premium, and the net premium adds +$4, for +$1 per share (given K = 100, net credit = 4).

8. {#bk3} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. At expiration the stock is at $108. What is the trader's profit or loss per share, counting the premium?
   - +$4
   - −$8
   - −$3
   - [x] −$4
   > At $108 the option legs are worth −$8 per share before the premium, and the net premium adds +$4, for −$4 per share (given K = 100, net credit = 4).

9. {#bk4} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - [x] $1,200
   - $12
   - $400
   - $1,600
   > The maximum profit is $4 per share. One contract covers 100 shares, so 3 contracts give $4 × 100 × 3 = $1,200.

10. {#bk5} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$4
   - +$12
   - [x] +$4
   - +$5
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$4, for +$4 per share (given K = 100, net credit = 4).

11. {#bk6} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$3
   - −$3
   - −$1
   - +$11
   > At $101 the legs are worth −$1 per share before the premium, and the net premium adds +$4, for +$3 per share (given K = 100, net credit = 4).

12. {#bk7} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. At expiration the stock is at $103. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - +$2
   - +$100
   - [x] +$200
   - −$200
   > Per share the position makes +$1 at $103. For 2 contracts: +$1 × 100 × 2 = +$200.

13. {#bk8} [calc] A trader builds a Short Call: sells one $100 call, for a net credit of $4 per share. How much cash is received up front in total if the trader opens 6 contracts (100 shares each)?
   - $24
   - $400
   - $2,800
   - [x] $2,400
   > The net credit is $4 per share. For 6 contracts: $4 × 100 × 6 = $2,400.
