import test from 'node:test'
import assert from 'node:assert/strict'
import { readyImage, readySilhouette, silhouetteContains } from '../src/collection/image-ready.ts'
let loads = 0, release
class ImageStub {
  naturalWidth = 160; naturalHeight = 1
  set src(value) { this.value = value; loads++; queueMicrotask(() => value === 'broken' ? this.onerror() : this.onload()) }
  decode() { return this.value === 'delayed' ? new Promise(resolve => { release = resolve }) : Promise.resolve() }
}
globalThis.Image = ImageStub
const pixels = new Uint8ClampedArray(160 * 4); pixels[80 * 4 + 3] = 255
globalThis.document = { createElement: () => ({ getContext: () => ({ drawImage() {}, getImageData: () => ({ data: pixels }) }) }) }
test('artwork stays pending until decode and concurrent requests share one image', async () => {
  let resolved = false
  const first = readyImage('delayed'); const second = readyImage('delayed')
  assert.equal(first, second)
  first.then(() => { resolved = true })
  await new Promise(r => setImmediate(r)); assert.equal(resolved, false); assert.equal(loads, 1)
  release(); await first; assert.equal(resolved, true)
})
test('transparent padding cannot capture a neighboring shoe click', async () => {
  await readySilhouette('mask')
  assert.equal(silhouetteContains('mask', .1, .5), false)
  assert.equal(silhouetteContains('mask', .501, .5), true)
  assert.equal(silhouetteContains('mask', -1, .5), false)
  assert.equal(silhouetteContains('mask', 1, .5), false)
  assert.equal(silhouetteContains('not-loaded', .5, .5), false)
})
test('failed artwork rejects so the UI can offer a useful failure state', async () => {
  await assert.rejects(readyImage('broken'), /Image unavailable/)
})
