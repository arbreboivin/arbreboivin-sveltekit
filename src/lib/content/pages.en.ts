import { site } from '$lib/content/site';

export const servicesPageEn = {
	seo: {
		title: 'Tree Services',
		description:
			'Pruning, tree removal, planting, cabling, stump grinding, chipping and land clearing in Portneuf region. Certified arborist. Free estimate.'
	},
	heading: 'Professional Tree Services',
	subheading:
		'Each service is performed using an ecological approach by a certified arborist, with appropriate professional equipment and in respect of your property.',
	services: [
		{
			title: 'Tree Pruning',
			slug: 'elagage',
			description:
				'Regular tree maintenance is undeniably an investment. When carried out using an ecological approach, practices such as pruning and trimming ensure not only the full growth of the tree, but also its longevity.',
			details: [
				'Formative pruning (young trees)',
				'Sanitation pruning (dead or diseased branches)',
				'Clearance pruning (cables, buildings)',
				'Crown reduction',
				'Ecological and respectful approach'
			],
			image: '/photo/image00001.jpeg',
			imageAlt: 'Certified arborist Arbre Boivin pruning with chainsaw'
		},
		{
			title: 'Tree Removal',
			slug: 'abattage',
			description:
				'In some situations, tree removal becomes necessary because the tree may be dangerous for your home or for you. Our team performs the removal safely with complete collection of branches and logs.',
			details: [
				'Safe directional felling',
				'Sectional dismantling (restricted spaces)',
				'Collection of branches and logs',
				'Complete site cleanup',
				'Intervention for dangerous trees'
			],
			image: '/photo/image00010.jpeg',
			imageAlt: 'Sectional tree removal by the Arbre Boivin team'
		},
		{
			title: 'Tree Planting',
			slug: 'plantation',
			description:
				'We advise you on the choice of species adapted to your land and region, and carry out the planting according to best practices to guarantee optimal growth.',
			details: [
				'Advice on species selection',
				'Planting according to best practices',
				'Trees adapted to your environment',
				'Property value enhancement'
			],
			image: '/photo/image00009.jpeg',
			imageAlt: 'Arboricultural work on a beautiful residential property'
		},
		{
			title: 'Tree Cabling',
			slug: 'haubanage',
			description:
				'Cabling is a consolidation technique that involves installing support cables between branches or the main stem of a tree with a weak fork or heavy branches to prevent breakage and falling.',
			details: [
				'Professional support cables',
				'Strengthening of weak forks',
				'Prevention of branch breakage',
				'Preliminary structural assessment'
			],
			image: '/photo/image00004.jpeg',
			imageAlt: 'Support cable installed on a tree by Arbre Boivin'
		},
		{
			title: 'Stump Grinding',
			slug: 'essouchement',
			description:
				'After a tree is removed, the remaining stump can be a source of problems (regrowth, rot, insects). We completely remove the stump to free up your land.',
			details: [
				'Complete stump removal',
				'Grinding or extraction as needed',
				'Complete land liberation',
				'Elimination of regrowth risks'
			],
			image: '/photo/image00022.jpeg',
			imageAlt: 'Removal result with logs and trunks — Arbre Boivin stump grinding'
		},
		{
			title: 'Branch Chipping',
			slug: 'dechiquetage',
			description:
				'Transformation of all branches and debris from our work into fine reusable chips for your flower beds or planters. Clean and fast service.',
			details: [
				'On-site chipping',
				'Reusable chips for mulching',
				'Clean and debris-free worksite',
				'Available as complement to any service'
			],
			image: '/photo/image00007.jpeg',
			imageAlt: 'Arbre Boivin truck and chipper for branch chipping'
		},
		{
			title: 'Land Clearing',
			slug: 'deboisement',
			description:
				'Complete clearing of wooded or vegetation-overgrown land for your construction, landscaping or simply to reclaim use of your land.',
			details: [
				'Clearing of wooded land',
				'Brush clearing of invasive vegetation',
				'Preparation for construction projects',
				'Complete debris removal'
			],
			image: '/photo/image00027.jpeg',
			imageAlt: 'Arbre Boivin team performing work in urban area'
		},
		{
			title: '24/7 Emergency',
			slug: 'urgence',
			description:
				'Available at all times for tree emergencies. A tree fallen on your house, a threatening branch after a storm — we respond quickly.',
			details: [
				'Available 24 hours, 7 days a week',
				'Trees fallen on structures',
				'Dangerous branches after storm',
				'Fast response throughout the region'
			],
			image: '/photo/image00030.jpeg',
			imageAlt: 'Arbre Boivin arborist on emergency intervention'
		}
	]
};

