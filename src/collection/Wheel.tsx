import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveHorizontal } from 'lucide-react'
import type { Pair } from './data'
import { floatPhoto } from './data'
import { createFling, releaseVelocity } from './wheel-fling'

// Supplied wheel.html and Appendix E, with nine recycled DOM slots and settled React state.
export default function Wheel({ pairs, open }: { pairs: Pair[]; open: (pair: Pair, origin: HTMLElement) => void }) {
  const stage = useRef<HTMLDivElement>(null)
  const position = useRef(0)
  const navigationTarget = useRef<number | null>(null)
  const [pos, setPos] = useState(0)
  const pool = useRef<(HTMLButtonElement | null)[]>([])
  const motion = useRef<ReturnType<typeof createFling> | null>(null)
  const reduced = useRef(false)
  const drag = useRef<null | { id: number; x: number; start: number; moved: number; samples: [number, number][]; index: number | null; centeredAtDown: number }>(null)
  const [dragging, setDragging] = useState(false)
  const length = pairs.length
  const mod = (n: number) => ((n % length) + length) % length
  const center = mod(Math.round(pos))
  const pair = pairs[center]
  function spacing() { return Math.min(300, Math.max(170, (stage.current?.clientWidth ?? 1000) * .4)) }
  function setPosition(value: number) {
    position.current = value
    if (!length) return
    const anchor = Math.round(value), sp = spacing()
    pool.current.forEach((el, slot) => {
      if (!el) return
      const index = anchor + slot - Math.min(4, Math.floor(length / 2)), shoe = pairs[mod(index)]
      const offset = index - value, a = Math.abs(offset), near = Math.max(0, 1 - a)
      if (el.dataset.pairId !== shoe.id) {
        el.dataset.pairId = shoe.id
        el.setAttribute('aria-label', `View ${shoe.name}`)
        const images = el.querySelectorAll('img')
        images.forEach((img, i) => { img.src = floatPhoto(shoe) ?? ''; img.alt = i ? '' : shoe.name })
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
    const controller = createFling({ getPos: () => position.current, setPos: setPosition, spacing, reduceMotion: () => reduced.current, onSettle: value => { navigationTarget.current = null; setPos(value) } })
    motion.current = controller
    setPosition(position.current)
    const update = () => { reduced.current = media.matches; if (media.matches) controller.tweenTo(position.current) }
    const resize = new ResizeObserver(() => setPosition(position.current))
    if (stage.current) resize.observe(stage.current)
    media.addEventListener('change', update)
    return () => { controller.cancel(); resize.disconnect(); media.removeEventListener('change', update) }
    // Each frame writes only the nine shoe slots; React updates when the wheel settles.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairs])
  useEffect(() => {
    const stop = () => { if (document.hidden) { drag.current = null; setDragging(false); motion.current?.tweenTo(position.current) } }
    document.addEventListener('visibilitychange', stop)
    return () => document.removeEventListener('visibilitychange', stop)
  }, [])
  function start(event: PointerEvent<HTMLDivElement>) {
    if (!length || !event.isPrimary || event.button !== 0) return
    motion.current?.cancel()
    navigationTarget.current = null
    const button = (event.target as HTMLElement).closest<HTMLElement>('[data-wheel-position]')
    event.currentTarget.focus({ preventScroll: true })
    drag.current = { centeredAtDown: Math.round(position.current), id: event.pointerId, x: event.clientX, start: position.current, moved: 0, samples: [[event.clientX, event.timeStamp]], index: button ? Number(button.dataset.wheelPosition) : null }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d || d.id !== event.pointerId) return
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
    <div ref={stage} className={`wheel-stage${dragging ? ' dragging' : ''}`} tabIndex={0} role="slider" aria-valuemin={1} aria-valuemax={Math.max(1,length)} aria-valuenow={center + 1} aria-valuetext={pair ? `Shoe ${center + 1} of ${length}: ${pair.name}` : "Loading collection"} aria-label="Shoe wheel. Drag, or use arrow keys. Enter opens the centered pair. Home and End select the first and last pair."
      onPointerDown={start} onPointerMove={move} onPointerUp={event => finish(event)} onPointerCancel={event => finish(event, true)} onLostPointerCapture={event => finish(event, true)}
      onKeyDown={event => {
        if (!length) return
        if (['ArrowLeft','ArrowRight','Home','End','Enter',' '].includes(event.key)) event.preventDefault()
        if (event.key === 'ArrowLeft') stepBy(-1)
        if (event.key === 'ArrowRight') stepBy(1)
        if (event.key === 'Home') tweenTo(position.current - mod(position.current))
        if (event.key === 'End') tweenTo(position.current - mod(position.current) + length - 1)
        if (event.key === 'Enter' || event.key === ' ') { motion.current?.cancel(); const selected = Math.round(position.current); setPosition(selected); setPos(selected); open(pairs[mod(selected)], event.currentTarget) }
      }}>
      <div className="wheel-architecture" aria-hidden="true"><div className="spotlight left" /><div className="spotlight right" /><div className="orbit orbit-back" /><div className="orbit orbit-front" /><div className="wheel-plinth" /><span className="vault-watermark">THE VAULT</span></div>
      <div className="wheel-track">
        {slots.map(slot => <button key={slot} ref={el => { pool.current[slot] = el }} type="button" className="wheel-item" tabIndex={-1}>
          <span className="shoe-aura" /><span className="wheel-photo"><img alt="" draggable={false} /></span><span className="shoe-shadow" /><span className="shoe-reflection" aria-hidden="true"><img alt="" draggable={false} /></span>
        </button>)}
      </div>
      <span className="drag-affordance"><MoveHorizontal size={19} /> Drag to spin</span>
    </div>
    {pair && <div className="wheel-console"><button className="icon-button" type="button" aria-label="Previous shoe on wheel" onClick={() => stepBy(-1)}><ArrowLeft size={20}/></button><div className="wheel-info" aria-live={dragging ? 'off' : 'polite'}><p className="eyebrow">{pair.id === 'B13' ? 'Joshua’s favorite grail' : pair.brand} <span> / {String(center + 1).padStart(3,'0')}</span></p><h2>{pair.name}</h2><button type="button" className="wheel-open" onClick={event => open(pair,event.currentTarget)}>Pick it up <ArrowUpRight size={16}/></button></div><button className="icon-button" type="button" aria-label="Next shoe on wheel" onClick={() => stepBy(1)}><ArrowRight size={20}/></button></div>}
    <div className="wheel-bottom"><span>{length || '—'} catalogued pairs</span><span>Not a store. A personal obsession.</span><a href="#collection">Explore the wall ↓</a></div>
  </section>
}
