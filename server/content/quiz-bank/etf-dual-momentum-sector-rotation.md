---
slug: etf-dual-momentum-sector-rotation
---

# Quiz

1. {#q1} What two tests must a sector pass in a dual-momentum strategy?
   - Only a test of the sector's dividend yield
   - [x] Relative momentum (is it leading its peers) and absolute momentum (is its own trailing return positive)
   - Two separate relative-momentum tests against different peer groups
   - A test of market capitalization and a test of trading volume
   > Dual momentum requires a sector to both outrank its peers (relative momentum) and have a positive trailing return in absolute terms (absolute momentum) before it receives an allocation.

2. {#q2} How does dual momentum's absolute-momentum check differ mechanically from a separate moving-average filter?
   - They are mathematically identical calculations with different names
   - [x] It uses the sector's own trailing return over a lookback window, rather than comparing current price to a separately-computed moving average
   - Absolute momentum ignores trailing returns entirely
   - A moving-average filter cannot be used with momentum strategies
   > Both approaches try to confirm a sector is genuinely rising rather than just relatively strong, but dual momentum does this using the same trailing-return data as the relative ranking, rather than a separate technical indicator.

3. {#q3} What does dual-momentum sector rotation do when no sector clears the absolute-momentum hurdle?
   - It forces an allocation into the highest-ranked sector regardless
   - [x] It holds cash or a defensive asset instead of investing in any sector
   - It shorts every sector simultaneously
   - It doubles the position size in the top sector
   > If even the best-ranked sector has a negative trailing return, the strategy sits out rather than allocating to whichever sector merely lost the least.

4. {#q4} In what market scenario is dual momentum's cash/defensive fallback most likely to trigger?
   - A calm, steadily rising market
   - [x] A broad, synchronized market decline where every sector's trailing return is negative
   - A market where all sectors have identical returns
   - It never triggers under any circumstances
   > When every sector is falling together, none clears the absolute-momentum bar, so the strategy defaults to cash rather than forcing a losing allocation.

5. {#q5} What is dual momentum generally valued for, compared to a more elaborate trend-following overlay?
   - Its extreme complexity and need for many separate indicators
   - [x] Its simplicity — just two momentum checks computed from the same basic trailing-return data — while still capturing much of the downside protection of more elaborate approaches
   - Its guarantee of outperforming every other rotation strategy
   - Its requirement to hold every sector at all times
   > Dual momentum achieves meaningful downside protection using a lean framework built entirely from trailing-return comparisons, without needing a separate technical layer.

6. {#calc1} [calc] Trailing sector returns are tech +0.6%, energy −2% and health −4%, and Treasury bills returned +1.0%. Dual momentum holds the top sector only if it beats bills. What does it hold?
   - Tech, since it is the top sector
   - Energy, since it fell least among the losers
   - [x] Cash, since the best sector (tech, +0.6%) trails bills (+1.0%)
   - Health, since it is the cheapest
   > Relative momentum picks tech, but absolute momentum requires its return to beat the +1.0% from bills. +0.6% does not, so the money goes to cash.

7. {#bk1} [calc] A dual-momentum rule picks the better of two ETFs by relative momentum, then holds it only if its 12-month return beats T-bills. ETF A returned 14% and ETF B returned 9% over 12 months. T-bills returned 4%. What does the rule hold?
   - [x] ETF A
   - ETF B
   - T-bills
   - Half A and half B
   > Relative momentum picks A (14% beats 9%). Absolute momentum checks A's 14% against T-bills at 4%, which it passes, so the rule holds A.

8. {#bk2} [calc] A dual-momentum rule picks the better of two ETFs, then requires a 12-month return above T-bills. The better ETF returned 3% and T-bills returned 4%. What does the rule hold?
   - The better ETF
   - The weaker ETF
   - [x] T-bills
   - Half in each ETF
   > The better ETF's 3% fails the absolute test against 4%, so the rule moves to T-bills.

9. {#bk3} [calc] A dual-momentum portfolio holds the winning ETF in a year when it returns 12%. A plain buy-and-hold of the losing ETF returned 4%. How many percentage points did the rotation add?
   - [x] 8 percentage points
   - 12 percentage points
   - 16 percentage points
   - 3 percentage points
   > The rotation earned 12% against 4%, a difference of 8 percentage points.

10. {#bk4} [calc] Twelve-month returns are Tech +11%, Financials +8% and Energy −3%. T-bills returned 4%. A dual-momentum rule holds the top sector only if it beats T-bills. What does it hold?
   - Financials
   - T-bills
   - Energy
   - [x] Tech
   > Tech ranks first on relative momentum and its 11% beats T-bills at 4%, so the rule holds Tech.

11. {#bk5} [calc] Every sector's trailing return is negative while T-bills earn 4% a year. A dual-momentum rule moves to T-bills. What does it earn per month (simple)?
   - 4%
   - [x] 0.33%
   - 0.04%
   - 3.3%
   > 4% / 12 = 0.33% a month.

12. {#bk6} [calc] A dual-momentum rule picks the top 3 sectors, which returned +5%, +2% and −1% against a hurdle of 0%. Failing sectors go to cash. What share of the portfolio is in cash?
   - Two-thirds
   - None
   - All of it
   - [x] One-third
   > The sector with −1% fails the 0% hurdle, so its third of the portfolio sits in cash.

13. {#bk7} What are the two tests in dual-momentum sector rotation?
   - Value and size
   - [x] Relative momentum, which sector leads, and absolute momentum, whether that sector's own return is positive
   - Dividend yield and volatility
   - Trading volume and bid-ask spread
   > A sector must both lead its peers and clear an absolute hurdle before earning a position.

14. {#bk8} What does the strategy hold when no sector passes the absolute-momentum test?
   - [x] Cash or a defensive asset
   - The best of the failing sectors
   - Leveraged ETFs
   - The same sector as last month
   > In a broad decline, the strategy steps aside rather than forcing a position.
