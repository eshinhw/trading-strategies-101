---
slug: commodities-trading-with-pricing-models
---

# Quiz

1. {#q1} What does a pricing-model-based commodities strategy build to estimate fair value?
   - A purely statistical model based only on past price patterns
   - [x] An explicit model of fundamental drivers like production costs, inventory levels, supply and demand balances, and other structural inputs
   - A model based entirely on unrelated stock market data
   - No model at all — the strategy trades randomly
   > A pricing-model approach is built on modeling the actual fundamental drivers behind a commodity's price, rather than relying purely on price patterns or curve shape.

2. {#q2} What does the strategy do when the market price sits well below the model's fair-value estimate?
   - Sell or short the commodity
   - [x] Buy the commodity, betting the price will converge up toward the model's estimate
   - Take no action regardless of the deviation
   - Immediately liquidate all related positions
   > A market price well below the modeled fair value is treated as a buying opportunity, betting the gap will close as the market eventually reflects the underlying fundamentals.

3. {#q3} Why does building a good pricing model typically require deep, commodity-specific domain expertise?
   - Because all commodities share an identical set of fundamental price drivers
   - [x] Because the relevant fundamental drivers differ substantially across commodity types — for example, oil depends on OPEC decisions while agricultural commodities depend on weather and harvest yields
   - Because pricing models never actually require any domain knowledge
   - Because commodities have no fundamental drivers at all
   > Since different commodities are driven by very different fundamental factors, a good pricing model tends to be commodity-specific and research-intensive rather than a single generic framework.

4. {#q4} What is the central risk of a pricing-model-based trading strategy?
   - There is no risk once a model is built
   - [x] Model risk — the model may be missing an important driver or built on outdated assumptions, producing a fair-value estimate that's simply wrong
   - The strategy can only ever be profitable, never unprofitable
   - Pricing models eliminate the need for any commodity-specific knowledge
   > A flawed or outdated model can produce an incorrect fair-value estimate, leading the strategy to bet against a price move that actually reflects a real fundamental shift the model failed to capture.

5. {#q5} What could happen if a model fails to capture an important driver behind a real fundamental shift in a commodity's price?
   - The strategy would automatically recognize the mistake and avoid trading
   - [x] The strategy could bet against a price move that actually reflects a real, fundamentally-justified change, rather than a genuine market mispricing
   - The model would immediately correct itself without any changes needed
   - This scenario has no effect on the strategy's performance
   > If the model is missing a real driver, it can produce a fair-value estimate that no longer reflects reality, causing the strategy to trade against a legitimate price move rather than a true mispricing.

6. {#calc1} [calc] A fundamentals model values a commodity at $72 a barrel while the market is $66. A trader buys 10,000 barrels. What is the gain if the price converges to the model value?
   - [x] $60,000
   - $6,000
   - $720,000
   - $12,000
   > The gap is $6 a barrel, and $6 × 10,000 barrels = $60,000. The trade loses if the model is wrong.

7. {#calc2} [calc] A model says $70 and the market is $63. A trader buys 20,000 barrels and the price closes half the gap. What is the gain?
   - $140,000
   - $7,000
   - [x] $70,000
   - $35,000
   > Half the $7 gap is $3.50 a barrel, and $3.50 × 20,000 = $70,000.

8. {#bk1} [calc] A commodity trades at $80. The interest rate is 4%, storage costs are 2% and the convenience yield is 1% (all annual, continuous). What is the fair 6-month futures price?
   - [x] $82.03
   - $81.60
   - $80.00
   - $84.12
   > F = S × e^((r + storage − convenience yield) × T) = $80 × e^(0.05 × 0.5) = $82.03.

9. {#bk2} [calc] The fair 6-month futures price is $82.03 but the market price is $83.50. Is the future rich or cheap, and what does the model say to do?
   - Cheap by about $1.48: buy the future
   - Rich by about $3.50: sell the commodity
   - [x] Rich by about $1.48: sell the future and buy the commodity
   - Fair, so do nothing
   > The market price of $83.50 is 1.47 above the model value of $82.03, so the future is rich. The model suggests selling the future and holding the commodity.
