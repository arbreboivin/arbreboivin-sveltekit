<script lang="ts">
	import { site } from '$lib/content/site';
	import { autresServicesPage } from '$lib/content/pages';

	let { data } = $props();
	const service = $derived(data.service);

	const currentIndex = $derived(autresServicesPage.services.findIndex((s) => s.slug === service.slug));
	const prevService = $derived(currentIndex > 0 ? autresServicesPage.services[currentIndex - 1] : null);
	const nextService = $derived(currentIndex < autresServicesPage.services.length - 1 ? autresServicesPage.services[currentIndex + 1] : null);
</script>

<svelte:head>
	<title>{service.seo.title} | {site.name}</title>
	<meta name="description" content={service.seo.description} />
	<meta property="og:title" content="{service.seo.title} | {site.name}" />
	<meta property="og:description" content={service.seo.description} />
	<meta property="og:url" content="{site.url}/autres-services/{service.slug}" />
	<link rel="canonical" href="{site.url}/autres-services/{service.slug}" />
</svelte:head>

<!-- ① Hero -->
<div class="relative bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] py-20 md:py-28">
	<div class="container-site px-4">
		<nav class="mb-4 flex items-center gap-2 text-xs text-green-300" aria-label="Fil d'Ariane">
			<a href="/" class="hover:text-white transition-colors">Accueil</a>
			<span aria-hidden="true">›</span>
			<a href="/autres-services" class="hover:text-white transition-colors">Autres services</a>
			<span aria-hidden="true">›</span>
			<span class="text-white">{service.title}</span>
		</nav>
		<div class="flex items-center gap-4">
			<span class="text-5xl">{service.icon}</span>
			<h1 class="text-4xl font-black uppercase text-white drop-shadow-lg md:text-5xl lg:text-6xl">
				{service.title}
			</h1>
		</div>
	</div>
</div>

<!-- ② Contenu : éditorial si contentBlocks, sinon standard -->
{#if service.contentBlocks && service.contentBlocks.length > 0}
	<section class="bg-white py-16 md:py-20">
		<div class="container-site">
			<!-- Titre éditorial -->
			<h2 class="mb-14 text-center text-2xl font-bold italic text-[#2d6a2d] md:text-3xl">
				{service.title} dans les arbres
			</h2>

			<!-- Blocs alternés texte / image -->
			<div class="space-y-16 md:space-y-20">
				{#each service.contentBlocks as block}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
						<!-- Texte -->
						<div class="{block.imageRight ? 'md:order-1' : 'md:order-2'}">
							<p class="text-sm leading-relaxed text-gray-600 md:text-base">{block.text}</p>
						</div>
						<!-- Image -->
						<div class="{block.imageRight ? 'md:order-2' : 'md:order-1'}">
							<div class="overflow-hidden rounded-lg shadow-md aspect-[4/3] bg-gray-100">
								<img
									src={block.image}
									alt={block.imageAlt}
									class="h-full w-full object-cover"
									loading="lazy"
									onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- CTA en bas -->
			<div class="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d6a2d] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow transition-colors hover:bg-[#1a4a1a]"
				>
					Demander une soumission
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a
					href={site.phoneHref}
					class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#2d6a2d] px-8 py-3.5 text-sm font-semibold text-[#2d6a2d] transition-colors hover:bg-[#2d6a2d] hover:text-white"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					{site.phone}
				</a>
			</div>
		</div>
	</section>
{:else}
	<section class="section-padding bg-white">
		<div class="container-site">
			<p class="mb-12 max-w-3xl text-lg font-medium leading-relaxed text-[#2d6a2d] md:text-xl">
				{service.intro}
			</p>

			<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
				<div class="lg:col-span-2 space-y-5">
					{#each service.paragraphs as para}
						<p class="leading-relaxed text-gray-700">{para}</p>
					{/each}
				</div>

				<aside class="rounded-xl bg-[#f4f9f4] p-6 border border-[#d4e8d4] h-fit">
					<h2 class="mb-4 text-sm font-bold uppercase tracking-widest text-[#2d6a2d]">
						Ce service comprend
					</h2>
					<ul class="space-y-3">
						{#each service.details as detail}
							<li class="flex items-start gap-3">
								<svg class="mt-0.5 h-5 w-5 shrink-0 text-[#2d6a2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-gray-700">{detail}</span>
							</li>
						{/each}
					</ul>
					<a href="/contact" class="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2d6a2d] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow transition-colors hover:bg-[#1a4a1a]">
						Demander une soumission
					</a>
					<a href={site.phoneHref} class="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#2d6a2d] px-5 py-3 text-sm font-semibold text-[#2d6a2d] transition-colors hover:bg-[#2d6a2d] hover:text-white">
						{site.phone}
					</a>
				</aside>
			</div>
		</div>
	</section>
{/if}

<!-- ③ Navigation entre autres services -->
<nav class="bg-white border-t border-gray-100 py-8" aria-label="Services précédent / suivant">
	<div class="container-site flex items-center justify-between gap-4">
		{#if prevService}
			<a
				href="/autres-services/{prevService.slug}"
				class="group flex items-center gap-3 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2d6a2d] hover:text-[#2d6a2d]"
			>
				<svg class="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="hidden sm:inline">Précédent ·</span> {prevService.title}
			</a>
		{:else}
			<div></div>
		{/if}

		<a
			href="/autres-services"
			class="text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors hover:text-[#2d6a2d]"
		>
			Tous les autres services
		</a>

		{#if nextService}
			<a
				href="/autres-services/{nextService.slug}"
				class="group flex items-center gap-3 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2d6a2d] hover:text-[#2d6a2d]"
			>
				{nextService.title} <span class="hidden sm:inline">· Suivant</span>
				<svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		{:else}
			<div></div>
		{/if}
	</div>
</nav>

<!-- ④ Bannière CTA -->
<section class="bg-[#1a4a1a] px-4 py-14 text-center text-white">
	<p class="mb-2 text-xs font-bold uppercase tracking-widest text-green-400">Estimation gratuite</p>
	<h2 class="mb-3 text-2xl font-black uppercase md:text-3xl">
		Prêt à démarrer votre projet?
	</h2>
	<p class="mx-auto mb-8 max-w-xl text-sm text-green-200">
		Contactez-nous dès aujourd'hui pour votre {service.title.toLowerCase()}.
	</p>
	<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
		<a
			href="/contact"
			class="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a4a1a] shadow transition-colors hover:bg-green-50"
		>
			Soumission gratuite
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
		<a
			href={site.phoneHref}
			class="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
		>
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
			</svg>
			{site.phone}
		</a>
	</div>
</section>
