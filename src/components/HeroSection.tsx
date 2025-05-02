import React from 'react';
import { ArrowDownCircle, BrainCircuit, Code, Palette } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-teal-600">Technology</span> Portfolio
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Full-Stack | Mobile | Web Developer
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Showcasing 24 cutting-edge projects across mobile and web development,
            demonstrating expertise in iOS, Android, cross-platform, full-stack,
            e-commerce, and progressive web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center"
            >
              View Projects <ArrowDownCircle className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-48 h-48 bg-white rounded-full shadow-xl">
              <Code className="w-12 h-12 text-teal-600 mb-2" />
              <span className="text-lg font-semibold text-gray-800">24 Projects</span>
              <span className="text-sm text-gray-600">Mobile & Web</span>
            </div>
            <div className="absolute top-5 right-10 flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg animate-float">
              <BrainCircuit className="w-8 h-8 text-amber-500" />
              <span className="text-xs font-medium text-gray-800">AI & ML</span>
            </div>
            <div className="absolute bottom-10 left-5 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg animate-float-delay">
              <Palette className="w-6 h-6 text-blue-500" />
              <span className="text-xs font-medium text-gray-800">UX/UI</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <a href="#projects" className="animate-bounce">
          <ArrowDownCircle className="w-10 h-10 text-teal-600" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;