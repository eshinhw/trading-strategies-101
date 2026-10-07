---
slug: stocks-single-moving-average
---

# Quiz

1. {#q1} What does a moving average do to a stock's price series?
   - It predicts the exact future price with certainty
   - [x] It smooths out day-to-day noise by averaging price over a fixed lookback window
   - It removes all trading volume data
   - It converts the stock's price into a percentage of the S&P 500
   > A moving average is simply the average closing price over a set number of recent days, recalculated as that window rolls forward, which smooths out short-term noise.

2. {#q2} In a single-moving-average strategy, when does the trader typically hold a long position?
   - Only on the first trading day of each month
   - [x] When the stock's price is above its moving average
   - Only when trading volume is unusually low
   - Regardless of where price sits relative to the average
   > Price above the moving average is read as an uptrend signal to stay long; price below it is read as a downtrend signal to exit or go short.

3. {#q3} How does a single-moving-average rule differ from a moving-average-crossover rule?
   - They are identical in every way
   - [x] A single-moving-average rule compares price to one reference line, while a crossover rule compares two moving averages of different lengths to each other
   - Crossover rules never use moving averages at all
   - A single-moving-average rule can only be used on futures, never stocks
   > The single-average version is the simpler case — just one line to compare price against — while a crossover strategy adds a second, differently-lengthed average for a potentially smoother signal.

4. {#q4} What is a "whipsaw," in the context of a moving-average strategy?
   - A large, sustained profit from a strong trend
   - [x] A series of small losing trades caused by price oscillating back and forth across the moving average in a choppy market
   - A type of futures contract
   - A guaranteed way to avoid all trading losses
   > In range-bound markets without a real trend, price can cross the moving average repeatedly, triggering a string of buy-then-sell trades that each lose a little — a whipsaw.

5. {#q5} In what kind of market does a single-moving-average strategy tend to perform best?
   - A sideways, range-bound, choppy market
   - [x] A market with a sustained, clear directional trend
   - A market that never moves at all
   - It performs identically in every market condition
   > Trend-following rules like this one are designed to capture sustained directional moves — they struggle in choppy markets but perform well when a real trend is underway.

6. {#calc1} [calc] A stock closed at $48, $50, $52, $51 and $49 over the last five days, and today it closes at $51.50. Under a 5-day single-moving-average rule, what is the average and the signal?
   - The average is $50.00, so price is above it and the rule exits
   - The average is $51.50, so price is at it and the rule is flat
   - The average is $49.00, so price is above it and the rule shorts
   - [x] The average is $50.00, so price is above it and the rule is long
   > (48 + 50 + 52 + 51 + 49) / 5 = $50.00. Price at $51.50 is above the average, so the rule holds a long position.

7. {#bk1} [calc] A stock closes at $102, $104, $101, $103, and $105 over five days. What is the 5-day simple moving average?
   - $104
   - $105
   - $102
   - [x] $103
   > The average is ($102 + $104 + $101 + $103 + $105) / 5 = $515 / 5 = $103.

8. {#bk2} [calc] A stock closed at 48, 50 and 52 over three days and then at 53. Using a 3-day simple moving average, what is the average on the last day, and is the price above it?
   - 50.00, and yes the price is above it
   - [x] 51.67, and yes the price is above it
   - 51.67, and no the price is below it
   - 50.75, and no the price is below it
   > The last three closes are 50, 52 and 53, which average 51.67. The price of 53 is above it, so the rule says go long.

9. {#bk3} [calc] A single moving-average rule is long when the price is above its average. A trader enters at 53 and exits at 51 when the price falls below the average. What is the return on the trade?
   - −3.0%
   - +3.8%
   - −2.0%
   - [x] −3.8%
   > (51 − 53) / 53 = −3.8%.

10. {#bk4} [calc] A stock closes at 50, 52, 49, 51 and 53 over five days. The 5-day average is 51. A rule is long when the price is above its average. Is the rule long, and by what percentage is the price above the average?
   - [x] Long, 3.9% above
   - Flat, 3.9% below
   - Long, 6% above
   - Flat, 1.9% below
   > The price of 53 is above the average of 51. (53 − 51) / 51 = 3.9%.

11. {#bk5} [calc] A single-moving-average rule trades 15 times a year with an average cost of 0.1% per trade. A choppy year makes 10 of those trades losers averaging −1.5% before costs, and 5 winners averaging +4%. What is the total return before costs?
   - −15%
   - +20%
   - [x] +5%
   - −10%
   > Losers: 10 × −1.5% = −15%. Winners: 5 × 4% = +20%. Total = +5%, before 1.5% of costs.

12. {#bk6} What is the main weakness of a single-moving-average rule?
   - [x] In choppy, sideways markets the price crosses the average repeatedly, producing whipsaw trades and losses
   - It never gives a signal
   - It works only in sideways markets
   - It cannot be used on stocks
   > Without a real trend, the rule keeps entering and exiting, paying costs on each false signal.
