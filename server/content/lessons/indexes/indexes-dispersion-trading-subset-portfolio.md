---
slug: indexes-dispersion-trading-subset-portfolio
title: Dispersion Trading – Subset Portfolio
summary: Running dispersion trading against only a subset of an index's components, rather than the full basket, to reduce cost and complexity while keeping the core correlation bet.
---

## The Full-Basket Version

A full dispersion trade, as classically constructed, requires taking a position in every single component of an index alongside the index option itself — for a broad index with dozens or hundreds of members, that means managing a large number of individual option or variance-swap positions, each with its own transaction costs, liquidity constraints, and monitoring burden. A subset-portfolio approach instead selects a smaller, carefully chosen group of components to represent the basket side of the trade, rather than using every single name.

## Choosing the Subset

The subset is typically chosen to preserve as much of the full basket's characteristics as possible with far fewer names — weighting toward the largest, most liquid, most heavily-weighted constituents of the index, since they contribute the most to the index's own volatility and correlation structure, while dropping smaller, less liquid names whose individual contribution to the trade's correlation exposure is minor relative to the added cost and complexity of including them.

## The Basis Risk of Approximating

This tradeoff, approximation versus full replication, means a subset dispersion trade won't track the true, full-basket correlation relationship perfectly; there's a real risk that correlation behaves differently among the excluded smaller names than among the large ones included in the subset, introducing a form of basis risk between the subset's realized correlation and the true index-wide correlation the trade is ultimately trying to capture.

## Lower Cost, Less Precision

In exchange for that approximation risk, a subset portfolio meaningfully cuts transaction costs, margin requirements, and ongoing monitoring effort, which can make dispersion trading practical for participants who can't justify the operational overhead of a full-basket version — the strategy is a deliberate simplification, trading some precision for a meaningfully lower cost to implement and maintain.

# Quiz

1. What does a full, classically-constructed dispersion trade require?
   - A position in a single representative stock only
   - [x] A position in every single component of the index alongside the index option itself
   - No position in any individual stocks at all
   - A position only in the index's largest competitor
   > The classic version of dispersion trading involves the entire basket of index components, which for a broad index means managing many individual positions.

2. How does a subset-portfolio dispersion trade differ from the full-basket version?
   - It uses more components than the full-basket version
   - [x] It selects a smaller, carefully chosen group of components to represent the basket side, rather than using every single name
   - It eliminates the index option leg of the trade entirely
   - It is mathematically identical to the full-basket version in every respect
   > Rather than trading the entire basket, a subset approach approximates it with fewer, carefully selected names to reduce cost and complexity.

3. How is the subset of components typically chosen?
   - Entirely at random from the full index
   - [x] Weighting toward the largest, most liquid, most heavily-weighted constituents, since they contribute most to the index's volatility and correlation structure
   - Only the smallest, least liquid names in the index
   - Names are chosen alphabetically
   > The subset is designed to preserve as much of the full basket's characteristics as possible, so it emphasizes the constituents that matter most to the index's own behavior.

4. What risk does using a subset instead of the full basket introduce?
   - There is no additional risk — subsets behave identically to the full basket
   - [x] Basis risk between the subset's realized correlation and the true, full-index-wide correlation the trade is meant to capture
   - The risk that the index itself stops being calculated
   - The risk of unlimited losses regardless of market conditions
   > Correlation can behave differently among the excluded smaller names than among the included large ones, so a subset approximation may not track the true index-wide correlation relationship perfectly.

5. What is the main benefit of using a subset portfolio despite this approximation risk?
   - It guarantees a higher return than the full-basket version
   - [x] It meaningfully cuts transaction costs, margin requirements, and monitoring effort, making the strategy practical for participants who can't justify full-basket overhead
   - It eliminates all correlation risk from the trade
   - It requires holding every stock in the index anyway
   > The subset approach is a deliberate tradeoff — some precision given up in exchange for a meaningfully lower cost and complexity to implement and maintain.

6. {#calc1} [calc] A full dispersion trade needs 50 option positions at $1,500 of setup cost each. A subset version uses 15 positions. How much cheaper is the subset to set up?
   - $22,500
   - $75,000
   - $35,000
   - [x] $52,500
   > The full basket costs 50 × $1,500 = $75,000, and the subset costs 15 × $1,500 = $22,500, a saving of $52,500.
