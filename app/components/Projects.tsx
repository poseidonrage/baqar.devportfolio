import React, { useState } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { Grid, Box, Stack, Flex, HStack } from "@ninna-ui/layout";
import { Heading, Text, Badge, Button, LinkBox, LinkOverlay } from "@ninna-ui/primitives";
import { Card } from "@ninna-ui/data-display";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const renderProjectImage = (title: string) => {
  if (title.includes("Healthcare") || title.includes("AKHSmart") || title.includes("Payam")) {
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
              stroke="#66d9ed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              filter="drop-shadow(0 0 5px rgba(102, 217, 237, 0.4))" />
        <path d="M 230,55 A 12,12 0 0,0 200,65 A 12,12 0 0,0 170,55 C 150,25 200,95 200,95 C 200,95 250,25 230,55 Z" 
              fill="rgba(102, 217, 237, 0.05)" stroke="#66d9ed" strokeWidth="1.5" />
      </svg>
    );
  }
  if (title.includes("Motors") || title.includes("Enterprise") || title.includes("JDC")) {
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
        <rect x="70" y="90" width="14" height="40" fill="#66d9ed" opacity="0.6" />
        <rect x="95" y="70" width="14" height="60" fill="#66d9ed" opacity="0.8" />
        <rect x="120" y="50" width="14" height="80" fill="#66d9ed" />
        <rect x="250" y="50" width="80" height="60" rx="4" stroke="#66d9ed" strokeWidth="1.5" fill="rgba(102,217,237,0.05)" />
        <line x1="260" y1="70" x2="320" y2="70" stroke="#66d9ed" strokeWidth="2" />
        <line x1="260" y1="90" x2="300" y2="90" stroke="rgba(102,217,237,0.4)" strokeWidth="2" />
      </svg>
    );
  }
  if (title.includes("NICVD") || title.includes("CATH")) {
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
        <circle cx="200" cy="80" r="40" stroke="#66d9ed" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="80" r="5" fill="#66d9ed" filter="drop-shadow(0 0 4px rgba(102, 217, 237, 0.4))" />
        <path d="M 120,80 L 155,80 M 245,80 L 280,80 M 200,30 L 200,55 M 200,105 L 200,130" stroke="#66d9ed" strokeWidth="1.5" />
        <path d="M 175,80 C 175,70 185,62 200,62 C 215,62 225,70 225,80" stroke="#66d9ed" strokeWidth="2" strokeDasharray="3,3" />
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
      <circle cx="120" cy="50" r="5" fill="#66d9ed" />
      <circle cx="120" cy="110" r="5" fill="#66d9ed" />
      <circle cx="280" cy="50" r="5" fill="#66d9ed" />
      <circle cx="280" cy="110" r="5" fill="#66d9ed" />
      <circle cx="200" cy="80" r="9" fill="#66d9ed" filter="drop-shadow(0 0 5px rgba(102, 217, 237, 0.4))" />
      <circle cx="200" cy="80" r="4" fill="#fff" />
    </svg>
  );
};

