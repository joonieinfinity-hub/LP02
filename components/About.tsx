
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-lenoir-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl text-lenoir-primary">
              The Essence of Lenoir
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-lenoir-text/80">
              <p>
                Lenoir is named after a hearty grape growing across the Texas Hill Country — a tribute to the land’s bounty. Since opening in <span className="text-lenoir-primary font-bold">2012</span>, we have crafted a seasonal, warm-weather cuisine inspired by local ingredients and global techniques.
              </p>
              <p>
                At Lenoir, food is thoughtfully prepared with spice, heat, and robust flavor and served alongside an extraordinary selection of wines from grower-producers worldwide.
              </p>
            </div>

            <div className="pt-8 border-t border-lenoir-primary/20">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-lenoir-stone flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/100/100?random=1" alt="Todd Duplechan" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl">Todd Duplechan & Jessica Maher</h4>
                  <p className="text-sm text-lenoir-accent uppercase tracking-widest">Chef-Owners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                alt="Lenoir Dining Atmosphere" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Offset Block */}
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-lenoir-primary -z-0 rounded-sm hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
