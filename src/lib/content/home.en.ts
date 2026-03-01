import { site } from '$lib/content/site';

export const homePageEn = {
	seo: {
		title: 'Arbre Boivin — Professional & Safe Tree Services',
		description:
			'Professional and safe tree services in Portneuf, Saint-Raymond, Pont-Rouge and Québec. Pruning, tree removal, planting, cabling, stump grinding and 24/7 emergencies. Certified arborist. Free estimate.'
	},

	hero: {
		kicker: `ARBRE BOIVIN • ${site.phone} • FREE ESTIMATE`,
		heading: 'PROFESSIONAL &\nSAFE TREE SERVICES',
		subheading:
			'Trees provide countless benefits in our daily lives. They provide shade, purify the air and add aesthetic value to a property. From the estimate, an expert arborist from Arbre Boivin will advise you on the right actions to take for your trees.',
		phone: site.phone,
		phoneHref: site.phoneHref,
		cta: { label: 'Free estimate', href: '/en/contact' },
		ctaSecondary: { label: 'Our services', href: '/en/services' },
		image: '/photo/image00012.jpeg',
		imageAlt: 'Certified arborist Arbre Boivin in action at the top of a tree',
		badges: [
			{ label: '$2,000,000 liability insurance' },
			{ label: 'Certified arborist' }
		],
		videoSrc: '',
		slideshow: [
			{ src: '/photo/image00001.jpeg', alt: 'Certified arborist with helmet and orange chainsaw' },
			{ src: '/photo/image00033.jpeg', alt: 'Arborist high up on rope in a tree' },
			{ src: '/photo/image00026.jpeg', alt: 'Tree felling — wood chips in action' },
			{ src: '/photo/image00032.jpeg', alt: 'Arborist climbing a tree with full equipment', position: 'center 20%' },
			{ src: '/photo/image00028.jpeg', alt: 'Before / after — Arbre Boivin tree removal work' },
			{ src: '/photo/image00007.jpeg', alt: 'Arbre Boivin truck and chipper — Free estimate' },
			{ src: '/photo/image00016.jpeg', alt: 'Certified arborist preparing ropes on the ground' },
			{ src: '/photo/image00014.jpeg', alt: 'Rope throw — professional arboricultural technique' },
			{ src: '/photo/image00005.jpeg', alt: 'Low angle view of a large tree — cabling' },
			{ src: '/photo/image00006.jpeg', alt: 'Support cable installed on a maple tree' }
		]
	},

	servicesGrid: {
		heading: 'Our Services',
		items: [
			{
				title: 'Tree Pruning',
				slug: 'elagage',
				image: '/photo/image00001.jpeg',
				imageAlt: 'Certified arborist with chainsaw in a tree',
				imagePosition: 'center center',
				href: '/en/services/elagage'
			},
			{
				title: 'Tree Removal',
				slug: 'abattage',
				image: '/photo/image00010.jpeg',
				imageAlt: 'Arborist at the top of a tree trunk during removal',
				imagePosition: 'center top',
				href: '/en/services/abattage'
			},
			{
				title: 'Tree Planting',
				slug: 'plantation',
				image: '/photo/image00029.jpeg',
				imageAlt: 'Low angle view of large healthy green trees',
				imagePosition: 'center center',
				href: '/en/services/plantation'
			},
			{
				title: 'Tree Cabling',
				slug: 'haubanage',
				image: '/photo/image00005.jpeg',
				imageAlt: 'Low angle view of a support cable installed in a tree',
				imagePosition: 'center center',
				href: '/en/services/haubanage'
			},
			{
				title: 'Stump Grinding',
				slug: 'essouchement',
				image: '/photo/image00022.jpeg',
				imageAlt: 'Stumps and wood logs after stump grinding — Arbre Boivin',
				imagePosition: 'center 40%',
				href: '/en/services/essouchement'
			},
			{
				title: '24/7 Emergency',
				slug: 'urgence',
				image: '/photo/image00028.jpeg',
				imageAlt: 'Before / after storm tree damage repaired by Arbre Boivin',
				imagePosition: 'center center',
				href: '/en/services/urgence'
			},
			{
				title: 'Branch Chipping',
				slug: 'dechiquetage',
				image: '/photo/image00007.jpeg',
				imageAlt: 'Arbre Boivin truck and wood chipper',
				imagePosition: 'left center',
				href: '/en/services/dechiquetage'
			},
			{
				title: 'Land Clearing',
				slug: 'deboisement',
				image: '/photo/image00002.jpeg',
				imageAlt: 'Arborist cutting a large trunk in urban area — land clearing',
				imagePosition: 'center center',
				href: '/en/services/deboisement'
			}
		]
	},

	longText: {
		heading: 'Professional Tree Services',
		paragraphs: [
			'Regular tree maintenance is undeniably an investment. When carried out using an ecological approach, practices such as pruning, tree removal and trimming not only ensure the full growth of the tree, but also its longevity.',
			'We advocate tree trimming according to the rules of the art of formation, based on respect for the environment. From the estimation stage, an expert arborist from Arbre Boivin will advise you on the right actions to take for your trees. To get a quote, feel free to contact us.'
		],
		cta: { label: 'FREE ESTIMATE →', href: '/en/contact' }
	},

	fullWidthCTA: {
		eyebrow: "DON'T WAIT FOR SAFE AND PROFESSIONAL SERVICES!",
		cta: { label: 'CLICK HERE FOR A FREE ESTIMATE', href: '/en/contact' },
		image: '/photo/image00008.jpeg',
		imageAlt: 'Arbre Boivin team at work',
		badges: [
			{ label: '$2,000,000\nliability insurance' },
			{ label: 'Certified arborist' }
		]
	}
};
