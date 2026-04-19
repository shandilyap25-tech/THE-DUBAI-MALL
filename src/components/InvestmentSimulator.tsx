import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Zap, TrendingUp, BarChart3 } from 'lucide-react';

type BusinessType = 'luxury' | 'boutique' | 'fb' | 'entertainment';

export const InvestmentSimulator = () => {
  const [selected, setSelected] = useState<BusinessType | null>(null);

  const businessData: Record<BusinessType, {
    title: string;
    description: string;
    growth: string;
    traffic: string;
    synergy: string;
    image: string;
  }> = {
    luxury: {
      title: "Haute Luxury",
      description: "Position your flagship in the high-net-worth corridor. Benefit from dedicated VIP entrances and private concierge services.",
      growth: "45% YoY",
      traffic: "High AOV / Targeted",
      synergy: "Adjacent to 5-star Hospitality",
      image: "https://images.openai.com/static-rsc-4/nOJtwFjFPFAGaAmfrcZfKCAnw_H6PFYkYLEmqrak7Nm-hThsMmHpt3rF3otR0olX_boFhLPl8_L-d-NmMpYiNbAaCefbAkVh5Db85vTNxZ20kaBFcYjtIkImC2TiVI3vD6sWZcHA661DxqC66TPHeth52a-FESnAwQJQ0w4kQL8w2dUQPhgN3bUX_bYQdZ97?purpose=fullsize"
    },
    boutique: {
      title: "Artisanal Boutique",
      description: "Curated spaces for unique craftsmanship and limited editions. Capture the 'discovery' shopper segment.",
      growth: "32% YoY",
      traffic: "High Engagement",
      synergy: "Creative Arts District",
      image: "https://images.openai.com/static-rsc-4/8HQ-UKvm1qYs4fq992GWeF6xn040rsKxQTUMiDl8yJYy4SlpWpKA5chid3pce6UeiFvP7mi7SbQS7Abtg_jUd2lCz9v3KRPzCaqUNoDmhkdV-Tk26AnC_Qs1I87yQCzXNCBUYhV3KSA_pKRG_qLNbGDGr8mhl4DfUf1pjvBesvqCWxZiZt3cSuEdZZwZ1TPh?purpose=fullsize"
    },
    fb: {
      title: "Gastronomic Concept",
      description: "From rooftop fine dining to waterfront casual. Take advantage of our 18,000+ per hour dinner traffic.",
      growth: "55% YoY",
      traffic: "High Frequency",
      synergy: "Entertainment Anchors",
      image: "https://images.openai.com/static-rsc-4/DO3FchE8ExmHobF-O88UMHDuy_wU4kGaUwHp8gSXNBrAtr2B05n_0d_A8NYuzab-fx1Cg6c_S3ZgybRH_CwIsEwQ4gAbDXGk2HbpsYTUxrKg3_DA6kUQ-ZMnvC197cKBn5jk2UXnBpjLeibqpXJpTVAQaOV0C8QVGdxy3SGQcYtAGkl68Usk7D7sGJOUkQye?purpose=fullsize"
    },
    entertainment: {
      title: "Experiential Venue",
      description: "Digital art, virtual theaters, or live performance spaces. Become a regional attractor.",
      growth: "60% YoY",
      traffic: "Mass Volume",
      synergy: "Event Center Proximity",
      image: "https://images.openai.com/static-rsc-4/skLX5OQFVoZJI8wVKkJLN1Z2EVAmxMVr450nJaRAjhWGXVBsDbt6-zJmadmZ6VMMtU_j1t99a_eb1vhlWKHZjttuJfhpNmLZAbHzIyslcNEZz6AaBFPm67n3ZybgXkhf8BWgDqROTFId1MSLpJpyBbESFtihdANhzbpPCU-uTdE3zdvqjWV0pBwUXDxEhPlf?purpose=fullsize"
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {(Object.keys(businessData) as BusinessType[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`p-6 border transition-all duration-500 text-left group ${
              selected === key 
                ? 'bg-white text-luxury-black border-luxury-gold' 
                : 'bg-white/5 border-white/10 text-white hover:border-luxury-gold'
            }`}
          >
            <div className={`text-[10px] uppercase tracking-widest font-bold mb-4 ${
                selected === key ? 'text-luxury-gold' : 'text-white/40 group-hover:text-luxury-gold'
            }`}>
              {key}
            </div>
            <h4 className="font-display italic text-lg">{businessData[key].title}</h4>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
          >
            <div className="md:col-span-1 border border-white/10 relative overflow-hidden group min-h-[300px]">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={businessData[selected].image} 
                alt={businessData[selected].title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent p-6 flex flex-col justify-end z-10">
                <h5 className="text-xl font-display italic mb-2 text-luxury-gold">{businessData[selected].title} Outlook</h5>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {businessData[selected].description}
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                    { label: "Est. Growth", val: businessData[selected].growth, icon: TrendingUp },
                    { label: "Traffic Type", val: businessData[selected].traffic, icon: Zap },
                    { label: "Location Synergy", val: businessData[selected].synergy, icon: BarChart3 }
                ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 glass-morphism border-white/10 flex flex-col items-center text-center"
                    >
                        <stat.icon size={20} className="text-luxury-gold mb-4" />
                        <div className="text-2xl font-display mb-2">{stat.val}</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <p className="text-white/40 italic mb-10 text-lg">Select your business category to see our tailored projection.</p>
            
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/xshkQS54Eww?si=wVEEqjmfffQVnerJ&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=xshkQS54Eww" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 bg-luxury-black/40 pointer-events-none mix-blend-overlay"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
