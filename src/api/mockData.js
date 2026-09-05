export const CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'industrial-design', label: 'Industrial Design' },
  { id: 'digital-arts', label: 'Digital Arts' },
  { id: 'communication', label: 'Brand & Communication' },
  { id: 'fine-arts', label: 'Tactile & Fine Arts' }
];

export const STATS = [
  {
    value: '89',
    label: 'Interactive Courses',
    desc: 'Multi-camera studio courses led by industry storytellers and independent authors.'
  },
  {
    value: '500+',
    label: 'Hours of Video',
    desc: 'Deep-dive assignment walkthroughs, uncut studio sessions, and technique breakdowns.'
  },
  {
    value: '4.9 ★',
    label: 'Platform Rating',
    desc: 'Over 8,400 verified student reviews across all creative and technical tracks.'
  }
];

export const TRUST_TICKERS = [
  {
    title: '1:1 feedback from mentors',
    desc: 'Direct guidance on your actual project files and portfolio pieces.'
  },
  {
    title: 'Cohort-based learning',
    desc: 'Deep, active community discussing feedback and running critiques.'
  },
  {
    title: 'Workshop-grade resources',
    desc: 'Vector files, CAD models, reference assets, and custom Figma kits.'
  }
];

export const WHATS_IN_THE_BOX = [
  {
    icon: 'compass',
    title: 'Path to mastery',
    points: [
      'Multi-camera studio video capture',
      'Downloadable project files & assets',
      'Step-by-step written guides & specs',
      'Regular updates from instructors'
    ]
  },
  {
    icon: 'layers',
    title: 'Assignment & grading',
    points: [
      'Real-world design briefs & constraints',
      'Assignment grading framework',
      '1:1 instructor feedback recordings',
      'Public student showcase & critique gallery'
    ]
  },
  {
    icon: 'box',
    title: 'The physical reality',
    points: [
      'Home delivery of course materials',
      'Subscription-inclusive physical product boxes',
      'Hardcover course books & companion guides',
      'Curated tools directly used in videos'
    ]
  }
];

