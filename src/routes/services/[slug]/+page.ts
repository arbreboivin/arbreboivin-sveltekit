import { error } from '@sveltejs/kit';
import { getServiceBySlug } from '$lib/content/services';

export function load({ params }: { params: { slug: string } }) {
	const service = getServiceBySlug(params.slug);
	if (!service) {
		error(404, { message: 'Service non trouvé' });
	}
	return { service };
}
