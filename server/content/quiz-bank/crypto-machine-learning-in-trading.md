---
slug: crypto-machine-learning-in-trading
---

# Quiz

1. {#q1} How does a machine-learning approach to trading differ from a traditional rules-based strategy?
   - [x] It learns a pattern from historical feature-label examples rather than following a fixed, human-specified rule
   - It requires no historical data of any kind
   - It is identical to a moving-average crossover strategy
   - Machine learning cannot be applied to trading in any form
   > The core shift is from a hand-specified rule to a model that learns its own pattern from training examples.

2. {#q2} What is a "label" in a machine-learning trading model?
   - [x] The outcome being predicted, such as whether price rose or fell over the next period
   - The name of the trading exchange used
   - A regulatory filing requirement
   - A synonym for a feature, with no distinct meaning
   > The label is what the model is trying to predict, paired during training with the features (inputs) that might explain it.

3. {#q3} Why is a model evaluated on a separate, held-out portion of data it never trained on?
   - [x] To check whether the pattern it learned actually generalizes, rather than just memorizing the training data
   - Held-out data is only used to make the model train faster
   - There is no real purpose to using held-out data
   - Models are never tested on data separate from their training set
   > Testing on unseen data is the standard way to check that a model has learned a real, generalizable pattern rather than just memorized its training examples.

4. {#q4} What is overfitting?
   - [x] When a model learns noise specific to its training data rather than a genuine, repeatable pattern
   - When a model is trained on too little data to run at all
   - A synonym for a model performing well on new, unseen data
   - A regulatory violation specific to crypto trading
   > An overfit model looks strong on its own training data but fails to generalize, since what it learned was noise rather than signal.

5. {#q5} Why should a researcher building a trading model test on the held-out data only once?
   - [x] Repeatedly tuning against the same held-out data quietly turns it into training data in disguise, undermining its purpose
   - Testing data can only technically be used a single time per calendar year
   - There is no real reason — testing it multiple times would work identically
   - Held-out data becomes corrupted after a single use
   > If a researcher keeps adjusting the model based on held-out results, that data stops being a fair, independent test and starts influencing training — exactly the trap this practice avoids.

6. {#calc1} [calc] A model with no real skill is tested on 400 days. Accuracy by chance has a standard deviation of √(0.5 × 0.5 / 400). What is it?
   - [x] 2.5%
   - 5%
   - 0.25%
   - 12.5%
   > √(0.25 / 400) = √0.000625 = 0.025, or 2.5%. A result within a couple of those of 50% is what no skill looks like.

7. {#calc2} [calc] A model with no skill is tried with 20 settings, and the best scores 56.6% against a 50% baseline. The standard deviation of accuracy by chance is 3.5%. What is the z-score of that best result?
   - About 0.5
   - About 6.6
   - [x] About 1.9
   - About 16.2
   > (56.6 − 50) / 3.5 ≈ 1.9. A result like that is common when you pick the best of 20, so it is weak evidence of skill.
