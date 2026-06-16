import { SITE_URL } from '@/lib/site'

// Dynamic robots.txt. Everything is open to search engines, and we
// explicitly welcome the major AI assistant / training crawlers so that
// "Ashok Kumar Kunchala" facts are easy to discover and cite.
export default function robots() {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'CCBot',
    'Amazonbot',
    'Bytespider',
    'cohere-ai',
    'Meta-ExternalAgent',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
