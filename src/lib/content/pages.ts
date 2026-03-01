/**
 * Contenu de toutes les pages — modifier ici, jamais dans les composants.
 */

// ─── PAGE D'ACCUEIL ───────────────────────────────────────────────────────────

export const homePage = {
	seo: {
		title: 'Arbre Boivin — Service d\'arbre professionnel et sécuritaire',
		description:
			'Service d\'arbre professionnel et sécuritaire à Montréal. Élagage, abattage, plantation, haubanage, essouchement et urgences 24/7. Élagueur certifié. Estimation gratuite.'
	},

	hero: {
		badge: 'Élagueur certifié · Assurance 2 000 000 $',
		heading: 'Service d\'arbre\nprofessionnel et sécuritaire',
		subheading:
			'Les arbres apportent d\'innombrables bénéfices dans nos quotidiens. Ils procurent l\'ombre dont nous avons besoin pour nous rafraîchir, purifient l\'air et ajoutent une touche d\'esthétisme à une propriété. Fiez-vous à une parfaite maîtrise technique alliée à une grande connaissance en soins aux arbres.',
		cta: { label: 'Estimation gratuite', href: '/contact' },
		ctaSecondary: { label: 'Nos services', href: '/services' },
		image: '/photo/image00012.jpeg',
		imageAlt: 'Élagueur certifié Arbre Boivin en action au sommet d\'un arbre'
	},

	services: {
		badge: 'Services d\'arbre',
		heading: 'Services offerts',
		subheading:
			'De l\'élagage délicat à l\'abattage d\'urgence, notre équipe certifiée prend en charge tous vos besoins arboricoles de façon professionnelle et sécuritaire.',
		items: [
			{
				icon: '✂️',
				title: 'Élagage d\'arbre',
				description:
					'Taille et élagage de vos arbres selon une approche écologique pour assurer leur pleine croissance et leur longévité.'
			},
			{
				icon: '🪓',
				title: 'Abattage d\'arbre',
				description:
					'Abattage sécuritaire avec ramassage des branches et des bûches. Intervention professionnelle pour les arbres dangereux ou à risque.'
			},
			{
				icon: '🌱',
				title: 'Plantation d\'arbre',
				description:
					'Sélection et plantation d\'arbres adaptés à votre environnement pour valoriser votre propriété et enrichir votre espace vert.'
			},
			{
				icon: '🔗',
				title: 'Haubanage',
				description:
					'Installation de câbles de soutien pour consolider les arbres à fourche faible ou aux branches lourdes et prévenir les bris.'
			},
			{
				icon: '⚡',
				title: 'Urgence 24/7',
				description:
					'Intervention rapide en tout temps pour les arbres tombés, branches dangereuses après tempête ou toute situation d\'urgence arboricole.'
			},
			{
				icon: '🌳',
				title: 'Essouchement',
				description:
					'Enlèvement complet des souches après abattage pour libérer votre terrain et éliminer tout risque de repousse ou de pourriture.'
			},
			{
				icon: '🔥',
				title: 'Déchiquetage de branches',
				description:
					'Transformation de toutes les branches et résidus en copeaux fins. Service propre et rapide pour un chantier sans débris.'
			},
			{
				icon: '🚜',
				title: 'Déboisement / Défrichement',
				description:
					'Nettoyage complet de terrains boisés ou envahis par la végétation pour vos projets de construction ou d\'aménagement.'
			}
		]
	},

	whyUs: {
		badge: 'Pourquoi nous choisir',
		heading: 'Professionnel, sécuritaire et certifié',
		subheading: 'Dès l\'étape de l\'estimation, un arboriste-expert d\'Arbre Boivin vous conseillera quant aux gestes à poser sur vos arbres.',
		points: [
			{ label: 'Assurance responsabilité 2 000 000 $ avec Intact', icon: '🛡️' },
			{ label: 'Élagueur certifié', icon: '✅' },
			{ label: 'Formation en élagage', icon: '🎓' },
			{ label: 'Urgences 24/7 disponibles', icon: '⚡' },
			{ label: 'Estimation gratuite et sans engagement', icon: '📋' },
			{ label: 'Ramassage complet des débris inclus', icon: '✨' }
		],
		image: '/photo/image00008.jpeg',
		imageAlt: 'Camion et broyeur Arbre Boivin — équipement professionnel'
	},

	cta: {
		heading: 'N\'attendez pas pour des services sécuritaires et professionnels',
		subheading:
			'Contactez-nous dès aujourd\'hui pour une estimation gratuite. Nous intervenons rapidement partout à Montréal et environs.',
		cta: { label: 'Estimation gratuite', href: '/contact' },
		ctaSecondary: { label: 'Voir nos services', href: '/services' }
	}
};

