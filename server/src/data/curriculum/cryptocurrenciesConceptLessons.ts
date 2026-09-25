import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// this course's two strategies are both machine-learning techniques applied
// to crypto data, so the Basics module spends its last lesson introducing ML
// in a trading context generically, rather than repeating either strategy's
// specific model.
export const cryptocurrenciesConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "crypto-what-is-cryptocurrency",
    title: "Cryptocurrency and Blockchain",
    summary:
      "A digital asset secured by cryptography and recorded on a distributed, tamper-resistant ledger, with no central issuer or intermediary required to validate transactions.",
    body: [
      { type: "heading", text: "What a Cryptocurrency Actually Is" },
      {
        type: "paragraph",
        text: "A cryptocurrency is a digital asset that exists as an entry on a blockchain — a shared, distributed ledger maintained across a network of independent computers rather than a single central database. Ownership is proven cryptographically, through a private key, rather than by any bank or government registry.",
      },
      { type: "heading", text: "Why the Ledger Is Distributed" },
      {
        type: "paragraph",
        text: "Instead of one trusted party keeping the official record, every participant in the network holds a copy of the ledger, and new transactions are validated and added through a consensus process, most commonly proof-of-work or proof-of-stake. That distributed validation is what removes the need for a central intermediary while still preventing any single participant from rewriting history unilaterally.",
      },
      { type: "heading", text: "No Central Issuer" },
      {
        type: "paragraph",
        text: "Unlike a currency issued and controlled by a central bank, most cryptocurrencies follow a fixed, pre-programmed issuance schedule written into the protocol itself — Bitcoin's total supply, for example, is capped and its issuance rate halves on a set schedule. No committee can vote to change the money supply the way a central bank can.",
      },
      { type: "heading", text: "Coins, Tokens, and Smart Contracts" },
      {
        type: "paragraph",
        text: "A base-layer coin like Bitcoin exists purely to be transferred, while a platform like Ethereum also supports smart contracts — self-executing code stored on the blockchain — enabling tokens and applications to be built on top of it. That distinction matters for this course, since different crypto assets trade on very different fundamental drivers.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "When someone sends cryptocurrency to another wallet, there's no bank in the middle approving the transfer. The transaction is broadcast to the network, validated by other participants following the protocol's consensus rules, and permanently recorded on the shared ledger — the same basic process whether the transfer is worth ten dollars or ten million.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a blockchain, in the context of cryptocurrency?",
        choices: [
          "A shared, distributed ledger maintained across a network of independent computers rather than one central database",
          "A single bank's private internal transaction database",
          "A physical vault where digital coins are stored",
          "A government registry of currency ownership",
        ],
        correctIndex: 0,
        explanation:
          "The defining feature of a blockchain is that the ledger is distributed across many independent participants, not held by one central authority.",
      },
      {
        id: "q2",
        prompt: "How is a new transaction added to the blockchain?",
        choices: [
          "It's validated and added through a network consensus process, such as proof-of-work or proof-of-stake",
          "A single central bank approves it manually",
          "Transactions are added randomly with no validation at all",
          "Only the transaction's sender can add it, with no outside validation",
        ],
        correctIndex: 0,
        explanation:
          "Consensus mechanisms let the distributed network agree on the ledger's state without needing to trust any single participant.",
      },
      {
        id: "q3",
        prompt: "How does most cryptocurrency issuance differ from a traditional central bank's control over its currency?",
        choices: [
          "Issuance typically follows a fixed, pre-programmed schedule written into the protocol, rather than being set by a central authority",
          "Cryptocurrency issuance is set at the sole discretion of a single global committee",
          "There is no difference at all between the two systems",
          "Cryptocurrencies are always issued directly by central banks",
        ],
        correctIndex: 0,
        explanation:
          "A protocol like Bitcoin's follows programmed issuance rules that no committee can vote to change, unlike a central bank's discretionary control over money supply.",
      },
      {
        id: "q4",
        prompt: "What distinguishes a platform like Ethereum from a base-layer coin like Bitcoin?",
        choices: [
          "It supports smart contracts — self-executing code on the blockchain — enabling tokens and applications to be built on top of it",
          "It has no blockchain at all",
          "It is controlled entirely by a single central bank",
          "There is no meaningful difference between the two",
        ],
        correctIndex: 0,
        explanation:
          "Smart-contract platforms extend beyond simple value transfer, letting other tokens and applications be built directly on the underlying blockchain.",
      },
      {
        id: "q5",
        prompt: "Why doesn't a bank need to approve a cryptocurrency transfer between two wallets?",
        choices: [
          "The transaction is validated by the distributed network itself, following the protocol's consensus rules",
          "Cryptocurrency transfers are not actually recorded anywhere",
          "All cryptocurrency transfers require government pre-approval instead",
          "Wallets are physically connected to a single bank's servers",
        ],
        correctIndex: 0,
        explanation:
          "The network's consensus process replaces the role a bank or clearinghouse would normally play in validating and recording a transfer.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "crypto-how-crypto-markets-trade",
    title: "How Cryptocurrency Markets Trade",
    summary:
      "A market that never closes, trades across a fragmented mix of exchanges worldwide, and requires its own approach to custody that traditional markets don't.",
    body: [
      { type: "heading", text: "A Market That Never Closes" },
      {
        type: "paragraph",
        text: "Unlike stock exchanges with fixed daily trading hours, cryptocurrency markets trade continuously, 24 hours a day, seven days a week, across every time zone at once. There's no scheduled close where positions can be reassessed overnight, which changes how risk and liquidity need to be managed.",
      },
      { type: "heading", text: "Centralized and Decentralized Exchanges" },
      {
        type: "paragraph",
        text: "A centralized exchange operates much like a traditional broker, matching buy and sell orders on its own platform and typically holding customer assets on the exchange's behalf. A decentralized exchange instead executes trades directly on the blockchain itself, through smart contracts, without any single company holding custody of user funds.",
      },
      { type: "heading", text: "Fragmented Liquidity" },
      {
        type: "paragraph",
        text: "The same cryptocurrency can trade at slightly different prices on different exchanges at the same moment, since there's no single, unified order book the way there effectively is for a listed stock. That fragmentation is exactly what creates opportunities for the cross-exchange arbitrage strategies covered in other parts of this curriculum's broader trading toolkit." },
      { type: "heading", text: "Custody: Who Actually Holds the Keys" },
      {
        type: "paragraph",
        text: "Because ownership of a cryptocurrency is proven by a private key, whoever controls that key controls the asset. Holding assets on an exchange means trusting the exchange's own security and solvency, while self-custody in a personal wallet removes that counterparty risk but shifts full responsibility for safeguarding the key onto the holder." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A trader who leaves funds on a centralized exchange for convenience is exposed to that exchange's own risk — if it's hacked or becomes insolvent, customer funds can be lost even though the underlying blockchain itself was never compromised. That's exactly the distinction the industry phrase \"not your keys, not your coins\" is pointing at." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How do cryptocurrency markets' trading hours compare to a traditional stock exchange?",
        choices: [
          "Cryptocurrency markets trade continuously, 24 hours a day, seven days a week, with no scheduled close",
          "Cryptocurrency markets follow the exact same hours as the New York Stock Exchange",
          "Cryptocurrency markets are open only one day per week",
          "There is no meaningful difference in trading hours",
        ],
        correctIndex: 0,
        explanation:
          "The absence of a scheduled close is a defining structural difference from traditional exchanges, with real implications for how risk is managed.",
      },
      {
        id: "q2",
        prompt: "What is the key difference between a centralized and a decentralized exchange?",
        choices: [
          "A centralized exchange typically holds customer assets itself, while a decentralized exchange executes trades directly on the blockchain without custody by a single company",
          "Decentralized exchanges are operated exclusively by governments",
          "Centralized exchanges cannot process any cryptocurrency trades",
          "There is no functional difference between the two",
        ],
        correctIndex: 0,
        explanation:
          "The custody model is the core distinction — centralized exchanges act as an intermediary holding assets, while decentralized exchanges remove that intermediary through smart contracts.",
      },
      {
        id: "q3",
        prompt: "Why can the same cryptocurrency trade at slightly different prices on different exchanges at once?",
        choices: [
          "There is no single, unified order book across exchanges, unlike a listed stock",
          "Cryptocurrency prices are set by a single global authority",
          "Price differences across exchanges are illegal and never actually occur",
          "All cryptocurrency exchanges are required to use identical prices",
        ],
        correctIndex: 0,
        explanation:
          "Fragmented liquidity across many independent exchanges, without a unified order book, is exactly what allows small price discrepancies to persist.",
      },
      {
        id: "q4",
        prompt: "What does holding cryptocurrency on an exchange, rather than in self-custody, expose an investor to?",
        choices: [
          "The exchange's own security and solvency risk",
          "No additional risk of any kind compared to self-custody",
          "Only the risk of the underlying blockchain itself being hacked",
          "Custody has no bearing on an investor's risk exposure",
        ],
        correctIndex: 0,
        explanation:
          "Assets held on an exchange are only as safe as that exchange's own security and financial health, separate from the security of the blockchain itself.",
      },
      {
        id: "q5",
        prompt: "What does the phrase \"not your keys, not your coins\" refer to?",
        choices: [
          "Whoever controls the private key controls the asset, so assets left on an exchange depend on that exchange's trustworthiness",
          "A rule stating only banks can hold private keys",
          "A technical requirement that all keys be publicly shared",
          "A phrase with no real connection to custody or security",
        ],
        correctIndex: 0,
        explanation:
          "The phrase captures exactly the custody tradeoff covered in this lesson: control follows the private key, not the label on an account statement.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "crypto-volatility-and-risk",
    title: "Volatility and Risk in Crypto",
    summary:
      "Why cryptocurrency prices swing far more than most traditional assets, and the security, custody, and regulatory risks layered on top of that raw price volatility.",
    body: [
      { type: "heading", text: "Why Crypto Is So Volatile" },
      {
        type: "paragraph",
        text: "Cryptocurrency prices have historically moved far more, in both directions, than most traditional asset classes over comparable periods. Contributing factors include a market still forming consensus on fair value, thinner liquidity relative to trading volume during stress, and a large share of participants driven by sentiment and news flow rather than slower-moving fundamentals." },
      { type: "heading", text: "Correlation With Traditional Assets" },
      {
        type: "paragraph",
        text: "Cryptocurrency was once widely described as an uncorrelated, diversifying asset relative to stocks and bonds. That relationship isn't fixed, though — correlation with equities in particular has risen and fallen at different points as more institutional capital and macro-driven trading has entered the market, so it shouldn't be assumed to hold at any given moment without checking." },
      { type: "heading", text: "Security and Custody Risk" },
      {
        type: "paragraph",
        text: "Beyond price risk, crypto carries risks that don't really have a stock-market equivalent: exchange hacks, lost or stolen private keys with no customer-service recovery process, and smart-contract bugs that can be exploited to drain funds from a decentralized application." },
      { type: "heading", text: "Regulatory Uncertainty" },
      {
        type: "paragraph",
        text: "How a given cryptocurrency or activity is classified and regulated varies by jurisdiction and continues to evolve, adding a layer of risk that isn't present in more mature, settled regulatory regimes like those covering listed equities or government bonds." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A systematic trading strategy built purely on historical price patterns can perform very differently once regulatory news, an exchange outage, or a smart-contract exploit disrupts the market in a way a traditional equity strategy would rarely have to account for — which is exactly why risk controls built for crypto strategies typically need to be more conservative than the backtested price data alone would suggest." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What are contributing factors to cryptocurrency's historically high volatility?",
        choices: [
          "A market still forming consensus on fair value, thinner stress-period liquidity, and heavy sentiment-driven participation",
          "Cryptocurrency markets have historically been less volatile than government bonds",
          "Volatility in crypto has a single, fixed, unchanging cause",
          "Crypto volatility is entirely unrelated to market liquidity",
        ],
        correctIndex: 0,
        explanation:
          "Several structural factors combine to produce crypto's historically large price swings, not any single cause alone.",
      },
      {
        id: "q2",
        prompt: "Has cryptocurrency's correlation with traditional assets like equities stayed constant over time?",
        choices: [
          "No — it has risen and fallen at different points as more institutional and macro-driven trading entered the market",
          "Yes, it has remained exactly zero at all times",
          "Yes, it has remained exactly 1.0 at all times",
          "Correlation is not a meaningful concept for cryptocurrency",
        ],
        correctIndex: 0,
        explanation:
          "The relationship has shifted over time rather than staying fixed, so it shouldn't be assumed to hold without checking current conditions.",
      },
      {
        id: "q3",
        prompt: "Which of these is a custody-related risk specific to cryptocurrency, without a real stock-market equivalent?",
        choices: [
          "Losing a private key with no customer-service recovery process",
          "A company reporting lower-than-expected quarterly earnings",
          "A stock exchange's normal daily closing bell",
          "A mutual fund charging a management fee",
        ],
        correctIndex: 0,
        explanation:
          "Unlike a brokerage account, there's typically no recovery mechanism if a private key controlling crypto assets is lost or stolen.",
      },
      {
        id: "q4",
        prompt: "Why does regulatory uncertainty add risk to cryptocurrency specifically?",
        choices: [
          "How crypto assets and activities are classified and regulated varies by jurisdiction and continues to evolve",
          "Cryptocurrency regulation has been completely fixed and settled worldwide for decades",
          "Regulatory risk applies only to traditional assets, never to cryptocurrency",
          "All countries currently regulate cryptocurrency in an identical way",
        ],
        correctIndex: 0,
        explanation:
          "The evolving, jurisdiction-dependent regulatory landscape is itself a source of risk not present in more settled, mature regulatory regimes.",
      },
      {
        id: "q5",
        prompt: "Why might risk controls for a crypto trading strategy need to be more conservative than backtested price data alone suggests?",
        choices: [
          "Disruptions like exchange outages, hacks, or regulatory news aren't fully captured by historical price patterns alone",
          "Backtested data always overstates the true risk of any strategy",
          "Crypto strategies never actually require any risk controls",
          "Historical price data captures every possible risk a crypto strategy could face",
        ],
        correctIndex: 0,
        explanation:
          "The additional risks covered in this lesson — security, custody, regulatory — don't show up cleanly in historical price data, so relying on backtests alone can understate real risk.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "crypto-machine-learning-in-trading",
    title: "Machine Learning in Trading",
    summary:
      "The basic idea behind using a machine-learning model to generate trading signals — learning patterns from historical features rather than being explicitly programmed with fixed rules — and the overfitting risk that comes with it.",
    body: [
      { type: "heading", text: "Rules-Based vs. Learned Signals" },
      {
        type: "paragraph",
        text: "A traditional systematic strategy, like a moving-average crossover, applies a fixed, human-specified rule to the data. A machine-learning approach instead trains a model on historical examples — input features paired with a known outcome — and lets the model learn its own pattern connecting the two, which can capture relationships too complex to hand-specify." },
      { type: "heading", text: "Features and Labels" },
      {
        type: "paragraph",
        text: "A feature is any input the model is given to learn from — past returns, trading volume, social-media sentiment, order-book data. A label is the outcome being predicted, such as whether the price rose or fell over the next period. Training a model means showing it many historical feature-label pairs so it can learn the relationship between them." },
      { type: "heading", text: "Training and Testing" },
      {
        type: "paragraph",
        text: "A model is trained on one portion of historical data and then evaluated on a separate, held-out portion it never saw during training, to check whether the pattern it learned actually generalizes rather than just memorizing the training set." },
      { type: "heading", text: "The Overfitting Risk" },
      {
        type: "paragraph",
        text: "Overfitting happens when a model learns noise specific to its training data rather than a genuine, repeatable pattern — it looks impressively accurate on the data it was trained on but fails on new data. This risk is especially pronounced in a noisy, fast-moving market like cryptocurrency, which is exactly why the next two lessons pair a specific model with real attention to how it's validated." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A quant researcher testing a new crypto trading model will typically hold out the most recent chunk of data entirely, train and tune the model only on older data, and then check performance on that untouched recent period exactly once — treating it as a final exam rather than something to keep re-testing against, since repeatedly tuning against the same \"held-out\" data quietly turns it into training data in disguise." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a machine-learning approach to trading differ from a traditional rules-based strategy?",
        choices: [
          "It learns a pattern from historical feature-label examples rather than following a fixed, human-specified rule",
          "It requires no historical data of any kind",
          "It is identical to a moving-average crossover strategy",
          "Machine learning cannot be applied to trading in any form",
        ],
        correctIndex: 0,
        explanation:
          "The core shift is from a hand-specified rule to a model that learns its own pattern from training examples.",
      },
      {
        id: "q2",
        prompt: "What is a \"label\" in a machine-learning trading model?",
        choices: [
          "The outcome being predicted, such as whether price rose or fell over the next period",
          "The name of the trading exchange used",
          "A regulatory filing requirement",
          "A synonym for a feature, with no distinct meaning",
        ],
        correctIndex: 0,
        explanation:
          "The label is what the model is trying to predict, paired during training with the features (inputs) that might explain it.",
      },
      {
        id: "q3",
        prompt: "Why is a model evaluated on a separate, held-out portion of data it never trained on?",
        choices: [
          "To check whether the pattern it learned actually generalizes, rather than just memorizing the training data",
          "Held-out data is only used to make the model train faster",
          "There is no real purpose to using held-out data",
          "Models are never tested on data separate from their training set",
        ],
        correctIndex: 0,
        explanation:
          "Testing on unseen data is the standard way to check that a model has learned a real, generalizable pattern rather than just memorized its training examples.",
      },
      {
        id: "q4",
        prompt: "What is overfitting?",
        choices: [
          "When a model learns noise specific to its training data rather than a genuine, repeatable pattern",
          "When a model is trained on too little data to run at all",
          "A synonym for a model performing well on new, unseen data",
          "A regulatory violation specific to crypto trading",
        ],
        correctIndex: 0,
        explanation:
          "An overfit model looks strong on its own training data but fails to generalize, since what it learned was noise rather than signal.",
      },
      {
        id: "q5",
        prompt: "Why does the researcher in the example test the held-out data only once?",
        choices: [
          "Repeatedly tuning against the same held-out data quietly turns it into training data in disguise, undermining its purpose",
          "Testing data can only technically be used a single time per calendar year",
          "There is no real reason — testing it multiple times would work identically",
          "Held-out data becomes corrupted after a single use",
        ],
        correctIndex: 0,
        explanation:
          "If a researcher keeps adjusting the model based on held-out results, that data stops being a fair, independent test and starts influencing training — exactly the trap this practice avoids.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "crypto-artificial-neural-network",
    title: "Artificial Neural Network (ANN)",
    summary:
      "Using a network of layered, weighted nodes to learn complex, non-linear patterns in crypto price and volume data that simpler models can't capture, at the cost of being harder to interpret and easier to overfit.",
    body: [
      { type: "heading", text: "The Basic Architecture" },
      {
        type: "paragraph",
        text: "An artificial neural network is built from layers of simple computational units, or nodes: an input layer receiving the features (past returns, volume, and similar signals), one or more hidden layers that combine and transform those inputs, and an output layer producing the final prediction, such as an expected next-period return or a buy/sell signal." },
      { type: "heading", text: "Why the Hidden Layers Matter" },
      {
        type: "paragraph",
        text: "Each node applies a weighted combination of its inputs followed by a non-linear activation function, and stacking many such nodes across hidden layers lets the network represent complex, non-linear relationships in the data that a simple linear model, which can only draw a straight-line relationship, would miss entirely." },
      { type: "heading", text: "Training via Backpropagation" },
      {
        type: "paragraph",
        text: "A network's weights start essentially random and are adjusted through backpropagation: the model's prediction error on training examples is propagated backward through the network, nudging each weight in the direction that would have reduced that error, repeated over many passes through the training data until performance stabilizes." },
      { type: "heading", text: "Overfitting Risk in a Noisy Market" },
      {
        type: "paragraph",
        text: "Because a large network has many adjustable weights, it can fit training data extremely closely — including its noise, not just its signal — which is a particular danger in a market as noisy and fast-changing as cryptocurrency. Techniques like regularization, dropout, and strict out-of-sample testing, covered generally in the previous lesson, are what keep an ANN's flexibility from turning into overfitting." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A crypto trading desk might feed an ANN dozens of engineered features — recent returns across several timeframes, volume trends, order-book imbalance — and train it to output a short-term directional signal. The desk validates the model on data from a period the network never saw during training, and only scales up real capital behind the signal once that out-of-sample performance holds up, rather than trusting the impressive-looking training-period results alone." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What are the three basic layer types in a typical artificial neural network?",
        choices: [
          "An input layer, one or more hidden layers, and an output layer",
          "Only an input layer, with no other layers",
          "A trading layer, a settlement layer, and a custody layer",
          "Neural networks have no distinct layers at all",
        ],
        correctIndex: 0,
        explanation:
          "Features enter through the input layer, get transformed through hidden layers, and the final prediction emerges from the output layer.",
      },
      {
        id: "q2",
        prompt: "Why do hidden layers let a neural network capture patterns a simple linear model can't?",
        choices: [
          "Each node applies a non-linear transformation, and stacking many of them lets the network represent complex, non-linear relationships",
          "Hidden layers make the network purely linear, just like simpler models",
          "Hidden layers have no effect on what patterns the network can learn",
          "Neural networks are incapable of learning any relationship at all",
        ],
        correctIndex: 0,
        explanation:
          "The non-linear activation functions across stacked hidden layers are exactly what let an ANN represent relationships a straight-line model can't.",
      },
      {
        id: "q3",
        prompt: "What does backpropagation do during training?",
        choices: [
          "Propagates the model's prediction error backward through the network to adjust each weight and reduce that error",
          "Deletes the network's weights entirely after each training pass",
          "Randomly resets the network's architecture every time it runs",
          "Backpropagation has no connection to how a network is trained",
        ],
        correctIndex: 0,
        explanation:
          "Backpropagation is the core algorithm that lets a network's weights gradually improve by learning from its own prediction errors.",
      },
      {
        id: "q4",
        prompt: "Why is overfitting a particular concern for an ANN applied to crypto data?",
        choices: [
          "A large network has many adjustable weights and can fit training data's noise as well as its real signal, which is dangerous in a noisy market",
          "ANNs are mathematically incapable of overfitting under any circumstances",
          "Crypto data contains no noise at all, eliminating the risk",
          "Overfitting only affects simple linear models, never neural networks",
        ],
        correctIndex: 0,
        explanation:
          "The same flexibility that lets an ANN capture complex patterns also lets it fit noise, which is especially risky given how noisy crypto markets are.",
      },
      {
        id: "q5",
        prompt: "Why does the trading desk in the example only scale up capital after checking out-of-sample performance?",
        choices: [
          "Strong training-period results alone don't confirm the model generalizes to new, unseen data",
          "Out-of-sample testing is a purely optional, unnecessary step",
          "Training-period performance is always a perfectly reliable predictor of future results",
          "There is no meaningful difference between training and out-of-sample data",
        ],
        correctIndex: 0,
        explanation:
          "Confirming performance on data the model never trained on is the actual check against overfitting, which training-period results alone can't provide.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "crypto-sentiment-analysis-naive-bayes",
    title: "Sentiment Analysis – Naive Bayes Bernoulli",
    summary:
      "Classifying text like social-media posts or news headlines as bullish or bearish using a simple, fast probabilistic model, then using that sentiment classification as a trading signal for sentiment-driven crypto markets.",
    body: [
      { type: "heading", text: "Why Sentiment Matters for Crypto" },
      {
        type: "paragraph",
        text: "Cryptocurrency prices are unusually sensitive to public sentiment — social-media chatter, influential commentary, and breaking news can move prices quickly, more so than for most traditional assets with a longer history of institutional, fundamentals-driven ownership. That makes systematically measuring sentiment a genuinely useful trading input." },
      { type: "heading", text: "Naive Bayes, Conceptually" },
      {
        type: "paragraph",
        text: "A Naive Bayes classifier uses Bayes' theorem to estimate the probability that a piece of text belongs to a category, such as \"bullish\" or \"bearish,\" based on the words it contains. It's called \"naive\" because it assumes each word contributes to that probability independently of every other word — a simplification that isn't strictly true of real language, but works surprisingly well in practice and is fast to train." },
      { type: "heading", text: "Bernoulli Features: Presence, Not Count" },
      {
        type: "paragraph",
        text: "The Bernoulli variant represents each word in the model's vocabulary as simply present or absent in a given piece of text, rather than counting how many times it appears. That binary present-or-absent representation is a natural fit for short-form text, like a tweet or headline, where word repetition carries little extra information beyond a word simply showing up." },
      { type: "heading", text: "From Classification to Trading Signal" },
      {
        type: "paragraph",
        text: "Once the model classifies a stream of text as leaning bullish or bearish, that classification can be aggregated over time, such as a rolling net-sentiment score across recent posts, and used as an input to a trading signal — buying when sentiment turns decisively positive, reducing exposure when it turns negative." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A sentiment model trained on a labeled dataset of past crypto-related social-media posts (each tagged in advance as bullish or bearish by a human reviewer) can then classify new, unlabeled posts as they arrive in real time. A trading system tracking the resulting rolling sentiment score might scale back exposure when sentiment deteriorates sharply, treating a wave of bearish chatter as an early signal worth reacting to, independent of what the price chart alone shows." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is sentiment analysis particularly useful for cryptocurrency trading?",
        choices: [
          "Crypto prices are unusually sensitive to social-media chatter and news, more so than many traditional assets",
          "Cryptocurrency prices are entirely unaffected by public sentiment",
          "Sentiment analysis only works for assets with no public trading data",
          "Crypto markets have no connection to social media of any kind",
        ],
        correctIndex: 0,
        explanation:
          "Crypto's outsized sensitivity to sentiment-driven flows is exactly what makes systematically measuring sentiment a useful trading input.",
      },
      {
        id: "q2",
        prompt: "Why is a Naive Bayes classifier called \"naive\"?",
        choices: [
          "It assumes each word contributes to the classification probability independently of every other word",
          "It is incapable of making any prediction at all",
          "It requires no training data whatsoever",
          "\"Naive\" refers to the model always being wrong",
        ],
        correctIndex: 0,
        explanation:
          "The independence assumption between words is a simplification of real language, which is exactly why the model is described as naive — despite often working well in practice.",
      },
      {
        id: "q3",
        prompt: "What does the \"Bernoulli\" variant of Naive Bayes represent for each word?",
        choices: [
          "Whether the word is simply present or absent in the text, rather than how many times it appears",
          "The exact number of times the word appears, with no other information",
          "The word's dictionary definition",
          "The Bernoulli variant ignores individual words entirely",
        ],
        correctIndex: 0,
        explanation:
          "Bernoulli features are binary — present or absent — which suits short-form text where repetition adds little extra information.",
      },
      {
        id: "q4",
        prompt: "How does a sentiment classification get turned into an actual trading signal?",
        choices: [
          "By aggregating classifications over time into a rolling sentiment score used to adjust trading exposure",
          "Classifications cannot be used as trading signals under any circumstances",
          "By ignoring the classification entirely and trading on price alone",
          "A single classified post is used exactly once and never aggregated",
        ],
        correctIndex: 0,
        explanation:
          "A rolling, aggregated sentiment score is what turns individual text classifications into a usable, continuous trading input.",
      },
      {
        id: "q5",
        prompt: "In the example, what does the trading system do when sentiment deteriorates sharply?",
        choices: [
          "It scales back exposure, treating a wave of bearish chatter as an early signal worth reacting to",
          "It ignores sentiment data entirely and relies solely on price",
          "It automatically doubles exposure regardless of sentiment",
          "It shuts down entirely and stops trading forever",
        ],
        correctIndex: 0,
        explanation:
          "The system treats deteriorating sentiment as an actionable signal, adjusting exposure ahead of what price data alone might show.",
      },
    ],
  },
];
