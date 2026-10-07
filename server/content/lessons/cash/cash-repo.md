---
slug: cash-repo
title: Repurchase Agreement (REPO)
summary: A short-term, collateralized loan structured as a sale-and-repurchase of securities — the plumbing that lets cash-rich lenders and security-rich borrowers each get exactly what they need overnight.
---

## The Basic Structure

In a repurchase agreement (repo), one party sells securities, often Treasuries, to another party for cash, with a simultaneous agreement to buy those same securities back at a slightly higher price on a set future date, often the very next day. Economically it's a collateralized loan; legally it's structured as two separate sales.

## Who's on Each Side

The party selling securities and receiving cash needs short-term funding — that side of the trade is doing a "repo," borrowing. The party buying securities and providing cash is investing cash safely overnight in exchange for the repo rate — that side is doing a "reverse repo," lending.

## The Repo Rate and Haircuts

The implicit interest rate on a repo, the repo rate, is generally very low, since the loan is fully collateralized by high-quality securities. As with the collateralized lending covered earlier in this course, a haircut is also typically applied — the cash advanced is a bit less than the collateral's market value, adding a further buffer for the lender.

## Why the Repo Market Matters

Repo is one of the largest, most important short-term funding markets in the financial system: securities dealers routinely finance their inventory this way rather than tying up their own capital, and central banks, including the Federal Reserve, use repo and reverse repo operations as a direct tool to manage short-term interest rates and liquidity in the broader financial system.

## Example

A bond dealer holds $100 million of Treasuries overnight and wants cash without selling them.

- Repo: the dealer sells the securities for $100,000,000 cash and agrees to buy them back tomorrow
- Overnight repo rate: 5.3% a year (360-day basis)

**Interest on the overnight loan**

$$
\$100{,}000{,}000 \times 5.3\% \times \frac{1}{360} = \boxed{\$14{,}722}
$$

**Buy-back price tomorrow**

$$
\$100{,}000{,}000 + \$14{,}722 = \$100{,}014{,}722
$$

**The other side**

A money market fund lends the $100 million overnight (a reverse repo) and earns the $14,722, backed by the same Treasuries.

- The dealer funds its position for one night and keeps its securities.
- The fund earns a near-riskless return on cash that would otherwise sit idle.

# Quiz

1. How is a repurchase agreement structured?
   - [x] One party sells securities for cash with a simultaneous agreement to repurchase them later at a slightly higher price
   - It's an unsecured loan with no underlying securities involved
   - It's a permanent sale of securities with no repurchase agreement
   - It's a type of stock option contract
   > A repo is economically a collateralized loan, structured legally as a sale of securities paired with a commitment to buy them back at a set future price and date.

2. What is the difference between a "repo" and a "reverse repo"?
   - [x] Repo is the borrowing side (selling securities for cash); reverse repo is the lending side (buying securities, providing cash)
   - They are two unrelated, entirely different transactions
   - Reverse repo always involves stocks instead of securities
   - There is no meaningful difference between the two terms
   > The same transaction looks like a repo from the cash-borrower's side and a reverse repo from the cash-lender's side — it's a matter of perspective on one trade.

3. Why is the repo rate generally very low?
   - [x] Because the loan is fully collateralized by high-quality securities, minimizing the lender's risk
   - Because repo transactions are guaranteed to lose money
   - Because repo loans have no collateral backing them at all
   - Repo rates are always higher than unsecured lending rates
   > Full collateralization by high-quality securities like Treasuries is exactly what keeps repo's implicit interest rate so low compared to unsecured borrowing.

4. How do central banks use the repo market, according to this lesson?
   - [x] As a direct tool to manage short-term interest rates and liquidity in the financial system
   - Central banks are legally forbidden from participating in repo
   - Only to fund their own long-term securities purchases
   - Repo has no connection to monetary policy
   > Central banks, including the Federal Reserve, actively use repo and reverse repo operations as a lever for managing short-term rates and system-wide liquidity.

5. In the example, why does a bond dealer repo out its Treasury inventory overnight?
   - [x] To fund its position with borrowed cash instead of tying up its own capital
   - Because it is required by law to sell its entire inventory nightly
   - To permanently exit its Treasury position
   - Repo has no funding benefit for a securities dealer
   > Repo lets the dealer keep the securities economically (via the repurchase agreement) while freeing up cash, rather than funding the position entirely out of its own capital.

6. {#calc1} [calc] A dealer repos $50 million of Treasuries overnight at 4.8% a year on a 360-day basis. How much interest does it pay for the night?
   - About $2,400,000
   - About $240,000
   - About $13,333
   - [x] About $6,667
   > Interest is $50,000,000 × 4.8% × 1/360 ≈ $6,667.

7. {#calc2} [calc] A repo has a 2% haircut on $50 million of Treasuries. How much cash does the dealer receive?
   - $50 million
   - [x] $49 million
   - $51 million
   - $1 million
   > The lender advances 98% of the collateral's value: $50M × 0.98 = $49M, which protects the lender if prices fall.
