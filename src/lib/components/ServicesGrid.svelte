<script lang="ts">
	import { onMount } from 'svelte';
	import type { homePage } from '$lib/content/home';

	interface Props {
		data: typeof homePage.servicesGrid;
	}

	let { data }: Props = $props();

	let sectionEl: HTMLElement | undefined = $state();

	onMount(() => {
		if (!sectionEl) return;

		// prefers-reduced-motion → on ne touche à rien
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// Collecter toutes les cartes et leurs images une seule fois
		const cards = Array.from(sectionEl.querySelectorAll<HTMLElement>('[data-card]'));
		const pairs: Array<{ card: HTMLElement; img: HTMLImageElement }> = cards
			.map((card) => ({ card, img: card.querySelector('img') as HTMLImageElement }))
			.filter((p) => !!p.img);

		if (pairs.length === 0) return;

		let rafScheduled = false;

		function updateAll() {
			rafScheduled = false;
			const vh = window.innerHeight;

			for (const { card, img } of pairs) {
				const rect = card.getBoundingClientRect();

				// start  : top de la carte arrive à 80 % du viewport (entrée par le bas)
				// end    : bottom de la carte atteint 20 % du viewport (carte bien visible)
				const startTop = vh * 0.8;
				const endTop = vh * 0.2 - rect.height;
				const range = startTop - endTop;

				const progress =
					range > 0 ? Math.max(0, Math.min(1, (startTop - rect.top) / range)) : 0;

				img.style.transform = `translateZ(0) scale(${1 + progress * 0.15})`;
			}
		}

		function schedule() {
			if (!rafScheduled) {
				rafScheduled = true;
				requestAnimationFrame(updateAll);
			}
		}

		// Calcul initial (cartes déjà visibles au chargement)
		updateAll();

		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule, { passive: true });

		return () => {
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		};
	});
</script>

<section bind:this={sectionEl} class="py-8 md:py-12 bg-white" id="services">
	<!-- Titre centré dans la largeur normale -->
	<div class="container-site">
		<h2 class="mb-12 text-center text-3xl font-bold text-[#2d6a2d] md:text-4xl">
			{data.heading}
		</h2>
	</div>

	<!-- Grille pleine largeur pour maximiser la taille des photos -->
	<div class="px-3 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each data.items as service}
				<a href={service.href} class="group block" data-card>
					<div
						class="relative h-[360px] overflow-hidden rounded-lg shadow-md ring-1 ring-black/5 sm:h-[440px] lg:h-[520px]"
					>
						<img
							src={service.image}
							alt={service.imageAlt}
							class="absolute inset-0 h-full w-full object-cover"
							loading="lazy"
							style="will-change: transform; transform: translateZ(0) scale(1); object-position: {service.imagePosition};"
						/>
						<!-- Titre en overlay en bas de l'image -->
						<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
							<h3 class="text-xl font-bold text-white drop-shadow">
								{service.title}
							</h3>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
