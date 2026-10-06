---
slug: stocks-valuing-a-stock
title: Valuing a Stock
summary: A stock's price is what the market pays today, while its value is an estimate of what the business is worth, and two common ways to estimate that value are comparing price to earnings and discounting expected dividends.
---

## Price vs. Value

A stock's price is simply what buyers and sellers are paying right now. Its value is an analyst's estimate of what the shares are really worth based on the business behind them, and the two are rarely identical. If the price is below the estimated value the stock looks undervalued, and if it's above, overvalued, which is the basic idea behind the value strategy covered later in this course.

## Earnings per Share and the P/E Ratio

Earnings per share (EPS) is a company's net income divided by its shares outstanding. The price-to-earnings (P/E) ratio compares the share price to those earnings:

$$
\text{P/E} = \frac{\text{share price}}{\text{earnings per share}}
$$

A P/E of 20 means investors are paying 20 dollars for each dollar of annual earnings. A high P/E usually means investors expect strong growth, and a low P/E may mean low expectations or a bargain. The ratio is most useful for comparing similar companies in the same sector, since typical P/Es differ widely between industries.

## Discounting Future Dividends

A more fundamental approach is that a share is worth the present value of all the dividends it will ever pay, since that's the cash an owner receives. If dividends are expected to grow at a constant rate $g$ forever, and investors require a return of $r$, the value today is:

$$
P_0 = \frac{D_1}{r - g}
$$

where $D_1$ is next year's dividend, and the formula only works when $r$ is greater than $g$. This is known as the Gordon growth model, a simple form of the dividend discount model.

## Why Valuations Are Estimates

Every input to these models is a forecast, and the result can be very sensitive to them. With a next-year dividend of 2 dollars, a required return of 8%, and growth of 4%, the value is 2 / 0.04 = 50 dollars. If growth is instead 5%, the value jumps to 2 / 0.03, about 66.67 dollars, even though the change in the assumption looks small. This is why analysts treat a valuation as a range of plausible values rather than a single exact number.

## In Practice

An analyst finds that a company earned 2.50 dollars per share and trades at 50 dollars, a P/E of 20, while similar companies in its sector trade at a P/E of around 15. The analyst also estimates a dividend-discount value of 42 dollars. Both measures suggest the stock is expensive, but each depends on assumptions about growth and risk, so the analyst would want to understand why the market is willing to pay more before drawing a conclusion.

# Quiz

1. What is the difference between a stock's price and its value?
   - They are always identical
   - [x] Price is what the market pays today, while value is an estimate of what the business is actually worth
   - Value is set by the exchange
   - Price is an analyst's estimate
   > The market price can differ from an analyst's estimate of value, and that gap is the basis of value investing.

2. A stock trades at 50 dollars and earned 2.50 dollars per share. What is its P/E ratio?
   - 5
   - 12.5
   - [x] 20
   - 125
   > P/E equals the price divided by earnings per share, which is 50 / 2.50 = 20.

3. Why is the P/E ratio most useful when comparing companies in the same sector?
   - Companies in different sectors can't have earnings
   - [x] Typical P/E ratios differ widely between industries, so comparisons are fairer among similar companies
   - P/E only exists for one sector
   - Sectors set their own prices
   > Industries have different growth and risk, so a P/E that is high for one sector can be normal for another.

4. Using the Gordon growth model, what is the value if next year's dividend is 2 dollars, the required return is 8%, and growth is 4%?
   - 25 dollars
   - 100 dollars
   - [x] 50 dollars
   - 16 dollars
   > Value = D1 / (r − g) = 2 / (0.08 − 0.04) = 50 dollars.

5. Why can a small change in the growth assumption change a dividend-based valuation so much?
   - Because dividends are random
   - [x] Because the formula divides by r − g, which is small, so a small change in g changes the result a lot
   - Because growth does not appear in the formula
   - Because price is set by the exchange
   > When r and g are close, r − g is a small number, so the value is very sensitive to small changes in the assumptions.
