import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { recommendations } from '../data/recommendations'

const ORIGIN = 'https://joshuablee.com'
const JOSHUA_LINKEDIN = 'https://www.linkedin.com/in/joshuablee'

const formatLinkedInDate = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))

export default function Recommendations() {
  const byYear = recommendations.reduce<Record<string, typeof recommendations>>(
    (acc, r) => {
      const y = r.date.slice(0, 4) || 'Undated'
      ;(acc[y] ||= []).push(r)
      return acc
    },
    {},
  )

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            In their words
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-8">
            {recommendations.length} people put their name on it.
          </h1>
          <p className="text-white/40 leading-relaxed mb-4">
            These are LinkedIn recommendations written for Joshua B. Lee by clients,
            colleagues, and founders he has worked with, going back to 2007. Every
            recommendation here is reproduced word for word from LinkedIn and checked
            against Josh&apos;s own LinkedIn data export on 3 September 2026. Each one
            links to the person who wrote it, except two where we could not confirm the
            profile and left the name unlinked rather than point you at the wrong person. LinkedIn shows recommendations only to
            signed-in members, which is why they live here too.
          </p>
          <p className="text-white/70 font-medium">
            Nothing here is anonymous. Every quote carries a name, a title, and a company.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
          {Object.entries(byYear)
            .sort(([a], [b]) => b.localeCompare(a))
            .map(([year, items]) => (
              <div key={year}>
                <h2 className="text-white/25 text-xs font-mono tracking-widest mb-4">
                  {year} &middot; {items.length}
                </h2>
                <ul className="space-y-4 list-none p-0 m-0">
                  {items.map((r, i) => (
                    <li
                      key={`${r.name}-${i}`}
                      className="rounded-xl p-6 border border-white/5 bg-white/[0.02]"
                    >
                      <blockquote
                        cite={r.profileUrl}
                        className="text-white/60 text-sm leading-relaxed m-0"
                      >
                        &ldquo;{r.text}&rdquo;
                      </blockquote>
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-white/80 text-sm font-semibold m-0">
                          {r.profileUrl ? (
                            <a
                              href={r.profileUrl}
                              target="_blank"
                              rel="noopener"
                              className="text-white/80 hover:text-orange-400 transition-colors no-underline"
                            >
                              {r.name}
                            </a>
                          ) : (
                            <span>{r.name}</span>
                          )}
                        </p>
                        <p className="text-white/30 text-xs m-0">
                          {r.title}
                          {r.title && r.company ? ' · ' : ''}
                          {r.company}
                        </p>
                        <p className="text-white/30 text-xs mt-2 mb-0">
                          Written on LinkedIn{' '}
                          <time dateTime={r.date}>{formatLinkedInDate(r.date)}</time>
                          {r.profileUrl ? (
                            <>
                              {' · '}
                              <a
                                href={r.profileUrl}
                                target="_blank"
                                rel="noopener"
                                className="text-white/40 hover:text-orange-400 transition-colors no-underline"
                              >
                                View profile on LinkedIn
                              </a>
                            </>
                          ) : (
                            <span> · Profile not confirmed, so this name is not linked</span>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <p className="text-white/35 text-xs pt-2">
            Wrote one of these and want it changed or removed? Email{' '}
            <a
              href="mailto:josh@standoutauthority.com"
              className="text-white/50 hover:text-orange-400 transition-colors no-underline"
            >
              josh@standoutauthority.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-sm mb-6">
            Recommendations are one kind of proof. Rankings, podcast appearances, and
            published writing are another.
          </p>
          <Link
            to="/evidence"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
          >
            See the full evidence record
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': `${ORIGIN}/#person`,
                name: 'Joshua B. Lee',
                sameAs: [JOSHUA_LINKEDIN],
              },
              {
                '@type': 'CollectionPage',
                '@id': `${ORIGIN}/recommendations#collection`,
                name: 'Recommendations for Joshua B. Lee',
                description: `${recommendations.length} LinkedIn recommendations written for Joshua B. Lee by clients, colleagues, and founders since 2007. Each is attributed to a named person with their title, company, and LinkedIn profile.`,
                about: { '@id': `${ORIGIN}/#person` },
                mainEntity: {
                  '@type': 'ItemList',
                  numberOfItems: recommendations.length,
                  itemListElement: recommendations.map((r, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    item: {
                      '@type': 'Review',
                      reviewBody: r.text,
                      datePublished: r.date,
                      author: {
                        '@type': 'Person',
                        name: r.name,
                        ...(r.profileUrl ? { sameAs: r.profileUrl } : {}),
                        ...(r.title ? { jobTitle: r.title } : {}),
                        ...(r.company
                          ? { worksFor: { '@type': 'Organization', name: r.company } }
                          : {}),
                      },
                      itemReviewed: {
                        '@type': 'Person',
                        '@id': `${ORIGIN}/#person`,
                        name: 'Joshua B. Lee',
                      },
                    },
                  })),
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
