
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6" style={{ backgroundColor: '#1A1F2C' }}>
      <div className="flex space-x-10">
        <Link to="/about" className="text-lg font-medium text-[#F8F5EC]">ABOUT</Link>
        <span className="text-lg font-medium text-[#F8F5EC]">DONATE</span>
        <span className="text-lg font-medium text-[#F8F5EC]">NEWS</span>
      </div>
      <Link to="/" className="bg-[#f1f0e8] px-6 py-3 rounded">
        <span className="font-serif text-socratic-darkest text-xl font-semibold tracking-wider">SOCRATIC</span>
      </Link>
    </nav>
  );
};

export default NavBar;
