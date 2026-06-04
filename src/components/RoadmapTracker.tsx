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
  X
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
      
      // If logging in as admin, sync with main portfolio session too
      if (data.role === 'admin') {
        sessionStorage.setItem('adminToken', data.token);
      }

      setToken(data.token);
      setRole(data.role as 'admin' | 'visitor');
      setShowLoginModal(false);
      setLoginUsername('');
      setLoginPassword('');

      // Retry pending action if applicable
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

    // Optimistic UI update
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
      // Revert optimistic update
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
    <div className="roadmap-wrapper">
      <div className="roadmap-app-container container">
        {/* Header */}
        <header className="roadmap-header">
          <div className="roadmap-version-badge">
            <span className="roadmap-badge-dot"></span>
            <span>GenAI Curriculum // Activity Tracker</span>
          </div>

          <div className="roadmap-header-title-row">
            <h1 className="roadmap-title font-mono text-glow">GenAI 6-Month Roadmap</h1>
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
          
          <p className="roadmap-subtitle">
            A comprehensive, hands-on path mapping the transition from C# to advanced GenAI, LLM integration, and AI agent architectures.
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
              <span className="roadmap-stat-val text-glow">{overallPercent}%</span>
              <span className="roadmap-stat-lbl font-mono">Overall Progress</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <CheckCircle2 size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val text-glow">
                {completedTasks} <span className="roadmap-stat-total">/ {totalTasks}</span>
              </span>
              <span className="roadmap-stat-lbl font-mono">Tasks Completed</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <Clock size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val text-glow">~{totalHours} hrs</span>
              <span className="roadmap-stat-lbl font-mono">Curriculum Weight</span>
            </div>
          </div>
          <div className="roadmap-stat-card">
            <div className="roadmap-stat-icon">
              <BookMarked size={24} />
            </div>
            <div className="roadmap-stat-info">
              <span className="roadmap-stat-val text-glow">{journalCount} <span className="roadmap-stat-total">/ 24</span></span>
              <span className="roadmap-stat-lbl font-mono">Journals Filled</span>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <div className="roadmap-dashboard-layout">
          {/* Sidebar */}
          <aside className="roadmap-sidebar">
            <div className="roadmap-navigation-panel">
              <div className="roadmap-nav-section-title font-mono">Months Timeline</div>
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
                    className={`roadmap-week-tab-btn font-mono ${activeWeekId === w.id ? 'active' : ''}`}
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
                    <h2 className="roadmap-week-info-title font-mono">Week {activeWeek.week_number} — {activeWeek.title}</h2>
                    <span className="roadmap-week-info-meta font-mono">{activeWeek.focus_hours}</span>
                  </div>

                  {activeWeek.weekly_goal && (
                    <div className="roadmap-goal-box">
                      <Calendar size={16} />
                      <p className="roadmap-goal-text"><strong>Goal:</strong> {activeWeek.weekly_goal}</p>
                    </div>
                  )}
                </div>

                {/* Checklist Checklist Grid */}
                <div className="roadmap-day-grid">
                  {activeWeek.days.map((day) => (
                    <div key={day.id} className="roadmap-day-card">
                      <div className="roadmap-day-header">
                        <div className="roadmap-day-title-group">
                          <span className="roadmap-day-name font-mono">{day.day_name}</span>
                          <span className="roadmap-day-hrs font-mono">{day.hours}</span>
                        </div>
                        <span className={`roadmap-day-type font-mono type-${day.type.toLowerCase()}`}>
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
                                <span className="roadmap-task-num-badge font-mono">{task.task_num}</span>
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
                    <h3 className="roadmap-journal-title font-mono">
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
                      <label className="roadmap-journal-label font-mono">💡 What I learned this week</label>
                      <textarea
                        className="roadmap-journal-input"
                        placeholder={role ? "Summarize key concepts, tools, or experiments..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={learnedText}
                        onChange={e => setLearnedText(e.target.value)}
                      />
                    </div>

                    <div className="roadmap-journal-field">
                      <label className="roadmap-journal-label font-mono">⚠️ Difficulties & Bugs</label>
                      <textarea
                        className="roadmap-journal-input"
                        placeholder={role ? "Mention errors, roadblocks or things to study further..." : "Login to write/save notes..."}
                        disabled={!role}
                        value={difficultiesText}
                        onChange={e => setDifficultiesText(e.target.value)}
                      />
                    </div>

                    <div className="roadmap-journal-field">
                      <label className="roadmap-journal-label font-mono">📝 General Review & Ideas</label>
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
                      className="roadmap-btn-primary font-mono"
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
                <h3 className="roadmap-glossary-title font-mono">
                  <BookOpen size={16} />
                  C# to Python Parallel Syntax
                </h3>
                <div className="roadmap-glossary-search-wrapper">
                  <Search size={14} className="roadmap-glossary-search-icon" />
                  <input
                    type="text"
                    className="roadmap-glossary-search-input font-mono"
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
                      <span className="roadmap-csharp-term font-mono">C# : {item.csharp}</span>
                      <span className="roadmap-python-term font-mono">Python : {item.python}</span>
                    </div>
                    <p className="roadmap-glossary-desc">{item.desc}</p>
                  </div>
                ))}
                {filteredGlossary.length === 0 && (
                  <div className="roadmap-glossary-empty font-mono">
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
              <span className="roadmap-modal-title font-mono">
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
              
              <div className="roadmap-modal-credentials-note font-mono">
                <span><strong>Visitors</strong>: Login with <code>visitor</code> / <code>visitor110</code></span>
              </div>

              {loginError && (
                <div className="roadmap-modal-error font-mono">
                  <AlertCircle size={14} />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="roadmap-modal-field">
                <label className="roadmap-modal-label font-mono">Username</label>
                <input
                  type="text"
                  required
                  className="roadmap-modal-input font-mono"
                  placeholder="Username"
                  value={loginUsername}
                  onChange={e => setLoginUsername(e.target.value)}
                />
              </div>

              <div className="roadmap-modal-field">
                <label className="roadmap-modal-label font-mono">Password</label>
                <input
                  type="password"
                  required
                  className="roadmap-modal-input font-mono"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />
              </div>

              <button type="submit" disabled={isLoggingIn} className="roadmap-modal-btn font-mono">
                {isLoggingIn ? 'Verifying...' : 'Authenticate'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Embedded CSS rules */}
      <style>{`
        .roadmap-wrapper {
          color: #ffffff;
          background-color: #07090e;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          padding-top: 8rem;
          padding-bottom: 6rem;
        }
        .roadmap-app-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .roadmap-header {
          margin-bottom: 2.5rem;
        }
        .roadmap-version-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          background: rgba(102, 217, 237, 0.05);
          color: #66d9ed;
          border: 1px solid rgba(102, 217, 237, 0.12);
          border-radius: 30px;
          padding: 6px 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          font-weight: 600;
          box-shadow: 0 0 10px rgba(102, 217, 237, 0.05);
        }
        .roadmap-badge-dot {
          width: 6px;
          height: 6px;
          background-color: #66d9ed;
          border-radius: 50%;
          box-shadow: 0 0 6px #66d9ed;
        }
        .roadmap-header-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .roadmap-title {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        .roadmap-subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 750px;
        }
        .roadmap-login-btn, .roadmap-logout-btn {
          background: rgba(13, 19, 31, 0.6);
          border: 1px solid rgba(102, 217, 237, 0.15);
          color: #66d9ed;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .roadmap-login-btn:hover, .roadmap-logout-btn:hover {
          background: rgba(102, 217, 237, 0.1);
          border-color: #66d9ed;
          box-shadow: 0 0 10px rgba(102, 217, 237, 0.15);
        }
        .roadmap-banner-alert {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border-radius: 8px;
          padding: 0.85rem 1.25rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .roadmap-banner-alert code {
          background: rgba(245, 158, 11, 0.15);
          padding: 1px 4px;
          border-radius: 4px;
          font-weight: 600;
        }
        /* Stats Panel */
        .roadmap-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .roadmap-stat-card {
          background: rgba(13, 19, 31, 0.45);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
        }
        .roadmap-stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(102, 217, 237, 0.25);
          background: rgba(13, 19, 31, 0.65);
        }
        .roadmap-stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(102, 217, 237, 0.05);
          color: #66d9ed;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .roadmap-stat-info {
          display: flex;
          flex-direction: column;
        }
        .roadmap-stat-val {
          font-size: 1.65rem;
          font-weight: 700;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          line-height: 1.2;
        }
        .roadmap-stat-total {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.45);
        }
        .roadmap-stat-lbl {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          margin-top: 2px;
        }
        /* Dashboard Layout */
        .roadmap-dashboard-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 992px) {
          .roadmap-dashboard-layout {
            grid-template-columns: 1fr;
          }
        }
        /* Sidebar */
        .roadmap-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .roadmap-navigation-panel {
          background: rgba(13, 19, 31, 0.4);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1rem;
        }
        .roadmap-nav-section-title {
          font-size: 11px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
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
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .roadmap-month-nav-btn:hover {
          background: rgba(13, 19, 31, 0.6);
          color: #ffffff;
        }
        .roadmap-month-nav-btn.active {
          background: rgba(102, 217, 237, 0.05);
          color: #66d9ed;
          border-color: rgba(102, 217, 237, 0.15);
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
          background: rgba(255,255,255,0.05);
          padding: 2px 6px;
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
        }
        .roadmap-month-nav-btn.active .roadmap-month-nav-progress {
          background: rgba(102, 217, 237, 0.12);
          color: #66d9ed;
        }
        /* Mindset shift widget */
        .roadmap-companion-card {
          background: rgba(13, 19, 31, 0.4);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .roadmap-companion-title {
          font-size: 13px;
          font-weight: 600;
          color: #66d9ed;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }
        .roadmap-companion-body {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          border-left: 2px solid #66d9ed;
          padding-left: 10px;
        }
        .roadmap-companion-body code {
          font-family: 'JetBrains Mono', monospace;
          background: rgba(255, 255, 255, 0.05);
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 11px;
          color: #66d9ed;
        }
        /* Main Area */
        .roadmap-content-area {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        /* Week tabs */
        .roadmap-week-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 6px;
        }
        .roadmap-week-tab-btn {
          padding: 8px 16px;
          background: rgba(13, 19, 31, 0.5);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .roadmap-week-tab-btn:hover {
          background: rgba(13, 19, 31, 0.85);
          color: #ffffff;
        }
        .roadmap-week-tab-btn.active {
          background: #ffffff;
          color: #07090e;
          border-color: #ffffff;
        }
        /* Week details card */
        .roadmap-week-info-card {
          background: rgba(13, 19, 31, 0.45);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.5rem;
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
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }
        .roadmap-week-info-meta {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255,255,255,0.05);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .roadmap-goal-box {
          background: rgba(102, 217, 237, 0.03);
          border: 1px solid rgba(102, 217, 237, 0.1);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }
        .roadmap-goal-box svg {
          flex-shrink: 0;
          color: #66d9ed;
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
          background: rgba(13, 19, 31, 0.45);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.25rem;
        }
        .roadmap-day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }
        .roadmap-day-title-group {
          display: flex;
          flex-direction: column;
        }
        .roadmap-day-name {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }
        .roadmap-day-hrs {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
        }
        .roadmap-day-type {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.03em;
        }
        .roadmap-day-type.type-learn {
          background: rgba(59, 130, 246, 0.12);
          color: #60a5fa;
        }
        .roadmap-day-type.type-build {
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
        }
        .roadmap-day-type.type-read {
          background: rgba(245, 158, 11, 0.12);
          color: #fbbf24;
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
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
          user-select: none;
          padding: 2px 0;
          transition: color 0.2s ease;
        }
        .roadmap-task-item:hover {
          color: #ffffff;
        }
        .roadmap-task-checkbox-container {
          position: relative;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .roadmap-task-item:hover .roadmap-task-checkbox-container {
          border-color: #66d9ed;
        }
        .roadmap-task-checkbox-container.checked {
          border-color: #34d399;
          background-color: #34d399;
        }
        .roadmap-task-checkbox-container.checked svg {
          color: #07090e;
        }
        .roadmap-task-text {
          transition: all 0.2s ease;
          line-height: 1.4;
        }
        .roadmap-task-item.completed .roadmap-task-text {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.4);
        }
        .roadmap-task-num-badge {
          font-size: 10px;
          background: rgba(255, 255, 255, 0.05);
          padding: 1px 5px;
          border-radius: 3px;
          margin-right: 6px;
          color: rgba(255, 255, 255, 0.5);
        }
        .roadmap-task-item.completed .roadmap-task-num-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }
        /* Journal Section */
        .roadmap-journal-section {
          background: rgba(13, 19, 31, 0.45);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.5rem;
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
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-journal-saved-lbl {
          font-size: 12px;
          color: #34d399;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .roadmap-journal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        .roadmap-journal-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .roadmap-journal-label {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .roadmap-journal-input {
          width: 100%;
          height: 100px;
          background: rgba(7, 9, 14, 0.6);
          border: 1px solid rgba(102, 217, 237, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-family: inherit;
          font-size: 13px;
          color: #ffffff;
          resize: vertical;
          outline: none;
          transition: all 0.25s ease;
        }
        .roadmap-journal-input:focus {
          border-color: #66d9ed;
          background: rgba(7, 9, 14, 0.95);
          box-shadow: 0 0 10px rgba(102, 217, 237, 0.08);
        }
        .roadmap-journal-input:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .roadmap-journal-footer {
          display: flex;
          justify-content: flex-end;
        }
        .roadmap-btn-primary {
          background: #66d9ed;
          color: #07090e;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .roadmap-btn-primary:hover {
          background: #ffffff;
          box-shadow: 0 0 12px rgba(102, 217, 237, 0.4);
          transform: translateY(-1px);
        }
        .roadmap-btn-primary:active {
          transform: translateY(0);
        }
        /* Glossary section */
        .roadmap-glossary-card {
          background: rgba(13, 19, 31, 0.45);
          border: 1px solid rgba(102, 217, 237, 0.06);
          border-radius: 12px;
          padding: 1.5rem;
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
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
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
          border: 1px solid rgba(102, 217, 237, 0.1);
          border-radius: 20px;
          font-size: 12px;
          outline: none;
          background: rgba(7, 9, 14, 0.6);
          color: #ffffff;
          transition: all 0.2s ease;
        }
        .roadmap-glossary-search-input:focus {
          border-color: #66d9ed;
          background: rgba(7, 9, 14, 0.95);
          box-shadow: 0 0 8px rgba(102, 217, 237, 0.1);
        }
        .roadmap-glossary-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.4);
        }
        .roadmap-glossary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1rem;
        }
        .roadmap-glossary-item {
          background: rgba(7, 9, 14, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
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
          font-size: 11.5px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .roadmap-python-term {
          font-size: 11.5px;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.08);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .roadmap-glossary-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
        .roadmap-glossary-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 2rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: 13px;
        }
        /* Login Modal Gatekeeper */
        .roadmap-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .roadmap-modal-card {
          background: #0d131f;
          border: 1px solid rgba(102, 217, 237, 0.2);
          border-radius: 12px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(102, 217, 237, 0.08);
          overflow: hidden;
        }
        .roadmap-modal-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .roadmap-modal-title {
          font-size: 14px;
          font-weight: 700;
          color: #66d9ed;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }
        .roadmap-modal-close {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .roadmap-modal-close:hover {
          color: #ffffff;
        }
        .roadmap-modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-modal-description {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
        .roadmap-modal-credentials-note {
          background: rgba(102, 217, 237, 0.03);
          border: 1px dashed rgba(102, 217, 237, 0.2);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-size: 12px;
          color: #66d9ed;
          text-align: center;
        }
        .roadmap-modal-credentials-note code {
          background: rgba(102, 217, 237, 0.1);
          padding: 1px 4px;
          border-radius: 4px;
        }
        .roadmap-modal-error {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border-radius: 6px;
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
          color: rgba(255, 255, 255, 0.45);
          font-weight: 600;
        }
        .roadmap-modal-input {
          width: 100%;
          background: rgba(7, 9, 14, 0.8);
          border: 1px solid rgba(102, 217, 237, 0.15);
          border-radius: 6px;
          padding: 10px 12px;
          color: #ffffff;
          font-size: 13.5px;
          outline: none;
          transition: all 0.2s ease;
        }
        .roadmap-modal-input:focus {
          border-color: #66d9ed;
          box-shadow: 0 0 8px rgba(102, 217, 237, 0.1);
        }
        .roadmap-modal-btn {
          background: #66d9ed;
          color: #07090e;
          border: none;
          border-radius: 6px;
          padding: 12px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .roadmap-modal-btn:hover {
          background: #ffffff;
          box-shadow: 0 0 12px rgba(102, 217, 237, 0.4);
        }
        .text-glow {
          text-shadow: 0 0 8px rgba(102, 217, 237, 0.4);
        }
        /* Scroller custom rules */
        .roadmap-week-tabs::-webkit-scrollbar {
          height: 4px;
        }
        .roadmap-week-tabs::-webkit-scrollbar-track {
          background: transparent;
        }
        .roadmap-week-tabs::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};
