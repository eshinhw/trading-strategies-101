---
slug: structured-assets-tranches-and-the-waterfall
title: Tranches and the Waterfall
summary: How a structured deal splits pooled cash flows into tranches of different risk and seniority, and the payment order — the waterfall — that decides who gets paid first.
---

## What a Tranche Is

A tranche is one slice of a structured deal's overall capital structure, ranked against the other tranches by seniority. Every tranche is paid from the same underlying pool of cash flows, but each has a different level of exposure to losses if the pool's borrowers default.

## The Payment Waterfall

Incoming cash from the pool is distributed to tranches in a strict order of priority, called the waterfall. The most senior tranche is paid its interest, then principal, in full before anything trickles down to the next tranche in line — a junior tranche only receives its payment for a given period after every more senior tranche has already been paid in full.

## Subordination: How Losses Are Absorbed

That same waterfall runs in reverse when the pool suffers losses. The most junior tranche — often called the equity or first-loss tranche — absorbs the pool's first losses before any loss touches a more senior tranche. Each senior tranche is protected by a subordination cushion equal to the combined size of every junior tranche sitting beneath it.

## Risk and Return Across the Stack

Because the equity tranche is first in line to absorb losses, it demands, and receives, a much higher coupon than the senior tranche, which is designed to stay nearly untouched unless losses far exceed the cushion beneath it. Mezzanine tranches sit in between on both dimensions — more risk and more yield than senior, less than equity.

## Example

A CLO holds a pool of $100 million of leveraged loans that pay 8% interest, which is $8 million a year.

- Senior tranche: $70 million, coupon 5.5%
- Mezzanine tranche: $20 million, coupon 8%
- Equity tranche: $10 million, receives whatever is left

**Paying interest in order of priority**

$$
\text{Senior: } \$70\text{M} \times 5.5\% = \$3.85\text{M}
$$

$$
\text{Mezzanine: } \$20\text{M} \times 8\% = \$1.60\text{M}
$$

$$
\text{Equity: } \$8.00\text{M} - \$3.85\text{M} - \$1.60\text{M} = \$2.55\text{M} \quad\Rightarrow\quad \frac{\$2.55\text{M}}{\$10\text{M}} = \boxed{25.5\%}
$$

The insurance company holding the senior tranche earns 5.5%. The hedge fund holding the equity tranche earns 25.5%.

**Losses reverse the order**

Loan losses of $12 million (12% of the pool):

- Equity: absorbs the first $10 million, so it is wiped out
- Mezzanine: absorbs the remaining $2 million, a loss of 10% of its $20 million
- Senior: $0 lost

Both investors are exposed to the same loans. The only difference is where each one sits in the waterfall.

# Quiz

1. What is a tranche?
   - A separate pool of loans with no connection to other tranches
   - [x] One slice of a structured deal's capital structure, ranked by seniority, sharing the same underlying pool as other tranches
   - A type of individual mortgage loan
   - A government guarantee attached to a security
   > All tranches in a deal are paid from the same pool of underlying cash flows — what differs between them is their seniority ranking and resulting exposure to losses.

2. How does the payment waterfall work?
   - All tranches are paid simultaneously and equally, regardless of seniority
   - [x] The most senior tranche is paid in full before any payment trickles down to a more junior tranche
   - Junior tranches are always paid before senior tranches
   - Payment order is chosen randomly each period
   > The waterfall pays tranches in strict seniority order — a junior tranche receives its payment for a period only after every more senior tranche has been paid in full.

3. Which tranche absorbs a structured deal's first losses?
   - The most senior tranche
   - [x] The most junior tranche, often called the equity or first-loss tranche
   - All tranches absorb losses equally and simultaneously
   - Losses are absorbed by the special-purpose vehicle's sponsor, never the tranches
   > The equity or first-loss tranche sits at the bottom of the structure and absorbs losses first, protecting every tranche senior to it.

4. What does "subordination" mean for a senior tranche?
   - The senior tranche has no protection from losses at all
   - [x] The senior tranche is protected by a cushion equal to the combined size of all junior tranches beneath it, which must be wiped out first
   - Subordination means the senior tranche is paid last
   - Subordination only applies to equity tranches
   > A senior tranche's subordination cushion is the total size of everything junior to it — losses have to burn through that entire cushion before the senior tranche is touched.

5. Why does the equity tranche pay a much higher coupon than the senior tranche?
   - It doesn't — all tranches pay identical coupons
   - [x] It bears the first losses from the pool, so it's compensated with a higher coupon for that greater risk
   - The equity tranche is guaranteed by the government
   - Coupon size has no relationship to a tranche's risk
   > Since the equity tranche is first to absorb losses and can be wiped out well before senior tranches are touched, it's compensated with a materially higher coupon to reflect that greater risk.
