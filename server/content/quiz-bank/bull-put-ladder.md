---
slug: bull-put-ladder
---

# Quiz

1. {#bk1} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum loss at expiration, per share?
   - $10
   - $85
   - [x] $5
   - $100
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum loss is $5 per share. Formula: L_max = K1 - K2 - netCF.

2. {#bk2} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum profit at expiration, per share?
   - [x] $85
   - $100
   - $10
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the maximum profit is $85 per share. Formula: P_max = K3 + K2 - K1 + netCF.

3. {#bk3} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the lower break-even stock price at expiration, per share?
   - $100
   - $10
   - [x] $85
   - $5
   > For this position (K1 = 100, K2 = 95, K3 = 90), the lower break-even stock price is $85 per share. Formula: S*_up = K1 + netCF; S*_down = K3 + K2 - K1 - netCF.

4. {#bk4} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $40
   - [x] $4,000
   - $500
   - $4,500
   > The maximum loss is $5 per share. One contract covers 100 shares, so 8 contracts give $5 × 100 × 8 = $4,000.

5. {#bk5} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - +$8
   - +$6
   - [x] +$7
   > At $78 the legs are worth +$7 per share before the premium, and the net premium adds $0, for +$7 per share (given K1 = 100, K2 = 95, K3 = 90).

6. {#bk6} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - +$2
   - [x] −$2
   - −$1
   - −$3
   > At $87 the legs are worth −$2 per share before the premium, and the net premium adds $0, for −$2 per share (given K1 = 100, K2 = 95, K3 = 90).

7. {#bk7} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. At expiration the stock is at $90. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - −$35
   - −$500
   - +$3,500
   - [x] −$3,500
   > Per share the position makes −$5 at $90. For 7 contracts: −$5 × 100 × 7 = −$3,500.

8. {#bk8} [calc] A trader builds a Bull Put Ladder: sells one $100 put, buys one $95 put, and buys one $90 put, for no net premium. What is the ratio of maximum profit to maximum loss?
   - 0.06 to 1
   - 85 to 1
   - [x] 17 to 1
   - 5 to 1
   > Maximum profit is $85 and maximum loss is $5 per share, so the ratio is $85 / $5 = 17 to 1.
