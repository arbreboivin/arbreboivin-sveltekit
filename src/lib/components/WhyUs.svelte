<script lang="ts">
	import type { homePage } from '$lib/content/pages';

	interface Props {
		data: typeof homePage.whyUs;
	}

	let { data }: Props = $props();
</script>

<section class="section-padding bg-[#f5f0e8]">
	<div class="container-site">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Contenu texte -->
			<div>
				<span class="inline-block text-sm font-semibold text-[#2d6a2d] uppercase tracking-wider mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
					{data.badge}
				</span>
				<h2 class="section-title mt-2">{data.heading}</h2>
				<p class="section-subtitle mb-8">{data.subheading}</p>

				<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{#each data.points as point}
						<li class="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
							<span class="text-xl flex-shrink-0">{point.icon}</span>
							<span class="text-sm font-medium text-gray-700">{point.label}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-8">
					<a href="/contact" class="btn-primary">
						Demander une estimation gratuite
					</a>
				</div>
			</div>

			<!-- Image réelle -->
			<div class="relative">
				<div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
					<img
						src={data.image}
						alt={data.imageAlt}
						class="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
				<!-- Badge superposé -->
				<div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
					<span class="text-2xl">🏆</span>
					<div>
						<div class="text-sm font-bold text-gray-900">Arbre Boivin</div>
						<div class="text-xs text-gray-500">Élagueur certifié · Montréal et environs</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
