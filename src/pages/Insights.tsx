import { ArrowRight, BookOpen, Users } from 'lucide-react'

const newsletters = [
  { title: 'Why Isn\'t Your LinkedIn Content Turning into Business Opportunities?', excerpt: 'Your LinkedIn content is not turning into business opportunities because it is not creating clear, consistent authority signals.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/why-isnt-your-linkedin-content-turning-business-joshua-b-lee-gfvac' },
  { title: 'Is It Just You, or Has LinkedIn Actually Changed?', excerpt: 'Yes, LinkedIn has fundamentally changed, and it\'s not just you experiencing lower reach.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/just-you-has-linkedin-actually-changed-joshua-b-lee-izbgc' },
  { title: 'Can AI Replace a Leader\'s Voice?', excerpt: 'AI can imitate a leader\'s voice, but it cannot replace it because a leader\'s voice is built through lived experience.', readTime: '8 min', url: 'https://www.linkedin.com/pulse/can-ai-replace-leaders-voice-joshua-b-lee-st2oc' },
  { title: 'How Do Business Leaders Know When It\'s Time to Let Go of an Old Identity?', excerpt: 'Business leaders know it is time to let go of an old identity when the version of themselves that once worked starts holding them back.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/how-do-business-leaders-know-when-its-time-let-go-old-joshua-b-lee-woxxc' },
  { title: 'How Do You Become the Trusted Answer in AI Search?', excerpt: 'You become the trusted answer in AI search by building clear, consistent signals of who you are, what you do, and why it matters.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/how-do-you-become-trusted-answer-ai-search-joshua-b-lee-sbemc' },
  { title: 'What\'s the One Trait Every Standout LinkedIn Brand Will Share in 2026?', excerpt: 'The one trait every standout LinkedIn brand will share in 2026 is TRUST.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/whats-one-trait-every-standout-linkedin-brand-share-2026-lee-3yple' },
  { title: 'What Did My Top 12 Newsletters Teach Me About LinkedIn, Leadership, AI, and Human Connection?', excerpt: 'My top 12 LinkedIn newsletters of 2025 revealed one clear truth: the people who succeed online are the ones who stay human.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/what-did-my-top-12-newsletters-teach-me-linkedin-leadership-lee-wfwee' },
  { title: 'In the Age of AI, What Makes People Actually Click and Care?', excerpt: 'In the age of AI, people click and care when content feels human, not just optimized.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/age-ai-what-makes-people-actually-click-care-joshua-b-lee-yxace' },
  { title: 'How will YOUmanize\u2122 Your Brand Podcast help me show up on LinkedIn?', excerpt: 'Each episode helps business leaders, entrepreneurs, and professionals show up authentically on LinkedIn.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-youmanize-your-brand-podcast-help-me-show-up-linkedin-lee-hei0c' },
  { title: 'What Sets Successful Entrepreneurs Apart? They Use Gratitude to Lead, Realign, and Build with Intention', excerpt: 'What should entrepreneurs focus on during National Entrepreneurship Month? Gratitude, and not the fluffy kind.', readTime: '5 min', url: 'https://www.linkedin.com/pulse/what-sets-successful-entrepreneurs-apart-use-gratitude-joshua-b-lee-zjqjc' },
  { title: 'What Should Every Leader Ask Before Q4 Ends? The 3 Conversations That Will Define Your 2026', excerpt: 'Why do most leaders blow Q1 of the next year? Because they coast through Q4 and avoid the hard conversations.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/what-should-every-leader-ask-before-q4-ends-3-define-your-lee-bll2c' },
  { title: 'How to Lead Without Losing Yourself: Mental Health Strategies for Entrepreneurs', excerpt: 'World Mental Health Day — why founders can\'t sit this one out.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-lead-without-losing-yourself-mental-health-strategies-lee-apowc' },
  { title: 'The Most Powerful Voice in Business? The One That\'s True to You', excerpt: 'What it really means to use your voice — especially when it feels risky.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/most-powerful-voice-business-one-thats-true-you-joshua-b-lee-tc1ic' },
  { title: 'Why Great Leaders Will Outlast AI (and the Lazy Ones Won\'t)', excerpt: 'AI can\'t lead people. That\'s your job. Someone who understands how to use AI can replace you. But AI itself? Never.', readTime: '5 min', url: 'https://www.linkedin.com/pulse/why-great-leaders-outlast-ai-lazy-ones-wont-joshua-b-lee-cogoc' },
  { title: 'Stop Spamming: 3 Ways to Build a Trusted Brand People Actually Respect', excerpt: 'There\'s a big difference between attention and trust. Spam will never build real influence.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/stop-spamming-3-ways-build-trusted-brand-people-actually-lee-jzqpc' },
  { title: 'How Open Minded Business Leaders Can Use Human Design to Stand Out Online', excerpt: 'In the age of algorithms, your intuition is the one advantage the internet can\'t replicate.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-open-minded-business-leaders-can-use-human-design-joshua-b-lee-0g9gf' },
  { title: 'LinkedIn Algorithms Explained: Why Trust Signals Now Decide Who Wins', excerpt: 'Why most experts stay invisible on LinkedIn — even when they\'re brilliant.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/linkedin-algorithms-explained-why-trust-signals-now-decide-lee-v4lfc' },
  { title: 'AI Won\'t Replace Great Leaders. But It Will Replace Average Ones.', excerpt: 'AI won\'t replace you. But someone who knows how to use it might.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/ai-wont-replace-great-leaders-average-ones-joshua-b-lee-ykvkc' },
  { title: 'What Smart Founders Know About Listening for LinkedIn Success', excerpt: 'Why the smartest founders don\'t shout — they listen.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/what-smart-founders-know-listening-linkedin-success-joshua-b-lee-rzgjc' },
]

export default function Insights() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Insights &amp; Newsletter
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Your Dopamine Dose
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            Authority Architecture insights, LinkedIn strategy, AI discovery,
            and human-first leadership — published biweekly.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-orange-500" />
              <span className="text-white/60"><span className="text-white font-semibold">21,367</span> subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-orange-500" />
              <span className="text-white/60"><span className="text-white font-semibold">19+</span> editions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <a
            href="https://www.linkedin.com/newsletters/your-dopamine-dose-6770825325585727488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Subscribe on LinkedIn
            <ArrowRight size={18} />
          </a>
          <p className="mt-3 text-xs text-white/30">
            Join 21,000+ founders and leaders getting authority insights biweekly.
          </p>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">All Editions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsletters.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass rounded-xl p-6 hover:border-orange-500/20 transition-all group no-underline flex flex-col"
              >
                <h3 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{item.readTime} read</span>
                  <ArrowRight size={14} className="text-orange-500/50 group-hover:text-orange-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Authority isn't built through visibility.
          </h2>
          <p className="text-xl text-orange-400 font-semibold mb-8">
            It emerges through recognizable signals.
          </p>
          <a
            href="https://www.linkedin.com/newsletters/your-dopamine-dose-6770825325585727488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline"
          >
            Subscribe to Your Dopamine Dose
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Your Dopamine Dose',
            description: 'A biweekly LinkedIn newsletter by Joshua B. Lee covering Authority Architecture, LinkedIn strategy, AI discovery, and human-first leadership.',
            author: {
              '@type': 'Person',
              name: 'Joshua B. Lee',
              alternateName: 'The YOUman Catalyst',
            },
            blogPost: newsletters.map((item) => ({
              '@type': 'BlogPosting',
              headline: item.title,
              description: item.excerpt,
              url: item.url,
              author: { '@type': 'Person', name: 'Joshua B. Lee' },
            })),
          }),
        }}
      />
    </>
  )
}
