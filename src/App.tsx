import { useState, useEffect } from 'react';
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

function App() {
  const [activeView, setActiveView] = useState('home');

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
        pagePath: window.location.pathname || '',
        page_path: window.location.pathname || '',
        path: window.location.pathname || '',
      }),
    }).catch((err) => console.error('Failed to log stats:', err));
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main className="main-content">
        {activeView === 'home' ? (
          <>
            <Hero setActiveView={setActiveView} />
            <SectionSeparator leftText="0x01" rightText="load_expertise" />
            <Expertise />
            <SectionSeparator leftText="0x02" rightText="query_projects" />
            <Projects />
            <SectionSeparator leftText="0x03" rightText="read_timeline" />
            <Experience />
            <SectionSeparator leftText="0x04" rightText="handshake_sync" />
            <Contact />
          </>
        ) : activeView === 'admin' ? (
          <div className="admin-view-wrapper">
            <AdminConsole setActiveView={setActiveView} />
          </div>
        ) : (
          <div className="blog-view-wrapper">
            <Blog />
          </div>
        )}
      </main>

      <footer className="footer font-mono">
        <div className="container footer-container">
          <p>© {new Date().getFullYear()}. Made with passion by Baqar Hussain Naqvi.</p>
          <p className="footer-status">Status: Active & building</p>
        </div>
      </footer>

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

