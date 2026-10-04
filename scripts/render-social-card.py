"""Render the campaign sharing card: python3 scripts/render-social-card.py.

Requires Pillow. Uses the site's licensed Julia Playbook font; no remote assets.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / 'public/fonts/julia-playbook.otf'
image = Image.new('RGB', (1200, 630), '#103ca6')
draw = ImageDraw.Draw(image)

# Field markers echo the site's football theme without obscuring the copy.
for x in range(930, 1200, 60):
    draw.line((x, 42, x, 588), fill='#345bb2', width=2)
for y in range(70, 600, 70):
    draw.line((920, y, 940, y), fill='#ddf888', width=3)
draw.rectangle((0, 0, 16, 630), fill='#ddf888')

def label(text, xy, size, color='#ffffff'):
    font = ImageFont.truetype(str(FONT), size)
    assert draw.textbbox(xy, text, font=font)[2] < 1150, text
    draw.text(xy, text, font=font, fill=color)

label('JOIN JULIA', (60, 35), 32, '#ddf888')
label('DEMOCRATS', (60, 95), 100)
label('ON OFFENSE', (60, 200), 100)
draw.line((60, 335, 860, 335), fill='#ddf888', width=3)
label('JULIA ADELE CALLAHAN', (60, 357), 56)
label('FOR BIBB COUNTY DEMOCRATIC PARTY CHAIR', (60, 438), 30)
label('MACON, GEORGIA', (60, 488), 28)
label('WWW.JOINJULIA.COM', (60, 559), 27, '#ddf888')
image.save(ROOT / 'public/images/social-card.png', optimize=True)
