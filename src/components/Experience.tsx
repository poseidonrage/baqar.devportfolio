import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const jobs = [
    {
      role: 'Program Analyst',
      company: 'Aga Khan Health Services',
      location: 'Tanzania',
      duration: '2024 – Present',
      tech: ['.NET 9', 'Blazor Interactive', 'Oracle 11g', 'REST APIs', 'PeopleSoft Integration', 'Meditech Integration', 'NHIF/Jubilee APIs'],
      highlights: [
        'Engineered a custom healthcare insurance engine for NHIF and Jubilee APIs, eliminating dependency on expensive third-party Meditech claim modules and saving substantial annual licensing overhead.',
        'Designed and deployed Blazor Interactive Server modules backed by highly optimized Oracle 11g PL/SQL stored procedures and query tuning, improving patient workflow visibility and core HMS load times.',
        'Architected and automated end-to-end financial integrations with PeopleSoft, synchronizing Goods Received Notes (GRN), voucher validation, and journal ledger entries to eliminate manual data entry and accelerate sync speed.',
        'Built real-time NHIF Admission/Discharge (A/D) dashboards providing clinical coordinators with critical operational oversight.'
      ]
    },
    {
      role: 'Consulting Software Engineer',
      company: 'Universal Motors',
      location: 'UAE',
      duration: '2023 – 2024',
      tech: ['.NET 8', 'React', 'Next.js', 'Azure SQL Server', 'REST APIs', 'Docker', 'Git'],
      highlights: [
        'Spearheaded the modernization of Universal Motors\' legacy backend architecture, optimizing API endpoints and Azure SQL Server queries to boost database transaction throughput by 35%.',
        'Designed and implemented robust, high-performance RESTful APIs in .NET 8 to handle complex international inventory catalogues, cross-border multi-currency invoicing, and real-time stock updates.',
        'Standardized development and deployment workflows by containerizing services using Docker, minimizing environmental discrepancies and establishing consistent local-to-production parity.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'NICVD (National Institute of Cardiovascular Diseases)',
      location: 'Pakistan',
      duration: '2022 – 2023',
      tech: ['.NET Framework 4.7', 'WinForms', 'Telerik Controls', 'SQL Server', 'Crystal Reports', 'ERP Modules'],
      highlights: [
        'Led the in-house development of CATH XP (Catheterization Lab System) and modular hospital ERP systems, driving a 15% reduction in organizational operating costs by replacing commercial proprietary software.',
        'Re-architected legacy WinForms applications using Telerik Controls and .NET Framework, enhancing UI/UX and reducing weekly bugs by 40% through strict refactoring and comprehensive unit testing.',
        'Created advanced clinical patient reporting modules and financial dashboards utilizing Crystal Reports and SQL Server, delivering real-time metrics to department heads.'
      ]
    },
    {
      role: 'Application Developer',
      company: 'NICVD',
      location: 'Pakistan',
      duration: '2018 – 2022',
      tech: ['.NET', 'WinForms', 'SQL Server', 'HMS Workflows', 'Admissions & Discharges'],
      highlights: [
        'Delivered high-concurrency HMS (Hospital Management System) modules handling high-volume patient admissions, discharges, clinical routing, and EMR database workflows.',
        'Maintained and scaled mission-critical legacy healthcare applications, ensuring 99.99% system availability and seamless 24/7 operations in high-pressure emergency departments.',
        'Partnered with medical and administrative staff to analyze workflow bottlenecks, translating clinical requirements into streamlined software features that optimized emergency admissions.'
      ]
    }
  ];

  // Store index of expanded jobs. By default, the first job is expanded.
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0]);

  const toggleExpand = (idx: number) => {
    if (expandedJobs.includes(idx)) {
      setExpandedJobs(expandedJobs.filter((i) => i !== idx));
    } else {
      setExpandedJobs([...expandedJobs, idx]);
    }
  };

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-number">// 04</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {jobs.map((job, idx) => {
              const isExpanded = expandedJobs.includes(idx);
              return (
                <div key={idx} className="timeline-item">
                  <div className="timeline-badge">
                    <Briefcase size={16} />
                  </div>

                  <div className={`glass-card timeline-card ${isExpanded ? 'card-expanded' : ''}`}>
                    <div 
                      className="card-header"
                      onClick={() => toggleExpand(idx)}
                      role="button"
                      aria-expanded={isExpanded}
                    >
                      <div className="title-block">
                        <h3 className="job-role">{job.role}</h3>
                        <h4 className="job-company font-mono">
                          {job.company}, <span className="location">{job.location}</span>
                        </h4>
                      </div>
                      <div className="date-toggle-block">
                        <span className="job-date font-mono">
                          <Calendar size={12} style={{ marginRight: '0.4rem' }} /> {job.duration}
                        </span>
                        <span className="expand-icon">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </div>
                    </div>

                    <div className={`card-content ${isExpanded ? 'content-show' : 'content-hide'}`}>
                      <ul className="highlights-list">
                        {job.highlights.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                      <div className="tech-tags font-mono">
                        {job.tech.map((t, tIdx) => (
                          <span key={tIdx} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Subsection */}
        <div className="edu-cert-container">
          <div className="edu-column">
            <h3 className="sub-section-title font-mono">// education</h3>
            <div className="edu-items">
              <div className="edu-item">
                <h4 className="edu-degree">Master of Computer Science (MCS)</h4>
                <p className="edu-school font-mono">Muhammad Ali Jinnah University, Pakistan</p>
                <span className="edu-date font-mono">2016 – 2019</span>
              </div>
              <div className="edu-item">
                <h4 className="edu-degree">ACCA Pakistan — Finalist (F1–F9)</h4>
                <p className="edu-school font-mono">CAMS - College of Accounting & Management Science</p>
                <span className="edu-date font-mono">2013 – 2015</span>
              </div>
              <div className="edu-item">
                <h4 className="edu-degree">Bachelor of Commerce (B.Com)</h4>
                <p className="edu-school font-mono">University of Karachi, Pakistan</p>
                <span className="edu-date font-mono">2012 – 2014</span>
              </div>
            </div>
          </div>

          <div className="cert-column">
            <h3 className="sub-section-title font-mono">// professional certifications</h3>
            <div className="cert-grid">
              <div className="cert-card glass-card">
                <span className="cert-number font-mono">01</span>
                <h4 className="cert-name">C# & ASP.NET MVC</h4>
                <p className="cert-issuer font-mono">Professional Certification</p>
              </div>
              <div className="cert-card glass-card">
                <span className="cert-number font-mono">02</span>
                <h4 className="cert-name">Software Testing & Quality Assurance</h4>
                <p className="cert-issuer font-mono">Quality Assurance Engineering</p>
              </div>
              <div className="cert-card glass-card">
                <span className="cert-number font-mono">03</span>
                <h4 className="cert-name">Modern JavaScript (ES6+)</h4>
                <p className="cert-issuer font-mono">Advanced Web Development</p>
              </div>
              <div className="cert-card glass-card">
                <span className="cert-number font-mono">04</span>
                <h4 className="cert-name">API Design in .NET Core</h4>
                <p className="cert-issuer font-mono">Enterprise Backend Architecture</p>
              </div>
              <div className="cert-card glass-card">
                <span className="cert-number font-mono">05</span>
                <h4 className="cert-name">Certified Accounting Technician (CAT)</h4>
                <p className="cert-issuer font-mono">Financial & Cost Accounting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem 0;
        }
        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--border-color) 0%, var(--accent-color) 20%, var(--accent-color) 80%, var(--border-color) 100%);
          box-shadow: 0 0 10px var(--accent-glow);
          opacity: 0.8;
          transition: var(--transition-smooth);
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-item {
          position: relative;
          padding-left: 5rem;
        }
        .timeline-badge {
          position: absolute;
          left: 15px;
          top: 24px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid var(--accent-color);
          box-shadow: 0 0 10px var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          z-index: 10;
          transition: var(--transition-smooth);
        }
        .timeline-card {
          padding: 0;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .card-header {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
          gap: 1rem;
        }
        .job-role {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          transition: var(--transition-fast);
        }
        .timeline-card:hover .job-role {
          color: var(--accent-color);
        }
        .job-company {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .location {
          color: var(--text-muted);
        }
        .date-toggle-block {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .job-date {
          display: inline-flex;
          align-items: center;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .expand-icon {
          color: var(--text-muted);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .timeline-card:hover .expand-icon {
          color: var(--accent-color);
        }
        
        .card-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease;
        }
        .content-hide {
          max-height: 0;
          padding: 0 2rem;
          opacity: 0;
          pointer-events: none;
        }
        .content-show {
          max-height: 500px;
          padding: 0 2rem 2rem 2rem;
          opacity: 1;
          border-top: 1px dashed var(--border-color);
        }
        
        .highlights-list {
          list-style-type: none;
          padding: 1.25rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .highlights-list li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
        }
        .highlights-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: 700;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .tech-tag {
          background: rgba(var(--accent-rgb), 0.05);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          color: var(--accent-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 15px;
          }
          .timeline-badge {
            left: -1px;
            top: 22px;
          }
          .timeline-item {
            padding-left: 2.75rem;
          }
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
            gap: 0.75rem;
          }
          .date-toggle-block {
            width: 100%;
            justify-content: space-between;
          }
          .content-show {
            padding: 0 1.25rem 1.25rem 1.25rem;
          }
        }

        /* ═══════════════ EDUCATION & CERTIFICATIONS ═══════════════ */
        .edu-cert-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
        }
        .sub-section-title {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .edu-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .edu-item {
          position: relative;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(var(--accent-rgb), 0.15);
          transition: var(--transition-smooth);
        }
        .edu-item:hover {
          border-left-color: var(--accent-color);
        }
        .edu-degree {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .edu-school {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }
        .edu-date {
          display: inline-block;
          font-size: 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          color: var(--text-muted);
        }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .cert-card {
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          position: relative;
          transition: var(--transition-smooth);
        }
        .cert-card:hover {
          border-color: rgba(var(--accent-rgb), 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 8px rgba(var(--accent-rgb), 0.05);
        }
        .cert-number {
          font-size: 0.7rem;
          color: var(--accent-color);
          opacity: 0.6;
        }
        .cert-name {
          font-size: 1rem;
          color: var(--text-primary);
        }
        .cert-issuer {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 900px) {
          .edu-cert-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-top: 3.5rem;
            padding-top: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
