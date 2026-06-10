import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`navbar-container ${isScrolled || isBlog || isAdmin ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="/" className="logo-link" onClick={(e) => handleNavClick('home', e)}>
          <img src="/inline_logo.png" alt="baqar.dev" className="logo-image" />
          <span className="logo-cursor"></span>
        </a>

        <div className="nav-links font-mono">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id === 'roadmap' ? '/roadmap' : `#${item.id}`}
              target={item.id === 'roadmap' ? '_blank' : undefined}
              rel={item.id === 'roadmap' ? 'noopener noreferrer' : undefined}
              className={`nav-item ${
                item.id === 'blog'
                  ? isBlog ? 'active-link' : ''
                  : isHome && activeSection === item.id ? 'active-link' : ''
              }`}
              onClick={(e) => {
                if (item.id === 'blog') {
                  e.preventDefault();
                  navigate('/blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('blog');
                } else if (item.id === 'roadmap') {
                  // Let browser open target="_blank" natively
                } else {
                  handleNavClick(item.id, e);
                }
              }}
            >
              <span className="nav-number">{item.number}</span>
              <span className="nav-label">// {item.label}</span>
            </a>
          ))}
        </div>
      </div>

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
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};
