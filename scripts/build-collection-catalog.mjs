import fs from 'node:fs'

// One catalog drives both the original collection data and the new viewer.
// Run after integrity verification so additions cannot ship with missing media.
const { pairs } = JSON.parse(fs.readFileSync('public/collection-media/collection.json', 'utf8'))
fs.writeFileSync('public/collection-showcase/catalog.js', `const CATALOG = ${JSON.stringify(pairs)};\n`)
console.log(`Collection viewer catalog generated: ${pairs.length} pairs`)
