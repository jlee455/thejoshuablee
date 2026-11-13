import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveHorizontal } from 'lucide-react'
import type { Pair } from './data'
import { floatPhoto } from './data'

// Port of supplied wheel.html: index-space drag, 100ms velocity, cubic snap,
// perspective/scale/fade curve. Adds cyclic travel, bounded DOM, pointer cleanup,
// real silhouette assets, keyboard focus and live reduced-motion changes.
export default function Wheel({ pairs, open }: { pairs: Pair[]; open: (pair: Pair, origin: HTMLElement) => void }) {
  const stage = useRef<HTMLDivElement>(null)
  const position = useRef(0)
  const [pos, setPos] = useState(0)
  const raf = useRef(0)
  const reduced = useRef(false)
  const drag = useRef<null | { id: number; x: number; start: number; moved: number; samples: [number, number][]; index: number | null }>(null)
  const [dragging, setDragging] = useState(false)
  const length = pairs.length
  const mod = (n: number) => ((n % length) + length) % length
  const center = mod(Math.round(pos))
  const pair = pairs[center]
  function setPosition(value: number) { position.current = value; setPos(value) }
  function spacing() { return Math.min(360, Math.max(188, (stage.current?.clientWidth ?? 1000) * .3)) }
  function tweenTo(target: number) {
    cancelAnimationFrame(raf.current)
    if (reduced.current) { setPosition(target); return }
    const from = position.current
    let start: number | undefined
    const tick = (now: number) => {
      start ??= now
      const k = Math.min(1, (now - start) / 440)
      setPosition(from + (target - from) * (1 - Math.pow(1 - k, 3)))
      if (k < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)')
    reduced.current = media.matches
    const update = () => { reduced.current = media.matches; if (media.matches) { cancelAnimationFrame(raf.current); position.current = Math.round(position.current); setPos(position.current) } }
    media.addEventListener('change', update)
    return () => { cancelAnimationFrame(raf.current); media.removeEventListener('change', update) }
  }, [])
  function start(event: PointerEvent<HTMLDivElement>) {
    if (!length || !event.isPrimary || event.button !== 0) return
    cancelAnimationFrame(raf.current)
    const button = (event.target as HTMLElement).closest<HTMLElement>('[data-wheel-position]')
    drag.current = { id: event.pointerId, x: event.clientX, start: position.current, moved: 0, samples: [[event.clientX, event.timeStamp]], index: button ? Number(button.dataset.wheelPosition) : null }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d || d.id !== event.pointerId) return
    d.moved = Math.max(d.moved, Math.abs(event.clientX - d.x))
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
        if (d.index === Math.round(position.current)) open(pairs[mod(d.index)], stage.current!)
        else tweenTo(d.index)
      }
      return
    }
    const a = d.samples[0], b = d.samples[d.samples.length - 1]
    const velocity = event.timeStamp - b[1] > 120 ? 0 : (b[0] - a[0]) / Math.max(1, b[1] - a[1])
    const glide = reduced.current ? 0 : Math.max(-2.5, Math.min(2.5, velocity * 140 / spacing()))
    tweenTo(Math.round(position.current - glide))
  }
  const slots = Array.from({ length: Math.min(9, length) }, (_, i) => Math.round(pos) + i - Math.min(4, Math.floor(length / 2)))
  return <section className="wheel-hero" aria-labelledby="collection-title">
    <div className="wheel-heading"><p className="eyebrow"><span className="live-dot" /> Joshua B. Lee / The personal collection</p><h1 id="collection-title">SOME PEOPLE COLLECT.<br /><em>I CAN’T HELP IT.</em></h1><p className="wheel-intro">A few grails. A lot of stories. Take one for a spin.</p></div>
    <div ref={stage} className={`wheel-stage${dragging ? ' dragging' : ''}`} tabIndex={0} role="group" aria-roledescription="carousel" aria-label="Shoe wheel. Drag, or use arrow keys. Enter opens the centered pair. Home and End select the first and last pair."
      onPointerDown={start} onPointerMove={move} onPointerUp={event => finish(event)} onPointerCancel={event => finish(event, true)}
      onKeyDown={event => {
        if (!length) return
        if (['ArrowLeft','ArrowRight','Home','End','Enter',' '].includes(event.key)) event.preventDefault()
        if (event.key === 'ArrowLeft') tweenTo(Math.round(position.current) - 1)
        if (event.key === 'ArrowRight') tweenTo(Math.round(position.current) + 1)
        if (event.key === 'Home') tweenTo(position.current - mod(position.current))
        if (event.key === 'End') tweenTo(position.current - mod(position.current) + length - 1)
        if (event.key === 'Enter' || event.key === ' ') open(pairs[mod(Math.round(position.current))], event.currentTarget)
      }}>
      <div className="wheel-architecture" aria-hidden="true"><div className="spotlight left" /><div className="spotlight right" /><div className="orbit orbit-back" /><div className="orbit orbit-front" /><div className="wheel-plinth" /><span className="vault-watermark">THE VAULT</span></div>
      <div className="wheel-track">
        {slots.map(index => {
          const shoe = pairs[mod(index)], offset = index - pos, a = Math.abs(offset)
          const scale = Math.max(.52, 1 - Math.min(a * .16, .48))
          const rotY = Math.max(-42, Math.min(42, offset * -18))
          const x = offset * spacing(), drop = Math.min(a, 3) * 24
          const style = { transform: `translate(-50%, -50%) translate3d(${x}px,${drop}px,${-a * 70}px) rotateY(${rotY}deg) rotateZ(${-offset * 3}deg) scale(${scale})`, opacity: Math.max(.06, 1 - a * .27), zIndex: 100 - Math.round(a * 10), '--shoe-light': shoe.colors[1] ?? '#ff7300' } as CSSProperties
          return <button key={index} type="button" className={`wheel-item${Math.round(pos) === index ? ' center' : ''}`} data-wheel-position={index} data-pair-id={shoe.id} style={style} tabIndex={-1} aria-label={`View ${shoe.name}`}>
            <span className="shoe-aura" /><span className="wheel-photo"><img src={floatPhoto(shoe)} alt={shoe.name} draggable={false} loading={mod(index) < 5 ? 'eager' : 'lazy'} fetchPriority={mod(index) === 0 ? 'high' : 'auto'} /></span><span className="shoe-shadow" /><span className="shoe-reflection" aria-hidden="true"><img src={floatPhoto(shoe)} alt="" draggable={false} loading="lazy" /></span>
          </button>
        })}
      </div>
      <span className="drag-affordance"><MoveHorizontal size={19} /> Drag to spin</span>
    </div>
    {pair && <div className="wheel-console"><button className="icon-button" type="button" aria-label="Previous shoe on wheel" onClick={() => tweenTo(Math.round(position.current) - 1)}><ArrowLeft size={20}/></button><div className="wheel-info" aria-live={dragging ? 'off' : 'polite'}><p className="eyebrow">{pair.id === 'B13' ? 'Joshua’s favorite grail' : pair.brand} <span> / {String(center + 1).padStart(3,'0')}</span></p><h2>{pair.name}</h2><button type="button" className="wheel-open" onClick={event => open(pair,event.currentTarget)}>Pick it up <ArrowUpRight size={16}/></button></div><button className="icon-button" type="button" aria-label="Next shoe on wheel" onClick={() => tweenTo(Math.round(position.current) + 1)}><ArrowRight size={20}/></button></div>}
    <div className="wheel-bottom"><span>{length || '—'} catalogued pairs</span><span>Not a store. A personal obsession.</span><a href="#collection">Explore the wall ↓</a></div>
  </section>
}
