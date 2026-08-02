import { ArrowRight, ChevronRight } from 'lucide-react'

export default function WorkWithMe() {
  return (
    <>
      {/* ============================================
          HERO — Diagnosis, not sales
          ============================================ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-8">
            Work With Me
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
            If you're here…{' '}
            <span className="text-white/40">something already feels off.</span>
          </h1>
        </div>
      </section>

      {/* ============================================
          THE RECOGNITION
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              You don't land on a page like this by accident.
            </p>
            <p className="text-white/50">
              Most of the people who end up here have already done the things that are supposed to work. You've built something real. You've put in the time. From the outside… it looks solid.
            </p>
            <p className="text-white/70 text-xl font-medium">
              But internally… there's a gap.
            </p>
            <p className="text-white/40">
              Not a failure. Not something broken. Just a disconnect.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE DISCONNECT — Name what they're feeling
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/50">
              Between how things look… and how they actually feel.
            </p>
            <p className="text-white/50">
              Between what you've built… and how you want to show up inside of it.
            </p>
            <p className="text-white/50">
              Between the visibility you have… and the trust you're actually creating.
            </p>
            <p className="text-white/70 text-xl font-medium border-l-2 border-orange-500/40 pl-6">
              And most people try to solve that by doing more. More content. More strategy. More optimization. But that's not where the problem is.
            </p>
            <p className="text-white/50">
              The problem is usually deeper than that. It's in how everything is structured. How it connects. How it reflects who you actually are.
            </p>
            <p className="text-white/80 text-xl font-semibold">
              That's the work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT THIS ACTUALLY IS
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white/25 text-sm uppercase tracking-widest font-semibold">
              What this actually is
            </p>
            <p className="text-white/50">
              This isn't about adding more to what you're already doing.
            </p>
            <p className="text-white/50">
              It's about realigning it so it actually works. So your presence matches your level. So your message lands the way it should.
            </p>
            <p className="text-white/70 text-xl font-medium">
              So people don't just see you… they trust you.
            </p>
          </div>
          {/* Conversational photo — "I can actually talk to this guy" */}
          <div className="mt-12">
            <img
              src="/images/joshua-rachel-hallway.webp"
              alt="Joshua and Rachel in conversation"
              className="w-full max-w-lg rounded-2xl object-cover h-64 border border-white/10 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          WHERE THIS SHOWS UP — Pathways, not packages
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-sm uppercase tracking-widest font-semibold mb-12">
            Where this shows up
          </p>
          <p className="text-white/50 text-lg mb-16">
            This work shows up in a few different ways, depending on where you are.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Advisory */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <h3 className="text-xl font-bold text-white mb-2">Advisory / Brand Architecture</h3>
              <p className="text-white/40 text-sm font-medium mb-4">For founders and executives</p>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                For those who know their current positioning doesn't fully reflect who they are… or where they're going. This is where we rebuild that foundation.
              </p>
              <a
                href="https://standoutauthority.com/brand-launchpad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
              >
                Start at the Launchpad
                <ArrowRight size={14} />
              </a>
            </div>

            {/* DFY */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <h3 className="text-xl font-bold text-white mb-2">Done-For-You Authority</h3>
              <p className="text-white/40 text-sm font-medium mb-4">For established leaders who need this handled</p>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                You've proven the model. You need someone to build the infrastructure — content, positioning, presence — so your authority compounds while you run your business.
              </p>
              <a
                href="https://standoutauthority.com/services/service-application/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
              >
                Apply for DFY services
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Speaking */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300 card-hover">
              <h3 className="text-xl font-bold text-white mb-2">Speaking</h3>
              <p className="text-white/40 text-sm font-medium mb-4">For organizations navigating this shift</p>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                For organizations navigating leadership, trust, and visibility in a world where AI is changing how people decide who to trust.
              </p>
              <a
                href="mailto:assistant@standoutauthority.com?subject=Speaking%20Inquiry%20for%20Joshua%20B.%20Lee"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
              >
                Book Joshua to speak
                <ArrowRight size={14} />
              </a>
            </div>

            {/* YOUmanize */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-purple-500/20 transition-all duration-300 card-hover">
              <h3 className="text-xl font-bold text-white mb-2">YOUmanize™</h3>
              <p className="text-white/40 text-sm font-medium mb-4">For those who feel the shift</p>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                For those who feel the shift happening and want to go deeper into building something that people actually believe. Not just follow.
              </p>
              <a
                href="https://app.youmanize.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium no-underline text-sm"
              >
                Get your YOUmanize™ Score
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-16">
            <img
              src="/images/joshua-leaning-wall.webp"
              alt="Joshua B. Lee"
              className="w-full max-w-2xl h-72 rounded-2xl object-cover object-top border border-white/5 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          THE MIRROR — Deeper than homepage
          ============================================ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-sm uppercase tracking-widest font-semibold mb-10">
            Who this is usually for
          </p>
          <div className="space-y-5">
            {[
              "Has built success… but knows something's off",
              "Is visible… but not fully understood",
              "Is growing… but not in a way that feels aligned",
              "Is paying attention to AI… but doesn't want to lose their humanity in the process",
            ].map((line) => (
              <p key={line} className="text-xl text-white/60 leading-relaxed pl-6 border-l border-white/10 hover:border-orange-500/40 transition-colors">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 text-white/30 text-sm">
            If that's not you… this probably won't land.
          </p>
        </div>
      </section>

      {/* ============================================
          PROCESS — What to expect
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-4">
            What to Expect
          </p>
          <h2 className="text-2xl font-bold text-white mb-12">
            This isn't a pitch. It's a process.
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'The Conversation',
                desc: "We start by listening. Understanding where you are, what you've built, and where the disconnect lives.",
              },
              {
                step: '02',
                title: 'The Diagnosis',
                desc: "We identify the gap between how you're showing up and who you actually are. This is where most people have their first breakthrough.",
              },
              {
                step: '03',
                title: 'The Architecture',
                desc: "We build the structure — your authority signals, your positioning, your presence — aligned with who you are, not who you think you should be.",
              },
              {
                step: '04',
                title: 'The Integration',
                desc: "We make sure it holds. Not a campaign. Not a launch. A sustainable way of showing up that compounds trust over time.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-orange-500/30 text-2xl font-bold shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSE — Right conversation, not right pitch
          ============================================ */}
      <section className="py-28 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/70 text-xl font-medium mb-4">
            If it is…
          </p>
          <p className="text-white/50 text-lg mb-12">
            You don't need a pitch. You just need the right conversation.
          </p>
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
              href="https://standoutauthority.com/services/service-application/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/50 hover:text-white/70 no-underline text-sm transition-colors"
            >
              Apply for DFY services
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Schema for AEO */}
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
              url: 'https://joshuablee.com',
            },
            description: 'Authority Architecture helps methodology-driven founders become the trusted answer in their category through structured authority signals across LinkedIn, search engines, and AI discovery systems.',
            serviceType: 'Business Consulting',
            areaServed: 'Worldwide',
          }),
        }}
      />
    </>
  )
}
