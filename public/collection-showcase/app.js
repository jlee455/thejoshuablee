'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
// Each section has its own opening: MAG hero, purple LV wheel, Tiffany wall.
const opening=['B22','V26','V20','V47','U04','V03'];
const sorted=[...CATALOG].sort((a,b)=>((opening.indexOf(a.id)+1)||999)-((opening.indexOf(b.id)+1)||999)||a.wall_order-b.wall_order);
let all=false,filtered=sorted,selected=null,angle=0,origin=null,version=0,viewMode="showcase",momentum=null;
function art(a,name,mode='wall',lazy=false,fixedScale=null){
 if(!a)return '<span class="photo-pending"><small>NIKE BY YOU</small><span>A one-of-one.<br>Photo coming soon.</span></span>';
 const [bx,by,bw,bh]=a.bounds; const height=600;
 const scale=fixedScale??Math.min((mode==='hero'?850:840)/bw,470/bh);
 const left=(1000-bw*scale)/2;
 return `<svg class="${a.transparent===false?'model-photo-art':''}" viewBox="0 0 1000 ${height}" preserveAspectRatio="xMidYMax meet" role="img" aria-label="${esc(name)}"><image ${lazy?'data-src':'href'}="${esc(lazy?(THUMBNAILS[a.src]||a.src):a.src)}" x="${left-bx*scale}" y="${height-65-a.soleY*scale}" width="${a.width*scale}" height="${a.height*scale}"/></svg>`;
}
document.querySelector('[data-archive-count]').textContent=CATALOG.length+' PAIRS IN THE ARCHIVE';
const heroPair=CATALOG.find(p=>p.id==='B13');
let heroAngle=0,heroVersion=0,heroTimer=null,heroDrag=null,heroRunVersion=0;
const heroStage=$('#hero-shoe');
function heroArtwork(a){return `<svg viewBox="${(a.crop||[0,0,a.width,a.height]).join(' ')}" role="img" aria-label="2016 Nike MAG — photograph ${heroAngle+1} of ${heroPair.angle_seating.length}"><image href="${esc(a.src)}" width="${a.width}" height="${a.height}"/></svg>`;}
async function paintHeroAngle(){
 const token=++heroVersion,index=heroAngle,a=heroPair.angle_seating[index];
 try{
  await decodeAngle(a.src);if(token!==heroVersion)return;
  $('#hero-art').innerHTML=heroArtwork(a);heroStage.setAttribute('aria-valuenow',index+1);
  heroStage.setAttribute('aria-valuetext',`Angle ${index+1} of ${heroPair.angle_seating.length}`);
  $('#hero-turn-label').textContent=`DRAG TO ROTATE · ${String(index+1).padStart(2,'0')} / ${heroPair.angle_seating.length}`;
  for(const offset of [-1,1])decodeAngle(heroPair.angle_seating[(index+offset+heroPair.angle_seating.length)%heroPair.angle_seating.length].src).catch(()=>{});
 }catch{if(token===heroVersion){stopHeroRotation();$('#hero-turn-label').textContent='Photo unavailable · try another angle';}}
}
function stepHero(delta){heroAngle=(heroAngle+delta+heroPair.angle_seating.length)%heroPair.angle_seating.length;return paintHeroAngle();}
function stopHeroRotation(){heroRunVersion++;clearTimeout(heroTimer);heroTimer=null;$('#hero-play').setAttribute('aria-pressed','false');$('#hero-play').textContent='Auto rotate';}
async function runHeroRotation(){
 const run=heroRunVersion;
 if($('#hero-play').getAttribute('aria-pressed')!=='true')return;
 await stepHero(1);
 if(run===heroRunVersion&&$('#hero-play').getAttribute('aria-pressed')==='true')heroTimer=setTimeout(runHeroRotation,160);
}
$('#hero-play').addEventListener('click',()=>{if($('#hero-play').getAttribute('aria-pressed')==='true')stopHeroRotation();else{$('#hero-play').setAttribute('aria-pressed','true');$('#hero-play').textContent='Pause rotation';runHeroRotation();}});
$('#hero-prev').addEventListener('click',()=>{stopHeroRotation();stepHero(-1);});
$('#hero-next').addEventListener('click',()=>{stopHeroRotation();stepHero(1);});
heroStage.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();stopHeroRotation();if(e.key==='Home')heroAngle=0;else if(e.key==='End')heroAngle=heroPair.angle_seating.length-1;else heroAngle=(heroAngle+(e.key==='ArrowRight'?1:-1)+heroPair.angle_seating.length)%heroPair.angle_seating.length;paintHeroAngle();});
heroStage.addEventListener('dragstart',e=>e.preventDefault());
heroStage.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;stopHeroRotation();heroDrag={id:e.pointerId,x:e.clientX,y:e.clientY,angle:heroAngle,active:false};});
heroStage.addEventListener('pointermove',e=>{
 const g=heroDrag;if(!g||g.id!==e.pointerId)return;const dx=e.clientX-g.x,dy=e.clientY-g.y;
 if(!g.active){if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){heroDrag=null;return;}if(Math.abs(dx)<6)return;g.active=true;heroStage.setPointerCapture(e.pointerId);heroStage.classList.add('dragging');heroStage.focus({preventScroll:true});}
 e.preventDefault();const next=(g.angle-Math.trunc(dx/Math.max(8,heroStage.clientWidth/heroPair.angle_seating.length))+heroPair.angle_seating.length*100)%heroPair.angle_seating.length;
 if(next!==heroAngle){heroAngle=next;paintHeroAngle();}
});
function endHeroDrag(){const g=heroDrag;heroDrag=null;if(g&&heroStage.hasPointerCapture(g.id))heroStage.releasePointerCapture(g.id);heroStage.classList.remove('dragging');}
for(const type of ['pointerup','pointercancel','lostpointercapture'])heroStage.addEventListener(type,endHeroDrag);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopHeroRotation();});
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)stopHeroRotation();},{threshold:.05}).observe(heroStage);
for(const key of ['brand','family']) for(const v of [...new Set(CATALOG.map(p=>p[key]))].sort()) {const o=document.createElement('option');o.value=v;o.textContent=v;$('#'+key).append(o);}
function caseDoor(){return '<span class="case-door" aria-hidden="true"><i class="case-pull"></i><i class="case-hinge left"></i><i class="case-hinge right"></i></span>';}
function card(p){return `<button class="shoe-card" data-open="${esc(p.id)}"><span class="collector-case"><span class="card-art">${art(p.seating,p.name+(p.showcase?.ai?' — '+(p.showcase.label||'illustrated showcase'):''),'wall',true)}</span>${caseDoor()}</span><span class="card-copy"><span class="card-num"><span>CASE ${String(p.wall_order).padStart(3,'0')}</span><span>OPEN ↗</span></span><small>${esc(p.brand)} / ${esc(p.family)}</small><strong>${esc(p.name)}</strong>${p.showcase?.ai?'<span class="render-label">'+esc(p.showcase.label||'Illustrated showcase')+'</span>':''}</span></button>`;}
const artworkObserver=new IntersectionObserver(entries=>{for(const entry of entries){const im=entry.target;if(entry.isIntersecting)im.setAttribute('href',im.dataset.src);else im.removeAttribute('href');}},{rootMargin:'120px'});
function render(){
 artworkObserver.disconnect();
 const q=$('#search').value.trim().toLowerCase(),b=$('#brand').value,f=$('#family').value;
 filtered=sorted.filter(p=>(!b||p.brand===b)&&(!f||p.family===f)&&(!q||`${p.name} ${p.id} ${String(p.wall_order).padStart(3,'0')} ${p.style_code}`.toLowerCase().includes(q)));
 const active=q||b||f;
 const visible=all||active?filtered:sorted.slice(0,6);
 $('#shelf-room').innerHTML=visible.map(card).join('');
 document.querySelectorAll('#shelf-room image[data-src]').forEach(im=>artworkObserver.observe(im));
 $('#result-count').textContent=all||active?`${filtered.length} of ${CATALOG.length} pairs`:`The opening selection / 6 of ${CATALOG.length}`;
 $('#empty').hidden=visible.length>0;
 $('#show-all').hidden=!!active;
 $('#show-all').innerHTML=all?'Back to the opening selection <span>↑</span>':`Explore all ${CATALOG.length} pairs <span>↓</span>`;
}
render();
for(const id of ['search','brand','family']) $('#'+id).addEventListener(id==='search'?'input':'change',render);
$('#reset').addEventListener('click',()=>{for(const id of ['search','brand','family']) $('#'+id).value='';all=false;render();});
$('#show-all').addEventListener('click',()=>{all=!all;render();if(!all)$('#wall').scrollIntoView({behavior:reduced.matches?'instant':'smooth'});});
$('#lighting').addEventListener('click',()=>{const on=document.body.classList.toggle('evening');$('#lighting').setAttribute('aria-pressed',on);$('#lighting').setAttribute('aria-label',on?'Daylight':'Evening light');$('#lighting span').textContent=on?'Daylight':'Evening light';});
$('#room').addEventListener('pointermove',e=>{if(heroDrag||e.pointerType!=='mouse'||reduced.matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*16}deg`);e.currentTarget.style.setProperty('--rx',`${-((e.clientY-r.top)/r.height-.5)*4}deg`);});
$('#room').addEventListener('pointerleave',()=>{for(const v of ['--rx','--ry'])$('#room').style.setProperty(v,'0deg');});
$('#shelf-room').addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||reduced.matches)return;const c=e.target.closest('.shoe-card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--card-y',`${((e.clientX-r.left)/r.width-.5)*10}deg`);}});
$('#shelf-room').addEventListener('pointerout',e=>{const c=e.target.closest('.shoe-card');if(c&&!c.contains(e.relatedTarget))c.style.setProperty('--card-y','0deg');});
function views(p){return viewMode==='photos'&&p.angle_seating.length?p.angle_seating:[p.seating];}
function preferredView(p){return p.preferred_view==='showcase'?'showcase':p.angle_seating.length>1?'photos':'showcase';}
function isTurntable(p){return p.rotation?.coverage==='full_turn'||(p.viewer==='spin'&&p.angle_seating.length===8&&/^StockX 360/i.test(p.photo_source||''));}
// Bound both decoded surfaces and outstanding work, including rapid swipes.
const decodedAngles=new Map(),decodeQueue=[];
let activeDecodes=0;
const MAX_DECODED_IMAGES=8,MAX_ACTIVE_DECODES=2,MAX_QUEUED_DECODES=4;
function trimDecodedAngles(){
 for(const [src,entry] of decodedAngles){
  if(decodedAngles.size<=MAX_DECODED_IMAGES)break;
  if(entry.state==='ready'){entry.image.removeAttribute('src');decodedAngles.delete(src);}
 }
}
function pumpDecodes(){
 while(activeDecodes<MAX_ACTIVE_DECODES&&decodeQueue.length){
  const entry=decodeQueue.shift();entry.state='loading';activeDecodes++;
  const image=entry.image=new Image();image.src=entry.src;
  image.decode().then(()=>{entry.state='ready';entry.resolve();},error=>{decodedAngles.delete(entry.src);entry.reject(error);}).finally(()=>{activeDecodes--;trimDecodedAngles();pumpDecodes();});
 }
}
function decodeAngle(src){
 if(decodedAngles.has(src)){
  const entry=decodedAngles.get(src);decodedAngles.delete(src);decodedAngles.set(src,entry);return entry.promise;
 }
 while(decodeQueue.length>=MAX_QUEUED_DECODES){const old=decodeQueue.shift();decodedAngles.delete(old.src);old.reject(new Error('Superseded photograph'));}
 const entry={src,state:'queued',image:null};entry.promise=new Promise((resolve,reject)=>{entry.resolve=resolve;entry.reject=reject;});
 decodedAngles.set(src,entry);decodeQueue.push(entry);trimDecodedAngles();pumpDecodes();return entry.promise;
}

function photoScale(p){
 // Keep the same camera scale across a turn, including narrow front/heel frames.
 const frames=p.angle_seating.filter(a=>a.transparent);
 return frames.length?Math.min(840/Math.max(...frames.map(a=>a.bounds[2])),540/Math.max(...frames.map(a=>a.bounds[3]))):null;
}
async function paintAngle(){
 const token=++version,p=selected,index=angle,a=views(p)[index],count=views(p).length;
 if(!a){$('#angle-stage').classList.remove('original-photo');$('#angle-art').innerHTML=art(null,p.name);$('#load-state').textContent='';$('#angle-count').textContent='';$('#prev-angle').disabled=true;$('#next-angle').disabled=true;return;}
 $('#load-state').textContent='Bringing this pair into focus…';
 try{
  await decodeAngle(a.src);if(token!==version)return;
  // Image, caption and accessible value commit together after decoding. An
  // older request may finish later, but must never overwrite the latest view.
  $('#photo-wheel').setAttribute('aria-valuemax',count);$('#photo-wheel').setAttribute('aria-valuenow',index+1);$('#photo-wheel').setAttribute('aria-valuetext',`${viewMode==='photos'?'Photograph':'Illustration'} ${index+1} of ${count}`);$('#photo-wheel').style.setProperty('--wheel-offset',`${index*18}px`);
  $('#angle-count').textContent=`${String(index+1).padStart(2,'0')} / ${String(count).padStart(2,'0')}`;
  $('#angle-dots').innerHTML=views(p).map((_,i)=>`<button aria-label="${viewMode==='photos'?'View photograph':'View illustration'} ${i+1}" aria-pressed="${i===index}" data-angle="${i}"></button>`).join('');
  $('#angle-stage').classList.toggle('original-photo',!a.transparent); $('#angle-art').innerHTML=a.transparent?art(a,p.name,'wall',false,viewMode==='photos'?photoScale(p):null):a.crop?`<svg viewBox="${a.crop.join(' ')}" role="img" aria-label="${esc(p.name)} — reference photograph"><image href="${esc(a.src)}" width="${a.width}" height="${a.height}"/></svg>`:`<img src="${esc(a.src)}" alt="${esc(p.name)} — reference photograph">`;$('#load-state').textContent='';
 }catch{if(token===version)$('#load-state').textContent='This photograph could not load. Try another angle.';}
 $('#prev-angle').disabled=count<2;$('#next-angle').disabled=count<2;
}
function updatePair(){
 stopMomentum();cancelAngleDrag();
 if(viewMode==='photos'&&!selected.angle_seating.length)viewMode='showcase';
 const hasPhotos=viewMode==='photos'&&selected.angle_seating.length>0;
 const canRotate=hasPhotos&&selected.angle_seating.length>1,turntable=canRotate&&isTurntable(selected);
 $('#angle-stage').classList.toggle('can-rotate',canRotate);
 $('#mode-photos').textContent=isTurntable(selected)?'Rotate':selected.angle_seating.length>1?'Photos':'Photograph';
 // Decode the requested view only; never allocate the entire gallery at once.
 $('#mode-photos').disabled=!selected.angle_seating.length;
 $('#mode-showcase').setAttribute('aria-pressed',viewMode==='showcase');$('#mode-photos').setAttribute('aria-pressed',hasPhotos);
 $('#photo-wheel').hidden=!canRotate;$('#angle-dots').hidden=!canRotate||views(selected).length>12;$('.angle-controls').hidden=!canRotate;
 $('#pair-invite').textContent=turntable?'Drag the shoe to turn it around.':canRotate?'Drag the shoe to explore the available views.':'A closer look at the pair.';
 $('#angle-dots').setAttribute('aria-label',hasPhotos?'Choose a photograph':'Showcase illustration');
 $('.photo-note').textContent=hasPhotos?(turntable?`${selected.angle_seating.length} photographic angles of the model. Not a 3-D scan of this physical pair.`:canRotate?'A gallery of available model photographs; full 360° coverage is not verified.':'Single reference photograph; rotation is not available for this pair yet.'):(selected.angle_seating.length<2?'Single-view showcase. Rotation is not available for this pair yet. ':'')+(selected.showcase?.description||(selected.showcase?.ai?'AI-assisted illustration; fine details may differ from the physical pair.':'Reference photograph.'));
 $('.angle-controls small').textContent=turntable?'DRAG SHOE TO ROTATE':canRotate?'DRAG SHOE TO VIEW PHOTOS':'SINGLE VIEW';
 if(selected.reference_mode==='owner_custom_photo_pending'){$('.photo-note').textContent='An original Nike By You design from Joshua’s collection. Photograph coming soon.';$('#pair-invite').textContent='Made personal.';}
 $('#angle-stage').setAttribute('aria-label',canRotate?'Drag shoe to explore angles. Arrow keys change views; Home and End select the first and last view.':'Single-view shoe image.');
 $('#pair-id').textContent=selected.id;$('#pair-brand').textContent=selected.brand+' / '+selected.family;
 $('#identity-note').textContent=selected.identity_note||'';$('#identity-note').hidden=!selected.identity_note;
 $('#pair-title').textContent=selected.name;$('#pair-code').textContent=selected.style_code?'STYLE '+selected.style_code:'';
 $('#swatches').replaceChildren(...selected.colors.map(c=>{const s=document.createElement('span');s.style.backgroundColor=c;return s;}));
 $('#angle-art').innerHTML='';$('#angle-count').textContent='—';$('#angle-dots').replaceChildren();angle=0;paintAngle();
}
function openPair(id,trigger){stopHeroRotation();selected=CATALOG.find(p=>p.id===id);if(!selected)return;origin=trigger;viewMode=preferredView(selected);updatePair();$('#viewer').showModal();$('#viewer').classList.remove('case-arriving');void $('#viewer').offsetWidth;$('#viewer').classList.add('case-arriving');document.body.style.overflow='hidden';$('#close').focus();}
function closePair(){stopMomentum();cancelAngleDrag();version++;$('#viewer').close();$('#angle-art').replaceChildren();document.body.style.overflow='';origin?.focus({preventScroll:true});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openPair(b.dataset.open,b);});

$('#close').addEventListener('click',closePair);
$('#viewer').addEventListener('cancel',e=>{e.preventDefault();closePair();});
$('#viewer').addEventListener('click',e=>{if(e.target===$('#viewer')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePair();}});
function step(n){angle=(angle+n+views(selected).length)%views(selected).length;paintAngle();}
$('#prev-angle').addEventListener('click',()=>{stopMomentum();step(-1);});$('#next-angle').addEventListener('click',()=>{stopMomentum();step(1);});
$('#angle-dots').addEventListener('click',e=>{const b=e.target.closest('[data-angle]');if(b){stopMomentum();angle=Number(b.dataset.angle);paintAngle();}});
$('#angle-stage').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();stopMomentum();if(e.key==='Home'){angle=0;paintAngle();}else if(e.key==='End'){angle=views(selected).length-1;paintAngle();}else step(e.key==='ArrowLeft'?-1:1);}});
for(const [id,dir] of [['prev-pair',-1],['next-pair',1]])$('#'+id).addEventListener('click',()=>{const pool=filtered.length?filtered:sorted;const i=pool.findIndex(p=>p.id===selected.id);selected=pool[(Math.max(i,0)+dir+pool.length)%pool.length];viewMode=preferredView(selected);updatePair();});

function stopMomentum(){if(momentum!==null)cancelAnimationFrame(momentum);momentum=null;}
$('#mode-showcase').addEventListener('click',()=>{viewMode='showcase';updatePair();});
$('#mode-photos').addEventListener('click',()=>{viewMode='photos';updatePair();});
const wheel=$('#photo-wheel');let angleDrag=null,dragDistance=0;
function cancelAngleDrag(){
 if(angleDrag){const {element,id}=angleDrag;if(element.hasPointerCapture(id))element.releasePointerCapture(id);element.classList.remove('dragging');}
 angleDrag=null;dragDistance=0;
}
function advanceAngles(delta,pixelsPerFrame){
 dragDistance+=delta;const steps=Math.trunc(dragDistance/pixelsPerFrame);
 if(steps){dragDistance-=steps*pixelsPerFrame;step(-steps);}
}
function bindAngleDrag(element,isStage){
 element.addEventListener('dragstart',e=>e.preventDefault());
 element.addEventListener('pointerdown',e=>{
  if(e.button!==0||!e.isPrimary||viewMode!=='photos'||views(selected).length<2)return;
  stopMomentum();cancelAngleDrag();
  angleDrag={element,id:e.pointerId,startX:e.clientX,startY:e.clientY,x:e.clientX,t:e.timeStamp,v:0,active:false,pixels:isStage?Math.max(6,element.clientWidth/views(selected).length):28};
 });
 element.addEventListener('pointermove',e=>{
  const g=angleDrag;if(!g||g.element!==element||g.id!==e.pointerId)return;
  if(!g.active){
   const dx=e.clientX-g.startX,dy=e.clientY-g.startY;
   if(isStage&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){cancelAngleDrag();return;}
   if(Math.abs(dx)<6)return;
   g.active=true;element.setPointerCapture(e.pointerId);element.classList.add('dragging');element.focus({preventScroll:true});
  }
  e.preventDefault();const dx=e.clientX-g.x,dt=Math.max(1,e.timeStamp-g.t);
  g.v=Math.max(-1.2,Math.min(1.2,dx/dt));g.x=e.clientX;g.t=e.timeStamp;advanceAngles(dx,g.pixels);
 });
 element.addEventListener('pointerup',e=>{
  const g=angleDrag;if(!g||g.element!==element||g.id!==e.pointerId)return;
  const active=g.active,pixels=g.pixels;let velocity=e.timeStamp-g.t>100?0:g.v;
  cancelAngleDrag();if(!active||reduced.matches||Math.abs(velocity)<.025)return;
  let last=performance.now(),travel=0;const limit=pixels*Math.min(3,views(selected).length/2);
  function coast(t){const dt=Math.min(t-last,40);last=t;const delta=velocity*dt;travel+=Math.abs(delta);advanceAngles(delta,pixels);velocity*=Math.exp(-dt/150);if(Math.abs(velocity)>.025&&travel<limit)momentum=requestAnimationFrame(coast);else stopMomentum();}
  momentum=requestAnimationFrame(coast);
 });
 element.addEventListener('pointercancel',()=>{cancelAngleDrag();stopMomentum();});
 element.addEventListener('lostpointercapture',()=>{if(angleDrag?.element===element)cancelAngleDrag();});
}
bindAngleDrag($('#angle-stage'),true);bindAngleDrag(wheel,false);
wheel.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();stopMomentum();if(e.key==='Home')angle=0;else if(e.key==='End')angle=views(selected).length-1;else angle=(angle+(e.key==='ArrowRight'?1:-1)+views(selected).length)%views(selected).length;paintAngle();}});

// The collection wheel uses showcase art; the detail viewer retains reference photography.
const wheelOpening=['B18','V30','B26','V20','V26','B22'];
const wheelPairs=[...CATALOG].sort((a,b)=>((wheelOpening.indexOf(a.id)+1)||999)-((wheelOpening.indexOf(b.id)+1)||999)||a.wall_order-b.wall_order);
const collectionWheel=$('#collection-wheel');let wheelIndex=0,collectionDrag=null,flingFrame=null,paintFrame=null,suppressWheelClick=false;
collectionWheel.innerHTML=wheelPairs.map(p=>`<button class="rotation-pair" data-wheel-id="${esc(p.id)}" aria-label="Center ${esc(p.name)}"><span class="collector-case"><span class="wheel-art">${art(p.seating,p.name,'hero',true)}</span>${caseDoor()}</span></button>`).join('');
const wheelCards=[...collectionWheel.children];wheelCards.forEach(c=>c.tabIndex=-1);
const wheelObserver=new IntersectionObserver(entries=>{for(const e of entries){const im=e.target.querySelector('image');if(!im?.dataset.src)continue;if(e.isIntersecting)im.setAttribute('href',im.dataset.src);else im.removeAttribute('href');}},{root:collectionWheel,rootMargin:'120px'});wheelCards.forEach(c=>wheelObserver.observe(c));
const paintedWheelCards=new Set();
function paintCollectionWheel(){
 paintFrame=null;
 // Read layout once. Only the few visible cards receive effects; hundreds of
 // offscreen 3-D layers can exhaust the iOS web-content process.
 const width=wheelCards[0].offsetWidth,first=wheelCards[0].offsetLeft-collectionWheel.offsetLeft;
 if(!width||!collectionWheel.clientWidth)return;
 const position=(collectionWheel.scrollLeft+collectionWheel.clientWidth/2-first-width/2)/width;
 const nearest=Math.max(0,Math.min(wheelCards.length-1,Math.round(position))),next=new Set();
 for(let i=Math.max(0,nearest-2);i<=Math.min(wheelCards.length-1,nearest+2);i++){
  const c=wheelCards[i],distance=Math.abs(i-position);next.add(i);
  c.style.transform=`scale(${Math.max(.8,1-distance*.1)})`;c.style.opacity=Math.max(.4,1-distance*.2);
 }
 for(const i of paintedWheelCards)if(!next.has(i)){wheelCards[i].style.transform='none';wheelCards[i].style.opacity='';}
 paintedWheelCards.clear();for(const i of next)paintedWheelCards.add(i);
 if(nearest!==wheelIndex){wheelCards[wheelIndex].tabIndex=-1;wheelCards[wheelIndex].setAttribute('aria-label','Center '+wheelPairs[wheelIndex].name);}
 wheelIndex=nearest;const p=wheelPairs[wheelIndex];$('#wheel-title').textContent=p.name;$('#wheel-count').textContent=`${String(wheelIndex+1).padStart(3,'0')} / ${wheelPairs.length}`;
 wheelCards[wheelIndex].setAttribute('aria-label','Explore '+p.name);wheelCards[wheelIndex].tabIndex=0;
}
function queueWheelPaint(){if(paintFrame===null)paintFrame=requestAnimationFrame(paintCollectionWheel);}
function cancelFling(){if(flingFrame!==null)cancelAnimationFrame(flingFrame);flingFrame=null;collectionWheel.classList.remove('dragging');}
function centerWheel(i,behavior=reduced.matches?'instant':'smooth'){cancelFling();const n=Math.max(0,Math.min(wheelPairs.length-1,i)),c=wheelCards[n];collectionWheel.scrollTo({left:collectionWheel.scrollLeft+c.getBoundingClientRect().left-collectionWheel.getBoundingClientRect().left+c.offsetWidth/2-collectionWheel.clientWidth/2,behavior});queueWheelPaint();}
collectionWheel.addEventListener('scroll',queueWheelPaint,{passive:true});new ResizeObserver(queueWheelPaint).observe(collectionWheel);requestAnimationFrame(()=>centerWheel(wheelPairs.findIndex(p=>p.id==='V30'),'instant'));document.fonts.ready.then(()=>requestAnimationFrame(()=>{collectionWheel.style.scrollSnapType='none';centerWheel(wheelPairs.findIndex(p=>p.id==='V30'),'instant');requestAnimationFrame(()=>{collectionWheel.style.scrollSnapType='';queueWheelPaint()})}));
$('#wheel-prev').addEventListener('click',()=>centerWheel(wheelIndex-1));$('#wheel-next').addEventListener('click',()=>centerWheel(wheelIndex+1));$('#wheel-open').addEventListener('click',e=>openPair(wheelPairs[wheelIndex].id,e.currentTarget));
collectionWheel.addEventListener('click',e=>{if(suppressWheelClick){suppressWheelClick=false;return;}const c=e.target.closest('[data-wheel-id]');if(!c)return;const i=wheelPairs.findIndex(p=>p.id===c.dataset.wheelId);if(i===wheelIndex)openPair(c.dataset.wheelId,c);else centerWheel(i);});
collectionWheel.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();centerWheel(e.key==='Home'?0:e.key==='End'?wheelPairs.length-1:wheelIndex+(e.key==='ArrowLeft'?-1:1));});
collectionWheel.addEventListener('pointerdown',e=>{suppressWheelClick=false;cancelFling();if(e.pointerType!=='mouse'||e.button!==0)return;collectionDrag={x:e.clientX,t:e.timeStamp,v:0,total:0};});
collectionWheel.addEventListener('pointermove',e=>{if(!collectionDrag)return;const dx=e.clientX-collectionDrag.x,dt=Math.max(1,e.timeStamp-collectionDrag.t);collectionDrag={x:e.clientX,t:e.timeStamp,v:Math.max(-2,Math.min(2,-dx/dt)),total:collectionDrag.total+Math.abs(dx)};if(collectionDrag.total>5){collectionWheel.setPointerCapture(e.pointerId);collectionWheel.classList.add('dragging');collectionWheel.scrollLeft-=dx;}});
function releaseCollection(e){if(!collectionDrag)return;const d=collectionDrag;collectionDrag=null;suppressWheelClick=d.total>5;if(!suppressWheelClick)return;let v=e.timeStamp-d.t>100?0:d.v;if(reduced.matches||Math.abs(v)<.15){collectionWheel.classList.remove('dragging');centerWheel(wheelIndex);return;}let last=performance.now(),travel=0;function animate(t){const dt=Math.min(t-last,40);last=t;const dx=v*dt;collectionWheel.scrollLeft+=dx;travel+=Math.abs(dx);v*=Math.exp(-dt/190);if(Math.abs(v)>.03&&travel<collectionWheel.clientWidth*2)flingFrame=requestAnimationFrame(animate);else{flingFrame=null;collectionWheel.classList.remove('dragging');paintCollectionWheel();centerWheel(wheelIndex);}}flingFrame=requestAnimationFrame(animate);}
collectionWheel.addEventListener('pointerup',releaseCollection);collectionWheel.addEventListener('pointercancel',()=>{collectionDrag=null;cancelFling();});

// Initialize the hero only after the shared image-decode cache exists.
paintHeroAngle();

const siteMenuToggle=$('#site-menu-toggle');
function closeSiteMenu(){siteMenuToggle.setAttribute('aria-expanded','false');siteMenuToggle.setAttribute('aria-label','Open main menu');$('#site-menu').classList.remove('menu-open');}
siteMenuToggle.addEventListener('click',()=>{const open=siteMenuToggle.getAttribute('aria-expanded')!=='true';siteMenuToggle.setAttribute('aria-expanded',String(open));siteMenuToggle.setAttribute('aria-label',open?'Close main menu':'Open main menu');$('#site-menu').classList.toggle('menu-open',open);});
$('#site-menu').addEventListener('click',e=>{if(e.target.closest('a'))closeSiteMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&siteMenuToggle.getAttribute('aria-expanded')==='true'){closeSiteMenu();siteMenuToggle.focus();}});
