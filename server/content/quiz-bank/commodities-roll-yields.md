---
slug: commodities-roll-yields
---

# Quiz

1. {#q1} What is "roll yield"?
   - The total return from a commodity's spot price changing
   - [x] The return earned or lost purely from rolling a futures position from an expiring contract into a further-dated one
   - The dividend paid by a commodity ETF
   - A fee charged by exchanges for holding futures contracts
   > Roll yield isolates the return component that comes specifically from the mechanics of rolling a futures position forward, separate from any change in the commodity's spot price.

2. {#q2} What happens to roll yield for a long position when the futures curve is in backwardation?
   - The roll yield is negative
   - [x] The roll yield is positive, since the position sells the higher-priced expiring contract and buys the cheaper further-dated one
   - Backwardation has no effect on roll yield
   - The position cannot be rolled at all during backwardation
   > In backwardation, further-dated contracts are cheaper, so rolling forward (selling high, buying low) produces a positive roll yield as the futures price rises toward spot over time.

3. {#q3} What happens to roll yield for a long position when the curve is in contango?
   - The roll yield is positive
   - [x] The roll yield is negative, since the position repeatedly sells cheap (the expiring contract) and buys expensive (the further-dated contract)
   - Contango guarantees a profit regardless of roll yield
   - Contango has no relationship to roll yield
   > In contango, further-dated contracts are more expensive, so rolling forward involves selling the cheaper expiring contract and buying the pricier further-dated one — a drag on returns.

4. {#q4} How does a roll-yield strategy typically position itself across commodities?
   - It holds every commodity equally regardless of curve shape
   - [x] It tilts toward commodities in backwardation (expecting positive roll yield) and avoids or shorts those in steep contango (expecting a roll-yield drag)
   - It only trades commodities with a perfectly flat futures curve
   - It ignores the shape of the futures curve entirely
   > The strategy explicitly targets the roll-yield component of return by ranking and positioning based on each commodity's curve shape.

5. {#q5} What has backwardation historically been linked to?
   - Excess supply and low demand for a commodity
   - [x] Genuine physical scarcity or strong near-term demand, sometimes explained through the lens of "hedging pressure"
   - Backwardation has no relationship to real-world physical market conditions
   - A commodity being permanently out of production
   > Backwardation often reflects real supply/demand tightness or hedging pressure from producers, meaning a roll-yield strategy is partly a bet on underlying physical market conditions, not just a mechanical harvesting of curve shape.

6. {#calc1} [calc] A commodity's spot price is $80 and the next futures contract is $78 (backwardation). Rolling a $2 million long position earns the gap. What is the roll yield on one roll?
   - $5,000
   - [x] $50,000
   - $2,000
   - $100,000
   > The gain is (80 − 78) / 80 = 2.5%, and 2.5% × $2,000,000 = $50,000.

7. {#calc2} [calc] In contango, a $5 million long position sells the expiring contract at $80 and buys the next at $81.60. What does the roll cost?
   - $5,000
   - $80,000
   - $1,600
   - [x] $100,000
   > The roll costs (81.60 − 80) / 80 = 2% of the position, and 2% × $5,000,000 = $100,000.

8. {#bk1} [calc] A fund holds the front crude oil future at 80 and rolls it into the next contract at 82 with spot unchanged. What is the roll return?
   - [x] −2.50%
   - 2.50%
   - 2.00%
   - −30.00%
   > Selling at 80 and buying at 82 costs (80 − 82) / 80 = −2.50% in contango.

9. {#bk2} [calc] A fund holds the front gold future at 1,950 and rolls it into the next contract at 1,962 with spot unchanged. What is the roll return?
   - 0.62%
   - 12.00%
   - [x] −0.62%
   - −7.38%
   > Selling at 1,950 and buying at 1,962 costs (1,950 − 1,962) / 1,950 = −0.62% in contango.

10. {#bk3} [calc] A fund rolls from a front future at $100 into a next contract at $98 (backwardation), with spot unchanged, every month. What is the monthly roll yield?
   - [x] +2%
   - −2%
   - +2.04%
   - 0%
   > Selling at $100 and buying at $98 earns $2 on $100, a +2% roll yield per month.
