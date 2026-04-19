import React from 'react';
import { motion } from 'motion/react';
import { Map, Info, Wifi, Car, Package } from 'lucide-react';

export const VisitorInfoMapSection = () => {
  return (
    <section className="bg-luxury-black border-t border-luxury-gold/10">
      {/* Map Banner Section */}
      <div className="relative min-h-[40vh] flex items-center bg-luxury-dark2">
        <div className="absolute inset-0 z-0">
          <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80" 
              alt="Dubai Mall Corridors" 
              className="w-full h-full object-cover opacity-60" 
              referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1300px] mx-auto w-full px-6 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Explore The <em className="italic text-luxury-gold">Mall</em>
            </h2>
            <p className="text-luxury-cream/80 mb-8 font-light leading-relaxed max-w-md">
              Every store covered. Plan your visit with our interactive map.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 bg-luxury-gold text-luxury-black font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300">
              <Map size={16} /> View interactive map
            </button>
          </motion.div>
        </div>
      </div>

      {/* Visitor Info Section */}
      <div className="max-w-[1300px] mx-auto px-6 py-24 border-t border-luxury-gold/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 text-luxury-gold mb-6">
               <Info size={24} />
               <h3 className="text-2xl font-display font-bold tracking-widest uppercase">Visitor Info</h3>
            </div>
            
            <p className="text-luxury-muted font-light leading-relaxed mb-6">
              Located throughout Dubai Mall you will find eight guest service desks where our team will be delighted to assist you with any of your queries or questions.
            </p>
            <p className="text-luxury-muted font-light leading-relaxed mb-10">
              To make your experience exceptional, make the most of our range of services, including:
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-center gap-3 text-sm text-luxury-cream/90 font-medium">
                <Wifi className="text-luxury-gold" size={18} /> Free WiFi
              </div>
              <div className="flex items-center gap-3 text-sm text-luxury-cream/90 font-medium">
                <div className="w-[18px] h-[18px] rounded-sm bg-luxury-gold/20 flex items-center justify-center border border-luxury-gold/50 text-[10px] text-luxury-gold font-bold">E</div> Emaar gift cards
              </div>
              <div className="flex items-center gap-3 text-sm text-luxury-cream/90 font-medium">
                <Car className="text-luxury-gold" size={18} /> Valet parking
              </div>
              <div className="flex items-center gap-3 text-sm text-luxury-cream/90 font-medium">
                <Package className="text-luxury-gold" size={18} /> Delivery Service
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
             className="relative aspect-square md:aspect-[4/3] bg-luxury-dark2 p-4 border border-luxury-gold/10"
          >
             <div className="w-full h-full relative overflow-hidden border border-luxury-gold/20">
               <img 
                 src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80" 
                 alt="Guest Services" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
