import { ArrowRight, Mic, Podcast, Monitor, BookOpen, Quote, Pen, Video } from 'lucide-react'

const topics = [
  {
    title: 'Authority Architecture in the AI Discovery Economy',
    desc: 'How founders can structure their expertise so AI systems recognize, cite, and surface them as the trusted answer in their category.',
    tags: ['Keynote', 'Workshop'],
  },
  {
    title: 'From SEO to AEO: The Zero-Click World',
    desc: 'The shift from ranking pages to ranking people. Why Answer Engine Optimization is the new competitive advantage for founders and executives.',
    tags: ['Keynote', 'Breakout'],
  },
  {
    title: 'Be Felt First, Then Found',
    desc: 'Why human perspective is the signal AI cannot replicate — and how to structure your thinking so both humans and algorithms trust your authority.',
    tags: ['Keynote'],
  },
  {
    title: 'How to YOUmanize™ LinkedIn Content for AI',
    desc: 'Practical frameworks for creating LinkedIn content that trains AI systems to associate your name with your expertise. Includes the 3-2-1 Signal Framework and Answer Blocks.',
    tags: ['Workshop', 'Breakout'],
  },
  {
    title: 'The Authority Flywheel',
    desc: 'How intellectual territory, framework creation, content, conversations, and market recognition create a compounding cycle of authority.',
    tags: ['Keynote', 'Workshop'],
  },
]

const podcastAppearances = [
  { show: 'DigitalMarketer Podcast', episode: 'AI Automation vs. Human Creativity: Exploring the Divide with Joshua B Lee' },
  { show: 'Win the Hour, Win the Day with Kris Ward', episode: 'The 3 Proven Strategies That Will Leverage Your LinkedIn Connections Immediately' },
  { show: '7-Figure Millennials with Brandon Fong', episode: 'Featured Guest' },
  { show: 'The Next Level with Jeff Agostinelli', episode: 'Failure Breeds Success and Scaling Yourself with Your Company' },
  { show: 'Nonprofit Architect Podcast with Brenda McChesney', episode: 'How to Live your Life with No Regrets' },
  { show: 'Titan Evolution Podcast with Travis Johnson', episode: 'How to Live your Life with No Regrets' },
  { show: 'TheInboundSecret', episode: 'Joshua B Lee' },
  { show: 'Limitless Leadership Lounge', episode: 'Authenticity Online & Off' },
  { show: 'The Authentic Path with Mark de Grasse', episode: 'Success, Fatherhood & Authenticity' },
  { show: 'Level Up Business Podcast with JR Lay', episode: 'How to Build Authority on LinkedIn' },
  { show: 'Customer Wins', episode: 'Humanizing Your Brand for Real Impact' },
  { show: 'Inspired Insider — Top Agency Series', episode: 'Humanizing Your Brand: Secrets Unveiled' },
  { show: 'I See Rich People', episode: 'I Walked Away from $5 Million a Month — Here\'s Why' },
]

const videoInterviews = [
  { show: 'Masters & Founders', episode: 'Season 2, Episode 4 — Joshua B. Lee of StandOut Authority' },
  { show: 'Leadjet Webinar', episode: 'The Most Effective Way to Turn Conversations into Business Opportunities' },
  { show: 'Franchise Secrets', episode: 'The Value of Marketing on LinkedIn' },
  { show: 'The Virtual FA Series with Brad Johnson', episode: 'How Financial Advisors Can Leverage LinkedIn' },
  { show: 'Joseph Jaffe Is Not Famous', episode: 'The Dopamine Dealer of LinkedIn' },
  { show: 'Hard Fork Gaming', episode: 'Grow Your LinkedIn Following — Don\'t Forget The Human Connection' },
]

const stages = [
  'Social Media Week Austin',
  'Titans Mastermind',
  'Baby Bathwater Institute',
  'AdWorld',
  'DigitalMarketer',
  'Maverick1000',
  'Gartner (LinkedIn training — 150+ team members)',
  'John Assaraf Events',
]

