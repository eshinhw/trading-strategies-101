---
slug: crypto-sentiment-analysis-naive-bayes
title: Sentiment Analysis – Naive Bayes Bernoulli
summary: Classifying text like social-media posts or news headlines as bullish or bearish using a simple, fast probabilistic model, then using that sentiment classification as a trading signal for sentiment-driven crypto markets.
---

## Why Sentiment Matters for Crypto

Cryptocurrency prices are unusually sensitive to public sentiment — social-media chatter, influential commentary, and breaking news can move prices quickly, more so than for most traditional assets with a longer history of institutional, fundamentals-driven ownership. That makes systematically measuring sentiment a genuinely useful trading input.

## Naive Bayes, Conceptually

A Naive Bayes classifier uses Bayes' theorem to estimate the probability that a piece of text belongs to a category, such as "bullish" or "bearish," based on the words it contains. It's called "naive" because it assumes each word contributes to that probability independently of every other word — a simplification that isn't strictly true of real language, but works surprisingly well in practice and is fast to train.

## Bernoulli Features: Presence, Not Count

The Bernoulli variant represents each word in the model's vocabulary as simply present or absent in a given piece of text, rather than counting how many times it appears. That binary present-or-absent representation is a natural fit for short-form text, like a tweet or headline, where word repetition carries little extra information beyond a word simply showing up.

## From Classification to Trading Signal

Once the model classifies a stream of text as leaning bullish or bearish, that classification can be aggregated over time, such as a rolling net-sentiment score across recent posts, and used as an input to a trading signal — buying when sentiment turns decisively positive, reducing exposure when it turns negative.

## In Practice

A sentiment model trained on a labeled dataset of past crypto-related social-media posts (each tagged in advance as bullish or bearish by a human reviewer) can then classify new, unlabeled posts as they arrive in real time. A trading system tracking the resulting rolling sentiment score might scale back exposure when sentiment deteriorates sharply, treating a wave of bearish chatter as an early signal worth reacting to, independent of what the price chart alone shows.

# Quiz

1. Why is sentiment analysis particularly useful for cryptocurrency trading?
   - [x] Crypto prices are unusually sensitive to social-media chatter and news, more so than many traditional assets
   - Cryptocurrency prices are entirely unaffected by public sentiment
   - Sentiment analysis only works for assets with no public trading data
   - Crypto markets have no connection to social media of any kind
   > Crypto's outsized sensitivity to sentiment-driven flows is exactly what makes systematically measuring sentiment a useful trading input.

2. Why is a Naive Bayes classifier called "naive"?
   - [x] It assumes each word contributes to the classification probability independently of every other word
   - It is incapable of making any prediction at all
   - It requires no training data whatsoever
   - "Naive" refers to the model always being wrong
   > The independence assumption between words is a simplification of real language, which is exactly why the model is described as naive — despite often working well in practice.

3. What does the "Bernoulli" variant of Naive Bayes represent for each word?
   - [x] Whether the word is simply present or absent in the text, rather than how many times it appears
   - The exact number of times the word appears, with no other information
   - The word's dictionary definition
   - The Bernoulli variant ignores individual words entirely
   > Bernoulli features are binary — present or absent — which suits short-form text where repetition adds little extra information.

4. How does a sentiment classification get turned into an actual trading signal?
   - [x] By aggregating classifications over time into a rolling sentiment score used to adjust trading exposure
   - Classifications cannot be used as trading signals under any circumstances
   - By ignoring the classification entirely and trading on price alone
   - A single classified post is used exactly once and never aggregated
   > A rolling, aggregated sentiment score is what turns individual text classifications into a usable, continuous trading input.

5. In the example, what does the trading system do when sentiment deteriorates sharply?
   - [x] It scales back exposure, treating a wave of bearish chatter as an early signal worth reacting to
   - It ignores sentiment data entirely and relies solely on price
   - It automatically doubles exposure regardless of sentiment
   - It shuts down entirely and stops trading forever
   > The system treats deteriorating sentiment as an actionable signal, adjusting exposure ahead of what price data alone might show.