export const Projects: React.FC = () => {
  const categories = ["All", "Enterprise", "Healthcare", "AI & Automation"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "AKHSmart Healthcare System",
      category: "Healthcare",
      desc: "Modular healthcare platform built with NHIF/Jubilee claims automation, patient admission/discharge pipelines, and a custom financial integration engine.",
      tech: [".NET 9", "Blazor Server", "Oracle 11g", "REST APIs", "PeopleSoft"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: true,
    },
    {
      title: "Universal Motors ERP Backend",
      category: "Enterprise",
      desc: "Modernization of legacy automotive inventory systems. Migrated core modules to Docker, optimized heavy SQL procedures, and built REST APIs for cross-border invoicing.",
      tech: [".NET 8", "React", "Azure SQL", "Docker", "REST APIs"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: true,
    },
    {
      title: "JDC Container Stock Management",
      category: "Enterprise",
      desc: "Scalable container tracking and inventory management application built to enhance supply chain traceability, track container lifecycles, and minimize stock discrepancies.",
      tech: [".NET Core", "SQL Server", "REST APIs", "Inventory Systems"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: false,
    },
    {
      title: "Payam-e-Sehat Foundation Clinical App",
      category: "Healthcare",
      desc: "Lightweight clinical system designed for diabetic patient management, enhancing medical follow-up schedules, logging patient histories, and ensuring continuity of care.",
      tech: [".NET Framework", "WinForms", "SQL Server", "HMS Workflows"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: false,
    },
    {
      title: "NICVD Hospital ERP & CATH XP",
      category: "Healthcare",
      desc: "In-house Catheterization Lab dashboard (CATH XP) and full-scale ERP system for the largest cardiac hospital in Pakistan, replacing expensive license-based alternatives.",
      tech: [".NET Framework", "WinForms", "SQL Server", "Telerik", "Crystal Reports"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: false,
    },
    {
      title: "Agentic AI & RAG Orchestrator",
      category: "AI & Automation",
      desc: "Retrieval-Augmented Generation workflows and n8n pipelines integrated with LLM agents (Hermes) to automate healthcare query resolutions and middleware tasks.",
      tech: ["Agentic AI", "RAG", "n8n Workflows", "Hermes Agent", "LLMs"],
      link: "#",
      github: "https://github.com/poseidonrage",
      featured: false,
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="projects-section" id="work">
      <div className="container">
        <Flex align="center" gap="4" className="section-title-wrapper mb-8">
          <span className="section-number font-mono text-cyan-400">// 03</span>
          <Heading as="h2" size="3xl" className="font-bold text-slate-100">
            Featured Work
          </Heading>
        </Flex>

        <HStack gap="3" wrap={true} className="filter-bar mb-8">
          {categories.map((cat, idx) => (
            <Button
              key={idx}
              variant={activeCategory === cat ? "solid" : "outline"}
              color={activeCategory === cat ? "primary" : "neutral"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="font-mono text-xs uppercase"
            >
              {cat}
            </Button>
          ))}
        </HStack>

        <Grid columns={{ base: 1, md: 2 }} gap="8" className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <LinkBox as="article" key={idx} className="h-full">
              <Card
                variant="outline"
                interactive
                className="project-card flex flex-col justify-between overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-400/40 transition-all duration-300 h-full group"
              >
                <div className="project-image-wrapper h-40 flex items-center justify-center border-b border-slate-800 overflow-hidden bg-slate-950">
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    {renderProjectImage(p.title)}
                  </div>
                </div>
                
                <Stack gap="4" className="project-card-content p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <Flex justify="between" align="center" className="project-card-header mb-4">
                      <Folder className="folder-icon text-cyan-400 group-hover:text-slate-100 group-hover:-translate-y-0.5 transition-all duration-300" size={32} />
                      <Flex gap="3" className="project-links z-10 relative">
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200" title="Github Repository">
                          <GithubIcon style={{ width: "18px", height: "18px" }} />
                        </a>
                        <a href={p.link} className="proj-link text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200" title="Live Preview">
                          <ExternalLink size={18} />
                        </a>
                      </Flex>
                    </Flex>

                    <div className="project-info">
                      <Text size="xs" color="primary" className="font-mono font-semibold uppercase tracking-wider block mb-1">
                        {p.category}
                      </Text>
                      <Heading as="h3" size="lg" className="font-semibold text-slate-100 mb-2">
                        <LinkOverlay href={p.link}>
                          {p.title}
                        </LinkOverlay>
                      </Heading>
                      <Text size="sm" muted className="leading-relaxed mb-4">
                        {p.desc}
                      </Text>
                    </div>
                  </div>

                  <Flex gap="2" wrap="wrap" className="project-tech font-mono mt-auto pt-4 border-t border-slate-800/40">
                    {p.tech.map((t, tIdx) => (
                      <Badge key={tIdx} variant="outline" color="neutral" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </Flex>
                </Stack>
              </Card>
            </LinkBox>
          ))}
        </Grid>
      </div>
    </section>
  );
};
