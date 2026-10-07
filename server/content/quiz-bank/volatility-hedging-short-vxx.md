---
slug: volatility-hedging-short-vxx
---

# Quiz

1. {#q1} What does VXX track, and what kind of volatility exposure does it give?
   - [x] Short-term VIX futures, giving long exposure to volatility
   - The S&P 500's dividend yield
   - Long-term corporate bond yields
   - Short-term VIX futures, giving short exposure to volatility
   > VXX is designed to track short-term VIX futures, giving investors long exposure to volatility — its value tends to rise when volatility rises.

2. {#q2} Why might a trader short VXX directly?
   - To bet that volatility will spike immediately
   - [x] To collect the contango-driven decay in VXX's value as a form of income, betting the structural drag outweighs short-term spikes
   - Because VXX cannot be shorted under any circumstances
   - To eliminate all risk from a volatility-related position
   > Since VXX tends to lose value over time from the contango roll effect, shorting it directly is a way to try to collect that decay as income.

3. {#q3} What is the main risk of an unhedged short VXX position?
   - There is no risk once the position is placed
   - [x] A sudden, sharp spike in volatility can cause VXX to jump dramatically, producing a large, fast loss on the short position
   - VXX can only ever move in small, gradual increments
   - Short VXX positions are risk-free by regulation
   > Because the position is short a long-volatility instrument, a sharp volatility spike (which makes VXX jump up) directly produces a large loss on the short position.

4. {#q4} How does buying VIX futures hedge a short VXX position?
   - It has no effect on the position's risk at all
   - [x] If volatility spikes and VXX jumps against the short position, the long VIX futures should also rise in value, offsetting some or most of the loss
   - It doubles the risk of the short VXX position
   - It eliminates the need to monitor the position at all
   > The long VIX futures hedge is designed to gain value during the same volatility spikes that would hurt the short VXX leg, offsetting the loss.

5. {#q5} What is the central tradeoff in sizing the VIX futures hedge?
   - There is no tradeoff — more hedging is always strictly better
   - [x] Too little hedge leaves the position exposed to a spike; too much hedge eats into the contango carry the trade is trying to collect
   - The hedge size has no effect on the trade's carry or risk
   - The hedge must always exactly equal the short VXX position's dollar value
   > More hedge protection reduces spike risk but also consumes more of the contango roll yield the trade earns during calm periods — sizing the hedge means balancing protection against reduced carry.

6. {#calc1} [calc] A trader is short $100,000 of VXX, and a volatility spike lifts VXX 50%. The trader also owns VIX futures that pay 40% of the move on the VXX position. What is the net loss?
   - $50,000
   - [x] $30,000
   - $20,000
   - $10,000
   > The short loses 50% × $100,000 = $50,000. The futures hedge pays 40% × $50,000 = $20,000, so the net loss is $30,000.

7. {#calc2} [calc] A trader is short $200,000 of VXX, which moves 0.8 for each 1.0 of VIX futures. How much in VIX futures hedges it?
   - $250,000
   - $200,000
   - $40,000
   - [x] $160,000
   > The hedge notional is $200,000 × 0.8 = $160,000.

8. {#bk1} [calc] A trader is short $30,000 of a VIX ETN. The ETN moves 0.7 times as much as VIX futures in percentage terms. What dollar amount of VIX futures hedges the position?
   - [x] $21,000
   - $42,857
   - $30,000
   - $9,000
   > Hedge notional = 0.7 × $30,000 = $21,000.

9. {#bk2} [calc] A trader is short $30,000 of a VIX ETN hedged with $21,000 of long VIX futures. Volatility spikes: the ETN rises 40% and the futures rise 50%. What is the net result?
   - −$12,000
   - +$10,500
   - [x] −$1,500
   - −$22,500
   > The short ETN loses 40% × $30,000 = $12,000. The futures gain 50% × $21,000 = $10,500. Net = −$1,500.
