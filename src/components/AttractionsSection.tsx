import React from 'react';
import { motion } from 'motion/react';

const attractions = [
  {
    title: "Dubai Aquarium",
    description: "Explore a massive aquarium with thousands of marine animals.",
    image: "https://images.openai.com/static-rsc-4/Nog0sSpWTO1BA2EiVWUmVwPA9cMeEo9Fzbwhe7yPxcHdrFJ9iprcXEfhztbpuuXizveCFmc1WFbtylb-H7UkDVLbx_i0JfK6Qpu91YZBy9YDbFon9-tH1_RIlkkc1ON9f4g994sRaGZHyDXLJNhFzAOS8TVYgt3bMuKAk5dN-5xM7IIByeVKl3rtarQuE6gd?purpose=fullsize"
  },
  {
    title: "Ice Rink",
    description: "Enjoy skating on an Olympic-sized ice rink.",
    image: "https://images.openai.com/static-rsc-4/c9MfWXTf0bzojAjviShM72WDaaUgkz0XJMumeWg0J2330l_Ihyfmca2XaaGGvNiKnKvRpocyRP_ShJ_AKTihXquzaIS8ag79ChRfTRAWAyR6h5Z0ZIq6QLc66x9-fy-GJtVYQmn7Bhj7-YA3_qy5frewuhTOLn2OgkLi9p6-SefiIOwmsGeEwnXWhiT2k5LS?purpose=fullsize"
  },
  {
    title: "VR Park",
    description: "Experience immersive virtual reality games.",
    image: "https://images.openai.com/static-rsc-4/skLX5OQFVoZJI8wVKkJLN1Z2EVAmxMVr450nJaRAjhWGXVBsDbt6-zJmadmZ6VMMtU_j1t99a_eb1vhlWKHZjttuJfhpNmLZAbHzIyslcNEZz6AaBFPm67n3ZybgXkhf8BWgDqROTFId1MSLpJpyBbESFtihdANhzbpPCU-uTdE3zdvqjWV0pBwUXDxEhPlf?purpose=fullsize"
  }
];

export const AttractionsSection = () => {
  return (
    <section id="attractions" className="relative py-24 bg-luxury-black overflow-hidden border-t border-luxury-gold/5">
      <div className="max-w-[1400px] mx-auto px-0 md:px-6 relative z-10">
        <div className="text-center md:text-left mb-16 px-6 md:px-0 max-w-[600px]">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4 font-bold"
          >
            ◈ World-class Entertainment
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl font-display font-light leading-tight mb-6"
          >
            Signature <em className="italic text-luxury-gold bg-transparent">Attractions</em>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="w-[60px] h-[1px] bg-luxury-gold mx-auto md:mx-0 mb-8 origin-left"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 max-w-[1400px] mx-auto bg-luxury-dark2 border-y border-luxury-dark2 md:border md:border-luxury-dark2">
          {attractions.map((attr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative h-[550px] overflow-hidden cursor-pointer"
            >
              <img 
                src={attr.image} 
                alt={attr.title}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 transition-opacity duration-400 opacity-100 group-hover:opacity-85"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                <div className="text-[0.65rem] tracking-[0.4em] text-luxury-gold font-bold uppercase mb-3">0{idx + 1}</div>
                <h3 className="text-3xl font-display mb-3 text-luxury-cream font-light">{attr.title}</h3>
                <p className="text-luxury-muted font-light text-[0.9rem] leading-[1.7] opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-100">
                  {attr.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-luxury-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150 font-bold">
                  Discover <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
