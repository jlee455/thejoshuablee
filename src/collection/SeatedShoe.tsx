import { useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { Pair } from './data'
import { readyImage } from './image-ready'

// One measured sole plane for the wall, spotlight and full viewer. The source
// canvas is translated, never cropped to a guessed photo center or fixed offset.
export default function SeatedShoe({ pair, angle, variant = 'wall' }: { pair: Pair; angle?: number; variant?: 'wall' | 'spotlight' | 'floor' }) {
  const asset = angle === undefined ? pair.seating : pair.angle_seating[angle]
  const ref = useRef<HTMLSpanElement>(null)
  const id = useId().replace(/:/g, '')
  const [visible, setVisible] = useState(variant !== 'wall')
  const [loaded, setLoaded] = useState('')
  const [painted, setPainted] = useState('')
  const [failed, setFailed] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { setVisible(true); observer.disconnect() }
    }, { rootMargin: '400px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!visible) return
    let active = true
    readyImage(asset.src).then(() => { if (active) setLoaded(asset.src) }).catch(() => { if (active) setFailed(asset.src) })
    return () => { active = false }
  }, [visible, asset.src])
  const height = variant === 'wall' ? 1000 : 700
  const sole = height - 75
  const [bx, , bw, bh] = asset.bounds
  const scale = variant === 'wall' ? asset.normalizedScale : Math.min(780 / bw, (sole - 75) / bh)
  const width = bw * scale, left = (1000 - width) / 2, top = sole - bh * scale
  const ready = loaded === asset.src && painted === asset.src
  const style = { '--seat-ratio': `1000 / ${height}`, '--sole': `${sole / height * 100}%`, '--contact-left': `${(1000-width*.8)/20}%`, '--contact-width': `${width*.08}%` } as CSSProperties
  return <span ref={ref} className={`shoe-seat seat-${variant}`} style={style} data-seat-id={pair.id} data-ready={ready} data-source={asset.src} data-source-sole={asset.soleY} data-rendered-sole={sole} data-rendered-top={top} data-rendered-width={width}>
    <span className="seat-glow" aria-hidden="true"/>
    {variant !== 'floor' && <span className="seat-shelf" aria-hidden="true"/>}
    <span className="seat-contact" aria-hidden="true"/>
    <svg className="seat-art" viewBox={`0 0 1000 ${height}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={`${pair.name}${angle === undefined && pair.showcase?.ai ? ' — illustrated rendering' : ''}`}>
      <defs>
        <clipPath id={`${id}-bounds`}><rect x={left} y={top} width={width} height={bh*scale}/></clipPath>
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height={height} style={{maskType:'alpha'}}><image href={ready ? asset.src : undefined} x={left-bx*scale} y={sole-asset.soleY*scale} width={asset.width*scale} height={asset.height*scale}/></mask>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e8f4ff" stopOpacity=".12"/><stop offset=".6" stopColor="#ffffff" stopOpacity="0"/><stop offset="1" stopColor="#ff8a38" stopOpacity=".18"/></linearGradient>
      </defs>
      <g clipPath={`url(#${id}-bounds)`}>
        <image className="seat-source" href={visible ? asset.src : undefined} onLoad={() => setPainted(asset.src)} onError={() => setFailed(asset.src)} x={left-bx*scale} y={sole-asset.soleY*scale} width={asset.width*scale} height={asset.height*scale}/>
        <rect x={left} y={top} width={width} height={bh*scale} mask={`url(#${id}-mask)`} fill={`url(#${id}-rim)`} className="seat-rim"/>
      </g>
    </svg>
    {!ready && <span className="seat-loading" role="status"><span className="shoe-skeleton"/>{failed === asset.src ? 'Photograph unavailable' : 'Bringing this pair into focus…'}</span>}
  </span>
}