const featuredIn = [
  'Entrepreneur',
  'Forbes',
  'HuffPost',
  'USA Today',
  'Inc.',
  'Brainz Magazine',
  'CNN iReport',
  'SmallBiz Technology',
  'ReadWrite',
  'Small Business Trends',
]

const entrepreneurArticles = [
  '3 Ways to Get Your Voice Heard',
  '4 Simple Techniques to Hone your Message',
  '3 Startups Attempting to Capitalize on 2 Very Big Trends',
  'A Stupidly Simple Method to Meet Millionaires and Influencers',
  'Make 2017 the Year Everything Changes',
  'The Content Marketing Arms Race — to Participate or to Not Participate?',
  '3 Predictions to Capitalize on the Microsoft-LinkedIn Marriage',
  'How Not to be the Madman Talking to Himself on LinkedIn',
  'The 4 Pillars of Prosperity All Entrepreneurs Should Attend To',
]

const publications = [
  { title: '11 Startup Events You Should Attend', outlet: 'HuffPost' },
  { title: '3 Missing Pieces Blocking Your Company from 10x Growth', outlet: 'Forbes' },
  { title: '9 (Polite) Ways to Reject a Customer', outlet: 'Inc.' },
  { title: '5 Great Website Backup Services', outlet: 'SmallBiz Technology' },
  { title: '9 Startup Hires Who Might Prove Unexpectedly Valuable', outlet: 'ReadWrite' },
  { title: 'Joshua B. Lee Responds to Growing Online Education Trend', outlet: 'CNN iReport' },
  { title: '8 Business Expenses You Should Stop Paying For', outlet: 'Small Business Trends' },
  { title: '15 Things Startup Founders Must Master', outlet: 'Inc.' },
]

