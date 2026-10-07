---
slug: futures-closing-out-a-forward
---

# Quiz

1. {#q1} Why is closing out a forward position before maturity harder than closing a futures position?
   - [x] A forward is a private bilateral obligation with no exchange or clearinghouse to trade out of, unlike a futures position
   - Forwards can never be closed out before maturity under any circumstances
   - Futures positions are actually harder to close than forwards
   - Forwards are always automatically closed by the exchange
   > A futures position closes with a simple offsetting exchange trade thanks to clearinghouse novation; a forward has no equivalent mechanism since it's tied to one specific counterparty.

2. {#q2} What is a key drawback of closing out a forward by entering a new, opposite forward with a different counterparty?
   - [x] It leaves two separate contracts outstanding, with counterparty risk on both, rather than actually closing the original position
   - It is illegal in most jurisdictions
   - It always costs more than the original contract's full notional value
   - It automatically cancels the original forward
   > Unless done with the same counterparty and formally cancelled, an offsetting forward is a second contract layered on top of the first, not a true close-out.

3. {#q3} Why does novating or assigning a forward to a new counterparty require the original counterparty's consent?
   - [x] Because that party is being asked to accept a new, possibly less creditworthy counterparty in place of the one it originally agreed to trade with
   - Consent is never actually required for novation
   - Because novation automatically happens through a clearinghouse for forwards, just like futures
   - Because assignment is illegal for OTC contracts
   > Unlike a futures clearinghouse's automatic, anonymous novation, transferring a bilateral forward requires the remaining party's agreement to accept a different counterparty.

4. {#q4} What happens in a mutual termination of a forward contract?
   - [x] The two original counterparties agree to cancel the contract early, settling it in cash at its current mark-to-market value
   - One party unilaterally cancels the contract with no payment
   - The contract is automatically extended to a new maturity date
   - Mutual termination is not possible for any forward contract
   > Mutual termination settles the contract's current fair value directly between the two original parties, cleanly ending the obligation with no contracts left outstanding.

5. {#q5} Why might a company prefer mutual termination over entering an offsetting forward with a new bank?
   - [x] Mutual termination avoids leaving two separate contracts (and two sets of counterparty risk) outstanding
   - Mutual termination is always more expensive
   - An offsetting forward with a new bank always eliminates all outstanding obligations
   - There is no practical difference between the two approaches
   > A single mutual termination settles the position cleanly in one step, while an offsetting forward with a new counterparty leaves two live contracts until each separately runs its course.

6. {#q6} The mill's forward is worth $4,950. What does a mutual termination with the merchant look like?
   - The mill pays the merchant $4,950
   - The mill pays the merchant $5,000 at maturity
   - [x] The merchant pays the mill about $4,950 today and no contract remains
   - Nothing is paid, and both contracts continue
   > A mutual termination settles the contract at its current mark-to-market value, so the side it is worth money to is paid that amount and the contract ends.

7. {#q7} [calc] The mill sells 10,000 bushels forward to a second bank at $7.00 instead of terminating. What is its locked-in result at maturity?
   - Zero, since the two contracts cancel completely
   - A gain or loss that depends on the wheat price
   - [x] A fixed $5,000 gain, with counterparty risk to both banks
   - A fixed $4,950 gain paid today
   > The original long and the new short move in opposite directions, leaving ($7.00 - $6.50) × 10,000 = $5,000 at maturity, but both contracts remain outstanding.

8. {#bk1} [calc] A mill is long a forward for 10,000 bushels at $6.50. It closes out by entering an offsetting forward to sell at $7.00 for the same date. What profit is locked in at maturity?
   - $500
   - [x] $5,000
   - $65,000
   - $70,000
   > The two forwards cancel, leaving the price difference: ($7.00 − $6.50) × 10,000 = $5,000.

9. {#bk2} [calc] A forward's locked-in gain of $5,000 is received in 3 months. The discount rate is 4% (continuous). What is the gain's present value, i.e. its value if the forward is closed out today?
   - $5,000
   - $5,050
   - $4,500
   - [x] $4,950
   > PV = $5,000 × e^(−0.04 × 0.25) = $4,950.

10. {#bk3} [calc] A trader is short a forward to deliver 5,000 bushels at $7.00. To close out, they enter an offsetting long forward at $7.40. What is the result at maturity?
   - +$2,000
   - [x] −$2,000
   - −$37,000
   - −$400
   > The short loses when the offsetting price is higher: ($7.00 − $7.40) × 5,000 = −$2,000.

11. {#bk4} [calc] A long forward on 20,000 bushels has a delivery price of $6.50. A new forward with 6 months left costs $6.90 and the rate is 4%. If both sides agree to terminate it now, what does the short pay the long?
   - $8,000
   - $6,900
   - [x] $7,842
   - $8,160
   > Value = ($6.90 − $6.50) × 20,000 × e^(−0.04 × 0.5) = $7,842.

12. {#bk5} [calc] A trader is long a forward on 1,000 barrels at $82 with Bank A. Instead of cancelling, the trader sells a forward on 1,000 barrels at $85 for the same date with Bank B. How many forward contracts are now open, and what profit is locked in?
   - [x] Two contracts, $3,000 locked in
   - One contract, $3,000 locked in
   - Zero contracts, $3,000 locked in
   - Two contracts, $85,000 locked in
   > The two forwards offset economically and lock in ($85 − $82) × 1,000 = $3,000, but both contracts stay open, each with its own counterparty risk.

13. {#bk6} [calc] A party assigns a forward worth +$12,000 to a new counterparty with the consent of the original counterparty. What payment would it normally expect from the new party?
   - $0
   - About $120,000
   - [x] About $12,000
   - About −$12,000
   > The new party steps into a position worth $12,000, so it normally pays that mark-to-market value to take it over.

14. {#bk7} [calc] A trader is long a forward on 10,000 bushels at $6.50 and offsets it with a short forward on 9,000 bushels at $7.00 for the same date. What profit is locked in, and how many bushels remain unhedged?
   - [x] $4,500 locked in, 1,000 bushels still exposed
   - $5,000 locked in, no bushels exposed
   - $4,500 locked in, no bushels exposed
   - $5,000 locked in, 1,000 bushels exposed
   > The matched 9,000 bushels lock in ($7.00 − $6.50) × 9,000 = $4,500. The other 1,000 bushels of the long are still open.

15. {#bk8} Why is closing a forward harder than closing a futures position?
   - Forwards cannot be closed under any circumstances
   - [x] A forward is a private bilateral obligation, with no clearinghouse to make contracts interchangeable
   - Futures positions require the counterparty's consent to close
   - Forwards have no maturity date
   > A futures position is closed with an equal and opposite exchange trade. A forward is tied to one specific counterparty.

16. {#bk9} What does novating or assigning a forward to a new party require?
   - The consent of the exchange
   - Nothing, since either side can transfer freely
   - A payment from the remaining counterparty
   - [x] The consent of the remaining original counterparty
   > The remaining counterparty is being asked to accept a new party's credit risk, so it must agree.

17. {#bk10} At what value is a forward settled in a mutual termination?
   - [x] Its current mark-to-market value
   - The original delivery price
   - Zero, since the contract is cancelled
   - The spot price multiplied by the quantity
   > The two parties agree to cancel and settle in cash at the contract's fair value today, leaving no contracts outstanding.
