import React from 'react';
import { BarChart2, PlaneLanding, Heart } from 'lucide-react';

const ProjectCard = ({ icon: Icon, title, description, tools }: {
  icon: any;
  title: string;
  description: string;
  tools: string[];
}) => (
  <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500">
    <Icon className="text-blue-500 mb-4" size={24} />
    <h3 className="text-xl font-semibold text-gray-200 mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      icon: BarChart2,
      title: "Customer Churn Prediction",
      description: "Developed predictive models to identify potential customer churn using advanced analytics.",
      tools: ["R", "Excel", "Analytics"]
    },
    {
      icon: PlaneLanding,
      title: "Flight Delay Prediction",
      description: "Built a comprehensive system to predict flight delays using historical data and weather patterns.",
      tools: ["SQL", "Python", "Tableau"]
    },
    {
      icon: Heart,
      title: "Heart Attack Analysis",
      description: "Created analytical models to predict heart attack risk factors using medical data.",
      tools: ["R", "Medical Analysis"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;