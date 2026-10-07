---
slug: etf-sector-momentum-rotation-with-ma-filter
---

# Quiz

1. {#bk1} [calc] A sector rotation holds the top sector only if its price is above its 200-day average, otherwise cash. The top sector trades at 96 against a 200-day average of 100. The sector returns −2% next month and cash returns 0.3%. What does the strategy earn?
   - −2.0%
   - −1.7%
   - [x] +0.3%
   - 0%
   > The price is below its average, so the filter moves the money to cash, which earns 0.3% instead of the sector's −2%.

2. {#bk2} [calc] A rotation holds 3 sector ETFs equally weighted. Two pass the moving-average filter and return +2% and +1.5%. The third fails the filter and its share sits in cash earning 0.3%. What is the monthly portfolio return?
   - [x] 1.27%
   - 1.75%
   - 1.50%
   - 3.80%
   > Equal weights of one-third: (2% + 1.5% + 0.3%) / 3 = 1.27%.

3. {#bk3} [calc] A sector ETF's last five closes are 98, 99, 101, 100 and 102. Using the 5-day average as the trend filter, is the ETF above its average, and what is the average?
   - No, the average is 102
   - Yes, the average is 98
   - [x] Yes, the average is 100
   - No, the average is 101
   > The average is (98 + 99 + 101 + 100 + 102) / 5 = 100. The last close of 102 is above it, so the filter allows a position.

4. {#bk4} [calc] A rotation holds 3 sectors equally. Two pass the moving-average filter and return +1.5% and +0.5%. The third fails and sits in cash earning 0.3%. What is the portfolio return?
   - +1.0%
   - [x] +0.77%
   - +0.50%
   - +2.3%
   > (1.5% + 0.5% + 0.3%) / 3 = 0.77%.

5. {#bk5} [calc] A sector falls 6% in a month while a filter moves the money to cash earning 0.3%. How many percentage points does the filter save?
   - 5.7
   - 0.3
   - 6.0
   - [x] 6.3
   > The sector's −6% is avoided and the cash earns +0.3%: the difference is 6.3 points.

6. {#bk6} [calc] A price oscillates around its moving average and triggers 6 filter flips in a quarter, each costing 0.10% per round trip. What is the cost?
   - 0.1%
   - [x] 0.6%
   - 6%
   - 0.06%
   > 6 × 0.10% = 0.6%.

7. {#bk7} What problem does a moving-average filter solve in plain sector rotation?
   - Plain rotation never holds a sector
   - Plain rotation holds cash forever
   - Plain rotation has no trading costs
   - [x] Plain rotation can hold the 'least bad' sector in a downturn even though it is falling
   > The filter requires the sector's own price to be rising, not just rising faster than others.

8. {#bk8} What is the tradeoff of adding a moving-average filter to sector rotation?
   - It increases returns in every market
   - It removes all trading costs
   - [x] Less participation in choppy, range-bound markets, because the filter can flip on and off and leave the strategy in cash
   - It makes sector selection random
   > Whipsawing around the moving average can keep the portfolio out of the market at the wrong time.
