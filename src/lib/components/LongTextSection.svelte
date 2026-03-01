<script lang="ts">
	import type { homePage } from '$lib/content/home';

	interface Props {
		data: typeof homePage.longText;
	}

	let { data }: Props = $props();
</script>

<section class="section-padding bg-white">
	<div class="container-site text-center">
		<!-- Titre vert centré -->
		<h2 class="text-3xl md:text-4xl font-bold text-[#2d6a2d] mb-8">
			{data.heading}
		</h2>

		<!-- Paragraphes en largeur limitée -->
		<div class="max-w-3xl mx-auto space-y-5 mb-10">
			{#each data.paragraphs as paragraph}
				<p class="text-base text-gray-700 leading-relaxed">
					{paragraph}
				</p>
			{/each}
		</div>

		<!-- Bouton noir centré -->
		<a
			href={data.cta.href}
			class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
		>
			{data.cta.label}
		</a>
	</div>
</section>
