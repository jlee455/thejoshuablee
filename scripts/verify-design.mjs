import fs from 'node:fs';import assert from 'node:assert/strict';
const read=p=>fs.readFileSync('dist/'+p,'utf8');
for(const r of ['','about','speaking','work-with-me','my-world','authority-architecture','book','insights','evidence','recommendations','collection']){
 const h=read((r?r+'/':'')+'index.html');
 assert(!/LOCAL DESIGN PREVIEW|This prototype|does not send email|href="\/preview\/"|name="robots" content="noindex/i.test(h),`Review-only content on ${r}`);
 assert(h.includes('rel="canonical"'),`Missing canonical on ${r}`);
 assert(h.includes('<title>'),`Missing title on ${r}`);
 if(['about','work-with-me','insights','evidence'].includes(r))assert(/j-human-hero[\s\S]*?j-hero-photo[\s\S]*?<img[^>]*fetchpriority="high"[\s\S]*?<\/section>/.test(h),`Hero portrait missing on ${r}`);
}
const f=read('speaking/index.html');for(const name of ['form-name','name','email','event','location','goals'])assert(f.includes(`name="${name}"`));assert(f.includes('name="speaking-inquiry"'));
const c=read('collection/index.html');assert(c.indexOf('id="collection-wheel"')<c.indexOf('class="room mag-room"'),'Opening wheel missing');
assert(read('collection-showcase/app.js').includes("p.id==='V30'"));
console.log('Release design PASS: human heroes, working form contract, opening wheel, canonical metadata, no preview remnants');
