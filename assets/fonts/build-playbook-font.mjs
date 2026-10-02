import fs from 'node:fs';
import opentype from 'opentype.js';

// Derivative of Jamie Wilson's Norwester, under the included SIL OFL.
// Curve runs become straight chamfers; glyph metrics and Unicode stay intact.
const source = fs.readFileSync(new URL('./norwester.woff', import.meta.url));
const original = opentype.parse(source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength));
const glyphs = [];
for (let i = 0; i < original.glyphs.length; i++) {
  const glyph = original.glyphs.get(i);
  const commands = [];
  for (let j = 0; j < glyph.path.commands.length; j++) {
    let command = glyph.path.commands[j];
    if (command.type === 'Q' || command.type === 'C') {
      while (['Q', 'C'].includes(glyph.path.commands[j + 1]?.type)) command = glyph.path.commands[++j];
      commands.push({ type: 'L', x: command.x, y: command.y });
    } else {
      commands.push({ ...command });
    }
  }
  glyph.path.commands = commands;
  glyphs.push(glyph);
}
const font = new opentype.Font({
  familyName: 'Julia Playbook',
  styleName: 'Regular',
  unitsPerEm: original.unitsPerEm,
  ascender: original.ascender,
  descender: original.descender,
  glyphs,
  copyright: 'Copyright (c) 2013 Jamie Wilson. Modified for joinjulia.com; original Reserved Font Name: Norwester.',
  license: 'SIL Open Font License 1.1. See norwester-OFL.txt.',
  licenseURL: 'https://openfontlicense.org/',
});
fs.writeFileSync(new URL('../../public/fonts/julia-playbook.otf', import.meta.url), Buffer.from(font.toArrayBuffer()));
