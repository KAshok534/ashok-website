'use client'

export default function ShareButtons({ title, slug }) {
  const url = `https://ashokkunchala.com/blog/${slug}`
  const linkedInUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  const copyLink = () => {
    navigator.clipboard.writeText(url).catch(() => {})
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '8px',
      }}
    >
      <span
        style={{
          fontSize: '0.8rem',
          color: '#546e7a',
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.05em',
        }}
      >
        Share:
      </span>
      {[
        { label: 'LinkedIn', href: linkedInUrl },
        { label: 'X / Twitter', href: twitterUrl },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          style={{
            padding: '6px 14px',
            border: '1px solid rgba(41,182,246,0.2)',
            borderRadius: '6px',
            color: '#90caf9',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontFamily: 'system-ui, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#29b6f6'
            e.currentTarget.style.color = '#29b6f6'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(41,182,246,0.2)'
            e.currentTarget.style.color = '#90caf9'
          }}
        >
          {item.label}
        </a>
      ))}
      <button
        onClick={copyLink}
        style={{
          padding: '6px 14px',
          border: '1px solid rgba(41,182,246,0.2)',
          borderRadius: '6px',
          color: '#90caf9',
          background: 'transparent',
          fontSize: '0.8rem',
          fontFamily: 'system-ui, sans-serif',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#29b6f6'
          e.currentTarget.style.color = '#29b6f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(41,182,246,0.2)'
          e.currentTarget.style.color = '#90caf9'
        }}
      >
        Copy link
      </button>
    </div>
  )
}
