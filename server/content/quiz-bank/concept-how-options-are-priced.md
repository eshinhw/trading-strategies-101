---
slug: concept-how-options-are-priced
---

# Quiz

1. {#q1} What are the two parts of an option's premium?
   - Strike and expiration
   - [x] Intrinsic value and time value
   - Delta and gamma
   - Bid and ask
   > Premium equals what the option would be worth if exercised now plus extra value for the chance of further gains.

2. {#q2} A stock is at 60. What is the intrinsic value of a put with a strike of 55?
   - 5
   - [x] 0
   - 55
   - 60
   > A put's intrinsic value is max(55 − 60, 0) = 0, since the put is out of the money.

3. {#q3} Why does an out-of-the-money option have a premium?
   - It doesn't have any premium
   - [x] The chance of becoming profitable gives it time value, even with no intrinsic value
   - It is required by the exchange
   - Because of dividends only
   > All of an out-of-the-money option's premium is time value.

4. {#q4} What generally happens to a call's price if volatility rises?
   - It falls
   - [x] It rises, because bigger swings make a profitable outcome more likely
   - It stays the same
   - It becomes zero
   > Higher volatility raises time value for both calls and puts.

5. {#q5} [calc] A call with strike 100 is priced at 7.50 with the stock at 105. How much is time value?
   - 5.00
   - 7.50
   - [x] 2.50
   - 0
   > Time value is the premium minus intrinsic value: 7.50 − 5 = 2.50.

6. {#bk1} [calc] A stock is $100, a 1-year call with a $100 strike costs $10.45, and the interest rate is 5% (continuously compounded). By put-call parity, what is the 1-year put with the same strike worth?
   - $10.45
   - [x] $5.57
   - $15.57
   - $0.45
   > Put = call − stock + strike × e^(−rT) = $10.45 − $100 + $100 × e^(−0.05) = $5.57.

7. {#bk2} [calc] A stock is $50 and the strike is $48 with 6 months to expiry and a 4% continuously compounded rate. By put-call parity, what should call price minus put price equal?
   - $2.00
   - $50.00
   - $4.00
   - [x] $2.95
   > Call − put = stock − strike × e^(−rT) = $50 − $48 × e^(−0.02) = $2.95.
