---
slug: stocks-two-moving-averages
---

# Quiz

1. {#q1} What triggers a buy signal in a two-moving-average crossover strategy?
   - The stock's price falling to zero
   - [x] The fast (shorter-window) moving average crossing above the slow (longer-window) moving average
   - The two moving averages becoming perfectly equal forever
   - Trading volume dropping to zero
   > A crossover of the fast average above the slow average is read as the start of an uptrend, triggering a buy signal.

2. {#q2} How does a two-moving-average strategy differ from a single-moving-average strategy?
   - They are identical in every respect
   - [x] It compares two moving averages of different lengths to each other, rather than comparing price to just one reference line
   - It uses no moving averages at all
   - It can only be applied to bonds
   > The two-average version generates signals from the relationship between a fast and slow average, while the single-average version compares raw price to just one line.

3. {#q3} Why does comparing two moving averages to each other tend to be smoother than comparing price to a single moving average?
   - It isn't smoother — it's identical in behavior
   - [x] Both lines being compared are already averaged, which filters out more of the noise that causes whipsaws
   - Moving averages are never smooth by definition
   - Smoothness has nothing to do with how many averages are used
   > Since both the fast and slow lines are themselves smoothed versions of price, comparing them to each other filters out more short-term noise than comparing raw, noisy price to a single average.

4. {#q4} What is the tradeoff between using a shorter fast/slow pair (e.g., 10/50 days) versus a longer pair (e.g., 50/200 days)?
   - There is no tradeoff — longer and shorter pairs behave identically
   - [x] A shorter pair reacts to trend changes more quickly but generates more whipsaws, while a longer pair reacts more slowly but with fewer false signals
   - Shorter pairs can only be used on futures, never stocks
   - Longer pairs always produce more frequent trading signals
   > The lookback window choice trades off responsiveness (shorter windows react faster) against reliability (longer windows filter out more noise but lag more).

5. {#q5} In what kind of market does a two-moving-average crossover strategy perform worst?
   - A market with a strong, sustained trend
   - [x] A sideways, range-bound market, where the two averages can cross back and forth without a real lasting shift in direction
   - It performs identically in every market condition
   - A market where trading is completely halted
   > Like other trend-following rules, the crossover strategy struggles in choppy markets, where the fast and slow averages can generate repeated false crossovers with no real trend behind them.

6. {#calc1} [calc] A 20-day moving average is $102.40 and the 100-day moving average is $100.00. By what percentage is the fast average above the slow one, and what is the signal?
   - 2.4%, so the rule is short
   - [x] 2.4%, so the rule is long
   - 2.34%, so the rule is flat
   - 24%, so the rule is long
   > (102.40 − 100.00) / 100.00 = 2.4%. The fast average is above the slow one, so the crossover rule holds a long position.

7. {#bk1} [calc] A stock closes at 50, 51, 53, 54 and 56 over five days. What are the 3-day and 5-day simple moving averages on the last day, and which is higher?
   - 3-day 52.80 and 5-day 54.33, so the slow average is higher
   - Both equal 52.80
   - [x] 3-day 54.33 and 5-day 52.80, so the fast average is higher
   - 3-day 54.33 and 5-day 54.33
   > The 3-day average is (53 + 54 + 56) / 3 = 54.33. The 5-day average is (50 + 51 + 53 + 54 + 56) / 5 = 52.80. The fast average is above the slow one, a bullish crossover.

8. {#bk2} [calc] A crossover system trades 12 round trips a year with costs of 0.15% per round trip. What is the annual cost drag?
   - [x] 1.8%
   - 0.15%
   - 15%
   - 0.18%
   > 12 × 0.15% = 1.8% a year.

9. {#bk3} [calc] A crossover strategy has 10 trades: 4 winners averaging +6% and 6 losers averaging −2%. What is the average return per trade?
   - +4.0%
   - +2.0%
   - [x] +1.2%
   - −0.4%
   > Total = 4 × 6% − 6 × 2% = 24% − 12% = 12%. Average = 12% / 10 = +1.2% per trade.

10. {#bk4} [calc] A crossover uses a fast average of 10 days and a slow average of 50 days. The fast average rises from 98 to 102 while the slow average is 100. When did the crossover buy signal occur?
   - When the fast average moved below 100
   - [x] When the fast average moved above 100
   - When the slow average moved above 102
   - At the start of the series
   > A buy signal is given when the fast average crosses above the slow one. Here the slow average is 100, so the signal comes when the fast average rises above 100.

11. {#bk5} What is the tradeoff between a short fast/slow pair, such as 10/50 days, and a longer pair?
   - The shorter pair reacts more slowly and trades less
   - The longer pair gives more trades
   - There is no difference
   - [x] The shorter pair reacts faster but generates more signals and whipsaws in choppy markets
   > Faster windows catch trend changes sooner at the cost of more false signals.
