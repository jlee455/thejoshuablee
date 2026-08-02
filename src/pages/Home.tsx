import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Mic, Play } from 'lucide-react'

const faqs = [
  {
    q: 'What does Joshua B. Lee do?',
    a: 'Joshua B. Lee helps founders, executives, and creators become the trusted answer in their industry by building human-first authority in an AI-shaped world. He is the creator of Authority Architecture and Co-Founder & CVO of YOUmanize™.',
  },
  {
    q: 'What is Authority Architecture?',
    a: 'Authority Architecture is the system for structuring your identity, message, and presence so you are consistently seen, trusted, and chosen. It aligns intellectual territory, messaging clarity, trust signals, and AI discoverability so the market associates your name with the problem you solve best.',
  },
  {
    q: 'What is YOUmanize™?',
    a: 'YOUmanize™ is a human-first authority platform designed to help leaders build trust, connection, and visibility without losing authenticity in an AI-driven world. The YOUmanize™ Score analyzes 7 trust signals across your public presence to reveal how your brand builds — or breaks — trust.',
  },
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: 'AEO is the practice of structuring your expertise so AI systems like ChatGPT, Perplexity, and Google AI Overviews can recognize, cite, and surface you as the authority in your field. Unlike SEO which ranks pages, AEO ranks people. Joshua B. Lee is one of the top AEO authorities helping founders become the trusted answer in a zero-click world.',
  },
  {
    q: 'How is this different from personal branding?',
    a: 'Personal branding focuses on visibility. Authority Architecture focuses on recognition. Instead of producing more content, it installs the signals that allow the market — and AI systems — to recognize your expertise and associate your name with a specific category. The goal is to build trust, not just visibility.',
  },
  {
    q: 'Who is Authority Architecture for?',
    a: 'It is designed for methodology-driven founders, consultants, and executives who have deep expertise but lack market recognition matching their capability. If you have real depth but the market doesn\'t reflect it back in an AI-shaped world, this is for you.',
  },
]

