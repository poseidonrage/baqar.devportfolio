import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const renderProjectImage = (title: string) => {
  if (title.includes('Healthcare') || title.includes('AKHSmart') || title.includes('Payam')) {
    return (
      <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.03)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.15)" />
          </linearGradient>
        </defs>
        <rect width="400" height="160" fill="url(#hc-grad)" />
        <g stroke="rgba(102, 217, 237, 0.1)" strokeWidth="1">
          <line x1="0" y1="40" x2="400" y2="40" />
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="120" x2="400" y2="120" />
          <line x1="100" y1="0" x2="100" y2="160" />
          <line x1="200" y1="0" x2="200" y2="160" />
          <line x1="300" y1="0" x2="300" y2="160" />
        </g>
        <path d="M 50,80 L 130,80 L 145,50 L 155,110 L 165,70 L 175,90 L 185,80 L 350,80" 
              stroke="var(--accent-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              filter="drop-shadow(0 0 5px var(--accent-glow))" />
        <path d="M 230,55 A 12,12 0 0,0 200,65 A 12,12 0 0,0 170,55 C 150,25 200,95 200,95 C 200,95 250,25 230,55 Z" 
              fill="rgba(102, 217, 237, 0.05)" stroke="var(--accent-color)" strokeWidth="1.5" />
      </svg>
    );
  }
  if (title.includes('Motors') || title.includes('Enterprise') || title.includes('JDC')) {
    return (
      <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.03)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.12)" />
          </linearGradient>
        </defs>
        <rect width="400" height="160" fill="url(#ent-grad)" />
        <g stroke="rgba(102, 217, 237, 0.08)" strokeWidth="1">
          <circle cx="200" cy="80" r="50" strokeDasharray="5,5" />
          <circle cx="200" cy="80" r="30" />
          <line x1="200" y1="10" x2="200" y2="150" />
          <line x1="130" y1="80" x2="270" y2="80" />
        </g>
        <rect x="70" y="90" width="14" height="40" fill="var(--accent-color)" opacity="0.6" />
        <rect x="95" y="70" width="14" height="60" fill="var(--accent-color)" opacity="0.8" />
        <rect x="120" y="50" width="14" height="80" fill="var(--accent-color)" />
        <rect x="250" y="50" width="80" height="60" rx="4" stroke="var(--accent-color)" strokeWidth="1.5" fill="rgba(102,217,237,0.05)" />
        <line x1="260" y1="70" x2="320" y2="70" stroke="var(--accent-color)" strokeWidth="2" />
        <line x1="260" y1="90" x2="300" y2="90" stroke="rgba(102,217,237,0.4)" strokeWidth="2" />
      </svg>
    );
  }
  if (title.includes('NICVD') || title.includes('CATH')) {
    return (
      <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cath-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.03)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.15)" />
          </linearGradient>
        </defs>
        <rect width="400" height="160" fill="url(#cath-grad)" />
        <g stroke="rgba(102, 217, 237, 0.06)" strokeWidth="1">
          <line x1="0" y1="20" x2="400" y2="20" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="100" x2="400" y2="100" />
          <line x1="0" y1="140" x2="400" y2="140" />
          <line x1="50" y1="0" x2="50" y2="160" />
          <line x1="150" y1="0" x2="150" y2="160" />
          <line x1="250" y1="0" x2="250" y2="160" />
          <line x1="350" y1="0" x2="350" y2="160" />
        </g>
        <circle cx="200" cy="80" r="40" stroke="var(--accent-color)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="80" r="5" fill="var(--accent-color)" filter="drop-shadow(0 0 4px var(--accent-glow))" />
        <path d="M 120,80 L 155,80 M 245,80 L 280,80 M 200,30 L 200,55 M 200,105 L 200,130" stroke="var(--accent-color)" strokeWidth="1.5" />
        <path d="M 175,80 C 175,70 185,62 200,62 C 215,62 225,70 225,80" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="3,3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(102, 217, 237, 0.03)" />
          <stop offset="100%" stopColor="rgba(102, 217, 237, 0.15)" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#ai-grad)" />
      <g stroke="rgba(102, 217, 237, 0.15)" strokeWidth="1">
        <line x1="120" y1="50" x2="200" y2="80" />
        <line x1="120" y1="110" x2="200" y2="80" />
        <line x1="280" y1="50" x2="200" y2="80" />
        <line x1="280" y1="110" x2="200" y2="80" />
        <line x1="120" y1="50" x2="120" y2="110" />
        <line x1="280" y1="50" x2="280" y2="110" />
      </g>
      <circle cx="120" cy="50" r="5" fill="var(--accent-color)" />
      <circle cx="120" cy="110" r="5" fill="var(--accent-color)" />
      <circle cx="280" cy="50" r="5" fill="var(--accent-color)" />
      <circle cx="280" cy="110" r="5" fill="var(--accent-color)" />
      <circle cx="200" cy="80" r="9" fill="var(--accent-color)" filter="drop-shadow(0 0 5px var(--accent-glow))" />
      <circle cx="200" cy="80" r="4" fill="#fff" />
    </svg>
  );
};

