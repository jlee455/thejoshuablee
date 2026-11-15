import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync('public/collection-showcase/app.js','utf8');
function harness(){
 const pending=[],images=[];let active=0,peak=0;
 class ImageStub{
  constructor(){images.push(this)}
  set src(v){this.url=v}
  removeAttribute(){this.url=null}
  decode(){active++;peak=Math.max(peak,active);return new Promise((resolve,reject)=>pending.push({resolve:()=>{active--;resolve()},reject:()=>{active--;reject(new Error('offline'))}}))}
 }
 const context=vm.createContext({Image:ImageStub});vm.runInContext(source.slice(source.indexOf('const decodedAngles='),source.indexOf('\nfunction photoScale')),context);
 return {context,pending,images,peak:()=>peak,read:s=>vm.runInContext(s,context)};
}
const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve()};
test('fast swiping bounds active decodes, pending requests and retained surfaces',async()=>{
 const h=harness();const results=[];
 for(let i=0;i<80;i++)results.push(h.read(`decodeAngle('frame-${i}')`).catch(()=>null));
 assert.equal(h.images.length,2,'rapid input must not launch 80 image decodes');
 assert.equal(h.read('decodeQueue.length'),4);
 assert.ok(h.read('decodedAngles.size')<=8);
 while(h.pending.length){h.pending.shift().resolve();await flush()}
 await Promise.all(results);assert.equal(h.peak(),2);
 for(let i=0;i<50;i++){const done=h.read(`decodeAngle('pair-${i}')`);h.pending.shift().resolve();await done;await flush();}
 assert.ok(h.read('decodedAngles.size')<=8);
 assert.ok(h.images.filter(im=>im.url!==null).length<=8,'evicted Image sources must be released');
});
test('failed decodes free a slot and can be retried; same frame shares work',async()=>{
 const h=harness(),first=h.read("decodeAngle('bad')"),same=h.read("decodeAngle('bad')");assert.equal(first,same);
 const failed=assert.rejects(first,/offline/);h.pending.shift().reject();await failed;await flush();assert.equal(h.read('activeDecodes'),0);
 const retry=h.read("decodeAngle('bad')");h.pending.shift().resolve();await retry;await flush();assert.equal(h.peak(),1);
});
