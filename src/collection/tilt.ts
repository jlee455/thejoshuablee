import type { PointerEvent } from 'react'

type Motion = { x: number; y: number; tx: number; ty: number; raf: number }
const states = new WeakMap<HTMLElement, Motion>()
function target(card: HTMLElement, x: number, y: number) {
  let state = states.get(card)
  if (!state) { state = { x:0,y:0,tx:0,ty:0,raf:0 }; states.set(card,state) }
  state.tx=x; state.ty=y
  if (state.raf) return
  const tick = () => {
    state.x += (state.tx-state.x)*.12; state.y += (state.ty-state.y)*.12
    card.style.setProperty('--rx',`${state.x}deg`); card.style.setProperty('--ry',`${state.y}deg`)
    if (card.isConnected && Math.abs(state.tx-state.x)+Math.abs(state.ty-state.y)>.02) state.raf=requestAnimationFrame(tick)
    else { state.raf=0; card.style.setProperty('--rx',`${state.tx}deg`);card.style.setProperty('--ry',`${state.ty}deg`) }
  }
  state.raf=requestAnimationFrame(tick)
}
export function tilt(event: PointerEvent<HTMLElement>) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const card = (event.target as HTMLElement).closest<HTMLElement>('.pair-card') ?? (event.currentTarget.matches('.grail-display') ? event.currentTarget : null)
  if (!card) return
  const r=card.getBoundingClientRect()
  const x=Math.max(0,Math.min(1,(event.clientX-r.left)/r.width)), y=Math.max(0,Math.min(1,(event.clientY-r.top)/r.height))
  target(card,(.5-y)*16,(x-.5)*16)
  card.style.setProperty('--mx',`${x*100}%`);card.style.setProperty('--my',`${y*100}%`)
}
export function resetTilt(event: PointerEvent<HTMLElement>) {
  const card=(event.target as HTMLElement).closest<HTMLElement>('.pair-card') ?? (event.currentTarget.matches('.grail-display') ? event.currentTarget : null)
  if (!card) return
  if (event.relatedTarget instanceof Node && card.contains(event.relatedTarget)) return
  target(card,0,0)
}
