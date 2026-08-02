import { ArrowRight, ChevronRight, FileText, Search, UserCircle } from 'lucide-react'

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
      {/* ============================================
          HERO — Break their current understanding
          ============================================ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-8">
            Authority Architecture
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
            Most people aren't losing attention.{' '}
            <span className="text-white/40">They're losing trust.</span>
          </h1>
        </div>
      </section>

      {/* ============================================
          THE OLD GAME — What used to work
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              For years, the game was simple.
            </p>
            <p className="text-white/50">
              Get seen. More content. More reach. More visibility. If people knew your name, opportunities followed.
            </p>
            <p className="text-white/50">
              That worked. Until it didn't.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              We're stepping into a different kind of internet now. One where AI can generate content instantly. Where everyone can look polished. Where noise is no longer the barrier.
            </p>
            <p className="text-white/50">
              Which means visibility is no longer scarce.
            </p>
            <p className="text-white/80 text-xl font-semibold">
              Trust is.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE GAP — Where most people fall behind
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              And that's where most people are about to fall behind.
            </p>
            <p className="text-white/50">
              Because they're still playing a game that rewards attention… in a world that's starting to filter for belief.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-white/10 pl-6">
              It's not about how often you show up anymore. It's about how you're experienced when you do.
            </p>
            <p className="text-white/50">
              You can have thousands of views. Consistent content. A growing audience. And still not be the person people choose.
            </p>
            <p className="text-white/70">
              Because being seen and being trusted are not the same thing.
            </p>
            <p className="text-white/40">
              And most people never make that shift.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE PROBLEM — What most authority is built on
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              Right now, most authority is being built on:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <FileText size={20} className="text-orange-500/40 shrink-0" />
                <span className="text-white/40 text-lg">Performance</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <Search size={20} className="text-orange-500/40 shrink-0" />
                <span className="text-white/40 text-lg">Polish</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <UserCircle size={20} className="text-orange-500/40 shrink-0" />
                <span className="text-white/40 text-lg">Consistency</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <ArrowRight size={20} className="text-orange-500/40 shrink-0" />
                <span className="text-white/40 text-lg">Visibility</span>
              </div>
            </div>
            <p className="text-white/50">
              Which looks good… but doesn't hold up when people are actually deciding who they trust.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              Because trust isn't built through volume. It's built through clarity. Alignment. Presence. Consistency of truth.
            </p>
            <p className="text-white/50">
              And that requires a completely different way of building.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          AUTHORITY ARCHITECTURE — The response
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold">
              Authority Architecture
            </p>
            <p className="text-white/70 text-xl">
              That's what Authority Architecture is. Not a framework. A foundation.
            </p>
            <p className="text-white/50">
              It's how you build an identity people understand immediately. A presence people actually feel. A message that cuts through noise without needing more of it.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              It's the difference between being another voice in the feed… and being the person people think of when it actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE FRAMEWORK — Visual Architecture
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-4 text-center">
            The Framework
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-16 text-center">
            Three pillars. One architecture.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-500 text-2xl font-bold">01</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Identity Alignment</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Who you are and how you show up become the same thing. No performance. No persona. Just you — clear, consistent, and unmistakable.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-500 text-2xl font-bold">02</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Trust Signals</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                The proof points that make people believe you before they meet you. Built across LinkedIn, search, AI discovery, and referral — not manufactured, earned.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-500 text-2xl font-bold">03</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Authority Compounding</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Every piece of content, every conversation, every interaction reinforces who you are. It compounds. It scales. It becomes inevitable.
              </p>
            </div>
          </div>

          <div className="mt-24 max-w-3xl mx-auto">
            <img
              src="/images/joshua-walking-forward.webp"
              alt="Joshua B. Lee — moving forward"
              className="w-full h-64 rounded-2xl object-cover object-top border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          WHY NOW — The zero-click reality
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/25 text-sm uppercase tracking-widest font-semibold">
              Why this matters now
            </p>
            <p className="text-white/50">
              In a zero-click world, people aren't searching the way they used to.
            </p>
            <p className="text-white/50">
              They're being given answers. Curated. Filtered. Summarized.
            </p>
            <p className="text-white/50">
              Which means the question is no longer:
            </p>
            <p className="text-white/40 text-xl italic pl-6">
              "How do I get seen?"
            </p>
            <p className="text-white/50">
              It's:
            </p>
            <p className="text-white font-bold text-2xl sm:text-3xl pl-6">
              "How do I become the answer?"
            </p>
            <p className="text-white/50">
              And that doesn't happen through more content. It happens through how clearly your authority is built.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE REALITY — Most people won't adjust
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              Most people won't adjust.
            </p>
            <p className="text-white/50">
              They'll keep posting. Keep optimizing. Keep trying to stay visible. And slowly become interchangeable.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              The ones who do adjust become the ones people trust. The ones people refer. The ones that show up in conversations even when they're not in the room.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHERE THIS SHOWS UP
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/25 text-sm uppercase tracking-widest font-semibold">
              Where this shows up
            </p>
            <p className="text-white/50">
              This isn't theory.
            </p>
            <p className="text-white/50">
              This shows up in how you position yourself. How you communicate. How you show up on platforms like LinkedIn. How you get referenced in AI-driven environments. How people talk about you when you're not there.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — AEO structured data (kept for discoverability)
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-sm uppercase tracking-widest font-semibold mb-10">
            Questions people ask
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-white/5 rounded-xl bg-white/[0.02] hover:border-orange-500/10 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold list-none">
                  {faq.q}
                  <ChevronRight size={16} className="text-orange-500/40 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <p className="text-white/45 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
              </details>
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

      {/* ============================================
          CLOSE — Resonance, not pitch
          ============================================ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p className="text-white/50">
              If you're still playing the visibility game… this probably won't land.
            </p>
            <p className="text-white/70 text-xl font-medium">
              If you can feel the shift happening… you're already paying attention to the right thing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://standoutauthority.com/brand-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
            >
              Start at the Launchpad
              <ArrowRight size={18} />
            </a>
            <a
              href="https://app.youmanize.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/50 hover:text-white/70 no-underline text-sm transition-colors"
            >
              Get Your YOUmanize™ Score
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Schema for AEO — kept for AI discoverability */}
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
              url: 'https://joshuablee.com',
            },
            description: 'Authority Architecture is the discipline of designing the signals that allow founders to become the trusted answer in their category — across LinkedIn, search engines, AI systems, and digital trust signals.',
            serviceType: 'Authority Building & Personal Brand Architecture',
          }),
        }}
      />
    </>
  )
}
