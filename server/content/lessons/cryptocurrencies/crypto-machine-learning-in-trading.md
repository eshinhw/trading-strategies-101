---
slug: crypto-machine-learning-in-trading
title: Machine Learning in Trading
summary: The basic idea behind using a machine-learning model to generate trading signals — learning patterns from historical features rather than being explicitly programmed with fixed rules — and the overfitting risk that comes with it.
---

## Rules-Based vs. Learned Signals

A traditional systematic strategy, like a moving-average crossover, applies a fixed, human-specified rule to the data. A machine-learning approach instead trains a model on historical examples — input features paired with a known outcome — and lets the model learn its own pattern connecting the two, which can capture relationships too complex to hand-specify.

## Features and Labels

A feature is any input the model is given to learn from — past returns, trading volume, social-media sentiment, order-book data. A label is the outcome being predicted, such as whether the price rose or fell over the next period. Training a model means showing it many historical feature-label pairs so it can learn the relationship between them.

## Training and Testing

A model is trained on one portion of historical data and then evaluated on a separate, held-out portion it never saw during training, to check whether the pattern it learned actually generalizes rather than just memorizing the training set.

## The Overfitting Risk

Overfitting happens when a model learns noise specific to its training data rather than a genuine, repeatable pattern — it looks impressively accurate on the data it was trained on but fails on new data. This risk is especially pronounced in a noisy, fast-moving market like cryptocurrency, which is exactly why the next two lessons pair a specific model with real attention to how it's validated.

## Example

A quant researcher testing a new crypto trading model will typically hold out the most recent chunk of data entirely, train and tune the model only on older data, and then check performance on that untouched recent period exactly once — treating it as a final exam rather than something to keep re-testing against, since repeatedly tuning against the same "held-out" data quietly turns it into training data in disguise.

# Quiz

1. How does a machine-learning approach to trading differ from a traditional rules-based strategy?
   - [x] It learns a pattern from historical feature-label examples rather than following a fixed, human-specified rule
   - It requires no historical data of any kind
   - It is identical to a moving-average crossover strategy
   - Machine learning cannot be applied to trading in any form
   > The core shift is from a hand-specified rule to a model that learns its own pattern from training examples.

2. What is a "label" in a machine-learning trading model?
   - [x] The outcome being predicted, such as whether price rose or fell over the next period
   - The name of the trading exchange used
   - A regulatory filing requirement
   - A synonym for a feature, with no distinct meaning
   > The label is what the model is trying to predict, paired during training with the features (inputs) that might explain it.

3. Why is a model evaluated on a separate, held-out portion of data it never trained on?
   - [x] To check whether the pattern it learned actually generalizes, rather than just memorizing the training data
   - Held-out data is only used to make the model train faster
   - There is no real purpose to using held-out data
   - Models are never tested on data separate from their training set
   > Testing on unseen data is the standard way to check that a model has learned a real, generalizable pattern rather than just memorized its training examples.

4. What is overfitting?
   - [x] When a model learns noise specific to its training data rather than a genuine, repeatable pattern
   - When a model is trained on too little data to run at all
   - A synonym for a model performing well on new, unseen data
   - A regulatory violation specific to crypto trading
   > An overfit model looks strong on its own training data but fails to generalize, since what it learned was noise rather than signal.

5. Why does the researcher in the example test the held-out data only once?
   - [x] Repeatedly tuning against the same held-out data quietly turns it into training data in disguise, undermining its purpose
   - Testing data can only technically be used a single time per calendar year
   - There is no real reason — testing it multiple times would work identically
   - Held-out data becomes corrupted after a single use
   > If a researcher keeps adjusting the model based on held-out results, that data stops being a fair, independent test and starts influencing training — exactly the trap this practice avoids.
