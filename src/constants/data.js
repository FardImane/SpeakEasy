import images from './images';

export const cocktails = [
  {
    title: 'FREEMIUM',
    price: 'Gratuit',
    tags: 'Testez gratuitement | Sans engagement | Découverte rapide',
    image: images.fremium,
  },
  {
    title: 'PREMIUM',
    price: 'Paiement mensuel',
    tags: 'Accès complet | Outils avancés | Expérience optimisée',
    image: images.premium,
  },
  {
    title: 'LICENSE & FINANCEMENT',
    price: 'Sur devis',
    tags: 'Solutions B2B | Subventions | Partenariats & appels à projets',
    image: images.entreprise,
  },
];




const awards = [
  {
    imgUrl: images.award02,
    title: 'Avatar 3D interprète',
    subtitle: 'Traduction de la parole en langue des signes via un avatar animé en temps réel.',
  },
  {
    imgUrl: images.award01,
    title: 'Traduction inverse',
    subtitle: 'Langue des signes traduite en texte ou en parole compréhensible pour tous.',
  },
  {
    imgUrl: images.award05,
    title: 'Intégration intuitive',
    subtitle: 'Compatible avec les grandes plateformes de visioconférence via une extension dédiée.',
  },
  {
    imgUrl: images.award03,
    title: 'Personnalisation avancée',
    subtitle: 'Traduction vocale, apparence de l’avatar, gestuelle… tout est adaptable à l’utilisateur.',
  },
];

export default { cocktails, awards };
