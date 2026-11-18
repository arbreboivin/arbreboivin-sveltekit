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

		// Zoom 9 inchangé : on cadre Saint-Raymond et les environs
		// (Portneuf, Pont-Rouge, Donnacona, Shannon), sans zoomer.
		map = L.map(mapContainer).setView([46.84, -71.7], 9);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			maxZoom: 19
		}).addTo(map);

		// Sous le polygone, comme les autres noms déjà dessinés sur les tuiles.
		const labelPane = map.createPane('cityLabel');
		labelPane.style.zIndex = '390';
		labelPane.style.pointerEvents = 'none';

		const townLabels: {
			name: string;
			at: [number, number];
			width: number;
			anchorX?: number;
			anchorY: number;
			small?: boolean;
		}[] = [
			{ name: 'Saint-Raymond', at: [46.9006, -71.8294], width: 104, anchorY: 8 },
			{ name: 'Sainte-Christine', at: [46.8167, -71.9667], width: 94, anchorY: 7, small: true },
			{ name: 'Saint-Alban', at: [46.7167, -72.0833], width: 66, anchorX: 14, anchorY: 14, small: true },
			{ name: 'Saint-Marc', at: [46.6833, -72.05], width: 62, anchorY: 0, small: true }
		];

		for (const town of townLabels) {
			L.marker(town.at, {
				pane: 'cityLabel',
				interactive: false,
				keyboard: false,
				icon: L.divIcon({
					className: town.small ? 'sr-city-label sr-city-label-sm' : 'sr-city-label',
					html: `<span>${town.name}</span>`,
					iconSize: [town.width, town.small ? 14 : 16],
					iconAnchor: [town.anchorX ?? town.width / 2, town.anchorY]
				})
			}).addTo(map);
		}

		L.polygon(serviceAreaPerimeter, {
			color: '#1a4a1a',
			weight: 2,
			fillColor: '#2d6a2d',
			fillOpacity: 0.35
		}).addTo(map);

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

<style>
	:global(.sr-city-label) {
		background: transparent !important;
		border: none !important;
	}

	:global(.sr-city-label span) {
		display: block;
		color: #222;
		font-family: 'Noto Sans', sans-serif;
		font-size: 12px;
		font-weight: 400;
		line-height: 1;
		text-align: center;
		white-space: nowrap;
		text-shadow:
			0 0 1.5px rgba(255, 255, 255, 0.6),
			1px 0 0 rgba(255, 255, 255, 0.6),
			-1px 0 0 rgba(255, 255, 255, 0.6),
			0 1px 0 rgba(255, 255, 255, 0.6),
			0 -1px 0 rgba(255, 255, 255, 0.6);
	}

	:global(.sr-city-label-sm span) {
		font-size: 10px;
	}
</style>
