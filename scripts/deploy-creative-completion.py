"""Publish only the complete local dist. Preview first; production freezes that manifest.
Existing Netlify CLI login is used in memory. No credential output.
Production is locked after read-back so the stale remote main cannot overwrite it.
"""
from pathlib import Path
import concurrent.futures, hashlib, json, subprocess, sys, time, urllib.request, urllib.parse, tomllib
ROOT=Path(__file__).resolve().parents[1]
SITE='cd82e064-7656-40ae-837e-2605b7d55b8b'
RECEIPTS=ROOT/'release-receipts/creative-completion-2026-11-16'
RECEIPTS.mkdir(parents=True,exist_ok=True)
config=json.loads((Path.home()/'Library/Preferences/netlify/config.json').read_text())
token=config['users'][config['userId']]['auth']['token']
def api(path,method='GET',payload=None,binary=False):
 data=payload if binary else (json.dumps(payload).encode() if payload is not None else None)
 req=urllib.request.Request('https://api.netlify.com/api/v1/'+path,data=data,method=method,headers={'Authorization':'Bearer '+token,'Content-Type':'application/octet-stream' if binary else 'application/json'})
 with urllib.request.urlopen(req,timeout=60) as response:return json.load(response)
def sha(p):return hashlib.sha1(p.read_bytes()).hexdigest()
production='--production' in sys.argv
subprocess.run(['node','scripts/verify-unified-site.mjs'],cwd=ROOT,check=True)
site=api('sites/'+SITE);baseline=site['published_deploy']['id']
cfg=tomllib.loads((ROOT/'netlify.toml').read_text())
(ROOT/'dist/_headers').write_text('\n\n'.join(h['for']+'\n'+'\n'.join('  '+k+': '+v for k,v in h['values'].items()) for h in cfg.get('headers',[]))+'\n')
paths={'/'+p.relative_to(ROOT/'dist').as_posix():p for p in (ROOT/'dist').rglob('*') if p.is_file()}
files={url:sha(p) for url,p in paths.items()}
if production:
 assert not (RECEIPTS/'production.json').exists(),'This release already published; stop.'
 preview=json.loads((RECEIPTS/'preview.json').read_text())
 assert baseline==preview['baseline_deploy'],'Production changed since preview'
 assert files==json.loads((RECEIPTS/'manifest.json').read_text()),'Build changed since preview'
else:
 (RECEIPTS/'manifest.json').write_text(json.dumps(files,indent=2))
resume=next((x.split('=',1)[1] for x in sys.argv if x.startswith('--resume-preview=')),None)
assert not (resume and production), 'Only draft verification can be resumed'
d=api('deploys/'+resume) if resume else api('sites/'+SITE+'/deploys','POST',{'files':files,'draft':not production,'title':'Portrait-first mobile and personal editorial completion'})
if resume: assert d.get('context') == 'deploy-preview' and d.get('published_at') is None, 'Resume target must be an unpublished preview'
print('Created',d['id'],'draft',not production,flush=True)
required=d.get('required',[]);byhash={files[p]:paths[p] for p in paths}
def upload(h):
 p=byhash[h];url=p.relative_to(ROOT/'dist').as_posix()
 api('deploys/'+d['id']+'/files/'+urllib.parse.quote(url,safe='/'),'PUT',p.read_bytes(),True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:list(pool.map(upload,required))
for _ in range(30):
 state=api('deploys/'+d['id'])
 if state['state'] in ('ready','error'):break
 time.sleep(2)
assert state['state']=='ready',state.get('error_message',state['state'])
# Netlify file metadata normalizes path casing; validate collision safety first.
assert len({p.lower() for p in files})==len(files), 'Case-colliding source paths'
remote={x['path'].lower():x['sha'] for x in api('deploys/'+d['id']+'/files')}
assert all(remote.get(p.lower())==h for p,h in files.items()),'Hosted files differ from complete build'
receipt={'id':d['id'],'state':state['state'],'baseline_deploy':baseline,'url':state.get('deploy_ssl_url') or state.get('deploy_url'),'production':production,'files':len(files),'uploaded':len(required),'manifest_verified':True,'source_commit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),'catalog_pairs':len(json.loads((ROOT/'dist/collection-media/collection.json').read_text())['pairs'])}
if production:
 # Persist the verified upload before publication; never create a duplicate on retry.
 receipt['published']=False
 (RECEIPTS/'production.json').write_text(json.dumps(receipt,indent=2))
 current=api('sites/'+SITE)
 if current['published_deploy']['id']!=d['id']:
  assert current['published_deploy']['id']==baseline,'Production changed during upload'
  # A locked site keeps the prior deployment live until this explicit publish.
  api('sites/'+SITE+'/deploys/'+d['id']+'/restore','POST')
  current=api('sites/'+SITE)
 assert current['published_deploy']['id']==d['id'],'Ready but not published'
 receipt['published']=True
 api('deploys/'+d['id']+'/lock','POST',{})
 locked=api('deploys/'+d['id'])
 assert locked.get('locked') is True,'Publish lock not verified'
 assert api('sites/'+SITE)['published_deploy']['id']==d['id']
 receipt.update(locked=True,live_url=current['ssl_url'],remote_source_push='WRITE_ACCESS_VERIFIED')
(RECEIPTS/('production.json' if production else 'preview.json')).write_text(json.dumps(receipt,indent=2))
print(json.dumps(receipt),flush=True)
