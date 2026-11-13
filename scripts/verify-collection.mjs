import fs from 'node:fs'
import assert from 'node:assert/strict'
const j=JSON.parse(fs.readFileSync('public/collection-media/collection.json'))
assert.equal(j.pairs.length,126)
assert.equal(new Set(j.pairs.map(p=>p.id)).size,126)
assert.equal(new Set(j.pairs.map(p=>p.wall_order)).size,126)
for(const id of ['P12','B12','V36'])assert.ok(!j.pairs.some(p=>p.id===id),`${id} must not reappear`)
for(const number of [29,47,62,108])assert.ok(j.pairs.some(p=>p.wall_order===number))
for(const p of j.pairs){
 assert.ok(p.float_photos.length>0,p.id)
 assert.equal(p.float_photos.length,p.photos?.length??p.angles,p.id)
 for(const f of p.float_photos)assert.ok(fs.existsSync('public'+f),`${p.id}: ${f}`)
 for(const f of p.photos??[])assert.ok(fs.existsSync('public'+f.full),f.full)
}
console.log('Collection: 126 unique entries, four restored positions, duplicate exclusions and all display paths PASS')
