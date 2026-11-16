// Compose the approved design with the canonical content/SEO produced by prerender.
// This runs in the same build as the collection. A single dist is the deploy unit.
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const read=p=>fs.readFileSync(p,'utf8'),out=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s)};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const scripts=s=>[...s.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g)].map(m=>m[0]).join('\n');
const oldHome=read('dist/index.html');
const baseSchema=scripts(oldHome);
const routes=['','about','speaking','work-with-me','my-world','authority-architecture','book','insights','evidence','recommendations','collection'];
for(const route of routes){
 const file=(route?route+'/':'')+'index.html',dest='dist/'+file;
 const old=fs.existsSync(dest)?read(dest):'';let html=read('design/'+file);
 // Retain canonical metadata and all structured proof, without obsolete React assets.
 const head=old.match(/<head[^>]*>([\s\S]*?)<\/head>/)?.[1]||'';
 let metadata=[...head.matchAll(/<title>[\s\S]*?<\/title>|<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>|<link\b[^>]*rel="canonical"[^>]*>/g)].map(m=>m[0]).join('\n');
 if(!metadata.includes('<title>'))metadata=`<title>${route==='book'?'Balance Is Bullsh*t 2.0': 'The Collection'} — Joshua B. Lee</title><link rel="canonical" href="https://joshuablee.com/${route}/"><meta name="robots" content="index, follow">`;
 html=html.replace(/<meta name="description"[^>]*>/g,'').replace('</head>',metadata+scripts(old||oldHome)+'</head>');
 if(route==='recommendations'){
  const cards=[...old.matchAll(/<li id="([^"]+)"[^>]*>([\s\S]*?)<\/li>/g)].filter(m=>m[2].includes('<blockquote')).map(m=>`<article id="${m[1]}" class="quote-card">${m[2]}</article>`).join('');
  assert.equal((cards.match(/<blockquote/g)||[]).length,73);
  html=html.replace(/<section class="j-section j-quotes"[\s\S]*?<\/section>/,`<section class="j-section j-quotes">${cards}</section>`);
  const method=old.match(/<details class="ed-proof-method">[\s\S]*?<\/details>/)?.[0];assert(method);
  html=html.replace('<section class="j-section j-quotes">',`<section class="j-section j-proof-method">${method}<p>Wrote one of these and want it changed or removed? Email <a href="mailto:josh@standoutauthority.com">josh@standoutauthority.com</a>.</p></section><section class="j-section j-quotes">`);
 }
 out(dest,html);
}
// Regenerate article bodies and headings from the preserved canonical archive on every build.
const articles=JSON.parse(read('src/content/articles.json'));const template=read('design/article.html');
for(const [slug,a] of Object.entries(articles)){
 const dest=`dist/insights/${slug}/index.html`,old=read(dest);
 let html=template.replace(/<section class="j-intro article-intro">[\s\S]*?<\/section>/,`<section class="j-intro article-intro"><span class="kicker">INSIGHTS / JOSHUA B. LEE</span><h1>${esc(a.title)}</h1><p class="j-small">${esc(a.date)}</p><a class="j-link" href="/insights/">← All insights</a></section>`);
 html=html.replace(/<article class="j-article">[\s\S]*?<\/article>/,`<article class="j-article">${a.body}</article>`);
 const metadata=[...old.matchAll(/<title>[\s\S]*?<\/title>|<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>|<link\b[^>]*rel="canonical"[^>]*>/g)].map(m=>m[0]).join('\n');
 html=html.replace(/<meta name="description"[^>]*>/g,'').replace('</head>',metadata+scripts(old)+'</head>');out(dest,html);
}
for(const f of ['style.css','app.js','site.css','site.js','collection/living.css','collection/living.js'])out('dist/'+f,read('design/'+f));
// Trademark in visible editorial copy and metadata, never mutate URLs or script identifiers.
for(const route of routes){const file='dist/'+(route?route+'/':'')+'index.html';let h=read(file);h=h.replace(/YOUmanize(?!™|<sup|\w|\.|\/)/g,'YOUmanize™');out(file,h)}
let sitemap=read('dist/sitemap.xml');sitemap=sitemap.replace('</urlset>','  <url><loc>https://joshuablee.com/book/</loc></url>\n</urlset>');out('dist/sitemap.xml',sitemap);
console.log(`Approved design: ${routes.length} core pages + ${Object.keys(articles).length} articles, existing SEO and recommendation evidence retained`);
