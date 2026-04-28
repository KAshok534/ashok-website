import './globals.css'
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

// ─── Editorial type system ────────────────────────────────────────────
// Fraunces  — variable display serif with optical sizing + soft axis.
// Inter Tight — refined sans for body, tighter than the regular Inter.
// JetBrains Mono — labels, marginalia, eyebrows.
// Variable fonts: omit `weight` so the full axis range is loaded.
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  axes: ['SOFT', 'opsz'],
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect',
    template: '%s | Ashok Kumar Kunchala',
  },
  description:
    'Ashok Kumar Kunchala is a Technology Leader and Enterprise AI Architect with 13+ years experience. Head of Technology at Anvesa. Expert in RAG, Agentic AI, Azure OpenAI, and enterprise cloud-native systems. Serving 15+ clients across US, India, Australia.',
  keywords: [
    'Ashok Kumar Kunchala',
    'Enterprise AI Architect',
    'Head of Technology',
    'Anvesa',
    'RAG Architecture',
    'Agentic AI',
    'Azure Cloud',
    'LLM',
    'Technology Leader',
    'Hyderabad',
    'eDiscovery',
    'Cloud-Native',
  ],
  authors: [{ name: 'Ashok Kumar Kunchala', url: 'https://ashokkunchala.com' }],
  creator: 'Ashok Kumar Kunchala',
  metadataBase: new URL('https://ashokkunchala.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashokkunchala.com',
    siteName: 'Ashok Kumar Kunchala',
    title: 'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect',
    description:
      'Building production-ready AI systems for enterprise. 13+ years · 15+ global clients · Azure · LLM · Agentic AI',
    images: [
      {
        url: '/assets/ashok.png',
        width: 1200,
        height: 630,
        alt: 'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect',
    description:
      'Building production-ready AI systems for enterprise. 13+ years · 15+ global clients.',
    images: ['/assets/ashok.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: 'https://ashokkunchala.com' },
}

export const viewport = {
  themeColor: '#0e0d0b',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
