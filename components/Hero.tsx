
import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 z-10"
      />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')" }}
      />

      <div className="container mx-auto px-6 relative z-20 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/95 text-lenoir-accent px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8 animate-fadeIn">
          <Star size={14} fill="currentColor" />
          Featured in MICHELIN Guide
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-slideUp">
          Exceptional Seasonal Dining & <br className="hidden md:block" /> Curated Wine Experiences
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl font-light mb-10 text-white/90 animate-slideUp delay-200">
          A farm-to-table culinary destination celebrating local Texas ingredients, bold flavor, and hospitality in a relaxed wine garden setting.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp delay-400">
          <a 
            href="https://resy.com" 
            target="_blank" 
            className="bg-lenoir-primary border-2 border-lenoir-primary px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-transparent transition-colors"
          >
            Reserve a Table
          </a>
          <a 
            href="#menu" 
            className="border-2 border-white px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-lenoir-primary transition-all"
          >
            View Menu
          </a>
          <a 
            href="#wine-club" 
            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 uppercase tracking-widest font-bold text-sm hover:border-white transition-all"
          >
            Join Wine Club
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
