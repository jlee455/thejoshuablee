"""Build the public speaker kit from reviewed site copy and owner-supplied photos.
Requires reportlab. Run from the repository root.
"""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/joshua-b-lee-speaker-kit.pdf'
FONT = Path('/System/Library/Fonts/Supplemental')
for name,file in [('Body','Arial.ttf'),('Bold','Arial Bold.ttf'),('Display','Georgia.ttf'),('Italic','Georgia Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(FONT/file)))
INK='#14242F'; PAPER='#F4F1EA'; MUTED='#50616C'; COPPER='#A94C23'; BLUE='#102331'
W,H=612,792
c=canvas.Canvas(str(OUT),pagesize=(W,H));c.setTitle('Joshua B. Lee | Speaker & Media Kit');c.setAuthor('Joshua B. Lee');c.setSubject('Keynotes, session topics, speaker biography, event photography, and booking information')
def box(x,y,w,h,color):
 c.setFillColor(HexColor(color));c.rect(x,y,w,h,stroke=0,fill=1)
def txt(text,x,y,size=12,font='Body',color=INK):
 c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,y,text)
def para(text,x,y,w,size=11,color=MUTED,font='Body',leading=None):
 p=Paragraph(text,ParagraphStyle('p',fontName=font,fontSize=size,leading=leading or size*1.5,textColor=HexColor(color)))
 _,h=p.wrap(w,H);p.drawOn(c,x,y-h);return y-h
def photo(name,x,y,w,h):
 # Layout crop only. Original photography remains unaltered.
 im=ImageReader(str(ROOT/'public/images'/name));iw,ih=im.getSize();scale=max(w/iw,h/ih)
 c.saveState();p=c.beginPath();p.rect(x,y,w,h);c.clipPath(p,stroke=0,fill=0)
 c.drawImage(im,x+(w-iw*scale)/2,y+(h-ih*scale)/2,iw*scale,ih*scale,mask='auto');c.restoreState()
def link(label,url,x,y,color=INK,size=10):
 txt(label,x,y,size,color=color);c.linkURL(url,(x,y-3,x+pdfmetrics.stringWidth(label,'Body',size),y+size),relative=0)
def base(n,label,dark=False):
 bg=BLUE if dark else PAPER; fg=PAPER if dark else INK;box(0,0,W,H,bg)
 txt('JOSHUA B. LEE',42,756,10,'Bold',fg);txt('SPEAKER & MEDIA KIT',393,756,9,color=fg)
 c.setStrokeColor(HexColor('#51616C' if dark else '#CACCC5'));c.line(42,735,570,735)
 txt(label,42,29,9,color=fg);link('joshuablee.com/speaking','https://joshuablee.com/speaking/',324,29,fg,9);txt(f'0{n}',553,29,9,color=fg)
def nextpage():c.showPage()
base(1,'HUMAN FIRST. IN BUSINESS. IN LIFE.',True)
txt('Move the room.',42,680,41,'Display',PAPER);txt('Make it human.',42,631,41,'Italic','#E6AD84')
para('Joshua B. Lee / Keynote speaker, entrepreneur & author',42,600,520,12,PAPER)
photo('joshua-hcl-onstage.jpg',42,215,528,350)
para('Leadership. LinkedIn authority. Trust in the age of AI.',42,190,528,18,PAPER,'Bold',24)
para('A human perspective for founders, executives, and teams ready to turn their expertise into meaningful connection.',42,149,510,12,'#D0D8DC')
link('Book through Jennifer  /  assistant@standoutauthority.com','mailto:assistant@standoutauthority.com',42,79,PAPER,11)
nextpage()
base(2,'THE CONVERSATIONS')
txt('A session built for',42,684,31,'Display');txt('your people.',42,645,31,'Italic',COPPER)
para('Start with the audience and the question you want them to leave thinking about. These themes give us a place to begin.',42,616,510,11)
topics=[('01','Becoming the Answer in an AI-Shaped World','How expertise is discovered, why clear positioning matters, and how verifiable public proof supports trust.','Leadership summits, marketing conferences, founder retreats.'),('02','Human-First Leadership in the Age of AI','Presence, relationships, and retaining a human voice as work becomes more automated.','Corporate leadership events, sales kickoffs, EO/YPO chapters.'),('03','Authority That Converts Without Ads','Positioning, content, and relationship-led business development: connecting what you know with how you show up.','Digital marketing events, entrepreneur conferences, brand summits.')]
y=533
for num,title,desc,audience in topics:
 c.setStrokeColor(HexColor('#CACCC5'));c.line(42,y+17,570,y+17);txt(num,42,y,11,'Bold',COPPER)
 bottom=para(title,82,y+5,480,18,INK,'Bold',23)
 bottom=para(desc,82,bottom-12,470,11)
 para('Best for: '+audience,82,bottom-10,470,9,MUTED)
 y-=146
box(42,61,528,50,BLUE);txt('Keynotes · Team sessions · Panels · Virtual conversations',58,82,11,color=PAPER)
nextpage()
base(3,'IN THE ROOM')
txt('Experience you can see.',42,683,31,'Display')
para('Joshua B. Lee at High Capacity Leaders',42,652,510,11)
photo('joshua-hcl-raised-hand.jpg',42,283,254,338)
photo('joshua-hcl-conversation.jpg',312,283,258,338)
para('“In one 75-minute group coaching session he delivered more actionable insight on relationship building and lead generation than most people get in a full course.”',42,251,520,18,INK,'Display',26)
txt('STU WEINTRAUB',42,125,10,'Bold',COPPER)
link('Read the named recommendations','https://joshuablee.com/recommendations/',42,90)
link('Watch Joshua speak','https://joshuablee.com/speaking/#reel',359,90)
nextpage()
base(4,'FOR EVENT ORGANIZERS')
txt('Make the introduction.',42,686,31,'Display')
photo('joshua-hero.jpg',42,438,132,222)
para('SHORT BIO',197,657,370,9,COPPER,'Bold')
para('Joshua B. Lee is co-founder of StandOut Authority and Co-Founder &amp; CVO of YOUmanize. He works with founders and executives on human-first authority, LinkedIn, and the way people discover and trust expertise in an AI-shaped world.',197,630,367,12,INK,leading=18)
link('Download portrait','https://joshuablee.com/images/joshua-hero.jpg',197,465)
link('Copyable bio & topics','https://joshuablee.com/speaker-kit.txt',197,443)
para('PLAN THE SESSION',42,405,528,10,COPPER,'Bold')
para('Share the event date, city and country (or virtual format), audience, budget range, and what you want your audience to take away. Jennifer coordinates all bookings and will discuss availability, fit, format, and production details with you.',42,381,528,11)
para('WALK-UP TRACK  /  GIVE IT TO YA',42,306,528,10,COPPER,'Bold')
para('Joshua’s selected walk-up track is available to preview and download. Coordinate the start cue, duration, playback level, and fade with Jennifer and your production lead.',42,282,528,11)
link('Preview the track','https://joshuablee.com/speaking/#walk-up',42,216)
link('Download MP3','https://joshuablee.com/audio/joshua-walk-up-give-it-to-ya.mp3',220,216)
box(42,66,528,125,BLUE)
txt('Book Joshua through Jennifer.',58,162,20,'Display',PAPER)
link('assistant@standoutauthority.com','mailto:assistant@standoutauthority.com',58,132,PAPER,12)
link('Start your event inquiry','https://joshuablee.com/speaking/#planner',58,107,PAPER,11)
txt('Austin, Texas · In-person and virtual inquiries worldwide',58,82,9,color='#D0D8DC')
c.save();print(OUT)
