import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { Terminal as TerminalIcon, RefreshCw, ChevronRight } from "lucide-react";
import { Flex } from "@ninna-ui/layout";

const TECH_LOGOS = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "postgres",
  "sqlserver",
  "oracle",
  "dotnet",
  "csharp",
  "docker",
  "n8n",
  "blazor"
];

const renderTechLogo = (logoName: string) => {
  switch (logoName) {
    case "javascript":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <rect width="100" height="100" fill="#F7DF1E" rx="8" />
          <path d="M63 73c0 7-4 10-10 10-6 0-10-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V38h7v35zm27-14c0 7-4 10-10 10-6 0-9-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V59c0-3-2-4-5-5l-4-1c-5-2-7-5-7-10 0-6 4-9 10-9s9 3 10 7h-7c0-2-1-3-3-3-2 0-3 1-3 3v2c0 2 2 4 5 5l4 1c5 1 8 4 8 10z" fill="#000000" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <rect width="100" height="100" fill="#3178C6" rx="8" />
          <path d="M43.7 38H25.3v6.5h6v28.8h6.8V44.5h6v-6.5zM67.3 52.4c-3.1-1.7-6.2-2.1-7.7-2.1-3 0-4.3 1.1-4.3 2.5s1.2 2.2 4.1 3c5.5 1.5 10.3 3.6 10.3 9.4 0 6.6-5.8 8.8-11.8 8.8-6.9 0-12-2.9-12-7.9h6.9c.1 2.3 2.9 3.6 5.2 3.6 2.8 0 4.7-1.1 4.7-2.9s-1.8-2.2-4.5-2.9c-5.8-1.5-10-3.6-10-9 0-5.8 4.9-8.4 11-8.4 5.6 0 10.1 2.1 10.1 6.5h-6.9v-.1z" fill="#FFFFFF" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="16" ry="42" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(150 50 50)" />
          <circle cx="50" cy="50" r="7.5" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <circle cx="50" cy="50" r="46" fill="#000000" stroke="#333333" strokeWidth="2" />
          <path d="M69.8 73.1L38.4 33.3H32.4v33.4h5.2V41.1l27 34.3c2.4-2.7 4.1-5.8 5.2-9.3zM62.6 33.3h5.2v24.2l-5.2-6.6V33.3z" fill="#FFFFFF" />
        </svg>
      );
    case "postgres":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <path d="M50 15c-15.5 0-28 11.5-28 25.7 0 11.6 8.3 21.3 19.6 24.5C38.6 69.8 35.8 78 30 80c9.5-.5 16-6 19.5-12.7 13.5 1.5 22.5-7.5 22.5-26.6C72 26.5 62.1 15 50 15zm-9.3 29.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm19.6 0c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" fill="#336791" />
        </svg>
      );
    case "sqlserver":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <path d="M50 15c-22.1 0-40 4.5-40 10v12.5c0 5.5 17.9 10 40 10s40-4.5 40-10V25c0-5.5-17.9-10-40-10z" fill="#E61C24" />
          <path d="M10 42.5c0 5.5 17.9 10 40 10s40-4.5 40-10v12.5c0 5.5-17.9 10-40 10s-40-4.5-40-10V42.5z" fill="#A81016" />
          <path d="M10 60c0 5.5 17.9 10 40 10s40-4.5 40-10v12.5c0 5.5-17.9 10-40 10s-40-4.5-40-10V60z" fill="#750B0E" fillOpacity="0.95" />
          <ellipse cx="50" cy="25" rx="40" ry="10" fill="#FF4D52" />
          <ellipse cx="50" cy="42.5" rx="40" ry="10" fill="none" stroke="#FF4D52" strokeWidth="2.5" />
          <ellipse cx="50" cy="60" rx="40" ry="10" fill="none" stroke="#FF4D52" strokeWidth="2.5" />
        </svg>
      );
    case "oracle":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <path d="M50 20C22.4 20 0 33.4 0 50s22.4 30 50 30 50-13.4 50-30-22.4-30-50-30zm0 46.2c-15.6 0-28.2-7.3-28.2-16.2S34.4 33.8 50 33.8s28.2 7.3 28.2 16.2-12.6 16.2-28.2 16.2z" fill="#F80000" />
        </svg>
      );
    case "dotnet":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <circle cx="50" cy="50" r="45" fill="#512BD4" />
          <path d="M46.2 32h-6.8v36h6.8V32zm19.8 0h-5.2L49.5 52.8V32H44.3v36h5.2L60.8 47.2V68h5.2V32zm14.1 0H68v36h12.1v-5.2H73.2v-10.2h7.6V47.4h-7.6v-10.2h6.9V32zM32.8 62.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2z" fill="#FFFFFF" />
        </svg>
      );
    case "csharp":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#512BD4" />
          <path d="M42 35c-8.3 0-14 5.7-14 15s5.7 15 14 15c4.8 0 8.5-2.2 10-5.3h-6c-1 1.7-2.3 2.3-4 2.3-4.5 0-7.2-3.2-7.2-9.5s2.7-9.5 7.2-9.5c1.7 0 3 .6 4 2.3h6c-1.5-3.1-5.2-5.3-10-5.3zm20.8 5v6.5h-5.5V50h5.5v5h-5.5v6.5h-5V55h-4.5v-5h4.5v-3.5h-4.5V40h4.5v-5.5h5V40h5.5zm-10.5 6.5v3.5h4.5v-3.5h-4.5z" fill="#FFFFFF" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
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
    case "n8n":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <circle cx="50" cy="50" r="46" fill="#F15A24" />
          <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
          <circle cx="28" cy="28" r="10" fill="#FFFFFF" />
          <circle cx="72" cy="28" r="10" fill="#FFFFFF" />
          <circle cx="50" cy="72" r="10" fill="#FFFFFF" />
          <line x1="35" y1="35" x2="43" y2="43" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="65" y1="35" x2="57" y2="43" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="50" y1="62" x2="50" y2="58" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );
    case "blazor":
      return (
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <path d="M12,50 C12,29 29,12 50,12 C71,12 88,29 88,50 C88,71 71,88 50,88 C29,88 12,71 12,50 Z" fill="#512BD4" />
          <path d="M50,22 C34.5,22 22,34.5 22,50 C22,65.5 34.5,78 50,78 C65.5,78 78,65.5 78,50 C78,34.5 65.5,22 50,22 Z M50,68 C40.1,68 32,59.9 32,50 C32,40.1 40.1,32 50,32 C59.9,32 68,40.1 68,50 C68,59.9 59.9,68 50,68 Z" fill="#FFFFFF" />
          <path d="M38,50 C38,43.4 43.4,38 50,38 C56.6,38 62,43.4 62,50 C62,56.6 56.6,62 50,62 C43.4,62 38,56.6 38,50 Z" fill="#8B4DFF" />
        </svg>
      );
    default:
      return null;
  }
};

