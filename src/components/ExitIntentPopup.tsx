import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exitIntentShown')
    if (alreadyShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true)
        sessionStorage.setItem('exitIntentShown', '1')
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm popup-overlay-enter"
        onClick={() => setVisible(false)}
      />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-navy-900/95 backdrop-blur-xl p-8 shadow-2xl text-center popup-enter">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="mb-2 text-orange-500 text-sm font-semibold uppercase tracking-widest">
          Before You Go
        </div>
        <h2 className="text-2xl font-bold text-white leading-snug mb-4">
          Discover the 3 hidden signals keeping you{' '}
          <span className="text-orange-500">invisible to AI</span>.
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          Most founders don't have a visibility problem. They have an authority
          structure problem. Find out which signals are missing.
        </p>

        <a
          href="https://standoutauthority.com/3hiddensignals#hero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all no-underline text-sm glow-orange"
        >
          Show Me the 3 Signals
        </a>

        <button
          onClick={() => setVisible(false)}
          className="block mx-auto mt-4 text-xs text-white/30 hover:text-white/50 transition-colors bg-transparent border-none cursor-pointer"
        >
          No thanks, I'm good
        </button>
      </div>
    </div>
  )
}
