// Article bodies are large (~235k words total), so they must never enter the
// client bundle. This store is filled from two different places:
//
//   server (prerender) - entry-server.tsx loads the whole corpus
//   browser            - main.tsx reads the single article the prerenderer
//                        inlined into the page as window.__ARTICLE__
//
// Both paths hand the same object to the same component, so the hydrated
// render matches the prerendered HTML exactly.

export type Article = {
  slug: string
  title: string
  date: string
  linkedinUrl: string
  excerpt: string
  body: string
  words: number
}

let store: Record<string, Article> = {}

export function setArticles(next: Record<string, Article>) {
  store = next
}

export function getArticle(slug: string | undefined): Article | undefined {
  return slug ? store[slug] : undefined
}

declare global {
  interface Window {
    __ARTICLE__?: Article
  }
}
