---
slug: misc-weather-risk-demand-hedging
title: Weather Risk – Demand Hedging
summary: Using a weather derivative to directly hedge the demand risk a weather-sensitive business actually faces, sized and structured around that business's own specific weather exposure rather than a generic market view.
---

## Starting From the Business Risk

This strategy starts from the weather-derivative concept covered earlier in this course and applies it to a specific, real hedging problem: a business whose demand, and therefore revenue, moves with weather outcomes it has no control over — an energy utility is the clearest example, but the same logic applies to any weather-sensitive business.

## Quantifying the Exposure First

Before hedging, the business needs a clear, quantified relationship between the weather variable and its own financial outcome — for example, how many additional dollars of revenue each incremental heating degree day historically generates — so the hedge can be sized to actually offset the real exposure rather than being a rough, imprecise guess.

## Choosing the Right Index and Structure

Because weather derivatives are typically built around a specific measurement station or region, choosing an index that genuinely tracks the business's actual weather exposure matters — a hedge based on a distant or poorly correlated weather station leaves meaningful basis risk between the hedge and the real underlying exposure it's meant to offset.

## Basis Risk Between the Hedge and the Business

Even a well-chosen weather hedge rarely offsets the underlying business risk perfectly — the relationship between weather and revenue can shift over time as the business itself changes, leaving some residual basis risk that a purely financial hedge, by its nature, can't fully eliminate.

## Example

A regional heating-oil distributor analyzes five years of sales against heating degree days (HDD) at the nearest weather station.

- Normal winter: 5,000 HDD
- The data show revenue moves by $8,000 for each HDD, with a strong fit (R² about 0.85)
- Worst-case winter: 4,500 HDD

**Revenue at risk**

$$
(5{,}000 - 4{,}500) \times \$8{,}000 = \$4{,}000{,}000
$$

**A sized hedge, not a generic one**

The distributor buys a derivative on that station with a strike of 4,900 HDD, paying $8,000 per HDD below the strike.

$$
\text{Payout at 4,500 HDD} = (4{,}900 - 4{,}500) \times \$8{,}000 = \$3{,}200{,}000
$$

$$
\text{Revenue shortfall still carried} = \$4{,}000{,}000 - \$3{,}200{,}000 = \$800{,}000
$$

The $800,000 is the first 100 HDD below normal, which the distributor chooses to keep to lower the premium.

**What a generic hedge would risk**

Without the regression, the distributor might buy a hedge of $4,000 per HDD. At 4,500 HDD that pays $1.6 million, covering only 40% of the $4 million loss.

Measuring the relationship first lets the hedge match the exposure.

# Quiz

1. What does this strategy start from, before applying a weather derivative?
   - [x] A specific, real business exposure — demand or revenue that moves with a weather outcome the business can't control
   - A completely generic view on weather with no connection to any actual business
   - A random selection of any available weather derivative
   - An assumption that weather has no effect on any business
   > The strategy is grounded in a genuine business exposure, applying the general weather-derivative concept to solve that specific problem.

2. Why does the business need to quantify its weather exposure before hedging?
   - [x] So the hedge can be sized to actually offset the real exposure, rather than being an imprecise guess
   - Quantification has no practical benefit for structuring a hedge
   - Businesses are legally required to publish this data regardless of hedging
   - The hedge's size is always fixed regardless of the underlying exposure
   > A properly sized hedge depends on first understanding, in concrete terms, how the weather variable actually translates into the business's financial outcome.

3. Why does the choice of weather index and station matter for this strategy?
   - [x] A poorly correlated or distant weather station leaves meaningful basis risk between the hedge and the real exposure
   - The choice of station never affects how well a hedge works
   - All weather stations report identical data regardless of location
   - Weather derivatives are never tied to any specific measurement station
   > Choosing an index that genuinely tracks the business's own weather exposure is essential to minimizing the gap between the hedge and the real risk.

4. What is basis risk in the context of this strategy?
   - [x] The residual risk that the weather hedge doesn't perfectly offset the underlying business exposure
   - The total elimination of all risk once a hedge is purchased
   - A risk that applies only to municipal bonds, never to weather hedging
   - Basis risk refers to the physical location of a company's headquarters
   > Even a well-constructed weather hedge typically leaves some residual mismatch with the true underlying exposure, which is what basis risk describes.

5. In the example, what does the distributor do before purchasing its weather derivative?
   - [x] Analyzes historical sales data to find a quantified relationship between heating degree days and its own revenue
   - Purchases the first available weather derivative with no prior analysis
   - Ignores its own sales data entirely
   - Relies solely on a competitor's hedging strategy
   > Grounding the hedge in the distributor's own quantified historical relationship is exactly what lets it size and structure the hedge precisely, consistent with this lesson's broader point.

6. {#calc1} [calc] A distributor loses $6,000 of revenue for each heating degree day below the normal 5,000. It holds a hedge paying $6,000 per day below 4,950. The winter has 4,600 days. How much of the revenue loss is left uncovered?
   - [x] $300,000
   - $2,400,000
   - $2,100,000
   - $0
   > The revenue loss is 400 × $6,000 = $2,400,000. The hedge pays 350 × $6,000 = $2,100,000, leaving $300,000 uncovered.
