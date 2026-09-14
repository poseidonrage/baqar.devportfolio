// Per-tracker content. The RoadmapTracker component is generic; everything that
// differs between the GenAI roadmap and the ML specialization lives here.
import curriculumData from '../data/curriculum.json';
import curriculumMlData from '../data/curriculum-ml.json';
import curriculumPostMlData from '../data/curriculum-postml.json';
import curriculumHealthData from '../data/curriculum-health.json';
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

// SELENE companion notebooks — supplemental only, never checklist tasks.
const seleneNotebook = (title: string, url: string): WeekResource => ({
  title: `SELENE - ${title}`,
  source: 'SELENE - Chris van der Weth',
  url,
  kind: 'article',
});

const SELENE_EXPLORER: WeekResource = {
  title: 'SELENE - Mastery Path Explorer',
  source: 'SELENE - Topic Graph',
  url: 'https://chrisvdw.net/selene/',
  kind: 'tool',
};

// Made With ML (Goku Mohandas) — open-source MLOps course; the repo doubles as
// a reference production codebase (train/tune/evaluate/serve/testing scripts)
export const MWMML_COURSE_URL = 'https://madewithml.com/';
export const MWMML_REPO_URL = 'https://github.com/GokuMohandas/Made-With-ML';
const madeWithML = (lesson: string, slug: string): WeekResource => ({
  title: `Made With ML · ${lesson}`,
  source: 'Goku Mohandas',
  url: `${MWMML_COURSE_URL}courses/${slug}/`,
  kind: 'course',
});

