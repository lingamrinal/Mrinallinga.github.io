import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ role, company, period, points }: {
  role: string;
  company: string;
  period: string;
  points: string[];
}) => (
  <div className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-500">
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-blue-500">{role}</h3>
      <p className="text-gray-300 text-lg">{company}</p>
      <div className="flex items-center text-gray-400 mt-2">
        <Calendar size={16} className="mr-2" />
        <span>{period}</span>
      </div>
    </div>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-400 flex items-start">
          <span className="mr-2">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Intern Software Engineer",
      company: "Strategic Resources International",
      period: "2024 - Present",
      points: [
        "UI/UX development for enterprise applications",
        "Collaboration with cross-functional teams",
        "Implementation of modern web technologies"
      ]
    },
    {
      role: "Director & Co-Founder",
      company: "Quick Order Private Limited",
      period: "2020 - 2022",
      points: [
        "Founded and led successful startup venture",
        "Secured funding and managed investor relations",
        "Led development and technical strategy",
        "Managed team of developers and designers"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Professional Experience
          </span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;