const renderExtrudedLogo = (logoName: string) => {
  const logoSvg = renderTechLogo(logoName);
  if (!logoSvg) return null;

  return (
    <div className="extruded-logo-container">
      <div className="logo-layer" style={{ transform: "translateZ(1px)" }}>
        {logoSvg}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const [selectedLogos] = useState(() => {
    const shuffled = [...TECH_LOGOS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });

  const [cubePositions] = useState(() => {
    const cubes: { top: number; left: number }[] = [];

    const isInsideTextZone = (x: number, y: number) => {
      return x < 44 && y >= 32 && y <= 78;
    };

    const isInsideTerminalZone = (x: number, y: number) => {
      return x >= 48 && x <= 84 && y >= 32 && y <= 78;
    };

    const isOverlapping = (x: number, y: number) => {
      for (const cube of cubes) {
        const dx = Math.abs(cube.left - x);
        const dy = Math.abs(cube.top - y);
        if (dx < 16 && dy < 16) {
          return true;
        }
      }
      return false;
    };

    for (let i = 0; i < 5; i++) {
      let x = 0;
      let y = 0;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < 400) {
        attempts++;
        x = Math.random() * 88 + 6;
        y = Math.random() * 76 + 14;

        if (!isInsideTextZone(x, y) && !isInsideTerminalZone(x, y) && !isOverlapping(x, y)) {
          valid = true;
        }
      }

      if (!valid) {
        const fallbackSlots = [
          { top: 20, left: 15 },
          { top: 18, left: 50 },
          { top: 22, left: 82 },
          { top: 52, left: 88 },
          { top: 82, left: 30 }
        ];
        cubes.push(fallbackSlots[i]);
      } else {
        cubes.push({ top: parseFloat(y.toFixed(1)), left: parseFloat(x.toFixed(1)) });
      }
    }

    return {
      cube1: { top: `${cubes[0].top}%`, left: `${cubes[0].left}%` },
      cube2: { top: `${cubes[1].top}%`, left: `${cubes[1].left}%` },
      cube3: { top: `${cubes[2].top}%`, left: `${cubes[2].left}%` },
      cube4: { top: `${cubes[3].top}%`, left: `${cubes[3].left}%` },
      cube5: { top: `${cubes[4].top}%`, left: `${cubes[4].left}%` },
    };
  });

  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "System initialization successful.",
    "Type 'help' to see available commands or click the shortcut buttons below.",
    "",
  ]);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const commandResponses: { [key: string]: string | string[] } = {
    help: [
      "Available commands:",
      "  skills      - Show list of core technical skills",
      "  experience  - Outline current professional roles",
      "  ai          - Display my agentic AI / RAG focus",
      "  contact     - Print my email & github handle",
      "  admin       - Open the administrator control panel",
      "  clear       - Clear the terminal console screen",
    ],
    skills: [
      "Technical Stack:",
      "  • Languages   : C#, .NET 10, PL/SQL, SQL Server, Modern JavaScript/TypeScript",
      "  • Enterprise  : PeopleSoft Integration, Meditech, NHIF/Jubilee API, Financial/ERP",
      "  • AI & Flows  : Agentic AI, RAG Systems, n8n Automation, Hermes Agent",
      "  • Infra/Web   : Docker, REST APIs, Git, Blazor, React, WinForms",
    ],
    experience: [
      "Professional History:",
      "  • Program Analyst @ Aga Khan Health Services, Tanzania (2024 - Present)",
      "  • Consulting Software Engineer @ Universal Motors, UAE (2023 - 2024)",
      "  • Software Engineer & App Developer @ NICVD, Pakistan (2018 - 2023)",
    ],
    ai: [
      "AI & Agentic Focus:",
      "  Currently building intelligent agents and automated pipelines:",
      "  - Implementing Retrieval-Augmented Generation (RAG) models.",
      "  - Designing scalable orchestration workflows in n8n and Hermes.",
      "  - Automating hospital & enterprise operations using LLMs.",
    ],
    contact: [
      "Contact Details:",
      "  Email  : baqar.naqvi2@gmail.com",
      "  GitHub : github.com/poseidonrage",
      "  Web    : baqar.dev",
    ],
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response: string[] = [];

    if (cleanCmd === "") {
      response = [""];
    } else if (cleanCmd === "clear") {
      setTerminalHistory([]);
      return;
    } else if (cleanCmd === "admin") {
      response = ["Redirecting to admin console..."];
      setTerminalHistory((prev) => [...prev, `guest@baqar.dev:~$ ${cmd}`, ...response, ""]);
      setTimeout(() => {
        navigate("/admin");
      }, 500);
      return;
    } else if (commandResponses[cleanCmd]) {
      const resp = commandResponses[cleanCmd];
      response = Array.isArray(resp) ? resp : [resp];
    } else {
      response = [`Command not found: "${cmd}". Type "help" for a list of commands.`];
    }

    setTerminalHistory((prev) => [...prev, `guest@baqar.dev:~$ ${cmd}`, ...response, ""]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      handleCommand(terminalInput);
      setTerminalInput("");
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <section className="hero-section min-h-screen flex items-center pt-32 pb-16 relative z-10" id="hero">
      {/* 3D Cubes, Particles & Atmospheric Effects */}
      <div className="hero-bg-effects absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Soft atmospheric glow */}
        <div className="light-blob blob-1 absolute rounded-full pointer-events-none w-[600px] h-[600px] top-[5%] right-[15%] bg-[radial-gradient(circle,rgba(102,217,237,0.06)_0%,transparent_70%)] filter blur-[80px]" />
        <div className="light-blob blob-2 absolute rounded-full pointer-events-none w-[450px] h-[450px] bottom-[15%] left-[5%] bg-[radial-gradient(circle,rgba(102,217,237,0.04)_0%,transparent_70%)] filter blur-[80px]" />
        <div className="light-blob blob-3 absolute rounded-full pointer-events-none w-[350px] h-[350px] top-[40%] left-[45%] bg-[radial-gradient(circle,rgba(255,140,50,0.06)_0%,transparent_70%)] filter blur-[80px]" />

        {/* Floating particles */}
        <div className="particle p1 w-[3px] h-[3px] top-[18%] left-[30%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[18s] delay-0" />
        <div className="particle p2 w-[2px] h-[2px] top-[45%] left-[65%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[22s] delay-[-3s]" />
        <div className="particle p3 w-[4px] h-[4px] top-[70%] left-[40%] opacity-0 bg-[rgba(255,140,50,0.5)] rounded-full pointer-events-none animation-float duration-[15s] delay-[-7s]" />
        <div className="particle p4 w-[2px] h-[2px] top-[25%] left-[75%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[20s] delay-[-2s]" />
        <div className="particle p5 w-[3px] h-[3px] top-[60%] left-[20%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[25s] delay-[-5s]" />
        <div className="particle p6 w-[2px] h-[2px] top-[35%] left-[55%] opacity-0 bg-[rgba(255,140,50,0.4)] rounded-full pointer-events-none animation-float duration-[17s] delay-[-10s]" />
        <div className="particle p7 w-[3px] h-[3px] top-[80%] left-[70%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[19s] delay-[-8s]" />
        <div className="particle p8 w-[2px] h-[2px] top-[10%] left-[50%] opacity-0 bg-[rgba(102,217,237,0.6)] rounded-full pointer-events-none animation-float duration-[23s] delay-[-12s]" />

        {/* 1. Hero Cube */}
        <div className="cube-wrapper ref-cube-1" style={{ top: cubePositions.cube1.top, left: cubePositions.cube1.left, right: "auto" }}>
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="cube-core"></div>
            <div className="cube-core-logo">
              {renderExtrudedLogo(selectedLogos[0])}
            </div>
          </div>
        </div>
 
        {/* 2. Hologram cube */}
        <div className="cube-wrapper ref-cube-2" style={{ top: cubePositions.cube2.top, left: cubePositions.cube2.left, right: "auto" }}>
          <div className="cube">
            <div className="face front">
              <span className="face-inner-ring"></span>
              <span className="face-scanline"></span>
            </div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="cube-core core-cyan"></div>
            <div className="cube-core-logo">
              {renderExtrudedLogo(selectedLogos[1])}
            </div>
          </div>
        </div>
 
        {/* 3. Wireframe cube */}
        <div className="cube-wrapper ref-cube-3" style={{ top: cubePositions.cube3.top, left: cubePositions.cube3.left, right: "auto" }}>
          <div className="cube">
            <div className="face front wireframe"></div>
            <div className="face back wireframe"></div>
            <div className="face right wireframe"></div>
            <div className="face left wireframe"></div>
            <div className="face top wireframe"></div>
            <div className="face bottom wireframe"></div>
            <div className="cube-core-logo">
              {renderExtrudedLogo(selectedLogos[2])}
            </div>
          </div>
        </div>
 
        {/* 4. Neon-edge cube */}
        <div className="cube-wrapper ref-cube-4" style={{ top: cubePositions.cube4.top, left: cubePositions.cube4.left, bottom: "auto" }}>
          <div className="cube">
            <div className="face front neon-face"></div>
            <div className="face back neon-face"></div>
            <div className="face right neon-face"></div>
            <div className="face left neon-face"></div>
            <div className="face top neon-face"></div>
            <div className="face bottom neon-face"></div>
            <div className="cube-core core-warm"></div>
            <div className="cube-core-logo">
              {renderExtrudedLogo(selectedLogos[3])}
            </div>
          </div>
        </div>
 
        {/* 5. Micro crystal cube */}
        <div className="cube-wrapper ref-cube-5" style={{ top: cubePositions.cube5.top, left: cubePositions.cube5.left, right: "auto", bottom: "auto" }}>
          <div className="cube">
            <div className="face front crystal"></div>
            <div className="face back crystal"></div>
            <div className="face right crystal"></div>
            <div className="face left crystal"></div>
            <div className="face top crystal"></div>
            <div className="face bottom crystal"></div>
            <div className="cube-core"></div>
            <div className="cube-core-logo">
              {renderExtrudedLogo(selectedLogos[4])}
            </div>
          </div>
        </div>
      </div>
 
      <div className="container hero-container w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hero-text-content flex flex-col items-start z-10 relative">
          <div className="light-orb-wrapper absolute top-24 -left-12 -translate-x-1/2 -z-10 pointer-events-none">
            <div className="light-orb w-10 h-10 rounded-full bg-[radial-gradient(circle,#ffffff_10%,#ffd066_35%,#ff7300_70%,#ff3c00_100%)] shadow-[0_0_25px_#ff7300,0_0_50px_rgba(255,115,0,0.6),0_0_100px_rgba(102,217,237,0.3)]" />
            <div className="light-orb-halo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,160,50,0.12)_0%,rgba(102,217,237,0.04)_40%,transparent_75%)] filter blur-[12px]" />
            <div className="orbital-ring orbital-1 absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 rounded-full border border-cyan-400/20 origin-center" />
            <div className="orbital-ring orbital-2 absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 rounded-full border border-dashed border-cyan-400/10 origin-center" />
          </div>
          
          <span className="hero-welcome font-mono text-cyan-400 text-sm mb-3 block">// hello world, meet</span>
          <h1 className="hero-title text-4xl sm:text-6xl font-bold text-slate-100 mb-2 leading-tight drop-shadow-[2px_2px_10px_rgba(255,115,0,0.3)]">
            Baqar Hussain <span className="chonky-underline">Naqvi</span>
          </h1>
          <h2 className="hero-subtitle text-lg sm:text-2xl text-slate-300 font-medium mb-6">
            Program Analyst & Integration Specialist
          </h2>
          <p className="hero-description text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            With 8+ years of experience in enterprise development, I build robust integrations (.NET 10, Oracle, PeopleSoft) and orchestrate AI systems using RAG, agents, and n8n workflows.
          </p>
          <Flex gap="4" className="hero-actions w-full sm:w-auto">
            <a href="#work" className="btn-primary px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(102,217,237,0.2)] transition-all duration-300 w-full sm:w-auto">
              View My Work <ChevronRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary px-6 py-3 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded flex items-center justify-center transition-all duration-300 w-full sm:w-auto">
              Get in Touch
            </a>
          </Flex>
        </div>

        <div className="hero-terminal-wrapper border border-[rgba(102,217,237,0.15)] bg-[rgba(10,14,23,0.85)] backdrop-blur-md rounded-lg overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_20px_-3px_rgba(102,217,237,0.2)] flex flex-col h-[380px] z-10 hover:border-cyan-400/30 transition-all duration-300">
          <div className="terminal-header bg-white/5 border-b border-[rgba(102,217,237,0.15)] flex items-center justify-between p-3">
            <div className="terminal-dots flex gap-1.5">
              <span className="dot dot-red w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="dot dot-yellow w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="dot dot-green w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
            <div className="terminal-title font-mono text-xs text-slate-500 flex items-center gap-1.5">
              <TerminalIcon size={14} /> terminal.sh
            </div>
            <div className="terminal-actions">
              <button 
                onClick={() => setTerminalHistory(["System reset completed.", "Type 'help' for command listing."])} 
                title="Reset Terminal"
                className="terminal-btn text-slate-500 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                <RefreshCw size={12} />
              </button>
            </div>
          </div>
          <div ref={terminalBodyRef} className="terminal-body flex-grow p-4 overflow-y-auto flex flex-col font-mono text-xs leading-normal bg-slate-950/40">
            <div className="terminal-history flex-grow">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className={`terminal-line whitespace-pre-wrap ${line.startsWith("guest@") ? "text-slate-200 font-semibold" : "text-slate-400"}`}>
                  {line}
                </div>
              ))}
            </div>
            <form onSubmit={handleFormSubmit} className="terminal-input-row flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
              <span className="terminal-prompt text-cyan-400 select-none">guest@baqar.dev:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="terminal-input flex-grow bg-transparent border-none outline-none text-slate-200 font-mono text-xs p-0"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="try 'skills'..."
              />
              <button type="submit" className="hidden" aria-hidden="true" />
            </form>
          </div>
          <div className="terminal-shortcuts bg-white/2 border-t border-[rgba(102,217,237,0.15)] p-2.5 flex items-center gap-2 font-mono text-[10px] sm:text-xs flex-wrap">
            <span className="text-slate-500">Shortcuts:</span>
            <button className="bg-white/5 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 px-2 py-0.5 rounded cursor-pointer transition-colors duration-200" onClick={() => handleCommand("skills")}>skills</button>
            <button className="bg-white/5 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 px-2 py-0.5 rounded cursor-pointer transition-colors duration-200" onClick={() => handleCommand("experience")}>experience</button>
            <button className="bg-white/5 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 px-2 py-0.5 rounded cursor-pointer transition-colors duration-200" onClick={() => handleCommand("ai")}>agentic-ai</button>
            <button className="bg-white/5 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 px-2 py-0.5 rounded cursor-pointer transition-colors duration-200" onClick={() => handleCommand("contact")}>contact</button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-bg-effects {
          perspective: 1000px;
        }

        /* ═══════════════ CUBE ENGINE ═══════════════ */
        .cube-wrapper {
          position: absolute;
          perspective: 1000px;
          z-index: 0;
          transform-style: preserve-3d;
        }
        .cube {
          --sz: 100px;
          --hz: calc(var(--sz) / 2);
          width: var(--sz); height: var(--sz);
          transform-style: preserve-3d;
          position: relative;
        }
        .cube .face {
          position: absolute;
          width: var(--sz); height: var(--sz);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .cube .face.front  { transform: rotateY(0deg)   translateZ(var(--hz)); }
        .cube .face.back   { transform: rotateY(180deg) translateZ(var(--hz)); }
        .cube .face.right  { transform: rotateY(90deg)  translateZ(var(--hz)); }
        .cube .face.left   { transform: rotateY(-90deg) translateZ(var(--hz)); }
        .cube .face.top    { transform: rotateX(90deg)  translateZ(var(--hz)); }
        .cube .face.bottom { transform: rotateX(-90deg) translateZ(var(--hz)); }

        /* ═══════ DEFAULT GLASS FACE STYLE ═══════ */
        .cube .face:not(.wireframe):not(.neon-face):not(.crystal) {
          background: linear-gradient(135deg, rgba(21,32,48,0.15) 0%, rgba(10,16,24,0.1) 100%);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: inset 0 0 20px rgba(102, 217, 237, 0.08), 0 0 6px rgba(0,0,0,0.4);
        }
        .cube .face.front:not(.wireframe):not(.neon-face):not(.crystal) {
          background: radial-gradient(circle at 70% 30%, rgba(255,115,0,0.15) 0%, rgba(21,32,48,0.15) 75%);
        }
        .cube .face.top:not(.wireframe):not(.neon-face):not(.crystal) {
          background: linear-gradient(135deg, rgba(36,53,74,0.15) 0%, rgba(22,34,48,0.15) 80%);
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        /* ═══════ WIREFRAME FACE ═══════ */
        .face.wireframe {
          background: transparent !important;
          border: 1px solid rgba(102, 217, 237, 0.25) !important;
          box-shadow: 
            inset 0 0 12px rgba(102, 217, 237, 0.05),
            0 0 4px rgba(102, 217, 237, 0.1) !important;
        }

        /* ═══════ NEON-EDGE FACE ═══════ */
        .face.neon-face {
          background: rgba(10, 16, 24, 0.12) !important;
          border: 1px solid rgba(102, 217, 237, 0.5) !important;
          box-shadow: 
            inset 0 0 25px rgba(102, 217, 237, 0.15),
            0 0 12px rgba(102, 217, 237, 0.25),
            0 0 30px rgba(102, 217, 237, 0.08) !important;
        }

        /* ═══════ CRYSTAL FACE ═══════ */
        .face.crystal {
          background: linear-gradient(135deg, rgba(102, 217, 237, 0.03) 0%, rgba(15,22,35,0.15) 50%, rgba(102, 217, 237, 0.02) 100%) !important;
          border: 1px solid rgba(102, 217, 237, 0.3) !important;
          box-shadow: inset 0 0 15px rgba(102, 217, 237, 0.1) !important;
        }

        /* ═══════ SCAN LINE EFFECT ═══════ */
        .face-scanline {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(102, 217, 237, 0.04) 3px,
            rgba(102, 217, 237, 0.04) 4px
          );
          pointer-events: none;
        }
        .face-inner-ring {
          position: absolute;
          top: 50%; left: 50%;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(102, 217, 237, 0.5);
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(102, 217, 237, 0.25), inset 0 0 10px rgba(102, 217, 237, 0.1);
          animation: ring-pulse 3s infinite alternate ease-in-out;
        }
        @keyframes ring-pulse {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }

        /* ═══════ GLOWING CORES ═══════ */
        .cube-core {
          position: absolute;
          top: 50%; left: 50%;
          width: calc(var(--sz) * 0.32);
          height: calc(var(--sz) * 0.32);
          transform: translate3d(-50%, -50%, 0);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(102, 217, 237, 0.9) 0%, rgba(102, 217, 237, 0.3) 45%, transparent 75%);
          filter: blur(4px);
          pointer-events: none;
          z-index: 1;
          animation: core-pulse 3s infinite alternate ease-in-out;
        }
        .core-cyan {
          background: radial-gradient(circle, rgba(102, 217, 237, 1) 0%, rgba(102, 217, 237, 0.5) 35%, transparent 70%);
          filter: blur(3px);
        }
        .core-warm {
          background: radial-gradient(circle, rgba(255,180,80,0.9) 0%, rgba(255,120,40,0.4) 40%, transparent 75%);
          filter: blur(5px);
        }
        @keyframes core-pulse {
          0% { transform: translate3d(-50%,-50%,0) scale(0.8); opacity: 0.5; }
          100% { transform: translate3d(-50%,-50%,0) scale(1.2); opacity: 1; }
        }

        .extruded-logo-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-layer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          transform-style: preserve-3d;
          backface-visibility: visible;
          pointer-events: none;
        }
        .cube-core-logo {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate3d(-50%, -50%, 1px);
          width: calc(var(--sz) * 2 / 3);
          height: calc(var(--sz) * 2 / 3);
          pointer-events: none;
          z-index: 2;
          transform-style: preserve-3d;
          animation: logo-rotate-clockwise 25s linear infinite;
          filter: drop-shadow(0 0 6px var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes logo-rotate-clockwise {
          0% { transform: translate3d(-50%, -50%, 1px) rotate(0deg); }
          100% { transform: translate3d(-50%, -50%, 1px) rotate(360deg); }
        }

        /* ═══════════════ CUBES PLACEMENT ═══════════════ */
        .ref-cube-1 .cube {
          --sz: 140px;
          transform: rotateX(22deg) rotateY(-35deg) rotateZ(8deg);
          animation: drift-1 18s infinite ease-in-out;
        }
        .ref-cube-2 .cube {
          --sz: 105px;
          transform: rotateX(12deg) rotateY(40deg) rotateZ(5deg);
          animation: drift-2 22s infinite ease-in-out;
        }
        .ref-cube-3 .cube {
          --sz: 65px;
          transform: rotateX(15deg) rotateY(-25deg) rotateZ(-8deg);
          animation: drift-3 14s infinite ease-in-out;
        }
        .ref-cube-4 .cube {
          --sz: 85px;
          transform: rotateX(-18deg) rotateY(35deg) rotateZ(-12deg);
          animation: drift-4 20s infinite ease-in-out;
        }
        .ref-cube-5 .cube {
          --sz: 55px;
          transform: rotateX(30deg) rotateY(-40deg) rotateZ(25deg);
          animation: drift-5 10s infinite ease-in-out;
        }

        /* ═══════ DRIFT ANIMATIONS ═══════ */
        @keyframes drift-1 {
          0%,100% { transform: translateY(0)    rotateX(22deg)  rotateY(-35deg) rotateZ(8deg); }
          25%     { transform: translateY(-12px) rotateX(15deg)  rotateY(-55deg) rotateZ(12deg); }
          50%     { transform: translateY(-20px) rotateX(28deg)  rotateY(-75deg) rotateZ(5deg); }
          75%     { transform: translateY(-8px)  rotateX(18deg)  rotateY(-50deg) rotateZ(15deg); }
        }
        @keyframes drift-2 {
          0%,100% { transform: translateY(0)    rotateX(12deg)  rotateY(40deg)  rotateZ(5deg); }
          25%     { transform: translateY(-8px)  rotateX(25deg)  rotateY(20deg)  rotateZ(15deg); }
          50%     { transform: translateY(-15px) rotateX(8deg)   rotateY(60deg)  rotateZ(-5deg); }
          75%     { transform: translateY(-5px)  rotateX(18deg)  rotateY(35deg)  rotateZ(10deg); }
        }
        @keyframes drift-3 {
          0%,100% { transform: translateY(0)    rotateX(15deg)  rotateY(-25deg) rotateZ(-8deg); }
          33%     { transform: translateY(-10px) rotateX(35deg)  rotateY(-50deg) rotateZ(10deg); }
          66%     { transform: translateY(-6px)  rotateX(5deg)   rotateY(-10deg) rotateZ(-15deg); }
        }
        @keyframes drift-4 {
          0%,100% { transform: translateY(0)    rotateX(-18deg) rotateY(35deg)  rotateZ(-12deg); }
          30%     { transform: translateY(-14px) rotateX(-5deg)  rotateY(60deg)  rotateZ(5deg); }
          66%     { transform: translateY(-8px)  rotateX(-25deg) rotateY(20deg)  rotateZ(-20deg); }
        }
        @keyframes drift-5 {
          0%,100% { transform: translateY(0)    rotateX(30deg)  rotateY(-40deg) rotateZ(25deg); }
          25%     { transform: translateY(-6px)  rotateX(45deg)  rotateY(-60deg) rotateZ(10deg); }
          50%     { transform: translateY(-12px) rotateX(20deg)  rotateY(-80deg) rotateZ(35deg); }
          75%     { transform: translateY(-4px)  rotateX(40deg)  rotateY(-50deg) rotateZ(20deg); }
        }

        /* ═══════════════ GLOWING ORB ═══════════════ */
        @keyframes orb-pulse {
          0% { transform: scale(0.95); opacity: 0.9; }
          100% { transform: scale(1.08); opacity: 1; box-shadow: 0 0 35px #ff7300, 0 0 70px rgba(255,115,0,0.7), 0 0 130px rgba(102,217,237,0.4); }
        }
        @keyframes orbit-spin-1 {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes orbit-spin-2 {
          0% { transform: rotateX(55deg) rotateY(30deg) rotateZ(0deg); }
          100% { transform: rotateX(55deg) rotateY(30deg) rotateZ(-360deg); }
        }

        /* ═══════════════ PARTICLES FLOAT ═══════════════ */
        @keyframes particle-float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-60px) translateX(30px); opacity: 0.7; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-120px) translateX(-20px); opacity: 0; }
        }
        
        .animation-float {
          animation: particle-float linear infinite;
        }

        @media (max-width: 1024px) {
          .ref-cube-4 { display: none; }
        }
        @media (max-width: 600px) {
          .cube-wrapper, .light-orb-wrapper, .particle { display: none; }
        }
      ` }} />
    </section>
  );
};
