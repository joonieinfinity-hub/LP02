
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-lenoir-primary mb-4">Events & Special Nights</h2>
          <p className="text-lenoir-text/60 italic">Join us for seasonal wine dinners, community gatherings, and garden parties.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-lenoir-bg border border-lenoir-stone hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-sm text-center"
            >
              <div className="w-12 h-px bg-lenoir-gold mx-auto mb-6 group-hover:w-24 transition-all" />
              <h4 className="font-heading text-2xl mb-4 group-hover:text-lenoir-accent transition-colors">
                {event.title}
              </h4>
              <p className="text-lenoir-text/70 text-sm leading-relaxed mb-6">
                {event.description}
              </p>
              <button className="text-xs uppercase tracking-[0.2em] font-bold text-lenoir-primary hover:text-lenoir-accent border-b border-transparent hover:border-lenoir-accent pb-1 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-lenoir-primary text-lenoir-primary px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-lenoir-primary hover:text-white transition-all">
            Full Events Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