// ─── PAGE SERVICES D'ARBRE ────────────────────────────────────────────────────

export const servicesPage = {
	seo: {
		title: 'Services d\'arbre',
		description:
			'Élagage, abattage, plantation, haubanage, essouchement, déchiquetage et déboisement à Montréal. Élagueur certifié. Estimation gratuite.'
	},
	heading: 'Services d\'arbre professionnels',
	subheading:
		'Chaque service est réalisé selon une approche écologique par un élagueur certifié, avec le matériel professionnel adéquat et dans le respect de votre propriété.',
	services: [
		{
			title: 'Élagage d\'arbre',
			slug: 'elagage',
			description:
				'L\'entretien régulier de l\'arbre constitue indéniablement un investissement. Lorsqu\'elles sont accomplies selon une approche écologique, des pratiques comme l\'élagage et la taille de l\'arbre assurent non seulement sa pleine croissance, mais aussi sa longévité.',
			details: [
				'Taille de formation (jeunes arbres)',
				'Élagage sanitaire (branches mortes ou malades)',
				'Élagage de dégagement (câbles, bâtiments)',
				'Réduction de houppier',
				'Approche écologique et respectueuse'
			],
			image: '/photo/image00001.jpeg',
			imageAlt: 'Élagueur certifié Arbre Boivin effectuant un élagage avec tronçonneuse'
		},
		{
			title: 'Abattage d\'arbre',
			slug: 'abattage',
			description:
				'Dans certaines situations, nous devons procéder à l\'abattage d\'arbre car l\'arbre peut être dangereux pour votre domicile ou pour vous. Notre équipe effectue l\'abattage de façon sécuritaire avec ramassage complet des branches et des bûches.',
			details: [
				'Abattage directionnel sécuritaire',
				'Démontage en section (espaces restreints)',
				'Ramassage des branches et des bûches',
				'Nettoyage complet du chantier',
				'Intervention pour arbres dangereux'
			],
			image: '/photo/image00010.jpeg',
			imageAlt: 'Abattage d\'arbre en section par l\'équipe Arbre Boivin'
		},
		{
			title: 'Plantation d\'arbre',
			slug: 'plantation',
			description:
				'Nous vous conseillons dans le choix des essences adaptées à votre terrain et à votre région, et procédons à la plantation selon les règles de l\'art pour garantir une croissance optimale.',
			details: [
				'Conseil sur le choix des essences',
				'Plantation selon les règles de l\'art',
				'Arbres adaptés à votre environnement',
				'Valorisation de votre propriété'
			],
			image: '/photo/image00009.jpeg',
			imageAlt: 'Travaux arboricoles sur une belle propriété résidentielle'
		},
		{
			title: 'Haubanage',
			slug: 'haubanage',
			description:
				'Le haubanage est une technique de consolidation qui consiste à installer des câbles de soutien entre les branches ou la tige principale d\'un arbre à fourche faible ou aux branches lourdes afin de prévenir les bris et les chutes.',
			details: [
				'Câbles de soutien professionnels',
				'Consolidation des fourches faibles',
				'Prévention des bris de branches',
				'Évaluation préalable de la structure'
			],
			image: '/photo/image00004.jpeg',
			imageAlt: 'Câble de haubanage installé sur un arbre par Arbre Boivin'
		},
		{
			title: 'Essouchement',
			slug: 'essouchement',
			description:
				'Après l\'abattage d\'un arbre, la souche restante peut être source de problèmes (repousse, pourriture, insectes). Nous procédons à l\'enlèvement complet de la souche pour libérer votre terrain.',
			details: [
				'Enlèvement complet de la souche',
				'Broyage ou extraction selon le cas',
				'Libération totale du terrain',
				'Élimination des risques de repousse'
			],
			image: '/photo/image00022.jpeg',
			imageAlt: 'Résultat d\'abattage avec bûches et troncs — essouchement Arbre Boivin'
		},
		{
			title: 'Déchiquetage de branches',
			slug: 'dechiquetage',
			description:
				'Transformation de toutes les branches et résidus issus de nos travaux en copeaux fins réutilisables pour vos plates-bandes ou bacs à fleurs. Service propre et rapide.',
			details: [
				'Déchiquetage sur place',
				'Copeaux réutilisables en paillis',
				'Chantier propre et sans débris',
				'Disponible en complément de tout service'
			],
			image: '/photo/image00007.jpeg',
			imageAlt: 'Camion et broyeur Arbre Boivin pour le déchiquetage de branches'
		},
		{
			title: 'Déboisement / Défrichement',
			slug: 'deboisement',
			description:
				'Nettoyage complet de terrains boisés ou envahis par la végétation pour vos projets de construction, d\'aménagement paysager ou simplement pour récupérer l\'usage de votre terrain.',
			details: [
				'Déboisement de terrains boisés',
				'Défrichement de végétation envahissante',
				'Préparation pour projets de construction',
				'Évacuation complète des résidus'
			],
			image: '/photo/image00027.jpeg',
			imageAlt: 'Équipe Arbre Boivin effectuant des travaux en milieu urbain'
		},
		{
			title: 'Urgence 24/7',
			slug: 'urgence',
			description:
				'Disponibles en tout temps pour les situations d\'urgence arboricole. Un arbre tombé sur votre maison, une branche menaçante après une tempête — nous intervenons rapidement.',
			details: [
				'Disponible 24 heures, 7 jours sur 7',
				'Arbres tombés sur structures',
				'Branches dangereuses après tempête',
				'Réponse rapide sur tout le territoire'
			],
			image: '/photo/image00030.jpeg',
			imageAlt: 'Arboriculteur Arbre Boivin en intervention d\'urgence'
		}
	]
};

