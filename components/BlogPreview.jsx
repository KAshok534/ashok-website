'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function BlogPreview({ posts }) {
  const hasPosts = posts && posts.length > 0

  return (
    <section
      id="blog"
      style={{
        background: '#050d1a',
        padding: '110px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
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
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
              marginBottom: '12px',
            }}
          >
            Thoughts on AI &amp; Engineering
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#546e7a',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Real lessons from building enterprise AI systems — not theory.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '48px',
          }}
          className="blog-grid"
        >
          {hasPosts
            ? posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: '#0a1628',
                    border: '1px solid rgba(41, 182, 246, 0.12)',
                    borderRadius: '12px',
                    padding: '28px',
                    transition: 'border-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(41,182,246,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(41,182,246,0.12)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Courier New", monospace',
                        fontSize: '0.72rem',
                        color: '#546e7a',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {formatDate(post.date)}
                    </span>
                    {post.readTime && (
                      <span
                        style={{
                          fontFamily: '"Courier New", monospace',
                          fontSize: '0.72rem',
                          color: '#29b6f6',
                        }}
                      >
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.05rem',
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: 1.4,
                      fontWeight: 700,
                      flex: 1,
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: '#90caf9',
                        lineHeight: 1.65,
                        fontFamily: 'system-ui, sans-serif',
                        marginBottom: '20px',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: '0.85rem',
                      color: '#29b6f6',
                      textDecoration: 'none',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: 'auto',
                      transition: 'gap 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '8px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '4px'
                    }}
                  >
                    Read more →
                  </Link>
                </motion.article>
              ))
            : [0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    background: '#0a1628',
                    border: '1px dashed rgba(41, 182, 246, 0.1)',
                    borderRadius: '12px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '10px',
                      background: 'rgba(41,182,246,0.1)',
                      borderRadius: '4px',
                    }}
                  />
                  <div
                    style={{
                      width: '100%',
                      height: '14px',
                      background: 'rgba(41,182,246,0.07)',
                      borderRadius: '4px',
                    }}
                  />
                  <div
                    style={{
                      width: '70%',
                      height: '14px',
                      background: 'rgba(41,182,246,0.07)',
                      borderRadius: '4px',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: '#546e7a',
                      fontFamily: 'system-ui, sans-serif',
                      fontStyle: 'italic',
                      marginTop: '8px',
                    }}
                  >
                    Coming soon
                  </span>
                </motion.div>
              ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <Link
            href="/blog"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              border: '1px solid rgba(41, 182, 246, 0.3)',
              borderRadius: '6px',
              color: '#90caf9',
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#29b6f6'
              e.currentTarget.style.color = '#29b6f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(41,182,246,0.3)'
              e.currentTarget.style.color = '#90caf9'
            }}
          >
            View all posts →
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
