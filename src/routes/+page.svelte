<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import GoogleReviews from '$lib/components/GoogleReviews.svelte';
	import LongTextSection from '$lib/components/LongTextSection.svelte';
	import FullWidthCTA from '$lib/components/FullWidthCTA.svelte';
	import { homePage } from '$lib/content/home';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{homePage.seo.title}</title>
	<meta name="description" content={homePage.seo.description} />
	<meta property="og:title" content={homePage.seo.title} />
	<meta property="og:description" content={homePage.seo.description} />
	<meta property="og:url" content={site.url} />
	<link rel="canonical" href={site.url} />
</svelte:head>

<Hero data={homePage.hero} />
<ServicesGrid data={homePage.servicesGrid} />
<GoogleReviews />
<LongTextSection data={homePage.longText} />

<!-- Section zones desservies -->
<section class="bg-[#f5f9f5] py-10 md:py-14">
	<div class="container-site text-center">
		<p class="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d6a2d]">Régions desservies</p>
		<h2 class="mb-6 text-2xl font-black uppercase text-gray-900 md:text-3xl">
			Nous intervenons dans la région de Portneuf et Québec
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-gray-600">
			Arbre Boivin offre ses services professionnels d'élagage, d'abattage et d'entretien d'arbres
			dans toute la région de Portneuf et ses environs. Estimation gratuite sur place.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			{#each ['Portneuf', 'Saint-Raymond', 'Pont-Rouge', 'Québec', 'Donnacona', 'Cap-Santé', 'Neuville', 'Deschambault-Grondines', 'Saint-Basile', 'Saint-Marc-des-Carrières'] as ville}
				<span class="rounded-full border-2 border-[#2d6a2d] px-4 py-1.5 text-sm font-semibold text-[#2d6a2d]">
					{ville}
				</span>
			{/each}
		</div>
		<a
			href="/contact"
			class="mt-8 inline-block rounded-lg bg-[#2d6a2d] px-10 py-4 font-black uppercase tracking-widest text-white shadow transition hover:bg-[#1e4d1e]"
		>
			Estimation gratuite
		</a>
	</div>
</section>

<FullWidthCTA data={homePage.fullWidthCTA} />
