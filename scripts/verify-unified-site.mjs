import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
const root = process.argv.find(x => x.startsWith('--dist='))?.slice(7) || 'dist'
const required = JSON.parse(fs.readFileSync('scripts/unified-required-ids.json'))
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
const collection = fs.readFileSync(path.join(root, 'collection/index.html'), 'utf8')
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'collection-media/collection.json')))
function checkNavigation(text) {
  const link = /<a\b[^>]*href="\/collection\/"[^>]*>The Collection<\/a>/g
  const header = text.match(/<header\b[\s\S]*?<\/header>/)?.[0] || text.match(/<nav\b[\s\S]*?<\/nav>/)?.[0] || ''
  const footer = text.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || ''
  assert.ok(header.match(link), 'Homepage header must link to The Collection')
  assert.ok(footer.match(link), 'Homepage footer must link to The Collection')
}
function checkIds(pairs) {
  const ids = new Set(pairs.map(p => p.id))
  for (const id of required) assert.ok(ids.has(id), `Unified catalog lost ${id}`)
}
checkNavigation(html); checkIds(catalog.pairs)
assert.ok(collection.includes('/collection-showcase/app.js'), 'Collection viewer missing')
let files = 0
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex')
function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const source = path.join(dir, entry.name)
    if (entry.isDirectory()) { walk(source); continue }
    const output = path.join(root, path.relative('public', source))
    assert.ok(fs.existsSync(output), `Unified build missing ${output}`)
    assert.equal(hash(source), hash(output), `Unified build changed ${output}`)
    files++
  }
}
walk('public/collection-media'); walk('public/collection-showcase')
if (process.argv.includes('--demonstrate')) {
  assert.throws(() => checkNavigation(html.replaceAll('href="/collection/"','href="/missing/"')))
  assert.throws(() => checkIds(catalog.pairs.filter(p => p.id !== required[0])))
  console.log('Negative controls: missing navigation and missing pair rejected')
}
console.log(`Unified site PASS: homepage header/footer, ${catalog.pairs.length} pairs, ${files} exact collection assets`)
