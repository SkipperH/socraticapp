
import React from 'react';
import CTAButtons from './CTAButtons';
import FigureDisplay from './FigureDisplay';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 pb-12">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/35c93d12-c159-4d4a-a9e0-e2d93bbfc853.png" 
          alt="Berglandschap met tempel"
          className="w-full h-full object-cover"
        />
        {/* Overlay voor betere leesbaarheid van tekst */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - Text and Buttons */}
          <div className="w-full lg:w-1/3 animate-fade-in mb-12 lg:mb-0 pl-0 md:pl-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-sans text-white leading-tight mb-6 uppercase tracking-tight">
              <div className="mb-4">Grote denkers</div>
              <div>Tijdloze gesprekken</div>
            </h1>
            
            <CTAButtons className="mt-8 md:mt-12" />
          </div>
          
          {/* Right content - Hero Philosopher Image - Now larger with more space */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end animate-fade-in">
            <FigureDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
