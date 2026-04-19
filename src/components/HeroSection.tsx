import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { YouTubeBackground } from './YouTubeBackground';

interface HeroSectionProps {
  data?: {
    headline: string;
    subtext: string;
    media?: { url: string };
  };
  highlights?: {
    visitors: string;
    stores: string;
    area: string;
    attractions: string;
  };
}

export const HeroSection = ({ data, highlights }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Hard override per user request to remove "Dubai Mall: The Global Landmark" mapping
  const headline = "The Dubai Mall";
  const subtext = data?.subtext || "Discover the world's largest shopping and entertainment destination — where luxury, wonder, and elegance converge.";
  const fallbackImage = "https://images.openai.com/static-rsc-4/j99_Ch5UhMFo0Wo1kbjlu0wuB9sa17JgsE8663Pt753pWxDY20ZG3j1sBthe-jShE5v5UBlX-_Pffey-UNGrucsKax1bQIH5OXwZsRCnmEtBLyBYUJmjnByPLXQgVAUSZyIAsmRD5ohSufCDjNNwX6ENYOvEcG8vJaYXtC-tMKluMImxWowmzbLQkPPKlK9_?purpose=fullsize";

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <YouTubeBackground videoId="Rjf5BFxiOKA" startTime={0} overlayOpacity={0.65} />
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-[1000px] mx-auto flex flex-col items-center mt-12">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[0.7rem] font-semibold tracking-[0.4em] uppercase text-luxury-gold mb-6"
        >
          ◈ World's Premier Destination ◈
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-display mb-8 tracking-[-0.01em] font-light leading-[1.1]"
          dangerouslySetInnerHTML={{ __html: headline.replace(/Dubai Mall/i, '<em className="italic font-light text-luxury-gold bg-transparent">Dubai Mall</em>') }}
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-base md:text-lg text-luxury-muted font-light mb-12 max-w-[640px] leading-[1.8] tracking-[0.05em]"
        >
          {subtext}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-6 justify-center items-center mb-16"
        >
          <button 
            className="px-11 py-4 bg-luxury-gold text-luxury-black font-sans font-bold uppercase tracking-[0.2em] text-[0.75rem] hover:bg-luxury-gold-light hover:-translate-y-0.5 transition-all inline-block border-none"
            onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </button>
          
          <button 
            className="flex items-center gap-3 text-luxury-cream uppercase tracking-[0.2em] text-[0.75rem] font-bold hover:text-luxury-gold transition-colors px-4 py-3"
            onClick={() => setIsVideoOpen(true)}
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-luxury-cream/40 hover:border-luxury-gold transition-all relative">
              <Play size={14} className="ml-1 fill-current" />
            </span>
            Watch The Film
          </button>
        </motion.div>

        {highlights && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 border-t border-luxury-gold/20 pt-8 w-full max-w-4xl"
          >
            {[
              { label: "Annual Visitors", val: highlights.visitors },
              { label: "Retail Outlets", val: highlights.stores },
              { label: "Total Area", val: highlights.area },
              { label: "Attractions", val: highlights.attractions }
            ].map(h => (
              <div key={h.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display text-luxury-gold">{h.val}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted mt-1">{h.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-0 animate-[fadeIn_1s_2s_forwards]">
        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-luxury-gold">Scroll</span>
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-luxury-gold to-transparent animate-[scrollPulse_2s_infinite]"></div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          >
            <button 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-colors p-2 z-10"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Rjf5BFxiOKA?si=2Bm9f_GD7TnoOL8H&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
