import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Concept from './components/Concept';
import Implementation from './components/Implementation';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HydroChat from './components/HydroChat';

import PromoModal from './components/PromoModal';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Founders />
        <Concept />
        <Implementation />
        <Catalog />
        <Contact />
      </main>
      <Footer />
      <HydroChat />
      <PromoModal />
    </div>
  );
};

export default App;