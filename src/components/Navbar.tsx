import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Globe, Gift } from 'lucide-react';

export const Navbar = ({ onSearchOpen }: { onSearchOpen: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "What's New", href: '#whats-new' },
    { name: 'Shop', href: '#shopping' },
    { name: 'Dine', href: '#dining' },
    { name: 'Stay', href: '#experience' },
    { name: 'Entertain', href: '#attractions' },
    { name: 'Plan Your Visit', href: '#cta' },
    { name: 'Services', href: '#services' }
  ];

  const subNavLinks = [
    "Fashion avenue", "Fountain views", "Chinatown", "Souk Al Bahar", "Offers", "Events", "Exhibition Center"
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Micro Nav */}
      <div className="hidden md:flex justify-end items-center gap-6 px-12 py-2 bg-black/40 backdrop-blur-sm border-b border-white/5 text-[10px] uppercase tracking-widest text-luxury-muted">
         <a href="#" className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
            <Globe size={12} /> العربية
         </a>
         <a href="#" className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
            <Gift size={12} /> Emaar Gift Card
         </a>
         <button onClick={onSearchOpen} className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
            <Search size={12} /> Search
         </button>
      </div>

      <div className={`max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-display font-bold tracking-[0.05em] text-luxury-gold flex items-center gap-2"
        >
          THE <span className="text-white font-light">DUBAI</span> MALL
        </motion.a>

        {/* Desktop Main Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/90 hover:text-luxury-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={onSearchOpen}
            className="text-white/80 hover:text-luxury-gold transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sub Nav Bar */}
      <div className="hidden lg:flex justify-center items-center gap-10 py-3 bg-black/20 backdrop-blur-md border-t border-white/5">
         {subNavLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[10px] text-white/60 uppercase tracking-[0.1em] hover:text-luxury-gold transition-colors">
              {link}
            </a>
         ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-morphism border-b border-white/10"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display tracking-widest text-luxury-gold"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-2"></div>
              {subNavLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-sans tracking-widest text-white/70 uppercase"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
