
import React from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '../components/NavBar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold mb-8 uppercase">
              FILOSOFIE ONTMOET<br />TECHNOLOGIE.
            </h1>
            <p className="text-gray-300 mb-8">
              In een wereld waarin technologie vaak afstand schept, brengt Socratic juist menselijkheid terug in digitale interactie. Door gebruik van AI laten we mensen praten met filosofen die levensechte reacties geven - geïnspireerd op hun originele denken en taalgebruik - creëert een unieke, tijdloze vorm van communicatie. De gesprekken zijn niet enkel functioneel, maar reflectief, persoonlijk en verrijkend. Dit stimuleert niet alleen kritisch denken, maar stelt ook het gevoel op van een echte verbinding, ondanks de digitale context.
            </p>
          </div>
          
          {/* Updated Image - Now in square format */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/048229f6-fc30-4449-9400-680570dddec3.png" 
                alt="Filosofen Figuren" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="mb-16">
            <div className="bg-[#f1f0e8] rounded-lg h-60 mb-6"></div>
            <h2 className="text-xl font-bold mb-4 uppercase">MENSELIJKE INTERACTIE</h2>
            <p className="text-gray-300 mb-6">
              Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none">
              MEER LEZEN
            </Button>
          </div>
          
          {/* Feature 2 */}
          <div className="mb-16">
            <div className="bg-[#f1f0e8] rounded-lg h-60 mb-6"></div>
            <h2 className="text-xl font-bold mb-4 uppercase">BELANGSTELLING VOOR FILOSOFIE</h2>
            <p className="text-gray-300 mb-6">
              Filosofie staat centraal in dit concept: gebruikers voeren gesprekken met digitale denkers en ontdekken tijdloze ideeën die aansluiten bij moderne vragen. Zo wordt filosofie interactief, toegankelijk en persoonlijk relevant.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none">
              MEER LEZEN
            </Button>
          </div>
          
          {/* Feature 3 */}
          <div className="mb-16">
            <div className="bg-[#f1f0e8] rounded-lg h-60 mb-6"></div>
            <h2 className="text-xl font-bold mb-4 uppercase">EDUCATIEVE INZETBAARHEID</h2>
            <p className="text-gray-300 mb-6">
              Het concept biedt een interactieve leerervaring waarbij gebruikers op unieke wijze kennismaken met filosofie. Ideaal voor onderwijs: het stimuleert kritisch denken, dialoog en verdieping buiten traditionele leermethoden.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none">
              MEER LEZEN
            </Button>
          </div>
          
          {/* Feature 4 */}
          <div className="mb-16">
            <div className="bg-[#f1f0e8] rounded-lg h-60 mb-6"></div>
            <h2 className="text-xl font-bold mb-4 uppercase">TOEKOMSTBESTENDIG</h2>
            <p className="text-gray-300 mb-6">
              Door AI en tijdloze filosofie te combineren, blijft het concept relevant. De schaalbaarheid en technologische integratie maken het flexibel en toekomstgericht, klaar om mee te groeien met nieuwe toepassingen en inzichten.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none">
              MEER LEZEN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