// ─── PAGE AUTRES SERVICES ─────────────────────────────────────────────────────

export const autresServicesPage = {
	seo: {
		title: 'Autres services',
		description:
			'Installation de filet suspendu, déneigement de toiture, nettoyage de gouttières et plus. Arbre Boivin, votre partenaire pour l\'entretien extérieur.'
	},
	heading: 'Autres services',
	subheading: 'En plus de nos services arboricoles, nous offrons d\'autres services d\'entretien extérieur.',
	services: [
		{
			slug: 'filet-suspendu',
			icon: '🕸️',
			title: 'Installation de filet suspendu',
			description: 'Installation professionnelle de filets suspendus pour créer des espaces de détente uniques en plein air ou à l\'intérieur.',
			imagePlaceholder: 'Photo filet suspendu — À remplacer',
			seo: {
				title: 'Installation de filet suspendu dans les arbres — Arbre Boivin',
				description: 'Installation sur mesure de filets suspendus en plein air ou en intérieur à Montréal. Espaces de détente uniques. Estimation gratuite.'
			},
			intro: 'Nous proposons des installations sur mesure de filets suspendus, que ce soit en plein air ou dans des espaces intérieurs de votre maison.',
			paragraphs: [],
			details: [
				'Installation sur mesure',
				'Plein air et intérieur',
				'Espaces de détente et jeux',
				'Matériaux résistants et durables',
				'Résidentiel et commercial'
			],
			contentBlocks: [
				{
					image: '/photo/filet-1.png',
					imageAlt: 'Filet suspendu installé dans les arbres',
					imageRight: true,
					text: 'Nous proposons des installations sur mesure de filets suspendus, que ce soit en plein air ou dans des espaces intérieurs de votre maison. Que vous recherchiez une solution de détente originale en plein cœur de la nature ou à l\'intérieur, nos filets suspendus créent des lieux de relaxation et de convivialité uniques.'
				},
				{
					image: '/photo/filet-2.png',
					imageAlt: 'Filet suspendu dans les arbres',
					imageRight: false,
					text: 'L\'installation de filets suspendus dans les arbres offre une expérience unique en plein air. Idéal pour les familles, les enfants et les amateurs de nature, ce type d\'installation transforme votre espace extérieur en lieu de jeux et de détente inégalé.'
				},
				{
					image: '/photo/filet-3.png',
					imageAlt: 'Filet suspendu hamac dans les arbres',
					imageRight: true,
					text: 'L\'installation de filets suspendus dans des espaces intérieurs de la maison peut créer une ambiance unique, confortable et pratique. Ces installations sont souvent utilisées comme des espaces de détente, des aires de jeux, ou des éléments décoratifs.'
				}
			]
		},
		{
			slug: 'deneigement-toiture',
			icon: '🏠',
			title: 'Déneigement de toiture',
			description: 'Déneigement sécuritaire de votre toiture pour prévenir les dommages liés à l\'accumulation de neige et de glace.',
			imagePlaceholder: 'Photo déneigement — À remplacer',
			seo: {
				title: 'Déneigement de toiture — Arbre Boivin',
				description: 'Service de déneigement de toiture à Montréal. Prévention des dommages causés par la neige et la glace. Estimation gratuite.'
			},
			intro: 'L\'accumulation de neige et de glace sur votre toiture peut causer des dommages structurels importants. Arbre Boivin offre un service de déneigement sécuritaire et efficace pour protéger votre propriété.',
			paragraphs: [
				'Une toiture surchargée de neige représente un risque réel : infiltrations d\'eau, déformation des structures, voire effondrement partiel. Un déneigement préventif est essentiel après les grandes chutes de neige.',
				'Notre équipe équipée d\'outils professionnels intervient rapidement pour retirer la neige et briser les accumulations de glace, en prenant soin de ne pas endommager vos bardeaux ou membranes.',
				'Nous respectons les normes de sécurité en travail en hauteur et utilisons des équipements de protection individuels certifiés.'
			],
			details: [
				'Intervention rapide après les tempêtes',
				'Respect des bardeaux et membranes',
				'Équipements de sécurité certifiés',
				'Résidentiel et commercial',
				'Service d\'urgence disponible'
			]
		},
		{
			slug: 'nettoyage-gouttieres',
			icon: '🌧️',
			title: 'Nettoyage de gouttières',
			description: 'Nettoyage complet de vos gouttières pour assurer le bon écoulement des eaux de pluie et prévenir les dommages à votre fondation.',
			imagePlaceholder: 'Photo gouttières — À remplacer',
			seo: {
				title: 'Nettoyage de gouttières — Arbre Boivin',
				description: 'Service de nettoyage de gouttières à Montréal. Prévention des dommages à la fondation. Estimation gratuite.'
			},
			intro: 'Des gouttières obstruées peuvent causer des débordements, infiltrations et dommages coûteux à votre fondation. Arbre Boivin assure le nettoyage complet de vos gouttières et descentes pluviales.',
			paragraphs: [
				'Les feuilles, branches et débris accumulés dans vos gouttières empêchent l\'eau de s\'écouler correctement. Cela peut mener à des débordements qui endommagent la façade, les fondations et l\'aménagement paysager.',
				'Notre service comprend le retrait manuel de tous les débris, le rinçage complet des gouttières et des descentes pluviales, ainsi qu\'une inspection visuelle pour détecter tout dommage ou joint défectueux.',
				'Nous recommandons un nettoyage au printemps et à l\'automne pour maintenir vos gouttières en parfait état de fonctionnement tout au long de l\'année.'
			],
			details: [
				'Retrait complet des débris',
				'Rinçage des gouttières et descentes',
				'Inspection visuelle incluse',
				'Printemps et automne recommandés',
				'Résidentiel et commercial'
			]
		}
	]
};

