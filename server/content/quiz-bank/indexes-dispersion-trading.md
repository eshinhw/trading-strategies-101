---
slug: indexes-dispersion-trading
---

# Quiz

1. {#bk1} [calc] An index of four equally weighted stocks has an implied volatility of 18%. Each stock has an implied volatility of 30%. Using σ² = σ_stock² × (ρ + (1 − ρ) / 4) for equal weights, what is the implied correlation?
   - 60%
   - [x] 14.7%
   - 36%
   - 0%
   > 0.18² = 0.0324 = 0.09 × (ρ + (1 − ρ) / 4), so ρ + (1 − ρ) / 4 = 0.36. That gives 0.75 ρ = 0.11 and ρ = 14.7%.

2. {#bk2} [calc] A dispersion trader sells index variance with a vega notional of $100,000 and a strike of 20 volatility points. The index realizes 18. What is the profit on the short variance swap (variance notional = vega notional / (2 × strike))?
   - $100,000
   - $200,000
   - $38,000
   - [x] $190,000
   > Variance notional = $100,000 / 40 = $2,500. A short earns notional × (strike² − realized²) = $2,500 × (400 − 324) = $190,000.
