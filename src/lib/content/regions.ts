/**
 * Municipalités desservies et contenu des pages régionales (SEO local).
 */

export interface Region {
	slug: string;
	name: string;
	/** Libellé pour le texte (ex. « région de Portneuf », « Capitale-Nationale ») */
	zone: string;
}

export const regions: Region[] = [
	{ slug: 'saint-raymond', name: 'Saint-Raymond', zone: 'Portneuf' },
	{ slug: 'portneuf', name: 'Portneuf', zone: 'Portneuf' },
	{ slug: 'pont-rouge', name: 'Pont-Rouge', zone: 'Portneuf' },
	{ slug: 'donnacona', name: 'Donnacona', zone: 'Portneuf' },
	{ slug: 'cap-sante', name: 'Cap-Santé', zone: 'Portneuf' },
	{ slug: 'neuville', name: 'Neuville', zone: 'Portneuf' },
	{ slug: 'saint-basile', name: 'Saint-Basile', zone: 'Portneuf' },
	{ slug: 'saint-marc-des-carrieres', name: 'Saint-Marc-des-Carrières', zone: 'Portneuf' },
	{ slug: 'saint-casimir', name: 'Saint-Casimir', zone: 'Portneuf' },
	{ slug: 'saint-alban', name: 'Saint-Alban', zone: 'Portneuf' },
	{ slug: 'saint-ubalde', name: 'Saint-Ubalde', zone: 'Portneuf' },
	{ slug: 'saint-gilbert', name: 'Saint-Gilbert', zone: 'Portneuf' },
	{ slug: 'saint-leonard-de-portneuf', name: 'Saint-Léonard-de-Portneuf', zone: 'Portneuf' },
	{ slug: 'sainte-christine-d-auvergne', name: "Sainte-Christine-d'Auvergne", zone: 'Portneuf' },
	{ slug: 'deschambault-grondines', name: 'Deschambault-Grondines', zone: 'Portneuf' },
	{ slug: 'shannon', name: 'Shannon', zone: 'Capitale-Nationale' },
	{ slug: 'fossambault-sur-le-lac', name: 'Fossambault-sur-le-Lac', zone: 'Capitale-Nationale' },
	{ slug: 'stoneham-et-tewkesbury', name: 'Stoneham-et-Tewkesbury', zone: 'Capitale-Nationale' },
	{ slug: 'saint-augustin-de-desmaures', name: 'Saint-Augustin-de-Desmaures', zone: 'Capitale-Nationale' },
	{ slug: 'l-ancienne-lorette', name: "L'Ancienne-Lorette", zone: 'Capitale-Nationale' },
	{ slug: 'val-belair', name: 'Val-Bélair', zone: 'Capitale-Nationale' },
	{ slug: 'quebec', name: 'Québec', zone: 'Capitale-Nationale' },
	{ slug: 'loretteville', name: 'Loretteville', zone: 'Capitale-Nationale' },
	{ slug: 'sainte-foy', name: 'Sainte-Foy', zone: 'Capitale-Nationale' },
	{ slug: 'sainte-brigitte-de-laval', name: 'Sainte-Brigitte-de-Laval', zone: 'Capitale-Nationale' },
	{ slug: 'boischatel', name: 'Boischatel', zone: 'Capitale-Nationale' }
];

export const regionNames = regions.map((r) => r.name);

export function getRegionBySlug(slug: string): Region | undefined {
	return regions.find((r) => r.slug === slug);
}

export interface RegionBenefit {
	title: string;
	text: string;
}

export interface RegionSection {
	id: string;
	title: string;
	paragraphs: string[];
	benefits: RegionBenefit[];
	serviceHref: string;
	ctaLabel: string;
}

export interface RegionPageContent {
	region: Region;
	seo: { title: string; description: string };
	heroTitle: string;
	heroSubtitle: string;
	intro: string;
	sections: RegionSection[];
}

function fill(text: string, city: string, zone: string): string {
	return text.replace(/\{city\}/g, city).replace(/\{zone\}/g, zone);
}

