import fs from 'node:fs'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
const checked = new Set()
const j=JSON.parse(fs.readFileSync('public/collection-media/collection.json'))
assert.equal(j.pairs.length,126)
assert.equal(new Set(j.pairs.map(p=>p.id)).size,126)
assert.equal(new Set(j.pairs.map(p=>p.wall_order)).size,126)
for(const id of ['P12','B12','V36'])assert.ok(!j.pairs.some(p=>p.id===id),`${id} must not reappear`)
for(const number of [29,47,62,108])assert.ok(j.pairs.some(p=>p.wall_order===number))
for(const p of j.pairs){
 assert.ok(p.float_photos.length>0,p.id)
 for (const asset of [p.seating, ...p.angle_seating]) {
  assert.ok(asset && asset.bounds.length===4 && asset.alphaThreshold===10,`${p.id}: measured seating missing`)
  assert.equal(asset.soleY,asset.bounds[1]+asset.bounds[3])
  assert.ok(asset.normalizedScale>0 && asset.normalizedScale*asset.bounds[2]<=820.001 && asset.normalizedScale*asset.bounds[3]<=850.001)
  if(!checked.has(asset.src)){assert.equal(createHash('sha256').update(fs.readFileSync('public'+asset.src)).digest('hex'),asset.sha256,`${p.id}: seating must be remeasured after image replacement`);checked.add(asset.src)}
 }
 assert.equal(p.angle_seating.length,p.float_photos.length)
 const s=p.showcase
 assert.ok(s && fs.existsSync('public'+s.src),`${p.id}: missing showcase artwork`)
 assert.ok(s.viewBox.length===4 && s.viewBox.every(Number.isFinite),`${p.id}: invalid silhouette bounds`)
 const [x,y,w,h]=s.viewBox
 assert.ok(x>=0 && y>=0 && w>0 && h>0 && x+w<=s.width && y+h<=s.height,`${p.id}: silhouette exceeds image`)
 assert.equal(s.direction,'right',`${p.id}: showcase direction not reviewed`)
 assert.equal(p.float_photos.length,p.photos?.length??p.angles,p.id)
 for(const f of p.float_photos)assert.ok(fs.existsSync('public'+f),`${p.id}: ${f}`)
 for(const f of p.photos??[])assert.ok(fs.existsSync('public'+f.full),f.full)
}
console.log('Collection: 126 unique entries, four restored positions, duplicate exclusions and all display paths PASS')
