/**
 * Contenu détaillé de chaque page de service.
 * Modifier ici pour mettre à jour descriptions, photos et SEO.
 */

export interface ServiceGalleryItem {
	src: string;
	alt: string;
	position?: string;
}

export interface ServiceData {
	slug: string;
	title: string;
	seo: { title: string; description: string };
	hero: { image: string; imagePosition: string };
	intro: string;
	paragraphs: string[];
	details: string[];
	gallery: ServiceGalleryItem[];
}

export const services: ServiceData[] = [
	{
		slug: 'elagage',
		title: 'Élagage',
		seo: {
			title: 'Élagage d\'arbre professionnel',
			description:
				'Élagage et taille d\'arbres selon une approche écologique à Montréal. Élagueur certifié. Taille de formation, sanitaire et de dégagement. Estimation gratuite.'
		},
		hero: { image: '/photo/image00001.jpeg', imagePosition: 'center center' },
		intro:
			"L'élagage est une intervention essentielle pour assurer la santé, la sécurité et la beauté de vos arbres. Réalisé par un élagueur certifié, il prolonge la vie de l'arbre tout en protégeant votre propriété.",
		paragraphs: [
			"L'entretien régulier de l'arbre constitue indéniablement un investissement. Lorsqu'elles sont accomplies selon une approche écologique, des pratiques comme l'élagage et la taille assurent non seulement la pleine croissance de l'arbre, mais aussi sa longévité.",
			"Chez Arbre Boivin, nous prônons la taille selon les règles de l'art de formation, basés sur le respect de l'environnement. Dès l'étape de l'estimation, un arboriste-expert vous conseillera quant aux gestes à poser sur vos arbres.",
			"Que ce soit pour dégager une branche qui menace votre maison, retirer des branches mortes ou simplement donner une belle forme à votre arbre, notre équipe intervient avec professionnalisme et sécurité."
		],
		details: [
			'Taille de formation — jeunes arbres',
			'Élagage sanitaire — branches mortes ou malades',
			'Élagage de dégagement — câbles, bâtiments, luminaires',
			'Réduction de houppier',
			'Élagage de levée de cime',
			'Approche écologique et respectueuse',
			'Nettoyage complet des résidus inclus'
		],
		gallery: [
			{ src: '/photo/image00001.jpeg', alt: 'Élagueur certifié à la tronçonneuse dans un arbre', position: 'center center' },
			{ src: '/photo/image00019.jpeg', alt: 'Arborist en pleine action d\'élagage dans un arbre', position: 'center center' },
			{ src: '/photo/image00017.jpeg', alt: 'Élagueur certifié taillant des branches d\'arbre en hiver', position: 'center center' },
			{ src: '/photo/image00013.jpeg', alt: 'Arborist au travail dans la canopée d\'un arbre', position: 'center top' }
		]
	},
	{
		slug: 'abattage',
		title: "Abattage d'arbre",
		seo: {
			title: "Abattage d'arbre sécuritaire",
			description:
				"Abattage d'arbre professionnel et sécuritaire à Montréal. Démontage en section, ramassage complet. Intervention pour arbres dangereux. Estimation gratuite."
		},
		hero: { image: '/photo/image00010.jpeg', imagePosition: 'center top' },
		intro:
			"Dans certaines situations, l'abattage d'un arbre devient nécessaire pour protéger votre propriété ou votre sécurité. Notre équipe réalise l'opération avec rigueur, en minimisant les risques et en laissant votre terrain impeccable.",
		paragraphs: [
			"Un arbre peut nécessiter l'abattage lorsqu'il est mort, malade, instable, ou qu'il représente un danger pour votre domicile ou vos voisins. Notre équipe évalue la situation avant d'intervenir pour choisir la technique la plus sécuritaire.",
			"Nous procédons par démontage en section dans les espaces restreints ou par abattage directionnel dans les espaces dégagés. Chaque intervention est planifiée pour éviter tout dommage aux structures environnantes.",
			"Tout le bois abattu, les branches et les résidus sont ramassés et évacués. Vous récupérez un terrain propre et prêt pour la suite — qu'il s'agisse d'un essouchement, d'une plantation ou d'un autre aménagement."
		],
		details: [
			'Abattage directionnel sécuritaire',
			'Démontage en section pour espaces restreints',
			'Ramassage des branches, billes et bûches',
			'Nettoyage complet du chantier',
			'Intervention pour arbres dangereux ou malades',
			'Coordination avec l\'essouchement si souhaité'
		],
		gallery: [
			{ src: '/photo/image00010.jpeg', alt: 'Arborist au sommet d\'un tronc en cours d\'abattage', position: 'center top' },
			{ src: '/photo/image00011.jpeg', alt: 'Arborist tronçonnant le sommet d\'un arbre — abattage', position: 'center top' },
			{ src: '/photo/image00002.jpeg', alt: 'Démontage d\'un tronc en milieu urbain résidentiel', position: 'center center' },
			{ src: '/photo/image00003.jpeg', alt: 'Coupe à la base d\'un grand tronc — abattage final', position: 'center center' }
		]
	},
	{
		slug: 'plantation',
		title: "Plantation d'arbre",
		seo: {
			title: "Plantation d'arbre — Arbre Boivin",
			description:
				"Plantation d'arbres professionnelle à Montréal. Conseil sur le choix des essences, plantation selon les règles de l'art. Valorisez votre propriété. Estimation gratuite."
		},
		hero: { image: '/photo/image00029.jpeg', imagePosition: 'center center' },
		intro:
			"Planter un arbre, c'est investir dans la beauté, l'ombre et la valeur de votre propriété pour des décennies. Nous vous accompagnons dans le choix des essences et réalisons la plantation dans les règles de l'art.",
		paragraphs: [
			"Le choix de l'essence d'arbre est crucial pour assurer sa survie et sa croissance. Nos experts tiennent compte de la nature du sol, de l'ensoleillement, de l'espace disponible et de votre région climatique pour vous recommander les meilleures options.",
			"Une plantation bien réalisée, c'est un trou aux bonnes dimensions, un amendement du sol si nécessaire, une mise en place soignée du système racinaire et un arrosage d'installation adéquat. Ces étapes garantissent une reprise optimale.",
			"Les arbres apportent d'innombrables bénéfices : ombre, purification de l'air, réduction des îlots de chaleur, habitat pour la faune et valeur esthétique et financière de votre propriété."
		],
		details: [
			'Conseil personnalisé sur le choix des essences',
			'Plantation selon les règles de l\'art',
			'Amendement du sol si requis',
			'Arbres adaptés à votre microclimat',
			'Valorisation durable de votre propriété',
			'Suivi post-plantation disponible'
		],
		gallery: [
			{ src: '/photo/image00029.jpeg', alt: 'Vue contre-plongée de grands arbres matures en pleine santé', position: 'center center' },
			{ src: '/photo/image00009.jpeg', alt: 'Préparation pour travaux arboricoles sur grande propriété', position: 'center center' }
		]
	},
	{
		slug: 'haubanage',
		title: 'Haubanage',
		seo: {
			title: 'Haubanage d\'arbre professionnel',
			description:
				'Haubanage et câblage d\'arbres à Montréal. Installation de câbles de soutien pour consolider les fourches faibles et prévenir les bris. Estimation gratuite.'
		},
		hero: { image: '/photo/image00005.jpeg', imagePosition: 'center center' },
		intro:
			"Le haubanage est une technique préventive qui permet de prolonger la vie d'un arbre en consolidant ses fourches faibles ou ses branches lourdes, avant qu'un bris ne survienne.",
		paragraphs: [
			"Certains arbres présentent des fourches en V (codominantes) ou des branches particulièrement lourdes qui sont susceptibles de se briser sous le poids de la neige, du verglas ou lors de vents violents. Le haubanage est la solution recommandée dans ces situations.",
			"Le principe consiste à installer des câbles de soutien en acier à haute résistance entre les branches ou entre une branche et le tronc, réduisant ainsi les contraintes mécaniques sur les points faibles de l'arbre.",
			"Bien réalisé par un arborist certifié, le haubanage est pratiquement invisible et permet à l'arbre de continuer à se développer naturellement tout en étant protégé. Une évaluation préalable de la structure de l'arbre est toujours effectuée."
		],
		details: [
			'Câbles de soutien en acier haute résistance',
			'Consolidation des fourches codominantes (en V)',
			'Protection des branches lourdes et vulnérables',
			'Prévention des bris lors de tempêtes',
			'Évaluation structurelle préalable',
			'Installation discrète et durable'
		],
		gallery: [
			{ src: '/photo/image00005.jpeg', alt: 'Vue contre-plongée montrant un câble de haubanage dans un arbre', position: 'center center' },
			{ src: '/photo/image00004.jpeg', alt: 'Câble et sangle de haubanage installés sur un tronc d\'érable', position: 'center center' },
			{ src: '/photo/image00006.jpeg', alt: 'Câble tressé de haubanage en vue rapprochée dans un arbre', position: 'center center' }
		]
	},
	{
		slug: 'essouchement',
		title: 'Essouchement',
		seo: {
			title: 'Essouchement de souche — Arbre Boivin',
			description:
				"Essouchement et enlèvement de souches d'arbres à Montréal. Broyage ou extraction complète. Libérez votre terrain. Estimation gratuite."
		},
		hero: { image: '/photo/image00022.jpeg', imagePosition: 'center 40%' },
		intro:
			"Après l'abattage d'un arbre, la souche qui reste peut causer plusieurs problèmes. L'essouchement est l'opération qui permet d'éliminer complètement la souche et d'assainir votre terrain.",
		paragraphs: [
			"Une souche laissée en place peut engendrer des repousses indésirables, pourrir lentement en devenant un nid à insectes et champignons, et représenter un obstacle dans votre aménagement paysager. L'essouchement règle tous ces problèmes définitivement.",
			"Selon la taille et l'emplacement de la souche, nous utilisons un broyeur de souches (pour les cas standards) ou une excavation complète (pour les grosses souches ou celles proches des fondations). Dans les deux cas, le résultat est un terrain libéré et prêt à accueillir un nouvel aménagement.",
			"L'essouchement est souvent réalisé dans la continuité d'un abattage, ce qui permet d'optimiser les coûts et le déplacement de l'équipe. Nous pouvons aussi intervenir sur des souches préexistantes."
		],
		details: [
			'Broyage de souche jusqu\'à 30 cm sous terre',
			'Excavation pour grosses souches ou près des fondations',
			'Élimination des risques de repousse',
			'Assainissement du sol',
			'Terrain libéré et prêt à aménager',
			'Service combiné avec l\'abattage possible'
		],
		gallery: [
			{ src: '/photo/image00022.jpeg', alt: 'Souches coupées et billes de bois après abattage et essouchement', position: 'center 40%' },
			{ src: '/photo/image00021.jpeg', alt: 'Deux troncs d\'arbres réduits à des souches dans une cour résidentielle', position: 'center center' }
		]
	},
	{
		slug: 'urgence',
		title: 'Urgence 24/7',
		seo: {
			title: 'Urgence arbre 24/7 — Arbre Boivin',
			description:
				"Service d'urgence arbre 24h/7j à Montréal. Arbres tombés, branches dangereuses après tempête. Intervention rapide. Appelez le 514-922-5807."
		},
		hero: { image: '/photo/image00028.jpeg', imagePosition: 'center center' },
		intro:
			"Les urgences arboricoles n'attendent pas. Jour ou nuit, weekends et jours fériés, notre équipe est disponible pour intervenir rapidement et sécuriser votre propriété.",
		paragraphs: [
			"Une tempête peut abattre un arbre sur votre maison, briser une branche maîtresse au-dessus de votre terrasse ou déstabiliser un arbre de façon dangereuse. Dans ces situations, chaque heure compte.",
			"Notre service d'urgence 24/7 vous garantit une réponse rapide, peu importe l'heure. Notre équipe arrive équipée pour sécuriser la zone en premier lieu, puis pour procéder aux travaux nécessaires — qu'il s'agisse de retirer un arbre tombé, de sectionner une branche dangereuse ou de stabiliser un arbre compromis.",
			"Nous intervenons sur tout le territoire de Montréal et les environs. N'hésitez pas à nous appeler directement — notre ligne d'urgence est disponible en tout temps."
		],
		details: [
			'Disponible 24 heures, 7 jours sur 7',
			'Arbres tombés sur maisons, clôtures ou véhicules',
			'Branches dangereuses après tempête ou verglas',
			'Sécurisation rapide de la zone',
			'Intervention sur tout le territoire de Montréal',
			'Réponse téléphonique immédiate'
		],
		gallery: [
			{ src: '/photo/image00028.jpeg', alt: 'Avant / après — arbre brisé par tempête réparé par Arbre Boivin', position: 'center center' },
			{ src: '/photo/image00026.jpeg', alt: 'Arborist coupant une branche maîtresse brisée en urgence', position: 'center top' },
			{ src: '/photo/image00030.jpeg', alt: 'Intervention arboricole d\'urgence — arborist en hauteur', position: 'center center' }
		]
	},
	{
		slug: 'dechiquetage',
		title: 'Déchiquetage de branches',
		seo: {
			title: 'Déchiquetage de branches — Arbre Boivin',
			description:
				'Déchiquetage et broyage de branches à Montréal. Transformation des résidus en copeaux réutilisables. Chantier propre et sans débris. Estimation gratuite.'
		},
		hero: { image: '/photo/image00007.jpeg', imagePosition: 'left center' },
		intro:
			"Après un élagage ou un abattage, les branches et résidus peuvent représenter un volume important. Notre service de déchiquetage transforme ces matières en copeaux propres et valorisables.",
		paragraphs: [
			"Plutôt que d'entasser les branches sur le trottoir en attendant la collecte municipale, notre déchiqueteuse professionnelle transforme tout le volume en quelques minutes. Le résultat est un chantier propre dès la fin des travaux.",
			"Les copeaux obtenus peuvent servir de paillis dans vos plates-bandes ou bacs à fleurs, contribuant ainsi à la rétention d'humidité et à la limitation des mauvaises herbes. Sur demande, nous pouvons les laisser sur place pour votre usage.",
			"Le déchiquetage est généralement inclus dans nos forfaits d'élagage et d'abattage, mais peut aussi être commandé séparément si vous avez déjà des résidus à traiter."
		],
		details: [
			'Déchiquetage sur place — résultats immédiats',
			'Copeaux fins réutilisables en paillis',
			'Chantier propre et sans encombrement',
			'Disponible en complément de tout service',
			'Souvent inclus dans les forfaits élagage / abattage',
			'Service autonome sur demande'
		],
		gallery: [
			{ src: '/photo/image00007.jpeg', alt: 'Camion benne et déchiqueteuse verts Arbre Boivin en opération', position: 'left center' }
		]
	},
	{
		slug: 'deboisement',
		title: 'Déboisement et défrichement',
		seo: {
			title: 'Déboisement et défrichement — Arbre Boivin',
			description:
				'Déboisement et défrichement de terrains à Montréal. Nettoyage de terrains boisés pour construction ou aménagement. Équipe professionnelle. Estimation gratuite.'
		},
		hero: { image: '/photo/image00002.jpeg', imagePosition: 'center center' },
		intro:
			"Vous avez un terrain boisé à nettoyer pour un projet de construction ou d'aménagement? Notre équipe se charge du déboisement complet, de l'abattage à l'évacuation des résidus.",
		paragraphs: [
			"Le déboisement consiste à couper et retirer l'ensemble des arbres et arbustes d'un terrain pour le préparer à une nouvelle utilisation. Le défrichement englobe également l'enlèvement des souches, racines et végétation envahissante.",
			"Chaque projet de déboisement est planifié en fonction des contraintes du site : accès au terrain, présence de structures à protéger, quantité de matériel à évacuer. Notre équipe dispose de l'équipement adapté pour tous les types de terrains.",
			"À l'issue des travaux, vous disposez d'un terrain propre, dégagé et prêt à accueillir votre projet. L'évacuation de tous les résidus est assurée par nos soins."
		],
		details: [
			'Déboisement complet de terrains résidentiels ou commerciaux',
			'Défrichement de végétation envahissante',
			'Préparation de terrain pour construction',
			'Abattage et évacuation des arbres',
			'Essouchement des souches sur demande',
			'Nettoyage et évacuation complète des résidus'
		],
		gallery: [
			{ src: '/photo/image00002.jpeg', alt: 'Arborist sectionnant un grand tronc en milieu urbain résidentiel', position: 'center center' },
			{ src: '/photo/image00003.jpeg', alt: 'Coupe à la base d\'un tronc — fin de déboisement résidentiel', position: 'center center' }
		]
	}
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
	return services.find((s) => s.slug === slug);
}
