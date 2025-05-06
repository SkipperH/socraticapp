
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-10">
      <div className="container mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