export const Projects: React.FC = () => {
  const categories = ['All', 'Enterprise', 'Healthcare', 'AI & Automation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'AKHSmart Healthcare System',
      category: 'Healthcare',
      desc: 'Modular healthcare platform built with NHIF/Jubilee claims automation, patient admission/discharge pipelines, and a custom financial integration engine.',
      tech: ['.NET 9', 'Blazor Server', 'Oracle 11g', 'REST APIs', 'PeopleSoft'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: true,
    },
    {
      title: 'Universal Motors ERP Backend',
      category: 'Enterprise',
      desc: 'Modernization of legacy automotive inventory systems. Migrated core modules to Docker, optimized heavy SQL procedures, and built REST APIs for cross-border invoicing.',
      tech: ['.NET 8', 'React', 'Azure SQL', 'Docker', 'REST APIs'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: true,
    },
    {
      title: 'JDC Container Stock Management',
      category: 'Enterprise',
      desc: 'Scalable container tracking and inventory management application built to enhance supply chain traceability, track container lifecycles, and minimize stock discrepancies.',
      tech: ['.NET Core', 'SQL Server', 'REST APIs', 'Inventory Systems'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: false,
    },
    {
      title: 'Payam-e-Sehat Foundation Clinical App',
      category: 'Healthcare',
      desc: 'Lightweight clinical system designed for diabetic patient management, enhancing medical follow-up schedules, logging patient histories, and ensuring continuity of care.',
      tech: ['.NET Framework', 'WinForms', 'SQL Server', 'HMS Workflows'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: false,
    },
    {
      title: 'NICVD Hospital ERP & CATH XP',
      category: 'Healthcare',
      desc: 'In-house Catheterization Lab dashboard (CATH XP) and full-scale ERP system for the largest cardiac hospital in Pakistan, replacing expensive license-based alternatives.',
      tech: ['.NET Framework', 'WinForms', 'SQL Server', 'Telerik', 'Crystal Reports'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: false,
    },
    {
      title: 'Agentic AI & RAG Orchestrator',
      category: 'AI & Automation',
      desc: 'Retrieval-Augmented Generation workflows and n8n pipelines integrated with LLM agents (Hermes) to automate healthcare query resolutions and middleware tasks.',
      tech: ['Agentic AI', 'RAG', 'n8n Workflows', 'Hermes Agent', 'LLMs'],
      link: '#',
      github: 'https://github.com/poseidonrage',
      featured: false,
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="projects-section" id="work">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-number">// 03</span>
          <h2 className="section-title font-sans">Featured Work</h2>
        </div>

        <div className="filter-bar font-mono">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? 'active-filter' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-image-wrapper">
                {renderProjectImage(p.title)}
              </div>
              <div className="project-card-content">
                <div className="project-card-header">
                  <Folder className="folder-icon" size={32} />
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link" title="Github Repository">
                      <GithubIcon style={{ width: '18px', height: '18px' }} />
                    </a>
                    <a href={p.link} className="proj-link" title="Live Preview">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <span className="project-category font-mono">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                </div>

                <div className="project-tech font-mono">
                  {p.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }
        .filter-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
        }
        .filter-btn.active-filter {
          color: var(--bg-dark);
          background: var(--accent-color);
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 0;
          overflow: hidden;
        }
        .project-image-wrapper {
          height: 160px;
          background: linear-gradient(135deg, rgba(16, 23, 33, 0.9) 0%, rgba(7, 9, 14, 0.9) 100%);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .project-image-wrapper svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image-wrapper svg {
          transform: scale(1.05);
        }
        .project-card-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .folder-icon {
          color: var(--accent-color);
          opacity: 0.85;
          transition: var(--transition-smooth);
        }
        .project-card:hover .folder-icon {
          transform: translateY(-2px);
          color: var(--text-primary);
        }
        .project-links {
          display: flex;
          gap: 0.75rem;
        }
        .proj-link {
          color: var(--text-secondary);
          opacity: 0.75;
          transition: var(--transition-fast);
        }
        .proj-link:hover {
          color: var(--accent-color);
          opacity: 1;
          transform: scale(1.1);
        }
        .project-info {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .project-category {
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
        }
        .project-title {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.925rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-tech .tech-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
