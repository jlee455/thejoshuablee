"""Check shipped HTML, crawl metadata, schema, form registration, and local targets."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,html,re
root=Path(__file__).resolve().parents[1];dist=root/'dist'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.schema=[];self.inscript=False;self.buf=''
 def handle_starttag(self,tag,attrs):
  d=dict(attrs);self.tags.append((tag,d));
  if tag=='script' and d.get('type')=='application/ld+json':self.inscript=True;self.buf=''
 def handle_data(self,data):
  if self.inscript:self.buf+=data
 def handle_endtag(self,tag):
  if tag=='script' and self.inscript:self.schema.append(json.loads(self.buf));self.inscript=False
errors=[];pages=0;schema_count=0
for f in dist.rglob('*.html'):
 rel=f.relative_to(dist).as_posix()
 if rel.startswith(('collection/','collection-showcase/','collection-media/')):continue
 source=f.read_text();p=Page();p.feed(source);pages+=1;schema_count+=len(p.schema)
 auxiliary=rel in ('__forms.html','speaking/thanks/index.html','404.html')
 if auxiliary:
  assert any(t=='meta' and d.get('name')=='robots' and 'noindex' in d.get('content','') for t,d in p.tags),rel
 else:
  canonical=[d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='canonical']
  expected='https://joshuablee.com/'+rel.removesuffix('index.html')
  if canonical!=[expected]:errors.append((rel,'canonical',canonical,expected))
  for tag,key,val in [('meta','name','description'),('meta','property','og:title'),('meta','property','og:description'),('meta','name','twitter:card')]:
   found=[d.get('content','') for t,d in p.tags if t==tag and d.get(key)==val]
   if len(found)!=1 or not found[0]:errors.append((rel,'metadata',val))
  if len(re.findall(r'<h1(?:\s|>)',source))!=1:errors.append((rel,'h1'))
  if not re.search(r'<title>[^<]+</title>',source):errors.append((rel,'title'))
  if not p.schema:errors.append((rel,'schema absent'))
 for tag,d in p.tags:
  for key in ('href','src','poster'):
   v=d.get(key,'')
   if not v.startswith('/') or v.startswith('//'):continue
   target=dist/unquote(urlsplit(v).path).lstrip('/')
   if not(target.is_file() or (target/'index.html').is_file()):errors.append((rel,'missing target',v))
s=Page();body=(dist/'speaking/index.html').read_text();s.feed(body)
faq=[g for block in s.schema for g in block.get('@graph',[]) if g.get('@type')=='FAQPage']
assert len(faq)==1
for q in faq[0]['mainEntity']:
 assert q['name'] in html.unescape(body) and q['acceptedAnswer']['text'] in html.unescape(body)
forms=[d for t,d in s.tags if t=='form' and d.get('name')=='speaking-inquiry'];assert len(forms)==1 and forms[0]['method'].lower()=='post'
skeleton=Page();skeleton.feed((dist/'__forms.html').read_text())
fields=lambda p:{d['name'] for t,d in p.tags if t in ('input','select','textarea') and 'name' in d}
assert fields(s)==fields(skeleton)
assert '/__forms' not in (dist/'sitemap.xml').read_text() and '/speaking/thanks' not in (dist/'sitemap.xml').read_text()
assert not errors,errors[:20]
print(json.dumps({'result':'PASS','html_pages':pages,'json_ld_blocks':schema_count,'planner_answers':len(faq[0]['mainEntity']),'form_fields':len(fields(s)),'missing_targets':0}))
