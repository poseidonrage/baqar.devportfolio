// Shared data for the Roadmap tracker: curriculum metadata, glossary,
// capstone projects, and the per-week curated resources.
import React from 'react';
import {
  BookOpen,
  PlayCircle,
  FileText,
  GraduationCap,
  FolderGit2,
  Wrench,
  Library
} from 'lucide-react';

export interface Task {
  id: string;
  day_id: number;
  task_num: number;
  content: string;
}

export interface Day {
  id: number;
  week_id: number;
  day_name: string;
  hours: string;
  type: string;
  tasks: Task[];
}

export interface Week {
  id: number;
  month_id: number;
  week_number: number;
  title: string;
  focus_hours: string;
  mindset: string;
  weekly_goal: string;
  days: Day[];
}

export interface Month {
  id: number;
  title: string;
  weeks_range: string;
  hours: string;
  badge_text: string;
  weeks: Week[];
}

export interface JournalEntry {
  weekId: string;
  learned: string;
  difficulties: string;
  notes: string;
}

export interface GlossaryItem { csharp: string; python: string; category: string; desc: string; csharpCode?: string; pythonCode?: string; }

export const glossaryItems: GlossaryItem[] = [
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

export const highlightCode = (code: string, lang: 'csharp' | 'python') => {
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

export interface Project { id: number; monthId: number; weeks: string; title: string; techStack: string[]; input: string; output: string; note: string; type: string; }

export const PROJECTS: Project[] = [
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
];

export type ResourceKind = 'video' | 'docs' | 'article' | 'course' | 'repo' | 'tool' | 'book';

export interface WeekResource {
  title: string;
  source: string;
  url: string;
  kind: ResourceKind;
}

export const RESOURCE_KIND_META: Record<ResourceKind, { label: string; Icon: React.ComponentType<{ size?: number | string; strokeWidth?: number | string }> }> = {
  video: { label: 'Video', Icon: PlayCircle },
  docs: { label: 'Docs', Icon: BookOpen },
  article: { label: 'Article', Icon: FileText },
  course: { label: 'Course', Icon: GraduationCap },
  repo: { label: 'Repo', Icon: FolderGit2 },
  tool: { label: 'Tool', Icon: Wrench },
  book: { label: 'Book', Icon: Library },
};

// "30 Agents Every AI Engineer Must Build" — Imran Ahmad, Packt (owned copy);
// links to the official code repo with runnable examples per chapter
export const AGENTS_BOOK_URL = 'https://github.com/PacktPublishing/30-Agents-Every-AI-Engineer-Must-Build';
export const agentsBook = (chapters: string): WeekResource => ({
  title: `30 Agents · ${chapters}`,
  source: 'Imran Ahmad · Packt',
  url: AGENTS_BOOK_URL,
  kind: 'book',
});

// Curated picks mapped to each curriculum week (keyed by week id)
export const WEEK_RESOURCES: Record<number, WeekResource[]> = {
  1: [
    { title: 'Python OOP Tutorial Series', source: 'Corey Schafer', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc', kind: 'video' },
    { title: 'Classes — Official Python Tutorial', source: 'docs.python.org', url: 'https://docs.python.org/3/tutorial/classes.html', kind: 'docs' },
    { title: 'OOP in Python 3', source: 'Real Python', url: 'https://realpython.com/python3-object-oriented-programming/', kind: 'article' },
    { title: 'Python Track — Practice Exercises', source: 'Exercism', url: 'https://exercism.org/tracks/python', kind: 'course' },
    { title: 'ByteByteAI — Python & ML Foundations module', source: 'ByteByteGo', url: 'https://bytebyteai.com/c/ai-engineering', kind: 'video' },
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
    agentsBook('Ch 13 — The Healthcare Intelligence Agent'),
    { title: 'LLMs In 100 Images — How LLMs Work, Visually', source: 'Ashish Bamania', url: 'https://bamaniaashish.gumroad.com/l/llmbook', kind: 'book' },
  ],
  4: [
    { title: 'Prompt Engineering Overview', source: 'Anthropic', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', kind: 'docs' },
    { title: 'Structured Outputs Guide', source: 'OpenAI', url: 'https://platform.openai.com/docs/guides/structured-outputs', kind: 'docs' },
    { title: 'Pydantic Models — Concepts', source: 'Pydantic', url: 'https://docs.pydantic.dev/latest/concepts/models/', kind: 'docs' },
    { title: 'Instructor — Structured LLM Outputs', source: 'useinstructor.com', url: 'https://python.useinstructor.com/', kind: 'tool' },
    agentsBook('Ch 3 — The Art of Agent Prompting'),
    { title: 'ByteByteAI — Prompt Engineering + Support Chatbot project', source: 'ByteByteGo', url: 'https://bytebyteai.com/c/ai-engineering', kind: 'video' },
  ],
  5: [
    { title: 'LangChain Expression Language (LCEL)', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/lcel/', kind: 'docs' },
    { title: 'LangChain Academy — Free Courses', source: 'LangChain', url: 'https://academy.langchain.com/', kind: 'course' },
    { title: 'LangChain Crash Course', source: 'freeCodeCamp', url: 'https://www.youtube.com/watch?v=lG7Uxts9SXs', kind: 'video' },
    agentsBook("Ch 2 — The Agent Engineer's Toolkit"),
    { title: 'Generative AI with LangChain — Ch 2: First Steps with LangChain', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
  ],
  6: [
    { title: 'Document Loaders — Concepts', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/document_loaders/', kind: 'docs' },
    { title: 'Text Splitters — Concepts', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/text_splitters/', kind: 'docs' },
    { title: 'Chunking Strategies for LLM Applications', source: 'Pinecone', url: 'https://www.pinecone.io/learn/chunking-strategies/', kind: 'article' },
    agentsBook('Ch 6 — Knowledge Retrieval & Document Intelligence Agents'),
    { title: 'Generative AI with LangChain — Ch 4: RAG & Documents (first pass)', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — RAG Systems module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
  ],
  7: [
    { title: 'LangGraph Documentation', source: 'LangChain', url: 'https://langchain-ai.github.io/langgraph/', kind: 'docs' },
    { title: 'Introduction to LangGraph', source: 'LangChain Academy', url: 'https://academy.langchain.com/courses/intro-to-langgraph', kind: 'course' },
    { title: 'LangGraph Low-Level Concepts (State, Nodes, Edges)', source: 'LangChain', url: 'https://langchain-ai.github.io/langgraph/concepts/low_level/', kind: 'docs' },
    agentsBook('Ch 7 — Tool Manipulation & Orchestration Agents'),
    { title: 'Generative AI with LangChain — Ch 3: Workflows with LangGraph', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
  ],
  8: [
    { title: 'Human-in-the-Loop — Concepts', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/', kind: 'docs' },
    { title: 'Breakpoints & Interrupts', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/breakpoints/', kind: 'docs' },
    { title: 'Persistence & Checkpointers', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/concepts/persistence/', kind: 'docs' },
    agentsBook('Ch 5 — Planning & Memory-Augmented Agents'),
    { title: 'Building Agentic AI Systems — Ch 8: Building Trust', source: 'Biswas & Talukdar · Packt', url: 'https://github.com/PacktPublishing/Building-Agentic-AI-Systems', kind: 'book' },
  ],
  9: [
    { title: 'Chroma — Getting Started', source: 'Chroma', url: 'https://docs.trychroma.com/getting-started', kind: 'docs' },
    { title: 'Embeddings Guide', source: 'OpenAI', url: 'https://platform.openai.com/docs/guides/embeddings', kind: 'docs' },
    { title: 'What Are Embeddings? (Free Book)', source: 'Vicki Boykis', url: 'https://vickiboykis.com/what_are_embeddings/', kind: 'article' },
    { title: "LLM Engineer's Handbook — Ch 4: RAG Feature Pipeline", source: 'Iusztin & Labonne · Packt', url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook', kind: 'book' },
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
    { title: 'Generative AI with LangChain — Ch 4: Intelligent RAG Systems', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — Hybrid Retrieval & Reranking module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
  ],
  12: [
    { title: 'Introducing Contextual Retrieval', source: 'Anthropic', url: 'https://www.anthropic.com/news/contextual-retrieval', kind: 'article' },
    { title: 'Parent Document Retriever — How-to', source: 'LangChain', url: 'https://python.langchain.com/docs/how_to/parent_document_retriever/', kind: 'docs' },
    { title: 'Retrieval — Concepts Deep Dive', source: 'LangChain', url: 'https://python.langchain.com/docs/concepts/retrieval/', kind: 'docs' },
    { title: "LLM Engineer's Handbook — Ch 9: RAG Inference Pipeline", source: 'Iusztin & Labonne · Packt', url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook', kind: 'book' },
  ],
  13: [
    { title: 'RAGAS — Evaluation Documentation', source: 'RAGAS', url: 'https://docs.ragas.io/', kind: 'docs' },
    { title: 'Guardrails AI Documentation', source: 'Guardrails', url: 'https://www.guardrailsai.com/docs', kind: 'docs' },
    { title: 'Building & Evaluating Advanced RAG', source: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/', kind: 'course' },
    agentsBook('Ch 8 & 12 — Verification, Validation & Ethical Agents'),
    { title: 'Generative AI with LangChain — Ch 8: Evaluation & Testing', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — Evaluation & Failure Detection module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
  ],
  14: [
    { title: 'ReAct: Synergizing Reasoning and Acting (Paper)', source: 'arXiv', url: 'https://arxiv.org/abs/2210.03629', kind: 'article' },
    { title: 'Building Effective Agents', source: 'Anthropic', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' },
    { title: 'ReAct Agent from Scratch', source: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/how-tos/react-agent-from-scratch/', kind: 'docs' },
    agentsBook('Ch 1 & 5 — Foundations & Cognitive Architectures'),
    { title: 'Building Agentic AI Systems — Ch 2–4: Principles, Components & Reflection', source: 'Biswas & Talukdar · Packt', url: 'https://github.com/PacktPublishing/Building-Agentic-AI-Systems', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — Agents & Agentic RAG module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
  ],
  15: [
    { title: 'CrewAI Documentation', source: 'CrewAI', url: 'https://docs.crewai.com/', kind: 'docs' },
    { title: 'Multi AI Agent Systems with crewAI', source: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/', kind: 'course' },
    { title: 'CrewAI Examples', source: 'GitHub', url: 'https://github.com/crewAIInc/crewAI-examples', kind: 'repo' },
    agentsBook('Ch 15 — The Collective Intelligence Agent'),
    { title: 'Generative AI with LangChain — Ch 6: Multi-Agent Systems', source: 'Ben Auffarth · Packt', url: 'https://github.com/benman1/generative_ai_with_langchain', kind: 'book' },
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
    agentsBook('Ch 9 — Code-Gen, Security-Hardened & Self-Improving Agents'),
    { title: 'Building Agentic AI Systems — Ch 6–7: Coordinator–Worker–Delegator', source: 'Biswas & Talukdar · Packt', url: 'https://github.com/PacktPublishing/Building-Agentic-AI-Systems', kind: 'book' },
    { title: 'ByteByteAI — Deep Research with Reasoning Models project', source: 'ByteByteGo', url: 'https://bytebyteai.com/c/ai-engineering', kind: 'video' },
  ],
  18: [
    { title: 'Model Context Protocol — Introduction', source: 'MCP', url: 'https://modelcontextprotocol.io/introduction', kind: 'docs' },
    { title: 'Introducing the Model Context Protocol', source: 'Anthropic', url: 'https://www.anthropic.com/news/model-context-protocol', kind: 'article' },
    { title: 'MCP Python SDK', source: 'GitHub', url: 'https://github.com/modelcontextprotocol/python-sdk', kind: 'repo' },
    { title: 'Building Agentic AI Systems — Ch 5: Tool Use and Planning', source: 'Biswas & Talukdar · Packt', url: 'https://github.com/PacktPublishing/Building-Agentic-AI-Systems', kind: 'book' },
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
    agentsBook('Ch 11 — Multi-Modal Perception Agents'),
  ],
  22: [
    { title: 'Multi-Stage Builds', source: 'Docker', url: 'https://docs.docker.com/build/building/multi-stage/', kind: 'docs' },
    { title: 'FastAPI in Containers — Deployment', source: 'FastAPI', url: 'https://fastapi.tiangolo.com/deployment/docker/', kind: 'docs' },
    { title: 'Amazon ECS — Getting Started', source: 'AWS', url: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started.html', kind: 'docs' },
    { title: "LLM Engineer's Handbook — Ch 10: Deployment on AWS", source: 'Iusztin & Labonne · Packt', url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — Deployment module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
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
    agentsBook('Ch 4 — Deployment & Responsible Development'),
    { title: "LLM Engineer's Handbook — Ch 8 & 11: Inference Optimization, LLMOps", source: 'Iusztin & Labonne · Packt', url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook', kind: 'book' },
    { title: 'SwirlAI E2E AI Engineering — LLMOps & Monitoring module', source: 'Aurimas Griciūnas · Maven', url: 'https://maven.com/swirl-ai/end-to-end-ai-engineering', kind: 'video' },
  ],
  25: [
    { title: 'Generative AI Engineering with LLMs (Specialization)', source: 'IBM · Coursera', url: 'https://www.coursera.org/specializations/generative-ai-engineering-with-llms', kind: 'course' },
    { title: 'The Illustrated Transformer', source: 'Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/', kind: 'article' },
    { title: 'PEFT — Parameter-Efficient Fine-Tuning', source: 'Hugging Face', url: 'https://huggingface.co/docs/peft', kind: 'docs' },
    { title: 'Illustrating RLHF', source: 'Hugging Face', url: 'https://huggingface.co/blog/rlhf', kind: 'article' },
    { title: "LLM Engineer's Handbook — Ch 5–6: SFT & Preference Alignment (DPO)", source: 'Iusztin & Labonne · Packt', url: 'https://github.com/PacktPublishing/LLM-Engineers-Handbook', kind: 'book' },
    { title: 'LLMs In 100 Images — Architecture, Training & Decoding', source: 'Ashish Bamania', url: 'https://bamaniaashish.gumroad.com/l/llmbook', kind: 'book' },
  ],
};
