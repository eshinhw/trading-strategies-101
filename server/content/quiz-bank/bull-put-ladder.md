---
slug: bull-put-ladder
---

# Quiz

1. {#q1} When is a bull put ladder typically used?
   - As a first trade when the trader is very bullish and wants to collect as much premium as possible up front
   - When the trader expects no movement in the stock and wants to collect time decay from all of the options
   - To collect the maximum possible premium from a stock that is expected to rise sharply over the next month
   - [x] As an adjustment when a bull put spread's bullish view fails and the stock breaks down
   > It converts a failing bullish position into one that can benefit from more weakness.

2. {#q2} What does buying the extra lower-strike put do?
   - [x] It flips the exposure so the position gains if the decline continues
   - It raises the original credit, because the extra put adds premium on top of the amount already received
   - It removes all risk from the position
   - It makes the position bullish again, because the extra put gains value whenever the stock rises
   > The extra long put profits as the stock keeps falling.

3. {#q3} How is a bull put ladder built?
   - Start from a bear call spread and sell another call
   - [x] Start from a bull put spread and buy another put at an even lower strike, same expiration
   - Sell two puts at the same strike and buy one put at a lower strike, so that the position is net short puts
   - Buy a call at a higher strike and sell a put at a lower strike, so that the position behaves like owning
   > It is an add-on to an existing bull put spread.

4. {#q4} When a trader turns a losing bull put spread into a bull put ladder by buying an extra lower-strike put, what does that adjustment let them avoid?
   - Paying any additional premium, because the adjustment is always free and adds no cost to the position
   - Taking any further risk, because the extra put removes every remaining chance of losing money
   - [x] Closing everything and starting fresh, while turning a losing bullish trade into one that benefits from further weakness
   - Having to hold the position to expiration, because the adjustment closes the trade for a fixed result
   > It reshapes the existing position rather than replacing it.

5. {#calc1} [calc] A bull put ladder sells a 100 put and buys a 95 put and a 90 put, for no net premium. What is the payoff per share if the stock ends at 80?
   - −$5
   - +$20
   - [x] +$5
   - $0
   > The short 100 put costs 20, while the long 95 put pays 15 and the long 90 put pays 10: −20 + 15 + 10 = +5.

6. {#bk1} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum loss at expiration, per share?
   - $10
   - $85
   - [x] $5
   - $100
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum loss is $5 per share. Formula: L_max = K1 - K2 - netCF.

7. {#bk2} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum profit at expiration, per share?
   - [x] $85
   - $100
   - $10
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum profit is $85 per share. Formula: P_max = K3 + K2 - K1 + netCF.

8. {#bk3} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the lower break-even stock price at expiration, per share?
   - $100
   - $10
   - [x] $85
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the lower break-even stock price is $85 per share. Formula: S*_up = K1 + netCF; S*_down = K3 + K2 - K1 - netCF.

9. {#bk4} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $40
   - [x] $4,000
   - $500
   - $4,500
   > The maximum loss is $5 per share. One contract covers 100 shares, so 8 contracts give $5 × 100 × 8 = $4,000.

10. {#bk5} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - +$8
   - +$6
   - [x] +$7
   > At $78 the legs are worth +$7 per share before the premium, and the net premium adds $0, for +$7 per share (given K1 = 100, K2 = 95, K3 = 90).

11. {#bk6} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - +$2
   - [x] −$2
   - −$1
   - −$3
   > At $87 the legs are worth −$2 per share before the premium, and the net premium adds $0, for −$2 per share (given K1 = 100, K2 = 95, K3 = 90).

12. {#bk7} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. At expiration the stock is at $90. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - −$35
   - −$500
   - +$3,500
   - [x] −$3,500
   > Per share the position makes −$5 at $90. For 7 contracts: −$5 × 100 × 7 = −$3,500.

13. {#bk8} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the ratio of maximum profit to maximum loss?
   - 0.06 to 1
   - 85 to 1
   - [x] 17 to 1
   - 5 to 1
   > Maximum profit is $85 and maximum loss is $5 per share, so the ratio is $85 / $5 = 17 to 1.
