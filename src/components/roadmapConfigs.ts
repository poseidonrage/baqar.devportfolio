// Per-tracker content. The RoadmapTracker component is generic; everything that
// differs between the GenAI roadmap and the ML specialization lives here.
import curriculumData from '../data/curriculum.json';
import curriculumMlData from '../data/curriculum-ml.json';
import type { Month, WeekResource } from './roadmapData';
import type { Project, GlossaryItem } from './roadmapData';
import { glossaryItems, PROJECTS, WEEK_RESOURCES } from './roadmapData';

export interface RoadmapConfig {
  /** Namespaces task ids, journal ids and localStorage keys. Empty for the original GenAI tracker. */
  prefix: string;
  path: string;
  brandName: string;
  brandSub: string;
  journalTotal: number;
  curriculum: Month[];
  projects: Project[];
  resources: Record<number, WeekResource[]>;
  glossary: GlossaryItem[];
  glossaryCategories: string[];
  /** Copy for the glossary panel / modal, which renders two code columns side by side. */
  glossaryTitle: string;
  glossaryBlurb: string;
  glossaryModalTitle: string;
  glossaryUnit: string;
  glossaryLeftLabel: string;
  glossaryRightLabel: string;
  glossaryLeftLang: 'csharp' | 'python';
  glossaryRightLang: 'csharp' | 'python';
  mindsetLabel: string;
}

