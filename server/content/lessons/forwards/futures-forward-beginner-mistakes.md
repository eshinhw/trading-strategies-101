---
slug: futures-forward-beginner-mistakes
title: Common Beginner Mistakes with Forwards
summary: Five recurring mistakes that trip up new users of forward contracts — treating them as a right instead of an obligation, underestimating counterparty and settlement risk, sloppy terms, ignored basis risk, and assuming an easy exit.
---

## Treating a Forward as a Right, Not an Obligation

As covered earlier in this course, both sides of a forward are obligated to perform at maturity — there's no premium paid for the right to walk away the way there is with an option. A beginner who treats an unfavorable forward as something they can simply decline to honor, the way an option buyer lets a bad option expire, is making a mistake that can mean a genuine breach of contract, not just a forgone opportunity.

## Ignoring Counterparty and Settlement Risk

Because a forward isn't guaranteed by a clearinghouse, entering one with a counterparty whose creditworthiness was never actually checked leaves a beginner exposed to exactly the failure-to-perform risk covered in the counterparty-credit-risk lesson — a risk that's easy to overlook when the forward's own price terms look attractive.

## Using the Wrong Notional Amount or Settlement Date

Because a forward's terms are fully custom rather than pulled from a standard exchange specification, a beginner has to get every detail right themselves — the notional amount actually needed, and a settlement date that actually lines up with the underlying exposure being hedged. A mismatched notional under- or over-hedges the real exposure, and a mismatched date leaves a gap where the exposure is unhedged either before or after the forward settles.

## Forgetting to Account for Basis Risk

Even a custom-built forward can leave basis risk behind if its exact terms — grade, location, or timing — don't perfectly match the underlying exposure, as covered in the commodity-forwards lesson. A beginner who assumes a forward hedge is automatically a perfect one, simply because it was custom-negotiated, can be surprised when the hedge doesn't offset their actual exposure as cleanly as expected.

## Assuming an OTC Contract Can Always Be Exited Easily

As covered in the closing-out lesson, exiting a forward before maturity generally requires either the original counterparty's cooperation or finding a new one willing to accept a novated position — nothing like a futures position's instant offsetting exchange trade. A beginner who assumes they can simply exit an unfavorable forward whenever they want may find that no willing counterparty, or no willing original bank, actually exists at that moment.

## Example

A U.S. importer owes €1,000,000 in six months and signs a forward at $1.10. The notional is copied from a different invoice, so it is entered as €1,500,000.

- Needed: €1,000,000
- Hedged: €1,500,000
- Over-hedged by: €500,000

The €1,000,000 invoice is fixed at $1.10, so it costs $1,100,000 whatever the rate does. The extra €500,000 is an open currency position.

**Euro rises to $1.20**

$$
(\$1.20 - \$1.10) \times 500{,}000 = +\$50{,}000
$$

**Euro falls to $1.00**

$$
(\$1.00 - \$1.10) \times 500{,}000 = -\$50{,}000
$$

Every $0.10 move in the euro now costs or earns $50,000 that has nothing to do with the importer's business. A second person checking the notional against the invoice would have caught it.

# Quiz

1. Why is it a mistake to treat a forward contract as a right rather than an obligation?
   - [x] Both sides of a forward are obligated to perform at maturity, unlike an option, where the buyer can simply let it expire
   - Forwards and options carry identical obligations
   - A forward buyer can always walk away with no consequence
   - Only the short side of a forward has any real obligation
   > Declining to honor an unfavorable forward isn't like letting an option expire — it's a breach of a binding obligation both sides accepted at inception.

2. Why is ignoring counterparty risk a particularly costly beginner mistake with forwards?
   - [x] There's no clearinghouse guarantee behind a forward, so an uncreditworthy counterparty can genuinely fail to perform at maturity
   - Counterparty risk does not apply to forward contracts
   - All forward counterparties are automatically vetted by regulators
   - Counterparty risk only matters for futures, not forwards
   > Without a clearinghouse standing behind the deal, a forward's performance depends entirely on the specific counterparty's ability and willingness to pay.

3. What can go wrong if a beginner enters the wrong notional amount on a forward?
   - [x] The forward can under- or over-hedge the actual underlying exposure, leaving real, unintended risk
   - Notional amount has no effect on hedge effectiveness
   - The exchange automatically corrects any notional error
   - A wrong notional amount always makes the forward void
   > A forward's notional has to be sized to the actual exposure being hedged — get it wrong, and the hedge either leaves exposure uncovered or creates new, unwanted exposure.

4. Why might a beginner be surprised that a custom-built forward hedge still doesn't perfectly offset their exposure?
   - [x] Basis risk — a mismatch in grade, location, or timing between the forward's terms and the actual exposure — can leave even a custom forward imperfect
   - Custom forwards are always perfectly matched to the underlying exposure
   - Basis risk only applies to futures contracts
   - Forwards eliminate all forms of risk automatically
   > Even a bespoke forward can carry basis risk if its exact terms don't line up precisely with the real underlying exposure being hedged.

5. Why is it a mistake to assume an OTC forward can always be exited easily before maturity?
   - [x] Exiting typically requires the original counterparty's cooperation or a new counterparty willing to accept a novated position — nothing like a futures position's instant offsetting trade
   - Forwards can always be cancelled unilaterally with no counterparty involvement
   - OTC contracts are exchange-traded, just like futures
   - There is no risk at all in trying to exit a forward early
   > Without an exchange to trade out on, closing a forward early depends on finding a willing counterparty — something that isn't guaranteed to be available whenever a trader wants out.

6. In the importer example, what mistake led to the company being over-hedged by €500,000?
   - [x] Entering the wrong notional amount, overshooting the actual invoice the forward was meant to hedge
   - Choosing the wrong settlement date
   - Failing to check the counterparty's credit rating
   - Using a futures contract instead of a forward
   > A notional-sizing error, not a date or counterparty issue, is what left the company obligated to buy more euros than its actual payment required.
