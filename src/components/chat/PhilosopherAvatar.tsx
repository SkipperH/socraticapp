
import React from 'react';

interface PhilosopherAvatarProps {
  image: string;
  name: string;
  fadeIn: boolean;
}

const PhilosopherAvatar: React.FC<PhilosopherAvatarProps> = ({ image, name, fadeIn }) => {
  return (
    <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <img 
        src={image}
        alt={`${name} Character`}
        className="max-h-[90vh] object-contain"
      />
    </div>
  );
};

export default PhilosopherAvatar;
