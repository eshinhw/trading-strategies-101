---
slug: stocks-machine-learning-knn
---

# Quiz

1. {#q1} What is the core idea behind the k-nearest-neighbors (KNN) algorithm?
   - Fitting a single mathematical formula to the entire dataset in advance
   - [x] Finding the k most similar past data points to a new one and basing the prediction on what happened in those similar cases
   - Ignoring all historical data and predicting randomly
   - Using only the single most recent data point to make every prediction
   > KNN is a non-parametric method — rather than assuming a fixed formula, it looks up the most similar historical examples and bases its prediction on what happened in those cases.

2. {#q2} In a single-stock KNN strategy, what is a "feature vector"?
   - The stock's ticker symbol alone
   - [x] A description of the stock's current state, such as recent returns, volatility, and volume, used to find similar historical periods
   - The company's full annual report
   - A random number generated each trading day
   > The feature vector captures the relevant characteristics of the stock's current situation, which is then compared against historical feature vectors to find the most similar past periods.

3. {#q3} What is an advantage of KNN's lack of an assumed relationship shape (unlike linear regression)?
   - It guarantees perfect predictions every time
   - [x] It can potentially capture more complex, nonlinear patterns in a stock's behavior
   - It requires no historical data whatsoever
   - It eliminates the need for any features at all
   > Since KNN doesn't assume a specific mathematical form (like a straight line) relating features to outcomes, it can in principle pick up on more complex, nonlinear patterns that a simpler model might miss.

4. {#q4} What happens if the value of k (the number of neighbors) is chosen too large?
   - The prediction becomes noisier and less stable
   - [x] The prediction gets diluted toward the overall average, losing its ability to react to anything distinctive about the current setup
   - The algorithm stops working entirely
   - The stock's price is guaranteed to rise
   > Averaging over too many neighbors smooths the prediction toward the general average outcome, weakening its sensitivity to what's actually distinctive about the current situation — the opposite problem from choosing k too small, which makes it noisy.

5. {#q5} Why does the choice of distance metric matter in a KNN strategy?
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

7. {#bk1} [calc] A k-nearest-neighbors model with k = 3 finds three past periods that resemble today. Their next-day returns were +1%, +2% and −1%. What does the model forecast?
   - +2%
   - +1%
   - −1%
   - [x] +0.67%
   > The forecast is the average of the neighbors: (1 + 2 − 1) / 3 = +0.67%.

8. {#bk2} [calc] Today's features are (0.5, 1.0). A past period has features (0.6, 0.9). What is the Euclidean distance between them?
   - 0.200
   - [x] 0.141
   - 0.020
   - 0.100
   > Distance = √((0.6 − 0.5)² + (0.9 − 1.0)²) = √(0.01 + 0.01) = √0.02 = 0.141.

9. {#bk3} [calc] A k-nearest-neighbors classifier with k = 5 finds neighbors with the next-day direction up, up, down, up, down. What does it predict?
   - Down, by a vote of 3 to 2
   - Up, by a vote of 5 to 0
   - No prediction, because the vote is split
   - [x] Up, by a vote of 3 to 2
   > Three of five neighbors were up, so the majority vote predicts up.

10. {#bk4} [calc] A KNN model uses k = 4 neighbors whose next-week returns were +2%, +1%, −1% and +4%. What is the forecast?
   - [x] +1.5%
   - +6%
   - +2%
   - +4%
   > The forecast is the neighbors' average: (2 + 1 − 1 + 4) / 4 = +1.5%.

11. {#bk5} [calc] A KNN strategy compares today's feature vector (1.0, 2.0) to a past vector (4.0, 6.0). What is the Euclidean distance?
   - 7
   - 3
   - [x] 5
   - 25
   > √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5.

12. {#bk6} What is the cost of choosing a k that is too small in a KNN strategy?
   - [x] The prediction becomes noisy and unstable
   - The prediction becomes the long-run average
   - The model needs no data
   - The model always predicts zero
   > Too few neighbors makes the forecast swing on a handful of past cases. Too many dilutes it toward the average.
