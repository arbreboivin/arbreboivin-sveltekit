<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content/site';
	import { services } from '$lib/content/services';
	import { autresServicesPage } from '$lib/content/pages';

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
>
	<div class="container-site">
		<div class="flex items-center justify-between h-16 md:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group" onclick={closeMobile}>
				<span class="text-3xl">🌲</span>
				<div class="flex flex-col leading-tight">
					<span class="font-bold text-[#2d6a2d] text-lg group-hover:text-[#1a4a1a] transition-colors">
						{site.name}
					</span>
					<span class="text-xs text-gray-500 hidden sm:block">{site.tagline}</span>
				</div>
			</a>

			<!-- Navigation desktop -->
			<nav class="hidden md:flex items-center gap-1" aria-label="Navigation principale">
				{#each site.nav as item}
					{#if item.href === '/services'}
						<!-- Dropdown Services -->
						<div class="relative group">
							<a
								href={item.href}
								class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1
									{page.url.pathname.startsWith('/services')
									? 'text-[#2d6a2d] bg-green-50'
									: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}"
							>
								{item.label}
								<svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
								</svg>
							</a>
							<!-- Dropdown -->
							<div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-[230px]">
								<div class="bg-black rounded-md shadow-xl overflow-hidden">
									{#each services as service}
										<a
											href="/services/{service.slug}"
											class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors"
										>
											{service.title}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{:else if item.href === '/autres-services'}
						<!-- Dropdown Autres services -->
						<div class="relative group">
							<a
								href={item.href}
								class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1
									{page.url.pathname === item.href
									? 'text-[#2d6a2d] bg-green-50'
									: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}"
							>
								{item.label}
								<svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
								</svg>
							</a>
							<!-- Dropdown -->
							<div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-[230px]">
								<div class="bg-black rounded-md shadow-xl overflow-hidden">
									{#each autresServicesPage.services as service}
										<a
											href="/autres-services/{service.slug}"
											class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors"
										>
											{service.title}
										</a>
									{/each}
									<div class="border-t border-white/20"></div>
									<a
										href="https://epoxyboisxy.ca"
										target="_blank"
										rel="noopener noreferrer"
										class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors"
									>
										EpoxyBoisxy.ca ↗
									</a>
								</div>
							</div>
						</div>
					{:else}
						<a
							href={item.href}
							class="px-4 py-2 text-sm font-medium rounded-md transition-colors
								{page.url.pathname === item.href
								? 'text-[#2d6a2d] bg-green-50'
								: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}"
						>
							{item.label}
						</a>
					{/if}
				{/each}
			</nav>

			<!-- CTA desktop + bouton mobile -->
			<div class="flex items-center gap-3 ml-8">
				<a
					href={site.phoneHref}
					class="hidden lg:block text-sm font-bold text-gray-700 hover:text-[#2d6a2d] transition-colors"
					aria-label="Téléphone"
				>
					{site.phone}
				</a>
				<a href={site.cta.href} class="btn-primary hidden md:inline-flex text-base py-3 px-8">
					{site.cta.label}
				</a>

				<!-- Hamburger mobile -->
				<button
					onclick={toggleMobile}
					class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2d6a2d]"
					aria-label="Menu"
					aria-expanded={mobileOpen}
				>
					{#if mobileOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Drawer mobile -->
	{#if mobileOpen}
		<div class="md:hidden border-t border-gray-100 bg-white shadow-lg">
			<nav class="container-site py-4 flex flex-col gap-1" aria-label="Navigation mobile">
				{#each site.nav as item}
					<a
						href={item.href}
						onclick={closeMobile}
						class="px-4 py-3 text-sm font-medium rounded-md transition-colors
							{page.url.pathname === item.href
							? 'text-[#2d6a2d] bg-green-50'
							: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}"
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-3 mt-2 border-t border-gray-100">
					<a href={site.cta.href} onclick={closeMobile} class="btn-primary w-full text-sm">
						{site.cta.label}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
