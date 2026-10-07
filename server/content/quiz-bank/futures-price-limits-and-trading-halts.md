---
slug: futures-price-limits-and-trading-halts
---

# Quiz

1. {#q1} What is a daily price limit?
   - [x] A maximum amount a futures price is allowed to move, up or down, from the prior settlement price within one session
   - A limit on how many contracts one trader can buy in a lifetime
   - The minimum price increment a contract can move by
   - A rule that only applies to options, never futures
   > A daily price limit caps how far a contract's price can move in a single session relative to the prior day's settlement — once hit, trades beyond that level aren't permitted.

2. {#q2} What does it mean for a market to be "locked limit"?
   - [x] The price is stuck at its daily limit, with participants unable to trade beyond it despite demand to do so
   - The exchange has permanently closed the contract
   - Trading volume has dropped to zero for the entire day
   - The clearinghouse has stopped guaranteeing trades
   > "Locked limit" describes a market pinned at its price limit, where buyers or sellers who want to transact beyond that level simply cannot, even though trading in general hasn't stopped.

3. {#q3} Why do exchanges impose daily price limits?
   - [x] To slow down an unusually sharp move, give participants time to assess new information, and cap the size of a single day's mark-to-market loss
   - To guarantee that prices never change at all
   - To increase volatility intentionally
   - Price limits serve no real purpose
   > Price limits act as a circuit-breaker-like pause during extreme moves, giving the market time to digest information and bounding how large a single day's loss can be before margin has to absorb it.

4. {#q4} How does a circuit breaker differ from a simple price limit?
   - [x] A circuit breaker triggers a temporary trading halt once a threshold move happens quickly, rather than just capping the price at a hard ceiling or floor
   - They are exactly the same mechanism with different names
   - A circuit breaker only applies to interest rate futures
   - A circuit breaker permanently closes a contract
   > A circuit breaker pauses trading entirely for a cooling-off period, rather than continuing to allow trading up to (and pinned at) a fixed price ceiling or floor the way a daily price limit does.

5. {#q5} Which futures markets are most associated with market-wide circuit breakers?
   - [x] Broad equity index futures
   - Only single-stock options
   - Only physically-settled agricultural futures
   - Circuit breakers are never used in any futures market
   > Circuit breakers are especially associated with broad equity index futures, where a fast, large move can trigger a brief, market-wide trading halt rather than a simple price cap.

6. {#calc1} [calc] Corn has a daily limit of $0.30 a bushel, and a contract is 5,000 bushels. A trader is short 4 contracts when corn closes limit-up. What is the one-day loss?
   - [x] $6,000
   - $1,500
   - $600
   - $24,000
   > The loss is $0.30 × 5,000 × 4 = $6,000.

7. {#bk1} [calc] Corn closes at $6.40 with a daily limit of $0.30. What is the lowest price at which it can trade the next session?
   - $6.70
   - $6.40
   - $5.80
   - [x] $6.10
   > Limit-down = $6.40 − $0.30 = $6.10.

8. {#bk2} [calc] Live cattle has a daily limit of 3.0 cents a pound and a contract covers 40,000 pounds. A trader is long 6 contracts when the market closes limit-down. What is the one-day loss?
   - $1,200
   - [x] $7,200
   - $72,000
   - $720
   > One contract loses $0.03 × 40,000 = $1,200. Six contracts lose $7,200.

9. {#bk3} [calc] A trader is long 3 corn contracts bought at $6.40 and the market is locked limit-down at $6.10. What is the unrealized loss?
   - $1,500
   - $450
   - $45,000
   - [x] $4,500
   > $0.30 × 5,000 × 3 = $4,500.

10. {#bk4} [calc] Corn closes limit-up at $6.70 with a $0.30 limit. The exchange expands limits by 50% for the next day. What is the highest price allowed next session?
   - [x] $7.15
   - $7.00
   - $7.30
   - $6.70
   > The expanded limit is $0.30 × 1.5 = $0.45. The ceiling is $6.70 + $0.45 = $7.15.

11. {#bk5} Who is most likely to be stuck when a market is locked limit-up?
   - Traders who are long and want to sell at a higher price
   - Only the clearinghouse
   - [x] Traders who need to buy to exit short positions, because no one will sell at the limit
   - Nobody, since trading continues freely above the limit
   > In a locked-limit-up market there are buyers but almost no sellers at the ceiling, so shorts trying to buy back their positions cannot get out.

12. {#bk6} Do daily price limits stop a market's price from ever reaching its true level?
   - [x] No, they only pace the move: the price can continue the next session
   - Yes, they permanently fix the price
   - Yes, they make losses impossible
   - No, because limits only apply to physically-settled contracts
   > A limit caps one session's move. If the underlying news was big enough, the price can keep moving the next day.
