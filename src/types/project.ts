export enum ProjectCategory {
  MOBILE = 'Mobile Development',
  WEB = 'Web Development'
}

export enum ProjectSubcategory {
  // Mobile subcategories
  ANDROID = 'Android (Kotlin)',
  CROSS_PLATFORM = 'Cross-Platform (React Native/Flutter)',

  // Web subcategories
  FULLSTACK = 'Full-Stack Applications',
  ECOMMERCE = 'E-Commerce Solutions',
  PWA = 'Progressive Web Apps'
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  subcategory: ProjectSubcategory;
  liveUrl: string;
  githubUrl: string;
  timeline: {
    start: string;
    end: string;
  };
  techStack: string[];
  screenshots: string[];
  demoVideoUrl: string;
  role: string;
  teamSize: number;
  keyFeatures: string[];
  challenges: string[];
  performance: {
    appStoreRating?: number;
    downloads?: number;
    averageSessionTime?: string;
    retentionRate?: string;
    lighthouseScores?: {
      performance: number;
      accessibility: number;
      bestPractices: number;
      seo: number;
      pwa?: number;
    };
    loadTime?: string;
    users?: number;
    conversionRate?: string;
    offlineUsage?: string;
  };
}