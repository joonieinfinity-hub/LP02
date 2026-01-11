
import React from 'react';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Newsletter */}
        <div className="max-w-4xl mx-auto text-center mb-24 border-b border-white/10 pb-20">
          <h3 className="font-heading text-3xl md:text-5xl text-white mb-6">Stay in the Loop</h3>
          <p className="text-lg font-light mb-10 text-white/70 italic">Sign up for the latest news, seasonal menus, and upcoming events.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-white/5 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-lenoir-gold transition-colors"
            />
            <button className="bg-lenoir-primary text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-lenoir-accent transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white">Lenoir Restaurant</h4>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>1807 S. First Street<br />Austin, TX 78704</p>
              <p>(512) 215-9778</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#wine-club" className="hover:text-white transition-colors">Wine Club</a></li>
              <li><a href="#visit" className="hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Careers <ArrowUpRight size={12} /></a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility Statement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Report</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-white/5 text-xs tracking-widest uppercase opacity-40">
          &copy; {new Date().getFullYear()} Lenoir Restaurant. All Rights Reserved. Crafted for the Texas Hill Country.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
