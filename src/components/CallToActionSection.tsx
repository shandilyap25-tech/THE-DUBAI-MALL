import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const CallToActionSection = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'leasing',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company_name: formData.company,
          interest_type: formData.interest,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setFormState('success');
      } else {
        throw new Error('Failed to send lead');
      }
    } catch (err) {
      console.error(err);
      setFormState('idle');
    }
  };

  return (
    <section id="cta" className="relative py-40 overflow-hidden border-t border-luxury-gold/10">
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.openai.com/static-rsc-4/Jklz7fo0BQOB-4wqbueGJb750xafulRYGpFRiYI1MipqW1v1R9_lTWnh_De8PhY9gZ2t4fiO9Un7yUotkD2-HOAmgRdLPXHtzYaAke3oTj9RBFnXpJt36zdcPJtp_Y7lZkaiIZ-cT4QOoRDOVieM_dqcLcK77s7j5QoYAy_nPkQxz7wB3XiFSe8WerAxTJN0?purpose=fullsize" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-6 font-bold"
          >
            ◈ Join the Narrative ◈
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-display mb-8 font-light leading-[1.1]"
          >
            Begin Your <em className="italic text-luxury-gold bg-transparent">Legacy</em>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[1.1rem] text-luxury-muted font-light mb-12 max-w-xl leading-[1.8]"
          >
            Position your brand at the epicenter of global influence. Our commercial team is ready to discuss your strategic integration into the Dubai Mall ecosystem.
          </motion.p>

          <div className="flex gap-8">
            <div className="text-left">
              <div className="text-2xl font-display text-luxury-gold">105M+</div>
              <div className="text-[10px] uppercase tracking-widest text-luxury-muted">Annual Global Reach</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-display text-luxury-gold">1,200+</div>
              <div className="text-[10px] uppercase tracking-widest text-luxury-muted">Premier Partners</div>
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass-morphism p-10 relative"
        >
          {formState === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-luxury-gold mb-8">
                <CheckCircle2 size={40} className="text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-display mb-4 italic">Inquiry Received</h3>
              <p className="text-luxury-muted font-light text-sm">Our Platinum Concierge team will contact you within 24 hours.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-10 text-xs uppercase tracking-widest text-luxury-gold hover:text-white transition-colors"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all"
                    placeholder="E.g. Alexander Vance"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Business Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all"
                    placeholder="vance@luxury.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Company</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all"
                    placeholder="Global Brands Inc."
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Interest Type</label>
                  <select 
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-luxury-black border border-white/10 px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all appearance-none text-white"
                  >
                    <option value="leasing">Retail Leasing</option>
                    <option value="sponsorship">Sponsorship & Media</option>
                    <option value="events">Events & Activations</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Strategic Vision / Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32 bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your brand's ambitions..."
                />
              </div>
              <button 
                type="submit"
                disabled={formState === 'loading'}
                className="w-full bg-luxury-gold text-luxury-black font-sans font-bold uppercase tracking-[0.2em] text-[0.75rem] py-4 transition-all hover:bg-luxury-gold-light flex items-center justify-center gap-3"
              >
                {formState === 'loading' ? 'Processing...' : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