export function getAutreServiceBySlug(slug: string) {
	return autresServicesPage.services.find((s) => s.slug === slug);
}

// ─── PAGE CONTACT ─────────────────────────────────────────────────────────────

export const contactPage = {
	seo: {
		title: 'Estimation gratuite — Nous joindre',
		description:
			'Demandez votre estimation gratuite. Appelez le 514-922-5807 ou écrivez à ArbreBoivin@gmail.com. Réponse rapide garantie.'
	},
	heading: 'Nous joindre',
	subheading: 'Remplissez le formulaire ou appelez-nous directement au 514-922-5807. Estimation gratuite et sans engagement.',
	formLabels: {
		name: 'Nom complet',
		email: 'Courriel',
		phone: 'Téléphone',
		service: 'Service souhaité',
		message: 'Description des travaux',
		submit: 'Envoyer la demande'
	}
};

// ─── PAGE À PROPOS ────────────────────────────────────────────────────────────

export const aboutPage = {
	seo: {
		title: 'À propos d\'Arbre Boivin',
		description:
			'Arbre Boivin, une entreprise arboricole québécoise avec une passion pour la nature. Élagueur certifié, assurance responsabilité 2 000 000 $.'
	},
	heading: 'À propos d\'Arbre Boivin',
	subheading: 'Une entreprise arboricole québécoise avec une passion pour la nature.',
	story:
		'Arbre Boivin est une entreprise arboricole québécoise fondée avec une passion pour la nature et un engagement envers la qualité. Nous offrons des services d\'entretien d\'arbres professionnels et sécuritaires, allant de l\'élagage à l\'abattage, en passant par la plantation et les urgences 24/7. Dès l\'étape de l\'estimation, un arboriste-expert vous conseillera quant aux gestes à poser sur vos arbres.',
	teamHeading: 'Notre équipe',
	team: [
		{
			name: 'À préciser',
			role: 'Élagueur certifié',
			bio: 'Description du membre de l\'équipe — À remplacer.',
			imagePlaceholder: 'Photo membre équipe'
		}
	]
};
