import React from 'react';
import { Cpu, Link2, BrainCircuit, Layout } from 'lucide-react';

export const Expertise: React.FC = () => {
  const skills = [
    {
      icon: <Cpu size={32} />,
      num: '01',
      title: 'Software & API Engineering',
      desc: 'Expertise in C#, .NET 10 Core, REST APIs, Microservices, WinForms, and database-driven application architectures.',
      tags: ['.NET 10', 'C#', 'SQL Server', 'APIs'],
      underlineClass: 'cyan'
    },
    {
      icon: <Link2 size={32} />,
      num: '02',
      title: 'Enterprise Integration',
      desc: 'Specialized in middleware, PeopleSoft/Meditech workflows, financial systems, and claims processing automation (NHIF/Jubilee).',
      tags: ['PeopleSoft', 'Meditech', 'Oracle 11g', 'NHIF/Jubilee'],
      underlineClass: 'magenta'
    },
    {
      icon: <BrainCircuit size={32} />,
      num: '03',
      title: 'Agentic AI & RAG',
      desc: 'Designing RAG architectures, orchestrating automation workflows in n8n, and building custom LLM agents (Hermes).',
      tags: ['Agentic AI', 'RAG', 'n8n', 'Hermes Agent'],
      underlineClass: 'orange'
    },
    {
      icon: <Layout size={32} />,
      num: '04',
      title: 'Frontend & Mobile UI',
      desc: 'Creating modern, high-performance web interfaces with React, Next.js, and interactive Blazor applications.',
      tags: ['React', 'Next.js', 'Blazor Server', 'Tailwind'],
      underlineClass: 'violet'
    }
  ];

  return (
    <section className="expertise-section" id="expertise">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-number">// 01</span>
          <h2 className="section-title">My Expertise</h2>
        </div>

        <div className="grid-4">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-num font-mono">{skill.num}</span>
              </div>
              <h3 className="skill-title">
                {skill.title}
              </h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-tags font-mono">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .expertise-section {
          position: relative;
        }
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        .skill-card-header {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .skill-icon {
          color: var(--accent-color);
          filter: drop-shadow(0 0 5px var(--accent-glow));
          transition: var(--transition-smooth);
        }
        .skill-num {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .skill-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .skill-desc {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.75rem;
        }
        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
