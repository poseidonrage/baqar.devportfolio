import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', onToggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');
  const isAdmin = location.pathname === '/admin';

  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();
    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, []);

  useEffect(() => {
    if (isBlog) {
      setActiveSection('blog');
      return;
    }
    if (!isHome) {
      return;
    }

    const sections = ['hero', 'expertise', 'work', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isBlog, isHome]);

  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (view === 'home') {
      if (!isHome) {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      if (!isHome) {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(view);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(view);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'home', number: '01' },
    { id: 'expertise', label: 'expertise', number: '02' },
    { id: 'work', label: 'work', number: '03' },
    { id: 'experience', label: 'experience', number: '04' },
    { id: 'blog', label: 'blog', number: '05' },
    { id: 'contact', label: 'contact', number: '06' },
    { id: 'roadmap', label: 'roadmap', number: '07' },
  ];

  const isItemActive = (id: string) =>
    id === 'blog' ? isBlog : isHome && activeSection === id;

  const handleItemClick = (id: string, e: React.MouseEvent) => {
    if (id === 'blog') {
      e.preventDefault();
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('blog');
    } else if (id === 'roadmap') {
      // Let browser open target="_blank" natively
    } else {
      handleNavClick(id, e);
    }
    setMenuOpen(false);
  };

  const menuVariants = {
    closed: { opacity: 0, transition: { duration: 0.25, when: 'afterChildren' as const } },
    open: { opacity: 1, transition: { duration: 0.25, staggerChildren: 0.055, delayChildren: 0.08 } },
  };
  const itemVariants = {
    closed: { opacity: 0, x: -28, transition: { duration: 0.18 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <nav className={`navbar-container ${isScrolled || isBlog || isAdmin ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="/" className="logo-link" onClick={(e) => handleNavClick('home', e)}>
          <img src="/inline_logo.png" alt="baqar.dev" className="logo-image" />
          <span className="logo-cursor"></span>
        </a>

        <div className="nav-right">
          <div className="nav-links font-mono">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'roadmap' ? '/roadmap' : `#${item.id}`}
                target={item.id === 'roadmap' ? '_blank' : undefined}
                rel={item.id === 'roadmap' ? 'noopener noreferrer' : undefined}
                className={`nav-item ${isItemActive(item.id) ? 'active-link' : ''}`}
                onClick={(e) => handleItemClick(item.id, e)}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">// {item.label}</span>
              </a>
            ))}
          </div>

          {onToggleTheme && (
            <button
              className="nav-theme-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'flex' }}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
          )}

          <button
            className={`nav-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile menu — portaled to <body>: the navbar's backdrop-filter
           makes it a containing block for fixed descendants, which collapsed
           the menu to the navbar's height once scrolled ── */}
      {createPortal(
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mm-glow" aria-hidden="true" />
            <motion.span className="mm-eyebrow font-mono" variants={itemVariants}>
              // navigation
            </motion.span>
            <nav className="mm-list">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  variants={itemVariants}
                  href={item.id === 'roadmap' ? '/roadmap' : `#${item.id}`}
                  target={item.id === 'roadmap' ? '_blank' : undefined}
                  rel={item.id === 'roadmap' ? 'noopener noreferrer' : undefined}
                  className={`mm-item${isItemActive(item.id) ? ' active' : ''}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                >
                  <span className="mm-num font-mono">{item.number}</span>
                  <span className="mm-label">{item.label}</span>
                  {item.id === 'roadmap'
                    ? <ArrowUpRight size={20} className="mm-arrow external" />
                    : <span className="mm-arrow">→</span>}
                </motion.a>
              ))}
            </nav>

            <motion.div className="mm-footer" variants={itemVariants}>
              {onToggleTheme && (
                <button className="mm-theme font-mono" onClick={onToggleTheme}>
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
                </button>
              )}
              <span className="mm-status font-mono">
                <span className="mm-dot" /> Active &amp; building
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, border-bottom-color 0.3s ease, backdrop-filter 0.3s ease;
          pointer-events: none;
        }
        .navbar-container.navbar-scrolled {
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(102, 217, 237, 0.08);
          pointer-events: auto;
        }
        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: auto;
          transition: padding 0.3s ease;
        }
        .navbar-container.navbar-scrolled .navbar-content {
          padding: 0.85rem 2rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
        }
        .logo-image {
          height: 38px;
          width: auto;
          display: block;
          transition: var(--transition-smooth);
        }
        .navbar-container.navbar-scrolled .logo-image {
          height: 32px;
        }
        .logo-cursor {
          width: 2px;
          height: 22px;
          background-color: var(--accent-color);
          margin-left: 0.45rem;
          display: inline-block;
          animation: logo-cursor-blink 1.1s infinite step-end;
          box-shadow: 0 0 6px var(--accent-color);
          transition: var(--transition-smooth);
        }
        .navbar-container.navbar-scrolled .logo-cursor {
          height: 18px;
        }
        @keyframes logo-cursor-blink {
          from, to {
            background-color: transparent;
            box-shadow: none;
          }
          50% {
            background-color: var(--accent-color);
            box-shadow: 0 0 6px var(--accent-color);
          }
        }
        .nav-links {
          display: flex;
          gap: 2.2rem;
          align-items: center;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.5rem 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease;
        }
        .navbar-container.navbar-scrolled .nav-links {
          background: transparent;
          backdrop-filter: none;
          border-color: transparent;
          box-shadow: none;
          padding: 0;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: rgba(255, 255, 255, 0.45);
          padding: 0.25rem 0;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .nav-number {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          font-weight: 500;
          transition: color 0.25s ease;
          opacity: 0.8;
        }
        .nav-item:hover, .nav-item.active-link {
          color: var(--accent-color);
          text-shadow: 0 0 8px var(--accent-glow);
        }
        .nav-item:hover .nav-number, .nav-item.active-link .nav-number {
          color: var(--accent-color);
          opacity: 1;
        }
        .nav-label {
          font-size: 1.05rem;
          letter-spacing: -0.05em;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-theme-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
        }
        .nav-theme-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          box-shadow: 0 0 12px var(--accent-glow);
          transform: rotate(15deg);
        }

        /* ── Burger ── */
        .nav-burger {
          display: none;
          position: relative;
          z-index: 210;
          width: 42px;
          height: 42px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
        }
        .nav-burger span {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 2px;
          background: var(--text-primary);
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, background 0.2s ease;
        }
        .nav-burger:hover { border-color: var(--accent-color); }
        .nav-burger:hover span { background: var(--accent-color); }
        .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile menu ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: none;
          flex-direction: column;
          padding: 6.2rem 2rem 2.2rem;
          background: var(--bg-dark);
          overflow: hidden;
        }
        .mm-glow {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }
        .mm-eyebrow {
          font-size: 0.75rem;
          color: var(--accent-color);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .mm-list {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto;
        }
        .mm-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.95rem 0.2rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .mm-item:active { background: var(--accent-glow); }
        .mm-num {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          width: 26px;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .mm-label {
          font-family: var(--font-display);
          font-size: clamp(1.7rem, 6.5vw, 2.2rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: var(--text-primary);
          transition: color 0.2s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mm-arrow {
          margin-left: auto;
          color: var(--text-muted);
          font-size: 1.3rem;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mm-arrow.external { opacity: 0.55; transform: none; }
        .mm-item.active .mm-label,
        .mm-item:hover .mm-label {
          color: var(--accent-color);
          transform: translateX(6px);
        }
        .mm-item.active .mm-num,
        .mm-item:hover .mm-num { color: var(--accent-color); }
        .mm-item.active .mm-arrow,
        .mm-item:hover .mm-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--accent-color);
        }
        .mm-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.4rem;
        }
        .mm-theme {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          color: var(--text-primary);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .mm-theme:hover, .mm-theme:active {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .mm-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .mm-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
          box-shadow: 0 0 6px var(--accent-color);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-burger { display: flex; }
          .mobile-menu { display: flex; }
          .navbar-container { pointer-events: auto; }
        }
      `}</style>
    </nav>
  );
};
