import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://baqar.dev';
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function upsertJsonLd(id: string, data: unknown) {
  let script = document.head.querySelector<HTMLScriptElement>(`script[data-seo-jsonld="${id}"]`);

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.head
    .querySelector<HTMLScriptElement>(`script[data-seo-jsonld="${id}"]`)
    ?.remove();
}

function firstUsefulText(selectors: string[]): string {
  for (const selector of selectors) {
    const value = document.querySelector<HTMLElement>(selector)?.textContent?.trim();
    if (value && value.length > 20) return value.replace(/\s+/g, ' ');
  }
  return '';
}

export function SeoJsonLd() {
  const location = useLocation();

  useEffect(() => {
    const canonical = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Baqar Hussain Naqvi',
      url: `${SITE_URL}/`,
      jobTitle: 'Program Analyst & Systems Integration Specialist',
      description:
        'Program Analyst and Systems Integration Specialist specializing in healthcare enterprise systems, C#/.NET, Oracle, PeopleSoft, RAG, Agentic AI, and automation workflows.',
      knowsAbout: [
        'C#',
        '.NET',
        '.NET Core',
        'REST APIs',
        'Systems Integration',
        'Healthcare Information Systems',
        'Oracle PL/SQL',
        'PeopleSoft',
        'Meditech',
        'Retrieval-Augmented Generation',
        'RAG',
        'Agentic AI',
        'Large Language Models',
        'n8n',
        'React',
        'Blazor'
      ],
      sameAs: [
        'https://github.com/poseidonrage',
        'https://www.linkedin.com/in/baqar-hussain/'
      ]
    };

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Baqar Hussain Naqvi',
      publisher: { '@id': PERSON_ID },
      inLanguage: 'en'
    };

    upsertJsonLd('person', person);
    upsertJsonLd('website', website);

    const learningResources: Record<string, { name: string; description: string }> = {
      '/roadmap': {
        name: 'AI Engineering Roadmap',
        description:
          'A practical AI engineering roadmap covering Python, LLM APIs, RAG, agents, MCP, LLMOps, deployment, and portfolio projects.'
      },
      '/ml-roadmap': {
        name: 'Machine Learning Roadmap',
        description:
          'A machine learning roadmap covering regression, neural networks, decision trees, clustering, recommender systems, and reinforcement learning.'
      },
      '/post-ml-roadmap': {
        name: 'Post-ML AI Engineering Roadmap',
        description:
          'A post-machine-learning roadmap covering evaluation, MLOps, transformers, RAG, agents, deployment, and monitoring.'
      },
      '/healthcare-ai-roadmap': {
        name: 'Healthcare AI Engineering Roadmap',
        description:
          'A healthcare AI roadmap covering clinical NLP, FHIR, privacy, fairness, RAG over hospital policies, workflow agents, and patient-flow forecasting.'
      }
    };

    if (learningResources[location.pathname]) {
      const resource = learningResources[location.pathname];
      upsertJsonLd('route', {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        '@id': `${canonical}#learning-resource`,
        url: canonical,
        name: resource.name,
        description: resource.description,
        author: { '@id': PERSON_ID },
        creator: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        inLanguage: 'en',
        isAccessibleForFree: true
      });
      return;
    }

    if (location.pathname === '/blog') {
      upsertJsonLd('route', {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${canonical}#collection`,
        url: canonical,
        name: 'Technical Blog | Baqar Hussain Naqvi',
        description:
          'Technical articles on systems integration, C#/.NET, healthcare systems, enterprise software, machine learning, RAG, and Agentic AI.',
        author: { '@id': PERSON_ID },
        isPartOf: { '@id': WEBSITE_ID },
        inLanguage: 'en'
      });
      return;
    }

    if (location.pathname.startsWith('/blog/')) {
      const installArticleSchema = () => {
        const headline =
          document.querySelector<HTMLElement>('article h1')?.textContent?.trim() ||
          document.querySelector<HTMLElement>('main h1')?.textContent?.trim() ||
          document.title.replace(/\s*\|\s*Baqar Hussain Naqvi.*$/i, '').trim();

        if (!headline || headline.toLowerCase() === 'blog') return false;

        const description =
          document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ||
          firstUsefulText(['article p', 'main p']);

        const datePublished =
          document.querySelector<HTMLTimeElement>('article time[datetime]')?.dateTime ||
          document.querySelector<HTMLTimeElement>('main time[datetime]')?.dateTime ||
          undefined;

        upsertJsonLd('route', {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          '@id': `${canonical}#article`,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonical
          },
          url: canonical,
          headline,
          description,
          ...(datePublished ? { datePublished } : {}),
          author: { '@id': PERSON_ID },
          publisher: { '@id': PERSON_ID },
          isPartOf: { '@id': WEBSITE_ID },
          inLanguage: 'en'
        });

        return true;
      };

      if (installArticleSchema()) return;

      const observer = new MutationObserver(() => {
        if (installArticleSchema()) observer.disconnect();
      });

      observer.observe(document.querySelector('main') ?? document.body, {
        childList: true,
        subtree: true
      });

      const timeout = window.setTimeout(() => observer.disconnect(), 10000);
      return () => {
        window.clearTimeout(timeout);
        observer.disconnect();
      };
    }

    removeJsonLd('route');
  }, [location.pathname]);

  return null;
}
