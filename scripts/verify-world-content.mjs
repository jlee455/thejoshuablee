import assert from 'node:assert/strict'
import fs from 'node:fs'
const read = path => fs.readFileSync(new URL('../'+path, import.meta.url),'utf8')
const articles = JSON.parse(read('src/content/articles.json'))
const content = JSON.parse(read('src/data/speakerContent.json'))
const checkArchive = data => {
 assert.equal(Object.keys(data).length,246,'Existing article routes must be preserved')
 const essay=data['why-doesnt-trust-scale']
 assert.equal(essay.title,'Trust Starts Before the Introduction')
 assert.equal(essay.date,'2026-07-29')
 assert.equal(essay.linkedinUrl,'https://www.linkedin.com/pulse/why-doesnt-trust-scale-joshua-b-lee-k2wqf')
 for(const [slug,a] of Object.entries(data)){
  assert(!/<\/?div\b/i.test(a.body),'Malformed imported markup: '+slug)
  assert(!/linkedin\.com\/redir\/redirect/i.test(a.body),'Unresolved redirect wrapper: '+slug)
  assert(!/\[(Get|Reveal)[^\]]*YOUmanize[^\]]*Score\]/i.test(a.body),'Retired product CTA: '+slug)
 }
}
checkArchive(articles)
assert(content.brand.bio.includes('17 companies'))
assert(content.brand.bio.includes('more than $1 billion'))
assert(read('public/speaker-kit.txt').includes(content.brand.bio),'Text kit biography drift')
for(const topic of content.keynotes)assert(read('public/speaker-kit.txt').includes(topic.outcome),'Text kit topic drift')
assert(!read('index.html').includes('Co-Founder of StandOut Authority'),'Structured biography drift')
if(process.argv.includes('--demonstrate')){
 const broken=structuredClone(articles);broken['why-doesnt-trust-scale'].body+='\n</div'
 assert.throws(()=>checkArchive(broken),/Malformed imported markup/)
 console.log('Archive negative control: PASS (malformed imported markup rejected)')
}
console.log('Personal-world content: PASS (246 original routes, corrected essay, clean invitations, shared biography and outcomes)')
