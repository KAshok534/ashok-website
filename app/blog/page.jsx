import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Thoughts on AI & Engineering',
  description:
    'Ashok Kumar Kunchala writes about building enterprise AI systems, RAG architecture, Azure, and engineering leadership. Real lessons from production — not theory.',
  openGraph: {
    title: 'Blog — Ashok Kumar Kunchala',
    description: 'Real lessons from building enterprise AI systems. RAG, Agentic AI, Azure, and engineering leadership.',
    url: 'https://ashokkunchala.com/blog',
  },
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function BlogPage() {
  let posts = []
  try {
    posts = getPosts()
  } catch {
    posts = []
  }

  return (
    <div className="blog-page">
      <style>{`
        .blog-page {
          background: #050d1a;
          min-height: 100vh;
          padding-top: 100px;
        }
        .blog-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 60px 24px;
        }
        .post-article {
          background: #0a1628;
          padding: 32px 36px;
          border-bottom: 1px solid rgba(41,182,246,0.08);
          transition: background 0.2s;
        }
        .post-article:last-child { border-bottom: none; }
        .post-article:hover { background: #0d1e35; }
        .post-title-link {
          font-family: Georgia, serif;
          font-size: 1.25rem;
          color: #ffffff;
          text-decoration: none;
          line-height: 1.35;
          font-weight: 700;
          transition: color 0.2s;
          display: block;
          margin-bottom: 10px;
        }
        .post-title-link:hover { color: #29b6f6; }
        .back-link {
          color: #546e7a;
          text-decoration: none;
          font-family: system-ui, sans-serif;
          font-size: 0.88rem;
          transition: color 0.2s;
          display: inline-block;
          margin-top: 60px;
        }
        .back-link:hover { color: #29b6f6; }
      `}</style>

      <div className="blog-inner">
        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <p
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: '#29b6f6',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Writing
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Thoughts on AI &amp; Engineering
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#546e7a',
              fontFamily: 'system-ui, sans-serif',
              lineHeight: 1.7,
            }}
          >
            Real lessons from building enterprise AI systems in production — not theory, not hype.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div
            style={{
              background: '#0a1628',
              border: '1px dashed rgba(41,182,246,0.15)',
              borderRadius: '12px',
              padding: '60px 40px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#546e7a', fontFamily: 'system-ui, sans-serif', fontSize: '1rem' }}>
              First post coming soon. Check back shortly.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: 'rgba(41,182,246,0.06)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(41,182,246,0.1)',
            }}
          >
            {posts.map((post) => (
              <article key={post.slug} className="post-article">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <time
                    dateTime={post.date}
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: '0.75rem',
                      color: '#546e7a',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {formatDate(post.date)}
                  </time>
                  {post.readTime && (
                    <span
                      style={{
                        fontFamily: '"Courier New", monospace',
                        fontSize: '0.72rem',
                        color: '#29b6f6',
                        padding: '2px 8px',
                        border: '1px solid rgba(41,182,246,0.2)',
                        borderRadius: '10px',
                      }}
                    >
                      {post.readTime}
                    </span>
                  )}
                </div>

                <h2 style={{ marginBottom: '10px' }}>
                  <Link href={`/blog/${post.slug}`} className="post-title-link">
                    {post.title}
                  </Link>
                </h2>

                {post.excerpt && (
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#90caf9',
                      lineHeight: 1.7,
                      fontFamily: 'system-ui, sans-serif',
                      marginBottom: '16px',
                    }}
                  >
                    {post.excerpt}
                  </p>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '3px 10px',
                          background: 'rgba(41,182,246,0.06)',
                          border: '1px solid rgba(41,182,246,0.12)',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          color: '#90caf9',
                          fontFamily: '"Courier New", monospace',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        <Link href="/" className="back-link">
          ← ashokkunchala.com
        </Link>
      </div>
    </div>
  )
}
