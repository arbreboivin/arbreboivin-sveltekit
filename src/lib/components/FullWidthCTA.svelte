<script lang="ts">
	import type { homePage } from '$lib/content/home';

	interface Props {
		data: typeof homePage.fullWidthCTA;
	}

	let { data }: Props = $props();
</script>

<!-- Bande pleine largeur avec image de fond + overlay -->
<div>
	<div class="relative overflow-hidden h-52 md:h-64">
		<img
			src={data.image}
			alt={data.imageAlt}
			class="absolute inset-0 w-full h-full object-cover"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-black/65"></div>

		<!-- Contenu centré par-dessus l'overlay -->
		<div class="relative z-10 h-full flex flex-col items-center justify-center gap-5 px-4 text-center">
			<p class="text-white font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl leading-relaxed">
				{data.eyebrow}
			</p>
			<a
				href={data.cta.href}
				class="inline-flex items-center justify-center px-8 py-4 bg-[#2d6a2d] text-white font-black uppercase tracking-wider text-xs md:text-sm hover:bg-[#1a4a1a] focus:outline-none focus:ring-2 focus:ring-[#2d6a2d] focus:ring-offset-2 focus:ring-offset-black transition-colors"
			>
				{data.cta.label}
			</a>
		</div>
	</div>

	<!-- Badges sous la bande: 2 colonnes desktop, stack mobile -->
	<div class="bg-white border-t border-gray-100 py-8">
		<div class="container-site">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
				{#each data.badges as badge}
					<div class="flex items-center justify-center px-6 py-5 border-2 border-[#2d6a2d] rounded-lg text-center">
						<span class="text-[#2d6a2d] font-bold text-sm uppercase tracking-wide whitespace-pre-line leading-snug">
							{badge.label}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
