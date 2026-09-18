// Per-week support material: the "Learning resources & books" panel.
//
// Every week in every tracker resolves to the same five fields, so a week is
// always answerable in one glance:
//
//   PRIMARY     the single course/tutorial to actually follow that week
//   SUPPORT     docs, videos and articles for when the primary doesn't land
//   BUILD       the thing you code — input and output stated, not "practice"
//   BOOKS       1-3 picks, tiered recommended / reference / deep dive
//   CHECKPOINT  what must be true before moving to the next week
//
// Books are declared once in BOOKS below and referenced per week with a tier
// and a chapter scope, so the same title never drifts between roadmaps. Titles
// without a stable public page carry no url and render as plain entries.
import type { WeekResource } from './roadmapData';

/** How hard a book is being pushed. Rendered as a labelled chip, brightest first. */
export type BookTier = 'recommended' | 'reference' | 'deepdive';

export interface SupportBook {
  title: string;
  author: string;
  /** Official page, author repo or free full text. Omitted when no stable public page exists. */
  url?: string;
  /** Publisher / edition, shown instead of a link target. */
  imprint?: string;
  /** Specs and standards are referenced like books but labelled differently. */
  format?: 'book' | 'spec';
}

export interface BookPick {
  book: SupportBook;
  tier: BookTier;
  /** Which chapters matter this week — books here are desk references, not cover-to-cover reads. */
  scope?: string;
}

export interface SupportBuild {
  title: string;
  input: string;
  output: string;
}

export interface WeekSupport {
  primary: WeekResource;
  support: WeekResource[];
  build: SupportBuild;
  books: BookPick[];
  checkpoints: string[];
}

export const BOOK_TIER_META: Record<BookTier, { label: string; order: number }> = {
  recommended: { label: 'Recommended', order: 0 },
  reference: { label: 'Reference', order: 1 },
  deepdive: { label: 'Deep dive', order: 2 },
};

// ── Book registry ────────────────────────────────────────────────────────────
// One entry per title. Links point at the official site or the author's own
// code repo — never a reseller.

const HANDS_ON_ML: SupportBook = {
  title: 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow',
  author: 'Aurélien Géron',
  url: 'https://github.com/ageron/handson-ml3',
  imprint: "O'Reilly · 3rd ed. · notebooks in the repo",
};

const ISLP: SupportBook = {
  title: 'An Introduction to Statistical Learning with Applications in Python',
  author: 'James, Witten, Hastie, Tibshirani & Taylor',
  url: 'https://www.statlearning.com/',
  imprint: 'Springer · free PDF + labs',
};

const MML: SupportBook = {
  title: 'Mathematics for Machine Learning',
  author: 'Deisenroth, Faisal & Ong',
  url: 'https://mml-book.github.io/',
  imprint: 'Cambridge · free PDF',
};

const ML_YEARNING: SupportBook = {
  title: 'Machine Learning Yearning',
  author: 'Andrew Ng',
  url: 'https://info.deeplearning.ai/machine-learning-yearning-book',
  imprint: 'DeepLearning.AI · free',
};

const SUTTON_BARTO: SupportBook = {
  title: 'Reinforcement Learning: An Introduction',
  author: 'Sutton & Barto',
  url: 'http://incompleteideas.net/book/the-book-2nd.html',
  imprint: 'MIT Press · 2nd ed. · free PDF',
};

const HANDS_ON_LLM: SupportBook = {
  title: 'Hands-On Large Language Models',
  author: 'Jay Alammar & Maarten Grootendorst',
  url: 'https://github.com/HandsOnLLM/Hands-On-Large-Language-Models',
  imprint: "O'Reilly · notebooks in the repo",
};

const LLM_FROM_SCRATCH: SupportBook = {
  title: 'Build a Large Language Model (From Scratch)',
  author: 'Sebastian Raschka',
  url: 'https://github.com/rasbt/LLMs-from-scratch',
  imprint: 'Manning · code in the repo',
};

const NLP_TRANSFORMERS: SupportBook = {
  title: 'Natural Language Processing with Transformers',
  author: 'Tunstall, von Werra & Wolf',
  url: 'https://github.com/nlp-with-transformers/notebooks',
  imprint: "O'Reilly · notebooks in the repo",
};

const AI_ENGINEERING: SupportBook = {
  title: 'AI Engineering',
  author: 'Chip Huyen',
  url: 'https://github.com/chiphuyen/aie-book',
  imprint: "O'Reilly · resources in the repo",
};

const DMLS: SupportBook = {
  title: 'Designing Machine Learning Systems',
  author: 'Chip Huyen',
  url: 'https://github.com/chiphuyen/dmls-book',
  imprint: "O'Reilly · notes in the repo",
};

const LLM_HANDBOOK: SupportBook = {
  title: "LLM Engineer's Handbook",
  author: 'Paul Iusztin & Maxime Labonne',
  url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook',
  imprint: 'Packt · full project repo',
};

const GENAI_LANGCHAIN: SupportBook = {
  title: 'Generative AI with LangChain',
  author: 'Ben Auffarth',
  url: 'https://github.com/benman1/generative_ai_with_langchain',
  imprint: 'Packt · code in the repo',
};

const AGENTIC_AI: SupportBook = {
  title: 'Building Agentic AI Systems',
  author: 'Biswas & Talukdar',
  url: 'https://github.com/PacktPublishing/Building-Agentic-AI-Systems',
  imprint: 'Packt · code in the repo',
};

const AGENTS_30: SupportBook = {
  title: '30 Agents Every AI Engineer Must Build',
  author: 'Imran Ahmad',
  url: 'https://github.com/PacktPublishing/30-Agents-Every-AI-Engineer-Must-Build',
  imprint: 'Packt · owned copy · runnable per chapter',
};

const LLMS_100_IMAGES: SupportBook = {
  title: 'LLMs In 100 Images',
  author: 'Ashish Bamania',
  url: 'https://bamaniaashish.gumroad.com/l/llmbook',
  imprint: 'Visual reference',
};

const SRE_BOOK: SupportBook = {
  title: 'Site Reliability Engineering',
  author: 'Beyer, Jones, Petoff & Murphy',
  url: 'https://sre.google/sre-book/table-of-contents/',
  imprint: "O'Reilly · Google · free online",
};

const BIOMEDICAL_INFORMATICS: SupportBook = {
  title: 'Biomedical Informatics: Computer Applications in Health Care and Biomedicine',
  author: 'Shortliffe & Cimino',
  imprint: 'Springer · the field’s standard text — library or institutional access',
};

const AI_REVOLUTION_MEDICINE: SupportBook = {
  title: 'The AI Revolution in Medicine: GPT-4 and Beyond',
  author: 'Lee, Goldberg & Kohane',
  imprint: 'Pearson · read it for the clinical framing, not the technique',
};

const DEEP_MEDICINE: SupportBook = {
  title: 'Deep Medicine',
  author: 'Eric Topol',
  imprint: 'Basic Books · why clinicians adopt or reject AI',
};

// Specs referenced the way books are — they are the actual source of truth in
// healthcare, and no book substitutes for them.
const FHIR_SPEC: SupportBook = {
  title: 'HL7 FHIR — Resource specification',
  author: 'HL7 International',
  url: 'https://hl7.org/fhir/',
  imprint: 'Standard · Patient, Encounter, Observation, Condition, Claim …',
  format: 'spec',
};

const OMOP_CDM: SupportBook = {
  title: 'OMOP Common Data Model',
  author: 'OHDSI',
  url: 'https://ohdsi.github.io/CommonDataModel/',
  imprint: 'Standard · the analytics-side counterpart to FHIR',
  format: 'spec',
};

const WHO_AI_HEALTH: SupportBook = {
  title: 'Ethics & Governance of AI for Health',
  author: 'World Health Organization',
  url: 'https://www.who.int/publications/i/item/9789240037403',
  imprint: 'Guidance · accountability, privacy, equity, safety',
  format: 'spec',
};

const WHO_LMM: SupportBook = {
  title: 'Ethics & Governance of AI for Health: Large Multi-Modal Models',
  author: 'World Health Organization',
  url: 'https://www.who.int/publications/i/item/9789240084759',
  imprint: 'Guidance · the GenAI-specific follow-up',
  format: 'spec',
};

const NIST_GENAI: SupportBook = {
  title: 'AI RMF — Generative AI Profile',
  author: 'NIST',
  url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence',
  imprint: 'Risk framework · the engineering-side checklist',
  format: 'spec',
};

const MCP_SPEC: SupportBook = {
  title: 'Model Context Protocol — Specification',
  author: 'Anthropic & MCP contributors',
  url: 'https://modelcontextprotocol.io/introduction',
  imprint: 'Protocol · read the spec, not 2024 tutorials',
  format: 'spec',
};

/** Shorthand so the week tables below stay readable. */
const r = (title: string, source: string, url: string, kind: WeekResource['kind']): WeekResource =>
  ({ title, source, url, kind });

const b = (book: SupportBook, tier: BookTier, scope?: string): BookPick => ({ book, tier, scope });

// ── ML roadmap (/ml-roadmap) ─────────────────────────────────────────────────
// Theory -> intuition -> Python implementation -> healthcare mini-project.
// Andrew Ng stays the single primary the whole way; nothing else is a course.

const ML_COURSE_1 = 'https://www.coursera.org/learn/machine-learning';
const ML_COURSE_2 = 'https://www.coursera.org/learn/advanced-learning-algorithms';
const ML_COURSE_3 = 'https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning';

