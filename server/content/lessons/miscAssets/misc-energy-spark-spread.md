---
slug: misc-energy-spark-spread
title: Energy – Spark Spread
summary: The gap between the price of electricity and the cost of the natural gas needed to generate it, adjusted for a plant's efficiency — a power generator's real operating margin, and a tradable spread in its own right.
---

## What the Spark Spread Represents

The spark spread is the difference between the market price of electricity and the cost of the natural gas required to generate that electricity, representing the gross margin a gas-fired power plant earns for converting fuel into electricity, before accounting for its own fixed operating costs.

## Why Heat Rate Matters

Because different power plants convert fuel to electricity with different efficiency, the spark-spread calculation adjusts for a plant's heat rate, the amount of fuel needed to generate one unit of electricity — a more efficient plant needs less gas per unit of power, so a given gas price translates into a smaller fuel cost, and a wider spread, for that plant than for a less efficient one facing the same gas price.

## Hedging the Spread, Not Either Price Alone

A gas-fired generator's actual economic risk isn't the level of electricity prices or gas prices individually, but the gap between them — the same basis-trading logic covered earlier in this course — which is exactly why generators hedge the spread directly, often using electricity and gas futures together, rather than hedging either price in isolation.

## Trading the Spread Without Owning a Plant

A trader with no physical generation assets at all can take the same spread position purely financially, using electricity and gas futures or spark-spread-specific contracts to express a view on how that margin will move, effectively taking the same economic position a power generator's hedge would take, without any actual power plant behind it.

## Example

A gas-fired plant locks in its margin for next month (illustrative).

- Output: 72,000 MWh
- Heat rate: 7.5 MMBtu per MWh
- Gas needed: 72,000 × 7.5 = 540,000 MMBtu

**The hedge**

- Sell 72,000 MWh of electricity futures at $45: $3,240,000
- Buy 540,000 MMBtu of gas futures at $3.00: $1,620,000

$$
\$3{,}240{,}000 - \$1{,}620{,}000 = \$1{,}620{,}000 \text{ locked-in margin}
$$

**Prices move: electricity falls to $38 and gas falls to $2.50**

$$
\text{Plant margin in the market: } 72{,}000 \times (\$38 - 7.5 \times \$2.50) = 72{,}000 \times \$19.25 = \$1{,}386{,}000
$$

$$
\text{Power futures gain: } (\$45 - \$38) \times 72{,}000 = +\$504{,}000
$$

$$
\text{Gas futures loss: } (\$2.50 - \$3.00) \times 540{,}000 = -\$270{,}000
$$

$$
\$1{,}386{,}000 + \$504{,}000 - \$270{,}000 = \boxed{\$1{,}620{,}000}
$$

The plant ends with the margin it locked in, in whichever direction electricity and gas moved. The gas-to-power ratio comes from the plant's own efficiency.

# Quiz

1. What does the spark spread represent?
   - [x] The gross margin a gas-fired power plant earns for converting fuel into electricity, before fixed operating costs
   - The total revenue of an electric utility with no connection to fuel costs
   - The interest rate charged on a power plant's construction loan
   - The spark spread has no connection to power generation at all
   > The spark spread is specifically the electricity-price-minus-fuel-cost margin that captures a gas-fired plant's core economics.

2. Why does the spark-spread calculation need to account for a plant's heat rate?
   - [x] Different plants convert fuel to electricity at different efficiencies, so the same gas price translates into different fuel costs per unit of power
   - Heat rate has no effect on a plant's spark spread
   - All power plants convert fuel to electricity with identical efficiency
   - Heat rate only matters for coal plants, never gas plants
   > Efficiency differences mean the same gas price produces a different effective fuel cost — and therefore a different spark spread — for plants with different heat rates.

3. Why do generators typically hedge the spark spread directly rather than hedging gas and electricity prices separately?
   - [x] Their real economic risk is the gap between the two prices, the same basis-trading logic covered earlier in the course
   - Hedging the spread directly is always more expensive with no benefit
   - Generators are legally prohibited from hedging gas and electricity prices separately
   - There is no meaningful difference between hedging the spread and hedging either price alone
   > Since the plant's true exposure is the margin, not either price individually, hedging the spread directly targets the actual underlying risk.

4. Can an investor trade the spark spread without owning any physical power generation assets?
   - [x] Yes — using electricity and gas futures or spark-spread-specific contracts to take the same economic position purely financially
   - No, only actual power plant owners can ever trade the spark spread
   - Trading the spark spread requires physically operating a natural gas pipeline
   - The spark spread cannot be expressed through any financial instrument
   > The spark spread is tradable as a purely financial position, letting a trader express a view on the margin without owning any actual generation assets.

5. In the example, what does the power plant do to lock in its spark spread?
   - [x] Simultaneously sells electricity futures and buys natural gas futures in a ratio matching its own heat rate
   - Sells only electricity futures with no corresponding gas position
   - Buys only natural gas futures with no corresponding electricity position
   - Takes no position in futures markets at all
   > The combined futures position, sized to the plant's specific heat rate, is exactly what locks in the margin regardless of how either underlying price moves afterward.
