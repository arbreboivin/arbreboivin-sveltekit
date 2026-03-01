<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import GoogleReviews from '$lib/components/GoogleReviews.svelte';
	import LongTextSection from '$lib/components/LongTextSection.svelte';
	import FullWidthCTA from '$lib/components/FullWidthCTA.svelte';
	import { homePage } from '$lib/content/home';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>{homePage.seo.title}</title>
	<meta name="description" content={homePage.seo.description} />
	<meta property="og:title" content={homePage.seo.title} />
	<meta property="og:description" content={homePage.seo.description} />
	<meta property="og:url" content={site.url} />
	<link rel="canonical" href={site.url} />
</svelte:head>

<Hero data={homePage.hero} />
<ServicesGrid data={homePage.servicesGrid} />
<GoogleReviews />
<LongTextSection data={homePage.longText} />
<FullWidthCTA data={homePage.fullWidthCTA} />
