<script lang="ts">
	import { site } from '$lib/content/site';
	import type { homePage } from '$lib/content/pages';

	interface Props {
		data: typeof homePage.cta;
	}

	let { data }: Props = $props();
</script>

<section class="section-padding bg-[#2d6a2d] max-md:py-12">
	<div class="container-site text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4 max-md:text-2xl max-md:mb-3">
			{data.heading}
		</h2>
		<p class="text-lg text-green-100 mb-8 max-w-xl mx-auto max-md:text-base max-md:mb-6">
			{data.subheading}
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-md:gap-3">
			<a
				href={data.cta.href}
				class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2d6a2d] font-bold rounded-xl shadow-lg hover:bg-green-50 transition-colors text-base max-md:w-full max-md:min-h-[48px]"
			>
				{data.cta.label}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
			<a
				href={site.phoneHref}
				class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/70 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base max-md:w-full max-md:min-h-[48px]"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				{site.phone}
			</a>
		</div>
	</div>
</section>
