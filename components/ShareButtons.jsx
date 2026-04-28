'use client'

import { useState } from 'react'

export default function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false)
  const url = `https://ashokkunchala.com/blog/${slug}`
  const linkedInUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      })
      .catch(() => {})
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      <span
        className="marginalia"
        style={{ color: 'var(--slate)' }}
      >
        Share
      </span>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-link"
      >
        LinkedIn
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-link"
      >
        X / Twitter
      </a>
      <button onClick={copyLink} className="share-link" style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
        {copied ? 'Copied ✓' : 'Copy link'}
      </button>
    </div>
  )
}