const ML_RESOURCES: Record<number, WeekResource[]> = {
  101: [
    { title: 'Course 1 — Supervised ML: Regression and Classification', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/machine-learning', kind: 'course' },
    { title: 'Gradient Descent, Step-by-Step', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=sDv4f4s2SB8', kind: 'video' },
    { title: 'NumPy: the absolute basics for beginners', source: 'numpy.org', url: 'https://numpy.org/doc/stable/user/absolute_beginners.html', kind: 'docs' },
  ],
  102: [
    { title: 'NumPy broadcasting', source: 'numpy.org', url: 'https://numpy.org/doc/stable/user/basics.broadcasting.html', kind: 'docs' },
    { title: 'Preprocessing data — scaling', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/preprocessing.html', kind: 'docs' },
    { title: 'Essence of linear algebra', source: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', kind: 'video' },
  ],
  103: [
    { title: 'Logistic Regression', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=yIYKR4sgzI8', kind: 'video' },
    { title: 'Regularization (Ridge / Lasso)', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/linear_model.html', kind: 'docs' },
    { title: 'Cross-entropy loss explained', source: 'ML Cheatsheet', url: 'https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html', kind: 'article' },
  ],
  104: [
    { title: 'Course 2 — Advanced Learning Algorithms', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/advanced-learning-algorithms', kind: 'course' },
    { title: 'But what is a neural network?', source: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=aircAruvnKk', kind: 'video' },
    { title: 'The Sequential model', source: 'Keras', url: 'https://keras.io/guides/sequential_model/', kind: 'docs' },
  ],
  105: [
    { title: 'Training & evaluation with the built-in methods', source: 'Keras', url: 'https://keras.io/guides/training_with_built_in_methods/', kind: 'docs' },
    { title: 'Adam: A Method for Stochastic Optimization', source: 'Kingma & Ba', url: 'https://arxiv.org/abs/1412.6980', kind: 'article' },
    { title: 'Softmax and cross-entropy', source: 'ML Cheatsheet', url: 'https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html', kind: 'docs' },
  ],
  106: [
    { title: 'Bias and Variance', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=EuBBz3bI-aA', kind: 'video' },
    { title: 'Machine Learning Yearning', source: 'Andrew Ng', url: 'https://info.deeplearning.ai/machine-learning-yearning-book', kind: 'book' },
    { title: 'Validation curves & learning curves', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/learning_curve.html', kind: 'docs' },
  ],
  107: [
    { title: 'Decision and Classification Trees', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=_L39rN6gz7Y', kind: 'video' },
    { title: 'XGBoost — Introduction to Boosted Trees', source: 'xgboost.readthedocs.io', url: 'https://xgboost.readthedocs.io/en/stable/tutorials/model.html', kind: 'docs' },
    { title: 'Ensemble methods', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/ensemble.html', kind: 'docs' },
  ],
  108: [
    { title: 'Course 3 — Unsupervised Learning, Recommenders, RL', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning', kind: 'course' },
    { title: 'K-means clustering', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=4b5d3muPQmA', kind: 'video' },
    { title: 'Novelty and outlier detection', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/outlier_detection.html', kind: 'docs' },
  ],
  109: [
    { title: 'Recommender systems handbook chapter (matrix factorization)', source: 'Koren et al.', url: 'https://datajobs.com/data-science-repo/Recommender-Systems-[Netflix].pdf', kind: 'article' },
    { title: 'Principal Component Analysis (PCA)', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ', kind: 'video' },
    { title: 'tf.GradientTape — custom training loops', source: 'TensorFlow', url: 'https://www.tensorflow.org/guide/autodiff', kind: 'docs' },
  ],
  110: [
    { title: 'Reinforcement Learning: An Introduction', source: 'Sutton & Barto', url: 'http://incompleteideas.net/book/the-book-2nd.html', kind: 'book' },
    { title: 'Gymnasium — Lunar Lander', source: 'Farama Foundation', url: 'https://gymnasium.farama.org/environments/box2d/lunar_lander/', kind: 'docs' },
    { title: 'Deep Q-Learning explained', source: 'DeepMind / Nature paper', url: 'https://www.nature.com/articles/nature14236', kind: 'article' },
  ],
};

// Math notation on the left, the NumPy/TensorFlow it turns into on the right.
const ML_GLOSSARY: typeof glossaryItems = [
  {
    csharp: 'J(w,b) — squared error cost',
    python: 'np.mean((f - y) ** 2) / 2',
    category: 'math',
    desc: 'The mean squared error, halved so the 2 cancels when you differentiate. Vectorize it — never loop over examples.',
    csharpCode: `# J(w,b) = 1/(2m) * sum (f(x_i) - y_i)^2
#
# m      number of training examples
# f(x)   w . x + b
# The 1/2 exists only to cancel
# the exponent when differentiating.`,
    pythonCode: `def compute_cost(X, y, w, b):
    f = X @ w + b
    return np.mean((f - y) ** 2) / 2`,
  },
  {
    csharp: '∂J/∂w — gradient',
    python: 'X.T @ (f - y) / m',
    category: 'math',
    desc: 'The gradient of squared error is the errors weighted by their inputs. Identical in form for logistic regression — only f changes.',
    csharpCode: `# dJ/dw = 1/m * sum (f(x_i) - y_i) * x_i
# dJ/db = 1/m * sum (f(x_i) - y_i)`,
    pythonCode: `def compute_gradient(X, y, w, b):
    m = X.shape[0]
    err = (X @ w + b) - y
    dw = X.T @ err / m
    db = err.mean()
    return dw, db`,
  },
  {
    csharp: 'gradient descent update',
    python: 'w -= alpha * dw',
    category: 'training',
    desc: 'Step downhill by alpha times the gradient. Update w and b simultaneously — compute both gradients before assigning either.',
    csharpCode: `# repeat until convergence:
#   w := w - alpha * dJ/dw
#   b := b - alpha * dJ/db
# (simultaneous update)`,
    pythonCode: `for _ in range(iters):
    dw, db = compute_gradient(X, y, w, b)
    w = w - alpha * dw
    b = b - alpha * db`,
  },
  {
    csharp: 'z-score normalization',
    python: 'StandardScaler()',
    category: 'training',
    desc: 'Rescale each feature to zero mean and unit variance so gradient descent sees a round bowl instead of a ravine. Fit on train only.',
    csharpCode: `# x_scaled = (x - mu) / sigma
#
# mu     per-feature mean
# sigma  per-feature std dev`,
    pythonCode: `mu = X.mean(axis=0)
sigma = X.std(axis=0)
X_norm = (X - mu) / sigma

# or: StandardScaler().fit_transform(X)`,
  },
  {
    csharp: 'sigmoid g(z)',
    python: '1 / (1 + np.exp(-z))',
    category: 'math',
    desc: 'Squashes any real number into (0, 1) so the output reads as a probability. Clip z before exponentiating or large negatives overflow.',
    csharpCode: `# g(z) = 1 / (1 + e^-z)
#
# g(0)  = 0.5
# g(+inf) -> 1
# g(-inf) -> 0`,
    pythonCode: `def sigmoid(z):
    z = np.clip(z, -500, 500)
    return 1 / (1 + np.exp(-z))`,
  },
  {
    csharp: 'logistic (log) loss',
    python: 'BinaryCrossentropy()',
    category: 'math',
    desc: 'Squared error on a sigmoid is non-convex. Log loss restores a single global minimum, which is the entire reason it is used.',
    csharpCode: `# L = -y*log(f) - (1-y)*log(1-f)
#
# y = 1 -> penalty grows as f -> 0
# y = 0 -> penalty grows as f -> 1`,
    pythonCode: `eps = 1e-15
f = np.clip(f, eps, 1 - eps)
loss = -(y * np.log(f) +
         (1 - y) * np.log(1 - f)).mean()`,
  },
  {
    csharp: 'softmax',
    python: 'from_logits=True',
    category: 'math',
    desc: 'Turns a vector of scores into a probability distribution over classes. Let the framework fuse it with the loss for numerical stability.',
    csharpCode: `# a_j = e^z_j / sum_k e^z_k
#
# Subtract max(z) before exponentiating
# or large logits overflow.`,
    pythonCode: `model.compile(
    loss=SparseCategoricalCrossentropy(
        from_logits=True))
# final layer: Dense(10, activation='linear')`,
  },
  {
    csharp: 'L2 regularization',
    python: 'kernel_regularizer=l2(0.01)',
    category: 'training',
    desc: 'Adds a penalty on large weights to fight overfitting. b is never regularized. Larger lambda means more bias, less variance.',
    csharpCode: `# J = MSE + (lambda / 2m) * sum w_j^2
#
# lambda -> 0    no penalty (overfit)
# lambda -> big  weights -> 0 (underfit)`,
    pythonCode: `reg = lam / m * w          # add to dw
Dense(64, activation='relu',
      kernel_regularizer=l2(0.01))`,
  },
  {
    csharp: 'forward propagation',
    python: 'a = g(a @ W + b)',
    category: 'training',
    desc: 'One layer is a matrix multiply plus a bias plus a non-linearity. A network is that expression composed with itself.',
    csharpCode: `# a[l] = g( W[l] . a[l-1] + b[l] )
#
# a[0] = x  (the input)
# g    = relu / sigmoid / linear`,
    pythonCode: `def dense(a_in, W, b, g):
    return g(a_in @ W + b)

Sequential([Dense(25, 'relu'),
            Dense(1,  'sigmoid')])`,
  },
  {
    csharp: 'train / CV / test split',
    python: 'train_test_split(...)',
    category: 'diagnostics',
    desc: 'Choose models on cross-validation, report on test. Touching the test set during selection makes its number meaningless.',
    csharpCode: `# 60% train  fit parameters
# 20% cv     choose model / lambda
# 20% test   report once, at the end`,
    pythonCode: `X_tr, X_tmp, y_tr, y_tmp = train_test_split(
    X, y, test_size=0.4, random_state=0)
X_cv, X_te, y_cv, y_te = train_test_split(
    X_tmp, y_tmp, test_size=0.5)`,
  },
  {
    csharp: 'bias vs variance',
    python: 'J_train vs J_cv',
    category: 'diagnostics',
    desc: 'Two numbers tell you what to do next. High train error is bias; a large train-to-CV gap is variance. Fix the one you actually have.',
    csharpCode: `# J_train high, J_cv ~ J_train  -> BIAS
#   bigger model, more features, less lambda
#
# J_train low,  J_cv >> J_train -> VARIANCE
#   more data, fewer features, more lambda`,
    pythonCode: `j_train = model.evaluate(X_tr, y_tr)
j_cv    = model.evaluate(X_cv, y_cv)
print(j_train, j_cv, j_cv - j_train)`,
  },
  {
    csharp: 'precision / recall / F1',
    python: 'classification_report(...)',
    category: 'diagnostics',
    desc: 'On skewed data accuracy is a lie — always predicting the majority class scores 99%. F1 is the harmonic mean, so it punishes a weak side.',
    csharpCode: `# precision = TP / (TP + FP)
# recall    = TP / (TP + FN)
# F1        = 2PR / (P + R)`,
    pythonCode: `from sklearn.metrics import (
    classification_report, f1_score)
print(classification_report(y_cv, preds))`,
  },
  {
    csharp: 'K-means objective',
    python: 'KMeans(n_clusters=k, n_init=10)',
    category: 'training',
    desc: 'Minimizes the mean squared distance to assigned centroids. It has local minima, so multiple random inits are part of the algorithm.',
    csharpCode: `# J = 1/m * sum || x_i - mu_c(i) ||^2
#
# assign step: c(i) = argmin_k ||x_i - mu_k||
# move step:   mu_k = mean of its points`,
    pythonCode: `km = KMeans(n_clusters=3, n_init=10)
labels = km.fit_predict(X)
print(km.inertia_)   # the cost J`,
  },
  {
    csharp: 'collaborative filtering',
    python: 'learn x and w together',
    category: 'math',
    desc: 'The genuinely new idea: features are not given, they are learned by the same gradient descent that learns the weights.',
    csharpCode: `# J = 1/2 * sum over rated (i,j)
#       ( w_j . x_i + b_j - y_ij )^2
#     + regularization on BOTH w and x`,
    pythonCode: `with tf.GradientTape() as tape:
    cost = cofi_cost(X, W, b, Y, R, lam)
grads = tape.gradient(cost, [X, W, b])
opt.apply_gradients(zip(grads, [X, W, b]))`,
  },
  {
    csharp: 'Bellman equation',
    python: 'y = r + gamma * max(Q(s2, a))',
    category: 'math',
    desc: 'The value of a state-action is the immediate reward plus the discounted best value of where you land. DQN just fits a network to this target.',
    csharpCode: `# Q(s,a) = R(s) + gamma * max_a' Q(s',a')
#
# gamma near 0  short-sighted
# gamma near 1  patient`,
    pythonCode: `y = rewards + gamma * (
    tf.reduce_max(target_q(next_states), axis=1)
    * (1 - done))
loss = MSE(y, q(states, actions))`,
  },
];

export const genaiConfig: RoadmapConfig = {
  prefix: '',
  path: '/roadmap',
  brandName: 'GenAI Roadmap',
  brandSub: '25-week tracker',
  journalTotal: 25,
  curriculum: curriculumData as Month[],
  projects: PROJECTS,
  resources: WEEK_RESOURCES,
  glossary: glossaryItems,
  glossaryCategories: ['all', 'basics', 'collections', 'oop', 'advanced'],
  glossaryTitle: 'Parallel syntax',
  glossaryBlurb: 'C# constructs mapped to their Python equivalents — quick comparative lookup.',
  glossaryModalTitle: 'Parallel syntax guide',
  glossaryUnit: 'rules',
  glossaryLeftLabel: 'C#',
  glossaryRightLabel: 'Python',
  glossaryLeftLang: 'csharp',
  glossaryRightLang: 'python',
  mindsetLabel: 'Mindset shift',
};

export const mlConfig: RoadmapConfig = {
  prefix: 'ml_',
  path: '/ml-roadmap',
  brandName: 'ML Roadmap',
  brandSub: '10-week tracker',
  journalTotal: 10,
  curriculum: curriculumMlData as Month[],
  projects: [
    {
      id: 1, monthId: 1, weeks: 'Weeks 2–3',
      title: 'House Price Predictor',
      techStack: ['Python', 'NumPy', 'scikit-learn', 'Matplotlib'],
      input: 'Housing features: size, rooms, age, location',
      output: 'Predicted price + train/CV error against a mean baseline',
      note: 'Scaled multiple regression, then regularized logistic on a price band',
      type: 'api',
    },
    {
      id: 2, monthId: 2, weeks: 'Weeks 4–7',
      title: 'Handwritten Digit Recognizer',
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      input: '20x20 grayscale digit images',
      output: 'Digit 0–9 + confusion matrix and error analysis writeup',
      note: 'Softmax with from_logits=True; forward prop also written in raw NumPy',
      type: 'agent',
    },
    {
      id: 3, monthId: 3, weeks: 'Weeks 9–10',
      title: 'Movie Recommender + Lunar Lander',
      techStack: ['Python', 'TensorFlow', 'GradientTape', 'Gymnasium'],
      input: 'User–item ratings matrix / lander state vector',
      output: 'Top-N recommendations for a new user; a lander that solves the env',
      note: 'Collaborative filtering with mean normalization, then a DQN agent',
      type: 'rag',
    },
  ],
  resources: ML_RESOURCES,
  glossary: ML_GLOSSARY,
  glossaryCategories: ['all', 'math', 'training', 'diagnostics'],
  glossaryTitle: 'Math to code',
  glossaryBlurb: 'Every formula in the specialization next to the NumPy or TensorFlow that implements it.',
  glossaryModalTitle: 'Math to code guide',
  glossaryUnit: 'maps',
  glossaryLeftLabel: 'Math',
  glossaryRightLabel: 'Code',
  glossaryLeftLang: 'python',
  glossaryRightLang: 'python',
  mindsetLabel: 'Intuition',
};
