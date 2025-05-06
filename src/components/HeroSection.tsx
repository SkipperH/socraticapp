
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-16 pb-24">
      {/* Background decoration */}
      <div className="absolute bottom-0 w-full h-64 bg-hills bg-no-repeat bg-bottom bg-cover opacity-80" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left content - Text */}
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-socratic-darkest leading-tight mb-4">
              Stel jouw vraag aan Descartes...
            </h1>
            <p className="text-xl md:text-2xl text-socratic-text mb-8 max-w-xl">
              Meer weten? Download vandaag nog Socratic
            </p>
            <Button className="cta-button">
              Download nu
            </Button>
          </div>
          
          {/* Right content - Philosopher Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Placeholder for philosopher image */}
              <div className="w-64 h-80 md:w-80 md:h-96 bg-gradient-to-b from-socratic to-socratic-light rounded-2xl shadow-lg flex items-end justify-center overflow-hidden animate-float">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2351&q=80')] bg-cover bg-center" />
                
                {/* Low Poly Effect Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgogIDxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIC8+CiAgPHBhdGggZD0iTTI4IDBMMjggMzRMMCA1MEwwIDE2TDI4IDAaIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiIC8+CiAgPHBhdGggZD0iTTI4IDBMNTY9MTZMNTYgNTBMMjggMzRMMjggMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSIgLz4KPC9zdmc+')] opacity-30" />
                
                <div className="relative z-10 mb-4">
                  <span className="font-serif text-2xl font-bold tracking-widest text-white">DESCARTES</span>
                </div>
              </div>
              
              {/* Base/Pedestal */}
              <div className="w-48 h-6 mx-auto bg-socratic-dark/30 backdrop-blur-sm rounded-full mt-4 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
