---
slug: bull-call-ladder
---

# Quiz

1. {#q1} When might a trader choose a bull call ladder over a bull call spread?
   - [x] They expect a moderate rally, not an explosive one, and want a cheaper or free entry
   - They expect a huge rally and want unlimited profit, so they prefer to avoid selling any extra calls
   - They expect the stock to fall, so they sell the extra calls to benefit from a decline in the price
   - They want the maximum protection against a big rally
   > The extra short call lowers the cost but removes protection against a very large move.

2. {#q2} What is the catch of a bull call ladder?
   - Profit is limited to the premium collected, because the extra short call removes any additional gains
   - [x] Beyond the highest strike the extra short call is uncovered, so losses are unlimited if the stock keeps climbing
   - The maximum loss is the debit paid, because the extra call is covered by the long call at the lower strike
   - It has no risk at all, because the extra short call offsets the cost of the original long call completely
   > The third leg is a naked short call above the top strike.

3. {#q3} How is a bull call ladder built?
   - Buy two calls near the money and sell one call at a higher strike, so that the position is net long calls
   - Sell a near-the-money call and buy two higher calls
   - [x] Buy a near-the-money call and sell two calls at higher strikes, same expiration
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   > It is a bull call spread financed by an additional short call.

4. {#q4} A stock is expected to finish between the strikes but jumps far higher on a buyout rumor. What happens?
   - The position earns unlimited profit, because the long call keeps rising in value with the stock itself
   - The position earns the maximum profit, because the stock finished beyond all three of the strikes
   - The position is unaffected, because the extra short call is covered by the original long call
   - [x] The uncovered extra short call turns the position into a large loss
   > Above the highest strike the position has an uncovered short call.

5. {#calc1} [calc] A bull call ladder buys a 100 call, sells a 105 call and sells a 110 call, for no net premium. What is the payoff per share if the stock ends at 118?
   - [x] −$3
   - +$3
   - +$5
   - −$5
   > The long 100 call is worth 18, the short 105 call costs 13, and the short 110 call costs 8: 18 − 13 − 8 = −3. Above 115 the loss grows without limit.

6. {#bk1} [calc] A trader builds a Bull Call Ladder: buys one $100 call, sells one $105 call, and sells one $110 call, for no net premium. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - $15
   - [x] $1,500
   - $500
   - $2,000
   > The maximum profit is $5 per share. One contract covers 100 shares, so 3 contracts give $5 × 100 × 3 = $1,500.

7. {#bk2} [calc] A trader builds a Bull Call Ladder: buys one $100 call, sells one $105 call, and sells one $110 call, for no net premium. The stock is at $105 at expiration. What is the profit or loss per share, counting the premium?
   - −$5
   - +$6
   - +$4
   - [x] +$5
   > At $105 the legs are worth +$5 per share before the premium, and the net premium adds $0, for +$5 per share (given K1 = 100, K2 = 105, K3 = 110).

8. {#bk3} [calc] A trader builds a Bull Call Ladder: buys one $100 call, sells one $105 call, and sells one $110 call, for no net premium. The stock is at $106 at expiration. What is the profit or loss per share, counting the premium?
   - −$5
   - [x] +$5
   - +$6
   - +$4
   > At $106 the legs are worth +$5 per share before the premium, and the net premium adds $0, for +$5 per share (given K1 = 100, K2 = 105, K3 = 110).

9. {#bk4} [calc] A trader builds a Bull Call Ladder: buys one $100 call, sells one $105 call, and sells one $110 call, for no net premium. At expiration the stock is at $110. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - +$10
   - +$500
   - [x] +$1,000
   - −$1,000
   > Per share the position makes +$5 at $110. For 2 contracts: +$5 × 100 × 2 = +$1,000.
