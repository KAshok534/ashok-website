// ─── JSON-LD structured data builders ─────────────────────────────────
// One connected @graph so crawlers and AI assistants can resolve the
// "Ashok Kumar Kunchala" entity, the website that describes it, and the
// organization he works for — all cross-referenced by @id.

import { SITE, SITE_URL, PERSON } from './site'

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const ORG_ID = `${SITE_URL}/#organization`

function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    url: PERSON.url,
    email: `mailto:${PERSON.email}`,
    image: {
      '@type': 'ImageObject',
      url: PERSON.image,
      caption: PERSON.name,
    },
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    worksFor: { '@id': ORG_ID },
    alumniOf: PERSON.alumniOf.map((a) => ({
      '@type': 'Organization',
      name: a.name,
      ...(a.url ? { url: a.url } : {}),
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.address.locality,
      addressRegion: PERSON.address.region,
      addressCountry: PERSON.address.country,
    },
    nationality: { '@type': 'Country', name: 'India' },
  }
}

function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: PERSON.worksFor.name,
    url: PERSON.worksFor.url,
    description:
      'AI-native, Azure-powered enterprise eDiscovery platform.',
    employee: { '@id': PERSON_ID },
  }
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
  }
}

// Homepage graph — the primary entity definition for the whole site.
export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode(),
      organizationNode(),
      personNode(),
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SITE.title,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: 'en',
      },
    ],
  }
}

// FAQ schema — captures the "who is / what does Ashok Kumar Kunchala do"
// natural-language queries that both Google and AI assistants answer.
export function faqJsonLd() {
  const qa = [
    [
      'Who is Ashok Kumar Kunchala?',
      'Ashok Kumar Kunchala is a Technology Leader and Enterprise AI Architect with 13+ years of experience. He is the Head of Technology at Anvesa, based in Hyderabad, India, and builds production-grade AI systems for enterprise clients across the US, India, and Australia.',
    ],
    [
      'What does Ashok Kumar Kunchala do?',
      'He leads the technology function at Anvesa, an AI-native, Azure-powered enterprise eDiscovery platform. He architects and runs Agentic AI systems, RAG (Retrieval-Augmented Generation) pipelines, and LLM-powered workflows in production for 15+ enterprise clients.',
    ],
    [
      'What is Ashok Kumar Kunchala an expert in?',
      'His expertise spans Agentic AI, RAG architecture, Large Language Models, Azure OpenAI, cloud-native architecture, Kubernetes, .NET Core, product engineering, and engineering leadership.',
    ],
    [
      'Where is Ashok Kumar Kunchala based?',
      'Ashok Kumar Kunchala is based in Hyderabad, India, and serves enterprise clients globally across the US, India, and Australia.',
    ],
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: qa.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

// Blog index — a Blog node owned by the person.
export function blogJsonLd(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: 'Journal — Notes on AI & Engineering',
    description:
      'Ashok Kumar Kunchala writes about building enterprise AI systems, RAG architecture, Azure, and engineering leadership.',
    inLanguage: 'en',
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date || undefined,
      keywords: p.tags?.join(', ') || undefined,
    })),
  }
}

// Individual post — full BlogPosting with image, dates, author, publisher.
export function articleJsonLd(post, slug) {
  const url = `${SITE_URL}/blog/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    image: [`${SITE_URL}/blog/${slug}/opengraph-image`],
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    keywords: post.frontmatter.tags?.join(', ') || undefined,
    inLanguage: 'en',
    author: { '@id': PERSON_ID, '@type': 'Person', name: PERSON.name, url: SITE_URL },
    publisher: { '@id': PERSON_ID, '@type': 'Person', name: PERSON.name, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': `${SITE_URL}/blog#blog` },
  }
}

// Breadcrumb trail for a blog post.
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}
