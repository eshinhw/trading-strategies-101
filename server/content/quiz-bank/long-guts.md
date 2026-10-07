---
slug: long-guts
---

# Quiz

1. {#q1} What distinguishes a long guts position from a long strangle?
   - Both options start out of the money, so it costs much less and has no intrinsic value from the first day
   - [x] Both options start in the money, so it holds real intrinsic value from day one but costs much more
   - It uses the same strike for both options, so it is identical to a straddle but costs somewhat more
   - It collects a premium instead of paying one
   > Guts uses in-the-money options, unlike a strangle's out-of-the-money options.

2. {#q2} Why does a long guts position need an even larger move to profit?
   - Because it has no intrinsic value
   - Because the options expire sooner than those of a straddle, leaving less time for the move to happen
   - [x] Because it costs substantially more than an equivalent straddle
   - Because it is a credit trade, so the premium collected must be repaid before any profit can be made
   > The higher cost raises the breakevens.

3. {#q3} How is a long guts position built?
   - Sell an in-the-money call and put with different strikes that straddle the current price, collecting a credit
   - Buy a call and a put at the same out-of-the-money strike, which costs far less than a straddle does
   - Buy a call and sell a put at different strikes that straddle the current price, to finance the position
   - [x] Buy an in-the-money call and an in-the-money put with different strikes that straddle the current price
   > The call strike is below the price and the put strike is above it.

4. {#q4} Why is long guts a less common choice?
   - [x] It is a higher-cost variation that mostly makes sense when in-the-money options happen to be priced favorably
   - It is prohibited by exchanges, since in-the-money options on both sides cannot legally be bought together
   - It has unlimited risk, so only experienced traders with large accounts are allowed to place the trade
   - It only works on index options, because single stocks do not offer strikes on both sides of the price
   > A straddle or strangle is usually cheaper for the same view.

5. {#calc1} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - $14
   - $10
   - [x] $91
   > For this position (K1 = 95, K2 = 105, net debit = 14), the lower break-even stock price is $91 per share. Formula: S*_up = K1 + D; S*_down = K2 - D.

6. {#bk1} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. What is the maximum loss at expiration, per share?
   - $10
   - [x] $4
   - $14
   - $91
   > For this position (K1 = 95, K2 = 105, net debit = 14), the maximum loss is $4 per share. Formula: L_max = D - (K2 - K1).

7. {#bk2} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. What is the upper break-even stock price at expiration, per share?
   - $91
   - $14
   - $10
   - [x] $109
   > For this position (K1 = 95, K2 = 105, net debit = 14), the upper break-even stock price is $109 per share. Formula: S*_up = K1 + D; S*_down = K2 - D.

8. {#bk3} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$4
   - [x] −$4
   - +$10
   - +$24
   > At $103 the option legs are worth +$10 per share before the premium, and the net premium adds −$14, for −$4 per share (given K1 = 95, K2 = 105, net debit = 14).

9. {#bk4} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - −$4
   - +$18
   - [x] +$4
   - +$32
   > At $113 the option legs are worth +$18 per share before the premium, and the net premium adds −$14, for +$4 per share (given K1 = 95, K2 = 105, net debit = 14).

10. {#bk5} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. What is the maximum loss on 4 contracts (100 shares each), in dollars?
   - [x] $1,600
   - $16
   - $400
   - $2,000
   > The maximum loss is $4 per share. One contract covers 100 shares, so 4 contracts give $4 × 100 × 4 = $1,600.

11. {#bk6} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - +$4
   - +$10
   - [x] −$4
   - +$24
   > At $100 the legs are worth +$10 per share before the premium, and the net premium adds −$14, for −$4 per share (given K1 = 95, K2 = 105, net debit = 14).

12. {#bk7} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$4
   - +$4
   - +$10
   - +$24
   > At $101 the legs are worth +$10 per share before the premium, and the net premium adds −$14, for −$4 per share (given K1 = 95, K2 = 105, net debit = 14).

13. {#bk8} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. At expiration the stock is at $105. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$8
   - [x] −$800
   - −$400
   - +$800
   > Per share the position makes −$4 at $105. For 2 contracts: −$4 × 100 × 2 = −$800.

14. {#bk9} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. How much cash is paid up front in total if the trader opens 8 contracts (100 shares each)?
   - $112
   - $1,400
   - $12,600
   - [x] $11,200
   > The net debit is $14 per share. For 8 contracts: $14 × 100 × 8 = $11,200.
