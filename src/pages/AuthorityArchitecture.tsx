import { Link } from 'react-router-dom'
import { ArrowRight, Search, Brain, MessageSquare, Shield, Compass, Radio, Settings } from 'lucide-react'

const layers = [
  {
    num: '01',
    icon: Search,
    title: 'Identity Excavation',
    desc: 'Surface your lived experience, pattern recognition, contrarian beliefs, and proprietary thinking. Identify what you actually know that the market has not yet fully recognized.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Market Alignment',
    desc: 'Anchor your expertise in a problem space the market actually understands and values. Expertise only becomes authority when attached to a recognizable need or category.',
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Messaging Architecture',
    desc: 'Design language that makes your expertise legible. Messaging is not decoration — it is translation. Ensure your thinking can be remembered, repeated, and associated with a specific idea.',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Trust Signal Mapping',
    desc: 'Align proof, frameworks, narrative, and experience signals so they reinforce one another. Trust is not built by one strong asset — it is built through signal coherence.',
  },
  {
    num: '05',
    icon: Brain,
    title: 'Content Direction',
    desc: 'Determine how your ideas should be distributed through stories, frameworks, insights, and conversations. Content is not the strategy — it is the delivery mechanism.',
  },
  {
    num: '06',
    icon: Radio,
    title: 'Authority Installation',
    desc: 'Place structured signals across LinkedIn, websites, podcasts, articles, and other authority-bearing surfaces. This is where expertise moves from internal clarity to public recognition.',
  },
  {
    num: '07',
    icon: Settings,
    title: 'Strategic Advisory',
    desc: 'Ongoing refinement that ensures your authority system keeps compounding. Authority is not static — it strengthens through disciplined reinforcement.',
  },
]

const faqs = [
  {
    q: 'What is Authority Architecture?',
    a: 'Authority Architecture is the strategic discipline of designing the signals that allow a founder\'s expertise to become recognizable, trusted, and discoverable across the surfaces where modern authority is evaluated — including LinkedIn, search engines, AI systems, and digital credibility signals.',
  },
  {
    q: 'How is Authority Architecture different from content marketing?',
    a: 'Content marketing focuses on producing and distributing content. Authority Architecture focuses on installing the structural signals — intellectual territory, messaging clarity, framework language, trust signals, and AI discoverability — that make content meaningful. It is the difference between activity and infrastructure.',
  },
  {
    q: 'Why does Authority Architecture matter in the AI era?',
    a: 'AI systems like ChatGPT, Perplexity, and Google AI Overviews do not browse content — they assemble answers from structured signals. Authority Architecture ensures your expertise is structured in a way these systems can recognize, cite, and surface. Without it, AI will choose someone else who is clearer.',
  },
  {
    q: 'What are Authority Signals?',
    a: 'Authority Signals are the recognizable markers that allow the market and AI systems to categorize your expertise. They include intellectual territory, narrative consistency, framework language, trust signals like social proof and endorsements, and cross-platform recognition patterns.',
  },
  {
    q: 'How long does it take to install Authority Architecture?',
    a: 'The Authority Architecture Intensive is a focused 90-day engagement that installs the full system. However, authority compounds over time — the 90 days establish the foundation, and the signals strengthen through ongoing reinforcement.',
  },
]

export default function AuthorityArchitecture() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            The Category
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Authority Architecture
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
            The discipline of designing the signals that allow founders to become the
            trusted answer in their category.
          </p>
          <div className="glow-line" />
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">The Authority Shift</h2>
          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              For years, the advice was simple: post more, grow your audience, optimize engagement.
              LinkedIn was a content game. The loudest voice won.
            </p>
            <p>
              That world is gone. Today your expertise is evaluated simultaneously by
              human perception, search engines, AI systems, and digital trust signals — often before anyone
              clicks, calls, or connects.
            </p>
            <p className="text-xl text-orange-400 font-semibold py-4 border-l-2 border-orange-500 pl-6">
              In this environment, attention alone is no longer enough. Authority emerges when the
              market repeatedly encounters recognizable signals connected to a specific idea.
            </p>
            <p>
              AI can generate infinite content. Posting more won't save you.
              The advantage now belongs to those whose thinking
              is <span className="text-white font-semibold">recognizable</span> — not just on LinkedIn, but everywhere trust gets evaluated.
            </p>
          </div>
        </div>
      </section>

      {/* The 7 Layers */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Seven Layers
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Authority Architecture is built in seven strategic layers, each one
              strengthening the foundation for the next.
            </p>
          </div>

          <div className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.num}
                className="card-glass rounded-xl p-6 lg:p-8 hover:border-orange-500/20 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <div className="flex items-center gap-4 lg:w-72 shrink-0">
                    <span className="text-orange-500/30 font-mono text-sm font-bold">{layer.num}</span>
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <layer.icon size={20} className="text-orange-500" />
                    </div>
                    <h3 className="text-white font-semibold">{layer.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Insight */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            The Core Insight
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card-glass rounded-xl p-6">
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 1</p>
              <p className="text-white font-semibold">Recognizable ideas become repeatable.</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 2</p>
              <p className="text-white font-semibold">Repeatable ideas become associated with a person.</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 3</p>
              <p className="text-white font-semibold">That association creates category authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Ranking Signals */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">AEO Ranking Signals</h2>
            <p className="text-white/50">How AI decides who becomes the answer.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Entity Clarity', desc: 'AI must clearly understand who you are, what you do, and what category you own.' },
              { title: 'Authority', desc: 'Consistent signals across trusted platforms — LinkedIn, websites, podcasts, articles — that reinforce expertise.' },
              { title: 'Recency', desc: 'Active, current signals that demonstrate ongoing relevance in your category.' },
              { title: 'Accessibility', desc: 'Structured, crawlable content AI systems can extract, cite, and surface.' },
            ].map((item) => (
              <div key={item.title} className="card-glass rounded-xl p-6 text-center">
                <h3 className="text-orange-400 font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Common Questions About Authority Architecture
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }),
          }}
        />
      </section>

      {/* YOUmanize™ Score */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Measure Your Authority Signals
          </h2>
          <p className="text-white/50 leading-relaxed mb-8 max-w-2xl mx-auto">
            The YOUmanize™ Score evaluates your presence across 7 trust signals: Authenticity, Consistency, Reciprocity, Relevance, Social Proof, Transparency, and Emotional Resonance. Get your free score to see where you stand.
          </p>
          <a
            href="https://app.youmanize.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all no-underline"
          >
            Get Your Free YOUmanize™ Score
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to install your Authority Architecture?
          </h2>
          <p className="text-white/50 mb-8">
            The 90-day system that turns founder expertise into category authority.
          </p>
          <Link
            to="/work-with-me"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Explore the Offer
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* HowTo Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Build Authority Architecture',
            description: 'A seven-layer system for designing the signals that allow founders to become the trusted answer in their category.',
            step: layers.map((layer, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: layer.title,
              text: layer.desc,
            })),
          }),
        }}
      />
    </>
  )
}
