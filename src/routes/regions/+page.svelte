<script lang="ts">
	import { regions } from '$lib/content/regions';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>Régions desservies | {site.name}</title>
	<meta
		name="description"
		content="Arbre Boivin dessert Portneuf, Saint-Raymond, Québec et 26 municipalités. Élagage, abattage, essouchement et urgences 24/7. Estimation gratuite."
	/>
	<link rel="canonical" href="{site.url}/regions" />
</svelte:head>

<section class="section-padding bg-white">
	<div class="container-site">
		<h1 class="mb-3 text-3xl font-black text-gray-900 md:text-4xl">Régions desservies</h1>
		<p class="mb-10 max-w-2xl text-gray-600">
			Arbre Boivin offre des services d'élagage, d'abattage, d'essouchement, de haubanage et d'urgence
			dans toutes les municipalités ci-dessous. Sélectionnez votre ville pour en savoir plus.
		</p>

		<div class="grid gap-8 md:grid-cols-2">
			<div>
				<h2 class="mb-4 text-lg font-bold text-[#2d6a2d]">Région de Portneuf</h2>
				<ul class="flex flex-wrap gap-2">
					{#each regions.filter((r) => r.zone === 'Portneuf') as region}
						<li>
							<a
								href="/regions/{region.slug}"
								class="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-[#2d6a2d] hover:text-white"
							>
								{region.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="mb-4 text-lg font-bold text-[#2d6a2d]">Capitale-Nationale</h2>
				<ul class="flex flex-wrap gap-2">
					{#each regions.filter((r) => r.zone === 'Capitale-Nationale') as region}
						<li>
							<a
								href="/regions/{region.slug}"
								class="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-[#2d6a2d] hover:text-white"
							>
								{region.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
