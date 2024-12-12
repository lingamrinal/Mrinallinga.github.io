import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EducationItem } from '../../utils/types';

const EducationCard: React.FC<EducationItem> = ({
  degree,
  institution,
  location,
  timeline,
  focusAreas
}) => (
  <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-500">
    <div className="flex items-start gap-4">
      <GraduationCap className="text-blue-500 flex-shrink-0" size={24} />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-blue-500">{degree}</h3>
        <p className="text-gray-300 text-lg">{institution}</p>
        
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{timeline}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-gray-300 font-medium mb-2">Key Focus Areas:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {focusAreas.map((area, index) => (
              <li key={index} className="text-gray-400 flex items-center">
                <span className="mr-2 text-blue-500">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default EducationCard;