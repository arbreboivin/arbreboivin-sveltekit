import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const dir = './static/photo';
const files = readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

console.log(`Correction de ${files.length} images...`);

for (const file of files) {
	const path = join(dir, file);
	try {
		await sharp(path)
			.rotate() // auto-rotation basée sur EXIF
			.toFile(path + '.tmp');

		const { rename, unlink } = await import('fs/promises');
		await unlink(path);
		await rename(path + '.tmp', path);
		console.log(`✓ ${file}`);
	} catch (e) {
		console.log(`✗ ${file}: ${e.message}`);
	}
}
console.log('Terminé !');
