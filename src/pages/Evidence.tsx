import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { appearances } from '../data/appearances'

const rankings = [
  {
    rank: '#1',
    scope: 'LinkedIn Experts — United States',
    issuer: 'Favikon',
    score: '8,175',
    date: 'March 2026',
    url: 'https://www.favikon.com/blog/top-linkedin-experts-us',
  },
  {
    rank: '#5',
    scope: 'LinkedIn Experts — Worldwide',
    issuer: 'Favikon',
    score: '8,282',
    date: 'May 2026',
    url: 'https://www.favikon.com/blog/top-linkedin-experts-worldwide',
  },
]


const hostedEpisodes = [
  {
    title: 'If AI Had to Recommend One Person in Your Space, Would It Choose You?',
    date: '2026-06-26',
    url: 'https://www.youtube.com/watch?v=metJRI-2Mmo',
  },
  {
    title: 'YOUmanize Your Marketing: Your People Are Your Brand',
    date: '2026-04-16',
    url: 'https://www.youtube.com/watch?v=BRG4WzzkUjw',
  },
  {
    title: 'How to Build a Founder Personal Brand That Actually Converts | Live Workshop',
    date: '2026-03-18',
    url: 'https://www.youtube.com/watch?v=HVpJrTYcryc',
  },
  {
    title: 'Who Owns Your Voice in the Age of AI? From Matthew McConaughey to LinkedIn Creators',
    date: '2026-02-16',
    url: 'https://www.youtube.com/watch?v=UTgOr3sSiIg',
  },
  {
    title: 'Is Working With Your Partner a Power Move or a Risk? What Actually Works and What Breaks',
    date: '2026-02-09',
    url: 'https://www.youtube.com/watch?v=-kA4frKl1yQ',
  },
  {
    title: 'Why Isn’t Your Audience Listening? Attention spans are 2.9 seconds, storytelling beats AI',
    date: '2026-02-02',
    url: 'https://www.youtube.com/watch?v=97QYngLoE3U',
  },
  {
    title: 'Why Does Trust Drive More LinkedIn Growth Than Impressions or Leads?',
    date: '2026-01-26',
    url: 'https://www.youtube.com/watch?v=GyLVcU0-Qag',
  },
  {
    title: 'Is Your LinkedIn Profile Ranking in Google, Even If You Haven’t Updated It in Years?',
    date: '2026-01-19',
    url: 'https://www.youtube.com/watch?v=1qvUDmpzwGU',
  },
  {
    title: 'DO YOU TRUST YOUR BRAND? Trust, AI, and Alignment in 2026',
    date: '2026-01-12',
    url: 'https://www.youtube.com/watch?v=bhfxDd44_rQ',
  },
  {
    title: 'Renowned Neuroscience Doctor Reveals How Parents Can Regulate the Nervous System and Raise Calm Kids',
    date: '2026-01-05',
    url: 'https://www.youtube.com/watch?v=WI6QL61t48M',
  },
  {
    title: 'Will AI Replace Humans? Personal Branding, AEO, and the Future of Work in 2026',
    date: '2025-12-29',
    url: 'https://www.youtube.com/watch?v=gkQE22kNpqs',
  },
  {
    title: 'AI and Marketing Jobs in 2026 | SEO to AEO Explained',
    date: '2025-12-22',
    url: 'https://www.youtube.com/watch?v=oLfSho7VGN8',
  },
  {
    title: 'Celebrating the 2025 holidays as business owners & a blended family of 5 - Christmakah',
    date: '2025-12-15',
    url: 'https://www.youtube.com/watch?v=pH4weWuKmCs',
  },
  {
    title: 'YouTube CEO & AI Founder Reveals How To Grow on YouTube in 2026',
    date: '2025-12-09',
    url: 'https://www.youtube.com/watch?v=qNWg_n4ai7g',
  },
  {
    title: 'Personal Branding for Introverts (Full Breakdown) With Author + Cancer Survivor Goldie Chan',
    date: '2025-12-01',
    url: 'https://www.youtube.com/watch?v=6xvFDNYSubQ',
  },
  {
    title: 'The Human Algorithm vs AI - change how you market | Episode #011',
    date: '2025-11-24',
    url: 'https://www.youtube.com/watch?v=Vp7QrCHOz6Y',
  },
  {
    title: 'Emotional Labor and the Invisible Load of "Women\'s Work" | Episode #010',
    date: '2025-11-17',
    url: 'https://www.youtube.com/watch?v=fE1BWq_FvxE',
  },
  {
    title: 'Oversharing Online? When Authentic Becomes TMI | Episode #009',
    date: '2025-11-10',
    url: 'https://www.youtube.com/watch?v=WiWpj6pR4aw',
  },
  {
    title: 'Can AI Fake Trust? Neuroscience Tips for Small Biz | John Assaraf',
    date: '2025-11-03',
    url: 'https://www.youtube.com/watch?v=8pfK-EO07Hw',
  },
  {
    title: 'How to Use AI for YOUR LinkedIn Content Strategy | Joshua B. Lee & Rachel B. Lee | Episode #007',
    date: '2025-10-27',
    url: 'https://www.youtube.com/watch?v=_IPu0G6Zuoc',
  },
  {
    title: 'Alex Cattoni: What Does it REALLY Take to Grow a Brand Authentically? | Episode #006',
    date: '2025-10-20',
    url: 'https://www.youtube.com/watch?v=FOYUi_1oSzM',
  },
  {
    title: 'Balancing Business, Growth and Family | Episode #005',
    date: '2025-10-13',
    url: 'https://www.youtube.com/watch?v=AeXlg8H71yM',
  },
  {
    title: 'The Power of AI in Capturing Brand Voice on LinkedIn | Episode #004',
    date: '2025-10-06',
    url: 'https://www.youtube.com/watch?v=FDJBcb7vOkQ',
  },
  {
    title: 'Working with Your Spouse: Business Couple Dynamics & Boundaries in Business | Episode #003',
    date: '2025-09-29',
    url: 'https://www.youtube.com/watch?v=skcwPyEZrLw',
  },
  {
    title: 'The LinkedIn Algorithm Just Changed. Here\'s What Works Now (September 2025) | Episode #002',
    date: '2025-09-22',
    url: 'https://www.youtube.com/watch?v=DTu49YEeWxs',
  },
  {
    title: 'Brutally Honest Personal Branding Advice to Fix Your Sh*t Content | Episode #001',
    date: '2025-09-17',
    url: 'https://www.youtube.com/watch?v=-ZgBqF2rZJk',
  },
]

