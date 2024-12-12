import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Mrinal Linga Madhusudhan
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
          Software Engineer & Technology Manager
        </h2>
        
        <p className="text-gray-400 mb-12 text-lg">
          Based in Dallas, TX • Transforming Ideas into Digital Reality
        </p>
        
        <div className="flex justify-center space-x-6 mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/mrinallinga" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:Mrinallinga@gmail.com"
             className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Mail size={24} />
          </a>
          <a href="tel:+14696910827"
             className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Phone size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;