<script lang="ts">
	import { googleReviews } from '$lib/content/reviews';

	const CARDS_PER_PAGE = 3;
	const totalPages = Math.ceil(googleReviews.reviews.length / CARDS_PER_PAGE);

	let currentPage = $state(0);

	function prev() {
		currentPage = (currentPage - 1 + totalPages) % totalPages;
	}

	function next() {
		currentPage = (currentPage + 1) % totalPages;
	}

	const visibleReviews = $derived(
		googleReviews.reviews.slice(
			currentPage * CARDS_PER_PAGE,
			currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
		)
	);

	function initial(name: string) {
		return name.charAt(0).toUpperCase();
	}

	const avatarColors = [
		'bg-[#2d6a2d]',
		'bg-[#1a4a9a]',
		'bg-[#9a1a1a]',
		'bg-[#6a2d8a]',
		'bg-[#2d6a6a]',
		'bg-[#8a6a1a]'
	];
</script>

<section class="relative py-16 md:py-20 overflow-hidden bg-[#f5f0e8] dark:bg-[#111827]">
	<!-- Fond décoratif subtil -->
	<div class="absolute inset-0 opacity-5 pointer-events-none dark:opacity-[0.03]"
		style="background-image: url('/photo/image00001.jpeg'); background-size: cover; background-position: center;"
		aria-hidden="true"
	></div>

	<div class="container-site relative">
		<!-- En-tête -->
		<div class="text-center mb-10">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Avis Google</h2>
			<p class="text-gray-500 dark:text-slate-400 text-base">Des clients satisfaits à Montréal et sur la Rive-Nord.</p>
		</div>

		<!-- Note globale -->
		<div class="text-center mb-8">
			<p class="font-bold text-gray-900 dark:text-white text-lg">{googleReviews.businessName}</p>
			<div class="flex items-center justify-center gap-2 mt-1">
				<div class="flex">
					{#each Array(5) as _, i}
						{#if i < Math.floor(googleReviews.rating)}
							<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{:else}
							<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{/if}
					{/each}
				</div>
				<span class="font-bold text-gray-800 dark:text-slate-200">{googleReviews.rating.toFixed(1)} / 5</span>
				<span class="text-gray-500 dark:text-slate-400 text-sm">({googleReviews.totalReviews} avis)</span>
			</div>
		</div>

		<!-- Carousel -->
		<div class="relative">
			<!-- Bouton précédent -->
			<button
				onclick={prev}
				class="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-gray-500 hover:text-[#2d6a2d] hover:border-[#2d6a2d] transition-colors"
				aria-label="Avis précédents"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Cartes -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
				{#each visibleReviews as review, i}
					{@const colorIndex = (currentPage * CARDS_PER_PAGE + i) % avatarColors.length}
					<div class="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm p-5 flex flex-col gap-3">
						<!-- Auteur -->
						<div class="flex items-center gap-3">
							<div class="w-9 h-9 rounded-full {avatarColors[colorIndex]} flex items-center justify-center text-white font-bold text-sm shrink-0">
								{initial(review.author)}
							</div>
							<div>
								<p class="font-semibold text-gray-900 dark:text-white text-sm leading-tight">{review.author}</p>
								<div class="flex items-center gap-1 mt-0.5">
									{#each Array(5) as _, s}
										<svg
											class="w-3.5 h-3.5 {s < review.rating ? 'text-yellow-400' : 'text-gray-200'}"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									{/each}
									<span class="text-xs text-gray-400 ml-1">{review.timeAgo}</span>
								</div>
							</div>
						</div>

						<!-- Texte -->
						<p class="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{review.text}</p>

						<!-- Logo Google -->
						<div class="mt-auto pt-2 flex items-center gap-1.5 border-t border-gray-50 dark:border-slate-600">
							<svg class="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
								<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
								<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
								<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
							</svg>
							<span class="text-xs text-gray-400 dark:text-slate-500">Avis Google</span>
						</div>
					</div>
				{/each}
			</div>

			<!-- Bouton suivant -->
			<button
				onclick={next}
				class="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-gray-500 hover:text-[#2d6a2d] hover:border-[#2d6a2d] transition-colors"
				aria-label="Avis suivants"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- Pagination -->
		<div class="flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
			<button onclick={prev} class="hover:text-[#2d6a2d] transition-colors" aria-label="Précédent">‹</button>
			<span class="font-medium text-gray-700">{currentPage + 1} / {totalPages}</span>
			<button onclick={next} class="hover:text-[#2d6a2d] transition-colors" aria-label="Suivant">›</button>
		</div>

		<!-- CTA Google -->
		<div class="mt-8 text-center">
			<a
				href={googleReviews.googleUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 w-full max-w-xl mx-auto px-8 py-4 bg-[#1a4a1a] text-white font-semibold rounded-xl shadow hover:bg-[#2d6a2d] transition-colors"
			>
				<svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
					<path fill="#fff" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" opacity=".3"/>
					<path fill="#fff" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 10h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
				</svg>
				Voir tous les avis sur Google
			</a>
		</div>
	</div>
</section>
