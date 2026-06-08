import { useState, useEffect, useRef } from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  CheckCircle2,
  BookOpen,
  Compass,
  TrendingUp,
  Calendar,
  Clock,
  BookMarked,
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
  CheckSquare
} from "lucide-react";
import { Grid, Box, Stack, Flex, HStack } from "@ninna-ui/layout";
import { Stat, Card } from "@ninna-ui/data-display";
import { Badge, Button, Heading, Text } from "@ninna-ui/primitives";
import { Checkbox, Field, Input, Textarea } from "@ninna-ui/forms";
import { Modal } from "@ninna-ui/overlays";
import curriculumData from "~/data/curriculum.json";

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

const highlightCode = (code: string, lang: "csharp" | "python") => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const tokens: string[] = [];
  
  const commentRegex = lang === "csharp" ? /(\/\/.*)/g : /(\#.*)/g;
  const stringRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;

  escaped = escaped.replace(stringRegex, (match) => {
    const placeholder = `___STR_TOKEN_${tokens.length}___`;
    tokens.push(`<span class="token string" style="color: #a78bfa;">${match}</span>`);
    return placeholder;
  });

  escaped = escaped.replace(commentRegex, (match) => {
    const placeholder = `___COM_TOKEN_${tokens.length}___`;
    tokens.push(`<span class="token comment" style="color: #6b7280; font-style: italic;">${match}</span>`);
    return placeholder;
  });

  const csharpKeywords = /\b(public|private|protected|async|await|var|new|class|interface|string|int|void|return|try|catch|finally|null|using|namespace|get|set)\b/g;
  const pythonKeywords = /\b(def|async|await|import|class|None|pass|try|except|finally|from|in|if|as|and|or|not|elif|else)\b/g;
  
  const csharpTypes = /\b(Console|WriteLine|List|Dictionary|Task|Exception|DoWork|Cleanup|Log|FetchDataAsync|Delay)\b/g;
  const pythonTypes = /\b(print|asyncio|sleep|append|len|range|self|do_work|cleanup|log|str|fetch_data_async)\b/g;

  const numberRegex = /\b(\d+)\b/g;

  if (lang === "csharp") {
    escaped = escaped
      .replace(csharpKeywords, '<span class="token keyword" style="color: #f472b6;">$1</span>')
      .replace(csharpTypes, '<span class="token type" style="color: #60a5fa;">$1</span>');
  } else {
    escaped = escaped
      .replace(pythonKeywords, '<span class="token keyword" style="color: #f472b6;">$1</span>')
      .replace(pythonTypes, '<span class="token type" style="color: #60a5fa;">$1</span>');
  }

  escaped = escaped.replace(numberRegex, '<span class="token number" style="color: #fb923c;">$1</span>');

  for (let i = tokens.length - 1; i >= 0; i--) {
    escaped = escaped.split(`___STR_TOKEN_${i}___`).join(tokens[i]);
    escaped = escaped.split(`___COM_TOKEN_${i}___`).join(tokens[i]);
  }

  return escaped;
};

export async function loader({}: LoaderFunctionArgs) {
  return json({
    curriculum: curriculumData as Month[]
  });
}

