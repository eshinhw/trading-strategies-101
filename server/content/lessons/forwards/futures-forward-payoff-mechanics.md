---
slug: futures-forward-payoff-mechanics
title: Forward Payoff Mechanics
summary: The payoff formula for both sides of a forward contract at maturity, and how it plays out numerically when the spot price ends up above or below the delivery price.
---

## The Long's Payoff Formula

At maturity, the long side's payoff is the spot price at maturity minus the delivery price agreed at inception: payoff(long) = spot at maturity − delivery price. The long profits when the asset ends up worth more than the price they locked in, and loses when it ends up worth less.

## The Short's Payoff Formula

The short side's payoff is the exact mirror image: payoff(short) = delivery price − spot at maturity. Whatever the long gains, the short loses, and vice versa, in exactly equal amounts — a forward is a zero-sum contract between its two parties, with no third party absorbing or supplying the difference.

## Linear, Symmetric Risk

Unlike an option, whose buyer's loss is capped at the premium paid no matter how badly the position moves, a forward's long and short both carry unlimited, uncapped exposure in either direction — there's no premium paid upfront that limits the downside, which is exactly the "obligation, not a choice" idea covered in the previous lesson showing up numerically in the payoff formula itself.

## Example

A treasury desk marking its forward book to market every day isn't guessing at gains and losses — it's applying exactly this formula, spot minus delivery price for every long position and delivery price minus spot for every short, across every open contract. Take a mill that's long a forward on 10,000 bushels of wheat at a $6.50 delivery price. If wheat's spot price at maturity is $7.20, the mill's payoff is ($7.20 − $6.50) × 10,000 = $7,000 — a gain, since it locked in a price below where wheat ended up. The merchant on the short side of that same contract has the mirror-image payoff: ($6.50 − $7.20) × 10,000 = −$7,000, an equal and opposite loss.

Now suppose wheat instead falls to $5.80 by maturity. The mill's payoff flips sign: ($5.80 − $6.50) × 10,000 = −$7,000, a loss, since it's now obligated to pay $6.50 for wheat worth only $5.80 on the open market. The merchant's short position gains the mirror-image $7,000 — the same formula, the same zero-sum relationship, just with the price move running in the opposite direction, which is also the same building block used in the next lesson to value an existing forward before it even reaches maturity.

# Quiz

1. What is the payoff formula for the long side of a forward contract at maturity?
   - [x] Spot price at maturity minus the delivery price
   - Delivery price minus the spot price at maturity
   - Spot price at maturity multiplied by the delivery price
   - Always zero, regardless of price
   > The long profits when the asset's spot price at maturity exceeds the delivery price locked in at inception — payoff(long) = spot − delivery price.

2. Why is the short's payoff exactly the negative of the long's payoff?
   - [x] Because a forward is a zero-sum contract between its two parties, with no third party involved
   - It isn't — the short and long payoffs are unrelated
   - Because the short always loses money
   - Because the exchange absorbs any difference between the two
   > Whatever one side gains, the other side loses in exactly equal amount — there's no external party to the transaction who could absorb or supply the difference.

3. How does a forward's payoff risk compare to an option buyer's?
   - [x] A forward's long and short both carry unlimited, uncapped exposure in either direction, unlike an option buyer whose loss is capped at the premium paid
   - A forward's risk is always smaller than an option's
   - An option buyer has unlimited risk, just like a forward
   - Forwards and options have identical payoff structures
   > Because there's no premium paid upfront to cap losses, both sides of a forward face symmetric, uncapped payoff risk — a direct consequence of the obligation both sides carry.

4. A mill is long a wheat forward (10,000 bushels, $6.50 delivery price). Spot at maturity is $7.20. What is the mill's payoff?
   - [x] $7,000 gain
   - $7,000 loss
   - $65,000 gain
   - $0
   > ($7.20 − $6.50) × 10,000 = $7,000 — a gain, since the mill locked in a price below the eventual market price.

5. Using the same wheat forward, if spot at maturity instead falls to $5.80, what is the mill's (long) payoff?
   - [x] −$7,000 (a loss)
   - +$7,000 (a gain)
   - $0
   - −$65,000 (a loss)
   > ($5.80 − $6.50) × 10,000 = −$7,000 — a loss, since the mill is obligated to pay $6.50 for wheat now worth only $5.80.

6. In the falling-price scenario above, what is the merchant's (short) payoff?
   - [x] +$7,000, the exact mirror image of the mill's loss
   - −$7,000, the same as the mill's payoff
   - $0, since the short is unaffected by price changes
   - +$65,000
   > The short's payoff is delivery price minus spot: ($6.50 − $5.80) × 10,000 = $7,000, the exact mirror image of the long's −$7,000 loss.
