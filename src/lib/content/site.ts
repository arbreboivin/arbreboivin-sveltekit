/**
 * Informations globales du site — modifier ici pour tout mettre à jour.
 */
export const site = {
	name: 'Arbre Boivin',
	legalName: 'Arbre Boivin',
	tagline: 'Services d\'entretien d\'arbres',
	description:
		'Service d\'arbre professionnel et sécuritaire. Élagage, abattage, plantation, haubanage et urgences 24/7. Élagueur certifié, assurance responsabilité 2 000 000 $.',
	url: 'https://www.arbreboivin.ca',

	// Coordonnées
	phone: '514-922-5807',
	phoneHref: 'tel:+15149225807',
	email: 'ArbreBoivin@gmail.com',
	address: {
		street: 'À préciser',
		city: 'Montréal',
		province: 'QC',
		postalCode: 'À préciser'
	},

	// CTA principal
	cta: {
		label: 'Estimation gratuite',
		href: '/contact'
	},

	// Navigation principale
	nav: [
		{ label: 'Accueil', href: '/' },
		{ label: 'Services', href: '/services' },
		{ label: 'Autres services', href: '/autres-services' },
		{ label: 'Nous joindre', href: '/contact' }
	],

	// Réseaux sociaux
	social: {
		facebook: 'https://www.facebook.com/', // À remplacer par le vrai lien Facebook
		instagram: 'https://www.instagram.com/' // À remplacer par le vrai lien Instagram
	},

	// Heures d'ouverture
	hours: 'Urgences 24/7 disponibles',

	// SEO & OG defaults
	seo: {
		defaultTitle: 'Arbre Boivin — Service d\'arbre professionnel et sécuritaire',
		titleTemplate: '%s | Arbre Boivin',
		defaultDescription:
			'Service d\'arbre professionnel et sécuritaire à Montréal. Élagage, abattage, plantation, haubanage, essouchement et urgences 24/7. Élagueur certifié. Assurance responsabilité 2 000 000 $. Estimation gratuite.'
	}
};

export type SiteConfig = typeof site;
