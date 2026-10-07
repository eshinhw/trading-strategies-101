---
slug: futures-forward-beginner-mistakes
---

# Quiz

1. {#q1} Why is it a mistake to treat a forward contract as a right rather than an obligation?
   - [x] Both sides of a forward are obligated to perform at maturity, unlike an option, where the buyer can simply let it expire
   - Forwards and options carry identical obligations
   - A forward buyer can always walk away with no consequence
   - Only the short side of a forward has any real obligation
   > Declining to honor an unfavorable forward isn't like letting an option expire — it's a breach of a binding obligation both sides accepted at inception.

2. {#q2} Why is ignoring counterparty risk a particularly costly beginner mistake with forwards?
   - [x] There's no clearinghouse guarantee behind a forward, so an uncreditworthy counterparty can genuinely fail to perform at maturity
   - Counterparty risk does not apply to forward contracts
   - All forward counterparties are automatically vetted by regulators
   - Counterparty risk only matters for futures, not forwards
   > Without a clearinghouse standing behind the deal, a forward's performance depends entirely on the specific counterparty's ability and willingness to pay.

3. {#q3} What can go wrong if a beginner enters the wrong notional amount on a forward?
   - [x] The forward can under- or over-hedge the actual underlying exposure, leaving real, unintended risk
   - Notional amount has no effect on hedge effectiveness
   - The exchange automatically corrects any notional error
   - A wrong notional amount always makes the forward void
   > A forward's notional has to be sized to the actual exposure being hedged — get it wrong, and the hedge either leaves exposure uncovered or creates new, unwanted exposure.

4. {#q4} Why might a beginner be surprised that a custom-built forward hedge still doesn't perfectly offset their exposure?
   - [x] Basis risk — a mismatch in grade, location, or timing between the forward's terms and the actual exposure — can leave even a custom forward imperfect
   - Custom forwards are always perfectly matched to the underlying exposure
   - Basis risk only applies to futures contracts
   - Forwards eliminate all forms of risk automatically
   > Even a bespoke forward can carry basis risk if its exact terms don't line up precisely with the real underlying exposure being hedged.

5. {#q5} Why is it a mistake to assume an OTC forward can always be exited easily before maturity?
   - [x] Exiting typically requires the original counterparty's cooperation or a new counterparty willing to accept a novated position — nothing like a futures position's instant offsetting trade
   - Forwards can always be cancelled unilaterally with no counterparty involvement
   - OTC contracts are exchange-traded, just like futures
   - There is no risk at all in trying to exit a forward early
   > Without an exchange to trade out on, closing a forward early depends on finding a willing counterparty — something that isn't guaranteed to be available whenever a trader wants out.

6. {#q6} A U.S. importer owes €1,000,000 in six months but signs a forward for €1,500,000, leaving it over-hedged by €500,000. What mistake caused this?
   - [x] Entering the wrong notional amount, overshooting the actual invoice the forward was meant to hedge
   - Choosing the wrong settlement date
   - Failing to check the counterparty's credit rating
   - Using a futures contract instead of a forward
   > A notional-sizing error, not a date or counterparty issue, is what left the company obligated to buy more euros than its actual payment required.

7. {#calc1} [calc] A company needs €2 million but accidentally buys €3 million forward at $1.10. The euro falls to $1.05. What is the loss on the extra €1 million?
   - $5,000
   - $100,000
   - [x] $50,000
   - $150,000
   > The extra €1M was bought at $1.10 and is worth $1.05, a loss of $0.05 × 1,000,000 = $50,000.

8. {#bk1} [calc] A trader sells a forward on 100,000 bushels at $6.50, a $650,000 notional. The spot price rises 5% before delivery. What is the loss on the short forward?
   - $650,000
   - $3,250
   - [x] $32,500
   - $325,000
   > The loss is the price move, not the notional: 5% × $650,000 = $32,500.

9. {#bk2} [calc] A farmer sells Grade A wheat forward at $7.00 for 10,000 bushels, settled against the Grade A price. At maturity Grade A trades at $6.60, but the farmer's Grade B crop sells locally for $6.35. What is the farmer's effective total revenue?
   - [x] $67,500
   - $70,000
   - $63,500
   - $66,000
   > The forward gains $7.00 − $6.60 = $0.40. The crop sells at $6.35. Effective price = $6.75, so 10,000 × $6.75 = $67,500, which is $2,500 below the $70,000 the farmer hoped for.

10. {#bk3} [calc] A grower expects 8,000 bushels but sells 10,000 forward at $6.50. At delivery the price is $7.10 and the crop sells at $7.10. How much less does the grower end up with than a perfectly sized hedge ($6.50 on 8,000 bushels)?
   - $6,000
   - $4,800
   - [x] $1,200
   - $0
   > Perfect hedge: 8,000 × $6.50 = $52,000. Actual: 8,000 × $7.10 = $56,800, less the forward loss of ($7.10 − $6.50) × 10,000 = $6,000, for $50,800. The shortfall is $52,000 − $50,800 = $1,200.

11. {#bk4} [calc] A trader is long a forward for 1,000 barrels at $82 and treats it as an option. At maturity oil trades at $74. The trader refuses to take delivery. What is the amount owed relative to the market?
   - $0, because forwards can be declined
   - [x] $8,000
   - $74,000
   - $82,000
   > A forward is an obligation. The trader must pay $82 for oil worth $74, a loss of $8 × 1,000 = $8,000.

12. {#bk5} [calc] A party has a forward gain of $15,000 when its counterparty defaults and recovers 50 cents on the dollar. How much does it lose?
   - $15,000
   - $22,500
   - $0
   - [x] $7,500
   > Loss = $15,000 × (1 − 0.50) = $7,500.

13. {#bk6} Why is it a mistake to assume a custom-built forward hedge is automatically perfect?
   - A forward hedge can never reduce risk
   - [x] Differences in grade, location or timing from the real exposure can leave basis risk behind
   - Custom forwards are always cash-settled
   - Forwards have no counterparty
   > A forward only hedges what its terms match. Any mismatch with the true exposure leaves residual risk.

14. {#bk7} Why can a beginner not assume they can exit a forward easily before maturity?
   - Forward contracts cannot be exited under any circumstances
   - A forward can be closed instantly on an exchange
   - Exiting is always free of charge
   - [x] Exiting generally needs the original counterparty's cooperation or a new party willing to take over
   > There is no exchange offsetting trade for a forward. Leaving early requires an agreement.

15. {#bk8} What can go wrong if a forward's notional amount or settlement date is set wrong?
   - The exchange automatically corrects the terms
   - The contract becomes an option
   - [x] The hedge may not line up with the real exposure, leaving part of it uncovered or over-covered
   - Nothing, since forward terms are standardized
   > Because every term is custom, the user must size and date the contract to the exposure being hedged.
