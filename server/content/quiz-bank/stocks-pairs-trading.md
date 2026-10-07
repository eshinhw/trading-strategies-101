---
slug: stocks-pairs-trading
---

# Quiz

1. {#q1} What is the core mechanic of a pairs trade?
   - Buying two unrelated stocks at random
   - [x] Shorting the outperforming stock in a historically correlated pair and buying the underperforming one, betting their spread converges
   - Buying only the single best-performing stock in an industry
   - Always holding both stocks long, never shorting either
   > A pairs trade bets on convergence in the relative price relationship between two historically correlated stocks, going long the relative laggard and short the relative leader.

2. {#q2} Why is pairs trading described as largely "market-neutral"?
   - It never involves any risk
   - [x] Being simultaneously long one stock and short a related one cancels out much of the shared exposure to overall market moves
   - It only trades stocks that never move
   - It requires no capital to implement
   > Since both legs tend to move together with the broad market, a roughly balanced long/short pair largely cancels that common market exposure, isolating a bet on the relative performance between the two names.

3. {#q3} What statistical property do traders typically look for when selecting a pair?
   - The two stocks should have completely uncorrelated prices
   - [x] A historically tight, stable relationship between the two prices, often measured via cointegration or high stable correlation
   - The two companies must be headquartered in the same city
   - Both stocks must have identical share prices
   > A workable pair needs a historically reliable price relationship — the tighter and more stable that relationship, the more confidently a trader can expect a divergence to revert.

4. {#q4} How do traders typically decide when a pair's spread has diverged enough to trade?
   - Whenever either stock's price changes at all
   - [x] When the spread moves further from its historical average than usual, often measured in standard deviations
   - Only on the first trading day of each month
   - Spread divergence is never measured quantitatively
   > Traders typically define the spread's normal range statistically, often in standard deviations from its historical average, and trade when the current divergence exceeds that threshold.

5. {#q5} What is the central risk in pairs trading?
   - The market rising too quickly
   - [x] The historical relationship between the two stocks breaking down permanently instead of reverting
   - Both stocks becoming perfectly correlated
   - There is no real risk once a pair is correctly identified
   > If a merger, company-specific event, or structural shift permanently changes one company's business, the historical relationship may never revert — the spread can widen indefinitely instead of converging, losing money on both legs.

6. {#calc1} [calc] A pair's spread averages $4.00 with a standard deviation of $0.50, and today it is $5.25. What is the z-score, and what does the strategy do?
   - [x] 2.5, so it shorts the outperformer and buys the laggard
   - 1.25, so it does nothing
   - 2.5, so it buys the outperformer and shorts the laggard
   - 0.25, so it does nothing
   > The z-score is ($5.25 − $4.00) / $0.50 = 2.5. A spread this wide is expected to narrow, so the trader sells the stock that has run up and buys the one that has lagged.

7. {#calc2} [calc] A dollar-neutral pair trade puts $40,000 on each side. Stock A trades at $80 and stock B at $50. How many shares of each does the trader trade?
   - 500 shares of A and 500 shares of B
   - 800 shares of A and 500 shares of B
   - [x] 500 shares of A and 800 shares of B
   - 40,000 shares of A and 40,000 shares of B
   > $40,000 / $80 = 500 shares of A, and $40,000 / $50 = 800 shares of B, so each side is worth $40,000.

8. {#bk1} [calc] A pair's price spread has a long-run average of $4.00 and a standard deviation of $0.50. Today the spread is $5.25. What is the z-score?
   - [x] 2.5
   - 1.25
   - 0.5
   - −2.5
   > z = (current spread − mean) / standard deviation = ($5.25 − $4.00) / $0.50 = 2.5. A trader would short the expensive leg and buy the cheap one.

9. {#bk2} [calc] A pairs trader is long $50,000 of Stock A and the regression hedge ratio of A on B is 1.2. Stock B trades at $80. How many shares of B should be sold short?
   - 625
   - 520
   - [x] 750
   - 1,000
   > The dollar hedge is 1.2 × $50,000 = $60,000. At $80 per share that is 750 shares.

10. {#bk3} [calc] Stock A trades at $80 and Stock B at $60. Historically A has traded at 1.25 times B. How far is A above its usual relationship, in dollars?
   - [x] $5
   - $20
   - $0
   - $15
   > The usual price of A is 1.25 × $60 = $75. A is $80 − $75 = $5 above it.

11. {#bk4} [calc] A pairs trader shorts 1,000 shares of A at $80 and buys 1,333 shares of B at $60 (about the same dollar amount). A falls to $76 and B is unchanged. What is the profit?
   - $4,000 on A and a further $4,000 on B
   - $1,333
   - $0
   - [x] $4,000
   > B is unchanged, so the profit is all on the short: ($80 − $76) × 1,000 = $4,000.

12. {#bk5} [calc] A pair's spread has a historical mean of 0 and a standard deviation of $2. The trader enters when the spread is more than 2 standard deviations away. At what spread level does a trade open?
   - Beyond ±$2
   - [x] Beyond ±$4
   - Beyond ±$1
   - Beyond ±$8
   > 2 standard deviations = 2 × $2 = $4, so a trade opens when the spread exceeds +$4 or falls below −$4.

13. {#bk6} Why is a pairs trade considered largely market-neutral?
   - It holds no stock positions
   - It invests only in index funds
   - It guarantees a profit in every market
   - [x] It is long one stock and short a similar-sized position in a closely related one, so common market moves cancel out
   > If the whole market moves, both legs move together and most of the common movement offsets.

14. {#bk7} What is the central risk of a pairs trade?
   - The two stocks move too closely together
   - [x] The relationship between the two stocks breaks down permanently instead of reverting
   - The market always rises
   - The trade has no short position
   > A merger, company-specific event or structural change can mean the spread never closes.