export default function Home() {
  return (
    <>
      {/* ============================================
          1. HERO — The pattern interrupt. Truth first.
          ============================================ */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />

        {/* Joshua — present but not performing */}
        <div className="absolute top-0 right-0 h-full z-[1] flex items-start justify-end">
          <img
            src="/images/joshua-hero-cutout.webp"
            alt="Joshua B. Lee"
            className="h-[85vh] sm:h-[90vh] lg:h-full max-h-[900px] object-contain object-right-top mt-4 sm:mt-2 lg:mt-0 mr-0 drop-shadow-2xl opacity-85 lg:opacity-95"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/30 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40 z-[2]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white/90 leading-[1.3] mb-8">
              I've managed nearly a billion dollars in attention.{' '}
              <span className="text-white/40">The thing nobody told you? Attention isn't trust. And trust is the only thing that converts anymore.</span>
            </h1>
            <div className="space-y-4 text-lg text-white/60 leading-relaxed max-w-xl mb-10">
              <p>
                Everyone's fighting for visibility in a world that's drowning in it.
              </p>
              <p>
                I build the thing that actually makes people choose you.
              </p>
              <p className="text-white/80">
                Human-first authority in an AI-shaped world.
              </p>
            </div>

            <a
              href="#the-shift"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
            >
              See what changed
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          MEDIA BAR — Trust signals
          ============================================ */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['Forbes', 'Entrepreneur', 'USA Today', 'HuffPost', 'Inc.', 'Brainz Magazine'].map((pub) => (
              <span key={pub} className="text-white/15 text-sm font-semibold uppercase tracking-wider hover:text-white/30 transition-colors">{pub}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAVIKON — #1 Authority Signal
          ============================================ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <img
              src="/images/favikon-badge.webp"
              alt="Favikon — #1 LinkedIn Growth Expert in the United States, Ranked #5 Worldwide"
              className="w-36 sm:w-40 rounded-xl border border-white/10 shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-lg sm:text-xl mb-2">
                #1 LinkedIn Growth Expert in the United States
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Ranked #5 worldwide by{' '}
                <a
                  href="https://www.favikon.com/blog/top-linkedin-experts-worldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline decoration-white/20 underline-offset-2 hover:text-white/80 transition-colors"
                >
                  Favikon
                </a>{' '}
                across all LinkedIn growth creators (May 2026). Not for content volume. For authority that compounds — the kind that makes AI systems, search engines, and real people choose you as the answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. THE LIE — What the world gets wrong
          ============================================ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/25 text-sm uppercase tracking-widest font-semibold">
              You already know this
            </p>
            <p className="text-2xl sm:text-3xl text-white font-bold leading-snug">
              The game changed. Most people haven't noticed yet.
            </p>
            <p className="text-white/50">
              For years, the playbook was simple. Get seen. More content. More reach. More visibility. If people knew your name, opportunities followed.
            </p>
            <p className="text-white/50">
              That worked. Until AI made visibility free. Now everyone can look polished. Everyone can publish at scale. Everyone can sound like an expert in thirty seconds with the right prompt. And the result is a world where attention is worthless — because nobody trusts what they see anymore.
            </p>
            <p className="text-white/50">
              Most people are still playing the old game. More posts. More impressions. More reach. Optimizing for a metric that stopped mattering.
            </p>
            <p className="text-white/70 text-xl font-medium">
              The people who win now aren't the loudest. They're the most trusted. And that requires a completely different architecture.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          3. THE MOMENT — Start in the room
          ============================================ */}
      <section id="the-shift" className="py-28 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/30 text-sm uppercase tracking-widest font-semibold mb-8">
                My story
              </p>
              <div className="space-y-6 text-white/55 leading-relaxed text-lg">
                <p className="text-white/80 text-xl">
                  I've been seeing around corners for 25 years.
                </p>
                <p>
                  I saw social before it was a channel. Mobile before it was a strategy. AI before it was a headline. I built companies around every major shift in digital marketing — and I was usually three years early.
                </p>
                <p>
                  That's the gift and the curse of being a first mover. You see what's coming before anyone else. You build for it. You scale it. And somewhere along the way, you realize you've been so focused on seeing the future that you forgot to be present in your own life.
                </p>
                <p className="text-white/70 text-xl italic">
                  I could predict every market shift. I just couldn't see that the thing breaking was me.
                </p>
                <p>
                  So I did what most people won't. I stopped. I rebuilt. Not the business — myself. And when I finally integrated who I was with how I showed up, everything changed. The vision got sharper. The leadership got deeper. And I started seeing the biggest shift of all: trust replacing attention as the real currency.
                </p>
              </div>
            </div>

            {/* Photos matched to emotional moments */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/joshua-childhood-dad.webp"
                  alt="Young Joshua with his father"
                  className="w-full rounded-2xl object-cover h-48 border border-white/10"
                />
                <img
                  src="/images/joshua-rachel-couch.webp"
                  alt="Joshua and Rachel — real life"
                  className="w-full rounded-2xl object-cover h-64 border border-white/10"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/images/joshua-reflective-hat.webp"
                  alt="Joshua B. Lee — reflective"
                  className="w-full rounded-2xl object-cover h-64 border border-white/10"
                />
                <img
                  src="/images/joshua-family.webp"
                  alt="Joshua with family"
                  className="w-full rounded-2xl object-cover h-48 border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          4. THE REALIZATION — What actually changed
          ============================================ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-orange-500 text-sm uppercase tracking-widest font-semibold">
              The shift
            </p>
            <p className="text-2xl sm:text-3xl text-white font-bold leading-snug">
              Balance is bullshit.
            </p>
            <p className="text-white/50">
              That's not a tagline. That's what I learned living by the wrong set of rules.
            </p>
            <p className="text-white/50">
              I'd spent my whole career helping other people get visible. And then I looked around and realized — the most visible people weren't the most trusted. They were just the loudest. The founders with real depth were invisible. The ones performing expertise were everywhere.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500 pl-6">
              Integration changed everything. When I stopped separating who I was from how I showed up — in business, in leadership, in life — the vision got clearer than it had ever been. And what I saw was this: the entire game was about to flip from attention to trust.
            </p>
            <p className="text-white/50">
              That's not a prediction anymore. It's happening right now. AI made visibility free. Which means the only thing left that's scarce — the only thing that actually converts — is trust. And most people have no architecture for building it.
            </p>
          </div>

          {/* Book — naturally placed after the realization */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <img
              src="/images/balance-is-bullshit-cover.webp"
              alt="Balance is Bullsh*t by Joshua B. Lee"
              className="w-48 rounded-xl shadow-xl border border-white/10 shrink-0"
            />
            <div>
              <p className="text-white font-bold text-lg mb-2">Balance is Bullsh*t</p>
              <p className="text-orange-400 text-sm font-medium mb-3">How to Successfully Integrate Work &amp; Life</p>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                "The most comprehensive training I have ever seen on how to create a vision for every aspect of your life and business." — <span className="text-white/70">Hal Elrod, Author of The Miracle Morning</span>
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
              >
                Learn more
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          5. THE MOVEMENT — YOUmanize™ as cultural response
          ============================================ */}
      <section className="py-28 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold">
              The movement
            </p>
            <p className="text-2xl sm:text-3xl text-white font-bold leading-snug">
              AI has made noise cheap. Trust is now the only thing that's expensive.
            </p>
            <p className="text-white/50">
              Everyone can publish. Everyone can automate. Everyone can look like an expert in thirty seconds with the right prompt. And the result is a world where people don't trust brands, they don't trust bios, and they barely trust what they see anymore.
            </p>
            <p className="text-white/50">
              Authority is no longer what you say. It's what people feel. And most people — most leaders, most founders, most experts with real depth — are being drowned out by people who've learned to perform trust without actually building it.
            </p>
            <p className="text-white/70 text-xl font-medium">
              That's why YOUmanize™ exists. Not as a branding tool. As a response to what this culture has done to identity, trust, leadership, and connection.
            </p>
            <p className="text-white/50">
              The YOUmanize™ Score measures 7 trust signals across your public presence. Not how you hope the world sees you. Not how your bio says they should. How they <em>actually</em> do.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.youmanize.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all no-underline text-sm"
            >
              Get Your Free YOUmanize™ Score
              <ArrowRight size={18} />
            </a>
            <a
              href="https://youmanize.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/50 hover:text-white/70 no-underline text-sm transition-colors"
            >
              Learn about YOUmanize™
              <ChevronRight size={16} />
            </a>
          </div>
          <p className="text-white/20 text-xs mt-6">
            Co-Founded with Rachel B. Lee &mdash; Currently in MVP
          </p>
        </div>
      </section>

      {/* ============================================
          6. THE MIRROR — "Is this you?"
          ============================================ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-8">
            You'll know if this is you
          </p>
          <div className="space-y-6">
            {[
              "You've built something that works. But it doesn't feel right anymore.",
              "You're visible — but not fully understood. People see the title. They don't see you.",
              "Your reputation is fragmented. You've done the work, but the market doesn't reflect it back clearly.",
              "You're tired of performing. You're ready to be trusted.",
              "You know AI is changing how people discover expertise. And you refuse to become more robotic to keep up.",
              "You don't need another content strategy. You need your truth structured so the right people can finally find it.",
            ].map((line) => (
              <p key={line} className="text-xl text-white/60 leading-relaxed pl-6 border-l border-white/10 hover:border-orange-500/40 transition-colors">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-12 text-white/30 text-sm">
            If that hit — you don't need me to explain what this is. You need to see what's possible.
          </p>
        </div>
      </section>

      {/* ============================================
          7. PROOF — Reframed through meaning
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/15 text-xs uppercase tracking-widest font-semibold mb-6">In the Arena</p>
          {/* Photos first */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <img src="/images/joshua-stage-digitalmarketer.webp" alt="Joshua speaking at DigitalMarketer" className="w-full h-48 md:h-56 object-cover object-top rounded-xl border border-white/10" />
            <img src="/images/joshua-present-day.webp" alt="Joshua B. Lee — present day" className="w-full h-48 md:h-56 object-cover object-top rounded-xl border border-white/10" />
            <img src="/images/joshua-speaking-event.webp" alt="Joshua at speaking event" className="w-full h-48 md:h-56 object-cover object-top rounded-xl border border-white/10" />
            <img src="/images/joshua-rachel-working.webp" alt="Joshua and Rachel working together" className="w-full h-48 md:h-56 object-cover object-top rounded-xl border border-white/10" />
          </div>

          {/* Proof reframed through meaning */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-white/50 leading-relaxed">
                <span className="text-white font-semibold">25 years as a marketing visionary.</span>{' '}
                First mover in social, mobile, AI. I don't follow trends — I see them three years before they arrive and build companies around them.
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-white/50 leading-relaxed">
                <span className="text-white font-semibold">$1B+ in ad spend managed.</span>{' '}
                Which means I know exactly how attention works at scale — and why it stopped being enough.
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-white/50 leading-relaxed">
                <span className="text-white font-semibold">Co-Founder &amp; CVO, YOUmanize™.</span>{' '}
                Building the platform that measures what actually matters — how the world perceives your trust, not just your reach.
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-white/50 leading-relaxed">
                <span className="text-white font-semibold">500+ podcasts. 50+ stages. 500+ founders.</span>{' '}
                Keynoting the new trust economy — because the shift from attention to trust isn't coming. It's here. And the rooms that get it early win.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/20 uppercase tracking-wider">
            <span>Forbes</span>
            <span>Entrepreneur</span>
            <span>USA Today</span>
            <span>HuffPost</span>
            <span>Social Media Week</span>
            <span>Titans Mastermind</span>
            <span>DigitalMarketer</span>
            <span>Gartner</span>
            <span>AdWorld</span>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS — Social proof
          ============================================ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-white/15 text-xs uppercase tracking-widest font-semibold mb-12 text-center">What Leaders Say</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                "Joshua helped me see what I couldn't — that the brand I was building online had nothing to do with who I actually was. That realization changed everything."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">H</div>
                <div>
                  <p className="text-white/70 text-sm font-medium">Hal Elrod</p>
                  <p className="text-white/30 text-xs">Author, The Miracle Morning</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                "Most people in this space talk about visibility. Joshua is one of the few who understands that trust is the real currency. His framework changed how I show up."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">R</div>
                <div>
                  <p className="text-white/70 text-sm font-medium">Rudy Mawer</p>
                  <p className="text-white/30 text-xs">CEO, Mawer Capital</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                "Working with Joshua and Rachel was a turning point. They didn't just optimize my LinkedIn — they helped me find my actual voice and build authority that felt real."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">J</div>
                <div>
                  <p className="text-white/70 text-sm font-medium">Judi Fox</p>
                  <p className="text-white/30 text-xs">LinkedIn Strategist</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] card-hover">
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                "Joshua doesn't just teach strategy — he embodies it. His approach to authority and integration is unlike anything else in this industry."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">A</div>
                <div>
                  <p className="text-white/70 text-sm font-medium">Andy Foote</p>
                  <p className="text-white/30 text-xs">LinkedIn Expert & Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          8. PATHWAYS — Simple, clean, direct
          ============================================ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-12 text-center">
            Depending on where you are
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/speaking"
              className="p-8 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all no-underline group card-hover bg-white/[0.02]"
            >
              <h3 className="text-xl font-bold text-white mb-2">Keynote Speaking</h3>
              <p className="text-white/30 text-sm font-medium mb-4">Leading the new trust economy through AEO</p>
              <p className="text-white/45 leading-relaxed text-sm mb-6">
                Keynotes that shift how your audience sees authority, trust, and AI — and why the organizations that move first win everything.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-400 group-hover:text-orange-300 font-medium text-sm">
                Book Joshua
                <ArrowRight size={14} />
              </span>
            </Link>

            <a
              href="https://standoutauthority.com/brand-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all no-underline group card-hover bg-white/[0.02]"
            >
              <h3 className="text-xl font-bold text-white mb-2">Authority Architecture</h3>
              <p className="text-white/30 text-sm font-medium mb-4">For founders and execs rebuilding authority</p>
              <p className="text-white/45 leading-relaxed text-sm mb-6">
                Stop being the best-kept secret in your industry. Define your category, structure your trust signals, and become the answer.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-400 group-hover:text-orange-300 font-medium text-sm">
                Start at the Launchpad
                <ArrowRight size={14} />
              </span>
            </a>

            <a
              href="https://app.youmanize.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all no-underline group card-hover bg-white/[0.02]"
            >
              <h3 className="text-xl font-bold text-white mb-2">YOUmanize™</h3>
              <p className="text-white/30 text-sm font-medium mb-4">For those who want to go deeper into this shift</p>
              <p className="text-white/45 leading-relaxed text-sm mb-6">
                See how the world actually perceives you. 7 trust signals. One score. The starting point for building authority that's felt, not just seen.
              </p>
              <span className="inline-flex items-center gap-2 text-purple-400 group-hover:text-purple-300 font-medium text-sm">
                Get your free score
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          PODCAST — Naturally placed
          ============================================ */}
      <section className="py-20 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-4">
                The Podcast
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                YOUmanize™ Your Brand
              </h2>
              <p className="text-white/40 mb-4">
                with Joshua B. Lee &amp; Rachel B. Lee
              </p>
              <p className="text-white/50 leading-relaxed mb-8 text-sm">
                Not tips. Not tactics. Real conversations about what it actually takes to build trust in a world optimizing for attention.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@YOUmanizeYourBrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all no-underline text-sm"
                >
                  <Play size={14} />
                  YouTube
                </a>
                <Link
                  to="/speaking"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white rounded-lg transition-all no-underline text-sm"
                >
                  <Mic size={14} />
                  All Episodes
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/youmanize-podcast-cover.webp"
                alt="YOUmanize™ Your Brand Podcast"
                className="w-72 lg:w-80 rounded-2xl shadow-xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — AEO structured data
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/30 text-sm uppercase tracking-widest font-semibold mb-10">
            Questions people ask before they move
          </p>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/5 pb-6">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
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
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* ============================================
          9. THE INVITATION — Not a CTA. Resonance.
          ============================================ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
            Visibility got you here. Trust is what takes you where you're going.
          </p>
          <p className="text-lg text-white/40 mb-4">
            Human-first authority. Built for an AI-shaped world.
          </p>
          <p className="text-lg text-white/40 mb-12">
            If something on this page landed — you already know the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://standoutauthority.com/brand-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-pulse no-underline"
            >
              Start Here
              <ArrowRight size={18} />
            </a>
            <a
              href="https://app.youmanize.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all no-underline"
            >
              Get Your YOUmanize™ Score
            </a>
          </div>
          <p className="mt-12 text-xs text-white/20">
            Be felt first. Then found. Then trusted. Then inevitable.
          </p>
        </div>
      </section>
    </>
  )
}
