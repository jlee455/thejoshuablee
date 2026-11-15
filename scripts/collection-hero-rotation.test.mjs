import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const source=fs.readFileSync('public/collection-showcase/app.js','utf8');
const render=source.slice(source.indexOf('async function paintHeroAngle(){'),source.indexOf('\nfunction stepHero('));
test('hero commits only the newest decoded frame and retains its view after failure',async()=>{
 const nodes=new Map(),pending=new Map();
 const node=k=>{if(!nodes.has(k))nodes.set(k,{innerHTML:'',textContent:'',attributes:{},setAttribute(k,v){this.attributes[k]=v}});return nodes.get(k)};
 const context=vm.createContext({heroAngle:0,heroVersion:0,heroPair:{angle_seating:[{src:'front'},{src:'side'},{src:'heel'}]},heroStage:node('stage'),$:node,heroArtwork:a=>a.src,stopHeroRotation:()=>{},decodeAngle:src=>new Promise((resolve,reject)=>{if(!pending.has(src))pending.set(src,{resolve,reject});else resolve()})});
 vm.runInContext(render,context);
 const paint=i=>{context.heroAngle=i;return vm.runInContext('paintHeroAngle()',context)};
 const first=paint(0),second=paint(2);pending.get('heel').resolve();await second;pending.get('front').resolve();await first;
 assert.equal(node('#hero-art').innerHTML,'heel');assert.equal(node('stage').attributes['aria-valuenow'],3);assert.match(node('#hero-turn-label').textContent,/03 \/ 3/);
 // A different failed frame cannot replace the already-visible photograph.
 context.decodeAngle=()=>Promise.reject(new Error('offline'));await paint(1);
 assert.equal(node('#hero-art').innerHTML,'heel');assert.equal(node('stage').attributes['aria-valuenow'],3);assert.match(node('#hero-turn-label').textContent,/unavailable/);
});

test('homepage controls rotate without a dialog, preserve vertical scrolling and stop autoplay offscreen',async()=>{
 const nodes=new Map(),timers=new Map();let timerId=0,visibility,intersection;
 const node=k=>{if(!nodes.has(k))nodes.set(k,{innerHTML:'',textContent:'',attributes:{},listeners:{},clientWidth:520,capture:null,
  setAttribute(k,v){this.attributes[k]=String(v)},getAttribute(k){return this.attributes[k]},
  addEventListener(k,fn){this.listeners[k]=fn},classList:{add(){},remove(){}},focus(){},
  setPointerCapture(id){this.capture=id},hasPointerCapture(id){return this.capture===id},releasePointerCapture(){this.capture=null}});return nodes.get(k)};
 const doc={hidden:false,addEventListener(type,fn){if(type==='visibilitychange')visibility=fn}};
 const context=vm.createContext({$:node,document:doc,esc:x=>x,decodeAngle:()=>Promise.resolve(),
  heroPair:{angle_seating:Array.from({length:26},(_,i)=>({src:`frame-${i}`,width:800,height:600}))},
  setTimeout:fn=>{timers.set(++timerId,fn);return timerId},clearTimeout:id=>timers.delete(id),
  IntersectionObserver:class {constructor(fn){intersection=fn}observe(){}}});
 vm.runInContext(source.slice(source.indexOf('let heroAngle='),source.indexOf("for(const key of ['brand','family'])")),context);
 const flush=async()=>{await Promise.resolve();await Promise.resolve();await Promise.resolve()};
 const fire=async(selector,type,event={})=>{node(selector).listeners[type]({preventDefault(){},...event});await flush()};
 await fire('#hero-prev','click');assert.equal(node('#hero-shoe').attributes['aria-valuenow'],'26');
 await fire('#hero-next','click');assert.equal(node('#hero-shoe').attributes['aria-valuenow'],'1');
 await fire('#hero-shoe','keydown',{key:'End'});assert.equal(node('#hero-shoe').attributes['aria-valuenow'],'26');
 await fire('#hero-shoe','keydown',{key:'Home'});
 await fire('#hero-shoe','pointerdown',{button:0,isPrimary:true,pointerId:1,clientX:200,clientY:200});
 await fire('#hero-shoe','pointermove',{pointerId:1,clientX:100,clientY:202});
 assert.equal(node('#hero-shoe').attributes['aria-valuenow'],'6');assert.equal(node('#hero-shoe').capture,1);
 await fire('#hero-shoe','pointerup');assert.equal(node('#hero-shoe').capture,null);
 await fire('#hero-shoe','pointerdown',{button:0,isPrimary:true,pointerId:2,clientX:200,clientY:200});
 await fire('#hero-shoe','pointermove',{pointerId:2,clientX:202,clientY:240,preventDefault(){throw new Error('vertical scroll prevented')}});
 assert.equal(node('#hero-shoe').attributes['aria-valuenow'],'6');
 assert.equal(node('#hero-shoe').listeners.click,undefined,'rotating the homepage must not open the detail dialog');
 await fire('#hero-play','click');assert.equal(node('#hero-play').getAttribute('aria-pressed'),'true');assert.equal(timers.size,1);
 intersection([{isIntersecting:false}]);assert.equal(timers.size,0);assert.equal(node('#hero-play').textContent,'Auto rotate');
 await fire('#hero-play','click');doc.hidden=true;visibility();assert.equal(timers.size,0);
});
