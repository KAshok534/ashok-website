import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Timeline from '@/components/Timeline'
import CaseStudy from '@/components/CaseStudy'
import Services from '@/components/Services'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'
import { getPosts } from '@/lib/posts'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashok Kumar Kunchala',
  jobTitle: 'Head of Technology',
  description:
    'Technology Leader and Enterprise AI Architect with 13+ years experience building production-grade AI systems for enterprise clients across the US, India, and Australia.',
  url: 'https://ashokkunchala.com',
  image: 'https://ashokkunchala.com/assets/ashok.png',
  sameAs: ['https://linkedin.com/in/ashok-kumar-kunchala'],
  knowsAbout: [
    'Agentic AI',
    'RAG Architecture',
    'Large Language Models',
    'Azure Cloud',
    'Enterprise AI Systems',
    'Cloud-Native Architecture',
    'Product Engineering',
    'eDiscovery',
    'Azure OpenAI',
    'Kubernetes',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Anvesa',
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Jawaharlal Nehru Technological University Kakinada',
    },
    {
      '@type': 'Organization',
      name: 'Cognizant Technology Solutions',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressCountry: 'IN',
  },
}

export default async function Home() {
  let posts = []
  try {
    posts = getPosts().slice(0, 3)
  } catch {
    posts = []
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Expertise />
      <Timeline />
      <CaseStudy />
      <Services />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  )
}
