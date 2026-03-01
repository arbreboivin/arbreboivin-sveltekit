<script lang="ts">
	import { servicesPageEn } from '$lib/content/pages.en';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{servicesPageEn.seo.title} | {site.name}</title>
	<meta name="description" content={servicesPageEn.seo.description} />
	<meta property="og:title" content="{servicesPageEn.seo.title} | {site.name}" />
	<meta property="og:description" content={servicesPageEn.seo.description} />
	<meta property="og:url" content="{site.url}/en/services" />
	<link rel="canonical" href="{site.url}/en/services" />
</svelte:head>

<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{servicesPageEn.heading}</h1>
		<p class="text-lg text-green-100 max-w-2xl mx-auto">{servicesPageEn.subheading}</p>
	</div>
</section>

<section class="section-padding bg-white">
	<div class="container-site">
		<div class="space-y-20">
			{#each servicesPageEn.services as service, i}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
						<a href="/en/contact" class="btn-primary">Request a quote</a>
					</div>

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

				{#if i < servicesPageEn.services.length - 1}
					<hr class="border-gray-100" />
				{/if}
			{/each}
		</div>
	</div>
</section>

<section class="bg-[#1a4a1a] px-4 py-14 text-center text-white">
	<h2 class="mb-3 text-2xl font-black uppercase md:text-3xl">Ready to start your project?</h2>
	<p class="mx-auto mb-8 max-w-xl text-sm text-green-200">Contact us today for a free estimate. We respond quickly throughout the Portneuf region.</p>
	<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
		<a href="/en/contact" class="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a4a1a] shadow transition-colors hover:bg-green-50">
			Free estimate
		</a>
		<a href={site.phoneHref} class="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
			{site.phone}
		</a>
	</div>
</section>
