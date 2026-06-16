import { ImageResponse } from 'next/og'
import { getPost, getPosts } from '@/lib/posts'

export const runtime = 'nodejs'
export const alt = 'Ashok Kumar Kunchala — Journal'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

// Per-post share card. Renders the post title over the editorial brand so
// shared links and the BlogPosting image schema get a real, on-topic image.
export default async function PostOgImage({ params }) {
  const post = getPost(params.slug)
  const title = post?.frontmatter?.title || 'Notes on AI & Engineering'
  const readTime = post?.frontmatter?.readTime || ''
  const tags = post?.frontmatter?.tags?.slice(0, 4) || []

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e0d0b',
          padding: '72px 80px',
          color: '#ebe5d8',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#c9a86a',
          }}
        >
          <span>§ Journal</span>
          {readTime ? <span style={{ color: '#75716a' }}>{readTime}</span> : null}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? 56 : 68,
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(235,229,216,0.18)',
            paddingTop: 28,
            fontSize: 24,
            color: '#75716a',
          }}
        >
          <span style={{ color: '#b8b1a3' }}>Ashok Kumar Kunchala</span>
          <span>{tags.join('  ·  ')}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
