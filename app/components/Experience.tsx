import React, { useState } from "react";
import { Calendar, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Grid, Box, Stack, Flex } from "@ninna-ui/layout";
import { Timeline, Card } from "@ninna-ui/data-display";
import { Heading, Text, Badge } from "@ninna-ui/primitives";

export const Experience: React.FC = () => {
  const jobs = [
    {
      role: "Program Analyst",
      company: "Aga Khan Health Services",
      location: "Tanzania",
      duration: "2024 – Present",
      tech: [".NET 9", "Blazor Interactive", "Oracle 11g", "REST APIs", "PeopleSoft Integration", "Meditech Integration", "NHIF/Jubilee APIs"],
      highlights: [
        "Engineered a custom healthcare insurance engine for NHIF and Jubilee APIs, eliminating dependency on expensive third-party Meditech claim modules and saving substantial annual licensing overhead.",
        "Designed and deployed Blazor Interactive Server modules backed by highly optimized Oracle 11g PL/SQL stored procedures and query tuning, improving patient workflow visibility and core HMS load times.",
        "Architected and automated end-to-end financial integrations with PeopleSoft, synchronizing Goods Received Notes (GRN), voucher validation, and journal ledger entries to eliminate manual data entry and accelerate sync speed.",
        "Built real-time NHIF Admission/Discharge (A/D) dashboards providing clinical coordinators with critical operational oversight."
      ]
    },
    {
      role: "Consulting Software Engineer",
      company: "Universal Motors",
      location: "UAE",
      duration: "2023 – 2024",
      tech: [".NET 8", "React", "Next.js", "Azure SQL Server", "REST APIs", "Docker", "Git"],
      highlights: [
        "Spearheaded the modernization of Universal Motors' legacy backend architecture, optimizing API endpoints and Azure SQL Server queries to boost database transaction throughput by 35%.",
        "Designed and implemented robust, high-performance RESTful APIs in .NET 8 to handle complex international inventory catalogues, cross-border multi-currency invoicing, and real-time stock updates.",
        "Standardized development and deployment workflows by containerizing services using Docker, minimizing environmental discrepancies and establishing consistent local-to-production parity."
      ]
    },
    {
      role: "Software Engineer",
      company: "NICVD (National Institute of Cardiovascular Diseases)",
      location: "Pakistan",
      duration: "2022 – 2023",
      tech: [".NET Framework 4.7", "WinForms", "Telerik Controls", "SQL Server", "Crystal Reports", "ERP Modules"],
      highlights: [
        "Led the in-house development of CATH XP (Catheterization Lab System) and modular hospital ERP systems, driving a 15% reduction in organizational operating costs by replacing commercial proprietary software.",
        "Re-architected legacy WinForms applications using Telerik Controls and .NET Framework, enhancing UI/UX and reducing weekly bugs by 40% through strict refactoring and comprehensive unit testing.",
        "Created advanced clinical patient reporting modules and financial dashboards utilizing Crystal Reports and SQL Server, delivering real-time metrics to department heads."
      ]
    },
    {
      role: "Application Developer",
      company: "NICVD",
      location: "Pakistan",
      duration: "2018 – 2022",
      tech: [".NET", "WinForms", "SQL Server", "HMS Workflows", "Admissions & Discharges"],
      highlights: [
        "Delivered high-concurrency HMS (Hospital Management System) modules handling high-volume patient admissions, discharges, clinical routing, and EMR database workflows.",
        "Maintained and scaled mission-critical legacy healthcare applications, ensuring 99.99% system availability and seamless 24/7 operations in high-pressure emergency departments.",
        "Partnered with medical and administrative staff to analyze workflow bottlenecks, translating clinical requirements into streamlined software features that optimized emergency admissions."
      ]
    }
  ];

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
        <Flex align="center" gap="4" className="section-title-wrapper mb-8">
          <span className="section-number font-mono text-cyan-400">// 04</span>
          <Heading as="h2" size="3xl" className="font-bold text-slate-100">
            Professional Experience
          </Heading>
        </Flex>

        <Box className="timeline-container max-w-4xl mx-auto py-4">
          <Timeline>
            {jobs.map((job, idx) => {
              const isExpanded = expandedJobs.includes(idx);
              return (
                <Timeline.Item key={idx}>
                  <Timeline.Indicator icon={<Briefcase size={16} />} status="primary" />
                  <Timeline.Connector className="left-[15px] bg-cyan-500/20" />
                  <Timeline.Content className="w-full">
                    <Card
                      variant="outline"
                      interactive
                      className="w-full cursor-pointer overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-400/30 transition-all duration-300"
                      onClick={() => toggleExpand(idx)}
                    >
                      <div className="card-header p-6 flex justify-between items-center gap-4">
                        <Stack gap="1" className="title-block">
                          <Heading as="h3" size="lg" className="font-bold text-slate-100">
                            {job.role}
                          </Heading>
                          <Text size="sm" muted className="font-mono">
                            {job.company}, <span className="text-slate-500">{job.location}</span>
                          </Text>
                        </Stack>
                        <Flex align="center" gap="3" className="date-toggle-block">
                          <Badge variant="soft" color="neutral" className="flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-slate-300">
                            <Calendar size={12} /> {job.duration}
                          </Badge>
                          <span className="text-slate-500">
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </span>
                        </Flex>
                      </div>

                      {isExpanded && (
                        <Card.Body className="p-6 pt-0 border-t border-dashed border-slate-800">
                          <ul className="highlights-list flex flex-col gap-3 my-6">
                            {job.highlights.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-slate-300 text-sm leading-relaxed relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-cyan-400 before:font-bold">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <Flex gap="2" wrap="wrap" className="tech-tags font-mono">
                            {job.tech.map((t, tIdx) => (
                              <Badge key={tIdx} variant="soft" color="primary">
                                {t}
                              </Badge>
                            ))}
                          </Flex>
                        </Card.Body>
                      )}
                    </Card>
                  </Timeline.Content>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Box>

        {/* Education & Certifications Subsection */}
        <Grid columns={{ base: 1, md: 2 }} gap="8" className="edu-cert-container mt-16 pt-16 border-t border-slate-800">
          <div className="edu-column">
            <Heading as="h3" size="md" className="font-mono text-cyan-400 uppercase tracking-wider mb-8">
              // education
            </Heading>
            <Stack gap="6" className="edu-items">
              {[
                { degree: "Master of Computer Science (MCS)", school: "Muhammad Ali Jinnah University, Pakistan", date: "2016 – 2019" },
                { degree: "ACCA Pakistan — Finalist (F1–F9)", school: "CAMS - College of Accounting & Management Science", date: "2013 – 2015" },
                { degree: "Bachelor of Commerce (B.Com)", school: "University of Karachi, Pakistan", date: "2012 – 2014" }
              ].map((edu, index) => (
                <Card key={index} variant="outline" className="p-6 border border-slate-800 bg-slate-900/40 hover:border-cyan-400/20 transition-all duration-300">
                  <Heading as="h4" size="md" className="font-semibold text-slate-100">
                    {edu.degree}
                  </Heading>
                  <Text size="sm" muted className="font-mono mt-1">
                    {edu.school}
                  </Text>
                  <Badge variant="outline" color="neutral" className="mt-3 inline-block font-mono text-xs">
                    {edu.date}
                  </Badge>
                </Card>
              ))}
            </Stack>
          </div>

          <div className="cert-column">
            <Heading as="h3" size="md" className="font-mono text-cyan-400 uppercase tracking-wider mb-8">
              // professional certifications
            </Heading>
            <Grid columns={{ base: 1, sm: 2 }} gap="4" className="cert-grid">
              {[
                { num: "01", name: "C# & ASP.NET MVC", issuer: "Professional Certification" },
                { num: "02", name: "Software Testing & Quality Assurance", issuer: "Quality Assurance Engineering" },
                { num: "03", name: "Modern JavaScript (ES6+)", issuer: "Advanced Web Development" },
                { num: "04", name: "API Design in .NET Core", issuer: "Enterprise Backend Architecture" },
                { num: "05", name: "Certified Accounting Technician (CAT)", issuer: "Financial & Cost Accounting" }
              ].map((cert, index) => (
                <Card key={index} variant="outline" interactive className="p-4 border border-slate-800 bg-slate-900/40 hover:border-cyan-400/30 transition-all duration-300">
                  <Text size="xs" color="primary" className="font-mono block mb-1">
                    {cert.num}
                  </Text>
                  <Heading as="h4" size="sm" className="font-semibold text-slate-100">
                    {cert.name}
                  </Heading>
                  <Text size="xs" muted className="font-mono mt-1">
                    {cert.issuer}
                  </Text>
                </Card>
              ))}
            </Grid>
          </div>
        </Grid>
      </div>
    </section>
  );
};