const coverage = [
  {
    source: 'SocialAppsHQ',
    what: 'Cites Joshua B. Lee’s "Human Algorithm" and LinkedIn training as an authority-building resource.',
    url: 'https://www.socialappshq.com/linkedin/how-to-build-authority/',
  },
  {
    source: 'Genius Network',
    what: 'February 2024 member meeting directory listing Joshua B. Lee and his "Dopamine Dealer of LinkedIn" positioning.',
    date: 'February 2024',
    url: 'https://geniusnetwork.com/wp-content/uploads/2024/02/Genius_Network_Feb_2024_Meeting_Directory_Virtual.pdf',
  },
]

const properties = [
  { label: 'LinkedIn profile', url: 'https://www.linkedin.com/in/joshuablee' },
  {
    label: 'The Authority Gap — LinkedIn newsletter',
    url: 'https://www.linkedin.com/newsletters/the-authority-gap-6770825325585727488',
  },
  {
    label: 'YOUmanize™ Your Brand — LinkedIn newsletter',
    url: 'https://www.linkedin.com/newsletters/youmanize-your-brand-7024795582427004928/',
  },
  {
    label: 'YOUmanize™ Your Brand — Apple Podcasts',
    url: 'https://podcasts.apple.com/us/podcast/youmanize-your-brand/id1840180074',
  },
  {
    label: 'YOUmanize™ Your Brand — Spotify',
    url: 'https://open.spotify.com/show/3dVqzvgxRKSKf8rLXlmZDH',
  },
  { label: 'YouTube channel', url: 'https://www.youtube.com/@thejoshuablee' },
  {
    label: 'Entrepreneur author page',
    url: 'https://www.entrepreneur.com/author/joshua-lee',
  },
  {
    label: 'Media kit — StandOut Authority',
    url: 'https://standoutauthority.com/media/joshua-b-lee/',
  },
  { label: 'X (Twitter)', url: 'https://x.com/thejoshuablee' },
  { label: 'Instagram', url: 'https://www.instagram.com/thejoshuablee/' },
  { label: 'StandOut Authority', url: 'https://standoutauthority.com' },
  { label: 'YOUmanize™', url: 'https://youmanize.ai' },
]

