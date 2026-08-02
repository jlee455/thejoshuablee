import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { getArticle } from '../articleStore'
import { articleIndex } from '../data/articleIndex'
import NotFound from './NotFound'

// Minimal markdown renderer. The corpus is generated from a fixed export, so
// it only has to handle what that export actually produces: headings, lists,
// blockquotes, inline links, bold and italic.
function renderInline(text: string, keyPrefix: string) {
  const nodes: React.ReactNode[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|_([^_]+)_/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1]) {
      nodes.push(
        <a
          key={`${keyPrefix}-a${i}`}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-300"
        >
          {m[1]}
        </a>,
      )
    } else if (m[3]) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`} className="text-white/90">{m[3]}</strong>)
    } else if (m[4]) {
      nodes.push(<em key={`${keyPrefix}-i${i}`}>{m[4]}</em>)
    }
    last = m.index + m[0].length
    i++
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function Markdown({ source }: { source: string }) {
  const blocks = source.split(/\n{2,}/)
  const out: React.ReactNode[] = []
  let list: string[] = []

  const flushList = (key: string) => {
    if (!list.length) return
    out.push(
      <ul key={key} className="list-disc pl-6 space-y-2 my-6 text-white/55">
        {list.map((li, i) => (
          <li key={i}>{renderInline(li, `${key}-${i}`)}</li>
        ))}
      </ul>,
    )
    list = []
  }

  blocks.forEach((raw, bi) => {
    const block = raw.trim()
    if (!block) return
    if (block.startsWith('- ')) {
      list.push(...block.split('\n').map((l) => l.replace(/^-\s*/, '').trim()).filter(Boolean))
      return
    }
    flushList(`ul-${bi}`)
    if (block.startsWith('#### ')) {
      out.push(<h4 key={bi} className="text-white/80 font-semibold text-base mt-8 mb-3">{block.slice(5)}</h4>)
    } else if (block.startsWith('### ')) {
      out.push(<h3 key={bi} className="text-white font-bold text-lg mt-10 mb-3">{block.slice(4)}</h3>)
    } else if (block.startsWith('## ')) {
      out.push(<h2 key={bi} className="text-white font-bold text-xl sm:text-2xl mt-12 mb-4">{block.slice(3)}</h2>)
    } else if (block.startsWith('> ')) {
      out.push(
        <blockquote key={bi} className="border-l-2 border-orange-500/40 pl-5 my-6 text-white/70 italic">
          {renderInline(block.replace(/^>\s*/gm, ''), `q-${bi}`)}
        </blockquote>,
      )
    } else {
      out.push(
        <p key={bi} className="text-white/55 leading-relaxed my-5">
          {renderInline(block, `p-${bi}`)}
        </p>,
      )
    }
  })
  flushList('ul-last')
  return <>{out}</>
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <NotFound />

  const idx = articleIndex.findIndex((a) => a.slug === article.slug)
  const newer = idx > 0 ? articleIndex[idx - 1] : undefined
  const older = idx >= 0 && idx < articleIndex.length - 1 ? articleIndex[idx + 1] : undefined
  const readMinutes = Math.max(1, Math.round(article.words / 220))

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-white/30 hover:text-orange-400 transition-colors text-xs no-underline mb-10"
        >
          <ArrowLeft size={14} />
          All writing
        </Link>

        <p className="text-orange-500/60 text-xs uppercase tracking-widest font-semibold mb-5">
          {new Date(article.date + 'T00:00:00Z').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
          {' · '}
          {readMinutes} min read
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-10">
          {article.title}
        </h1>

        <div className="text-[17px]">
          <Markdown source={article.body} />
        </div>

        {article.linkedinUrl ? (
          <p className="mt-14 pt-6 border-t border-white/5 text-white/25 text-xs">
            Originally published by Joshua B. Lee on{' '}
            <a
              href={article.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-orange-400 transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        ) : null}

        {(newer || older) && (
          <nav className="mt-10 grid sm:grid-cols-2 gap-3">
            {newer ? (
              // Full page load, not a client route change: article bodies are not
              // in the JS bundle, so the next article must come from its own
              // prerendered HTML file.
              <a
                href={`/insights/${newer.slug}`}
                className="rounded-xl p-4 border border-white/5 hover:border-orange-500/20 transition-all group no-underline"
              >
                <span className="block text-[10px] text-white/20 mb-1">Newer</span>
                <span className="text-white/70 text-xs leading-snug group-hover:text-orange-400 transition-colors">
                  {newer.title}
                </span>
              </a>
            ) : (
              <span />
            )}
            {older ? (
              <a
                href={`/insights/${older.slug}`}
                className="rounded-xl p-4 border border-white/5 hover:border-orange-500/20 transition-all group no-underline sm:text-right"
              >
                <span className="block text-[10px] text-white/20 mb-1">Older</span>
                <span className="text-white/70 text-xs leading-snug group-hover:text-orange-400 transition-colors">
                  {older.title}
                </span>
              </a>
            ) : null}
          </nav>
        )}

        <div className="mt-12">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium no-underline text-sm"
          >
            Read more of the archive
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
