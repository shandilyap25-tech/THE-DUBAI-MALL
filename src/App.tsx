import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AttractionsSection } from './components/AttractionsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FoodDiningSection } from './components/FoodDiningSection';
import { ShoppingSection } from './components/ShoppingSection';
import { VisitorInfoMapSection } from './components/VisitorInfoMapSection';
import { AiStudioSection } from './components/AiStudioSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { SearchOverlay } from './components/SearchOverlay';
import { ChatWidget } from './components/ChatWidget';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { motion } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sections, setSections] = useState<any[]>([]);
  const [highlights, setHighlights] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionsRes, highlightsRes] = await Promise.all([
          fetch('/api/sections').then(res => res.json()),
          fetch('/api/highlights').then(res => res.json())
        ]);
        setSections(Array.isArray(sectionsRes) ? sectionsRes : []);
        setHighlights(highlightsRes);
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Global Search Shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-luxury-black min-h-screen flex items-center justify-center">
        <div className="text-luxury-gold animate-pulse text-xs tracking-[0.5em] uppercase">
          Initializing Cinematic Experience...
        </div>
      </div>
    );
  }

  const heroData = sections.find(s => s.id === 'hero');
  const experienceData = sections.find(s => s.id === 'experience' || s.id === 'couture');

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-cream">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ChatWidget />
      <main>
        <HeroSection data={heroData} highlights={highlights} />
        <AboutSection />
        
        {/* Business Strategic Layer */}
        <section className="py-24 bg-luxury-dark border-y border-luxury-gold/10">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p className="text-[10px] tracking-[0.45em] text-luxury-gold mb-4 font-bold uppercase">◈ Global Business Opportunities</p>
                <h2 className="text-4xl md:text-5xl font-display mb-8 font-light italic">Market <span className="text-luxury-gold">Potential</span> & Projections</h2>
                <p className="text-luxury-muted max-w-2xl font-light leading-relaxed mb-8">
                  Connect your brand to the world's most influential audience. Use our simulator to explore growth potentials across our premier commercial districts.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/mrRwtGZ-qA0?si=VSalOqKQq1I_nRZQ&autoplay=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </motion.div>
            </div>
            
            <InvestmentSimulator />
          </div>
        </section>

        <AttractionsSection />
        <ExperienceSection data={experienceData} />
        <FoodDiningSection />
        <ShoppingSection />
        <VisitorInfoMapSection />
        <AiStudioSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
