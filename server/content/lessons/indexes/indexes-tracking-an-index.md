---
slug: indexes-tracking-an-index
title: Tracking an Index: ETFs and Index Funds
summary: How a fund actually replicates an index's return, and the tracking error that measures how closely it succeeds.
---

## Full Replication

The most straightforward way for a fund to track an index is full replication: buying every single constituent in exactly the same proportion as the index itself, so the fund's return should match the index almost exactly, aside from fees and minor trading costs.

## Sampling for Large or Illiquid Indices

For an index with thousands of constituents, or ones that include illiquid securities, full replication can be impractical or expensive. Instead, a fund may use sampling: holding a carefully chosen subset of the index's constituents, statistically selected to behave as much like the full index as possible, without literally holding every single name.

## Tracking Error

Tracking error measures how closely a fund's actual return matches its target index's return over time — a full-replication fund on a liquid index typically has very low tracking error, while a sampling-based fund on a harder-to-replicate index tends to show more, since its holdings are only an approximation of the real thing.

## This Connects Directly Back to ETFs

This is exactly the mechanism behind most index-tracking ETFs, already covered in this curriculum's ETF course: an ETF issuer chooses full replication or sampling to build the fund's underlying basket, and the same creation and redemption process that keeps an ETF's price near its net asset value is what lets the fund's holdings stay aligned with the index it's meant to track.

## In Practice

An index-fund manager spends the days around each quarterly reconstitution buying the shares of newly added companies and selling the shares of names being dropped, timing the trades to land as close as possible to the moment the index itself officially changes. Getting that timing wrong, or settling for a sampled basket that only approximates the full index, is exactly what shows up later as tracking error between the fund's return and the index's.

# Quiz

1. What is full replication?
   - [x] Buying every single constituent of an index in exactly the same proportion as the index itself
   - Buying only the single largest stock in the index
   - Holding cash instead of any index constituents
   - Randomly selecting a handful of unrelated stocks
   > Full replication means literally owning every constituent at the index's own weights, the most direct way to track an index's return.

2. Why might a fund use sampling instead of full replication?
   - [x] For an index with thousands of constituents or illiquid securities, full replication can be impractical or expensive
   - Sampling always produces a better return than full replication
   - Sampling is required by regulation for every index fund
   - Full replication is illegal for large indices
   > Sampling is a practical compromise for hard-to-replicate indices, holding a representative subset rather than every single constituent.

3. What does tracking error measure?
   - [x] How closely a fund's actual return matches its target index's return over time
   - The fund's total assets under management
   - The number of constituents in the underlying index
   - The fund's annual expense ratio
   > Tracking error is specifically about return fidelity — how well the fund's performance actually mirrors the index it's supposed to track.

4. Which fund would typically show lower tracking error?
   - [x] A full-replication fund tracking a liquid index
   - A sampling-based fund tracking a hard-to-replicate index
   - Tracking error is unrelated to replication method
   - Both approaches always produce identical tracking error
   > Full replication of a liquid index tends to match the index most precisely, producing lower tracking error than a sampling approach on a harder-to-replicate index.

5. How does this connect to what's covered in the ETF course?
   - [x] The same creation/redemption mechanism that keeps an ETF's price near NAV is what lets its holdings stay aligned with the index it tracks
   - ETFs and index tracking are completely unrelated topics
   - ETFs never track an index — only mutual funds do
   - Index funds and ETFs use entirely different, unrelated mechanisms
   > Index-tracking ETFs use exactly the replication/sampling choice described here, built and maintained through the creation/redemption process covered in the ETF course.
