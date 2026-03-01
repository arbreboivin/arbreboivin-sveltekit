<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/content/site';
	import { themeStore } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		themeStore.init();
	});
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content={$themeStore === 'dark' ? '#0f172a' : '#2d6a2d'} />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Arbre Boivin",
		"url": "https://www.arbreboivin.ca",
		"telephone": "514-922-5807",
		"email": "ArbreBoivin@gmail.com",
		"description": "Service d'arbre professionnel et sécuritaire à Portneuf, Saint-Raymond, Pont-Rouge et Québec. Élagage, abattage, plantation, haubanage et urgences 24/7.",
		"areaServed": [
			"Saint-Raymond", "Portneuf", "Pont-Rouge", "Donnacona", "Cap-Santé",
			"Neuville", "Saint-Basile", "Saint-Marc-des-Carrières", "Saint-Casimir",
			"Saint-Alban", "Saint-Ubalde", "Saint-Gilbert", "Saint-Léonard-de-Portneuf",
			"Sainte-Christine-d'Auvergne", "Deschambault-Grondines", "Shannon",
			"Fossambault-sur-le-Lac", "Lac-Saint-Joseph", "Stoneham-et-Tewkesbury",
			"Saint-Augustin-de-Desmaures", "L'Ancienne-Lorette", "Val-Bélair",
			"Québec", "Saint-Émile", "Loretteville", "Sainte-Foy",
			"Sainte-Brigitte-de-Laval", "Boischatel"
		].map(name => ({ "@type": "City", "name": name, "addressRegion": "QC", "addressCountry": "CA" })),
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Services d'arbres",
			"itemListElement": [
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Élagage d'arbres" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Abattage d'arbre" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haubanage" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plantation d'arbre" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Essouchement" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Urgence arbre 24/7" } }
			]
		},
		"openingHours": "Mo-Su 00:00-23:59",
		"priceRange": "$$",
		"paymentAccepted": "Cash, Credit Card",
		"currenciesAccepted": "CAD"
	})}</script>`}
</svelte:head>

<div class="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
