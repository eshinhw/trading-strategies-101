---
slug: futures-commodity-forwards
---

# Quiz

1. {#q1} How does a commodity producer typically use a forward contract to hedge?
   - [x] By going short a forward, locking in a sale price for future output
   - By going long a forward on their own product
   - Producers cannot use forward contracts to hedge
   - By buying insurance instead of a forward contract
   > A short forward locks in a fixed sale price for output not yet produced, protecting the producer from a price decline before the harvest or extraction is ready.

2. {#q2} How does a commodity consumer's hedge differ from a producer's?
   - [x] A consumer goes long a forward to lock in a purchase price, the mirror image of a producer's short hedge
   - Consumers and producers use the exact same side of the forward
   - Consumers cannot hedge commodity price risk with forwards
   - A consumer's hedge always requires physical delivery, while a producer's never does
   > A consumer facing rising input costs goes long a forward to lock in a purchase price, the opposite side from a producer locking in a sale price.

3. {#q3} Why do commodity forwards need to specify an exact grade and delivery location, just like a futures contract's specification?
   - [x] Because there's no exchange default to fall back on, and mismatched quality or location can create a real dispute at delivery
   - Grade and location are irrelevant to a forward contract
   - Only futures contracts need to specify grade and location
   - All commodities are identical regardless of grade or location
   > Since a forward has no exchange specification supplying these details automatically, the two parties have to negotiate and document them explicitly to avoid disputes.

4. {#q4} What is basis risk in the context of a commodity forward hedge?
   - [x] The risk that a mismatch between the hedge's exact terms (grade, location, timing) and the actual underlying exposure leaves the hedge imperfect
   - The risk that the forward price will never be paid at all
   - A risk that only applies to futures, never to forwards
   - The risk of the commodity's price falling to zero
   > Basis risk arises whenever a hedge's specific terms don't line up exactly with what's actually being hedged — even a custom-built forward can leave this gap.

5. {#q5} A bakery chain hedges the wheat it needs at its mill with the only forward available, on standard-grade wheat delivered at a terminal. What could make the hedge imperfect?
   - [x] A possible mismatch between the forward's specified grade and delivery location and the bakery's actual wheat purchases
   - The forward contract has no delivery date
   - Wheat prices never actually change
   - The bakery used a futures contract instead of a forward
   > If the bakery's real purchases differ in grade or delivery point from what the forward specifies, the hedge may not offset the bakery's actual cost changes perfectly.

6. {#q6} Why might an airline hedge jet fuel costs using a heating oil or crude oil forward instead of a jet-fuel-specific contract?
   - [x] A closely related product may be the only way to hedge at all when no jet-fuel forward exists in the needed size or location, accepting some basis risk in the process
   - Heating oil and jet fuel are always identical in price
   - Airlines are legally required to use crude oil rather than jet fuel contracts
   - Cross-hedging eliminates all basis risk entirely
   > A deliberate cross-hedge accepts some basis risk in exchange for being able to hedge exposure that would otherwise have no direct hedging instrument available.

7. {#q7} [calc] A bakery buys a terminal wheat forward at $6.50 and plans around a $0.10 local basis, so $6.60. At maturity the terminal price is $7.00 and the local basis is $0.25. What is its effective cost per bushel?
   - $6.50
   - $6.60
   - [x] $6.75
   - $7.25
   > It pays $7.25 locally and collects a $0.50 gain from the forward, so the net cost is $6.75. That is $0.15 above the $6.60 plan because the basis widened.

8. {#q8} What does the $1,500 difference from the bakery's plan represent?
   - The forward's financing cost
   - [x] Basis risk: the local price moved differently from the contract's reference price
   - Counterparty default by the grain merchant
   - A tax on the forward's gain
   > The forward hedges the terminal price, not the bakery's local delivery price, so a change in the gap between them is a risk the hedge leaves open.

9. {#bk1} [calc] A farmer sells wheat forward at $7.00 and the spot price at delivery is $6.20. What is the gain per bushel versus selling at spot?
   - [x] $0.80
   - −$0.80
   - $7.00
   - $6.20
   > The farmer receives $7.00 instead of $6.20, a gain of $0.80 per bushel.

10. {#bk2} [calc] A bakery buys 20,000 bushels of wheat forward at $6.80. At delivery the spot price is $7.50. How much does the forward save?
   - $1,400
   - $140,000
   - [x] $14,000
   - $136,000
   > Saving = ($7.50 − $6.80) × 20,000 = $14,000.

11. {#bk3} [calc] An oil driller sells 60,000 barrels forward at $78. At delivery the spot price is $72. How much better off is the driller than selling at spot?
   - [x] $360,000
   - $6
   - $4,680,000
   - $36,000
   > The driller receives $6 more per barrel: $6 × 60,000 = $360,000.

12. {#bk4} [calc] A refiner buys 50,000 barrels forward at $78. At delivery spot is $85. How much does the forward save the refiner?
   - $7
   - $3,900,000
   - $35,000
   - [x] $350,000
   > The refiner pays $7 less per barrel: $7 × 50,000 = $350,000.

13. {#bk5} [calc] Wheat spot is $6.00, financing is 3% a year (continuous) and storage and insurance cost $0.20 per bushel for 4 months, paid at delivery. What is the fair 4-month forward price?
   - $6.20
   - [x] $6.26
   - $6.00
   - $6.46
   > F = $6.00 × e^(0.03 × 4/12) + $0.20 = $6.06 + $0.20 = $6.26.

14. {#bk6} [calc] A forward calls for Grade A wheat at $6.50. The seller delivers Grade B at an agreed $0.18 discount, 20,000 bushels. What does the seller receive?
   - $130,000
   - $3,600
   - $133,600
   - [x] $126,400
   > Price = $6.50 − $0.18 = $6.32. $6.32 × 20,000 = $126,400.

15. {#bk7} [calc] A hedge is struck on Chicago wheat at $6.50, but the farmer's local price is usually $0.35 below Chicago. What effective price does the farmer receive on 40,000 bushels, if local prices are exactly that far below at delivery and Chicago ends at the forward price?
   - $260,000
   - [x] $246,000
   - $14,000
   - $274,000
   > Effective price = $6.50 − $0.35 = $6.15. $6.15 × 40,000 = $246,000. The $0.35 gap is basis risk the forward does not remove.

16. {#bk8} How does a commodity producer use a forward?
   - [x] Sells output forward to lock in revenue on the hedged volume
   - Buys output forward to lock in a purchase price
   - Uses it to take physical delivery of competitors' output
   - Uses it to guarantee a higher price than the market
   > A farmer or driller goes short a forward, so whatever the market does, the revenue on that volume is fixed.

17. {#bk9} How does a commodity consumer such as a refiner use a forward?
   - Sells forward to lock in revenue
   - Avoids hedging so that costs follow the market
   - [x] Buys forward to lock in input costs against a price rise
   - Uses it to fix the quality of its output
   > The consumer faces the mirror-image risk of a price rise, so goes long a forward.

18. {#bk10} What can leave basis risk in a commodity forward hedge?
   - Having a clearinghouse guarantee
   - [x] A different grade, delivery location or delivery date from the real exposure
   - Paying margin every day
   - Using cash settlement for financial indexes
   > If the hedge's terms do not match what is actually bought or sold, the hedge does not cancel all the price risk.
