import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// Desktop only, by design. Google penalizes intrusive interstitials on mobile,
// and a mouseleave trigger has no touch equivalent worth faking.
export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('youmanizeScoreExitShown')
    if (alreadyShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true)
        sessionStorage.setItem('youmanizeScoreExitShown', '1')
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
          AI is already answering questions about you.{' '}
          <span className="text-orange-500">Do you know what it&rsquo;s saying?</span>
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          Your YOUmanize&trade; Score measures your digital credibility across 7 brand
          trust signals &mdash; the same public evidence AI systems use to decide whether
          you&rsquo;re the answer.
        </p>
        <p className="text-white/70 text-sm font-medium mb-8">
          Most people have never seen their own.
        </p>

        <a
          href="https://youmanize.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all no-underline text-sm glow-orange"
        >
          Get My YOUmanize&trade; Score
        </a>

        <button
          onClick={() => setVisible(false)}
          className="block mx-auto mt-4 text-xs text-white/30 hover:text-white/50 transition-colors bg-transparent border-none cursor-pointer"
        >
          Not right now
        </button>
      </div>
    </div>
  )
}
