<script lang="ts">
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>About Arbre Boivin | {site.name}</title>
	<meta name="description" content="Arbre Boivin, a Quebec arboricultural company with a passion for nature. Certified arborist, $2,000,000 liability insurance." />
	<meta property="og:url" content="{site.url}/en/a-propos" />
	<link rel="canonical" href="{site.url}/en/a-propos" />
</svelte:head>

<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">About Arbre Boivin</h1>
		<p class="text-lg text-green-100 max-w-xl mx-auto">A Quebec arboricultural company with a passion for nature.</p>
	</div>
</section>

<section class="section-padding bg-white">
	<div class="container-site">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our story</h2>
			<p class="text-gray-600 leading-relaxed text-lg">
				Arbre Boivin is a Quebec arboricultural company founded with a passion for nature and a commitment to quality. We offer professional and safe tree maintenance services, ranging from pruning to tree removal, including planting and 24/7 emergencies. From the estimation stage, an expert arborist will advise you on the right actions to take for your trees.
			</p>
		</div>
	</div>
</section>

<section class="bg-[#1a4a1a] px-4 py-14 text-center text-white">
	<h2 class="mb-3 text-2xl font-black uppercase md:text-3xl">Ready to start your project?</h2>
	<p class="mx-auto mb-8 max-w-xl text-sm text-green-200">Contact us today for a free estimate.</p>
	<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
		<a href="/en/contact" class="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a4a1a] shadow transition-colors hover:bg-green-50">Free estimate</a>
		<a href={site.phoneHref} class="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">{site.phone}</a>
	</div>
</section>
