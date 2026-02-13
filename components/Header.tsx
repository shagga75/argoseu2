
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="mt-10 flex flex-col items-center w-full px-4">
      <div 
        className="cursor-pointer transition-transform hover:scale-105 mb-4" 
        onClick={onLogoClick}
      >
        {/* Logo Placeholder - In a real app this would be img/logo.png */}
        <div className="text-4xl font-bold tracking-tighter flex items-center">
          <span className="text-blue-400">ARGOS</span>
          <span className="ml-1 text-white">SEA</span>
        </div>
      </div>
      <div className="w-[40%] h-[2px] bg-white opacity-80"></div>
    </header>
  );
};

export default Header;
