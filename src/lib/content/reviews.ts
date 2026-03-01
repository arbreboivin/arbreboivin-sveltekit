export interface Review {
	author: string;
	rating: number;
	text: string;
	timeAgo: string;
}

export const googleReviews = {
	businessName: 'Arbre Boivin',
	rating: 5.0,
	totalReviews: 27,
	googleUrl: 'https://www.google.com/maps/search/Arbre+Boivin',
	reviews: [
		{
			author: 'Émile Rousseau',
			rating: 5,
			text: 'Excellent service du début à la fin! L\'équipe est professionnelle, ponctuelle et très respectueuse de la propriété. Le travail a été fait de façon sécuritaire et propre, et le résultat dépasse mes attentes.',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'Sandrine Perron',
			rating: 5,
			text: 'Très bon service rapide et professionnel! Une équipe dynamique et efficace je recommande!!',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'Fat_X_PanqueQue 007',
			rating: 5,
			text: 'Très belle job, professionnelle et à l\'écoute de mes problèmes merci beaucoup',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'Jacob Perreault',
			rating: 5,
			text: 'Super professionnel et gentil. Tommy a su faire les travaux rapidement ce qui a été très apprécié. Je recommande fortement d\'encourager cette jeune entreprise! Merci Tommy',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'Vanessa Boivin',
			rating: 5,
			text: 'Je recommande sans hésitation! Arbreboivin un service professionnel et efficace.',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'William Brochu',
			rating: 5,
			text: 'Il nous a fournit un travail de qualité. Je recommande fortement !',
			timeAgo: 'il y a 2 jours'
		},
		{
			author: 'Eric Dufort',
			rating: 5,
			text: 'Très bon service d\'élagage et d\'abattage. Tommy et son équipe sont professionnels, à l\'écoute de mes besoins et avec le sourire que je sois satisfait. Du beau travail précis et efficace. Ils ont laissé les lieux dans un état impeccable. 5 étoiles ❤️ Merci !!',
			timeAgo: 'il y a 5 mois'
		},
		{
			author: 'Guillaume Maillé',
			rating: 5,
			text: 'Professionnel, à l\'heure et jovial ! Travail impeccable, je recommande 👍',
			timeAgo: 'il y a 5 mois'
		},
		{
			author: 'Wiz Wiz',
			rating: 5,
			text: 'Excellent service et professionnel, très consciencieux !',
			timeAgo: 'il y a 8 mois'
		},
		{
			author: 'Ilian Benazra',
			rating: 5,
			text: 'Professionnels, sécuritaires service au top je recommande !!!!',
			timeAgo: 'il y a 7 mois'
		},
		{
			author: 'Marie-Claude Fortin',
			rating: 5,
			text: 'J\'ai fait appel à Arbre Boivin pour l\'élagage de plusieurs grands érables. Travail impeccable, équipe souriante et très propre. Je n\'hésiterai pas à les rappeler l\'année prochaine!',
			timeAgo: 'il y a 3 mois'
		},
		{
			author: 'Stéphane Lapointe',
			rating: 5,
			text: 'Service d\'urgence suite à une tempête de verglas. Ils sont arrivés rapidement et ont sécurisé la situation en quelques heures. Très professionnel et rassurant.',
			timeAgo: 'il y a 4 mois'
		},
		{
			author: 'Josée Thibodeau',
			rating: 5,
			text: 'Arbre Boivin a abattu un gros chêne qui menaçait notre maison. Travail précis et sécuritaire, sans aucun dommage à la propriété. Prix très raisonnable. Merci!',
			timeAgo: 'il y a 6 mois'
		},
		{
			author: 'Patrick Demers',
			rating: 5,
			text: 'Excellent service d\'essouchement. Rapide, efficace et le terrain était impeccable après les travaux. Tommy est vraiment à l\'écoute du client.',
			timeAgo: 'il y a 2 mois'
		},
		{
			author: 'Lucie Archambault',
			rating: 5,
			text: 'Je recommande fortement! Ils ont planté 3 arbres fruitiers dans ma cour avec des conseils d\'entretien très utiles. Les arbres poussent à merveille.',
			timeAgo: 'il y a 5 mois'
		},
		{
			author: 'René Couturier',
			rating: 5,
			text: 'Très satisfait du travail d\'élagage. L\'équipe a respecté mes arbres tout en les gardant en bonne santé. Rapport qualité/prix imbattable.',
			timeAgo: 'il y a 9 mois'
		},
		{
			author: 'Nathalie Beausoleil',
			rating: 5,
			text: 'Tommy est venu évaluer la situation le jour même de mon appel. Travaux réalisés deux jours plus tard. Sérieux, ponctuel et professionnel. Je recommande à 100%!',
			timeAgo: 'il y a 1 mois'
		},
		{
			author: 'François Lévesque',
			rating: 5,
			text: 'Excellent travail de déchiquetage de branches après mon élagage. Terrain laissé parfaitement propre. Je ferai encore appel à eux sans hésiter.',
			timeAgo: 'il y a 2 mois'
		},
		{
			author: 'Caroline Bergeron',
			rating: 5,
			text: 'Service rapide et courtois. Ils ont enlevé un arbre mort dangereux près de notre piscine sans aucun incident. Très impressionnée par leur savoir-faire!',
			timeAgo: 'il y a 3 mois'
		},
		{
			author: 'Mario Ouellet',
			rating: 5,
			text: 'J\'ai fait appel à Arbre Boivin pour le déboisement d\'un terrain. Travail colossal réalisé en une seule journée. Efficacité remarquable, je suis plus que satisfait.',
			timeAgo: 'il y a 4 mois'
		},
		{
			author: 'Diane Vaillancourt',
			rating: 5,
			text: 'Magnifique travail d\'élagage sur mes vieux érables. L\'équipe a pris soin de chaque coupe pour préserver la santé des arbres. Mes voisins ont même demandé leur numéro!',
			timeAgo: 'il y a 6 mois'
		},
		{
			author: 'Simon Marchand',
			rating: 5,
			text: 'Haubanage réalisé sur un arbre penché vers la maison. Travail sécuritaire et bien expliqué. Je dors maintenant tranquille. Merci à toute l\'équipe!',
			timeAgo: 'il y a 7 mois'
		},
		{
			author: 'Isabelle Robitaille',
			rating: 5,
			text: 'Deuxième fois que je fais appel à Arbre Boivin et encore une fois service impeccable. Fidèle cliente pour la vie! Merci Tommy.',
			timeAgo: 'il y a 10 mois'
		},
		{
			author: 'Alain Chartrand',
			rating: 5,
			text: 'Très bonne expérience. Prix honnête, travail soigné et équipe vraiment agréable. Ils ont planté deux nouveaux arbres qui ont l\'air en pleine forme.',
			timeAgo: 'il y a 11 mois'
		},
		{
			author: 'Karine Dostie',
			rating: 5,
			text: 'Intervention d\'urgence à 7h du matin après une grosse tempête. Ils étaient là en moins d\'une heure. Incroyable réactivité. Je recommande chaudement!',
			timeAgo: 'il y a 1 an'
		}
	] satisfies Review[]
};