const sectionTemplates: Omit<RegionSection, 'title' | 'paragraphs' | 'benefits'> & {
	title: string;
	paragraphs: string[];
	benefits: RegionBenefit[];
}[] = [
	{
		id: 'abattage',
		title: "Abattage d'arbre à {city}",
		paragraphs: [
			"Vous cherchez des professionnels de l'abattage d'arbres à {city}? Demandez dès maintenant une estimation gratuite à Arbre Boivin et recevez un service sécuritaire dans votre secteur. Pour un abattage effectué selon les règles de sécurité les plus strictes, notre équipe d'élagueurs certifiés intervient à {city} et dans toute la région de {zone}.",
			"Que ce soit pour un abattage par le pied, un démontage en section, à la nacelle ou selon la configuration de votre terrain, Arbre Boivin est la référence pour {city}. Si vous avez un arbre mort, malade ou dangereux, faites appel à des experts certifiés en abattage d'arbre.",
			"Avant tout abattage près des fils électriques (25 000 V), communiquez avec Hydro-Québec au 1-888-385-7252. Seuls Hydro-Québec ou un élagueur professionnel mandaté par Hydro-Québec peuvent effectuer des travaux si une personne, une partie de l'arbre ou un outil risque de se trouver à moins de trois mètres d'un fil moyenne tension."
		],
		benefits: [
			{
				title: "L'abattage en dernier recours",
				text: "Arbre Boivin réserve l'abattage aux situations qui l'exigent. En cas de maladie ou de danger, l'enlèvement d'un arbre infesté peut prévenir la propagation sur une plus grande échelle."
			},
			{
				title: 'Un service professionnel et sécuritaire',
				text: "Nous sécurisons les lieux en enlevant en toute sécurité les arbres dangereux. Démontage manuel, à la nacelle ou selon les besoins du chantier — rapidement et en toute sécurité à {city}."
			},
			{
				title: 'Évaluation par des arboristes certifiés',
				text: "Nos estimateurs qualifiés reconnaissent un arbre qui doit être abattu pour éliminer les dangers. Diagnostics détaillés et démontage sécuritaire pour protéger vos structures."
			}
		],
		serviceHref: '/services/abattage',
		ctaLabel: 'Planifier une estimation pour un abattage'
	},
	{
		id: 'elagage',
		title: "Élagage d'arbre et émondage à {city}",
		paragraphs: [
			"Un arbre en milieu urbain comme à {city} doit être adapté à son environnement pour ne pas nuire aux structures. Faites élaguer votre arbre pour qu'il s'intègre harmonieusement à votre propriété tout en restant en santé.",
			"Dans un secteur résidentiel comme {city}, les arbres apportent beauté, tranquillité et de nombreux bénéfices environnementaux. Situés près des maisons, des fils ou des piscines, ils entrent parfois en conflit avec les installations. Un élagueur certifié accorde à l'arbre une place saine et sécuritaire.",
			"Avec les soins appropriés, vos arbres continuent d'embellir {city} en toute sécurité. Demandez dès maintenant une estimation gratuite pour un élagage de dégagement ou un entretien sanitaire."
		],
		benefits: [
			{
				title: 'Techniques éprouvées pour la santé de vos arbres',
				text: "Notre équipe utilise les meilleures pratiques de l'arboriculture dans une approche axée sur la préservation de l'arbre. L'élagage selon les règles de l'art conserve forces et intégrité structurelle."
			},
			{
				title: 'Approche sélective qui renforce et sécurise',
				text: "Pour éliminer les risques en milieu urbain, nous enlevons uniquement ce qui est nécessaire pour créer une distance appropriée entre les arbres et les installations à {city}."
			},
			{
				title: 'Service et information accessibles',
				text: "Notre équipe vous met rapidement en contact avec un estimateur qualifié qui transmet ses recommandations pour vous aider à faire un choix éclairé — estimation gratuite et sans engagement."
			}
		],
		serviceHref: '/services/elagage',
		ctaLabel: 'Planifier une rencontre avec un arboriste'
	},
	{
		id: 'essouchement',
		title: 'Essouchement à {city}',
		paragraphs: [
			"Vous avez fait abattre un arbre à {city} et vous devez maintenant enlever la souche? Optez pour un service professionnel et écoresponsable. L'essouchement est une opération délicate : certaines techniques peuvent nuire à l'environnement et à votre sécurité.",
			"La méthode la plus efficace et durable est le rognage. On se concentre uniquement sur la souche, en laissant intacte la rhizosphère environnante. Faites une demande d'estimation gratuite et obtenez un essouchement à {city} qui respecte votre terrain.",
			"Le propriétaire est responsable des souches sur son terrain. Avant tout travail, vérifiez la réglementation municipale de {city} si votre propriété est en zone particulière."
		],
		benefits: [
			{
				title: 'Essouchement local pour préserver le sol',
				text: "Le rognage est la façon la plus durable d'enlever une souche. Contrairement à l'arrachage, il préserve la biodiversité du sol et optimise sa fertilité."
			},
			{
				title: 'Sans arrachage pour protéger les installations',
				text: "Pour éviter les dommages aux structures souterraines, l'enlèvement des souches se fait avec l'équipement approprié. Arbre Boivin utilise le rognage pour enlever les souches en toute sécurité."
			},
			{
				title: "Équipe dédiée à l'essouchement",
				text: "Petites ou grandes souches, notre équipe gère les demandes rapidement. Envoyez une photo et les dimensions de votre souche pour une estimation immédiate à {city}."
			}
		],
		serviceHref: '/services/essouchement',
		ctaLabel: "Demander une estimation d'essouchement"
	},
	{
		id: 'haubanage',
		title: 'Haubanage à {city}',
		paragraphs: [
			"Un arbre à {city} présentant une fissure, une fourche faible ou un port déséquilibré peut souvent être sauvé grâce au haubanage plutôt qu'à l'abattage. Cette technique de câblage et de haubanage stabilise la structure et prolonge la vie de l'arbre.",
			"Nos arboristes certifiés évaluent la solidité de l'arbre et recommandent une solution adaptée à votre propriété à {city}. Le haubanage est une alternative économique et écologique lorsque l'arbre est encore viable.",
			"Demandez une estimation gratuite pour savoir si le haubanage convient à votre arbre avant d'envisager un abattage."
		],
		benefits: [
			{
				title: "Alternative à l'abattage",
				text: "Le haubanage peut vous faire économiser considérablement par rapport à un abattage complet tout en conservant l'arbre sur votre propriété à {city}."
			},
			{
				title: 'Installation professionnelle',
				text: "Câbles et haubans installés selon les normes de l'industrie pour une protection durable et discrète de votre arbre."
			},
			{
				title: 'Suivi et conseils',
				text: "Nos experts vous expliquent l'entretien à prévoir et les signes à surveiller après l'installation du système de haubanage."
			}
		],
		serviceHref: '/services/haubanage',
		ctaLabel: 'Évaluer le haubanage de mon arbre'
	},
	{
		id: 'plantation',
		title: "Plantation d'arbre à {city}",
		paragraphs: [
			"Vous souhaitez planter un arbre à {city}? Un bon choix d'essence et une plantation selon les règles de l'art garantissent la croissance et la longévité de votre arbre.",
			"Arbre Boivin vous conseille sur l'essence adaptée à votre sol, à l'exposition et aux contraintes de votre terrain à {city}. Plantation, mise en place et conseils d'entretien — tout pour un départ en santé.",
			"Renseignez-vous auprès de la municipalité de {city} sur les programmes de plantation ou les exigences en façade avant de planter."
		],
		benefits: [
			{
				title: "Conseils d'arboriste certifié",
				text: "Choix d'essence, emplacement et technique de plantation recommandés par un professionnel pour maximiser les chances de réussite à {city}."
			},
			{
				title: 'Plantation soignée',
				text: "Respect du collet racinaire, amendement du sol si nécessaire et arrosage initial pour une reprise optimale."
			},
			{
				title: 'Investissement durable',
				text: "Un arbre bien planté augmente la valeur et le confort de votre propriété pour des décennies."
			}
		],
		serviceHref: '/services/plantation',
		ctaLabel: 'Planifier une plantation'
	},
	{
		id: 'urgence',
		title: 'Urgence arbre 24/7 à {city}',
		paragraphs: [
			"Une branche tombée, un arbre penché après une tempête ou un danger imminent à {city}? Arbre Boivin offre un service d'urgence disponible 24 heures sur 24, 7 jours sur 7.",
			"Notre équipe intervient rapidement pour sécuriser votre propriété et éliminer les risques. Appelez le 514-922-5807 pour une urgence arboricole à {city} et dans la région de {zone}.",
			"Ne prenez pas de risques avec un arbre instable — contactez des professionnels certifiés et assurés."
		],
		benefits: [
			{
				title: 'Disponibilité 24/7',
				text: "Intervention rapide jour et nuit pour les situations dangereuses à {city} et environs."
			},
			{
				title: 'Équipe équipée et assurée',
				text: "Assurance responsabilité 2 000 000 $ et élagueurs certifiés pour des urgences traitées en toute sécurité."
			},
			{
				title: 'Sécurisation immédiate',
				text: "Démontage, élagage d'urgence ou abattage selon la situation pour protéger votre famille et vos biens."
			}
		],
		serviceHref: '/services/urgence',
		ctaLabel: 'Appeler pour une urgence'
	}
];

