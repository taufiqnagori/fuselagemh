
/**
 * FUSELAGE INNOVATIONS
 * Central Product & Website Data
 *
 * IMPORTANT:
 * Product specifications, prices, services and subsidy
 * figures are temporary demo content.
 *
 * Verify all commercial and technical information
 * with the company before publishing.
 */

// --------------------------------------------------
// IMAGE CONSTANTS
// --------------------------------------------------

export const IMAGE_FALLBACKS = {
  drone:
    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=85',

  agriculture:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85',

  field:
    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=1200&q=85',

  farmer:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85',
};

// --------------------------------------------------
// PRODUCTS
// --------------------------------------------------

export const PRODUCTS = [
  {
    id: 'fia-qd10',
    slug: 'fia-qd10',
    name: 'FIA QD10',
    tagline: 'Smart Agriculture Spraying Drone',
    category: 'Spraying',

    price: '₹4,25,000',
    priceNumber: 425000,

    badge: 'Best Seller',
    badgeType: 'primary',

    dgca: true,
    inStock: true,
    subsidy: true,

    isDemo: true,

    heroImage:
      'https://fuselage.co.in/wp-content/uploads/2024/06/Drone7-min.png',

    images: [
      'https://fuselage.co.in/wp-content/uploads/2024/06/Drone7-min.png',
      IMAGE_FALLBACKS.drone,
      IMAGE_FALLBACKS.agriculture,
    ],

    specs: {
      weight: '25 kg (Demo)',
      tank: '10 Litres (Demo)',
      flight: '25 minutes (Demo)',
      power: '4 kW (Demo)',
      pumpFlow: '5-8 L/min (Demo)',
      dropletSize: '60-200 µm (Demo)',
      sprayWidth: '4-6 meters (Demo)',
      battery: 'LiPo/LiHV 16000mAh (Demo)',
      camera: '720P FPV (Demo)',
      frame: 'Foldable Carbon Frame (Demo)',
      range: '5 km (Demo)',
      certification: 'Verify with manufacturer',
    },

    features: [
      'Agricultural Spraying',
      'Precision Application',
      'Remote Flight Control',
      'Agricultural Crop Protection',
      'Foldable Design',
      'Precision Flight Planning',
    ],

    shortDesc:
      'Agricultural spraying drone designed for precision crop protection and efficient field operations.',

    longDesc:
      'The FIA QD10 is presented as a smart agricultural spraying drone. It is designed to support modern farming operations through aerial spraying and precision application. Contact Fuselage Innovations for the verified technical specifications, configurations and availability.',

    video: null,

    useCases: [
      'Pesticide Spraying',
      'Foliar Nutrient Application',
      'Herbicide Application',
      'Fungicide Treatment',
    ],

    verificationNote:
      'All specifications and pricing are temporary demo values. Confirm with Fuselage Innovations.',

  },

  {
    id: 'nireeksh-ag',
    slug: 'nireeksh-ag',
    name: 'Nireeksh AG',
    tagline: 'Agricultural Surveillance & Monitoring Drone',
    category: 'Surveillance',

    price: '₹6,50,000',
    priceNumber: 650000,

    badge: 'Premium',
    badgeType: 'gold',

    dgca: true,
    inStock: true,
    subsidy: true,

    isDemo: true,

    heroImage:
      'https://fuselage.co.in/wp-content/uploads/2024/06/Drone1.png',

    images: [
      'https://fuselage.co.in/wp-content/uploads/2024/06/Drone1.png',
      IMAGE_FALLBACKS.drone,
      IMAGE_FALLBACKS.field,
    ],

    specs: {
      wheelbase: '1500 mm (Demo)',
      frameWeight: '2 kg (Demo)',
      dimensions: '500 × 500 × 500 mm (Demo)',
      sensors: 'Multispectral Sensors (Demo)',
      mapping: 'NDVI / NDRE Mapping (Demo)',
      software: 'Cloud Farm Management (Demo)',
      flight: '45 minutes (Demo)',
      range: '8 km (Demo)',
      output: 'Field Analytics (Demo)',
      certification: 'Verify with manufacturer',
    },

    features: [
      'Agricultural Monitoring',
      'Aerial Field Inspection',
      'Crop Health Assessment',
      'Field Mapping',
      'Agricultural Data Collection',
      'Farm Analytics',
    ],

    shortDesc:
      'An agricultural surveillance concept for aerial field monitoring, crop assessment and precision farming.',

    longDesc:
      'Nireeksh AG is presented as an agricultural surveillance and monitoring solution. It supports the concept of aerial crop observation, field mapping and agricultural intelligence. Contact our team for confirmed sensor configurations, software capabilities and technical specifications.',

    video: null,

    useCases: [
      'Crop Health Monitoring',
      'Field Mapping',
      'Agricultural Surveillance',
      'Farm Assessment',
    ],

    verificationNote:
      'All specifications and pricing are temporary demo values. Confirm with Fuselage Innovations.',
  },

  {
    id: 'fia-agron-pro',
    slug: 'fia-agron-pro',
    name: 'FIA Agron Pro',
    tagline: 'Commercial Agriculture Drone',
    category: 'Spraying',

    price: '₹7,80,000',
    priceNumber: 780000,

    badge: 'Commercial',
    badgeType: 'primary',

    dgca: true,
    inStock: true,
    subsidy: true,

    isDemo: true,

    heroImage: IMAGE_FALLBACKS.drone,

    images: [
      IMAGE_FALLBACKS.drone,
      IMAGE_FALLBACKS.agriculture,
      IMAGE_FALLBACKS.field,
    ],

    specs: {
      config: 'Hexacopter (Demo)',
      tank: '30 Litres (Demo)',
      payload: '35 kg (Demo)',
      flight: '35 minutes (Demo)',
      pumpFlow: '12-16 L/min (Demo)',
      windResistance: '7 m/s (Demo)',
      range: '10 km (Demo)',
      battery: 'Dual Battery System (Demo)',
      route: 'Automated Route Planning (Demo)',
      certification: 'Verify with manufacturer',
    },

    features: [
      'Commercial Agriculture Application',
      'Large Field Operations',
      'Precision Spraying',
      'Professional Flight Control',
      'Agricultural Operations',
      'Commercial Farming Support',
    ],

    shortDesc:
      'A commercial agriculture drone concept designed for larger field operations and professional agricultural applications.',

    longDesc:
      'FIA Agron Pro is presented as a commercial agricultural drone solution. It is intended for larger farming operations, professional service providers and agricultural businesses. Contact Fuselage Innovations to confirm its configuration, payload, flight performance and pricing.',

    video: null,

    useCases: [
      'Large Farm Operations',
      'FPO Operations',
      'Commercial Spraying Services',
      'Agricultural Applications',
    ],

    verificationNote:
      'All specifications and pricing are temporary demo values. Confirm with Fuselage Innovations.',
  },

  {
    id: 'fia-spectra',
    slug: 'fia-spectra',
    name: 'FIA Spectra',
    tagline: 'Industrial Surveillance & Inspection Drone',
    category: 'Surveillance',

    price: '₹5,20,000',
    priceNumber: 520000,

    badge: 'Industrial',
    badgeType: 'gold',

    dgca: false,
    inStock: true,
    subsidy: false,

    isDemo: true,

    heroImage: IMAGE_FALLBACKS.drone,

    images: [
      IMAGE_FALLBACKS.drone,
      IMAGE_FALLBACKS.field,
    ],

    specs: {
      camera: '4K Camera (Demo)',
      gimbal: '3-Axis Gimbal (Demo)',
      nightVision: 'IR Night Vision (Demo)',
      flight: '55 minutes (Demo)',
      range: '12 km (Demo)',
      video: '4K Video (Demo)',
      storage: '64GB (Demo)',
      connectivity: '5G / WiFi (Demo)',
      weatherRating: 'IP43 (Demo)',
    },

    features: [
      'Aerial Surveillance',
      'Infrastructure Inspection',
      'Industrial Monitoring',
      'High-Resolution Imaging',
      'Remote Inspection',
      'Professional Applications',
    ],

    shortDesc:
      'An industrial drone concept for aerial inspection, surveillance and professional monitoring applications.',

    longDesc:
      'FIA Spectra is presented as an industrial surveillance and inspection solution. It is intended for professional aerial observation and infrastructure monitoring. Contact the company for confirmed camera, sensor, endurance and certification information.',

    video: null,

    useCases: [
      'Infrastructure Inspection',
      'Security Surveillance',
      'Industrial Monitoring',
      'Aerial Photography',
      'Disaster Assessment',
    ],

    verificationNote:
      'All specifications and pricing are temporary demo values. Confirm with Fuselage Innovations.',
  },
];

