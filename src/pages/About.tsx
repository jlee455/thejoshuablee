import { ArrowRight, ChevronRight } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* ============================================
          HERO — Not a bio. A truth.
          ============================================ */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-8">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
            I didn't leave success.{' '}
            <span className="text-white/40">I left everything that wasn't real.</span>
          </h1>
        </div>
      </section>

      {/* ============================================
          THE OFFICE — Cinematic opening
          ============================================ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/60">
              The office was quiet. It was always quiet.
            </p>
            <p className="text-white/50">
              Door closed. Blinds half drawn. That kind of silence that doesn't feel like peace… it feels heavy. Like something's sitting on your chest and you can't explain why.
            </p>
            <p className="text-white/50">
              I'd sit there for hours. Not working. Not thinking about strategy. Just staring at the wall.
            </p>
            <p className="text-white/70 text-xl font-medium italic border-l-2 border-orange-500/40 pl-6">
              And there was one question I couldn't get away from. If something happened to me tomorrow… would my kids actually know me? Or would they just know what I built?
            </p>
          </div>
          {/* Reflective image — supports the wall moment */}
          <div className="mt-12">
            <img
              src="/images/joshua-reflective-hat.webp"
              alt="Joshua — reflective"
              className="w-full max-w-md rounded-2xl object-cover h-80 border border-white/10 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          THE SUCCESS — What it looked like from outside
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              From the outside, none of it made sense.
            </p>
            <p className="text-white/50">
              I had built what most people are still chasing. Multiple companies. Massive scale. Nearly a billion dollars in ad spend managed.
            </p>
            <p className="text-white/70 text-xl font-medium">
              By every definition the world uses… I was successful.
            </p>
            <p className="text-white/40">
              But inside? I was exhausted. Disconnected. Hollow.
            </p>
          </div>
          {/* Success contrast — living the life, but hollow inside */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl">
            <img src="/images/joshua-yacht-selfie.webp" alt="Joshua at a yacht event" className="w-full h-48 rounded-xl object-cover object-center border border-white/10" />
            <img src="/images/joshua-rtx-helmet.webp" alt="Joshua at RTX event" className="w-full h-48 rounded-xl object-cover object-center border border-white/10" />
            <img src="/images/joshua-party-old.webp" alt="Joshua at a party" className="w-full h-48 rounded-xl object-cover object-center border border-white/10" />
          </div>
        </div>
      </section>

      {/* ============================================
          THE LIE — Balance was never real
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              I was trying to balance everything. Work. Life. Family. Growth.
            </p>
            <p className="text-white/50">
              And the harder I tried to "balance it"… the more everything felt like it was pulling apart.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              That's when it hit me. The problem wasn't me. The problem was the model. Balance was never real.
            </p>
            <p className="text-white/50">
              I had built my life in pieces. And I was trying to hold them together.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE WALK — The decision
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              So I made a decision most people don't understand.
            </p>
            <p className="text-white/50">
              I walked away. Gave up almost everything. Closed companies. Reset my entire life.
            </p>
            <p className="text-white/50">
              Not because I failed. But because I finally saw the truth.
            </p>
            <p className="text-white/80 text-xl font-semibold">
              Success that costs you your health, your relationships, and who you are… isn't success.
            </p>
            <p className="text-white/40">
              That was the first shift.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SECOND BREAK — Body forced the stop
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              Then life forced another one.
            </p>
            <p className="text-white/50">
              Years later… when things were being rebuilt in a completely different way… I ignored the signals again. Pushed harder. Moved faster. Told myself I was fine.
            </p>
            <p className="text-white/70 font-medium">
              And my body made sure I stopped.
            </p>
            <p className="text-white/50">
              I tore my Achilles. Then came the blood clots.
            </p>
            <p className="text-white/50">
              And for the first time in decades… I couldn't push through it. I couldn't outwork it. I couldn't outrun it. I couldn't stay busy enough to avoid it.
            </p>
            <p className="text-white/70 text-xl font-medium">
              I had to sit still.
            </p>
            <p className="text-white/40">
              And when everything slowed down again… everything I had been carrying caught up.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          RACHEL — The real shift
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-white/50">
                But this time… something was different.
              </p>
              <p className="text-white/70 text-xl font-medium">
                Rachel was there.
              </p>
              <p className="text-white/50">
                Not just in my life. In it with me. In the business. In the decisions. In the weight of everything I used to carry alone.
              </p>
              <p className="text-white/50">
                And what I realized in that season… was that I was never meant to do this on my own.
              </p>
              <p className="text-white/70 font-medium border-l-2 border-orange-500/40 pl-6">
                That belief… that identity… that "I have to carry it all" mindset… that's what had been breaking me the whole time.
              </p>
              <p className="text-white/50">
                Rachel didn't just support the business. She changed how I saw everything. How we built. How we led. How we lived.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/joshua-rachel-hands.webp"
                alt="Joshua and Rachel — holding hands"
                className="w-full rounded-2xl object-cover object-top h-72 border border-white/10"
              />
              <img
                src="/images/joshua-rachel-working.webp"
                alt="Joshua and Rachel working together"
                className="w-full rounded-2xl object-cover object-top h-72 border border-white/10"
              />
              <img
                src="/images/joshua-rachel-wedding.webp"
                alt="Joshua and Rachel — wedding day"
                className="w-full rounded-2xl object-cover object-top h-56 border border-white/10"
              />
              <img
                src="/images/joshua-family-full.webp"
                alt="The Lee family — integration in action"
                className="w-full rounded-2xl object-cover object-top h-56 border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INTEGRATION — The philosophy
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/70 text-xl font-medium">
              That's when integration became real. Not theory. Not strategy. Real.
            </p>
            <p className="text-white/50">
              I stopped trying to separate everything. And started aligning it.
            </p>
            <div className="space-y-2 text-white/40 text-xl pl-6">
              <p>Vision.</p>
              <p>Health.</p>
              <p>Relationships.</p>
              <p>Business.</p>
            </div>
            <p className="text-white/50">
              Not competing. Working together.
            </p>
          </div>

          {/* FamiLEE crest + present day — who he is now */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6 items-center">
            <img
              src="/images/joshua-present-day.webp"
              alt="Joshua B. Lee — present day"
              className="w-full rounded-2xl object-cover h-72 border border-white/10"
            />
            <div className="flex justify-center">
              <img
                src="/images/familee-crest.webp"
                alt="The Lee FamiLEE Crest — From Fire We Rise, In Love We Lead"
                className="w-48 sm:w-56"
              />
            </div>
            <img
              src="/images/joshua-rachel-familee-hats.webp"
              alt="Joshua and Rachel wearing famiLEE hats"
              className="w-full rounded-2xl object-cover h-72 border border-white/10"
            />
          </div>
          <p className="text-center text-white/20 text-xs mt-4 italic">
            From Fire We Rise, In Love We Lead — Est Decorum Esse Humanum
          </p>

          {/* Book — naturally placed */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <img
              src="/images/balance-is-bullshit-cover.webp"
              alt="Balance is Bullsh*t by Joshua B. Lee"
              className="w-48 rounded-xl shadow-xl border border-white/10 shrink-0"
            />
            <div>
              <p className="text-white font-bold text-lg mb-2">Balance is Bullsh*t</p>
              <p className="text-orange-400 text-sm font-medium mb-3">How to Successfully Integrate Work &amp; Life</p>
              <p className="text-white/50 text-sm leading-relaxed">
                The book I wrote from the other side of all of this. Not a productivity framework. A reckoning with what "balance" actually costs — and what integration makes possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          YOUmanize — Where it all leads
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/70 text-xl font-medium">
              That's where everything I do now comes from. That's where YOUmanize™ came from.
            </p>
            <p className="text-white/50">
              Not as a framework. As a correction.
            </p>
            <p className="text-white/50">
              To a world that teaches people to perform… instead of actually live.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          TODAY — What this means now
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              Today, I don't help people "grow their brand."
            </p>
            <p className="text-white/70 text-xl font-medium">
              I help them rebuild who they are inside of it.
            </p>
            <p className="text-white/50">
              Because what you build matters. But who you are inside of it… that's what everything depends on.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CREDIBILITY — At the bottom, earned
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/50 text-lg leading-relaxed mb-8">
            I've built 16 companies and managed nearly a billion dollars in ad spend. Coached 500+ founders. Spoken on 50+ stages. Written for Entrepreneur for almost a decade. But none of that matters if it doesn't align with who you are.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/20 uppercase tracking-wider mb-8">
            <span>Forbes</span>
            <span>Entrepreneur</span>
            <span>USA Today</span>
            <span>HuffPost</span>
            <span>Inc.</span>
            <span>Brainz Magazine</span>
          </div>
          <div className="flex items-center gap-5 mb-12 p-5 rounded-xl border border-white/5 bg-white/[0.02] max-w-md">
            <img
              src="/images/favikon-badge.webp"
              alt="Favikon — #1 LinkedIn Growth Expert in the United States"
              className="w-20 rounded-lg border border-white/10 shrink-0"
            />
            <div>
              <p className="text-white/70 text-sm font-semibold">#1 LinkedIn Growth Expert — US</p>
              <p className="text-white/30 text-xs">Ranked #5 Worldwide &middot; Favikon &middot; May 2026</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://standoutauthority.com/brand-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
            >
              Work With Me
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

      {/* Person Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joshua B. Lee',
            alternateName: 'The YOUman Catalyst',
            jobTitle: 'Authority Architect | Co-Founder & CVO, YOUmanize™',
            description: 'Joshua B. Lee is the creator of Authority Architecture, helping leaders rebuild trust, identity, and authority in a world where AI is amplifying everything fake. Author of Balance is Bullsh*t. Co-Founder of YOUmanize™ and StandOut Authority.',
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
