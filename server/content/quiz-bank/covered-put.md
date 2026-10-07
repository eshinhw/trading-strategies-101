---
slug: covered-put
---

# Quiz

1. {#q1} Which investor fits a covered put?
   - Someone who owns the stock and expects it to soar
   - Someone who expects the stock to rise sharply and wants to sell a put to profit from that move
   - Someone who expects a very large crash and wants unlimited profit from the decline in the shares
   - [x] Someone who is short the stock and expects it to stay flat or drift only modestly lower
   > A covered put is the bearish mirror image of a covered call.

2. {#q2} What is the trade-off of selling a put against a short stock position?
   - [x] Premium income offsets small rises against the short, but profit is capped if the stock plunges
   - Profit is unlimited if the stock falls
   - The loss is limited if the stock rises, because the put premium covers any increase in the price
   - There is no real trade-off, since the premium collected removes all of the risk of the short stock
   > Being obligated to buy back stock at the strike limits how much a decline can help.

3. {#q3} How is a covered put built?
   - Buy 100 shares and sell one call per 100 shares, so that the shares are covered against a rally
   - [x] Short 100 shares and sell one out-of-the-money put per 100 shares shorted
   - Short 100 shares and buy one call per 100 shares, so that any rally in the stock is fully insured
   - Sell one put for every 100 shares of stock the investor neither owns nor has shorted in the account
   > The short stock is what 'covers' the short put.

4. {#q4} An investor shorts shares at 100 and sells a 95 put for 3. The stock drops to 85. What happens?
   - The investor earns the full decline to 85 on the short shares, because the put expires worthless
   - The put expires worthless and the investor keeps the shares, with the whole decline to 85 in hand
   - [x] The put is assigned and the investor buys shares at 95, so the gain is capped even though the stock fell further
   - The investor loses the premium, because the put was exercised in the investor's favor at 95
   > The short put obligation caps the profit at the strike, plus the premium.

5. {#calc1} [calc] A trader builds a Covered Put: is short the stock, sold at $100 and sells one $95 put, with a net option premium of $3 received. What is the break-even stock price at expiration, per share?
   - [x] $103
   - $100
   - $8
   - $3
   > For this position (S0 = 100, K = 95, net credit = 3), the break-even stock price is $103 per share. Formula: S* = S0 + C.

6. {#bk1} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. What is the maximum profit at expiration, per share?
   - $3
   - $103
   - [x] $8
   - $9
   > For this position (S0 = 100, K = 95, net credit = 3), the maximum profit is $8 per share. Formula: P_max = S0 - K + C.

7. {#bk2} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. At expiration the stock is at $101. What is the trader's profit or loss per share, counting the premium?
   - [x] +$2
   - −$2
   - −$1
   - +$8
   > At $101 the option legs are worth −$1 per share before the premium, and the net premium adds +$3, for +$2 per share (given S0 = 100, K = 95, net credit = 3).

8. {#bk3} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. At expiration the stock is at $108. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - −$8
   - [x] −$5
   - +$1
   > At $108 the option legs are worth −$8 per share before the premium, and the net premium adds +$3, for −$5 per share (given S0 = 100, K = 95, net credit = 3).

9. {#bk4} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $64
   - [x] $6,400
   - $800
   - $7,200
   > The maximum profit is $8 per share. One contract covers 100 shares, so 8 contracts give $8 × 100 × 8 = $6,400.

10. {#bk5} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - −$8
   - +$5
   - +$14
   - [x] +$8
   > At $83 the legs are worth +$5 per share before the premium, and the net premium adds +$3, for +$8 per share (given S0 = 100, K = 95, net credit = 3).

11. {#bk6} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. The stock is at $92 at expiration. What is the profit or loss per share, counting the premium?
   - −$8
   - [x] +$8
   - +$5
   - +$14
   > At $92 the legs are worth +$5 per share before the premium, and the net premium adds +$3, for +$8 per share (given S0 = 100, K = 95, net credit = 3).

12. {#bk7} [calc] A trader builds a Covered Put: is short the stock, sold at $100, and sells one $95 put, with a net option premium of $3 received. At expiration the stock is at $95. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - +$56
   - +$800
   - −$5,600
   - [x] +$5,600
   > Per share the position makes +$8 at $95. For 7 contracts: +$8 × 100 × 7 = +$5,600.
