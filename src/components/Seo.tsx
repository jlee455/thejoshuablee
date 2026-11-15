import { articleIndex } from '../data/articleIndex'
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
    const article = path.startsWith('/insights/') ? articleIndex.find(a => '/insights/' + a.slug === path) : undefined
    const seo = article ? { title: article.title + ' — Joshua B. Lee', description: article.excerpt } : seoByPath[path] ?? FALLBACK_SEO
    document.title = seo.title
    for (const [selector, content] of [
      ['meta[property="og:title"]', seo.title], ['meta[property="og:description"]', seo.description],
      ['meta[name="twitter:title"]', seo.title], ['meta[name="twitter:description"]', seo.description],
      ['meta[property="og:url"]', `${ORIGIN}${path === '/' ? '/' : path + '/'}`],
      ['meta[property="og:type"]', article ? 'article' : 'website'],
    ]) document.querySelector(selector)?.setAttribute('content', content)
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', seo.description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `${ORIGIN}${path === '/' ? '/' : path + '/'}`)
  }, [pathname])

  return null
}
