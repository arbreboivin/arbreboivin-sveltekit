<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
	import { autresServicesPage, homePage } from '$lib/content/pages';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{autresServicesPage.seo.title} | {site.name}</title>
	<meta name="description" content={autresServicesPage.seo.description} />
	<meta property="og:title" content="{autresServicesPage.seo.title} | {site.name}" />
	<meta property="og:description" content={autresServicesPage.seo.description} />
	<meta property="og:url" content="{site.url}/autres-services" />
	<link rel="canonical" href="{site.url}/autres-services" />
</svelte:head>

<!-- En-tête -->
<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{autresServicesPage.heading}</h1>
		<p class="text-lg text-green-100 max-w-2xl mx-auto">{autresServicesPage.subheading}</p>
	</div>
</section>

<!-- Grille des autres services -->
<section class="section-padding bg-white">
	<div class="container-site">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each autresServicesPage.services as service}
				<div class="rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
					<!-- Image placeholder -->
					<div class="aspect-[16/9] bg-green-50 border-b border-dashed border-[#2d6a2d]/20 flex flex-col items-center justify-center p-6 text-center">
						<span class="text-4xl mb-2">{service.icon}</span>
						<p class="text-xs text-[#2d6a2d]/60">{service.imagePlaceholder}</p>
					</div>
					<div class="p-6">
						<h2 class="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
						<p class="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
						<a href="/contact" class="btn-primary text-sm py-2.5">
							Demander une soumission
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CTA data={homePage.cta} />
