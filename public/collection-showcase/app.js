'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const opening=['B13','B22','V26','V03','U04','V47'];
const sorted=[...CATALOG].sort((a,b)=>((opening.indexOf(a.id)+1)||999)-((opening.indexOf(b.id)+1)||999)||a.wall_order-b.wall_order);
let all=false,filtered=sorted,selected=null,angle=0,origin=null,version=0,viewMode="showcase",momentum=null;
function art(a,name,mode='wall',lazy=false,fixedScale=null){
 const [bx,by,bw,bh]=a.bounds; const height=600;
 const scale=fixedScale??Math.min((mode==='hero'?850:840)/bw,540/bh);
 const left=(1000-bw*scale)/2;
 return `<svg viewBox="0 0 1000 ${height}" preserveAspectRatio="xMidYMax meet" role="img" aria-label="${esc(name)}"><image ${lazy?'data-src':'href'}="${esc(a.src)}" x="${left-bx*scale}" y="${height-a.soleY*scale}" width="${a.width*scale}" height="${a.height*scale}"/></svg>`;
}
document.querySelector('[data-archive-count]').textContent=CATALOG.length+' PAIRS IN THE ARCHIVE';
const heroPair=CATALOG.find(p=>p.id==='B13');
function magHero(p){
 const a=p.seating,[bx,by,bw,bh]=a.bounds,scale=Math.min(850/bw,540/bh),left=(1000-bw*scale)/2;
 // Lights are anchored in artwork coordinates, sharing the exact image transform.
 const lights=`<defs><filter id="mag-bloom" x="-100%" y="-200%" width="300%" height="500%"><feGaussianBlur stdDeviation="8"/></filter></defs><g class="mag-leds" aria-hidden="true" transform="translate(${left-bx*scale} ${600-a.soleY*scale}) scale(${scale})"><g class="mag-sole-glow" fill="#7ee9ff"><path d="M265 913 Q365 857 468 852 Q550 866 625 893 Q716 862 814 901 L927 954 Q614 982 289 951 Z" filter="url(#mag-bloom)" opacity=".72"/><path d="M280 932 Q411 894 529 913 T747 924 L894 947" fill="none" stroke="#c4f8ff" stroke-width="6" opacity=".55"/></g><g class="mag-indicators"><path d="M287 776 L326 783" stroke="#ff655f"/><path d="M333 751 L371 760" stroke="#ffdf63"/><path d="M380 730 L416 738" stroke="#96ff9f"/></g></g>`;
 return art(a,p.name+' — AI showcase illustration','hero').replace('</svg>',lights+'</svg>');
}
$('#hero-art').innerHTML=magHero(heroPair);
function magPower(on){$('#room').classList.toggle('mag-on',on);$('#mag-power').setAttribute('aria-pressed',String(on));$('#mag-power').innerHTML=on?'Lights on <span>◉</span>':'Light it up <span>◉</span>';}
$('#mag-power').addEventListener('click',()=>magPower(!$('#room').classList.contains('mag-on')));
const magReady=new Image();magReady.src=heroPair.seating.src;
magReady.decode().then(()=>{if(reduced.matches)magPower(true);else setTimeout(()=>magPower(true),700);}).catch(()=>{});
for(const key of ['brand','family']) for(const v of [...new Set(CATALOG.map(p=>p[key]))].sort()) {const o=document.createElement('option');o.value=v;o.textContent=v;$('#'+key).append(o);}
function card(p){return `<button class="shoe-card" data-open="${esc(p.id)}" aria-label="Explore ${esc(p.name)}"><span class="card-num"><span>${String(p.wall_order).padStart(3,'0')}</span><span>↗</span></span><span class="card-shadow"></span><span class="card-art">${art(p.seating,p.name+(p.showcase?.ai?' — illustrated showcase':''),'wall',true)}</span><span class="card-shelf"></span><span class="card-copy"><small>${esc(p.brand)} / ${esc(p.family)}</small><strong>${esc(p.name)}</strong>${p.showcase?.ai?'<span class="render-label">Illustrated showcase</span>':''}</span></button>`;}
const artworkObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){const im=entry.target;im.setAttribute('href',im.dataset.src);delete im.dataset.src;artworkObserver.unobserve(im);}}},{rootMargin:'500px'});
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
$('#lighting').addEventListener('click',()=>{const on=document.body.classList.toggle('evening');$('#lighting').setAttribute('aria-pressed',on);$('#lighting').setAttribute('aria-label',on?'Switch to daylight':'Switch to evening lighting');$('#lighting span').textContent=on?'Daylight':'Evening light';});
$('#room').addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||reduced.matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*16}deg`);e.currentTarget.style.setProperty('--rx',`${-((e.clientY-r.top)/r.height-.5)*4}deg`);});
$('#room').addEventListener('pointerleave',()=>{for(const v of ['--rx','--ry'])$('#room').style.setProperty(v,'0deg');});
$('#shelf-room').addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||reduced.matches)return;const c=e.target.closest('.shoe-card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--card-y',`${((e.clientX-r.left)/r.width-.5)*10}deg`);}});
$('#shelf-room').addEventListener('pointerout',e=>{const c=e.target.closest('.shoe-card');if(c&&!c.contains(e.relatedTarget))c.style.setProperty('--card-y','0deg');});
function views(p){return viewMode==='photos'&&p.angle_seating.length?p.angle_seating:[p.seating];}
function preferredView(p){return p.angle_seating.length>1?'photos':'showcase';}
function isTurntable(p){return p.rotation?.coverage==='full_turn'||(p.viewer==='spin'&&p.angle_seating.length===8&&/^StockX 360/i.test(p.photo_source||''));}
const decodedAngles=new Map();
function decodeAngle(src){
 if(!decodedAngles.has(src)){
  const image=new Image(); image.src=src;
  decodedAngles.set(src,image.decode().catch(error=>{decodedAngles.delete(src);throw error;}));
 }
 return decodedAngles.get(src);
}
function photoScale(p){
 // Keep the same camera scale across a turn, including narrow front/heel frames.
 const frames=p.angle_seating.filter(a=>a.transparent);
 return frames.length?Math.min(840/Math.max(...frames.map(a=>a.bounds[2])),540/Math.max(...frames.map(a=>a.bounds[3]))):null;
}
async function paintAngle(){
 const token=++version,p=selected,index=angle,a=views(p)[index],count=views(p).length;
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
 if(hasPhotos)for(const a of selected.angle_seating)decodeAngle(a.src).catch(()=>{});
 $('#mode-photos').disabled=!selected.angle_seating.length;
 $('#mode-showcase').setAttribute('aria-pressed',viewMode==='showcase');$('#mode-photos').setAttribute('aria-pressed',hasPhotos);
 $('#photo-wheel').hidden=!canRotate;$('#angle-dots').hidden=!canRotate||views(selected).length>12;$('.angle-controls').hidden=!canRotate;
 $('#pair-invite').textContent=turntable?'Drag the shoe to turn it around.':canRotate?'Drag the shoe to explore the available views.':'A closer look at the pair.';
 $('#angle-dots').setAttribute('aria-label',hasPhotos?'Choose a photograph':'Showcase illustration');
 $('.photo-note').textContent=hasPhotos?(turntable?`${selected.angle_seating.length} photographic angles of the model. Not a 3-D scan of this physical pair.`:canRotate?'A gallery of available model photographs; full 360° coverage is not verified.':'Single reference photograph; rotation is not available for this pair yet.'):(selected.angle_seating.length<2?'Single-view showcase. Rotation is not available for this pair yet. ':'')+(selected.showcase?.ai?'AI-assisted illustration; fine details may differ from the physical pair.':'Reference photograph.');
 $('.angle-controls small').textContent=turntable?'DRAG SHOE TO ROTATE':canRotate?'DRAG SHOE TO VIEW PHOTOS':'SINGLE VIEW';
 $('#angle-stage').setAttribute('aria-label',canRotate?'Drag shoe to explore angles. Arrow keys change views; Home and End select the first and last view.':'Single-view shoe image.');
 $('#pair-id').textContent=selected.id;$('#pair-brand').textContent=selected.brand+' / '+selected.family;
 $('#identity-note').textContent=selected.identity_note||'';$('#identity-note').hidden=!selected.identity_note;
 $('#pair-title').textContent=selected.name;$('#pair-code').textContent=selected.style_code?'STYLE '+selected.style_code:'';
 $('#swatches').replaceChildren(...selected.colors.map(c=>{const s=document.createElement('span');s.style.backgroundColor=c;return s;}));
 $('#angle-art').innerHTML='';$('#angle-count').textContent='—';$('#angle-dots').replaceChildren();angle=0;paintAngle();
}
function openPair(id,trigger){selected=CATALOG.find(p=>p.id===id);if(!selected)return;origin=trigger;viewMode=preferredView(selected);updatePair();$('#viewer').showModal();document.body.style.overflow='hidden';$('#close').focus();}
function closePair(){stopMomentum();cancelAngleDrag();version++;$('#viewer').close();document.body.style.overflow='';origin?.focus({preventScroll:true});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openPair(b.dataset.open,b);});
$('#hero-shoe').addEventListener('click',e=>openPair('B13',e.currentTarget));
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
const collectionWheel=$('#collection-wheel');let wheelIndex=0,collectionDrag=null,flingFrame=null,paintFrame=null,suppressWheelClick=false;
collectionWheel.innerHTML=sorted.map(p=>`<button class="rotation-pair" data-wheel-id="${esc(p.id)}" aria-label="Center ${esc(p.name)}"><span>${art(p.seating,p.name,'hero',true)}</span></button>`).join('');
const wheelCards=[...collectionWheel.children];
const wheelObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){const im=e.target.querySelector('image');if(im?.dataset.src){im.setAttribute('href',im.dataset.src);delete im.dataset.src;}wheelObserver.unobserve(e.target);}},{root:collectionWheel,rootMargin:'500px'});wheelCards.forEach(c=>wheelObserver.observe(c));
function paintCollectionWheel(){paintFrame=null;const r=collectionWheel.getBoundingClientRect(),center=r.left+r.width/2;let best=Infinity,nearest=0;wheelCards.forEach((c,i)=>{const distance=(c.offsetLeft-collectionWheel.offsetLeft+c.offsetWidth/2-collectionWheel.scrollLeft-r.width/2)/c.offsetWidth;const magnitude=Math.abs(distance);if(magnitude<best){best=magnitude;nearest=i;}c.style.setProperty('--turn',`${Math.max(-38,Math.min(38,-distance*30))}deg`);c.style.setProperty('--scale',Math.max(.62,1-magnitude*.19));c.style.setProperty('--opacity',Math.max(.28,1-magnitude*.29));});wheelIndex=nearest;const p=sorted[wheelIndex];$('#wheel-title').textContent=p.name;$('#wheel-count').textContent=`${String(wheelIndex+1).padStart(3,'0')} / ${sorted.length}`;wheelCards.forEach((c,i)=>{c.setAttribute('aria-label',(i===wheelIndex?'Explore ':'Center ')+sorted[i].name);c.tabIndex=i===wheelIndex?0:-1;});}
function queueWheelPaint(){if(paintFrame===null)paintFrame=requestAnimationFrame(paintCollectionWheel);}
function cancelFling(){if(flingFrame!==null)cancelAnimationFrame(flingFrame);flingFrame=null;collectionWheel.classList.remove('dragging');}
function centerWheel(i,behavior=reduced.matches?'instant':'smooth'){cancelFling();const n=Math.max(0,Math.min(sorted.length-1,i)),c=wheelCards[n];collectionWheel.scrollTo({left:c.offsetLeft-collectionWheel.offsetLeft+c.offsetWidth/2-collectionWheel.clientWidth/2,behavior});queueWheelPaint();}
collectionWheel.addEventListener('scroll',queueWheelPaint,{passive:true});new ResizeObserver(queueWheelPaint).observe(collectionWheel);queueWheelPaint();
$('#wheel-prev').addEventListener('click',()=>centerWheel(wheelIndex-1));$('#wheel-next').addEventListener('click',()=>centerWheel(wheelIndex+1));$('#wheel-open').addEventListener('click',e=>openPair(sorted[wheelIndex].id,e.currentTarget));
collectionWheel.addEventListener('click',e=>{if(suppressWheelClick){suppressWheelClick=false;return;}const c=e.target.closest('[data-wheel-id]');if(!c)return;const i=sorted.findIndex(p=>p.id===c.dataset.wheelId);if(i===wheelIndex)openPair(c.dataset.wheelId,c);else centerWheel(i);});
collectionWheel.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();centerWheel(e.key==='Home'?0:e.key==='End'?sorted.length-1:wheelIndex+(e.key==='ArrowLeft'?-1:1));});
collectionWheel.addEventListener('pointerdown',e=>{suppressWheelClick=false;cancelFling();if(e.pointerType!=='mouse'||e.button!==0)return;collectionDrag={x:e.clientX,t:e.timeStamp,v:0,total:0};});
collectionWheel.addEventListener('pointermove',e=>{if(!collectionDrag)return;const dx=e.clientX-collectionDrag.x,dt=Math.max(1,e.timeStamp-collectionDrag.t);collectionDrag={x:e.clientX,t:e.timeStamp,v:Math.max(-2,Math.min(2,-dx/dt)),total:collectionDrag.total+Math.abs(dx)};if(collectionDrag.total>5){collectionWheel.setPointerCapture(e.pointerId);collectionWheel.classList.add('dragging');collectionWheel.scrollLeft-=dx;}});
function releaseCollection(e){if(!collectionDrag)return;const d=collectionDrag;collectionDrag=null;suppressWheelClick=d.total>5;if(!suppressWheelClick)return;let v=e.timeStamp-d.t>100?0:d.v;if(reduced.matches||Math.abs(v)<.15){collectionWheel.classList.remove('dragging');centerWheel(wheelIndex);return;}let last=performance.now(),travel=0;function animate(t){const dt=Math.min(t-last,40);last=t;const dx=v*dt;collectionWheel.scrollLeft+=dx;travel+=Math.abs(dx);v*=Math.exp(-dt/190);if(Math.abs(v)>.03&&travel<collectionWheel.clientWidth*2)flingFrame=requestAnimationFrame(animate);else{flingFrame=null;collectionWheel.classList.remove('dragging');paintCollectionWheel();centerWheel(wheelIndex);}}flingFrame=requestAnimationFrame(animate);}
collectionWheel.addEventListener('pointerup',releaseCollection);collectionWheel.addEventListener('pointercancel',()=>{collectionDrag=null;cancelFling();});
