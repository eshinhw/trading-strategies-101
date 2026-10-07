---
slug: protective-put
---

# Quiz

1. {#q1} When is a protective put most useful?
   - You expect the stock to stay completely flat and want to collect additional premium income on shares
   - You want to profit from a large fall in the stock and don't own any shares today
   - [x] You are bullish long term but worried about a near-term drop, such as ahead of earnings
   - You want to earn regular income from a stock you hold and are comfortable selling it at a higher price
   > It works as insurance on a position you want to keep.

2. {#q2} How does a protective put act like insurance?
   - It pays you income every month from the shares, so the insurance cost is covered by the premium itself
   - It eliminates the cost of owning the stock, since the put premium is returned if the shares don't fall
   - It caps your gains at the strike price, so you can never lose money but also cannot profit above it
   - [x] It lets you sell at the strike no matter how far the stock falls, for a premium, while upside stays uncapped
   > The premium is the cost of protection, and it is the most the hedge can cost you.

3. {#q3} How should the strike of a protective put be chosen?
   - [x] Based on how much downside you are willing to tolerate before the insurance kicks in
   - Always as far in the money as possible, because the more intrinsic value the put has, the safer it is
   - Always far below any plausible price, since the cheapest put is also the one that protects the best
   - It makes no difference, because every put gives the same protection regardless of the strike price
   > A higher strike protects more but costs more, and a lower strike costs less but covers less.

4. {#q4} You own shares at 100 and bought a 95 put for 3. The stock jumps to 120. What should you do?
   - Exercise the put to lock in the gain
   - [x] Let the put expire and keep the gain minus the 3 you paid
   - Sell more shares to cover the put, because the put must be funded if the stock moves up sharply
   - Nothing, because the put forces the shares to be sold at 95 when the option expires at the end
   > A protective put keeps unlimited upside; the premium is the only cost.

5. {#calc1} [calc] A trader builds a Protective Put: owns the stock, bought at $100 and buys one $95 put, with a net option premium of $3 paid. What is the maximum loss at expiration, per share?
   - $3
   - [x] $8
   - $100
   - $103
   > For this position (S0 = 100, K = 95, net debit = 3), the maximum loss is $8 per share. Formula: L_max = S0 - K + D.

6. {#bk1} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. What is the break-even stock price at expiration, per share?
   - $8
   - $3
   - $104
   - [x] $103
   > For this position (S0 = 100, K = 95, net debit = 3), the break-even stock price is $103 per share. Formula: S* = S0 + D.

7. {#bk2} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. At expiration the stock is at $87. What is the trader's profit or loss per share, counting the premium?
   - +$8
   - [x] −$8
   - −$5
   - −$2
   > At $87 the option legs are worth −$5 per share before the premium, and the net premium adds −$3, for −$8 per share (given S0 = 100, K = 95, net debit = 3).

8. {#bk3} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. At expiration the stock is at $101. What is the trader's profit or loss per share, counting the premium?
   - +$2
   - +$1
   - +$4
   - [x] −$2
   > At $101 the option legs are worth +$1 per share before the premium, and the net premium adds −$3, for −$2 per share (given S0 = 100, K = 95, net debit = 3).

9. {#bk4} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. What is the maximum loss on 4 contracts (100 shares each), in dollars?
   - [x] $3,200
   - $32
   - $800
   - $4,000
   > The maximum loss is $8 per share. One contract covers 100 shares, so 4 contracts give $8 × 100 × 4 = $3,200.

10. {#bk5} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. The stock is at $112 at expiration. What is the profit or loss per share, counting the premium?
   - −$9
   - +$12
   - [x] +$9
   - +$15
   > At $112 the legs are worth +$12 per share before the premium, and the net premium adds −$3, for +$9 per share (given S0 = 100, K = 95, net debit = 3).

11. {#bk6} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$8
   - +$8
   - −$5
   - −$2
   > At $83 the legs are worth −$5 per share before the premium, and the net premium adds −$3, for −$8 per share (given S0 = 100, K = 95, net debit = 3).

12. {#bk7} [calc] A trader builds a Protective Put: owns the stock, bought at $100, and buys one $95 put, with a net option premium of $3 paid. At expiration the stock is at $92. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - −$48
   - −$800
   - [x] −$4,800
   - +$4,800
   > Per share the position makes −$8 at $92. For 6 contracts: −$8 × 100 × 6 = −$4,800.
