---
slug: stocks-machine-learning-knn
title: Machine Learning: Single-Stock KNN
summary: Using the k-nearest-neighbors algorithm to predict a stock's next move by finding historical periods with the most similar pattern of features and seeing what happened next.
---

## What KNN Is

K-nearest-neighbors (KNN) is a simple, non-parametric machine learning algorithm: to predict something about a new data point, it looks for the k most similar past data points, its "nearest neighbors," measured by some distance metric across a set of features, and bases the prediction on what happened in those similar cases, rather than fitting a specific mathematical formula to the whole dataset in advance.

## Building a Feature Vector

Applied to a single stock, a KNN strategy defines a feature vector describing the stock's current state — for example, its recent returns over several lookback windows, its recent volatility, and maybe a volume measure — and searches through the stock's own trading history for the k historical days whose feature vectors were most similar to today's. The strategy then predicts the stock's next move based on the average of what actually happened on those k similar historical days.

## Flexibility and Its Cost

Because KNN makes no assumption about the shape of the relationship between features and future returns, unlike, say, a linear regression, which assumes a straight-line relationship, it can in principle capture more complex, nonlinear patterns in a stock's behavior — but this flexibility comes at the cost of needing a reasonably long price history to have enough genuinely similar past examples to draw from, and of being more prone to overfitting to noise if the feature set or the value of k isn't chosen carefully.

## Choosing k and a Distance Metric

Two of the most important design choices in a KNN strategy are k itself, how many neighbors to average over, since too few makes the prediction noisy and unstable while too many dilutes it toward the average, losing its ability to react to anything distinctive about the current setup, and the distance metric used to measure "similarity" between feature vectors, since different features may need to be weighted or scaled differently for the notion of "nearest" to be meaningful.

# Quiz

1. What is the core idea behind the k-nearest-neighbors (KNN) algorithm?
   - Fitting a single mathematical formula to the entire dataset in advance
   - [x] Finding the k most similar past data points to a new one and basing the prediction on what happened in those similar cases
   - Ignoring all historical data and predicting randomly
   - Using only the single most recent data point to make every prediction
   > KNN is a non-parametric method — rather than assuming a fixed formula, it looks up the most similar historical examples and bases its prediction on what happened in those cases.

2. In a single-stock KNN strategy, what is a "feature vector"?
   - The stock's ticker symbol alone
   - [x] A description of the stock's current state, such as recent returns, volatility, and volume, used to find similar historical periods
   - The company's full annual report
   - A random number generated each trading day
   > The feature vector captures the relevant characteristics of the stock's current situation, which is then compared against historical feature vectors to find the most similar past periods.

3. What is an advantage of KNN's lack of an assumed relationship shape (unlike linear regression)?
   - It guarantees perfect predictions every time
   - [x] It can potentially capture more complex, nonlinear patterns in a stock's behavior
   - It requires no historical data whatsoever
   - It eliminates the need for any features at all
   > Since KNN doesn't assume a specific mathematical form (like a straight line) relating features to outcomes, it can in principle pick up on more complex, nonlinear patterns that a simpler model might miss.

4. What happens if the value of k (the number of neighbors) is chosen too large?
   - The prediction becomes noisier and less stable
   - [x] The prediction gets diluted toward the overall average, losing its ability to react to anything distinctive about the current setup
   - The algorithm stops working entirely
   - The stock's price is guaranteed to rise
   > Averaging over too many neighbors smooths the prediction toward the general average outcome, weakening its sensitivity to what's actually distinctive about the current situation — the opposite problem from choosing k too small, which makes it noisy.

5. Why does the choice of distance metric matter in a KNN strategy?
   - It doesn't matter — any distance metric produces identical results
   - [x] Different features may need to be weighted or scaled differently for the notion of "nearest" or "most similar" to be meaningful
   - Distance metrics are only used in unrelated geometry problems
   - The distance metric determines the company's stock ticker
   > If features are on different scales or have different relevance, an unweighted distance metric can be dominated by whichever feature happens to have the largest raw scale, so choosing (or scaling) the distance metric thoughtfully is an important design decision.

6. {#calc1} [calc] A KNN model with k = 3 finds neighbors whose next-day returns were +2%, +1% and −1%. What is the model's forecast (the average)?
   - +1.0%
   - +2.0%
   - [x] About +0.67%
   - −1.0%
   > The average is (2 + 1 − 1) / 3 = 0.67%.
