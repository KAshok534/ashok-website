import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getPosts } from '@/lib/posts'
import ShareButtons from '@/components/ShareButtons'

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: `${post.frontmatter.title} | Ashok Kumar Kunchala`,
      description: post.frontmatter.excerpt,
      url: `https://ashokkunchala.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: ['Ashok Kumar Kunchala'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  }
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

export default function BlogPost({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const allPosts = getPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    author: {
      '@type': 'Person',
      name: 'Ashok Kumar Kunchala',
      url: 'https://ashokkunchala.com',
    },
    datePublished: post.frontmatter.date,
    url: `https://ashokkunchala.com/blog/${params.slug}`,
  }

  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh', paddingTop: '120px' }}>
      <style>{`
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
          margin-bottom: 56px;
          transition: color 220ms ease;
        }
        .back-link:hover { color: var(--gold); }
        .related-row {
          display: grid;
          grid-template-columns: 60px 1fr 80px;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          transition: background 220ms ease;
          align-items: baseline;
        }
        .related-row:hover { background: rgba(201,168,106,0.04); }
        .related-row:hover .related-title { color: var(--gold); }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '40px var(--section-x) calc(var(--section-y) - 40px)' }}>
        <Link href="/blog" className="back-link">
          <span>←</span>
          <span>All entries</span>
        </Link>

        {/* Meta */}
        <div className="eyebrow" style={{ marginBottom: '20px', color: 'var(--slate)' }}>
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          {post.frontmatter.readTime && (
            <>
              <span style={{ margin: '0 12px', color: 'var(--whisper)' }}>·</span>
              <span style={{ color: 'var(--gold)' }}>{post.frontmatter.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 300,
            color: 'var(--bone)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            marginBottom: '36px',
            fontVariationSettings: '"opsz" 144, "SOFT" 30',
          }}
        >
          {post.frontmatter.title}
        </h1>

        {/* Excerpt as lede */}
        {post.frontmatter.excerpt && (
          <p className="lede" style={{ marginBottom: '40px', maxWidth: '54ch' }}>
            {post.frontmatter.excerpt}
          </p>
        )}

        {/* Author block */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 0',
            borderTop: '1px solid var(--rule)',
            borderBottom: '1px solid var(--rule)',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--ink-warm)',
              border: '1px solid var(--rule-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--display)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--gold)',
                fontVariationSettings: '"opsz" 36, "SOFT" 100',
                letterSpacing: '-0.04em',
              }}
            >
              ak
            </span>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--display)',
                fontSize: '1rem',
                color: 'var(--bone)',
                fontVariationSettings: '"opsz" 36',
              }}
            >
              Ashok Kumar Kunchala
            </p>
            <p className="marginalia" style={{ color: 'var(--slate)', marginTop: '2px' }}>
              Head of Technology · Anvesa
            </p>
          </div>
        </div>

        {/* MDX Content */}
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>

        {/* Tags */}
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div
            style={{
              marginTop: '64px',
              paddingTop: '28px',
              borderTop: '1px solid var(--rule)',
            }}
          >
            <div className="marginalia" style={{ marginBottom: '14px', color: 'var(--slate)' }}>
              Filed under
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="marginalia"
                  style={{ color: 'var(--bone)' }}
                >
                  ▸ {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '28px',
            borderTop: '1px solid var(--rule)',
          }}
        >
          <ShareButtons title={post.frontmatter.title} slug={params.slug} />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px', color: 'var(--slate)' }}>
              § Continue reading
            </div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'var(--bone)',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
                fontVariationSettings: '"opsz" 96',
              }}
            >
              More from the journal
            </h2>
            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {relatedPosts.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="related-row"
                >
                  <span className="marginalia" style={{ color: 'var(--whisper)' }}>
                    № {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span
                      className="related-title"
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: '1.15rem',
                        color: 'var(--bone)',
                        lineHeight: 1.3,
                        fontVariationSettings: '"opsz" 60',
                        display: 'block',
                        marginBottom: '6px',
                        transition: 'color 220ms ease',
                      }}
                    >
                      {p.title}
                    </span>
                    {p.excerpt && (
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.92rem',
                          color: 'var(--bone-muted)',
                          lineHeight: 1.65,
                        }}
                      >
                        {p.excerpt}
                      </span>
                    )}
                  </div>
                  <span
                    className="marginalia"
                    style={{ color: 'var(--gold)', textAlign: 'right' }}
                  >
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
