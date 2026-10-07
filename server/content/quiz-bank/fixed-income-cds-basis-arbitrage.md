---
slug: fixed-income-cds-basis-arbitrage
---

# Quiz

1. {#q1} What does a credit default swap (CDS) function like?
   - A stock option on the issuer's equity
   - [x] Insurance against a bond issuer defaulting — the buyer pays a premium and receives a payout if the issuer defaults
   - A guaranteed fixed-rate savings account
   - A type of government bond
   > A CDS lets the buyer pay a periodic premium in exchange for a payout if the underlying issuer defaults, functioning like default insurance.

2. {#q2} What is the "CDS basis"?
   - The face value of the underlying bond
   - [x] The CDS spread minus the bond's credit spread
   - The total number of CDS contracts outstanding
   - The coupon rate on the underlying bond
   > The basis measures the gap between the cost of CDS protection and the bond's own credit spread, which in principle should be closely linked since both compensate for the same default risk.

3. {#q3} How is a "negative basis" trade constructed?
   - Selling the bond and selling CDS protection
   - [x] Buying the bond and buying CDS protection on the same issuer
   - Buying the bond and selling CDS protection
   - Selling the bond and buying CDS protection
   > A negative basis trade goes long the bond, earning its credit spread, while also buying CDS protection, paying the CDS premium, profiting if the bond's spread is wide relative to the CDS spread and the two converge.

4. {#q4} Why is a negative basis trade close to credit-risk-neutral in theory?
   - Because it has no exposure to the issuer at all
   - [x] Because the position is long the bond and long protection against that same bond defaulting, so a default's loss on the bond is designed to be offset by the CDS payout
   - Because CDS contracts eliminate all forms of risk
   - Because the trade requires no capital
   > Being simultaneously long the bond and long default protection on it means an actual default largely cancels out — the bond loss is offset by the CDS payout — leaving the basis's convergence as the main driver of profit.

5. {#q5} What can keep the CDS basis from converging cleanly in practice?
   - Nothing — the basis always converges perfectly and immediately
   - [x] Frictions like cheapest-to-deliver differences, funding costs, counterparty risk, and supply-demand imbalances between the bond and CDS markets
   - The basis is fixed by regulation and never changes
   - CDS contracts cannot be traded once issued
   > Despite being theoretically low-risk, negative basis trades face real-world frictions — financing costs, delivery mechanics, counterparty exposure, and market technicals — that can keep the basis persistently wide.

6. {#calc1} [calc] A company's bond has a credit spread of 190 basis points and its CDS costs 150 basis points. What is the basis (CDS minus bond spread), and what does a trader earn on $10 million if it closes?
   - +40 basis points, and about $40,000 a year
   - [x] −40 basis points, and about $40,000 a year
   - −40 basis points, and about $400,000 a year
   - −340 basis points, and about $340,000 a year
   > The basis is 150 − 190 = −40 basis points. Buying the bond and the protection locks in about 0.40% on $10M = $40,000 a year.

7. {#bk1} [calc] A bond has a spread of 150 basis points and a credit default swap on the same company costs 120 basis points. What is the CDS basis (CDS spread minus bond spread)?
   - [x] −30 basis points
   - +30 basis points
   - 270 basis points
   - −270 basis points
   > Basis = 120 − 150 = −30 basis points, a negative basis.

8. {#bk2} [calc] With a −30 basis point basis, a trader buys $10 million of the bond and buys CDS protection. What is the annual risk-free profit, ignoring funding?
   - $300,000
   - $3,000
   - [x] $30,000
   - $150,000
   > Profit = 0.30% × $10 million = $30,000 a year.

9. {#bk3} [calc] A bond spread is 90 basis points and the CDS spread is 130 basis points. Is the basis positive or negative, and by how much?
   - [x] Positive 40 basis points
   - Negative 40 basis points
   - Positive 220 basis points
   - Negative 220 basis points
   > Basis = CDS spread − bond spread = 130 − 90 = +40 basis points.
