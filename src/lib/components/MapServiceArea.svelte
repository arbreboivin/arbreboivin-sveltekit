<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		/** Légende sous la carte (optionnel) */
		legend?: string;
	}

	let { legend = 'Zone verte = secteur desservi (Portneuf, Saint-Raymond, Québec et environs)' }: Props = $props();

	let mapContainer: HTMLDivElement;
	let map: import('leaflet').Map | null = null;

	/**
	 * Périmètre anguleux de la zone de service.
	 * Saint-Raymond au nord-ouest, Donnacona au sud-ouest, Québec à l’est.
	 * Coordonnées [lat, lng].
	 */
	const serviceAreaPerimeter: [number, number][] = [
		[46.89, -71.83],
		[46.93, -71.62],
		[46.98, -71.42],
		[46.88, -71.25],
		[46.78, -71.2],
		[46.7, -71.32],
		[46.66, -71.58],
		[46.66, -71.78],
		[46.75, -71.88],
		[46.89, -71.83]
	];

	onMount(async () => {
		const L = await import('leaflet');
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer).setView([46.82, -71.5], 10);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			maxZoom: 19
		}).addTo(map);

		const polygon = L.polygon(serviceAreaPerimeter, {
			color: '#1a4a1a',
			weight: 2,
			fillColor: '#2d6a2d',
			fillOpacity: 0.35
		}).addTo(map);

		map.fitBounds(polygon.getBounds(), { padding: [24, 24] });

		return () => {
			map?.remove();
			map = null;
		};
	});
</script>

<div
	bind:this={mapContainer}
	class="h-[420px] w-full rounded-2xl overflow-hidden bg-gray-200 max-md:rounded-xl max-md:h-[320px]"
	aria-label="Carte de la zone de service Arbre Boivin"
></div>

<p class="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
	{legend}
</p>
