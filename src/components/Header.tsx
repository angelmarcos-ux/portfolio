import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="w-8 h-8 text-teal-600 mr-2" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            <span className="text-teal-600">Dev</span>Portfolio
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-teal-600 transition-colors">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-teal-600 transition-colors">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          <div className="flex items-center space-x-4 ml-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-700 hover:text-teal-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg py-4 px-4 absolute w-full top-full left-0">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2 border-t">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-700 hover:text-teal-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;