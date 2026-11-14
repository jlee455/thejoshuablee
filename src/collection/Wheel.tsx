import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveHorizontal } from 'lucide-react'
import type { Pair } from './data'
import { floatPhoto } from './data'
import { createFling, releaseVelocity } from './wheel-fling'
import { readySilhouette, readyImage, silhouetteContains } from './image-ready'

// Supplied wheel.html and Appendix E, with nine recycled DOM slots and settled React state.
export default function Wheel({ pairs, open }: { pairs: Pair[]; open: (pair: Pair, origin: HTMLElement) => void }) {
  const stage = useRef<HTMLDivElement>(null)
  const position = useRef(0)
  const travel = useRef({time: 0, pos: 0})
  const navigationTarget = useRef<number | null>(null)
  const [pos, setPos] = useState(0)
  const [imageRevision, setImageRevision] = useState(0)
  const ready = useRef(new Set<string>())
  const failed = useRef(new Set<string>())
  const captionAnchor = useRef(0)
  const pool = useRef<(HTMLButtonElement | null)[]>([])
  const motion = useRef<ReturnType<typeof createFling> | null>(null)
  const reduced = useRef(false)
  const drag = useRef<null | { id: number; x: number; start: number; moved: number; samples: [number, number][]; index: number | null; centeredAtDown: number }>(null)
  const [dragging, setDragging] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const length = pairs.length
  const mod = (n: number) => ((n % length) + length) % length
  const center = mod(Math.round(pos))
  const pair = pairs[center]
  function spacing() { return Math.min(300, Math.max(170, (stage.current?.clientWidth ?? 1000) * .4)) }
  function setPosition(value: number) {
    const now = performance.now(), dt = now-travel.current.time
    const velocity = dt > 0 && dt < 100 ? (value-travel.current.pos)*spacing()/dt : 0
    stage.current?.style.setProperty('--travel-tilt', `${reduced.current ? 0 : Math.max(-8,Math.min(8,-velocity*3))}deg`)
    travel.current={time:now,pos:value}
    position.current = value
    if (!length) return
    const anchor = Math.round(value), sp = spacing()
    if (anchor !== captionAnchor.current) { captionAnchor.current = anchor; setPos(anchor) }
    pool.current.forEach((el, slot) => {
      if (!el) return
      const index = anchor + slot - Math.min(4, Math.floor(length / 2)), shoe = pairs[mod(index)]
      const offset = index - value, a = Math.abs(offset), near = Math.max(0, 1 - a)
      if (el.dataset.pairId !== shoe.id) {
        el.dataset.pairId = shoe.id
        el.dataset.ready = ready.current.has(shoe.id) ? 'true' : 'false'
        const src = shoe.showcase?.src ?? floatPhoto(shoe) ?? ''
        readySilhouette(src).then(() => {
          ready.current.add(shoe.id)
          if (el.dataset.pairId === shoe.id) el.dataset.ready = 'true'
          setImageRevision(n => n + 1)
        }).catch(() => { failed.current.add(shoe.id); setImageRevision(n => n + 1) })
        void readyImage(floatPhoto(shoe) || src).catch(() => {})
        el.setAttribute('aria-label', `Select ${shoe.name}`)
        const images = el.querySelectorAll('svg')
        images.forEach(svg => { const s = shoe.showcase; svg.setAttribute('viewBox', s?.viewBox.join(' ') ?? '0 0 1024 800'); svg.setAttribute('aria-label', shoe.name); svg.querySelectorAll('image').forEach(img => { img.setAttribute('href', s?.src ?? floatPhoto(shoe) ?? ''); img.setAttribute('width', String(s?.width ?? 1024)); img.setAttribute('height', String(s?.height ?? 800)); }); const bounds = s?.viewBox ?? [0,0,1024,800]; svg.querySelectorAll('.shoe-glare, mask').forEach(el => ['x','y','width','height'].forEach((attr,i) => el.setAttribute(attr,String(bounds[i])))); })
      }
      el.dataset.wheelPosition = String(index)
      el.classList.toggle('center', index === anchor)
      el.style.transform = `translate(-50%, -50%) translate3d(${offset * sp}px,${Math.min(a, 3) * 10}px,${-a * 60}px) rotateY(${Math.max(-42, Math.min(42, offset * -14))}deg) scale(${Math.max(.55, 1 - a * .16)})`
      el.style.opacity = String(Math.max(0, 1 - a * .22))
      el.style.zIndex = String(100 - Math.round(a * 10))
      el.style.visibility = a > 4.5 ? 'hidden' : 'visible'
      el.style.setProperty('--shoe-light', shoe.colors[1] ?? '#ff7300')
      el.style.setProperty('--near', String(near))
      el.style.setProperty('--brightness', String(1 - .2 * Math.min(a, 2)))
      el.style.setProperty('--saturation', String(1 - .1 * Math.min(a, 2)))
      el.style.setProperty('--shadow-blur', `${18 + 8 * (1 - near)}px`)
      el.style.setProperty('--shadow-opacity', String(.22 + .36 * near))
      el.style.setProperty('--shadow-scale', String(.68 + .32 * near))
      el.style.setProperty('--reflection', String(.38 - .32 * Math.min(a / 3, 1)))
    })
  }
  function tweenTo(target: number) { navigationTarget.current = Math.round(target); motion.current?.tweenTo(target) }
  function stepBy(delta: number) { tweenTo((navigationTarget.current ?? Math.round(position.current)) + delta) }
  useLayoutEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)')
    reduced.current = media.matches
    const controller = createFling({ getPos: () => position.current, setPos: setPosition, spacing, reduceMotion: () => reduced.current, onSettle: value => { stage.current?.style.setProperty('--travel-tilt','0deg'); navigationTarget.current = null; setPos(value) } })
    motion.current = controller
    setPosition(position.current)
    const update = () => { reduced.current = media.matches; if (media.matches) controller.tweenTo(position.current) }
    const resize = new ResizeObserver(() => setPosition(position.current))
    if (stage.current) resize.observe(stage.current)
    media.addEventListener('change', update)
    return () => { controller.cancel(); resize.disconnect(); media.removeEventListener('change', update) }
    // Recycle nine slots; update the caption only when the nearest shoe changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairs])
  useEffect(() => {
    const stop = () => { if (document.hidden) { drag.current = null; setDragging(false); motion.current?.tweenTo(position.current) } }
    document.addEventListener('visibilitychange', stop)
    return () => document.removeEventListener('visibilitychange', stop)
  }, [])
  function resetHeroTilt() {
    stage.current?.style.setProperty('--hero-rx', '0deg')
    stage.current?.style.setProperty('--hero-ry', '0deg')
    stage.current?.style.setProperty('--hero-glare', '0')
  }
  function hoverHero(event: PointerEvent<HTMLDivElement>) {
    setKeyboardFocus(false)
    if (drag.current || event.pointerType !== 'mouse' || reduced.current || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const shoe = pool.current.find(el => el?.classList.contains('center'))
    if (!shoe) return
    const r = shoe.getBoundingClientRect()
    const x = Math.max(0, Math.min(1,(event.clientX-r.left)/r.width)), y = Math.max(0,Math.min(1,(event.clientY-r.top)/r.height))
    stage.current?.style.setProperty('--hero-ry', `${(x-.5)*16}deg`)
    stage.current?.style.setProperty('--hero-rx', `${(.5-y)*16}deg`)
    stage.current?.style.setProperty('--hero-glare', '.3')
    const light = shoe.querySelector('radialGradient')
    light?.setAttribute('cx', `${x*100}%`); light?.setAttribute('cy', `${y*100}%`)
  }
  function start(event: PointerEvent<HTMLDivElement>) {
    if (!length || !event.isPrimary || event.button !== 0) return
    setKeyboardFocus(false)
    motion.current?.cancel()
    navigationTarget.current = null
    // Hit-test opaque artwork front-to-back, not overlapping rectangular buttons.
    let hit = [...pool.current].filter((el): el is HTMLButtonElement => !!el && el.dataset.ready === 'true')
      .sort((a,b) => Number(b.style.zIndex) - Number(a.style.zIndex)).find(el => {
        const svg = el.querySelector('.wheel-photo svg') as SVGSVGElement
        const matrix = svg.getScreenCTM()
        if (!matrix) return false
        const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
        const image = svg.querySelector('image')!
        return silhouetteContains(image.getAttribute('href')!, point.x / Number(image.getAttribute('width')), point.y / Number(image.getAttribute('height')))
      })
    // An opaque neighbor always wins. Empty space inside the centered button is
    // still its click target (the Air Mag's tall silhouette leaves its center empty).
    hit ??= pool.current.find(el => {
      if (!el?.classList.contains('center') || el.dataset.ready !== 'true') return false
      const r = el.getBoundingClientRect()
      return event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom
    }) ?? undefined
    event.currentTarget.focus({ preventScroll: true })
    drag.current = { centeredAtDown: Math.round(position.current), id: event.pointerId, x: event.clientX, start: position.current, moved: 0, samples: [[event.clientX, event.timeStamp]], index: hit ? Number(hit.dataset.wheelPosition) : null }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d || d.id !== event.pointerId) { hoverHero(event); return }
    resetHeroTilt()
    d.moved += Math.abs(event.clientX - d.samples[d.samples.length - 1][0])
    const now = event.timeStamp
    d.samples.push([event.clientX, now])
    while (d.samples.length > 2 && now - d.samples[0][1] > 100) d.samples.shift()
    setPosition(d.start - (event.clientX - d.x) / spacing())
  }
  function finish(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const d = drag.current
    if (!d || d.id !== event.pointerId) return
    drag.current = null; setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    if (cancelled) { tweenTo(Math.round(position.current)); return }
    if (d.moved < 6) {
      if (d.index !== null) {
        if (d.index === Math.round(position.current) && d.index === d.centeredAtDown) open(pairs[mod(d.index)], stage.current!)
        else tweenTo(d.index)
      }
      return
    }
    motion.current?.release(releaseVelocity(d.samples, event.clientX, event.timeStamp))
  }
  const slots = Array.from({ length: Math.min(9, length) }, (_, i) => i)
  return <section className="wheel-hero" aria-labelledby="collection-title">
    <div className="wheel-heading"><p className="eyebrow"><span className="live-dot" /> Joshua B. Lee / The personal collection</p><h1 id="collection-title">SOME PEOPLE COLLECT.<br /><em>I CAN’T HELP IT.</em></h1><p className="wheel-intro">A few grails. A lot of stories. Take one for a spin.</p></div>
    <div ref={stage} className={`wheel-stage${dragging ? ' dragging' : ''}${keyboardFocus ? ' keyboard-focus' : ''}`} tabIndex={0} role="slider" aria-valuemin={1} aria-valuemax={Math.max(1,length)} aria-valuenow={center + 1} aria-valuetext={pair ? `Shoe ${center + 1} of ${length}: ${pair.name}` : "Loading collection"} aria-label="Shoe wheel. Drag, or use arrow keys. Enter opens the centered pair. Home and End select the first and last pair."
      onPointerDown={start} onPointerMove={move} onPointerLeave={resetHeroTilt} onFocus={event => { if (event.currentTarget.matches(':focus-visible')) setKeyboardFocus(true) }} onBlur={() => setKeyboardFocus(false)} onPointerUp={event => finish(event)} onPointerCancel={event => finish(event, true)} onLostPointerCapture={event => finish(event, true)}
      onKeyDown={event => {
        setKeyboardFocus(true)
        resetHeroTilt()
        if (!length) return
        if (['ArrowLeft','ArrowRight','Home','End','Enter',' '].includes(event.key)) event.preventDefault()
        if (event.key === 'ArrowLeft') stepBy(-1)
        if (event.key === 'ArrowRight') stepBy(1)
        if (event.key === 'Home') { navigationTarget.current = null; motion.current?.cancel(); setPosition(0); setPos(0) }
        if (event.key === 'End') { navigationTarget.current = null; motion.current?.cancel(); setPosition(length - 1); setPos(length - 1) }
        if (event.key === 'Enter' || event.key === ' ') { motion.current?.cancel(); const selected = Math.round(position.current); setPosition(selected); setPos(selected); open(pairs[mod(selected)], event.currentTarget) }
      }}>
      <div className="wheel-architecture" aria-hidden="true"><div className="spotlight left" /><div className="spotlight right" /><div className="orbit orbit-back" /><div className="orbit orbit-front" /><div className="wheel-plinth" /><span className="vault-watermark">THE VAULT</span></div>
      <div className="wheel-track" data-image-revision={imageRevision}>
        {slots.map(slot => <button key={slot} ref={el => { pool.current[slot] = el }} type="button" className="wheel-item" tabIndex={-1}>
          <span className="shoe-aura" /><span className="wheel-photo"><svg preserveAspectRatio="xMidYMax meet" role="img"><image/><defs><mask id={`shoe-mask-${slot}`} maskUnits="userSpaceOnUse" style={{maskType:'alpha'}}><image/></mask><radialGradient id={`shoe-light-${slot}`}><stop offset="0" stopColor="#fff5dc" stopOpacity=".9"/><stop offset="1" stopColor="#e2f3ff" stopOpacity="0"/></radialGradient></defs><rect className="shoe-glare" mask={`url(#shoe-mask-${slot})`} fill={`url(#shoe-light-${slot})`} /></svg></span><span className="shoe-shadow" /><span className="shoe-reflection" aria-hidden="true"><svg preserveAspectRatio="xMidYMax meet" role="img"><image/></svg></span>
        </button>)}
      </div>
      {(!pair || !ready.current.has(pair.id)) && <div className="wheel-loading" role="status"><span className="shoe-skeleton" />{pair && failed.current.has(pair.id) ? 'This photograph is unavailable. Try the next pair.' : 'Bringing the collection into focus…'}</div>}
      <span className="drag-affordance"><MoveHorizontal size={19} /> Drag to spin</span>
    </div>
    {pair && <div className="wheel-console"><button className="icon-button" type="button" aria-label="Previous shoe on wheel" onClick={() => stepBy(-1)}><ArrowLeft size={20}/></button><div className="wheel-info" aria-live={dragging ? 'off' : 'polite'}><p className="eyebrow">{pair.id === 'B13' ? 'Joshua’s favorite grail' : pair.brand} <span> / {String(pair.wall_order ?? center + 1).padStart(3,'0')}</span></p><h2>{pair.name}</h2><button type="button" className="wheel-open" onClick={event => open(pair,event.currentTarget)}>Pick it up <ArrowUpRight size={16}/></button></div><button className="icon-button" type="button" aria-label="Next shoe on wheel" onClick={() => stepBy(1)}><ArrowRight size={20}/></button></div>}
    <div className="wheel-bottom"><span>{length || '—'} catalogued pairs</span><span>Not a store. A personal obsession.</span><a href="#collection">Explore the wall ↓</a></div>
  </section>
}
