import { test } from 'node:test'
import assert from 'node:assert/strict'
import { releaseVelocity, glideStep, CONFIG, createFling } from '../../src/collection/wheel-fling.ts'
test('release samples expire after a held drag', () => {
 assert.equal(releaseVelocity([[500,0],[0,80]],0,250),0)
 assert.equal(releaseVelocity([[500,0],[0,80]],0,90),-500/90)
 assert.equal(releaseVelocity([[500,0],[480,20]],480,500),0)
})
test('decay is frame-rate independent and preserves direction',()=> {
 const a=glideStep(.01,32),b=glideStep(.01,16),c=glideStep(b.velocity,16)
 assert.ok(Math.abs(a.distance-b.distance-c.distance)<1e-12)
 assert.ok(glideStep(-.01,16).distance<0)
})
test('one animation loop, bounded fling, cancellable grab, immediate reduced motion',()=> {
 let next=0;const callbacks=new Map(); let pos=5,settled=null,reduced=false
 globalThis.requestAnimationFrame=fn=>{callbacks.set(++next,fn);return next}
 globalThis.cancelAnimationFrame=id=>callbacks.delete(id)
 const host={getPos:()=>pos,setPos:v=>pos=v,spacing:()=>170,reduceMotion:()=>reduced,onSettle:v=>settled=v}
 const m=createFling(host);m.release(-6)
 for(let ts=0;callbacks.size&&ts<5000;ts+=16){assert.equal(callbacks.size,1);const entries=[...callbacks];callbacks.clear();entries.forEach(([,fn])=>fn(ts))}
 assert.equal(settled,11);assert.ok(pos<=5+CONFIG.maxSteps)
 m.release(-2);m.cancel();assert.equal(callbacks.size,0)
 reduced=true;m.tweenTo(20);assert.equal(pos,20);assert.equal(settled,20);assert.equal(callbacks.size,0)
})
