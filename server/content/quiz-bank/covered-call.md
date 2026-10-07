---
slug: covered-call
---

# Quiz

1. {#q1} Which investor is the best fit for a covered call?
   - [x] Someone who owns the stock and expects it to stay flat or rise only modestly
   - Someone who expects a big rally and wants every dollar of upside
   - Someone who expects the stock to crash and wants the call premium to fully offset the decline
   - Someone who doesn't own the stock but wants unlimited upside from a position with a small premium
   > A covered call suits a neutral to mildly bullish view on stock you already hold.

2. {#q2} What does a covered call writer give up in exchange for the premium?
   - Ownership of all future dividends, since the shares are transferred to the buyer when the call is sold
   - [x] Gains above the strike price
   - The downside protection that a put would give, since the call does not cap the losses at all
   - The right to sell the shares at any time, since they are locked up until the call expires
   > If the stock rises past the strike, the shares are called away and the extra gain is forgone.

3. {#q3} How is a covered call built?
   - Short 100 shares and sell one put per 100 shares, so that premium is collected on both sides of the position
   - Buy 100 shares and buy one put per 100 shares, so that the shares are fully insured against any decline
   - [x] Hold 100 shares and sell one out-of-the-money call per 100 shares, often 30 to 45 days to expiration
   - Sell one call for every 100 shares of a stock that the investor does not own, so that no capital is tied up
   > The shares 'cover' the short call, which is why the position is called covered.

4. {#q4} An investor holds shares at 100 and sells a 105 call for 3. The stock surges to 115. What happens?
   - The investor loses money, because the call is exercised against the shares at a price below the market
   - The investor keeps all of the gain to 115, because owning the shares means the call has no effect on them
   - The call expires worthless and the investor keeps the shares, with the full rally to 115 still in hand
   - [x] The shares are called away at 105, so the investor profits but misses the gain above 105
   > The upside is capped at the strike plus the premium.

5. {#q5} If the stock drifts slightly lower, what does the premium collected do?
   - [x] It cushions the loss, but it does not protect against a large decline
   - It fully protects the position from any decline
   - It increases the loss, because the call premium has to be paid back if the stock falls
   - It has no effect on the result, since the premium is only kept if the call is exercised
   > The premium offsets a small decline, but the shares can still lose much more than the credit.

6. {#calc1} [calc] A trader builds a Covered Call: owns the stock, bought at $100 and sells one $105 call, with a net option premium of $3 received. What is the break-even stock price at expiration, per share?
   - $100
   - $8
   - $3
   - [x] $97
   > For this position (S0 = 100, K = 105, net credit = 3), the break-even stock price is $97 per share. Formula: S* = S0 - C.

7. {#bk1} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. What is the maximum loss at expiration, per share?
   - $8
   - $3
   - [x] $97
   - $98
   > For this position (S0 = 100, K = 105, net credit = 3), the maximum loss is $97 per share. Formula: L_max = S0 - C.

8. {#bk2} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. What is the maximum profit at expiration, per share?
   - [x] $8
   - $3
   - $97
   - $9
   > For this position (S0 = 100, K = 105, net credit = 3), the maximum profit is $8 per share. Formula: P_max = K - S0 + C.

9. {#bk3} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. At expiration the stock is at $92. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - −$8
   - [x] −$5
   - +$1
   > At $92 the option legs are worth −$8 per share before the premium, and the net premium adds +$3, for −$5 per share (given S0 = 100, K = 105, net credit = 3).

10. {#bk4} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - −$8
   - [x] +$8
   - +$5
   - +$14
   > At $106 the option legs are worth +$5 per share before the premium, and the net premium adds +$3, for +$8 per share (given S0 = 100, K = 105, net credit = 3).

11. {#bk5} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. What is the maximum profit on 4 contracts (100 shares each), in dollars?
   - $32
   - $800
   - $4,000
   - [x] $3,200
   > The maximum profit is $8 per share. One contract covers 100 shares, so 4 contracts give $8 × 100 × 4 = $3,200.

12. {#bk6} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. The stock is at $103 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$3
   - +$12
   > At $103 the legs are worth +$3 per share before the premium, and the net premium adds +$3, for +$6 per share (given S0 = 100, K = 105, net credit = 3).

13. {#bk7} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. The stock is at $104 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - +$4
   - +$13
   - [x] +$7
   > At $104 the legs are worth +$4 per share before the premium, and the net premium adds +$3, for +$7 per share (given S0 = 100, K = 105, net credit = 3).

14. {#bk8} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. At expiration the stock is at $105. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - +$40
   - +$800
   - [x] +$4,000
   - −$4,000
   > Per share the position makes +$8 at $105. For 5 contracts: +$8 × 100 × 5 = +$4,000.

15. {#bk9} [calc] A trader builds a Covered Call: owns the stock, bought at $100, and sells one $105 call, with a net option premium of $3 received. What is the ratio of maximum profit to maximum loss?
   - [x] 0.08 to 1
   - 12.13 to 1
   - 8 to 1
   - 97 to 1
   > Maximum profit is $8 and maximum loss is $97 per share, so the ratio is $8 / $97 = 0.08 to 1.
