import { ArrowRight, Lightbulb, Handshake, Rocket, Crown } from 'lucide-react'

const offers = [
  {
    level: 'Level 1',
    icon: Lightbulb,
    name: 'Authority Launchpad',
    mindset: '"I want clarity."',
    desc: 'Designed for founders who need strategic clarity before scaling visibility. Define your intellectual territory, audience positioning, category language, and authority architecture foundations.',
    output: 'A complete authority positioning blueprint you can execute independently.',
    investment: '$10,000',
    highlight: false,
  },
  {
    level: 'Level 2',
    icon: Handshake,
    name: 'Authority Partnership',
    mindset: '"I want support."',
    desc: 'Ongoing strategic guidance and execution calibration. The StandOut Authority team works alongside you to maintain momentum while refining your authority signals.',
    output: 'Monthly strategic guidance, signal refinement, and accountability.',
    investment: '$7,000/month',
    highlight: false,
  },
  {
    level: 'Level 3',
    icon: Rocket,
    name: 'Authority Architecture Intensive',
    mindset: '"I want acceleration."',
    desc: 'The three-month intensive compresses years of authority development into a focused 90-day transformation. This engagement installs the full authority system.',
    output: 'Complete Authority Architecture installation across all surfaces.',
    investment: '$30,000',
    highlight: true,
  },
  {
    level: 'Level 4',
    icon: Crown,
    name: 'Full Authority Management',
    mindset: '"I want this handled."',
    desc: 'StandOut Authority becomes your external authority division. We maintain and expand your authority ecosystem long-term so you can focus on running your business.',
    output: 'Full-service authority management and expansion.',
    investment: '$10,000/month',
    highlight: false,
  },
]

export default function WorkWithMe() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Work With Me
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            The expertise already exists. The architecture doesn't.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Four ways to close the gap between what you know and what the market recognizes.
            Delivered through{' '}
            <a href="https://standoutauthority.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 no-underline font-medium">
              StandOut Authority
            </a>.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">This is for you if:</h2>
              <ul className="space-y-3">
                {[
                  'You run a consulting, advisory, or professional services firm',
                  'You have deep expertise but the market doesn\'t fully recognize it',
                  'Competitors with less depth get more visibility than you',
                  'You want AI systems to surface you as the authority in your field',
                  'You\'re ready to own a category, not just participate in one',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="text-orange-500 mt-1 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-4">The core tension we solve:</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You experience a gap between your <span className="text-white font-medium">operational authority</span> (the
                expertise clients experience) and your <span className="text-white font-medium">market authority</span> (the
                recognition the broader market sees).
              </p>
              <p className="text-orange-400 font-medium">
                That gap is not a marketing problem. It's an architecture problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Ladder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className={`rounded-2xl p-8 transition-all ${
                  offer.highlight
                    ? 'card-glass border-orange-500/30 glow-orange'
                    : 'card-glass hover:border-white/10'
                }`}
              >
                {offer.highlight && (
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-white/30 font-mono uppercase">{offer.level}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <offer.icon size={22} className="text-orange-500" />
                  <h3 className="text-xl font-bold text-white">{offer.name}</h3>
                </div>
                <p className="text-orange-400 text-sm font-medium mb-4 italic">{offer.mindset}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{offer.desc}</p>
                <div className="border-t border-white/5 pt-4 mt-4">
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">Deliverable</p>
                  <p className="text-white/70 text-sm mb-4">{offer.output}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{offer.investment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The 90-Day Authority System</h2>
          <p className="text-white/50 mb-12">Three months. One clear outcome: the market starts associating your name with your category.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { month: 'Month 1', title: 'Category Foundation', desc: 'Sharpen the authority problem. Make category language familiar. Establish intellectual territory.' },
              { month: 'Month 2', title: 'Framework Authority', desc: 'Introduce structured thinking. Publish framework content. Make the category teachable and memorable.' },
              { month: 'Month 3', title: 'Ecosystem Reinforcement', desc: 'Expand beyond LinkedIn. Align all surfaces. Install cross-platform recognition signals.' },
            ].map((item) => (
              <div key={item.month} className="card-glass rounded-xl p-6 text-left">
                <span className="text-orange-500 text-xs font-mono uppercase">{item.month}</span>
                <h3 className="text-white font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            We don't chase attention.
          </h2>
          <p className="text-2xl text-orange-400 font-semibold mb-8">
            We architect authority that compounds.
          </p>
          <p className="text-white/50 leading-relaxed mb-10">
            Most services tell you to produce more content. We install the structure that makes
            your existing expertise recognizable — on LinkedIn, in AI search, and everywhere
            the market evaluates trust.
          </p>
          <a
            href="https://standoutauthority.com/brandlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Start at StandOut Authority
            <ArrowRight size={18} />
          </a>
          <p className="mt-4 text-xs text-white/30">We intentionally limit engagements each month to maintain depth and precision.</p>
        </div>
      </section>

      {/* Offer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Authority Architecture',
            provider: {
              '@type': 'Person',
              name: 'Joshua B. Lee',
              alternateName: 'The YOUman Catalyst',
            },
            description: 'Authority Architecture is a strategic system that helps methodology-driven founders become the trusted answer in their category through structured authority signals across LinkedIn, search engines, and AI discovery systems.',
            serviceType: 'Business Consulting',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Authority Architecture Engagements',
              itemListElement: offers.map((offer, i) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: offer.name,
                  description: offer.desc,
                },
                position: i + 1,
              })),
            },
          }),
        }}
      />
    </>
  )
}
