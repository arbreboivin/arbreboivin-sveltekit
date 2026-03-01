import { error } from '@sveltejs/kit';
import { getServiceEnBySlug } from '$lib/content/services.en';

export function load({ params }: { params: { slug: string } }) {
	const service = getServiceEnBySlug(params.slug);
	if (!service) {
		error(404, { message: 'Service not found' });
	}
	return { service };
}
