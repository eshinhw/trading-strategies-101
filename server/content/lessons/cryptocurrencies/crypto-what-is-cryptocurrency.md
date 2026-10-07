---
slug: crypto-what-is-cryptocurrency
title: Cryptocurrency and Blockchain
summary: A digital asset secured by cryptography and recorded on a distributed, tamper-resistant ledger, with no central issuer or intermediary required to validate transactions.
---

## What a Cryptocurrency Actually Is

A cryptocurrency is a digital asset that exists as an entry on a blockchain — a shared, distributed ledger maintained across a network of independent computers rather than a single central database. Ownership is proven cryptographically, through a private key, rather than by any bank or government registry.

## Why the Ledger Is Distributed

Instead of one trusted party keeping the official record, every participant in the network holds a copy of the ledger, and new transactions are validated and added through a consensus process, most commonly proof-of-work or proof-of-stake. That distributed validation is what removes the need for a central intermediary while still preventing any single participant from rewriting history unilaterally.

## No Central Issuer

Unlike a currency issued and controlled by a central bank, most cryptocurrencies follow a fixed, pre-programmed issuance schedule written into the protocol itself — Bitcoin's total supply, for example, is capped and its issuance rate halves on a set schedule. No committee can vote to change the money supply the way a central bank can.

## Coins, Tokens, and Smart Contracts

A base-layer coin like Bitcoin exists purely to be transferred, while a platform like Ethereum also supports smart contracts — self-executing code stored on the blockchain — enabling tokens and applications to be built on top of it. That distinction matters for this course, since different crypto assets trade on very different fundamental drivers.

## Example

Two transfers of bitcoin, one for $10 and one for $10,000,000. Neither involves a bank.

- Network fee: about $5 in both cases (fees depend on the data size, not the amount)
- Confirmations required: 6, at about 10 minutes each

**Steps, identical for both transfers**

1. The sender broadcasts the transaction to the network.
2. Other participants check it against the protocol's rules (a valid signature and enough balance).
3. It is recorded on the shared ledger, and each new block on top makes it harder to reverse.

**Time to final confirmation**

$$
6 \times 10 \text{ minutes} = 60 \text{ minutes}
$$

**Fee as a share of the amount sent**

$$
\frac{\$5}{\$10} = 50\% \qquad\qquad \frac{\$5}{\$10{,}000{,}000} = 0.00005\%
$$

No bank approves either transfer, and the process is the same whether the amount is small or large. The fee does not scale with the amount, so tiny transfers are expensive and large ones are cheap.

# Quiz

1. What is a blockchain, in the context of cryptocurrency?
   - [x] A shared, distributed ledger maintained across a network of independent computers rather than one central database
   - A single bank's private internal transaction database
   - A physical vault where digital coins are stored
   - A government registry of currency ownership
   > The defining feature of a blockchain is that the ledger is distributed across many independent participants, not held by one central authority.

2. How is a new transaction added to the blockchain?
   - [x] It's validated and added through a network consensus process, such as proof-of-work or proof-of-stake
   - A single central bank approves it manually
   - Transactions are added randomly with no validation at all
   - Only the transaction's sender can add it, with no outside validation
   > Consensus mechanisms let the distributed network agree on the ledger's state without needing to trust any single participant.

3. How does most cryptocurrency issuance differ from a traditional central bank's control over its currency?
   - [x] Issuance typically follows a fixed, pre-programmed schedule written into the protocol, rather than being set by a central authority
   - Cryptocurrency issuance is set at the sole discretion of a single global committee
   - There is no difference at all between the two systems
   - Cryptocurrencies are always issued directly by central banks
   > A protocol like Bitcoin's follows programmed issuance rules that no committee can vote to change, unlike a central bank's discretionary control over money supply.

4. What distinguishes a platform like Ethereum from a base-layer coin like Bitcoin?
   - [x] It supports smart contracts — self-executing code on the blockchain — enabling tokens and applications to be built on top of it
   - It has no blockchain at all
   - It is controlled entirely by a single central bank
   - There is no meaningful difference between the two
   > Smart-contract platforms extend beyond simple value transfer, letting other tokens and applications be built directly on the underlying blockchain.

5. Why doesn't a bank need to approve a cryptocurrency transfer between two wallets?
   - [x] The transaction is validated by the distributed network itself, following the protocol's consensus rules
   - Cryptocurrency transfers are not actually recorded anywhere
   - All cryptocurrency transfers require government pre-approval instead
   - Wallets are physically connected to a single bank's servers
   > The network's consensus process replaces the role a bank or clearinghouse would normally play in validating and recording a transfer.

6. {#calc1} [calc] A bitcoin transfer carries a flat network fee of $4. What is the fee as a share of a $200 transfer?
   - 0.2%
   - 4%
   - 20%
   - [x] 2%
   > $4 / $200 = 2%. The fee does not scale with the amount, so it is a small share of a large transfer and a big share of a small one.

7. {#calc2} [calc] A bitcoin transfer pays a fee of 5,000 satoshis (1 bitcoin is 100,000,000 satoshis) when bitcoin is $60,000. What is the fee in dollars?
   - $300
   - [x] $3.00
   - $30
   - $0.30
   > 5,000 / 100,000,000 = 0.00005 bitcoin, and 0.00005 × $60,000 = $3.00.
