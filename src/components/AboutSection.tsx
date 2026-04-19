import React from 'react';
import { motion } from 'motion/react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-luxury-dark overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative group"
        >
          <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-luxury-gold/30 z-0 pointer-events-none"></div>
          
          <div className="w-full h-[600px] relative z-10 overflow-hidden bg-black">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/H1VaXyx3XVc?si=-H6HBToUtT6yQ3Pf&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=H1VaXyx3XVc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover scale-[1.15] pointer-events-none"
            ></iframe>
            <div className="absolute inset-0 bg-luxury-black/30 pointer-events-none mix-blend-overlay"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-px mt-8 bg-luxury-gold/15 border border-luxury-gold/15 relative z-10 w-full mb-8">
            <div className="p-6 bg-luxury-dark text-center">
              <span className="font-display text-4xl font-bold text-luxury-gold">1,200+</span>
              <div className="text-[10px] tracking-[0.2em] uppercase text-luxury-muted mt-1">Retail Stores</div>
            </div>
            <div className="p-6 bg-luxury-dark text-center">
              <span className="font-display text-4xl font-bold text-luxury-gold">80M+</span>
              <div className="text-[10px] tracking-[0.2em] uppercase text-luxury-muted mt-1">Annual Visitors</div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-[10px] tracking-[0.45em] text-luxury-gold mb-4 font-bold uppercase">◈ Our Story</h2>
            <h3 className="text-4xl md:text-6xl font-display mb-6 font-light leading-tight">About <em className="italic text-luxury-gold bg-transparent">The Dubai Mall</em></h3>
            <div className="w-[60px] h-[1px] bg-luxury-gold mb-8"></div>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base text-luxury-muted font-light leading-[1.9] mb-6"
            >
              The Dubai Mall is one of the world's largest and most-visited shopping destinations, sitting at the foot of the iconic Burj Khalifa in the heart of Dubai.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base text-luxury-muted font-light leading-[1.9] mb-8"
            >
              Featuring over 1,200 retail stores, world-class attractions, luxury dining, and breathtaking entertainment — every visit becomes an unforgettable story.
            </motion.p>
            
            <motion.a 
              href="#attractions"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="inline-block bg-luxury-gold text-luxury-black px-11 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 hover:bg-luxury-gold-light"
            >
              Discover More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
