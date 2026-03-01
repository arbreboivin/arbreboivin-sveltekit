import { error } from '@sveltejs/kit';
import { getAutreServiceEnBySlug } from '$lib/content/pages.en';

export function load({ params }: { params: { slug: string } }) {
	const service = getAutreServiceEnBySlug(params.slug);
	if (!service) {
		error(404, { message: 'Service not found' });
	}
	return { service };
}
