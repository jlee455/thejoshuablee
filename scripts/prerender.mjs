import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { routes, articleRoutes, SITE_ORIGIN } from './routes.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render, seoByPath, FALLBACK_SEO, speakingFaqs } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
)

const OG_IMAGE = `${SITE_ORIGIN}/images/joshua-hero.jpg`

const esc = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// The template carries defaults for these; each page supplies its own.
const SUPERSEDED = [
  /\s*<title>[\s\S]*?<\/title>/i,
  /\s*<meta\s+name="description"[^>]*>/i,
  /\s*<meta\s+property="og:title"[^>]*>/i,
  /\s*<meta\s+property="og:description"[^>]*>/i,
  /\s*<meta\s+property="og:url"[^>]*>/i,
  /\s*<meta\s+property="og:type"[^>]*>/i,
]

function headFor(seo, url) {
  const isArticle = new URL(url).pathname.startsWith("/insights/")
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${isArticle ? "article" : "website"}" />`,
    `<meta name="robots" content="${url.endsWith("/404") ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ')
}


const jsonLd = (value) => '\n    <script type="application/ld+json">' + JSON.stringify(value).replace(/</g, '\\u003c') + '</script>'
function pageSchema(route, seo, url) {
  const isArticle = route.startsWith('/insights/')
  const page = { '@type': 'WebPage', '@id': url + '#webpage', url, name: seo.title, description: seo.description,
    isPartOf: { '@id': SITE_ORIGIN + '/#website' }, about: { '@id': SITE_ORIGIN + '/#person' }, inLanguage: 'en-US' }
  if (route === '/' || route === '/about') page.mainEntity = { '@id': SITE_ORIGIN + '/#person' }
  const graph = [page]
  if (route !== '/' && route !== '/__not_found__') {
    const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' }]
    if (isArticle) items.push({ '@type': 'ListItem', position: 2, name: 'Insights', item: SITE_ORIGIN + '/insights' })
    items.push({ '@type': 'ListItem', position: items.length + 1, name: seo.title.split(' | ')[0].split(' — ')[0], item: url })
    graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: items })
    page.breadcrumb = { '@id': url + '#breadcrumb' }
  }
  if (route === '/speaking') {
    page.mainEntity = { '@id': url + '#service' }
    graph.push({ '@type': 'Service', '@id': url + '#service', name: 'Keynote speaking with Joshua B. Lee',
      serviceType: 'Keynote speaking, team sessions, panels, interviews, and virtual events',
      description: 'Joshua B. Lee speaks to founders, executives, and teams about LinkedIn authority, human-first leadership, and trust in the age of AI. International inquiries are welcome; dates, travel, and fees are confirmed per event.',
      provider: { '@id': SITE_ORIGIN + '/#person' }, areaServed: 'Worldwide', url,
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: url + '#planner', availableLanguage: 'English' } })
    graph.push({ '@type': 'FAQPage', '@id': url + '#planner-questions', mainEntity: speakingFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) })
  }
  return jsonLd({ '@context': 'https://schema.org', '@graph': graph })
}

function buildPage(renderUrl, seo, canonicalUrl, extraHead = '', beforeBody = '') {
  let page = template
  for (const pattern of SUPERSEDED) page = page.replace(pattern, '')
  page = page.replace(
    '</head>',
    `  ${headFor(seo, canonicalUrl)}${pageSchema(renderUrl, seo, canonicalUrl)}${extraHead}\n  </head>`,
  )
  return page.replace(
    '<div id="root"></div>',
    `<div id="root">${render(renderUrl)}</div>${beforeBody}`,
  )
}

const articles = JSON.parse(
  fs.readFileSync(path.join(root, 'src', 'content', 'articles.json'), 'utf-8'),
)

// Answer engines quote a description without its surrounding page, so each one
// has to name the author and stand on its own.
function articleSeo(a) {
  const desc = `${a.excerpt.replace(/\s+/g, ' ').trim()}`.slice(0, 200)
  return {
    title: `${a.title} — Joshua B. Lee`,
    description: desc.length < 60
      ? `Joshua B. Lee on ${a.title}. Published ${a.date}.`
      : desc,
  }
}

function articleSchema(a, url) {
  return (
    '\n    <script type="application/ld+json">' +
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: a.title.slice(0, 110),
      datePublished: a.date,
      dateModified: a.date,
      wordCount: a.words,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: {
        '@type': 'Person',
        '@id': `${SITE_ORIGIN}/#person`,
        name: 'Joshua B. Lee',
        url: SITE_ORIGIN,
      },
      publisher: {
        '@type': 'Person',
        '@id': `${SITE_ORIGIN}/#person`,
        name: 'Joshua B. Lee',
      },
      description: a.excerpt.slice(0, 300),
      image: OG_IMAGE,
      inLanguage: 'en-US',
      isBasedOn: a.linkedinUrl || undefined,
    }) +
    '</script>'
  )
}

for (const route of routes) {
  const seo = seoByPath[route] ?? FALLBACK_SEO
  const url = `${SITE_ORIGIN}${route === '/' ? '/' : route + '/'}`
  const outDir = route === '/' ? distDir : path.join(distDir, route)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), buildPage(route, seo, url))
  console.log(`  prerendered ${route}`)
}

for (const route of articleRoutes) {
  const slug = route.replace('/insights/', '')
  const a = articles[slug]
  if (!a) continue
  const url = `${SITE_ORIGIN}${route}/`
  const outDir = path.join(distDir, 'insights', slug)
  fs.mkdirSync(outDir, { recursive: true })
  // The single article this page needs, so the browser can hydrate without
  // shipping the whole corpus in the JS bundle.
  const payload =
    `<script>window.__ARTICLE__=${JSON.stringify(a).replace(/</g, '\\u003c')}</script>`
  fs.writeFileSync(
    path.join(outDir, 'index.html'),
    buildPage(route, articleSeo(a), url, articleSchema(a, url), payload),
  )
}
console.log(`  prerendered ${articleRoutes.length} articles`)

fs.writeFileSync(
  path.join(distDir, '404.html'),
  buildPage('/__not_found__', {
    title: 'Page Not Found — Joshua B. Lee',
    description:
      'That page does not exist on joshuablee.com. Browse the work, writing, and speaking of Joshua B. Lee, creator of Authority Architecture.',
  }, `${SITE_ORIGIN}/404`),
)
console.log('  prerendered 404.html')

const lastmod = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...routes, '/collection/', ...articleRoutes]
  .map((route) => {
    const slug = route.startsWith('/insights/') ? route.replace('/insights/', '') : null
    const mod = slug && articles[slug] ? articles[slug].date : lastmod
    const prio = route === '/' ? '1.0' : slug ? '0.6' : '0.8'
    return `  <url>\n    <loc>${SITE_ORIGIN}${route.endsWith('/') ? route : route + '/'}</loc>\n    <lastmod>${mod}</lastmod>\n    <priority>${prio}</priority>\n  </url>`
  })
  .join('\n')}
</urlset>
`,
)

console.log(
  `prerender: ${routes.length} routes + ${articleRoutes.length} articles + 404 + sitemap.xml`,
)
