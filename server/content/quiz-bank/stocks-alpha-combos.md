---
slug: stocks-alpha-combos
---

# Quiz

1. {#q1} In quantitative trading, what is an "alpha"?
   - A stock's ticker symbol
   - [x] A forecast, or trading signal, of a stock's expected excess return
   - A company's total market capitalization
   - A type of bond issued by the government
   > "Alpha" is standard quant shorthand for an individual signal or forecast predicting a stock's expected excess return, whether from momentum, an earnings surprise, or any other source.

2. {#q2} What does an "alpha combo" do?
   - Trades off of a single alpha signal exclusively
   - [x] Blends several distinct alpha signals together into one combined forecast used to drive the portfolio
   - Ignores all quantitative signals in favor of pure guesswork
   - Refers to a type of options combination strategy
   > Rather than relying on any single signal, an alpha combo blends multiple distinct alphas into one combined forecast, aiming to diversify across sources of predictive edge.

3. {#q3} How does the logic of an alpha combo relate to a multifactor portfolio?
   - They are unrelated concepts with no shared logic
   - [x] It follows the same diversification principle, but generalizes beyond named academic factors to any source of predictive signal, including proprietary data or model outputs
   - Alpha combos can only ever include exactly one signal
   - Multifactor portfolios and alpha combos always produce identical portfolios
   > Both rely on the idea that combining relatively independent, individually noisy signals reduces overall noise — an alpha combo simply applies this more broadly, beyond just named factors like value and momentum.

4. {#q4} Why does combining alphas well require more than simply averaging them together?
   - Simple averaging is always the optimal approach with no exceptions
   - [x] Each alpha typically needs its own quality estimate — reliability and correlation with other alphas — so more reliable, independent signals can be weighted more heavily
   - Averaging alphas together is technically impossible
   - Alphas can never be compared to each other in terms of quality
   > Treating every alpha as equally reliable and independent would waste the benefit of weighting toward the signals that actually add the most value — proper combination requires estimating each alpha's quality and correlation with the others.

5. {#q5} What risk does a well-diversified alpha combo help protect against?
   - The risk that a single stock's price never changes
   - [x] The risk that any one individual alpha decays over time (e.g., becomes widely known and arbitraged away), damaging the overall strategy much less than if it depended on that alpha alone
   - The risk that trading commissions increase
   - There is no risk that diversifying alphas can help mitigate
   > Individual signals can lose their edge over time as more traders discover and exploit them — combining many relatively independent alphas means the failure of any single one has a much smaller impact on the overall combined forecast.

6. {#calc1} [calc] A model weights alpha A at 60% and alpha B at 40%. The forecasts are +1.5% from A and −0.5% from B. What is the blended forecast?
   - +0.5%
   - [x] +0.7%
   - +1.0%
   - +0.9%
   > 0.6 × 1.5% + 0.4 × (−0.5%) = 0.9% − 0.2% = +0.7%.

7. {#bk1} [calc] Three alpha signals forecast a stock's return as +2%, +1% and −1%. They are blended with weights of 50%, 30% and 20%. What is the blended forecast?
   - +0.67%
   - +2.0%
   - [x] +1.1%
   - +1.5%
   > Blend = 0.5 × 2% + 0.3 × 1% + 0.2 × (−1%) = 1.0% + 0.3% − 0.2% = 1.1%.

8. {#bk2} [calc] Three alpha signals forecast +2%, +1% and −1%. What is the equal-weighted forecast?
   - [x] +0.67%
   - +1.1%
   - +2.0%
   - +1.0%
   > Equal weights give (2 + 1 − 1) / 3 = +0.67%.

9. {#bk3} [calc] Two uncorrelated alpha signals each have an information ratio of 0.5. What is the information ratio of the best combination of the two?
   - 1.00
   - 0.50
   - [x] 0.71
   - 0.25
   > For uncorrelated signals, information ratios combine as √(0.5² + 0.5²) = 0.71.

10. {#bk4} [calc] Two alphas forecast +3% and +1% and have estimated quality weights of 75% and 25%. What is the combined forecast?
   - +2%
   - [x] +2.5%
   - +4%
   - +1.5%
   > 0.75 × 3% + 0.25 × 1% = 2.25% + 0.25% = 2.5%.

11. {#bk5} [calc] Two alphas each forecast +2%. They are perfectly correlated. What does combining them add compared with using one?
   - Double the forecast, +4%
   - Half the forecast, +1%
   - A diversification benefit that cuts risk in half
   - [x] Nothing, since the same signal is counted twice
   > A perfectly correlated signal carries no new information, so the combined forecast is still +2%.

12. {#bk6} What should a well-built combination of alphas weight each signal by?
   - Only how large its forecast is
   - [x] Its estimated reliability and how correlated it is with the other signals
   - Only its name or origin
   - Equal weights, whatever the signals
   > A good combination considers each alpha's quality and independence, not just a simple average.
