// Port of supplied wheel-fling.js, Appendix E (Collection: From 7 to 10).
// Preserve the site's circular wheel; re-sample at release so a held drag cannot fling.
export type Sample = [number, number]
export const CONFIG = { window: 100, threshold: .35, tau: 300, maxSteps: 6, stop: .15, snap: 380, tap: 6 }
export function releaseVelocity(samples: Sample[], x: number, now: number) {
  const recent = [...samples, [x, now] as Sample].filter(s => now - s[1] <= CONFIG.window)
  if (recent.length < 2) return 0
  const a = recent[0], b = recent[recent.length - 1]
  return (b[0] - a[0]) / Math.max(1, b[1] - a[1])
}
export function glideStep(velocity: number, dt: number) {
  const decay = Math.exp(-dt / CONFIG.tau)
  return { distance: velocity * CONFIG.tau * (1 - decay), velocity: velocity * decay }
}
export function createFling(host: { getPos: () => number; setPos: (n: number) => void; spacing: () => number; reduceMotion: () => boolean; onSettle: (n: number) => void }) {
  let raf = 0
  const cancel = () => { cancelAnimationFrame(raf); raf = 0 }
  function tweenTo(target: number) {
    cancel(); target = Math.round(target)
    if (host.reduceMotion()) { host.setPos(target); host.onSettle(target); return }
    const from = host.getPos()
    let start: number | undefined
    const step = (ts: number) => {
      start ??= ts
      const k = Math.min(1, (ts - start) / CONFIG.snap)
      host.setPos(from + (target - from) * (1 - Math.pow(1 - k, 3)))
      if (k < 1) raf = requestAnimationFrame(step)
      else { raf = 0; host.onSettle(target) }
    }
    raf = requestAnimationFrame(step)
  }
  function release(v: number) {
    cancel()
    if (host.reduceMotion() || Math.abs(v) < CONFIG.threshold) { tweenTo(host.getPos()); return }
    const sp = host.spacing(), from = host.getPos()
    let velocity = -v / sp, last: number | undefined
    const frame = (ts: number) => {
      last ??= ts
      const { distance, velocity: next } = glideStep(velocity, Math.min(50, ts - last))
      last = ts; velocity = next
      const p = Math.max(from - CONFIG.maxSteps, Math.min(from + CONFIG.maxSteps, host.getPos() + distance))
      host.setPos(p)
      if (Math.abs(p - from) >= CONFIG.maxSteps || Math.abs(velocity) * sp < CONFIG.stop) tweenTo(p)
      else raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
  }
  return { cancel, tweenTo, release }
}
