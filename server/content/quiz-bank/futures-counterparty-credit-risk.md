---
slug: futures-counterparty-credit-risk
---

# Quiz

1. {#q1} What is counterparty credit risk?
   - [x] The risk that the party on the other side of a contract fails to honor it, through inability or unwillingness to pay
   - The risk that a commodity's price falls to zero
   - A risk that only applies to exchange-traded futures
   - The risk of an exchange going bankrupt
   > Counterparty credit risk is specifically about the other side of the deal failing to perform, whether from inability or unwillingness to pay.

2. {#q2} Why is counterparty risk structurally higher in a forward than in a futures contract?
   - [x] A forward has no clearinghouse guarantee and typically no daily settlement, so losses can accumulate unrealized over the contract's entire life
   - Forwards and futures carry identical counterparty risk
   - Futures actually carry higher counterparty risk than forwards
   - Forwards are always physically settled, which eliminates counterparty risk
   > Without a clearinghouse or daily mark-to-market, a forward's accumulated gain or loss can build up unrealized until maturity, unlike a futures position's daily cash settlement.

3. {#q3} What role does a credit support annex (CSA) play in managing forward counterparty risk?
   - [x] It requires posting collateral as a contract's mark-to-market value moves, similar in spirit to a futures margin call but negotiated bilaterally
   - It eliminates the need for any credit assessment
   - It replaces the need for an ISDA master agreement entirely
   - It only applies to exchange-traded futures, never OTC forwards
   > A CSA brings margin-like collateral posting into the bilateral OTC world, reducing (though not eliminating) the buildup of uncollateralized counterparty exposure.

4. {#q4} What does a netting agreement accomplish between two counterparties with multiple outstanding forwards?
   - [x] It combines all outstanding contracts into a single net exposure amount, rather than treating each contract's exposure separately
   - It cancels all outstanding contracts automatically
   - It has no effect on actual credit exposure
   - It only applies to contracts with the exact same maturity date
   > Netting collapses gross exposure across many contracts into one net figure, dramatically reducing the credit exposure that would otherwise apply if every contract were assessed individually.

5. {#q5} [calc] Two banks have forwards worth $8 million in Bank A's favor and $3 million in Bank B's favor. Under a netting agreement, what is the actual net exposure?
   - [x] $5 million
   - $11 million
   - $8 million
   - $3 million
   > Netting combines the two into a single figure: $8 million − $3 million = $5 million, the amount that would actually change hands if every contract settled at once.

6. {#q6} Why do institutional counterparties assess each other's creditworthiness before entering a large forward contract?
   - [x] Because there's no clearinghouse vetting counterparties on their behalf the way there is in the futures market
   - Credit assessment is legally required only for futures, never forwards
   - Because forwards always default within their first year
   - Because assessing creditworthiness eliminates the need for any collateral
   > Without a clearinghouse standing between the two sides, each party has to independently evaluate whether the other is actually likely to perform on the contract.

7. {#q7} [calc] Wheat rises to $8.00 and the grain merchant defaults on the mill's 10,000-bushel forward at $6.50. What does the mill lose?
   - Nothing, since forwards are guaranteed
   - $65,000
   - [x] About $15,000, the gain it would have had from the contract
   - $80,000
   > The mill has to replace the wheat at $8.00, so it loses the ($8.00 - $6.50) × 10,000 = $15,000 value that the forward was holding for it.

8. {#q8} [calc] If instead wheat falls to $5.00 and the merchant defaults, what is the mill's credit exposure?
   - $15,000
   - $65,000
   - [x] None, since the contract is worth less than zero to the mill
   - $50,000
   > Counterparty exposure exists only when the contract is worth something to you. When it has a negative value for the mill, a default by the merchant doesn't cost the mill anything.

9. {#bk1} [calc] A long forward is currently worth $4,950 and the counterparty defaults, recovering 40 cents on the dollar. What is the loss?
   - $1,980
   - $4,950
   - [x] $2,970
   - $7,425
   > Loss = value × (1 − recovery) = $4,950 × 0.60 = $2,970.

10. {#bk2} [calc] A forward is currently worth −$3,000 to a party (it owes). The counterparty defaults. What is the party's credit loss?
   - [x] $0
   - $3,000
   - $1,500
   - −$3,000
   > A party that owes money has no credit exposure. Exposure is the larger of the contract value and zero, so the loss is $0.

11. {#bk3} [calc] A bank has two forwards with one counterparty, worth +$300,000 and −$120,000, under a netting agreement. What is the credit exposure?
   - $300,000
   - $420,000
   - [x] $180,000
   - $120,000
   > Netting combines the contracts: $300,000 − $120,000 = $180,000 of exposure.

12. {#bk4} [calc] A forward has a positive value to a bank of $2,000,000. The counterparty has a 3% default probability and loss given default is 60%. What is the expected credit loss?
   - $60,000
   - [x] $36,000
   - $1,200,000
   - $3,600
   > Expected loss = exposure × default probability × loss given default = $2,000,000 × 3% × 60% = $36,000.

13. {#bk5} [calc] A forward's mark-to-market value to a bank is $800,000 and the counterparty has posted $650,000 of collateral. What is the uncollateralized credit exposure?
   - $1,450,000
   - $650,000
   - $800,000
   - [x] $150,000
   > $800,000 − $650,000 = $150,000.

14. {#bk6} [calc] Under a netting agreement a bank has forwards with one counterparty worth +$500,000, −$200,000 and +$100,000. What is the net credit exposure?
   - $600,000
   - [x] $400,000
   - $800,000
   - $100,000
   > Net = $500,000 − $200,000 + $100,000 = $400,000.

15. {#bk7} [calc] The same forwards (+$500,000, −$200,000, +$100,000) are not netted, so only the positive ones count in a default. By how much does netting reduce the exposure?
   - $400,000
   - $600,000
   - $100,000
   - [x] $200,000
   > Without netting, exposure is $500,000 + $100,000 = $600,000. With netting it is $400,000, so netting removes $200,000.

16. {#bk8} [calc] A forward is worth +$40,000 to a party and the counterparty defaults, recovering 30 cents on the dollar. What is the loss?
   - $12,000
   - $40,000
   - [x] $28,000
   - $70,000
   > Loss = $40,000 × (1 − 0.30) = $28,000.

17. {#bk9} Why is counterparty risk higher in a forward than in a futures contract?
   - [x] A forward has no clearinghouse guarantee or daily settlement, so gains can build up unpaid until maturity
   - Forward contracts are always larger than futures
   - Futures counterparties are never required to pay
   - Forwards are more heavily regulated
   > A futures clearinghouse guarantees trades and collects losses every day. A forward typically accrues gains and losses until maturity.

18. {#bk10} What does a credit support annex (CSA) require?
   - Paying the full notional upfront
   - [x] Posting collateral as the forward's mark-to-market value moves
   - Both parties to hold insurance
   - The contract to settle in cash only
   > A CSA works like a futures margin call, though the terms are agreed bilaterally.

19. {#bk11} What does a netting agreement do if one counterparty defaults?
   - Settles only the contracts that are in the money
   - Cancels all gains for both parties
   - Requires every contract to be settled separately
   - [x] Combines all the contracts between the two parties into one net amount owed
   > Netting offsets gains and losses across many contracts, reducing the exposure compared with treating each one individually.
