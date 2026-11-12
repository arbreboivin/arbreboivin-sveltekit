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
	 * Périmètre anguleux de la zone de service (côtés droits, pas un cercle).
	 * Ouest jusqu’à Saint-Marc-des-Carrières et Deschambault, nord un peu
	 * au-dessus de Saint-Raymond puis Valcartier, Lac-Beauport et
	 * Sainte-Brigitte-de-Laval, est jusqu’à Beaupré et l’Île d’Orléans,
	 * sud le long du fleuve avant Saint-Henri, Saint-Apollinaire,
	 * Saint-Lambert-de-Lauzon et Saint-Anselme.
	 * Coordonnées [lat, lng].
	 */
	const serviceAreaPerimeter: [number, number][] = [
		[46.64, -72.15],
		[46.9, -72.12],
		[47.01, -71.78],
		[47.09, -71.2],
		[47.04, -70.74],
		[46.74, -71.1],
		[46.64, -71.7],
		[46.64, -72.15]
	];

	onMount(async () => {
		const L = await import('leaflet');
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer).setView([46.83, -71.52], 9);

		// Fond clair type Voyager, sans clé. Esri inverse x/y : {z}/{y}/{x}.
		// Les tuiles CARTO (basemaps.cartocdn.com) exigent désormais une clé.
		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
			{
				attribution:
					'Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, &copy; OpenStreetMap contributors, and the GIS User Community',
				maxZoom: 19
			}
		).addTo(map);

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
