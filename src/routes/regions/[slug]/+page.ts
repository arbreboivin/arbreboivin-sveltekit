import { error } from '@sveltejs/kit';
import { getRegionBySlug, getRegionPageContent, regions } from '$lib/content/regions';

export function entries() {
	return regions.map((r) => ({ slug: r.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const region = getRegionBySlug(params.slug);
	if (!region) {
		error(404, { message: 'Région non trouvée' });
	}
	return { page: getRegionPageContent(region) };
}
