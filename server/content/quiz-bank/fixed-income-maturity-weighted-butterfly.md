---
slug: fixed-income-maturity-weighted-butterfly
---

# Quiz

1. {#q1} What does a maturity-weighted butterfly use to set its wing weights?
   - A statistical regression of historical yield movements
   - [x] Each wing's maturity distance from the body
   - The credit rating of each bond
   - A fixed 50/50 split regardless of maturity
   > This construction weights the wings based on how far their maturities sit from the body's maturity, rather than on duration calculations or historical regression.

2. {#q2} What is the main appeal of the maturity-weighted approach?
   - It is the most mathematically precise weighting method available
   - [x] It's simple and mechanical — no need to calculate precise duration or run a statistical regression, just measure the maturity gap
   - It guarantees perfect dollar-duration neutrality
   - It requires the most extensive historical data of any method
   > Maturity-weighting is valued for being fast and easy to apply consistently, since it only requires measuring maturity distances rather than more involved calculations.

3. {#q3} Why is maturity distance only a rough proxy for a bond's actual interest-rate sensitivity?
   - Maturity distance perfectly predicts interest-rate sensitivity in all cases
   - [x] Duration doesn't scale in a perfectly linear way with maturity — it grows more slowly than maturity, especially at longer maturities, due to coupon payments arriving along the way
   - Interest-rate sensitivity is unrelated to a bond's maturity
   - All bonds have identical duration regardless of maturity
   > Two bonds the same distance in years from the body don't necessarily have matching dollar duration, since duration grows more slowly than maturity because of intervening coupon payments.

4. {#q4} How does maturity-weighting compare in complexity to dollar-duration-neutral or regression-weighted construction?
   - It is more complex than both alternatives
   - [x] It is simpler than both, since it skips precise duration calculations and historical regression entirely
   - It is identical in complexity to a regression-weighted butterfly
   - Complexity cannot be compared across these methods
   > Maturity-weighting is the most mechanical and simplest of the three approaches, trading precision for ease of use.

5. {#q5} When is a maturity-weighted butterfly often used in practice?
   - Only for trades held for multiple decades
   - [x] As a quick, intuitive starting point, potentially refined later with a more precise weighting method for larger or longer-held positions
   - Only when regression data is completely unavailable
   - It is never used in practice
   > Its simplicity makes it a practical first-pass construction, which a trader might later refine with dollar-duration or regression-based weighting for a more significant or longer-held trade.

6. {#calc1} [calc] A butterfly uses a 2-year wing, a 5-year body and a 10-year wing, weighting each wing inversely to its maturity distance from the body (3 years and 5 years). What weight does the 2-year wing get?
   - 37.5%
   - [x] 62.5%
   - 60%
   - 50%
   > The closer wing gets more weight: 5 / (3 + 5) = 62.5% for the 2-year wing and 3 / 8 = 37.5% for the 10-year wing.

7. {#bk1} [calc] A maturity-weighted butterfly sets the wing weights from maturities: short wing weight = (T long − T body) / (T long − T short) and long wing weight = (T body − T short) / (T long − T short). With 2-year, 5-year and 10-year bonds, what weight goes to the 2-year wing?
   - 37.5%
   - 50%
   - [x] 62.5%
   - 20%
   > (10 − 5) / (10 − 2) = 5 / 8 = 62.5%.

8. {#bk2} [calc] A maturity-weighted butterfly uses 1-year, 3-year and 7-year bonds (weights from maturities: short wing = (T long − T body) / (T long − T short)). What weight goes to the 1-year wing?
   - [x] 66.7%
   - 33.3%
   - 57.1%
   - 42.9%
   > (7 − 3) / (7 − 1) = 4 / 6 = 66.7%.

9. {#bk3} [calc] A maturity-weighted butterfly puts 62.5% in 2-year and 37.5% in 10-year bonds against a 5-year body. What is the weighted average wing maturity?
   - 6 years
   - 4.5 years
   - [x] 5 years
   - 8 years
   > 0.625 × 2 + 0.375 × 10 = 1.25 + 3.75 = 5 years, matching the body's maturity.
