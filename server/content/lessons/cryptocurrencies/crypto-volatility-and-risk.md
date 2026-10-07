---
slug: crypto-volatility-and-risk
title: Volatility and Risk in Crypto
summary: Why cryptocurrency prices swing far more than most traditional assets, and the security, custody, and regulatory risks layered on top of that raw price volatility.
---

## Why Crypto Is So Volatile

Cryptocurrency prices have historically moved far more, in both directions, than most traditional asset classes over comparable periods. Contributing factors include a market still forming consensus on fair value, thinner liquidity relative to trading volume during stress, and a large share of participants driven by sentiment and news flow rather than slower-moving fundamentals.

## Correlation With Traditional Assets

Cryptocurrency was once widely described as an uncorrelated, diversifying asset relative to stocks and bonds. That relationship isn't fixed, though — correlation with equities in particular has risen and fallen at different points as more institutional capital and macro-driven trading has entered the market, so it shouldn't be assumed to hold at any given moment without checking.

## Security and Custody Risk

Beyond price risk, crypto carries risks that don't really have a stock-market equivalent: exchange hacks, lost or stolen private keys with no customer-service recovery process, and smart-contract bugs that can be exploited to drain funds from a decentralized application.

## Regulatory Uncertainty

How a given cryptocurrency or activity is classified and regulated varies by jurisdiction and continues to evolve, adding a layer of risk that isn't present in more mature, settled regulatory regimes like those covering listed equities or government bonds.

## Example

A systematic strategy is sized from backtested price data. Compare an equity strategy with a crypto one for a $100,000 account (illustrative).

- Equity daily volatility: 1%
- Crypto daily volatility: 4%

**One-day 95% loss on a full $100,000 position (1.65 standard deviations)**

$$
\text{Equity: } 1.65 \times 1\% \times \$100{,}000 = \$1{,}650
$$

$$
\text{Crypto: } 1.65 \times 4\% \times \$100{,}000 = \$6{,}600
$$

**Position that gives the same risk as the equity strategy**

$$
\frac{\$1{,}650}{1.65 \times 4\%} = \$25{,}000
$$

**Risks the price history does not show**

A smart-contract exploit or exchange outage can gap the price 25% before the strategy can react.

$$
\$25{,}000 \times 25\% = \$6{,}250 \text{ loss in one gap}
$$

Because of those extra risks, crypto controls are usually more conservative than the backtest alone says, for example cutting the position to $12,500, which limits that gap loss to $3,125.

# Quiz

1. What are contributing factors to cryptocurrency's historically high volatility?
   - [x] A market still forming consensus on fair value, thinner stress-period liquidity, and heavy sentiment-driven participation
   - Cryptocurrency markets have historically been less volatile than government bonds
   - Volatility in crypto has a single, fixed, unchanging cause
   - Crypto volatility is entirely unrelated to market liquidity
   > Several structural factors combine to produce crypto's historically large price swings, not any single cause alone.

2. Has cryptocurrency's correlation with traditional assets like equities stayed constant over time?
   - [x] No — it has risen and fallen at different points as more institutional and macro-driven trading entered the market
   - Yes, it has remained exactly zero at all times
   - Yes, it has remained exactly 1.0 at all times
   - Correlation is not a meaningful concept for cryptocurrency
   > The relationship has shifted over time rather than staying fixed, so it shouldn't be assumed to hold without checking current conditions.

3. Which of these is a custody-related risk specific to cryptocurrency, without a real stock-market equivalent?
   - [x] Losing a private key with no customer-service recovery process
   - A company reporting lower-than-expected quarterly earnings
   - A stock exchange's normal daily closing bell
   - A mutual fund charging a management fee
   > Unlike a brokerage account, there's typically no recovery mechanism if a private key controlling crypto assets is lost or stolen.

4. Why does regulatory uncertainty add risk to cryptocurrency specifically?
   - [x] How crypto assets and activities are classified and regulated varies by jurisdiction and continues to evolve
   - Cryptocurrency regulation has been completely fixed and settled worldwide for decades
   - Regulatory risk applies only to traditional assets, never to cryptocurrency
   - All countries currently regulate cryptocurrency in an identical way
   > The evolving, jurisdiction-dependent regulatory landscape is itself a source of risk not present in more settled, mature regulatory regimes.

5. Why might risk controls for a crypto trading strategy need to be more conservative than backtested price data alone suggests?
   - [x] Disruptions like exchange outages, hacks, or regulatory news aren't fully captured by historical price patterns alone
   - Backtested data always overstates the true risk of any strategy
   - Crypto strategies never actually require any risk controls
   - Historical price data captures every possible risk a crypto strategy could face
   > The additional risks covered in this lesson — security, custody, regulatory — don't show up cleanly in historical price data, so relying on backtests alone can understate real risk.

6. {#calc1} [calc] Crypto moves about 5% a day and equities about 1%. A strategy holds $100,000 of equities. What crypto position carries the same one-day risk?
   - $50,000
   - $5,000
   - [x] $20,000
   - $100,000
   > Equal risk means position × volatility is equal: $100,000 × 1% = $1,000, and $1,000 / 5% = $20,000.
