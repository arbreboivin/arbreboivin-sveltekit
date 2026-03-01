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

<!-- Section zone de service -->
<section class="relative bg-cover bg-center py-12 md:py-16" style="background-image: url('/photo/image00003.jpeg');">
	<div class="absolute inset-0 bg-black/50"></div>
	<div class="container-site relative z-10">
		<h2 class="mb-2 text-center text-3xl font-black text-[#7ec87e] md:text-4xl">
			Notre zone de service
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-center text-white">
			Nous servons fièrement la région de Portneuf, Saint-Raymond, Pont-Rouge et Québec ainsi que leurs environs.
		</p>

		<!-- Carte Google Maps -->
		<div class="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
			<iframe
				title="Zone de service Arbre Boivin"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120000!2d-71.83!3d46.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
				width="100%"
				height="420"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>

		<!-- Description + villes -->
		<div class="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
			<div class="mb-4 flex items-center gap-3">
				<span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#2d6a2d] text-white">
					📍
				</span>
				<p class="font-bold text-gray-900">Où nous travaillons</p>
			</div>
			<p class="mb-5 text-sm text-gray-600">
				Notre équipe se déplace dans un rayon de service d'environ 30 km couvrant Saint-Raymond
				et ses environs, incluant Portneuf, Pont-Rouge, Donnacona, Québec et toutes les
				municipalités avoisinantes. Contactez-nous pour vérifier si votre propriété est dans
				notre zone de couverture.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each [
					'Saint-Raymond', 'Portneuf', 'Pont-Rouge', 'Donnacona', 'Cap-Santé',
					'Neuville', 'Saint-Basile', 'Saint-Marc-des-Carrières', 'Saint-Casimir',
					'Saint-Alban', 'Saint-Ubalde', 'Saint-Gilbert', 'Saint-Léonard-de-Portneuf',
					'Sainte-Christine-d\'Auvergne', 'Deschambault-Grondines', 'Shannon',
					'Fossambault-sur-le-Lac', 'Stoneham-et-Tewkesbury',
					'Saint-Augustin-de-Desmaures', 'L\'Ancienne-Lorette', 'Val-Bélair',
					'Québec', 'Loretteville', 'Sainte-Foy', 'Sainte-Brigitte-de-Laval', 'Boischatel'
				] as ville}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
						{ville}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<FullWidthCTA data={homePage.fullWidthCTA} />
