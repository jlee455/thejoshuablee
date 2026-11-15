"""Prepare a CLI release, preserving every file of the approved live collection."""
from pathlib import Path
import hashlib,json,shutil,urllib.request,concurrent.futures,tomllib
root=Path(__file__).resolve().parents[1]
base=json.loads((root/'release-receipts/editorial-2026-11-15/baseline-files.json').read_text())
out=Path('/tmp/jbl-speaking-release');out.mkdir(exist_ok=True)
protected=lambda p:p.startswith(('/collection/','/collection-media/','/collection-showcase/'))
def digest(p):return hashlib.sha1(p.read_bytes()).hexdigest()
def retain(item):
 url,expected=item;dst=out/url.lstrip('/');dst.parent.mkdir(parents=True,exist_ok=True)
 local=root/'dist'/url.lstrip('/')
 if dst.is_file() and digest(dst)==expected:return 'cached'
 if local.is_file() and digest(local)==expected:shutil.copy2(local,dst);return 'local'
 with urllib.request.urlopen('https://6afa09b7e56b2a0d736ecae9--superb-seahorse-8b48c8.netlify.app'+url,timeout=35) as response:body=response.read()
 assert hashlib.sha1(body).hexdigest()==expected,url
 dst.write_bytes(body);return 'downloaded'
# Keep old fingerprinted assets too, for visitors holding a cached page.
kept=[(p,h) for p,h in base.items() if protected(p) or p.startswith('/assets/')]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(retain,kept))
for path in (root/'dist').rglob('*'):
 if path.is_file():
  url='/'+path.relative_to(root/'dist').as_posix()
  if protected(url):continue
  dst=out/url.lstrip('/');dst.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(path,dst)
cfg=tomllib.loads((root/'netlify.toml').read_text());headers='\n\n'.join(h['for']+'\n'+'\n'.join('  '+k+': '+v for k,v in h['values'].items()) for h in cfg.get('headers',[]))
(out/'_headers').write_text(headers+'\n')
manifest={'/'+p.relative_to(out).as_posix():digest(p) for p in out.rglob('*') if p.is_file()}
assert all(manifest[p]==h for p,h in base.items() if protected(p))
r=root/'release-receipts/speaking-launch-2026-11-15';r.mkdir(exist_ok=True)
(r/'manifest.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps({'release_dir':str(out),'files':len(manifest),'preserved_collection':sum(protected(p) for p in base),'retained_local':results.count('local'),'downloaded':results.count('downloaded')}))
