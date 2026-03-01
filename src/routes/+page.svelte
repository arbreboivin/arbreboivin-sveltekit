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

<!-- Sections zone de service + urgence sur un seul fond continu -->
<div class="relative bg-cover bg-center" style="background-image: url('/photo/image00008.jpeg');">
	<div class="absolute inset-0 bg-black/55" style="backdrop-filter: blur(3px);"></div>

<section class="relative z-10 py-12 md:py-16">
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

<!-- Section urgence 24/7 -->
<section class="relative z-10 py-14 md:py-20">
	<div class="container-site relative z-10">
		<div class="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-red-700/90 p-8 md:flex md:gap-8 md:p-10">

			<!-- Texte gauche -->
			<div class="flex-1 text-white md:pr-6">
				<div class="mb-4 flex items-center gap-3">
					<span class="text-2xl">⚠️</span>
					<h2 class="text-xl font-black md:text-2xl">
						Service d'urgence 24/7 pour arbres dangereux
					</h2>
				</div>
				<p class="mb-4 text-sm leading-relaxed text-red-100">
					Les vents violents, la neige lourde ou les orages peuvent fragiliser les arbres et créer
					des situations à risque. Si un arbre menace de tomber ou qu'une branche devient
					dangereuse, Arbre Boivin est là pour intervenir rapidement.
				</p>
				<p class="mb-5 text-sm leading-relaxed text-red-100">
					Notre équipe est disponible 24 heures sur 24, 7 jours sur 7, en cas d'urgence causée
					par les intempéries ou toute autre situation. Nous procédons à l'abattage sécuritaire,
					au dégagement des débris et à la mise en sécurité de votre terrain.
				</p>
				<p class="font-bold italic text-white">
					Une urgence ? Appelez-nous — on s'occupe du reste.
				</p>
			</div>

			<!-- Panneau droit -->
			<div class="mt-8 flex flex-col items-center justify-center rounded-xl bg-red-100 px-8 py-6 text-center md:mt-0 md:min-w-[220px]">
				<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				<p class="mb-1 font-black text-gray-900">Intervention rapide</p>
				<p class="mb-4 text-xs text-gray-600">Notre équipe d'urgence est prête à intervenir à tout moment</p>
				<a
					href="tel:+15149225807"
					class="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
				>
					📞 514-922-5807
				</a>
				<a href="/services/urgence" class="mt-3 text-sm font-semibold text-red-700 hover:underline">
					En savoir plus →
				</a>
			</div>
		</div>
	</div>
</section>

</div>

<FullWidthCTA data={homePage.fullWidthCTA} />
