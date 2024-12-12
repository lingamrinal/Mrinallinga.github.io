import React from 'react';
import { Code2, Database, LayoutDashboard, Wrench, Cpu } from 'lucide-react';
import { CardProps } from '../utils/types';
import SectionTitle from './common/SectionTitle';

const SkillCard = ({ icon: Icon, title, skills }: CardProps) => (
  <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-500 mr-3" size={24} />
      <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills?.map((skill, index) => (
        <li key={index} className="text-gray-400">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["R", "Python", "Java"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL (Various)", "MongoDB"]
    },
    {
      icon: LayoutDashboard,
      title: "Visualization",
      skills: ["Tableau", "Power BI"]
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["SAP", "Salesforce"]
    },
    {
      icon: Cpu,
      title: "Frameworks",
      skills: ["Angular", "Spring"]
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;