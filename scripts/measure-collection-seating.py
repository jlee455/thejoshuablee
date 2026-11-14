"""Measure alpha > 10 without modifying any source photograph."""
import hashlib,json
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parent.parent
path=root/'public/collection-media/collection.json'
data=json.loads(path.read_text())
cache={}
def measure(src):
 if src in cache:return cache[src]
 f=root/'public'/src.lstrip('/')
 im=Image.open(f).convert('RGBA')
 b=im.getchannel('A').point(lambda a:255 if a>10 else 0).getbbox()
 assert b,src
 x,y,r,bottom=b
 result=dict(src=src,width=im.width,height=im.height,bounds=[x,y,r-x,bottom-y],soleY=bottom,alphaThreshold=10,normalizedScale=min(820/(r-x),850/(bottom-y)),sha256=hashlib.sha256(f.read_bytes()).hexdigest())
 cache[src]=result
 return result
for p in data['pairs']:
 p['seating']=measure(p['showcase']['src'])
 p['angle_seating']=[measure(src) for src in p['float_photos']]
 # Wheel shares exact alpha bounds rather than the earlier hand-cropped bounds.
 p['showcase']['viewBox']=p['seating']['bounds']
path.write_text(json.dumps(data,indent=2)+'\n')
print(f"Measured {len(data['pairs'])} displays and {len(cache)} unique images; originals unchanged")
