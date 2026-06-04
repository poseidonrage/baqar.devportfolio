import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  TrendingUp, 
  Calendar, 
  Clock, 
  BookMarked,
  FileText,
  Search,
  Check,
  AlertCircle,
  Lock,
  LogOut,
  X,
  Sun,
  Moon
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
  { csharp: "async / await", python: "async / await", desc: "Both support asynchronous programming with identical keywords. C# returns Task/Task<T>, whereas Python returns a coroutine object." },
  { csharp: "List<T>", python: "list", desc: "Dynamically sized arrays. C# is strongly-typed, whereas Python lists can hold any elements (e.g., my_list = [1, 'hello', True])." },
  { csharp: "Dictionary<TKey, TValue>", python: "dict", desc: "Key-value pair collections. Written in Python as: my_dict = {'key': 'value'}. Python dictionaries maintain insertion order since 3.7." },
  { csharp: "interface", python: "ABC / typing.Protocol", desc: "C# uses explicit interfaces. Python uses Duck Typing naturally, but can enforce contract validation using Abstract Base Classes (ABC) or Protocol." },
  { csharp: "namespace", python: "module / package", desc: "C# organizes code with namespace scopes. Python uses files (modules) and folders with __init__.py (packages) to construct module paths." },
  { csharp: "Console.WriteLine()", python: "print()", desc: "Prints output to console. Python print() automatically appends a newline unless configured otherwise (e.g. print(x, end=' '))." },
  { csharp: "class / constructor (public MyClass())", python: "class / __init__(self)", desc: "C# uses class name as constructor. Python uses the special method __init__ with explicit 'self' as the first parameter to reference instance context." },
  { csharp: "null", python: "None", desc: "Represents the absence of value. Python uses the singleton object None instead of null." },
  { csharp: "var", python: "(implicitly typed)", desc: "C# uses var for local type inference. Python is dynamically typed by default, meaning variables can change types at runtime." },
  { csharp: "linq (Select/Where)", python: "List Comprehensions / filter() / map()", desc: "LINQ expressions in C# translate directly to list comprehensions in Python (e.g., [x * 2 for x in my_list if x > 5])." },
  { csharp: "string.Format() / $\"\"", python: "f-strings (f\"{var}\")", desc: "String interpolation. C# uses dollar-sign strings. Python uses f-prefix strings (e.g., f\"Hello, {name}\") which are highly optimized." },
  { csharp: "try / catch / finally", python: "try / except / finally", desc: "Error handling blocks. C# uses 'catch (Exception e)', Python uses 'except Exception as e'." },
];

