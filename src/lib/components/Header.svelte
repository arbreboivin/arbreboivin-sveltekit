<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content/site';
	import { services } from '$lib/content/services';
	import { autresServicesPage } from '$lib/content/pages';
	import { themeStore } from '$lib/stores/theme';

	let mobileOpen = $state(false);
	let isDark = $state(false);

	// Sync avec le store après chargement (évite problèmes SSR / hydration)
	$effect(() => {
		const unsub = themeStore.subscribe((v) => {
			isDark = v === 'dark';
		});
		return unsub;
	});

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

	const hrefFr = $derived(isEnglish ? (page.url.pathname.slice(3) || '/') : null);
	const hrefEn = $derived(!isEnglish ? langSwitchHref() : null);

	// Nav anglaise
	const navEn = [
		{ label: 'Home', href: '/en' },
		{ label: 'Services', href: '/en/services' },
		{ label: 'Other services', href: '/en/autres-services' },
		{ label: 'Contact us', href: '/en/contact' }
	];
</script>

<header
	class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm dark:bg-slate-900/95 dark:border-slate-800 transition-colors duration-200"
>
	<div class="container-site">
		<div class="flex items-center justify-between h-16 md:h-20 gap-2">
			<!-- Logo + bouton mode nuit -->
			<div class="flex items-center gap-2 sm:gap-3">
				<a href="/" class="flex items-center gap-3 group shrink-0" onclick={closeMobile}>
					<span class="text-3xl">🌲</span>
					<div class="flex flex-col leading-tight">
						<span class="font-bold text-[#2d6a2d] text-lg group-hover:text-[#1a4a1a] transition-colors dark:text-green-400 dark:group-hover:text-green-300">
							{site.name}
						</span>
						<span class="text-xs text-gray-500 hidden sm:block dark:text-gray-400">{site.tagline}</span>
					</div>
				</a>
				<!-- Bouton mode nuit : cercle doré avec lune/soleil, bien visible -->
				<span class="flex items-center gap-1.5" title={isDark ? 'Mode clair' : 'Mode nuit'}>
					<button
						type="button"
						onclick={() => themeStore.toggle()}
						class="inline-flex h-10 w-10 min-w-[2.5rem] flex-shrink-0 items-center justify-center rounded-full bg-[#e4a853] text-white transition hover:bg-[#d4983a] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
						aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode nuit'}
					>
						{#if isDark}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						{:else}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
						{/if}
					</button>
					<span class="hidden sm:inline text-xs font-semibold text-gray-600 dark:text-gray-400">{isDark ? 'Jour' : 'Nuit'}</span>
				</span>
			</div>

		<!-- Navigation desktop -->
		<nav class="hidden md:flex items-center gap-1" aria-label="Navigation principale">
			{#if isEnglish}
				<!-- Nav anglaise -->
				{#each navEn as item}
					{#if item.href === '/en/services'}
						<div class="relative group">
							<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 {page.url.pathname.startsWith('/en/services') ? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}">
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
							<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 {page.url.pathname === item.href ? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}">
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
						<a href={item.href} class="px-4 py-2 text-sm font-medium rounded-md transition-colors {page.url.pathname === item.href ? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800' : 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}">
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
									? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800'
									: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}"
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
									? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800'
									: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}"
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
								? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800'
								: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}"
						>
							{item.label}
						</a>
					{/if}
				{/each}
			{/if}
		</nav>

		<!-- CTA desktop : téléphone + FR/EN + bouton devis + mobile -->
		<div class="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2 sm:ml-4 md:ml-8 flex-shrink-0">
			<!-- Téléphone (même ligne) -->
			<a
				href={site.phoneHref}
				class="hidden sm:inline-flex text-sm font-bold text-gray-700 hover:text-[#2d6a2d] transition-colors whitespace-nowrap dark:text-gray-300 dark:hover:text-green-400"
				aria-label="Téléphone"
			>
				{site.phone}
			</a>

			<!-- FR | EN : les deux visibles, langue active en bouton vert -->
			<div class="hidden md:flex items-center rounded-lg border border-gray-200 overflow-hidden dark:border-slate-600" role="group" aria-label="Langue">
				{#if hrefFr !== null}
					<a
						href={hrefFr}
						class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2d6a2d] hover:bg-green-50 transition-colors dark:text-green-400 dark:hover:bg-slate-700"
						aria-label="Français"
					>
						FR
					</a>
				{:else}
					<span class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#2d6a2d] text-white dark:bg-green-600" aria-current="page">
						FR
					</span>
				{/if}
				{#if hrefEn !== null}
					<a
						href={hrefEn}
						class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2d6a2d] hover:bg-green-50 transition-colors dark:text-green-400 dark:hover:bg-slate-700"
						aria-label="English"
					>
						EN
					</a>
				{:else}
					<span class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#2d6a2d] text-white dark:bg-green-600" aria-current="page">
						EN
					</span>
				{/if}
			</div>

			<a href={isEnglish ? '/en/contact' : site.cta.href} class="btn-primary hidden md:inline-flex text-base py-3 px-6 rounded-xl">
				{isEnglish ? 'Free estimate' : site.cta.label}
			</a>

				<!-- Hamburger mobile -->
				<button
					onclick={toggleMobile}
					class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2d6a2d] dark:text-gray-300 dark:hover:bg-slate-800"
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
		<div class="md:hidden border-t border-gray-100 bg-white shadow-lg dark:bg-slate-900 dark:border-slate-800">
			<nav class="container-site py-4 flex flex-col gap-1" aria-label="Navigation mobile">
				{#each (isEnglish ? navEn : site.nav) as item}
					<a
						href={item.href}
						onclick={closeMobile}
						class="px-4 py-3 text-sm font-medium rounded-md transition-colors
							{page.url.pathname === item.href
							? 'text-[#2d6a2d] bg-green-50 dark:text-green-400 dark:bg-slate-800'
							: 'text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-slate-800'}"
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-3 mt-2 border-t border-gray-100 dark:border-slate-700 flex flex-col gap-2">
					<!-- Mode nuit dans le menu mobile -->
					<button
						type="button"
						onclick={() => { themeStore.toggle(); closeMobile(); }}
						class="flex items-center justify-center gap-2 rounded-lg border-2 border-amber-500 bg-amber-400/20 px-4 py-3 text-sm font-bold text-amber-800 transition dark:bg-amber-500/30 dark:text-amber-200 dark:border-amber-400"
						aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode nuit'}
					>
						{#if isDark}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
							Mode clair
						{:else}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
							Mode nuit
						{/if}
					</button>
					<a href={isEnglish ? '/en/contact' : site.cta.href} onclick={closeMobile} class="btn-primary w-full text-sm">
						{isEnglish ? 'Free estimate' : site.cta.label}
					</a>
					<a
						href={langSwitchHref()}
						onclick={closeMobile}
						class="flex items-center justify-center gap-1 rounded border border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:border-[#2d6a2d] hover:text-[#2d6a2d] dark:border-slate-600 dark:text-gray-300 dark:hover:border-green-400 dark:hover:text-green-400"
					>
						{isEnglish ? '🇫🇷 Français' : '🇬🇧 English'}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
