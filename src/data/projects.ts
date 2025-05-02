import { Project, ProjectCategory, ProjectSubcategory } from '../types/project';

export const projects: Project[] = [
  // Mobile Development - Android (Kotlin)
  {
    id: 'android-fitness-tracker',
    title: 'FitTrackPro',
    shortDescription: 'Comprehensive fitness tracking with personalized coaching',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.ANDROID,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.fittrackpro',
    githubUrl: 'https://github.com/yourusername/fittrackpro',
    timeline: {
      start: '2023-08-01',
      end: '2023-11-15',
    },
    techStack: [
      'Kotlin', 'Jetpack Compose', 'Room', 'Dagger Hilt', 'Google Fit API', 'Firebase'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4498361/pexels-photo-4498361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/345678912',
    role: 'Lead Android Developer',
    teamSize: 3,
    keyFeatures: [
      'Activity tracking with machine learning form analysis',
      'Personalized workout plans based on progress',
      'Nutrition planning and meal logging',
      'Social challenges and community features'
    ],
    challenges: [
      'Implementing accurate exercise recognition algorithms',
      'Optimizing battery usage during all-day tracking',
      'Handling varied Android device sensors and capabilities'
    ],
    performance: {
      appStoreRating: 4.7,
      downloads: 250000,
      averageSessionTime: '15.2 minutes',
      retentionRate: '68%',
    },
  },
  {
    id: 'android-productivity-app',
    title: 'TaskMaster',
    shortDescription: 'Advanced task management with AI prioritization',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.ANDROID,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.taskmaster',
    githubUrl: 'https://github.com/yourusername/taskmaster',
    timeline: {
      start: '2023-04-10',
      end: '2023-07-20',
    },
    techStack: [
      'Kotlin', 'MVVM', 'Room', 'WorkManager', 'TensorFlow Lite', 'Google Calendar API'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6941855/pexels-photo-6941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6941884/pexels-photo-6941884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/456789123',
    role: 'Android Developer',
    teamSize: 2,
    keyFeatures: [
      'Smart task scheduling with AI prioritization',
      'Calendar integration and time blocking',
      'Habit tracking and productivity analytics',
      'Voice input and natural language processing'
    ],
    challenges: [
      'Designing an AI system that effectively prioritizes tasks',
      'Creating smooth integrations with multiple calendaring systems',
      'Building a responsive UI that scales across device sizes'
    ],
    performance: {
      appStoreRating: 4.8,
      downloads: 180000,
      averageSessionTime: '9.5 minutes',
      retentionRate: '74%',
    },
  },
  {
    id: 'android-media-player',
    title: 'SoundScape',
    shortDescription: 'Advanced audio player with spatial audio and visualization',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.ANDROID,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.soundscape',
    githubUrl: 'https://github.com/yourusername/soundscape',
    timeline: {
      start: '2023-01-15',
      end: '2023-04-05',
    },
    techStack: [
      'Kotlin', 'ExoPlayer', 'Media3', 'OpenGL ES', 'RxJava', 'Room'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/567891234',
    role: 'Audio Systems Developer',
    teamSize: 4,
    keyFeatures: [
      'High-fidelity audio playback with custom equalizer',
      'Immersive visualizations that respond to audio analysis',
      'Spatial audio support for headphone listening',
      'Background audio processing and playlist management'
    ],
    challenges: [
      'Implementing low-latency audio processing pipelines',
      'Optimizing real-time visualizations for performance',
      'Supporting a wide range of audio formats and sources'
    ],
    performance: {
      appStoreRating: 4.6,
      downloads: 320000,
      averageSessionTime: '25.8 minutes',
      retentionRate: '71%',
    },
  },
  {
    id: 'android-smart-home',
    title: 'HomeHub',
    shortDescription: 'Comprehensive smart home control and automation',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.ANDROID,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.homehub',
    githubUrl: 'https://github.com/yourusername/homehub',
    timeline: {
      start: '2022-10-01',
      end: '2023-01-10',
    },
    techStack: [
      'Kotlin', 'Jetpack Compose', 'Matter API', 'Google Home API', 'MQTT', 'WorkManager'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3932894/pexels-photo-3932894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3932927/pexels-photo-3932927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/678912345',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Unified control for multiple smart home ecosystems',
      'Advanced automation with conditional triggers and schedules',
      'Energy usage monitoring and optimization suggestions',
      'Voice control integration with multiple assistants'
    ],
    challenges: [
      'Integrating with diverse smart home protocols and APIs',
      'Creating a reliable local control system that works without internet',
      'Designing an intuitive UI for complex automation creation'
    ],
    performance: {
      appStoreRating: 4.7,
      downloads: 150000,
      averageSessionTime: '8.3 minutes',
      retentionRate: '76%',
    },
  },

  // Mobile Development - Cross-platform (React Native/Flutter)
  {
    id: 'cross-travel-companion',
    title: 'GlobalTrek',
    shortDescription: 'All-in-one travel companion with offline functionality',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.CROSS_PLATFORM,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.globaltrek',
    githubUrl: 'https://github.com/yourusername/globaltrek',
    timeline: {
      start: '2023-07-01',
      end: '2023-10-15',
    },
    techStack: [
      'React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation', 'Realm', 'Mapbox'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/123789456',
    role: 'Lead Mobile Developer',
    teamSize: 4,
    keyFeatures: [
      'Offline maps and guides for 200+ cities',
      'Itinerary planning with AI recommendations',
      'Language translation with camera text recognition',
      'Local emergency information and contacts'
    ],
    challenges: [
      'Implementing efficient offline data storage for large datasets',
      'Optimizing performance on lower-end Android devices',
      'Creating a unified design language across platforms'
    ],
    performance: {
      appStoreRating: 4.8,
      downloads: 450000,
      averageSessionTime: '22.6 minutes',
      retentionRate: '73%',
    },
  },
  {
    id: 'cross-food-delivery',
    title: 'MealDash',
    shortDescription: 'On-demand food delivery with real-time tracking',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.CROSS_PLATFORM,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.mealdash',
    githubUrl: 'https://github.com/yourusername/mealdash',
    timeline: {
      start: '2023-03-10',
      end: '2023-06-30',
    },
    techStack: [
      'Flutter', 'Dart', 'BLoC', 'Firebase', 'Google Maps API', 'Stripe'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4350111/pexels-photo-4350111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/234567891',
    role: 'Mobile Developer',
    teamSize: 5,
    keyFeatures: [
      'Real-time order tracking with interactive map',
      'Restaurant discovery with personalized recommendations',
      'Multi-restaurant cart and checkout',
      'Secure payment processing with multiple options'
    ],
    challenges: [
      'Building a reliable real-time location tracking system',
      'Creating a smooth ordering flow with complex customizations',
      'Implementing secure payment processing across platforms'
    ],
    performance: {
      appStoreRating: 4.7,
      downloads: 320000,
      averageSessionTime: '14.3 minutes',
      retentionRate: '68%',
    },
  },
  {
    id: 'cross-language-learning',
    title: 'LinguaLearn',
    shortDescription: 'Gamified language learning with speech recognition',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.CROSS_PLATFORM,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.linguallearn',
    githubUrl: 'https://github.com/yourusername/linguallearn',
    timeline: {
      start: '2022-11-15',
      end: '2023-03-05',
    },
    techStack: [
      'React Native', 'TypeScript', 'MobX', 'TensorFlow.js', 'Firebase', 'Lottie'
    ],
    screenshots: [
      'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/267685/pexels-photo-267685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/345678912',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Interactive lessons for 15+ languages',
      'Speech recognition for pronunciation feedback',
      'Adaptive learning path based on performance',
      'Offline learning mode with synchronization'
    ],
    challenges: [
      'Implementing accurate speech recognition across languages',
      'Creating an engaging gamification system',
      'Optimizing content downloading for offline use'
    ],
    performance: {
      appStoreRating: 4.9,
      downloads: 580000,
      averageSessionTime: '18.5 minutes',
      retentionRate: '79%',
    },
  },
  {
    id: 'cross-finance-manager',
    title: 'BudgetBuddy',
    shortDescription: 'Personal finance management with predictive analytics',
    category: ProjectCategory.MOBILE,
    subcategory: ProjectSubcategory.CROSS_PLATFORM,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourusername.budgetbuddy',
    githubUrl: 'https://github.com/yourusername/budgetbuddy',
    timeline: {
      start: '2022-08-01',
      end: '2022-11-10',
    },
    techStack: [
      'Flutter', 'Dart', 'Provider', 'SQLite', 'ML Kit', 'Plaid API'
    ],
    screenshots: [
      'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/210579/pexels-photo-210579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/456789123',
    role: 'Mobile Developer',
    teamSize: 2,
    keyFeatures: [
      'Receipt scanning with automatic categorization',
      'Budget planning with predictive spending alerts',
      'Investment tracking and portfolio analysis',
      'Financial goal setting and progress tracking'
    ],
    challenges: [
      'Building accurate receipt scanning and data extraction',
      'Creating insightful yet simple data visualizations',
      'Implementing secure banking connections across regions'
    ],
    performance: {
      appStoreRating: 4.6,
      downloads: 230000,
      averageSessionTime: '12.1 minutes',
      retentionRate: '71%',
    },
  },

  // Web Development - Full-stack applications (MERN/MEAN stack)
  {
    id: 'fullstack-project-management',
    title: 'ProjectHub',
    shortDescription: 'Comprehensive project management platform',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.FULLSTACK,
    liveUrl: 'https://projecthub-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/projecthub',
    timeline: {
      start: '2023-06-01',
      end: '2023-09-15',
    },
    techStack: [
      'React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS S3', 'Redis'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/567891234',
    role: 'Full-stack Developer',
    teamSize: 4,
    keyFeatures: [
      'Real-time task and project management',
      'Team collaboration tools with document sharing',
      'Time tracking and resource allocation',
      'Automated reporting and analytics dashboard'
    ],
    challenges: [
      'Building a scalable real-time collaboration system',
      'Creating an intuitive drag-and-drop interface for task management',
      'Implementing complex permission systems for team hierarchies'
    ],
    performance: {
      lighthouseScores: {
        performance: 92,
        accessibility: 98,
        bestPractices: 95,
        seo: 97
      },
      loadTime: '1.2s',
      users: 15000,
      conversionRate: '32%',
    },
  },
  {
    id: 'fullstack-crm',
    title: 'ClientCore',
    shortDescription: 'Advanced CRM system with AI-powered insights',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.FULLSTACK,
    liveUrl: 'https://clientcore-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/clientcore',
    timeline: {
      start: '2023-02-15',
      end: '2023-05-30',
    },
    techStack: [
      'Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TensorFlow.js', 'Docker'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/678912345',
    role: 'Lead Developer',
    teamSize: 5,
    keyFeatures: [
      'Customer data management with advanced segmentation',
      'Sales pipeline visualization and forecasting',
      'AI-powered customer insights and recommendations',
      'Email marketing campaign management and analytics'
    ],
    challenges: [
      'Designing a flexible data architecture for diverse CRM use cases',
      'Implementing complex data analysis and visualization features',
      'Creating a responsive UI that handled large datasets efficiently'
    ],
    performance: {
      lighthouseScores: {
        performance: 89,
        accessibility: 96,
        bestPractices: 94,
        seo: 98
      },
      loadTime: '1.5s',
      users: 8500,
      conversionRate: '28%',
    },
  },
  {
    id: 'fullstack-education',
    title: 'EduPortal',
    shortDescription: 'Comprehensive learning management system',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.FULLSTACK,
    liveUrl: 'https://eduportal-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/eduportal',
    timeline: {
      start: '2022-10-01',
      end: '2023-02-10',
    },
    techStack: [
      'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'WebRTC'
    ],
    screenshots: [
      'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/789123456',
    role: 'Full-stack Developer',
    teamSize: 6,
    keyFeatures: [
      'Course creation and management tools',
      'Interactive video lessons with quizzes',
      'Live virtual classroom with screen sharing',
      'Comprehensive student progress tracking and analytics'
    ],
    challenges: [
      'Building a reliable video streaming system for live classes',
      'Creating an intuitive course builder with complex content types',
      'Implementing a scalable assessment and grading system'
    ],
    performance: {
      lighthouseScores: {
        performance: 87,
        accessibility: 95,
        bestPractices: 92,
        seo: 96
      },
      loadTime: '1.8s',
      users: 12000,
      conversionRate: '40%',
    },
  },
  {
    id: 'fullstack-healthtech',
    title: 'MediConnect',
    shortDescription: 'Telemedicine platform for patient-doctor interactions',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.FULLSTACK,
    liveUrl: 'https://mediconnect-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/mediconnect',
    timeline: {
      start: '2022-07-15',
      end: '2022-11-30',
    },
    techStack: [
      'Vue.js', 'Vuex', 'Node.js', 'Express', 'PostgreSQL', 'Twilio API', 'Firebase'
    ],
    screenshots: [
      'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/7579813/pexels-photo-7579813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/123456789',
    role: 'Lead Developer',
    teamSize: 4,
    keyFeatures: [
      'Secure video consultations with end-to-end encryption',
      'Electronic health records management',
      'Appointment scheduling and reminders',
      'E-prescription and medication tracking'
    ],
    challenges: [
      'Implementing HIPAA-compliant data storage and transmission',
      'Building reliable video conferencing with fallback options',
      'Creating a responsive interface for diverse medical workflows'
    ],
    performance: {
      lighthouseScores: {
        performance: 91,
        accessibility: 97,
        bestPractices: 96,
        seo: 95
      },
      loadTime: '1.4s',
      users: 7500,
      conversionRate: '35%',
    },
  },

  // Web Development - E-commerce solutions
  {
    id: 'ecommerce-fashion',
    title: 'TrendStyle',
    shortDescription: 'Fashion e-commerce platform with AR try-on',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.ECOMMERCE,
    liveUrl: 'https://trendstyle-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/trendstyle',
    timeline: {
      start: '2023-05-01',
      end: '2023-08-15',
    },
    techStack: [
      'Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe', 'AR.js', 'AWS S3'
    ],
    screenshots: [
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/234567891',
    role: 'Full-stack Developer',
    teamSize: 5,
    keyFeatures: [
      'Virtual fitting room with AR technology',
      'Personalized product recommendations',
      'Secure payment processing with multiple options',
      'Inventory management and order tracking'
    ],
    challenges: [
      'Implementing accurate AR try-on functionality',
      'Creating a high-performance product search and filter system',
      'Building a secure and compliant payment processing flow'
    ],
    performance: {
      lighthouseScores: {
        performance: 88,
        accessibility: 94,
        bestPractices: 93,
        seo: 97
      },
      loadTime: '1.7s',
      users: 25000,
      conversionRate: '3.2%',
    },
  },
  {
    id: 'ecommerce-electronics',
    title: 'TechTrove',
    shortDescription: 'Electronics marketplace with detailed specifications',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.ECOMMERCE,
    liveUrl: 'https://techtrove-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/techtrove',
    timeline: {
      start: '2023-01-15',
      end: '2023-04-30',
    },
    techStack: [
      'React', 'Redux Toolkit', 'Node.js', 'PostgreSQL', 'Stripe', 'Elasticsearch', 'Redis'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/345678912',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Advanced product comparison tool',
      'Technical specification filtering and search',
      'Product review and rating system',
      'Automated price tracking and alerting'
    ],
    challenges: [
      'Building a comprehensive yet user-friendly product comparison system',
      'Implementing efficient search across thousands of products',
      'Creating a secure multi-vendor marketplace system'
    ],
    performance: {
      lighthouseScores: {
        performance: 90,
        accessibility: 95,
        bestPractices: 94,
        seo: 96
      },
      loadTime: '1.5s',
      users: 18000,
      conversionRate: '2.8%',
    },
  },
  {
    id: 'ecommerce-grocery',
    title: 'FreshCart',
    shortDescription: 'Grocery delivery platform with same-day service',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.ECOMMERCE,
    liveUrl: 'https://freshcart-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/freshcart',
    timeline: {
      start: '2022-09-01',
      end: '2022-12-15',
    },
    techStack: [
      'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API', 'Socket.io'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4198578/pexels-photo-4198578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4198577/pexels-photo-4198577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4198579/pexels-photo-4198579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/456789123',
    role: 'Full-stack Developer',
    teamSize: 4,
    keyFeatures: [
      'Real-time inventory management and availability',
      'Delivery scheduling with time slot selection',
      'Fresh produce quality guarantee system',
      'Subscription-based recurring orders'
    ],
    challenges: [
      'Implementing an efficient inventory management system for perishable goods',
      'Building a reliable delivery scheduling and routing system',
      'Creating a high-performance mobile-first shopping experience'
    ],
    performance: {
      lighthouseScores: {
        performance: 92,
        accessibility: 96,
        bestPractices: 95,
        seo: 98
      },
      loadTime: '1.3s',
      users: 22000,
      conversionRate: '4.1%',
    },
  },
  {
    id: 'ecommerce-marketplace',
    title: 'CraftBazaar',
    shortDescription: 'Marketplace for handmade and artisanal products',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.ECOMMERCE,
    liveUrl: 'https://craftbazaar-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/craftbazaar',
    timeline: {
      start: '2022-05-15',
      end: '2022-08-30',
    },
    techStack: [
      'Vue.js', 'Vuex', 'Node.js', 'PostgreSQL', 'PayPal', 'AWS S3', 'Algolia'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4348748/pexels-photo-4348748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4458427/pexels-photo-4458427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/567891234',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Multi-vendor marketplace with custom storefronts',
      'Commission-based payment processing',
      'Custom product customization options',
      'Integrated shipping label generation'
    ],
    challenges: [
      'Building a flexible system for sellers to customize products',
      'Implementing a fair commission and payment distribution system',
      'Creating a discovery-focused search and recommendation engine'
    ],
    performance: {
      lighthouseScores: {
        performance: 89,
        accessibility: 93,
        bestPractices: 92,
        seo: 95
      },
      loadTime: '1.6s',
      users: 15000,
      conversionRate: '3.5%',
    },
  },

  // Web Development - Progressive Web Apps
  {
    id: 'pwa-music-streaming',
    title: 'MelodyStream',
    shortDescription: 'Music streaming PWA with offline playback',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.PWA,
    liveUrl: 'https://melodystream-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/melodystream',
    timeline: {
      start: '2023-04-01',
      end: '2023-07-15',
    },
    techStack: [
      'React', 'Redux', 'Workbox', 'Node.js', 'MongoDB', 'Web Audio API', 'IndexedDB'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/678912345',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Offline music playback and playlist management',
      'Background audio playback with media controls',
      'Adaptive streaming quality based on network conditions',
      'Collaborative playlist creation and sharing'
    ],
    challenges: [
      'Implementing efficient audio caching for offline playback',
      'Creating a responsive audio player with visualization',
      'Building background sync for user playlist changes'
    ],
    performance: {
      lighthouseScores: {
        performance: 94,
        accessibility: 97,
        bestPractices: 98,
        seo: 96,
        pwa: 100
      },
      loadTime: '1.2s',
      users: 35000,
      offlineUsage: '42%',
    },
  },
  {
    id: 'pwa-productivity',
    title: 'TaskMaster',
    shortDescription: 'Advanced task management PWA with offline support',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.PWA,
    liveUrl: 'https://taskmaster-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/taskmaster',
    timeline: {
      start: '2022-12-01',
      end: '2023-03-15',
    },
    techStack: [
      'React', 'TypeScript', 'Redux Toolkit', 'Workbox', 'IndexedDB', 'Node.js', 'MongoDB'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6794938/pexels-photo-6794938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/789123456',
    role: 'Full-stack Developer',
    teamSize: 2,
    keyFeatures: [
      'Complete offline task management',
      'Background synchronization of changes',
      'Push notifications for task reminders',
      'Cross-device synchronization'
    ],
    challenges: [
      'Implementing conflict resolution for offline changes',
      'Creating a reliable notification system across devices',
      'Building an efficient data synchronization system'
    ],
    performance: {
      lighthouseScores: {
        performance: 96,
        accessibility: 98,
        bestPractices: 97,
        seo: 98,
        pwa: 100
      },
      loadTime: '0.9s',
      users: 28000,
      offlineUsage: '58%',
    },
  },
  {
    id: 'pwa-recipe-app',
    title: 'RecipeRover',
    shortDescription: 'Recipe discovery and cooking assistant PWA',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.PWA,
    liveUrl: 'https://reciperover-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/reciperover',
    timeline: {
      start: '2022-08-15',
      end: '2022-11-30',
    },
    techStack: [
      'Vue.js', 'Pinia', 'Workbox', 'Node.js', 'MongoDB', 'IndexedDB', 'Web Speech API'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4050987/pexels-photo-4050987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4050993/pexels-photo-4050993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/123456789',
    role: 'Lead Developer',
    teamSize: 3,
    keyFeatures: [
      'Offline recipe browsing and saving',
      'Voice-controlled cooking instructions',
      'Ingredient substitution suggestions',
      'Meal planning and shopping list generation'
    ],
    challenges: [
      'Implementing reliable voice control for hands-free cooking',
      'Creating an efficient recipe search and filtering system',
      'Building a smart shopping list generator from multiple recipes'
    ],
    performance: {
      lighthouseScores: {
        performance: 95,
        accessibility: 97,
        bestPractices: 96,
        seo: 98,
        pwa: 100
      },
      loadTime: '1.1s',
      users: 42000,
      offlineUsage: '47%',
    },
  },
  {
    id: 'pwa-travel-companion',
    title: 'TravelPal',
    shortDescription: 'Travel companion PWA with offline maps and guides',
    category: ProjectCategory.WEB,
    subcategory: ProjectSubcategory.PWA,
    liveUrl: 'https://travelpal-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/travelpal',
    timeline: {
      start: '2022-05-01',
      end: '2022-08-10',
    },
    techStack: [
      'React', 'Redux', 'Workbox', 'Leaflet', 'IndexedDB', 'Node.js', 'PostgreSQL'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    demoVideoUrl: 'https://player.vimeo.com/video/234567891',
    role: 'Full-stack Developer',
    teamSize: 4,
    keyFeatures: [
      'Offline maps with point-of-interest data',
      'Local travel guides downloadable by region',
      'Trip itinerary planning and tracking',
      'Location-based recommendations and alerts'
    ],
    challenges: [
      'Implementing efficient map tile caching for offline use',
      'Creating a system for selective content downloading',
      'Building battery-efficient location tracking'
    ],
    performance: {
      lighthouseScores: {
        performance: 92,
        accessibility: 96,
        bestPractices: 95,
        seo: 97,
        pwa: 100
      },
      loadTime: '1.3s',
      users: 38000,
      offlineUsage: '65%',
    },
  },
];