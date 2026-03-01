import sharp from 'sharp';
import { readdir, stat, writeFile, rename, unlink } from 'fs/promises';
import { join } from 'path';

const photoDir = './static/photo';
const files = await readdir(photoDir);
const jpegs = files.filter(f => f.match(/\.(jpeg|jpg)$/i));

console.log(`Compression de ${jpegs.length} images...`);

for (const file of jpegs) {
  const filePath = join(photoDir, file);
  const tmpPath = filePath + '.tmp';
  const before = (await stat(filePath)).size;
  
  try {
    await sharp(filePath)
      .jpeg({ quality: 75, progressive: true })
      .toFile(tmpPath);
    
    await unlink(filePath);
    await rename(tmpPath, filePath);
    
    const after = (await stat(filePath)).size;
    const reduction = Math.round((1 - after / before) * 100);
    console.log(`  ${file}: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB (-${reduction}%)`);
  } catch (err) {
    console.log(`  IGNORÉ ${file}: ${err.message.split('\n')[0]}`);
    try { await unlink(tmpPath); } catch {}
  }
}

console.log('\nCompression terminée!');
