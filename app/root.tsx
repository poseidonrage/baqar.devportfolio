import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import globalStyles from "./global.css?url";
import appStyles from "./App.css?url";
import indexStyles from "./index.css?url";
import { Navbar } from "~/components/Navbar";
import { CustomCursor } from "~/components/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: appStyles },
  { rel: "stylesheet", href: indexStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isRoadmap = location.pathname === "/roadmap";

  // Derive activeView for Navbar logic
  let activeView = "home";
  const path = location.pathname;
  if (path.startsWith("/blog")) {
    activeView = "blog";
  } else if (path === "/roadmap") {
    activeView = "roadmap";
  } else if (path === "/admin") {
    activeView = "admin";
  }

  return (
    <html lang="en" data-theme="default" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="app-wrapper">
          {!isRoadmap && <CustomCursor />}
          {!isRoadmap && (
            <Navbar activeView={activeView} />
          )}

          <main className="main-content">
            {children}
          </main>

          {!isRoadmap && (
            <footer className="footer font-mono">
              <div className="container footer-container">
                <p>© {new Date().getFullYear()}. Made with passion by Baqar Hussain Naqvi.</p>
                <p className="footer-status">Status: Active & building</p>
              </div>
            </footer>
          )}
        </div>
        <ScrollRestoration />
        <Scripts />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
