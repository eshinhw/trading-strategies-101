---
slug: stocks-machine-learning-knn
---

# Quiz

1. {#bk1} [calc] A k-nearest-neighbors model with k = 3 finds three past periods that resemble today. Their next-day returns were +1%, +2% and −1%. What does the model forecast?
   - +2%
   - +1%
   - −1%
   - [x] +0.67%
   > The forecast is the average of the neighbors: (1 + 2 − 1) / 3 = +0.67%.

2. {#bk2} [calc] Today's features are (0.5, 1.0). A past period has features (0.6, 0.9). What is the Euclidean distance between them?
   - 0.200
   - [x] 0.141
   - 0.020
   - 0.100
   > Distance = √((0.6 − 0.5)² + (0.9 − 1.0)²) = √(0.01 + 0.01) = √0.02 = 0.141.

3. {#bk3} [calc] A k-nearest-neighbors classifier with k = 5 finds neighbors with the next-day direction up, up, down, up, down. What does it predict?
   - Down, by a vote of 3 to 2
   - Up, by a vote of 5 to 0
   - No prediction, because the vote is split
   - [x] Up, by a vote of 3 to 2
   > Three of five neighbors were up, so the majority vote predicts up.
