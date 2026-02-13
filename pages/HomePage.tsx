
import React from 'react';
import { AppView } from '../types';

interface HomePageProps {
  onSelectView: (view: AppView) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectView }) => {
  return (
    <div className="w-full max-w-4xl text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 mt-4">
        Benvenuto nel portale ARGOS SEA
      </h1>
      <h2 className="text-lg md:text-xl font-light mb-12 opacity-90">
        Seleziona la modalità di accesso
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* PC Choice */}
        <div 
          className="group cursor-pointer flex flex-col items-center"
          onClick={() => onSelectView(AppView.PC)}
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,150,255,0.8)] group-hover:scale-105">
            <img 
              src="https://picsum.photos/id/1/400/300" 
              alt="Versione PC" 
              className="w-full max-w-[300px] block"
            />
          </div>
          <p className="mt-4 text-lg font-semibold tracking-wide">ENTRA VERSIONE PC</p>
        </div>

        {/* Smartphone Choice */}
        <div 
          className="group cursor-pointer flex flex-col items-center"
          onClick={() => onSelectView(AppView.SMARTPHONE)}
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,150,255,0.8)] group-hover:scale-105">
            <img 
              src="https://picsum.photos/id/160/400/300" 
              alt="Versione Smartphone" 
              className="w-full max-w-[300px] block"
            />
          </div>
          <p className="mt-4 text-lg font-semibold tracking-wide">ENTRA VERSIONE SMARTPHONE</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
