import React, { useState } from 'react';
import { Project } from '../types/project';
import { Calendar, Code2, Github, ExternalLink, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 group">
        <div className="relative">
          <img 
            src={project.screenshots[0]} 
            alt={project.title} 
            className="w-full h-48 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-between">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {project.subcategory}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.shortDescription}</p>
          
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>
              {formatDate(project.timeline.start)} - {formatDate(project.timeline.end)}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                <Code2 className="w-3 h-3 mr-1" />
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center space-x-1 mt-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors rounded-lg"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;