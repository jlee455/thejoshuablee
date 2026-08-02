import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoByPath, FALLBACK_SEO, ORIGIN, normalizePath } from '../seo'

// Head tags are written at build time by scripts/prerender.mjs from the same
// config, so crawlers get them without running JS. This only keeps the tab
// title and canonical in sync during client-side navigation.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = normalizePath(pathname)
    const seo = seoByPath[path] ?? FALLBACK_SEO
    document.title = seo.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', seo.description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `${ORIGIN}${path === '/' ? '/' : path}`)
  }, [pathname])

  return null
}
