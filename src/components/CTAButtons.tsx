
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAButtonsProps {
  className?: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button 
        className="bg-white text-socratic-darkest hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full"
      >
        VERDER GAAN
      </Button>
      <Button 
        className="bg-[#1A1F2C] text-white hover:bg-[#2A2F3C] px-8 py-6 text-lg font-medium rounded-full"
      >
        OVER ONS
      </Button>
    </div>
  );
};

export default CTAButtons;
