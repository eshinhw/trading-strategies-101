---
slug: futures-forward-pricing
---

# Quiz

1. {#bk1} [calc] Wheat spot is $6.30 per bushel. Financing costs 4% a year (continuously compounded), and storage and insurance of $0.07 per bushel are paid at delivery. What is the fair 6-month forward price?
   - $6.43
   - $6.37
   - $6.36
   - [x] $6.50
   > $6.30 × e^(0.04×0.5) = $6.43, plus $0.07 storage = $6.50.

2. {#bk2} [calc] Crude oil spot is $78 per barrel. Financing costs 5% a year (continuously compounded), and storage and insurance of $1.20 per barrel are paid at delivery. What is the fair 9-month forward price?
   - $80.98
   - [x] $82.18
   - $79.20
   - $79.78
   > $78 × e^(0.05×0.75) = $80.98, plus $1.20 storage = $82.18.

3. {#bk3} [calc] Gold spot is $1,950 per ounce. Financing costs 4.5% a year (continuously compounded), and storage and insurance of $6 per ounce are paid at delivery. What is the fair 12-month forward price?
   - $2,039.75
   - $1,956
   - $2,033.75
   - [x] $2,045.75
   > $1,950 × e^(0.045×1) = $2,039.75, plus $6 storage = $2,045.75.

4. {#bk4} [calc] Corn spot is $4.10 per bushel. Financing costs 3% a year (continuously compounded), and storage and insurance of $0.02 per bushel are paid at delivery. What is the fair 3-month forward price?
   - [x] $4.15
   - $4.13
   - $4.12
   - $4.11
   > $4.10 × e^(0.03×0.25) = $4.13, plus $0.02 storage = $4.15.

5. {#bk5} [calc] A stock trades at $100 and pays a known $2 dividend in 6 months. With a 5% continuously compounded rate, what is the fair 12-month forward price?
   - $105.13
   - $107.13
   - [x] $103.08
   - $102.13
   > PV of the dividend = 2 × e^(−0.05×0.5) = $1.95. Forward = ($100 − $1.95) × e^(0.05×1) = $103.08.

6. {#bk6} [calc] A stock trades at $60 and pays a known $3 dividend in 3 months. With a 6% continuously compounded rate, what is the fair 12-month forward price?
   - [x] $60.57
   - $63.71
   - $66.71
   - $59.21
   > PV of the dividend = 3 × e^(−0.06×0.25) = $2.96. Forward = ($60 − $2.96) × e^(0.06×1) = $60.57.

7. {#bk7} [calc] Gold spot is $1,900. The financing rate is 4% and storage and insurance cost 0.5% a year (both continuous). What is the fair 1-year forward price?
   - $1,976
   - $1,900
   - [x] $1,987.45
   - $1,995.00
   > F = $1,900 × e^((4% + 0.5%) × 1) = $1,987.45.

8. {#bk8} [calc] Crude oil's fair 9-month forward price is $82.18, but a dealer offers a forward at $83.50. A trader buys the oil, borrows to pay for it, and sells the forward. What is the arbitrage profit per 1,000-barrel contract?
   - $5,500
   - $4,181
   - −$1,319
   - [x] $1,319
   > The forward is 1.32 above fair value. Locked-in profit = 1.32 × 1,000 = $1,319.

9. {#bk9} [calc] Crude oil's fair 9-month forward price is $82.18, but a dealer offers a forward at $81.00. What can a trader do, and how much is made per 1,000-barrel contract?
   - Sell the forward and buy the oil: $1,181
   - [x] Buy the forward and sell the oil short: $1,181
   - Do nothing: $0
   - Buy the forward and sell the oil short: $3,000
   > The forward is 1.18 below fair value, so buying it and shorting the asset earns 1.18 × 1,000 = $1,181.

10. {#bk10} [calc] A stock is $100 and its 1-year forward is $105.13. With no dividends or costs, what continuously compounded financing rate does that imply?
   - 5.13%
   - 10.5%
   - [x] 5.0%
   - 4.0%
   > r = ln(105.13 / 100) = 5.0%.

11. {#bk11} [calc] A stock index at 200 yields 1.5% in dividends. The interest rate is 4.5% (both continuous). What is the fair 6-month forward level?
   - [x] 203.02
   - 203.00
   - 200.00
   - 205.36
   > F = 200 × e^((4.5% − 1.5%) × 0.5) = 203.02.

12. {#bk12} [calc] Oil spot is $75. The interest rate is 5% and storage costs 2% a year (both continuous). What is the fair 3-month forward price?
   - $75.00
   - $76.88
   - [x] $76.32
   - $77.11
   > F = $75 × e^((5% + 2%) × 0.25) = $76.32.

13. {#bk13} How do expected dividends affect the fair forward price of a stock?
   - [x] They lower it, because the forward buyer does not receive the dividends before delivery
   - They raise it, because dividends add to the stock's value for the buyer
   - They have no effect on forward prices
   - They make the forward price equal to the spot price
   > The forward's price nets out the dividends the buyer misses, which is why a dividend-paying stock's forward is below spot plus financing.

14. {#bk14} What does a cash-and-carry arbitrageur do when a forward trades above its fair value?
   - Sells the asset and buys the forward
   - Waits for the spot price to rise
   - Buys the forward and the asset together
   - [x] Borrows cash, buys the asset, and sells the forward, locking in the difference
   > Selling the rich forward against owning the asset funded by borrowing locks in a riskless profit, which pushes the price back toward fair value.

15. {#bk15} In forward pricing, how is a foreign currency's interest rate treated?
   - Like a storage cost that adds to the forward price
   - [x] Like a continuous dividend yield, because holding the currency earns interest
   - As irrelevant to the forward price
   - Like a coupon that is paid only at maturity
   > Holding a foreign currency lets you earn its interest rate, just as holding a stock earns dividends, so it lowers the forward price relative to the cost of carry.