const ML_RESOURCES: Record<number, WeekResource[]> = {
  101: [
    { title: 'Course 1 — Supervised ML: Regression and Classification', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/machine-learning', kind: 'course' },
    { title: 'Gradient Descent, Step-by-Step', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=sDv4f4s2SB8', kind: 'video' },
    { title: 'NumPy: the absolute basics for beginners', source: 'numpy.org', url: 'https://numpy.org/doc/stable/user/absolute_beginners.html', kind: 'docs' },
    SELENE_EXPLORER,
    seleneNotebook('Linear Regression - Interactive Notebook', 'https://chrisvdweth.github.io/selene/notebooks/html/linear_regression_basics.html'),
    madeWithML('Machine Learning 101 — mental models before the math', 'foundations/linear-regression'),
  ],
  102: [
    { title: 'NumPy broadcasting', source: 'numpy.org', url: 'https://numpy.org/doc/stable/user/basics.broadcasting.html', kind: 'docs' },
    { title: 'Preprocessing data — scaling', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/preprocessing.html', kind: 'docs' },
    { title: 'Essence of linear algebra', source: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', kind: 'video' },
    seleneNotebook('Linear Regression - Assumptions & Caveats', 'https://chrisvdweth.github.io/selene/notebooks/html/linear_regression_assumptions_caveats.html'),
  ],
  103: [
    { title: 'Logistic Regression', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=yIYKR4sgzI8', kind: 'video' },
    { title: 'Regularization (Ridge / Lasso)', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/linear_model.html', kind: 'docs' },
    { title: 'Cross-entropy loss explained', source: 'ML Cheatsheet', url: 'https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html', kind: 'article' },
    seleneNotebook('Logistic Regression - The Math', 'https://chrisvdweth.github.io/selene/notebooks/html/logistic_regression_math.html'),
  ],
  104: [
    { title: 'Course 2 — Advanced Learning Algorithms', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/advanced-learning-algorithms', kind: 'course' },
    { title: 'But what is a neural network?', source: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=aircAruvnKk', kind: 'video' },
    { title: 'The Sequential model', source: 'Keras', url: 'https://keras.io/guides/sequential_model/', kind: 'docs' },
    seleneNotebook('Artificial Neural Networks - Basic Architecture', 'https://chrisvdweth.github.io/selene/notebooks/html/artificial_neural_networks_basics.html'),
    madeWithML('Neural Networks — beyond the single neuron', 'foundations/neural-networks'),
  ],
  105: [
    { title: 'Training & evaluation with the built-in methods', source: 'Keras', url: 'https://keras.io/guides/training_with_built_in_methods/', kind: 'docs' },
    { title: 'Adam: A Method for Stochastic Optimization', source: 'Kingma & Ba', url: 'https://arxiv.org/abs/1412.6980', kind: 'article' },
    { title: 'Softmax and cross-entropy', source: 'ML Cheatsheet', url: 'https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html', kind: 'docs' },
    seleneNotebook('Backpropagation - Basic Examples', 'https://chrisvdweth.github.io/selene/notebooks/html/backpropagation_basic_examples.html'),
    seleneNotebook('Implementing an ANN from Scratch - NumPy Only', 'https://chrisvdweth.github.io/selene/notebooks/html/ann_from_scratch_numpy_only.html'),
  ],
  106: [
    { title: 'Bias and Variance', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=EuBBz3bI-aA', kind: 'video' },
    { title: 'Machine Learning Yearning', source: 'Andrew Ng', url: 'https://info.deeplearning.ai/machine-learning-yearning-book', kind: 'book' },
    { title: 'Validation curves & learning curves', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/learning_curve.html', kind: 'docs' },
    seleneNotebook('Bias & Variance - Machine Learning', 'https://chrisvdweth.github.io/selene/notebooks/html/bias_variance_ml_basics.html'),
    madeWithML('Model/Accuracy & Precision/Recall — diagnosing the model you have', 'mlops/evaluation'),
  ],
  107: [
    { title: 'Decision and Classification Trees', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=_L39rN6gz7Y', kind: 'video' },
    { title: 'XGBoost — Introduction to Boosted Trees', source: 'xgboost.readthedocs.io', url: 'https://xgboost.readthedocs.io/en/stable/tutorials/model.html', kind: 'docs' },
    { title: 'Ensemble methods', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/ensemble.html', kind: 'docs' },
    seleneNotebook('Decision Trees - Implementation from Scratch', 'https://chrisvdweth.github.io/selene/notebooks/html/decision_trees_from_scratch.html'),
  ],
  108: [
    { title: 'Course 3 — Unsupervised Learning, Recommenders, RL', source: 'Coursera · DeepLearning.AI', url: 'https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning', kind: 'course' },
    { title: 'K-means clustering', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=4b5d3muPQmA', kind: 'video' },
    { title: 'Novelty and outlier detection', source: 'scikit-learn', url: 'https://scikit-learn.org/stable/modules/outlier_detection.html', kind: 'docs' },
    seleneNotebook('DBSCAN - Optional Clustering Extension', 'https://chrisvdweth.github.io/selene/notebooks/html/clustering_dbscan_basics.html'),
  ],
  109: [
    { title: 'Recommender systems handbook chapter (matrix factorization)', source: 'Koren et al.', url: 'https://datajobs.com/data-science-repo/Recommender-Systems-[Netflix].pdf', kind: 'article' },
    { title: 'Principal Component Analysis (PCA)', source: 'StatQuest', url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ', kind: 'video' },
    { title: 'tf.GradientTape — custom training loops', source: 'TensorFlow', url: 'https://www.tensorflow.org/guide/autodiff', kind: 'docs' },
    seleneNotebook('Curse of Dimensionality - PCA Companion', 'https://chrisvdweth.github.io/selene/notebooks/html/curse_of_dimensionality.html'),
  ],
  110: [
    { title: 'Reinforcement Learning: An Introduction', source: 'Sutton & Barto', url: 'http://incompleteideas.net/book/the-book-2nd.html', kind: 'book' },
    { title: 'Gymnasium — Lunar Lander', source: 'Farama Foundation', url: 'https://gymnasium.farama.org/environments/box2d/lunar_lander/', kind: 'docs' },
    { title: 'Deep Q-Learning explained', source: 'DeepMind / Nature paper', url: 'https://www.nature.com/articles/nature14236', kind: 'article' },
    madeWithML('Gradient Descent & Regularization — the whole loop in one page', 'foundations/linear-regression'),
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
      datasetUrl: 'https://www.kaggle.com/datasets/harlfoxem/housesalesprediction', datasetLabel: 'KC House Prices (Kaggle)',
      output: 'Predicted price + train/CV error against a mean baseline',
      note: 'Scaled multiple regression, then regularized logistic on a price band',
      type: 'api',
    },
    {
      id: 4, monthId: 1, weeks: 'Week 3',
      title: 'Admission Chance Classifier',
      techStack: ['Python', 'NumPy', 'Matplotlib'],
      input: 'Exam scores of applicants (two features)',
      datasetUrl: 'https://github.com/dibgerge/ml-coursera-python-assignments', datasetLabel: 'ex2data1 (Course 1 lab)',
      output: 'Admit / reject + the learned decision boundary plotted over the data',
      note: 'Pure NumPy logistic regression + gradient descent — no scikit-learn allowed',
      type: 'api',
    },
    {
      id: 5, monthId: 1, weeks: 'Week 3',
      title: 'Microchip QA Classifier',
      techStack: ['Python', 'NumPy', 'Matplotlib'],
      input: 'Two chip test scores + engineered polynomial features',
      datasetUrl: 'https://github.com/dibgerge/ml-coursera-python-assignments', datasetLabel: 'ex2data2 (Course 1 lab)',
      output: 'Pass/fail per chip + accuracy vs lambda curve proving regularization works',
      note: 'Challenge: plot train vs CV error as lambda sweeps 0→100 and pick the knee',
      type: 'agent',
    },
    {
      id: 2, monthId: 2, weeks: 'Weeks 4–7',
      title: 'Handwritten Digit Recognizer',
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      input: '20x20 grayscale digit images',
      datasetUrl: 'https://github.com/dibgerge/ml-coursera-python-assignments', datasetLabel: 'Course 2 digit data',
      output: 'Digit 0–9 + confusion matrix and error analysis writeup',
      note: 'Softmax with from_logits=True; forward prop also written in raw NumPy',
      type: 'agent',
    },
    {
      id: 6, monthId: 2, weeks: 'Weeks 6–7',
      title: 'Cat vs Non-Cat Bias/Variance Lab',
      techStack: ['Python', 'TensorFlow', 'Matplotlib'],
      input: 'Small image dataset (the classic cat/non-cat set)',
      datasetUrl: 'https://github.com/rdmazumdar/decision_trees_random_forests/blob/master/catvnoncat', datasetLabel: 'Cat vs Non-Cat (h5)',
      output: 'Train vs CV error across 5 model sizes + the verdict: bias or variance?',
      note: 'Challenge: deliberately break it both ways — underfit with 1 unit, overfit with no reg — then fix each',
      type: 'rag',
    },
    {
      id: 7, monthId: 2, weeks: 'Week 7',
      title: 'Heart Disease Ensemble Challenge',
      techStack: ['Python', 'scikit-learn', 'XGBoost'],
      input: 'Structured patient records (age, bp, cholesterol, …)',
      datasetUrl: 'https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset', datasetLabel: 'Heart Disease (Kaggle)',
      output: 'Diagnosis + feature-importance ranking + single tree vs forest vs boosting comparison',
      note: 'Challenge: beat your Week 3 logistic baseline with ensembles, using ONLY Week 6 diagnostics to guide tuning',
      type: 'agent',
    },
    {
      id: 3, monthId: 3, weeks: 'Weeks 9–10',
      title: 'Movie Recommender + Lunar Lander',
      techStack: ['Python', 'TensorFlow', 'GradientTape', 'Gymnasium'],
      input: 'User–item ratings matrix / lander state vector',
      datasetUrl: 'https://github.com/dibgerge/ml-coursera-python-assignments', datasetLabel: 'Course 3 labs (movies + lander)',
      output: 'Top-N recommendations for a new user; a lander that solves the env',
      note: 'Collaborative filtering with mean normalization, then a DQN agent',
      type: 'rag',
    },
    {
      id: 8, monthId: 3, weeks: 'Week 8',
      title: 'Server Anomaly Detector',
      techStack: ['Python', 'NumPy', 'Gaussian models'],
      input: 'Server throughput + latency timeseries (the classic network dataset)',
      datasetUrl: 'https://github.com/dibgerge/ml-coursera-python-assignments', datasetLabel: 'Course 3 anomaly lab',
      output: 'Anomalous servers flagged + precision/recall at the epsilon that maximizes F1',
      note: 'Challenge: select features by plotting histograms — a Gaussian-shaped feature is a good feature',
      type: 'rag',
    },
    {
      id: 9, monthId: 3, weeks: 'Weeks 9–10',
      title: 'Course-Capstone: PCA + KMeans Image Compressor',
      techStack: ['Python', 'NumPy', 'Matplotlib'],
      input: 'Face dataset (or your own photos) at full dimensionality',
      datasetUrl: 'https://www.kaggle.com/datasets/therealoxygen/olivetti-faces', datasetLabel: 'Olivetti Faces (Kaggle)',
      output: 'K-components reconstruction + variance-retained curve + clusters found without labels',
      note: 'Challenge: compress to 100× fewer numbers with face you can still recognize, then KMeans the eigenspace',
      type: 'saas',
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

// ── Post-ML (2026 AI Engineer track) ─────────────────────────────────────────

const POSTML_RESOURCES: Record<number, WeekResource[]> = {
  201: [
    { title: 'MLflow — Quickstart & Tracking API', source: 'mlflow.org', url: 'https://mlflow.org/docs/latest/getting-started/index.html', kind: 'docs' },
    { title: 'Getting Started with Weights & Biases', source: 'wandb.ai', url: 'https://docs.wandb.ai/quickstart', kind: 'docs' },
    { title: 'A/B Testing for Machine Learning', source: 'Evidently AI', url: 'https://www.evidentlyai.com/blog/ml-ab-testing', kind: 'article' },
    madeWithML('Experiment Tracking — design→develop→deploy→iterate loop', 'mlops/experiment-tracking'),
    { title: 'Made With ML — Experiment Tracking scripts (MLflow, code-first)', source: 'Goku Mohandas · GitHub', url: `${MWMML_REPO_URL}#experiment-tracking`, kind: 'repo' },
  ],
  202: [
    { title: 'SQLBolt — Interactive SQL Lessons', source: 'sqlbolt.com', url: 'https://sqlbolt.com/', kind: 'tool' },
    { title: 'DuckDB — Why DuckDB?', source: 'duckdb.org', url: 'https://duckdb.org/why_duckdb', kind: 'article' },
    { title: 'PostgreSQL Tutorial — Window Functions', source: 'postgresqltutorial.com', url: 'https://www.postgresqltutorial.com/postgresql-window-function/', kind: 'docs' },
    madeWithML('Preprocessing — clean features beat clever models', 'mlops/preprocessing'),
    { title: 'Made With ML — madewithml/data.py (reference data pipeline)', source: 'Goku Mohandas · GitHub', url: `${MWMML_REPO_URL}/blob/main/madewithml/data.py`, kind: 'repo' },
  ],
  203: [
    { title: 'FastAPI — Deployment', source: 'fastapi.tiangolo.com', url: 'https://fastapi.tiangolo.com/deployment/', kind: 'docs' },
    { title: 'Docker — Get Started', source: 'docker.com', url: 'https://docs.docker.com/get-started/', kind: 'docs' },
    { title: 'MLflow — Model Registry & Serving', source: 'mlflow.org', url: 'https://mlflow.org/docs/latest/models.html', kind: 'docs' },
    madeWithML('Serving — from notebook script to a served endpoint', 'mlops/serving'),
    { title: 'Made With ML — madewithml/serve.py (Ray Serve reference)', source: 'Goku Mohandas · GitHub', url: `${MWMML_REPO_URL}/blob/main/madewithml/serve.py`, kind: 'repo' },
  ],
  204: [
    { title: 'The ML Test Score', source: 'Google / NeurIPS paper', url: 'https://research.google/pubs/pub46555/', kind: 'article' },
    { title: 'Evidently — ML Monitoring', source: 'evidentlyai.com', url: 'https://www.evidentlyai.com/', kind: 'tool' },
    { title: 'Blue/Green vs Rolling Deployments', source: 'devops', url: 'https://martinfowler.com/bliki/BlueGreenDeployment.html', kind: 'article' },
    madeWithML('Testing — code, data & model tests', 'mlops/testing'),
    madeWithML('CI/CD — GitHub Actions for ML', 'mlops/cicd'),
    madeWithML('Monitoring — drift & online evaluation', 'mlops/monitoring'),
    { title: 'Made With ML — tests/ (code, data & model tests in CI)', source: 'Goku Mohandas · GitHub', url: `${MWMML_REPO_URL}/tree/main/tests`, kind: 'repo' },
  ],
  205: [
    { title: 'The Illustrated Transformer', source: 'Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/', kind: 'article' },
    { title: 'But what is a GPT? (3Blue1Brown)', source: 'YouTube', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M', kind: 'video' },
    { title: 'Karpathy — Let\'s build GPT from scratch', source: 'YouTube', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', kind: 'video' },
  ],
  206: [
    { title: 'LoRA: Low-Rank Adaptation of Large Language Models', source: 'arXiv', url: 'https://arxiv.org/abs/2106.09685', kind: 'article' },
    { title: 'HuggingFace PEFT docs', source: 'huggingface.co', url: 'https://huggingface.co/docs/peft/index', kind: 'docs' },
    { title: 'QLoRA paper', source: 'arXiv', url: 'https://arxiv.org/abs/2305.14314', kind: 'article' },
  ],
  207: [
    { title: 'Hybrid Search Explained', source: 'Qdrant blog', url: 'https://qdrant.tech/articles/hybrid-search/', kind: 'article' },
    { title: 'Sentence Transformers — Cross-Encoders', source: 'sbert.net', url: 'https://www.sbert.net/examples/applications/cross-encoder/README.html', kind: 'docs' },
    { title: 'Chunking Strategies for RAG', source: 'Pinecone', url: 'https://www.pinecone.io/learn/chunking-strategy-rag/', kind: 'article' },
  ],
  208: [
    { title: 'Building Effective Agents', source: 'Anthropic', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' },
    { title: 'LangGraph — Human-in-the-loop', source: 'langchain-ai.github.io', url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', kind: 'docs' },
    { title: 'OWASP Top 10 for LLM Applications', source: 'OWASP', url: 'https://genai.owasp.org/llm-top-10/', kind: 'article' },
  ],
  209: [
    { title: 'Multi-Agent Systems — LangGraph', source: 'langchain-ai.github.io', url: 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/', kind: 'docs' },
    { title: 'Model Context Protocol — Introduction', source: 'modelcontextprotocol.io', url: 'https://modelcontextprotocol.io/introduction', kind: 'docs' },
    { title: 'CrewAI — Documentation', source: 'crewai.com', url: 'https://docs.crewai.com/introduction', kind: 'docs' },
  ],
  210: [
    { title: 'LangSmith — Evaluation', source: 'langchain-ai.github.io', url: 'https://docs.smith.langchain.com/evaluation', kind: 'docs' },
    { title: 'RAGAS — Evaluation Framework for RAG', source: 'ragas.io', url: 'https://docs.ragas.io/', kind: 'docs' },
    { title: 'LLM-as-judge biases', source: 'arXiv', url: 'https://arxiv.org/abs/2306.05685', kind: 'article' },
  ],
  211: [
    { title: 'Full Stack Deep Learning — Course', source: 'fullstackdeeplearning.com', url: 'https://fullstackdeeplearning.com/course/', kind: 'course' },
    { title: 'Made With ML — MLOps Course', source: 'madewithml.com', url: 'https://madewithml.com/', kind: 'course' },
    { title: 'Made With ML — Continual Learning (scheduled runs, drift monitoring)', source: 'Goku Mohandas · GitHub', url: `${MWMML_REPO_URL}#continual-learning`, kind: 'repo' },
  ],
  212: [
    { title: '12-Factor Apps', source: '12factor.net', url: 'https://12factor.net/', kind: 'article' },
    { title: 'Google SRE Book — Postmortems', source: 'sre.google', url: 'https://sre.google/sre-book/postmortem-culture/', kind: 'book' },
  ],
};

const POSTML_GLOSSARY: GlossaryItem[] = [
  { csharp: 'MLflow run', python: 'W&B run', category: 'evaluation', desc: 'One execution of a training or eval script with logged params, metrics, and artifacts. Same concept, different tools.', csharpCode: `import mlflow\nmlflow.start_run()\nmlflow.log_param("lr", 0.01)\nmlflow.log_metric("f1", 0.87)\nmlflow.end_run()`, pythonCode: `import wandb\nwandb.init(project="my-model")\nwandb.config.lr = 0.01\nwandb.log({"f1": 0.87})\nwandb.finish()` },
  { csharp: 'Data leakage', python: 'Train-serving skew', category: 'evaluation', desc: 'Leakage: test info contaminates training. Skew: production inputs drift from training inputs. Both silently inflate or degrade quality.', csharpCode: `# WRONG: fit scaler on ALL data\nscaler.fit(X)  # includes test rows!\nX_train = scaler.transform(X_train)`, pythonCode: `# RIGHT: fit on train only\nscaler.fit(X_train)\nX_train = scaler.transform(X_train)\nX_test = scaler.transform(X_test)` },
  { csharp: 'Window function', python: 'Pandas rolling', category: 'data', desc: 'SQL computes over a sliding/related row set without collapsing rows; Pandas rolling/shift covers the same ground in memory.', csharpCode: `-- SQL: rank rows within group\nSELECT name, score,\n  RANK() OVER (\n    PARTITION BY dept\n    ORDER BY score DESC) AS r\nFROM employees;`, pythonCode: `# Pandas: rank within group\ndf["r"] = (df.groupby("dept")["score"]\n             .rank(ascending=False))` },
  { csharp: 'ETL', python: 'ELT', category: 'data', desc: 'Extract-Transform-Load (transform in flight) vs Extract-Load-Transform (raw into warehouse, transform on query). DuckDB makes ELT cheap.', csharpCode: `# ETL: transform, then load\ndf = extract(api)\ndf = validate(df)  # in the pipeline\nload(df, warehouse)`, pythonCode: `# ELT: load raw, transform on read\nraw = extract(api)\nload(raw, warehouse)\ndf = duckdb.sql("SELECT ... FROM raw")` },
  { csharp: 'Blue/green deploy', python: 'Canary deploy', category: 'mlops', desc: 'Blue/green: two full environments, instant switch-back. Canary: route a small % of traffic to the new version first.', csharpCode: `# blue/green: flip the router\nrouter.backend = "green"  # was blue\nrollback = lambda: setattr(router, "backend", "blue")`, pythonCode: `# canary: gradual shift\ntargets = {blue: 0.95, green: 0.05}\nfor week in rollout_plan:\n    shift(targets, more="green")` },
  { csharp: 'Softmax(QK^T/√d)V', python: 'nn.MultiheadAttention', category: 'transformers', desc: 'The attention equation vs the PyTorch module that implements it (plus projection layers you don\'t see in the formula).', csharpCode: `# NumPy attention, shapes shown\ndef attention(Q, K, V):        # Q:(n,d) K:(m,d) V:(m,d)\n    d = Q.shape[-1]\n    scores = Q @ K.T / np.sqrt(d)   # (n,m)\n    weights = softmax(scores, axis=-1)\n    return weights @ V              # (n,d)`, pythonCode: `import torch.nn as nn\nattn = nn.MultiheadAttention(\n    embed_dim=64, num_heads=4, batch_first=True)\nout, w = attn(query=Q, key=K, value=V)\n# w: (n, m) attention weights` },
  { csharp: 'Fine-tuning (full)', python: 'LoRA (PEFT)', category: 'adaptation', desc: 'Full fine-tuning updates every weight (expensive). LoRA freezes the base and trains small low-rank adapters (cheap, swappable).', csharpCode: `# full fine-tune: every weight moves\nfor p in model.parameters():\n    p.requires_grad = True\noptimizer = torch.optim.AdamW(\n    model.parameters(), lr=1e-5)`, pythonCode: `from peft import LoraConfig, get_peft_model\nmodel = get_peft_model(model,\n    LoraConfig(r=8, lora_alpha=16,\n               target_modules=["q_proj", "v_proj"]))\n# <1% of params trainable` },
  { csharp: 'SFT', python: 'RLHF / DPO', category: 'adaptation', desc: 'SFT teaches format+task from examples. RLHF/DPO then optimize preferences (helpful, harmless) with a reward or comparison signal.', csharpCode: `# SFT: supervised next-token loss\nloss = -sum(log P(target_token_i\n                  | context, student_model))`, pythonCode: `# DPO: preference loss, no reward model\nloss = -logsigmoid(beta * (\n    logratio(chosen) - logratio(rejected)))` },
  { csharp: 'BM25 (lexical)', python: 'Dense retrieval', category: 'rag', desc: 'BM25 matches exact terms with term-frequency scoring; dense retrieval matches meaning via embeddings. Hybrid + fusion gets both.', csharpCode: `from rank_bm25 import BM25Okapi\ncorpus = [doc.split() for doc in docs]\nbm25 = BM25Okapi(corpus)\nscores = bm25.get_scores(query.split())`, pythonCode: `emb = model.encode([query] + docs)\nq, D = emb[0], emb[1:]\nscores = q @ D.T  # cosine-ish similarity` },
  { csharp: 'Bi-encoder', python: 'Cross-encoder', category: 'rag', desc: 'Bi-encoder embeds query and doc separately (fast, precomputable). Cross-encoder reads query+doc together (slow, accurate — used to re-rank).', csharpCode: `# bi-encoder: independent embeddings\nq = embed(query)          # once\ndocs = embed(all_docs)    # precompute\nscores = q @ docs.T       # cheap for top-k`, pythonCode: `# cross-encoder: joint scoring\nfor doc in candidates:    # 50-200 only\n    score = rerank(query, doc)  # expensive\norder = argsort(scores)` },
  { csharp: 'ReAct loop', python: 'Supervisor pattern', category: 'agents', desc: 'ReAct interleaves think/act per step in one loop. Supervisor delegates whole subtasks to specialized worker agents.', csharpCode: `# ReAct: one agent, interleaved\nwhile not done and steps < MAX:\n    thought = llm(state, tools)\n    action = thought.tool_call\n    state = execute(action)`, pythonCode: `# supervisor: route to workers\nwhile task_open:\n    plan = supervisor(state)\n    worker = plan.next_worker\n    state = workers[worker](state)` },
  { csharp: 'Function calling', python: 'MCP tool', category: 'agents', desc: 'Function calling is per-model plumbing. MCP is a standard protocol: one server exposes tools to any MCP-capable client.', csharpCode: `# raw function calling\ntools = [{"type": "function",\n          "function": {\"name\": \"search\",\n                       "parameters": schema}}]\nresult = client.chat(msgs, tools=tools)`, pythonCode: `# MCP: standard tool server\nfrom mcp import Server\nclass SearchServer(Server):\n    @tool("search")\n    async def search(self, q: str):\n        return await index.query(q)` },
  { csharp: 'Precision@k', python: 'Faithfulness', category: 'evaluation', desc: 'Precision@k scores retrieved chunks (did the top-k contain the right ones?). Faithfulness scores generated answers (is every claim grounded in the context?).', csharpCode: `hits = sum(1 for d in top_k\n           if d in relevant)\nprecision_at_k = hits / k`, pythonCode: `# RAGAS-style: judge checks grounding\nfaithfulness = judge(\n  claims=extract(answer),\n  context=retrieved)\n.score()` },
  { csharp: 'Offline eval', python: 'A/B test', category: 'evaluation', desc: 'Offline eval scores against a fixed dataset. A/B tests compare live variants on real users — the only proof of business impact.', csharpCode: `scores = [score(model, ex)\n          for ex in eval_set]\nship if mean(scores) > baseline`, pythonCode: `assign = hash(user_id) % 2\nvariant = "B" if assign else "A"\nuplift = conv_rate(B) - conv_rate(A)\nsignificant if |z| > 1.96` },
];

export const postMLConfig: RoadmapConfig = {
  prefix: 'pm_',
  path: '/post-ml-roadmap',
  brandName: 'Post-ML Roadmap',
  brandSub: '12-week tracker',
  journalTotal: 12,
  curriculum: curriculumPostMlData as Month[],
  projects: [
    {
      id: 1, monthId: 1, weeks: 'Weeks 1–4',
      title: 'Eval + Serve Pipeline',
      techStack: ['Python', 'MLflow', 'FastAPI', 'Docker'],
      input: 'Dataset + two competing models',
      output: 'Tracked experiments, comparison report, containerized /predict API',
      note: 'Evaluation pipeline and served model with health checks — the Phase 1 spine',
      type: 'api',
    },
    {
      id: 2, monthId: 2, weeks: 'Weeks 5–6',
      title: 'LoRA Fine-Tune with Verdict',
      techStack: ['Python', 'PyTorch', 'PEFT', 'HuggingFace'],
      input: '100+ instruction/response pairs for a narrow task',
      output: 'Fine-tuned adapter + before/after eval + ship-or-drop writeup',
      note: 'Fine-tune only if the eval proves it; otherwise document why prompting/RAG wins',
      type: 'agent',
    },
    {
      id: 3, monthId: 3, weeks: 'Weeks 7–10',
      title: 'Hardened RAG + Agent System',
      techStack: ['Python', 'Qdrant', 'LangGraph', 'LangSmith'],
      input: 'Document corpus + real multi-tool workflow',
      output: 'Hybrid-retrieval RAG + gated agent, eval suite gating CI',
      note: 'Precision@k and faithfulness dashboards; regression blocks the PR',
      type: 'rag',
    },
    {
      id: 4, monthId: 4, weeks: 'Weeks 11–12',
      title: 'Production Capstone',
      techStack: ['FastAPI', 'Docker', 'Cloud', 'Monitoring'],
      input: 'Real data source + real users (even ten)',
      output: 'Live URL, eval report page, monitored, defended in a 10-min walkthrough',
      note: 'One deployed system with visible quality metrics beats ten tutorial apps',
      type: 'saas',
    },
  ],
  resources: POSTML_RESOURCES,
  glossary: POSTML_GLOSSARY,
  glossaryCategories: ['all', 'evaluation', 'data', 'mlops', 'transformers', 'adaptation', 'rag', 'agents'],
  glossaryTitle: 'Concept pairs',
  glossaryBlurb: 'Adjacent concepts that are easy to conflate — what differs, and which one you reach for.',
  glossaryModalTitle: 'Concept pairs guide',
  glossaryUnit: 'pairs',
  glossaryLeftLabel: 'Concept A',
  glossaryRightLabel: 'Concept B',
  glossaryLeftLang: 'python',
  glossaryRightLang: 'python',
  mindsetLabel: 'Mindset',
};

// ── Healthcare AI Engineer track ─────────────────────────────────────────────

const HEALTH_RESOURCES: Record<number, WeekResource[]> = {
  301: [
    { title: 'scikit-learn — Pipelines & ColumnTransformer', source: 'scikit-learn.org', url: 'https://scikit-learn.org/stable/modules/compose.html', kind: 'docs' },
    { title: 'MIMIC-IV demo dataset (physionet)', source: 'PhysioNet', url: 'https://physionet.org/content/mimic-iv-demo/2.2/', kind: 'tool' },
    { title: 'Hospital Readmissions (Kaggle)', source: 'Kaggle', url: 'https://www.kaggle.com/datasets/dubradave/hospital-readmissions', kind: 'tool' },
  ],
  302: [
    { title: 'ClinicalBERT / Bio+Clinical BERT', source: 'HuggingFace', url: 'https://huggingface.co/emilyalsentzer/Bio_ClinicalBERT', kind: 'repo' },
    { title: 'PubMedQA dataset', source: 'HuggingFace', url: 'https://huggingface.co/datasets/qiaojin/PubMedQA', kind: 'tool' },
    { title: 'HuggingFace Tokenizers — training', source: 'huggingface.co', url: 'https://huggingface.co/docs/tokenizers/training_from_memory', kind: 'docs' },
  ],
  303: [
    { title: 'AI in Healthcare Specialization', source: 'Stanford · Coursera', url: 'https://www.coursera.org/specializations/ai-in-healthcare', kind: 'course' },
    { title: 'HL7 FHIR — Developer resources', source: 'hl7.org/fhir', url: 'https://hl7.org/fhir/', kind: 'docs' },
    { title: 'HAPI FHIR test server (public)', source: 'hapifhir.io', url: 'https://hapifhir.io/hapi-fhir/docs/server_plain.html', kind: 'tool' },
  ],
  304: [
    { title: 'n2c2/i2b2 shared tasks (clinical NLP)', source: 'dbmi.hms.harvard.edu', url: 'https://www.dbmi.hms.harvard.edu/research/project/n2c2-nlp/', kind: 'article' },
    { title: 'NegEx / negation detection', source: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/23461160/', kind: 'article' },
    { title: 'Epic Sepsis Model external validation', source: 'JAMA Internal Medicine', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307', kind: 'article' },
  ],
  305: [
    { title: 'Fairlearn — fairness assessment', source: 'fairlearn.org', url: 'https://fairlearn.org/main/quickstart.html', kind: 'docs' },
    { title: 'Dissecting racial bias in a health algorithm', source: 'Science (Obermeyer et al.)', url: 'https://www.science.org/doi/10.1126/science.aax2342', kind: 'article' },
    { title: 'FDA — Digital Health / SaMD overview', source: 'fda.gov', url: 'https://www.fda.gov/medical-devices/digital-health-center-excellence', kind: 'docs' },
    { title: 'HIPAA Security Rule guidance', source: 'HHS', url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html', kind: 'docs' },
  ],
  306: [
    { title: 'Model Cards for Model Reporting', source: 'Mitchell et al. / arXiv', url: 'https://arxiv.org/abs/1810.03993', kind: 'article' },
    { title: 'Reciprocal Rank Fusion', source: 'Elastic blog', url: 'https://www.elastic.co/blog/reciprocal-rank-fusion', kind: 'article' },
  ],
  307: [
    { title: 'DuckDB — analytical SQL', source: 'duckdb.org', url: 'https://duckdb.org/', kind: 'tool' },
    { title: 'Text-to-SQL execution accuracy (Spider benchmark)', source: 'yale-lily.github.io', url: 'https://yale-lily.github.io/spider', kind: 'article' },
  ],
  308: [
    { title: 'LangGraph — Human-in-the-loop', source: 'langchain-ai.github.io', url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', kind: 'docs' },
    { title: 'Building Effective Agents', source: 'Anthropic', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' },
  ],
  309: [
    { title: 'XGBoost docs', source: 'xgboost.readthedocs.io', url: 'https://xgboost.readthedocs.io/en/stable/', kind: 'docs' },
    { title: 'Evidently — data drift monitoring', source: 'evidentlyai.com', url: 'https://docs.evidentlyai.com/', kind: 'docs' },
    { title: 'sklearn — TimeSeriesSplit', source: 'scikit-learn.org', url: 'https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split', kind: 'docs' },
  ],
  310: [
    { title: 'RAGAS — RAG evaluation', source: 'ragas.io', url: 'https://docs.ragas.io/', kind: 'docs' },
    { title: 'LangSmith — Evaluation', source: 'docs.smith.langchain.com', url: 'https://docs.smith.langchain.com/evaluation', kind: 'docs' },
  ],
  311: [
    { title: 'OWASP Top 10 for LLM Applications', source: 'OWASP', url: 'https://genai.owasp.org/llm-top-10/', kind: 'article' },
    { title: 'HIPAA de-identification guidance', source: 'HHS', url: 'https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html', kind: 'docs' },
  ],
  312: [
    { title: 'Google SRE Book — Postmortem culture', source: 'sre.google', url: 'https://sre.google/sre-book/postmortem-culture/', kind: 'book' },
    { title: 'Model Cards for Model Reporting', source: 'Mitchell et al. / arXiv', url: 'https://arxiv.org/abs/1810.03993', kind: 'article' },
  ],
};

const HEALTH_GLOSSARY: GlossaryItem[] = [
  { csharp: 'ICD-10', python: 'CPT', category: 'standards', desc: 'ICD-10 codes WHY a patient was seen (diagnoses, billing on claims). CPT codes WHAT was done (procedures). Both end up as ML features.', csharpCode: `# ICD-10: diagnosis vocabulary\nE11.9  # Type 2 diabetes, no complications\nS72.0  # fracture of neck of femur`, pythonCode: `# CPT: procedure vocabulary\n99213  # office visit, established patient\n70450  # CT head, without contrast` },
  { csharp: 'SNOMED CT', python: 'LOINC', category: 'standards', desc: 'SNOMED CT: comprehensive clinical terminology (findings, procedures). LOINC: lab/observation identifiers. Both live inside FHIR resources.', csharpCode: `# SNOMED: clinical terms\n195967001  # asthma (finding)\n233604007  # pneumonia`, pythonCode: `# LOINC: lab panels\n2160-0  # creatinine [mass/volume]\n33914-3 # CBC panel` },
  { csharp: 'HL7 v2', python: 'FHIR', category: 'standards', desc: 'HL7 v2: pipe-delimited messages from the 80s, still everywhere in interfaces. FHIR: modern REST+JSON resources. You will meet both.', csharpCode: `MSH|^~\\&|LAB|HOSP|EHR|HOSP|20260107||ORU^R01|MSG1|P|2.3\nPID|1||12345||DOE^JANE||19700101|F`, pythonCode: `# FHIR: a resource\nGET /fhir/Patient/12345\n# -> JSON: resourceType, identifier, ...` },
  { csharp: 'PHI', python: 'PII', category: 'privacy', desc: 'PII identifies a person. PHI is health-related PII — protected by HIPAA with 18 identifier categories and much heavier penalties.', csharpCode: `# PII: name, email, gov id\nuser = {\"name\": \"Jane\", \"email\": \"j@x.com\"}`, pythonCode: `# PHI: PII tied to health data\nencounter = {\"name\": \"Jane\",\n  \"mrn\": 12345, \"dx\": \"E11.9\"}  # HIPAA scope` },
  { csharp: 'Safe Harbor', python: 'Expert Determination', category: 'privacy', desc: 'The two HIPAA de-identification methods: Safe Harbor strips all 18 identifier types; Expert Determination certifies very small re-identification risk.', csharpCode: `# Safe Harbor: strip 18 identifier types\ndeid = drop(date, zip3, mrn, name, age>89, ...)`, pythonCode: `# Expert Determination: statistical\nrisk = reident_risk(deid)\ncertify(risk < threshold)` },
  { csharp: 'BAA', python: 'DPA', category: 'privacy', desc: 'Both let a vendor process data lawfully. A BAA (HIPAA) is required before any vendor — including an LLM API — touches PHI. A DPA is the GDPR equivalent.', csharpCode: `# before: PHI never crosses\nllm.call(text)  # if has_phi(text): ABORT`, pythonCode: `# after BAA signed: PHI ok\nllm.call(phi_text)  # covered by agreement` },
  { csharp: 'SaMD', python: 'CDS', category: 'regulatory', desc: 'SaMD (Software as a Medical Device) makes a diagnostic/treatment claim and needs FDA clearance. Clinical Decision Support that is informational and reviewable can be exempt.', csharpCode: `# NOT a device (informational)\n\"This patient's readmission risk score is 0.31.\n See full chart for context.\"`, pythonCode: `# Likely SaMD (diagnostic claim)\n\"This patient WILL be readmitted.\"\n# -> regulatory pathway` },
  { csharp: 'AUROC', python: 'PPV at operating point', category: 'evaluation', desc: 'AUROC measures ranking quality across thresholds. Deployment cares about PPV and alert volume at ONE chosen threshold — where AUROC lied in sepsis models.', csharpCode: `auroc = roc_auc_score(y, p)\n# 0.85! ...but at what threshold,\n# how many false alarms per shift?`, pythonCode: `thresh = 0.62  # chosen for ops\nppv = precision_at(y, p, thresh)\nalerts = (p > thresh).mean()  # per day` },
  { csharp: 'Group parity', python: 'Calibration', category: 'fairness', desc: 'Two of the three standard fairness lenses. Impossibility results say you cannot satisfy all three simultaneously — pick explicitly and defend it.', csharpCode: `# parity: equal rates across groups\nfpr_A == fpr_B  # and fnr_A == fnr_B`, pythonCode: `# calibration: same score = same risk\nP(y=1 | s=0.3, A) ==\nP(y=1 | s=0.3, B)` },
  { csharp: 'Alert fatigue', python: 'Alert economics', category: 'clinical', desc: 'The deployment constraint: clinicians ignore alerts above ~10/shift regardless of accuracy. Your model ships at the PPV/alert-volume point, not the AUROC point.', csharpCode: `# the real objective\nmax ppv\ns.t. alerts_per_nurse_shift <= 10`, pythonCode: `# tune threshold on ops curve\nfor t in thresholds:\n  a = alert_rate(t)\n  if a > budget: break\n  pick(t)` },
  { csharp: 'Negation ("no evidence of")', python: 'Assertion detection', category: 'nlp', desc: 'The classic clinical NLP trap: "no evidence of pneumonia" must NOT extract pneumonia. NegEx-style rules or LLM-based assertion status.', csharpCode: `naive = "pneumonia" in note\n# True — WRONG. Patient does NOT have it.`, pythonCode: `assertion = nlp(note)\nassertion("pneumonia")\n# -> "Negated"  # correct` },
  { csharp: 'Copy-forward text', python: 'Temporal ambiguity', category: 'nlp', desc: 'Notes copy yesterday\'s note forward (stale history) and reference events years apart. Every extraction needs a temporal anchor.', csharpCode: `# same note contains:\n# "2019: appendectomy"\n# "yesterday: chest pain"\nextract(note)  # which is NOW?`, pythonCode: `events = nlp(note, anchor="admission")\nfor e in events: e.relative_time` },
];

export const healthConfig: RoadmapConfig = {
  prefix: 'hc_',
  path: '/healthcare-ai-roadmap',
  brandName: 'Healthcare AI',
  brandSub: '12-week tracker',
  journalTotal: 12,
  curriculum: curriculumHealthData as Month[],
  projects: [
    {
      id: 6, monthId: 1, weeks: 'Week 1',
      title: 'Readmission Baseline Service',
      techStack: ['Python', 'sklearn', 'FastAPI', 'Docker'],
      input: 'Public hospital dataset (MIMIC-IV demo or Kaggle readmissions)',
      datasetUrl: 'https://www.kaggle.com/datasets/dubradave/hospital-readmissions', datasetLabel: 'Hospital Readmissions (Kaggle)',
      output: '30-day readmission AUROC + confusion matrix + calibration curve, served on /predict',
      note: 'The tabular baseline every later system is measured against',
      type: 'api',
    },
    {
      id: 7, monthId: 2, weeks: 'Week 2',
      title: 'Clinical Text Classifier',
      techStack: ['Python', 'PyTorch', 'HuggingFace', 'MLflow'],
      input: 'Clinical notes (PubMedQA / n2c2-style public corpora)',
      datasetUrl: 'https://huggingface.co/datasets/qiaojin/PubMedQA', datasetLabel: 'PubMedQA (HuggingFace)',
      output: 'Fine-tuned DistilBERT + baseline-vs-tuned F1 in MLflow + model card',
      note: 'Fine-tune small on clinical text, prove the delta, ship a model card',
      type: 'agent',
    },
    {
      id: 1, monthId: 3, weeks: 'Week 6',
      title: 'Hospital Knowledge Assistant',
      techStack: ['Python', 'Qdrant', 'FastAPI', 'RAGAS'],
      input: 'Synthetic hospital policies & procedures (~50 docs)',
      output: 'RAG answers with inline citations + role-filtered retrieval + faithfulness eval',
      note: 'Uncited answers are worse than no answers — every claim traces to a source',
      type: 'rag',
    },
    {
      id: 2, monthId: 3, weeks: 'Week 7',
      title: 'Ops Analytics Assistant',
      techStack: ['DuckDB', 'Python', 'FastAPI', 'LLM'],
      input: 'Natural-language ops questions over a synthetic hospital warehouse',
      output: 'Verified SQL + 3-bullet briefing + anomaly flags; 25-question eval gating CI',
      note: 'Your 8 years of hospital ERP domain knowledge, pointed at text-to-SQL',
      type: 'api',
    },
    {
      id: 3, monthId: 3, weeks: 'Week 8',
      title: 'Workflow Agent (HITL)',
      techStack: ['LangGraph', 'Python', 'FastAPI'],
      input: 'Operational event stream + document index',
      output: 'Draft incident reports routed for human approval + immutable audit trail',
      note: 'Autonomy starts near zero — the gate and audit log are the product',
      type: 'agent',
    },
    {
      id: 4, monthId: 3, weeks: 'Week 9',
      title: 'Patient Flow Prediction',
      techStack: ['XGBoost', 'sklearn', 'Evidently', 'Docker'],
      input: 'Synthetic year of ED arrivals, appointments, admissions',
      output: 'ED demand + no-show + LOS forecasts with drift monitoring and retrain playbook',
      note: 'Tabular ops forecasting — where gradient boosting still beats LLMs',
      type: 'saas',
    },
    {
      id: 5, monthId: 4, weeks: 'Week 10',
      title: 'AI Evaluation Platform',
      techStack: ['Python', 'RAGAS', 'LangSmith', 'Grafana'],
      input: 'The other four projects, deployed',
      output: 'Nightly scheduled evals, hallucination tests, model comparison, quality dashboard',
      note: 'The project that judges the others — evals as first-class citizens',
      type: 'api',
    },
  ],
  resources: HEALTH_RESOURCES,
  glossary: HEALTH_GLOSSARY,
  glossaryCategories: ['all', 'standards', 'privacy', 'regulatory', 'evaluation', 'fairness', 'clinical', 'nlp'],
  glossaryTitle: 'Healthcare AI lexicon',
  glossaryBlurb: 'Standards, privacy, regulatory, and clinical concepts an AI engineer must speak fluently in a hospital.',
  glossaryModalTitle: 'Healthcare AI lexicon',
  glossaryUnit: 'terms',
  glossaryLeftLabel: 'Concept A',
  glossaryRightLabel: 'Concept B',
  glossaryLeftLang: 'python',
  glossaryRightLang: 'python',
  mindsetLabel: 'Mindset',
};

