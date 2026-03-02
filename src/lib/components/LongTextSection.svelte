<script lang="ts">
	import type { homePage } from '$lib/content/home';

	interface Props {
		data: typeof homePage.longText;
	}

	let { data }: Props = $props();
</script>

<section class="section-padding bg-white max-md:py-12">
	<div class="container-site text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-[#2d6a2d] dark:text-green-400 mb-8 max-md:mb-6 max-md:text-2xl">
			{data.heading}
		</h2>

		<div class="max-w-3xl mx-auto space-y-5 mb-10 max-md:space-y-4 max-md:mb-8">
			{#each data.paragraphs as paragraph}
				<p class="text-base text-gray-700 dark:text-slate-300 leading-relaxed max-md:text-[15px]">
					{paragraph}
				</p>
			{/each}
		</div>

		<a
			href={data.cta.href}
			class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-slate-800 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-black dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-[#111827] transition-colors max-md:w-full max-md:min-h-[48px] max-md:py-4"
		>
			{data.cta.label}
		</a>
	</div>
</section>
