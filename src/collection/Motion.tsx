import { useRef } from 'react'
import type { ReactNode } from 'react'

// Supplied Appendix B: accumulated 42px frame steps, wrap handled by caller.
// Capture keeps drags working off-image; pan-y reserves vertical page scrolling.
export function RotateStage({ children, count, step, threshold = 42, className = '', label }: { children: ReactNode; count: number; step: (n: number) => void; threshold?: number; className?: string; label: string }) {
  const drag = useRef<null | { id: number; last: number; acc: number }>(null)
  return <div className={`rotate-stage ${className}`} tabIndex={count > 1 ? 0 : undefined} role="group" aria-label={label}
    onPointerDown={event => {
      if (count < 2 || !event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest('button,a')) return
      drag.current = { id: event.pointerId, last: event.clientX, acc: 0 }; event.currentTarget.setPointerCapture(event.pointerId);event.currentTarget.classList.add('dragging')
    }}
    onPointerMove={event => {
      const d = drag.current; if (!d || d.id !== event.pointerId) return
      d.acc += event.clientX - d.last; d.last = event.clientX
      let delta = 0
      while (d.acc <= -threshold) { delta++; d.acc += threshold }
      while (d.acc >= threshold) { delta--; d.acc -= threshold }
      if (delta) step(delta)
    }}
    onPointerUp={event => { drag.current = null; event.currentTarget.classList.remove('dragging') }}
    onPointerCancel={event => { drag.current = null; event.currentTarget.classList.remove('dragging') }}
    onKeyDown={event => {
      if (count > 1 && ['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault();event.stopPropagation();step(event.key === 'ArrowLeft' ? -1 : 1) }
    }}>{children}</div>
}
