"""Deploy the main site while retaining every file of the published collection.
Defaults to a draft. Production requires --production and a checked draft manifest.
Uses the existing Netlify CLI login; never emits credentials.
"""
from pathlib import Path
import concurrent.futures, hashlib, json, sys, time, urllib.request, urllib.parse, tomllib
ROOT=Path(__file__).resolve().parents[1]
COLLECTION_BASE_REF='02b89dec06458932156becf99daa62b79ba2ddf1'
SITE='cd82e064-7656-40ae-837e-2605b7d55b8b'
RECEIPTS=ROOT/'release-receipts/world-review-2026-11-16'
RECEIPTS.mkdir(parents=True,exist_ok=True)
config=json.loads((Path.home()/'Library/Preferences/netlify/config.json').read_text())
token=config['users'][config['userId']]['auth']['token']
def api(path,method='GET',payload=None,binary=False):
    data=payload if binary else (json.dumps(payload).encode() if payload is not None else None)
    request=urllib.request.Request('https://api.netlify.com/api/v1/'+path,data=data,method=method,headers={'Authorization':'Bearer '+token,'Content-Type':'application/octet-stream' if binary else 'application/json'})
    with urllib.request.urlopen(request,timeout=60) as response:return json.load(response)
def sha(p):return hashlib.sha1(p.read_bytes()).hexdigest()
EDITABLE_COLLECTION={'/collection/index.html','/collection-showcase/app.js','/collection-showcase/brand.css'}
def protected(p):return p.startswith(('/collection/','/collection-media/','/collection-showcase/')) and p not in EDITABLE_COLLECTION
production='--production' in sys.argv
site=api('sites/'+SITE)
baseline=site['published_deploy']['id']
if production:
    preview=json.loads((RECEIPTS/'preview.json').read_text())
    assert baseline==preview['baseline_deploy'],'Published site changed; review before publishing.'
    files=json.loads((RECEIPTS/'manifest.json').read_text())
    local_paths=json.loads((RECEIPTS/'uploads.json').read_text())
    for p,digest in files.items():
        if p in local_paths:assert sha(Path(local_paths[p]))==digest,'Build changed after preview: '+p
else:
    live=api('deploys/'+baseline+'/files')
    # Only overlay the three collection files changed in this review when their
    # committed starting point still matches the published version.
    import subprocess
    for url in EDITABLE_COLLECTION:
        local=url.lstrip('/') if url.startswith('/collection/') else 'public'+url
        committed=subprocess.check_output(['git','show',COLLECTION_BASE_REF+':'+local],cwd=ROOT)
        published=next(x['sha'] for x in live if x['path']==url)
        assert hashlib.sha1(committed).hexdigest()==published, 'Collection base drift: '+url
    files={x['path']:x['sha'] for x in live}
    (RECEIPTS/'baseline-files.json').write_text(json.dumps(files,indent=2))
    local_paths={}
    # Compile the repository's response headers for an API deployment.
    cfg=tomllib.loads((ROOT/'netlify.toml').read_text())
    headers='\n\n'.join(h['for']+'\n'+'\n'.join('  '+k+': '+v for k,v in h['values'].items()) for h in cfg.get('headers',[]))
    (ROOT/'dist/_headers').write_text(headers+'\n')
    for path in (ROOT/'dist').rglob('*'):
        if not path.is_file():continue
        url='/'+path.relative_to(ROOT/'dist').as_posix()
        if protected(url):continue
        files[url]=sha(path);local_paths[url]=str(path)
    before={x['path']:x['sha'] for x in live if protected(x['path'])}
    assert before and all(files[k]==v for k,v in before.items())
    (RECEIPTS/'manifest.json').write_text(json.dumps(files,indent=2))
    (RECEIPTS/'uploads.json').write_text(json.dumps(local_paths,indent=2))
    print('Manifest:',len(files),'files;',len(before),'collection files retained exactly',flush=True)
d=api('sites/'+SITE+'/deploys','POST',{'files':files,'draft':not production,'title':'Office and personal-world review: Joshua B. Lee'})
print('Created',d['id'],'state',d['state'],'draft',not production,flush=True)
required=d.get('required',[])
byhash={files[p]:p for p in local_paths}
assert all(h in byhash for h in required),'Service requested unavailable baseline content; stopping.'
def upload(h):
    p=byhash[h]
    api('deploys/'+d['id']+'/files/'+urllib.parse.quote(p.lstrip('/'),safe='/'),'PUT',Path(local_paths[p]).read_bytes(),True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:list(pool.map(upload,required))
print('Uploaded',len(required),'changed files',flush=True)
for _ in range(24):
    state=api('deploys/'+d['id'])
    if state['state'] in ('ready','error'):break
    time.sleep(2)
assert state['state']=='ready',state.get('error_message',state['state'])
receipt={'git_connected':bool(site.get('build_settings',{}).get('repo_url')),'collection_files_updated':sorted(EDITABLE_COLLECTION),'id':d['id'],'state':state['state'],'baseline_deploy':baseline,'url':state.get('deploy_ssl_url') or state.get('deploy_url'),'production':production,'files':len(files),'uploaded':len(required),'collection_files_preserved':sum(protected(p) for p in files)}
if production:
    current=api('sites/'+SITE)
    assert current['published_deploy']['id']==d['id'],'Deployment ready but not current production.'
    receipt['live_url']=current['ssl_url']
(RECEIPTS/('production.json' if production else 'preview.json')).write_text(json.dumps(receipt,indent=2))
print(json.dumps(receipt),flush=True)
