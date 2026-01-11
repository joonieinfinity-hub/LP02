
import React from 'react';

const WineClub: React.FC = () => {
  return (
    <section id="wine-club" className="relative py-32 bg-lenoir-accent text-white overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl mb-8">Lenoir Wine Club</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 text-white/80 leading-relaxed">
          Bring the Lenoir experience home with our Wine Club — a monthly curated selection chosen by our team featuring seasonal sips, rare finds, and bottles with compelling stories.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-lenoir-accent px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-lenoir-gold hover:text-white transition-all">
            Join the Wine Club
          </button>
          <button className="border-2 border-white/40 px-10 py-4 uppercase tracking-widest font-bold text-sm hover:border-white transition-all">
            Give as a Gift
          </button>
        </div>
      </div>
    </section>
  );
};

export default WineClub;
