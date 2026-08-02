import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      {/* Media Trust Bar */}
      <div className="border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {['Forbes', 'Entrepreneur', 'USA Today', 'HuffPost', 'Inc.', 'Brainz Magazine'].map((pub) => (
              <span key={pub} className="text-white/10 text-xs font-semibold uppercase tracking-wider">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-2">Joshua B. Lee</h3>
            <p className="text-sm text-orange-500 font-medium mb-4">The YOUman Catalyst</p>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Top LinkedIn &amp; AEO Authority. Building human-first trust in an AI-shaped world.
            </p>
            {/* Newsletter */}
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-white/60 text-sm font-medium mb-1">Get the weekly breakdown</p>
              <p className="text-white/30 text-xs mb-3">Join 21,000+ leaders on LinkedIn</p>
              <a
                href="https://www.linkedin.com/newsletters/youmanize-your-brand-7024795582427004928/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg transition-all no-underline"
              >
                Subscribe
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'My Story' },
                { to: '/authority-architecture', label: 'Authority' },
                { to: '/work-with-me', label: 'Work With Me' },
                { to: '/speaking', label: 'Speaking' },
                { to: '/insights', label: 'Insights' },
                { to: '/evidence', label: 'Proof & Press' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/40 hover:text-orange-400 transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Companies</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://standoutauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange-400 transition-colors no-underline">
                  StandOut Authority
                </a>
              </li>
              <li>
                <a href="https://youmanize.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange-400 transition-colors no-underline">
                  YOUmanize™
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.linkedin.com/in/joshuablee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-orange-500/30 transition-all no-underline" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/@thejoshuablee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-orange-500/30 transition-all no-underline" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.facebook.com/joshuabyronlee/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-orange-500/30 transition-all no-underline" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <p className="text-sm text-white/40">
              josh@standoutauthority.com
            </p>
          </div>
        </div>

        <div className="glow-line mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Joshua B. Lee. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Humanity &rarr; Authority &rarr; Answer
          </p>
        </div>
      </div>
    </footer>
  )
}