// --------------------------------------------------
// HERO IMAGES
// --------------------------------------------------

export const HERO_IMAGES = [
  IMAGE_FALLBACKS.agriculture,
  IMAGE_FALLBACKS.drone,
  IMAGE_FALLBACKS.field,
];

// --------------------------------------------------
// GALLERY IMAGES
// --------------------------------------------------

export const GALLERY_IMAGES = [
  {
    src: IMAGE_FALLBACKS.drone,
    caption: 'Agricultural Drone Technology',
    tag: 'Agriculture',
  },
  {
    src: IMAGE_FALLBACKS.agriculture,
    caption: 'Modern Agricultural Fields',
    tag: 'Farming',
  },
  {
    src: IMAGE_FALLBACKS.field,
    caption: 'Precision Agriculture',
    tag: 'Technology',
  },
  {
    src: IMAGE_FALLBACKS.drone,
    caption: 'Aerial Drone Operations',
    tag: 'Drone Operations',
  },
  {
    src: IMAGE_FALLBACKS.agriculture,
    caption: 'Agricultural Innovation',
    tag: 'Innovation',
  },
  {
    src: IMAGE_FALLBACKS.field,
    caption: 'Smart Farming Solutions',
    tag: 'Smart Farming',
  },
];

// --------------------------------------------------
// MAHARASHTRA DISTRICTS
// --------------------------------------------------

