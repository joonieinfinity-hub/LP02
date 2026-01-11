
import React from 'react';
import { MEMBERSHIP_TIERS } from '../constants';

const Membership: React.FC = () => {
  return (
    <section className="py-24 bg-lenoir-stone/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-lenoir-primary mb-4">Community Membership</h2>
          <p className="text-lenoir-text/60">Support Lenoir’s mission and enjoy exclusive benefits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier, idx) => (
            <div key={idx} className="bg-white p-10 text-center border-t-4 border-lenoir-primary shadow-sm hover:shadow-xl transition-shadow">
              <h4 className="font-heading text-3xl mb-4">{tier.name}</h4>
              <div className="text-2xl font-bold text-lenoir-accent mb-6">{tier.price}</div>
              <p className="text-sm text-lenoir-text/70 mb-8 h-12 flex items-center justify-center">
                {tier.benefit}
              </p>
              <button className="w-full py-3 border border-lenoir-accent text-lenoir-accent uppercase tracking-widest font-bold text-xs hover:bg-lenoir-accent hover:text-white transition-all">
                Become a Member
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
