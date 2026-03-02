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
	 * Périmètre de la zone de service (Portneuf, Saint-Raymond, Québec et environs).
	 * Coordonnées [lat, lng] formant un polygone fermé.
	 */
	const serviceAreaPerimeter: [number, number][] = [
		[46.89, -71.83], // Saint-Raymond (NW)
		[46.93, -71.62], // Nord
		[46.98, -71.42], // Stoneham / nord-est
		[46.88, -71.25], // Québec nord
		[46.78, -71.2],  // Québec / est
		[46.7, -71.32],  // Sud-est
		[46.66, -71.58], // Neuville
		[46.66, -71.78], // Donnacona / Cap-Santé
		[46.75, -71.88], // Portneuf
		[46.89, -71.83]  // fermeture
	];

	onMount(async () => {
		const L = await import('leaflet');
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer).setView([46.82, -71.55], 9);

		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd',
			maxZoom: 19
		}).addTo(map);

		// Polygone principal : zone de service (vert semi-transparent)
		const polygon = L.polygon(serviceAreaPerimeter, {
			color: '#1a4a1a',
			weight: 2,
			fillColor: '#2d6a2d',
			fillOpacity: 0.35
		}).addTo(map);

		// Ajuster la vue pour inclure tout le polygone
		map.fitBounds(polygon.getBounds(), { padding: [20, 20] });

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
