---
slug: crypto-how-crypto-markets-trade
title: How Cryptocurrency Markets Trade
summary: A market that never closes, trades across a fragmented mix of exchanges worldwide, and requires its own approach to custody that traditional markets don't.
---

## A Market That Never Closes

Unlike stock exchanges with fixed daily trading hours, cryptocurrency markets trade continuously, 24 hours a day, seven days a week, across every time zone at once. There's no scheduled close where positions can be reassessed overnight, which changes how risk and liquidity need to be managed.

## Centralized and Decentralized Exchanges

A centralized exchange operates much like a traditional broker, matching buy and sell orders on its own platform and typically holding customer assets on the exchange's behalf. A decentralized exchange instead executes trades directly on the blockchain itself, through smart contracts, without any single company holding custody of user funds.

## Fragmented Liquidity

The same cryptocurrency can trade at slightly different prices on different exchanges at the same moment, since there's no single, unified order book the way there effectively is for a listed stock. That fragmentation is exactly what creates opportunities for the cross-exchange arbitrage strategies covered in other parts of this curriculum's broader trading toolkit.

## Custody: Who Actually Holds the Keys

Because ownership of a cryptocurrency is proven by a private key, whoever controls that key controls the asset. Holding assets on an exchange means trusting the exchange's own security and solvency, while self-custody in a personal wallet removes that counterparty risk but shifts full responsibility for safeguarding the key onto the holder.

## Example

A trader leaves 2 bitcoin on a centralized exchange for convenience. Bitcoin trades at $60,000.

- Holding: 2 × $60,000 = $120,000

The exchange is hacked and becomes insolvent. The bitcoin blockchain itself is untouched, and the price is unchanged at $60,000. In the bankruptcy, customers recover 40 cents on the dollar (illustrative).

$$
\$120{,}000 \times 40\% = \$48{,}000 \text{ recovered}
$$

$$
\$120{,}000 - \$48{,}000 = \boxed{\$72{,}000 \text{ lost}}
$$

The loss came from where the coins were held, not from the price or the blockchain.

**Self-custody**

If the trader had moved the 2 bitcoin to a wallet whose private keys only they control, the exchange's failure would not have touched them. The trade-off is that a lost key means the $120,000 is lost for good, with no company to appeal to.

That is the meaning of "not your keys, not your coins."

# Quiz

1. How do cryptocurrency markets' trading hours compare to a traditional stock exchange?
   - [x] Cryptocurrency markets trade continuously, 24 hours a day, seven days a week, with no scheduled close
   - Cryptocurrency markets follow the exact same hours as the New York Stock Exchange
   - Cryptocurrency markets are open only one day per week
   - There is no meaningful difference in trading hours
   > The absence of a scheduled close is a defining structural difference from traditional exchanges, with real implications for how risk is managed.

2. What is the key difference between a centralized and a decentralized exchange?
   - [x] A centralized exchange typically holds customer assets itself, while a decentralized exchange executes trades directly on the blockchain without custody by a single company
   - Decentralized exchanges are operated exclusively by governments
   - Centralized exchanges cannot process any cryptocurrency trades
   - There is no functional difference between the two
   > The custody model is the core distinction — centralized exchanges act as an intermediary holding assets, while decentralized exchanges remove that intermediary through smart contracts.

3. Why can the same cryptocurrency trade at slightly different prices on different exchanges at once?
   - [x] There is no single, unified order book across exchanges, unlike a listed stock
   - Cryptocurrency prices are set by a single global authority
   - Price differences across exchanges are illegal and never actually occur
   - All cryptocurrency exchanges are required to use identical prices
   > Fragmented liquidity across many independent exchanges, without a unified order book, is exactly what allows small price discrepancies to persist.

4. What does holding cryptocurrency on an exchange, rather than in self-custody, expose an investor to?
   - [x] The exchange's own security and solvency risk
   - No additional risk of any kind compared to self-custody
   - Only the risk of the underlying blockchain itself being hacked
   - Custody has no bearing on an investor's risk exposure
   > Assets held on an exchange are only as safe as that exchange's own security and financial health, separate from the security of the blockchain itself.

5. What does the phrase "not your keys, not your coins" refer to?
   - [x] Whoever controls the private key controls the asset, so assets left on an exchange depend on that exchange's trustworthiness
   - A rule stating only banks can hold private keys
   - A technical requirement that all keys be publicly shared
   - A phrase with no real connection to custody or security
   > The phrase captures exactly the custody tradeoff covered in this lesson: control follows the private key, not the label on an account statement.

6. {#calc1} [calc] A trader leaves 3 bitcoin at $50,000 each on an exchange that fails, and customers recover 35 cents on the dollar. What is the loss?
   - [x] $97,500
   - $52,500
   - $150,000
   - $65,000
   > The holding was 3 × $50,000 = $150,000. Recovering 35% returns $52,500, so the loss is $150,000 − $52,500 = $97,500.
