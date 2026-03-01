<script lang="ts">
	import { onMount } from 'svelte';
	import type { homePage } from '$lib/content/home';

	interface Props {
		data: typeof homePage.hero;
	}

	let { data }: Props = $props();

	// ─── Diaporama ───────────────────────────────────────────────────────────
	const slides = $derived(data.slideshow);
	const total = $derived(data.slideshow.length);
	let current = $state(0);
	let reducedMotion = false;
	let autoTimer: ReturnType<typeof setInterval> | undefined;

	function advance() {
		current = (current + 1) % total;
	}

	function goPrev() {
		current = (current - 1 + total) % total;
		if (!reducedMotion) resetTimer();
	}

	function goNext() {
		current = (current + 1) % total;
		if (!reducedMotion) resetTimer();
	}

	function resetTimer() {
		clearInterval(autoTimer);
		autoTimer = setInterval(advance, 4500);
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!reducedMotion) {
			autoTimer = setInterval(advance, 4500);
		}
		return () => clearInterval(autoTimer);
	});
</script>

<section aria-label="Accueil Arbre Boivin">
	<!--
		① TITRE — vidéo visible UNIQUEMENT dans les lettres, fond blanc.
		Technique mix-blend-mode: screen :
		  • pixel blanc (fond du h1)  : screen(1, vidéo) = 1  → reste blanc (cache la vidéo)
		  • pixel noir  (les lettres) : screen(0, vidéo) = vidéo → la vidéo transparaît dans les lettres
		Fallback sans vidéo : texte noir sur blanc, parfaitement lisible.
	-->
	<!--
		① TITRE — vidéo uniquement dans les lettres.
		Les deux barres blanches absolues (haut/bas, hauteur = padding du conteneur)
		couvrent la vidéo en dehors de la zone texte.
		Le h1 (mix-blend-mode: screen) laisse transparaître la vidéo seulement
		là où les pixels sont noirs (les lettres).
	-->
	<div class="relative w-full overflow-hidden bg-black" style="padding: 3vw 0;">
		<!-- Vidéo plein cadre derrière le h1 -->
		{#if data.videoSrc}
		<video
			autoplay
			muted
			loop
			playsinline
			class="absolute inset-0 h-full w-full object-cover"
			style="z-index: 0;"
			aria-hidden="true"
		>
			<source src={data.videoSrc} type="video/mp4" />
		</video>
		{/if}

		<!-- Barre blanche qui masque la vidéo au-dessus du texte -->
		<div class="absolute inset-x-0 top-0 bg-white" style="height: 3vw; z-index: 5;"></div>

		<h1
			class="relative w-full font-black uppercase text-center leading-none"
			style="
				font-family: 'SF Compact Rounded', sans-serif;
				font-size: 60px;
				white-space: nowrap;
				letter-spacing: -0.04em;
				word-spacing: 0.05em;
				background: #fff;
				background-image: none;
				background-clip: unset;
				-webkit-background-clip: unset;
				color: rgba(0, 0, 0, 1);
				mix-blend-mode: screen;
				z-index: 10;
			"
		>
			{data.heading.replace('\n', ' ')}
		</h1>

		<!-- Barre blanche qui masque la vidéo en dessous du texte -->
		<div class="absolute inset-x-0 bottom-0 bg-white" style="height: 3vw; z-index: 5;"></div>
	</div>

	<!-- ② CORPS : diaporama gauche / texte droite -->
	<div class="flex flex-col lg:grid lg:grid-cols-2 bg-white">
		<!-- ── Diaporama ── -->
		<div class="relative bg-gray-900">
			<!-- Zone image à hauteur fixe responsive -->
			<div class="relative h-[520px] overflow-hidden sm:h-[520px] lg:h-[600px]">
			{#each slides as slide, i}
			<img
				src={slide.src}
				alt={slide.alt}
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
			class:opacity-100={i === current}
			class:opacity-0={i !== current}
			style={`image-orientation: from-image;${slide.position ? ` object-position: ${slide.position}` : ''}`}
				loading={i === 0 ? 'eager' : 'lazy'}
				fetchpriority={i === 0 ? 'high' : 'auto'}
			/>
			{/each}

				<!-- Bouton précédent -->
				<button
					onclick={goPrev}
					class="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black"
					aria-label="Photo précédente"
				>
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2.5"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<!-- Bouton suivant -->
				<button
					onclick={goNext}
					class="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black"
					aria-label="Photo suivante"
				>
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2.5"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
				<!-- Barre blanche en bas : légende + compteur en texte noir -->
				<div class="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-white px-4 py-3">
					<span class="max-w-[60%] truncate text-sm font-semibold italic text-gray-800 tracking-wide">
						{slides[current]?.alt}
					</span>
					<div class="flex shrink-0 items-center gap-1 font-mono text-xs text-gray-800">
						<button
							onclick={goPrev}
							class="px-1.5 text-base leading-none transition-colors hover:text-black"
							aria-label="Photo précédente"
						>‹</button>
						<span class="tabular-nums">{current + 1}/{total}</span>
						<button
							onclick={goNext}
							class="px-1.5 text-base leading-none transition-colors hover:text-black"
							aria-label="Photo suivante"
						>›</button>
					</div>
				</div>
			</div>
		</div>

		<!-- ── Texte + CTA ── -->
		<div class="flex flex-col justify-center bg-white px-8 py-12 lg:px-12 lg:py-16">
			<p
				class="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#2d6a2d]"
				aria-hidden="true"
			>
				{data.kicker}
			</p>

			<p class="mb-8 max-w-md text-base leading-relaxed text-gray-700 md:text-lg">
				{data.subheading}
			</p>

			<a
				href={data.phoneHref}
				class="mb-10 block text-3xl font-black text-[#2d6a2d] transition-colors hover:text-[#1a4a1a]"
				aria-label="Appeler Arbre Boivin"
			>
				{data.phone}
			</a>

			<div class="flex flex-col gap-3 sm:flex-row">
				<a
					href={data.cta.href}
					class="inline-flex items-center justify-center gap-2 rounded px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors bg-[#2d6a2d] hover:bg-[#1a4a1a] focus:outline-none focus:ring-2 focus:ring-[#2d6a2d] focus:ring-offset-2"
				>
					{data.cta.label}
					<svg
						class="h-4 w-4 shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
				<a
					href={data.ctaSecondary.href}
					class="inline-flex items-center justify-center rounded border-2 border-[#2d6a2d] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#2d6a2d] transition-colors hover:bg-[#2d6a2d] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2d6a2d] focus:ring-offset-2"
				>
					{data.ctaSecondary.label}
				</a>
			</div>
		</div>
	</div>

	<!-- ③ Bande badges -->
	<div class="bg-white px-4 py-5 -mt-2 flex flex-wrap text-center">
		<div class="container-site flex flex-wrap justify-center gap-3">
			{#each data.badges as badge}
				<span
					class="inline-flex items-center gap-2 rounded-full border border-black/60 px-4 py-2 text-base font-semibold uppercase tracking-wide text-black"
				>
					<span class="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" aria-hidden="true"></span>
					{badge.label}
				</span>
			{/each}
		</div>
	</div>
</section>
