<script lang="ts">
	import { site } from '$lib/content/site';

	let { data } = $props();
	const page = $derived(data.page);
	const region = $derived(page.region);
	const canonical = $derived(`${site.url}/regions/${region.slug}`);
</script>

<svelte:head>
	<title>{page.seo.title} | {site.name}</title>
	<meta name="description" content={page.seo.description} />
	<meta property="og:title" content="{page.seo.title} | {site.name}" />
	<meta property="og:description" content={page.seo.description} />
	<meta property="og:url" content={canonical} />
	<link rel="canonical" href={canonical} />
</svelte:head>

<!-- Hero -->
<div class="relative min-h-[360px] w-full overflow-hidden bg-[#1a4a1a] md:min-h-[420px]">
	<img
		src="/photo/image00012.jpeg"
		alt="Élagueur certifié Arbre Boivin — services d'arbre à {region.name}"
		class="absolute inset-0 h-full w-full object-cover opacity-40"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

	<div class="relative flex min-h-[360px] flex-col justify-end px-4 pb-10 pt-24 md:min-h-[420px] md:pb-14">
		<div class="container-site">
			<nav class="mb-4 flex items-center gap-2 text-xs text-green-300" aria-label="Fil d'Ariane">
				<a href="/" class="transition-colors hover:text-white">Accueil</a>
				<span aria-hidden="true">›</span>
				<a href="/regions" class="transition-colors hover:text-white">Régions</a>
				<span aria-hidden="true">›</span>
				<span class="text-white">{region.name}</span>
			</nav>
			<p class="mb-2 text-xs font-bold uppercase tracking-widest text-green-400">
				{page.heroSubtitle}
			</p>
			<h1 class="max-w-4xl text-3xl font-black uppercase leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
				{page.heroTitle}
			</h1>
			<p class="mt-4 max-w-2xl text-sm text-green-100 md:text-base">
				Élagueur certifié · Assurance 2 000 000 $ · Estimation gratuite · {site.phone}
			</p>
		</div>
	</div>
</div>

<!-- Intro -->
<section class="section-padding bg-white">
	<div class="container-site max-w-4xl">
		<h2 class="mb-6 text-2xl font-black text-[#2d6a2d] md:text-3xl">
			Services d'arbre à {region.name}, {region.zone}
		</h2>
		<p class="text-lg leading-relaxed text-gray-700">{page.intro}</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-lg bg-[#2d6a2d] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow transition-colors hover:bg-[#1a4a1a]"
			>
				Estimation gratuite
			</a>
			<a
				href={site.phoneHref}
				class="inline-flex items-center gap-2 rounded-lg border-2 border-[#2d6a2d] px-6 py-3 text-sm font-semibold text-[#2d6a2d] transition-colors hover:bg-[#2d6a2d] hover:text-white"
			>
				{site.phone}
			</a>
		</div>
	</div>
</section>

<!-- Sections par service -->
{#each page.sections as section, i}
	<section
		id={section.id}
		class="section-padding border-t border-gray-100"
		class:bg-gray-50={i % 2 === 1}
		class:bg-white={i % 2 === 0}
	>
		<div class="container-site">
			<div class="grid gap-10 lg:grid-cols-3">
				<div class="lg:col-span-2">
					<h2 class="mb-6 text-2xl font-black text-gray-900 md:text-3xl">
						{section.title}
					</h2>
					<div class="space-y-4">
						{#each section.paragraphs as para}
							<p class="leading-relaxed text-gray-700">{para}</p>
						{/each}
					</div>
				</div>

				<aside class="h-fit rounded-xl border border-[#d4e8d4] bg-[#f4f9f4] p-6">
					<h3 class="mb-4 text-sm font-bold uppercase tracking-widest text-[#2d6a2d]">
						Pourquoi choisir Arbre Boivin?
					</h3>
					<ul class="space-y-4">
						{#each section.benefits as benefit}
							<li>
								<p class="text-sm font-bold text-gray-900">{benefit.title}</p>
								<p class="mt-1 text-sm text-gray-600">{benefit.text}</p>
							</li>
						{/each}
					</ul>
					<a
						href="/contact"
						class="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2d6a2d] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1a4a1a]"
					>
						{section.ctaLabel}
					</a>
					<a
						href={section.serviceHref}
						class="mt-3 block text-center text-xs font-semibold text-[#2d6a2d] underline-offset-2 hover:underline"
					>
						En savoir plus sur ce service →
					</a>
				</aside>
			</div>
		</div>
	</section>
{/each}

<!-- Badges confiance -->
<section class="bg-[#1a4a1a] py-12 text-white">
	<div class="container-site">
		<div class="grid gap-6 text-center sm:grid-cols-3">
			<div class="rounded-xl bg-white/10 p-6">
				<p class="text-2xl font-black text-green-300">2 M$</p>
				<p class="mt-1 text-sm font-semibold">Assurance responsabilité</p>
			</div>
			<div class="rounded-xl bg-white/10 p-6">
				<p class="text-2xl font-black text-green-300">Certifié</p>
				<p class="mt-1 text-sm font-semibold">Élagueur professionnel</p>
			</div>
			<div class="rounded-xl bg-white/10 p-6">
				<p class="text-2xl font-black text-green-300">24/7</p>
				<p class="mt-1 text-sm font-semibold">Urgences disponibles</p>
			</div>
		</div>
	</div>
</section>

<!-- Avis légal -->
<section class="border-t border-gray-200 bg-gray-50 py-8">
	<div class="container-site max-w-3xl text-center">
		<h2 class="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">Avis légal</h2>
		<p class="text-xs leading-relaxed text-gray-500">
			Les informations contenues sur cette page sont à titre informatif et n'ont aucune force de loi.
			Il est possible que la règlementation en vigueur à {region.name} ait été modifiée. Pour vérifier
			les exigences municipales (permis, responsabilités du propriétaire), consultez le site Internet
			de la municipalité de {region.name}.
		</p>
	</div>
</section>

<!-- CTA finale -->
<section class="bg-[#2d6a2d] px-4 py-14 text-center text-white">
	<p class="mb-2 text-xs font-bold uppercase tracking-widest text-green-200">Estimation gratuite</p>
	<h2 class="mb-3 text-2xl font-black uppercase md:text-3xl">
		Services d'arbre à {region.name}
	</h2>
	<p class="mx-auto mb-8 max-w-xl text-sm text-green-100">
		Contactez Arbre Boivin pour une évaluation gratuite de vos arbres à {region.name}. Réponse rapide,
		travail sécuritaire et professionnel.
	</p>
	<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
		<a
			href="/contact"
			class="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a4a1a] shadow transition-colors hover:bg-green-50"
		>
			Soumission gratuite
		</a>
		<a
			href={site.phoneHref}
			class="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
		>
			{site.phone}
		</a>
	</div>
</section>
