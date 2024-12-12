import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text ${className}`}>
    {children}
  </span>
);

export default GradientText;