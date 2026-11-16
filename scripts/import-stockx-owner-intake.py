"""Import reviewed, exact-style StockX photographs without changing original pixels."""
import argparse, hashlib, json, shutil
from datetime import datetime, timezone
from pathlib import Path
from PIL import Image, ImageChops, ImageFilter
parser=argparse.ArgumentParser();parser.add_argument('intake',type=Path);parser.add_argument('--include-bodega',action='store_true');args=parser.parse_args()
root=Path(__file__).resolve().parents[1];catalog=root/'public/collection-media/collection.json';data=json.loads(catalog.read_text());rows=json.loads((args.intake/'sources.json').read_text());audit_path=root/'collection/intake/stockx-owner-intake-2026-11-16.json';audit=json.loads(audit_path.read_text())['added'] if audit_path.exists() else [];added_count=0
for row in rows:
 if row['sku']=='CZ8125-200' and not args.include_bodega:continue
 if any(p.get('style_code')==row['sku'] for p in data['pairs']):continue
 receipt=json.loads((args.intake/row['sku']/'receipt.json').read_text());frames=receipt['images']
 assert len(frames)==36 and len({x['sha256'] for x in frames})==36
 boxes=[];sizes=set()
 for frame in frames:
  f=Path(frame['file']);assert hashlib.sha256(f.read_bytes()).hexdigest()==frame['sha256']
  with Image.open(f) as im:
   sizes.add(im.size);rgb=im.convert('RGB');diff=ImageChops.difference(rgb,Image.new('RGB',im.size,'white')).convert('L');mask=diff.point(lambda x:255 if x>30 else 0).filter(ImageFilter.MedianFilter(3));boxes.append(mask.getbbox())
 assert len(sizes)==1 and all(boxes)
 w,h=sizes.pop();left=max(0,min(b[0] for b in boxes)-16);top=max(0,min(b[1] for b in boxes)-16);right=min(w,max(b[2] for b in boxes)+16);bottom=min(h,max(b[3] for b in boxes)+16);crop=[left,top,right-left,bottom-top]
 assets=[];dest=root/'public/collection-media/rotation/stockx-intake-2026-11-16'/row['sku'];dest.mkdir(parents=True,exist_ok=True)
 for frame in frames:
  f=dest/Path(frame['file']).name;shutil.copyfile(frame['file'],f)
  assets.append(dict(src='/'+f.relative_to(root/'public').as_posix(),width=w,height=h,bounds=[0,0,w,h],soleY=h,alphaThreshold=10,normalizedScale=min(820/w,850/h),transparent=False,sha256=frame['sha256'],crop=crop,source_url=frame['url']))
 # All first frames were visually reviewed: native right-facing lateral view, never mirrored.
 x,y,r,b=boxes[0];bounds=[x,y,r-x,b-y];seat=dict(assets[0],bounds=bounds,soleY=b,normalizedScale=min(820/bounds[2],850/bounds[3]))
 page='https://stockx.com/'+row['page'];id='STOCKX-'+row['sku']
 pair=dict(id=id,status='on_page',wall_order=max(p['wall_order'] for p in data['pairs'])+1,name=row['name'],style_code=row['sku'],brand=row['brand'],family=row['family'],moods=['everyday'],colors=[],note='',photo_source='StockX original product turntable photography',photo_rights='accepted_by_owner',confidence='Exact style matched to owner StockX history and source product page.',height_class='high' if row['sku'] in ['JA1135-100','CZ8125-200','100206315','AV3922-126'] else 'low',ownership='owner_confirmed',source_url=page,float_photos=[a['src'] for a in assets],angle_seating=assets,seating=seat,angles=36,viewer='spin',static_photo=seat['src'],rotation=dict(kind='photographic_turntable',coverage='full_turn',verified_full_turn=True,frame_count=36,source=page,checkedAt=datetime.now(timezone.utc).isoformat(),verification='36 unique sequential original photographs; eight distributed views reviewed for identity, front, heel and both sides.'),showcase=dict(src=seat['src'],width=w,height=h,viewBox=bounds,ai=False,direction='right'))
 data['pairs'].append(pair);added_count+=1;audit.append(dict(id=id,style_code=row['sku'],source_url=page,frame_count=36,sampled_frames=[1,5,10,14,19,23,28,32],sha256=[a['sha256'] for a in assets]))
catalog.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n')
(root/'collection/intake/stockx-owner-intake-2026-11-16.json').write_text(json.dumps(dict(imported_at=datetime.now(timezone.utc).isoformat(),added=audit,already_present=['B39','B43','B35','B30'],excluded_accessory='Pop Mart Labubu phone charms',bodega_status='included_owner_confirmed' if args.include_bodega else 'held_pending_ownership_confirmation_order_canceled',total_pairs=len(data['pairs'])),indent=2)+'\n')
html=root/'collection/index.html';s=html.read_text();import re
s=re.sub(r'\d+ PAIRS IN THE ARCHIVE',f"{len(data['pairs'])} PAIRS IN THE ARCHIVE",s);s=re.sub(r'Explore all \d+ pairs',f"Explore all {len(data['pairs'])} pairs",s);html.write_text(s)
print('Added',added_count,'pairs; total',len(data['pairs']))
