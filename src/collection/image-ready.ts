// Shared decode cache: only reveal artwork after it is decoded; retain failed states.
const images = new Map<string, Promise<HTMLImageElement>>()
export function readyImage(src: string) {
  let promise = images.get(src)
  if (!promise) {
    promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image()
      image.onload = () => { image.decode().then(() => resolve(image), reject) }
      image.onerror = () => reject(new Error('Image unavailable'))
      image.src = src
    })
    images.set(src, promise)
  }
  return promise
}
export type Silhouette = { width: number; height: number; alpha: Uint8ClampedArray }
const masks = new Map<string, Silhouette>()
export async function readySilhouette(src: string) {
  const image = await readyImage(src)
  if (!masks.has(src)) {
    const canvas = document.createElement('canvas')
    canvas.width = 160; canvas.height = Math.round(160 * image.naturalHeight / image.naturalWidth)
    const context = canvas.getContext('2d', { willReadFrequently: true })!
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    masks.set(src, { width: canvas.width, height: canvas.height, alpha: context.getImageData(0, 0, canvas.width, canvas.height).data })
  }
  return masks.get(src)!
}
export function silhouetteContains(src: string, x: number, y: number) {
  const mask = masks.get(src)
  if (!mask || x < 0 || y < 0 || x >= 1 || y >= 1) return false
  return mask.alpha[(Math.floor(y * mask.height) * mask.width + Math.floor(x * mask.width)) * 4 + 3] > 40
}
