---
slug: crypto-artificial-neural-network
---

# Quiz

1. {#q1} What are the three basic layer types in a typical artificial neural network?
   - [x] An input layer, one or more hidden layers, and an output layer
   - Only an input layer, with no other layers
   - A trading layer, a settlement layer, and a custody layer
   - Neural networks have no distinct layers at all
   > Features enter through the input layer, get transformed through hidden layers, and the final prediction emerges from the output layer.

2. {#q2} Why do hidden layers let a neural network capture patterns a simple linear model can't?
   - [x] Each node applies a non-linear transformation, and stacking many of them lets the network represent complex, non-linear relationships
   - Hidden layers make the network purely linear, just like simpler models
   - Hidden layers have no effect on what patterns the network can learn
   - Neural networks are incapable of learning any relationship at all
   > The non-linear activation functions across stacked hidden layers are exactly what let an ANN represent relationships a straight-line model can't.

3. {#q3} What does backpropagation do during training?
   - [x] Propagates the model's prediction error backward through the network to adjust each weight and reduce that error
   - Deletes the network's weights entirely after each training pass
   - Randomly resets the network's architecture every time it runs
   - Backpropagation has no connection to how a network is trained
   > Backpropagation is the core algorithm that lets a network's weights gradually improve by learning from its own prediction errors.

4. {#q4} Why is overfitting a particular concern for an ANN applied to crypto data?
   - [x] A large network has many adjustable weights and can fit training data's noise as well as its real signal, which is dangerous in a noisy market
   - ANNs are mathematically incapable of overfitting under any circumstances
   - Crypto data contains no noise at all, eliminating the risk
   - Overfitting only affects simple linear models, never neural networks
   > The same flexibility that lets an ANN capture complex patterns also lets it fit noise, which is especially risky given how noisy crypto markets are.

5. {#q5} A trading desk's neural-network model looks strong over its training period. Why does it scale up capital only after checking out-of-sample performance?
   - [x] Strong training-period results alone don't confirm the model generalizes to new, unseen data
   - Out-of-sample testing is a purely optional, unnecessary step
   - Training-period performance is always a perfectly reliable predictor of future results
   - There is no meaningful difference between training and out-of-sample data
   > Confirming performance on data the model never trained on is the actual check against overfitting, which training-period results alone can't provide.

6. {#calc1} [calc] A neural network's out-of-sample hit rate is 54% with an average win or loss of 1% per trade, and each round trip costs 0.10%. What is the expected result per trade after costs?
   - [x] −0.02%
   - +0.08%
   - +0.54%
   - −0.10%
   > Before costs the edge is (0.54 − 0.46) × 1% = +0.08%. Subtracting the 0.10% cost leaves −0.02% per trade, so the model loses money.

7. {#calc2} [calc] A model's out-of-sample hit rate is 52%, with average wins of 1.2% and losses of 0.8%, and trading costs of 0.10% per trade. What is the expected net result per trade?
   - +0.24%
   - +0.52%
   - [x] +0.14%
   - −0.10%
   > Before costs: 0.52 × 1.2% − 0.48 × 0.8% = 0.624% − 0.384% = +0.24%. After the 0.10% cost it is +0.14%.

8. {#bk1} [calc] A neuron has inputs 0.5 and 0.8, weights 0.4 and −0.2, and a bias of 0.1. What is its weighted sum before any activation function?
   - [x] 0.14
   - 0.36
   - 0.26
   - −0.14
   > Sum = 0.5 × 0.4 + 0.8 × (−0.2) + 0.1 = 0.20 − 0.16 + 0.10 = 0.14.

9. {#bk2} [calc] A neural network predicts next-day returns of 0.6 and 0.4 where the actual values are 1 and 0. What is the mean squared error?
   - 0.32
   - 0.40
   - [x] 0.16
   - 0.80
   > Errors are 0.4 and 0.4. Squared: 0.16 and 0.16. The mean is 0.16.
