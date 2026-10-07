---
slug: etf-creation-and-redemption
title: How ETFs Are Created
summary: The creation and redemption mechanism that lets large institutional players manufacture or dissolve ETF shares on demand — and why that keeps an ETF's price in line with its underlying holdings.
---

## Authorized Participants

New ETF shares aren't created by the fund manager selling shares directly to the public; they're created through large institutional intermediaries called authorized participants (APs) — typically big broker-dealers — who are the only parties allowed to deal directly with the ETF issuer to create or redeem shares.

## The Creation Process

To create new ETF shares, an AP assembles the exact basket of underlying securities the ETF is meant to hold, or in some cases delivers cash instead, and delivers it to the ETF issuer in exchange for a large block of new ETF shares, called a creation unit, typically representing tens of thousands of shares at once.

## The Redemption Process

Redemption runs the reverse: an AP hands back a creation unit's worth of ETF shares to the issuer and receives the underlying basket of securities in return, effectively retiring those ETF shares and shrinking the fund.

## Why This Keeps Prices in Line

Because APs can profit from any gap between an ETF's market price and the actual value of its underlying holdings — buying whichever is cheaper and creating or redeeming to capture the difference — this arbitrage mechanism is what keeps an ETF's trading price closely tethered to its net asset value, without the fund itself having to intervene.

## Example

An ETF's shares trade above the value of the stocks it holds, and an authorized participant steps in.

- Value of the underlying basket (NAV): $100.00 per ETF share
- ETF market price: $100.40, a premium of 0.4%
- One creation unit: 50,000 ETF shares

**Step 1: buy the basket of underlying stocks**

$$
50{,}000 \times \$100.00 = \$5{,}000{,}000
$$

**Step 2: hand the basket to the ETF issuer and receive 50,000 new ETF shares**

**Step 3: sell the new shares in the market**

$$
50{,}000 \times \$100.40 = \$5{,}020{,}000
$$

$$
\$5{,}020{,}000 - \$5{,}000{,}000 = \boxed{\$20{,}000 \text{ profit before costs}}
$$

The new shares increase supply, which pushes the ETF's price down toward $100.00. The participant keeps repeating the trade until the profit disappears, which is what keeps the ETF's price close to its holdings. If the ETF traded below NAV, the process works in reverse by redeeming shares.

# Quiz

1. Who is allowed to create or redeem ETF shares directly with the issuer?
   - Any individual retail investor
   - [x] Authorized participants (APs), typically large broker-dealers
   - Only the ETF's original founder
   - No one — ETF share counts never change
   > Authorized participants are the specific institutional intermediaries permitted to deal directly with the ETF issuer to create or redeem shares.

2. What does an AP deliver to the ETF issuer to create new shares?
   - [x] The exact basket of underlying securities the ETF holds (or cash, in some cases)
   - A written request with no assets attached
   - A single share of the ETF itself
   - A loan from a bank
   > Creating new ETF shares works by exchanging the underlying basket of securities (or cash) for a large block of new shares called a creation unit.

3. What happens during redemption?
   - [x] An AP hands back ETF shares to the issuer and receives the underlying basket of securities in return
   - The ETF issuer pays cash directly to every retail shareholder
   - Redemption is identical to creation, with no differences
   - ETF shares can never be redeemed once created
   > Redemption is the mirror image of creation: an AP returns a creation unit's worth of shares and receives the underlying basket back, shrinking the fund.

4. Why does the creation/redemption mechanism keep an ETF's market price close to its net asset value?
   - [x] APs can profit from any price gap by creating or redeeming shares, which is an arbitrage force that pulls the market price back in line
   - The mechanism has no effect on the ETF's market price
   - The government sets the ETF's price directly every day
   - ETF prices are fixed and never actually change
   > APs are financially motivated to exploit any gap between market price and underlying value, and doing so via creation/redemption is exactly what keeps that gap small.

5. What is a "creation unit"?
   - A single ETF share
   - [x] A large block of ETF shares, typically tens of thousands, created or redeemed at once by an AP
   - A type of underlying bond
   - The ETF issuer's corporate headquarters
   > A creation unit is the large block size in which shares are actually created or redeemed — not a single-share transaction.

6. {#calc1} [calc] An ETF's NAV is $50.00 but it trades at $50.30. An authorized participant creates a 100,000-share unit. What is the profit before costs?
   - $3,000
   - $300,000
   - [x] $30,000
   - $0
   > The participant buys the basket at $50.00 and sells the new shares at $50.30, a gain of $0.30 × 100,000 = $30,000.

7. {#calc2} [calc] An ETF trades at $49.70 against a NAV of $50.00. A participant buys 50,000 shares and redeems them for the basket. What is the profit before costs?
   - [x] $15,000
   - $1,500
   - $150,000
   - $0.30
   > The basket is worth $50.00 per share and the shares cost $49.70, a gain of $0.30 × 50,000 = $15,000.
