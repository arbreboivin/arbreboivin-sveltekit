/**
 * Corrige manuellement l'orientation de photos connues pour être affichées
 * à l'envers (tournées 90° horaire) : on applique une rotation -90° aux pixels.
 * Usage: node fix-rotate-specific.mjs
 */
import sharp from 'sharp';
import { rename, unlink } from 'fs/promises';
import { join } from 'path';

const dir = './static/photo';

// Fichiers vus à l'envers sur la grille services (rotation -90° = sens anti-horaire)
const toRotate = ['image00010.jpeg', 'image00029.jpeg'];

for (const file of toRotate) {
	const path = join(dir, file);
	try {
		await sharp(path)
			.rotate(-90)
			.toFile(path + '.tmp');
		await unlink(path);
		await rename(path + '.tmp', path);
		console.log(`✓ ${file} → rotation -90° appliquée`);
	} catch (e) {
		console.log(`✗ ${file}: ${e.message}`);
	}
}
console.log('Terminé.');
