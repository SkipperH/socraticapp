
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Index;
