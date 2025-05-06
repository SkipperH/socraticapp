
import React from 'react';
import CTAButtons from './CTAButtons';
import FigureDisplay from './FigureDisplay';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 pb-12">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2F3C] to-[#4A5568] opacity-90 z-0">
        {/* Mountain silhouette overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAyMDBDMjUwIDEwMCA0MDAgMzAwIDYwMCAyMDBDODAwIDEwMCAxMDAwIDMwMCAxMjAwIDIwMEMxNDAwIDEwMCAxNDQwIDE1MCAxNDQwIDE1MEwxNDQwIDUwMEwwIDUwMEwwIDIwMFoiIGZpbGw9IiMxQTFGMkMiIGZpbGwtb3BhY2l0eT0iMC42Ii8+PC9zdmc+')] bg-no-repeat bg-bottom bg-cover opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - Text and Buttons */}
          <div className="w-full lg:w-1/2 animate-fade-in mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 uppercase">
              <div className="tracking-wide">Grote denkers</div>
              <div className="mt-2">Tijdloze gesprekken</div>
            </h1>
            
            <CTAButtons className="mt-8 md:mt-12" />
          </div>
          
          {/* Right content - Philosopher Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <FigureDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
