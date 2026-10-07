---
slug: futures-counterparty-credit-risk
title: Counterparty Credit Risk
summary: A deeper look at the risk that a forward's counterparty fails to perform — why it's structurally higher than in exchange-traded futures, and the credit assessment, collateral, and netting tools used to manage it.
---

## What Counterparty Risk Is

Counterparty credit risk is the risk that the party on the other side of a contract fails to honor it — through inability to pay, unwillingness, or outright default — leaving the other side exposed to a loss it can't recover. Every forward carries this risk to some degree, since it's fundamentally a private promise between two specific parties rather than a claim on a centrally guaranteed structure.

## Why It's Higher in Forwards Than Futures

A futures position's counterparty risk is absorbed by the clearinghouse, backed by daily mark-to-market settlement that prevents losses from ever accumulating unpaid for long, plus a mutualized guarantee fund behind that. A forward has neither: gains and losses typically accrue unrealized until maturity, and there is no clearinghouse standing behind the deal, so the full amount at risk can build up over the contract's entire life before either side ever collects anything.

## Credit Assessment

Before entering a forward, especially a large or long-dated one, institutional counterparties typically assess each other's creditworthiness directly — credit ratings, financial statements, and the trading relationship's history — precisely because there's no clearinghouse doing that vetting on their behalf the way there is in the futures market.

## Collateral and Margining (CSAs)

Many institutional OTC forward relationships are backed by a credit support annex (CSA), typically attached to an ISDA master agreement (covered in the next lesson), which requires posting collateral as the contract's mark-to-market value moves — economically similar to a futures margin call, but negotiated bilaterally between the two parties rather than mandated uniformly by an exchange.

## Netting Agreements

When two counterparties have many forward contracts outstanding with each other, some in-the-money and some out-of-the-money, a netting agreement lets them combine all of it into a single net amount owed in the event of a default, rather than each contract being settled (or defaulted on) individually. This dramatically reduces the credit exposure between two active counterparties down to just the net figure, rather than the full sum of every individual contract's gross exposure.

## Example

**One contract: the mill and the merchant**

The mill is long 10,000 bushels at $6.50. Its exposure to the merchant depends on where wheat goes.

- Wheat rises to $8.00: the contract is worth ($8.00 − $6.50) × 10,000 = $15,000 to the mill.
- If the merchant defaults, the mill buys wheat at $8.00 and pays $80,000 instead of $65,000, losing the $15,000 it was counting on.
- Wheat falls to $5.00: the contract is worth −$15,000 to the mill, and a merchant default costs it nothing.

$$
\text{exposure} = \max(\text{contract value},\ 0)
$$

With a CSA collateral agreement and a zero threshold, the merchant would post about $15,000 as the contract rose, leaving almost nothing uncovered.

**Many contracts: netting**

Two banks have five forwards between them.

- Three are worth $8 million in total to Bank A.
- Two are worth $3 million in total to Bank B.

$$
\text{Without netting, Bank A's exposure} = \$8\text{ million}
$$

$$
\text{With netting} = \$8\text{ million} - \$3\text{ million} = \boxed{\$5\text{ million}}
$$

Netting collapses the exposure to the one amount that would actually change hands.

# Quiz

1. What is counterparty credit risk?
   - [x] The risk that the party on the other side of a contract fails to honor it, through inability or unwillingness to pay
   - The risk that a commodity's price falls to zero
   - A risk that only applies to exchange-traded futures
   - The risk of an exchange going bankrupt
   > Counterparty credit risk is specifically about the other side of the deal failing to perform, whether from inability or unwillingness to pay.

2. Why is counterparty risk structurally higher in a forward than in a futures contract?
   - [x] A forward has no clearinghouse guarantee and typically no daily settlement, so losses can accumulate unrealized over the contract's entire life
   - Forwards and futures carry identical counterparty risk
   - Futures actually carry higher counterparty risk than forwards
   - Forwards are always physically settled, which eliminates counterparty risk
   > Without a clearinghouse or daily mark-to-market, a forward's accumulated gain or loss can build up unrealized until maturity, unlike a futures position's daily cash settlement.

3. What role does a credit support annex (CSA) play in managing forward counterparty risk?
   - [x] It requires posting collateral as a contract's mark-to-market value moves, similar in spirit to a futures margin call but negotiated bilaterally
   - It eliminates the need for any credit assessment
   - It replaces the need for an ISDA master agreement entirely
   - It only applies to exchange-traded futures, never OTC forwards
   > A CSA brings margin-like collateral posting into the bilateral OTC world, reducing (though not eliminating) the buildup of uncollateralized counterparty exposure.

4. What does a netting agreement accomplish between two counterparties with multiple outstanding forwards?
   - [x] It combines all outstanding contracts into a single net exposure amount, rather than treating each contract's exposure separately
   - It cancels all outstanding contracts automatically
   - It has no effect on actual credit exposure
   - It only applies to contracts with the exact same maturity date
   > Netting collapses gross exposure across many contracts into one net figure, dramatically reducing the credit exposure that would otherwise apply if every contract were assessed individually.

5. Two banks have forwards worth $8 million in Bank A's favor and $3 million in Bank B's favor. Under a netting agreement, what is the actual net exposure?
   - [x] $5 million
   - $11 million
   - $8 million
   - $3 million
   > Netting combines the two into a single figure: $8 million − $3 million = $5 million, the amount that would actually change hands if every contract settled at once.

6. Why do institutional counterparties assess each other's creditworthiness before entering a large forward contract?
   - [x] Because there's no clearinghouse vetting counterparties on their behalf the way there is in the futures market
   - Credit assessment is legally required only for futures, never forwards
   - Because forwards always default within their first year
   - Because assessing creditworthiness eliminates the need for any collateral
   > Without a clearinghouse standing between the two sides, each party has to independently evaluate whether the other is actually likely to perform on the contract.

7. Wheat rises to $8.00 and the grain merchant defaults on the mill's 10,000-bushel forward at $6.50. What does the mill lose?
   - Nothing, since forwards are guaranteed
   - $65,000
   - [x] About $15,000, the gain it would have had from the contract
   - $80,000
   > The mill has to replace the wheat at $8.00, so it loses the ($8.00 - $6.50) × 10,000 = $15,000 value that the forward was holding for it.

8. If instead wheat falls to $5.00 and the merchant defaults, what is the mill's credit exposure?
   - $15,000
   - $65,000
   - [x] None, since the contract is worth less than zero to the mill
   - $50,000
   > Counterparty exposure exists only when the contract is worth something to you. When it has a negative value for the mill, a default by the merchant doesn't cost the mill anything.
