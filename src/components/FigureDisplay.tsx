
import React from 'react';

const FigureDisplay: React.FC = () => {
  return (
    <div className="relative">
      {/* 3D Figure Placeholder */}
      <div className="w-64 h-80 md:w-80 md:h-96 relative animate-float">
        {/* Nieuwe bijgestuurde afbeelding */}
        <img 
          src="/lovable-uploads/8282f703-9226-479b-b7bd-542956a7f133.png" 
          alt="Descartes 3D Figure" 
          className="w-full h-full object-contain"
        />
        
        {/* Fallback if image doesn't load properly */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-socratic-darkest/80 p-2 text-white font-bold text-center w-full">
            DESCARTES
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigureDisplay;
