<script lang="ts">
	import { contactPage } from '$lib/content/pages';
	import { site } from '$lib/content/site';

	let prenom = $state('');
	let nom = $state('');
	let email = $state('');
	let telephone = $state('');
	let adresse = $state('');
	let ville = $state('');
	let codePostal = $state('');
	let province = $state('QC');
	let commentaires = $state('');

	let ramassageBois = $state(false);
	let ramassageBranches = $state(false);
	let sansRamassage = $state(false);

	let servicesArbre = $state({
		elagage: false,
		abattage: false,
		haubanage: false,
		plantation: false,
		dechiquetage: false,
		essouchement: false,
		urgence: false,
	});

	let servicesTaille = $state({
		plantationHaie: false,
		entretienHaie: false,
		tailleArbuste: false,
		abattageHaie: false,
	});

	let autresServices = $state({
		filetSuspendu: false,
		deneigement: false,
		gouttieres: false,
		epoxyBoisxy: false,
	});

	// Photos & vidéos — Cloudinary (gratuit, images + vidéos)
	const CLOUDINARY_CLOUD = 'dumhtwfqn';
	const CLOUDINARY_PRESET = 'photo arbre site';
	let fichiers = $state<File[]>([]);
	let uploadProgress = $state('');

	function handleFileChange(e: Event) {
		const t = e.currentTarget as HTMLInputElement;
		if (t.files) {
			fichiers = [...fichiers, ...Array.from(t.files)];
			t.value = '';
		}
	}

	function removeFile(index: number) {
		fichiers = fichiers.filter((_, i) => i !== index);
	}

	async function uploadToCloudinary(file: File): Promise<string> {
		const form = new FormData();
		form.append('file', file);
		form.append('upload_preset', CLOUDINARY_PRESET);

		// "auto" accepte images ET vidéos sans changer l'URL
		const res = await fetch(
			`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/auto/upload`,
			{ method: 'POST', body: form }
		);
		const data = await res.json();
		if (data.secure_url) return data.secure_url;
		throw new Error(`[cloud:${CLOUDINARY_CLOUD}] [preset:${CLOUDINARY_PRESET}] ${data.error?.message || JSON.stringify(data)}`);
	}

	let isSubmitting = $state(false);
	let submitted = $state(false);
	let errorMsg = $state('');

	function getSelectedServices() {
		const arbre = Object.entries(servicesArbre)
			.filter(([, v]) => v)
			.map(([k]) =>
				({
					elagage: 'Élagage',
					abattage: "Abattage d'arbre",
					haubanage: 'Haubanage',
					plantation: "Plantation d'arbre",
					dechiquetage: 'Déchiquetage',
					essouchement: 'Dessouchement / Essouchement',
					urgence: 'Urgence 24/7',
				})[k]
			)
			.filter(Boolean);

		const taille = Object.entries(servicesTaille)
			.filter(([, v]) => v)
			.map(([k]) =>
				({
					plantationHaie: 'Plantation de haie',
					entretienHaie: 'Entretien de haie',
					tailleArbuste: "Taille d'arbuste",
					abattageHaie: 'Abattage de haie',
				})[k]
			)
			.filter(Boolean);

		const autres = Object.entries(autresServices)
			.filter(([, v]) => v)
			.map(([k]) =>
				({
					filetSuspendu: 'Installation de filet suspendu',
					deneigement: 'Déneigement de toiture',
					gouttieres: 'Nettoyage de gouttières',
					epoxyBoisxy: 'EpoxyBoisxy.ca',
				})[k]
			)
			.filter(Boolean);

		const ramassage = [
			ramassageBois && 'Ramassage du bois',
			ramassageBranches && 'Ramassage des branches',
			sansRamassage && 'Sans ramassage',
		].filter(Boolean);

		return { arbre, taille, autres, ramassage };
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		errorMsg = '';
		uploadProgress = '';

		const services = getSelectedServices();

		// Upload photos vers ImgBB
		let photoLinks = '—';
		if (fichiers.length > 0) {
			try {
				const urls: string[] = [];
				for (let i = 0; i < fichiers.length; i++) {
					const f = fichiers[i];
					const type = f.type.startsWith('video/') ? 'vidéo' : 'photo';
					uploadProgress = `Envoi ${type} ${i + 1} / ${fichiers.length}...`;
					const url = await uploadToCloudinary(f);
					urls.push(url);
				}
				photoLinks = urls.join(' | ');
				uploadProgress = '';
			} catch (err) {
				uploadProgress = '';
				errorMsg = `Erreur Cloudinary : ${err instanceof Error ? err.message : String(err)}`;
				isSubmitting = false;
				return;
			}
		}

		const formData = new FormData();
		formData.append('access_key', '6d8a5efb-41d5-4d3b-b82f-9cc447a256da');
		formData.append('subject', "Nouvelle demande d'estimation — Arbre Boivin");
		formData.append('from_name', `${prenom} ${nom}`);
		formData.append('Prenom', prenom);
		formData.append('Nom', nom);
		formData.append('Email', email);
		formData.append('Telephone', telephone || '-');
		formData.append('Adresse', `${adresse}, ${ville}, ${codePostal} ${province}`);
		formData.append('Commentaires', commentaires || '-');
		formData.append('Services_arbre', services.arbre.join(', ') || '-');
		formData.append('Taille_haie', services.taille.join(', ') || '-');
		formData.append('Autres_services', services.autres.join(', ') || '-');
		formData.append('Ramassage', services.ramassage.join(', ') || '-');
		formData.append('Photos', photoLinks);

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: formData,
			});
			const data = await res.json();
			if (data.success) {
				submitted = true;
			} else {
				errorMsg = data.message || 'Une erreur est survenue. Veuillez réessayer.';
			}
		} catch {
			errorMsg = "Impossible d'envoyer le formulaire. Vérifiez votre connexion.";
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{contactPage.seo.title} | {site.name}</title>
	<meta name="description" content={contactPage.seo.description} />
	<meta property="og:title" content="{contactPage.seo.title} | {site.name}" />
	<meta property="og:description" content={contactPage.seo.description} />
	<meta property="og:url" content="{site.url}/contact" />
	<link rel="canonical" href="{site.url}/contact" />
</svelte:head>

<style>
	.input-field {
		width: 100%;
		border: 2px solid #333;
		border-radius: 5px;
		padding: 0.65rem 0.85rem;
		font-size: 0.95rem;
		color: #1a1a1a;
		background: #fff;
		outline: none;
		transition: border-color 0.2s;
	}
	.input-field:focus {
		border-color: #2d6a2d;
	}
	.form-label {
		display: block;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #1a1a1a;
		margin-bottom: 0.35rem;
	}
	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.95rem;
		color: #1a1a1a;
		cursor: pointer;
	}
	.checkbox-label input[type='checkbox'] {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		accent-color: #2d6a2d;
		cursor: pointer;
	}
	.col-title {
		font-size: 0.75rem;
		font-weight: 900;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #2d6a2d;
		border-bottom: 2px solid #2d6a2d;
		padding-bottom: 0.4rem;
		margin-bottom: 1rem;
	}
