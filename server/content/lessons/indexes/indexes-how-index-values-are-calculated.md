---
slug: indexes-how-index-values-are-calculated
title: How Index Values Are Calculated
summary: The mechanics behind an index's headline number, and the divisor adjustments that keep it consistent through stock splits and constituent changes.
---

## From Constituent Prices to One Level

An index level is calculated by combining every constituent's price (or market cap, depending on the weighting method) into a weighted sum, then dividing by a number called the divisor — a scaling factor chosen so the resulting index level lands at a convenient, readable number rather than some arbitrary large sum.

## Why the Divisor Has to Change

The divisor isn't fixed forever — it has to be adjusted whenever something happens that would otherwise cause the index to jump or drop for reasons that have nothing to do with actual market performance, such as a stock split, a company being added to or removed from the index, or a constituent issuing new shares.

## A Stock Split Example

If a constituent does a 2-for-1 stock split, its share price is cut in half overnight even though the company's actual value hasn't changed at all — without any adjustment, a price-weighted index would show an artificial drop purely from the split. The divisor is recalculated at that moment specifically to cancel out that mechanical effect, so the index level reflects real market moves only.

## Rebalancing and Reconstitution

Indices are also periodically rebalanced, adjusting each constituent's weight back toward its target methodology, and reconstituted, adding newly qualifying companies and removing ones that no longer fit the index's rules — both processes that, again, require divisor adjustments so the index's continuity isn't broken by changes to its own membership or weights.

## Example

When a company in a widely followed index announces a multi-for-one stock split, the index provider recalculates the divisor that same day so the index's published level doesn't move at all because of the split itself — anyone watching the index sees only the moves caused by actual buying and selling, not by a change in how one constituent's shares happen to be counted. The same quiet divisor adjustment happens whenever the index provider swaps one company out for another during its periodic reconstitution.

# Quiz

1. What is an index's divisor used for?
   - [x] Scaling the weighted sum of constituent prices or market caps down to a convenient, readable index level
   - Setting the index's daily price limit
   - Determining which companies qualify for index membership
   - Calculating each company's individual stock price
   > The divisor is the scaling factor applied to the weighted sum of constituents, producing the familiar index level rather than some large, arbitrary raw number.

2. Why does the divisor need to be adjusted after a stock split?
   - [x] To cancel out the mechanical price drop from the split, so the index reflects only real market moves
   - Stock splits have no effect on an index and require no adjustment
   - To permanently remove the split company from the index
   - To double the index's overall level
   > A stock split changes a share price without changing the company's actual value, so the divisor is recalculated to prevent that purely mechanical change from distorting the index level.

3. What is index reconstitution?
   - [x] Adding newly qualifying companies to the index and removing ones that no longer fit its rules
   - Recalculating every constituent's stock price from scratch
   - Permanently freezing the index's membership forever
   - A one-time event that only happens when an index first launches
   > Reconstitution periodically updates index membership to reflect companies that now qualify (or no longer qualify) under the index's rules.

4. Why do rebalancing and reconstitution require divisor adjustments?
   - [x] So changes to constituent weights or membership don't create an artificial jump or drop in the index level
   - Divisor adjustments are unrelated to rebalancing or reconstitution
   - To increase the index's level every time a rebalance occurs
   - Because rebalancing removes the need for a divisor entirely
   > Just like a stock split, changes to weights or membership would mechanically shift the index level without the divisor being recalculated to absorb that change.

5. What would happen to a price-weighted index without any divisor adjustment after a 2-for-1 split?
   - [x] The index would show an artificial drop purely from the split, unrelated to actual market performance
   - The index level would be completely unaffected
   - The index would automatically double in value
   - The split company would be instantly removed from the index
   > Without adjusting the divisor, the split's mechanical price halving would show up as a real-looking decline in the index, even though nothing about the company's actual value changed.
