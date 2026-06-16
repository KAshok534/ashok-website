import { getPosts } from '@/lib/posts'
import { SITE_URL, SITE, PERSON } from '@/lib/site'

export const dynamic = 'force-static'

function escapeXml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// RSS 2.0 feed for the Journal — distribution + freshness signal, and a
// clean machine-readable index of posts for readers and aggregators.
export function GET() {
  let posts = []
  try {
    posts = getPosts()
  } catch {
    posts = []
  }

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const pubDate = post.date
        ? new Date(`${post.date}T00:00:00Z`).toUTCString()
        : new Date().toUTCString()
      const categories = (post.tags || [])
        .map((t) => `<category>${escapeXml(t)}</category>`)
        .join('')
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <author>${escapeXml(PERSON.email)} (${escapeXml(PERSON.name)})</author>
      ${categories}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Journal</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Notes on AI &amp; engineering by ${escapeXml(SITE.name)} — RAG, Agentic AI, Azure, and engineering leadership.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
