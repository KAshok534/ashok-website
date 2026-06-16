import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Timeline from '@/components/Timeline'
import CaseStudy from '@/components/CaseStudy'
import Services from '@/components/Services'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'
import { getPosts } from '@/lib/posts'
import { homeJsonLd, faqJsonLd } from '@/lib/seo'

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
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
