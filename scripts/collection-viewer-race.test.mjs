import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'

// Exercise the shipped async renderer with deliberately reordered decodes.
const source = fs.readFileSync('public/collection-showcase/app.js', 'utf8')
const renderer = source.slice(source.indexOf('async function paintAngle(){'), source.indexOf('\nfunction updatePair(){'))
const nodes = new Map()
const node = selector => {
  if (!nodes.has(selector)) nodes.set(selector, {
    textContent: '', innerHTML: '', attributes: {},
    setAttribute(k, v) { this.attributes[k] = v },
    style: { setProperty() {} }, classList: { toggle() {} },
  })
  return nodes.get(selector)
}
const pending = new Map()
const context = vm.createContext({
  $: node, selected: { name: 'Test pair', angle_seating: [] },
  angle: 0, version: 0, viewMode: 'photos',
  views: () => [{ src: 'first.jpg' }, { src: 'second.jpg' }, { src: 'third.jpg' }],
  esc: value => value,
  decodeAngle: src => new Promise((resolve, reject) => pending.set(src, { resolve, reject })),
})
vm.runInContext(renderer, context)
const render = index => { context.angle = index; return vm.runInContext('paintAngle()', context) }

let initial = render(0)
pending.get('first.jpg').resolve()
await initial
assert.equal(node('#angle-count').textContent, '01 / 03')

const second = render(1)
assert.equal(node('#angle-count').textContent, '01 / 03', 'pending decode must retain visible-frame caption')
assert.match(node('#angle-art').innerHTML, /first\.jpg/)
const third = render(2)
pending.get('third.jpg').resolve()
await third
pending.get('second.jpg').resolve()
await second
assert.equal(node('#angle-count').textContent, '03 / 03', 'late request must not revert caption')
assert.match(node('#angle-art').innerHTML, /third\.jpg/, 'late request must not revert image')
assert.equal(node('#photo-wheel').attributes['aria-valuenow'], 3)

const failure = render(1)
pending.get('second.jpg').reject(new Error('offline'))
await failure
assert.equal(node('#angle-count').textContent, '03 / 03')
assert.match(node('#angle-art').innerHTML, /third\.jpg/)
assert.match(node('#load-state').textContent, /could not load/)
console.log('Viewer decode order, pending caption and failed-image retention: PASS')
