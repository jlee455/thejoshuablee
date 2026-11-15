"""Small display renditions; canonical originals and identity metadata remain intact."""
import json,hashlib
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parent.parent
pairs=json.loads((root/'public/collection-media/collection.json').read_text())['pairs'];out=root/'public/collection-media/thumbnails';out.mkdir(exist_ok=True);mapping={}
for p in pairs:
 a=p.get('seating')
 if not a:continue
 source=root/'public'/a['src'].lstrip('/');name=hashlib.sha256(source.read_bytes()).hexdigest()[:16]+'.webp';dest=out/name
 if not dest.exists():
  im=Image.open(source);im.thumbnail((600,450),Image.Resampling.LANCZOS);im.save(dest,'WEBP',quality=85,method=4)
 mapping[a['src']]='/collection-media/thumbnails/'+name
(root/'public/collection-showcase/thumbnails.js').write_text('const THUMBNAILS = '+json.dumps(mapping,separators=(',',':'))+';\n')
print('Preview renditions:',len(mapping))
