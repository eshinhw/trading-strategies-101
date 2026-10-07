---
slug: concept-moneyness
---

# Quiz

1. {#q1} A stock trades at $100. Is a $95-strike call in-the-money or out-of-the-money?
   - [x] In-the-money
   - Out-of-the-money
   - At-the-money
   - Moneyness doesn't apply to calls
   > The stock ($100) is above the call's strike ($95), so the call is in-the-money.

2. {#q2} A stock trades at $100. Is a $95-strike put in-the-money or out-of-the-money?
   - In-the-money
   - [x] Out-of-the-money
   - At-the-money
   - Moneyness doesn't apply to puts
   > For a put, ITM means the stock is below the strike. $100 is above $95, so this put is OTM.

3. {#q3} All else equal, which option is typically cheaper?
   - An in-the-money option
   - [x] An out-of-the-money option
   - They always cost the same
   - Cost has nothing to do with moneyness
   > OTM options have no intrinsic value yet — they're purely a bet on a future move — so they're generally cheaper than ITM options.

4. {#q4} A stock trades at exactly $100. What is the moneyness of a $100-strike call?
   - In-the-money
   - Out-of-the-money
   - [x] At-the-money
   - Undefined — moneyness requires the strike and stock price to differ
   > When the strike equals the current stock price, the option is at-the-money (ATM).

5. {#q5} Why do so many strategies buy OTM options to keep cost down and sell OTM options for a 'safer' premium?
   - [x] OTM options have no intrinsic value yet, so they're cheaper to buy and less likely to be exercised against a seller
   - OTM options are always more expensive than ITM options
   - OTM options guarantee a profit for the buyer
   - Moneyness has no real effect on an option's price
   > OTM options are cheaper to buy (no intrinsic value yet) and, for a seller, less likely to move in-the-money and get exercised — which is why they show up on both sides of so many strategies.

6. {#calc1} [calc] A stock trades at $100. What is the intrinsic value of a $95-strike call and of a $105-strike call?
   - $0 and $5
   - [x] $5 and $0
   - $5 and $5
   - $95 and $105
   > A call's intrinsic value is the stock price minus the strike, floored at zero: $100 − $95 = $5, and $100 − $105 is below zero, so $0.

7. {#bk1} [calc] A call has a strike of $100 and costs $11 while the stock is at $108. What are the intrinsic value and time value?
   - [x] Intrinsic $8, time value $3
   - Intrinsic $11, time value $0
   - Intrinsic $3, time value $8
   - Intrinsic $0, time value $11
   > Intrinsic value is $108 − $100 = $8. Time value is the premium minus intrinsic: $11 − $8 = $3.
