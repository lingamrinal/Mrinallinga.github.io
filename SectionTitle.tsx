import React from 'react';
import GradientText from './GradientText';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    <GradientText>{children}</GradientText>
  </h2>
);

export default SectionTitle;