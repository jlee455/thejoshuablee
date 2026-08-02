import { ArrowRight, ChevronRight, Play, Mic, Star, Users, PenTool, ExternalLink, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const podcastAppearances = [
  { show: 'DigitalMarketer Podcast', episode: 'AI Automation vs. Human Creativity' },
  { show: 'Win the Hour, Win the Day', episode: '3 Proven Strategies for LinkedIn' },
  { show: '7-Figure Millennials', episode: 'Featured Guest' },
  { show: 'The Next Level', episode: 'Failure Breeds Success' },
  { show: 'Nonprofit Architect Podcast', episode: 'How to Live with No Regrets' },
  { show: 'Titan Evolution Podcast', episode: 'How to Live with No Regrets' },
  { show: 'Limitless Leadership Lounge', episode: 'Authenticity Online & Off' },
  { show: 'The Authentic Path', episode: 'Success, Fatherhood & Authenticity' },
  { show: 'Level Up Business Podcast', episode: 'How to Build Authority on LinkedIn' },
  { show: 'Customer Wins', episode: 'Humanizing Your Brand for Real Impact' },
  { show: 'Inspired Insider', episode: 'Humanizing Your Brand: Secrets Unveiled' },
  { show: 'I See Rich People', episode: 'I Walked Away from $5M/month' },
  { show: 'Joseph Jaffe Is Not Famous', episode: 'The Dopamine Dealer of LinkedIn' },
]

const entrepreneurArticles = [
  { title: '3 Ways AI Is Quietly Replacing Your Brand Online', date: 'Jan 2025' },
  { title: '3 Ways to Get Your Voice Heard', date: '2024' },
  { title: '4 Simple Techniques to Hone your Message', date: '2024' },
  { title: 'A Stupidly Simple Method to Meet Millionaires and Influencers', date: '2023' },
  { title: 'The Content Marketing Arms Race', date: '2023' },
  { title: '3 Predictions to Capitalize on the Microsoft-LinkedIn Marriage', date: '2022' },
  { title: 'How Not to be the Madman Talking to Himself on LinkedIn', date: '2021' },
  { title: 'The 4 Pillars of Prosperity All Entrepreneurs Should Attend To', date: '2020' },
  { title: 'Make 2017 the Year Everything Changes', date: '2017' },
]

const stages = [
  'Social Media Week Austin', 'Titans Mastermind', 'Baby Bathwater Institute',
  'AdWorld', 'DigitalMarketer', 'Maverick1000',
  'Gartner', 'John Assaraf Events', 'Toastmasters',
  'TiE Global', 'Global Summits', 'LinkedInLocal', 'Podcast Movement',
]

const recommendations = [
  {
    name: 'Jane Lehman',
    text: 'He opened with perspective on Answer Engine Optimization (AEO) that reframed how I think about visibility. His authority on LinkedIn strategy is undeniable.',
  },
  {
    name: 'Stu Weintraub',
    text: 'In one 75-minute group coaching session he delivered more actionable insight on relationship building and lead generation than most people get in a full course.',
  },
]

export default function Speaking() {
  return (
    <>
      {/* ============================================
          HERO — Full-bleed cinematic opening
          ============================================ */}
      <section className="relative min-h-[70vh] flex items-end pb-20 pt-32">
        <div className="absolute inset-0">
          <img
            src="/images/joshua-stage-blue-lights.webp"
            alt="Joshua B. Lee on stage"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <p className="text-orange-500 text-sm uppercase tracking-widest font-semibold mb-4">
            Keynote Speaker
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Leading the New Trust Economy
          </h1>
          <p className="text-white/50 text-lg max-w-xl mb-8">
            Authority isn't built on stages. It's revealed there. Joshua brings clarity to what most audiences are still confused about — why visibility isn't working, and what replaces it.
          </p>
          <a
            href="mailto:assistant@standoutauthority.com?subject=Speaking%20Inquiry%20for%20Joshua%20B.%20Lee"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
          >
            Book Joshua to Speak
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ============================================
          STATS — Visual counter grid
          ============================================ */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {[
              { number: '50+', label: 'Stages' },
              { number: '500+', label: 'Podcasts' },
              { number: '200+', label: 'Publications' },
              { number: '72+', label: 'LinkedIn Recommendations' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/30 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1 flex justify-center">
              <div className="text-center">
                <img
                  src="/images/favikon-badge.webp"
                  alt="Favikon — #1 LinkedIn Growth Expert in the United States"
                  className="w-28 md:w-32 rounded-lg border border-white/10 mx-auto"
                />
                <p className="text-white/20 text-[10px] uppercase tracking-wider mt-2">#1 in the US</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TOPICS — Card-based with visual icons
          ============================================ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-4">
            Keynote Topics
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 max-w-2xl">
            Talks that shift how leaders think about trust, authority, and AI.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Star className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Becoming the Answer in an AI-Shaped World</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Why visibility is no longer the advantage. How trust is becoming the new currency of attention. And what it takes to become the person AI recommends.
              </p>
              <p className="text-white/30 text-sm">
                Best for: Leadership summits, marketing conferences, founder retreats
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Mic className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Human-First Leadership in the Age of AI</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                How leaders stay relevant, trusted, and connected — without becoming more robotic to keep up. A framework for leading with presence in a world optimizing for performance.
              </p>
              <p className="text-white/30 text-sm">
                Best for: Corporate leadership events, sales kickoffs, EO/YPO chapters
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Users className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Authority That Converts Without Ads</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                How positioning, trust signals, and presence drive demand before someone ever clicks. The architecture behind leaders who are chosen, not found.
              </p>
              <p className="text-white/30 text-sm">
                Best for: Digital marketing events, entrepreneur conferences, brand summits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STAGE GALLERY — Cinematic image strip
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="img-reveal rounded-2xl overflow-hidden">
              <img src="/images/joshua-stage-blue-lights.webp" alt="Joshua B. Lee keynote on stage" className="w-full h-72 md:h-96 object-cover object-top" />
            </div>
            <div className="img-reveal rounded-2xl overflow-hidden">
              <img src="/images/joshua-stage-digitalmarketer.webp" alt="Joshua speaking at DigitalMarketer" className="w-full h-72 md:h-96 object-cover object-top" />
            </div>
            <div className="img-reveal rounded-2xl overflow-hidden">
              <img src="/images/joshua-stage-pink-mic.webp" alt="Joshua speaking with mic" className="w-full h-72 md:h-96 object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          NOTABLE STAGES — Grid with dot accents
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-4 text-center">
            Notable Stages
          </p>
          <h2 className="text-2xl font-bold text-white mb-16 text-center">
            Where Joshua has delivered keynotes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-6">
            {stages.map((stage) => (
              <div key={stage} className="flex items-center gap-3 py-3 border-b border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
                <span className="text-white/50 text-sm font-medium">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT ORGANIZERS SAY — Testimonials
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-12 text-center">
            What People Say
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec) => (
              <div key={rec.name} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <Quote size={20} className="text-orange-500/30 mb-4" />
                <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                  "{rec.text}"
                </p>
                <p className="text-white/70 text-sm font-medium">{rec.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.linkedin.com/in/joshuablee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
            >
              See all 72 recommendations on LinkedIn
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          MEDIA — Podcasts & Articles
          ============================================ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-4">
            Media & Press
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 max-w-2xl">
            Featured across 200+ publications, podcasts, and interviews.
          </h2>

          {/* Podcasts */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-white/70 mb-6 flex items-center gap-2">
              <Mic size={18} className="text-orange-500" />
              Podcast Appearances
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {podcastAppearances.map((podcast) => (
                <div key={podcast.show} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                  <Play size={14} className="text-orange-500/60 shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm font-medium">{podcast.show}</p>
                    <p className="text-white/25 text-xs">{podcast.episode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <h3 className="text-lg font-semibold text-white/70 mb-6 flex items-center gap-2">
              <PenTool size={18} className="text-orange-500" />
              Published in Entrepreneur
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {entrepreneurArticles.map((article) => (
                <div key={article.title} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                  <ExternalLink size={14} className="text-orange-500/40 shrink-0 mt-1" />
                  <div>
                    <p className="text-white/60 text-sm font-medium leading-snug">{article.title}</p>
                    <p className="text-white/25 text-xs mt-1">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured In */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 justify-center text-xs text-white/15 uppercase tracking-wider">
            {['Forbes', 'HuffPost', 'USA Today', 'Inc.', 'Brainz Magazine', 'CNN iReport', 'SmallBiz Technology', 'ReadWrite', 'Small Business Trends'].map((name) => (
              <span key={name} className="hover:text-white/30 transition-colors">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING CTA — Book Joshua
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bring this to your stage.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether it's a keynote, panel, podcast, or private event — Joshua brings clarity that shifts how your audience thinks about trust, authority, and the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:assistant@standoutauthority.com?subject=Speaking%20Inquiry%20for%20Joshua%20B.%20Lee"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-pulse no-underline text-sm"
            >
              Book Joshua to Speak
              <ArrowRight size={18} />
            </a>
            <Link
              to="/work-with-me"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white/50 hover:text-white/70 border border-white/10 hover:border-white/20 rounded-xl no-underline text-sm transition-colors"
            >
              Other Ways to Work Together
              <ChevronRight size={16} />
            </Link>
          </div>
          <p className="text-white/25 text-xs mt-6">
            Contact Jennifer at assistant@standoutauthority.com
          </p>
        </div>
      </section>

      {/* Structured Data for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joshua B. Lee',
            alternateName: 'The YOUman Catalyst',
            jobTitle: 'Authority Architect | Keynote Speaker',
            description:
              'Joshua B. Lee is a keynote speaker and authority architect who helps leaders build trust in the AI era. Creator of Authority Architecture and YOUmanize™.',
            url: 'https://joshuablee.com/speaking',
            sameAs: [
              'https://www.linkedin.com/in/joshuablee',
              'https://standoutauthority.com',
              'https://youmanize.ai',
            ],
            performerIn: stages.map((name) => ({
              '@type': 'Event',
              name,
            })),
            author: entrepreneurArticles.map((a) => ({
              '@type': 'Article',
              name: a.title,
              publisher: { '@type': 'Organization', name: 'Entrepreneur Media' },
            })),
          }),
        }}
      />
    </>
  )
}
