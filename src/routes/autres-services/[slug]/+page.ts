import { error } from '@sveltejs/kit';
import { getAutreServiceBySlug } from '$lib/content/pages';

export function load({ params }: { params: { slug: string } }) {
	const service = getAutreServiceBySlug(params.slug);
	if (!service) {
		error(404, { message: 'Service non trouvé' });
	}
	return { service };
}
