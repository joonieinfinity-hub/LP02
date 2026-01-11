
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Visit from './components/Visit';
import WineClub from './components/WineClub';
import Events from './components/Events';
import PrivateDining from './components/PrivateDining';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SommelierBot from './components/SommelierBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-lenoir-bg text-lenoir-text selection:bg-lenoir-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Visit />
        <Menu />
        <WineClub />
        <Events />
        <PrivateDining />
        <Membership />
        <Testimonials />
      </main>
      <Footer />
      <SommelierBot />
    </div>
  );
};

export default App;
