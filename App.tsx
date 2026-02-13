
import React, { useState } from 'react';
import { AppView } from './types';
import HomePage from './pages/HomePage';
import VersionPage from './pages/VersionPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);

  const navigateTo = (newView: AppView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogoClick={() => navigateTo(AppView.HOME)} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        {view === AppView.HOME && (
          <HomePage onSelectView={navigateTo} />
        )}
        
        {view === AppView.PC && (
          <VersionPage 
            type={AppView.PC} 
            title="Versione PC"
            image="https://picsum.photos/id/1/800/600"
            buttonColor="bg-[#007BFF] hover:bg-[#339CFF]"
          />
        )}
        
        {view === AppView.SMARTPHONE && (
          <VersionPage 
            type={AppView.SMARTPHONE} 
            title="Versione Smartphone"
            image="https://picsum.photos/id/160/800/600"
            buttonColor="bg-[#FF8C00] hover:bg-[#FFAA33]"
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
