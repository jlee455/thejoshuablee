export const ORIGIN = 'https://joshuablee.com'

export const normalizePath = (pathname: string): string =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

export interface PageSeo {
  title: string
  description: string
}

// Self-contained descriptions: each names the entity and stands alone when an
// answer engine quotes it without surrounding context.
export const seoByPath: Record<string, PageSeo> = {
  '/': {
    title:
      'Joshua B. Lee | Keynote Speaker, LinkedIn & AI Authority',
    description:
      'Joshua B. Lee helps founders and leaders build human-first authority. Explore keynotes on LinkedIn, leadership, and trust in the AI era.',
  },
  '/about': {
    title: 'About Joshua B. Lee — From $1B in Digital Ad Spend to Human-First Authority',
    description:
      'Joshua B. Lee managed nearly $1 billion in digital ad spend across 25+ years, including work at MySpace, before founding StandOut Authority. He is known as the Dopamine Dealer of LinkedIn and is based in Austin, Texas.',
  },
  '/authority-architecture': {
    title: 'Authority Architecture — Joshua B. Lee’s Framework for Trust in AI Search',
    description:
      'Explore Joshua B. Lee’s approach to identity alignment, trust signals, and authority compounding. Make your expertise easier to recognize and evaluate.',
  },
  '/work-with-me': {
    title: 'Work With Joshua B. Lee — Authority Advisory and Done-For-You Authority',
    description:
      'Joshua B. Lee works with founders and executives on Authority Architecture, advisory engagements, and done-for-you authority building through StandOut Authority, the agency he founded.',
  },
  '/speaking': {
    title: 'Book Joshua B. Lee | Keynote Speaker on AI, Trust & LinkedIn',
    description:
      'Book Joshua B. Lee for a keynote on AI, trust, leadership, or LinkedIn authority. Watch his reel, explore topics, and inquire about worldwide events.',
  },
  '/insights': {
    title: 'Insights by Joshua B. Lee — LinkedIn, AEO, and Authority Architecture',
    description:
      'Articles and LinkedIn newsletters by Joshua B. Lee on building trust in an AI-shaped world, covering LinkedIn algorithms, Answer Engine Optimization, leadership, and human-first branding.',
  },
  '/evidence': {
    title: 'Proof & Press — Joshua B. Lee’s Verified Appearances, Rankings, and Recognition',
    description:
      'A complete, linked record of Joshua B. Lee’s third-party recognition: Favikon rankings, podcast appearances, published articles, LinkedIn newsletters, and independent coverage — each linked to its original source.',
  },
  '/recommendations': {
    title:
      'Recommendations for Joshua B. Lee — 73 Named Endorsements from Clients and Founders',
    description:
      'Joshua B. Lee has received 73 LinkedIn recommendations from clients, colleagues, and founders since 2007. Each is verified against his LinkedIn data export and linked to the person who wrote it.',
  },
}

export const FALLBACK_SEO: PageSeo = seoByPath['/']
