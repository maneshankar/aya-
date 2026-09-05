export const CATEGORIES = [
  { id: 'all', label: 'All Masterclasses' },
  { id: 'design-systems', label: 'Design Systems' },
  { id: 'ai-engineering', label: 'AI & Agents' },
  { id: 'web-systems', label: 'Web Architecture' },
  { id: 'product-strategy', label: 'Product Strategy' }
];

export const STATS = [
  {
    value: '1%',
    label: 'Select Cohort Rate',
    desc: 'Rigorous application review ensuring exceptional peer-to-peer discourse and network density.'
  },
  {
    value: '30+',
    label: 'Design & Code Systems',
    desc: 'Production repositories, design tokens, and runnable infrastructure templates shipped.'
  },
  {
    value: '100%',
    label: 'Industry Practitioner Led',
    desc: 'Taught exclusively by active staff engineers, principal designers, and startup founders.'
  },
  {
    value: '8.4k+',
    label: 'Alumni Across Top Tech',
    desc: 'Alumni building at OpenAI, Stripe, Linear, Vercel, Apple, and premier studio practices.'
  }
];

export const TRUST_PARTNERS = [
  { name: 'RED BULL RACING', metric: 'Telemetry UX' },
  { name: 'LINEAR APP', metric: 'Craft Standards' },
  { name: 'XBOX GAMING', metric: 'Design Tokens' },
  { name: 'HUBSPOT', metric: 'Scale Framework' },
  { name: 'VERCEL LABS', metric: 'Next-Gen Edge' }
];

export const PILLARS = [
  {
    number: '01 / RIGOROUS CRAFT',
    title: 'Category-Defining Standards',
    desc: 'Master the technical discipline behind award-winning digital experiences. From micro-interactions to resilient design systems.',
    points: ['Design Token Pipelines & Fari-CI', 'Production-Ready Interaction Math', 'Accessibility & Micro-Interactions']
  },
  {
    number: '02 / ARCHITECTURE FIRST',
    title: 'Modern Web Engineering',
    desc: 'Build high-velocity, robust web applications with modern patterns that withstand massive scale and evolving client needs.',
    points: ['Server-Driven UI Architecture', 'Sub-50ms Latency Performance', 'Zero-State Resilience & Caching']
  },
  {
    number: '03 / NEXT-GEN HORIZONS',
    title: 'Autonomous AI Integration',
    desc: 'Harness LLMs, tool-calling agents, and real-time inference directly within your frontend and backend architectures.',
    points: ['Multi-Agent Tool Orchestration', 'Local & Cloud Embedding RAG', 'Streaming UX & Optimistic UI']
  }
];

