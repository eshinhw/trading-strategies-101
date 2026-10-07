---
slug: stocks-implied-volatility
---

# Quiz

1. {#q1} What does "implied volatility" represent?
   - [x] The volatility level that, plugged into an option pricing model, produces the option's current market price
   - The stock's actual historical price volatility
   - The company's dividend yield
   - The number of shares outstanding
   > Implied volatility is backed out from the market price of an option using a pricing model, representing what the market collectively expects future volatility to be, as opposed to what already happened (realized volatility).

2. {#q2} How does implied volatility differ from historical (realized) volatility?
   - They are always exactly equal
   - [x] Implied volatility is forward-looking, reflecting expectations priced into options, while realized volatility measures how much the stock actually moved in the past
   - Realized volatility only applies to bonds, not stocks
   - Implied volatility cannot be measured for any stock
   > Realized volatility looks backward at actual price moves, while implied volatility is extracted from current options prices and reflects the market's forward expectation.

3. {#q3} What can a sudden spike in a stock's implied volatility, without an obvious public news catalyst, signal?
   - That the company has stopped trading entirely
   - [x] That informed options traders may expect an unusual move, potentially positioning ahead of an anticipated event
   - That the stock's dividend has been permanently eliminated
   - Nothing — IV spikes are always random noise
   > An unexplained IV spike relative to peers can indicate informed money positioning in the options market ahead of news not yet public, which a strategy might try to trade in the underlying stock.

4. {#q4} How might a strategy use implied volatility relative to a stock's peers or sector?
   - By ignoring peer comparisons entirely
   - [x] By flagging a stock whose IV is rising relative to its peers as a potential signal of informed positioning
   - By assuming all stocks in a sector always have identical implied volatility
   - By using it exclusively to set dividend policy
   > Comparing a stock's IV to its peers helps isolate stock-specific signals from broad, sector-wide volatility moves that aren't informative about that particular company.

5. {#q5} Why must the implied-volatility signal typically be combined with other filters rather than traded alone?
   - Implied volatility never changes
   - [x] Elevated implied volatility can also reflect a general volatility risk premium or risk-aversion sentiment, not just informed directional information
   - Options markets are never liquid enough to compute implied volatility
   - It is illegal to trade based on implied volatility
   > Since IV also embeds a general premium investors pay for downside protection, a high or rising IV doesn't always mean informed directional information — other filters help separate the two.

6. {#calc1} [calc] A stock's implied volatility is 36% while its realized volatility over the past month was 30%. By what percentage does implied volatility exceed realized?
   - 6%
   - [x] 20%
   - 16.7%
   - 120%
   > (36 − 30) / 30 = 20%. Options are priced for more movement than the stock recently delivered.

7. {#bk1} [calc] A stock's options imply 40% annual volatility. What one-day standard deviation does that suggest (252 trading days)?
   - 0.16%
   - 40%
   - [x] 2.52%
   - 10%
   > Daily volatility = 40% / √252 = 2.52%.

8. {#bk2} [calc] A $50 stock has options implying 40% annual volatility. What is the one-day one-standard-deviation move in dollars?
   - [x] $1.26
   - $20
   - $0.80
   - $5.05
   > Daily volatility is 40% / √252 = 2.52%, so the move is 2.52% × $50 = $1.26.

9. {#bk3} [calc] A stock's implied volatility is 35% while its realized volatility over the past month was 25%. What is the implied-to-realized ratio?
   - 0.71
   - 10
   - [x] 1.4
   - 0.4
   > 35 / 25 = 1.4, so options are pricing more movement than the stock recently delivered.

10. {#bk4} [calc] A stock's implied volatility is 36% annualized. What is the expected one-month standard deviation of its return?
   - 36%
   - [x] 10.4%
   - 3%
   - 1.4%
   > 36% × √(1/12) = 10.4%.

11. {#bk5} [calc] A stock's implied volatility rises from 30% to 39% ahead of an expected event. By what percentage did implied volatility increase?
   - 9%
   - 23%
   - 130%
   - [x] 30%
   > (39 − 30) / 30 = 30%.

12. {#bk6} Why does an implied-volatility signal need other filters?
   - It is exactly equal to realized volatility
   - [x] Implied volatility also includes a risk premium for option insurance, not just expected future moves
   - It is only available for index funds
   - It is set by the company
   > Persistent gaps between implied and realized volatility can reflect the volatility risk premium, not information.