export const RoadmapTracker: React.FC = () => {
  const [curriculum] = useState<Month[]>(curriculumData as Month[]);
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});
  const [journal, setJournal] = useState<Record<string, JournalEntry>>({});
  const [activeMonthId, setActiveMonthId] = useState<number>(1);
  const [activeWeekId, setActiveWeekId] = useState<number>(1);
  
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('roadmapTheme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('roadmapTheme', theme);
  }, [theme]);
  
  // Auth state
  const [role, setRole] = useState<'admin' | 'visitor' | null>(() => {
    const savedRole = sessionStorage.getItem('roadmapRole');
    if (savedRole === 'admin' || savedRole === 'visitor') return savedRole;
    if (sessionStorage.getItem('adminToken')) return 'admin';
    return null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem('roadmapToken') || sessionStorage.getItem('adminToken');
  });

  // UI state
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);

  // Journal form state
  const [learnedText, setLearnedText] = useState<string>('');
  const [difficultiesText, setDifficultiesText] = useState<string>('');
  const [notesText, setNotesText] = useState<string>('');
  const [isSavingJournal, setIsSavingJournal] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  // Search state
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // Automatically check if portfolio admin session changes
  useEffect(() => {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken && role !== 'admin') {
      setRole('admin');
      setToken(adminToken);
      sessionStorage.setItem('roadmapRole', 'admin');
      sessionStorage.setItem('roadmapToken', adminToken);
    }
  }, [role]);

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
      setLearnedText(entry.learned || '');
      setDifficultiesText(entry.difficulties || '');
      setNotesText(entry.notes || '');
    } else {
      setLearnedText('');
      setDifficultiesText('');
      setNotesText('');
    }
  }, [activeWeekId, journal]);

  const fetchProgressAndJournals = async () => {
    if (!token) return;
    try {
      const headers = { 'Authorization': `Bearer ${token}` };
      
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

        // Convert progress list to map
        const progressMap: Record<string, boolean> = {};
        progressData.forEach((p: { taskId: string; completed: boolean }) => {
          progressMap[p.taskId] = p.completed;
        });
        setCompletedTaskIds(progressMap);

        // Convert journal array to map
        const journalMap: Record<string, JournalEntry> = {};
        journalData.forEach((j: { weekId: string; learned: string; difficulties: string; notes: string }) => {
          journalMap[j.weekId] = j;
        });
        setJournal(journalMap);
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
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      sessionStorage.setItem('roadmapToken', data.token);
      sessionStorage.setItem('roadmapRole', data.role);
      
      if (data.role === 'admin') {
        sessionStorage.setItem('adminToken', data.token);
      }

      setToken(data.token);
      setRole(data.role as 'admin' | 'visitor');
      setShowLoginModal(false);
      setLoginUsername('');
      setLoginPassword('');
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ taskId, completed: isCompleted })
      });

      if (!res.ok) {
        throw new Error();
      }
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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

  const filteredGlossary = glossaryItems.filter(item => 
    item.csharp.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.python.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.desc.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className={`roadmap-wrapper theme-${theme}`}>
      <div className="roadmap-app-container container">
        {/* Header */}
        <header className="roadmap-header">
          <div className="roadmap-version-badge font-mono">
            <span className="roadmap-badge-dot"></span>
            <span>GENAI ROADMAP // INTERACTIVE TRACKER</span>
          </div>

          <div className="roadmap-header-title-row">
            <h1 className="roadmap-title">GenAI Roadmap Activity Tracker</h1>
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
          
          <p className="roadmap-subtitle">
            Track your learning checkpoints, tasks progress, and retrospective journal notes across the 24-week curriculum.
          </p>
        </header>

        {/* Guest Banner */}
        {!role && (
          <div className="roadmap-banner-alert font-mono">
            <AlertCircle size={16} />
            <span>Viewing in read-only guest mode. To mark tasks and save journal logs, click <strong>Track Progress</strong> and log in with visitor account (<code>visitor</code> / <code>visitor110</code>).</span>
          </div>
        )}

        {/* KPI Panel */}
        <section className="roadmap-stats-grid">
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val">{overallPercent}%</span>
              <span className="roadmap-stat-lbl">OVERALL PROGRESS</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <CheckCircle2 size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val">
                {completedTasks} <span className="roadmap-stat-total">/ {totalTasks}</span>
              </span>
              <span className="roadmap-stat-lbl">TASKS COMPLETED</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <Clock size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val">~{totalHours} hrs</span>
              <span className="roadmap-stat-lbl">CURRICULUM SIZE</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <BookMarked size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val">{journalCount} <span className="roadmap-stat-total">/ 24</span></span>
              <span className="roadmap-stat-lbl">WEEKLY JOURNALS FILLED</span>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <div className="roadmap-dashboard-layout">
          {/* Sidebar */}
          <aside className="roadmap-sidebar">
            <div className="roadmap-navigation-panel">
              <div className="roadmap-nav-section-title">ROADMAP MONTHS</div>
              <ul className="roadmap-month-list">
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
                    <li key={m.id}>
                      <button
                        className={`roadmap-month-nav-btn ${activeMonthId === m.id ? 'active' : ''}`}
                        onClick={() => handleMonthSelect(m.id)}
                      >
                        <span className="roadmap-month-nav-title">
                          M{m.id}: {m.title}
                        </span>
                        <span className="roadmap-month-nav-progress font-mono">{mPercent}%</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mindset Widget */}
            {activeWeek && activeWeek.csharp_mindset && (
              <div className="roadmap-companion-card">
                <span className="roadmap-companion-title font-mono">
                  <Compass size={16} />
                  Mindset Shift
                </span>
                <div 
                  className="roadmap-companion-body"
                  dangerouslySetInnerHTML={{ __html: activeWeek.csharp_mindset }}
                />
              </div>
            )}
          </aside>

          {/* Main Area */}
          <main className="roadmap-content-area">
            {/* Week Selector */}
            {activeMonth && (
              <div className="roadmap-week-tabs">
                {activeMonth.weeks.map(w => (
                  <button
                    key={w.id}
                    className={`roadmap-week-tab-btn ${activeWeekId === w.id ? 'active' : ''}`}
                    onClick={() => setActiveWeekId(w.id)}
                  >
                    Week {w.week_number}
                  </button>
                ))}
              </div>
            )}

            {/* Week Headers */}
            {activeWeek && (
              <>
                <div className="roadmap-week-info-card">
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

                {/* Checklist Grid */}
                <div className="roadmap-day-grid">
                  {activeWeek.days.map((day) => (
                    <div key={day.id} className="roadmap-day-card">
                      <div className="roadmap-day-header">
                        <div className="roadmap-day-title-group">
                          <span className="roadmap-day-name">{day.day_name}</span>
                          <span className="roadmap-day-hrs">{day.hours}</span>
                        </div>
                        <span className={`roadmap-day-type type-${day.type.toLowerCase()}`}>
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
                              onClick={() => handleToggleTask(task.id)}
                            >
                              <div className={`roadmap-task-checkbox-container ${isDone ? 'checked' : ''}`}>
                                {isDone && <Check size={10} strokeWidth={4} />}
                              </div>
                              <span className="roadmap-task-text">
                                <span className="roadmap-task-num-badge">{task.task_num}</span>
                                {task.content}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Journal Block */}
                <section className="roadmap-journal-section">
                  <div className="roadmap-journal-header">
                    <h3 className="roadmap-journal-title">
                      <FileText size={16} />
                      Week {activeWeek.week_number} Retro Log
                    </h3>
                    {saveStatus && (
                      <span className="roadmap-journal-saved-lbl font-mono">
                        <Check size={14} />
                        Log Saved
                      </span>
                    )}
                  </div>

                  <div className="roadmap-journal-grid">
                    <div className="roadmap-journal-field">
                      <label className="roadmap-journal-label">💡 What I learned this week</label>
                      <textarea
                        className="roadmap-journal-input"
                        placeholder={role ? "Summarize key concepts, tools, or experiments..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={learnedText}
                        onChange={e => setLearnedText(e.target.value)}
                      />
                    </div>

                    <div className="roadmap-journal-field">
                      <label className="roadmap-journal-label">⚠️ Difficulties & Bugs</label>
                      <textarea
                        className="roadmap-journal-input"
                        placeholder={role ? "Mention errors, roadblocks or things to study further..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={difficultiesText}
                        onChange={e => setDifficultiesText(e.target.value)}
                      />
                    </div>

                    <div className="roadmap-journal-field">
                      <label className="roadmap-journal-label">📝 General Review & Ideas</label>
                      <textarea
                        className="roadmap-journal-input"
                        placeholder={role ? "Reflections, next steps, coding project sketches..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={notesText}
                        onChange={e => setNotesText(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="roadmap-journal-footer">
                    <button 
                      onClick={handleSaveJournal}
                      disabled={isSavingJournal}
                      className="roadmap-btn-primary"
                    >
                      {isSavingJournal ? 'Saving...' : 'Save Review'}
                    </button>
                  </div>
                </section>
              </>
            )}

            {/* Syntax Reference */}
            <section className="roadmap-glossary-card">
              <div className="roadmap-glossary-header">
                <h3 className="roadmap-glossary-title">
                  <BookOpen size={16} />
                  C# to Python Parallel Syntax
                </h3>
                <div className="roadmap-glossary-search-wrapper">
                  <Search size={14} className="roadmap-glossary-search-icon" />
                  <input
                    type="text"
                    className="roadmap-glossary-search-input"
                    placeholder="Search syntax terms..."
                    value={glossarySearch}
                    onChange={e => setGlossarySearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="roadmap-glossary-grid">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className="roadmap-glossary-item">
                    <div className="roadmap-glossary-term-row">
                      <span className="roadmap-csharp-term">C# : {item.csharp}</span>
                      <span className="roadmap-python-term">Python : {item.python}</span>
                    </div>
                    <p className="roadmap-glossary-desc">{item.desc}</p>
                  </div>
                ))}
                {filteredGlossary.length === 0 && (
                  <div className="roadmap-glossary-empty">
                    No matching keywords found.
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Login Gate Modal */}
      {showLoginModal && (
        <div className="roadmap-modal-overlay">
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

      {/* Embedded CSS rules */}
      <style>{`
        /* Reset raw section element paddings that leak from global portfolio stylesheet */
        .roadmap-wrapper section {
          padding: 0 !important;
          position: relative;
        }

        .roadmap-wrapper {
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --font-sans: 'Outfit', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .roadmap-wrapper.theme-light {
          --bg-app: #f8fafc;
          --bg-gradient: radial-gradient(circle at 50% 0%, #e2e8f0 0%, #f8fafc 100%);
          --bg-card: #ffffff;
          --bg-card-hover: #f1f5f9;
          
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
          --text-info: #0284c7;
          
          --border-color: rgba(0, 0, 0, 0.06);
          --border-hover: rgba(14, 165, 233, 0.3);
          --accent: #0284c7;
          --accent-rgb: 2, 132, 199;
          --accent-glow: rgba(2, 132, 199, 0.06);
          --accent-border: rgba(2, 132, 199, 0.15);
          
          --color-learn: #3b82f6;
          --color-build: #10b981;
          --color-read: #f59e0b;
          --color-check: #8b5cf6;
          
          --badge-info-bg: rgba(2, 132, 199, 0.06);
          --badge-info-text: #0369a1;
          --badge-info-border: rgba(2, 132, 199, 0.12);

          --shadow-sm: 0 2px 4px rgba(0,0,0,0.02);
          --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.04);
          --shadow-lg: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.06);

          --progress-badge-bg: rgba(0, 0, 0, 0.05);
          --code-bg: rgba(0, 0, 0, 0.04);
          --goal-bg: rgba(2, 132, 199, 0.03);
          --goal-border: rgba(2, 132, 199, 0.08);
          
          --day-type-learn-bg: rgba(59, 130, 246, 0.08);
          --day-type-build-bg: rgba(16, 185, 129, 0.08);
          --day-type-read-bg: rgba(245, 158, 11, 0.08);
          
          --input-bg: #f8fafc;
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
        }
        .roadmap-app-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .roadmap-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
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
          padding: 6px 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }
        .roadmap-badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent);
        }
        .roadmap-header-title-row {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 0.5rem;
        }
        .roadmap-title {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: var(--title-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .roadmap-header-actions {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
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
        .roadmap-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
        }
        .roadmap-banner-alert {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: var(--color-read);
          border-radius: var(--radius-sm);
          padding: 10px 16px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }
        /* Stats grid */
        .roadmap-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .roadmap-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-stat-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-md);
        }
        .roadmap-stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--accent-glow);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .roadmap-stat-info {
          display: flex;
          flex-direction: column;
        }
        .roadmap-stat-val {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
          line-height: 1.2;
        }
        .roadmap-stat-total {
          font-size: 14px;
          color: var(--text-muted);
        }
        .roadmap-stat-lbl {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        /* Dashboard layout */
        .roadmap-dashboard-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .roadmap-dashboard-layout {
            grid-template-columns: 1fr;
          }
          .roadmap-header-actions {
            position: static;
            margin: 1rem auto 0;
            width: fit-content;
            justify-content: center;
          }
          .roadmap-header-title-row {
            flex-direction: column;
          }
        }
        /* Sidebar */
        .roadmap-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .roadmap-navigation-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .roadmap-nav-section-title {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
          font-weight: 700;
        }
        .roadmap-month-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .roadmap-month-nav-btn {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid transparent;
          background: transparent;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition-smooth);
          font-family: inherit;
        }
        .roadmap-month-nav-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }
        .roadmap-month-nav-btn.active {
          background: var(--accent-glow);
          color: var(--accent);
          border-color: var(--accent-border);
          font-weight: 600;
        }
        .roadmap-month-nav-title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 170px;
        }
        .roadmap-month-nav-progress {
          font-size: 11px;
          font-family: var(--font-mono);
          background: var(--progress-badge-bg);
          padding: 2px 6px;
          border-radius: 10px;
          color: var(--text-secondary);
        }
        .roadmap-month-nav-btn.active .roadmap-month-nav-progress {
          background: var(--accent-glow);
          color: var(--accent);
        }
        /* Mindset shift widget */
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
          font-size: 15px;
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
        /* Main Area */
        .roadmap-content-area {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        /* Week selector tabs */
        .roadmap-week-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 6px;
        }
        .roadmap-week-tab-btn {
          padding: 10px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-week-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }
        .roadmap-week-tab-btn.active {
          background: var(--timeline-btn-active-bg);
          color: var(--timeline-btn-active-text);
          border-color: var(--timeline-btn-active-bg);
        }
        /* Week header card */
        .roadmap-week-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
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
          font-size: 1.5rem;
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
          padding: 1rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 14px;
          color: var(--text-info);
          line-height: 1.5;
        }
        .roadmap-goal-box svg {
          flex-shrink: 0;
          color: var(--accent);
          margin-top: 2px;
        }
        .roadmap-goal-text {
          margin: 0;
        }
        /* Day grid */
        .roadmap-day-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
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
          font-size: 16px;
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
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.03em;
        }
        .roadmap-day-type.type-learn {
          background: var(--day-type-learn-bg);
          color: var(--color-learn);
        }
        .roadmap-day-type.type-build {
          background: var(--day-type-build-bg);
          color: var(--color-build);
        }
        .roadmap-day-type.type-read {
          background: var(--day-type-read-bg);
          color: var(--color-read);
        }
        /* Checklists */
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
          font-size: 13.5px;
          color: var(--text-secondary);
          cursor: pointer;
          user-select: none;
          padding: 2px 0;
          transition: var(--transition-smooth);
        }
        .roadmap-task-item:hover {
          color: var(--text-primary);
        }
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
        .roadmap-task-checkbox-container.checked svg {
          color: #ffffff;
        }
        .roadmap-task-text {
          transition: var(--transition-smooth);
          line-height: 1.4;
        }
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
        /* Journal Section */
        .roadmap-journal-section {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-journal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .roadmap-journal-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-journal-saved-lbl {
          font-size: 12px;
          color: var(--color-build);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .roadmap-journal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        .roadmap-journal-grid textarea {
          font-family: var(--font-sans);
        }
        .roadmap-journal-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .roadmap-journal-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .roadmap-journal-input {
          width: 100%;
          height: 100px;
          background: var(--input-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          font-family: inherit;
          font-size: 13.5px;
          color: var(--text-primary);
          resize: vertical;
          outline: none;
          transition: var(--transition-smooth);
        }
        .roadmap-journal-input:focus {
          border-color: var(--accent);
          background: var(--bg-card);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .roadmap-journal-input:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .roadmap-journal-footer {
          display: flex;
          justify-content: flex-end;
        }
        .roadmap-btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          padding: 10px 20px;
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
        /* Glossary section */
        .roadmap-glossary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-glossary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .roadmap-glossary-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-glossary-search-wrapper {
          position: relative;
          max-width: 320px;
          width: 100%;
        }
        .roadmap-glossary-search-input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 13px;
          outline: none;
          background: var(--input-bg);
          transition: var(--transition-smooth);
          color: var(--text-primary);
        }
        .roadmap-glossary-search-input:focus {
          border-color: var(--accent);
          background: var(--bg-card);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .roadmap-glossary-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .roadmap-glossary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1rem;
        }
        .roadmap-glossary-item {
          background: var(--input-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .roadmap-glossary-term-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .roadmap-csharp-term {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          background: var(--code-bg);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .roadmap-python-term {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-build);
          background: rgba(16, 185, 129, 0.08);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .roadmap-glossary-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .roadmap-glossary-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          font-size: 14px;
        }
        /* Login modal gatekeeper */
        .roadmap-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--modal-overlay-bg);
          backdrop-filter: blur(8px);
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
        .roadmap-modal-close:hover {
          color: var(--text-primary);
        }
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
        .roadmap-modal-btn:hover {
          background: var(--btn-primary-hover-bg);
        }
      `}</style>
    </div>
  );
};