export const ML_SUPPORT: Record<number, WeekSupport> = {
  101: {
    primary: r('Course 1 — Supervised ML: Regression & Classification (Week 1)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_1, 'course'),
    support: [
      r('Gradient Descent, Step-by-Step', 'StatQuest', 'https://www.youtube.com/watch?v=sDv4f4s2SB8', 'video'),
      r('NumPy: the absolute basics for beginners', 'numpy.org', 'https://numpy.org/doc/stable/user/absolute_beginners.html', 'docs'),
      r('Essence of calculus — derivatives as change', '3Blue1Brown', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', 'video'),
    ],
    build: {
      title: 'Length-of-stay regression, one variable, no library',
      input: 'Synthetic admissions: severity score → observed length of stay',
      output: 'Hand-written gradient descent in NumPy + a cost curve that visibly converges',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 1–2 — the ML landscape and one end-to-end project'),
      b(ISLP, 'reference', 'Ch 3.1 — simple linear regression'),
      b(MML, 'deepdive', 'Ch 2 — linear algebra, only if the notation blocks you'),
    ],
    checkpoints: [
      'I can state supervised vs unsupervised in one sentence each',
      'I can write the squared-error cost J(w,b) from memory',
      'I implemented gradient descent for one variable in NumPy without looking it up',
      'I can describe what a too-large learning rate does to the cost curve',
    ],
  },
  102: {
    primary: r('Course 1 — Regression with multiple input variables (Week 2)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_1, 'course'),
    support: [
      r('NumPy broadcasting', 'numpy.org', 'https://numpy.org/doc/stable/user/basics.broadcasting.html', 'docs'),
      r('Preprocessing data — scaling', 'scikit-learn', 'https://scikit-learn.org/stable/modules/preprocessing.html', 'docs'),
      r('Essence of linear algebra', '3Blue1Brown', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', 'video'),
    ],
    build: {
      title: 'Length-of-stay regression, multivariate and vectorized',
      input: '8–10 admission features (age, ward, severity, prior visits, …)',
      output: 'Fully vectorized model + a before/after scaling comparison on the same learning rate',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 2 — pipelines, scaling, train/test discipline'),
      b(ISLP, 'reference', 'Ch 3.2–3.3 — multiple regression and its diagnostics'),
      b(MML, 'deepdive', 'Ch 5 — vector calculus behind the gradient'),
    ],
    checkpoints: [
      'My model is vectorized — no Python loop over training examples',
      'I can explain when feature scaling is required and when it is irrelevant',
      'I can diagnose a bad learning rate from the cost curve alone',
      'I fit the scaler on the training split only, and I can say why',
    ],
  },
  103: {
    primary: r('Course 1 — Classification (Week 3)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_1, 'course'),
    support: [
      r('Logistic Regression, clearly explained', 'StatQuest', 'https://www.youtube.com/watch?v=yIYKR4sgzI8', 'video'),
      r('Regularization (Ridge / Lasso)', 'scikit-learn', 'https://scikit-learn.org/stable/modules/linear_model.html', 'docs'),
      r('Metrics: precision, recall, F1, ROC-AUC', 'scikit-learn', 'https://scikit-learn.org/stable/modules/model_evaluation.html', 'docs'),
    ],
    build: {
      title: 'Claim approval classifier',
      input: 'Synthetic claim + service data (code, amount, payer, prior denials)',
      output: 'Approval probability, plotted decision boundary, confusion matrix and precision/recall at the chosen threshold',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 4 — training models: logistic and softmax regression'),
      b(ISLP, 'reference', 'Ch 4 — classification'),
      b(MML, 'deepdive', 'Ch 6 — probability, for where log loss comes from'),
    ],
    checkpoints: [
      'I understand sigmoid, probability and the decision boundary geometrically',
      'I can say why squared error is the wrong loss for classification',
      'I can name three concrete fixes for overfitting and when each applies',
      'I can read precision, recall and a confusion matrix off my own model',
    ],
  },
  104: {
    primary: r('Course 2 — Neural Networks: intuition & inference (Week 1)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_2, 'course'),
    support: [
      r('But what is a neural network?', '3Blue1Brown', 'https://www.youtube.com/watch?v=aircAruvnKk', 'video'),
      r('The Sequential model', 'Keras', 'https://keras.io/guides/sequential_model/', 'docs'),
      r('Gradient descent, how neural networks learn', '3Blue1Brown', 'https://www.youtube.com/watch?v=IHZwWFHWa-w', 'video'),
    ],
    build: {
      title: 'Claim triage network — three ways',
      input: 'The same claim features as Week 3',
      output: 'One forward pass computed by hand on paper, then in raw NumPy, then in Keras — all three agreeing',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 10 — introduction to ANNs with Keras'),
      b(MML, 'reference', 'Ch 5 — the chain rule that backprop is made of'),
    ],
    checkpoints: [
      'I can hand-compute a forward pass through a 2-layer network',
      'I can explain why a layer without an activation collapses to linear regression',
      'My NumPy forward pass and my Keras model produce the same numbers',
      'I can read a layer’s shape and say how many parameters it has',
    ],
  },
  105: {
    primary: r('Course 2 — Neural network training (Week 2)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_2, 'course'),
    support: [
      r('Training & evaluation with the built-in methods', 'Keras', 'https://keras.io/guides/training_with_built_in_methods/', 'docs'),
      r('Adam: A Method for Stochastic Optimization', 'Kingma & Ba · arXiv', 'https://arxiv.org/abs/1412.6980', 'article'),
      r('Activation functions & softmax', 'ML Cheatsheet', 'https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html', 'docs'),
    ],
    build: {
      title: 'Multi-class claim rejection reason classifier',
      input: 'Rejected claims labelled with one of 5–7 rejection reasons',
      output: 'Softmax model trained with Adam, per-class recall reported, numerically stable logits',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 11 — training deep networks: initialization, optimizers, schedules'),
      b(MML, 'deepdive', 'Ch 7 — continuous optimization'),
    ],
    checkpoints: [
      'I can name the three steps of training a model in TensorFlow',
      'I can pick the right activation for a hidden layer and for each output type',
      'I can explain why softmax needs a numerically stable implementation',
      'I can say what Adam changes compared to plain gradient descent',
    ],
  },
  106: {
    primary: r('Course 2 — Advice for applying ML (Week 3)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_2, 'course'),
    support: [
      r('Bias and Variance', 'StatQuest', 'https://www.youtube.com/watch?v=EuBBz3bI-aA', 'video'),
      r('Validation curves & learning curves', 'scikit-learn', 'https://scikit-learn.org/stable/modules/learning_curve.html', 'docs'),
      r('Cross-validation: evaluating estimator performance', 'scikit-learn', 'https://scikit-learn.org/stable/modules/cross_validation.html', 'docs'),
    ],
    build: {
      title: 'Diagnose, then fix, a deliberately broken readmission model',
      input: 'A model that scores 0.95 on train and 0.61 on validation',
      output: 'A written diagnosis (bias or variance), the fix applied, and the learning curve proving it moved',
    },
    books: [
      b(ML_YEARNING, 'recommended', 'The whole book — dev/test sets, error analysis, what to work on next'),
      b(HANDS_ON_ML, 'reference', 'Ch 2 — evaluation and cross-validation in practice'),
      b(ISLP, 'reference', 'Ch 5 — resampling methods'),
    ],
    checkpoints: [
      'I can diagnose bias vs variance from two numbers',
      'I know which fix each diagnosis calls for — and which fixes are wasted effort',
      'I ran an error analysis on ~50 misclassified examples and it changed my next step',
      'My dev and test sets come from the same distribution as the thing I care about',
    ],
  },
  107: {
    primary: r('Course 2 — Decision trees (Week 4)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_2, 'course'),
    support: [
      r('Decision and Classification Trees', 'StatQuest', 'https://www.youtube.com/watch?v=_L39rN6gz7Y', 'video'),
      r('XGBoost — Introduction to Boosted Trees', 'xgboost.readthedocs.io', 'https://xgboost.readthedocs.io/en/stable/tutorials/model.html', 'docs'),
      r('Ensemble methods', 'scikit-learn', 'https://scikit-learn.org/stable/modules/ensemble.html', 'docs'),
    ],
    build: {
      title: 'Insurance claim rejection reason — three models, one table',
      input: 'The Week 5 rejection dataset',
      output: 'Logistic regression vs random forest vs XGBoost compared on the same split, with feature importances read out loud',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 6–7 — decision trees, ensembles, gradient boosting'),
      b(ISLP, 'reference', 'Ch 8 — tree-based methods'),
    ],
    checkpoints: [
      'I can compute entropy and information gain by hand for a small split',
      'I can explain why random forests decorrelate trees',
      'I have a clear rule for when I reach for trees instead of a neural network',
      'My three-model comparison uses one fixed split and one metric I chose on purpose',
    ],
  },
  108: {
    primary: r('Course 3 — Unsupervised learning (Week 1)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_3, 'course'),
    support: [
      r('K-means clustering', 'StatQuest', 'https://www.youtube.com/watch?v=4b5d3muPQmA', 'video'),
      r('Novelty and outlier detection', 'scikit-learn', 'https://scikit-learn.org/stable/modules/outlier_detection.html', 'docs'),
      r('Clustering — choosing K', 'scikit-learn', 'https://scikit-learn.org/stable/modules/clustering.html', 'docs'),
    ],
    build: {
      title: 'Abnormal billing detector + utilization segments',
      input: 'Synthetic claim volumes and amounts per provider/service',
      output: 'K-means segments with a defended K, plus a Gaussian anomaly detector flagging outlier billing patterns',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 9 — unsupervised learning techniques'),
      b(ISLP, 'reference', 'Ch 12 — unsupervised learning'),
    ],
    checkpoints: [
      'I implemented K-means end to end, including the assignment and update steps',
      'I can defend my choice of K with something other than "it looked right"',
      'I can explain when anomaly detection beats a supervised classifier',
      'I know why there is no accuracy score to report here',
    ],
  },
  109: {
    primary: r('Course 3 — Recommender systems (Week 2)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_3, 'course'),
    support: [
      r('Principal Component Analysis (PCA)', 'StatQuest', 'https://www.youtube.com/watch?v=FgakZw6K1QQ', 'video'),
      r('Matrix factorization for recommender systems', 'Koren et al.', 'https://datajobs.com/data-science-repo/Recommender-Systems-[Netflix].pdf', 'article'),
      r('tf.GradientTape — custom training loops', 'TensorFlow', 'https://www.tensorflow.org/guide/autodiff', 'docs'),
    ],
    build: {
      title: 'Service recommender + PCA on the patient feature space',
      input: 'Sparse patient × service utilization matrix',
      output: 'Collaborative-filtering recommendations with mean normalization, plus a 2-D PCA projection you can actually read',
    },
    books: [
      b(ISLP, 'recommended', 'Ch 12.2 — principal components analysis'),
      b(MML, 'reference', 'Ch 10 — dimensionality reduction with PCA'),
      b(HANDS_ON_ML, 'reference', 'Ch 8 — dimensionality reduction'),
    ],
    checkpoints: [
      'I can explain collaborative vs content-based filtering with an example from my own data',
      'I know why mean normalization matters for a brand-new user',
      'I can state what PCA preserves and what it throws away',
      'I wrote at least one custom training loop with GradientTape',
    ],
  },
  110: {
    primary: r('Course 3 — Reinforcement learning (Week 3)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_3, 'course'),
    support: [
      r('Gymnasium — Lunar Lander', 'Farama Foundation', 'https://gymnasium.farama.org/environments/box2d/lunar_lander/', 'docs'),
      r('Human-level control through deep RL (DQN)', 'DeepMind · Nature', 'https://www.nature.com/articles/nature14236', 'article'),
      r('Make a README — portfolio polish', 'makeareadme.com', 'https://www.makeareadme.com/', 'article'),
    ],
    build: {
      title: 'Lunar lander + publish the healthcare mini-project set',
      input: 'Gymnasium environment; the three mini-projects from Weeks 3, 7 and 8',
      output: 'A landing agent that converges, and three GitHub repos with READMEs stating the problem, data and metric',
    },
    books: [
      b(SUTTON_BARTO, 'deepdive', 'Ch 3–6 — MDPs, Bellman equations, TD learning'),
      b(ML_YEARNING, 'reference', 'Re-read once now that you have shipped models'),
    ],
    checkpoints: [
      'I can write the Bellman equation without notes and say what each term means',
      'My lunar lander trains to a stable landing',
      'All three mini-projects are on GitHub with a README a stranger could follow',
      'I can explain training, features, loss, generalization and evaluation to a non-ML engineer',
    ],
  },
};

// ── Post-ML roadmap (/post-ml-roadmap) ───────────────────────────────────────
// The bridge: neural networks -> embeddings -> attention -> transformers ->
// tokenization -> LLM inference, wrapped in the MLOps that makes it shippable.
// Weeks 5–6 are the part that has to be solid before the GenAI roadmap.

export const POSTML_SUPPORT: Record<number, WeekSupport> = {
  201: {
    primary: r('MLOps — Experiment tracking', 'Made With ML · Goku Mohandas', 'https://madewithml.com/courses/mlops/experiment-tracking/', 'course'),
    support: [
      r('MLflow — Quickstart & Tracking API', 'mlflow.org', 'https://mlflow.org/docs/latest/getting-started/index.html', 'docs'),
      r('Getting started with Weights & Biases', 'wandb.ai', 'https://docs.wandb.ai/quickstart', 'docs'),
      r('A/B testing for machine learning', 'Evidently AI', 'https://www.evidentlyai.com/blog/ml-ab-testing', 'article'),
    ],
    build: {
      title: 'Two-model bake-off with tracked runs',
      input: 'One dataset, two candidate models, one fixed split',
      output: 'MLflow runs with train/CV/test metrics logged, plus a one-paragraph written verdict on which ships and why',
    },
    books: [
      b(DMLS, 'recommended', 'Ch 6 — model development & offline evaluation'),
      b(AI_ENGINEERING, 'reference', 'Ch 4 — evaluate AI systems (desk reference, not a read-through)'),
      b(ML_YEARNING, 'reference', 'The chapters on choosing a single-number metric'),
    ],
    checkpoints: [
      'Every experiment I ran is reproducible from its logged params',
      'I picked one single-number metric before training, not after',
      'I can explain why my test set only gets touched once',
      'I wrote the ship/no-ship verdict in plain English',
    ],
  },
  202: {
    primary: r('SQLBolt — interactive SQL lessons', 'sqlbolt.com', 'https://sqlbolt.com/', 'course'),
    support: [
      r('PostgreSQL window functions', 'postgresqltutorial.com', 'https://www.postgresqltutorial.com/postgresql-window-function/', 'docs'),
      r('Why DuckDB?', 'duckdb.org', 'https://duckdb.org/why_duckdb', 'article'),
      r('MLOps — Preprocessing', 'Made With ML', 'https://madewithml.com/courses/mlops/preprocessing/', 'course'),
    ],
    build: {
      title: 'Reproducible ETL that validates its own output',
      input: 'Raw claims/encounters CSV + a Postgres or DuckDB target',
      output: 'One script: load → join → window-function aggregates → assertions that fail loudly on bad data',
    },
    books: [
      b(DMLS, 'recommended', 'Ch 3 — data engineering fundamentals'),
      b(HANDS_ON_ML, 'reference', 'Ch 2 — the data pipeline half of an end-to-end project'),
    ],
    checkpoints: [
      'I can write a window-function query without copying an example',
      'My ETL is idempotent — running it twice changes nothing',
      'The script fails on malformed input instead of silently producing garbage',
      'I can explain ETL vs ELT and which one I chose here',
    ],
  },
  203: {
    primary: r('FastAPI — Deployment', 'fastapi.tiangolo.com', 'https://fastapi.tiangolo.com/deployment/', 'docs'),
    support: [
      r('Docker — get started', 'docker.com', 'https://docs.docker.com/get-started/', 'docs'),
      r('MLflow — models & serving', 'mlflow.org', 'https://mlflow.org/docs/latest/models.html', 'docs'),
      r('MLOps — Serving', 'Made With ML', 'https://madewithml.com/courses/mlops/serving/', 'course'),
    ],
    build: {
      title: 'Model behind a typed API, in a container',
      input: 'A trained model artifact from Week 1',
      output: 'FastAPI /predict with Pydantic request/response models, /health, and a multi-stage Dockerfile that runs anywhere',
    },
    books: [
      b(DMLS, 'recommended', 'Ch 7 — model deployment & prediction service'),
      b(LLM_HANDBOOK, 'reference', 'Ch 10 — inference pipeline deployment patterns'),
    ],
    checkpoints: [
      'My container starts clean on a machine that has never seen the code',
      'Request and response bodies are typed and validated, not dicts',
      'I can explain batch vs online prediction and which mine is',
      'The image does not ship the training data or a notebook',
    ],
  },
  204: {
    primary: r('MLOps — Monitoring', 'Made With ML', 'https://madewithml.com/courses/mlops/monitoring/', 'course'),
    support: [
      r('Evidently — ML monitoring', 'evidentlyai.com', 'https://docs.evidentlyai.com/', 'docs'),
      r('The ML Test Score', 'Google · NeurIPS', 'https://research.google/pubs/pub46555/', 'article'),
      r('BlueGreenDeployment', 'Martin Fowler', 'https://martinfowler.com/bliki/BlueGreenDeployment.html', 'article'),
    ],
    build: {
      title: 'Break it on purpose, then roll it back',
      input: 'The served model from Week 3 + a deliberately drifted input stream',
      output: 'Structured logs, a drift report that actually fires, and a one-command rollback to the previous version',
    },
    books: [
      b(DMLS, 'recommended', 'Ch 8 — data distribution shifts & monitoring'),
      b(SRE_BOOK, 'reference', 'Postmortem culture — write one for your simulated outage'),
    ],
    checkpoints: [
      'My service emits structured logs I can query, not print statements',
      'I simulated a bad deployment and detected it from the metrics alone',
      'Rollback is one command and I have run it',
      'I can name three ways a model degrades without throwing an error',
    ],
  },
  205: {
    primary: r('How Transformer LLMs Work', 'DeepLearning.AI', 'https://www.deeplearning.ai/courses/how-transformer-llms-work/', 'course'),
    support: [
      r('The Illustrated Transformer', 'Jay Alammar', 'https://jalammar.github.io/illustrated-transformer/', 'article'),
      r('Let’s build GPT: from scratch, in code', 'Andrej Karpathy', 'https://www.youtube.com/watch?v=kCc8FmEb1nY', 'video'),
      r('But what is a GPT? Visual intro to transformers', '3Blue1Brown', 'https://www.youtube.com/watch?v=wjZofJX0v4M', 'video'),
      r('LLM Course — transformers & tokenization', 'Hugging Face', 'https://huggingface.co/learn/llm-course/chapter0/1', 'course'),
    ],
    build: {
      title: 'Attention twice: by hand, then by library',
      input: 'A short sentence, tokenized',
      output: 'Scaled dot-product attention in raw NumPy with shapes annotated, then the same result from nn.MultiheadAttention',
    },
    books: [
      b(LLM_FROM_SCRATCH, 'recommended', 'Ch 2–3 — working with text data, coding attention'),
      b(HANDS_ON_LLM, 'reference', 'Ch 1–3 — tokens, embeddings, transformer internals'),
      b(NLP_TRANSFORMERS, 'deepdive', 'Ch 3 — transformer anatomy'),
    ],
    checkpoints: [
      'I can walk the chain on a whiteboard: token → token ID → embedding → positional info → attention → block → logits → probability → next token',
      'I can explain why attention needs separate Q, K and V',
      'I can say what the KV cache stores and why generation would be slow without it',
      'I can define pretraining, instruction tuning, fine-tuning, RAG and prompting without conflating any two',
    ],
  },
  206: {
    primary: r('PEFT — parameter-efficient fine-tuning', 'Hugging Face', 'https://huggingface.co/docs/peft', 'docs'),
    support: [
      r('LoRA: Low-Rank Adaptation of Large Language Models', 'arXiv', 'https://arxiv.org/abs/2106.09685', 'article'),
      r('QLoRA: Efficient Finetuning of Quantized LLMs', 'arXiv', 'https://arxiv.org/abs/2305.14314', 'article'),
      r('TRL — supervised fine-tuning & DPO', 'Hugging Face', 'https://huggingface.co/docs/trl', 'docs'),
    ],
    build: {
      title: 'A small LoRA fine-tune, and the argument against doing it',
      input: 'A small instruction dataset on a narrow task',
      output: 'A LoRA adapter that measurably beats the base model on that task, plus a written "when NOT to fine-tune" one-pager',
    },
    books: [
      b(LLM_HANDBOOK, 'recommended', 'Ch 5–6 — supervised fine-tuning & preference alignment'),
      b(LLM_FROM_SCRATCH, 'reference', 'Ch 6–7 — fine-tuning for classification and instructions'),
      b(NLP_TRANSFORMERS, 'deepdive', 'Ch 10 — training transformers from scratch'),
    ],
    checkpoints: [
      'I can say exactly what LoRA freezes and what it trains',
      'I can order prompt → RAG → fine-tune by cost and justify the order',
      'My fine-tune is evaluated against the base model on a held-out set, not vibes',
      'I can describe what catastrophic forgetting looks like in practice',
    ],
  },
  207: {
    primary: r('Qdrant Academy — vector search & retrieval', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
    support: [
      r('Hybrid search explained', 'Qdrant', 'https://qdrant.tech/articles/hybrid-search/', 'article'),
      r('Cross-encoders for re-ranking', 'sbert.net', 'https://www.sbert.net/examples/applications/cross-encoder/README.html', 'docs'),
      r('Chunking strategies for RAG', 'Pinecone', 'https://www.pinecone.io/learn/chunking-strategy-rag/', 'article'),
    ],
    build: {
      title: 'Take a naive RAG pipeline and prove you improved it',
      input: 'A baseline PDF → chunks → embeddings → answer pipeline + a hand-built eval set of 30–50 questions',
      output: 'Retrieval metrics before and after chunking/hybrid/re-ranking changes, in one table',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The RAG chapter — treat it as a desk reference while you tune'),
      b(HANDS_ON_LLM, 'reference', 'Ch 8 — semantic search and RAG'),
      b(LLM_HANDBOOK, 'reference', 'Ch 4 & 9 — RAG feature and inference pipelines'),
    ],
    checkpoints: [
      'I have a scored eval set, so "better" is a number',
      'I can explain BM25 vs dense retrieval and when each one wins',
      'I know what a re-ranker costs in latency and what it buys in precision',
      'I can name the failure I fixed, not just the technique I added',
    ],
  },
  208: {
    primary: r('Building Effective Agents', 'Anthropic', 'https://www.anthropic.com/research/building-effective-agents', 'article'),
    support: [
      r('LangGraph — human-in-the-loop', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', 'docs'),
      r('OWASP Top 10 for LLM Applications', 'OWASP', 'https://genai.owasp.org/llm-top-10/', 'article'),
      r('AI Agents in LangGraph', 'DeepLearning.AI', 'https://www.deeplearning.ai/courses/ai-agents-in-langgraph/', 'course'),
    ],
    build: {
      title: 'Harden one agent until it is boring',
      input: 'A working but fragile agent from the GenAI roadmap',
      output: 'Tool budget, explicit stop conditions, a human-approval gate on the destructive tool, structured state and a replayable trace',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'Ch 8 — building trust: guardrails and oversight'),
      b(AI_ENGINEERING, 'reference', 'The agents chapter — patterns and failure modes'),
      b(AGENTS_30, 'reference', 'Pick one agent and re-read how it bounds its loop'),
    ],
    checkpoints: [
      'My agent cannot loop forever — there is a hard step and token budget',
      'Every consequential action passes a human gate',
      'I can replay a failed run from its trace and say which step went wrong',
      'I can name three prompt-injection paths into my tools and what stops each',
    ],
  },
  209: {
    primary: r('Model Context Protocol — introduction & specification', 'modelcontextprotocol.io', 'https://modelcontextprotocol.io/introduction', 'docs'),
    support: [
      r('The 2026-07-28 specification release', 'MCP Blog', 'https://blog.modelcontextprotocol.io/posts/2026-07-28/', 'article'),
      r('Multi-agent collaboration', 'LangGraph', 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/', 'docs'),
      r('CrewAI — documentation', 'crewai.com', 'https://docs.crewai.com/introduction', 'docs'),
    ],
    build: {
      title: 'Supervisor + workers, with one tool served over MCP',
      input: 'A task that genuinely splits into two specialisms',
      output: 'A supervisor graph routing to workers, where one capability is an MCP server any client can call',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'The orchestration chapters — supervisor and delegation patterns'),
      b(AGENTS_30, 'reference', 'The multi-agent builds, for boundary design'),
    ],
    checkpoints: [
      'I can state when a multi-agent split pays off — and when it is just latency',
      'My MCP server works from a second client, not only my own code',
      'I read the current spec rather than a 2024 tutorial',
      'Workers have narrow tool access, not the full toolbox',
    ],
  },
  210: {
    primary: r('RAGAS — evaluation framework', 'ragas.io', 'https://docs.ragas.io/', 'docs'),
    support: [
      r('LangSmith — evaluation', 'docs.smith.langchain.com', 'https://docs.smith.langchain.com/evaluation', 'docs'),
      r('Langfuse — observability & evals', 'langfuse.com', 'https://langfuse.com/docs', 'docs'),
      r('Judging LLM-as-a-Judge (biases)', 'arXiv', 'https://arxiv.org/abs/2306.05685', 'article'),
    ],
    build: {
      title: 'An eval suite that can block a merge',
      input: 'Your LLM app + a versioned eval set',
      output: 'Retrieval, answer-quality and hallucination scores running in CI, failing the build on regression',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The evaluation chapters — methodology before tooling'),
      b(DMLS, 'reference', 'Ch 6 — offline evaluation, adapted to generative output'),
    ],
    checkpoints: [
      'My eval set is versioned and reviewed, not regenerated each run',
      'I know the bias modes of LLM-as-judge and where I compensate',
      'CI fails on a quality regression, not only on a broken import',
      'I can tell a retrieval failure apart from a generation failure',
    ],
  },
  211: {
    primary: r('Made With ML — MLOps course', 'madewithml.com', 'https://madewithml.com/', 'course'),
    support: [
      r('12-Factor Agents — production principles', 'GitHub', 'https://github.com/humanlayer/12factor-agents', 'repo'),
      r('Full Stack Deep Learning', 'fullstackdeeplearning.com', 'https://fullstackdeeplearning.com/course/', 'course'),
      r('Langfuse — tracing your app', 'langfuse.com', 'https://langfuse.com/docs/observability/overview', 'docs'),
    ],
    build: {
      title: 'Capstone skeleton, end to end, on day one',
      input: 'Your chosen capstone problem',
      output: 'data pipeline → model/LLM core → API → eval harness, all running locally, all in version control with CI green',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The architecture chapter — what belongs in which layer'),
      b(DMLS, 'reference', 'Ch 11 — the human side of ML, for scoping'),
    ],
    checkpoints: [
      'The skeleton runs end to end before any part of it is good',
      'CI runs tests and the eval harness on every push',
      'I can draw the system on one page from memory',
      'The scope is one system I can defend, not three demos',
    ],
  },
  212: {
    primary: r('The Twelve-Factor App', '12factor.net', 'https://12factor.net/', 'article'),
    support: [
      r('Postmortem culture: learning from failure', 'Google SRE', 'https://sre.google/sre-book/postmortem-culture/', 'article'),
      r('Langfuse — production observability', 'langfuse.com', 'https://langfuse.com/docs', 'docs'),
      r('Make a README', 'makeareadme.com', 'https://www.makeareadme.com/', 'article'),
    ],
    build: {
      title: 'Ship it, watch it, defend it',
      input: 'The Week 11 capstone skeleton',
      output: 'A public URL, live traces and cost/latency dashboards, an eval-report page, and a 10-minute recorded walkthrough',
    },
    books: [
      b(SRE_BOOK, 'recommended', 'Monitoring, postmortems and the parts about on-call reality'),
      b(DMLS, 'reference', 'Ch 8–9 — monitoring and continual learning in production'),
    ],
    checkpoints: [
      'A stranger can use it from the public URL without me in the room',
      'I can show what it cost and how slow it was, per request',
      'I wrote the honest retro: what broke, what I would build differently',
      'I can defend every design decision in ten minutes',
    ],
  },
};

// ── GenAI Engineering roadmap (/roadmap) ─────────────────────────────────────
// Docs/course -> engineering exercise -> production project -> books.
// Books here are desk references you dip into while building; nothing on this
// track is meant to be read cover to cover.

const GENAI_WEEKS_1_13: Record<number, WeekSupport> = {
  1: {
    primary: r('The Python Tutorial', 'docs.python.org', 'https://docs.python.org/3/tutorial/', 'docs'),
    support: [
      r('Python OOP tutorial series', 'Corey Schafer', 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc', 'video'),
      r('OOP in Python 3', 'Real Python', 'https://realpython.com/python3-object-oriented-programming/', 'article'),
      r('Python track — practice exercises', 'Exercism', 'https://exercism.org/tracks/python', 'course'),
    ],
    build: {
      title: 'Typed CLI with a JSON round-trip',
      input: 'A JSON file of records + command-line arguments',
      output: 'A script with type hints and a class, reading, transforming and writing JSON, runnable from the terminal',
    },
    books: [
      b(AI_ENGINEERING, 'reference', 'Ch 1 — what an AI engineer actually builds; read once for orientation'),
      b(LLM_HANDBOOK, 'reference', 'Ch 1–2 — project structure and tooling conventions'),
    ],
    checkpoints: [
      'I can write a Python class with a constructor and type hints without a reference',
      'I can read and write JSON and run the script from the terminal',
      'I stopped reaching for the C# idiom first — indentation, no semicolons, snake_case',
      'My environment is managed (Poetry/uv), not the system Python',
    ],
  },
  2: {
    primary: r('FastAPI — tutorial: first steps', 'fastapi.tiangolo.com', 'https://fastapi.tiangolo.com/tutorial/first-steps/', 'docs'),
    support: [
      r('Concurrency and async / await', 'FastAPI', 'https://fastapi.tiangolo.com/async/', 'docs'),
      r('Async IO in Python: a complete walkthrough', 'Real Python', 'https://realpython.com/async-io-python/', 'article'),
      r('Pydantic — models', 'docs.pydantic.dev', 'https://docs.pydantic.dev/latest/concepts/models/', 'docs'),
    ],
    build: {
      title: 'Async REST API with two real endpoints',
      input: 'A typed request body',
      output: 'A FastAPI service with async handlers, Pydantic validation and generated OpenAPI docs',
    },
    books: [
      b(LLM_HANDBOOK, 'reference', 'Ch 2–3 — tooling and data pipelines as a project layout'),
      b(DMLS, 'reference', 'Ch 7 — what a prediction service owes its callers'),
    ],
    checkpoints: [
      'I can explain Python’s single event loop against C# Tasks',
      'I know which of my handlers should be async and which must not be',
      'My request/response models are Pydantic classes, not dicts',
      'I never install into the system Python again',
    ],
  },
  3: {
    primary: r('Claude API — getting started', 'Anthropic', 'https://docs.anthropic.com/en/api/getting-started', 'docs'),
    support: [
      r('OpenAI API quickstart', 'OpenAI', 'https://platform.openai.com/docs/quickstart', 'docs'),
      r('Anthropic Cookbook — runnable examples', 'GitHub', 'https://github.com/anthropics/anthropic-cookbook', 'repo'),
      r('Streaming responses', 'FastAPI', 'https://fastapi.tiangolo.com/advanced/custom-response/', 'docs'),
    ],
    build: {
      title: 'Streaming clinical assistant endpoint',
      input: 'A clinical question over HTTP',
      output: 'A FastAPI endpoint that calls an LLM and streams tokens back — plus the same call made once from C#',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'Ch 2 — understanding foundation models (context, sampling, cost)'),
      b(HANDS_ON_LLM, 'reference', 'Ch 1 — an introduction to large language models'),
      b(LLMS_100_IMAGES, 'deepdive', 'The decoding and sampling images'),
    ],
    checkpoints: [
      'I can call two providers’ APIs and explain where their request shapes differ',
      'Tokens stream to the client instead of arriving as one block',
      'My API keys are in environment variables and not in git',
      'I can estimate what one request costs before I send a thousand',
    ],
  },
  4: {
    primary: r('Prompt engineering overview', 'Anthropic', 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', 'docs'),
    support: [
      r('Structured outputs guide', 'OpenAI', 'https://platform.openai.com/docs/guides/structured-outputs', 'docs'),
      r('Pydantic — models & JSON Schema', 'docs.pydantic.dev', 'https://docs.pydantic.dev/latest/concepts/models/', 'docs'),
      r('Instructor — structured LLM outputs', 'useinstructor.com', 'https://python.useinstructor.com/', 'tool'),
    ],
    build: {
      title: 'Typed extraction API — insurance authorization',
      input: 'A free-text prior-authorization request',
      output: 'Validated JSON mapped to a Pydantic model, with a retry path when validation fails',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The prompt engineering chapter — patterns and defensive prompting'),
      b(HANDS_ON_LLM, 'reference', 'The prompt engineering chapter — worked examples'),
    ],
    checkpoints: [
      'I can name five prompt patterns and when each applies',
      'My extraction returns a validated object every time, or fails loudly',
      'I understand function calling as a JSON-schema contract, not magic',
      'I have seen and handled at least one malformed-JSON response',
    ],
  },
  5: {
    primary: r('LangChain Expression Language (LCEL)', 'LangChain', 'https://python.langchain.com/docs/concepts/lcel/', 'docs'),
    support: [
      r('LangChain Academy — free courses', 'LangChain', 'https://academy.langchain.com/', 'course'),
      r('LangChain crash course', 'freeCodeCamp', 'https://www.youtube.com/watch?v=lG7Uxts9SXs', 'video'),
      r('Output parsers — concepts', 'LangChain', 'https://python.langchain.com/docs/concepts/output_parsers/', 'docs'),
    ],
    build: {
      title: 'One LCEL chain, typed at both ends',
      input: 'A structured prompt + variables',
      output: 'A runnable sequence that returns a parsed Python object, not a string',
    },
    books: [
      b(GENAI_LANGCHAIN, 'recommended', 'Ch 2 — first steps with LangChain'),
      b(AI_ENGINEERING, 'reference', 'Keep it open at the prompting chapter while you compose chains'),
    ],
    checkpoints: [
      'I can read a pipe-composed chain and say what flows between each stage',
      'My chain output is typed and parsed, never a raw string I regex later',
      'I know which parts of LangChain I would not use in production',
      'I can swap the model provider in one line',
    ],
  },
  6: {
    primary: r('Document loaders — concepts', 'LangChain', 'https://python.langchain.com/docs/concepts/document_loaders/', 'docs'),
    support: [
      r('Text splitters — concepts', 'LangChain', 'https://python.langchain.com/docs/concepts/text_splitters/', 'docs'),
      r('Chunking strategies for LLM applications', 'Pinecone', 'https://www.pinecone.io/learn/chunking-strategies/', 'article'),
      r('Tools & custom tool definitions', 'LangChain', 'https://python.langchain.com/docs/concepts/tools/', 'docs'),
    ],
    build: {
      title: 'Policy PDF → chunk pipeline you can defend',
      input: 'A hospital policy manual PDF',
      output: 'Chunks with tuned size/overlap, metadata preserved, and two custom Python functions registered as tools',
    },
    books: [
      b(GENAI_LANGCHAIN, 'recommended', 'Ch 4 — RAG & documents, first pass'),
      b(HANDS_ON_LLM, 'reference', 'The semantic search chapter — why chunking decides retrieval quality'),
    ],
    checkpoints: [
      'I can justify my chunk size and overlap with an example that broke at other values',
      'Section headings and page numbers survive into chunk metadata',
      'A custom function is callable by the model with a typed schema',
      'I can spot a chunk that split a sentence in half and fix it',
    ],
  },
  7: {
    primary: r('Introduction to LangGraph (55 lessons)', 'LangChain Academy', 'https://academy.langchain.com/courses/intro-to-langgraph', 'course'),
    support: [
      r('LangGraph documentation', 'LangChain', 'https://langchain-ai.github.io/langgraph/', 'docs'),
      r('Low-level concepts: state, nodes, edges', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/low_level/', 'docs'),
      r('AI Agents in LangGraph', 'DeepLearning.AI', 'https://www.deeplearning.ai/courses/ai-agents-in-langgraph/', 'course'),
    ],
    build: {
      title: 'Cyclic state graph with real branching',
      input: 'A task that needs two or more passes to finish',
      output: 'Nodes that mutate a shared state dict, conditional edges driven by model output, and a loop that terminates',
    },
    books: [
      b(GENAI_LANGCHAIN, 'recommended', 'Ch 3 — workflows with LangGraph'),
      b(AGENTIC_AI, 'reference', 'The orchestration chapters — state machines as agent backbones'),
    ],
    checkpoints: [
      'I can draw my graph’s states and transitions before coding it',
      'I know what my reducer does when two nodes write the same key',
      'My loop has an explicit exit condition and a step cap',
      'I can stream intermediate node output, not just the final answer',
    ],
  },
  8: {
    primary: r('Human-in-the-loop — concepts', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', 'docs'),
    support: [
      r('Breakpoints & interrupts', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/breakpoints/', 'docs'),
      r('Persistence & checkpointers', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/persistence/', 'docs'),
      r('Introduction to LangGraph — HITL lessons', 'LangChain Academy', 'https://academy.langchain.com/courses/intro-to-langgraph', 'course'),
    ],
    build: {
      title: 'Pause → approve → resume, across a restart',
      input: 'A workflow with one destructive action',
      output: 'Execution interrupted before the sensitive step, state persisted to SQLite, resumed after approval — surviving a process restart',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'Ch 8 — building trust: approval gates and oversight'),
      b(GENAI_LANGCHAIN, 'reference', 'The persistence and memory sections'),
    ],
    checkpoints: [
      'I can kill the process mid-run and resume exactly where it stopped',
      'The approval gate cannot be bypassed by a retry',
      'I can inspect persisted state and explain every key in it',
      'I know which actions in my domain must never be autonomous',
    ],
  },
  9: {
    primary: r('Embeddings — guide', 'OpenAI', 'https://platform.openai.com/docs/guides/embeddings', 'docs'),
    support: [
      r('Qdrant Academy — embeddings & distance metrics', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
      r('Chroma — getting started', 'Chroma', 'https://docs.trychroma.com/getting-started', 'docs'),
      r('What Are Embeddings? (free book)', 'Vicki Boykis', 'https://vickiboykis.com/what_are_embeddings/', 'article'),
    ],
    build: {
      title: 'Semantic search over the policy corpus',
      input: 'Week 6 chunks',
      output: 'A local Chroma collection + a query function returning ranked results with cosine scores you can eyeball',
    },
    books: [
      b(HANDS_ON_LLM, 'recommended', 'The embeddings and semantic search chapters'),
      b(LLM_HANDBOOK, 'reference', 'Ch 4 — the RAG feature pipeline'),
    ],
    checkpoints: [
      'I can explain embedding → cosine similarity → vector search end to end',
      'I know the dimensionality of my model and what that costs to store',
      'I found a query where keyword search wins and can say why',
      'Re-embedding with a different model is a config change, not a rewrite',
    ],
  },
  10: {
    primary: r('Qdrant Academy — vector search in production', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
    support: [
      r('Qdrant quickstart', 'Qdrant', 'https://qdrant.tech/documentation/quickstart/', 'docs'),
      r('Payload filtering — concepts', 'Qdrant', 'https://qdrant.tech/documentation/concepts/filtering/', 'docs'),
      r('Docker — get started', 'Docker', 'https://docs.docker.com/get-started/', 'docs'),
    ],
    build: {
      title: 'Vector search API with metadata filters',
      input: 'The same chunks, now with payload fields (department, effective date, document type)',
      output: 'Qdrant in Docker + a FastAPI search endpoint where filters and vector similarity combine in one query',
    },
    books: [
      b(HANDS_ON_LLM, 'reference', 'The vector database sections'),
      b(LLM_HANDBOOK, 'reference', 'Ch 4 — feature pipeline against a real vector store'),
    ],
    checkpoints: [
      'I can explain why payload indexes matter once the collection is large',
      'A filtered query returns only in-scope documents — I tested the negative case',
      'My collection survives a container restart',
      'I can state when Chroma is enough and when Qdrant earns its complexity',
    ],
  },
  11: {
    primary: r('Qdrant Academy — hybrid & sparse search', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
    support: [
      r('Hybrid queries (dense + sparse)', 'Qdrant', 'https://qdrant.tech/documentation/concepts/hybrid-queries/', 'docs'),
      r('Getting started with hybrid search', 'Pinecone', 'https://www.pinecone.io/learn/hybrid-search-intro/', 'article'),
      r('Rerank — improve search relevance', 'Cohere', 'https://cohere.com/rerank', 'tool'),
    ],
    build: {
      title: 'BM25 + dense retrieval with a re-ranking layer',
      input: 'Queries that pure vector search gets wrong (codes, IDs, exact policy names)',
      output: 'One pipeline fusing sparse and dense results, re-ranked down to the top 3, with before/after examples',
    },
    books: [
      b(GENAI_LANGCHAIN, 'recommended', 'Ch 4 — intelligent RAG systems'),
      b(AI_ENGINEERING, 'reference', 'The retrieval section — hybrid search trade-offs'),
    ],
    checkpoints: [
      'I have a query that only BM25 gets right and one that only dense gets right',
      'I can explain how my fusion scores combine, not just that they do',
      'I know the latency cost of the re-ranker at my top-k',
      'Top 3 results are consistently the ones I would have picked by hand',
    ],
  },
  12: {
    primary: r('Retrieval — concepts deep dive', 'LangChain', 'https://python.langchain.com/docs/concepts/retrieval/', 'docs'),
    support: [
      r('Parent document retriever — how-to', 'LangChain', 'https://python.langchain.com/docs/how_to/parent_document_retriever/', 'docs'),
      r('Introducing contextual retrieval', 'Anthropic', 'https://www.anthropic.com/news/contextual-retrieval', 'article'),
      r('Qdrant Academy — retrieval system design', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
    ],
    build: {
      title: 'Parent-child retrieval over the policy corpus',
      input: 'Small child chunks for matching, larger parent sections for context',
      output: 'Search matches children, answers cite parents — with a comparison against flat chunking on the same questions',
    },
    books: [
      b(LLM_HANDBOOK, 'recommended', 'Ch 9 — the RAG inference pipeline'),
      b(HANDS_ON_LLM, 'reference', 'The RAG chapter — context assembly'),
    ],
    checkpoints: [
      'I can explain the child-matches / parent-returns split to a non-engineer',
      'Answers stopped being truncated mid-policy',
      'I can show one question this fixed that Week 11 got wrong',
      'Context assembly has a token budget I control',
    ],
  },
  13: {
    primary: r('RAGAS — evaluation documentation', 'ragas.io', 'https://docs.ragas.io/', 'docs'),
    support: [
      r('Langfuse — tracing & evaluation', 'langfuse.com', 'https://langfuse.com/docs/observability/overview', 'docs'),
      r('Guardrails AI — documentation', 'guardrailsai.com', 'https://www.guardrailsai.com/docs', 'docs'),
      r('OWASP Top 10 for LLM Applications', 'OWASP', 'https://genai.owasp.org/llm-top-10/', 'article'),
    ],
    build: {
      title: 'RAG benchmark with a hallucination gate',
      input: '40–60 question/ground-truth pairs over your policy corpus',
      output: 'RAGAS faithfulness / answer-relevancy / context-precision scores, an LLM-as-judge hallucination check, and input validation that blocks injection attempts',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The evaluation chapters — treat as the reference for this week'),
      b(LLM_HANDBOOK, 'reference', 'The evaluation sections of the RAG pipeline chapters'),
    ],
    checkpoints: [
      'I can score a change instead of arguing about it',
      'I know what faithfulness measures and how it differs from relevancy',
      'A prompt-injection string in a document does not reach my tools',
      'The benchmark runs on demand in under a few minutes',
    ],
  },
};

// GenAI weeks 14–25 — agents, MCP, automation, deployment, LLMOps, fine-tuning.
const GENAI_WEEKS_14_25: Record<number, WeekSupport> = {
  14: {
    primary: r('ReAct: Synergizing Reasoning and Acting in Language Models', 'Yao et al. · arXiv', 'https://arxiv.org/abs/2210.03629', 'article'),
    support: [
      r('Building Effective Agents', 'Anthropic', 'https://www.anthropic.com/research/building-effective-agents', 'article'),
      r('Tool use (function calling)', 'Anthropic', 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use', 'docs'),
      r('AI Agents course — introduction', 'Hugging Face', 'https://huggingface.co/learn/agents-course', 'course'),
    ],
    build: {
      title: 'A ReAct loop with no framework at all',
      input: 'Two tools (a search and a calculator or DB lookup) + a question needing both',
      output: 'Your own while-loop: reason → tool call → observation → repeat, with parsing, error handling and a hard stop',
    },
    books: [
      b(AGENTS_30, 'recommended', 'The foundational agent chapters — build before you import'),
      b(AGENTIC_AI, 'reference', 'The agent architecture chapters'),
      b(AI_ENGINEERING, 'reference', 'The agents chapter — failure modes to design against'),
    ],
    checkpoints: [
      'I wrote the loop myself and can explain every line of it',
      'I handle a malformed tool call without crashing the run',
      'My loop stops on success, on budget, and on repeated failure',
      'Frameworks now look like conveniences, not magic',
    ],
  },
  15: {
    primary: r('CrewAI — documentation', 'crewai.com', 'https://docs.crewai.com/introduction', 'docs'),
    support: [
      r('AI Agents course — multi-agent & tools', 'Hugging Face', 'https://huggingface.co/learn/agents-course', 'course'),
      r('Multi-agent collaboration', 'LangGraph', 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/', 'docs'),
      r('Building Effective Agents — when not to multi-agent', 'Anthropic', 'https://www.anthropic.com/research/building-effective-agents', 'article'),
    ],
    build: {
      title: 'A crew that produces one artifact',
      input: 'A task with genuinely separable roles (research → draft → review)',
      output: 'Sequential agents sharing context, producing a single reviewed document — with the single-agent baseline measured alongside',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'The multi-agent collaboration chapters'),
      b(AGENTS_30, 'reference', 'The crew-style builds, for role and task boundaries'),
    ],
    checkpoints: [
      'I can show what the multi-agent split bought over one agent',
      'Each agent has a narrow role and only the tools it needs',
      'Context passed between agents is explicit, not implied',
      'I know what this costs in tokens and latency versus the baseline',
    ],
  },
  16: {
    primary: r('Semantic Kernel — overview', 'Microsoft Learn', 'https://learn.microsoft.com/en-us/semantic-kernel/overview/', 'docs'),
    support: [
      r('Agent orchestration patterns', 'Microsoft Learn', 'https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/', 'docs'),
      r('semantic-kernel — source & samples', 'GitHub', 'https://github.com/microsoft/semantic-kernel', 'repo'),
      r('Building Effective Agents (pattern reference)', 'Anthropic', 'https://www.anthropic.com/research/building-effective-agents', 'article'),
    ],
    build: {
      title: 'A C# agent your existing stack could actually host',
      input: 'A .NET project with a database repository',
      output: 'Native SK plugins wrapping typed database queries, invoked by an agent loop, wired through dependency injection',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'The orchestration chapters — learn the patterns, the API will move'),
      b(AI_ENGINEERING, 'reference', 'The agents chapter, read against the SK equivalents'),
    ],
    checkpoints: [
      'I can map SK concepts onto the LangGraph ones I already know',
      'My plugin functions are typed and unit-testable without the LLM',
      'I know which orchestration features are still experimental',
      'This is genuinely deployable inside a .NET shop I have worked in',
    ],
  },
  17: {
    primary: r('Introduction to LangGraph — supervisor & subgraphs', 'LangChain Academy', 'https://academy.langchain.com/courses/intro-to-langgraph', 'course'),
    support: [
      r('Multi-agent supervisor pattern', 'LangGraph', 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/agent_supervisor/', 'docs'),
      r('Subgraphs & parallelization', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/low_level/', 'docs'),
      r('OWASP Top 10 for LLM Applications', 'OWASP', 'https://genai.owasp.org/llm-top-10/', 'article'),
    ],
    build: {
      title: 'Supervisor routing to specialist workers, with output guardrails',
      input: 'Mixed queries: policy lookup, data question, action request',
      output: 'A router graph delegating to the right worker, plus an output filter that blocks data leaks before the response ships',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'The supervisor/delegation and trust chapters'),
      b(AGENTS_30, 'reference', 'The routing agent builds'),
      b(AI_ENGINEERING, 'reference', 'Keep open at the agent-architecture section'),
    ],
    checkpoints: [
      'Routing decisions are logged and I can audit why each query went where',
      'A worker cannot reach a tool outside its remit',
      'My output guardrail catches a deliberately planted leak in testing',
      'Adding a new specialist is a node, not a rewrite',
    ],
  },
  18: {
    primary: r('Model Context Protocol — specification & concepts', 'modelcontextprotocol.io', 'https://modelcontextprotocol.io/introduction', 'docs'),
    support: [
      r('The 2026-07-28 specification release', 'MCP Blog', 'https://blog.modelcontextprotocol.io/posts/2026-07-28/', 'article'),
      r('Python SDK', 'GitHub', 'https://github.com/modelcontextprotocol/python-sdk', 'repo'),
      r('Example servers', 'GitHub', 'https://github.com/modelcontextprotocol/servers', 'repo'),
    ],
    build: {
      title: 'Your first MCP server, over stdio',
      input: 'Three tools over synthetic clinical data: search_policy, get_patient_visits, check_claim_status',
      output: 'A stdio MCP server registered with a desktop client, answering real tool calls',
    },
    books: [
      b(MCP_SPEC, 'recommended', 'Read the current spec — 2024/2025 tutorials describe a different protocol'),
      b(AGENTIC_AI, 'reference', 'The tool-interface chapters'),
    ],
    checkpoints: [
      'I can describe MCP’s JSON-RPC message flow without the docs open',
      'My server works from a client I did not write',
      'Tool schemas are precise enough that the model calls them correctly first try',
      'I read the current spec, including what changed in the latest release',
    ],
  },
  19: {
    primary: r('MCP — transports & server development', 'modelcontextprotocol.io', 'https://modelcontextprotocol.io/introduction', 'docs'),
    support: [
      r('Python SDK — streamable HTTP & SSE', 'GitHub', 'https://github.com/modelcontextprotocol/python-sdk', 'repo'),
      r('SQL injection prevention cheat sheet', 'OWASP', 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html', 'article'),
      r('SQLAlchemy — querying with parameters', 'sqlalchemy.org', 'https://docs.sqlalchemy.org/en/20/tutorial/', 'docs'),
    ],
    build: {
      title: 'Database-backed MCP server over HTTP',
      input: 'A mock hospital schema (patients, visits, labs, claims) — synthetic data only',
      output: 'Remote MCP server with parameterized queries, per-tool scopes, and no free-text SQL reaching the database',
    },
    books: [
      b(MCP_SPEC, 'recommended', 'The transport and authorization sections'),
      b(LLM_HANDBOOK, 'reference', 'The serving chapters, for the HTTP side'),
    ],
    checkpoints: [
      'No tool concatenates model output into SQL',
      'Each tool returns the minimum fields its purpose needs',
      'I tested a hostile input against every tool',
      'The server runs remotely, not only on my laptop',
    ],
  },
  20: {
    primary: r('n8n — documentation', 'docs.n8n.io', 'https://docs.n8n.io/', 'docs'),
    support: [
      r('n8n — self-hosting with Docker', 'docs.n8n.io', 'https://docs.n8n.io/hosting/', 'docs'),
      r('Webhook node', 'docs.n8n.io', 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/', 'docs'),
      r('AI & LangChain nodes in n8n', 'docs.n8n.io', 'https://docs.n8n.io/advanced-ai/', 'docs'),
    ],
    build: {
      title: 'A hospital workflow that runs without you',
      input: 'An inbox or webhook feed of documents (invoices, referrals, authorizations)',
      output: 'Self-hosted n8n flow: trigger → classify with an LLM → route → write to a system of record, with a failure branch',
    },
    books: [
      b(AGENTS_30, 'reference', 'The automation-oriented agent chapters'),
      b(AI_ENGINEERING, 'reference', 'The chapter on where deterministic plumbing beats an agent'),
    ],
    checkpoints: [
      'The workflow survives a malformed input without dying silently',
      'I can explain which steps are deterministic and which are model calls',
      'Credentials live in n8n’s credential store, not in nodes',
      'I can point at hours per week this would actually save',
    ],
  },
  21: {
    primary: r('Speech to text & text to speech', 'OpenAI', 'https://platform.openai.com/docs/guides/speech-to-text', 'docs'),
    support: [
      r('openai/whisper — speech recognition', 'GitHub', 'https://github.com/openai/whisper', 'repo'),
      r('ElevenLabs — text to speech docs', 'ElevenLabs', 'https://elevenlabs.io/docs', 'docs'),
      r('Pipecat — real-time voice pipelines', 'GitHub', 'https://github.com/pipecat-ai/pipecat', 'repo'),
    ],
    build: {
      title: 'Voice agent end to end',
      input: 'Microphone audio asking a clinical or policy question',
      output: 'Audio → transcript → RAG answer → speech, with latency measured at each hop',
    },
    books: [
      b(AGENTS_30, 'recommended', 'Ch 11 — multi-modal perception agents'),
      b(HANDS_ON_LLM, 'reference', 'The multimodal sections'),
    ],
    checkpoints: [
      'I know where my latency actually goes — transcription, model or speech',
      'The pipeline handles silence, noise and a mid-sentence cut-off',
      'Transcripts are logged without storing raw audio I do not need',
      'I can defend whether voice adds value here or is a demo',
    ],
  },
  22: {
    primary: r('Docker — multi-stage builds', 'Docker', 'https://docs.docker.com/build/building/multi-stage/', 'docs'),
    support: [
      r('FastAPI in containers', 'FastAPI', 'https://fastapi.tiangolo.com/deployment/docker/', 'docs'),
      r('Amazon ECS — getting started', 'AWS', 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started.html', 'docs'),
      r('Amazon ECR — pushing an image', 'AWS', 'https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html', 'docs'),
    ],
    build: {
      title: 'The whole stack, containerized and on Fargate',
      input: 'Your FastAPI service + Qdrant + the frontend',
      output: 'Multi-stage images pushed to ECR, running on ECS Fargate behind a load balancer, with health checks green',
    },
    books: [
      b(LLM_HANDBOOK, 'recommended', 'Ch 10 — deployment on AWS'),
      b(DMLS, 'reference', 'Ch 7 — deployment patterns and their costs'),
    ],
    checkpoints: [
      'My image is lean — no build toolchain in the final layer',
      'Secrets come from the environment or a secrets manager, never the image',
      'The service restarts cleanly and the health check proves it',
      'I know what this costs per month if I leave it running',
    ],
  },
  23: {
    primary: r('Next.js — official interactive course', 'Vercel', 'https://nextjs.org/learn', 'course'),
    support: [
      r('Supabase auth guide', 'Supabase', 'https://supabase.com/docs/guides/auth', 'docs'),
      r('AI SDK — streaming UI', 'Vercel', 'https://sdk.vercel.ai/docs', 'docs'),
      r('React — thinking in React', 'react.dev', 'https://react.dev/learn/thinking-in-react', 'docs'),
    ],
    build: {
      title: 'The SaaS shell around your assistant',
      input: 'Your deployed FastAPI endpoints',
      output: 'An authenticated UI streaming tokens live, with per-user history and a PDF export',
    },
    books: [
      b(LLM_HANDBOOK, 'reference', 'The end-to-end system chapters, for where the UI fits'),
      b(AI_ENGINEERING, 'reference', 'The product chapters — latency and UX of generative interfaces'),
    ],
    checkpoints: [
      'Auth actually gates the API, not just the page',
      'Streaming feels instant; I measured time-to-first-token',
      'A stranger can sign up and use it without instructions',
      'Errors surface as messages, not as a spinner that never stops',
    ],
  },
  24: {
    primary: r('Langfuse — observability & tracing', 'langfuse.com', 'https://langfuse.com/docs/observability/overview', 'docs'),
    support: [
      r('Langfuse — prompt management', 'langfuse.com', 'https://langfuse.com/docs/prompts/get-started', 'docs'),
      r('12-Factor Agents — production principles', 'GitHub', 'https://github.com/humanlayer/12factor-agents', 'repo'),
      r('Make a README — portfolio polish', 'makeareadme.com', 'https://www.makeareadme.com/', 'article'),
    ],
    build: {
      title: 'Instrument everything, then publish the portfolio',
      input: 'Every service you built across 24 weeks',
      output: 'Self-hosted Langfuse tracing retrieval, tool choice, tokens, cost and latency; prompts served from the registry; ten repos with real READMEs',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The observability and cost chapters — the reference for this week'),
      b(LLM_HANDBOOK, 'reference', 'Ch 8 & 11 — inference optimization and LLMOps'),
      b(DMLS, 'reference', 'Ch 8 — monitoring, translated to LLM systems'),
    ],
    checkpoints: [
      'I can answer "which documents were retrieved" for any past request',
      'Prompt changes are versioned outside the codebase',
      'I know my cost and p95 latency per endpoint',
      'Someone can judge my work from the READMEs alone',
    ],
  },
  25: {
    primary: r('Generative AI Engineering with LLMs (specialization)', 'IBM · Coursera', 'https://www.coursera.org/specializations/generative-ai-engineering-with-llms', 'course'),
    support: [
      r('How Transformer LLMs Work', 'DeepLearning.AI', 'https://www.deeplearning.ai/courses/how-transformer-llms-work/', 'course'),
      r('The Illustrated Transformer', 'Jay Alammar', 'https://jalammar.github.io/illustrated-transformer/', 'article'),
      r('PEFT — parameter-efficient fine-tuning', 'Hugging Face', 'https://huggingface.co/docs/peft', 'docs'),
      r('Illustrating RLHF', 'Hugging Face', 'https://huggingface.co/blog/rlhf', 'article'),
    ],
    build: {
      title: 'LoRA experiment + the fine-tune vs RAG argument',
      input: 'A small domain dataset (healthcare terminology, structured extraction)',
      output: 'A LoRA adapter evaluated against base + RAG on the same questions, and a written recommendation with numbers behind it',
    },
    books: [
      b(LLM_FROM_SCRATCH, 'recommended', 'Ch 2–3 & 6–7 — attention, then fine-tuning, with code'),
      b(LLM_HANDBOOK, 'reference', 'Ch 5–6 — SFT and preference alignment (DPO)'),
      b(LLMS_100_IMAGES, 'deepdive', 'Architecture, training and decoding, visually'),
    ],
    checkpoints: [
      'I can walk the full transformer path from tokenization to sampled token',
      'I fine-tuned a small model and can show its adapter size versus the base',
      'I can argue fine-tuning vs RAG for a specific case, with evidence',
      'I understand what RLHF/DPO change that SFT alone does not',
    ],
  },
};

export const GENAI_SUPPORT: Record<number, WeekSupport> = {
  ...GENAI_WEEKS_1_13,
  ...GENAI_WEEKS_14_25,
};

// ── Healthcare AI roadmap (/healthcare-ai-roadmap) ───────────────────────────
// Stanford course -> healthcare data -> FHIR -> terminology -> MIMIC/OMOP ->
// clinical NLP/RAG -> agents -> safety & governance -> portfolio.
// The specs are the primary references here; books frame them, not replace them.

const STANFORD_AI_HEALTH = 'https://www.coursera.org/specializations/ai-in-healthcare';

export const HEALTH_SUPPORT: Record<number, WeekSupport> = {
  301: {
    primary: r('Machine Learning Specialization (skim to audit, not re-watch)', 'Andrew Ng · DeepLearning.AI', ML_COURSE_1, 'course'),
    support: [
      r('Pipelines & ColumnTransformer', 'scikit-learn', 'https://scikit-learn.org/stable/modules/compose.html', 'docs'),
      r('MIMIC-IV clinical database demo', 'PhysioNet', 'https://physionet.org/content/mimic-iv-demo/2.2/', 'tool'),
      r('Hospital readmissions dataset', 'Kaggle', 'https://www.kaggle.com/datasets/dubradave/hospital-readmissions', 'tool'),
    ],
    build: {
      title: 'Readmission baseline + a written gap list',
      input: 'A public readmissions dataset',
      output: 'An honest baseline model with metrics, and a ranked list of your gaps against the ML and Post-ML trackers — two of them closed',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 2 — use the end-to-end checklist as your audit template'),
      b(ML_YEARNING, 'reference', 'The prioritization chapters — decide what to close first'),
    ],
    checkpoints: [
      'My gap list is written down and ranked, not a feeling',
      'The two highest-priority gaps are closed, with code to show it',
      'My baseline is reproducible from a clean checkout',
      'I can state which healthcare problems are tabular, not LLM, problems',
    ],
  },
  302: {
    primary: r('LLM Course — transformers, tokenization, fine-tuning', 'Hugging Face', 'https://huggingface.co/learn/llm-course/chapter0/1', 'course'),
    support: [
      r('Bio+Clinical BERT', 'Hugging Face', 'https://huggingface.co/emilyalsentzer/Bio_ClinicalBERT', 'repo'),
      r('PubMedQA dataset', 'Hugging Face', 'https://huggingface.co/datasets/qiaojin/PubMedQA', 'tool'),
      r('Tokenizers — training from memory', 'Hugging Face', 'https://huggingface.co/docs/tokenizers/training_from_memory', 'docs'),
    ],
    build: {
      title: 'Fine-tune one small model on clinical text',
      input: 'A public clinical or biomedical classification set',
      output: 'A fine-tuned Bio_ClinicalBERT beating a TF-IDF baseline, with the gap reported honestly',
    },
    books: [
      b(HANDS_ON_LLM, 'recommended', 'Ch 1–4 — tokens, embeddings and what fine-tuning moves'),
      b(NLP_TRANSFORMERS, 'reference', 'Ch 2 & 4 — text classification and NER'),
      b(LLM_FROM_SCRATCH, 'deepdive', 'Ch 2–3 — only if attention still feels like a black box'),
    ],
    checkpoints: [
      'I can explain embeddings, attention and fine-tuning trade-offs without notes',
      'I know why general-domain tokenizers struggle on clinical text',
      'My fine-tune is compared against a cheap baseline, not reported alone',
      'I can state when a domain model is worth its extra ops burden',
    ],
  },
  303: {
    primary: r('AI in Healthcare Specialization', 'Stanford · Coursera', STANFORD_AI_HEALTH, 'course'),
    support: [
      r('HL7 FHIR — developer resources', 'hl7.org', 'https://hl7.org/fhir/', 'docs'),
      r('HAPI FHIR — public test server', 'hapifhir.io', 'https://hapifhir.io/hapi-fhir/docs/server_plain.html', 'tool'),
      r('OMOP Common Data Model', 'OHDSI', 'https://ohdsi.github.io/CommonDataModel/', 'docs'),
    ],
    build: {
      title: 'A patient timeline assembled from FHIR',
      input: 'The public HAPI FHIR test server',
      output: 'Patient, Encounter, Observation, Condition and MedicationRequest pulled and joined into one chronological timeline',
    },
    books: [
      b(FHIR_SPEC, 'recommended', 'Patient, Encounter, Observation, Condition, Claim — make these core competency'),
      b(BIOMEDICAL_INFORMATICS, 'reference', 'The chapters on clinical data, workflow and decision support'),
      b(AI_REVOLUTION_MEDICINE, 'deepdive', 'For how clinicians describe the same systems you are integrating'),
    ],
    checkpoints: [
      'I can name the FHIR resources behind a routine clinical encounter',
      'I can describe the modern healthcare data stack: EHR, claims, labs, imaging',
      'I know where AI legitimately creates value — and where it is theatre',
      'I can explain FHIR vs OMOP: operational exchange vs analytical modelling',
    ],
  },
  304: {
    primary: r('AI in Healthcare — clinical data & NLP courses', 'Stanford · Coursera', STANFORD_AI_HEALTH, 'course'),
    support: [
      r('n2c2 / i2b2 shared tasks (clinical NLP)', 'Harvard DBMI', 'https://www.dbmi.hms.harvard.edu/research/project/n2c2-nlp/', 'article'),
      r('NegEx — negation detection in clinical text', 'PubMed', 'https://pubmed.ncbi.nlm.nih.gov/23461160/', 'article'),
      r('External validation of the Epic sepsis model', 'JAMA Internal Medicine', 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307', 'article'),
    ],
    build: {
      title: 'Clinical NLP pipeline that survives negation',
      input: 'Public clinical notes (MIMIC-IV demo or n2c2 sample)',
      output: 'Entity extraction with assertion status, evaluated on a held-out set — "no evidence of pneumonia" must not extract pneumonia',
    },
    books: [
      b(NLP_TRANSFORMERS, 'recommended', 'Ch 4 & 7 — named-entity recognition and question answering'),
      b(BIOMEDICAL_INFORMATICS, 'reference', 'The natural-language and terminology chapters'),
      b(HANDS_ON_LLM, 'reference', 'The extraction and classification chapters'),
    ],
    checkpoints: [
      'My pipeline handles negation, hedging and copy-forward text',
      'Every extraction carries a temporal anchor',
      'I evaluated against labelled data, not a handful of spot checks',
      'I can explain why AUROC alone would have shipped the Epic sepsis model',
    ],
  },
  305: {
    primary: r('Ethics & governance of AI for health', 'World Health Organization', 'https://www.who.int/publications/i/item/9789240037403', 'docs'),
    support: [
      r('Fairlearn — fairness assessment', 'fairlearn.org', 'https://fairlearn.org/main/quickstart.html', 'docs'),
      r('Dissecting racial bias in a health algorithm', 'Obermeyer et al. · Science', 'https://www.science.org/doi/10.1126/science.aax2342', 'article'),
      r('FDA — Digital Health Center of Excellence', 'fda.gov', 'https://www.fda.gov/medical-devices/digital-health-center-excellence', 'docs'),
      r('HIPAA Security Rule guidance', 'HHS', 'https://www.hhs.gov/hipaa/for-professionals/security/index.html', 'docs'),
    ],
    build: {
      title: 'Fairness audit + deployment risk document',
      input: 'Your Week 1 readmission model',
      output: 'Subgroup metrics across age/sex/payer, a SaMD vs non-SaMD classification with reasoning, and a risk doc covering the eleven-point checklist',
    },
    books: [
      b(WHO_LMM, 'recommended', 'The GenAI-specific guidance — read it before the first healthcare LLM project'),
      b(NIST_GENAI, 'reference', 'Use the profile as the engineering-side risk checklist'),
      b(DEEP_MEDICINE, 'deepdive', 'For the clinician-adoption half of the safety problem'),
    ],
    checkpoints: [
      'I can classify a project as SaMD or non-SaMD and defend the call',
      'My audit reports performance per subgroup, not just overall',
      'Every project now carries the checklist: privacy, security, bias, hallucination, oversight, auditability, provenance, evaluation, failure modes, access control, clinical responsibility',
      'I can explain why alert volume, not AUROC, decides deployment',
    ],
  },
  306: {
    primary: r('Qdrant Academy — retrieval system design', 'Qdrant', 'https://qdrant.tech/course/', 'course'),
    support: [
      r('Reciprocal rank fusion', 'Elastic', 'https://www.elastic.co/blog/reciprocal-rank-fusion', 'article'),
      r('RAGAS — evaluation documentation', 'ragas.io', 'https://docs.ragas.io/', 'docs'),
      r('Model Cards for Model Reporting', 'Mitchell et al. · arXiv', 'https://arxiv.org/abs/1810.03993', 'article'),
    ],
    build: {
      title: 'Hospital policy assistant, five iterations of one project',
      input: 'Synthetic hospital policies and procedures',
      output: 'V1 chunks→Chroma · V2 Qdrant + metadata filters · V3 BM25 + dense hybrid · V4 re-ranking + parent-child · V5 RAGAS scores, Langfuse traces and guardrails — each version measured against the last',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The RAG chapter — desk reference across all five iterations'),
      b(HANDS_ON_LLM, 'reference', 'The semantic search and RAG chapters'),
      b(FHIR_SPEC, 'reference', 'Where policy answers must reference real clinical objects'),
    ],
    checkpoints: [
      'Every answer carries an inline citation to a retrievable source',
      'I can show the score improvement from each version to the next',
      'An uncited or low-confidence answer says so instead of guessing',
      'The feedback button writes somewhere I actually read',
    ],
  },
  307: {
    primary: r('DuckDB — documentation', 'duckdb.org', 'https://duckdb.org/docs/', 'docs'),
    support: [
      r('Spider — text-to-SQL benchmark', 'Yale LILY', 'https://yale-lily.github.io/spider', 'article'),
      r('OMOP Common Data Model', 'OHDSI', 'https://ohdsi.github.io/CommonDataModel/', 'docs'),
      r('SQL injection prevention cheat sheet', 'OWASP', 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html', 'article'),
    ],
    build: {
      title: 'Operations analytics assistant over a synthetic warehouse',
      input: 'A star schema of synthetic hospital ops data (admissions, LOS, occupancy, no-shows)',
      output: 'Natural-language questions → validated SQL → results → a trend narrative, with every generated query shown and checked before execution',
    },
    books: [
      b(DMLS, 'recommended', 'Ch 3 — data engineering fundamentals behind the warehouse'),
      b(OMOP_CDM, 'reference', 'Model the schema the way analysts actually standardize it'),
      b(AI_ENGINEERING, 'reference', 'The structured-output and tool-use sections'),
    ],
    checkpoints: [
      'Generated SQL is validated and read-only before it runs',
      'The assistant refuses questions its schema cannot answer',
      'Numbers in the narrative match the numbers in the result set',
      'This visibly draws on my hospital ERP experience, not a generic demo',
    ],
  },
  308: {
    primary: r('Human-in-the-loop — concepts', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', 'docs'),
    support: [
      r('Building Effective Agents', 'Anthropic', 'https://www.anthropic.com/research/building-effective-agents', 'article'),
      r('Model Context Protocol — specification', 'modelcontextprotocol.io', 'https://modelcontextprotocol.io/introduction', 'docs'),
      r('Persistence & checkpointers', 'LangGraph', 'https://langchain-ai.github.io/langgraph/concepts/persistence/', 'docs'),
    ],
    build: {
      title: 'Workflow agent that drafts, then waits',
      input: 'A real hospital workflow artifact (referral letter, prior-auth packet, discharge summary draft)',
      output: 'An agent drafting via FHIR/MCP tools, routing to human approval, and logging every decision to an immutable audit trail',
    },
    books: [
      b(AGENTIC_AI, 'recommended', 'Ch 8 — building trust, approval gates, escalation'),
      b(FHIR_SPEC, 'reference', 'ServiceRequest, MedicationRequest, Coverage — the artifacts you are drafting'),
      b(AI_ENGINEERING, 'reference', 'The agents chapter, read for failure modes'),
    ],
    checkpoints: [
      'No consequential action happens without a named human approving it',
      'The audit log records input, tool calls, draft, approver and timestamp',
      'Autonomy level is an explicit setting, documented per action',
      'I can replay any run from the log for a reviewer',
    ],
  },
  309: {
    primary: r('XGBoost — documentation', 'xgboost.readthedocs.io', 'https://xgboost.readthedocs.io/en/stable/', 'docs'),
    support: [
      r('TimeSeriesSplit — cross-validation for time', 'scikit-learn', 'https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split', 'docs'),
      r('Evidently — data drift monitoring', 'evidentlyai.com', 'https://docs.evidentlyai.com/', 'docs'),
      r('MIMIC-IV clinical database', 'PhysioNet', 'https://physionet.org/content/mimiciv/3.1/', 'tool'),
    ],
    build: {
      title: 'Patient flow forecasting service',
      input: 'Synthetic or public ED arrivals, appointments and no-show history',
      output: 'A deployed service predicting ED demand and no-show risk, cross-validated on time (never randomly), with drift monitoring live',
    },
    books: [
      b(HANDS_ON_ML, 'recommended', 'Ch 6–7 — trees and gradient boosting, where tabular problems are won'),
      b(ISLP, 'reference', 'Ch 8 — tree-based methods'),
      b(DMLS, 'reference', 'Ch 8 — distribution shift, which is what seasonality looks like'),
    ],
    checkpoints: [
      'My validation respects time — no future rows leak into training',
      'I report the metric operations actually care about, at a usable threshold',
      'Drift monitoring is live and I know what it would take to retrain',
      'I can explain why this is deliberately not an LLM problem',
    ],
  },
  310: {
    primary: r('RAGAS — evaluation documentation', 'ragas.io', 'https://docs.ragas.io/', 'docs'),
    support: [
      r('Langfuse — observability & evals', 'langfuse.com', 'https://langfuse.com/docs/observability/overview', 'docs'),
      r('LangSmith — evaluation', 'docs.smith.langchain.com', 'https://docs.smith.langchain.com/evaluation', 'docs'),
      r('Model Cards for Model Reporting', 'Mitchell et al. · arXiv', 'https://arxiv.org/abs/1810.03993', 'article'),
    ],
    build: {
      title: 'The platform that grades the other four projects',
      input: 'Versioned eval sets for the RAG, analytics, agent and forecasting services',
      output: 'Scheduled evaluation runs publishing a public quality dashboard, with a model card per project',
    },
    books: [
      b(AI_ENGINEERING, 'recommended', 'The evaluation chapters — methodology first, tooling second'),
      b(DMLS, 'reference', 'Ch 6 & 8 — offline evaluation and ongoing monitoring'),
    ],
    checkpoints: [
      'Every project has an eval set under version control',
      'Evals run on a schedule without me starting them',
      'The dashboard shows quality over time, not a single snapshot',
      'Each model card states intended use, limits and failure modes',
    ],
  },
  311: {
    primary: r('OWASP Top 10 for LLM Applications', 'OWASP', 'https://genai.owasp.org/llm-top-10/', 'article'),
    support: [
      r('HIPAA de-identification guidance', 'HHS', 'https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html', 'docs'),
      r('HIPAA Security Rule guidance', 'HHS', 'https://www.hhs.gov/hipaa/for-professionals/security/index.html', 'docs'),
      r('Langfuse — production observability', 'langfuse.com', 'https://langfuse.com/docs', 'docs'),
    ],
    build: {
      title: 'Harden all four services',
      input: 'The portfolio as it stands',
      output: 'Authentication, PHI-safe logging (nothing sensitive in traces), immutable audit trails, rate limits and live monitoring dashboards on every service',
    },
    books: [
      b(NIST_GENAI, 'recommended', 'Work the GenAI profile as a hardening checklist'),
      b(WHO_AI_HEALTH, 'reference', 'Accountability and oversight requirements to design to'),
      b(SRE_BOOK, 'reference', 'The monitoring and incident-response chapters'),
    ],
    checkpoints: [
      'No PHI or secret reaches logs, traces or an LLM provider without a basis',
      'Every endpoint is authenticated and rate-limited',
      'Audit trails are append-only and queryable',
      'I can show a dashboard proving each service is alive and behaving',
    ],
  },
  312: {
    primary: r('Model Cards for Model Reporting', 'Mitchell et al. · arXiv', 'https://arxiv.org/abs/1810.03993', 'article'),
    support: [
      r('Postmortem culture: learning from failure', 'Google SRE', 'https://sre.google/sre-book/postmortem-culture/', 'article'),
      r('Make a README', 'makeareadme.com', 'https://www.makeareadme.com/', 'article'),
      r('Ethics & governance of AI for health — LMM guidance', 'World Health Organization', 'https://www.who.int/publications/i/item/9789240084759', 'docs'),
    ],
    build: {
      title: 'The defense',
      input: 'Twelve weeks of systems',
      output: 'A recorded 15-minute walkthrough defending every design decision, a positioning one-pager, and the next 90 days planned',
    },
    books: [
      b(AI_REVOLUTION_MEDICINE, 'reference', 'Borrow its framing for explaining your work to clinical stakeholders'),
      b(DEEP_MEDICINE, 'reference', 'The adoption argument your positioning rests on'),
      b(BIOMEDICAL_INFORMATICS, 'deepdive', 'Keep it as the long-term reference for the field you are entering'),
    ],
    checkpoints: [
      'I can defend every architectural decision on camera, unedited',
      'The one-pager says clinical/insurance systems → standardized data → retrieval → LLM → agents → production, not "AI developer"',
      'I wrote the honest retrospective, including what I would not build again',
      'The next 90 days are planned with dates, not intentions',
    ],
  },
};
