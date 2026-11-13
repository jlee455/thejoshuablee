import type { PointerEvent } from 'react'

// Supplied Appendix A: pointer tilt and glare; disabled for touch/reduced motion.
export function tilt(event: PointerEvent<HTMLElement>) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const card = (event.target as HTMLElement).closest<HTMLElement>('.pair-card') ?? event.currentTarget, r = card.getBoundingClientRect()
  const x = (event.clientX - r.left) / r.width, y = (event.clientY - r.top) / r.height
  card.style.setProperty('--ry', `${(x - .5) * 11}deg`)
  card.style.setProperty('--rx', `${(.5 - y) * 9}deg`)
  card.style.setProperty('--mx', `${x * 100}%`)
  card.style.setProperty('--my', `${y * 100}%`)
}
export function resetTilt(event: PointerEvent<HTMLElement>) {
  const card = (event.target as HTMLElement).closest<HTMLElement>('.pair-card') ?? event.currentTarget
  if (event.relatedTarget instanceof Node && card.contains(event.relatedTarget)) return
  card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry','0deg')
}

