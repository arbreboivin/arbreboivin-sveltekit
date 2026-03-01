<script lang="ts">
	import { autresServicesPageEn } from '$lib/content/pages.en';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{autresServicesPageEn.seo.title} | {site.name}</title>
	<meta name="description" content={autresServicesPageEn.seo.description} />
	<meta property="og:url" content="{site.url}/en/autres-services" />
	<link rel="canonical" href="{site.url}/en/autres-services" />
</svelte:head>

<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{autresServicesPageEn.heading}</h1>
		<p class="text-lg text-green-100 max-w-2xl mx-auto">{autresServicesPageEn.subheading}</p>
	</div>
</section>

<section class="section-padding bg-white">
	<div class="container-site">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each autresServicesPageEn.services as service}
				<div class="rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
					<div class="aspect-[16/9] bg-green-50 border-b border-dashed border-[#2d6a2d]/20 flex flex-col items-center justify-center p-6 text-center">
						<span class="text-4xl mb-2">{service.icon}</span>
					</div>
					<div class="p-6">
						<h2 class="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
						<p class="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
						<a href="/en/contact" class="btn-primary text-sm py-2.5">Request a quote</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-[#1a4a1a] px-4 py-14 text-center text-white">
	<h2 class="mb-3 text-2xl font-black uppercase md:text-3xl">Ready to start your project?</h2>
	<p class="mx-auto mb-8 max-w-xl text-sm text-green-200">Contact us today for a free estimate.</p>
	<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
		<a href="/en/contact" class="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a4a1a] shadow transition-colors hover:bg-green-50">
			Free estimate
		</a>
		<a href={site.phoneHref} class="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
			{site.phone}
		</a>
	</div>
</section>