export const COURSES = [
  {
    id: 'course-1',
    slug: 'next-gen-design-systems',
    title: 'Next-Gen Design Architecture: Scalable UI Platforms & Token Pipelines',
    tagline: 'Engineer category-defining identities, tactile digital product systems, and resilient token pipelines.',
    category: 'Design Systems',
    categoryId: 'design-systems',
    level: 'Advanced',
    duration: '6 Weeks • 18 Hours',
    totalLessons: 24,
    studentsCount: 1420,
    rating: 4.96,
    reviewsCount: 312,
    price: 349,
    originalPrice: 499,
    badge: 'Flagship Masterclass',
    featured: true,
    thumbnailColor: '#1A1A1A',
    gradient: 'linear-gradient(135deg, #1f1d1c 0%, #302624 100%)',
    instructor: {
      name: 'Elena Rostova',
      role: 'Former VP of Design Systems at Linear & Vercel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Elena has led design infrastructure at world-class tech firms, pioneering Figma-to-code compiler toolchains and resilient token governance.'
    },
    highlights: [
      'Comprehensive Design Token Pipeline from Figma Variables to CSS/JSON',
      'Building headless, accessible, and themeable React component primitives',
      'Automated visual regression testing with Playwright & CI pipelines',
      'Multi-brand architecture supporting dark mode, high contrast, and density'
    ],
    syllabus: [
      {
        title: 'Week 1: Token Architecture & The Single Source of Truth',
        lessons: [
          'Design Token Taxonomies (Global, Semantic, Component-scoped)',
          'Figma Variables to Style Dictionary Automation',
          'Export Pipelines via GitHub Actions'
        ]
      },
      {
        title: 'Week 2: Headless Primitives & Accessible State Machines',
        lessons: [
          'Building with ARIA & Radix Primitives',
          'Keyboard Navigation & Focus Trapping Algorithms',
          'Compound Component Patterns & Context Optimization'
        ]
      },
      {
        title: 'Week 3: Micro-Animations & Fluid Layout Craft',
        lessons: [
          'Spring Physics vs Easing Curves in Modern UI',
          'Container Queries and Fluid Typography Scales',
          'GPU Acceleration and Layout Thrashing Prevention'
        ]
      },
      {
        title: 'Week 4: Packaging, Versioning & Enterprise Adoption',
        lessons: [
          'Monorepo Setup with Turborepo & Changesets',
          'Semantic Versioning & Deprecation Warnings in TypeScript',
          'Documentation Portals with Interactive Playgrounds'
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'autonomous-ai-engineering',
    title: 'Autonomous AI Agents: Production-Grade LLM Systems & Tool Calling',
    tagline: 'Architect robust multi-agent swarms, resilient tool execution pipelines, and deterministic evals.',
    category: 'AI & Agents',
    categoryId: 'ai-engineering',
    level: 'Intermediate to Advanced',
    duration: '8 Weeks • 26 Hours',
    totalLessons: 32,
    studentsCount: 2890,
    rating: 4.98,
    reviewsCount: 540,
    price: 429,
    originalPrice: 599,
    badge: 'Highest Rated',
    featured: true,
    thumbnailColor: '#0E1715',
    gradient: 'linear-gradient(135deg, #101c18 0%, #1e332c 100%)',
    instructor: {
      name: 'Marcus Vance, PhD',
      role: 'AI Systems Architect & Ex-Google DeepMind Contributor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Marcus focuses on autonomous execution loops, stateful tool-calling frameworks, and high-throughput LLM pipelines for production workloads.'
    },
    highlights: [
      'Self-correcting agent loops with structured JSON schemas',
      'Hybrid RAG: Vector search + sparse BM25 + Cross-Encoder reranking',
      'Local model fine-tuning with LoRA and quantized inference engines',
      'Streaming UI integration with WebSockets and Server-Sent Events'
    ],
    syllabus: [
      {
        title: 'Week 1-2: Foundations of Agentic Cognitive Architectures',
        lessons: [
          'ReAct, Plan-and-Solve, and Reflection Patterns',
          'Structured Tool Calling & OpenAPI Spec Validation',
          'Managing Context Windows & Recursive Summarization'
        ]
      },
      {
        title: 'Week 3-4: Multi-Agent Orchestration & Memory',
        lessons: [
          'Hierarchical vs Peer-to-Peer Agent Graphs',
          'State Persistence with Redis & Vector Stores',
          'Human-in-the-Loop Interruption and Resume Handlers'
        ]
      },
      {
        title: 'Week 5-6: Evaluations, Guardrails & Production Observability',
        lessons: [
          'Building Deterministic CI Evals for Non-Deterministic Outputs',
          'Semantic Caching to Slash Token Costs by 60%',
          'Telemetry with OpenTelemetry & Tracing Swarms'
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'search-first-web-engineering',
    title: 'Search-First Web Engineering: Ultra-High-Performance Frontends',
    tagline: 'We build search-first digital systems to help category leaders lead their industries with sub-second speeds.',
    category: 'Web Architecture',
    categoryId: 'web-systems',
    level: 'Advanced',
    duration: '5 Weeks • 16 Hours',
    totalLessons: 20,
    studentsCount: 980,
    rating: 4.92,
    reviewsCount: 185,
    price: 299,
    originalPrice: 399,
    badge: 'Popular',
    featured: true,
    thumbnailColor: '#17141E',
    gradient: 'linear-gradient(135deg, #1b1627 0%, #2e214a 100%)',
    instructor: {
      name: 'Soraya Chen',
      role: 'Principal Staff Engineer at FastTrack Systems',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      bio: 'Soraya has architected websites serving over 500 million monthly visits with perfect 100 Lighthouse performance metrics across all devices.'
    },
    highlights: [
      'Core Web Vitals masterclass: INP, LCP, CLS optimization',
      'Edge rendering, ISR, and Stale-While-Revalidate caching tactics',
      'Advanced semantic markup, Structured JSON-LD for rich snippets',
      'Bundle auditing, tree-shaking, and zero-runtime CSS'
    ],
    syllabus: [
      {
        title: 'Week 1: The Modern Rendering Spectrum',
        lessons: [
          'SSR vs SSG vs ISR vs Islands Architecture',
          'Streaming HTML with Selective Hydration',
          'Optimizing the Critical Rendering Path'
        ]
      },
      {
        title: 'Week 2: Diagnostic Profiling & Chrome DevTools Deep Dive',
        lessons: [
          'Main Thread Blocking Analysis & Long Task Breaking',
          'Memory Leaks and Garbage Collection in Single Page Apps',
          'Network Waterfalls and HTTP/3 Prioritization'
        ]
      }
    ]
  },
  {
    id: 'course-4',
    slug: 'executive-product-strategy',
    title: 'Executive Product Strategy: Category Creation & Market Domination',
    tagline: 'Transform from a feature builder into a category-defining product executive with battle-tested frameworks.',
    category: 'Product Strategy',
    categoryId: 'product-strategy',
    level: 'Executive / Lead',
    duration: '4 Weeks • 14 Hours',
    totalLessons: 18,
    studentsCount: 1150,
    rating: 4.95,
    reviewsCount: 220,
    price: 389,
    originalPrice: 520,
    badge: 'Executive Level',
    featured: false,
    thumbnailColor: '#201A15',
    gradient: 'linear-gradient(135deg, #241910 0%, #3d2a19 100%)',
    instructor: {
      name: 'Alexander Sterling',
      role: 'Managing Partner & Former Head of Product at Figma',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      bio: 'Alexander consults Fortune 100 leadership on competitive moats, pricing power, and narrative-driven product development.'
    },
    highlights: [
      'The Category Design Playbook: Positioning that commands 3x pricing',
      'Quantitative Unit Economics & Viral Expansion Loops',
      'Running High-Consequence Executive Alignment Workshops',
      'Metrics that Matter: North Star vs Counter-Metrics'
    ],
    syllabus: [
      {
        title: 'Week 1: Category Design & The Point of View (POV)',
        lessons: [
          'Differentiating vs Dominating: Why Better Never Wins',
          'Framing the Problem Space and Naming the Monster',
          'Drafting the Category Manifesto'
        ]
      },
      {
        title: 'Week 2: Product-Led Flywheels & Expansion Velocity',
        lessons: [
          'Designing Frictionless Onboarding Paths',
          'Viral Loops and Collaborative Multi-Player Dynamics',
          'Tiering Features: Paywalls, Freemium & Enterprise Add-ons'
        ]
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'category-defining-identity',
    title: 'Category-Defining Identity: Art Direction, Typography & Motion',
    tagline: 'Crafting bespoke identities, tactile design guidelines, and cohesive visual systems that outpace the market.',
    category: 'Design Systems',
    categoryId: 'design-systems',
    level: 'Intermediate',
    duration: '6 Weeks • 20 Hours',
    totalLessons: 22,
    studentsCount: 1780,
    rating: 4.97,
    reviewsCount: 390,
    price: 329,
    originalPrice: 450,
    badge: 'High Craft',
    featured: false,
    thumbnailColor: '#1B1417',
    gradient: 'linear-gradient(135deg, #21131a 0%, #3b1e2e 100%)',
    instructor: {
      name: 'Camille Duvall',
      role: 'Creative Director at Studio Atelier Paris',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      bio: 'Camille has shaped brand identities for Hermès, Polestar, and emerging luxury tech brands across Europe.'
    },
    highlights: [
      'Editorial typography pairings and custom type micro-adjustments',
      'Editorial color theory & dynamic contrast ratios',
      'Directing 3D assets, lighting, and tactile texture materials',
      'Interactive brand guidelines and living spec portals'
    ],
    syllabus: [
      {
        title: 'Week 1: Type As Voice & Editorial Layout',
        lessons: [
          'History and Anatomy of High-Fashion & Editorial Fonts',
          'Mathematical Proportions: The Golden Ratio & Asymmetry',
          'Grid Breaking and Kinetic Typography'
        ]
      },
      {
        title: 'Week 2: Tactile Materials & Physical-Digital Convergence',
        lessons: [
          'Translating Physical Textures to Web Shaders & CSS',
          'Skeuomorphic Micro-Touches in Modern Minimalist Design',
          'Case Study: Creating a $100M Brand Identity in 14 Days'
        ]
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'fullstack-design-engineering',
    title: 'Full-Stack Design Engineering: Bridging Figma to React Server Components',
    tagline: 'Seamlessly blend creative direction, responsive animation math, and full-stack React architecture.',
    category: 'Web Architecture',
    categoryId: 'web-systems',
    level: 'All Levels',
    duration: '7 Weeks • 22 Hours',
    totalLessons: 28,
    studentsCount: 2100,
    rating: 4.94,
    reviewsCount: 410,
    price: 369,
    originalPrice: 480,
    badge: 'Bestseller',
    featured: false,
    thumbnailColor: '#14181B',
    gradient: 'linear-gradient(135deg, #131d24 0%, #1e3545 100%)',
    instructor: {
      name: 'Julian Ross',
      role: 'Staff Design Engineer & Open Source Author',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      bio: 'Julian creates the intersection of code and craft, having authored popular animation and layout libraries downloaded millions of times.'
    },
    highlights: [
      'Interactive Canvas & SVG manipulation with performant physics',
      'React Server Components & streaming suspense boundaries',
      'Micro-interactions: Hover magnetics, momentum scrolling, and morphs',
      'Full deployment pipeline on Vercel Edge with zero downtime'
    ],
    syllabus: [
      {
        title: 'Week 1: The Design Engineer Mindset',
        lessons: [
          'Why the Hybrid Role is Dominating Tech Hiring',
          'Thinking in Vectors, Bezier Curves, and Component Trees',
          'Setting Up a Lightning-Fast Prototyping Sandbox'
        ]
      },
      {
        title: 'Week 2: Smooth Motion & Gesture Math',
        lessons: [
          'Pointer Events, Velocity Tracking, and Rubber-banding',
          'Scroll-Linked Animations without Frame Drops',
          'Layout Animations and FLIP Techniques'
        ]
      }
    ]
  }
];

export const TESTIMONIAL = {
  quote: 'The masterclasses feel like an extended foundry: deep intellectual engagement, absolute technical rigor, and zero vanity metrics.',
  author: 'Genevieve Dupré',
  role: 'Managing Principal & Creative Partner, Veloce Digital'
};

export const FAQ_ITEMS = [
  {
    question: 'How are cohort masterclasses structured?',
    answer: 'Each masterclass is structured into high-density modules with on-demand HD lecture recordings, downloadable production repositories, weekly live critique sessions, and direct 1-on-1 code reviews with staff instructors.'
  },
  {
    question: 'Do I get lifetime access to the code and curriculum?',
    answer: 'Yes. Once enrolled, you receive lifetime access to all course materials, future curriculum updates, community Discord access, and exclusive invited masterclass sessions.'
  },
  {
    question: 'Are there team or enterprise pricing packages available?',
    answer: 'We provide custom enterprise packages for teams of 5 or more with centralized billing, private workshops, and dedicated feedback channels for company design systems.'
  },
  {
    question: 'What is the refund policy?',
    answer: 'We offer a no-questions-asked 14-day refund guarantee. If the technical depth does not surpass your expectations, you receive a full refund with one click.'
  }
];
