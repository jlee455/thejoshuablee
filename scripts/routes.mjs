import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Keep in sync with src/App.tsx
export const routes = [
  '/',
  '/about',
  '/authority-architecture',
  '/work-with-me',
  '/speaking',
  '/insights',
  '/evidence',
  '/recommendations',
]

// Generated from src/content/articles.json - 235 republished articles.
export const articleRoutes = Object.keys(
  JSON.parse(
    fs.readFileSync(
      path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'articles.json'),
      'utf-8',
    ),
  ),
).map((slug) => `/insights/${slug}`)

export const SITE_ORIGIN = 'https://joshuablee.com'
