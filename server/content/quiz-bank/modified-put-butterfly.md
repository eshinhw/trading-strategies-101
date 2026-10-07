---
slug: modified-put-butterfly
---

# Quiz

1. {#q1} How does a modified put butterfly differ from a plain put butterfly?
   - The strikes are identical, so the position is a regular put butterfly that always costs a little more to enter
   - It uses calls instead of puts, which turns the bullish lean into a bearish lean around the middle strike
   - [x] The strikes are spaced unevenly, which can turn it into a small net credit and tilts the payoff toward a bullish outcome
   - It always costs more than a plain butterfly, since the uneven wings add extra premium to the structure
   > Uneven spacing changes both the cost and the shape of the profit zone.

2. {#q2} What view does a modified put butterfly express?
   - The stock will make a very large move in either direction, so the outer puts gain a great deal of value
   - The stock will collapse far below every strike, so that all of the puts finish with their full value
   - The stock will rise far above all strikes
   - [x] The stock will settle near the middle strike, with a bullish lean
   > It keeps the pinned-outcome idea with a bullish skew.

3. {#q3} How is a modified put butterfly built?
   - [x] Buy a put well below the target, sell 2 puts at the target, and buy a put only slightly above it
   - Buy 2 puts at the target and sell the wings, one well below the target and one only slightly above it
   - Sell a put below the target and buy 2 at the target
   - Buy puts and calls at the same strike, then sell a wing on one side to skew the position toward a rise
   > The wings are different distances from the body, ideally producing a net credit.

4. {#q4} Where does the position profit?
   - Only if the stock rises sharply, because the narrower wing on one side makes the position gain from a rally
   - [x] When the stock lands at or below the middle strike, but not too far below the lowest strike
   - Only if the stock collapses far below every strike, since the long puts then finish with their full value
   - Only if the stock finishes above the highest strike, where all of the puts expire worthless for the trader
   > A large move either way limits the gain or turns it into a loss.

5. {#calc1} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the maximum profit at expiration, per share?
   - [x] $6
   - $9
   - $1
   - $20
   > For this position (K1 = 85, K2 = 100, K3 = 105, net credit = 1), the maximum profit is $6 per share. Formula: P_max = K3 - K2 - H.

6. {#bk1} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the maximum loss at expiration, per share?
   - $6
   - [x] $9
   - $1
   - $20
   > For this position (K1 = 85, K2 = 100, K3 = 105, net credit = 1), the maximum loss is $9 per share. Formula: L_max = 2K2 - K1 - K3 + H.

7. {#bk2} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the break-even stock price at expiration, per share?
   - $20
   - $9
   - $6
   - [x] $94
   > For this position (K1 = 85, K2 = 100, K3 = 105, net credit = 1), the break-even stock price is $94 per share. Formula: S*_down = 2K2 - K3 + H.

8. {#bk3} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - −$1
   - [x] +$1
   - +$3
   - +$2
   > At $113 the option legs are worth $0 per share before the premium, and the net premium adds +$1, for +$1 per share (given K1 = 85, K2 = 100, K3 = 105, net credit = 1).

9. {#bk4} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. At expiration the stock is at $77. What is the trader's profit or loss per share, counting the premium?
   - +$9
   - −$10
   - [x] −$9
   - −$7
   > At $77 the option legs are worth −$10 per share before the premium, and the net premium adds +$1, for −$9 per share (given K1 = 85, K2 = 100, K3 = 105, net credit = 1).

10. {#bk5} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the maximum profit on 5 contracts (100 shares each), in dollars?
   - [x] $3,000
   - $30
   - $600
   - $3,600
   > The maximum profit is $6 per share. One contract covers 100 shares, so 5 contracts give $6 × 100 × 5 = $3,000.

11. {#bk6} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. The stock is at $73 at expiration. What is the profit or loss per share, counting the premium?
   - +$9
   - −$10
   - [x] −$9
   - −$7
   > At $73 the legs are worth −$10 per share before the premium, and the net premium adds +$1, for −$9 per share (given K1 = 85, K2 = 100, K3 = 105, net credit = 1).

12. {#bk7} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. The stock is at $82 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$9
   - +$9
   - −$10
   - −$7
   > At $82 the legs are worth −$10 per share before the premium, and the net premium adds +$1, for −$9 per share (given K1 = 85, K2 = 100, K3 = 105, net credit = 1).

13. {#bk8} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. At expiration the stock is at $85. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - −$45
   - [x] −$4,500
   - −$900
   - +$4,500
   > Per share the position makes −$9 at $85. For 5 contracts: −$9 × 100 × 5 = −$4,500.

14. {#bk9} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. How much cash is received up front in total if the trader opens 10 contracts (100 shares each)?
   - $10
   - $100
   - $1,100
   - [x] $1,000
   > The net credit is $1 per share. For 10 contracts: $1 × 100 × 10 = $1,000.

15. {#bk10} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 0.67 to 1
   - 1.5 to 1
   - 6 to 1
   - 9 to 1
   > Maximum profit is $6 and maximum loss is $9 per share, so the ratio is $6 / $9 = 0.67 to 1.
