---
slug: long-put-synthetic-straddle
---

# Quiz

1. {#q1} Why would a trader build a straddle from long stock plus puts?
   - Because it has lower risk than a straddle, since the long stock position offsets the cost of the puts
   - Because it has a different profit shape than a straddle, which better suits a trader with a bearish view
   - Because puts always cost less than calls, so building the position this way is always the cheaper choice
   - [x] They may already hold the shares and prefer to add puts rather than unwind the stock to build a straddle from scratch
   > The payoff matches a long straddle using an existing stock position.

2. {#q2} What market view does a long put synthetic straddle express?
   - [x] A big move in either direction, the same as a long straddle
   - The stock will stay in a narrow range
   - The stock will only rise, since the shares gain value and the two puts are held only as cheap insurance
   - The stock will only fall, since the two puts gain value and the shares lose very little in return
   > Long stock plus two long puts profits from a large move either way.

3. {#q3} How is a long put synthetic straddle built?
   - Short 100 shares and buy 2 calls
   - [x] Buy or hold 100 shares of stock and buy 2 at-the-money puts at the same strike
   - Buy 100 shares of stock and sell 2 at-the-money puts at the same strike, collecting the premium
   - Short 100 shares of stock and sell 2 at-the-money puts at the same strike, so the short is covered
   > Two puts against long stock replicate a call plus a put.

4. {#q4} The stock jumps sharply higher. What happens to this position?
   - The position loses the premium and the stock, since the puts expire worthless while the shares rise
   - The puts offset the shares and the position breaks even
   - [x] The shares gain while the puts expire worthless, so it still profits
   - The position is assigned shares, because the puts finish in the money when the stock rises sharply
   > A large rally is profitable thanks to the long stock.

5. {#calc1} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100 and buys two $100 puts, with a net option premium of $8 paid. What is the lower break-even stock price at expiration, per share?
   - $100
   - [x] $92
   - $108
   - $8
   > For this position (S0 = 100, K = 100, net debit = 8), the lower break-even stock price is $92 per share. Formula: S*_up = S0 + D; S*_down = 2K - S0 - D.

6. {#bk1} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the maximum loss at expiration, per share?
   - $92
   - $108
   - [x] $8
   - $9
   > For this position (S0 = 100, K = 100, net debit = 8), the maximum loss is $8 per share. Formula: L_max = D - (K - S0).

7. {#bk2} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the upper break-even stock price at expiration, per share?
   - [x] $108
   - $92
   - $8
   - $109
   > For this position (S0 = 100, K = 100, net debit = 8), the upper break-even stock price is $108 per share. Formula: S*_up = S0 + D; S*_down = 2K - S0 - D.

8. {#bk3} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - +$3
   - [x] −$5
   - +$11
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds −$8, for −$5 per share (given S0 = 100, K = 100, net debit = 8).

9. {#bk4} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $64
   - [x] $6,400
   - $800
   - $7,200
   > The maximum loss is $8 per share. One contract covers 100 shares, so 8 contracts give $8 × 100 × 8 = $6,400.

10. {#bk5} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - +$8
   - −$7
   - −$9
   - [x] −$8
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds −$8, for −$8 per share (given S0 = 100, K = 100, net debit = 8).

11. {#bk6} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$7
   - [x] −$7
   - +$1
   - +$9
   > At $101 the legs are worth +$1 per share before the premium, and the net premium adds −$8, for −$7 per share (given S0 = 100, K = 100, net debit = 8).

12. {#bk7} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. At expiration the stock is at $103. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - −$30
   - −$500
   - +$3,000
   - [x] −$3,000
   > Per share the position makes −$5 at $103. For 6 contracts: −$5 × 100 × 6 = −$3,000.