const faqs = [
  {
    q: 'Who is Joshua B. Lee?',
    a: 'Joshua B. Lee is a LinkedIn and Answer Engine Optimization authority based in Austin, Texas. He is the founder of StandOut Authority and co-founder and Chief Visionary Officer of YOUmanize™. Known as "The Dopamine Dealer of LinkedIn," he spent 25 years in digital advertising and managed nearly a billion dollars in ad spend, including work with Google and Microsoft, before focusing on human-first authority. Favikon ranked him the #1 LinkedIn expert in the United States in March 2026 and #5 worldwide in May 2026.',
  },
  {
    q: 'What is Authority Architecture?',
    a: 'Authority Architecture is the framework Joshua B. Lee created for building verifiable trust signals that AI answer engines, search engines, and people can read, cite, and act on. Instead of optimizing for attention or content volume, it structures the evidence of a person’s expertise so that machines can find it, confirm it, and repeat it accurately.',
  },
  {
    q: 'What is YOUmanize™?',
    a: 'YOUmanize™ is a company co-founded by Joshua B. Lee and Rachel B. Lee that measures how much of the evidence about a person is actually reachable and verifiable by AI systems. It scores the gap between what is true about someone and what the internet can prove about them.',
  },
  {
    q: 'What does Joshua B. Lee speak about?',
    a: 'Joshua B. Lee speaks on LinkedIn strategy, Answer Engine Optimization, Authority Architecture, personal branding, and human-first leadership in an AI-shaped world. He has appeared on stages and programs including DigitalMarketer, Gartner, Genius Network, and Podcast Movement.',
  },
  {
    q: 'How is Joshua B. Lee ranked as a LinkedIn expert?',
    a: 'Favikon ranked Joshua B. Lee #1 among LinkedIn experts in the United States in March 2026 with a Favikon Authority Score of 8,175, and #5 among LinkedIn experts worldwide in May 2026 with a score of 8,282.',
  },
  {
    q: 'What companies did Joshua B. Lee found?',
    a: 'Joshua B. Lee founded StandOut Authority, a personal-brand and authority agency, and co-founded YOUmanize™ with Rachel B. Lee, where he serves as Chief Visionary Officer.',
  },
]

