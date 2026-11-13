import { useEffect, useRef, useState } from 'react'
import type { Pair } from './data'
import { floatPhoto } from './data'

// The viewBox measures the visible silhouette, not the padded source canvas.
// This places every sole on the same physical baseline without editing originals.
export default function Showcase({ pair, className = '' }: { pair: Pair; className?: string }) {
  const s = pair.showcase
  const element = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect() }
    }, { rootMargin: '500px' })
    if (element.current) observer.observe(element.current)
    return () => observer.disconnect()
  }, [])
  return <svg ref={element} className={`showcase-shoe ${className}`} viewBox={s?.viewBox.join(' ') ?? '0 0 1024 800'} preserveAspectRatio="xMidYMax meet" role="img" aria-label={`${pair.name}${s?.ai ? ' — illustrated rendering' : ''}`}>
    <image href={visible ? s?.src ?? floatPhoto(pair) : undefined} width={s?.width ?? 1024} height={s?.height ?? 800}/>
  </svg>
}
