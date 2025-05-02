import React, { useEffect, useState } from 'react';
import { Project } from '../types/project';
import { X, ExternalLink, Github, Calendar, Users, Check, AlertTriangle, Cpu, Gauge } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key to close modal
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex border-b overflow-x-auto">
          <button 
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'technical' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Details
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'visuals' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('visuals')}
          >
            Visuals
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'metrics' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('metrics')}
          >
            Metrics
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow p-6">
          {activeTab === 'overview' && (
            <div>
              <p className="text-gray-700 mb-6">{project.shortDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Timeline</h4>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {formatDate(project.timeline.start)} - {formatDate(project.timeline.end)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Team</h4>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>
                      {project.role} (Team of {project.teamSize})
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Links</h4>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'technical' && (
            <div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      <Cpu className="w-3.5 h-3.5 mr-1.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technical Challenges</h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Sample Architecture Diagram */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Architecture</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-gray-500 italic">
                    Interactive architecture diagram available in the full case study
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'visuals' && (
            <div>
              <div className="mb-6">
                <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={project.screenshots[activeImageIndex]} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
                  {project.screenshots.map((screenshot, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden ${
                        index === activeImageIndex ? 'ring-2 ring-teal-600' : 'opacity-70'
                      }`}
                    >
                      <img 
                        src={screenshot} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {project.demoVideoUrl && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Demo Video</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.demoVideoUrl}
                      title={`${project.title} demo video`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'metrics' && (
            <div>
              {project.performance.lighthouseScores && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Lighthouse Scores</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                           style={{ 
                             background: `conic-gradient(#10b981 ${project.performance.lighthouseScores.performance}%, transparent 0)` 
                           }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">
                            {project.performance.lighthouseScores.performance}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">Performance</span>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                           style={{ 
                             background: `conic-gradient(#10b981 ${project.performance.lighthouseScores.accessibility}%, transparent 0)` 
                           }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">
                            {project.performance.lighthouseScores.accessibility}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">Accessibility</span>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                           style={{ 
                             background: `conic-gradient(#10b981 ${project.performance.lighthouseScores.bestPractices}%, transparent 0)` 
                           }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">
                            {project.performance.lighthouseScores.bestPractices}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">Best Practices</span>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                           style={{ 
                             background: `conic-gradient(#10b981 ${project.performance.lighthouseScores.seo}%, transparent 0)` 
                           }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">
                            {project.performance.lighthouseScores.seo}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">SEO</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {project.performance.loadTime && (
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-teal-600 mr-3" />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Load Time</h5>
                      <span className="text-gray-600 text-sm">{project.performance.loadTime}</span>
                    </div>
                  </div>
                )}
                
                {project.performance.users && (
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-teal-600 mr-3" />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Users</h5>
                      <span className="text-gray-600 text-sm">{project.performance.users.toLocaleString()}</span>
                    </div>
                  </div>
                )}
                
                {project.performance.conversionRate && (
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-teal-600 mr-3" />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Conversion Rate</h5>
                      <span className="text-gray-600 text-sm">{project.performance.conversionRate}</span>
                    </div>
                  </div>
                )}
                
                {project.performance.appStoreRating && (
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center text-amber-500 mr-3">★</div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">App Store Rating</h5>
                      <span className="text-gray-600 text-sm">{project.performance.appStoreRating}/5.0</span>
                    </div>
                  </div>
                )}
                
                {project.performance.downloads && (
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center text-teal-600 mr-3">↓</div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Downloads</h5>
                      <span className="text-gray-600 text-sm">{project.performance.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                )}
                
                {project.performance.retentionRate && (
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center text-teal-600 mr-3">↻</div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Retention Rate</h5>
                      <span className="text-gray-600 text-sm">{project.performance.retentionRate}</span>
                    </div>
                  </div>
                )}
                
                {project.performance.offlineUsage && (
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center text-teal-600 mr-3">⚡</div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Offline Usage</h5>
                      <span className="text-gray-600 text-sm">{project.performance.offlineUsage}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;