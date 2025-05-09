
import React from 'react';

interface NavigationButtonProps {
  direction: 'next' | 'prev';
  onClick: () => void;
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, children }) => {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer p-4 bg-[#1B1F3B]/70 rounded-full hover:bg-[#1B1F3B]/90 transition-all"
    >
      {children}
    </div>
  );
};

export default NavigationButton;