export default function RoadmapRoute() {
  const { curriculum } = useLoaderData<typeof loader>();
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});
  const [journal, setJournal] = useState<Record<string, JournalEntry>>({});
  const [activeMonthId, setActiveMonthId] = useState<number>(1);
  const [activeWeekId, setActiveWeekId] = useState<number>(1);

  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("roadmapTheme") as "light" | "dark";
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("roadmapTheme", next);
  };

  // Auth state
  const [role, setRole] = useState<"admin" | "visitor" | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedRole = sessionStorage.getItem("roadmapRole") as "admin" | "visitor";
    const savedToken = sessionStorage.getItem("roadmapToken") || sessionStorage.getItem("adminToken");
    if (savedRole && savedToken) {
      setRole(savedRole);
      setToken(savedToken);
    }
  }, []);

  // UI state
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);

  // Journal form state
  const [learnedText, setLearnedText] = useState<string>("");
  const [difficultiesText, setDifficultiesText] = useState<string>("");
  const [notesText, setNotesText] = useState<string>("");
  const [isSavingJournal, setIsSavingJournal] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  // Search and glossary modal states
  const [glossarySearch, setGlossarySearch] = useState<string>("");
  const [showGlossaryModal, setShowGlossaryModal] = useState<boolean>(false);
  const [glossaryCategory, setGlossaryCategory] = useState<string>("all");
  const [weekSearch, setWeekSearch] = useState<string>("");

  const renderDayTypeIcon = (type: string) => {
    const typeLower = type.toLowerCase();
    if (typeLower === "learn") {
      return <BookOpen size={11} strokeWidth={2.5} style={{ marginRight: "4px" }} />;
    } else if (typeLower === "code") {
      return <Code size={11} strokeWidth={2.5} style={{ marginRight: "4px" }} />;
    } else if (typeLower === "build") {
      return <Wrench size={11} strokeWidth={2.5} style={{ marginRight: "4px" }} />;
    } else if (typeLower === "review") {
      return <CheckSquare size={11} strokeWidth={2.5} style={{ marginRight: "4px" }} />;
    }
    return null;
  };

  // Load progress and journals when token/role changes
  useEffect(() => {
    if (token && role) {
      fetchProgressAndJournals();
    } else {
      setCompletedTaskIds({});
      setJournal({});
    }
  }, [token, role]);

  // Sync journal draft state when active week changes
  useEffect(() => {
    const journalId = `week_${activeWeekId}`;
    const entry = journal[journalId];
    if (entry) {
      setLearnedText(entry.learned || "");
      setDifficultiesText(entry.difficulties || "");
      setNotesText(entry.notes || "");
    } else {
      setLearnedText("");
      setDifficultiesText("");
      setNotesText("");
    }
    setWeekSearch("");
  }, [activeWeekId, journal]);

  const fetchProgressAndJournals = async (overrideToken?: string) => {
    const activeToken = overrideToken || token;
    if (!activeToken) return;
    try {
      const headers = { Authorization: `Bearer ${activeToken}` };

      const [progressRes, journalRes] = await Promise.all([
        fetch("/api/roadmap/progress", { headers }),
        fetch("/api/roadmap/journal", { headers })
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
      console.error("Failed to load roadmap data:", err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch("/api/roadmap/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      sessionStorage.setItem("roadmapToken", data.token);
      sessionStorage.setItem("roadmapRole", data.role);
      sessionStorage.removeItem("roadmapLoggedOut");

      if (data.role === "admin") {
        sessionStorage.setItem("adminToken", data.token);
      }

      setToken(data.token);
      setRole(data.role as "admin" | "visitor");
      setShowLoginModal(false);
      setLoginUsername("");
      setLoginPassword("");

      const fetchedData = await fetchProgressAndJournals(data.token);

      if (pendingAction) {
        if (pendingAction.startsWith("toggle_")) {
          const taskId = pendingAction.replace("toggle_", "");
          const wasCompleted = fetchedData ? !!fetchedData.progressMap[taskId] : false;
          const isCompleted = !wasCompleted;
          
          setCompletedTaskIds(prev => ({ ...prev, [taskId]: isCompleted }));
          
          try {
            await fetch("/api/roadmap/progress", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
              },
              body: JSON.stringify({ taskId, completed: isCompleted })
            });
          } catch (err) {
            console.error("Failed to save pending toggle:", err);
          }
        } else if (pendingAction === "save_journal") {
          const journalId = `week_${activeWeekId}`;
          setIsSavingJournal(true);
          try {
            await fetch("/api/roadmap/journal", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
              },
              body: JSON.stringify({
                id: journalId,
                learned: learnedText,
                difficulties: difficultiesText,
                notes: notesText
              })
            });
            setJournal(prev => ({
              ...prev,
              [journalId]: {
                weekId: journalId,
                learned: learnedText,
                difficulties: difficultiesText,
                notes: notesText
              }
            }));
            setSaveStatus(true);
            setTimeout(() => setSaveStatus(false), 3000);
          } catch (err) {
            console.error("Failed to save pending journal:", err);
          } finally {
            setIsSavingJournal(false);
          }
        }
      }

      setPendingAction(null);
    } catch (err: any) {
      setLoginError(err.message || "Connection error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("roadmapToken");
    sessionStorage.removeItem("roadmapRole");
    sessionStorage.setItem("roadmapLoggedOut", "true");
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
      const res = await fetch("/api/roadmap/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ taskId, completed: isCompleted })
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (err) {
      console.error("Failed to update task completion:", err);
      setCompletedTaskIds(prev => ({ ...prev, [taskId]: wasCompleted }));
    }
  };

  const handleSaveJournal = async () => {
    if (!role || !token) {
      setPendingAction("save_journal");
      setShowLoginModal(true);
      return;
    }

    const journalId = `week_${activeWeekId}`;
    setIsSavingJournal(true);

    try {
      const res = await fetch("/api/roadmap/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: journalId,
          learned: learnedText,
          difficulties: difficultiesText,
          notes: notesText
        })
      });

      if (!res.ok) {
        throw new Error();
      }

      setJournal(prev => ({
        ...prev,
        [journalId]: {
          weekId: journalId,
          learned: learnedText,
          difficulties: difficultiesText,
          notes: notesText
        }
      }));

      setSaveStatus(true);
      setTimeout(() => setSaveStatus(false), 3000);
    } catch (err) {
      console.error("Failed to save journal notes:", err);
      alert("Error saving notes. Please try again.");
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

  // Calculations
  let totalTasks = 0;
  let completedTasks = 0;
  let totalHours = 0;
  let journalCount = Object.keys(journal).length;

  curriculum.forEach(m => {
    m.weeks.forEach(w => {
      const hrMatch = w.focus_hours.match(/(\d+)\s*hours?/i);
      if (hrMatch) {
        totalHours += parseInt(hrMatch[1], 10);
      }
      w.days.forEach(d => {
        d.tasks.forEach(t => {
          totalTasks++;
          if (completedTaskIds[t.id]) completedTasks++;
        });
      });
    });
  });

  const overallPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const validMonths = curriculum.filter(m => m.weeks.length > 0);
  const activeMonth = curriculum.find(m => m.id === activeMonthId);
  const activeWeek = activeMonth?.weeks.find(w => w.id === activeWeekId);

  const filteredDays = activeWeek 
    ? (weekSearch.trim() === ""
      ? activeWeek.days
      : activeWeek.days.map(day => {
          const matchingTasks = day.tasks.filter(task =>
            task.content.toLowerCase().includes(weekSearch.trim().toLowerCase())
          );
          return { ...day, tasks: matchingTasks };
        }).filter(day => day.tasks.length > 0))
    : [];

  const filteredGlossary = glossaryItems.filter(item => {
    const matchesCategory = glossaryCategory === "all" || item.category === glossaryCategory;
    const matchesSearch = glossarySearch.trim() === "" ||
      item.csharp.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.python.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.desc.toLowerCase().includes(glossarySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`roadmap-wrapper theme-${theme} bg-slate-950 min-h-screen text-slate-100 pb-16 pt-8 font-sans`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <header className="roadmap-header mb-8 pb-6 border-b border-slate-800">
          <Badge variant="soft" color="primary" className="font-mono text-[10px] px-3 py-1 rounded-full w-fit mb-4 flex items-center gap-2">
            <span className="roadmap-badge-dot w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>GENAI ROADMAP // INTERACTIVE TRACKER</span>
          </Badge>

          <Flex justify="between" align="center" className="roadmap-header-title-row mb-3">
            <Heading as="h1" size="3xl" className="font-bold text-slate-100">GenAI Roadmap Activity Tracker</Heading>
            <Flex gap="4" align="center" className="roadmap-header-actions font-mono text-sm">
              <Button
                onClick={toggleTheme}
                variant="outline"
                color="neutral"
                size="sm"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="cursor-pointer"
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </Button>
              {role ? (
                <Button onClick={handleLogout} variant="outline" color="danger" size="sm" className="flex items-center gap-2 cursor-pointer">
                  <LogOut size={14} />
                  <span>Log out ({role})</span>
                </Button>
              ) : (
                <Button onClick={() => { setPendingAction(null); setShowLoginModal(true); }} variant="outline" color="primary" size="sm" className="flex items-center gap-2 cursor-pointer">
                  <Lock size={14} />
                  <span>Track Progress</span>
                </Button>
              )}
            </Flex>
          </Flex>

          <Text size="sm" muted className="max-w-2xl">
            Track your learning checkpoints, tasks progress, and retrospective journal notes across the 24-week curriculum.
          </Text>
        </header>

        {/* Guest Banner */}
        {!role && (
          <Badge variant="soft" color="warning" className="font-mono text-xs p-4 rounded-lg w-full justify-start flex items-center gap-3 mb-8">
            <AlertCircle size={16} />
            <span>Viewing in read-only guest mode. To mark tasks and save journal logs, click <strong>Track Progress</strong> and log in with visitor account (<code>visitor</code> / <code>visitor110</code>).</span>
          </Badge>
        )}

        {/* KPI Panel */}
        <Grid columns={{ base: 1, sm: 2, lg: 4 }} gap="4" className="roadmap-stats-grid mb-8">
          {[
            { icon: <TrendingUp size={24} />, val: `${overallPercent}%`, label: "OVERALL PROGRESS" },
            { icon: <CheckCircle2 size={24} />, val: `${completedTasks} / ${totalTasks}`, label: "TASKS COMPLETED" },
            { icon: <Clock size={24} />, val: `~${totalHours} hrs`, label: "CURRICULUM SIZE" },
            { icon: <BookMarked size={24} />, val: `${journalCount} / 24`, label: "WEEKLY JOURNALS FILLED" }
          ].map((stat, i) => (
            <Card key={i} variant="outline" className="p-5 border border-slate-800 bg-slate-900/40">
              <Stat>
                <Flex align="center" gap="4">
                  <Stat.Icon color="primary" className="p-2 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </Stat.Icon>
                  <Stack gap="1">
                    <Stat.Value size="md" className="font-bold text-slate-100">{stat.val}</Stat.Value>
                    <Stat.Label className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">{stat.label}</Stat.Label>
                  </Stack>
                </Flex>
              </Stat>
            </Card>
          ))}
        </Grid>

        {/* Dashboard Content */}
        <Grid columns={{ base: 1, lg: 12 }} gap="8" className="roadmap-dashboard-layout">
          {/* Sidebar */}
          <aside className="lg:col-span-3 roadmap-sidebar flex flex-col gap-6">
            <Card variant="outline" className="p-5 border border-slate-800 bg-slate-900/40">
              <div className="roadmap-nav-section-title font-mono text-xs text-slate-500 mb-4 tracking-wider uppercase">// ROADMAP MONTHS</div>
              <ul className="roadmap-month-list flex flex-col gap-2">
                {validMonths.map(m => {
                  let mTotal = 0;
                  let mDone = 0;
                  m.weeks.forEach(w => {
                    w.days.forEach(d => {
                      d.tasks.forEach(t => {
                        mTotal++;
                        if (completedTaskIds[t.id]) mDone++;
                      });
                    });
                  });
                  const mPercent = mTotal > 0 ? Math.round((mDone / mTotal) * 100) : 0;

                  return (
                    <li key={m.id} className="list-none">
                      <button
                        className={`roadmap-month-nav-btn w-full p-3 rounded flex justify-between items-center text-left text-sm cursor-pointer transition-all duration-200 border ${
                          activeMonthId === m.id 
                            ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400 font-bold" 
                            : "border-slate-800/45 text-slate-400 hover:bg-white/5 hover:border-slate-700"
                        }`}
                        onClick={() => handleMonthSelect(m.id)}
                      >
                        <span className="truncate mr-2">M{m.id}: {m.title}</span>
                        <Badge variant="soft" color={activeMonthId === m.id ? "primary" : "neutral"} className="font-mono text-xs">{mPercent}%</Badge>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Card>

            {/* Mindset Widget */}
            {activeWeek && activeWeek.csharp_mindset && (
              <Card variant="outline" className="p-5 border border-slate-800 bg-slate-900/40">
                <span className="roadmap-companion-title font-mono text-xs text-cyan-400 flex items-center gap-2 mb-3 tracking-wider uppercase">
                  <Compass size={16} />
                  Mindset Shift
                </span>
                <div
                  className="roadmap-companion-body text-slate-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: activeWeek.csharp_mindset }}
                />
              </Card>
            )}

            {/* C# to Python Syntax Card */}
            <Card
              variant="outline"
              interactive
              className="p-5 border border-slate-800 bg-slate-900/40 cursor-pointer hover:border-cyan-400/40 transition-all duration-300"
              onClick={() => setShowGlossaryModal(true)}
            >
              <span className="roadmap-companion-title font-mono text-xs text-cyan-400 flex items-center gap-2 mb-3 tracking-wider uppercase">
                <BookOpen size={16} />
                Parallel Syntax
              </span>
              <div className="roadmap-companion-body border-l-2 border-cyan-400 pl-3">
                <Text size="xs" muted className="leading-relaxed">
                  A quick comparative lookup of C# constructs mapping directly to Python equivalents.
                </Text>
                <Flex align="center" justify="between" className="mt-4">
                  <Badge variant="outline" color="neutral" className="font-mono text-[10px]">
                    12 rules loaded
                  </Badge>
                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    Open Guide →
                  </span>
                </Flex>
              </div>
            </Card>
          </aside>

          {/* Main Area */}
          <main className="lg:col-span-9 roadmap-content-area flex flex-col gap-6">
            {/* Week Selector */}
            {activeMonth && (
              <Flex gap="2" wrap="wrap" className="roadmap-week-tabs p-1 border border-slate-800 rounded bg-slate-900/60 w-fit">
                {activeMonth.weeks.map(w => (
                  <Button
                    key={w.id}
                    variant={activeWeekId === w.id ? "solid" : "ghost"}
                    color={activeWeekId === w.id ? "primary" : "neutral"}
                    size="sm"
                    onClick={() => setActiveWeekId(w.id)}
                    className="font-semibold cursor-pointer"
                  >
                    Week {w.week_number}
                  </Button>
                ))}
              </Flex>
            )}

            {/* Week Headers */}
            {activeWeek && (
              <>
                <Card variant="outline" className="p-6 border border-slate-800 bg-slate-900/40">
                  <Flex justify="between" align="center" wrap="wrap" gap="4" className="roadmap-week-info-header mb-4 border-b border-slate-800/40 pb-4">
                    <Heading as="h2" size="xl" className="font-bold text-slate-100">Week {activeWeek.week_number} — {activeWeek.title}</Heading>
                    <Badge variant="soft" color="primary" className="font-mono text-xs">{activeWeek.focus_hours}</Badge>
                  </Flex>

                  {activeWeek.weekly_goal && (
                    <Flex gap="3" className="roadmap-goal-box bg-slate-950/40 p-4 border border-slate-800 rounded">
                      <Calendar size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="roadmap-goal-text text-sm text-slate-300"><strong>Goal:</strong> {activeWeek.weekly_goal}</p>
                    </Flex>
                  )}
                </Card>

                {/* Week-specific task search */}
                <Flex align="center" gap="4" className="roadmap-week-search-row">
                  <div className="roadmap-week-search-container relative flex-grow">
                    <Search size={14} className="roadmap-week-search-icon absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 z-10" />
                    <Input
                      type="text"
                      className="pl-10"
                      placeholder={`Search tasks in Week ${activeWeek.week_number}...`}
                      value={weekSearch}
                      onChange={e => setWeekSearch(e.target.value)}
                      fullWidth
                    />
                    {weekSearch && (
                      <button
                        className="roadmap-week-search-clear-btn absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer z-10"
                        onClick={() => setWeekSearch("")}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </Flex>

                {/* Checklist Grid */}
                {filteredDays.length > 0 ? (
                  <Grid columns={{ base: 1, md: 2 }} gap="6" className="roadmap-day-grid">
                    {filteredDays.map((day) => (
                      <Card key={day.id} variant="outline" className="p-5 border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                        <div>
                          <Flex justify="between" align="center" className="roadmap-day-header mb-4 pb-2 border-b border-slate-800/40">
                            <Flex align="center" gap="2" className="roadmap-day-title-group">
                              <Heading as="h4" size="md" className="font-bold text-slate-100">{day.day_name}</Heading>
                              <Text size="xs" muted className="font-mono">({day.hours})</Text>
                            </Flex>
                            <Badge
                              variant="soft"
                              color={
                                day.type.toLowerCase() === "learn" 
                                  ? "primary" 
                                  : day.type.toLowerCase() === "code" 
                                  ? "secondary"
                                  : "warning"
                              }
                              className="font-mono text-[10px] uppercase flex items-center gap-1.5"
                            >
                              {renderDayTypeIcon(day.type)}
                              {day.type}
                            </Badge>
                          </Flex>

                          <ul className="roadmap-task-list flex flex-col gap-3">
                            {day.tasks.map(task => {
                              const isDone = !!completedTaskIds[task.id];
                              return (
                                <li key={task.id} className="list-none">
                                  <label className="w-full flex items-start gap-3 p-2.5 rounded bg-slate-950/40 border border-slate-800/40 hover:border-slate-700/50 transition-all duration-200 cursor-pointer select-none">
                                    <div className="mt-0.5 shrink-0">
                                      <Checkbox
                                        checked={isDone}
                                        onCheckedChange={() => handleToggleTask(task.id)}
                                      />
                                    </div>
                                    <span className="roadmap-task-text text-xs sm:text-sm text-slate-300 flex-1 leading-normal text-left">
                                      <Badge variant="soft" color="primary" className="font-mono text-[10px] mr-1.5 align-middle">
                                        {task.task_num}
                                      </Badge>
                                      <span dangerouslySetInnerHTML={{ __html: task.content }} className="align-middle" />
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </Card>
                    ))}
                  </Grid>
                ) : (
                  <Card variant="outline" className="p-12 text-center border border-slate-800 bg-slate-900/40 text-slate-500">
                    No tasks matching "{weekSearch}" found in Week {activeWeek.week_number}.
                  </Card>
                )}

                {/* Journal Block */}
                <Card variant="outline" className="p-6 sm:p-8 border border-slate-800 bg-slate-900/40 shadow-lg flex flex-col gap-6">
                  <Flex justify="between" align="center" wrap="wrap" gap="4">
                    <Heading as="h2" size="lg" className="font-bold text-slate-100">Week {activeWeek.week_number} — Retro Log</Heading>
                    <span className="roadmap-week-info-meta font-mono text-xs">
                      {saveStatus ? (
                        <Badge variant="soft" color="success" className="flex items-center gap-1.5">
                          <Check size={14} /> Log Saved
                        </Badge>
                      ) : (
                        `RETROSPECTIVE LOG // WEEK ${activeWeek.week_number}`
                      )}
                    </span>
                  </Flex>

                  <Stack gap="5" className="roadmap-journal-grid">
                    <Field label="💡 What I learned this week">
                      <Textarea
                        placeholder={role ? "Summarize key concepts, tools, or experiments..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={learnedText}
                        rows={4}
                        onChange={e => setLearnedText(e.target.value)}
                        fullWidth
                      />
                    </Field>

                    <Field label="⚠️ Difficulties & Bugs">
                      <Textarea
                        placeholder={role ? "Mention errors, roadblocks or things to study further..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={difficultiesText}
                        rows={4}
                        onChange={e => setDifficultiesText(e.target.value)}
                        fullWidth
                      />
                    </Field>

                    <Field label="📝 General Review & Ideas">
                      <Textarea
                        placeholder={role ? "Reflections, next steps, coding project sketches..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={notesText}
                        rows={4}
                        onChange={e => setNotesText(e.target.value)}
                        fullWidth
                      />
                    </Field>
                  </Stack>

                  <div className="roadmap-journal-footer border-t border-slate-800/40 pt-4 flex justify-end">
                    <Button
                      onClick={handleSaveJournal}
                      disabled={isSavingJournal || !role}
                      variant="solid"
                      color="primary"
                      loading={isSavingJournal}
                      className="cursor-pointer"
                    >
                      Save Review
                    </Button>
                  </div>
                </Card>
              </>
            )}
          </main>
        </Grid>
      </div>

      {/* Login Gate Modal */}
      <Modal open={showLoginModal} onOpenChange={setShowLoginModal}>
        <Modal.Content size="sm" centered className="border border-slate-800 bg-slate-900 text-slate-100 p-6">
          <Modal.Header className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
            <span className="font-mono text-cyan-400 text-sm flex items-center gap-2 uppercase tracking-wider">
              <Lock size={16} />
              Access Gatekeeper
            </span>
            <Modal.Close asChild>
              <button className="text-slate-500 hover:text-slate-300 cursor-pointer">
                <X size={18} />
              </button>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <Text size="sm" muted>
                {pendingAction
                  ? "Authentication is required to modify roadmap progress or save review logs."
                  : "Sign in to track progress checklists and write retrospective review logs."
                }
              </Text>

              <Card variant="soft" color="neutral" className="p-3 font-mono text-xs text-slate-400">
                <span><strong>Visitors</strong>: Login with <code>visitor</code> / <code>visitor110</code></span>
              </Card>

              {loginError && (
                <Badge variant="soft" color="danger" className="p-3 w-full justify-start font-mono text-xs text-red-400 flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{loginError}</span>
                </Badge>
              )}

              <Field label="Username">
                <Input
                  type="text"
                  required
                  placeholder="Username"
                  value={loginUsername}
                  onChange={e => setLoginUsername(e.target.value)}
                  fullWidth
                />
              </Field>

              <Field label="Password">
                <Input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  fullWidth
                />
              </Field>

              <Button type="submit" variant="solid" color="primary" loading={isLoggingIn} fullWidth className="mt-2 cursor-pointer">
                Authenticate
              </Button>
            </form>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      {/* Parallel Syntax Catalog Modal */}
      <Modal open={showGlossaryModal} onOpenChange={setShowGlossaryModal}>
        <Modal.Content size="lg" centered className="border border-slate-800 bg-slate-905 text-slate-100 p-6 max-h-[85vh] flex flex-col">
          <Modal.Header className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800 flex-shrink-0">
            <span className="font-mono text-cyan-400 text-sm flex items-center gap-2 uppercase tracking-wider">
              <BookOpen size={16} />
              Parallel Syntax Catalog
            </span>
            <Modal.Close asChild>
              <button className="text-slate-500 hover:text-slate-300 cursor-pointer">
                <X size={18} />
              </button>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body className="overflow-y-auto flex-grow pr-1 flex flex-col gap-6">
            <Text size="sm" muted>
              A quick-reference lookup comparing C# constructs and their Python equivalents. Select a category or use the search bar to filter rules.
            </Text>

            {/* Search and Category Filter Row */}
            <Flex gap="4" wrap="wrap" className="roadmap-syntax-filter-row items-center">
              <div className="roadmap-syntax-search-container relative flex-grow">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 z-10" />
                <Input
                  type="text"
                  className="pl-10"
                  placeholder="Search C#, Python or descriptions..."
                  value={glossarySearch}
                  onChange={e => setGlossarySearch(e.target.value)}
                  fullWidth
                />
              </div>
              <Flex gap="2" className="roadmap-syntax-category-filters font-mono text-xs">
                {["all", "basics", "collections", "oop", "advanced"].map(cat => (
                  <Button
                    key={cat}
                    variant={glossaryCategory === cat ? "solid" : "outline"}
                    color={glossaryCategory === cat ? "primary" : "neutral"}
                    size="xs"
                    onClick={() => setGlossaryCategory(cat)}
                    className="uppercase cursor-pointer"
                  >
                    {cat}
                  </Button>
                ))}
              </Flex>
            </Flex>

            {/* Glossary list */}
            {filteredGlossary.length > 0 ? (
              <Stack gap="6" className="roadmap-syntax-list pb-4">
                {filteredGlossary.map((item, idx) => (
                  <Card key={idx} variant="outline" className="p-5 border border-slate-800/60 bg-slate-900/40">
                    <Flex justify="between" align="center" wrap="wrap" gap="2" className="mb-3">
                      <Badge variant="soft" color="primary" className="font-mono text-xs">
                        {item.category.toUpperCase()}
                      </Badge>
                      <Text size="sm" className="font-mono font-bold text-slate-200">
                        {item.csharp} <span className="text-slate-500">➔</span> {item.python}
                      </Text>
                    </Flex>
                    <Text size="sm" muted className="leading-relaxed mb-4">{item.desc}</Text>
                    <Grid columns={{ base: 1, md: 2 }} gap="4" className="roadmap-syntax-codes font-mono text-xs">
                      <Box className="bg-slate-950 border border-slate-850 p-4 rounded overflow-x-auto">
                        <div className="text-[10px] text-slate-500 mb-2">// C# IMPLEMENTATION</div>
                        <pre dangerouslySetInnerHTML={{ __html: highlightCode(item.csharpCode, "csharp") }} />
                      </Box>
                      <Box className="bg-slate-950 border border-slate-850 p-4 rounded overflow-x-auto">
                        <div className="text-[10px] text-slate-500 mb-2"># PYTHON EQUIVALENT</div>
                        <pre dangerouslySetInnerHTML={{ __html: highlightCode(item.pythonCode, "python") }} />
                      </Box>
                    </Grid>
                  </Card>
                ))}
              </Stack>
            ) : (
              <Card variant="outline" className="p-8 text-center border border-slate-800 bg-slate-900/40 text-slate-500">
                No syntax comparisons matching your search criteria.
              </Card>
            )}
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />
    </div>
  );
}
