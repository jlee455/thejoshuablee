import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import { pairPhoto, fullPhoto, floatPhoto, photoCount } from './data'
import type { Pair } from './data'
import Wheel from './Wheel'
import Showcase from './Showcase'
import SeatedShoe from './SeatedShoe'
import { RotateStage } from './Motion'
import { tilt, resetTilt } from './tilt'
import { readyImage } from './image-ready'

function PairGallery({ pair, initialPhoto, close, navigate }: { pair: Pair; initialPhoto: number; close: () => void; navigate: (direction: number) => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [photo, setPhoto] = useState(initialPhoto)
  const [resolved, setResolved] = useState<number | null>(null)
  const [imageError, setImageError] = useState(false)
  const count = photoCount(pair)
  const url = floatPhoto(pair, photo)
  const shown = resolved ?? photo
  const source = pair.photos?.[shown]
  useEffect(() => {
    let active = true
    readyImage(url || '').then(() => { if (active) { setResolved(photo); setImageError(false) } }).catch(() => { if (active) setImageError(true) })
    return () => { active = false }
  }, [url, photo])
  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { element?.close(); document.body.style.overflow = previous }
  }, [])
  useEffect(() => {
    for (let i = 0; i < count; i++) { const image = new Image(); image.src = floatPhoto(pair,i) || '' }
  }, [pair, count])
  function changePhoto(direction: number) {
    setPhoto(current => ((current + direction) % count + count) % count)
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
        <RotateStage className="main-photo" count={count} step={changePhoto} label={`${pair.name}. Drag to rotate. Arrow keys change view.`}>
          <span className="gallery-photo-label">THE DETAILS / {String(shown + 1).padStart(2,'0')}</span>
          <div className="viewer-light" aria-hidden="true" />
          {resolved !== null && <SeatedShoe pair={pair} angle={resolved} variant="floor"/>}
          {resolved !== photo && <div className={`viewer-loading${resolved !== null ? ' changing' : ''}`} role="status">{resolved === null && <span className="shoe-skeleton" />}{imageError ? 'Photograph unavailable. Choose another view.' : 'Loading the details…'}</div>}

          <span className="viewer-drag">{count > 1 ? (pair.viewer === 'view_angles' || count <= 5 ? 'View angles · Drag to explore' : 'Drag to rotate') : 'Single photograph'}</span>
          {count > 1 && <div className="photo-navigation">
            <button type="button" className="icon-button" aria-label="Previous photograph" onClick={() => changePhoto(-1)}><ChevronLeft size={20} /></button>
            <span aria-live="polite">{shown + 1} / {count}</span>
            <button type="button" className="icon-button" aria-label="Next photograph" onClick={() => changePhoto(1)}><ChevronRight size={20} /></button>
          </div>}
        </RotateStage>
        {count > 1 && <div className="thumbnails" aria-label="Available photographs">
          {Array.from({ length: count }, (_, index) => <button type="button" key={index} aria-label={`View photograph ${index + 1}`} aria-pressed={shown === index} onClick={() => setPhoto(index)}>
            <img src={floatPhoto(pair, index)} alt="" loading="lazy" />
          </button>)}
        </div>}
      </div>
      <div className="gallery-details">
        <p className="eyebrow">Inside the collection / {pair.id}</p><p className="gallery-brand">{pair.brand} / {pair.family}</p>
        <h2 id="pair-title">{pair.name}</h2>
        {pair.style_code && <p className="style-code">Style {pair.style_code}</p>}
        <div className="swatches" aria-label="Color palette">{pair.colors.map((color, index) => <span key={index} style={{ background: color }} />)}</div>
        <a className="original-photo-link" href={fullPhoto(pair, shown)} target="_blank" rel="noopener noreferrer">Open original photograph <ArrowUpRight size={14}/></a><p className="gallery-credit">{source ? <>Photography: {source.sourceUrl ? <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">{source.sourceName}</a> : source.sourceName}.</> : 'Supplied model photography.'} Open a photograph at full resolution.</p>
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
      .then(data => { if (!Array.isArray(data.pairs) || !data.pairs.length) throw new Error('Collection empty'); const grails = ['B13','B22','B29','V43','B31']; setPairs([...data.pairs].sort((a: Pair, b: Pair) => (grails.includes(a.id) ? grails.indexOf(a.id) : 99) - (grails.includes(b.id) ? grails.indexOf(b.id) : 99))) })
      .catch(() => { if (!controller.signal.aborted) setError(true) })
    return () => controller.abort()
  }, [])

  const brands = [...new Set(pairs.map(pair => pair.brand))].sort()
  const families = [...new Set(pairs.map(pair => pair.family))].sort()
  const found = pairs.filter(pair => (!brand || pair.brand === brand) && (!family || pair.family === family)
    && `${String(pair.wall_order).padStart(3,'0')} ${pair.id} ${pair.name} ${pair.brand} ${pair.family} ${pair.style_code}`.toLowerCase().includes(query.trim().toLowerCase()))
  const selected = pairs.find(pair => pair.id === selectedId)
  const hero = pairs.find(pair => pair.id === 'B22')

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
    const pool = found.filter(pair => mood === 'any' || pair.moods.includes(mood))
    if (pool.length) open(pool[Math.floor(Math.random() * pool.length)].id, button)
  }

  return <>
    <header className="site-header">
      <a href="https://joshuablee.com/" className="wordmark">Joshua B. Lee<span>The YOUman Catalyst</span></a>
      <nav aria-label="Collection navigation"><a href="https://joshuablee.com/about">My story</a><a href="#collection" className="header-link">The collection <ArrowDown size={14} /></a></nav>
    </header>
    <main>
      <Wheel pairs={pairs} open={(pair, button) => open(pair.id,button)} />
      {hero && <section className="grail-reveal" aria-labelledby="tiffany-title">
        <div className="grail-copy"><p className="eyebrow">The inner circle / Friends & family</p><h2 id="tiffany-title">SOME GRAILS<br />DON’T GO<br /><em>ON SALE.</em></h2><p>Tiffany & Co. × Nike Air Force 1.<br />The Friends & Family edition.</p><button type="button" className="text-link" onClick={event => open(hero.id,event.currentTarget,heroView)}>Explore the Tiffany <ArrowUpRight size={18}/></button></div>
        <div className="grail-display" onPointerMove={tilt} onPointerLeave={resetTilt}>
          <RotateStage className="tiffany-stage" count={photoCount(hero)} threshold={34} step={n => setHeroView(v => ((v + n) % photoCount(hero) + photoCount(hero)) % photoCount(hero))} label="Tiffany Friends and Family. Drag to rotate or use arrow keys.">
            <SeatedShoe pair={hero} angle={heroView} variant="spotlight"/>
            <span className="spotlight-controls">
            <span className="viewer-drag">Drag to rotate</span>
            <button type="button" className="grail-step icon-button" aria-label="Next Tiffany angle" onClick={() => setHeroView(v => (v+1)%photoCount(hero))}><ChevronRight size={22}/></button>
            <span className="grail-count">{heroView + 1} / {photoCount(hero)}</span></span>
          </RotateStage>

        </div>
      </section>}
      <section className="personal-section" aria-labelledby="personal-title"><div className="personal-heading"><p className="eyebrow">200+ pairs. One very personal obsession.</p><h2 id="personal-title">“I’ve got over 200 pairs, and I still forget what’s in my own closet.”</h2><p>— Joshua B. Lee</p><div className="personal-actions"><a href="#collection" className="text-link">Explore the Vault <ArrowDown size={16}/></a><button type="button" className="outline-button" disabled={!found.length} onClick={event => pick(event.currentTarget)}>Pick a pair for me <ArrowUpRight size={16}/></button></div></div><div className="closet-photos"><img src="/collection-media/closet-1.webp" alt="Joshua’s personal sneaker collection" loading="lazy"/><img src="/collection-media/closet-2.webp" alt="A closer look inside Joshua’s sneaker closet" loading="lazy"/></div></section>
      <div className="featured-pairs">{['B13','B22','B29'].map((id,i) => { const pair=pairs.find(p=>p.id===id);return pair && <button key={id} type="button" onClick={event=>open(id,event.currentTarget)}><span className="eyebrow">0{i+1} / {i===0?'The favorite':i===1?'The inner circle':'The collector’s edition'}</span><Showcase pair={pair}/><span>{pair.name}</span><ArrowUpRight size={20}/></button> })}</div>
      <div className="archive-ribbon"><span>Not a store. A personal obsession.</span><span>Real pairs. Every available angle. <ArrowDown size={16} /></span></div>
      <section id="collection" className="collection" aria-labelledby="archive-title">
        <div className="collection-heading"><div><p className="eyebrow">The wall / Pick a pair. Get closer.</p><h2 id="archive-title">NOT YOUR<br />AVERAGE <span>CLOSET.</span></h2></div><p className="pair-count" aria-live="polite">{pairs.length ? `${found.length} of ${pairs.length} pairs` : ''}</p></div>
        {error && <p role="alert">The collection couldn’t load. <button type="button" onClick={() => location.reload()}>Try again</button></p>}
        {!pairs.length && !error && <p role="status">Loading the collection…</p>}
        {!!pairs.length && <>
          <div className="collection-toolbar"><div className="collection-controls"><span className="filter-count" aria-live="polite">{found.length} of {pairs.length} pairs</span>
            <label className="search"><Search size={17} /><input aria-label="Search the collection" placeholder="Find your favorite pair" value={query} onChange={event => setQuery(event.target.value)} /></label>
            <select aria-label="Brand" value={brand} onChange={event => setBrand(event.target.value)}><option value="">All brands</option>{brands.map(value => <option key={value}>{value}</option>)}</select>
            <select aria-label="Family" value={family} onChange={event => setFamily(event.target.value)}><option value="">All styles</option>{families.map(value => <option key={value}>{value}</option>)}</select>
          </div>
          <div className="active-filters">{(query || brand || family) && <button type="button" onClick={() => { setQuery(''); setBrand(''); setFamily('') }}>Clear all</button>}{query && <button onClick={() => setQuery('')}>“{query}” ×</button>}{brand && <button onClick={() => setBrand('')}>{brand} ×</button>}{family && <button onClick={() => setFamily('')}>{family} ×</button>}</div>
          </div><div className="light-rail" aria-hidden="true" data-filtered={!!(query || brand || family)}><i/><i/><i/><i/></div>
          <div className="collection-grid wall" onPointerMove={tilt} onPointerOut={resetTilt}>
            {found.map(pair => <button type="button" className="pair-card" key={pair.id} data-pair-id={pair.id} onClick={event => open(pair.id, event.currentTarget)}>
              <span className="card-image"><span className="card-number">{String(pair.wall_order || pairs.indexOf(pair) + 1).padStart(3,'0')}</span>{pairPhoto(pair) ? <SeatedShoe pair={pair}/> : <span className="missing-photo">Photograph unavailable</span>}<span className="card-open"><ArrowUpRight size={19} /></span></span>
              <span className="card-info"><span className="eyebrow">{pair.brand}</span><span className="card-name">{pair.name}</span><span className="card-bottom"><span>{pair.family}</span><span>{photoCount(pair) > 1 ? `${photoCount(pair)} views` : 'View details'}</span></span></span>
            </button>)}
          </div>
          {!found.length && <p className="empty" role="status">No pairs match. Try another brand, style, or search.</p>}
        </>}
        <div className="discovery"><div><p className="eyebrow">Leave it to chance</p><h2>YOUR MOOD.<br /><span>MY CLOSET.</span></h2></div><div className="mood-picker">{moods.map(([id,label]) => <button key={id} type="button" aria-pressed={id === mood} onClick={() => setMood(id)}>{label}</button>)}<button className="pick-button" type="button" disabled={!found.filter(pair => mood === 'any' || pair.moods.includes(mood)).length} onClick={event => pick(event.currentTarget)}>Pick a pair <ArrowUpRight size={17} /></button></div></div>
      </section>
    </main>
    <footer className="collection-footer"><a href="https://joshuablee.com/">Joshua B. Lee</a><p>Product photography and illustrated renderings showcase the models. Original photographs remain in each viewer.</p><a href="#collection-title">Back to top ↑</a></footer>
    {selected && <PairGallery key={selected.id} pair={selected} initialPhoto={selectedPhoto} close={close} navigate={navigate} />}
  </>
}
