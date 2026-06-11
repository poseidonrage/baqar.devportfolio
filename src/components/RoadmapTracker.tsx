import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Compass,
  TrendingUp,
  Calendar,
  Search,
  Check,
  AlertCircle,
  Lock,
  LogOut,
  X,
  Sun,
  Moon,
  Code,
  Wrench,
  CheckSquare,
  Sparkles,
  PlayCircle,
  FileText,
  GraduationCap,
  FolderGit2,
  ArrowUpRight
} from 'lucide-react';
import curriculumData from '../data/curriculum.json';

interface Task {
  id: string;
  day_id: number;
  task_num: number;
  content: string;
}

interface Day {
  id: number;
  week_id: number;
  day_name: string;
  hours: string;
  type: string;
  tasks: Task[];
}

interface Week {
  id: number;
  month_id: number;
  week_number: number;
  title: string;
  focus_hours: string;
  csharp_mindset: string;
  weekly_goal: string;
  days: Day[];
}

interface Month {
  id: number;
  title: string;
  weeks_range: string;
  hours: string;
  badge_text: string;
  weeks: Week[];
}

interface JournalEntry {
  weekId: string;
  learned: string;
  difficulties: string;
  notes: string;
}

const glossaryItems = [
  {
    csharp: "async / await",
    python: "async / await",
    category: "advanced",
    desc: "Both support asynchronous programming with identical keywords. C# returns Task or Task<T>, whereas Python returns a coroutine object.",
    csharpCode: `// C# Async Method
public async Task<string> FetchDataAsync() {
    await Task.Delay(1000);
    return "Data Fetched";
}`,
    pythonCode: `# Python Async Function
import asyncio

async def fetch_data_async():
    await asyncio.sleep(1)
    return "Data Fetched"`
  },
  {
    csharp: "List<T>",
    python: "list",
    category: "collections",
    desc: "Dynamically sized arrays. C# is strongly-typed, whereas Python lists can hold heterogeneous elements.",
    csharpCode: `// C# Strongly Typed List
var list = new List<string> { "a", "b" };
list.Add("c");
string first = list[0];`,
    pythonCode: `# Python Dynamic List
list_items = ["a", "b"]
list_items.append("c")
first = list_items[0]`
  },
  {
    csharp: "Dictionary<TKey, TValue>",
    python: "dict",
    category: "collections",
    desc: "Key-value pair collections. Written in Python with curly braces. Dictionaries preserve insertion order in modern Python.",
    csharpCode: `// C# Dictionary
var dict = new Dictionary<string, int> {
    { "key", 1 }
};
dict["key"] = 2;`,
    pythonCode: `# Python Dictionary
my_dict = {
    "key": 1
}
my_dict["key"] = 2`
  },
  {
    csharp: "interface",
    python: "ABC / typing.Protocol",
    category: "oop",
    desc: "C# uses explicit interfaces. Python uses Duck Typing naturally, but can enforce contract validation using Abstract Base Classes (ABC) or Protocol.",
    csharpCode: `// C# Interface & Implementation
public interface IService {
    void Execute();
}
public class Service : IService {
    public void Execute() {}
}`,
    pythonCode: `# Python Protocol (Structural Subtyping)
from typing import Protocol

class Service(Protocol):
    def execute(self) -> None:
        ...`
  },
  {
    csharp: "namespace",
    python: "module / package",
    category: "oop",
    desc: "C# organizes code with namespace scopes. Python uses files (modules) and folders with __init__.py (packages) to construct paths.",
    csharpCode: `// C# Namespace
namespace MyApp.Services {
    public class Processor {}
}`,
    pythonCode: `# Python Module (my_app/services.py)
# Usage: from my_app.services import Processor
class Processor:
    pass`
  },
  {
    csharp: "Console.WriteLine()",
    python: "print()",
    category: "basics",
    desc: "Prints output to console. Python print() automatically appends a newline unless configured otherwise.",
    csharpCode: `// C# Console Output
Console.WriteLine($"Value: {val}");`,
    pythonCode: `# Python Print Output
print(f"Value: {val}")`
  },
  {
    csharp: "class / constructor",
    python: "class / __init__(self)",
    category: "oop",
    desc: "C# uses class name as constructor. Python uses the special method __init__ with explicit 'self' as the first parameter.",
    csharpCode: `// C# Class
public class User {
    public string Name { get; set; }
    public User(string name) {
        Name = name;
    }
}`,
    pythonCode: `# Python Class
class User:
    def __init__(self, name: str):
        self.name = name`
  },
  {
    csharp: "null",
    python: "None",
    category: "basics",
    desc: "Represents the absence of value. Python uses the singleton object None instead of null.",
    csharpCode: `// C# Null Check
User user = null;
if (user == null) {
    // handle null
}`,
    pythonCode: `# Python None Check
user = None
if user is None:
    # handle None
    pass`
  },
  {
    csharp: "var",
    python: "(implicitly typed)",
    category: "basics",
    desc: "C# uses var for local type inference. Python is dynamically typed by default, meaning variables can change types at runtime.",
    csharpCode: `// C# var
var age = 25;
var name = "Baqar";`,
    pythonCode: `# Python Implicit
age = 25
name = "Baqar"`
  },
  {
    csharp: "linq (Select/Where)",
    python: "List Comprehensions / filter() / map()",
    category: "advanced",
    desc: "LINQ expressions in C# translate directly to list comprehensions or standard functions in Python.",
    csharpCode: `// C# LINQ Query
var evens = list
    .Where(x => x % 2 == 0)
    .Select(x => x * 2);`,
    pythonCode: `# Python List Comprehension
evens = [x * 2 for x in my_list if x % 2 == 0]`
  },
  {
    csharp: "string.Format() / $\"\"",
    python: "f-strings (f\"{var}\")",
    category: "basics",
    desc: "String interpolation. C# uses dollar-sign strings. Python uses f-prefix strings which are highly optimized.",
    csharpCode: `// C# Interpolation
var msg = $"Hello {name}, age {age}";`,
    pythonCode: `# Python f-string
msg = f"Hello {name}, age {age}"`
  },
  {
    csharp: "try / catch / finally",
    python: "try / except / finally",
    category: "basics",
    desc: "Error handling blocks. C# uses 'catch (Exception e)', Python uses 'except Exception as e'.",
    csharpCode: `// C# Exception Handling
try {
    DoWork();
} catch (Exception ex) {
    Log(ex.Message);
} finally {
    Cleanup();
}`,
    pythonCode: `# Python Exception Handling
try:
    do_work()
except Exception as e:
    log(str(e))
finally:
    cleanup()`
  }
];

const highlightCode = (code: string, lang: 'csharp' | 'python') => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const tokens: string[] = [];

  const commentRegex = lang === 'csharp' ? /(\/\/.*)/g : /(\#.*)/g;
  const stringRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;

  escaped = escaped.replace(stringRegex, (match) => {
    const placeholder = `___STR_TOKEN_${tokens.length}___`;
    tokens.push(`<span class="token string">${match}</span>`);
    return placeholder;
  });

  escaped = escaped.replace(commentRegex, (match) => {
    const placeholder = `___COM_TOKEN_${tokens.length}___`;
    tokens.push(`<span class="token comment">${match}</span>`);
    return placeholder;
  });

  const csharpKeywords = /\b(public|private|protected|async|await|var|new|class|interface|string|int|void|return|try|catch|finally|null|using|namespace|get|set)\b/g;
  const pythonKeywords = /\b(def|async|await|import|class|None|pass|try|except|finally|from|in|if|as|and|or|not|elif|else|import)\b/g;

  const csharpTypes = /\b(Console|WriteLine|List|Dictionary|Task|Exception|DoWork|Cleanup|Log|FetchDataAsync|Delay)\b/g;
  const pythonTypes = /\b(print|asyncio|sleep|append|len|range|self|do_work|cleanup|log|str|fetch_data_async)\b/g;

  const numberRegex = /\b(\d+)\b/g;

  if (lang === 'csharp') {
    escaped = escaped
      .replace(csharpKeywords, '<span class="token keyword">$1</span>')
      .replace(csharpTypes, '<span class="token type">$1</span>');
  } else {
    escaped = escaped
      .replace(pythonKeywords, '<span class="token keyword">$1</span>')
      .replace(pythonTypes, '<span class="token type">$1</span>');
  }

  escaped = escaped.replace(numberRegex, '<span class="token number">$1</span>');

  for (let i = tokens.length - 1; i >= 0; i--) {
    escaped = escaped.split(`___STR_TOKEN_${i}___`).join(tokens[i]);
    escaped = escaped.split(`___COM_TOKEN_${i}___`).join(tokens[i]);
  }

  return escaped;
};

const PROJECTS = [
  {
    id: 1, monthId: 1, weeks: 'Week 3',
    title: 'AI Clinical Assistant',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'Pydantic'],
    input: 'List of symptoms as strings',
    output: 'Possible conditions + suggested next steps',
    note: 'POST /analyze-symptoms',
    type: 'api',
  },
  {
    id: 2, monthId: 1, weeks: 'Week 4',
    title: 'Insurance Authorization Assistant',
    techStack: ['Python', 'FastAPI', 'OpenAI', 'Pydantic'],
    input: 'Patient info + insurance type + procedure',
    output: 'Structured JSON: approved/denied, checklist, missing docs',
    note: 'Few-shot + XML tags + structured output',
    type: 'agent',
  },
  {
    id: 3, monthId: 2, weeks: 'Week 6',
    title: 'Hospital Policy Assistant',
    techStack: ['Python', 'FastAPI', 'LangChain', 'PDF splitter'],
    input: 'Hospital Policy PDF manuals',
    output: 'Split text chunks + source metadata mapping',
    note: 'POST /ingest',
    type: 'rag',
  },
  {
    id: 4, monthId: 2, weeks: 'Week 7',
    title: 'Smart Claims Validation Pipeline',
    techStack: ['Python', 'FastAPI', 'LangGraph', 'SQLite'],
    input: 'Claim requests (membership, pre-auth, code checks)',
    output: 'Validation reports + audit history + approval flags',
    note: 'Human audit gate if claim > $5,000',
    type: 'agent',
  },
  {
    id: 5, monthId: 3, weeks: 'Weeks 9–13',
    title: 'AKHST Knowledge Assistant',
    techStack: ['Python', 'FastAPI', 'Qdrant', 'Hybrid Search', 'RAGAS'],
    input: 'Insurance policy PDFs + user query',
    output: 'Cited answers + policy references',
    note: 'RAGAS Faithfulness target: > 0.85',
    type: 'rag',
  },
  {
    id: 6, monthId: 4, weeks: 'Weeks 14–17',
    title: 'Insurance Multi-Agent System',
    techStack: ['Python', 'CrewAI', 'LangGraph', 'Supervisor pattern'],
    input: 'Complex insurance tasks needing multi-step reasoning',
    output: 'Coordinated agent outputs + human approval workflow',
    note: 'Supervisor → Claims Analyst + Auditor agents',
    type: 'agent',
  },
  {
    id: 7, monthId: 5, weeks: 'Weeks 18–19',
    title: 'Hospital Search MCP Server',
    techStack: ['Python', 'SQLite', 'FastMCP', 'SSE Transport'],
    input: 'Mock patient DB + natural language queries',
    output: 'Structured query results via SSE transport',
    note: 'SQL validation + SSE HTTP endpoint',
    type: 'api',
  },
  {
    id: 8, monthId: 5, weeks: 'Weeks 20–21',
    title: 'Voice Medical Assistant',
    techStack: ['Python', 'Whisper', 'Claude API', 'ElevenLabs TTS'],
    input: 'Voice input via microphone',
    output: 'Synthesized spoken clinical response',
    note: 'STT → LLM → TTS streaming pipeline',
    type: 'voice',
  },
  {
    id: 9, monthId: 6, weeks: 'Weeks 22–23',
    title: 'Insurance Copilot SaaS',
    techStack: ['Next.js', 'FastAPI', 'Clerk/Supabase', 'ECS Fargate'],
    input: 'User account + insurance data',
    output: 'React dashboard + streaming AI responses + PDF export',
    note: 'Frontend: React · Backend: FastAPI on ECS',
    type: 'saas',
  },
] as const;

