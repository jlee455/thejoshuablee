import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, TrendingUp, Globe } from 'lucide-react'

const timeline = [
  { year: '1998', title: 'AT&T', role: 'Business Account Executive', desc: 'Started in enterprise sales, learning how trust drives deals.' },
  { year: '2002', title: 'Net Visibility', role: 'Network Director', desc: 'Early digital discovery — SEO, ad networks, and the first wave of online visibility.' },
  { year: '2005', title: 'Adfirmative / LF Media', role: 'CEO & Founder', desc: 'Built and scaled an ad network managing $500M+ in ad spend across 30 trillion impressions.' },
  { year: '2013', title: 'Monstapreneur', role: 'Founder', desc: 'Created a platform for entrepreneurs to grow through training, coaching, and community.' },
  { year: '2014', title: 'StandOut Authority', role: 'Founder', desc: 'Launched what would become the authority architecture practice. Became known as The Dopamine Dealer of LinkedIn.' },
  { year: '2025', title: 'YOUmanize™', role: 'Co-Founder', desc: 'Built a Human-First authority platform for the AI era alongside Rachel B. Lee.' },
]

const milestones = [
  { icon: TrendingUp, stat: '$1B+', label: 'Ad Spend Managed' },
  { icon: Users, stat: '50+', label: 'Founders Coached' },
  { icon: Award, stat: '25+', label: 'Years Building' },
  { icon: Globe, stat: '9+', label: 'Years Writing for Entrepreneur' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
                About Joshua B. Lee
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                From Dopamine Dealer to{' '}
                <span className="gradient-text-orange">YOUman Catalyst.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                I was once known as The Dopamine Dealer for mastering attention on LinkedIn.
                Attention was never the end goal. Authority was. Trust was. Demand was.
              </p>
            </div>

            {/* About Photo */}
            <div className="flex justify-center">
              <img
                src="/images/joshua-about.jpg"
                alt="Joshua B. Lee working at his desk"
                className="w-72 h-80 rounded-2xl object-cover object-top border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon size={24} className="text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-white mb-1">{item.stat}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">The Pattern I Couldn't Unsee</h2>
          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              Over a 25+ year career, I built, scaled, and exited multiple companies across several
              industries while managing more than <span className="text-white font-semibold">$1B in advertising spend</span>.
            </p>
            <p>
              Throughout that journey I observed a recurring pattern. Some of the most capable founders
              remained largely invisible in the market. They had decades of experience, proprietary
              frameworks, and proven client outcomes.
            </p>
            <p>
              Yet competitors with less depth often became widely recognized experts simply because
              they understood how to position their thinking.
            </p>
            <p className="text-xl text-orange-400 font-semibold py-4 border-l-2 border-orange-500 pl-6">
              Expertise and authority are not the same thing. Expertise is what you know.
              Authority is whether the market understands what you know.
            </p>
            <p>
              The issue many founders face is not visibility. It is architecture. Their expertise exists,
              but it is not structured in a way the market can easily recognize.
            </p>
            <p>
              I began developing frameworks that helped founders organize their thinking, clarify
              their intellectual territory, and translate their experience into recognizable authority signals.
              Over time, this work evolved into the concept of{' '}
              <Link to="/authority-architecture" className="text-orange-400 hover:text-orange-300 no-underline font-medium">
                Authority Architecture
              </Link>.
            </p>
            <p>
              Today, alongside my wife and partner{' '}
              <span className="text-white font-medium">Rachel B. Lee</span>, we run{' '}
              <a href="https://standoutauthority.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 no-underline font-medium">
                StandOut Authority
              </a>{' '}
              and{' '}
              <a href="https://youmanize.ai" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 no-underline font-medium">
                YOUmanize™
              </a>{' '}
              — because too many founders with real depth are still invisible to the market that needs them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Journey</h2>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
                  <div className="w-px flex-1 bg-white/10" />
                </div>
                <div className="pb-8">
                  <span className="text-xs text-orange-500 font-mono">{item.year}</span>
                  <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-white/40">{item.role}</p>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">The Brand Ladder</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Movement', value: 'YOUmanize™' },
              { label: 'Identity', value: 'The YOUman Catalyst' },
              { label: 'Discipline', value: 'Authority Architecture' },
              { label: 'Engine', value: 'LinkedIn' },
              { label: 'Outcome', value: 'AEO' },
            ].map((item) => (
              <div key={item.label} className="card-glass rounded-xl p-5">
                <p className="text-xs text-orange-500 uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUmanize™ Score CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="card-glass rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Discover Your YOUmanize™ Score
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              7 trust signals. One honest score. See exactly where your authority alignment is strong, where it's leaking, and what to do next.
            </p>
            <a
              href="https://app.youmanize.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all no-underline"
            >
              Reveal My YOUmanize™ Score
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            In an AI-driven world, human perspective is the signal AI cannot replicate.
          </h2>
          <a
            href="https://standoutauthority.com/services/service-application/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline mt-4"
          >
            Work With Me
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joshua B. Lee',
            alternateName: 'The YOUman Catalyst',
            jobTitle: 'Authority Architect',
            description: 'Joshua B. Lee is the creator of Authority Architecture, helping methodology-driven founders become the trusted answer in their category. With 25+ years of experience and $1B+ in managed ad spend, he helps founders structure their expertise into recognizable authority signals.',
            url: 'https://joshuablee.com/about',
            sameAs: [
              'https://www.linkedin.com/in/joshuablee',
              'https://standoutauthority.com',
              'https://youmanize.ai',
            ],
          }),
        }}
      />
    </>
  )
}
