# Ashok Kumar Kunchala — Personal Brand Website

## Project Overview
Personal brand website and blog for Ashok Kumar Kunchala.
Live at: ashokkunchala.com
Hosted on: Vercel (deploying from GitHub)
Repo: https://github.com/KAshok534/ashok-website

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + inline styles
- **Animations:** Framer Motion
- **Blog:** MDX with gray-matter + next-mdx-remote
- **Forms:** Formspree (form ID: xlgonjal)
- **Hosting:** Vercel (free tier)

## About Ashok
- **Name:** Ashok Kumar Kunchala
- **Role:** Head of Technology at Anvesa
- **Title:** Technology Leader & Enterprise AI Architect
- **Location:** Hyderabad, India
- **Email:** ashok@ashokkunchala.com
- **LinkedIn:** linkedin.com/in/ashok-kumar-kunchala
- **Experience:** 13+ years
- **Clients:** 15+ enterprise clients across US, India, Australia

### Career
- **2014–2017:** Cognizant Technology Solutions — Batch Topper, worked on American Express Global Decision Engine (Mainframe to .NET migration), awarded for delivery quality
- **2017–2024:** Aureus Tech Systems — joined as Senior Software Engineer, built Anvesa from zero, grew to Head of Technology. Led through Aureus → Happiest Minds acquisition
- **2024–Present:** Anvesa (Independent Entity) — Head of Technology, board-level contributor

### Tech Stack / Expertise
Azure AKS, .NET Core, Angular, RAG Architecture, Agentic AI, LLM, Azure OpenAI, Docker, Kubernetes, Bicep IaC, SQL Server, Cloud-Native Architecture, Product Engineering, Engineering Leadership

### Key Facts
- Built Anvesa from zero — AI-native Azure-powered enterprise eDiscovery platform
- Board-level contributor at Anvesa
- Led platform through acquisition (Aureus → Happiest Minds)
- Education: B.Tech Computer Science, JNTU Kakinada (2009–2013)

## Project Structure
```
ashok-website/
├── app/
│   ├── page.jsx              # Home page — all sections + JSON-LD schema
│   ├── blog/
│   │   ├── page.jsx          # Blog listing
│   │   └── [slug]/page.jsx   # Individual blog post
│   ├── layout.jsx            # Root layout, SEO metadata, nav + footer
│   ├── sitemap.js            # Dynamic sitemap
│   └── globals.css           # CSS variables, prose styles
├── components/
│   ├── Navbar.jsx            # Fixed nav — handles cross-page anchor scrolling
│   ├── Hero.jsx              # Canvas particle animation + stats row
│   ├── About.jsx             # Photo (objectPosition: center 23%) + bio
│   ├── Expertise.jsx         # 3-column skill grid
│   ├── Timeline.jsx          # Career timeline (desktop alternating / mobile left)
│   ├── CaseStudy.jsx         # Anvesa case study card
│   ├── Services.jsx          # 3 service cards — NO pricing shown
│   ├── BlogPreview.jsx       # Latest 3 posts preview on homepage
│   ├── Contact.jsx           # Formspree form + contact info
│   ├── Footer.jsx            # Footer with links
│   └── ShareButtons.jsx      # Client component for blog post sharing
├── posts/                    # MDX blog posts
│   └── rag-in-production.mdx
├── lib/
│   └── posts.js              # getPosts() and getPost(slug) helpers
├── public/
│   ├── assets/ashok.png      # Profile photo (objectPosition: center 23%)
│   ├── robots.txt
│   └── sitemap.xml           # Static sitemap (also dynamic via sitemap.js)
├── jsconfig.json             # Path alias @/* → ./*
├── vercel.json               # cleanUrls: true, trailingSlash: false
└── CLAUDE.md                 # This file
```

## Design System — "Editorial Executive"
Redesigned 2026 to escape the generic "AI-startup dark + cyan" look.
Direction: warm-ink editorial — think *Aeon* magazine or a senior partner's
profile at a top consulting firm, in dark mode. Numbered sections, hairline
rules, asymmetric grids, marginalia.

### Palette (CSS variables, see `app/globals.css`)
```
--ink:        #0e0d0b   /* page bg — warm, not blue-black */
--ink-deep:   #08080a   /* footer */
--ink-warm:   #14110d   /* alt section bg */
--rule:       rgba(235,229,216,0.10)  /* hairlines */
--rule-strong:rgba(235,229,216,0.22)

--bone:       #ebe5d8   /* primary text — warm off-white */
--bone-muted: #b8b1a3   /* secondary text */
--slate:      #75716a   /* tertiary / captions */
--whisper:    #4a4742   /* very low contrast */

--gold:       #c9a86a   /* SOLE accent — replaces cyan */
--oxblood:    #8b3a3a   /* used very sparingly */
```
**Never use cyan. Never use #29b6f6. Gold is the only accent.**

### Typography (loaded via `next/font/google` in `app/layout.jsx`)
```
--display: Fraunces (variable serif, opsz + SOFT axes)
--body:    Inter Tight (refined sans)
--mono:    JetBrains Mono
```
Headings use Fraunces with `font-variation-settings: "opsz" 144, "SOFT" 30`.
Pull-quotes use the italic with `"SOFT" 100`.

### Editorial primitives (defined in `globals.css`)
- `.eyebrow` — § marker, mono caps in gold
- `.lede` — large italic Fraunces opening paragraph
- `.marginalia` — small mono caption text
- `.editorial-link` — hairline-underlined link, reveals on hover
- `.btn-primary` — bordered (not filled), letterspacing animates on hover
- `.btn-ghost` — text-only secondary action
- `.rule` — 1px hairline divider

### Layout rhythm
```
--section-y: clamp(96px, 12vw, 160px)
--section-x: clamp(20px, 5vw, 64px)
--measure:   65ch  (ideal text column)
```
Max content width: 1240px. Sections numbered §01, §02, §03 …

### Atmosphere
- Body has a 4.5%-opacity SVG noise overlay (paper grain) via `body::before`
- No gradients, no glows, no rounded cards
- Hairline borders (top/bottom only) replace boxed cards
- Motion is restrained: one staggered reveal per section, no scroll fades on every block

## Key Decisions & Preferences
- **No pricing on Services** — removed intentionally. CTAs go to contact form to discuss scope first
- **Nav anchor links** — work from any page (uses Next.js router to navigate to `/#section` when not on homepage)
- **Profile photo** — `objectPosition: 'center 23%'`, slight grayscale + reduced saturation for editorial feel (tuned by Ashok)
- **Contact form** — Formspree ID `xlgonjal`, wired in `components/Contact.jsx`
- **No TypeScript** — plain JavaScript throughout
- **No external CMS** — blog posts are local MDX files in `/posts/`
- **No component libraries** — explicitly NOT using shadcn/ui, 21st.dev, etc. Hand-built so it doesn't look generic
- **Favicon** — SVG monogram at `app/icon.svg` and `app/apple-icon.svg` (italic "ak" in Fraunces, gold on ink)

## Blog Post Format
Every post in `/posts/` needs this frontmatter:
```
---
title: "Post Title"
date: "2026-03-31"
excerpt: "One line description"
readTime: "5 min read"
tags: ["AI", "Azure", "RAG"]
---
```

## Local Development
```bash
cd C:/Users/Ashok/Downloads/ashok-website
npm run dev
# Open http://localhost:3000
```

## Deployment
- Push to GitHub → Vercel auto-deploys
- Domain DNS: Cloudflare pointing to Vercel
- Email: ashok@ashokkunchala.com via Cloudflare Email Routing
