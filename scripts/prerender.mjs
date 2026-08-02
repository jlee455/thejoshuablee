import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { routes, SITE_ORIGIN } from './routes.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render, seoByPath, FALLBACK_SEO } = await import(
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
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
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

function buildPage(renderUrl, seo, canonicalUrl) {
  let page = template
  for (const pattern of SUPERSEDED) page = page.replace(pattern, '')
  page = page.replace(
    '</head>',
    `  ${headFor(seo, canonicalUrl)}\n  </head>`,
  )
  return page.replace(
    '<div id="root"></div>',
    `<div id="root">${render(renderUrl)}</div>`,
  )
}

for (const route of routes) {
  const seo = seoByPath[route] ?? FALLBACK_SEO
  const url = `${SITE_ORIGIN}${route === '/' ? '/' : route}`
  const outDir = route === '/' ? distDir : path.join(distDir, route)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), buildPage(route, seo, url))
  console.log(`  prerendered ${route}`)
}

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
${routes
  .map(
    (route) =>
      `  <url>\n    <loc>${SITE_ORIGIN}${route === '/' ? '/' : route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')}
</urlset>
`,
)

console.log(`prerender: ${routes.length} routes + 404 + sitemap.xml`)
