# Post-ML Roadmap Additions (2026 AI Engineer Track)

## Purpose

This section extends the ML roadmap for 2026. The goal is not only to
learn machine learning theory, but to become an engineer who can build,
evaluate, deploy, and improve modern AI systems.

The target profile:

> Software engineer + ML foundations + LLM systems + production AI
> skills

------------------------------------------------------------------------

# Missing Topics To Add After the ML Roadmap

## 1. ML Evaluation and Experimentation (HIGH PRIORITY)

Modern AI engineering is increasingly about measuring whether systems
work.

Learn:

-   Train/validation/test methodology
-   Experiment tracking
-   Error analysis
-   Data leakage detection
-   Model comparison
-   Evaluation datasets
-   A/B testing concepts
-   LLM evaluation:
    -   Retrieval evaluation
    -   Hallucination measurement
    -   Response quality evaluation
    -   Human evaluation workflows

Suggested tools:

-   MLflow
-   Weights & Biases
-   LangSmith
-   OpenAI Evals style frameworks

Project:

Build an evaluation pipeline comparing multiple models on the same task.

------------------------------------------------------------------------

## 2. Data Engineering Fundamentals (HIGH PRIORITY)

AI systems depend heavily on data quality.

Learn:

-   SQL
-   Data cleaning
-   ETL pipelines
-   Data validation
-   Data storage
-   APIs as data sources
-   Batch vs streaming data

Useful technologies:

-   PostgreSQL
-   DuckDB
-   Pandas/Polars
-   Airflow basics

Project:

Create a data pipeline that prepares data for an ML or LLM application.

------------------------------------------------------------------------

## 3. MLOps and LLMOps (HIGH PRIORITY)

Move from notebooks to production.

Learn:

-   Model serving
-   Deployment patterns
-   Monitoring
-   Logging
-   Versioning
-   Latency optimization
-   Cost optimization
-   Model rollback strategies

Tools:

-   Docker
-   FastAPI
-   Kubernetes basics
-   MLflow
-   Cloud deployment

Project:

Deploy an ML model and an LLM application with monitoring.

------------------------------------------------------------------------

## 4. Transformer and LLM Internals (IMPORTANT)

Understand what happens inside modern AI models.

Learn:

-   Tokenization
-   Embeddings
-   Attention mechanism
-   Self-attention
-   Transformer blocks
-   Positional encoding
-   Pretraining
-   Instruction tuning
-   Fine-tuning
-   LoRA / PEFT

Do not focus on training huge models from scratch.

Focus on understanding and adapting models.

------------------------------------------------------------------------

## 5. Retrieval Augmented Generation (RAG) Engineering

Learn:

-   Document processing
-   Chunking strategies
-   Embedding models
-   Vector databases
-   Hybrid search
-   Re-ranking
-   Retrieval evaluation

Tools:

-   FAISS
-   Qdrant
-   Weaviate
-   Elasticsearch

Project:

Build a production-quality knowledge assistant with evaluation.

------------------------------------------------------------------------

## 6. AI Agents and Tool Use

Learn:

-   Agent architecture
-   Planning
-   Tool calling
-   Memory systems
-   Workflow design
-   Multi-agent patterns
-   Human-in-the-loop systems
-   Agent security

Tools:

-   LangGraph
-   MCP
-   OpenAI Agents SDK concepts

Project:

Build an agent that completes a real workflow using external tools.

------------------------------------------------------------------------

# Recommended 2026 Learning Order

## Phase 1 (Months 1-2): Foundations

Focus:

-   Python
-   NumPy
-   Pandas
-   SQL
-   Statistics
-   Linear algebra basics
-   Classical ML
-   Model evaluation

Projects:

-   Classification API
-   Regression project

------------------------------------------------------------------------

## Phase 2 (Months 3-4): Deep Learning

Focus:

-   PyTorch
-   Neural networks
-   Backpropagation intuition
-   Embeddings
-   CNN basics
-   Transformers

Projects:

-   Text classifier
-   Neural network project

------------------------------------------------------------------------

## Phase 3 (Months 5-7): Generative AI Engineering

Focus:

-   LLM APIs
-   Prompt engineering
-   Structured outputs
-   RAG
-   Vector databases
-   Agents
-   MCP
-   Evaluation

Projects:

-   RAG assistant
-   AI agent workflow

------------------------------------------------------------------------

## Phase 4 (Months 8+): Production AI

Focus:

-   Deployment
-   MLOps
-   LLMOps
-   Monitoring
-   Scaling
-   Security
-   Cost optimization

Projects:

-   Production AI application

------------------------------------------------------------------------

# What To Reduce or Skip

## Skip or Reduce:

### 1. Excessive Mathematical Proofs

Learn intuition and application.

Skip:

-   Long proofs of algorithms
-   Advanced derivations unless needed

------------------------------------------------------------------------

### 2. Implementing Every ML Algorithm From Scratch

Do not spend months rebuilding algorithms.

Implement:

-   Linear regression once
-   Neural network once
-   Backpropagation once

Then focus on using and evaluating models.

------------------------------------------------------------------------

### 3. Too Much Classical ML

Do not spend excessive time on:

-   SVM kernel mathematics
-   Rare algorithms
-   Algorithm memorization

Learn the concepts and move forward.

------------------------------------------------------------------------

### 4. Kaggle Optimization

Kaggle is useful, but production AI skills have higher value.

Prefer:

-   Real datasets
-   APIs
-   Deployment
-   User-facing projects

------------------------------------------------------------------------

# Coursera Machine Learning Specialization (Andrew Ng) Recommendation

The specialization is still valuable, but do not treat it as the entire
ML journey.

Recommended:

## Complete:

-   Supervised learning fundamentals
-   Regression
-   Classification
-   Neural network basics
-   Model evaluation
-   Bias/variance
-   Regularization
-   Decision trees

## Move faster through:

-   Repetitive exercises
-   Basic programming assignments after concepts are understood

## Do not over-invest in:

-   Memorizing formulas
-   Becoming an expert in every classical algorithm

After completing the specialization, immediately move into:

1.  PyTorch
2.  Transformers
3.  LLM engineering
4.  AI systems deployment

------------------------------------------------------------------------

# Final Skill Profile

By the end, the goal is:

"I can understand ML models, build AI applications, evaluate their
quality, and deploy reliable AI systems."

Not:

"I only know how to call an AI API."
