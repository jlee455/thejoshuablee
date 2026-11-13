export interface Pair {
  photos?: { src: string; thumbnail: string; full: string; sourceName: string; sourceUrl?: string }[]
  id: string
  name: string
  brand: string
  family: string
  style_code: string
  note: string
  moods: string[]
  colors: string[]
  angles: number
  viewer: 'spin' | 'view_angles' | 'static'
  static_photo: string | null
  height_class: 'low' | 'high'
}

export function frameUrl(id: string, frame = 0) {
  const number = String(frame + 1).padStart(2, '0')
  return `/collection-media/${id}/a${number}.webp`
}

export function pairPhoto(pair: Pair, frame = 0) {
  if (pair.photos?.length) return pair.photos[frame]?.thumbnail
  if (pair.angles) return frameUrl(pair.id, frame)
  return pair.static_photo ? `/collection-media/${pair.id}/still.webp` : undefined
}

export function fullPhoto(pair: Pair, frame = 0) {
  return pair.photos?.[frame]?.full ?? pairPhoto(pair, frame)?.replace(/\.webp$/, '.jpg')
}

export function displayPhoto(pair: Pair, frame = 0) {
  return pair.photos?.[frame]?.src ?? fullPhoto(pair, frame)
}

export function photoCount(pair: Pair) {
  return pair.photos?.length ?? Math.max(pair.angles, pair.static_photo ? 1 : 0)
}
