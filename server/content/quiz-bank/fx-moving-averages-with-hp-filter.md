---
slug: fx-moving-averages-with-hp-filter
---

# Quiz

1. {#q1} What does the Hodrick-Prescott (HP) filter do to a time series?
   - It deletes all data points from before the current year
   - [x] It decomposes the series into a smooth trend component and a cyclical (noise) component
   - It converts the exchange rate into a completely different currency
   - It guarantees the series will trend upward
   > The HP filter statistically separates a time series into a slow-moving trend and shorter-term fluctuations around it, which an HP-filtered trend strategy uses to extract a cleaner trend signal.

2. {#q2} Why does an FX trend strategy apply the HP filter before running a moving-average trend rule?
   - To make the strategy slower and less responsive on purpose
   - [x] To filter out short-term noise that can cause whipsaws in a standard moving-average crossover, producing cleaner trend signals
   - The HP filter has no effect on trading signals
   - To eliminate the need for any moving average at all
   > Filtering out noise first is intended to reduce the false signals (whipsaws) that a moving average applied to raw, noisy price data would otherwise generate.

3. {#q3} Why is the standard, "two-sided" HP filter not directly usable for real-time trading?
   - It requires too much historical data to ever be computed
   - [x] It uses both past and future data points to smooth the series, but future data isn't available in real time
   - It can only be applied to stock prices, not currencies
   - It is illegal to use in financial markets
   > The standard HP filter smooths using data from both directions in time, which works for historical analysis but can't be directly applied to real-time decisions where future data doesn't yet exist.

4. {#q4} How do practical implementations address the two-sided filter's limitation for real-time trading?
   - By ignoring the problem and using the two-sided filter anyway
   - [x] By using a one-sided ("real-time") version of the filter that only uses data available up to the current point, at some cost to smoothing quality
   - By only trading currencies that don't require real-time data
   - By removing the need for a moving average entirely
   > A one-sided variant estimates the trend using only past and current data, sacrificing some smoothing quality compared to the full two-sided filter in exchange for being usable in live trading.

5. {#q5} Does the HP filter guarantee a currency pair will have a tradeable trend?
   - Yes, the filter creates a trend even in range-bound markets
   - [x] No — it improves the quality of the trend estimate and reduces false signals, but doesn't manufacture a trend where the underlying market is genuinely range-bound
   - Yes, but only for major currency pairs
   - The filter has no relationship to whether a trend exists
   > The HP filter is a noise-reduction tool, not a trend-creation tool — in truly choppy markets, even a filtered signal can still generate false whipsaws, just less often than an unfiltered one.

6. {#calc1} [calc] An HP-filtered EUR/USD trend rises from 1.0800 to 1.0860 over 10 trading days. What is the average daily drift in pips (1 pip = 0.0001)?
   - 60 pips a day
   - [x] 6 pips a day
   - 0.6 pips a day
   - 0.006 pips a day
   > The change is 0.0060, which is 60 pips, and 60 / 10 days = 6 pips a day.

7. {#bk1} [calc] EUR/USD is at 1.0850 and its 100-day moving average is 1.0780. How far above the average is the price?
   - 0.7 cents
   - [x] 0.65%
   - 6.5%
   - 0.065%
   > (1.0850 − 1.0780) / 1.0780 = 0.65%.

8. {#bk2} [calc] A moving-average rule goes long EUR/USD when the price is above the average. A trader goes long €1,000,000 at 1.0850 and exits at 1.0900. What is the profit?
   - $500
   - $50,000
   - $1,090,000
   - [x] $5,000
   > Profit = (1.0900 − 1.0850) × €1,000,000 = $5,000.

9. {#bk3} [calc] The last five daily closes of EUR/USD are 1.0800, 1.0820, 1.0850, 1.0830 and 1.0860. What is the 5-day moving average?
   - 1.0850
   - [x] 1.0832
   - 1.0860
   - 1.0800
   > (1.0800 + 1.0820 + 1.0850 + 1.0830 + 1.0860) / 5 = 5.4160 / 5 = 1.0832.
