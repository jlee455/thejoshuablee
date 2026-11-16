import { speakingFaqs } from '../data/speakingFaqs'
import SpeakerPlanner from '../components/SpeakerPlanner'
import { ArrowRight, ChevronRight, Play, Mic, Star, Users, PenTool, ExternalLink, Quote } from 'lucide-react'
import { publications } from '../data/publications'
import { appearances } from '../data/appearances'
import { recommendations as linkedinRecommendations } from '../data/recommendations'
import { articleIndex } from '../data/articleIndex'
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
      <section className="ed-speaker-hero">
        <div className="ed-wrap ed-speaker-opening">
          <div className="ed-speaker-intro">
            <p className="ed-kicker">Joshua B. Lee / Keynote speaker</p>
            <h1 className="ed-title">Move the room.<br/><em>Make it human.</em></h1>
            <p className="ed-lead">Keynotes on human connection, LinkedIn authority, and leadership in the age of AI. Built around your audience.</p>
            <div className="ed-actions"><a className="ed-button light" href="#planner">Book Joshua <span aria-hidden="true">↗</span></a><a className="ed-link" href="#reel">Watch Joshua speak <span aria-hidden="true">▷</span></a></div>
            <a className="ed-link ed-speaker-kit-link" href="/joshua-b-lee-speaker-kit.pdf" download>Download the speaker kit (PDF) ↓</a>
            <p className="ed-speaker-location">Based in Austin, Texas · In-person and virtual inquiries worldwide</p>
          </div>
          <figure className="ed-speaker-hero-photo"><img src="/images/joshua-hcl-raised-hand.jpg" alt="Joshua B. Lee speaking into a microphone with his hand raised at High Capacity Leaders" width="826" height="1234" fetchPriority="high"/><figcaption>In the room at High Capacity Leaders.</figcaption></figure>
        </div>
      </section>

      <section id="reel" className="ed-section"><div className="ed-wrap"><div className="ed-section-top"><div><p className="ed-kicker">See Joshua in the room</p><h2 className="ed-heading">Watch the <em>speaker reel.</em></h2></div><a className="ed-link" href="#planner">Discuss your event ↗</a></div><video className="ed-reel" controls playsInline preload="none" poster="/video/sizzle-poster.webp" aria-label="Joshua B. Lee speaker reel with sound"><source src="/video/sizzle-reel.mp4" type="video/mp4"/></video><p className="ed-small">Press play for sound. Captions are included in the original footage.</p></div></section>
      <nav className="ed-wrap ed-speaker-jumps" aria-label="Speaking page sections"><a href="#topics">Keynote topics ↓</a><a href="#room">In the room ↓</a><a href="#planner">Plan your event ↓</a><a href="#media-kit">Speaker kit ↓</a></nav>
      <section className="ed-section ed-room-story" id="room">
        <div className="ed-wrap">
          <div className="ed-section-top"><div><p className="ed-kicker">The experience</p><h2 className="ed-heading">Ideas that land.<br/><em>A conversation that stays.</em></h2></div><p className="ed-copy ed-room-summary">Your audience brings real questions. Joshua brings an entrepreneur’s experience and a human perspective on how we lead, build trust, and show up for each other.</p></div>
          <figure className="ed-room-wide"><img src="/images/joshua-hcl-onstage.jpg" alt="Joshua speaking at High Capacity Leaders with event attendees behind him" width="1854" height="1232" loading="lazy"/><figcaption className="ed-caption">Joshua B. Lee at High Capacity Leaders.</figcaption></figure>
          <div className="ed-room-details">
            <figure className="ed-room-portrait"><img src="/images/joshua-hcl-conversation.jpg" alt="Joshua holding a microphone and addressing the room at High Capacity Leaders" width="824" height="1234" loading="lazy"/></figure>
            <div className="ed-room-takeaways"><p className="ed-kicker">What we can build your session around</p><h3 className="ed-heading">Something to think about.<br/><em>Something to do next.</em></h3>
              <ul><li><strong>Make expertise easier to understand.</strong><span>Connect what your people know with how they communicate it.</span></li><li><strong>Keep people at the center of AI.</strong><span>Explore what trust, judgment, and human connection mean for your team.</span></li><li><strong>Turn visibility into relationships.</strong><span>Rethink how your leaders show up on LinkedIn and in the conversations that matter.</span></li></ul>
              <a className="ed-link" href="#planner">Tell us what your audience needs ↗</a>
            </div>
          </div>
          <figure className="ed-room-wide ed-room-audience"><img src="/images/joshua-hcl-audience.jpg" alt="An audience view of Joshua B. Lee speaking on the High Capacity Leaders stage" width="1852" height="1236" loading="lazy"/><figcaption className="ed-caption">A perspective from the audience. High Capacity Leaders.</figcaption></figure>
        </div>
      </section>


      <SpeakerPlanner/>
      <section className="ed-section ed-speaker-resources" id="media-kit"><div className="ed-wrap ed-split">
        <div><p className="ed-kicker">For your event team</p><h2 className="ed-heading">The story.<br/><em>The details. The entrance.</em></h2><p className="ed-copy">Everything to start the conversation: Joshua’s bio, keynote themes, event photography, session formats, and booking details in one speaker kit. All bookings are coordinated by Jennifer at assistant@standoutauthority.com.</p><div className="ed-kit"><a className="ed-button" href="/joshua-b-lee-speaker-kit.pdf" download>Download speaker kit · PDF ↓</a><a className="ed-link" href="/images/joshua-hero.jpg" download>Download portrait ↓</a><a className="ed-link" href="/speaker-kit.txt" download>Copyable bio & topics ↓</a></div></div>
        <div className="ed-walk-up" id="walk-up"><p className="ed-kicker">The walk-up track</p><h3>Give It to Ya</h3><p className="ed-copy">Joshua’s choice for taking the stage. Press play for a preview of the entrance.</p><audio controls preload="none" aria-label="Give It to Ya, Joshua B. Lee’s walk-up track"><source src="/audio/joshua-walk-up-give-it-to-ya.mp3" type="audio/mpeg"/><a href="/audio/joshua-walk-up-give-it-to-ya.mp3">Download the walk-up track</a></audio><div className="ed-track-footer"><span>1:40 · MP3</span><a className="ed-link" href="/audio/joshua-walk-up-give-it-to-ya.mp3" download>Download track ↓</a></div><p className="ed-small">For event teams: coordinate the start cue and fade with Jennifer before the event.</p></div>
      </div></section>

      {/* ============================================
          STATS — Visual counter grid
          ============================================ */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Headline figures are Joshua's actual career totals. The line
                beneath states how much of it is linked and checkable right now,
                so the two numbers never read as a contradiction. */}
            {[
              { number: '50+', label: 'Stages' },
              { number: '100+', label: 'Podcasts' },
              { number: '200+', label: 'Publications' },
              { number: String(articleIndex.length), label: 'Articles Published' },
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
                  alt="Favikon badge issued March 2026: #1 LinkedIn Growth Expert in the United States"
                  className="w-28 md:w-32 rounded-lg border border-white/10 mx-auto"
                />
                <p className="text-white/20 text-[10px] uppercase tracking-wider mt-2">
                  #1 in the US &middot; badge issued Mar 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TOPICS — Card-based with visual icons
          ============================================ */}
      <section className="py-24" id="topics">
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
              href="/recommendations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm no-underline"
            >
              Read all 73 named recommendations
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
            Featured across {appearances.length} documented podcast appearances and published bylines — every one linked on the evidence page.
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
            <p className="text-white/25 text-xs mt-8 max-w-2xl">
              Career totals. What&rsquo;s linked and checkable right now:{' '}
              <Link to="/evidence" className="text-orange-400/70 hover:text-orange-300 no-underline">
                {appearances.length} podcast appearances, {publications.length} surviving
                publication links, and {linkedinRecommendations.length} named recommendations
              </Link>
              . Older interview and article URLs rot; the record here is what still resolves.
            </p>
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
              href="#planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-pulse no-underline text-sm"
            >
              Check speaking availability
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            '@id': 'https://joshuablee.com/speaking/#reel',
            name: 'Joshua B. Lee — Keynote Speaker Sizzle Reel',
            description:
              'Joshua B. Lee speaking on stage. The reel opens on "AI is already answering", moves through 25+ years in digital marketing, lands on "Humanity earns trust", and closes on "Be the answer." Joshua is the founder of StandOut Authority and co-creator of YOUmanize.',
            thumbnailUrl: 'https://joshuablee.com/video/sizzle-poster.webp',
            contentUrl: 'https://joshuablee.com/video/sizzle-reel.mp4',
            uploadDate: '2026-08-02T00:00:00-05:00',
            duration: 'PT17S',
            inLanguage: 'en-US',
            isFamilyFriendly: true,
            creator: { '@type': 'Person', '@id': 'https://joshuablee.com/#person' },
            about: { '@id': 'https://joshuablee.com/#person' },
          }),
        }}
      />
      <section className="ed-section" id="planner-questions"><div className="ed-wrap"><p className="ed-kicker">Before you book</p><h2 className="ed-heading">Answers for <em>event organizers.</em></h2><div className="ed-faq">{speakingFaqs.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
    </>
  )
}