export const autresServicesPageEn = {
	seo: {
		title: 'Other Services',
		description:
			'Suspended net installation, roof snow removal, gutter cleaning and more. Arbre Boivin, your partner for exterior maintenance.'
	},
	heading: 'Other Services',
	subheading: 'In addition to our arboricultural services, we offer other exterior maintenance services.',
	services: [
		{
			slug: 'filet-suspendu',
			icon: '🕸️',
			title: 'Suspended Net Installation',
			description: 'Professional installation of suspended nets to create unique relaxation spaces outdoors or indoors.',
			imagePlaceholder: 'Suspended net photo — To be replaced',
			seo: {
				title: 'Suspended Net Installation in Trees — Arbre Boivin',
				description: 'Custom suspended net installation outdoors or indoors in the Portneuf region. Unique relaxation spaces. Free estimate.'
			},
			intro: 'We offer custom suspended net installations, whether outdoors or in interior spaces of your home.',
			paragraphs: [],
			details: [
				'Custom installation',
				'Outdoor and indoor',
				'Relaxation and play spaces',
				'Durable and resistant materials',
				'Residential and commercial'
			],
			contentBlocks: [
				{
					image: '/photo/filet-1.png',
					imageAlt: 'Suspended net installed in trees',
					imageRight: true,
					text: 'We offer custom suspended net installations, whether outdoors or in interior spaces of your home. Whether you\'re looking for an original relaxation solution in the heart of nature or indoors, our suspended nets create unique relaxation and social spaces.'
				},
				{
					image: '/photo/filet-2.png',
					imageAlt: 'Suspended net in trees',
					imageRight: false,
					text: 'Installing suspended nets in trees offers a unique outdoor experience. Ideal for families, children and nature lovers, this type of installation transforms your outdoor space into an unparalleled play and relaxation area.'
				},
				{
					image: '/photo/filet-3.png',
					imageAlt: 'Suspended hammock net in trees',
					imageRight: true,
					text: 'Installing suspended nets in indoor home spaces can create a unique, comfortable and practical ambiance. These installations are often used as relaxation spaces, play areas, or decorative elements.'
				}
			]
		},
		{
			slug: 'deneigement-toiture',
			icon: '🏠',
			title: 'Roof Snow Removal',
			description: 'Safe roof snow removal to prevent damage caused by snow and ice accumulation.',
			imagePlaceholder: 'Snow removal photo — To be replaced',
			seo: {
				title: 'Roof Snow Removal — Arbre Boivin',
				description: 'Roof snow removal service in the Portneuf region. Prevention of snow and ice damage. Free estimate.'
			},
			intro: 'Snow and ice accumulation on your roof can cause significant structural damage. Arbre Boivin offers safe and effective snow removal service to protect your property.',
			paragraphs: [
				'An overloaded roof poses a real risk: water infiltration, structural deformation, or even partial collapse. Preventive snow removal is essential after heavy snowfalls.',
				'Our team equipped with professional tools intervenes quickly to remove snow and break ice accumulations, taking care not to damage your shingles or membranes.',
				'We comply with height safety standards and use certified personal protective equipment.'
			],
			details: [
				'Quick response after storms',
				'Respect for shingles and membranes',
				'Certified safety equipment',
				'Residential and commercial',
				'Emergency service available'
			]
		},
		{
			slug: 'nettoyage-gouttieres',
			icon: '🌧️',
			title: 'Gutter Cleaning',
			description: 'Complete gutter cleaning to ensure proper rainwater drainage and prevent foundation damage.',
			imagePlaceholder: 'Gutter photo — To be replaced',
			seo: {
				title: 'Gutter Cleaning — Arbre Boivin',
				description: 'Gutter cleaning service in the Portneuf region. Prevention of foundation damage. Free estimate.'
			},
			intro: 'Clogged gutters can cause overflows, infiltrations and costly damage to your foundation. Arbre Boivin provides complete cleaning of your gutters and downspouts.',
			paragraphs: [
				'Leaves, branches and debris accumulated in your gutters prevent water from draining properly. This can lead to overflows that damage the facade, foundations and landscaping.',
				'Our service includes manual removal of all debris, complete rinsing of gutters and downspouts, as well as visual inspection to detect any damage or faulty joints.',
				'We recommend cleaning in spring and fall to keep your gutters in perfect working order throughout the year.'
			],
			details: [
				'Complete debris removal',
				'Gutter and downspout rinsing',
				'Visual inspection included',
				'Spring and fall recommended',
				'Residential and commercial'
			]
		}
	]
};

export function getAutreServiceEnBySlug(slug: string) {
	return autresServicesPageEn.services.find((s) => s.slug === slug);
}

export const contactPageEn = {
	seo: {
		title: 'Free Estimate — Contact Us',
		description:
			`Request your free estimate. Call ${site.phone} or write to ${site.email}. Fast response guaranteed.`
	},
	heading: 'Contact Us',
	subheading: `Fill out the form or call us directly at ${site.phone}. Free estimate, no obligation.`,
	formLabels: {
		name: 'Full name',
		email: 'Email',
		phone: 'Phone',
		service: 'Desired service',
		message: 'Work description',
		submit: 'Send request'
	}
};
