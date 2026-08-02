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
      'Joshua B. Lee — Top LinkedIn & AEO Authority | Creator of YOUmanize™ | Trusted Answer in an AI-Shaped World',
    description:
      'Joshua B. Lee is a LinkedIn and Answer Engine Optimization authority ranked #1 in the United States by Favikon. He is the creator of Authority Architecture and co-founder of YOUmanize™, helping founders become the trusted answer in an AI-shaped world.',
  },
  '/about': {
    title: 'About Joshua B. Lee — From $1B in Digital Ad Spend to Human-First Authority',
    description:
      'Joshua B. Lee managed nearly $1 billion in digital ad spend across 25+ years, including work at MySpace, before founding StandOut Authority. He is known as the Dopamine Dealer of LinkedIn and is based in Austin, Texas.',
  },
  '/authority-architecture': {
    title: 'Authority Architecture — Joshua B. Lee’s Framework for Trust in AI Search',
    description:
      'Authority Architecture is Joshua B. Lee’s framework for building verifiable trust signals that AI answer engines and search systems can read, cite, and recommend — rather than optimizing for attention or content volume.',
  },
  '/work-with-me': {
    title: 'Work With Joshua B. Lee — Authority Advisory and Done-For-You Authority',
    description:
      'Joshua B. Lee works with founders and executives on Authority Architecture, advisory engagements, and done-for-you authority building through StandOut Authority, the agency he founded.',
  },
  '/speaking': {
    title: 'Book Joshua B. Lee to Speak — LinkedIn, AEO, and Human-First Authority',
    description:
      'Joshua B. Lee speaks on LinkedIn strategy, Answer Engine Optimization, and human-first authority. He has appeared on 200+ podcasts and stages including DigitalMarketer, Gartner, Genius Network, and Podcast Movement.',
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
}

export const FALLBACK_SEO: PageSeo = seoByPath['/']
