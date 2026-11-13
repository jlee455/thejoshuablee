import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import { pairPhoto, fullPhoto, displayPhoto, photoCount } from './data'
import type { Pair } from './data'

function PairGallery({ pair, initialPhoto, close, navigate }: { pair: Pair; initialPhoto: number; close: () => void; navigate: (direction: number) => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [photo, setPhoto] = useState(initialPhoto)
  const touch = useRef<{x: number; y: number} | null>(null)
  const count = photoCount(pair)
  const url = displayPhoto(pair, photo)
  const source = pair.photos?.[photo]
  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { element?.close(); document.body.style.overflow = previous }
  }, [])
  function changePhoto(direction: number) {
    setPhoto(current => (current + direction + count) % count)
  }
  return <dialog ref={dialog} className="pair-dialog" aria-labelledby="pair-title"
    onCancel={event => { event.preventDefault(); close() }}
    onClick={event => { if (event.target === event.currentTarget) close() }}
    onKeyDown={event => {
      if (count > 1 && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventDefault()
        changePhoto(event.key === 'ArrowLeft' ? -1 : 1)
      }
    }}>
    <button type="button" className="icon-button close-gallery" aria-label="Close gallery" onClick={close}><X size={22} /></button>
    <div className="gallery-layout">
      <div className="gallery-photos">
        <div className="main-photo" onTouchStart={event => { const point = event.touches[0]; touch.current = {x: point.clientX, y: point.clientY} }} onTouchEnd={event => { const start = touch.current; touch.current = null; const end = event.changedTouches[0]; if (start && Math.abs(end.clientX - start.x) > 60 && Math.abs(end.clientX - start.x) > Math.abs(end.clientY - start.y)) changePhoto(end.clientX < start.x ? 1 : -1) }}><span className="gallery-photo-label">THE DETAILS / {String(photo + 1).padStart(2,'0')}</span>
          {url ? <a href={fullPhoto(pair, photo)} target="_blank" rel="noopener noreferrer" aria-label="Open full-size photograph"><img src={url} alt={pair.name + (count > 1 ? `, view ${photo + 1}` : '')} /></a> : <p>Photograph unavailable</p>}
          {count > 1 && <div className="photo-navigation">
            <button type="button" className="icon-button" aria-label="Previous photograph" onClick={() => changePhoto(-1)}><ChevronLeft size={20} /></button>
            <span aria-live="polite">{photo + 1} / {count}</span>
            <button type="button" className="icon-button" aria-label="Next photograph" onClick={() => changePhoto(1)}><ChevronRight size={20} /></button>
          </div>}
        </div>
        {count > 1 && <div className="thumbnails" aria-label="Available photographs">
          {Array.from({ length: count }, (_, index) => <button type="button" key={index} aria-label={`View photograph ${index + 1}`} aria-pressed={photo === index} onClick={() => setPhoto(index)}>
            <img src={pairPhoto(pair, index)} alt="" loading="lazy" />
          </button>)}
        </div>}
      </div>
      <div className="gallery-details">
        <p className="eyebrow">Inside the collection / {pair.id}</p><p className="gallery-brand">{pair.brand} / {pair.family}</p>
        <h2 id="pair-title">{pair.name}</h2>
        {pair.style_code && <p className="style-code">Style {pair.style_code}</p>}
        <div className="swatches" aria-label="Color palette">{pair.colors.map((color, index) => <span key={index} style={{ background: color }} />)}</div>
        <p className="gallery-credit">{source ? <>Photography: {source.sourceUrl ? <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">{source.sourceName}</a> : source.sourceName}.</> : 'Supplied model photography.'} Open a photograph at full resolution.</p>
        <div className="pair-navigation">
          <button type="button" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Previous pair</button>
          <button type="button" onClick={() => navigate(1)}>Next pair <ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  </dialog>
}

const moods = [['any', 'Any mood'], ['clean', 'Clean'], ['loud', 'Loud'], ['grail', 'Grails'], ['comfort', 'Comfort']]

export default function Collection() {
  const [pairs, setPairs] = useState<Pair[]>([])
  const [error, setError] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const [query, setQuery] = useState('')
  const [brand, setBrand] = useState('')
  const [family, setFamily] = useState('')
  const [mood, setMood] = useState('any')
  const [heroView, setHeroView] = useState(0)
  const origin = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/collection-media/collection.json', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Collection unavailable'); return response.json() })
      .then(data => { if (!Array.isArray(data.pairs) || !data.pairs.length) throw new Error('Collection empty'); setPairs([...data.pairs].sort((a: Pair, b: Pair) => Number(b.id === 'B13') - Number(a.id === 'B13'))) })
      .catch(() => { if (!controller.signal.aborted) setError(true) })
    return () => controller.abort()
  }, [])

  const brands = [...new Set(pairs.map(pair => pair.brand))].sort()
  const families = [...new Set(pairs.map(pair => pair.family))].sort()
  const found = pairs.filter(pair => (!brand || pair.brand === brand) && (!family || pair.family === family)
    && `${pair.name} ${pair.brand} ${pair.family} ${pair.style_code}`.toLowerCase().includes(query.trim().toLowerCase()))
  const selected = pairs.find(pair => pair.id === selectedId)
  const hero = pairs.find(pair => pair.id === 'B13')

  function open(id: string, button: HTMLElement, photo = 0) {
    setSelectedPhoto(photo)
    origin.current = button
    setSelectedId(id)
  }
  function close() {
    setSelectedId(null)
    requestAnimationFrame(() => origin.current?.focus({ preventScroll: true }))
  }
  function navigate(direction: number) {
    const pool = found.some(pair => pair.id === selectedId) ? found : pairs
    const index = pool.findIndex(pair => pair.id === selectedId)
    const next = pool[(index + direction + pool.length) % pool.length]
    if (next) { setSelectedPhoto(0); setSelectedId(next.id) }
  }
  function pick(button: HTMLElement) {
    const pool = pairs.filter(pair => mood === 'any' || pair.moods.includes(mood))
    if (pool.length) open(pool[Math.floor(Math.random() * pool.length)].id, button)
  }

  return <>
    <header className="site-header">
      <a href="https://joshuablee.com/" className="wordmark">Joshua B. Lee<span>The YOUman Catalyst</span></a>
      <nav aria-label="Collection navigation"><a href="https://joshuablee.com/about">My story</a><a href="#collection" className="header-link">The collection <ArrowDown size={14} /></a></nav>
    </header>
    <main>
      <section className="editorial-hero" aria-labelledby="collection-title">
        <div className="hero-type">
          <p className="eyebrow"><span className="live-dot" /> Inside Joshua’s collection / No. 001</p>
          <h1 id="collection-title">THE<br />HOLY<br /><em>GRAIL.</em></h1>
          <div className="hero-story"><p className="favorite-label">My favorite. Full stop.</p><p>The Nike Air Mag. Straight out of <i>Back to the Future</i>, and right at the top of my collection.</p></div>
          <a className="text-link" href="#collection">Enter the collection <ArrowDown size={18} /></a>
          <div className="hero-index"><span>01 / {String(pairs.length || 104).padStart(3,'0')}</span><span>Joshua B. Lee’s personal archive</span></div>
        </div>
        <div className="hero-feature">
          <div className="feature-top"><span>Nike / 2011</span><span>Joshua’s favorite grail <span className="tiny-star">✳</span></span></div>
          <button type="button" className="hero-photo" disabled={!hero} aria-label="View Air Mag photographs" onClick={event => hero && open(hero.id, event.currentTarget, heroView)}>
            <img key={heroView} src={`/collection-media/B13/a${String(heroView + 1).padStart(2,'0')}.jpg`} alt={`Nike Air Mag Back to the Future, photograph ${heroView + 1}`} fetchPriority="high" />
            <span className="photo-open"><ArrowUpRight size={24} /><span>Explore the grail</span></span>
          </button>
          <div className="hero-caption"><div><h2>Nike Air Mag</h2><p>‘Back to the Future’ · 2011</p></div><span className="view-readout" aria-live="polite">0{heroView + 1}<span> / 08</span></span></div>
          <div className="hero-angles" aria-label="Air Mag photograph selector">{Array.from({length: 8}, (_,i) => <button type="button" key={i} aria-label={`Preview Air Mag photograph ${i + 1}`} aria-pressed={heroView === i} onClick={() => setHeroView(i)}><img src={`/collection-media/B13/a${String(i + 1).padStart(2,'0')}.webp`} alt="" /><span>0{i+1}</span></button>)}</div>
        </div>
      </section>
      <div className="archive-ribbon"><span>Not a store. A personal obsession.</span><span>Real pairs. Every available angle. <ArrowDown size={16} /></span></div>
      <section id="collection" className="collection" aria-labelledby="archive-title">
        <div className="collection-heading"><div><p className="eyebrow">The wall / Pick a pair. Get closer.</p><h2 id="archive-title">NOT YOUR<br />AVERAGE <span>CLOSET.</span></h2></div><p className="pair-count" aria-live="polite">{pairs.length ? `${found.length} ${found.length === 1 ? 'pair' : 'pairs'} to explore` : ''}</p></div>
        {error && <p role="alert">The collection couldn’t load. <button type="button" onClick={() => location.reload()}>Try again</button></p>}
        {!pairs.length && !error && <p role="status">Loading the collection…</p>}
        {!!pairs.length && <>
          <div className="collection-controls">
            <label className="search"><Search size={17} /><input aria-label="Search the collection" placeholder="Find your favorite pair" value={query} onChange={event => setQuery(event.target.value)} /></label>
            <select aria-label="Brand" value={brand} onChange={event => setBrand(event.target.value)}><option value="">All brands</option>{brands.map(value => <option key={value}>{value}</option>)}</select>
            <select aria-label="Family" value={family} onChange={event => setFamily(event.target.value)}><option value="">All styles</option>{families.map(value => <option key={value}>{value}</option>)}</select>
            {(query || brand || family) && <button type="button" className="clear" onClick={() => { setQuery(''); setBrand(''); setFamily('') }}>Clear</button>}
          </div>
          <div className="collection-grid">
            {found.map((pair, index) => <button type="button" className="pair-card" key={pair.id} onClick={event => open(pair.id, event.currentTarget)}>
              <span className="card-image"><span className="card-number">{String(index + 1).padStart(3,'0')}</span>{pairPhoto(pair) ? <img src={pairPhoto(pair)} alt="" loading="lazy" decoding="async" /> : <span className="missing-photo">Photograph unavailable</span>}<span className="card-open"><ArrowUpRight size={19} /></span></span>
              <span className="card-info"><span className="eyebrow">{pair.brand}</span><span className="card-name">{pair.name}</span><span className="card-bottom"><span>{pair.family}</span><span>{photoCount(pair) > 1 ? `${photoCount(pair)} views` : 'View details'}</span></span></span>
            </button>)}
          </div>
          {!found.length && <p className="empty" role="status">No pairs match. Try another brand, style, or search.</p>}
        </>}
        <div className="discovery"><div><p className="eyebrow">Leave it to chance</p><h2>YOUR MOOD.<br /><span>MY CLOSET.</span></h2></div><div className="mood-picker">{moods.map(([id,label]) => <button key={id} type="button" aria-pressed={id === mood} onClick={() => setMood(id)}>{label}</button>)}<button className="pick-button" type="button" disabled={!pairs.length} onClick={event => pick(event.currentTarget)}>Pick a pair <ArrowUpRight size={17} /></button></div></div>
      </section>
    </main>
    <footer className="collection-footer"><a href="https://joshuablee.com/">Joshua B. Lee</a><p>Product photography shows the model. Personal photographs show Joshua’s own pairs.</p><a href="#collection-title">Back to top ↑</a></footer>
    {selected && <PairGallery key={selected.id} pair={selected} initialPhoto={selectedPhoto} close={close} navigate={navigate} />}
  </>
}
