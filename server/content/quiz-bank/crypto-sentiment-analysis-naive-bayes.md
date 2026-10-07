---
slug: crypto-sentiment-analysis-naive-bayes
---

# Quiz

1. {#bk1} [calc] Of past posts, 55% were followed by price rises (bullish) and 45% by falls. The word “moon” appears in 30% of bullish posts and 5% of bearish posts. What is the probability of a rise given a post with “moon”?
   - 55%
   - 30%
   - [x] 88%
   - 95%
   > Bayes: 0.55 × 0.30 = 0.165 and 0.45 × 0.05 = 0.0225. The probability is 0.165 / (0.165 + 0.0225) = 88%.

2. {#bk2} [calc] A naive Bayes model has 50% prior for bullish. A post contains two words that each appear in 40% of bullish posts and 20% of bearish posts. Treating the words as independent, what is the bullish probability?
   - [x] 80%
   - 67%
   - 50%
   - 40%
   > Bullish: 0.5 × 0.4 × 0.4 = 0.08. Bearish: 0.5 × 0.2 × 0.2 = 0.02. Probability = 0.08 / 0.10 = 80%.
