import React from 'react';
import { 
  Smartphone, 
  Tablet, 
  Globe, 
  ShoppingCart, 
  Database, 
  Code, 
  PenTool,
  ArrowUpRight, 
  Server
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  examples: string[];
}

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        {
          name: 'iOS Development',
          icon: <Smartphone className="w-6 h-6 text-teal-600" />,
          examples: ['Swift', 'SwiftUI', 'UIKit', 'CoreData', 'ARKit']
        },
        {
          name: 'Android Development',
          icon: <Smartphone className="w-6 h-6 text-teal-600" />,
          examples: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Material Design']
        },
        {
          name: 'Cross-Platform',
          icon: <Tablet className="w-6 h-6 text-teal-600" />,
          examples: ['React Native', 'Flutter', 'TypeScript', 'Expo', 'MobX']
        }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        {
          name: 'Front-end',
          icon: <Globe className="w-6 h-6 text-teal-600" />,
          examples: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript']
        },
        {
          name: 'Back-end',
          icon: <Server className="w-6 h-6 text-teal-600" />,
          examples: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis']
        },
        {
          name: 'E-commerce',
          icon: <ShoppingCart className="w-6 h-6 text-teal-600" />,
          examples: ['Stripe API', 'PayPal API', 'Shopping Cart Systems', 'Inventory Management']
        }
      ]
    },
    {
      title: 'Other Expertise',
      skills: [
        {
          name: 'Data & APIs',
          icon: <Database className="w-6 h-6 text-teal-600" />,
          examples: ['REST API Design', 'GraphQL', 'Firebase', 'AWS', 'Serverless']
        },
        {
          name: 'Development',
          icon: <Code className="w-6 h-6 text-teal-600" />,
          examples: ['Git/GitHub', 'CI/CD', 'Docker', 'Testing (Jest, Cypress)', 'Performance Optimization']
        },
        {
          name: 'Design',
          icon: <PenTool className="w-6 h-6 text-teal-600" />,
          examples: ['Figma', 'UX/UI Design', 'Wireframing', 'Prototyping', 'Design Systems']
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skills across the full spectrum of mobile and web development, 
            from native iOS and Android to full-stack web applications and e-commerce solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center mb-3">
                      {skill.icon}
                      <h4 className="text-lg font-semibold text-gray-800 ml-2">{skill.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-8">
                      {skill.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-md"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {categoryIndex === 0 && (
                <div className="mt-8 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-100">
                  <div className="flex items-start">
                    <div className="bg-teal-600 rounded-full p-1 text-white mt-0.5 mr-3">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">Mobile Expertise Highlight</h5>
                      <p className="text-gray-600 text-sm mt-1">
                        Built 12 production-ready mobile applications across iOS, Android, and cross-platform frameworks, with a focus on performance optimization and offline capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {categoryIndex === 1 && (
                <div className="mt-8 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                  <div className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 text-white mt-0.5 mr-3">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">Web Development Highlight</h5>
                      <p className="text-gray-600 text-sm mt-1">
                        Developed 12 complex web applications with full-stack architectures, secure payment processing, and progressive web app capabilities for offline functionality.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;