import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

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

      <style>{`
        .contact-section {
          position: relative;
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
      `}</style>
    </section>
  );
};
