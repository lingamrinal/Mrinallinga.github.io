import React from 'react';
import SectionTitle from '../common/SectionTitle';
import EducationCard from './EducationCard';
import { educationData } from './constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Educational Journey</SectionTitle>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;