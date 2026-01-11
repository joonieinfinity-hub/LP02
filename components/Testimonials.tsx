
import React from 'react';

const Testimonials: React.FC = () => {
  const quotes = [
    { text: "An absolute gem in Austin. The wine garden at sunset is unmatched.", author: "Michelle K." },
    { text: "The flavors are complex yet comforting. The best farm-to-table experience I've had.", author: "David R." },
    { text: "Incredible wine list and even better hospitality. A must-visit.", author: "Sarah T." },
  ];

  return (
    <section className="py-24 bg-lenoir-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">What Diners Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {quotes.map((q, idx) => (
            <div key={idx} className="text-center">
              <span className="text-6xl text-lenoir-gold/20 font-serif leading-none">“</span>
              <blockquote className="font-heading text-2xl md:text-3xl italic mb-6 -mt-8 text-lenoir-text/90">
                {q.text}
              </blockquote>
              <cite className="block text-xs uppercase tracking-[0.3em] font-bold text-lenoir-accent not-italic">
                — {q.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