type ResourceKind = 'video' | 'docs' | 'article' | 'course' | 'repo' | 'tool';

interface WeekResource {
  title: string;
  source: string;
  url: string;
  kind: ResourceKind;
}

const RESOURCE_KIND_META: Record<ResourceKind, { label: string; Icon: React.ComponentType<{ size?: number | string; strokeWidth?: number | string }> }> = {
  video: { label: 'Video', Icon: PlayCircle },
  docs: { label: 'Docs', Icon: BookOpen },
  article: { label: 'Article', Icon: FileText },
  course: { label: 'Course', Icon: GraduationCap },
  repo: { label: 'Repo', Icon: FolderGit2 },
  tool: { label: 'Tool', Icon: Wrench },
};

// Curated picks mapped to each curriculum week (keyed by week id)
const WEEK_RESOURCES: Record<number, WeekResource[]> = {
  1: [
    { title: 'Python OOP Tutorial Series', source: 'Corey Schafer', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc', kind: 'video' },
    { title: 'Classes — Official Python Tutorial', source: 'docs.python.org', url: 'https://docs.python.org/3/tutorial/classes.html', kind: 'docs' },
    { title: 'OOP in Python 3', source: 'Real Python', url: 'https://realpython.com/python3-object-oriented-programming/', kind: 'article' },
    { title: 'Python Track — Practice Exercises', source: 'Exercism', url: 'https://exercism.org/tracks/python', kind: 'course' },
  ],
  2: [
    { title: 'First Steps Tutorial', source: 'FastAPI', url: 'https://fastapi.tiangolo.com/tutorial/first-steps/', kind: 'docs' },
    { title: 'Concurrency and async / await', source: 'FastAPI', url: 'https://fastapi.tiangolo.com/async/', kind: 'docs' },
    { title: 'Async IO in Python: A Complete Walkthrough', source: 'Real Python', url: 'https://realpython.com/async-io-python/', kind: 'article' },
    { title: 'FastAPI Full Course', source: 'freeCodeCamp', url: 'https://www.youtube.com/watch?v=0sOvCWFmrtA', kind: 'video' },
  ],
  3: [
    { title: 'Claude API — Getting Started', source: 'Anthropic', url: 'https://docs.anthropic.com/en/api/getting-started', kind: 'docs' },
    { title: 'OpenAI API Quickstart', source: 'OpenAI', url: 'https://platform.openai.com/docs/quickstart', kind: 'docs' },
    { title: 'Anthropic Cookbook — Code Examples', source: 'GitHub', url: 'https://github.com/anthropics/anthropic-cookbook', kind: 'repo' },
  ],
  4: [
    { title: 'Prompt Engineering Overview', source: 'Anthropic', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', kind: 'docs' },
    { title: 'Structured Outputs Guide', source: 'OpenAI', url: 'https://platform.openai.com/docs/guides/structured-outputs', kind: 'docs' },
    { title: 'Pydantic Models — Concepts', source: 'Pydantic', url: 'https://docs.pydantic.dev/latest/concepts/models/', kind: 'docs' },
    { title: 'Instructor — Structured LLM Outputs', source: 'useinstructor.com', url: 'https://python.useinstructor.com/', kind: 'tool' },
  ],
  5: [
    { title: 'LangChain Expression Language (LCEL)', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/lcel/', kind: 'docs' },
    { title: 'LangChain Academy — Free Courses', source: 'LangChain', url: 'https://academy.langchain.com/', kind: 'course' },
    { title: 'LangChain Crash Course', source: 'freeCodeCamp', url: 'https://www.youtube.com/watch?v=lG7Uxts9SXs', kind: 'video' },
  ],
  6: [
    { title: 'Document Loaders — Concepts', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/document_loaders/', kind: 'docs' },
    { title: 'Text Splitters — Concepts', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/text_splitters/', kind: 'docs' },
    { title: 'Chunking Strategies for LLM Applications', source: 'Pinecone', url: 'https://www.pinecone.io/learn/chunking-strategies/', kind: 'article' },
  ],
  7: [
    { title: 'LangGraph Documentation', source: 'LangChain', url: 'https://langchain-ai.github.io/langgraph/', kind: 'docs' },
    { title: 'Introduction to LangGraph', source: 'LangChain Academy', url: 'https://academy.langchain.com/courses/intro-to-langgraph', kind: 'course' },
    { title: 'LangGraph Low-Level Concepts (State, Nodes, Edges)', source: 'LangChain', url: 'https://langchain-ai.github.io/langgraph/concepts/low_level/', kind: 'docs' },
  ],
  8: [
    { title: 'Human-in-the-Loop — Concepts', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', kind: 'docs' },
    { title: 'Breakpoints & Interrupts', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/breakpoints/', kind: 'docs' },
    { title: 'Persistence & Checkpointers', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/persistence/', kind: 'docs' },
  ],
  9: [
    { title: 'Chroma — Getting Started', source: 'Chroma', url: 'https://docs.trychroma.com/getting-started', kind: 'docs' },
    { title: 'Embeddings Guide', source: 'OpenAI', url: 'https://platform.openai.com/docs/guides/embeddings', kind: 'docs' },
    { title: 'What Are Embeddings? (Free Book)', source: 'Vicki Boykis', url: 'https://vickiboykis.com/what_are_embeddings/', kind: 'article' },
  ],
  10: [
    { title: 'Qdrant Quickstart', source: 'Qdrant', url: 'https://qdrant.tech/documentation/quickstart/', kind: 'docs' },
    { title: 'Payload Filtering — Concepts', source: 'Qdrant', url: 'https://qdrant.tech/documentation/concepts/filtering/', kind: 'docs' },
    { title: 'Docker — Get Started', source: 'Docker', url: 'https://docs.docker.com/get-started/', kind: 'docs' },
  ],
  11: [
    { title: 'Hybrid Queries (Dense + Sparse)', source: 'Qdrant', url: 'https://qdrant.tech/documentation/concepts/hybrid-queries/', kind: 'docs' },
    { title: 'Getting Started with Hybrid Search', source: 'Pinecone', url: 'https://www.pinecone.io/learn/hybrid-search-intro/', kind: 'article' },
    { title: 'Rerank — Improve Search Relevance', source: 'Cohere', url: 'https://cohere.com/rerank', kind: 'tool' },
  ],
  12: [
    { title: 'Introducing Contextual Retrieval', source: 'Anthropic', url: 'https://www.anthropic.com/news/contextual-retrieval', kind: 'article' },
    { title: 'Parent Document Retriever — How-to', source: 'LangChain', url: 'https://python.langchain.com/docs/how_to/parent_document_retriever/', kind: 'docs' },
    { title: 'Retrieval — Concepts Deep Dive', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/retrieval/', kind: 'docs' },
  ],
  13: [
    { title: 'RAGAS — Evaluation Documentation', source: 'RAGAS', url: 'https://docs.ragas.io/', kind: 'docs' },
    { title: 'Guardrails AI Documentation', source: 'Guardrails', url: 'https://www.guardrailsai.com/docs', kind: 'docs' },
    { title: 'Building & Evaluating Advanced RAG', source: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/', kind: 'course' },
  ],
  14: [
    { title: 'ReAct: Synergizing Reasoning and Acting (Paper)', source: 'arXiv', url: 'https://arxiv.org/abs/2210.03629', kind: 'article' },
    { title: 'Building Effective Agents', source: 'Anthropic', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' },
    { title: 'ReAct Agent from Scratch', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/how-tos/react-agent-from-scratch/', kind: 'docs' },
  ],
  15: [
    { title: 'CrewAI Documentation', source: 'CrewAI', url: 'https://docs.crewai.com/', kind: 'docs' },
    { title: 'Multi AI Agent Systems with crewAI', source: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/', kind: 'course' },
    { title: 'CrewAI Examples', source: 'GitHub', url: 'https://github.com/crewAIInc/crewAI-examples', kind: 'repo' },
  ],
  16: [
    { title: 'Semantic Kernel Overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/semantic-kernel/overview/', kind: 'docs' },
    { title: 'Plugins — Concepts', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/semantic-kernel/concepts/plugins/', kind: 'docs' },
    { title: 'microsoft/semantic-kernel', source: 'GitHub', url: 'https://github.com/microsoft/semantic-kernel', kind: 'repo' },
  ],
  17: [
    { title: 'Multi-Agent Systems — Concepts', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/', kind: 'docs' },
    { title: 'Don’t Build Multi-Agents (Counterpoint)', source: 'Cognition', url: 'https://cognition.ai/blog/dont-build-multi-agents', kind: 'article' },
    { title: 'LangSmith — Tracing & Observability', source: 'LangChain', url: 'https://docs.smith.langchain.com/', kind: 'tool' },
  ],
  18: [
    { title: 'Model Context Protocol — Introduction', source: 'MCP', url: 'https://modelcontextprotocol.io/introduction', kind: 'docs' },
    { title: 'Introducing the Model Context Protocol', source: 'Anthropic', url: 'https://www.anthropic.com/news/model-context-protocol', kind: 'article' },
    { title: 'MCP Python SDK', source: 'GitHub', url: 'https://github.com/modelcontextprotocol/python-sdk', kind: 'repo' },
  ],
  19: [
    { title: 'FastMCP — Build MCP Servers Fast', source: 'gofastmcp.com', url: 'https://gofastmcp.com/', kind: 'docs' },
    { title: 'Reference MCP Servers', source: 'GitHub', url: 'https://github.com/modelcontextprotocol/servers', kind: 'repo' },
    { title: 'sqlite3 — Python Standard Library', source: 'docs.python.org', url: 'https://docs.python.org/3/library/sqlite3.html', kind: 'docs' },
  ],
  20: [
    { title: 'n8n Documentation', source: 'n8n', url: 'https://docs.n8n.io/', kind: 'docs' },
    { title: 'Self-Hosting n8n with Docker', source: 'n8n', url: 'https://docs.n8n.io/hosting/installation/docker/', kind: 'docs' },
    { title: 'Workflow Template Library', source: 'n8n', url: 'https://n8n.io/workflows/', kind: 'tool' },
  ],
  21: [
    { title: 'openai/whisper — Speech Recognition', source: 'GitHub', url: 'https://github.com/openai/whisper', kind: 'repo' },
    { title: 'ElevenLabs — Text to Speech Docs', source: 'ElevenLabs', url: 'https://elevenlabs.io/docs', kind: 'docs' },
    { title: 'Pipecat — Voice AI Pipelines', source: 'GitHub', url: 'https://github.com/pipecat-ai/pipecat', kind: 'repo' },
  ],
  22: [
    { title: 'Multi-Stage Builds', source: 'Docker', url: 'https://docs.docker.com/build/building/multi-stage/', kind: 'docs' },
    { title: 'FastAPI in Containers — Deployment', source: 'FastAPI', url: 'https://fastapi.tiangolo.com/deployment/docker/', kind: 'docs' },
    { title: 'Amazon ECS — Getting Started', source: 'AWS', url: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started.html', kind: 'docs' },
  ],
  23: [
    { title: 'Next.js — Official Interactive Course', source: 'Vercel', url: 'https://nextjs.org/learn', kind: 'course' },
    { title: 'Supabase Auth Guide', source: 'Supabase', url: 'https://supabase.com/docs/guides/auth', kind: 'docs' },
    { title: 'Vercel AI SDK — Streaming UI', source: 'Vercel', url: 'https://sdk.vercel.ai/docs', kind: 'docs' },
  ],
  24: [
    { title: 'Langfuse — LLM Observability Docs', source: 'Langfuse', url: 'https://langfuse.com/docs', kind: 'docs' },
    { title: '12-Factor Agents — Production Principles', source: 'GitHub', url: 'https://github.com/humanlayer/12factor-agents', kind: 'repo' },
    { title: 'Make a README — Portfolio Polish', source: 'makeareadme.com', url: 'https://www.makeareadme.com/', kind: 'article' },
  ],
};

// Animates a number toward `target` with an ease-out curve (used by KPI strip)
const useCountUp = (target: number, duration = 700) => {
  const [value, setValue] = useState(target);
  const prevRef = useRef(target);
  useEffect(() => {
    const from = prevRef.current;
    if (from === target) return;
    prevRef.current = target;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
};

export const RoadmapTracker: React.FC = () => {
  const [curriculum] = useState<Month[]>(curriculumData as Month[]);
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});
  const [journal, setJournal] = useState<Record<string, JournalEntry>>({});
  const [activeMonthId, setActiveMonthId] = useState<number>(1);
  const [activeWeekId, setActiveWeekId] = useState<number>(1);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('roadmapTheme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('roadmapTheme', theme);
  }, [theme]);

  const [role, setRole] = useState<'admin' | 'visitor' | null>(() => {
    const savedRole = sessionStorage.getItem('roadmapRole');
    if (savedRole === 'admin' || savedRole === 'visitor') return savedRole;
    if (sessionStorage.getItem('adminToken')) return 'admin';
    return null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem('roadmapToken') || sessionStorage.getItem('adminToken');
  });

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);

  const [learnedText, setLearnedText] = useState<string>('');
  const [difficultiesText, setDifficultiesText] = useState<string>('');
  const [notesText, setNotesText] = useState<string>('');
  const [isSavingJournal, setIsSavingJournal] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [showGlossaryModal, setShowGlossaryModal] = useState<boolean>(false);
  const [glossaryCategory, setGlossaryCategory] = useState<string>('all');
  const [weekSearch, setWeekSearch] = useState<string>('');

  const renderDayTypeIcon = (type: string) => {
    const typeLower = type.toLowerCase();
    if (typeLower === 'learn') return <BookOpen size={11} strokeWidth={2.5} style={{ marginRight: '4px' }} />;
    if (typeLower === 'code') return <Code size={11} strokeWidth={2.5} style={{ marginRight: '4px' }} />;
    if (typeLower === 'build') return <Wrench size={11} strokeWidth={2.5} style={{ marginRight: '4px' }} />;
    if (typeLower === 'review') return <CheckSquare size={11} strokeWidth={2.5} style={{ marginRight: '4px' }} />;
    return null;
  };

  useEffect(() => {
    const adminToken = sessionStorage.getItem('adminToken');
    const loggedOut = sessionStorage.getItem('roadmapLoggedOut');
    if (adminToken && role !== 'admin' && loggedOut !== 'true') {
      setRole('admin');
      setToken(adminToken);
      sessionStorage.setItem('roadmapRole', 'admin');
      sessionStorage.setItem('roadmapToken', adminToken);
    }
  }, [role]);

  useEffect(() => {
    if (token && role) {
      fetchProgressAndJournals();
    } else {
      setCompletedTaskIds({});
      setJournal({});
    }
  }, [token, role]);

  useEffect(() => {
    const journalId = `week_${activeWeekId}`;
    const entry = journal[journalId];
    if (entry) {
      setLearnedText(entry.learned || '');
      setDifficultiesText(entry.difficulties || '');
      setNotesText(entry.notes || '');
    } else {
      setLearnedText('');
      setDifficultiesText('');
      setNotesText('');
    }
    setWeekSearch('');
  }, [activeWeekId, journal]);

  const fetchProgressAndJournals = async (overrideToken?: string) => {
    const activeToken = overrideToken || token;
    if (!activeToken) return;
    try {
      const headers = { 'Authorization': `Bearer ${activeToken}` };
      const [progressRes, journalRes] = await Promise.all([
        fetch('/api/roadmap/progress', { headers }),
        fetch('/api/roadmap/journal', { headers })
      ]);

      if (progressRes.status === 401 || journalRes.status === 401) {
        handleLogout();
        return;
      }

      if (progressRes.ok && journalRes.ok) {
        const progressData = await progressRes.json();
        const journalData = await journalRes.json();

        const progressMap: Record<string, boolean> = {};
        progressData.forEach((p: { taskId: string; completed: boolean }) => {
          progressMap[p.taskId] = p.completed;
        });
        setCompletedTaskIds(progressMap);

        const journalMap: Record<string, JournalEntry> = {};
        journalData.forEach((j: { weekId: string; learned: string; difficulties: string; notes: string }) => {
          journalMap[j.weekId] = j;
        });
        setJournal(journalMap);

        return { progressMap, journalMap };
      }
    } catch (err) {
      console.error('Failed to load roadmap data:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/roadmap/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      sessionStorage.setItem('roadmapToken', data.token);
      sessionStorage.setItem('roadmapRole', data.role);
      sessionStorage.removeItem('roadmapLoggedOut');

      if (data.role === 'admin') {
        sessionStorage.setItem('adminToken', data.token);
      }

      setToken(data.token);
      setRole(data.role as 'admin' | 'visitor');
      setShowLoginModal(false);
      setLoginUsername('');
      setLoginPassword('');

      const fetchedData = await fetchProgressAndJournals(data.token);

      if (pendingAction) {
        if (pendingAction.startsWith('toggle_')) {
          const taskId = pendingAction.replace('toggle_', '');
          const wasCompleted = fetchedData ? !!fetchedData.progressMap[taskId] : false;
          const isCompleted = !wasCompleted;
          setCompletedTaskIds(prev => ({ ...prev, [taskId]: isCompleted }));
          try {
            await fetch('/api/roadmap/progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${data.token}` },
              body: JSON.stringify({ taskId, completed: isCompleted })
            });
          } catch (err) {
            console.error('Failed to save pending toggle:', err);
          }
        } else if (pendingAction === 'save_journal') {
          const journalId = `week_${activeWeekId}`;
          setIsSavingJournal(true);
          try {
            await fetch('/api/roadmap/journal', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${data.token}` },
              body: JSON.stringify({ id: journalId, learned: learnedText, difficulties: difficultiesText, notes: notesText })
            });
            setJournal(prev => ({
              ...prev,
              [journalId]: { weekId: journalId, learned: learnedText, difficulties: difficultiesText, notes: notesText }
            }));
            setSaveStatus(true);
            setTimeout(() => setSaveStatus(false), 3000);
          } catch (err) {
            console.error('Failed to save pending journal:', err);
          } finally {
            setIsSavingJournal(false);
          }
        }
      }

      setPendingAction(null);
    } catch (err: any) {
      setLoginError(err.message || 'Connection error. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('roadmapToken');
    sessionStorage.removeItem('roadmapRole');
    sessionStorage.setItem('roadmapLoggedOut', 'true');
    setToken(null);
    setRole(null);
    setCompletedTaskIds({});
    setJournal({});
  };

  const handleToggleTask = async (taskId: string) => {
    if (!role || !token) {
      setPendingAction(`toggle_${taskId}`);
      setShowLoginModal(true);
      return;
    }

    const wasCompleted = !!completedTaskIds[taskId];
    const isCompleted = !wasCompleted;
    setCompletedTaskIds(prev => ({ ...prev, [taskId]: isCompleted }));

    try {
      const res = await fetch('/api/roadmap/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ taskId, completed: isCompleted })
      });
      if (!res.ok) throw new Error();
    } catch (err) {
      console.error('Failed to update task completion:', err);
      setCompletedTaskIds(prev => ({ ...prev, [taskId]: wasCompleted }));
    }
  };

  const handleSaveJournal = async () => {
    if (!role || !token) {
      setPendingAction('save_journal');
      setShowLoginModal(true);
      return;
    }

    const journalId = `week_${activeWeekId}`;
    setIsSavingJournal(true);

    try {
      const res = await fetch('/api/roadmap/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ id: journalId, learned: learnedText, difficulties: difficultiesText, notes: notesText })
      });

      if (!res.ok) throw new Error();

      setJournal(prev => ({
        ...prev,
        [journalId]: { weekId: journalId, learned: learnedText, difficulties: difficultiesText, notes: notesText }
      }));
      setSaveStatus(true);
      setTimeout(() => setSaveStatus(false), 3000);
    } catch (err) {
      console.error('Failed to save journal notes:', err);
      alert('Error saving notes. Please try again.');
    } finally {
      setIsSavingJournal(false);
    }
  };

  const handleMonthSelect = (monthId: number) => {
    setActiveMonthId(monthId);
    const monthObj = curriculum.find(m => m.id === monthId);
    if (monthObj && monthObj.weeks.length > 0) {
      setActiveWeekId(monthObj.weeks[0].id);
    }
  };

  let totalTasks = 0;
  let completedTasks = 0;
  let totalHours = 0;
  let journalCount = Object.keys(journal).length;

  curriculum.forEach(m => {
    m.weeks.forEach(w => {
      const hrMatch = w.focus_hours.match(/(\d+)\s*hours?/i);
      if (hrMatch) totalHours += parseInt(hrMatch[1], 10);
      w.days.forEach(d => {
        d.tasks.forEach(t => {
          totalTasks++;
          if (completedTaskIds[t.id]) completedTasks++;
        });
      });
    });
  });

  const overallPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const countedPercent = useCountUp(overallPercent);
  const countedTasks = useCountUp(completedTasks);
  const countedJournals = useCountUp(journalCount);
  const validMonths = curriculum.filter(m => m.weeks.length > 0);
  const activeMonth = curriculum.find(m => m.id === activeMonthId);
  const activeWeek = activeMonth?.weeks.find(w => w.id === activeWeekId);
  const activeWeekResources = activeWeek ? (WEEK_RESOURCES[activeWeek.id] || []) : [];

  // Tracks cursor position over a card so the CSS spotlight can follow it
  const handleCardSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const weekPercent = (w: Week) => {
    let t = 0, d = 0;
    w.days.forEach(day => day.tasks.forEach(task => {
      t++;
      if (completedTaskIds[task.id]) d++;
    }));
    return t > 0 ? Math.round((d / t) * 100) : 0;
  };

  const monthPercent = (m: Month) => {
    let t = 0, d = 0;
    m.weeks.forEach(w => w.days.forEach(day => day.tasks.forEach(task => {
      t++;
      if (completedTaskIds[task.id]) d++;
    })));
    return t > 0 ? Math.round((d / t) * 100) : 0;
  };

  const monthShortTitle = (m: Month) =>
    m.title.includes(':') ? m.title.split(':').slice(1).join(':').trim() : m.title;

  // Shows the floating week dock once the pills row scrolls out of view
  const [pillsStuck, setPillsStuck] = useState(false);
  const pillsSentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = pillsSentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setPillsStuck(!entry.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filteredDays = activeWeek
    ? (weekSearch.trim() === ''
      ? activeWeek.days
      : activeWeek.days.map(day => {
          const matchingTasks = day.tasks.filter(task =>
            task.content.toLowerCase().includes(weekSearch.trim().toLowerCase())
          );
          return { ...day, tasks: matchingTasks };
        }).filter(day => day.tasks.length > 0))
    : [];

  const RING_R = 22;
  const RING_CIRC = 2 * Math.PI * RING_R; // 138.23
  const NODE_R = 11;
  const NODE_CIRC = 2 * Math.PI * NODE_R; // 69.11

  return (
    <div className={`roadmap-wrapper theme-${theme}`}>
      <div className="roadmap-aurora" aria-hidden="true">
        <span className="roadmap-aurora-blob blob-a" />
        <span className="roadmap-aurora-blob blob-b" />
      </div>
      <div className="roadmap-app-container container">

        {/* ── Header: ring | title | kpi + auth ── */}
        <header className="roadmap-header">
          <div className="roadmap-progress-ring-wrap">
            <svg viewBox="0 0 56 56" width="56" height="56">
              <circle className="roadmap-ring-track" cx="28" cy="28" r={RING_R} />
              <circle
                className="roadmap-ring-fill"
                cx="28" cy="28" r={RING_R}
                strokeDasharray={RING_CIRC}
                strokeDashoffset={RING_CIRC * (1 - overallPercent / 100)}
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transformBox: 'fill-box' }}
              />
            </svg>
            <span className="roadmap-ring-overlay">{countedPercent}%</span>
          </div>

          <div className="roadmap-header-title-block">
            <div className="roadmap-version-badge font-mono">
              <span className="roadmap-badge-dot"></span>
              <span>GENAI ROADMAP // INTERACTIVE TRACKER</span>
            </div>
            <h1 className="roadmap-title">GenAI Roadmap Activity Tracker</h1>
            <p className="roadmap-subtitle">
              Track learning checkpoints, task progress, and retrospective journal notes across the 24-week curriculum.
            </p>
          </div>

          <div className="roadmap-header-right">
            <div className="roadmap-kpi-strip font-mono">
              <div className="roadmap-kpi-item">
                <span className="roadmap-kpi-val">{countedPercent}%</span>
                <span className="roadmap-kpi-lbl">Progress</span>
              </div>
              <div className="roadmap-kpi-divider" />
              <div className="roadmap-kpi-item">
                <span className="roadmap-kpi-val">{countedTasks}<span className="roadmap-kpi-total"> / {totalTasks}</span></span>
                <span className="roadmap-kpi-lbl">Tasks</span>
              </div>
              <div className="roadmap-kpi-divider" />
              <div className="roadmap-kpi-item">
                <span className="roadmap-kpi-val">~{totalHours}<span className="roadmap-kpi-total"> hrs</span></span>
                <span className="roadmap-kpi-lbl">Hours</span>
              </div>
              <div className="roadmap-kpi-divider" />
              <div className="roadmap-kpi-item">
                <span className="roadmap-kpi-val">{countedJournals}<span className="roadmap-kpi-total"> / 24</span></span>
                <span className="roadmap-kpi-lbl">Journals</span>
              </div>
            </div>

            <div className="roadmap-header-actions font-mono">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="roadmap-theme-toggle-btn"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
              </button>
              {role ? (
                <button onClick={handleLogout} className="roadmap-logout-btn font-mono">
                  <LogOut size={14} />
                  <span>Log out ({role})</span>
                </button>
              ) : (
                <button onClick={() => { setPendingAction(null); setShowLoginModal(true); }} className="roadmap-login-btn font-mono">
                  <Lock size={14} />
                  <span>Track Progress</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Guest Banner */}
        {!role && (
          <div className="roadmap-banner-alert font-mono">
            <AlertCircle size={16} />
            <span>Viewing in read-only guest mode. To mark tasks and save journal logs, click <strong>Track Progress</strong> and log in with visitor account (<code>visitor</code> / <code>visitor110</code>).</span>
          </div>
        )}

        {/* ── Master progress bar: clickable month segments + progress thumb ── */}
        <div className="roadmap-master-track-wrap">
          <div className="roadmap-master-bar">
            <div className="roadmap-master-fill" style={{ width: overallPercent + '%' }} />
            <div className="roadmap-master-segments">
              {validMonths.map(m => {
                const mPct = monthPercent(m);
                return (
                  <button
                    key={m.id}
                    className={`master-seg${activeMonthId === m.id ? ' active' : ''}${mPct >= 100 ? ' done' : ''}`}
                    style={{ flexGrow: m.weeks.length }}
                    onClick={() => handleMonthSelect(m.id)}
                    aria-label={`Jump to month ${m.id}: ${monthShortTitle(m)} (${mPct}% complete)`}
                  >
                    <span className="master-seg-tip font-mono">M{m.id} · {monthShortTitle(m)} · {mPct}%</span>
                  </button>
                );
              })}
            </div>
            <div
              className="roadmap-master-thumb"
              style={{ left: `clamp(10px, ${overallPercent}%, calc(100% - 10px))` }}
            >
              <span className="roadmap-master-chip font-mono">{countedPercent}%</span>
            </div>
          </div>
        </div>

        {/* ── Timeline ribbon ── */}
        <div className="roadmap-timeline-ribbon">
          {validMonths.map((m, idx) => {
            let mTotal = 0, mDone = 0;
            m.weeks.forEach(w => w.days.forEach(d => d.tasks.forEach(t => {
              mTotal++;
              if (completedTaskIds[t.id]) mDone++;
            })));
            const mPct = mTotal > 0 ? Math.round((mDone / mTotal) * 100) : 0;
            const offset = NODE_CIRC * (1 - mPct / 100);
            const shortTitle = m.title.includes(':') ? m.title.split(':').slice(1).join(':').trim() : m.title;

            return (
              <React.Fragment key={m.id}>
                {idx > 0 && <div className={`timeline-connector${mPct >= 100 ? ' filled' : ''}`} />}
                <button
                  className={`timeline-node${activeMonthId === m.id ? ' active' : ''}`}
                  onClick={() => handleMonthSelect(m.id)}
                >
                  <svg viewBox="0 0 30 30" width="30" height="30" style={{ overflow: 'visible' }}>
                    <circle className="roadmap-ring-track" cx="15" cy="15" r={NODE_R} />
                    <circle
                      className="roadmap-ring-fill"
                      cx="15" cy="15" r={NODE_R}
                      strokeDasharray={NODE_CIRC}
                      strokeDashoffset={offset}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transformBox: 'fill-box' }}
                    />
                  </svg>
                  <span className="timeline-node-label">M{m.id}</span>
                  <span className="timeline-node-title">{shortTitle}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* ── Active month description ── */}
        {activeMonth && (
          <div className="roadmap-month-desc roadmap-anim-in" key={`mdesc-${activeMonthId}`}>
            <span className="month-desc-num font-mono">M{activeMonth.id}</span>
            <h2 className="month-desc-title">{activeMonth.title}</h2>
            <span className="month-desc-badge font-mono">{activeMonth.badge_text}</span>
            <span className="month-desc-meta font-mono">{activeMonth.weeks_range} · {activeMonth.hours}</span>
          </div>
        )}

        {/* ── Week pills ── */}
        <div ref={pillsSentinelRef} className="roadmap-pills-sentinel" aria-hidden="true" />
        {activeMonth && (
          <div className="roadmap-week-pills">
            {activeMonth.weeks.map(w => {
              const wPct = weekPercent(w);
              return (
                <button
                  key={w.id}
                  className={`week-pill${activeWeekId === w.id ? ' active' : ''}${wPct >= 100 ? ' done' : ''}`}
                  onClick={() => setActiveWeekId(w.id)}
                >
                  <span className="week-pill-label">
                    Week {w.week_number}
                    {wPct >= 100 && <Check size={11} strokeWidth={3.5} className="week-pill-check" />}
                  </span>
                  <span className="week-pill-track"><span className="week-pill-fill" style={{ width: wPct + '%' }} /></span>
                </button>
              );
            })}
          </div>
        )}

        {/* ── Floating week dock: flies in once the pills scroll away ── */}
        {activeMonth && pillsStuck && (
          <div className="roadmap-week-dock" key={`dock-${activeMonthId}`}>
            {validMonths.map(m => (
              <React.Fragment key={m.id}>
                <button
                  className={`week-dock-month${activeMonthId === m.id ? ' active' : ''}${monthPercent(m) >= 100 ? ' done' : ''}`}
                  onClick={() => handleMonthSelect(m.id)}
                >
                  M{m.id}
                </button>
                {activeMonthId === m.id && m.weeks.map((w, i) => {
                  const wPct = weekPercent(w);
                  return (
                    <button
                      key={w.id}
                      className={`week-dock-item${activeWeekId === w.id ? ' active' : ''}${wPct >= 100 ? ' done' : ''}`}
                      style={{ animationDelay: `${i * 50}ms` }}
                      onClick={() => setActiveWeekId(w.id)}
                    >
                      <span className="week-dock-num font-mono">W{w.week_number}</span>
                      <span className="week-dock-bar"><span style={{ width: wPct + '%' }} /></span>
                      <span className="week-dock-tip font-mono">Week {w.week_number} · {wPct}%</span>
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* ── Content grid ── */}
        {activeWeek && (
          <>
          {/* Capstone projects + weekly resources, side by side */}
          {(() => {
            const monthProjects = PROJECTS.filter(p => p.monthId === activeMonthId);
            if (monthProjects.length === 0 && activeWeekResources.length === 0) return null;
            return (
              <div className="roadmap-feature-row" key={`feat-${activeWeek.id}`}>
              {monthProjects.length > 0 && (
              <div className="roadmap-projects-section roadmap-anim-in">
                <div className="roadmap-projects-header">
                  <span className="roadmap-projects-title font-mono">
                    <TrendingUp size={13} />
                    M{activeMonthId} CAPSTONE {monthProjects.length > 1 ? 'PROJECTS' : 'PROJECT'}
                  </span>
                  <span className="roadmap-projects-count font-mono">{monthProjects.length} build{monthProjects.length > 1 ? 's' : ''} this month</span>
                </div>
                <div className="roadmap-projects-scroll">
                  {monthProjects.map(project => (
                    <div key={project.id} className={`project-card project-type-${project.type} project-active`}>
                      <div className="project-card-top-bar" />
                      <div className="project-card-head">
                        <span className="project-num font-mono">#{project.id}</span>
                        <span className="project-meta font-mono">M{project.monthId} · {project.weeks}</span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-tech-stack">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="project-tech-badge font-mono">{tech}</span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="project-tech-badge font-mono">+{project.techStack.length - 3}</span>
                        )}
                      </div>
                      <div className="project-details">
                        <div className="project-detail-row">
                          <span className="project-detail-label">IN</span>
                          <span className="project-detail-val">{project.input}</span>
                        </div>
                        <div className="project-detail-row">
                          <span className="project-detail-label">OUT</span>
                          <span className="project-detail-val">{project.output}</span>
                        </div>
                        <div className="project-detail-row project-note-row">
                          <span className="project-detail-label">↗</span>
                          <span className="project-detail-val project-note">{project.note}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Resources for this week */}
              {activeWeekResources.length > 0 && (
                <div className="roadmap-resources-card roadmap-anim-in" style={{ animationDelay: '90ms' }} onMouseMove={handleCardSpotlight}>
                  <div className="roadmap-resources-header">
                    <span className="roadmap-companion-title font-mono">
                      <Sparkles size={16} className="roadmap-resources-spark" />
                      Resources for this week
                    </span>
                    <span className="roadmap-resources-count font-mono">{activeWeekResources.length} picks</span>
                  </div>
                  <p className="roadmap-resources-blurb">
                    Hand-picked for Week {activeWeek.week_number} — {activeWeek.title}.
                  </p>
                  <div className="roadmap-resources-list" key={activeWeek.id}>
                    {activeWeekResources.map((res, idx) => {
                      const { label, Icon } = RESOURCE_KIND_META[res.kind];
                      return (
                        <a
                          key={res.url}
                          className={`resource-item resource-kind-${res.kind}`}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ animationDelay: `${idx * 70}ms` }}
                        >
                          <span className="resource-icon"><Icon size={15} strokeWidth={2.2} /></span>
                          <span className="resource-body">
                            <span className="resource-title">{res.title}</span>
                            <span className="resource-meta font-mono">{res.source} · {label}</span>
                          </span>
                          <ArrowUpRight size={14} className="resource-arrow" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
              </div>
            );
          })()}

          <div className="roadmap-content-grid">

            {/* LEFT: sticky panel */}
            <aside className="roadmap-left-panel">
              {/* Week info */}
              <div className="roadmap-week-info-card roadmap-anim-in" key={`info-${activeWeek.id}`}>
                <div className="roadmap-week-info-header">
                  <h2 className="roadmap-week-info-title">Week {activeWeek.week_number} — {activeWeek.title}</h2>
                  <span className="roadmap-week-info-meta">{activeWeek.focus_hours}</span>
                </div>
                {activeWeek.weekly_goal && (
                  <div className="roadmap-goal-box">
                    <Calendar size={16} />
                    <p className="roadmap-goal-text"><strong>Goal:</strong> {activeWeek.weekly_goal}</p>
                  </div>
                )}
              </div>

              {/* Journal — div, not section, to avoid global padding:0 reset */}
              <div className="roadmap-journal-section roadmap-anim-in" key={`journal-${activeWeek.id}`} style={{ animationDelay: '60ms' }}>
                <div className="roadmap-journal-header-row">
                  <h2 className="roadmap-week-info-title" style={{ fontSize: '1rem' }}>Week {activeWeek.week_number} — Retro Log</h2>
                  <span className="roadmap-week-info-meta">
                    {saveStatus ? (
                      <span className="font-mono" style={{ color: 'var(--color-build)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={14} /> Saved
                      </span>
                    ) : `W${activeWeek.week_number}`}
                  </span>
                </div>

                <div className="roadmap-journal-grid font-sans">
                  <div className="roadmap-journal-field">
                    <label className="roadmap-journal-label">💡 What I learned</label>
                    <textarea
                      className="roadmap-journal-input"
                      placeholder={role ? "Key concepts, tools, experiments..." : "Login to write/save notes..."}
                      disabled={!role}
                      value={learnedText}
                      onChange={e => setLearnedText(e.target.value)}
                    />
                  </div>
                  <div className="roadmap-journal-field">
                    <label className="roadmap-journal-label">⚠️ Difficulties & Bugs</label>
                    <textarea
                      className="roadmap-journal-input"
                      placeholder={role ? "Errors, roadblocks, gaps to study..." : "Login to write/save notes..."}
                      disabled={!role}
                      value={difficultiesText}
                      onChange={e => setDifficultiesText(e.target.value)}
                    />
                  </div>
                  <div className="roadmap-journal-field">
                    <label className="roadmap-journal-label">📝 Notes & Ideas</label>
                    <textarea
                      className="roadmap-journal-input"
                      placeholder={role ? "Reflections, next steps, project sketches..." : "Login to write/save notes..."}
                      disabled={!role}
                      value={notesText}
                      onChange={e => setNotesText(e.target.value)}
                    />
                  </div>
                </div>

                <div className="roadmap-journal-footer">
                  <button onClick={handleSaveJournal} disabled={isSavingJournal} className="roadmap-btn-primary">
                    {isSavingJournal ? 'Saving...' : 'Save Review'}
                  </button>
                </div>
              </div>

              {/* Mindset */}
              {activeWeek.csharp_mindset && (
                <div className="roadmap-companion-card roadmap-anim-in" key={`mindset-${activeWeek.id}`} style={{ animationDelay: '120ms' }}>
                  <span className="roadmap-companion-title font-mono">
                    <Compass size={16} />
                    Mindset Shift
                  </span>
                  <div className="roadmap-companion-body" dangerouslySetInnerHTML={{ __html: activeWeek.csharp_mindset }} />
                </div>
              )}

              {/* Glossary link */}
              <div
                className="roadmap-companion-card roadmap-sidebar-glossary roadmap-anim-in"
                key={`glossary-${activeWeek.id}`}
                style={{ cursor: 'pointer', transition: 'var(--transition-smooth)', animationDelay: '180ms' }}
                onClick={() => setShowGlossaryModal(true)}
              >
                <span className="roadmap-companion-title font-mono">
                  <BookOpen size={16} />
                  Parallel Syntax
                </span>
                <div className="roadmap-companion-body font-sans" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '10px' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                    A quick comparative lookup of C# constructs mapping directly to Python equivalents.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--code-bg)', padding: '2px 6px', borderRadius: '4px' }}>
                      12 rules loaded
                    </span>
                    <span className="font-mono" style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Open Guide →
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT: day cards */}
            <div className="roadmap-day-area">
              <div className="roadmap-week-search-row">
                <div className="roadmap-week-search-container">
                  <Search size={14} className="roadmap-week-search-icon" />
                  <input
                    type="text"
                    className="roadmap-week-search-input"
                    placeholder={`Search tasks in Week ${activeWeek.week_number}... (e.g., Corey Schafer)`}
                    value={weekSearch}
                    onChange={e => setWeekSearch(e.target.value)}
                  />
                  {weekSearch && (
                    <button className="roadmap-week-search-clear-btn" onClick={() => setWeekSearch('')}>
                      <X size={14} />
                    </button>
                  )}
                </div>
                {weekSearch && (
                  <span className="roadmap-week-search-status font-mono">
                    {filteredDays.reduce((acc, d) => acc + d.tasks.length, 0)} match(es) found
                  </span>
                )}
              </div>

              {filteredDays.length > 0 ? (
                <div className="roadmap-day-grid" key={activeWeek.id}>
                  {filteredDays.map((day, dayIdx) => {
                    const dayTotal = day.tasks.length;
                    const dayDone = day.tasks.filter(t => completedTaskIds[t.id]).length;
                    const dayPct = dayTotal > 0 ? Math.round((dayDone / dayTotal) * 100) : 0;
                    return (
                      <div
                        key={day.id}
                        className={`roadmap-day-card${dayPct >= 100 ? ' day-complete' : ''}`}
                        style={{ animationDelay: `${dayIdx * 65}ms` }}
                        onMouseMove={handleCardSpotlight}
                      >
                        <div className="day-progress-bar">
                          <div className="day-progress-fill" style={{ width: dayPct + '%' }} />
                        </div>
                        <div className="roadmap-day-header">
                          <div className="roadmap-day-title-group">
                            <span className="roadmap-day-name">{day.day_name}</span>
                            <span className="roadmap-day-hrs">{day.hours}</span>
                          </div>
                          <span className={`roadmap-day-type type-${day.type.toLowerCase()}`}>
                            {renderDayTypeIcon(day.type)}
                            {day.type}
                          </span>
                        </div>
                        <ul className="roadmap-task-list">
                          {day.tasks.map(task => {
                            const isDone = !!completedTaskIds[task.id];
                            return (
                              <li
                                key={task.id}
                                className={`roadmap-task-item ${isDone ? 'completed' : ''}`}
                                onClick={(e) => {
                                  if ((e.target as HTMLElement).closest('a')) return;
                                  handleToggleTask(task.id);
                                }}
                              >
                                <div className={`roadmap-task-checkbox-container ${isDone ? 'checked' : ''}`}>
                                  {isDone && <Check size={10} strokeWidth={4} />}
                                </div>
                                <span className="roadmap-task-text">
                                  <span className="roadmap-task-num-badge">{task.task_num}</span>
                                  <span dangerouslySetInnerHTML={{ __html: task.content }} />
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="roadmap-syntax-empty font-sans" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '3rem', textAlign: 'center' }}>
                  No tasks matching "{weekSearch}" found in Week {activeWeek.week_number}.
                </div>
              )}
            </div>
          </div>
          </>
        )}
      </div>

      {/* ── Login Modal ── */}
      {showLoginModal && (
        <div
          className="roadmap-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowLoginModal(false); }}
        >
          <div className="roadmap-modal-card">
            <div className="roadmap-modal-header">
              <span className="roadmap-modal-title">
                <Lock size={16} />
                Access Gatekeeper
              </span>
              <button onClick={() => setShowLoginModal(false)} className="roadmap-modal-close">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleLogin} className="roadmap-modal-form">
              <p className="roadmap-modal-description">
                {pendingAction
                  ? "Authentication is required to modify roadmap progress or save review logs."
                  : "Sign in to track progress checklists and write retrospective review logs."
                }
              </p>

              <div className="roadmap-modal-credentials-note">
                <span><strong>Visitors</strong>: Login with <code>visitor</code> / <code>visitor110</code></span>
              </div>

              {loginError && (
                <div className="roadmap-modal-error font-mono">
                  <AlertCircle size={14} />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="roadmap-modal-field">
                <label className="roadmap-modal-label">Username</label>
                <input
                  type="text"
                  required
                  className="roadmap-modal-input"
                  placeholder="Username"
                  value={loginUsername}
                  onChange={e => setLoginUsername(e.target.value)}
                />
              </div>

              <div className="roadmap-modal-field">
                <label className="roadmap-modal-label">Password</label>
                <input
                  type="password"
                  required
                  className="roadmap-modal-input"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />
              </div>

              <button type="submit" disabled={isLoggingIn} className="roadmap-modal-btn">
                {isLoggingIn ? 'Verifying...' : 'Authenticate'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Glossary Modal ── */}
      {showGlossaryModal && (
        <div
          className="roadmap-modal-overlay roadmap-syntax-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowGlossaryModal(false); }}
        >
          <div className="roadmap-modal-card roadmap-syntax-modal-card">
            <div className="roadmap-modal-header">
              <span className="roadmap-modal-title">
                <BookOpen size={16} />
                Parallel Syntax Guide
              </span>
              <button onClick={() => setShowGlossaryModal(false)} className="roadmap-modal-close">
                <X size={18} />
              </button>
            </div>

            <div className="roadmap-syntax-modal-body">
              <p className="roadmap-syntax-modal-description font-sans">
                A quick-reference lookup comparing C# constructs and their Python equivalents. Select a category or use the search bar to filter rules.
              </p>

              <div className="roadmap-syntax-filter-row">
                <div className="roadmap-syntax-search-container">
                  <Search size={14} className="roadmap-syntax-search-icon" />
                  <input
                    type="text"
                    className="roadmap-syntax-search-input"
                    placeholder="Search syntax maps..."
                    value={glossarySearch}
                    onChange={e => setGlossarySearch(e.target.value)}
                  />
                  {glossarySearch && (
                    <button
                      onClick={() => setGlossarySearch('')}
                      style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="roadmap-syntax-categories font-mono">
                  {['all', 'basics', 'collections', 'oop', 'advanced'].map((cat) => (
                    <button
                      key={cat}
                      className={`roadmap-syntax-cat-btn ${glossaryCategory === cat ? 'active' : ''}`}
                      onClick={() => setGlossaryCategory(cat)}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="roadmap-syntax-cards-grid">
                {glossaryItems
                  .filter(item => {
                    const matchesCategory = glossaryCategory === 'all' || item.category === glossaryCategory;
                    const matchesSearch = item.csharp.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                      item.python.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                      item.desc.toLowerCase().includes(glossarySearch.toLowerCase());
                    return matchesCategory && matchesSearch;
                  })
                  .map((item, idx) => (
                    <div key={idx} className="roadmap-syntax-card">
                      <div className="roadmap-syntax-card-header">
                        <div className="roadmap-syntax-card-title">
                          <span className="roadmap-syntax-badge-cs font-mono">C#</span>
                          <span className="roadmap-syntax-term-cs font-mono">{item.csharp}</span>
                        </div>
                        <div className="roadmap-syntax-card-arrow font-mono">→</div>
                        <div className="roadmap-syntax-card-title">
                          <span className="roadmap-syntax-badge-py font-mono">Python</span>
                          <span className="roadmap-syntax-term-py font-mono">{item.python}</span>
                        </div>
                      </div>
                      <div className="roadmap-syntax-card-desc font-sans">{item.desc}</div>
                      <div className="roadmap-syntax-card-code-section">
                        <div style={{ position: 'relative' }}>
                          <span className="roadmap-syntax-code-label font-mono">C#</span>
                          <pre className="code-block font-mono"><code dangerouslySetInnerHTML={{ __html: highlightCode(item.csharpCode, 'csharp') }} /></pre>
                        </div>
                        <div style={{ position: 'relative' }}>
                          <span className="roadmap-syntax-code-label font-mono">Python</span>
                          <pre className="code-block font-mono"><code dangerouslySetInnerHTML={{ __html: highlightCode(item.pythonCode, 'python') }} /></pre>
                        </div>
                      </div>
                    </div>
                  ))}

                {glossaryItems.filter(item => {
                  const matchesCategory = glossaryCategory === 'all' || item.category === glossaryCategory;
                  const matchesSearch = item.csharp.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                    item.python.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                    item.desc.toLowerCase().includes(glossarySearch.toLowerCase());
                  return matchesCategory && matchesSearch;
                }).length === 0 && (
                  <div className="roadmap-syntax-empty font-sans">
                    No matching syntax rules found. Try adjusting your filters.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .roadmap-wrapper section {
          padding: 0 !important;
          position: relative;
        }

        .roadmap-wrapper {
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --font-sans: 'Ubuntu', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Ubuntu', 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', 'Roboto Mono', monospace;
          --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .roadmap-wrapper.theme-light {
          --bg-app: #f4f7fb;
          --bg-gradient: radial-gradient(circle at 50% 0%, #e0eaf5 0%, #f4f7fb 60%);
          --bg-card: #ffffff;
          --bg-card-hover: #eef4fa;
          --text-primary: #0f172a;
          --text-secondary: #44536b;
          --text-muted: #7e8fa6;
          --text-info: #0369a1;
          --border-color: rgba(15, 23, 42, 0.1);
          --border-hover: rgba(2, 132, 199, 0.35);
          --accent: #0284c7;
          --accent-rgb: 2, 132, 199;
          --accent-glow: rgba(2, 132, 199, 0.08);
          --accent-border: rgba(2, 132, 199, 0.25);
          --color-learn: #3b82f6;
          --color-build: #10b981;
          --color-read: #f59e0b;
          --color-check: #8b5cf6;
          --badge-info-bg: rgba(2, 132, 199, 0.08);
          --badge-info-text: #0369a1;
          --badge-info-border: rgba(2, 132, 199, 0.2);
          --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.06);
          --shadow-md: 0 4px 14px rgba(15, 23, 42, 0.09);
          --shadow-lg: 0 12px 28px -6px rgba(15, 23, 42, 0.14), 0 8px 10px -6px rgba(15, 23, 42, 0.08);
          --progress-badge-bg: rgba(15, 23, 42, 0.06);
          --code-bg: rgba(15, 23, 42, 0.05);
          --goal-bg: rgba(2, 132, 199, 0.05);
          --goal-border: rgba(2, 132, 199, 0.16);
          --bg-sticky: rgba(244, 247, 251, 0.85);
          --day-type-learn-bg: rgba(59, 130, 246, 0.08);
          --day-type-build-bg: rgba(16, 185, 129, 0.08);
          --day-type-read-bg: rgba(245, 158, 11, 0.08);
          --input-bg: #f1f5fa;
          --modal-bg: #ffffff;
          --modal-overlay-bg: rgba(15, 23, 42, 0.6);
          --btn-primary-bg: #0f172a;
          --btn-primary-text: #ffffff;
          --btn-primary-hover-bg: #1e293b;
          --timeline-btn-active-bg: #0f172a;
          --timeline-btn-active-text: #ffffff;
          --title-gradient: linear-gradient(135deg, #0f172a 40%, #0284c7 100%);
        }

        .roadmap-wrapper.theme-dark {
          --bg-app: #080b11;
          --bg-gradient: radial-gradient(circle at 50% 0%, #151d2a 0%, #080b11 100%);
          --bg-card: #111724;
          --bg-card-hover: #182032;
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
          --text-info: #38bdf8;
          --border-color: rgba(255, 255, 255, 0.08);
          --border-hover: rgba(56, 189, 248, 0.4);
          --accent: #38bdf8;
          --accent-rgb: 56, 189, 248;
          --accent-glow: rgba(56, 189, 248, 0.08);
          --accent-border: rgba(56, 189, 248, 0.3);
          --color-learn: #60a5fa;
          --color-build: #34d399;
          --color-read: #fbbf24;
          --color-check: #a78bfa;
          --badge-info-bg: rgba(56, 189, 248, 0.08);
          --badge-info-text: #38bdf8;
          --badge-info-border: rgba(56, 189, 248, 0.2);
          --shadow-sm: 0 2px 4px rgba(0,0,0,0.15);
          --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
          --shadow-lg: 0 10px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5);
          --progress-badge-bg: rgba(255, 255, 255, 0.08);
          --code-bg: rgba(255, 255, 255, 0.06);
          --goal-bg: rgba(56, 189, 248, 0.04);
          --goal-border: rgba(56, 189, 248, 0.12);
          --day-type-learn-bg: rgba(96, 165, 250, 0.15);
          --day-type-build-bg: rgba(52, 211, 153, 0.15);
          --day-type-read-bg: rgba(251, 191, 36, 0.15);
          --input-bg: #0c101a;
          --bg-sticky: rgba(8, 11, 17, 0.8);
          --modal-bg: #111724;
          --modal-overlay-bg: rgba(0, 0, 0, 0.85);
          --btn-primary-bg: #38bdf8;
          --btn-primary-text: #080b11;
          --btn-primary-hover-bg: #7dd3fc;
          --timeline-btn-active-bg: #38bdf8;
          --timeline-btn-active-text: #080b11;
          --title-gradient: linear-gradient(135deg, #ffffff 45%, #38bdf8 100%);
        }

        .roadmap-wrapper {
          color: var(--text-primary);
          background-color: var(--bg-app);
          background: var(--bg-gradient);
          background-attachment: fixed;
          min-height: 100vh;
          font-family: var(--font-sans);
          padding: 2.5rem 0;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          zoom: 1.1;
        }
        .roadmap-app-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ── Header ── */
        .roadmap-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .roadmap-progress-ring-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .roadmap-ring-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          font-family: var(--font-mono);
          color: var(--accent);
          pointer-events: none;
        }
        .roadmap-ring-track {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 4;
        }
        .roadmap-ring-fill {
          fill: none;
          stroke: var(--accent);
          stroke-width: 4;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .roadmap-header-title-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
        }
        .roadmap-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .roadmap-kpi-strip {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .roadmap-kpi-divider {
          width: 1px;
          height: 28px;
          background: var(--border-color);
          flex-shrink: 0;
        }
        .roadmap-kpi-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .roadmap-kpi-val {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: var(--font-mono);
          color: var(--text-primary);
          line-height: 1.1;
        }
        .roadmap-kpi-total {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .roadmap-kpi-lbl {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--text-muted);
          font-weight: 700;
          margin-top: 2px;
        }
        .roadmap-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* ── Version badge ── */
        .roadmap-version-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-family: var(--font-mono);
          background: var(--badge-info-bg);
          color: var(--badge-info-text);
          border: 1px solid var(--badge-info-border);
          border-radius: 30px;
          padding: 4px 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }
        .roadmap-badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent);
        }
        .roadmap-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: var(--title-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.15;
        }
        .roadmap-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0;
        }

        /* ── Theme / auth buttons ── */
        .roadmap-theme-toggle-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          width: 36px;
          height: 36px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-theme-toggle-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }
        .roadmap-login-btn, .roadmap-logout-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
          font-family: var(--font-sans);
        }
        .roadmap-login-btn:hover, .roadmap-logout-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        /* ── Guest banner ── */
        .roadmap-banner-alert {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: var(--color-read);
          border-radius: var(--radius-sm);
          padding: 10px 16px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        /* ── Master progress bar: interactive month segments ── */
        .roadmap-master-track-wrap {
          margin-bottom: 2.4rem;
          padding-top: 0.5rem;
        }
        .roadmap-master-bar {
          position: relative;
          height: 10px;
          background: var(--border-color);
          border-radius: 6px;
          transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .roadmap-master-bar:hover { height: 16px; }
        .roadmap-master-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          border-radius: 6px;
          background: linear-gradient(90deg, var(--accent), #8b5cf6, var(--color-build));
          background-size: 200% 100%;
          transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .roadmap-master-segments {
          position: absolute;
          inset: 0;
          display: flex;
          border-radius: 6px;
          overflow: hidden;
        }
        .master-seg {
          position: relative;
          flex-basis: 0;
          background: transparent;
          border: none;
          border-right: 2px solid var(--bg-app);
          cursor: pointer;
          padding: 0;
          transition: var(--transition-smooth);
        }
        .master-seg:last-child { border-right: none; }
        .master-seg:hover { background: rgba(var(--accent-rgb), 0.16); }
        .master-seg.active { box-shadow: inset 0 0 0 2px rgba(var(--accent-rgb), 0.45); }
        .master-seg-tip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          font-size: 10px;
          font-weight: 600;
          padding: 4px 9px;
          border-radius: 6px;
          box-shadow: var(--shadow-md);
          transition: var(--transition-smooth);
          z-index: 6;
        }
        .master-seg-tip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: var(--btn-primary-bg);
        }
        .master-seg:first-child .master-seg-tip { left: 0; transform: translateX(0) translateY(4px); }
        .master-seg:first-child .master-seg-tip::after { left: 14px; }
        .master-seg:last-child .master-seg-tip { left: auto; right: 0; transform: translateY(4px); }
        .master-seg:last-child .master-seg-tip::after { left: auto; right: 10px; }
        .master-seg:hover .master-seg-tip { opacity: 1; transform: translateX(-50%) translateY(0); }
        .master-seg:first-child:hover .master-seg-tip { transform: translateX(0) translateY(0); }
        .master-seg:last-child:hover .master-seg-tip { transform: translateY(0); }
        .roadmap-master-thumb {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 3px solid var(--accent);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
          transition: left 0.8s cubic-bezier(0.4,0,0.2,1);
          pointer-events: none;
          z-index: 3;
        }
        .roadmap-master-chip {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 5px;
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
        }

        /* ── Timeline ribbon ── */
        .roadmap-timeline-ribbon {
          display: flex;
          align-items: center;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0.5rem 0 1rem;
          margin-bottom: 1.25rem;
        }
        .roadmap-timeline-ribbon::-webkit-scrollbar { display: none; }
        .timeline-connector {
          flex: 1;
          min-width: 24px;
          height: 2px;
          background: var(--border-color);
          position: relative;
          overflow: hidden;
        }
        .timeline-connector.filled::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
        }
        .timeline-node {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.65rem 1.1rem;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          min-width: 88px;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .timeline-node:hover {
          border-color: var(--accent-border);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .timeline-node.active {
          border-color: var(--accent);
          background: var(--accent-glow);
          box-shadow: 0 0 14px var(--accent-glow), var(--shadow-sm);
        }
        .timeline-node-label {
          font-size: 10px;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .timeline-node.active .timeline-node-label { color: var(--accent); }
        .timeline-node-title {
          font-size: 10px;
          color: var(--text-secondary);
          max-width: 100px;
          text-align: center;
          white-space: normal;
          line-height: 1.3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* ── Week pills ── */
        .roadmap-week-pills {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
          margin-bottom: 1.5rem;
        }
        .roadmap-week-pills::-webkit-scrollbar { display: none; }
        .week-pill {
          padding: 8px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
          font-family: inherit;
          box-shadow: var(--shadow-sm);
        }
        .week-pill:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }
        .week-pill.active {
          background: var(--timeline-btn-active-bg);
          color: var(--timeline-btn-active-text);
          border-color: var(--timeline-btn-active-bg);
        }

        /* ── Content grid ── */
        .roadmap-content-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        .roadmap-day-area {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-left-panel {
          position: sticky;
          top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-journal-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        /* ── Day grid: 2 columns ── */
        .roadmap-day-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        /* ── Day card ── */
        .roadmap-day-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .roadmap-day-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }
        .day-progress-bar {
          height: 3px;
          background: var(--border-color);
          margin: -1.25rem -1.25rem 1.25rem;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }
        .day-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-build), var(--accent));
          transition: width 0.5s ease;
        }
        .roadmap-day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed var(--border-color);
        }
        .roadmap-day-title-group {
          display: flex;
          flex-direction: column;
        }
        .roadmap-day-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .roadmap-day-hrs {
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .roadmap-day-type {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 6px;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        .roadmap-day-type.type-learn {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .roadmap-day-type.type-code {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }
        .roadmap-day-type.type-build {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .roadmap-day-type.type-review {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.25);
        }

        /* ── Task list ── */
        .roadmap-task-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .roadmap-task-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 13px;
          color: var(--text-secondary);
          cursor: pointer;
          user-select: none;
          padding: 2px 0;
          transition: var(--transition-smooth);
        }
        .roadmap-task-item:hover { color: var(--text-primary); }
        .roadmap-task-checkbox-container {
          position: relative;
          width: 18px;
          height: 18px;
          border: 2px solid var(--text-muted);
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .roadmap-task-item:hover .roadmap-task-checkbox-container {
          border-color: var(--accent);
        }
        .roadmap-task-checkbox-container.checked {
          border-color: var(--color-build);
          background-color: var(--color-build);
        }
        .roadmap-task-checkbox-container.checked svg { color: #ffffff; }
        .roadmap-task-text {
          transition: var(--transition-smooth);
          line-height: 1.4;
        }
        .roadmap-task-text a {
          color: var(--accent);
          text-decoration: underline;
          transition: var(--transition-smooth);
          font-weight: 500;
        }
        .roadmap-task-text a:hover { color: var(--text-info); }
        .roadmap-task-item.completed .roadmap-task-text {
          text-decoration: line-through;
          color: var(--text-muted);
        }
        .roadmap-task-num-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          background: var(--code-bg);
          padding: 1px 5px;
          border-radius: 3px;
          margin-right: 6px;
          color: var(--text-secondary);
        }
        .roadmap-task-item.completed .roadmap-task-num-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-build);
        }

        /* ── Week info card ── */
        .roadmap-week-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .roadmap-week-info-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .roadmap-week-info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .roadmap-week-info-meta {
          font-size: 12px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .roadmap-goal-box {
          background: var(--goal-bg);
          border: 1px solid var(--goal-border);
          border-radius: var(--radius-sm);
          padding: 0.9rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 13.5px;
          color: var(--text-info);
          line-height: 1.5;
        }
        .roadmap-goal-box svg {
          flex-shrink: 0;
          color: var(--accent);
          margin-top: 2px;
        }
        .roadmap-goal-text { margin: 0; }

        /* ── Journal ── */
        .roadmap-journal-section {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .roadmap-journal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .roadmap-journal-field {
          background: var(--bg-card-hover);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }
        .roadmap-journal-field::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: var(--accent);
          opacity: 0.35;
          transition: var(--transition-smooth);
        }
        .roadmap-journal-field:hover {
          border-color: var(--accent-border);
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
        }
        .roadmap-journal-field:hover::before { opacity: 0.7; }
        .roadmap-journal-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
          padding-left: 10px;
        }
        .roadmap-journal-input {
          width: 100%;
          height: 90px;
          min-height: 90px;
          background: var(--input-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 12px;
          font-family: inherit;
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-primary);
          resize: vertical;
          outline: none;
          transition: var(--transition-smooth);
        }
        .roadmap-journal-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .roadmap-journal-input::placeholder {
          color: var(--text-muted);
          font-size: 12px;
        }
        .roadmap-journal-input:disabled {
          cursor: not-allowed;
          opacity: 0.5;
          background: var(--bg-app);
        }
        .roadmap-journal-footer {
          display: flex;
          justify-content: flex-end;
        }
        .roadmap-btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          padding: 9px 18px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-btn-primary:hover {
          background: var(--btn-primary-hover-bg);
          transform: translateY(-1px);
        }
        .roadmap-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* ── Companion cards (mindset + glossary) ── */
        .roadmap-companion-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .roadmap-companion-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-companion-body {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
          border-left: 3px solid var(--accent);
          padding-left: 10px;
        }
        .roadmap-companion-body code {
          font-family: var(--font-mono);
          background: var(--code-bg);
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 11.5px;
          color: var(--text-primary);
        }
        .roadmap-sidebar-glossary { gap: 0.75rem; }

        /* ── Week search ── */
        .roadmap-week-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .roadmap-week-search-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 380px;
          max-width: 100%;
        }
        .roadmap-week-search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .roadmap-week-search-input {
          width: 100%;
          padding: 8px 36px 8px 36px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 13px;
          outline: none;
          background: var(--bg-card);
          transition: var(--transition-smooth);
          color: var(--text-primary);
          font-family: var(--font-sans);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-week-search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px var(--accent-glow);
        }
        .roadmap-week-search-clear-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: var(--transition-smooth);
        }
        .roadmap-week-search-clear-btn:hover { color: var(--text-primary); }
        .roadmap-week-search-status {
          font-size: 11px;
          color: var(--accent);
          background: var(--accent-glow);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid var(--accent-border);
        }

        /* ── Login modal ── */
        .roadmap-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5) !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .roadmap-modal-card {
          background: var(--modal-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          max-width: 420px;
          width: 100%;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          color: var(--text-primary);
        }
        .roadmap-modal-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .roadmap-modal-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }
        .roadmap-modal-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-close:hover { color: var(--text-primary); }
        .roadmap-modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-modal-description {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .roadmap-modal-credentials-note {
          background: var(--accent-glow);
          border: 1px dashed var(--accent-border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 12px;
          color: var(--badge-info-text);
          text-align: center;
        }
        .roadmap-modal-credentials-note code {
          background: rgba(2, 132, 199, 0.08);
          padding: 1px 4px;
          border-radius: 4px;
        }
        .roadmap-modal-error {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .roadmap-modal-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .roadmap-modal-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-secondary);
          font-weight: 600;
        }
        .roadmap-modal-input {
          width: 100%;
          background: var(--input-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
          color: var(--text-primary);
          font-size: 13.5px;
          outline: none;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .roadmap-modal-btn {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          border-radius: var(--radius-sm);
          padding: 12px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-btn:hover { background: var(--btn-primary-hover-bg); }

        /* ── Glossary modal ── */
        .roadmap-syntax-modal-overlay {
          padding: 2rem;
          z-index: 210;
        }
        .roadmap-syntax-modal-card {
          max-width: 1000px;
          width: 100%;
          height: 90vh;
          max-height: 850px;
          display: flex;
          flex-direction: column;
        }
        .roadmap-syntax-modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .roadmap-syntax-modal-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        .roadmap-syntax-filter-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
        }
        .roadmap-syntax-search-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 320px;
          max-width: 100%;
        }
        .roadmap-syntax-search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .roadmap-syntax-search-input {
          width: 100%;
          padding: 8px 12px 8px 34px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 13px;
          outline: none;
          background: var(--input-bg);
          transition: var(--transition-smooth);
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .roadmap-syntax-search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px var(--accent-glow);
        }
        .roadmap-syntax-categories {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .roadmap-syntax-cat-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .roadmap-syntax-cat-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }
        .roadmap-syntax-cat-btn.active {
          background: var(--timeline-btn-active-bg);
          color: var(--timeline-btn-active-text);
          border-color: var(--timeline-btn-active-bg);
        }
        .roadmap-syntax-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .roadmap-syntax-card {
          background: var(--bg-card-hover);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: var(--transition-smooth);
        }
        .roadmap-syntax-card:hover {
          border-color: var(--accent-border);
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
        }
        .roadmap-syntax-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .roadmap-syntax-card-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .roadmap-syntax-badge-cs {
          font-size: 10px;
          font-weight: 700;
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(139, 92, 246, 0.25);
        }
        .roadmap-syntax-badge-py {
          font-size: 10px;
          font-weight: 700;
          background: rgba(234, 179, 8, 0.15);
          color: #facc15;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(234, 179, 8, 0.25);
        }
        .roadmap-syntax-term-cs {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .roadmap-syntax-term-py {
          font-size: 14px;
          font-weight: 700;
          color: var(--accent);
        }
        .roadmap-syntax-card-arrow {
          color: var(--text-muted);
          font-weight: bold;
          font-size: 14px;
        }
        .roadmap-syntax-card-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .roadmap-syntax-card-code-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .roadmap-syntax-code-label {
          position: absolute;
          top: 6px;
          right: 10px;
          font-size: 9px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 10;
        }
        .roadmap-syntax-empty {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
          font-size: 14px;
        }
        .code-block {
          background: #0f131a !important;
          border: 1px solid var(--border-color) !important;
          border-radius: 6px !important;
          padding: 1.5rem 1.25rem 1.25rem !important;
          overflow-x: auto !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          color: #e2e8f0 !important;
          margin: 0 !important;
        }
        .code-block code {
          background: transparent !important;
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          padding: 0 !important;
        }
        .code-block .token.keyword { color: #ff79c6 !important; font-weight: bold; }
        .code-block .token.string { color: #50fa7b !important; }
        .code-block .token.comment { color: #6272a4 !important; font-style: italic; }
        .code-block .token.number { color: #bd93f9 !important; }
        .code-block .token.type { color: #8be9fd !important; }

        /* ── Projects section ── */
        .roadmap-projects-section {
          margin-bottom: 1.75rem;
        }
        .roadmap-projects-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }
        .roadmap-projects-title {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .roadmap-projects-count {
          font-size: 11px;
          color: var(--text-muted);
        }
        .roadmap-projects-scroll {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 6px;
          cursor: default;
        }
        .roadmap-projects-scroll::-webkit-scrollbar { display: none; }

        .project-card {
          flex-shrink: 0;
          width: 268px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 1.1rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
          cursor: pointer;
        }
        .project-card:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .project-card.project-active {
          border-color: var(--accent-border);
          background: var(--accent-glow);
          box-shadow: 0 0 18px var(--accent-glow), var(--shadow-sm);
        }

        /* Colored top bar by project type */
        .project-card-top-bar {
          height: 3px;
          margin: 0 -1.1rem 1rem;
          border-radius: 0;
        }
        .project-type-api .project-card-top-bar    { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
        .project-type-agent .project-card-top-bar  { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
        .project-type-rag .project-card-top-bar    { background: linear-gradient(90deg, #10b981, #34d399); }
        .project-type-voice .project-card-top-bar  { background: linear-gradient(90deg, #f97316, #fb923c); }
        .project-type-saas .project-card-top-bar   { background: linear-gradient(90deg, #f59e0b, #fbbf24); }

        .project-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.55rem;
        }
        .project-num {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          background: var(--code-bg);
          padding: 2px 7px;
          border-radius: 4px;
        }
        .project-meta {
          font-size: 10px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .project-card.project-active .project-meta { color: var(--accent); }
        .project-card.project-active .project-num {
          background: rgba(var(--accent-rgb), 0.15);
          color: var(--accent);
        }

        .project-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 0.75rem;
        }
        .project-tech-badge {
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 4px;
          background: var(--code-bg);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          font-weight: 600;
        }
        .project-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          border-top: 1px solid var(--border-color);
          padding-top: 0.65rem;
        }
        .project-detail-row {
          display: flex;
          gap: 7px;
          align-items: flex-start;
        }
        .project-detail-label {
          font-family: var(--font-mono);
          font-size: 8.5px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          flex-shrink: 0;
          padding-top: 2px;
          min-width: 22px;
          letter-spacing: 0.05em;
        }
        .project-detail-val {
          color: var(--text-secondary);
          font-size: 11px;
          line-height: 1.45;
        }
        .project-note-row { margin-top: 2px; }
        .project-note {
          color: var(--accent);
          font-size: 10.5px;
          font-family: var(--font-mono);
        }
        .project-type-api .project-detail-label    { color: #3b82f6; }
        .project-type-agent .project-detail-label  { color: #8b5cf6; }
        .project-type-rag .project-detail-label    { color: #10b981; }
        .project-type-voice .project-detail-label  { color: #f97316; }
        .project-type-saas .project-detail-label   { color: #f59e0b; }

        /* ── Micro-animation keyframes ── */
        @keyframes roadmapCardIn {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes roadmapItemIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes roadmapCheckPop {
          0%   { transform: scale(0.7); }
          55%  { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
        @keyframes roadmapCheckBurst {
          from { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
          to   { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        }
        @keyframes roadmapBarShimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(220%); }
        }
        @keyframes roadmapTitleSheen {
          from { background-position: 0% center; }
          to   { background-position: 100% center; }
        }
        @keyframes roadmapDotPulse {
          0%, 100% { box-shadow: 0 0 4px var(--accent); transform: scale(1); }
          50%      { box-shadow: 0 0 11px var(--accent); transform: scale(1.15); }
        }
        @keyframes roadmapSparkPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.75; }
          50%      { transform: scale(1.18) rotate(8deg); opacity: 1; }
        }
        @keyframes roadmapAuroraDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(60px, 40px) scale(1.15); }
        }

        /* ── Aurora backdrop ── */
        .roadmap-wrapper { position: relative; }
        .roadmap-app-container { position: relative; z-index: 1; }
        .roadmap-aurora {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .roadmap-aurora-blob {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
        }
        .theme-light .roadmap-aurora-blob { opacity: 0.09; }
        .roadmap-aurora-blob.blob-a {
          top: -140px; left: -100px;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.9), transparent 70%);
          animation: roadmapAuroraDrift 16s ease-in-out infinite alternate;
        }
        .roadmap-aurora-blob.blob-b {
          top: 30%; right: -140px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent 70%);
          animation: roadmapAuroraDrift 20s ease-in-out infinite alternate-reverse;
        }

        /* ── Header polish ── */
        .roadmap-title {
          background-size: 200% auto;
          animation: roadmapTitleSheen 8s ease infinite alternate;
        }
        .roadmap-badge-dot { animation: roadmapDotPulse 2.2s ease-in-out infinite; }
        .roadmap-master-fill { overflow: hidden; }
        .roadmap-master-fill::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 45%;
          background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
          animation: roadmapBarShimmer 2.8s ease-in-out infinite;
        }

        /* ── Week pill progress ── */
        .week-pill {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 5px;
          padding: 7px 16px;
        }
        .week-pill:hover { transform: translateY(-1px); }
        .week-pill-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .week-pill-check { color: var(--color-build); }
        .week-pill.active .week-pill-check { color: inherit; }
        .week-pill-track {
          display: block;
          height: 3px;
          min-width: 54px;
          border-radius: 2px;
          background: var(--border-color);
          overflow: hidden;
        }
        .week-pill-fill {
          display: block;
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--color-build), var(--accent));
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .week-pill.active .week-pill-track { background: rgba(128, 128, 128, 0.35); }
        .week-pill.active .week-pill-fill { background: var(--timeline-btn-active-text); }

        /* ── Day card entrance, spotlight & complete glow ── */
        .roadmap-day-card {
          position: relative;
          overflow: hidden;
          animation: roadmapCardIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .roadmap-day-card:hover { transform: translateY(-3px); }
        .roadmap-day-card::after,
        .roadmap-resources-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb), 0.09), transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .roadmap-day-card:hover::after,
        .roadmap-resources-card:hover::after { opacity: 1; }
        .roadmap-day-card.day-complete {
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.12), 0 6px 18px rgba(16, 185, 129, 0.1);
        }

        /* ── Task micro-interactions ── */
        .roadmap-task-item:hover { transform: translateX(3px); }
        .roadmap-task-checkbox-container.checked {
          animation: roadmapCheckPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .roadmap-task-checkbox-container.checked::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 6px;
          animation: roadmapCheckBurst 0.5s ease-out forwards;
        }

        /* ── Resources for this week ── */
        .roadmap-resources-card {
          background: var(--bg-card);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          position: relative;
          overflow: hidden;
        }
        .roadmap-resources-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #8b5cf6, var(--color-build));
        }
        .roadmap-resources-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }
        .roadmap-resources-spark { color: var(--accent); animation: roadmapSparkPulse 2.4s ease-in-out infinite; }
        .roadmap-resources-count {
          font-size: 10px;
          font-weight: 600;
          color: var(--accent);
          background: var(--accent-glow);
          border: 1px solid var(--accent-border);
          border-radius: 20px;
          padding: 2px 8px;
          white-space: nowrap;
        }
        .roadmap-resources-blurb {
          font-size: 12px;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.45;
        }
        .roadmap-resources-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .resource-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.7rem;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          background: var(--bg-card-hover);
          text-decoration: none;
          transition: var(--transition-smooth);
          animation: roadmapItemIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .resource-item:hover {
          transform: translateX(4px);
          border-color: var(--accent-border);
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
        }
        .resource-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: var(--transition-smooth);
        }
        .resource-item:hover .resource-icon { transform: scale(1.1) rotate(-4deg); }
        .resource-kind-video .resource-icon   { background: rgba(239, 68, 68, 0.12);  color: #ef4444; }
        .resource-kind-docs .resource-icon    { background: rgba(var(--accent-rgb), 0.12); color: var(--accent); }
        .resource-kind-article .resource-icon { background: rgba(245, 158, 11, 0.12); color: var(--color-read); }
        .resource-kind-course .resource-icon  { background: rgba(139, 92, 246, 0.12); color: var(--color-check); }
        .resource-kind-repo .resource-icon    { background: rgba(16, 185, 129, 0.12); color: var(--color-build); }
        .resource-kind-tool .resource-icon    { background: rgba(6, 182, 212, 0.12);  color: #22d3ee; }
        .resource-body {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .resource-title {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .resource-meta {
          font-size: 10px;
          color: var(--text-muted);
          margin-top: 1px;
        }
        .resource-arrow {
          margin-left: auto;
          flex-shrink: 0;
          color: var(--text-muted);
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: var(--transition-smooth);
        }
        .resource-item:hover .resource-arrow {
          opacity: 1;
          transform: translate(0, 0);
          color: var(--accent);
        }

        /* ── Display typeface for headings ── */
        .roadmap-title,
        .roadmap-week-info-title,
        .roadmap-day-name,
        .project-title {
          font-family: var(--font-display);
        }

        /* ── Active month description strip ── */
        .roadmap-month-desc {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin: 0.25rem 0 1.25rem;
          padding: 0.8rem 1.1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
        }
        .month-desc-num {
          font-size: 11px;
          font-weight: 800;
          color: var(--accent);
          background: var(--accent-glow);
          border: 1px solid var(--accent-border);
          border-radius: 6px;
          padding: 3px 8px;
          letter-spacing: 0.06em;
        }
        .month-desc-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .month-desc-badge {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-read);
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 20px;
          padding: 2px 9px;
        }
        .month-desc-meta {
          margin-left: auto;
          font-size: 11.5px;
          color: var(--text-muted);
        }

        /* ── Shared section entrance + heading pulse ── */
        .roadmap-anim-in {
          animation: roadmapItemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .roadmap-companion-title > svg,
        .roadmap-projects-title > svg {
          color: var(--accent);
          animation: roadmapSparkPulse 2.6s ease-in-out infinite;
        }

        /* ── Feature row: capstone projects + weekly resources ── */
        .roadmap-feature-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 1.25rem;
          align-items: start;
          margin-bottom: 1.75rem;
        }
        .roadmap-feature-row .roadmap-projects-section {
          margin-bottom: 0;
          min-width: 0;
        }
        .roadmap-feature-row .roadmap-resources-card {
          max-height: 420px;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        /* ── Floating week dock ── */
        .roadmap-pills-sentinel { height: 1px; }
        @keyframes roadmapDockIn {
          from { opacity: 0; transform: translateY(-50%) translateX(-28px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
        .roadmap-week-dock {
          position: fixed;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 120;
          background: var(--bg-sticky);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 10px 8px;
          box-shadow: var(--shadow-lg);
          animation: roadmapDockIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .week-dock-month {
          width: 46px;
          padding: 5px 0;
          border: none;
          border-radius: 8px;
          background: transparent;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .week-dock-month:hover {
          color: var(--accent);
          background: var(--accent-glow);
        }
        .week-dock-month.active {
          color: var(--accent);
          background: var(--accent-glow);
        }
        .week-dock-month.done { color: var(--color-build); }
        .week-dock-item {
          position: relative;
          width: 46px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 0 7px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: var(--transition-smooth);
          animation: roadmapItemIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .week-dock-item:hover {
          background: var(--accent-glow);
          border-color: var(--accent-border);
          transform: translateX(3px);
        }
        .week-dock-item.active { background: var(--timeline-btn-active-bg); }
        .week-dock-item.active .week-dock-num { color: var(--timeline-btn-active-text); }
        .week-dock-num {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .week-dock-item.done .week-dock-num { color: var(--color-build); }
        .week-dock-bar {
          width: 24px;
          height: 3px;
          border-radius: 2px;
          background: var(--border-color);
          overflow: hidden;
        }
        .week-dock-item.active .week-dock-bar { background: rgba(128, 128, 128, 0.4); }
        .week-dock-bar span {
          display: block;
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--color-build), var(--accent));
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .week-dock-tip {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(-4px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          font-size: 10px;
          font-weight: 600;
          padding: 4px 9px;
          border-radius: 6px;
          box-shadow: var(--shadow-md);
          transition: var(--transition-smooth);
        }
        .week-dock-item:hover .week-dock-tip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        @media (max-width: 1500px) {
          .roadmap-week-dock { display: none; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .roadmap-wrapper *,
          .roadmap-wrapper *::before,
          .roadmap-wrapper *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .roadmap-content-grid { grid-template-columns: 1fr; }
          .roadmap-feature-row { grid-template-columns: 1fr; }
          .roadmap-feature-row .roadmap-resources-card { max-height: none; }
          .roadmap-left-panel { position: static; }
          .roadmap-header { flex-wrap: wrap; }
          .roadmap-header-right { flex-direction: row; align-items: center; width: 100%; justify-content: space-between; }
        }
        @media (max-width: 768px) {
          .roadmap-day-grid { grid-template-columns: 1fr; }
          .roadmap-title { font-size: 1.5rem; }
          .roadmap-kpi-strip { gap: 0.75rem; }
          .roadmap-syntax-card-code-section { grid-template-columns: 1fr; }
          .roadmap-syntax-filter-row { flex-direction: column; align-items: flex-start; }
          .roadmap-syntax-search-container { width: 100%; }
          .roadmap-progress-ring-wrap { display: none; }
        }
      `}</style>
    </div>
  );
};
