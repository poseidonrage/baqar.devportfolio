import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://baqar.dev';
const LOCAL_ORIGIN = 'http://127.0.0.1:4173';
const DIST = path.resolve('dist');

const STATIC_ROUTES = [
  '/',
  '/blog',
  '/roadmap',
  '/ml-roadmap',
  '/post-ml-roadmap',
  '/healthcare-ai-roadmap'
];

const ROUTE_META = {
  '/': {
    title: 'Baqar Hussain Naqvi | Program Analyst & Systems Integration Specialist',
    description:
      'Baqar Hussain Naqvi is a Program Analyst & Systems Integration Specialist with 8+ years of experience in C#, .NET, Oracle PL/SQL, hospital ERPs, and Agentic AI/RAG architectures.'
  },
  '/blog': {
    title: 'Technical Blog | Baqar Hussain Naqvi',
    description:
      'Technical articles on systems integration, C#/.NET, healthcare systems, enterprise software, machine learning, RAG, and Agentic AI by Baqar Hussain Naqvi.'
  },
  '/roadmap': {
    title: 'AI Engineering Roadmap | Baqar Hussain Naqvi',
    description:
      'A practical AI engineering roadmap covering Python, LLM APIs, RAG, agents, MCP, LLMOps, deployment, and portfolio projects.'
  },
  '/ml-roadmap': {
    title: 'Machine Learning Roadmap | Baqar Hussain Naqvi',
    description:
      'A machine learning roadmap covering regression, neural networks, decision trees, clustering, recommender systems, and reinforcement learning.'
  },
  '/post-ml-roadmap': {
    title: 'Post-ML AI Engineering Roadmap | Baqar Hussain Naqvi',
    description:
      'A post-machine-learning roadmap covering evaluation, MLOps, transformers, RAG, agents, deployment, and monitoring.'
  },
  '/healthcare-ai-roadmap': {
    title: 'Healthcare AI Engineering Roadmap | Baqar Hussain Naqvi',
    description:
      'A healthcare AI roadmap covering clinical NLP, FHIR, privacy, fairness, RAG over hospital policies, workflow agents, and patient-flow forecasting.'
  }
};

function startPreview() {
  // Spawn vite's JS entry with the current node binary — avoids
  // Windows EINVAL on spawning .cmd shims without a shell
  const viteBin = path.resolve('node_modules/vite/bin/vite.js');
  return spawn(
    process.execPath,
    [viteBin, 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'],
    { stdio: 'inherit', shell: false }
  );
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(LOCAL_ORIGIN);
      if (res.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error('Vite preview server did not become ready.');
}

function routeToFile(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, `${route.replace(/^\//, '')}.html`);
}

async function injectHead(page, route) {
  await page.evaluate(({ route, meta, siteUrl }) => {
    const canonical = `${siteUrl}${route === '/' ? '/' : route}`;

    const upsertMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        document.head.appendChild(el);
      }
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, String(value));
      }
    };

    const upsertLink = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('link');
        document.head.appendChild(el);
      }
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, String(value));
      }
    };

    const isArticle = route.startsWith('/blog/');
    const h1 =
      document.querySelector('article h1')?.textContent?.trim() ||
      document.querySelector('main h1')?.textContent?.trim();

    const firstParagraph =
      document.querySelector('article p')?.textContent?.trim() ||
      document.querySelector('main p')?.textContent?.trim();

    const title =
      (isArticle && h1 ? `${h1} | Baqar Hussain Naqvi` : meta?.title) ||
      document.title;

    const description =
      (isArticle && firstParagraph ? firstParagraph.replace(/\s+/g, ' ').slice(0, 180) : meta?.description) ||
      document.querySelector('meta[name="description"]')?.getAttribute('content') ||
      '';

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: isArticle ? 'article' : 'website'
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    if (isArticle && h1) {
      let script = document.head.querySelector('script[data-prerender-article-jsonld="true"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-prerender-article-jsonld', 'true');
        document.head.appendChild(script);
      }

      const published =
        document.querySelector('article time[datetime]')?.getAttribute('datetime') ||
        document.querySelector('main time[datetime]')?.getAttribute('datetime') ||
        undefined;

      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        '@id': `${canonical}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        url: canonical,
        headline: h1,
        description,
        ...(published ? { datePublished: published } : {}),
        author: { '@id': `${siteUrl}/#person` },
        publisher: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en'
      });
    }
  }, { route, meta: ROUTE_META[route] ?? null, siteUrl: SITE_URL });
}

async function saveRoute(page, route) {
  console.log(`Prerendering ${route}`);
  await page.goto(`${LOCAL_ORIGIN}${route}`, { waitUntil: 'domcontentloaded' });

  try {
    await page.waitForLoadState('networkidle', { timeout: 8000 });
  } catch {}

  await page.waitForTimeout(500);
  await injectHead(page, route);

  const html = await page.content();
  const file = routeToFile(route);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html, 'utf8');
}

function sitemapXml(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = routes
    .filter(route => route !== '/admin')
    .map(route => {
      const loc = `${SITE_URL}${route === '/' ? '/' : route}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

const preview = startPreview();

try {
  await waitForServer();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    userAgent: 'BaqarDev-Prerender/1.0'
  });

  await saveRoute(page, '/blog');

  // Blog cards use click handlers, not anchor tags — discover slugs from
  // the same public API the page renders from (still dynamic, not hardcoded).
  // On Vercel, prefer the deployment's own URL — the production domain may
  // sit behind a bot checkpoint that would return HTML instead of posts.
  const apiOrigin =
    process.env.PRERENDER_API_ORIGIN ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : SITE_URL);
  const blogRoutes = [];
  try {
    const res = await fetch(`${apiOrigin}/api/blogs`);
    const posts = await res.json();
    for (const post of posts) {
      if (post?.slug) blogRoutes.push(`/blog/${post.slug}`);
    }
  } catch (err) {
    console.warn('API slug discovery failed, falling back to DOM links:', err?.message ?? err);
  }

  if (blogRoutes.length === 0) {
    const domRoutes = await page
      .locator('a[href^="/blog/"]')
      .evaluateAll(anchors =>
        [...new Set(
          anchors
            .map(a => a.getAttribute('href'))
            .filter(Boolean)
            .map(href => new URL(href, window.location.origin).pathname)
            .filter(pathname => pathname.startsWith('/blog/'))
        )]
      );
    blogRoutes.push(...domRoutes);
  }

  const routes = [...new Set([...STATIC_ROUTES, ...blogRoutes])];

  for (const route of routes) {
    if (route === '/blog') continue;
    await saveRoute(page, route);
  }

  await browser.close();
  await writeFile(path.join(DIST, 'sitemap.xml'), sitemapXml(routes), 'utf8');

  console.log(`Prerendered ${routes.length} indexable routes.`);
} finally {
  preview.kill('SIGTERM');
}
