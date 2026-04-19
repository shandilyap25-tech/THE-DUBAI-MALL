import React from 'react';
import { motion } from 'motion/react';

interface ExperienceSectionProps {
  data?: {
    title: string;
    headline: string;
    subtext: string;
    media?: { url: string };
  };
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  const title = data?.title || "The Dubai Fountain";
  const headline = data?.headline || "An Unforgettable Experience, Every Single Time.";
  const subtext = data?.subtext || "From luxury shopping to breathtaking fountain shows set against the Burj Khalifa, The Dubai Mall offers a unique blend of entertainment, culture, and elegance that simply cannot be replicated anywhere else in the world.";
  const imageUrl = data?.media?.url || "https://images.openai.com/static-rsc-4/hRb8HHtI8IftgeIN6lMILirAoevUv-b2aLl2XiE9lCsphHkY5lanYx4ABDld-Mq4pSlGYG6LdiasrMzALFDQiMPEtQg9rJTJbRXDWVOAequnqRqolOdqFUkKNwzJKiYrOdQzvHLymI8Lpj7Qzt3N9l7_WfheH38ht_RoAvnl7yBI5Urx92hFM23f42K2Y8dD?purpose=fullsize";

  return (
    <section id="experience" className="relative min-h-[90vh] flex items-center overflow-hidden py-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            viewport={{ once: true }}
            src={imageUrl} 
            alt="Experience Lifestyle" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[600px] py-12"
        >
          <p className="text-[10px] tracking-[0.45em] text-luxury-gold mb-6 font-bold uppercase">◈ {title}</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-[3.2rem] font-display mb-8 font-light leading-[1.3] italic"
          >
            {headline.split(' ').map((word, i) => (
              word === 'Unforgettable' ? <span key={i} className="text-luxury-gold">{word} </span> : word + ' '
            ))}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base text-luxury-muted font-light leading-[1.9] max-w-[480px] mb-10"
          >
            {subtext}
          </motion.p>

          <motion.a 
            href="#dining"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block bg-luxury-gold text-luxury-black px-11 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 hover:bg-luxury-gold-light"
          >
            Continue the Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
