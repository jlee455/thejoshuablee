import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'My Story' },
  { to: '/authority-architecture', label: 'Authority' },
  { to: '/work-with-me', label: 'Work With Me' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/insights', label: 'Insights' },
]

const externalLinks = [
  { href: 'https://standoutauthority.com', label: 'StandOut Authority' },
  { href: 'https://youmanize.ai', label: 'YOUmanize\u2122' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <span className="text-xl font-bold text-white tracking-tight">
              Joshua B. Lee
            </span>
            <span className="hidden sm:inline text-xs text-orange-500 font-medium uppercase tracking-widest">
              The YOUman Catalyst
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === link.to
                    ? 'text-orange-500'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-ice-100/60 hover:text-ice-100 transition-colors no-underline"
              >
                {link.label} ↗
              </a>
            ))}
            <a
              href="https://standoutauthority.com/brand-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all no-underline"
            >
              Start Here
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden pb-6 space-y-1 mobile-menu-enter">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg no-underline ${
                  location.pathname === link.to
                    ? 'text-orange-500 bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="glow-line my-3" />
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium text-ice-100/60 hover:text-ice-100 no-underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
