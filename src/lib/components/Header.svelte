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

	// Langue courante et lien vers l'autre langue
	const isEnglish = $derived(page.url.pathname.startsWith('/en'));

	const langSwitchHref = $derived(() => {
		const path = page.url.pathname;
		if (path.startsWith('/en')) {
			const fr = path.slice(3) || '/';
			return fr;
		} else {
			return '/en' + (path === '/' ? '' : path);
		}
	});

	// Nav anglaise
	const navEn = [
		{ label: 'Home', href: '/en' },
		{ label: 'Services', href: '/en/services' },
		{ label: 'Other services', href: '/en/autres-services' },
		{ label: 'Contact us', href: '/en/contact' }
	];
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
			{#if isEnglish}
				<!-- Nav anglaise -->
				{#each navEn as item}
					{#if item.href === '/en/services'}
						<div class="relative group">
							<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 {page.url.pathname.startsWith('/en/services') ? 'text-[#2d6a2d] bg-green-50' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}">
								{item.label}
								<svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
							</a>
							<div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-[230px]">
								<div class="bg-black rounded-md shadow-xl overflow-hidden">
									{#each services as service}
										<a href="/en/services/{service.slug}" class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors">
											{service.title}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{:else if item.href === '/en/autres-services'}
						<div class="relative group">
							<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 {page.url.pathname === item.href ? 'text-[#2d6a2d] bg-green-50' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}">
								{item.label}
								<svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
							</a>
							<div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-[230px]">
								<div class="bg-black rounded-md shadow-xl overflow-hidden">
									{#each autresServicesPage.services as service}
										<a href="/en/autres-services/{service.slug}" class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors">
											{service.title}
										</a>
									{/each}
									<div class="border-t border-white/20"></div>
									<a href="https://epoxyboisxy.ca" target="_blank" rel="noopener noreferrer" class="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2d6a2d] transition-colors">EpoxyBoisxy.ca ↗</a>
								</div>
							</div>
						</div>
					{:else}
						<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors {page.url.pathname === item.href ? 'text-[#2d6a2d] bg-green-50' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50'}">
							{item.label}
						</a>
					{/if}
				{/each}
			{:else}
				<!-- Nav française -->
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
			{/if}
		</nav>

		<!-- CTA desktop + bouton langue + bouton mobile -->
		<div class="flex items-center gap-3 ml-8">
			<a
				href={site.phoneHref}
				class="hidden lg:block text-sm font-bold text-gray-700 hover:text-[#2d6a2d] transition-colors"
				aria-label="Téléphone"
			>
				{site.phone}
			</a>

			<!-- Bouton FR / EN -->
			<a
				href={langSwitchHref()}
				class="hidden md:inline-flex items-center gap-1 rounded border border-gray-300 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:border-[#2d6a2d] hover:text-[#2d6a2d]"
				aria-label={isEnglish ? 'Passer en français' : 'Switch to English'}
			>
				{isEnglish ? 'FR' : 'EN'}
			</a>

			<a href={isEnglish ? '/en/contact' : site.cta.href} class="btn-primary hidden md:inline-flex text-base py-3 px-8">
				{isEnglish ? 'Free estimate' : site.cta.label}
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
				{#each (isEnglish ? navEn : site.nav) as item}
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
				<div class="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
					<a href={isEnglish ? '/en/contact' : site.cta.href} onclick={closeMobile} class="btn-primary w-full text-sm">
						{isEnglish ? 'Free estimate' : site.cta.label}
					</a>
					<a
						href={langSwitchHref()}
						onclick={closeMobile}
						class="flex items-center justify-center gap-1 rounded border border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:border-[#2d6a2d] hover:text-[#2d6a2d]"
					>
						{isEnglish ? '🇫🇷 Français' : '🇬🇧 English'}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
