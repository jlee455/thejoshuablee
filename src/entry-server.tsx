import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

// Re-exported so the prerender script builds head tags from the same source
// the client uses.
export { seoByPath, FALLBACK_SEO, ORIGIN, normalizePath } from './seo'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
