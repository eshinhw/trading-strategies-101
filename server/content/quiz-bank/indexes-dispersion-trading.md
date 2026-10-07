---
slug: indexes-dispersion-trading
---

# Quiz

1. {#q1} What does an equity index's volatility depend on, beyond just the average volatility of its components?
   - Only the total number of stocks in the index
   - [x] How correlated the components are with each other
   - The index's dividend yield
   - The index's historical age
   > When components move together, their moves reinforce each other and index volatility rises; when they move independently, individual swings partly cancel out, so correlation drives the gap between index volatility and average component volatility.

2. {#q2} How is a classic dispersion trade typically structured?
   - Buying options on the index and selling options on all its components
   - [x] Selling options (or variance swaps) on the index while buying options (or variance swaps) on a basket of its components
   - Buying only index options with no position in individual components
   - Selling every option in the market simultaneously
   > The trade sells index-level volatility exposure and buys component-level volatility exposure, sized to be roughly neutral to the overall level of volatility.

3. {#q3} What is dispersion trading fundamentally a bet on?
   - The overall direction of the stock market
   - [x] The correlation between an index's individual components
   - A single company's earnings report
   - Interest rate changes
   > Since the trade is designed to be neutral to the broad level of volatility, its return depends on whether realized correlation between components comes in higher or lower than what was implied when the trade was placed.

4. {#q4} Why might index options tend to trade at an elevated implied correlation relative to what typically materializes?
   - Because single-stock options are always more expensive than index options
   - [x] Investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap
   - Because correlation is fixed by regulation and cannot change
   - Because index options are illiquid and rarely traded
   > Demand for portfolio-level insurance tends to keep index implied volatility (and thus implied correlation) elevated relative to what actually plays out, which dispersion trades try to harvest.

5. {#q5} What is the central risk of a short-index, long-component dispersion trade?
   - [x] A "correlation spike" during market stress, when individual stocks that normally move independently start moving together sharply
   - The risk that all stocks in the index stop trading permanently
   - The risk that index options cannot be sold short
   - There is no risk once the trade is correctly sized
   > During systemic selloffs, correlation often spikes as stocks move together in a broad risk-off move, which is exactly the scenario that hurts a trade positioned for correlation to come in lower than implied.

6. {#calc1} [calc] An index has an implied volatility of 20% while its stocks average 28%. Treating all stocks as equally volatile, what correlation does the index price imply?
   - About 0.71
   - About 0.28
   - About 0.80
   - [x] About 0.51
   > Index variance is the correlation times the stocks' variance, so the implied correlation is (0.20 / 0.28)² ≈ 0.51.

7. {#calc2} [calc] An index has an implied volatility of 15% while its stocks average 25%. Treating the stocks as equally volatile, what correlation does the index price imply?
   - 0.60
   - [x] 0.36
   - 0.15
   - 0.75
   > The implied correlation is (15 / 25)² = 0.36.

8. {#bk1} [calc] An index of four equally weighted stocks has an implied volatility of 18%. Each stock has an implied volatility of 30%. Using σ² = σ_stock² × (ρ + (1 − ρ) / 4) for equal weights, what is the implied correlation?
   - 60%
   - [x] 14.7%
   - 36%
   - 0%
   > 0.18² = 0.0324 = 0.09 × (ρ + (1 − ρ) / 4), so ρ + (1 − ρ) / 4 = 0.36. That gives 0.75 ρ = 0.11 and ρ = 14.7%.

9. {#bk2} [calc] A dispersion trader sells index variance with a vega notional of $100,000 and a strike of 20 volatility points. The index realizes 18. What is the profit on the short variance swap (variance notional = vega notional / (2 × strike))?
   - $100,000
   - $200,000
   - $38,000
   - [x] $190,000
   > Variance notional = $100,000 / 40 = $2,500. A short earns notional × (strike² − realized²) = $2,500 × (400 − 324) = $190,000.