</style>

<section class="bg-white py-8 md:py-12">
	<div class="container-site max-w-7xl">
		<h1
			class="mb-7 border-b-2 border-[#2d6a2d] pb-4 text-center text-2xl font-black uppercase tracking-wide text-[#2d6a2d] md:text-3xl"
		>
			Estimation gratuite
		</h1>

		{#if submitted}
			<div
				class="mx-auto max-w-xl rounded-xl border-2 border-[#2d6a2d] bg-white p-10 text-center shadow"
			>
				<div class="mb-4 text-5xl">✅</div>
				<h2 class="mb-2 text-xl font-black uppercase text-[#2d6a2d]">Demande envoyée !</h2>
				<p class="text-gray-600">
					Merci <strong>{prenom}</strong>, nous vous contacterons dans les plus brefs délais.
				</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} novalidate>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<!-- ── Colonne 1 : Renseignements personnels ── -->
					<div class="space-y-4">
						<p class="col-title">Renseignements personnels</p>

						<div class="grid grid-cols-2 gap-4">
							<div>
								<label class="form-label" for="prenom">Prénom *</label>
								<input
									id="prenom"
									class="input-field"
									type="text"
									bind:value={prenom}
									required
								/>
							</div>
							<div>
								<label class="form-label" for="nom">Nom *</label>
								<input
									id="nom"
									class="input-field"
									type="text"
									bind:value={nom}
									required
								/>
							</div>
						</div>

						<div>
							<label class="form-label" for="email">E-mail *</label>
							<input
								id="email"
								class="input-field"
								type="email"
								bind:value={email}
								required
							/>
						</div>

						<div>
							<label class="form-label" for="telephone">Téléphone</label>
							<input
								id="telephone"
								class="input-field"
								type="tel"
								bind:value={telephone}
							/>
						</div>

						<div>
							<label class="form-label" for="commentaires">Commentaires</label>
							<textarea
								id="commentaires"
								class="input-field"
								rows="5"
								bind:value={commentaires}
							></textarea>
						</div>

						<div>
							<p class="form-label mb-2">Avec ou sans ramassage ?</p>
							<div class="space-y-2">
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={ramassageBois} />
									Ramassage du bois
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={ramassageBranches} />
									Ramassage des branches
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={sansRamassage} />
									Sans ramassage
								</label>
							</div>
						</div>
					</div>

					<!-- ── Colonne 2 : Coordonnées ── -->
					<div class="space-y-4">
						<p class="col-title">Coordonnées</p>

						<div>
							<label class="form-label" for="adresse">Adresse *</label>
							<input
								id="adresse"
								class="input-field"
								type="text"
								bind:value={adresse}
								required
							/>
						</div>

						<div>
							<label class="form-label" for="ville">Ville *</label>
							<input
								id="ville"
								class="input-field"
								type="text"
								bind:value={ville}
								required
							/>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div>
								<label class="form-label" for="codePostal">Code postal *</label>
								<input
									id="codePostal"
									class="input-field"
									type="text"
									bind:value={codePostal}
									required
								/>
							</div>
							<div>
								<label class="form-label" for="province">Province</label>
								<input
									id="province"
									class="input-field"
									type="text"
									bind:value={province}
								/>
							</div>
						</div>

						<!-- Zone téléversement multiple -->
						<div>
							<label class="form-label">Photos / vidéos de votre demande</label>
							<label
								class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-400 bg-gray-50 px-4 py-5 text-sm font-bold uppercase tracking-wide text-gray-500 transition hover:border-[#2d6a2d] hover:text-[#2d6a2d]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4" />
								</svg>
								<span>Ajouter des photos / vidéos</span>
								<span class="text-xs font-normal normal-case text-gray-400">Images et vidéos — plusieurs fichiers acceptés</span>
								<input
									type="file"
									accept="image/*,video/*"
									multiple
									class="hidden"
									onchange={handleFileChange}
								/>
							</label>

							{#if fichiers.length > 0}
								<ul class="mt-2 space-y-1">
									{#each fichiers as f, i}
										<li class="flex items-center justify-between rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm">
											<span class="truncate text-gray-700">{f.name}</span>
											<button
												type="button"
												onclick={() => removeFile(i)}
												class="ml-3 flex-shrink-0 text-red-500 hover:text-red-700"
												aria-label="Retirer"
											>✕</button>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>

					<!-- ── Colonne 3 : Services ── -->
					<div class="space-y-4">
						<div>
							<p class="col-title">Service d'arbre</p>
							<div class="space-y-2">
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.elagage} />
									Élagage
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.abattage} />
									Abattage d'arbre
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.haubanage} />
									Haubanage
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.plantation} />
									Plantation d'arbre
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.dechiquetage} />
									Déchiquetage
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.essouchement} />
									Dessouchement / Essouchement
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesArbre.urgence} />
									Urgence 24/7
								</label>
							</div>
						</div>

						<div>
							<p class="col-title mt-2">Taille de haie</p>
							<div class="space-y-2">
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesTaille.plantationHaie} />
									Plantation de haie
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesTaille.entretienHaie} />
									Entretien de haie
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesTaille.tailleArbuste} />
									Taille d'arbuste
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={servicesTaille.abattageHaie} />
									Abattage de haie
								</label>
							</div>
						</div>

						<div>
							<p class="col-title mt-2">Autres services</p>
							<div class="space-y-2">
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={autresServices.filetSuspendu} />
									Installation de filet suspendu
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={autresServices.deneigement} />
									Déneigement de toiture
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={autresServices.gouttieres} />
									Nettoyage de gouttières
								</label>
								<label class="checkbox-label">
									<input type="checkbox" bind:checked={autresServices.epoxyBoisxy} />
									EpoxyBoisxy.ca
								</label>
							</div>
						</div>
					</div>
				</div>

				{#if errorMsg}
					<p class="mt-6 text-center font-semibold text-red-600">{errorMsg}</p>
				{/if}
				{#if uploadProgress}
					<p class="mt-4 text-center text-sm font-semibold text-[#2d6a2d]">{uploadProgress}</p>
				{/if}

				<div class="mt-8 text-center">
					<button
						type="submit"
						disabled={isSubmitting}
						class="inline-block rounded-lg bg-[#2d6a2d] px-20 py-5 text-lg font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-[#1e4d1e] disabled:opacity-60"
					>
						{isSubmitting ? (uploadProgress ? uploadProgress : 'Envoi en cours...') : 'Envoyer'}
					</button>
					<p class="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
						N'attendez pas pour des services sécuritaire et professionnel
					</p>
				</div>
			</form>
		{/if}
	</div>
</section>
