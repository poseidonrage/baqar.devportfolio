import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowUpRight,
  Library,
  PlayCircle,
  Menu,
  ChevronDown,
  Flame,
  NotebookPen
} from 'lucide-react';
import type { Month, Week, JournalEntry } from './roadmapData';
import { highlightCode, RESOURCE_KIND_META } from './roadmapData';
import type { RoadmapConfig } from './roadmapConfigs';

// Animates a number toward `target` with an ease-out curve
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

const easeOut = [0.22, 1, 0.36, 1] as const;

// The roadmap tracks this tracker family hosts, for the header switcher.
// Numbered by the learning path: ML foundations → DL/transformers → GenAI → Healthcare AI.
const TRACKS = [
  { num: 1, label: 'ML', path: '/ml-roadmap' },
  { num: 2, label: 'Post-ML', path: '/post-ml-roadmap' },
  { num: 3, label: 'GenAI', path: '/roadmap' },
  { num: 4, label: 'Health', path: '/healthcare-ai-roadmap' },
];

// Resume where the learner left off: read the saved week from localStorage and
// resolve it (plus its parent month) against the curriculum, falling back to the
// first valid week if nothing is saved or the saved id no longer exists.
const readSavedPosition = (config: RoadmapConfig): { monthId: number; weekId: number } => {
  const months = config.curriculum;
  const savedWeek = parseInt(localStorage.getItem(`${config.prefix}roadmapActiveWeek`) || '', 10);
  if (Number.isFinite(savedWeek)) {
    for (const m of months) {
      const wk = m.weeks.find(w => w.id === savedWeek);
      if (wk) return { monthId: m.id, weekId: wk.id };
    }
  }
  const firstMonth = months.find(m => m.weeks.length > 0);
  return { monthId: firstMonth?.id ?? 1, weekId: firstMonth?.weeks[0]?.id ?? 1 };
};

