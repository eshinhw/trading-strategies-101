---
slug: indexes-volatility-targeting
---

# Quiz

1. {#q1} What does a volatility-targeting strategy dynamically adjust?
   - The dividend yield of the index
   - [x] How much of a portfolio is allocated to the index versus a risk-free asset
   - The number of shares in the underlying companies
   - The maturity of every bond in a fixed-income portfolio
   > The strategy shifts allocation between the index and a risk-free asset to try to hold overall portfolio volatility near a fixed target.

2. {#q2} What does the strategy do when the index's recent realized volatility falls below the target?
   - It sells all index exposure and holds only the risk-free asset
   - [x] It increases its allocation to the index, potentially using leverage if allowed, to reach the target volatility
   - It has no reaction to falling volatility
   - It immediately liquidates the entire portfolio
   > When the index is calmer than the target volatility level, the strategy adds more index exposure (or leverage) to bring overall portfolio risk back up to target.

3. {#q3} What happens to the strategy's index allocation when volatility rises above the target?
   - The allocation to the index increases further
   - [x] The allocation to the index is reduced, shifting more into the risk-free asset
   - The strategy takes no action regardless of volatility changes
   - The index is replaced with a completely different asset class
   > Rising volatility triggers a reduction in index exposure and a shift toward the risk-free asset, to keep overall portfolio volatility from rising along with the market.

4. {#q4} How does a volatility-targeted portfolio's risk level compare to a simple buy-and-hold index position?
   - It is identical, since both hold the same underlying index
   - [x] It stays comparatively stable over time, while a buy-and-hold position's risk fluctuates directly with whatever the market is doing
   - It is always riskier than a buy-and-hold position
   - Volatility targeting eliminates all risk entirely
   > The whole point of the strategy is to keep the portfolio's realized risk level more consistent, in contrast to a static position whose riskiness rises and falls with market volatility on its own.

5. {#q5} What is a key drawback of volatility targeting's reliance on backward-looking realized volatility?
   - It has no drawbacks — the strategy responds instantly to future volatility
   - [x] It's a lagging response that can end up reducing exposure after a selloff has already happened and increasing exposure after a calm rally has already happened
   - It requires no historical data whatsoever
   - Realized volatility cannot be measured for any index
   > Since the strategy reacts to volatility that has already occurred, it can inadvertently sell into weakness and buy into strength, a pattern that can underperform a static approach when volatility and returns don't move in the way the strategy assumes.

6. {#calc1} [calc] A strategy targets 10% volatility and the index's realized volatility is 16%. What share of the portfolio is held in the index, with the rest in Treasury bills?
   - 160%
   - 10%
   - 37.5%
   - [x] 62.5%
   > The index weight is target / realized = 10 / 16 = 62.5%, and the remaining 37.5% sits in bills.

7. {#calc2} [calc] A strategy targets 12% volatility and the index's realized volatility is 8%. How much index exposure does it hold per $1 million of capital?
   - $0.67 million
   - [x] $1.5 million
   - $1.0 million
   - $0.12 million
   > The leverage is target / realized = 12 / 8 = 1.5, so $1.5 million of exposure.

8. {#bk1} [calc] A strategy targets 10% annualized volatility. The index's recent realized volatility is 16%, and the investor has $2,000,000. What index exposure should the strategy hold?
   - $3,200,000
   - $2,000,000
   - [x] $1,250,000
   - $200,000
   > Leverage = target / realized = 10% / 16% = 0.625. Exposure = 0.625 × $2,000,000 = $1,250,000.

9. {#bk2} [calc] A strategy targets 12% annualized volatility. The index's recent realized volatility is 8%, and the investor has $2,000,000. What index exposure should the strategy hold?
   - [x] $3,000,000
   - $1,333,333
   - $2,000,000
   - $240,000
   > Leverage = target / realized = 12% / 8% = 1.5. Exposure = 1.5 × $2,000,000 = $3,000,000.

10. {#bk3} [calc] A strategy targets 15% annualized volatility. The index's recent realized volatility is 20%, and the investor has $5,000,000. What index exposure should the strategy hold?
   - $6,666,667
   - $5,000,000
   - [x] $3,750,000
   - $750,000
   > Leverage = target / realized = 15% / 20% = 0.75. Exposure = 0.75 × $5,000,000 = $3,750,000.
