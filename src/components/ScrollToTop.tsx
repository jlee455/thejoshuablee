import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    let active = true
    const align = () => {
      if (!active) return
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'instant' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    }
    align()
    if (hash) void document.fonts.ready.then(align)
    return () => { active = false }
  }, [pathname, hash])
  return null
}
