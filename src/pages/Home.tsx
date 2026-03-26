import { Link } from 'react-router-dom'
import { ArrowRight, Target, MessageSquare, Layers, Shield, BarChart3, Zap, ChevronRight } from 'lucide-react'

const frameworks = [
  { icon: Target, title: 'Intellectual Territory', desc: 'Define the problem space you own better than anyone.' },
  { icon: MessageSquare, title: 'Narrative Consistency', desc: 'One clear story the market remembers and repeats.' },
  { icon: Layers, title: 'Framework Language', desc: 'Structured thinking that becomes portable and shareable.' },
  { icon: Shield, title: 'Trust Signals', desc: 'Proof, credibility, and recognition that compound over time.' },
  { icon: BarChart3, title: 'AI Discoverability', desc: 'Signals AI systems can crawl, cite, and surface.' },
]

const mediaLogos = [
  'Entrepreneur',
  'USA Today',
  'Forbes',
  'Inc.',
  'LinkedIn',
]

const faqs = [
  {
    q: 'What is Authority Architecture?',
    a: 'Authority Architecture is the discipline of designing the signals that allow founders to become the trusted answer in their category. It aligns intellectual territory, messaging clarity, framework language, trust signals, and AI discoverability so the market associates your name with the problem you solve best.',
  },
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: 'AEO is the practice of structuring your expertise so AI systems like ChatGPT, Perplexity, and Google AI Overviews can recognize, cite, and surface you as the authority in your field. Unlike SEO which ranks pages, AEO ranks people.',
  },
  {
    q: 'Who is Authority Architecture for?',
    a: 'Authority Architecture is designed for methodology-driven founders running consulting, advisory, or professional services businesses generating $2M–$15M+ annually who have deep expertise but lack market recognition matching their capability.',
  },
  {
    q: 'How is Authority Architecture different from personal branding?',
    a: 'Personal branding focuses on visibility. Authority Architecture focuses on recognition. Instead of producing more content, it installs the signals that allow the market — and AI systems — to recognize your expertise and associate your name with a specific category.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center pt-20 wave-bottom overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-purple-700/20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-6">
                The YOUman Catalyst
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Become the{' '}
                <span className="gradient-text-orange">trusted answer</span>{' '}
                in the age of AI.
              </h1>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                You don't have a visibility problem. You have an authority structure problem.
                And AI is quietly making that gap bigger. I install{' '}
                <Link to="/authority-architecture" className="text-orange-400 hover:text-orange-300 no-underline font-medium">
                  Authority Architecture
                </Link>{' '}
                — the signals that make LinkedIn, search engines, and AI platforms recognize you as the answer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://standoutauthority.com/brandlaunchpad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
                >
                  Start Your Authority Architecture
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/authority-architecture"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white/80 hover:text-white rounded-xl transition-all no-underline text-sm"
                >
                  Learn the Framework
                </Link>
              </div>

              {/* Transformation bar */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm">
                <span className="text-white/50">The Core Transformation:</span>
                <div className="flex items-center gap-2 font-semibold">
                  <span className="text-white">Humanity</span>
                  <ArrowRight size={14} className="text-orange-500" />
                  <span className="text-orange-400">Authority</span>
                  <ArrowRight size={14} className="text-orange-500" />
                  <span className="text-orange-500">Answer</span>
                </div>
              </div>
            </div>

            {/* Hero Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/images/joshua-hero.jpg"
                  alt="Joshua B. Lee — The YOUman Catalyst, Authority Architect"
                  className="w-48 h-56 sm:w-64 sm:h-72 lg:w-80 lg:h-96 rounded-2xl object-cover object-top border border-white/10"
                />
                <div className="absolute -bottom-4 -right-4 w-48 lg:w-72 h-48 lg:h-72 rounded-full bg-orange-500/10 blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Statement */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="glow-line mb-12" />
          <blockquote className="text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">
            "Authority isn't built through visibility.{' '}
            <span className="text-orange-500">Authority emerges through recognizable signals.</span>"
          </blockquote>
          <p className="text-white/40 text-lg">
            The market does not remember capabilities. It remembers ideas.
          </p>
          <div className="glow-line mt-12" />
        </div>
      </section>

      {/* Authority Architecture Framework */}
      <section className="py-24 relative bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
              The Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Authority Architecture
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              The market can't recognize what isn't structured. These five signals
              close the gap between what you know and what the world sees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {frameworks.map((item, i) => (
              <div
                key={item.title}
                className="card-glass rounded-xl p-6 hover:border-orange-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <item.icon size={22} className="text-orange-500" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-orange-500/50 text-xs font-mono">0{i + 1}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/authority-architecture"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
            >
              Explore the full framework
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO vs AEO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The rules changed. Most people haven't noticed yet.
            </h2>
            <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto">
              AI doesn't scroll your profile. It assembles answers. If your signal isn't structured, you're not in the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-glass rounded-xl p-8 border-white/5">
              <div className="text-sm font-bold text-white/30 uppercase tracking-wider mb-4">The Old Way</div>
              <h3 className="text-2xl font-bold text-white/60 mb-6">SEO</h3>
              <ul className="space-y-3">
                {['Focuses on pages and keywords', 'Asks, "How do I rank?"', 'Search engines index pages', 'Gets you to the site'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/40 text-sm">
                    <span className="text-white/20 mt-0.5">&#x2022;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass rounded-xl p-8 border-orange-500/20 glow-orange">
              <div className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">The New Reality</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">AEO</h3>
              <ul className="space-y-3">
                {['Focuses on people and proof', 'Asks, "How do I become the answer?"', 'Answer engines assemble entities', 'Gets you into the conversation'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-orange-500 mt-0.5">&#x2022;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-8">
            Featured In &amp; Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {mediaLogos.map((name) => (
              <span key={name} className="text-lg font-bold text-white/15 hover:text-white/30 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Snapshot */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
                The Founder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                I kept seeing the same pattern.
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  Over 25+ years building companies, managing more than{' '}
                  <span className="text-white font-semibold">$1B in ad spend</span>, and watching every shift in digital discovery — one thing kept repeating.
                </p>
                <p>
                  The most capable founders were invisible. Not because they lacked depth. Because their expertise wasn't structured in a way anyone could recognize — not buyers, not search engines, not AI.
                </p>
                <p className="text-orange-400 font-medium">
                  Expertise is what you know. Authority is whether the market understands what you know.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
              >
                Read the full story
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '$1B+', label: 'Ad Spend Managed' },
                { stat: '25+', label: 'Years Building' },
                { stat: '50+', label: 'Founders Coached' },
                { stat: '90', label: 'Day Authority System' },
              ].map((item) => (
                <div key={item.label} className="card-glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-orange-500 mb-2">{item.stat}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Couple photo */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/joshua-rachel-couple.jpg"
              alt="Joshua B. Lee and Rachel B. Lee — Co-founders of StandOut Authority and YOUmanize™"
              className="w-64 h-72 rounded-2xl object-cover object-top border border-white/10"
            />
          </div>
          <p className="text-center text-white/40 text-sm mb-10 max-w-xl mx-auto">
            Founded by Joshua B. Lee and Rachel B. Lee — blending 25+ years of operator experience with modern AI-era authority strategy.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://standoutauthority.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-2xl p-10 hover:border-orange-500/20 transition-all group no-underline"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={24} className="text-orange-500" />
                <h3 className="text-xl font-bold text-white">StandOut Authority</h3>
              </div>
              <p className="text-white/50 mb-6 leading-relaxed">
                Where Authority Architecture gets installed. We don't chase attention — we structure the signals that make founders impossible to ignore on LinkedIn, in AI search, and everywhere buyers evaluate trust.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-400 group-hover:text-orange-300 font-medium text-sm">
                Visit StandOut Authority
                <ArrowRight size={16} />
              </span>
            </a>

            <div
              className="card-glass rounded-2xl p-10 hover:border-purple-600/20 transition-all group no-underline"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-purple-600" />
                <h3 className="text-xl font-bold text-white">YOUmanize™</h3>
              </div>
              <p className="text-white/50 mb-6 leading-relaxed">
                The first measurable personal brand standard. 7 trust signals. One credibility pattern. AI-powered analysis revealing how your public presence builds trust over time.
              </p>
              <a
                href="https://app.youmanize.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all no-underline text-sm mb-4"
              >
                Get Your Free YOUmanize™ Score
                <ArrowRight size={16} />
              </a>
              <p className="text-white/30 text-xs mt-4">
                Currently in MVP — seeking investors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - AEO Gold */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50">
              The questions founders ask before they move.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-700/5 to-orange-500/5" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            You already have the expertise.
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            The question is whether the market knows it. The founders who structure their authority now become inevitable. The rest keep competing on noise.
          </p>
          <a
            href="https://standoutauthority.com/brandlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Start Your Authority Architecture
            <ArrowRight size={18} />
          </a>
          <p className="mt-6 text-xs text-white/30">
            Be felt first. Then found.
          </p>
        </div>
      </section>
    </>
  )
}
