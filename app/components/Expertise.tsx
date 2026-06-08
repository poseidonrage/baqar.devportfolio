import React from "react";
import { Cpu, Link2, BrainCircuit, Layout as LayoutIcon } from "lucide-react";
import { Grid, Box, Stack, Flex } from "@ninna-ui/layout";
import { Heading, Text, Badge } from "@ninna-ui/primitives";
import { Card } from "@ninna-ui/data-display";

export const Expertise: React.FC = () => {
  const skills = [
    {
      icon: <Cpu size={32} />,
      num: "01",
      title: "Software & API Engineering",
      desc: "Expertise in C#, .NET 10 Core, REST APIs, Microservices, WinForms, and database-driven application architectures.",
      tags: [".NET 10", "C#", "SQL Server", "APIs"]
    },
    {
      icon: <Link2 size={32} />,
      num: "02",
      title: "Enterprise Integration",
      desc: "Specialized in middleware, PeopleSoft/Meditech workflows, financial systems, and claims processing automation (NHIF/Jubilee).",
      tags: ["PeopleSoft", "Meditech", "Oracle 11g", "NHIF/Jubilee"]
    },
    {
      icon: <BrainCircuit size={32} />,
      num: "03",
      title: "Agentic AI & RAG",
      desc: "Designing RAG architectures, orchestrating automation workflows in n8n, and building custom LLM agents (Hermes).",
      tags: ["Agentic AI", "RAG", "n8n", "Hermes Agent"]
    },
    {
      icon: <LayoutIcon size={32} />,
      num: "04",
      title: "Frontend & Mobile UI",
      desc: "Creating modern, high-performance web interfaces with React, Next.js, and interactive Blazor applications.",
      tags: ["React", "Next.js", "Blazor Server", "Tailwind"]
    }
  ];

  return (
    <section className="expertise-section" id="expertise">
      <div className="container">
        <Flex align="center" gap="4" className="section-title-wrapper mb-8">
          <span className="section-number font-mono text-cyan-400">// 02</span>
          <Heading as="h2" size="3xl" className="font-bold text-slate-100">
            My Expertise
          </Heading>
        </Flex>

        <Grid columns={{ base: 1, md: 2, lg: 4 }} gap="6" className="grid-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              variant="outline"
              interactive
              className="skill-card flex flex-col justify-between h-full p-6 border border-slate-800 bg-slate-900/40 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <Stack gap="4" className="h-full">
                <Flex justify="between" align="center" className="skill-card-header">
                  <div className="skill-icon text-cyan-400 filter drop-shadow-[0_0_8px_rgba(102,217,237,0.4)]">
                    {skill.icon}
                  </div>
                  <Text size="sm" className="skill-num font-mono text-slate-500">
                    {skill.num}
                  </Text>
                </Flex>
                
                <Heading as="h3" size="lg" className="font-semibold text-slate-100 mt-2">
                  {skill.title}
                </Heading>
                
                <Text size="sm" muted className="leading-relaxed flex-grow">
                  {skill.desc}
                </Text>

                <Flex gap="2" wrap="wrap" className="skill-tags font-mono mt-auto">
                  {skill.tags.map((tag, tIdx) => (
                    <Badge
                      key={tIdx}
                      variant="soft"
                      color="primary"
                      className="cursor-pointer hover:border-cyan-400/40 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Stack>
            </Card>
          ))}
        </Grid>
      </div>
    </section>
  );
};
