/**
 * Contenu de la page d'accueil — modifier ici, jamais dans les composants.
 * TODO: Assigner les bonnes photos à chaque service une fois validé avec le client.
 */

import { site } from '$lib/content/site';

export const homePage = {
	seo: {
		title: "Arbre Boivin — Service d'arbre professionnel et sécuritaire",
		description:
			"Service d'arbre professionnel et sécuritaire à Montréal. Élagage, abattage, plantation, haubanage, essouchement et urgences 24/7. Élagueur certifié. Estimation gratuite."
	},

	hero: {
		kicker: `ARBRE BOIVIN • ${site.phone} • ESTIMATION GRATUITE`,
		heading: "SERVICES D'ARBRES\nPROFESSIONNELS ET SÉCURITAIRES",
		subheading:
			"Les arbres apportent d'innombrables bénéfices dans nos quotidiens. Ils procurent l'ombre, purifient l'air et ajoutent une touche d'esthétisme à une propriété. Dès l'estimation, un arboriste-expert d'Arbre Boivin vous conseillera quant aux gestes à poser sur vos arbres.",
		phone: site.phone,
		phoneHref: site.phoneHref,
		cta: { label: 'Soumission gratuite', href: '/contact' },
		ctaSecondary: { label: 'Voir nos services', href: '/services' },
		image: '/photo/image00012.jpeg',
		imageAlt: "Élagueur certifié Arbre Boivin en action au sommet d'un arbre",
		badges: [
			{ label: 'Assurance responsabilité 2 000 000 $' },
			{ label: 'Élagueur certifié' }
		],
		videoSrc: 'https://res.cloudinary.com/dumhtwfqn/video/upload/v1772349272/tz5xfe1ucb0ptos5tjdw.mp4',
		slideshow: [
			{ src: '/photo/image00001.jpeg', alt: 'Élagueur certifié avec casque et tronçonneuse orange' },
			{ src: '/photo/image00033.jpeg', alt: 'Arboriste en hauteur sur corde dans un arbre' },
			{ src: '/photo/image00026.jpeg', alt: "Abattage d'un arbre — éclats de bois en action" },
			{ src: '/photo/image00032.jpeg', alt: 'Élagueur montant à un arbre avec équipement complet', position: 'center 20%' },
			{ src: '/photo/image00028.jpeg', alt: "Avant / après — travaux d'abattage Arbre Boivin" },
			{ src: '/photo/image00007.jpeg', alt: 'Camion et déchiqueteuse Arbre Boivin — Soumission gratuite' },
			{ src: '/photo/image00016.jpeg', alt: 'Arboriste certifié préparant ses cordes au sol' },
			{ src: '/photo/image00014.jpeg', alt: 'Lancer de corde — technique arboricole professionnelle' },
			{ src: '/photo/image00005.jpeg', alt: "Vue en contre-plongée d'un grand arbre — haubanage", position: 'center top' },
			{ src: '/photo/image00006.jpeg', alt: 'Câble de haubanage installé sur un érable', position: 'center 30%' }
		]
	},

	servicesGrid: {
		heading: 'Services offerts',
		items: [
			{
				title: 'Élagage',
				slug: 'elagage',
				image: '/photo/image00001.jpeg',
				imageAlt: "Élagueur certifié à la tronçonneuse dans un arbre",
				imagePosition: 'center center',
				href: '/services/elagage'
			},
			{
				title: "Abattage d'arbre",
				slug: 'abattage',
				image: '/photo/image00010.jpeg',
				imageAlt: "Arborist au sommet d'un tronc d'arbre en abattage",
				imagePosition: 'center 30%',
				href: '/services/abattage'
			},
			{
				title: "Plantation d'arbre",
				slug: 'plantation',
				image: '/photo/plantation-arbres.png',
				imageAlt: "Jeunes arbres en motte prêts pour la plantation — Arbre Boivin",
				imagePosition: 'center 55%',
				href: '/services/plantation'
			},
			{
				title: 'Haubanage',
				slug: 'haubanage',
				image: '/photo/image00006.jpeg',
				imageAlt: 'Câble de haubanage installé sur un érable — Arbre Boivin',
				imagePosition: 'center 50%',
				href: '/services/haubanage'
			},
			{
				title: 'Essouchement',
				slug: 'essouchement',
				image: '/photo/image00022.jpeg',
				imageAlt: "Souches et billes de bois après essouchement — Arbre Boivin",
				imagePosition: 'center 50%',
				href: '/services/essouchement'
			},
			{
				title: 'Urgence 24/7',
				slug: 'urgence',
				image: '/photo/image00028.jpeg',
				imageAlt: "Avant / après urgence arbre — dégâts de tempête réparés par Arbre Boivin",
				imagePosition: 'center center',
				href: '/services/urgence'
			},
			{
				title: 'Déchiquetage de branches',
				slug: 'dechiquetage',
				image: '/photo/image00007.jpeg',
				imageAlt: "Camion et déchiqueteuse verts Arbre Boivin",
				imagePosition: 'left center',
				href: '/services/dechiquetage'
			},
			{
				title: 'Déboisement et défrichement',
				slug: 'deboisement',
				image: '/photo/image00002.jpeg',
				imageAlt: "Arborist coupant un grand tronc en milieu urbain — déboisement",
				imagePosition: 'center center',
				href: '/services/deboisement'
			}
		]
	},

	longText: {
		heading: "Services d'arbre professionnels",
		paragraphs: [
			"L'entretien régulier de l'arbre constitue indéniablement un investissement. En effet, lorsqu'elles sont accomplies selon une approche écologique, des pratiques comme l'élagage, l'abattage et la taille de l'arbre assurent non seulement sa pleine croissance, mais aussi sa longévité.",
			"Nous prônons également la taille de l'arbre selon les règles de l'art de formation, basés sur le respect de l'environnement, sont facilement reconnaissables. Dès l'étape de l'estimation, un arboriste-expert d'Arbre Boivin vous conseillera quant aux gestes à poser sur vos arbres. Pour vous offrir une soumission, n'hésitez pas à nous contacter."
		],
		cta: { label: 'ESTIMATION GRATUITE →', href: '/contact' }
	},

	fullWidthCTA: {
		eyebrow: "N'ATTENDEZ PAS POUR DES SERVICES SÉCURITAIRES ET PROFESSIONNELS!",
		cta: { label: 'CLIQUEZ ICI POUR UNE ESTIMATION GRATUITE', href: '/contact' },
		// TODO: Remplacer par une photo de chantier plus représentative si disponible
		image: '/photo/image00008.jpeg',
		imageAlt: 'Équipe Arbre Boivin au travail',
		badges: [
			{ label: 'Assurance responsabilité\n2 000 000 $' },
			{ label: 'Élagueur certifié' }
		]
	}
};