export default function Evidence() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-8">
            Proof &amp; Press
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
            The receipts.{' '}
            <span className="text-white/40">Every claim, linked to its source.</span>
          </h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-white/50">
              Anyone can say they&rsquo;re an authority. This page is the part that can be
              checked — rankings from the organization that issued them, conversations
              hosted by other people, and every profile that belongs to me.
            </p>
            <p className="text-white/70 font-medium">
              If a claim isn&rsquo;t linked here, treat it as unverified.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          RANKINGS
          ============================================ */}
      <section className="py-20 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Independent rankings
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
            Ranked by Favikon, not by me.
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            {rankings.map((r) => (
              <li key={r.scope}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 rounded-xl p-5 border border-white/5 hover:border-orange-500/20 transition-all group no-underline"
                >
                  <span className="text-orange-500 font-bold text-2xl shrink-0 w-12">
                    {r.rank}
                  </span>
                  <span className="flex-1">
                    <span className="block text-white/80 font-semibold text-sm group-hover:text-orange-400 transition-colors">
                      {r.scope}
                    </span>
                    <span className="block text-white/35 text-xs mt-1">
                      {r.issuer} &middot; Authority Score {r.score} &middot; {r.date}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-orange-400 transition-colors shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          PODCAST APPEARANCES
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Hosted by other people
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
            Podcast and interview appearances.
          </h2>
          <p className="text-white/30 text-sm mb-8">
            Each one links to the episode on the host&rsquo;s own site.
          </p>
          <div className="space-y-10">
            {Object.entries(
              appearances.reduce<Record<string, typeof appearances>>((acc, a) => {
                const y = a.date.slice(0, 4)
                ;(acc[y] ||= []).push(a)
                return acc
              }, {}),
            )
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([year, items]) => (
                <div key={year}>
                  <h3 className="text-white/25 text-xs font-mono tracking-widest mb-3">
                    {year} &middot; {items.length}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((a) => (
                      <a
                        key={a.url}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl p-5 border border-white/5 hover:border-orange-500/20 transition-all group no-underline flex flex-col"
                      >
                        <h4 className="text-white/80 font-semibold text-sm leading-snug mb-2 group-hover:text-orange-400 transition-colors">
                          {a.show}
                        </h4>
                        <p className="text-white/35 text-xs leading-relaxed mb-4 flex-1">
                          {a.episode}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/20">{a.date}</span>
                          <ChevronRight
                            size={12}
                            className="text-white/20 group-hover:text-orange-400 transition-colors"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================
          HOSTED PODCAST
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Hosted by Josh and Rachel
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
            YOUmanize&trade; Your Brand.
          </h2>
          <p className="text-white/30 text-sm mb-8">
            The show Joshua and Rachel B. Lee host together. Every episode links to
            YouTube.{' '}
            <a
              href="https://www.youtube.com/@YOUmanizeYourBrand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500/70 hover:text-orange-400 transition-colors"
            >
              Full channel &rarr;
            </a>
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
            {hostedEpisodes.map((e) => (
              <li key={e.url}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl p-4 border border-white/5 hover:border-orange-500/20 transition-all group no-underline h-full"
                >
                  <span className="text-[10px] text-white/20 font-mono pt-0.5 shrink-0">
                    {e.date}
                  </span>
                  <span className="text-white/70 text-xs leading-relaxed group-hover:text-orange-400 transition-colors flex-1">
                    {e.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          THIRD-PARTY COVERAGE
          ============================================ */}
      <section className="py-20 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Written about elsewhere
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
            Independent coverage.
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            {coverage.map((c) => (
              <li key={c.url}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl p-5 border border-white/5 hover:border-orange-500/20 transition-all group no-underline"
                >
                  <h3 className="text-white/80 font-semibold text-sm mb-2 group-hover:text-orange-400 transition-colors">
                    {c.source}
                    {c.date ? (
                      <span className="text-white/20 font-normal"> &middot; {c.date}</span>
                    ) : null}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed">{c.what}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          OWNED PROPERTIES
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Everywhere else I am
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
            Profiles, shows, and publications.
          </h2>
          <p className="text-white/30 text-sm mb-8">
            The complete list, so there&rsquo;s no ambiguity about which Joshua Lee this is.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
            {properties.map((p) => (
              <li key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl px-5 py-4 border border-white/5 hover:border-orange-500/20 transition-all group no-underline"
                >
                  <span className="text-white/70 text-sm group-hover:text-orange-400 transition-colors">
                    {p.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-orange-400 transition-colors shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          FAQ — direct Q&A for answer engines
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Straight answers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 leading-snug">
            Questions people actually ask.
          </h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {f.q}
                </h3>
                <p className="text-white/50 text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSE
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/50 text-lg mb-4">
            This is what Authority Architecture looks like applied to one person.
          </p>
          <p className="text-white/70 text-lg font-medium mb-8">
            Not louder. Just provable.
          </p>
          <a
            href="/authority-architecture"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
          >
            See how it works
            <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                '@id': 'https://joshuablee.com/evidence#faq',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'CollectionPage',
                '@id': 'https://joshuablee.com/evidence#collection',
                name: 'Proof & Press — Joshua B. Lee',
                description:
                  'A linked record of Joshua B. Lee’s third-party recognition: Favikon rankings, podcast appearances, independent coverage, and owned profiles.',
                about: { '@id': 'https://joshuablee.com/#person' },
                mainEntity: {
                  '@type': 'ItemList',
                  itemListElement: [
                    ...appearances.map((a, i) => ({
                      '@type': 'ListItem',
                      position: i + 1,
                      item: {
                        '@type': 'PodcastEpisode',
                        name: a.episode,
                        url: a.url,
                        datePublished: a.date,
                        partOfSeries: { '@type': 'PodcastSeries', name: a.show },
                      },
                    })),
                    ...hostedEpisodes.map((e, i) => ({
                      '@type': 'ListItem',
                      position: appearances.length + i + 1,
                      item: {
                        '@type': 'PodcastEpisode',
                        name: e.title,
                        url: e.url,
                        datePublished: e.date,
                        partOfSeries: {
                          '@type': 'PodcastSeries',
                          name: 'YOUmanize\u2122 Your Brand',
                          url: 'https://www.youtube.com/@YOUmanizeYourBrand',
                        },
                      },
                    })),
                    ...coverage.map((c, i) => ({
                      '@type': 'ListItem',
                      position: appearances.length + hostedEpisodes.length + i + 1,
                      item: {
                        '@type': 'CreativeWork',
                        name: c.source,
                        description: c.what,
                        url: c.url,
                      },
                    })),
                  ],
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
