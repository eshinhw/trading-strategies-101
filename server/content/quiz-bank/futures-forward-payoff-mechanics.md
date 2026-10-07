---
slug: futures-forward-payoff-mechanics
---

# Quiz

1. {#q1} What is the payoff formula for the long side of a forward contract at maturity?
   - [x] Spot price at maturity minus the delivery price
   - Delivery price minus the spot price at maturity
   - Spot price at maturity multiplied by the delivery price
   - Always zero, regardless of price
   > The long profits when the asset's spot price at maturity exceeds the delivery price locked in at inception — payoff(long) = spot − delivery price.

2. {#q2} Why is the short's payoff exactly the negative of the long's payoff?
   - [x] Because a forward is a zero-sum contract between its two parties, with no third party involved
   - It isn't — the short and long payoffs are unrelated
   - Because the short always loses money
   - Because the exchange absorbs any difference between the two
   > Whatever one side gains, the other side loses in exactly equal amount — there's no external party to the transaction who could absorb or supply the difference.

3. {#q3} How does a forward's payoff risk compare to an option buyer's?
   - [x] A forward's long and short both carry unlimited, uncapped exposure in either direction, unlike an option buyer whose loss is capped at the premium paid
   - A forward's risk is always smaller than an option's
   - An option buyer has unlimited risk, just like a forward
   - Forwards and options have identical payoff structures
   > Because there's no premium paid upfront to cap losses, both sides of a forward face symmetric, uncapped payoff risk — a direct consequence of the obligation both sides carry.

4. {#q4} [calc] A mill is long a wheat forward (10,000 bushels, $6.50 delivery price). Spot at maturity is $7.20. What is the mill's payoff?
   - [x] $7,000 gain
   - $7,000 loss
   - $65,000 gain
   - $0
   > ($7.20 − $6.50) × 10,000 = $7,000 — a gain, since the mill locked in a price below the eventual market price.

5. {#q5} [calc] Using the same wheat forward, if spot at maturity instead falls to $5.80, what is the mill's (long) payoff?
   - [x] −$7,000 (a loss)
   - +$7,000 (a gain)
   - $0
   - −$65,000 (a loss)
   > ($5.80 − $6.50) × 10,000 = −$7,000 — a loss, since the mill is obligated to pay $6.50 for wheat now worth only $5.80.

6. {#q6} In the falling-price scenario above, what is the merchant's (short) payoff?
   - [x] +$7,000, the exact mirror image of the mill's loss
   - −$7,000, the same as the mill's payoff
   - $0, since the short is unaffected by price changes
   - +$65,000
   > The short's payoff is delivery price minus spot: ($6.50 − $5.80) × 10,000 = $7,000, the exact mirror image of the long's −$7,000 loss.

7. {#bk1} [calc] A trader is long a forward for 10,000 bushels of wheat at $6.50. At delivery the spot price is $7.20. What is the payoff on the long forward?
   - −$7,000
   - $1
   - [x] +$7,000
   - $72,000
   > The long gains the amount spot finishes above the delivery price: ($7.20 − $6.50) × 10,000 = $7,000.

8. {#bk2} [calc] A trader is long a forward for 1,000 barrels of oil at $85. At delivery the spot price is $78. What is the payoff on the long forward?
   - [x] −$7,000
   - +$7,000
   - $7
   - $78,000
   > The long gains the amount spot finishes above the delivery price: ($78 − $85) × 1,000 = −$7,000.

9. {#bk3} [calc] A seller agrees to sell 8,000 bushels forward at $7.10. At delivery the spot price is $6.75. What is the seller's profit?
   - −$2,800
   - $56,800
   - [x] $2,800
   - $280
   > The seller receives $7.10 for grain worth $6.75: ($7.10 − $6.75) × 8,000 = $2,800.

10. {#bk4} [calc] A long forward on 1,000 ounces of gold has a delivery price of $1,950. At maturity gold is $1,910. What is the long's payoff?
   - +$40,000
   - [x] −$40,000
   - −$4,000
   - −$1,910,000
   > Payoff = (spot − delivery price) × quantity = ($1,910 − $1,950) × 1,000 = −$40,000.

11. {#bk5} [calc] A long forward on 1,000 ounces of gold has a delivery price of $1,950. At maturity gold is $1,910. What is the short's payoff?
   - −$40,000
   - +$4,000
   - $0
   - [x] +$40,000
   > The short's payoff is the mirror image: ($1,950 − $1,910) × 1,000 = +$40,000.

12. {#bk6} [calc] The long side of a forward earns $18,000 at maturity. What does the short side earn?
   - +$18,000
   - [x] −$18,000
   - $0
   - −$36,000
   > A forward is zero-sum, so the short's payoff is exactly the opposite: −$18,000.

13. {#bk7} [calc] A forward on 5,000 barrels has a delivery price of $82. The spot price at maturity rises from $84 in one scenario to $87 in another. By how much does the long's payoff differ between the two?
   - $3,000
   - $1,500
   - $25,000
   - [x] $15,000
   > The payoff is linear: each $1 of spot adds $5,000. $3 × 5,000 = $15,000.

14. {#bk8} Why can a forward's long and short both lose more than any amount paid upfront?
   - The exchange always adds a hidden fee
   - They can cancel at any time
   - [x] No premium is paid, so there is no cap on the loss in either direction
   - The payoff is an option
   > A forward's payoff is linear and uncapped. Unlike an option buyer, neither party has a premium that limits its loss.

15. {#bk9} What does it mean that a forward is a zero-sum contract?
   - [x] Whatever the long gains, the short loses by exactly the same amount
   - The contract always has zero value
   - Neither party can profit
   - Both parties always profit equally
   > With no third party absorbing the difference, one side's gain is the other side's loss.
