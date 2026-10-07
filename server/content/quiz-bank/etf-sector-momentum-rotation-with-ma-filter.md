---
slug: etf-sector-momentum-rotation-with-ma-filter
---

# Quiz

1. {#q1} What problem does adding a moving-average filter address in a sector rotation strategy?
   - The fact that plain momentum rotation is too slow to compute
   - [x] The fact that plain momentum rotation always invests in the "leading" sector even when that sector is itself falling
   - The fact that ETFs cannot be shorted
   - The fact that sector ETFs have no trading volume
   > A sector can be the relative leader, the least bad of a falling group, while still being in an absolute downtrend — the MA filter checks for genuine absolute strength before committing capital.

2. {#q2} What does the moving-average filter check before the strategy invests in the top-ranked sector?
   - The sector ETF's dividend yield
   - [x] Whether that sector ETF's own price is above its moving average
   - The number of stocks held within the sector ETF
   - The sector's historical volatility only
   > The filter requires the top-ranked sector to also be in an absolute uptrend (price above its own moving average) before the strategy takes a position in it.

3. {#q3} What does the strategy do if the top-ranked sector fails the moving-average filter?
   - It shorts that sector aggressively
   - [x] It holds cash (or a safe asset) instead of investing in that sector
   - It invests double the normal amount in that sector
   - It ignores the filter and invests anyway
   > If even the relatively strongest sector is in an absolute downtrend, the strategy steps aside into cash rather than forcing an investment.

4. {#q4} What is the main benefit of adding the MA filter during broad market downturns?
   - It guarantees the strategy never loses money
   - [x] It lets the strategy step aside into cash when even the leading sector fails its own trend test, reducing drawdowns during systemic selloffs
   - It has no effect during downturns
   - It forces the strategy to double its sector exposure
   > Without the filter, the strategy is always forced into the "least bad" sector during a broad downturn; the filter allows it to avoid that sector entirely when it's also trending down.

5. {#q5} What is the main tradeoff of adding the MA filter?
   - There is no tradeoff — it is strictly better in every scenario
   - [x] The strategy can sit in cash more often during choppy, range-bound periods, missing some gains a fully-invested strategy would capture
   - It eliminates all trading costs entirely
   - It requires holding twice as many sector ETFs
   > Since the filter can flip on and off as price oscillates around the moving average, the strategy may miss some modest gains during choppy periods in exchange for the downside protection it provides during real downturns.

6. {#calc1} [calc] The top-ranked sector ETF trades at $82, and its 200-day moving average is $85. How far is it from the average, and what does the filtered strategy hold?
   - About 3.5% below, so it still buys the sector
   - About 3.7% above, so it buys the sector
   - [x] About 3.5% below, so it holds cash
   - About 3.5% above, so it holds cash
   > (82 − 85) / 85 ≈ −3.5%. The leading sector is itself below its trend line, so the filter keeps the money in cash.

7. {#calc2} [calc] A sector ETF trades at $60 with a 200-day moving average of $55. How far above its average is it, and what does the filter allow?
   - [x] About 9.1% above, so it allows the position
   - About 9.1% above, so it blocks the position
   - About 8.3% above, so it blocks the position
   - About 9.1% below, so it allows the position
   > (60 − 55) / 55 ≈ 9.1% above the average, so the sector is in an uptrend and the filter lets the rotation hold it.

8. {#bk1} [calc] A sector rotation holds the top sector only if its price is above its 200-day average, otherwise cash. The top sector trades at 96 against a 200-day average of 100. The sector returns −2% next month and cash returns 0.3%. What does the strategy earn?
   - −2.0%
   - −1.7%
   - [x] +0.3%
   - 0%
   > The price is below its average, so the filter moves the money to cash, which earns 0.3% instead of the sector's −2%.

9. {#bk2} [calc] A rotation holds 3 sector ETFs equally weighted. Two pass the moving-average filter and return +2% and +1.5%. The third fails the filter and its share sits in cash earning 0.3%. What is the monthly portfolio return?
   - [x] 1.27%
   - 1.75%
   - 1.50%
   - 3.80%
   > Equal weights of one-third: (2% + 1.5% + 0.3%) / 3 = 1.27%.

10. {#bk3} [calc] A sector ETF's last five closes are 98, 99, 101, 100 and 102. Using the 5-day average as the trend filter, is the ETF above its average, and what is the average?
   - No, the average is 102
   - Yes, the average is 98
   - [x] Yes, the average is 100
   - No, the average is 101
   > The average is (98 + 99 + 101 + 100 + 102) / 5 = 100. The last close of 102 is above it, so the filter allows a position.

11. {#bk4} [calc] A rotation holds 3 sectors equally. Two pass the moving-average filter and return +1.5% and +0.5%. The third fails and sits in cash earning 0.3%. What is the portfolio return?
   - +1.0%
   - [x] +0.77%
   - +0.50%
   - +2.3%
   > (1.5% + 0.5% + 0.3%) / 3 = 0.77%.

12. {#bk5} [calc] A sector falls 6% in a month while a filter moves the money to cash earning 0.3%. How many percentage points does the filter save?
   - 5.7
   - 0.3
   - 6.0
   - [x] 6.3
   > The sector's −6% is avoided and the cash earns +0.3%: the difference is 6.3 points.

13. {#bk6} [calc] A price oscillates around its moving average and triggers 6 filter flips in a quarter, each costing 0.10% per round trip. What is the cost?
   - 0.1%
   - [x] 0.6%
   - 6%
   - 0.06%
   > 6 × 0.10% = 0.6%.

14. {#bk7} What problem does a moving-average filter solve in plain sector rotation?
   - Plain rotation never holds a sector
   - Plain rotation holds cash forever
   - Plain rotation has no trading costs
   - [x] Plain rotation can hold the 'least bad' sector in a downturn even though it is falling
   > The filter requires the sector's own price to be rising, not just rising faster than others.

15. {#bk8} What is the tradeoff of adding a moving-average filter to sector rotation?
   - It increases returns in every market
   - It removes all trading costs
   - [x] Less participation in choppy, range-bound markets, because the filter can flip on and off and leave the strategy in cash
   - It makes sector selection random
   > Whipsawing around the moving average can keep the portfolio out of the market at the wrong time.