export const MH_DISTRICTS = [
  'Ahmednagar',
  'Akola',
  'Amravati',
  'Beed',
  'Bhandara',
  'Buldhana',
  'Chandrapur',
  'Chhatrapati Sambhajinagar',
  'Dharashiv',
  'Dhule',
  'Gadchiroli',
  'Gondia',
  'Hingoli',
  'Jalgaon',
  'Jalna',
  'Kolhapur',
  'Latur',
  'Mumbai City',
  'Mumbai Suburban',
  'Nagpur',
  'Nanded',
  'Nandurbar',
  'Nashik',
  'Palghar',
  'Parbhani',
  'Pune',
  'Raigad',
  'Ratnagiri',
  'Sangli',
  'Satara',
  'Sindhudurg',
  'Solapur',
  'Thane',
  'Wardha',
  'Washim',
  'Yavatmal',
];

// --------------------------------------------------
// SERVICES
// --------------------------------------------------

export const SERVICES = [
  {
    icon: '🚁',
    id: 'daas',
    title: 'Drone-as-a-Service',
    shortDesc:
      'Professional agricultural drone spraying services.',
    desc:
      'Explore agricultural spraying services using modern drone technology. Contact our team to discuss field requirements, service availability and pricing.',
    price: 'Request a Quote',
    cta: 'Book a Service',
    isDemo: true,
  },

  {
    icon: '🛩️',
    id: 'sales',
    title: 'Drone Sales',
    shortDesc:
      'Explore agricultural and industrial drone solutions.',
    desc:
      'Discover drone solutions for agricultural and professional applications. Our team can help you understand product configurations and purchasing options.',
    price: 'Request a Quote',
    cta: 'View Products',
    isDemo: true,
  },

  {
    icon: '🎓',
    id: 'training',
    title: 'Drone Pilot Training',
    shortDesc:
      'Learn about professional drone pilot training.',
    desc:
      'Get information about drone pilot training, eligibility, certification requirements and available training programmes.',
    price: 'Contact for Details',
    cta: 'Enquire Now',
    isDemo: true,
  },

  {
    icon: '🔧',
    id: 'amc',
    title: 'Maintenance & Support',
    shortDesc:
      'Technical assistance and maintenance support.',
    desc:
      'Explore maintenance, troubleshooting, spare parts and technical support options for your drone equipment.',
    price: 'Request a Quote',
    cta: 'Get Support',
    isDemo: true,
  },

  {
    icon: '📊',
    id: 'analytics',
    title: 'Agricultural Analytics',
    shortDesc:
      'Explore aerial mapping and agricultural insights.',
    desc:
      'Discover how aerial monitoring, field mapping and agricultural data can support better farm management decisions.',
    price: 'Contact for Details',
    cta: 'Learn More',
    isDemo: true,
  },

  {
    icon: '🌾',
    id: 'subsidy',
    title: 'Subsidy Assistance',
    shortDesc:
      'Get guidance about available agricultural schemes.',
    desc:
      'Our team can help you understand the application process and documentation requirements for applicable government schemes. Eligibility and assistance are subject to official guidelines.',
    price: 'Enquire for Guidance',
    cta: 'Check Eligibility',
    isDemo: true,
  },
];

// --------------------------------------------------
// TESTIMONIALS
// --------------------------------------------------

// Keep empty until genuine customer testimonials
// and publication permissions are received.

export const TESTIMONIALS = [];

// --------------------------------------------------
// COMPANY STATISTICS
// --------------------------------------------------

// Keep empty until verified company figures
// are provided and approved for publication.

export const STATS = [];

// --------------------------------------------------
// SUBSIDY SCHEMES
// --------------------------------------------------

// Do not publish unverified subsidy percentages.
// Official scheme details will be added after verification.

export const SUBSIDY_SCHEMES = [];

// --------------------------------------------------
// DATA STATUS
// --------------------------------------------------

export const DATA_STATUS = {
  isDemo: true,

  message:
    'Demo content. Product specifications, prices, certifications, availability and subsidy information must be verified before publication.',

  companyAddress:
    'Arvi, 442201, District Wardha, Nagpur Division, Maharashtra, India',
};
