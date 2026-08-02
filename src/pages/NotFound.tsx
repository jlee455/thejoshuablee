import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
      <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-orange-500/40 text-8xl font-bold mb-6">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">
          This page doesn't exist yet.
        </h1>
        <p className="text-white/40 text-lg mb-10">
          But you're here, which means you're looking for something. Let's get you where you need to be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all glow-orange no-underline text-sm"
          >
            Go Home
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/work-with-me"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white/50 hover:text-white/70 border border-white/10 hover:border-white/20 rounded-xl no-underline text-sm transition-colors"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  )
}
