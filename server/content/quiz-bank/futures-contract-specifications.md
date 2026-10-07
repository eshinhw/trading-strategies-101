---
slug: futures-contract-specifications
---

# Quiz

1. {#q1} How does a futures contract's terms differ from a forward's?
   - They are identical — both are fully custom-negotiated
   - [x] A futures contract's size, tick, and expiration terms are standardized by the exchange, while a forward's terms are privately negotiated between two parties
   - Futures contracts have no fixed contract size
   - Forwards are always standardized, while futures are custom
   > Exchange standardization — fixed size, tick, and expiration terms — is what distinguishes a futures contract from a forward's fully bespoke, privately negotiated terms.

2. {#q2} Why does standardization enable a liquid futures market?
   - It doesn't — standardization actually reduces liquidity
   - [x] Because every trader's position in a given contract is fungible with every other trader's, allowing any buyer to be matched with any seller without negotiation
   - Because standardization eliminates the need for a clearinghouse
   - Because it guarantees the contract will always be profitable
   > Fungibility — every contract being identical in terms — is what lets buyers and sellers transact anonymously and instantly, creating deep, liquid markets.

3. {#q3} Why do futures contracts on physical commodities specify an exact grade or quality?
   - Grade specifications are not used in futures contracts
   - [x] To prevent disputes over whether the asset actually delivered matches what the contract promised
   - Because every unit of a commodity is always identical, so specification is a formality
   - Purely to increase the contract's price
   > Pinning down an exact grade and approved delivery locations removes ambiguity about what's actually owed at delivery, preventing disputes between the long and short.

4. {#q4} What is the "front month" contract?
   - The contract furthest from expiration
   - [x] The nearest-to-expire contract with the highest trading volume, typically the most liquid one
   - A contract that never expires
   - The contract with the lowest price
   > The front month is the nearest expiration with the most trading activity — it's where most of the liquidity concentrates at any given time.

5. {#q5} Why do active traders roll their positions forward as the front month approaches expiration?
   - To lock in a worse price on purpose
   - [x] To maintain their exposure in a new, more distant contract rather than let the position run into the delivery process
   - Rolling is required by exchange rules for every trader
   - To avoid paying any margin at all
   > Rolling lets a trader keep continuous exposure to the underlying without going through delivery, by closing the expiring contract and opening an equivalent position further out.

6. {#q6} [calc] The E-mini S&P 500 has a $50 multiplier and a 0.25-point tick. If the price moves from 4,500.00 to 4,502.50, what's the dollar gain on one contract?
   - $12.50
   - $50
   - [x] $125
   - $250
   > A 2.50-point move is 10 ticks; 10 ticks × $12.50 per tick = $125, the same result as multiplying the 2.50-point move directly by the $50 multiplier.

7. {#bk1} [calc] A trader buys 4 crude oil contracts (1,000 barrels each) at 78.40, and the price later moves to 75.90. What is the profit or loss on the position?
   - −$10
   - −$2,500
   - [x] −$10,000
   - +$10,000
   > The move is 75.90 − 78.40 = -2.50 per unit, and -2.50 × 1,000 × 4 contracts = −$10,000.

8. {#bk2} [calc] A trader buys 5 natural gas contracts (10,000 MMBtu each) at 3.40, and the price later moves to 3.05. What is the profit or loss on the position?
   - [x] −$17,500
   - −$1.75
   - −$3,500
   - +$17,500
   > The move is 3.05 − 3.40 = -0.35 per unit, and -0.35 × 10,000 × 5 contracts = −$17,500.

9. {#bk3} [calc] A crude oil contract covers 1,000 barrels and the minimum tick is $0.01 per barrel. What is one tick worth?
   - $1
   - $100
   - [x] $10
   - $0.01
   > Tick value = tick size × contract size = $0.01 × 1,000 = $10.

10. {#bk4} [calc] An E-mini S&P 500 contract has a multiplier of $50 and a minimum tick of 0.25 index points. A trader is long 4 contracts and the index rises 3.75 points. What is the gain?
   - $187.50
   - [x] $750
   - $3,750
   - $150
   > 3.75 × $50 × 4 = $750. That is 15 ticks of $12.50 on each of 4 contracts.

11. {#bk5} [calc] A corn contract covers 5,000 bushels with a minimum tick of a quarter cent ($0.0025). A trader is long 3 contracts and the price rises 6 ticks. What is the gain?
   - $75
   - $450
   - $22.50
   - [x] $225
   > One tick is $0.0025 × 5,000 = $12.50. 6 ticks × $12.50 × 3 contracts = $225.

12. {#bk6} [calc] A bond future is worth $1,000 per full point and has a minimum tick of 1/32 of a point. What is one tick worth?
   - $32
   - [x] $31.25
   - $3.125
   - $312.50
   > One tick is 1/32 of a point: $1,000 / 32 = $31.25.

13. {#bk7} [calc] A wheat contract allows delivery of a lower grade at a $0.15 per bushel discount. A seller delivers 5,000 bushels against a contract price of $6.40. How much does the seller receive?
   - $32,000
   - $750
   - $32,750
   - [x] $31,250
   > The seller receives the contract price less the grade discount: ($6.40 − $0.15) × 5,000 = $31,250.

14. {#bk8} Why does standardizing contract terms make a deep, liquid market possible?
   - It lets each trader negotiate the delivery date privately with the other side
   - It guarantees that every contract is delivered physically
   - [x] Every trader trades identical terms, so any long position is interchangeable with any short position
   - It removes the need for a clearinghouse to guarantee trades
   > Because contracts are fungible, a buyer can be matched with any seller, and a position can be closed by an equal and opposite trade.

15. {#bk9} What is a futures contract's tick size?
   - [x] The minimum amount the price is allowed to move
   - The total value of the contract at today's price
   - The margin a trader must post to hold the contract
   - The number of units of the asset the contract covers
   > The tick size is the smallest price increment, and multiplying it by the contract size gives the tick value in dollars.

16. {#bk10} Which contract month is called the front month?
   - The contract with the furthest expiration date
   - The contract with the lowest price
   - The contract that has already expired
   - [x] The nearest-to-expire contract, which is typically the most liquid
   > The front month is the nearest-dated contract and usually has the highest trading volume.
