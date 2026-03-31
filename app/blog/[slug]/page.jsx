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
    <div style={{ background: '#050d1a', minHeight: '100vh', paddingTop: '100px' }}>
      <style>{`
        .back-link {
          display: inline-block;
          color: #546e7a;
          text-decoration: none;
          font-family: system-ui, sans-serif;
          font-size: 0.85rem;
          margin-bottom: 48px;
          transition: color 0.2s;
        }
        .back-link:hover { color: #29b6f6; }
        .post-h2-link {
          font-family: Georgia, serif;
          font-size: 1rem;
          color: #ffffff;
          text-decoration: none;
          line-height: 1.4;
          display: block;
          margin-bottom: 6px;
          transition: color 0.2s;
        }
        .post-h2-link:hover { color: #29b6f6; }
        .related-card {
          display: block;
          padding: 20px;
          background: #0a1628;
          border: 1px solid rgba(41,182,246,0.1);
          border-radius: 10px;
          text-decoration: none;
          transition: border-color 0.2s;
          margin-bottom: 12px;
        }
        .related-card:hover { border-color: rgba(41,182,246,0.3); }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px' }}>
        <Link href="/blog" className="back-link">
          ← All posts
        </Link>

        {/* Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
            flexWrap: 'wrap',
          }}
        >
          <time
            dateTime={post.frontmatter.date}
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.78rem',
              color: '#546e7a',
              letterSpacing: '0.05em',
            }}
          >
            {formatDate(post.frontmatter.date)}
          </time>
          {post.frontmatter.readTime && (
            <span
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
                color: '#29b6f6',
                padding: '2px 10px',
                border: '1px solid rgba(41,182,246,0.2)',
                borderRadius: '10px',
              }}
            >
              {post.frontmatter.readTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.7rem, 5vw, 2.6rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '32px',
            fontWeight: 700,
          }}
        >
          {post.frontmatter.title}
        </h1>

        {/* Author block */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '20px 0',
            borderTop: '1px solid rgba(41,182,246,0.08)',
            borderBottom: '1px solid rgba(41,182,246,0.08)',
            marginBottom: '52px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(41,182,246,0.1)',
              border: '2px solid rgba(41,182,246,0.25)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: '#29b6f6',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div>
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.9rem',
                color: '#ffffff',
                fontWeight: 600,
                marginBottom: '2px',
              }}
            >
              Ashok Kumar Kunchala
            </p>
            <p
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: '0.72rem',
                color: '#546e7a',
                letterSpacing: '0.04em',
              }}
            >
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
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(41,182,246,0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 12px',
                    background: 'rgba(41,182,246,0.06)',
                    border: '1px solid rgba(41,182,246,0.15)',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    color: '#90caf9',
                    fontFamily: '"Courier New", monospace',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share — client component */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(41,182,246,0.08)',
          }}
        >
          <ShareButtons title={post.frontmatter.title} slug={params.slug} />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div
            style={{
              marginTop: '64px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(41,182,246,0.08)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.2rem',
                color: '#ffffff',
                marginBottom: '24px',
              }}
            >
              More posts
            </h2>
            {relatedPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="related-card">
                <span className="post-h2-link">{p.title}</span>
                {p.excerpt && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: '#90caf9',
                      fontFamily: 'system-ui, sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    {p.excerpt}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
