---
slug: crypto-artificial-neural-network
title: Artificial Neural Network (ANN)
summary: Using a network of layered, weighted nodes to learn complex, non-linear patterns in crypto price and volume data that simpler models can't capture, at the cost of being harder to interpret and easier to overfit.
---

## The Basic Architecture

An artificial neural network is built from layers of simple computational units, or nodes: an input layer receiving the features (past returns, volume, and similar signals), one or more hidden layers that combine and transform those inputs, and an output layer producing the final prediction, such as an expected next-period return or a buy/sell signal.

## Why the Hidden Layers Matter

Each node applies a weighted combination of its inputs followed by a non-linear activation function, and stacking many such nodes across hidden layers lets the network represent complex, non-linear relationships in the data that a simple linear model, which can only draw a straight-line relationship, would miss entirely.

## Training via Backpropagation

A network's weights start essentially random and are adjusted through backpropagation: the model's prediction error on training examples is propagated backward through the network, nudging each weight in the direction that would have reduced that error, repeated over many passes through the training data until performance stabilizes.

## Overfitting Risk in a Noisy Market

Because a large network has many adjustable weights, it can fit training data extremely closely — including its noise, not just its signal — which is a particular danger in a market as noisy and fast-changing as cryptocurrency. Techniques like regularization, dropout, and strict out-of-sample testing, covered generally in the previous lesson, are what keep an ANN's flexibility from turning into overfitting.

## Example

A crypto trading desk might feed an ANN dozens of engineered features — recent returns across several timeframes, volume trends, order-book imbalance — and train it to output a short-term directional signal. The desk validates the model on data from a period the network never saw during training, and only scales up real capital behind the signal once that out-of-sample performance holds up, rather than trusting the impressive-looking training-period results alone.

# Quiz

1. What are the three basic layer types in a typical artificial neural network?
   - [x] An input layer, one or more hidden layers, and an output layer
   - Only an input layer, with no other layers
   - A trading layer, a settlement layer, and a custody layer
   - Neural networks have no distinct layers at all
   > Features enter through the input layer, get transformed through hidden layers, and the final prediction emerges from the output layer.

2. Why do hidden layers let a neural network capture patterns a simple linear model can't?
   - [x] Each node applies a non-linear transformation, and stacking many of them lets the network represent complex, non-linear relationships
   - Hidden layers make the network purely linear, just like simpler models
   - Hidden layers have no effect on what patterns the network can learn
   - Neural networks are incapable of learning any relationship at all
   > The non-linear activation functions across stacked hidden layers are exactly what let an ANN represent relationships a straight-line model can't.

3. What does backpropagation do during training?
   - [x] Propagates the model's prediction error backward through the network to adjust each weight and reduce that error
   - Deletes the network's weights entirely after each training pass
   - Randomly resets the network's architecture every time it runs
   - Backpropagation has no connection to how a network is trained
   > Backpropagation is the core algorithm that lets a network's weights gradually improve by learning from its own prediction errors.

4. Why is overfitting a particular concern for an ANN applied to crypto data?
   - [x] A large network has many adjustable weights and can fit training data's noise as well as its real signal, which is dangerous in a noisy market
   - ANNs are mathematically incapable of overfitting under any circumstances
   - Crypto data contains no noise at all, eliminating the risk
   - Overfitting only affects simple linear models, never neural networks
   > The same flexibility that lets an ANN capture complex patterns also lets it fit noise, which is especially risky given how noisy crypto markets are.

5. Why does the trading desk in the example only scale up capital after checking out-of-sample performance?
   - [x] Strong training-period results alone don't confirm the model generalizes to new, unseen data
   - Out-of-sample testing is a purely optional, unnecessary step
   - Training-period performance is always a perfectly reliable predictor of future results
   - There is no meaningful difference between training and out-of-sample data
   > Confirming performance on data the model never trained on is the actual check against overfitting, which training-period results alone can't provide.
