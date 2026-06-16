// ─── Single source of truth for site-wide facts ──────────────────────
// Used by metadata, JSON-LD structured data, sitemap, RSS feed, and OG
// images so every machine-readable surface stays in sync.

export const SITE_URL = 'https://ashokkunchala.com'

export const SITE = {
  name: 'Ashok Kumar Kunchala',
  shortName: 'Ashok Kunchala',
  url: SITE_URL,
  title: 'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect',
  description:
    'Ashok Kumar Kunchala is a Technology Leader and Enterprise AI Architect with 13+ years experience. Head of Technology at Anvesa. Expert in RAG, Agentic AI, Azure OpenAI, and enterprise cloud-native systems. Serving 15+ clients across US, India, Australia.',
  locale: 'en_US',
}

// Canonical identity record. This is the entity we want Google and AI
// assistants to resolve "Ashok Kumar Kunchala" to.
export const PERSON = {
  name: 'Ashok Kumar Kunchala',
  givenName: 'Ashok Kumar',
  familyName: 'Kunchala',
  jobTitle: 'Head of Technology',
  alternateTitle: 'Technology Leader & Enterprise AI Architect',
  email: 'ashok@ashokkunchala.com',
  image: `${SITE_URL}/assets/ashok.png`,
  url: SITE_URL,
  description:
    'Technology Leader and Enterprise AI Architect with 13+ years experience building production-grade AI systems for enterprise clients across the US, India, and Australia. Head of Technology at Anvesa.',
  sameAs: [
    'https://www.linkedin.com/in/ashok-kumar-kunchala',
  ],
  knowsAbout: [
    'Agentic AI',
    'RAG Architecture',
    'Retrieval-Augmented Generation',
    'Large Language Models',
    'Azure OpenAI',
    'Azure Cloud',
    'Enterprise AI Systems',
    'Cloud-Native Architecture',
    'Kubernetes',
    'Docker',
    '.NET Core',
    'Product Engineering',
    'Engineering Leadership',
    'eDiscovery',
  ],
  worksFor: {
    name: 'Anvesa',
    url: 'https://anvesa.ai',
  },
  alumniOf: [
    {
      name: 'Jawaharlal Nehru Technological University Kakinada',
      url: 'https://jntuk.edu.in',
    },
    {
      name: 'Cognizant Technology Solutions',
    },
  ],
  address: {
    locality: 'Hyderabad',
    region: 'Telangana',
    country: 'IN',
  },
}
