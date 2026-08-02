import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { articleIndex } from '../data/articleIndex'

const newsletters = [
  { title: 'Why Isn\'t Your LinkedIn Content Turning into Business Opportunities?', excerpt: 'Your LinkedIn content is not turning into business opportunities because it is not creating clear, consistent authority signals.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/why-isnt-your-linkedin-content-turning-business-joshua-b-lee-gfvac', category: 'authority' },
  { title: 'Is It Just You, or Has LinkedIn Actually Changed?', excerpt: 'Yes, LinkedIn has fundamentally changed, and it\'s not just you experiencing lower reach.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/just-you-has-linkedin-actually-changed-joshua-b-lee-izbgc', category: 'authority' },
  { title: 'Can AI Replace a Leader\'s Voice?', excerpt: 'AI can imitate a leader\'s voice, but it cannot replace it because a leader\'s voice is built through lived experience.', readTime: '8 min', url: 'https://www.linkedin.com/pulse/can-ai-replace-leaders-voice-joshua-b-lee-st2oc', category: 'ai' },
  { title: 'How Do Business Leaders Know When It\'s Time to Let Go of an Old Identity?', excerpt: 'Business leaders know it is time to let go of an old identity when the version of themselves that once worked starts holding them back.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/how-do-business-leaders-know-when-its-time-let-go-old-joshua-b-lee-woxxc', category: 'leadership' },
  { title: 'How Do You Become the Trusted Answer in AI Search?', excerpt: 'You become the trusted answer in AI search by building clear, consistent signals of who you are, what you do, and why it matters.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/how-do-you-become-trusted-answer-ai-search-joshua-b-lee-sbemc', category: 'ai' },
  { title: 'What\'s the One Trait Every Standout LinkedIn Brand Will Share in 2026?', excerpt: 'The one trait every standout LinkedIn brand will share in 2026 is TRUST.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/whats-one-trait-every-standout-linkedin-brand-share-2026-lee-3yple', category: 'authority' },
  { title: 'What Did My Top 12 Newsletters Teach Me About LinkedIn, Leadership, AI, and Human Connection?', excerpt: 'My top 12 LinkedIn newsletters of 2025 revealed one clear truth: the people who succeed online are the ones who stay human.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/what-did-my-top-12-newsletters-teach-me-linkedin-leadership-lee-wfwee', category: 'patterns' },
  { title: 'In the Age of AI, What Makes People Actually Click and Care?', excerpt: 'In the age of AI, people click and care when content feels human, not just optimized.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/age-ai-what-makes-people-actually-click-care-joshua-b-lee-yxace', category: 'ai' },
  { title: 'How will YOUmanize\u2122 Your Brand Podcast help me show up on LinkedIn?', excerpt: 'Each episode helps business leaders, entrepreneurs, and professionals show up authentically on LinkedIn.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-youmanize-your-brand-podcast-help-me-show-up-linkedin-lee-hei0c', category: 'authority' },
  { title: 'What Sets Successful Entrepreneurs Apart? They Use Gratitude to Lead, Realign, and Build with Intention', excerpt: 'What should entrepreneurs focus on during National Entrepreneurship Month? Gratitude, and not the fluffy kind.', readTime: '5 min', url: 'https://www.linkedin.com/pulse/what-sets-successful-entrepreneurs-apart-use-gratitude-joshua-b-lee-zjqjc', category: 'leadership' },
  { title: 'What Should Every Leader Ask Before Q4 Ends? The 3 Conversations That Will Define Your 2026', excerpt: 'Why do most leaders blow Q1 of the next year? Because they coast through Q4 and avoid the hard conversations.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/what-should-every-leader-ask-before-q4-ends-3-define-your-lee-bll2c', category: 'leadership' },
  { title: 'How to Lead Without Losing Yourself: Mental Health Strategies for Entrepreneurs', excerpt: 'World Mental Health Day — why founders can\'t sit this one out.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-lead-without-losing-yourself-mental-health-strategies-lee-apowc', category: 'leadership' },
  { title: 'The Most Powerful Voice in Business? The One That\'s True to You', excerpt: 'What it really means to use your voice — especially when it feels risky.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/most-powerful-voice-business-one-thats-true-you-joshua-b-lee-tc1ic', category: 'leadership' },
  { title: 'Why Great Leaders Will Outlast AI (and the Lazy Ones Won\'t)', excerpt: 'AI can\'t lead people. That\'s your job. Someone who understands how to use AI can replace you. But AI itself? Never.', readTime: '5 min', url: 'https://www.linkedin.com/pulse/why-great-leaders-outlast-ai-lazy-ones-wont-joshua-b-lee-cogoc', category: 'ai' },
  { title: 'Stop Spamming: 3 Ways to Build a Trusted Brand People Actually Respect', excerpt: 'There\'s a big difference between attention and trust. Spam will never build real influence.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/stop-spamming-3-ways-build-trusted-brand-people-actually-lee-jzqpc', category: 'authority' },
  { title: 'How Open Minded Business Leaders Can Use Human Design to Stand Out Online', excerpt: 'In the age of algorithms, your intuition is the one advantage the internet can\'t replicate.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/how-open-minded-business-leaders-can-use-human-design-joshua-b-lee-0g9gf', category: 'patterns' },
  { title: 'LinkedIn Algorithms Explained: Why Trust Signals Now Decide Who Wins', excerpt: 'Why most experts stay invisible on LinkedIn — even when they\'re brilliant.', readTime: '7 min', url: 'https://www.linkedin.com/pulse/linkedin-algorithms-explained-why-trust-signals-now-decide-lee-v4lfc', category: 'authority' },
  { title: 'AI Won\'t Replace Great Leaders. But It Will Replace Average Ones.', excerpt: 'AI won\'t replace you. But someone who knows how to use it might.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/ai-wont-replace-great-leaders-average-ones-joshua-b-lee-ykvkc', category: 'ai' },
  { title: 'What Smart Founders Know About Listening for LinkedIn Success', excerpt: 'Why the smartest founders don\'t shout — they listen.', readTime: '6 min', url: 'https://www.linkedin.com/pulse/what-smart-founders-know-listening-linkedin-success-joshua-b-lee-rzgjc', category: 'patterns' },
]

