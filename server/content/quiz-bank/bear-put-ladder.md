---
slug: bear-put-ladder
---

# Quiz

1. {#q1} When might a trader choose a bear put ladder over a bear put spread?
   - They expect a huge crash and want maximum protection
   - They expect the stock to rise, so they sell the extra puts to benefit from an increase in the price
   - They want unlimited profit from a rally, so they add a long call above the original spread's strikes
   - [x] They expect a moderate decline, not a crash, and want a cheaper or free entry
   > The extra short put lowers the cost but removes protection against a very large drop.

2. {#q2} What is the catch of a bear put ladder?
   - [x] Below the lowest strike the extra short put is uncovered, so losses grow large if the stock keeps falling
   - Profit is limited to the premium collected, because the extra short put removes any additional gains
   - The maximum loss is the debit paid, because the extra put is covered by the long put at the higher strike
   - It has no risk at all, because the extra short put offsets the cost of the original long put completely
   > The third leg is a naked short put below the bottom strike.

3. {#q3} How is a bear put ladder built?
   - Buy two puts near the money and sell one put at a lower strike, so that the position is net long puts
   - [x] Buy a near-the-money put and sell two puts at lower strikes, same expiration
   - Sell a near-the-money put and buy two lower puts
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   > It is a bear put spread financed by an additional short put.

4. {#q4} A stock is expected to finish between the strikes but collapses on bad news. What happens?
   - The position earns unlimited profit, because the long put keeps rising in value as the stock falls
   - The position earns the maximum profit
   - [x] The uncovered extra short put turns the position into a large loss
   - The position is unaffected, because the extra short put is covered by the original long put
   > Below the lowest strike the position has an uncovered short put.

5. {#calc1} [calc] A bear put ladder buys a 100 put and sells a 95 put and a 90 put, for no net premium. What is the payoff per share if the stock ends at 80?
   - [x] −$5
   - +$5
   - −$20
   - $0
   > The long 100 put pays 20, while the short 95 put costs 15 and the short 90 put costs 10: 20 − 15 − 10 = −5.

6. {#bk1} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. What is the maximum loss at expiration, per share?
   - [x] $85
   - $100
   - $10
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum loss is $85 per share. Formula: L_max = K3 + K2 - K1 - netCF.

7. {#bk2} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. What is the maximum profit at expiration, per share?
   - $10
   - $85
   - [x] $5
   - $100
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum profit is $5 per share. Formula: P_max = K1 - K2 + netCF.

8. {#bk3} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. What is the upper break-even stock price at expiration, per share?
   - [x] $100
   - $85
   - $10
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the upper break-even stock price is $100 per share. Formula: S*_up = K1 + netCF; S*_down = K3 + K2 - K1 - netCF.

9. {#bk4} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $50
   - $500
   - $5,500
   - [x] $5,000
   > The maximum profit is $5 per share. One contract covers 100 shares, so 10 contracts give $5 × 100 × 10 = $5,000.

10. {#bk5} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - [x] −$7
   - −$6
   - −$8
   > At $78 the legs are worth −$7 per share before the premium, and the net premium adds $0, for −$7 per share (given K1 = 100, K2 = 95, K3 = 90).

11. {#bk6} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - −$2
   - +$3
   - +$1
   - [x] +$2
   > At $87 the legs are worth +$2 per share before the premium, and the net premium adds $0, for +$2 per share (given K1 = 100, K2 = 95, K3 = 90).

12. {#bk7} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. At expiration the stock is at $90. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - +$30
   - [x] +$3,000
   - +$500
   - −$3,000
   > Per share the position makes +$5 at $90. For 6 contracts: +$5 × 100 × 6 = +$3,000.

13. {#bk8} [calc] A trader builds a Bear Put Ladder: buys one $100 put, sells one $95 put, and sells one $90 put, for no net premium. What is the ratio of maximum profit to maximum loss?
   - [x] 0.06 to 1
   - 17 to 1
   - 5 to 1
   - 85 to 1
   > Maximum profit is $5 and maximum loss is $85 per share, so the ratio is $5 / $85 = 0.06 to 1.
