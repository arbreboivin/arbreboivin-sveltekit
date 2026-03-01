<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
	import { aboutPage, homePage } from '$lib/content/pages';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{aboutPage.seo.title} | {site.name}</title>
	<meta name="description" content={aboutPage.seo.description} />
	<meta property="og:title" content="{aboutPage.seo.title} | {site.name}" />
	<meta property="og:description" content={aboutPage.seo.description} />
	<meta property="og:url" content="{site.url}/a-propos" />
	<link rel="canonical" href="{site.url}/a-propos" />
</svelte:head>

<!-- En-tête -->
<section class="bg-gradient-to-br from-[#1a4a1a] to-[#2d6a2d] text-white py-16 md:py-24">
	<div class="container-site text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{aboutPage.heading}</h1>
		<p class="text-lg text-green-100 max-w-xl mx-auto">{aboutPage.subheading}</p>
	</div>
</section>

<!-- Histoire -->
<section class="section-padding bg-white">
	<div class="container-site">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Notre histoire</h2>
			<p class="text-gray-600 leading-relaxed text-lg">{aboutPage.story}</p>
		</div>
	</div>
</section>

<!-- Équipe -->
<section class="section-padding bg-gray-50">
	<div class="container-site">
		<h2 class="section-title text-center mb-10">{aboutPage.teamHeading}</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{#each aboutPage.team as member}
				<div class="bg-white rounded-xl shadow-sm overflow-hidden text-center p-6">
					<div class="w-20 h-20 rounded-full bg-green-100 border-2 border-dashed border-[#2d6a2d]/30 flex items-center justify-center mx-auto mb-4">
						<span class="text-3xl">👤</span>
					</div>
					<h3 class="font-bold text-gray-900">{member.name}</h3>
					<p class="text-sm text-[#2d6a2d] font-medium mb-3">{member.role}</p>
					<p class="text-sm text-gray-500">{member.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CTA data={homePage.cta} />