const recommendations = [
  {
    name: 'Jane Lehman',
    text: 'I recently learned from Joshua B. Lee at the LinkedIn Summit. He opened with perspective on Answer Engine Optimization (AEO) that reframed how I think about visibility. His authority on LinkedIn strategy is undeniable.',
  },
  {
    name: 'Stu Weintraub',
    text: 'Joshua is clearly the go-to expert for business owners who are entrepreneurs. In one 75-minute group coaching session he delivered more actionable insight on relationship building and lead generation than most people get in a full course.',
  },
]

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Speaking, Media &amp; Authority Proof
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Authority signals across stages, podcasts, and publications.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Keynotes, podcast appearances, published articles, and video interviews
            that reinforce Authority Architecture across the discovery ecosystem.
          </p>
          <img
            src="/images/joshua-speaking.jpg"
            alt="Joshua B. Lee — keynote speaker on Authority Architecture and AEO"
            className="w-48 h-56 rounded-2xl object-cover object-top border border-white/10 mx-auto"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: Mic, label: 'Stages', value: '8+' },
              { icon: Podcast, label: 'Podcasts', value: '13+' },
              { icon: Video, label: 'Video Interviews', value: '6+' },
              { icon: BookOpen, label: 'Publications', value: '10+' },
              { icon: Pen, label: 'Articles', value: '17+' },
              { icon: Quote, label: 'Recommendations', value: '72' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon size={22} className="text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{item.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-8">
            Featured In &amp; Published By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {featuredIn.map((name) => (
              <span key={name} className="text-lg font-bold text-white/20 hover:text-white/40 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Mic size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">Speaking Topics</h2>
          </div>
          <div className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.title} className="card-glass rounded-xl p-6 hover:border-orange-500/20 transition-all">
                <div className="flex flex-wrap gap-2 mb-3">
                  {topic.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-bold mb-2">{topic.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages & Speaking Venues */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Monitor size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">Stages &amp; Speaking Venues</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {stages.map((name) => (
              <div key={name} className="card-glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                <span className="text-white/70 text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Appearances */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Podcast size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">Podcast Appearances</h2>
          </div>
          <div className="space-y-3">
            {podcastAppearances.map((item) => (
              <div key={item.show} className="card-glass rounded-xl p-5 hover:border-orange-500/20 transition-all">
                <h3 className="text-white font-semibold text-sm">{item.show}</h3>
                <p className="text-white/40 text-xs mt-1">{item.episode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Interviews */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Video size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">Video Interviews &amp; Webinars</h2>
          </div>
          <div className="space-y-3">
            {videoInterviews.map((item) => (
              <div key={item.show} className="card-glass rounded-xl p-5 hover:border-orange-500/20 transition-all">
                <h3 className="text-white font-semibold text-sm">{item.show}</h3>
                <p className="text-white/40 text-xs mt-1">{item.episode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUmanize™ Your Brand Podcast */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="card-glass rounded-2xl p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Podcast size={28} className="text-orange-500" />
                  <h2 className="text-2xl font-bold text-white">YOUmanize™ Your Brand</h2>
                </div>
                <p className="text-white/60 leading-relaxed mb-4">
                  Co-hosted with Rachel B. Lee. Human-first marketing strategies, brand storytelling,
                  and emotional intelligence in leadership and business.
                </p>
                <p className="text-white/40 text-sm mb-6">
                  In the AI era, brand trust is the only currency that matters and growth
                  without authenticity doesn't last.
                </p>
                <a
                  href="https://youmanize.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
                >
                  Listen to the podcast
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Podcast size={32} className="text-orange-500" />
                </div>
                <p className="text-white font-semibold">YOUmanize™ Your Brand</p>
                <p className="text-white/40 text-sm mt-1">Available on all platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Published Articles */}
      <section className="py-24 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">Published Articles &amp; Features</h2>
          </div>

          {/* Entrepreneur contributor work */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-1">Entrepreneur Media</h3>
            <p className="text-white/40 text-sm mb-4">Guest Writer — April 2015 to March 2024 (9 years)</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {entrepreneurArticles.map((title) => (
                <div key={title} className="card-glass rounded-lg p-4 flex items-start gap-3">
                  <Pen size={14} className="text-orange-500 mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other publications */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Other Publications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {publications.map((pub) => (
                <div key={pub.title} className="card-glass rounded-lg p-4">
                  <p className="text-white/60 text-sm">{pub.title}</p>
                  <p className="text-orange-500/60 text-xs mt-1">{pub.outlet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Quote size={24} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-white">What People Say</h2>
          </div>
          <p className="text-white/40 text-sm mb-8">72 recommendations on LinkedIn</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {recommendations.map((rec) => (
              <div key={rec.name} className="card-glass rounded-xl p-6">
                <Quote size={20} className="text-orange-500/30 mb-3" />
                <p className="text-white/60 text-sm leading-relaxed mb-4 italic">"{rec.text}"</p>
                <p className="text-white font-semibold text-sm">{rec.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/joshuablee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
            >
              See all 72 recommendations on LinkedIn
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Joshua for your event.
          </h2>
          <p className="text-white/50 mb-4">
            Keynotes and workshops on Authority Architecture, AEO, LinkedIn authority,
            and human-first positioning in the AI era.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Contact: josh@standoutauthority.com
          </p>
          <a
            href="https://standoutauthority.com/services/service-application/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Get In Touch
            <ArrowRight size={18} />
          </a>
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
            jobTitle: 'Authority Architect',
            description: 'Joshua B. Lee is an Authority Architect, keynote speaker, podcast guest, and published author in Entrepreneur, Forbes, HuffPost, USA Today, and Inc. He has spoken at Social Media Week Austin, AdWorld, DigitalMarketer, Maverick1000, and other major events.',
            performerIn: stages.map((name) => ({
              '@type': 'Event',
              name: name,
            })),
            author: [
              ...entrepreneurArticles.map((title) => ({
                '@type': 'Article',
                name: title,
                publisher: { '@type': 'Organization', name: 'Entrepreneur Media' },
              })),
              ...publications.map((pub) => ({
                '@type': 'Article',
                name: pub.title,
                publisher: { '@type': 'Organization', name: pub.outlet },
              })),
            ],
          }),
        }}
      />
    </>
  )
}
