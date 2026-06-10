import { useEffect } from 'react';
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
            <p className="footer-status">Status: Active & building</p>
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
