---
slug: indexes-how-index-values-are-calculated
---

# Quiz

1. {#q1} What is an index's divisor used for?
   - [x] Scaling the weighted sum of constituent prices or market caps down to a convenient, readable index level
   - Setting the index's daily price limit
   - Determining which companies qualify for index membership
   - Calculating each company's individual stock price
   > The divisor is the scaling factor applied to the weighted sum of constituents, producing the familiar index level rather than some large, arbitrary raw number.

2. {#q2} Why does the divisor need to be adjusted after a stock split?
   - [x] To cancel out the mechanical price drop from the split, so the index reflects only real market moves
   - Stock splits have no effect on an index and require no adjustment
   - To permanently remove the split company from the index
   - To double the index's overall level
   > A stock split changes a share price without changing the company's actual value, so the divisor is recalculated to prevent that purely mechanical change from distorting the index level.

3. {#q3} What is index reconstitution?
   - [x] Adding newly qualifying companies to the index and removing ones that no longer fit its rules
   - Recalculating every constituent's stock price from scratch
   - Permanently freezing the index's membership forever
   - A one-time event that only happens when an index first launches
   > Reconstitution periodically updates index membership to reflect companies that now qualify (or no longer qualify) under the index's rules.

4. {#q4} Why do rebalancing and reconstitution require divisor adjustments?
   - [x] So changes to constituent weights or membership don't create an artificial jump or drop in the index level
   - Divisor adjustments are unrelated to rebalancing or reconstitution
   - To increase the index's level every time a rebalance occurs
   - Because rebalancing removes the need for a divisor entirely
   > Just like a stock split, changes to weights or membership would mechanically shift the index level without the divisor being recalculated to absorb that change.

5. {#q5} What would happen to a price-weighted index without any divisor adjustment after a 2-for-1 split?
   - [x] The index would show an artificial drop purely from the split, unrelated to actual market performance
   - The index level would be completely unaffected
   - The index would automatically double in value
   - The split company would be instantly removed from the index
   > Without adjusting the divisor, the split's mechanical price halving would show up as a real-looking decline in the index, even though nothing about the company's actual value changed.

6. {#calc1} [calc] A price-weighted index holds stocks priced $240, $120 and $60 with a divisor of 3. The $240 stock splits 3-for-1. What new divisor keeps the index level unchanged?
   - 3.0
   - 2.0
   - About 0.857
   - [x] About 1.857
   > The index is (240 + 120 + 60) / 3 = 140. After the split the prices sum to 80 + 120 + 60 = 260, so the divisor must be 260 / 140 ≈ 1.857.

7. {#calc2} [calc] A market-cap-weighted index has three stocks with caps of $500 billion (+4%), $300 billion (−1%) and $200 billion (+2%). What is the index return?
   - +1.7%
   - [x] +2.1%
   - +5.0%
   - +1.0%
   > The weights are 50%, 30% and 20%: 0.5 × 4% + 0.3 × (−1%) + 0.2 × 2% = 2.0% − 0.3% + 0.4% = +2.1%.

8. {#bk1} [calc] A price-weighted index holds stocks priced at $120, $80, $50 and $30, with a divisor of 4. What is the index level?
   - 280
   - 56
   - [x] 70
   - 35
   > A price-weighted index adds the prices and divides by the divisor: $280 / 4 = 70.

9. {#bk2} [calc] A price-weighted index holds stocks priced at $210, $90 and $60, with a divisor of 3. What is the index level?
   - [x] 120
   - 360
   - 90
   - 60
   > A price-weighted index adds the prices and divides by the divisor: $360 / 3 = 120.

10. {#bk3} [calc] A price-weighted index holds stocks priced at $75, $45, $60 and $20, with a divisor of 2.5. What is the index level?
   - 200
   - 50
   - [x] 80
   - 57.14
   > A price-weighted index adds the prices and divides by the divisor: $200 / 2.5 = 80.

11. {#bk4} [calc] A price-weighted index of four stocks has prices summing to $280 and a level of 70. A $120 stock splits 2-for-1 (to $60). To keep the level at 70, what is the new divisor?
   - 4.000
   - [x] 3.143
   - 2.000
   - 3.714
   > After the split the prices sum to $220. The divisor must satisfy $220 / divisor = 70, so divisor = 3.143.

12. {#bk5} [calc] A market-cap-weighted index starts at 1,000 when total market value is $8.0 trillion. Total market value later rises to $8.6 trillion, with no changes in membership. What is the index level?
   - 600
   - 1,060
   - 930
   - [x] 1,075
   > Level = base × current value / base value = 1,000 × 8.6 / 8 = 1,075.

13. {#bk6} [calc] A market-cap-weighted index starts at 500 when total market value is $12 trillion. Total market value later rises to $12.6 trillion, with no changes in membership. What is the index level?
   - 300
   - [x] 525
   - 560
   - 476
   > Level = base × current value / base value = 500 × 12.6 / 12 = 525.

14. {#bk7} [calc] An equal-weighted index holds three stocks that return +12%, +3%, and −6% over a month. What is the index return?
   - 4.5%
   - 9%
   - −6%
   - [x] 3%
   > Equal weights give the simple average: (12% + 3% − 6%) / 3 = 3%.
