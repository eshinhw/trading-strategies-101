---
slug: stocks-alpha-combos
title: Alpha Combos
summary: Combining multiple distinct alpha-generating signals into a single blended forecast, on the same diversification logic as a multifactor portfolio but applied more broadly to any source of edge.
---

## What an "Alpha" Is

An individual trading signal — momentum, an earnings surprise, a statistical mean-reversion score, a machine-learning prediction, and so on — is typically called an "alpha" in quantitative trading, shorthand for a forecast of a stock's expected excess return. An alpha combo blends several distinct alphas together into one combined forecast per stock, used as the actual signal driving the portfolio, rather than trading off of any single alpha alone.

## Beyond Named Factors

The logic closely parallels a multifactor portfolio, but generalizes beyond named academic factors like value and momentum to include any source of predictive signal a firm has access to — proprietary data, alternative datasets, machine-learning model outputs, or even a human analyst's discretionary view — combined via the same basic principle: individually noisy or unreliable signals, when combined, average out much of their independent noise if they're not too correlated with each other.

## Weighting by Quality and Independence

Combining alphas well requires more than just averaging them together: each alpha typically needs its own estimate of quality, how reliable has this particular alpha historically been, and how correlated is it with the others already in the combo, so that more reliable, more independent alphas are weighted more heavily than noisier or redundant ones — this weighting is often itself estimated statistically, similar in spirit to how a multifactor portfolio might use factor z-scores, but is usually a more involved, ongoing calibration process given the larger and more heterogeneous set of signals typically involved.

## Diversifying Across Sources of Edge

A well-built alpha combo captures a form of diversification that goes beyond just diversifying across stocks — it diversifies across sources of edge itself, so that if any one alpha decays over time, a common risk as a signal becomes more widely known and arbitraged away by other traders, the overall combined forecast is far less damaged than if the whole strategy had depended on that one alpha alone.

# Quiz

1. In quantitative trading, what is an "alpha"?
   - A stock's ticker symbol
   - [x] A forecast, or trading signal, of a stock's expected excess return
   - A company's total market capitalization
   - A type of bond issued by the government
   > "Alpha" is standard quant shorthand for an individual signal or forecast predicting a stock's expected excess return, whether from momentum, an earnings surprise, or any other source.

2. What does an "alpha combo" do?
   - Trades off of a single alpha signal exclusively
   - [x] Blends several distinct alpha signals together into one combined forecast used to drive the portfolio
   - Ignores all quantitative signals in favor of pure guesswork
   - Refers to a type of options combination strategy
   > Rather than relying on any single signal, an alpha combo blends multiple distinct alphas into one combined forecast, aiming to diversify across sources of predictive edge.

3. How does the logic of an alpha combo relate to a multifactor portfolio?
   - They are unrelated concepts with no shared logic
   - [x] It follows the same diversification principle, but generalizes beyond named academic factors to any source of predictive signal, including proprietary data or model outputs
   - Alpha combos can only ever include exactly one signal
   - Multifactor portfolios and alpha combos always produce identical portfolios
   > Both rely on the idea that combining relatively independent, individually noisy signals reduces overall noise — an alpha combo simply applies this more broadly, beyond just named factors like value and momentum.

4. Why does combining alphas well require more than simply averaging them together?
   - Simple averaging is always the optimal approach with no exceptions
   - [x] Each alpha typically needs its own quality estimate — reliability and correlation with other alphas — so more reliable, independent signals can be weighted more heavily
   - Averaging alphas together is technically impossible
   - Alphas can never be compared to each other in terms of quality
   > Treating every alpha as equally reliable and independent would waste the benefit of weighting toward the signals that actually add the most value — proper combination requires estimating each alpha's quality and correlation with the others.

5. What risk does a well-diversified alpha combo help protect against?
   - The risk that a single stock's price never changes
   - [x] The risk that any one individual alpha decays over time (e.g., becomes widely known and arbitraged away), damaging the overall strategy much less than if it depended on that alpha alone
   - The risk that trading commissions increase
   - There is no risk that diversifying alphas can help mitigate
   > Individual signals can lose their edge over time as more traders discover and exploit them — combining many relatively independent alphas means the failure of any single one has a much smaller impact on the overall combined forecast.
