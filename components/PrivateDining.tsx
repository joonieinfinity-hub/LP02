
import React from 'react';

const PrivateDining: React.FC = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap">
      <div 
        className="w-full lg:w-1/2 min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519671482538-5810a2d46836?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="w-full lg:w-1/2 bg-lenoir-primary p-12 lg:p-24 flex flex-col justify-center text-white">
        <h2 className="font-heading text-4xl md:text-6xl mb-8 leading-tight">Host Your Event <br /> With Us</h2>
        <p className="text-lg font-light text-white/80 leading-relaxed mb-10">
          Lenoir’s restaurant and wine garden are available for private gatherings, business dinners, celebrations, and wedding receptions. With a capacity of 16–65 guests, tailored menus, and beautiful ambiance, it’s the perfect place to host unforgettable events.
        </p>
        <div className="space-y-4">
          <button className="w-full sm:w-auto border-2 border-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-lenoir-primary transition-all">
            Inquire About Private Dining
          </button>
          <p className="text-xs text-white/50 italic">Professional event planning support included.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
