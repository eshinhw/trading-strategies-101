---
slug: crypto-sentiment-analysis-naive-bayes
---

# Quiz

1. {#q1} Why is sentiment analysis particularly useful for cryptocurrency trading?
   - [x] Crypto prices are unusually sensitive to social-media chatter and news, more so than many traditional assets
   - Cryptocurrency prices are entirely unaffected by public sentiment
   - Sentiment analysis only works for assets with no public trading data
   - Crypto markets have no connection to social media of any kind
   > Crypto's outsized sensitivity to sentiment-driven flows is exactly what makes systematically measuring sentiment a useful trading input.

2. {#q2} Why is a Naive Bayes classifier called "naive"?
   - [x] It assumes each word contributes to the classification probability independently of every other word
   - It is incapable of making any prediction at all
   - It requires no training data whatsoever
   - "Naive" refers to the model always being wrong
   > The independence assumption between words is a simplification of real language, which is exactly why the model is described as naive — despite often working well in practice.

3. {#q3} What does the "Bernoulli" variant of Naive Bayes represent for each word?
   - [x] Whether the word is simply present or absent in the text, rather than how many times it appears
   - The exact number of times the word appears, with no other information
   - The word's dictionary definition
   - The Bernoulli variant ignores individual words entirely
   > Bernoulli features are binary — present or absent — which suits short-form text where repetition adds little extra information.

4. {#q4} How does a sentiment classification get turned into an actual trading signal?
   - [x] By aggregating classifications over time into a rolling sentiment score used to adjust trading exposure
   - Classifications cannot be used as trading signals under any circumstances
   - By ignoring the classification entirely and trading on price alone
   - A single classified post is used exactly once and never aggregated
   > A rolling, aggregated sentiment score is what turns individual text classifications into a usable, continuous trading input.

5. {#q5} A trading system scores social-media sentiment with Naive Bayes. What does it do when sentiment deteriorates sharply?
   - [x] It scales back exposure, treating a wave of bearish chatter as an early signal worth reacting to
   - It ignores sentiment data entirely and relies solely on price
   - It automatically doubles exposure regardless of sentiment
   - It shuts down entirely and stops trading forever
   > The system treats deteriorating sentiment as an actionable signal, adjusting exposure ahead of what price data alone might show.

6. {#calc1} [calc] In training data, 70% of posts are bullish and 30% bearish. The word "hack" appears in 20% of bearish posts and 2% of bullish posts. A new post contains "hack". What is the probability it is bearish?
   - [x] About 81%
   - 30%
   - 20%
   - About 94%
   > P(bearish | hack) = 0.3 × 0.20 / (0.3 × 0.20 + 0.7 × 0.02) = 0.060 / 0.074 ≈ 81%.

7. {#calc2} [calc] A rule cuts a $100,000 position to 50% when the bullish share of the last 1,000 posts falls below 45%. 380 of the posts are bullish. What exposure does the rule hold?
   - $100,000
   - $38,000
   - [x] $50,000
   - $45,000
   > 380 / 1,000 = 38%, which is below 45%, so exposure is cut to 50% of $100,000 = $50,000.

8. {#bk1} [calc] Of past posts, 55% were followed by price rises (bullish) and 45% by falls. The word “moon” appears in 30% of bullish posts and 5% of bearish posts. What is the probability of a rise given a post with “moon”?
   - 55%
   - 30%
   - [x] 88%
   - 95%
   > Bayes: 0.55 × 0.30 = 0.165 and 0.45 × 0.05 = 0.0225. The probability is 0.165 / (0.165 + 0.0225) = 88%.

9. {#bk2} [calc] A naive Bayes model has 50% prior for bullish. A post contains two words that each appear in 40% of bullish posts and 20% of bearish posts. Treating the words as independent, what is the bullish probability?
   - [x] 80%
   - 67%
   - 50%
   - 40%
   > Bullish: 0.5 × 0.4 × 0.4 = 0.08. Bearish: 0.5 × 0.2 × 0.2 = 0.02. Probability = 0.08 / 0.10 = 80%.
