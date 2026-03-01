<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/content/site';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#2d6a2d" />

	<!--
		JSON-LD LocalBusiness — décommenter et compléter quand les infos sont prêtes
		<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": site.legalName,
			"url": site.url,
			"telephone": site.phone,
			"email": site.email,
			"address": {
				"@type": "PostalAddress",
				"streetAddress": site.address.street,
				"addressLocality": site.address.city,
				"addressRegion": site.address.province,
				"postalCode": site.address.postalCode,
				"addressCountry": "CA"
			},
			"openingHours": "Mo-Fr 07:00-18:00",
			"image": site.url + "/og-image.jpg",
			"priceRange": "$$"
		})}
		</script>
	-->
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
