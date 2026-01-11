
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'starter' | 'main' | 'dessert' | 'drink'>('all');

  const filteredMenu = activeTab === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeTab);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'starter', label: 'Starters' },
    { id: 'main', label: 'Mains' },
    { id: 'dessert', label: 'Sweets' },
    { id: 'drink', label: 'Cocktails' },
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-lenoir-accent mb-4">Our Menu</h2>
          <p className="max-w-2xl mx-auto text-lenoir-text/70 italic">
            Innovative seasonal à la carte offerings and chef’s choice dishes focusing on warm-weather flavors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-8 py-2 text-sm uppercase tracking-widest border transition-all ${
                activeTab === cat.id 
                  ? 'bg-lenoir-accent border-lenoir-accent text-white' 
                  : 'border-lenoir-stone text-lenoir-text hover:border-lenoir-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {filteredMenu.map((item, idx) => (
            <div key={idx} className="group cursor-default animate-fadeIn">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-heading text-2xl group-hover:text-lenoir-accent transition-colors">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-lenoir-stone mx-4 h-px" />
                <span className="text-lenoir-accent font-bold">{item.price || ''}</span>
              </div>
              <p className="text-lenoir-text/60 italic font-light">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#" 
            className="inline-block bg-lenoir-primary text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Download Full Seasonal PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
