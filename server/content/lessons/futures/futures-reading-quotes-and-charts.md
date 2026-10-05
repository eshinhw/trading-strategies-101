---
slug: futures-reading-quotes-and-charts
title: Reading Futures Quotes and Charts
summary: How to decode a futures ticker and month code, read a quote line, and interpret a price chart's basic elements — the practical skills behind actually following a contract.
---

## Symbol and Month Codes

A futures ticker combines a root symbol for the underlying (say, CL for crude oil, ES for the E-mini S&P 500) with a single letter representing the expiration month and a digit for the year — F for January, G for February, H for March, J for April, K for May, M for June, N for July, Q for August, U for September, V for October, X for November, and Z for December. A December 2026 crude oil contract, for example, trades under the symbol CLZ6.

## Price Quotation Formats

Most futures quote in decimals, like an equity index or a currency pair, but some — notably U.S. Treasury futures — quote in fractions of a point, traditionally in 32nds (and sometimes with an extra digit for half or quarter of a 32nd). A Treasury quote of 112'16 means 112 and 16/32nds, not 112.16, which trips up traders unfamiliar with the convention.

## Reading a Quote Line

A typical quote line shows the last traded price, the day's change (in points and often as a percentage), the day's high and low, the volume traded so far, and the current open interest — the same volume and open interest concepts covered in the previous lesson, now as columns you'd actually see on a trading screen.

## Basic Chart Interpretation

A futures price chart typically pairs candlesticks or a line showing price over time with a volume bar chart underneath, letting a trader see not just where price moved but how much conviction (trading activity) accompanied that move. A price move on unusually high volume is generally read as more significant than the same move on quiet, low volume.

## Example in Practice

A new futures trader pulling up a 10-year Treasury note quote for the first time and seeing a price like 112'16 needs to recognize the tick mark before doing any math — reading it as a plain decimal, 112.16 instead of 112 and 16/32nds, would badly misstate what the contract is actually worth. A quote line for a completely different product reads just as precisely once you know the code: ESZ6 4,512.25, +8.50 (+0.19%), Vol 1,245,000, OI 2.1M decodes to the December 2026 E-mini S&P contract, last traded at 4,512.25, up 8.50 points on the day, with 1.245 million contracts traded so far and 2.1 million currently open across every expiration of the product — the same handful of columns, whether the underlying is an equity index or a government bond.

# Quiz

1. What does the ticker CLZ6 represent?
   - [x] A crude oil futures contract expiring in December 2026
   - A crude oil futures contract expiring in June 2026
   - A currency futures contract
   - A contract with no expiration date
   > CL is crude oil's root symbol, Z is the month code for December, and 6 represents the year 2026 — together, CLZ6.

2. How should a Treasury futures quote of 112'16 be interpreted?
   - [x] 112 and 16/32nds, not 112.16 as a plain decimal
   - Exactly 112.16, the same as a decimal quote
   - $112.16 in cash value with no further meaning
   - 112 basis points
   > Treasury futures quote in 32nds of a point by convention — the apostrophe marks that 16 is 16/32nds, not a decimal fraction.

3. What does a typical futures quote line show, beyond the last traded price?
   - [x] The day's change, high and low, volume traded, and current open interest
   - Only the contract's expiration date
   - The trader's personal account balance
   - The exchange's regulatory filings
   > A standard quote line packages the last price alongside the day's change, range, volume, and open interest — the same figures covered conceptually in the trading-mechanics lesson.

4. Why is a price move on unusually high volume generally read as more significant than the same move on low volume?
   - [x] High volume suggests more market participants and capital are behind the move, giving it more conviction
   - Volume has no bearing on how a price move should be interpreted
   - High volume always means the price will immediately reverse
   - Low-volume moves are always larger in magnitude
   > Pairing price action with volume gives a sense of how much real trading activity is driving a move — a large move on heavy volume is generally taken more seriously than the same move on thin trading.

5. What does the month code Z represent in a futures ticker?
   - [x] December
   - June
   - March
   - September
   > Z is the standard futures month code for December, following the F-G-H-J-K-M-N-Q-U-V-X-Z sequence covering January through December.
