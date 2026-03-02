<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import GoogleReviews from '$lib/components/GoogleReviews.svelte';
	import LongTextSection from '$lib/components/LongTextSection.svelte';
	import FullWidthCTA from '$lib/components/FullWidthCTA.svelte';
	import MapServiceArea from '$lib/components/MapServiceArea.svelte';
	import { homePageEn } from '$lib/content/home.en';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{homePageEn.seo.title}</title>
	<meta name="description" content={homePageEn.seo.description} />
	<meta property="og:title" content={homePageEn.seo.title} />
	<meta property="og:description" content={homePageEn.seo.description} />
	<meta property="og:url" content="{site.url}/en" />
	<link rel="canonical" href="{site.url}/en" />
	<link rel="alternate" hreflang="fr" href={site.url} />
	<link rel="alternate" hreflang="en" href="{site.url}/en" />
</svelte:head>

<Hero data={homePageEn.hero} />
<ServicesGrid data={homePageEn.servicesGrid} />
<GoogleReviews />
<LongTextSection data={homePageEn.longText} />

<!-- Service areas + map with perimeter -->
<section class="bg-[#f5f9f5] py-10 md:py-14">
	<div class="container-site text-center">
		<p class="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d6a2d]">Service Areas</p>
		<h2 class="mb-6 text-2xl font-black uppercase text-gray-900 md:text-3xl">
			We serve the Portneuf and Québec region
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-gray-600">
			Arbre Boivin offers professional pruning, tree removal and tree maintenance services
			throughout the Portneuf region and surrounding areas. Free on-site estimate.
		</p>

		<div class="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl max-md:rounded-xl mb-8">
			<MapServiceArea legend="Green area = service area (Portneuf, Saint-Raymond, Québec and surroundings)" />
		</div>

		<div class="flex flex-wrap justify-center gap-3">
			{#each [
				'Saint-Raymond', 'Portneuf', 'Pont-Rouge', 'Donnacona', 'Cap-Santé',
				'Neuville', 'Saint-Basile', 'Saint-Marc-des-Carrières', 'Saint-Casimir',
				'Saint-Alban', 'Saint-Ubalde', 'Saint-Gilbert', 'Saint-Léonard-de-Portneuf',
				'Sainte-Christine-d\'Auvergne', 'Deschambault-Grondines', 'Shannon',
				'Fossambault-sur-le-Lac', 'Lac-Saint-Joseph', 'Stoneham-et-Tewkesbury',
				'Saint-Augustin-de-Desmaures', 'L\'Ancienne-Lorette', 'Val-Bélair',
				'Québec', 'Saint-Émile', 'Loretteville', 'Sainte-Foy',
				'Sainte-Brigitte-de-Laval', 'Boischatel'
			] as ville}
				<span class="rounded-full border-2 border-[#2d6a2d] px-4 py-1.5 text-sm font-semibold text-[#2d6a2d]">
					{ville}
				</span>
			{/each}
		</div>
		<a
			href="/en/contact"
			class="mt-8 inline-block rounded-lg bg-[#2d6a2d] px-10 py-4 font-black uppercase tracking-widest text-white shadow transition hover:bg-[#1e4d1e]"
		>
			Free Estimate
		</a>
	</div>
</section>

<FullWidthCTA data={homePageEn.fullWidthCTA} />
