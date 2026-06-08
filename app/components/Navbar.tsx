import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import { Flex } from "@ninna-ui/layout";

interface NavbarProps {
  activeView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();
    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, []);

  useEffect(() => {
    if (activeView === "blog") {
      setActiveSection("blog");
      return;
    }
    if (activeView === "roadmap") {
      setActiveSection("roadmap");
      return;
    }
    if (activeView === "admin") {
      setActiveSection("admin");
      return;
    }

    if (location.pathname !== "/") {
      return;
    }

    const sections = ["hero", "expertise", "work", "experience", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === "hero" ? "home" : section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeView, location.pathname]);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    if (sectionId === "home") {
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else {
        navigate("/");
      }
      return;
    }

    // Scroll to section on home page
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and then scroll
      e.preventDefault();
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { id: "home", label: "home", number: "01", to: "/" },
    { id: "expertise", label: "expertise", number: "02", to: "/#expertise" },
    { id: "work", label: "work", number: "03", to: "/#work" },
    { id: "experience", label: "experience", number: "04", to: "/#experience" },
    { id: "blog", label: "blog", number: "05", to: "/blog" },
    { id: "contact", label: "contact", number: "06", to: "/#contact" },
    { id: "roadmap", label: "roadmap", number: "07", to: "/roadmap" },
  ];

  const shouldBeScrolled = isScrolled || activeView === "blog" || activeView === "admin";

  return (
    <nav className={`navbar-container ${shouldBeScrolled ? "navbar-scrolled" : ""}`}>
      <Flex className="navbar-content" justify="between" align="center">
        <a href="/" className="logo-link" onClick={(e) => handleNavClick("home", e)}>
          <img src="/inline_logo.png" alt="baqar.dev" className="logo-image" />
          <span className="logo-cursor"></span>
        </a>

        <Flex gap="6" align="center" className="nav-links font-mono">
          {navItems.map((item) => {
            const isBlog = item.id === "blog";
            const isRoadmap = item.id === "roadmap";
            const isActive = isBlog
              ? activeView === "blog"
              : isRoadmap
              ? activeView === "roadmap"
              : activeView === "home" && activeSection === item.id;

            return (
              <Link
                key={item.id}
                to={item.to}
                className={`nav-item ${isActive ? "active-link" : ""}`}
                onClick={(e) => {
                  if (item.id === "blog" || item.id === "roadmap") {
                    // Let normal Link navigation happen
                  } else {
                    handleNavClick(item.id, e);
                  }
                }}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">// {item.label}</span>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, border-bottom-color 0.3s ease, backdrop-filter 0.3s ease;
          pointer-events: none;
        }
        .navbar-container.navbar-scrolled {
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(102, 217, 237, 0.08);
          pointer-events: auto;
        }
        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          pointer-events: auto;
          transition: padding 0.3s ease;
        }
        .navbar-container.navbar-scrolled .navbar-content {
          padding: 0.85rem 2rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
        }
        .logo-image {
          height: 38px;
          width: auto;
          display: block;
          transition: 0.3s ease;
        }
        .navbar-container.navbar-scrolled .logo-image {
          height: 32px;
        }
        .logo-cursor {
          width: 2px;
          height: 22px;
          background-color: var(--accent);
          margin-left: 0.45rem;
          display: inline-block;
          animation: logo-cursor-blink 1.1s infinite step-end;
          box-shadow: 0 0 6px var(--accent);
          transition: 0.3s ease;
        }
        .navbar-container.navbar-scrolled .logo-cursor {
          height: 18px;
        }
        @keyframes logo-cursor-blink {
          from, to {
            background-color: transparent;
            box-shadow: none;
          }
          50% {
            background-color: var(--accent);
            box-shadow: 0 0 6px var(--accent);
          }
        }
        .nav-links {
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.5rem 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease;
        }
        .navbar-container.navbar-scrolled .nav-links {
          background: transparent;
          backdrop-filter: none;
          border-color: transparent;
          box-shadow: none;
          padding: 0;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: rgba(255, 255, 255, 0.45);
          padding: 0.25rem 0;
          text-decoration: none;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .nav-number {
          font-size: 0.7rem;
          color: #94a3b8;
          margin-bottom: 0.15rem;
          font-weight: 500;
          transition: color 0.25s ease;
          opacity: 0.8;
        }
        .nav-item:hover, .nav-item.active-link {
          color: var(--accent);
          text-shadow: 0 0 8px rgba(102, 217, 237, 0.4);
        }
        .nav-item:hover .nav-number, .nav-item.active-link .nav-number {
          color: var(--accent);
          opacity: 1;
        }
        .nav-label {
          font-size: 1.05rem;
          letter-spacing: -0.05em;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      ` }} />
    </nav>
  );
};
