import React, { useState } from 'react';
import { ProjectCategory, ProjectSubcategory } from '../types/project';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<ProjectSubcategory | 'all'>('all');

  const filteredProjects = projects.filter(project => {
    if (selectedCategory !== 'all' && project.category !== selectedCategory) {
      return false;
    }
    if (selectedSubcategory !== 'all' && project.subcategory !== selectedSubcategory) {
      return false;
    }
    return true;
  });

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
  };

  const getAvailableSubcategories = () => {
    if (selectedCategory === 'all') {
      return Object.values(ProjectSubcategory);
    }
    
    return Object.values(ProjectSubcategory).filter(subcategory => {
      const isMobileSubcategory = [
        ProjectSubcategory.IOS,
        ProjectSubcategory.ANDROID,
        ProjectSubcategory.CROSS_PLATFORM
      ].includes(subcategory);
      
      const isWebSubcategory = [
        ProjectSubcategory.FULLSTACK,
        ProjectSubcategory.ECOMMERCE,
        ProjectSubcategory.PWA
      ].includes(subcategory);
      
      return (selectedCategory === ProjectCategory.MOBILE && isMobileSubcategory) ||
             (selectedCategory === ProjectCategory.WEB && isWebSubcategory);
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing 24 advanced projects across mobile and web development with detailed technical implementations and measurable results.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            {Object.values(ProjectCategory).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {selectedCategory !== 'all' && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedSubcategory === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All {selectedCategory}
              </button>
              
              {getAvailableSubcategories().map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedSubcategory === subcategory
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;