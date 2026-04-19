import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Loader2 } from 'lucide-react';

interface WhatsNewItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  brand: string;
  date: string;
  isFeatured: boolean;
  tags?: string[];
}

export const WhatsNewSection = () => {
  const [items, setItems] = useState<WhatsNewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fallback demo data in case firestore fetch fails (e.g. quota, setup issues)
    const fallbackData = [
      {
        id: '1', title: "Secret Garden New Menu", category: "Dining", description: "Time to create delicious memories.", brand: "Secret Garden", isFeatured: true, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80", date: new Date().toISOString()
      },
      {
        id: '2', title: "Parfums de Marly Althair Launch", category: "Fashion", description: "A new fragrance rooted in French heritage.", brand: "Parfums de Marly", isFeatured: true, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80", date: new Date().toISOString()
      },
      {
        id: '3', title: "Kurt Geiger x Matthew Williamson", category: "Fashion", description: "Exclusive collaboration collection.", brand: "Kurt Geiger", isFeatured: true, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80", date: new Date().toISOString()
      }
    ];

    let unsubscribe: () => void;

    try {
      const whatsNewCol = collection(db, "whats_new");
      // Query limiting to 6, ordered primarily by date descending (assuming data has been populated properly)
      // Note: If 'date' index doesn't exist yet, it might fall back securely or require composite indexing
      const q = query(whatsNewCol, limit(6));
      
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.empty) {
          const data: WhatsNewItem[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() } as WhatsNewItem);
          });
          // Log data exactly as requested by user
          console.log("Loaded updates:", data);
          setItems(data);
        } else {
          console.log("No data found in Firestore, using fallback.");
          setItems(fallbackData);
        }
        setLoading(false);
      }, (fbError) => {
        console.warn("Firestore access error, using fallback data:", fbError);
        setItems(fallbackData);
        setLoading(false);
      });

    } catch (err) {
      console.error("Error setting up real-time whats new:", err);
      setItems(fallbackData);
      setLoading(false);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <section id="whats-new" className="relative py-24 bg-luxury-dark overflow-hidden border-t border-luxury-gold/5">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[10px] uppercase tracking-[0.45em] text-white/50 mb-4 font-bold"
            >
              Home / What's New
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-6xl font-display font-light leading-tight mb-6"
            >
              What's <em className="italic text-luxury-gold bg-transparent">New</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 text-luxury-cream/80 max-w-2xl font-light leading-relaxed text-sm lg:text-base border-l border-luxury-gold/30 pl-4 py-1"
            >
              With our diverse range of shopping, dining and entertainment options, What’s New at Dubai Mall will keep you up to date on our latest products, events and store openings.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="w-[60px] h-[1px] bg-luxury-gold origin-left mt-8"
            ></motion.div>
          </div>
          <motion.a 
            href="#explore"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="hidden md:inline-block border border-luxury-gold text-luxury-gold px-8 py-3 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-luxury-gold hover:text-luxury-black"
          >
            View All Updates
          </motion.a>
        </div>

        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center">
             <Loader2 className="animate-spin text-luxury-gold" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-luxury-dark2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-[0.25,0.46,0.45,0.94] group-hover:scale-[1.05]"
                  />
                  {item.isFeatured && (
                    <div className="absolute top-4 left-4 bg-luxury-gold/90 text-luxury-black px-3 py-1 font-bold text-[0.6rem] uppercase tracking-widest backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-luxury-cream px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.2em] backdrop-blur-md border border-white/10">
                    {item.category}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display text-luxury-cream mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-luxury-gold mb-3 font-bold">
                  {item.brand}
                </p>

                <p className="text-luxury-muted font-light text-[0.95rem] leading-[1.8] flex-grow">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-white/50 group-hover:text-luxury-gold transition-colors duration-300 font-bold">
                  Read More <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
