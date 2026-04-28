import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export const metadata = {
  title: 'Journal — Notes on AI & Engineering',
  description:
    'Ashok Kumar Kunchala writes about building enterprise AI systems, RAG architecture, Azure, and engineering leadership. Real lessons from production — not theory.',
  openGraph: {
    title: 'Journal — Ashok Kumar Kunchala',
    description: 'Real lessons from building enterprise AI systems. RAG, Agentic AI, Azure, and engineering leadership.',
    url: 'https://ashokkunchala.com/blog',
  },
}

// Force UTC parse + format so SSR and client render the same date string.
function formatDate(dateStr) {
  try {
    const [y, m, d] = String(dateStr).split('-').map(Number)
    const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1))
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
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
    <div
      style={{
        background: 'var(--ink)',
        minHeight: '100vh',
        paddingTop: '120px',
      }}
    >
      <style>{`
        .toc-row { transition: background 220ms ease; }
        .toc-row:hover { background: rgba(201,168,106,0.04); }
        .toc-row:hover .toc-title { color: var(--gold); }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--mono);
          font-size: 0.74rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bone-muted);
          text-decoration: none;
          margin-top: 64px;
          transition: color 220ms ease;
        }
        .back-link:hover { color: var(--gold); }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px var(--section-x) calc(var(--section-y) - 40px)' }}>
        {/* Header */}
        <header style={{ marginBottom: '72px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            § Journal — collected entries
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              maxWidth: '14ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
              marginBottom: '24px',
            }}
          >
            Notes on AI{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              & engineering.
            </span>
          </h1>
          <p
            className="lede"
            style={{ maxWidth: '46ch', fontSize: '1.25rem' }}
          >
            Real lessons from building enterprise AI systems in production —
            not theory, not hype.
          </p>
        </header>

        <hr className="rule" />

        {/* Posts */}
        {posts.length === 0 ? (
          <div
            style={{
              padding: '80px 0',
              textAlign: 'left',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            <p className="marginalia" style={{ marginBottom: '14px', color: 'var(--slate)' }}>
              Forthcoming
            </p>
            <p
              style={{
                fontFamily: 'var(--display)',
                fontStyle: 'italic',
                fontSize: '1.4rem',
                color: 'var(--bone-muted)',
                fontVariationSettings: '"opsz" 60, "SOFT" 100',
                maxWidth: '40ch',
              }}
            >
              First entry is being written. Please check back shortly —
              or follow on LinkedIn for the announcement.
            </p>
          </div>
        ) : (
          <div>
            {posts.map((post, i) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="toc-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px 200px 1fr 110px',
                    gap: '32px',
                    padding: '36px 16px',
                    borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                    textDecoration: 'none',
                  }}
                >
                  <span className="marginalia" style={{ color: 'var(--whisper)', fontSize: '0.78rem' }}>
                    № {String(i + 1).padStart(2, '0')}
                  </span>
                  <time
                    dateTime={post.date}
                    className="marginalia"
                    style={{ color: 'var(--slate)', fontSize: '0.74rem' }}
                  >
                    {formatDate(post.date)}
                  </time>
                  <div>
                    <h2
                      className="toc-title"
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)',
                        fontWeight: 400,
                        color: 'var(--bone)',
                        lineHeight: 1.2,
                        letterSpacing: '-0.018em',
                        marginBottom: '8px',
                        fontVariationSettings: '"opsz" 96',
                        transition: 'color 220ms ease',
                      }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p
                        style={{
                          fontSize: '0.96rem',
                          color: 'var(--bone-muted)',
                          lineHeight: 1.7,
                          maxWidth: '60ch',
                          marginBottom: post.tags?.length ? '14px' : 0,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="marginalia"
                            style={{ color: 'var(--slate)' }}
                          >
                            ▸ {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    className="marginalia"
                    style={{
                      color: 'var(--gold)',
                      fontSize: '0.74rem',
                      textAlign: 'right',
                    }}
                  >
                    {post.readTime || 'Read →'}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}

        <Link href="/" className="back-link">
          <span>←</span>
          <span>Back to ashokkunchala.com</span>
        </Link>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .toc-row {
            grid-template-columns: 50px 1fr !important;
            gap: 14px !important;
          }
          .toc-row > time,
          .toc-row > span:nth-child(4) { display: none; }
          .toc-row > div { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  )
}
