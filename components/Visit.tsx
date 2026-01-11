
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-lenoir-stone">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl text-center text-lenoir-primary mb-16">Visit Us</h2>
        
        <div className="grid lg:grid-cols-5 gap-0 shadow-2xl overflow-hidden rounded-sm bg-white">
          <div className="lg:col-span-2 p-12 lg:p-16 space-y-10">
            <div className="flex items-start gap-4">
              <MapPin className="text-lenoir-accent shrink-0" />
              <div>
                <h4 className="font-heading text-xl font-bold mb-1">Location</h4>
                <p className="text-lenoir-text/70">1807 S. First Street, Austin, Texas 78704</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-lenoir-accent shrink-0" />
              <div>
                <h4 className="font-heading text-xl font-bold mb-1">Reservations</h4>
                <p className="text-lenoir-text/70">(512) 215-9778</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-lenoir-accent shrink-0" />
              <div>
                <h4 className="font-heading text-xl font-bold mb-1">Email</h4>
                <p className="text-lenoir-text/70">reservations@lenoirrestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-lenoir-accent shrink-0" />
              <div className="w-full">
                <h4 className="font-heading text-xl font-bold mb-2">Hours</h4>
                <ul className="space-y-2 text-sm text-lenoir-text/70">
                  <li className="flex justify-between border-b border-dotted border-lenoir-stone pb-1">
                    <span>Sun – Thu</span>
                    <span>4:30 PM – 10:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-dotted border-lenoir-stone pb-1">
                    <span>Fri – Sat</span>
                    <span>4:30 PM – 10:30 PM</span>
                  </li>
                  <li className="flex justify-between text-lenoir-accent font-bold">
                    <span>Tuesday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <a 
              href="https://resy.com" 
              target="_blank"
              className="block w-full text-center bg-lenoir-primary text-white py-4 uppercase tracking-widest font-bold hover:bg-lenoir-accent transition-colors"
            >
              Book Your Table
            </a>
          </div>

          <div className="lg:col-span-3 h-[400px] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.336594770258!2d-97.75713428488056!3d30.25475358180637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4d1b1d1d1d1%3A0x1d1d1d1d1d1d1d1d!2s1807%20S%201st%20St%2C%20Austin%2C%20TX%2078704!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
