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

## Example

The mill's forward is worth $4,950 to it, with three months left (10,000 bushels at $6.50, new forwards at $7.00). It has two ways out.

**1. Mutual termination**

The merchant pays the mill the contract's value, and the contract ends:

$$
\text{Cash received today} = \boxed{\$4{,}950}
$$

**2. A mirror-image forward**

The mill sells 10,000 bushels forward to a second bank at $7.00. At maturity the two contracts net out:

$$
(S_T - \$6.50) + (\$7.00 - S_T) = \$0.50 \text{ per bushel}
$$

$$
\$0.50 \times 10{,}000 = \boxed{\$5{,}000 \text{ at maturity}}
$$

- The result is fixed whatever wheat does, because the price moves cancel.
- It is paid at maturity, not today, and $5,000 in three months is worth about $4,950 now.
- Both contracts stay open, so the mill depends on two counterparties instead of none.

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

6. The mill's forward is worth $4,950. What does a mutual termination with the merchant look like?
   - The mill pays the merchant $4,950
   - The mill pays the merchant $5,000 at maturity
   - [x] The merchant pays the mill about $4,950 today and no contract remains
   - Nothing is paid, and both contracts continue
   > A mutual termination settles the contract at its current mark-to-market value, so the side it is worth money to is paid that amount and the contract ends.

7. The mill sells 10,000 bushels forward to a second bank at $7.00 instead of terminating. What is its locked-in result at maturity?
   - Zero, since the two contracts cancel completely
   - A gain or loss that depends on the wheat price
   - [x] A fixed $5,000 gain, with counterparty risk to both banks
   - A fixed $4,950 gain paid today
   > The original long and the new short move in opposite directions, leaving ($7.00 - $6.50) × 10,000 = $5,000 at maturity, but both contracts remain outstanding.
