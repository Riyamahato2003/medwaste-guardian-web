
import React from 'react';
import Logo from './Logo';

interface LogoDisplayProps {
  showText?: boolean;
  size?: number;
  className?: string;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ 
  showText = true, 
  size = 120,
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Logo size={size} className="animate-pulse-gentle" />
      
      {showText && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">MedWaste Guardian</h2>
          <p className="text-sm text-gray-600 mt-1">
            AI-powered medical waste disposal assistant
          </p>
        </div>
      )}
    </div>
  );
};

export default LogoDisplay;