export const RoadmapTracker: React.FC<{ config: RoadmapConfig }> = ({ config }) => {
  // Read straight from the prop — it never changes for a mounted instance
  // (App keys each route's tracker), and freezing it in state left a stale
  // sidebar when React reused the component across a track switch.
  const curriculum: Month[] = config.curriculum;
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});
  const [journal, setJournal] = useState<Record<string, JournalEntry>>({});
  const [activeMonthId, setActiveMonthId] = useState<number>(() => readSavedPosition(config).monthId);
  const [activeWeekId, setActiveWeekId] = useState<number>(() => readSavedPosition(config).weekId);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Persist the current month/week so a return visit resumes here
  useEffect(() => {
    localStorage.setItem(`${config.prefix}roadmapActiveWeek`, String(activeWeekId));
    localStorage.setItem(`${config.prefix}roadmapActiveMonth`, String(activeMonthId));
  }, [activeMonthId, activeWeekId, config.prefix]);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('roadmapTheme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'dark';
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
    if (typeLower === 'learn') return <BookOpen size={12} strokeWidth={2.5} />;
    if (typeLower === 'code') return <Code size={12} strokeWidth={2.5} />;
    if (typeLower === 'build') return <Wrench size={12} strokeWidth={2.5} />;
    if (typeLower === 'review') return <CheckSquare size={12} strokeWidth={2.5} />;
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
    const journalId = `${config.prefix}week_${activeWeekId}`;
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
          const journalId = `${config.prefix}week_${activeWeekId}`;
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

    const journalId = `${config.prefix}week_${activeWeekId}`;
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

  const handleWeekSelect = (monthId: number, weekId: number) => {
    setActiveMonthId(monthId);
    setActiveWeekId(weekId);
    setSidebarOpen(false);
  };

  let totalTasks = 0;
  let completedTasks = 0;
  let totalHours = 0;
  // The journal API returns every entry for the role, both trackers — count only this one's weeks
  const journalCount = curriculum.reduce(
    (n, m) => n + m.weeks.filter(w => journal[`${config.prefix}week_${w.id}`]).length,
    0
  );

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
  const validMonths = curriculum.filter(m => m.weeks.length > 0);
  const activeMonth = curriculum.find(m => m.id === activeMonthId);
  const activeWeek = activeMonth?.weeks.find(w => w.id === activeWeekId);
  const activeWeekResources = activeWeek ? (config.resources[activeWeek.id] || []) : [];
  const monthProjects = config.projects.filter(p => p.monthId === activeMonthId);

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

  const activeWeekPct = activeWeek ? weekPercent(activeWeek) : 0;

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

  const RING_R = 26;
  const RING_CIRC = 2 * Math.PI * RING_R;

  const glossaryFiltered = config.glossary.filter(item => {
    const matchesCategory = glossaryCategory === 'all' || item.category === glossaryCategory;
    const matchesSearch = item.csharp.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.python.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.desc.toLowerCase().includes(glossarySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sidebarContent = (
    <>
      <div className="rt-side-brand">
        <span className="rt-brand-mark"><Flame size={17} strokeWidth={2.4} /></span>
        <div>
          <span className="rt-brand-name">{config.brandName}</span>
          <span className="rt-brand-sub font-mono">{config.brandSub}</span>
        </div>
      </div>

      <div className="rt-track-switch font-mono">
        {TRACKS.map(t => (
          <Link
            key={t.path}
            to={t.path}
            className={t.path === config.path ? 'active' : ''}
          >
            <span className="rt-track-num">{t.num}</span>{t.label}
          </Link>
        ))}
      </div>

      <div className="rt-side-progress">
        <div className="rt-ring-wrap">
          <svg viewBox="0 0 64 64" width="64" height="64">
            <circle className="rt-ring-track" cx="32" cy="32" r={RING_R} />
            <circle
              className="rt-ring-fill"
              cx="32" cy="32" r={RING_R}
              strokeDasharray={RING_CIRC}
              strokeDashoffset={RING_CIRC * (1 - overallPercent / 100)}
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transformBox: 'fill-box' }}
            />
          </svg>
          <span className="rt-ring-label font-mono">{countedPercent}%</span>
        </div>
        <div className="rt-side-stats font-mono">
          <div><strong>{countedTasks}</strong><span>/{totalTasks} tasks</span></div>
          <div><strong>~{totalHours}</strong><span>hours</span></div>
          <div><strong>{journalCount}</strong><span>/{config.journalTotal} journals</span></div>
        </div>
      </div>

      <nav className="rt-side-nav">
        {validMonths.map(m => {
          const mPct = monthPercent(m);
          const isOpen = activeMonthId === m.id;
          return (
            <div key={m.id} className={`rt-nav-month${isOpen ? ' open' : ''}`}>
              <button className="rt-nav-month-btn" onClick={() => handleMonthSelect(m.id)}>
                <span className={`rt-nav-month-num font-mono${mPct >= 100 ? ' done' : ''}`}>
                  {mPct >= 100 ? <Check size={11} strokeWidth={3.5} /> : `M${m.id}`}
                </span>
                <span className="rt-nav-month-title">{monthShortTitle(m)}</span>
                <span className="rt-nav-month-pct font-mono">{mPct}%</span>
                <ChevronDown size={14} className="rt-nav-chev" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="rt-nav-weeks"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: easeOut }}
                  >
                    {m.weeks.map(w => {
                      const wPct = weekPercent(w);
                      const isActive = activeWeekId === w.id;
                      return (
                        <button
                          key={w.id}
                          className={`rt-nav-week${isActive ? ' active' : ''}`}
                          onClick={() => handleWeekSelect(m.id, w.id)}
                        >
                          <span className="rt-nav-week-num font-mono">W{w.week_number}</span>
                          <span className="rt-nav-week-title">{w.title}</span>
                          {wPct >= 100
                            ? <Check size={12} strokeWidth={3.5} className="rt-nav-week-done" />
                            : <span className="rt-nav-week-bar"><span style={{ width: wPct + '%' }} /></span>}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      <div className="rt-side-footer">
          <div className="rt-watermark font-mono" style={{ fontSize: "10px", opacity: 0.5, marginBottom: "8px", textAlign: "center", width: "100%", whiteSpace: "nowrap" }}>
            by Baqar Hussain aka Harshmelllow
          </div>
          <button className="rt-side-action" onClick={() => setShowGlossaryModal(true)}>
          <BookOpen size={15} />
          <span>Parallel Syntax</span>
        </button>
        <div className="rt-side-footer-row">
          <button
            className="rt-icon-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          {role ? (
            <button onClick={handleLogout} className="rt-auth-btn">
              <LogOut size={14} />
              <span>Log out ({role})</span>
            </button>
          ) : (
            <button onClick={() => { setPendingAction(null); setShowLoginModal(true); }} className="rt-auth-btn primary">
              <Lock size={13} />
              <span>Track Progress</span>
            </button>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className={`rt-wrapper theme-${theme}`}>
      {/* Mobile top bar */}
      <div className="rt-topbar">
        <button className="rt-icon-btn" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
          <Menu size={18} />
        </button>
        <span className="rt-topbar-title">
          <Flame size={15} /> {config.brandName}
          {activeWeek && <span className="font-mono"> · W{activeWeek.week_number}</span>}
        </span>
        <span className="rt-topbar-pct font-mono">{overallPercent}%</span>
      </div>

      <div className="rt-shell">
        {/* Sidebar (desktop) */}
        <aside className="rt-sidebar">{sidebarContent}</aside>

        {/* Sidebar drawer (mobile) */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                className="rt-drawer-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                className="rt-sidebar rt-drawer"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <button className="rt-drawer-close rt-icon-btn" onClick={() => setSidebarOpen(false)}>
                  <X size={16} />
                </button>
                {sidebarContent}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="rt-main">
          {!role && (
            <div className="rt-guest-banner font-mono">
              <AlertCircle size={15} />
              <span>Read-only guest mode — click <strong>Track Progress</strong> (<code>visitor</code> / <code>visitor110</code>) to mark tasks and save journals.</span>
            </div>
          )}

          {activeWeek && activeMonth && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeek.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                {/* ── Week hero ── */}
                <header className="rt-hero">
                  <div className="rt-hero-top">
                    <div className="rt-hero-crumbs font-mono">
                      <span className="rt-crumb">{monthShortTitle(activeMonth)}</span>
                      <span className="rt-crumb-sep">/</span>
                      <span className="rt-crumb accent">Week {activeWeek.week_number}</span>
                      {activeMonth.badge_text && <span className="rt-hero-badge">{activeMonth.badge_text}</span>}
                    </div>
                    <div className="rt-hero-search">
                      <Search size={14} />
                      <input
                        type="text"
                        placeholder="Search tasks this week..."
                        value={weekSearch}
                        onChange={e => setWeekSearch(e.target.value)}
                      />
                      {weekSearch && (
                        <button onClick={() => setWeekSearch('')} aria-label="Clear search"><X size={13} /></button>
                      )}
                    </div>
                  </div>

                  <h1 className="rt-hero-title">{activeWeek.title}</h1>

                  {activeWeek.weekly_goal && (
                    <div className="rt-hero-goal">
                      <Calendar size={15} />
                      <p><strong>Goal:</strong> {activeWeek.weekly_goal}</p>
                    </div>
                  )}

                  <div className="rt-hero-meta">
                    <span className="rt-hero-hours font-mono">{activeWeek.focus_hours}</span>
                    <div className="rt-hero-progress">
                      <div className="rt-hero-bar"><span style={{ width: activeWeekPct + '%' }} /></div>
                      <span className="font-mono">{activeWeekPct}%</span>
                    </div>
                  </div>
                </header>

                {/* ── Resources (prominent) ── */}
                {activeWeekResources.length > 0 && (
                  <section className="rt-section">
                    <div className="rt-section-head">
                      <h2 className="rt-section-title">
                        <Sparkles size={15} className="rt-spark" />
                        Resources for this week
                      </h2>
                      <span className="rt-section-count font-mono">{activeWeekResources.length} picks</span>
                    </div>
                    <div className="rt-resource-grid">
                      {activeWeekResources.map((res, idx) => {
                        const { label, Icon } = RESOURCE_KIND_META[res.kind];
                        return (
                          <motion.a
                            key={res.url + res.title}
                            className={`rt-resource rt-rk-${res.kind}`}
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + idx * 0.05, duration: 0.35, ease: easeOut }}
                            whileHover={{ y: -4 }}
                          >
                            <span className="rt-resource-icon"><Icon size={17} strokeWidth={2.2} /></span>
                            <span className="rt-resource-body">
                              <span className="rt-resource-title">{res.title}</span>
                              <span className="rt-resource-meta font-mono">{res.source} · {label}</span>
                            </span>
                            <ArrowUpRight size={14} className="rt-resource-arrow" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* ── Capstone projects ── */}
                {monthProjects.length > 0 && (
                  <section className="rt-section">
                    <div className="rt-section-head">
                      <h2 className="rt-section-title">
                        <TrendingUp size={15} className="rt-spark" />
                        M{activeMonthId} capstone {monthProjects.length > 1 ? 'projects' : 'project'}
                      </h2>
                      <span className="rt-section-count font-mono">{monthProjects.length} build{monthProjects.length > 1 ? 's' : ''}</span>
                    </div>
                    <div className="rt-project-row">
                      {monthProjects.map((project, idx) => (
                        <motion.div
                          key={project.id}
                          className={`rt-project rt-pt-${project.type}`}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + idx * 0.06, duration: 0.35, ease: easeOut }}
                        >
                          <div className="rt-project-head">
                            <span className="rt-project-num font-mono">#{project.id}</span>
                            <span className="rt-project-weeks font-mono">{project.weeks}</span>
                          </div>
                          <h3 className="rt-project-title">{project.title}</h3>
                          <div className="rt-project-tech">
                            {project.techStack.slice(0, 4).map(tech => (
                              <span key={tech} className="font-mono">{tech}</span>
                            ))}
                          </div>
                          <div className="rt-project-io">
                            <div><em>IN</em>{project.input}{project.datasetUrl && (<a className='rt-project-dataset font-mono' href={project.datasetUrl} target='_blank' rel='noopener noreferrer'> · {project.datasetLabel ?? 'dataset'} ↗</a>)}</div>
                            <div><em>OUT</em>{project.output}</div>
                            <div className="rt-project-note"><em>↗</em>{project.note}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ── Daily plan ── */}
                <section className="rt-section">
                  <div className="rt-section-head">
                    <h2 className="rt-section-title">
                      <Calendar size={15} className="rt-spark" />
                      Daily plan
                    </h2>
                    {weekSearch ? (
                      <span className="rt-section-count font-mono">
                        {filteredDays.reduce((acc, d) => acc + d.tasks.length, 0)} match(es)
                      </span>
                    ) : (
                      <span className="rt-section-count font-mono">
                        {activeWeek.days.reduce((a, d) => a + d.tasks.length, 0)} tasks
                      </span>
                    )}
                  </div>

                  {filteredDays.length > 0 ? (
                    <div className="rt-day-grid">
                      {filteredDays.map((day, dayIdx) => {
                        const dayTotal = day.tasks.length;
                        const dayDone = day.tasks.filter(t => completedTaskIds[t.id]).length;
                        const dayPct = dayTotal > 0 ? Math.round((dayDone / dayTotal) * 100) : 0;
                        return (
                          <motion.div
                            key={day.id}
                            className={`rt-day${dayPct >= 100 ? ' complete' : ''}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 + dayIdx * 0.05, duration: 0.4, ease: easeOut }}
                          >
                            <div className="rt-day-bar"><span style={{ width: dayPct + '%' }} /></div>
                            <div className="rt-day-head">
                              <div>
                                <span className="rt-day-name">{day.day_name}</span>
                                <span className="rt-day-hrs font-mono">{day.hours}</span>
                              </div>
                              <span className={`rt-day-type rt-dt-${day.type.toLowerCase()} font-mono`}>
                                {renderDayTypeIcon(day.type)}
                                {day.type}
                              </span>
                            </div>
                            <ul className="rt-task-list">
                              {day.tasks.map(task => {
                                const isDone = !!completedTaskIds[task.id];
                                const isBookTask = task.id.endsWith('_book');
                                const isCourseTask = task.id.endsWith('_course');
                                return (
                                  <li
                                    key={task.id}
                                    className={`rt-task${isDone ? ' done' : ''}${isBookTask ? ' book' : ''}${isCourseTask ? ' course' : ''}`}
                                    onClick={(e) => {
                                      if ((e.target as HTMLElement).closest('a')) return;
                                      handleToggleTask(task.id);
                                    }}
                                  >
                                    <span className={`rt-check${isDone ? ' checked' : ''}`}>
                                      {isDone && <Check size={10} strokeWidth={4} />}
                                    </span>
                                    <span className="rt-task-text">
                                      {isBookTask ? (
                                        <span className="rt-book-badge font-mono">
                                          <Library size={10} strokeWidth={2.5} /> Book
                                        </span>
                                      ) : isCourseTask ? (
                                        <span className="rt-book-badge rt-course-badge font-mono">
                                          <PlayCircle size={10} strokeWidth={2.5} /> Course
                                        </span>
                                      ) : (
                                        <span className="rt-task-num font-mono">{task.task_num}</span>
                                      )}
                                      <span dangerouslySetInnerHTML={{ __html: (isBookTask || isCourseTask)
                                        ? task.content.replace(/^<strong>(Book|Course) companion:<\/strong>\s*/i, '')
                                        : task.content }} />
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rt-empty">No tasks matching "{weekSearch}" in Week {activeWeek.week_number}.</div>
                  )}
                </section>

                {/* ── Journal + Mindset ── */}
                <section className="rt-section rt-bottom-grid">
                  <div className="rt-panel">
                    <div className="rt-section-head">
                      <h2 className="rt-section-title">
                        <NotebookPen size={15} className="rt-spark" />
                        Week {activeWeek.week_number} retro log
                      </h2>
                      {saveStatus && (
                        <span className="rt-saved font-mono"><Check size={13} /> Saved</span>
                      )}
                    </div>
                    <div className="rt-journal-fields">
                      <label>
                        <span>💡 What I learned</span>
                        <textarea
                          placeholder={role ? 'Key concepts, tools, experiments...' : 'Login to write/save notes...'}
                          disabled={!role}
                          value={learnedText}
                          onChange={e => setLearnedText(e.target.value)}
                        />
                      </label>
                      <label>
                        <span>⚠️ Difficulties & bugs</span>
                        <textarea
                          placeholder={role ? 'Errors, roadblocks, gaps to study...' : 'Login to write/save notes...'}
                          disabled={!role}
                          value={difficultiesText}
                          onChange={e => setDifficultiesText(e.target.value)}
                        />
                      </label>
                      <label>
                        <span>📝 Notes & ideas</span>
                        <textarea
                          placeholder={role ? 'Reflections, next steps, sketches...' : 'Login to write/save notes...'}
                          disabled={!role}
                          value={notesText}
                          onChange={e => setNotesText(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="rt-journal-footer">
                      <button onClick={handleSaveJournal} disabled={isSavingJournal} className="rt-btn-primary">
                        {isSavingJournal ? 'Saving...' : 'Save review'}
                      </button>
                    </div>
                  </div>

                  <div className="rt-panel-stack">
                    {activeWeek.mindset && (
                      <div className="rt-panel">
                        <div className="rt-section-head">
                          <h2 className="rt-section-title"><Compass size={15} className="rt-spark" /> {config.mindsetLabel}</h2>
                        </div>
                        <div className="rt-mindset" dangerouslySetInnerHTML={{ __html: activeWeek.mindset }} />
                      </div>
                    )}
                    <button className="rt-panel rt-glossary-cta" onClick={() => setShowGlossaryModal(true)}>
                      <div className="rt-section-head">
                        <h2 className="rt-section-title"><BookOpen size={15} className="rt-spark" /> {config.glossaryTitle}</h2>
                        <span className="rt-section-count font-mono">{config.glossary.length} {config.glossaryUnit}</span>
                      </div>
                      <p>{config.glossaryBlurb}</p>
                      <span className="rt-glossary-open font-mono">Open guide <ArrowUpRight size={13} /></span>
                    </button>
                  </div>
                </section>
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>

      {/* ── Login Modal ── */}
      {showLoginModal && (
        <div
          className="rt-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowLoginModal(false); }}
        >
          <motion.div
            className="rt-modal"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <div className="rt-modal-head">
              <span className="rt-modal-title font-mono"><Lock size={15} /> Access gatekeeper</span>
              <button onClick={() => setShowLoginModal(false)} className="rt-icon-btn"><X size={16} /></button>
            </div>
            <form onSubmit={handleLogin} className="rt-modal-body">
              <p className="rt-modal-desc">
                {pendingAction
                  ? 'Authentication is required to modify roadmap progress or save review logs.'
                  : 'Sign in to track progress checklists and write retrospective review logs.'}
              </p>
              <div className="rt-modal-note">
                <strong>Visitors</strong>: login with <code>visitor</code> / <code>visitor110</code>
              </div>
              {loginError && (
                <div className="rt-modal-error font-mono"><AlertCircle size={13} /><span>{loginError}</span></div>
              )}
              <label className="rt-modal-field">
                <span>Username</span>
                <input type="text" required placeholder="Username" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} />
              </label>
              <label className="rt-modal-field">
                <span>Password</span>
                <input type="password" required placeholder="••••••••" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
              </label>
              <button type="submit" disabled={isLoggingIn} className="rt-btn-primary rt-modal-submit">
                {isLoggingIn ? 'Verifying...' : 'Authenticate'}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* ── Glossary Modal ── */}
      {showGlossaryModal && (
        <div
          className="rt-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowGlossaryModal(false); }}
        >
          <motion.div
            className="rt-modal rt-modal-wide"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <div className="rt-modal-head">
              <span className="rt-modal-title font-mono"><BookOpen size={15} /> {config.glossaryModalTitle}</span>
              <button onClick={() => setShowGlossaryModal(false)} className="rt-icon-btn"><X size={16} /></button>
            </div>
            <div className="rt-glossary-body">
              <div className="rt-glossary-filters">
                <div className="rt-hero-search rt-glossary-search">
                  <Search size={14} />
                  <input
                    type="text"
                    placeholder="Search syntax maps..."
                    value={glossarySearch}
                    onChange={e => setGlossarySearch(e.target.value)}
                  />
                  {glossarySearch && (
                    <button onClick={() => setGlossarySearch('')}><X size={13} /></button>
                  )}
                </div>
                <div className="rt-glossary-cats font-mono">
                  {config.glossaryCategories.map((cat) => (
                    <button
                      key={cat}
                      className={glossaryCategory === cat ? 'active' : ''}
                      onClick={() => setGlossaryCategory(cat)}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rt-glossary-list">
                {glossaryFiltered.map((item, idx) => (
                  <div key={idx} className="rt-glossary-card">
                    <div className="rt-glossary-card-head">
                      <span className="rt-gbadge cs font-mono">{config.glossaryLeftLabel}</span>
                      <span className="rt-gterm font-mono">{item.csharp}</span>
                      <span className="rt-garrow">→</span>
                      <span className="rt-gbadge py font-mono">{config.glossaryRightLabel}</span>
                      <span className="rt-gterm accent font-mono">{item.python}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="rt-glossary-code">
                      <div>
                        <span className="rt-code-label font-mono">{config.glossaryLeftLabel}</span>
                        <pre className="code-block font-mono"><code dangerouslySetInnerHTML={{ __html: highlightCode(item.csharpCode || '', config.glossaryLeftLang) }} /></pre>
                      </div>
                      <div>
                        <span className="rt-code-label font-mono">{config.glossaryRightLabel}</span>
                        <pre className="code-block font-mono"><code dangerouslySetInnerHTML={{ __html: highlightCode(item.pythonCode || '', config.glossaryRightLang) }} /></pre>
                      </div>
                    </div>
                  </div>
                ))}
                {glossaryFiltered.length === 0 && (
                  <div className="rt-empty">No matching syntax rules found. Try adjusting your filters.</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style>{`
        .rt-wrapper section { padding: 0 !important; position: relative; }

        .rt-wrapper {
          --font-sans: 'Ubuntu', 'Inter', sans-serif;
          --font-display: 'Ubuntu', 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --r-sm: 10px;
          --r-md: 16px;
          --r-lg: 22px;
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
          --t: all 0.25s var(--ease);
        }
        .rt-wrapper.theme-dark {
          --bg: #07090f;
          --bg-side: rgba(13, 17, 26, 0.92);
          --bg-card: #0e131d;
          --bg-card-2: #131a27;
          --bg-input: #0a0e16;
          --text-1: #f2f5f9;
          --text-2: #97a3b6;
          --text-3: #5d6b80;
          --line: rgba(255, 255, 255, 0.07);
          --line-2: rgba(255, 255, 255, 0.13);
          --accent: #38bdf8;
          --accent-rgb: 56, 189, 248;
          --accent-soft: rgba(56, 189, 248, 0.1);
          --accent-line: rgba(56, 189, 248, 0.32);
          --green: #34d399;
          --amber: #fbbf24;
          --violet: #a78bfa;
          --pink: #f472b6;
          --btn-bg: #38bdf8;
          --btn-text: #07090f;
          --shadow-1: 0 1px 2px rgba(0,0,0,0.4);
          --shadow-2: 0 8px 28px -8px rgba(0,0,0,0.55);
          --hero-grad: linear-gradient(135deg, rgba(56,189,248,0.12), rgba(167,139,250,0.08) 55%, transparent);
          --overlay: rgba(2, 4, 8, 0.78);
        }
        .rt-wrapper.theme-light {
          --bg: #f3f6fb;
          --bg-side: rgba(255, 255, 255, 0.94);
          --bg-card: #ffffff;
          --bg-card-2: #eef3fa;
          --bg-input: #f1f5fa;
          --text-1: #0d1526;
          --text-2: #46556d;
          --text-3: #8693a8;
          --line: rgba(13, 21, 38, 0.09);
          --line-2: rgba(13, 21, 38, 0.16);
          --accent: #0284c7;
          --accent-rgb: 2, 132, 199;
          --accent-soft: rgba(2, 132, 199, 0.08);
          --accent-line: rgba(2, 132, 199, 0.3);
          --green: #059669;
          --amber: #d97706;
          --violet: #7c3aed;
          --pink: #db2777;
          --btn-bg: #0d1526;
          --btn-text: #ffffff;
          --shadow-1: 0 1px 3px rgba(13, 21, 38, 0.07);
          --shadow-2: 0 10px 30px -10px rgba(13, 21, 38, 0.16);
          --hero-grad: linear-gradient(135deg, rgba(2,132,199,0.09), rgba(124,58,237,0.05) 55%, transparent);
          --overlay: rgba(13, 21, 38, 0.45);
        }

        .rt-wrapper {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text-1);
          font-family: var(--font-sans);
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          font-size: 15px;
        }

        /* ── Shell ── */
        .rt-shell {
          display: grid;
          grid-template-columns: 292px minmax(0, 1fr);
          max-width: 1640px;
          margin: 0 auto;
        }

        /* ── Sidebar ── */
        .rt-sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 1.4rem 1.1rem 1.1rem;
          background: var(--bg-side);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-right: 1px solid var(--line);
          overflow-y: auto;
          scrollbar-width: thin;
        }
        .rt-side-brand {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .rt-track-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          margin-top: 12px;
          padding: 3px;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 9px;
        }
        .rt-track-switch a {
          padding: 6px 8px;
          border-radius: 6px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          white-space: nowrap;
          color: var(--text-3);
          transition: var(--ease);
        }
        .rt-track-switch a:hover { color: var(--text-1); }
        .rt-track-switch a.active {
          background: var(--btn-bg);
          color: var(--btn-text);
        }
        .rt-track-num {
          display: inline-block;
          min-width: 14px;
          margin-right: 4px;
          opacity: 0.55;
          text-align: right;
        }
        .rt-brand-mark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent), var(--violet));
          color: #fff;
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.35);
          flex-shrink: 0;
        }
        .rt-brand-name {
          display: block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.01em;
        }
        .rt-brand-sub {
          display: block;
          font-size: 10px;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .rt-side-progress {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          box-shadow: var(--shadow-1);
        }
        .rt-ring-wrap { position: relative; width: 64px; height: 64px; flex-shrink: 0; }
        .rt-ring-label {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: var(--accent);
        }
        .rt-ring-track { fill: none; stroke: var(--line-2); stroke-width: 5; }
        .rt-ring-fill {
          fill: none; stroke: var(--accent); stroke-width: 5; stroke-linecap: round;
          transition: stroke-dashoffset 0.8s var(--ease);
          filter: drop-shadow(0 0 4px rgba(var(--accent-rgb), 0.5));
        }
        .rt-side-stats { display: flex; flex-direction: column; gap: 3px; font-size: 11px; color: var(--text-3); }
        .rt-side-stats strong { color: var(--text-1); font-size: 13px; margin-right: 4px; }

        /* Month / week nav */
        .rt-side-nav { display: flex; flex-direction: column; gap: 4px; flex: 1; }
        .rt-nav-month { border-radius: var(--r-sm); }
        .rt-nav-month-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 10px;
          background: transparent;
          border: none;
          border-radius: var(--r-sm);
          color: var(--text-2);
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: var(--t);
        }
        .rt-nav-month-btn:hover { background: var(--bg-card-2); color: var(--text-1); }
        .rt-nav-month.open .rt-nav-month-btn { background: var(--accent-soft); color: var(--text-1); }
        .rt-nav-month-num {
          width: 26px; height: 26px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 8px;
          background: var(--bg-card-2);
          border: 1px solid var(--line);
          font-size: 10px; font-weight: 700;
          color: var(--text-2);
          flex-shrink: 0;
        }
        .rt-nav-month.open .rt-nav-month-num { background: var(--accent); color: var(--btn-text); border-color: transparent; }
        .rt-nav-month-num.done { background: var(--green); color: #fff; border-color: transparent; }
        .rt-nav-month-title {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rt-nav-month-pct { font-size: 10px; color: var(--text-3); }
        .rt-nav-chev { color: var(--text-3); transition: var(--t); flex-shrink: 0; }
        .rt-nav-month.open .rt-nav-chev { transform: rotate(180deg); color: var(--accent); }

        .rt-nav-weeks {
          overflow: hidden;
          margin: 2px 0 4px 12px;
          border-left: 1px solid var(--line-2);
          display: flex;
          flex-direction: column;
        }
        .rt-nav-week {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px 7px 12px;
          margin: 1px 0 1px 6px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: var(--text-2);
          font-family: var(--font-sans);
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: var(--t);
        }
        .rt-nav-week:hover { background: var(--bg-card-2); color: var(--text-1); }
        .rt-nav-week.active {
          background: var(--accent);
          color: var(--btn-text);
          font-weight: 600;
          box-shadow: 0 3px 12px rgba(var(--accent-rgb), 0.35);
        }
        .rt-nav-week-num { font-size: 10px; font-weight: 700; opacity: 0.75; flex-shrink: 0; width: 26px; }
        .rt-nav-week-title { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .rt-nav-week-bar {
          width: 26px; height: 3px; border-radius: 2px;
          background: var(--line-2); overflow: hidden; flex-shrink: 0;
        }
        .rt-nav-week-bar span { display: block; height: 100%; background: var(--green); border-radius: 2px; }
        .rt-nav-week.active .rt-nav-week-bar { background: rgba(255,255,255,0.35); }
        .rt-nav-week.active .rt-nav-week-bar span { background: #fff; }
        .rt-nav-week-done { color: var(--green); flex-shrink: 0; }
        .rt-nav-week.active .rt-nav-week-done { color: inherit; }

        /* Sidebar footer */
        .rt-side-footer { display: flex; flex-direction: column; gap: 8px; }
        .rt-side-action {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 12px;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          color: var(--text-2);
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--t);
        }
        .rt-side-action:hover { border-color: var(--accent-line); color: var(--text-1); transform: translateY(-1px); }
        .rt-side-footer-row { display: flex; gap: 8px; }
        .rt-icon-btn {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          color: var(--text-2);
          cursor: pointer;
          transition: var(--t);
          flex-shrink: 0;
        }
        .rt-icon-btn:hover { color: var(--text-1); border-color: var(--accent-line); }
        .rt-auth-btn {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 0 12px;
          height: 36px;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          color: var(--text-2);
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--t);
        }
        .rt-auth-btn:hover { color: var(--text-1); border-color: var(--accent-line); }
        .rt-auth-btn.primary {
          background: var(--btn-bg);
          color: var(--btn-text);
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.3);
        }
        .rt-auth-btn.primary:hover { transform: translateY(-1px); filter: brightness(1.08); }

        /* ── Topbar (mobile) ── */
        .rt-topbar {
          display: none;
          position: sticky;
          top: 0;
          z-index: 80;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: var(--bg-side);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--line);
        }
        .rt-topbar-title {
          flex: 1;
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-display);
          font-weight: 700; font-size: 14px;
        }
        .rt-topbar-title svg { color: var(--accent); }
        .rt-topbar-pct { color: var(--accent); font-weight: 700; font-size: 13px; }
        .rt-drawer-overlay {
          position: fixed; inset: 0;
          background: var(--overlay);
          z-index: 150;
        }
        .rt-drawer {
          position: fixed !important;
          top: 0; left: 0; bottom: 0;
          width: min(320px, 86vw);
          z-index: 151;
          box-shadow: var(--shadow-2);
        }
        .rt-drawer-close { position: absolute; top: 12px; right: 12px; }

        /* ── Main ── */
        .rt-main {
          padding: 1.6rem 2rem 4rem;
          min-width: 0;
        }
        .rt-guest-banner {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          margin-bottom: 1.2rem;
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.22);
          border-radius: var(--r-sm);
          color: var(--amber);
          font-size: 12px;
        }
        .rt-guest-banner code { background: rgba(251,191,36,0.12); padding: 1px 5px; border-radius: 4px; }

        /* ── Week hero ── */
        .rt-hero {
          position: relative;
          padding: 1.5rem 1.6rem;
          margin-bottom: 1.6rem;
          background: var(--bg-card);
          background-image: var(--hero-grad);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-1);
          overflow: hidden;
        }
        .rt-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--violet), var(--green));
        }
        .rt-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.7rem;
        }
        .rt-hero-crumbs { display: flex; align-items: center; gap: 8px; font-size: 11px; }
        .rt-crumb { color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; }
        .rt-crumb.accent { color: var(--accent); font-weight: 700; }
        .rt-crumb-sep { color: var(--text-3); opacity: 0.5; }
        .rt-hero-badge {
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--amber);
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.28);
          border-radius: 20px;
          padding: 2px 9px;
        }
        .rt-hero-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.6vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 0.8rem;
        }
        .rt-hero-goal {
          display: flex; gap: 10px; align-items: flex-start;
          padding: 0.85rem 1rem;
          background: var(--accent-soft);
          border: 1px solid var(--accent-line);
          border-radius: var(--r-sm);
          margin-bottom: 0.9rem;
          font-size: 13.5px;
          color: var(--text-2);
        }
        .rt-hero-goal svg { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
        .rt-hero-goal p { margin: 0; }
        .rt-hero-goal strong { color: var(--text-1); }
        .rt-hero-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .rt-hero-hours { font-size: 11px; color: var(--text-3); }
        .rt-hero-progress { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 220px; max-width: 380px; }
        .rt-hero-progress > span { font-size: 11px; font-weight: 700; color: var(--accent); }
        .rt-hero-bar {
          flex: 1; height: 6px; border-radius: 4px;
          background: var(--line-2); overflow: hidden;
        }
        .rt-hero-bar span {
          display: block; height: 100%; border-radius: 4px;
          background: linear-gradient(90deg, var(--accent), var(--violet));
          transition: width 0.7s var(--ease);
        }
        .rt-hero-search {
          position: relative;
          display: flex;
          align-items: center;
          width: 280px;
          max-width: 100%;
        }
        .rt-hero-search > svg { position: absolute; left: 12px; color: var(--text-3); }
        .rt-hero-search input {
          width: 100%;
          padding: 9px 32px 9px 34px;
          background: var(--bg-input);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          color: var(--text-1);
          font-family: var(--font-sans);
          font-size: 12.5px;
          outline: none;
          transition: var(--t);
        }
        .rt-hero-search input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .rt-hero-search button {
          position: absolute; right: 10px;
          background: none; border: none; padding: 0;
          color: var(--text-3); cursor: pointer; display: flex;
        }
        .rt-hero-search button:hover { color: var(--text-1); }

        /* ── Sections ── */
        .rt-section { margin-bottom: 1.8rem; }
        .rt-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          margin-bottom: 0.9rem;
        }
        .rt-section-title {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .rt-spark { color: var(--accent); }
        .rt-section-count {
          font-size: 10.5px;
          color: var(--accent);
          background: var(--accent-soft);
          border: 1px solid var(--accent-line);
          border-radius: 20px;
          padding: 2px 9px;
          white-space: nowrap;
        }

        /* ── Resources ── */
        .rt-resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
          gap: 0.7rem;
        }
        .rt-resource {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          text-decoration: none;
          box-shadow: var(--shadow-1);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .rt-resource:hover { border-color: var(--accent-line); box-shadow: var(--shadow-2); }
        .rt-resource-icon {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 11px;
          flex-shrink: 0;
          transition: var(--t);
        }
        .rt-resource:hover .rt-resource-icon { transform: scale(1.08) rotate(-4deg); }
        .rt-rk-video .rt-resource-icon   { background: rgba(239, 68, 68, 0.12);  color: #ef4444; }
        .rt-rk-docs .rt-resource-icon    { background: var(--accent-soft); color: var(--accent); }
        .rt-rk-article .rt-resource-icon { background: rgba(251, 191, 36, 0.12); color: var(--amber); }
        .rt-rk-course .rt-resource-icon  { background: rgba(167, 139, 250, 0.14); color: var(--violet); }
        .rt-rk-repo .rt-resource-icon    { background: rgba(52, 211, 153, 0.12); color: var(--green); }
        .rt-rk-tool .rt-resource-icon    { background: rgba(34, 211, 238, 0.12); color: #22d3ee; }
        .rt-rk-book .rt-resource-icon    { background: rgba(244, 114, 182, 0.13); color: var(--pink); }
        .rt-rk-book { border-color: rgba(244, 114, 182, 0.25); }
        .rt-resource-body { display: flex; flex-direction: column; min-width: 0; }
        .rt-resource-title {
          font-size: 12.5px; font-weight: 600; color: var(--text-1); line-height: 1.35;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .rt-resource-meta { font-size: 10px; color: var(--text-3); margin-top: 2px; }
        .rt-resource-arrow {
          margin-left: auto; flex-shrink: 0;
          color: var(--text-3); opacity: 0;
          transform: translate(-3px, 3px);
          transition: var(--t);
        }
        .rt-resource:hover .rt-resource-arrow { opacity: 1; transform: none; color: var(--accent); }

        /* ── Projects ── */
        .rt-project-row {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.7rem;
        }
        .rt-project {
          position: relative;
          padding: 1rem 1.1rem;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          box-shadow: var(--shadow-1);
          overflow: hidden;
          transition: var(--t);
        }
        .rt-project::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
        }
        .rt-pt-api::before    { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
        .rt-pt-agent::before  { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
        .rt-pt-rag::before    { background: linear-gradient(90deg, #10b981, #34d399); }
        .rt-pt-voice::before  { background: linear-gradient(90deg, #f97316, #fb923c); }
        .rt-pt-saas::before   { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
        .rt-project:hover { border-color: var(--line-2); box-shadow: var(--shadow-2); transform: translateY(-3px); }
        .rt-project-head { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .rt-project-num {
          font-size: 10px; font-weight: 700;
          color: var(--accent); background: var(--accent-soft);
          padding: 2px 7px; border-radius: 5px;
        }
        .rt-project-weeks { font-size: 10px; color: var(--text-3); }
        .rt-project-title {
          font-family: var(--font-display);
          font-size: 13.5px; font-weight: 700;
          margin-bottom: 8px; line-height: 1.3;
        }
        .rt-project-tech { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px; }
        .rt-project-tech span {
          font-size: 9.5px; font-weight: 600;
          padding: 2px 7px; border-radius: 5px;
          background: var(--bg-card-2);
          border: 1px solid var(--line);
          color: var(--text-2);
        }
        .rt-project-io {
          display: flex; flex-direction: column; gap: 4px;
          border-top: 1px solid var(--line);
          padding-top: 8px;
          font-size: 11px; color: var(--text-2); line-height: 1.45;
        }
        .rt-project-io em {
          font-style: normal;
          font-family: var(--font-mono);
          font-size: 8.5px; font-weight: 700;
          color: var(--text-3);
          margin-right: 7px;
          letter-spacing: 0.05em;
        }
        .rt-project-dataset { color: var(--accent, #6ea8fe); text-decoration: none; font-size: 0.82em; }
        .rt-project-dataset:hover { text-decoration: underline; }
        .rt-project-note { color: var(--accent); font-family: var(--font-mono); font-size: 10.5px; }

        /* ── Day cards ── */
        .rt-day-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }
        .rt-day {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 1.1rem 1.15rem 1.15rem;
          box-shadow: var(--shadow-1);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .rt-day:hover { border-color: var(--line-2); box-shadow: var(--shadow-2); }
        .rt-day.complete { border-color: rgba(52, 211, 153, 0.4); }
        .rt-day-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--line);
        }
        .rt-day-bar span {
          display: block; height: 100%;
          background: linear-gradient(90deg, var(--green), var(--accent));
          transition: width 0.5s var(--ease);
        }
        .rt-day-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.65rem;
          margin-bottom: 0.8rem;
          border-bottom: 1px dashed var(--line-2);
        }
        .rt-day-name {
          display: block;
          font-family: var(--font-display);
          font-size: 14.5px;
          font-weight: 700;
        }
        .rt-day-hrs { font-size: 10.5px; color: var(--text-3); }
        .rt-day-type {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
          padding: 4px 10px; border-radius: 7px;
        }
        .rt-dt-learn  { background: rgba(59, 130, 246, 0.13); color: #60a5fa; }
        .rt-dt-code   { background: rgba(34, 211, 238, 0.13); color: #22d3ee; }
        .rt-dt-build  { background: rgba(52, 211, 153, 0.13); color: var(--green); }
        .rt-dt-review { background: rgba(167, 139, 250, 0.14); color: var(--violet); }

        .rt-task-list { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; margin: 0; padding: 0; }
        .rt-task {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 13px;
          color: var(--text-2);
          cursor: pointer;
          user-select: none;
          padding: 3px 2px;
          border-radius: 8px;
          transition: var(--t);
        }
        .rt-task:hover { color: var(--text-1); transform: translateX(2px); }
        .rt-check {
          position: relative;
          width: 18px; height: 18px;
          border: 2px solid var(--text-3);
          border-radius: 6px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex; align-items: center; justify-content: center;
          transition: var(--t);
          color: #fff;
        }
        .rt-task:hover .rt-check { border-color: var(--accent); }
        .rt-check.checked {
          border-color: var(--green);
          background: var(--green);
          animation: rtPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .rt-check.checked::after {
          content: '';
          position: absolute; inset: -2px; border-radius: 8px;
          animation: rtBurst 0.5s ease-out forwards;
        }
        @keyframes rtPop { 0% { transform: scale(0.7); } 55% { transform: scale(1.18); } 100% { transform: scale(1); } }
        @keyframes rtBurst {
          from { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45); }
          to   { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
        }
        .rt-task-text { line-height: 1.45; }
        .rt-task-text a { color: var(--accent); text-decoration: underline; font-weight: 500; }
        .rt-task.done .rt-task-text { text-decoration: line-through; color: var(--text-3); }
        .rt-task-num {
          font-size: 10px;
          background: var(--bg-card-2);
          border: 1px solid var(--line);
          padding: 1px 6px;
          border-radius: 5px;
          margin-right: 7px;
          color: var(--text-2);
        }
        .rt-task.done .rt-task-num { background: rgba(52, 211, 153, 0.12); color: var(--green); border-color: transparent; }

        /* Book companion task */
        .rt-task.book {
          background: linear-gradient(135deg, rgba(244, 114, 182, 0.07), rgba(167, 139, 250, 0.07));
          border: 1px solid rgba(244, 114, 182, 0.25);
          border-radius: 10px;
          padding: 9px 11px;
          position: relative;
          overflow: hidden;
        }
        .rt-task.book::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, var(--pink), var(--violet));
        }
        .rt-task.book:hover { border-color: rgba(244, 114, 182, 0.5); box-shadow: 0 4px 14px rgba(244, 114, 182, 0.12); }
        .rt-book-badge {
          display: inline-flex; align-items: center; gap: 4px;
          background: linear-gradient(90deg, var(--pink), var(--violet));
          color: #fff;
          font-size: 9px; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 2.5px 8px; border-radius: 20px;
          margin-right: 8px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(244, 114, 182, 0.35);
        }
        .rt-task.book .rt-task-text em { font-weight: 600; color: var(--pink); }
        .rt-task.book.done { opacity: 0.72; }
        .rt-task.book.done .rt-book-badge { background: var(--green); box-shadow: none; }

        /* Course companion task (cyan/blue variant of the book treatment) */
        .rt-task.course {
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.07), rgba(var(--accent-rgb), 0.07));
          border: 1px solid rgba(34, 211, 238, 0.25);
          border-radius: 10px;
          padding: 9px 11px;
          position: relative;
          overflow: hidden;
        }
        .rt-task.course::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #22d3ee, var(--accent));
        }
        .rt-task.course:hover { border-color: rgba(34, 211, 238, 0.5); box-shadow: 0 4px 14px rgba(34, 211, 238, 0.12); }
        .rt-course-badge {
          background: linear-gradient(90deg, #22d3ee, var(--accent));
          box-shadow: 0 2px 8px rgba(34, 211, 238, 0.35);
        }
        .rt-task.course .rt-task-text em { font-weight: 600; color: #22d3ee; }
        .rt-wrapper.theme-light .rt-task.course .rt-task-text em { color: #0e7490; }
        .rt-task.course.done { opacity: 0.72; }
        .rt-task.course.done .rt-course-badge { background: var(--green); box-shadow: none; }

        .rt-empty {
          padding: 2.6rem;
          text-align: center;
          color: var(--text-3);
          background: var(--bg-card);
          border: 1px dashed var(--line-2);
          border-radius: var(--r-md);
          font-size: 13.5px;
        }

        /* ── Journal + mindset ── */
        .rt-bottom-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: 0.9rem;
          align-items: start;
        }
        .rt-panel {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 1.1rem 1.15rem;
          box-shadow: var(--shadow-1);
        }
        .rt-panel-stack { display: flex; flex-direction: column; gap: 0.9rem; }
        .rt-saved { display: inline-flex; align-items: center; gap: 4px; color: var(--green); font-size: 11px; font-weight: 700; }
        .rt-journal-fields { display: flex; flex-direction: column; gap: 0.8rem; }
        .rt-journal-fields label { display: flex; flex-direction: column; gap: 6px; }
        .rt-journal-fields label > span { font-size: 12px; font-weight: 600; color: var(--text-1); }
        .rt-journal-fields textarea {
          width: 100%;
          min-height: 84px;
          background: var(--bg-input);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          padding: 10px 12px;
          font-family: var(--font-sans);
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-1);
          resize: vertical;
          outline: none;
          transition: var(--t);
        }
        .rt-journal-fields textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .rt-journal-fields textarea::placeholder { color: var(--text-3); font-size: 12px; }
        .rt-journal-fields textarea:disabled { opacity: 0.5; cursor: not-allowed; }
        .rt-journal-footer { display: flex; justify-content: flex-end; margin-top: 0.9rem; }
        .rt-btn-primary {
          background: var(--btn-bg);
          color: var(--btn-text);
          border: none;
          padding: 10px 20px;
          border-radius: var(--r-sm);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--t);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.25);
        }
        .rt-btn-primary:hover { transform: translateY(-1px); filter: brightness(1.08); }
        .rt-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .rt-mindset {
          font-size: 13px;
          color: var(--text-2);
          line-height: 1.6;
          border-left: 3px solid var(--accent);
          padding-left: 12px;
        }
        .rt-mindset code {
          font-family: var(--font-mono);
          background: var(--bg-card-2);
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 11.5px;
          color: var(--text-1);
        }
        .rt-mindset .rt-alert {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid rgba(244, 63, 94, 0.35);
          border-left: 3px solid #f43f5e;
          background: rgba(244, 63, 94, 0.08);
        }
        .rt-mindset .rt-alert strong:first-child { color: #fb7185; }
        .rt-mindset .rt-alert svg { flex-shrink: 0; margin-top: 2px; color: #fb7185; }
        .rt-glossary-cta {
          text-align: left;
          cursor: pointer;
          font-family: var(--font-sans);
          color: inherit;
          transition: var(--t);
          width: 100%;
        }
        .rt-glossary-cta:hover { border-color: var(--accent-line); transform: translateY(-2px); box-shadow: var(--shadow-2); }
        .rt-glossary-cta p { font-size: 12.5px; color: var(--text-2); margin: 0 0 10px; }
        .rt-glossary-open {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 11.5px; font-weight: 700; color: var(--accent);
        }

        /* ── Modals ── */
        .rt-modal-overlay {
          position: fixed; inset: 0;
          background: var(--overlay);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 300;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
        }
        .rt-modal {
          background: var(--bg-card);
          border: 1px solid var(--line-2);
          border-radius: var(--r-lg);
          max-width: 430px;
          width: 100%;
          box-shadow: var(--shadow-2);
          overflow: hidden;
        }
        .rt-modal-wide {
          max-width: 1020px;
          height: 88vh;
          max-height: 860px;
          display: flex;
          flex-direction: column;
        }
        .rt-modal-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 1.3rem;
          border-bottom: 1px solid var(--line);
        }
        .rt-modal-title {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rt-modal-body { padding: 1.3rem; display: flex; flex-direction: column; gap: 1rem; }
        .rt-modal-desc { font-size: 13px; color: var(--text-2); margin: 0; }
        .rt-modal-note {
          background: var(--accent-soft);
          border: 1px dashed var(--accent-line);
          border-radius: var(--r-sm);
          padding: 0.7rem 1rem;
          font-size: 12px;
          color: var(--text-2);
          text-align: center;
        }
        .rt-modal-note code { background: var(--bg-card-2); padding: 1px 5px; border-radius: 4px; }
        .rt-modal-error {
          display: flex; gap: 8px; align-items: flex-start;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
          border-radius: var(--r-sm);
          padding: 0.7rem 1rem;
          font-size: 12px;
        }
        .rt-modal-field { display: flex; flex-direction: column; gap: 6px; }
        .rt-modal-field span {
          font-size: 11px; font-weight: 600;
          text-transform: uppercase;
          color: var(--text-2);
          letter-spacing: 0.04em;
        }
        .rt-modal-field input {
          background: var(--bg-input);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          padding: 10px 12px;
          color: var(--text-1);
          font-family: var(--font-sans);
          font-size: 13.5px;
          outline: none;
          transition: var(--t);
        }
        .rt-modal-field input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .rt-modal-submit { width: 100%; }

        /* Glossary modal */
        .rt-glossary-body {
          padding: 1.3rem;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .rt-glossary-filters {
          display: flex; align-items: center; justify-content: space-between;
          gap: 0.9rem; flex-wrap: wrap;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--line);
        }
        .rt-glossary-search { width: 300px; }
        .rt-glossary-cats { display: flex; gap: 6px; flex-wrap: wrap; }
        .rt-glossary-cats button {
          background: var(--bg-card-2);
          border: 1px solid var(--line);
          color: var(--text-2);
          border-radius: 20px;
          padding: 6px 13px;
          font-size: 10.5px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--t);
        }
        .rt-glossary-cats button:hover { color: var(--text-1); border-color: var(--accent-line); }
        .rt-glossary-cats button.active { background: var(--btn-bg); color: var(--btn-text); border-color: transparent; }
        .rt-glossary-list { display: flex; flex-direction: column; gap: 1rem; }
        .rt-glossary-card {
          background: var(--bg-card-2);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 1.2rem;
          transition: var(--t);
        }
        .rt-glossary-card:hover { border-color: var(--accent-line); }
        .rt-glossary-card-head {
          display: flex; align-items: center; gap: 9px; flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .rt-glossary-card p { font-size: 13px; color: var(--text-2); margin: 0 0 12px; line-height: 1.5; }
        .rt-gbadge {
          font-size: 9.5px; font-weight: 700;
          padding: 2px 7px; border-radius: 5px;
        }
        .rt-gbadge.cs { background: rgba(167, 139, 250, 0.15); color: var(--violet); }
        .rt-gbadge.py { background: rgba(251, 191, 36, 0.14); color: var(--amber); }
        .rt-gterm { font-size: 13.5px; font-weight: 700; }
        .rt-gterm.accent { color: var(--accent); }
        .rt-garrow { color: var(--text-3); }
        .rt-glossary-code {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }
        .rt-glossary-code > div { position: relative; }
        .rt-code-label {
          position: absolute; top: 7px; right: 11px;
          font-size: 8.5px; color: #6b7894;
          text-transform: uppercase; letter-spacing: 0.06em;
          z-index: 2;
        }
        .code-block {
          background: #0c1018 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 10px !important;
          padding: 1.4rem 1.1rem 1.1rem !important;
          overflow-x: auto !important;
          font-size: 12.5px !important;
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

        /* ── Responsive ── */
        @media (max-width: 1080px) {
          .rt-shell { grid-template-columns: 1fr; }
          .rt-sidebar { display: none; }
          .rt-drawer { display: flex !important; }
          .rt-topbar { display: flex; }
          .rt-main { padding: 1.2rem 1.1rem 3rem; }
          .rt-bottom-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .rt-day-grid { grid-template-columns: 1fr; }
          .rt-glossary-code { grid-template-columns: 1fr; }
          .rt-hero { padding: 1.1rem 1.15rem; }
          .rt-hero-search { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rt-wrapper *, .rt-wrapper *::before, .rt-wrapper *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};




