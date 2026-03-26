import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-2">Joshua B. Lee</h3>
            <p className="text-sm text-orange-500 font-medium mb-4">The YOUman Catalyst</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Helping founders become the trusted answer in the age of AI.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About' },
                { to: '/authority-architecture', label: 'Authority Architecture' },
                { to: '/work-with-me', label: 'Work With Me' },
                { to: '/speaking', label: 'Speaking & Media' },
                { to: '/insights', label: 'Insights' },
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
            <div className="flex flex-col gap-2 mb-4">
              {[
                { href: 'https://www.linkedin.com/in/joshuablee', label: 'LinkedIn' },
                { href: 'https://www.youtube.com/@joshuablee', label: 'YouTube' },
                { href: 'https://www.facebook.com/joshuabyronlee/', label: 'Facebook' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-orange-400 transition-colors no-underline">
                  <ExternalLink size={14} />
                  {social.label}
                </a>
              ))}
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
