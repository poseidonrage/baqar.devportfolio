import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { SectionSeparator } from './components/SectionSeparator';
import { AdminConsole } from './components/AdminConsole';
import { RoadmapTracker } from './components/RoadmapTracker';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionSeparator leftText="0x01" rightText="load_expertise" />
      <Expertise />
      <SectionSeparator leftText="0x02" rightText="query_projects" />
      <Projects />
      <SectionSeparator leftText="0x03" rightText="read_timeline" />
      <Experience />
      <SectionSeparator leftText="0x04" rightText="handshake_sync" />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const isRoadmap = location.pathname === '/roadmap';
  const [scrollPct, setScrollPct] = useState(0);

  // Reading progress bar across the top of the page
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setScrollPct(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [location.pathname]);

  // Scroll-reveal: fade-and-rise sections, cards and titles as they enter the viewport
  useEffect(() => {
    if (isRoadmap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>(
      'main section, .glass-card, .section-title-wrapper'
    );
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const idx = Math.max(siblings.indexOf(el), 0);
      el.style.setProperty('--reveal-delay', `${(idx % 6) * 70}ms`);
      el.classList.add('reveal');
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      targets.forEach(el => el.classList.remove('reveal', 'reveal-in'));
    };
  }, [location.pathname, isRoadmap]);

  // Cursor spotlight that follows the mouse across glass cards
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.('.glass-card') as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    fetch('/api/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        referrer: document.referrer || '',
        userAgent: navigator.userAgent || '',
        user_agent: navigator.userAgent || '',
        pagePath: location.pathname || '',
        page_path: location.pathname || '',
        path: location.pathname || '',
      }),
    }).catch((err) => console.error('Failed to log stats:', err));
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      {!isRoadmap && (
        <div className="scroll-progress" aria-hidden="true">
          <span style={{ width: scrollPct + '%' }} />
        </div>
      )}
      {!isRoadmap && <CustomCursor />}
      {!isRoadmap && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<div className="blog-view-wrapper"><Blog /></div>} />
          <Route path="/blog/:slug" element={<div className="blog-view-wrapper"><Blog /></div>} />
          <Route path="/admin" element={<div className="admin-view-wrapper"><AdminConsole /></div>} />
          <Route path="/roadmap" element={<RoadmapTracker />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {!isRoadmap && (
        <footer className="footer font-mono">
          <div className="container footer-container">
            <p>© {new Date().getFullYear()}. Made with passion by Baqar Hussain Naqvi.</p>
            <p className="footer-status"><span className="footer-dot" />Status: Active & building</p>
          </div>
        </footer>
      )}

      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
        }
        .blog-view-wrapper {
          padding-top: 8rem;
          padding-bottom: 6rem;
        }
        .admin-view-wrapper {
          padding-top: 2rem;
          padding-bottom: 6rem;
        }
        .footer {
          border-top: 1px solid var(--border-color);
          background: rgba(7, 9, 14, 0.95);
          padding: 2rem 0;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-status {
          color: var(--accent-color);
          text-shadow: 0 0 5px var(--accent-glow);
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .footer-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
          animation: footer-dot-pulse 2s ease-in-out infinite;
        }
        @keyframes footer-dot-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.5); }
          50% { box-shadow: 0 0 0 5px rgba(var(--accent-rgb), 0); }
        }
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 1000;
          pointer-events: none;
          background: transparent;
        }
        .scroll-progress span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--accent-color), rgba(var(--accent-rgb), 0.4));
          box-shadow: 0 0 8px var(--accent-glow);
          transition: width 0.1s linear;
        }
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
