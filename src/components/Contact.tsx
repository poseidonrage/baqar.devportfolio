import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

const renderTechLogo = (logoName: string) => {
  switch (logoName) {
    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <rect width="100" height="100" fill="#F7DF1E" rx="8" />
          <path d="M63 73c0 7-4 10-10 10-6 0-10-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V38h7v35zm27-14c0 7-4 10-10 10-6 0-9-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V59c0-3-2-4-5-5l-4-1c-5-2-7-5-7-10 0-6 4-9 10-9s9 3 10 7h-7c0-2-1-3-3-3-2 0-3 1-3 3v2c0 2 2 4 5 5l4 1c5 1 8 4 8 10z" fill="#000000" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <rect width="100" height="100" fill="#3178C6" rx="8" />
          <path d="M43.7 38H25.3v6.5h6v28.8h6.8V44.5h6v-6.5zM67.3 52.4c-3.1-1.7-6.2-2.1-7.7-2.1-3 0-4.3 1.1-4.3 2.5s1.2 2.2 4.1 3c5.5 1.5 10.3 3.6 10.3 9.4 0 6.6-5.8 8.8-11.8 8.8-6.9 0-12-2.9-12-7.9h6.9c.1 2.3 2.9 3.6 5.2 3.6 2.8 0 4.7-1.1 4.7-2.9s-1.8-2.2-4.5-2.9c-5.8-1.5-10-3.6-10-9 0-5.8 4.9-8.4 11-8.4 5.6 0 10.1 2.1 10.1 6.5h-6.9v-.1z" fill="#FFFFFF" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(150 50 50)" />
          <circle cx="50" cy="50" r="7.5" fill="#61DAFB" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <rect x="25" y="16" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="37" y="16" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="49" y="16" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="31" y="27" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="43" y="27" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="55" y="27" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="67" y="27" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="37" y="38" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="49" y="38" width="10" height="9" fill="#2496ED" rx="1" />
          <rect x="61" y="38" width="10" height="9" fill="#2496ED" rx="1" />
          <path d="M85 53c-1.3-4-5-6.8-9-6.8h-7.2c-1 .8-2.3 1.2-3.8 1.2H25c-8.3 0-15 6.7-15 15 0 2.2.5 4.3 1.4 6.2 3.1 6.5 9.8 10.8 17.6 10.8h30c14.3 0 26-11.7 26-26 0-1.8-.2-3.6-.6-5.4zM90 40c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="#2496ED" />
        </svg>
      );
    case 'blazor':
      return (
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <path d="M12,50 C12,29 29,12 50,12 C71,12 88,29 88,50 C88,71 71,88 50,88 C29,88 12,71 12,50 Z" fill="#512BD4" />
          <path d="M50,22 C34.5,22 22,34.5 22,50 C22,65.5 34.5,78 50,78 C65.5,78 78,65.5 78,50 C78,34.5 65.5,22 50,22 Z M50,68 C40.1,68 32,59.9 32,50 C32,40.1 40.1,32 50,32 C59.9,32 68,40.1 68,50 C68,59.9 59.9,68 50,68 Z" fill="#FFFFFF" />
          <path d="M38,50 C38,43.4 43.4,38 50,38 C56.6,38 62,43.4 62,50 C62,56.6 56.6,62 50,62 C43.4,62 38,56.6 38,50 Z" fill="#8B4DFF" />
        </svg>
      );
    default:
      return null;
  }
};

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const emailAddress = 'baqar.naqvi2@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSentStatus('sending');
      // Simulate submission
      setTimeout(() => {
        setSentStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSentStatus(null), 4000);
      }, 1500);
    }
  };

  // Scroll-driven parallax for contact floating blocks
  useEffect(() => {
    const section = document.querySelector('.contact-section');
    if (!section) return;
    const wraps = section.querySelectorAll<HTMLElement>('.cblock-wrap');
    if (!wraps.length) return;

    // Exit vectors as fractions of the viewport so blocks fly off-screen
    const driftConfig = [
      { dx: -0.8, dy: 0.5, scale: 1.3 },    // block 1: bottom-left → off down-left
      { dx: -1.0, dy: 0.2, scale: 1.2 },    // block 2: mid-left → off left
      { dx: -0.5, dy: 0.8, scale: 1.3 },    // block 3: bottom-left → off bottom
      { dx: -0.9, dy: 0.4, scale: 1.2 },    // block 4: upper-left → off down-left
    ];

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        // Contact sits at the page bottom and rarely scrolls fully past, so
        // progress is driven by how far past its midpoint the viewport is
        const progress = Math.max(0, Math.min(1, (vh - rect.top - rect.height * 0.55) / (vh * 0.5)));
        const eased = progress * progress;

        wraps.forEach((wrap, i) => {
          const cfg = driftConfig[i] || { dx: 0, dy: 0, scale: 0 };
          const tx = cfg.dx * vw * eased;
          const ty = cfg.dy * vh * eased;
          const sc = 1 + (cfg.scale * eased);
          wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sc})`;
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-number">// 06</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="grid-2">
          <div className="contact-info-column">
            <h3 className="contact-heading">Let's build something together</h3>
            <p className="contact-text">
              I am currently open to systems integration consulting, .NET core API architecture projects, and custom Agentic AI/automation workflows. Drop a message or email me directly!
            </p>

            <div className="email-copy-card glass-card">
              <div className="email-label font-mono">DIRECT EMAIL</div>
              <div className="email-row">
                <Mail className="mail-icon" size={20} />
                <span className="email-text font-mono">{emailAddress}</span>
                <button 
                  onClick={copyToClipboard} 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="social-links-grid">
              <a href="https://linkedin.com/in/baqar-hussain" target="_blank" rel="noopener noreferrer" className="social-link-card glass-card">
                <LinkedinIcon />
                <span className="font-mono">LinkedIn ➔</span>
              </a>
              <a href="https://github.com/poseidonrage" target="_blank" rel="noopener noreferrer" className="social-link-card glass-card">
                <GithubIcon />
                <span className="font-mono">GitHub ➔</span>
              </a>
            </div>
          </div>

          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="glass-card contact-form">
              <div className="form-group">
                <label htmlFor="name" className="font-mono">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="font-mono">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="font-mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Hi Baqar, I'd love to connect..."
                  className="form-input"
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit-btn" 
                disabled={sentStatus === 'sending'}
              >
                {sentStatus === 'sending' ? (
                  'Sending...'
                ) : sentStatus === 'success' ? (
                  <>Message Sent! <Check size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background effects — dark room */}
      <div className="contact-bg-effects">
        <div className="cspotlight-vignette"></div>
      </div>

      {/* Floating blocks layer — NO overflow:hidden */}
      <div className="contact-blocks-layer">
        <div className="cglow-line cgl-1"></div>
        <div className="cglow-line cgl-2"></div>

        {/* 4 floating 3D cubes — bottom left */}
        <div className="cblock-wrap" style={{ bottom: '6%', left: '2%' }}>
          <div className="cblock-drift cdrift-1">
            <div className="cube-card cblock-tilt-1 cblock-dark">
              <div className="cblock-face">{renderTechLogo('javascript')}</div>
            </div>
          </div>
        </div>
        <div className="cblock-wrap" style={{ bottom: '18%', left: '6%' }}>
          <div className="cblock-drift cdrift-2">
            <div className="cube-card cblock-tilt-2 cblock-gold"></div>
          </div>
        </div>
        <div className="cblock-wrap" style={{ bottom: '4%', left: '14%' }}>
          <div className="cblock-drift cdrift-3">
            <div className="cube-card cblock-tilt-3 cblock-dark">
              <div className="cblock-face">{renderTechLogo('docker')}</div>
            </div>
          </div>
        </div>
        <div className="cblock-wrap" style={{ bottom: '26%', left: '1%' }}>
          <div className="cblock-drift cdrift-4">
            <div className="cube-card cblock-tilt-4 cblock-gold"></div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          background: #050608;
        }
        .contact-section .container {
          position: relative;
          z-index: 2;
        }
        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .contact-heading {
          font-size: 1.8rem;
          color: var(--text-primary);
        }
        .contact-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 500px;
        }
        .email-copy-card {
          padding: 1.25rem 1.75rem;
          border-color: rgba(var(--accent-rgb), 0.1);
        }
        .email-label {
          font-size: 0.7rem;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .email-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mail-icon {
          color: var(--text-secondary);
        }
        .email-text {
          font-size: 1rem;
          color: var(--text-primary);
          flex: 1;
        }
        .copy-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .copy-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.05);
        }
        .copy-btn.copied {
          color: #22c55e;
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
        }
        .social-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .social-link-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1.25rem;
          cursor: pointer;
        }
        .social-link-card span {
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .social-link-card:hover span {
          color: var(--accent-color);
          transform: translateX(4px);
        }
        
        /* Form Styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(7, 9, 14, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        /* ═══════════════ CONTACT BACKGROUND EFFECTS ═══════════════ */
        .contact-bg-effects {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 34px 34px;
        }
        .contact-blocks-layer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* Spotlight vignette */
        .cspotlight-vignette {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 2;
          background: radial-gradient(
            ellipse 80% 55% at 50% 70%,
            rgba(255, 160, 60, 0.06) 0%,
            rgba(5, 6, 8, 0.0) 45%,
            rgba(5, 6, 8, 0.25) 75%,
            rgba(2, 3, 5, 0.6) 92%,
            #000000 100%
          );
        }

        /* Glow lines */
        .cglow-line {
          position: absolute;
          height: 1.5px;
          border-radius: 1px;
          pointer-events: none;
          z-index: -1;
          opacity: 0.45;
        }
        .cgl-1 {
          width: 40%; bottom: 18%; left: 0%;
          background: linear-gradient(90deg, transparent 0%, rgba(255,150,50,0.5) 30%, rgba(255,130,40,0.7) 60%, transparent 100%);
          filter: blur(1.5px);
          transform: rotate(-3deg);
        }
        .cgl-2 {
          width: 30%; bottom: 8%; left: 5%;
          background: linear-gradient(90deg, transparent 0%, rgba(255,170,70,0.4) 30%, rgba(255,150,50,0.6) 70%, transparent 100%);
          filter: blur(2px);
          transform: rotate(2deg);
        }

        /* 3D Cubes */
        .cblock-wrap {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          will-change: transform;
        }
        .cblock-drift {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cube-card {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 14px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        .cblock-dark {
          background: linear-gradient(145deg, #3a3f4d, #262a32);
        }
        .cblock-gold {
          background: linear-gradient(145deg, #ffe4b3, #ffc44d);
          border-color: rgba(255, 255, 255, 0.18);
        }
        .cblock-tilt-1 { width: 62px; height: 62px; transform: rotate(-12deg); }
        .cblock-tilt-2 { width: 44px; height: 44px; transform: rotate(10deg); }
        .cblock-tilt-3 { width: 56px; height: 56px; transform: rotate(8deg); }
        .cblock-tilt-4 { width: 50px; height: 50px; transform: rotate(-9deg); }

        .cblock-face {
          width: 55%;
          height: 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cblock-face svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.5));
        }

        /* Drift animations */
        @keyframes cdrift-lr {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        @keyframes cdrift-rl {
          0%, 100% { transform: translateX(20px); }
          50% { transform: translateX(-20px); }
        }
        .cdrift-1 { animation: cdrift-lr 5.8s ease-in-out infinite; }
        .cdrift-2 { animation: cdrift-rl 7.8s ease-in-out infinite; }
        .cdrift-3 { animation: cdrift-lr 5.1s ease-in-out infinite; }
        .cdrift-4 { animation: cdrift-rl 6.8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
