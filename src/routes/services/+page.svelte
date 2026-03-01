<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
	import { servicesPage, homePage } from '$lib/content/pages';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{servicesPage.seo.title} | {site.name}</title>
	<meta name="description" content={servicesPage.seo.description} />
	<meta property="og:title" content="{servicesPage.seo.title} | {site.name}" />
	<meta property="og:description" content={servicesPage.seo.description} />
	<meta property="og:url" content="{site.url}/services" />
	<link rel="canonical" href="{site.url}/services" />
</svelte:head>

<!-- En-tête de page -->
<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{servicesPage.heading}</h1>
		<p class="text-lg text-green-100 max-w-2xl mx-auto">{servicesPage.subheading}</p>
	</div>
</section>

<!-- Liste des services détaillés -->
<section class="section-padding bg-white">
	<div class="container-site">
		<div class="space-y-20">
			{#each servicesPage.services as service, i}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<!-- Texte -->
					<div class="{i % 2 === 1 ? 'lg:order-2' : ''}">
						<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
						<p class="text-gray-600 leading-relaxed mb-6">{service.description}</p>
						<ul class="space-y-2 mb-8">
							{#each service.details as detail}
								<li class="flex items-start gap-3">
									<svg class="w-5 h-5 text-[#2d6a2d] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span class="text-sm text-gray-700">{detail}</span>
								</li>
							{/each}
						</ul>
						<a href="/contact" class="btn-primary">Demander une soumission</a>
					</div>

					<!-- Image réelle -->
					<div class="{i % 2 === 1 ? 'lg:order-1' : ''}">
						<div class="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
							<img
								src={service.image}
								alt={service.imageAlt}
								class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				{#if i < servicesPage.services.length - 1}
					<hr class="border-gray-100" />
				{/if}
			{/each}
		</div>
	</div>
</section>

<CTA data={homePage.cta} />
