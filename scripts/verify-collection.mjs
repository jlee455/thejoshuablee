import fs from 'node:fs'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
const checked = new Set()
const j=JSON.parse(fs.readFileSync('public/collection-media/collection.json'))
assert.ok(j.pairs.length>=122)
const requiredIds=JSON.parse(fs.readFileSync('scripts/collection-required-ids.json'))
for(const id of requiredIds)assert.ok(j.pairs.some(p=>p.id===id),`${id}: original collection entry lost`)
const awake=j.pairs.find(p=>p.id==='V21')
assert.equal(awake.family,'Jordan 5','V21: founder corrected the model to Awake NY Jordan 5')
assert.ok(awake.name.includes('Awake NY'),'V21: founder correction must be preserved')
assert.equal(awake.style_code,'DV4982-600')
assert.ok(awake.float_photos.every(src=>src.includes('V21-awake-pink')),'V21: superseded Jordan 6 photographs must not return')
const whatDunk=j.pairs.find(p=>p.id==='V20')
assert.equal(whatDunk.style_code,'318403-141')
assert.ok(whatDunk.name.includes('What The Dunk'))
assert.ok(whatDunk.float_photos.every(src=>src.includes('V20-what-the-dunk-')))
const mag=j.pairs.find(p=>p.id==='B13')
assert.ok(mag.name.includes('2016') && mag.name.includes('self-lacing'),'B13: preserve owner-confirmed 2016 edition')
assert.equal(mag.style_code,'HO15MNOTHR402625849')
assert.ok(mag.float_photos.every(src=>src.includes('B13-2016-')),'B13: superseded 2011 reference must not return')
const bunny=j.pairs.find(p=>p.id==='B35')
assert.equal(bunny.style_code,'JP5997')
assert.ok(bunny.name.includes('Brown Clear Pink'))
assert.ok(bunny.float_photos.every(src=>src.includes('B35-')))
const seoul=j.pairs.find(p=>p.id==='V40')
assert.equal(seoul.style_code,'AV8370-100')
assert.ok(seoul.float_photos.every(src=>src.includes('V40-seoul-2018')))
assert.equal(new Set(j.pairs.map(p=>p.id)).size,j.pairs.length)
assert.equal(new Set(j.pairs.map(p=>p.wall_order)).size,j.pairs.length)
for(const id of ['P12','B12','V36','B15','V56','N01','V35','V54'])assert.ok(!j.pairs.some(p=>p.id===id),`${id} must not reappear`)
for(const number of [29,47,62])assert.ok(j.pairs.some(p=>p.wall_order===number))
for(const p of j.pairs){
 if(p.reference_mode==='owner_custom_photo_pending'){
  assert.ok(['DJ7015-991','FJ2253-901'].includes(p.style_code),`${p.id}: unexpected missing photograph`)
  assert.equal(p.ownership,'owner_confirmed');assert.equal(p.showcase,null);assert.equal(p.seating,null)
  assert.equal(p.float_photos.length,0);assert.equal(p.angle_seating.length,0);assert.equal(p.angles,0)
  continue
 }
 assert.ok(p.float_photos.length>0 || (p.id==='V02' && p.reference_mode==='model_reference_illustration' && p.showcase.ai===true),p.id)
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
 // Use reviewed native right-facing product photographs; do not mirror logos.
 assert.equal(s.direction,'right',`${p.id}: showcase direction not reviewed`)
 assert.equal(p.float_photos.length,p.photos?.length??p.angles,p.id)
 for(const f of p.float_photos)assert.ok(fs.existsSync('public'+f),`${p.id}: ${f}`)
 for(const f of p.photos??[])assert.ok(fs.existsSync('public'+f.full),f.full)
}
console.log('Collection: unique entries, owner corrections, retained positions and all display paths PASS')
