<script lang="ts">
	import { site } from '$lib/content/site';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-gray-300">
	<div class="container-site py-12 md:py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
			<!-- Colonne 1 : Brand -->
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="text-3xl">🌲</span>
					<div>
						<div class="font-bold text-white text-lg">{site.name}</div>
						<div class="text-xs text-gray-400">{site.tagline}</div>
					</div>
				</div>
				<p class="text-sm text-gray-400 leading-relaxed max-w-xs">
					{site.description}
				</p>
				{#if site.social.facebook}
					<div class="mt-5 flex gap-4">
						<a
							href={site.social.facebook}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							class="text-gray-400 hover:text-white transition-colors"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M22 12a10 10 0 1 0-11.563 9.87v-6.979H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.98A10.003 10.003 0 0 0 22 12z" />
							</svg>
						</a>
						{#if site.social.instagram}
							<a
								href={site.social.instagram}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								class="text-gray-400 hover:text-white transition-colors"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
								</svg>
							</a>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Colonne 2 : Navigation -->
			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
				<ul class="space-y-2">
					{#each site.nav as item}
						<li>
							<a href={item.href} class="text-sm text-gray-400 hover:text-white transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
					<li>
						<a href={site.cta.href} class="text-sm text-[#4a9c4a] hover:text-white transition-colors font-medium">
							{site.cta.label} →
						</a>
					</li>
				</ul>
			</div>

			<!-- Colonne 3 : Coordonnées -->
			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nous joindre</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a href={site.phoneHref} class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
							<span class="text-[#4a9c4a]">📞</span>
							{site.phone}
						</a>
					</li>
					<li>
						<a href="mailto:{site.email}" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
							<span class="text-[#4a9c4a]">✉️</span>
							{site.email}
						</a>
					</li>
					<li class="flex items-start gap-2 text-gray-400">
						<span class="text-[#4a9c4a] mt-0.5">📍</span>
						<span>{site.serviceArea}</span>
					</li>
					<li class="flex items-start gap-2 text-gray-400">
						<span class="text-[#4a9c4a] mt-0.5">🕐</span>
						<span>{site.hours}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
			<p>© {currentYear} {site.legalName} — Tous droits réservés</p>
			<p>
				Réalisé avec <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">SvelteKit</a>
			</p>
		</div>
	</div>
</footer>
