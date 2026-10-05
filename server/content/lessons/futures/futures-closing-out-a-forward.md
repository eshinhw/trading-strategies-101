---
slug: futures-closing-out-a-forward
title: Closing Out a Forward Before Maturity
summary: Why exiting a forward early is fundamentally harder than closing a futures position — and the three ways it's actually done: an offsetting forward, novation or assignment, or mutual termination.
---

## Why Closing Out Is Harder for a Forward

Closing a futures position is as simple as placing an equal and opposite trade on the exchange — the clearinghouse's novation, covered elsewhere in this course, makes every contract anonymously interchangeable. A forward has no such mechanism: it's a private bilateral obligation to one specific counterparty, so there's no exchange to simply trade out of the position on.

## Offsetting with a Mirror-Image Forward

One option is to enter a brand-new, opposite forward — same underlying, quantity, and maturity — with either the original counterparty or someone else entirely. This locks in the net economic outcome, but unless it's with the same counterparty and both sides agree to formally cancel the original contract, it actually leaves two separate contracts outstanding rather than one closed position, meaning counterparty risk on both remains live until each one is separately settled.

## Novation and Assignment

Novation is formally transferring one side of a forward to a new counterparty, replacing the original party's obligation entirely; assignment similarly transfers rights and obligations to a new party. Both require the consent of the remaining original counterparty, since that party is being asked to accept a new, possibly less creditworthy counterparty in place of the one it originally agreed to trade with — a sharp contrast to a futures clearinghouse's automatic, anonymous novation the instant a trade is matched.

## Mutual Termination

The cleanest option, when available, is simply agreeing directly with the original counterparty to cancel the contract early, settling it at its current mark-to-market value — the same valuation covered in the Valuing an Existing Forward Contract lesson. This avoids leaving any contracts outstanding at all, but only works if the original counterparty is willing to agree to it.

## Example in Practice

A hedge fund that wants to unwind an FX forward well before maturity typically approaches its original bank counterparty first, since a mutual termination at fair value is usually cleaner and cheaper than leaving two offsetting contracts outstanding or hunting for a new counterparty willing to accept a novated position — a practical constraint that simply doesn't exist for an exchange-traded futures position. A company holding a long forward now worth $50,000, using the mid-life valuation approach from the previous lesson, runs into exactly that choice: if its original bank agrees to a mutual termination, it just pays the company the $50,000 today and both sides walk away clean, versus entering a new, opposite forward with a different bank, which would leave both contracts open until each separately runs its course.

# Quiz

1. Why is closing out a forward position before maturity harder than closing a futures position?
   - [x] A forward is a private bilateral obligation with no exchange or clearinghouse to trade out of, unlike a futures position
   - Forwards can never be closed out before maturity under any circumstances
   - Futures positions are actually harder to close than forwards
   - Forwards are always automatically closed by the exchange
   > A futures position closes with a simple offsetting exchange trade thanks to clearinghouse novation; a forward has no equivalent mechanism since it's tied to one specific counterparty.

2. What is a key drawback of closing out a forward by entering a new, opposite forward with a different counterparty?
   - [x] It leaves two separate contracts outstanding, with counterparty risk on both, rather than actually closing the original position
   - It is illegal in most jurisdictions
   - It always costs more than the original contract's full notional value
   - It automatically cancels the original forward
   > Unless done with the same counterparty and formally cancelled, an offsetting forward is a second contract layered on top of the first, not a true close-out.

3. Why does novating or assigning a forward to a new counterparty require the original counterparty's consent?
   - [x] Because that party is being asked to accept a new, possibly less creditworthy counterparty in place of the one it originally agreed to trade with
   - Consent is never actually required for novation
   - Because novation automatically happens through a clearinghouse for forwards, just like futures
   - Because assignment is illegal for OTC contracts
   > Unlike a futures clearinghouse's automatic, anonymous novation, transferring a bilateral forward requires the remaining party's agreement to accept a different counterparty.

4. What happens in a mutual termination of a forward contract?
   - [x] The two original counterparties agree to cancel the contract early, settling it in cash at its current mark-to-market value
   - One party unilaterally cancels the contract with no payment
   - The contract is automatically extended to a new maturity date
   - Mutual termination is not possible for any forward contract
   > Mutual termination settles the contract's current fair value directly between the two original parties, cleanly ending the obligation with no contracts left outstanding.

5. Why might a company prefer mutual termination over entering an offsetting forward with a new bank?
   - [x] Mutual termination avoids leaving two separate contracts (and two sets of counterparty risk) outstanding
   - Mutual termination is always more expensive
   - An offsetting forward with a new bank always eliminates all outstanding obligations
   - There is no practical difference between the two approaches
   > A single mutual termination settles the position cleanly in one step, while an offsetting forward with a new counterparty leaves two live contracts until each separately runs its course.
