---
slug: futures-equity-and-bond-forwards
---

# Quiz

1. {#q1} What is an equity forward?
   - [x] An agreement to buy or sell a stock, basket, or index of stocks at a fixed price on a future date
   - A type of dividend payment
   - An agreement that can only be used on bonds, never stocks
   - A contract that guarantees a stock's price will never fall
   > An equity forward applies the same basic forward structure used for any other underlying, using a stock or index as the underlying asset.

2. {#q2} Why does an equity forward's price sit below what pure financing cost alone would suggest?
   - [x] Because expected dividends the forward buyer won't collect before delivery are netted out of the forward price
   - Because equity forwards always trade below spot regardless of dividends
   - Because stocks never pay dividends
   - Because the exchange sets a fixed discount on all equity forwards
   > Since the forward buyer doesn't receive dividends paid before delivery, those expected payments are subtracted from the fair forward price relative to pure financing cost.

3. {#q3} How does a bond forward differ from a forward rate agreement (FRA)?
   - [x] A bond forward is priced and settled off an actual (or referenced) bond's price, while an FRA settles a purely notional interest-rate difference with no bond changing hands
   - They are identical instruments with different names
   - An FRA always involves physical delivery of a bond, while a bond forward never does
   - Bond forwards cannot be used to express a view on interest rates
   > An FRA's settlement is a cash payment based on an interest-rate gap applied to a notional amount, while a bond forward is tied directly to an actual bond's price at a future date.

4. {#q4} What does a bond forward's fair price net out, similar to how an equity forward nets out dividends?
   - [x] The bond's coupon income earned while holding it, plus the effect of its price converging toward face value as maturity nears
   - Nothing — bond forwards ignore all income entirely
   - The bond's credit rating
   - The equity market's performance
   > Just as dividends are netted from an equity forward's price, a bond's coupon income is netted from a bond forward's price, alongside the bond's natural price convergence toward face value.

5. {#q5} An investor is long a stock forward, and the stock pays $0.50/share in dividends before delivery. How does this affect the forward price relative to pure financing cost alone?
   - [x] The forward price sits below pure financing cost, roughly by the dividend amount
   - The forward price sits above pure financing cost by the dividend amount
   - Dividends have no effect on the forward price
   - The forward price becomes exactly equal to the dividend amount
   > Because the forward holder misses out on the $0.50 dividend, that expected payment is subtracted from what pure financing cost alone would otherwise imply for the forward price.

6. {#q6} [calc] A stock trades at $50 and pays a $0.50 dividend in three months. At a 4% financing rate, about what is the six-month forward price?
   - $51.01
   - [x] $50.51
   - $50.00
   - $49.50
   > Growing $50 at 4% for six months gives $51.01, and the dividend the forward holder misses lowers that by about $0.505, to $50.505.

7. {#q7} Why is the forward price lower than $51.01 when there is a dividend?
   - Forwards are always cheaper than the stock
   - The financing rate is lower for forwards
   - [x] The forward buyer doesn't receive the dividend, so the fair price is reduced by its value
   - Dividends are paid to the seller at delivery
   > Whoever holds the actual shares collects the dividend, so the forward buyer pays less to be compensated for missing it.

8. {#bk1} [calc] A stock is $50, the interest rate is 5% and the dividend yield is 2% (continuous). What is the fair 1-year forward price?
   - $52.56
   - $50.00
   - $48.51
   - [x] $51.52
   > F = $50 × e^((5% − 2%) × 1) = $51.52.

9. {#bk2} [calc] A bond costs $980 and pays a $40 coupon in 3 months. The 6-month forward is priced with a 5% continuous rate. What is the fair forward price?
   - $1,004.77
   - [x] $964.31
   - $980.00
   - $940.00
   > PV of the coupon = $40 × e^(−0.05 × 0.25) = $39.50. Forward = ($980 − $39.50) × e^(0.05 × 0.5) = $964.31.

10. {#bk3} [calc] An index is at 4,500 with a dividend yield of 1.5% and an interest rate of 5% (continuous). What is the fair 3-month forward level?
   - 4,500.0
   - 4,556.5
   - 4,611.7
   - [x] 4,539.5
   > F = 4,500 × e^((5% − 1.5%) × 0.25) = 4,539.5.

11. {#bk4} [calc] A stock is $80 and pays a $1.20 dividend in 2 months. The rate is 4% (continuous). What is the fair 6-month forward price?
   - [x] $80.40
   - $81.60
   - $80.00
   - $82.39
   > PV of the dividend = $1.20 × e^(−0.04 × 2/12) = $1.19. F = ($80 − $1.19) × e^(0.04 × 0.5) = $80.40.

12. {#bk5} [calc] A bond costs $1,020 and pays a $25 coupon in 2 months. The rate is 4% (continuous). What is the fair 6-month forward price?
   - $1,040.40
   - $1,020.00
   - [x] $1,015.27
   - $995.00
   > PV of the coupon = $25 × e^(−0.04 × 2/12) = $24.83. F = ($1,020 − $24.83) × e^(0.04 × 0.5) = $1,015.27.

13. {#bk6} [calc] A bond forward on $1 million of face value is priced at 98.50 per 100. What is the price to be paid at delivery?
   - [x] $985,000
   - $98,500
   - $9,850,000
   - $1,000,000
   > $1,000,000 × 98.50 / 100 = $985,000.

14. {#bk7} [calc] A trader is long a forward on 10,000 shares at $52.00. At maturity the stock is $55.30. What is the payoff?
   - $3,300
   - $330,000
   - [x] $33,000
   - $553,000
   > ($55.30 − $52.00) × 10,000 = $33,000.

15. {#bk8} [calc] An investor is long a cash-settled forward on 5,000 shares at $120. At maturity the stock is $112. What does the investor pay?
   - $8
   - $600,000
   - $560,000
   - [x] $40,000
   > The loss is ($120 − $112) × 5,000 = $40,000.

16. {#bk9} How does a bond forward differ from a forward rate agreement?
   - A bond forward has no price, while an FRA does
   - [x] A bond forward is priced and settled off an actual bond's price, while an FRA settles an interest-rate difference in cash
   - An FRA delivers a bond, while a bond forward never does
   - They are the same contract with different names
   > An FRA never involves a bond or a bond price. A bond forward references a specific bond.

17. {#bk10} Why does the fair price of a bond forward net out coupon income?
   - Coupons are paid to the exchange
   - Coupons are always reinvested for the buyer
   - [x] The forward buyer does not receive the coupons paid before delivery
   - The seller keeps no coupons
   > Just as for dividends on a stock, income paid before delivery goes to the holder of the bond, not the forward buyer.
