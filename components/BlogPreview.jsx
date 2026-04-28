'use client'

/*
 * BlogPreview — turned card grid into a magazine table-of-contents.
 * Each post is a hairline-separated row: number, kicker meta, title, excerpt.
 * Hover reveals the underline beneath the title.
 */

import { motion } from 'framer-motion'
import Link from 'next/link'

// Parse YYYY-MM-DD as UTC + format in UTC, so server and client agree
// regardless of the user's timezone (otherwise hydration mismatches).
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

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function BlogPreview({ posts }) {
  const hasPosts = posts && posts.length > 0
  const items = hasPosts ? posts : [null, null, null]

  return (
    <section
      id="blog"
      style={{
        background: 'var(--ink)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ maxWidth: '1240px', margin: '0 auto' }}
      >
        <motion.div variants={rise} style={{ marginBottom: '32px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 06 — From the journal</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 300,
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
                maxWidth: '20ch',
                fontVariationSettings: '"opsz" 144, "SOFT" 30',
              }}
            >
              Notes on AI{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                & engineering.
              </span>
            </h2>
            <Link href="/blog" className="btn-ghost" style={{ fontSize: '0.76rem' }}>
              <span>All entries</span>
              <span style={{ display: 'inline-block', transition: 'transform 240ms ease' }}>→</span>
            </Link>
          </div>
          <p
            style={{
              marginTop: '14px',
              fontSize: '1.02rem',
              color: 'var(--bone-muted)',
              maxWidth: '54ch',
            }}
          >
            Real lessons from building enterprise AI systems — not theory.
          </p>
        </motion.div>

        <hr className="rule" />

        {/* Editorial table-of-contents */}
        <div>
          {items.map((post, i) => (
            <motion.div key={post?.slug || `p-${i}`} variants={rise}>
              {post ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="toc-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 200px 1fr 100px',
                    gap: '32px',
                    padding: '32px 0',
                    borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    className="marginalia"
                    style={{ color: 'var(--whisper)', fontSize: '0.78rem' }}
                  >
                    № {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="marginalia"
                    style={{ color: 'var(--slate)', fontSize: '0.74rem' }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <div>
                    <h3
                      className="toc-title"
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)',
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
                    </h3>
                    {post.excerpt && (
                      <p
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--bone-muted)',
                          lineHeight: 1.7,
                          maxWidth: '60ch',
                        }}
                      >
                        {post.excerpt}
                      </p>
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
              ) : (
                <div
                  className="toc-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 200px 1fr 100px',
                    gap: '32px',
                    padding: '32px 0',
                    borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                    opacity: 0.4,
                  }}
                >
                  <span className="marginalia" style={{ color: 'var(--whisper)' }}>
                    № {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="marginalia" style={{ color: 'var(--slate)' }}>
                    Forthcoming
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: 'var(--bone-muted)',
                      fontVariationSettings: '"opsz" 60, "SOFT" 100',
                    }}
                  >
                    Coming soon —
                  </span>
                  <span />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