export function getRegionPageContent(region: Region): RegionPageContent {
	const { name: city, zone } = region;

	const sections: RegionSection[] = sectionTemplates.map((tpl) => ({
		id: tpl.id,
		title: fill(tpl.title, city, zone),
		paragraphs: tpl.paragraphs.map((p) => fill(p, city, zone)),
		benefits: tpl.benefits.map((b) => ({
			title: fill(b.title, city, zone),
			text: fill(b.text, city, zone)
		})),
		serviceHref: tpl.serviceHref,
		ctaLabel: tpl.ctaLabel
	}));

	return {
		region,
		seo: {
			title: `Élagage ${city} — Abattage d'arbre — Émondeur`,
			description: `Services d'arbre à ${city} : élagage, abattage, essouchement, haubanage et urgences 24/7. Élagueur certifié, assurance 2 000 000 $. Estimation gratuite — Arbre Boivin, région de ${zone}.`
		},
		heroTitle: `Élagage ${city} — Abattage d'arbre`,
		heroSubtitle: `Émondeur certifié — Région de ${zone}`,
		intro: `L'arboriculture à ${city}, c'est une affaire de certification et de sécurité. Les travaux dans les arbres exigent une formation rigoureuse pour préserver la santé de vos arbres et celle des personnes autour. Arbre Boivin dessert ${city} et la région de ${zone} avec des élagueurs certifiés, une assurance responsabilité de 2 000 000 $ et des estimations gratuites. Déléguez vos travaux arboricoles à des professionnels dès maintenant.`,
		sections
	};
}
