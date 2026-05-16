export type Category =
  | "Men's Vitality"
  | "Women's Wellness"
  | 'Fertility Support'
  | 'Weight Management'
  | 'Hair Wellness'
  | 'General Wellness';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  image: string;
  originalImage: string;
  tone: string;
  faqs: { question: string; answer: string }[];
  testimonials: { quote: string; name: string }[];
};

export const products: Product[] = [
  {
    id: '15',
    slug: 'ayur-plex',
    name: 'Ayur Plex',
    category: 'General Wellness',
    shortDescription: 'Useful in Atherosclerosis',
    description:
      'Ayur Plex is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Atherosclerosis. Atherosclerosis,In Degenerative Disease.',
    benefits: [
      'Supports atherosclerosis',
      'Supports atherosclerosis',
      'Supports in degenerative disease',
    ],
    ingredients: [
      'Pterocarpus Santalinus',
      'Phyllanthus Emblica',
      'Zingiber Officinale',
      'Pueraria Tuberosa',
      'Terminalia Arjuna',
      'Chlorophytum Arundinaceum',
      'Vitis Vinifera',
      'Sida Cardisolia',
    ],
    usage: '5-10 ml twice a day',
    image: '/images/products/ayur-plex.webp',
    originalImage: '/images/products/AyurPlex.jpg',
    tone: 'bg-emerald-50',
    faqs: [
      {
        question: 'Who is Ayur Plex for?',
        answer:
          'Ayur Plex is positioned as Ayurvedic wellness support in the general wellness category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 5-10 ml twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '13',
    slug: 'boon-tablets',
    name: 'Boon Tablets',
    category: 'Fertility Support',
    shortDescription: 'Useful in colic hyperacidity indigestion',
    description:
      'Boon Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in colic hyperacidity indigestion. Gastric Problem,Vomiting,Indigestion,Abdominal Colic,Gastritis.',
    benefits: [
      'Supports colic hyperacidity indigestion',
      'Supports gastric problem',
      'Supports vomiting',
      'Supports indigestion',
      'Supports abdominal colic',
    ],
    ingredients: [
      'Dhaniya (Coriandrum sativum)',
      'Jeera (Cuminum Cyminum)',
      'Chitrak Mul (Plumbago Zeylanca)',
      'Giloy (Tinospora Cordifolia)',
      'Makoy (Solanum Nigrum)',
      'Dalchini (Cinnamomum Zeylanicum)',
    ],
    usage: '1-2 tablets a day or as directed by the physician',
    image: '/images/products/boon-tablets.webp',
    originalImage: '/images/products/BoonTab.jpg',
    tone: 'bg-amber-50',
    faqs: [
      {
        question: 'Who is Boon Tablets for?',
        answer:
          'Boon Tablets is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1-2 tablets a day or as directed by the physician. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '22',
    slug: 'calci-n',
    name: 'Calci-N',
    category: 'General Wellness',
    shortDescription: 'Useful in Osteoporosis',
    description:
      'Calci-N is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Osteoporosis. Osteoporosis.',
    benefits: ['Supports osteoporosis'],
    ingredients: [
      'Terminalia Chebula',
      'Terminalia Belerica',
      'Emblica Officinalis',
      'Aloe Barbadensis',
      'Shankh Bhasma',
      'Mukta Bhasma',
    ],
    usage: '1 Tablets twice a day',
    image: '/images/products/calci-n.webp',
    originalImage: '/images/products/calciN.jpg',
    tone: 'bg-emerald-50',
    faqs: [
      {
        question: 'Who is Calci-N for?',
        answer:
          'Calci-N is positioned as Ayurvedic wellness support in the general wellness category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 Tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '1',
    slug: 'conceive-n-drops',
    name: 'Conceive-N Drops',
    category: 'Fertility Support',
    shortDescription: 'Sugar free Drops',
    description:
      'Conceive-N Drops is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Sugar free Drops. Pelvic Chronic Inflammation & Vaginitis,Anovulatory Cycle,Endometrium Proliferation.',
    benefits: [
      'Sugar free drops',
      'Supports pelvic chronic inflammation & vaginitis',
      'Supports anovulatory cycle',
      'Supports endometrium proliferation',
    ],
    ingredients: [
      'Durva (Cynodon dactylon)',
      'Shringhtak (Trapa natans)',
      'Shatpatra (Nelumbo nucifera)',
      'Putrajeevak (Putranjiva roxburghii)',
    ],
    usage: '10 to 15 drops twice a day',
    image: '/images/products/conceive-n-drops.webp',
    originalImage: '/images/products/concieveN1.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Conceive-N Drops for?',
        answer:
          'Conceive-N Drops is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 10 to 15 drops twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '51',
    slug: 'conceive-n-tablets',
    name: 'Conceive-N Tablets',
    category: 'Fertility Support',
    shortDescription: 'Increases Conception Rate',
    description:
      'Conceive-N Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Increases Conception Rate. Pelvic Chronic Inflammation & Vaginitis,Anovulatory Cycle,Endometrium Proliferation.',
    benefits: [
      'Supports conception rate',
      'Supports pelvic chronic inflammation & vaginitis',
      'Supports anovulatory cycle',
      'Supports endometrium proliferation',
    ],
    ingredients: [
      'Trapa natans',
      'Nelumbo nucifera',
      'Putraniva roxburgii',
      'Cynodon dactylon',
    ],
    usage: '1 or 2 tablets twice a day',
    image: '/images/products/conceive-n-tablets.webp',
    originalImage: '/images/products/conceiveN_tablets_1.jpg',
    tone: 'bg-amber-50',
    faqs: [
      {
        question: 'Who is Conceive-N Tablets for?',
        answer:
          'Conceive-N Tablets is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 or 2 tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '20',
    slug: 'd-coardial-tablets',
    name: 'D-Coardial Tablets',
    category: "Women's Wellness",
    shortDescription: 'Leucorrhoea',
    description:
      'D-Coardial Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Leucorrhoea. Leucorrhoea.',
    benefits: ['Supports leucorrhoea'],
    ingredients: [
      'Tagar',
      'Khurasani Ajwain',
      'Lodhra',
      'Sarpagandha',
      'Dhale palks Grounds',
      'Yashad Bhasam',
      'Swaran Makshik',
      'Bang Bhasma',
    ],
    usage: 'As directed by the Physician',
    image: '/images/products/d-coardial-tablets.webp',
    originalImage: '/images/products/dcoardial_tablets_1.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is D-Coardial Tablets for?',
        answer:
          "D-Coardial Tablets is positioned as Ayurvedic wellness support in the women's wellness category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: As directed by the Physician. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '3',
    slug: 'dub-tone-tablets',
    name: 'Dub-Tone Tablets',
    category: 'Fertility Support',
    shortDescription: 'Useful in Bulky Uterus',
    description:
      'Dub-Tone Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Bulky Uterus. Menorrhagia,Metrorrhagia,Dysfunctional Uterine Bleeding, In P.I.D. Cases, Excessive Premenopausal Bleeding.',
    benefits: [
      'Supports bulky uterus',
      'Supports menorrhagia',
      'Supports metrorrhagia',
      'Supports dysfunctional uterine bleeding',
      'Supports in p.i.d. cases',
    ],
    ingredients: [
      'Babool (Acacia Arabica)',
      'Daru Hridra(Berberisaristata)',
      'Sakhu (Shorea Robusta Gaerta)',
    ],
    usage: '2 Tablets twice a day',
    image: '/images/products/dub-tone-tablets.webp',
    originalImage: '/images/products/Dubtone.jpg',
    tone: 'bg-amber-50',
    faqs: [
      {
        question: 'Who is Dub-Tone Tablets for?',
        answer:
          'Dub-Tone Tablets is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 2 Tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '23',
    slug: 'ifa-m',
    name: 'Ifa-M',
    category: 'General Wellness',
    shortDescription: 'Useful in Anaemia',
    description:
      'Ifa-M is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Anaemia. Anaemia.',
    benefits: ['Supports anaemia'],
    ingredients: [
      'Mandur Bhasma',
      'Saunth',
      'Pippali',
      'Viavidang',
      'Daruhaldi',
      'Chitrak',
      'Haridra',
      'Amla',
    ],
    usage: '1 Tablet twice a day',
    image: '/images/products/ifa-m.webp',
    originalImage: '/images/products/ifaM1.jpg',
    tone: 'bg-emerald-50',
    faqs: [
      {
        question: 'Who is Ifa-M for?',
        answer:
          'Ifa-M is positioned as Ayurvedic wellness support in the general wellness category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 Tablet twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '14',
    slug: 'kof-n',
    name: 'Kof-N',
    category: 'General Wellness',
    shortDescription: 'Useful in Chronic Cold',
    description:
      'Kof-N is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Chronic Cold. Rhinitis,Acute Bronchitis,Chest Infection.',
    benefits: [
      'Supports chronic cold',
      'Supports rhinitis',
      'Supports acute bronchitis',
      'Supports chest infection',
    ],
    ingredients: [
      'Tinospora cordifolia',
      'Piper Longum',
      'Clerodendrum Serratum',
      'Cinnamomum Zeylanicum',
      'Volia odarata',
      'Inula racemosa',
      'Solanum surattnse',
      'Glycyrrhiza Glabra',
    ],
    usage: '10-15 Drops twice a day with hot water',
    image: '/images/products/kof-n.webp',
    originalImage: '/images/products/kofNDrops1.jpg',
    tone: 'bg-emerald-50',
    faqs: [
      {
        question: 'Who is Kof-N for?',
        answer:
          'Kof-N is positioned as Ayurvedic wellness support in the general wellness category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 10-15 Drops twice a day with hot water. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '9',
    slug: 'leucona',
    name: 'Leucona',
    category: "Women's Wellness",
    shortDescription: 'Useful in Leucorrhoea',
    description:
      'Leucona is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Leucorrhoea. Leucorrhoea,Chronic Vaginitis,Endometrial Pyometra.',
    benefits: [
      'Supports leucorrhoea',
      'Supports chronic vaginitis',
      'Supports endometrial pyometra',
    ],
    ingredients: [
      'Ashok Chaal',
      'Lodhar',
      'Nagkesar',
      'Majuphal',
      'Ashwagandha',
      'Supari',
      'Rasont',
      'Ral',
    ],
    usage: '2 to 3 Capsules twice a day',
    image: '/images/products/leucona.webp',
    originalImage: '/images/products/Leucona.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Leucona for?',
        answer:
          "Leucona is positioned as Ayurvedic wellness support in the women's wellness category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 2 to 3 Capsules twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '17',
    slug: 'neurovin',
    name: 'Neurovin',
    category: "Men's Vitality",
    shortDescription: 'Useful in Migraine',
    description:
      'Neurovin is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Migraine. Epilepsy,Hysteria,Mental Disorder,Headache,Insomnia.',
    benefits: [
      'Supports migraine',
      'Supports epilepsy',
      'Supports hysteria',
      'Supports mental disorder',
      'Supports headache',
    ],
    ingredients: [
      'Jeera',
      'Pashan Bhed',
      'Saagon Ke Phool',
      'Sataver',
      'Gokhru',
      'Veeran',
      'Jatamansai',
      'Ajwain',
    ],
    usage: '5-10 ml twice a day',
    image: '/images/products/neurovin.webp',
    originalImage: '/images/products/Neurovin.jpg',
    tone: 'bg-stone-100',
    faqs: [
      {
        question: 'Who is Neurovin for?',
        answer:
          "Neurovin is positioned as Ayurvedic wellness support in the men's vitality category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 5-10 ml twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '2',
    slug: 'oligocure',
    name: 'Oligocure',
    category: 'Fertility Support',
    shortDescription: 'Useful in Scanty Menses',
    description:
      'Oligocure is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Scanty Menses. Scanty Menses,Oligomenorrhea.',
    benefits: ['Supports scanty menses', 'Supports oligomenorrhea'],
    ingredients: [
      'Kasni (Cichorium Intybus)',
      'Trapusha (Cucmis Satiunm)',
      'Majistha (Rubia Cardifolia)',
      'Kulthi (Dolichos Biflorus)',
      'Darusita (Cinnamomum Zeytancium)',
      'Hapusha (Juniperus Commonis)',
      'Putiha (Mentha Spicata)',
      'Citrullus Vueris',
    ],
    usage: '2 Tablets twice a day',
    image: '/images/products/oligocure.webp',
    originalImage: '/images/products/Oligocure.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Oligocure for?',
        answer:
          'Oligocure is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 2 Tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '24',
    slug: 'mayoma',
    name: 'Mayoma',
    category: "Women's Wellness",
    shortDescription:
      'Targeted uterine support in fibroid-related and bulky uterus conditions.',
    description:
      'Mayoma is a traditional Ayurvedic formulation positioned for supportive care in fibroid-related uterine concerns, bulky uterus conditions, menstrual cycle stability, and excessive irregular bleeding associated with menopause. Use after consultation.',
    benefits: [
      'Supports uterine health in fibroid conditions',
      'Helps maintain menstrual cycle stability',
      'Suitable supportive care in bulky uterus conditions',
      'Supports long-term uterine wellness',
    ],
    ingredients: ['Guggul', 'Kachnar', 'Rasont', 'Raal'],
    usage: '1 tablet twice a day or as directed after consultation',
    image: '/images/products/mayoma.webp',
    originalImage: '/images/products/mayoma.png',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Mayoma for?',
        answer:
          'Mayoma is positioned as Ayurvedic wellness support for uterine health, especially where fibroid-related or bulky uterus concerns are being discussed. Please consult before ordering.',
      },
      {
        question:
          "Can I combine Mayoma with other SRAS women's health products?",
        answer:
          'Combination support should be guided by the concern, cycle history, and current treatment. Start with a WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '18',
    slug: 'neer',
    name: 'Neer',
    category: "Men's Vitality",
    shortDescription: 'Useful in U.T.I & Renal Stone',
    description:
      'Neer is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in U.T.I & Renal Stone. Jaundice (Kamla), Anorexia (Aruchi), Liver Enlargement.',
    benefits: [
      'Supports u.t.i & renal stone',
      'Supports jaundice (kamla)',
      'Supports anorexia (aruchi)',
      'Supports liver enlargement',
    ],
    ingredients: [
      'Shwet Parpati (Kshar Parpati)',
      'Yavaksaar (Hordeum vulgara)',
      'Sarjikhar (Haloxylon stocksli)',
      'Hazralyood Bhasham (AFI)',
    ],
    usage: 'As directed by the Physician',
    image: '/images/products/neer.webp',
    originalImage: '/images/products/neer.jpg',
    tone: 'bg-stone-100',
    faqs: [
      {
        question: 'Who is Neer for?',
        answer:
          "Neer is positioned as Ayurvedic wellness support in the men's vitality category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: As directed by the Physician. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '4',
    slug: 'sheba-drops',
    name: 'Sheba Drops',
    category: 'Fertility Support',
    shortDescription: 'Useful in Cystic Problem',
    description:
      'Sheba Drops is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Cystic Problem. Fibrocystic Breast Diseases,Renal Cysts.',
    benefits: [
      'Supports cystic problem',
      'Supports fibrocystic breast diseases',
      'Supports renal cysts',
    ],
    ingredients: [
      'Terminalia chebula',
      'Terminalia belerica',
      'Emblica officinalis',
      'Piper longum',
      'Zingiber officinale',
      'Bauhinia variegata',
      'Cassia angustifolia',
      'Elettara Cardamonium',
    ],
    usage: '10 to 15 drops twice a day',
    image: '/images/products/sheba-drops.webp',
    originalImage: '/images/products/shebaDrops7.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Sheba Drops for?',
        answer:
          'Sheba Drops is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 10 to 15 drops twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '52',
    slug: 'sheba-tablets',
    name: 'Sheba Tablets',
    category: 'Fertility Support',
    shortDescription: 'Useful in Cystic Problem',
    description:
      'Sheba Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Cystic Problem. Fibrocystic Breast Diseases,Renal Cysts.',
    benefits: [
      'Supports cystic problem',
      'Supports fibrocystic breast diseases',
      'Supports renal cysts',
    ],
    ingredients: [
      'Terminalia chebula Retz',
      'Terminalia belerica Retz',
      'Emblica officinalis',
      'Piper longum Linn',
      'Piper Nigrum  Linn',
      'Zingiberaceae',
      'Bauhinia variegata Linn',
      'Crataeva Mulvala Buch',
    ],
    usage: '1 or 2 tablets twice a day',
    image: '/images/products/sheba-tablets.webp',
    originalImage: '/images/products/sheba_tablets_1.jpg',
    tone: 'bg-amber-50',
    faqs: [
      {
        question: 'Who is Sheba Tablets for?',
        answer:
          'Sheba Tablets is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 or 2 tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '5',
    slug: 'sperm-forte-tablets',
    name: 'Sperm Forte Tablets',
    category: "Men's Vitality",
    shortDescription: 'Useful for improve sperm efficacy',
    description:
      'Sperm Forte Tablets is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful for improve sperm efficacy. Problem of premature ejaculation.',
    benefits: [
      'Supports improve sperm efficacy',
      'Supports problem of premature ejaculation',
    ],
    ingredients: [
      'Kaunch Beej',
      'Safed Musli',
      'Talamkhana',
      'Sataver',
      'Ashwagandha',
      'Excipients',
    ],
    usage: 'As directed by the Physician',
    image: '/images/products/sperm-forte-tablets.webp',
    originalImage: '/images/products/updated-sperm-forte.jpg',
    tone: 'bg-stone-100',
    faqs: [
      {
        question: 'Who is Sperm Forte Tablets for?',
        answer:
          "Sperm Forte Tablets is positioned as Ayurvedic wellness support in the men's vitality category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: As directed by the Physician. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '7',
    slug: 'sudha',
    name: 'Sudha',
    category: 'Fertility Support',
    shortDescription: 'Useful in Bedwetting & Polyuria',
    description:
      'Sudha is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Bedwetting & Polyuria. Diabetes Pregnancy & Prostate Problems,Interstitial Cystitis,Overactive bladder syndrome,Stroke & other Neurological Diseases, Urinary Incontinence,Bladder Cancer,Bladder Dysfunction,After Radiation Therapy,Bed Wetting,Structural abnormality in the organs muscles or diseases of nervous system,Polyuria due to sickle cell anemia.',
    benefits: [
      'Supports bedwetting & polyuria',
      'Supports diabetes pregnancy & prostate problems',
      'Supports interstitial cystitis',
      'Supports overactive bladder syndrome',
      'Supports stroke & other neurological diseases',
    ],
    ingredients: [
      'Udumbara',
      'Bel',
      'Tulsi',
      'Mulethi',
      'Amalki',
      'Bang Bhasma',
      'Ras Sindoor',
      'Loh Bhasma',
    ],
    usage: '1 or 2 Tablets a day or as directed by the Physician',
    image: '/images/products/sudha.webp',
    originalImage: '/images/products/sudha.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Sudha for?',
        answer:
          'Sudha is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 or 2 Tablets a day or as directed by the Physician. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '5',
    slug: 'sperm-forte-capsules',
    name: 'Sperm Forte Capsules',
    category: 'Fertility Support',
    shortDescription: 'Male Infertility & Sexual Disorders',
    description:
      'Sperm Forte Capsules is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Male Infertility & Sexual Disorders. Problem of premature ejaculation.',
    benefits: [
      'Supports male infertility & sexual disorders',
      'Supports problem of premature ejaculation',
    ],
    ingredients: [
      'Asparagus Adscendens',
      'Withania Somnifera',
      'Curculigo Orchioides',
      'Asparagus Racemosus',
      'Euryale Ferox',
      'Asteracantha Longifolia',
      'Orchis Latifolia',
      'Mucuna Pruriens',
    ],
    usage: '2 Capsules twice a day',
    image: '/images/products/sperm-forte-capsules.webp',
    originalImage: '/images/products/sperm-fort.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Sperm Forte Capsules for?',
        answer:
          'Sperm Forte Capsules is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 2 Capsules twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '6',
    slug: 'sperm-forte-powder',
    name: 'Sperm Forte Powder',
    category: 'Fertility Support',
    shortDescription: 'Male Infertility & Sexual Disorders',
    description:
      'Sperm Forte Powder is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Male Infertility & Sexual Disorders. Problem of premature ejaculation.',
    benefits: [
      'Supports male infertility & sexual disorders',
      'Supports problem of premature ejaculation',
    ],
    ingredients: [
      'Kaunch beej',
      'Safed musli',
      'Sataver',
      'Talamkhana',
      'Shyam musli',
      'Ashwgandha',
    ],
    usage: '5 gm Powder twice a day',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80',
    originalImage: '/images/products/spermFortePowder1.jpg',
    tone: 'bg-rose-50',
    faqs: [
      {
        question: 'Who is Sperm Forte Powder for?',
        answer:
          'Sperm Forte Powder is positioned as Ayurvedic wellness support in the fertility support category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 5 gm Powder twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '8',
    slug: 'sthulta-hari',
    name: 'Sthulta Hari',
    category: 'Weight Management',
    shortDescription: 'Useful in Weight Loss',
    description:
      'Sthulta Hari is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Weight Loss. Fatty Liver,Chronic Constipation,Arthritis & Gout.',
    benefits: [
      'Supports weight loss',
      'Supports fatty liver',
      'Supports chronic constipation',
      'Supports arthritis & gout',
    ],
    ingredients: [
      'Terminalia chebula',
      'Emblica officinalis',
      'Piper longum',
      'Zingiber officinale',
      'Acorus calamus',
      'Tribulus Terrestris',
      'Aloe barbadensis',
      'Commifora mukul',
    ],
    usage: '1 Capsule & 5 gm Powder twice a day',
    image: '/images/products/sthulta-hari.webp',
    originalImage: '/images/products/sthultaHari4.jpg',
    tone: 'bg-emerald-50',
    faqs: [
      {
        question: 'Who is Sthulta Hari for?',
        answer:
          'Sthulta Hari is positioned as Ayurvedic wellness support in the weight management category. Please consult before ordering so usage can be guided responsibly.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 1 Capsule & 5 gm Powder twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '16',
    slug: 'u-liv',
    name: 'U-Liv',
    category: "Men's Vitality",
    shortDescription: 'Useful in weight management',
    description:
      'U-Liv is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in weight management. Over Weight,General Debility.',
    benefits: [
      'Supports weight management',
      'Supports over weight',
      'Supports general debility',
    ],
    ingredients: [
      'Foeniculum Vulgare',
      'Asparagus Racemous',
      'Crotalaria Verrucosa Linn',
      'Cummunium Cymium',
      'Rosacent Folia',
      'Withania Sonifera',
      'Thymus Sepyllum',
      'Terminalia Chebula Retz',
    ],
    usage: '5-10 ml twice a day',
    image: '/images/products/u-liv.webp',
    originalImage: '/images/products/Uliv.jpg',
    tone: 'bg-stone-100',
    faqs: [
      {
        question: 'Who is U-Liv for?',
        answer:
          "U-Liv is positioned as Ayurvedic wellness support in the men's vitality category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 5-10 ml twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
  {
    id: '10',
    slug: 'vin-migrain',
    name: 'Vin-Migrain',
    category: "Men's Vitality",
    shortDescription: 'Useful in Migraine',
    description:
      'Vin-Migrain is a traditional Ayurvedic formulation crafted with carefully selected herbs to support overall wellness. Useful in Migraine. Mental Disorder,Headache,Insomnia.',
    benefits: [
      'Supports migraine',
      'Supports mental disorder',
      'Supports headache',
      'Supports insomnia',
    ],
    ingredients: [
      'Rasna',
      'Kooth',
      'Mulathi',
      'Gokhory',
      'Vavadinga',
      'Dasmool',
      'Rasna Patti',
    ],
    usage: '2 tablets twice a day',
    image: '/images/products/vin-migrain.webp',
    originalImage: '/images/products/VinMigrain.jpg',
    tone: 'bg-stone-100',
    faqs: [
      {
        question: 'Who is Vin-Migrain for?',
        answer:
          "Vin-Migrain is positioned as Ayurvedic wellness support in the men's vitality category. Please consult before ordering so usage can be guided responsibly.",
      },
      {
        question: 'How should I take it?',
        answer:
          'Suggested usage: 2 tablets twice a day. Final usage should follow professional guidance and your WhatsApp consultation.',
      },
    ],
    testimonials: [
      {
        quote:
          'The WhatsApp consultation made it easier to understand the right product and usage routine.',
        name: 'Verified Srasveda customer',
      },
    ],
  },
];

export const categories = Array.from(
  new Set(products.map((product) => product.category))
);

export const featuredProducts = [
  'd-coardial-tablets',
  'ayur-plex',
  'sthulta-hari',
  'u-liv',
]
  .map((slug) => getProduct(slug))
  .filter((product): product is Product => Boolean(product));

export const womensHealthHeroProducts = featuredProducts;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
