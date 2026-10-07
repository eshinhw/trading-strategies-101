---
slug: what-is-a-forward-contract
---

# Quiz

1. {#q1} In the simplest terms, what is a forward contract?
   - [x] An agreement between two parties to buy and sell something at an agreed price on an agreed future date
   - A loan that must be repaid immediately
   - A guarantee that an asset's price will never change
   - A contract that can only be used for stocks
     > A forward is fundamentally just a promise: a fixed price and a fixed future date, agreed by two parties today, with the actual exchange happening later.

2. {#q2} What does it mean to be "long" a forward contract?
   - You've agreed to sell the asset later
   - [x] You've agreed to buy the asset later
   - You've cancelled the contract
   - You have no position in the contract at all
     > The long side of a forward is the party who has agreed to buy the underlying asset at the agreed future date — the short side is whoever agreed to sell it.

3. {#q3} Why might a coffee roaster enter into a forward with a coffee grower for beans it needs in three months?
   - [x] To remove the uncertainty of not knowing what coffee will cost in three months, by locking in a fixed price today
   - To immediately receive the coffee beans today
   - To guarantee a lower price than the grower's cost
   - Forwards cannot be used for physical commodities like coffee
     > The roaster's motivation is certainty: locking in today's agreed price removes the risk that coffee prices might rise before the shipment is actually needed.

4. {#q4} What is the fundamental tradeoff both sides of a forward contract accept?
   - Both sides guarantee themselves a profit no matter what happens
   - [x] Both sides give up the chance of a better outcome from waiting, in exchange for a known, fixed number to plan around
   - Only one side takes on any risk at all
   - Forwards eliminate risk for the entire market, not just the two parties involved
     > Neither side knows in advance whether the locked-in price will end up better or worse than the eventual market price — the value of a forward is the certainty itself, not a guaranteed favorable outcome.

5. {#q5} How is a forward contract's notional value calculated?
   - The amount of cash exchanged when the contract is signed
   - [x] The agreed forward price multiplied by the quantity of the underlying asset
   - The total profit the long party expects to earn
   - A fixed fee charged by the exchange
     > Notional value represents the total economic exposure of the contract — the forward price times the quantity of the asset — even though little or no cash typically changes hands upfront.

6. {#q6} What are the two ways a forward contract can be settled at maturity?
   - [x] Physical settlement (delivering the actual asset) or cash settlement (exchanging the price difference)
   - Early settlement or late settlement, with no other options
   - Settlement can only ever happen through physical delivery
   - Settlement always happens automatically without any agreement
     > A forward can be settled either through actual physical delivery of the underlying asset against payment, or through a cash payment reflecting the difference between the agreed and actual market price.

7. {#q7} [calc] A forward on 10,000 bushels of wheat at $6.50/bushel is cash-settled when the market price is $7.00/bushel. What does the merchant pay the mill?
   - $65,000
   - $70,000
   - [x] $5,000
   - Nothing — cash settlement means no payment is made
     > Cash settlement pays only the difference between the agreed and market price: ($7.00 − $6.50) × 10,000 = $5,000, which gives the mill the same $6.50-per-bushel economic outcome as physical delivery would.

8. {#q8} Why does a forward contract carry counterparty risk?
   - Because forwards are always guaranteed by a central clearinghouse
   - [x] Because it's a private, over-the-counter agreement, so its fulfillment depends entirely on the other party's willingness and ability to honor it
   - Because forward contracts cannot legally be enforced
   - Counterparty risk does not apply to forward contracts
     > Unlike an exchange-cleared contract, a forward's integrity rests entirely on the specific counterparty actually following through at maturity, with no clearinghouse guarantee behind it.

9. {#q9} How does a forward's obligation differ from an option buyer's?
   - [x] Both sides of a forward are obligated to go through with the deal at maturity, while an option buyer can simply let an unfavorable option expire worthless
   - A forward buyer can walk away at any time with no consequence, just like an option buyer
   - Only the short side of a forward has any obligation
   - Options carry more obligation than forwards do
     > A forward's defining feature is symmetric obligation on both sides — neither can walk away — unlike an option, where the buyer holds a right without an obligation.

10. {#q10} What are the two main structural differences between a forward and a futures contract?

- [x] A forward is customized and OTC, settling once at maturity; a future is standardized, exchange-traded, and marked to market daily
- There are no real differences between the two
- A forward is exchange-traded while a future is private and customized
- Futures always require physical delivery, while forwards never do
  > Customization/OTC-vs-standardized/exchange-traded, and lump-sum-at-maturity-vs-daily-mark-to-market, are the two defining structural differences, both rooted in a forward being a private bilateral deal versus a future being a public, cleared one.

11. {#q11} Why must a forward contract spell out its currency and delivery location?
   - [x] There's no exchange-approved standard list to fall back on, unlike a futures contract's built-in specification
   - Currency and location are irrelevant to a forward contract
   - All forwards are automatically settled in U.S. dollars
   - Only commodity forwards ever have a delivery location
   > A futures contract's specification includes approved delivery locations by default; a forward has none of that built in, so the two parties have to write it in themselves.

12. {#q12} Why can the negotiated forward price differ from the theoretical fair forward price?
   - The negotiated price and the fair price are always identical
   - Forward prices are set by an exchange, not negotiated
   - [x] A specific deal's price still depends on each side's relative bargaining position, not purely on the fair-value formula
   - Fair value only applies to futures
   > The cost-of-carry formula gives a theoretical benchmark, but a negotiated deal between two parties can land somewhat away from it depending on their relative leverage.

13. {#bk1} [calc] A buyer agrees to buy 1,000 ounces of gold forward at $1,980. At settlement gold trades at $2,020. What is the buyer's gain?
   - $4,000
   - $2,020,000
   - [x] $40,000
   - $1,980,000
   > The buyer pays $1,980 for gold worth $2,020: ($2,020 − $1,980) × 1,000 = $40,000.

14. {#bk2} [calc] A coffee roaster agrees to buy 100,000 pounds of beans in three months at $2.50 per pound. What is the notional value of the forward?
   - [x] $250,000
   - $2.50
   - $25,000
   - $2,500,000
   > Notional = forward price × quantity = $2.50 × 100,000 = $250,000.

15. {#bk3} [calc] A cash-settled forward lets a buyer purchase 50,000 pounds at $2.50. At maturity the market price is $2.72. What cash does the buyer receive?
   - $125,000
   - $136,000
   - [x] $11,000
   - $1,100
   > The buyer gains the difference: ($2.72 − $2.50) × 50,000 = $11,000.

16. {#bk4} [calc] A cash-settled forward lets a buyer purchase 50,000 pounds at $2.50. At maturity the market price is $2.31. What does the buyer pay?
   - $115,500
   - [x] $9,500
   - $950
   - $125,000
   > The buyer loses the difference: ($2.50 − $2.31) × 50,000 = $9,500.

17. {#bk5} [calc] A refiner agrees to buy 50,000 barrels of crude oil forward at $82. What is the notional value?
   - $410,000
   - $41,000,000
   - $82
   - [x] $4,100,000
   > $82 × 50,000 = $4,100,000.

18. {#bk6} [calc] A bakery enters a forward to buy 20,000 bushels of wheat at $6.50 in six months. How much does it normally pay at the moment the contract is signed?
   - $130,000
   - [x] $0
   - $13,000
   - $6.50
   > Nothing is typically paid when a forward is entered. Payment happens at maturity.

19. {#bk7} What does a forward contract separate?
   - The buyer's profit from the seller's profit
   - The asset's value from its notional amount
   - The delivery location from the delivery date
   - [x] When the price is agreed from when the transaction takes place
   > The key idea is that the price, quantity and date are fixed today, while the exchange of the asset happens later.

20. {#bk8} What does being long a forward mean?
   - Agreeing to sell the underlying asset in the future
   - Holding the contract for a long time
   - [x] Agreeing to buy the underlying asset in the future
   - Having the right but not the obligation to buy
   > The long side agrees to buy and benefits if the market price rises above the agreed price. The short side agrees to sell.

21. {#bk9} Why can a forward match a business's needs more closely than a standardized contract?
   - [x] The quantity, date, price currency and location are negotiated privately between the two parties
   - The exchange sets the terms to suit each business
   - The contract is guaranteed against any loss
   - It always settles in cash, so no terms are needed
   > A forward is a private bilateral deal, so every term can be fitted to the real exposure, from a custom-sized shipment to a particular delivery date.

22. {#bk10} When is cash settlement of a forward most common?
   - When the underlying is a farm commodity that must be shipped
   - [x] When physical delivery is impractical, such as with a financial index
   - When the contract has no counterparty
   - Only when the forward price equals the spot price
   > Physical delivery is more common for commodities that really change hands. For an index or interest rate, the parties just exchange the difference in cash.

23. {#bk11} How is the notional value of a forward calculated?
   - The upfront cash paid when the contract is signed
   - The spot price at maturity minus the forward price
   - The margin posted by the buyer
   - [x] The agreed forward price multiplied by the quantity of the underlying
   > Notional value is the total value of the underlying the contract controls. It, not the usually zero upfront payment, determines the real economic exposure.
