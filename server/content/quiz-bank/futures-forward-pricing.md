---
slug: futures-forward-pricing
---

# Quiz

1. {#q1} What is the general no-arbitrage principle behind a forward contract's theoretical fair price?
   - The forward price should always equal exactly zero
   - [x] It should equal the asset's current spot price plus the cost of carrying that asset until the delivery date
   - The forward price is set entirely by government regulation
   - The forward price has no relationship to the spot price
   > The cost-of-carry framework says a forward's fair price reflects today's spot price adjusted for the costs (and any income) of holding that asset until delivery.

2. {#q2} What additional cost does forward pricing for a physical commodity typically include, beyond financing?
   - No additional costs — physical commodities are priced exactly like stocks
   - [x] Real, tangible storage costs — warehousing, insurance, and sometimes spoilage risk
   - A mandatory government tax unique to commodities
   - The cost of shipping the commodity to a different country
   > Unlike financial assets, physical commodities involve genuine storage-related costs that must be included in the cost-of-carry calculation.

3. {#q3} What is "convenience yield," and how does it affect a commodity's forward price?
   - It has no effect on forward pricing whatsoever
   - [x] It's the benefit of holding the physical commodity now rather than a future promise of delivery, which can pull the forward price down, sometimes below spot
   - It's a fee charged for storing a commodity
   - It only applies to stocks, never to commodities
   > Convenience yield reflects the value of having immediate physical access to a commodity, which offsets storage and financing costs and can even push the forward price below the current spot price.

4. {#q4} How does a stock's forward price account for expected dividends?
   - Dividends have no effect on a stock's forward price
   - [x] Expected dividends are subtracted from the financing cost, since a forward buyer doesn't receive dividends paid before delivery the way an actual shareholder would
   - Dividends are added on top of the full financing cost
   - A stock's forward price is always identical to its spot price regardless of dividends
   > Since the forward buyer doesn't own the stock (and doesn't collect dividends) until delivery, expected dividend payments reduce the fair forward price relative to what pure financing cost alone would suggest.

5. {#q5} What does bond forward pricing net out from the financing cost, in place of dividends?
   - Nothing is netted out — bond forward pricing ignores all income
   - [x] The bond's coupon interest earned while holding it, along with accounting for the bond's price converging toward face value as it nears maturity
   - The bond's credit rating
   - The stock market's overall performance
   > Like dividends for a stock, a bond's coupon payments are income the forward buyer misses out on until delivery, so they're subtracted from the financing cost, and the pricing must also reflect the bond's natural price convergence toward face value over time.

6. {#q6} What determines whether a currency's forward exchange rate trades at a premium or discount to spot, under covered interest rate parity?
   - [x] The difference between the domestic and foreign risk-free interest rates
   - The stock market's overall performance that day
   - A fixed rate set once a year by central banks
   - The trade balance between the two countries alone
   > Covered interest rate parity ties the forward FX rate directly to the interest rate differential between the two currencies — the currency with the higher rate trades at a forward discount, and the one with the lower rate at a forward premium.

7. {#q7} Why do many option pricing models substitute the forward price for the spot price when pricing an option on a futures contract?
   - [x] Because the forward price already embeds the cost of carry and any dividend adjustments, so it captures everything needed without separately tracking financing costs
   - Because the forward price is always identical to the option's strike price
   - Because spot prices cannot legally be used in option pricing
   - Because futures options never actually expire
   > Since the forward or futures price already reflects financing costs and expected income, models like the Black model can price the option directly off that single number instead of the spot price plus a separate cost-of-carry adjustment.

8. {#q8} In a cash-and-carry arbitrage, what does the arbitrageur do when the forward price is trading above its theoretical fair value?
   - [x] Borrow money, buy the asset now, and sell it forward at the higher market price, locking in a riskless profit at delivery
   - Do nothing, since forward prices can never be mispriced
   - Short the asset and buy it back immediately
   - Only trade options, never the underlying asset
   > Cash-and-carry arbitrage exploits an overpriced forward by buying the asset today, financed with borrowed cash, and locking in the sale at the richer forward price — this buying and selling pressure is what pulls the market's forward price back toward fair value.

9. {#q9} What's the difference between modeling dividends as a known dollar amount versus as a continuous dividend yield in forward pricing?
   - [x] A known dollar amount is subtracted as a present value from spot before compounding, while a continuous yield lowers the effective compounding rate itself — the latter is more natural for a broad index paying dividends continuously
   - There is no difference — both methods always produce the exact same forward price
   - Dividend yield only applies to bonds, never to stocks
   - A known dollar amount can only be used for foreign currencies
   > A single stock's specific, scheduled dividend is usually modeled as a discrete cash amount netted from spot, while a broad index's many staggered dividends are better approximated as a smooth percentage yield that lowers the effective compounding rate.

10. {#q10} Why does the difficulty of short-selling certain physical commodities matter for forward pricing?
   - [x] It weakens the arbitrage force that would normally correct an underpriced forward, since reverse cash-and-carry arbitrage requires being able to short the underlying asset
   - It has no effect on forward pricing at all
   - It only matters for pricing stock forwards, never commodities
   - It makes commodity forwards impossible to trade
   > Reverse cash-and-carry arbitrage — the correction for an underpriced forward — depends on being able to short the physical asset; when that's impractical, as it often is for commodities, forward prices can drift further from the pure cost-of-carry value, which is part of why convenience yield matters so much for commodities specifically.

11. {#q11} [calc] The mill's merchant prices a six-month wheat forward from a spot price of $6.30, a 4% financing rate and $0.07 of storage per bushel. What is the fair forward price?
   - $6.30
   - [x] $6.50
   - $6.37
   - $6.70
   > Growing $6.30 at 4% for six months gives about $6.43, and adding $0.07 of storage gives about $6.50.

12. {#q12} A merchant quotes $6.70 when the fair price is about $6.50. What can a trading desk do?
   - Buy the forward and wait for the price to fall
   - [x] Borrow, buy and store the wheat, and sell it forward at $6.70 to lock in about $2,027 on 10,000 bushels
   - Nothing, because forwards can't be arbitraged
   - Sell the wheat short and buy it forward at $6.70
   > When the forward is above fair value the desk runs a cash-and-carry arbitrage, earning the $0.20 per bushel gap that the carry costs don't explain.

13. {#bk1} [calc] Wheat spot is $6.30 per bushel. Financing costs 4% a year (continuously compounded), and storage and insurance of $0.07 per bushel are paid at delivery. What is the fair 6-month forward price?
   - $6.43
   - $6.37
   - $6.36
   - [x] $6.50
   > $6.30 × e^(0.04×0.5) = $6.43, plus $0.07 storage = $6.50.

14. {#bk2} [calc] Crude oil spot is $78 per barrel. Financing costs 5% a year (continuously compounded), and storage and insurance of $1.20 per barrel are paid at delivery. What is the fair 9-month forward price?
   - $80.98
   - [x] $82.18
   - $79.20
   - $79.78
   > $78 × e^(0.05×0.75) = $80.98, plus $1.20 storage = $82.18.

15. {#bk3} [calc] Gold spot is $1,950 per ounce. Financing costs 4.5% a year (continuously compounded), and storage and insurance of $6 per ounce are paid at delivery. What is the fair 12-month forward price?
   - $2,039.75
   - $1,956
   - $2,033.75
   - [x] $2,045.75
   > $1,950 × e^(0.045×1) = $2,039.75, plus $6 storage = $2,045.75.

16. {#bk4} [calc] Corn spot is $4.10 per bushel. Financing costs 3% a year (continuously compounded), and storage and insurance of $0.02 per bushel are paid at delivery. What is the fair 3-month forward price?
   - [x] $4.15
   - $4.13
   - $4.12
   - $4.11
   > $4.10 × e^(0.03×0.25) = $4.13, plus $0.02 storage = $4.15.

17. {#bk5} [calc] A stock trades at $100 and pays a known $2 dividend in 6 months. With a 5% continuously compounded rate, what is the fair 12-month forward price?
   - $105.13
   - $107.13
   - [x] $103.08
   - $102.13
   > PV of the dividend = 2 × e^(−0.05×0.5) = $1.95. Forward = ($100 − $1.95) × e^(0.05×1) = $103.08.

18. {#bk6} [calc] A stock trades at $60 and pays a known $3 dividend in 3 months. With a 6% continuously compounded rate, what is the fair 12-month forward price?
   - [x] $60.57
   - $63.71
   - $66.71
   - $59.21
   > PV of the dividend = 3 × e^(−0.06×0.25) = $2.96. Forward = ($60 − $2.96) × e^(0.06×1) = $60.57.

19. {#bk7} [calc] Gold spot is $1,900. The financing rate is 4% and storage and insurance cost 0.5% a year (both continuous). What is the fair 1-year forward price?
   - $1,976
   - $1,900
   - [x] $1,987.45
   - $1,995.00
   > F = $1,900 × e^((4% + 0.5%) × 1) = $1,987.45.

20. {#bk8} [calc] Crude oil's fair 9-month forward price is $82.18, but a dealer offers a forward at $83.50. A trader buys the oil, borrows to pay for it, and sells the forward. What is the arbitrage profit per 1,000-barrel contract?
   - $5,500
   - $4,181
   - −$1,319
   - [x] $1,319
   > The forward is 1.32 above fair value. Locked-in profit = 1.32 × 1,000 = $1,319.

21. {#bk9} [calc] Crude oil's fair 9-month forward price is $82.18, but a dealer offers a forward at $81.00. What can a trader do, and how much is made per 1,000-barrel contract?
   - Sell the forward and buy the oil: $1,181
   - [x] Buy the forward and sell the oil short: $1,181
   - Do nothing: $0
   - Buy the forward and sell the oil short: $3,000
   > The forward is 1.18 below fair value, so buying it and shorting the asset earns 1.18 × 1,000 = $1,181.

22. {#bk10} [calc] A stock is $100 and its 1-year forward is $105.13. With no dividends or costs, what continuously compounded financing rate does that imply?
   - 5.13%
   - 10.5%
   - [x] 5.0%
   - 4.0%
   > r = ln(105.13 / 100) = 5.0%.

23. {#bk11} [calc] A stock index at 200 yields 1.5% in dividends. The interest rate is 4.5% (both continuous). What is the fair 6-month forward level?
   - [x] 203.02
   - 203.00
   - 200.00
   - 205.36
   > F = 200 × e^((4.5% − 1.5%) × 0.5) = 203.02.

24. {#bk12} [calc] Oil spot is $75. The interest rate is 5% and storage costs 2% a year (both continuous). What is the fair 3-month forward price?
   - $75.00
   - $76.88
   - [x] $76.32
   - $77.11
   > F = $75 × e^((5% + 2%) × 0.25) = $76.32.

25. {#bk13} How do expected dividends affect the fair forward price of a stock?
   - [x] They lower it, because the forward buyer does not receive the dividends before delivery
   - They raise it, because dividends add to the stock's value for the buyer
   - They have no effect on forward prices
   - They make the forward price equal to the spot price
   > The forward's price nets out the dividends the buyer misses, which is why a dividend-paying stock's forward is below spot plus financing.

26. {#bk14} What does a cash-and-carry arbitrageur do when a forward trades above its fair value?
   - Sells the asset and buys the forward
   - Waits for the spot price to rise
   - Buys the forward and the asset together
   - [x] Borrows cash, buys the asset, and sells the forward, locking in the difference
   > Selling the rich forward against owning the asset funded by borrowing locks in a riskless profit, which pushes the price back toward fair value.

27. {#bk15} In forward pricing, how is a foreign currency's interest rate treated?
   - Like a storage cost that adds to the forward price
   - [x] Like a continuous dividend yield, because holding the currency earns interest
   - As irrelevant to the forward price
   - Like a coupon that is paid only at maturity
   > Holding a foreign currency lets you earn its interest rate, just as holding a stock earns dividends, so it lowers the forward price relative to the cost of carry.
