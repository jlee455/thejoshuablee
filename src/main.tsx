import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { setArticles } from './articleStore'

// The prerenderer inlines the current article so hydration renders the same
// markup the static file already contains.
if (typeof window !== 'undefined' && window.__ARTICLE__) {
  setArticles({ [window.__ARTICLE__.slug]: window.__ARTICLE__ })
}

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
