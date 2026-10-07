---
slug: modified-call-butterfly
---

# Quiz

1. {#q1} How does a modified call butterfly differ from a plain butterfly?
   - The strikes are identical, so the position is just a regular butterfly with a slightly lower cost to enter
   - It uses puts instead of calls, which turns the bullish lean into a bearish lean on the middle strike
   - It profits from large moves instead of small ones, because the uneven wings gain value if the stock moves
   - [x] The strikes are spaced unevenly, which skews the profit zone toward a modest rally
   > Uneven spacing shifts where the profit zone sits.

2. {#q2} What view does a modified call butterfly express?
   - [x] The stock will settle near the middle strike, with a bullish lean and a limited move
   - A large move in either direction
   - A steep decline, because the narrower wing on one side makes the position gain value as the stock falls
   - A very large rally, because the wider wing on one side lets the position gain value without any limit
   > It keeps the pinned-outcome logic with extra room on the bullish side.

3. {#q3} How is a modified call butterfly built?
   - Buy 2 calls at the target and sell the wings, one well below the target and one only slightly above it
   - [x] Buy a call well below the target, sell 2 calls at the target, and buy a call only slightly above it
   - Sell a call below the target and buy 2 at the target
   - Buy calls and puts at the same strike, then sell a wing on one side to skew the position toward a rally
   > The wings are different distances from the body.

4. {#q4} Where does the sweet spot of a modified call butterfly sit?
   - Far above the highest strike, where the long calls have gained the most and the short calls have lost the most
   - Below the lowest strike, where all of the calls expire worthless and the premium paid is kept by the trader
   - [x] Skewed toward the moderate-rally side of the middle strike
   - Exactly at the current price only
   > The uneven spacing leans the profit zone toward the bullish side.

5. {#calc1} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the break-even stock price at expiration, per share?
   - $20
   - $12
   - $3
   - [x] $88
   > For this position (K3 = 85, K2 = 100, K1 = 105, net debit = 3), the break-even stock price is $88 per share. Formula: S* = K3 + D.

6. {#bk1} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $12
   - $20
   - [x] $3
   - $88
   > For this position (K3 = 85, K2 = 100, K1 = 105, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $12
   - $20
   - $3
   - $88
   > For this position (K3 = 85, K2 = 100, K1 = 105, net debit = 3), the maximum profit is $12 per share. Formula: P_max = K2 - K3 - D.

8. {#bk3} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - −$7
   - +$10
   - [x] +$7
   - +$13
   > At $113 the option legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K3 = 85, K2 = 100, K1 = 105, net debit = 3).

9. {#bk4} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the maximum profit on 5 contracts (100 shares each), in dollars?
   - $60
   - [x] $6,000
   - $1,200
   - $7,200
   > The maximum profit is $12 per share. One contract covers 100 shares, so 5 contracts give $12 × 100 × 5 = $6,000.

10. {#bk5} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$12
   - +$15
   - +$18
   - [x] +$12
   > At $100 the legs are worth +$15 per share before the premium, and the net premium adds −$3, for +$12 per share (given K3 = 85, K2 = 100, K1 = 105, net debit = 3).

11. {#bk6} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. The stock is at $105 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$10
   - +$13
   > At $105 the legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K3 = 85, K2 = 100, K1 = 105, net debit = 3).

12. {#bk7} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. At expiration the stock is at $108. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - +$21
   - +$700
   - −$2,100
   - [x] +$2,100
   > Per share the position makes +$7 at $108. For 3 contracts: +$7 × 100 × 3 = +$2,100.

13. {#bk8} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 2 contracts (100 shares each)?
   - $6
   - $300
   - [x] $600
   - $900
   > The net debit is $3 per share. For 2 contracts: $3 × 100 × 2 = $600.

14. {#bk9} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 4 to 1
   - 0.25 to 1
   - 12 to 1
   - 3 to 1
   > Maximum profit is $12 and maximum loss is $3 per share, so the ratio is $12 / $3 = 4 to 1.