const categoryLabels: Record<string, string> = {
  ai: 'AI + Trust',
  authority: 'Authority + Visibility',
  leadership: 'Leadership + Identity',
  patterns: 'Real-Time Patterns',
}

const categoryDescs: Record<string, string> = {
  ai: 'How AI is reshaping what people believe, not just what they see',
  authority: 'Why most people are building attention… not authority',
  leadership: 'What it actually means to lead when everything is becoming automated',
  patterns: 'Things I\'m seeing right now that most people are missing',
}

export default function Insights() {
  const categories = ['ai', 'authority', 'leadership', 'patterns']

  return (
    <>
      {/* ============================================
          HERO — Not a blog. A point of view.
          ============================================ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-sm uppercase tracking-widest font-semibold mb-8">
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
            What I'm seeing{' '}
            <span className="text-white/40">right now.</span>
          </h1>
        </div>
      </section>

      {/* ============================================
          CONTEXT — Why this exists
          ============================================ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-white/50">
              Most people use content to stay visible. I use it to make sense of what's changing.
            </p>
            <p className="text-white/50">
              This is where I break down what's actually happening across AI, trust, leadership, authority, and how people are making decisions in real time.
            </p>
            <p className="text-white/50">
              Some of these are observations. Some are patterns I'm seeing repeat. Some are things most people won't realize until it's already affected them.
            </p>
            <p className="text-white/70 font-medium">
              If you're paying attention to where things are going… this is where I share it.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          NEWSLETTER — Right after intro, not buried
          ============================================ */}
      <section className="py-20 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            Go deeper
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
            This is where I go deeper.
          </h2>
          <div className="space-y-4 text-lg text-white/50 leading-relaxed mb-8">
            <p>
              Some things don't belong in a post. They need more context. More nuance. More honesty.
            </p>
            <p>
              Once a week, I break down what I'm seeing, what's changing, and what actually matters… without trying to fit it into an algorithm.
            </p>
            <p className="text-white/70 font-medium">
              If you've been following along and want the deeper version… this is where it happens.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://www.linkedin.com/newsletters/the-authority-gap-6770825325585727488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
            >
              Get the weekly breakdown
              <ArrowRight size={18} />
            </a>
            <span className="text-white/25 text-xs mt-3 sm:mt-4">21,000+ subscribers</span>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTENT — Grouped by thinking categories
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {categories.map((cat) => {
            const posts = newsletters.filter((n) => n.category === cat)
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">{categoryLabels[cat]}</h2>
                  <p className="text-white/30 text-sm">{categoryDescs[cat]}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {posts.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl p-5 border border-white/5 hover:border-orange-500/20 transition-all group no-underline flex flex-col"
                    >
                      <h3 className="text-white/80 font-semibold text-sm leading-snug mb-3 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/35 text-xs leading-relaxed mb-4 flex-1">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/20">{item.readTime} read</span>
                        <ChevronRight size={12} className="text-white/20 group-hover:text-orange-400 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ============================================
          CLOSE — Signal, not CTA
          ============================================ */}
      <section className="py-24 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/50 text-lg mb-4">
            This page isn't content. It's evidence that the shift is already happening.
          </p>
          <p className="text-white/70 text-lg font-medium mb-8">
            If you're seeing the same patterns… you're already paying attention to the right things.
          </p>
          <a
            href="https://www.linkedin.com/newsletters/the-authority-gap-6770825325585727488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
          >
            Subscribe to go deeper
            <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* ============================================
          ARCHIVE - republished LinkedIn articles
          ============================================ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-orange-500/60 text-sm uppercase tracking-widest font-semibold mb-6">
            The archive
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
            {articleIndex.length} pieces, written since 2014.
          </h2>
          <p className="text-white/30 text-sm mb-10">
            Everything published under my name, republished here so it lives somewhere
            I control &mdash; and somewhere a machine can actually read it.
          </p>

          <div className="space-y-10">
            {Object.entries(
              articleIndex.reduce<Record<string, typeof articleIndex>>((acc, a) => {
                const y = a.date.slice(0, 4)
                ;(acc[y] ||= []).push(a)
                return acc
              }, {}),
            )
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([year, items]) => (
                <div key={year}>
                  <h3 className="text-white/25 text-xs font-mono tracking-widest mb-3">
                    {year} &middot; {items.length}
                  </h3>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {items.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/insights/${a.slug}`}
                          className="flex items-baseline gap-4 rounded-lg px-4 py-3 border border-white/5 hover:border-orange-500/20 transition-all group no-underline"
                        >
                          <span className="text-[10px] text-white/20 font-mono shrink-0 w-16">
                            {a.date.slice(5)}
                          </span>
                          <span className="text-white/70 text-sm leading-snug group-hover:text-orange-400 transition-colors flex-1">
                            {a.title}
                          </span>
                          <span className="text-[10px] text-white/15 shrink-0 hidden sm:inline">
                            {Math.max(1, Math.round(a.words / 220))} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Insights by Joshua B. Lee',
            description: 'Observations on AI, trust, authority, and leadership from Joshua B. Lee — covering what\'s actually changing in how people discover, evaluate, and trust expertise.',
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