export const COURSES = [
  {
    id: 'course-1',
    slug: 'foundations-of-industrial-design',
    title: 'Foundations of Industrial Design',
    tagline: 'Form, function, drafting techniques, and product manufacturing fundamentals.',
    category: 'Industrial Design',
    categoryId: 'industrial-design',
    badge: 'INDUSTRIAL DESIGN',
    modulesCount: '4 modules',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks • 12 Hours',
    totalLessons: 18,
    studentsCount: 3420,
    rating: 4.97,
    reviewsCount: 420,
    price: 0,
    originalPrice: 199,
    isFree: true,
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#1C1A17"><rect width="400" height="250" fill="#1C1A17"/><path d="M60 190 L200 60 L340 190 Z" stroke="#D94E34" stroke-width="2" fill="none" stroke-dasharray="4 4"/><circle cx="200" cy="130" r="50" stroke="#FFFFFF" stroke-width="2" fill="none"/><line x1="60" y1="190" x2="340" y2="190" stroke="#E7E3DA" stroke-width="1.5"/><text x="200" y="225" font-family="monospace" font-size="11" fill="#D94E34" text-anchor="middle" letter-spacing="2">INDUSTRIAL SCHEMATICS</text></svg>`,
    gradient: 'linear-gradient(135deg, #1C1A17 0%, #2E2822 100%)',
    instructor: {
      name: 'Sam Roux',
      role: 'Lead Industrial Designer at Studio Veloce',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Sam has drafted iconic consumer electronics and tactile hardware devices for world-renowned design houses.'
    },
    highlights: [
      'Perspective sketching & rapid visual communication',
      'Design for injection molding & CNC manufacturing',
      'Tactile materials, finishes, and ergonomic tolerances',
      'Full physical prototype development workflow'
    ],
    syllabus: [
      {
        title: 'Module 1: Visual Language & Orthographic Drawing',
        lessons: ['Rapid Concept Sketching', 'Perspective Grids', 'Form Exploration']
      },
      {
        title: 'Module 2: Materials, Textures & CMF',
        lessons: ['Metals, Polymers & Composites', 'Surface Finishes', 'Material Selection']
      },
      {
        title: 'Module 3: Prototyping to Production',
        lessons: ['Clay & Foam Modeling', '3D CAD Translation', 'Manufacturing Handoff']
      },
      {
        title: 'Module 4: Final Capstone Project Brief',
        lessons: ['Independent Hardware Brief', 'Peer Review', 'Instructor Grading']
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'photo-anatomy-for-photographers',
    title: 'Photo Anatomy for Photographers',
    tagline: 'Lighting, classical composition, sculpture study, and editorial visual narrative.',
    category: 'Digital Arts',
    categoryId: 'digital-arts',
    badge: 'DIGITAL ARTS',
    modulesCount: '6 modules',
    level: 'All Levels',
    duration: '6 Weeks • 18 Hours',
    totalLessons: 24,
    studentsCount: 2890,
    rating: 4.95,
    reviewsCount: 380,
    price: 0,
    originalPrice: 249,
    isFree: true,
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#141A1C"><rect width="400" height="250" fill="#141A1C"/><circle cx="200" cy="115" r="65" stroke="#D94E34" stroke-width="1.5" fill="none"/><path d="M160 170 Q200 90 240 170" stroke="#FFFFFF" stroke-width="2" fill="none"/><line x1="100" y1="125" x2="300" y2="125" stroke="#E7E3DA" stroke-width="1" stroke-dasharray="3 3"/><text x="200" y="225" font-family="monospace" font-size="11" fill="#D94E34" text-anchor="middle" letter-spacing="2">CLASSICAL LIGHTING STUDY</text></svg>`,
    gradient: 'linear-gradient(135deg, #141A1C 0%, #202D30 100%)',
    instructor: {
      name: 'Marcus Webb',
      role: 'Editorial Director & Master of Light',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Marcus teaches lighting math, shadow sculpture, and storytelling through medium-format photography.'
    },
    highlights: [
      'Sculptural lighting techniques using chiaroscuro',
      'Composition grids inspired by Renaissance masters',
      'Color grading for archival and editorial prints',
      'Working with live models and art director briefs'
    ],
    syllabus: [
      {
        title: 'Module 1: Principles of Light & Shadow',
        lessons: ['Inverse Square Law', 'Hard vs Soft Quality', 'Reflective Modifiers']
      },
      {
        title: 'Module 2: Sculptural Form & Subject Study',
        lessons: ['Posing Geometry', 'Facial Plane Lighting', 'Negative Space']
      },
      {
        title: 'Module 3: Color Grading & Final Presentation',
        lessons: ['Tone Curves in Capture One', 'Print Sharpening', 'Exhibition Curation']
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'directorial-brand-identity',
    title: 'Directorial Brand Identity',
    tagline: 'Typography, cinematic art direction, and enduring visual communication systems.',
    category: 'Brand & Communication',
    categoryId: 'communication',
    badge: 'COMMUNICATION',
    modulesCount: '3 modules',
    level: 'Intermediate to Advanced',
    duration: '3 Weeks • 10 Hours',
    totalLessons: 14,
    studentsCount: 4120,
    rating: 4.98,
    reviewsCount: 512,
    price: 0,
    originalPrice: 179,
    isFree: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#1A141A"><rect width="400" height="250" fill="#1A141A"/><path d="M80 180 Q200 40 320 180" stroke="#D94E34" stroke-width="2.5" fill="none"/><path d="M100 180 Q200 70 300 180" stroke="#FFFFFF" stroke-width="1.5" fill="none"/><text x="200" y="225" font-family="monospace" font-size="11" fill="#D94E34" text-anchor="middle" letter-spacing="2">TYPOGRAPHIC TOPOGRAPHY</text></svg>`,
    gradient: 'linear-gradient(135deg, #1A141A 0%, #2B1D2B 100%)',
    instructor: {
      name: 'Kate Sterling',
      role: 'Creative Partner & Brand Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      bio: 'Kate has shaped category-defining visual identities for luxury houses and independent publishing imprints.'
    },
    highlights: [
      'Bespoke typography selection and micro-kerning craft',
      'Spatial layout systems for print and digital surfaces',
      'Writing compelling brand manifestos and visual styleguides',
      'Client presentation choreography and feedback alignment'
    ],
    syllabus: [
      {
        title: 'Module 1: The Directorial Mindset',
        lessons: ['Point of View & Category Creation', 'Moodboarding with Tactile Materials', 'Visual Metaphor']
      },
      {
        title: 'Module 2: Typographic Systems & Grids',
        lessons: ['Asymmetrical Editorial Grids', 'Hierarchy & Contrast', 'Motion in Type']
      },
      {
        title: 'Module 3: Identity Delivery & Living Guidelines',
        lessons: ['Component Specs', 'Brand Books', 'Launch Strategy']
      }
    ]
  }
];

export const MARKETPLACE_ITEMS = [
  {
    id: 'art-1',
    title: 'Harbor in Autumn',
    medium: 'Oil on canvas / Signed print',
    price: 240,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    artist: 'Elena Rostova'
  },
  {
    id: 'art-2',
    title: 'Constructed Reality: No. 4',
    medium: 'Charcoal on archival paper',
    price: 180,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    artist: 'Marcus Vance'
  },
  {
    id: 'art-3',
    title: 'Atelier in Color',
    medium: 'Fine Art Giclée Print',
    price: 150,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    artist: 'Kate Sterling'
  }
];

export const PHYSICAL_GEAR = [
  {
    id: 'gear-1',
    title: 'Mastery Sable Brush Set',
    subtitle: 'Set of 5 Japanese hair brushes',
    price: 85,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gear-2',
    title: 'Cold-Press Watercolor Block',
    subtitle: '300gsm, 20 sheets 100% cotton',
    price: 34,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gear-3',
    title: 'Traveler Tabletop Easel',
    subtitle: 'Solid beechwood with storage drawer',
    price: 110,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
  }
];

export const MENTORS = [
  {
    name: 'Sam Roux',
    role: 'Lead Industrial Designer',
    action: 'Book a 45-min session',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Marcus Webb',
    role: 'Director & Typographer',
    action: 'Book a 45-min session',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Kate Sterling',
    role: 'Founder & Fine Artist',
    action: 'Book a 45-min session',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const ARTICLES = [
  {
    tag: 'ARTICLE',
    title: 'The importance of tactile craft in a digital world',
    readTime: '8 min read'
  },
  {
    tag: 'DOWNLOAD',
    title: 'Copyright-free reference textures from Aya Archive',
    readTime: '250 Assets • Free'
  },
  {
    tag: 'ESSAY',
    title: 'Colour theory beyond screens',
    readTime: '5 min read'
  }
];
