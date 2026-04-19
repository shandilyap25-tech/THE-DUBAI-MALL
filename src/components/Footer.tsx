import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20 pt-20 pb-10 font-sans">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Top Section - Newsletter & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-16 border-b border-white/5">
          <div className="flex-1 max-w-md">
             <h4 className="text-xl font-display font-bold text-luxury-gold tracking-widest uppercase mb-6">Receive Our Newsletter</h4>
             <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-white/30 text-white placeholder-white/30 py-3 pr-4 flex-1 focus:outline-none focus:border-luxury-gold transition-colors font-light"
                />
                <button className="text-luxury-gold font-bold uppercase tracking-widest text-xs ml-4 hover:text-white transition-colors">
                  Submit
                </button>
             </div>
          </div>
          
          <div className="flex-1 w-full flex flex-col md:items-end">
             <h4 className="text-sm font-bold text-white tracking-[0.2em] uppercase mb-6">Download the app</h4>
             <div className="flex flex-wrap gap-4 md:justify-end">
               <button className="px-6 py-3 border border-white/20 text-xs uppercase tracking-widest hover:border-luxury-gold hover:text-luxury-gold transition-all">App Store</button>
               <button className="px-6 py-3 border border-white/20 text-xs uppercase tracking-widest hover:border-luxury-gold hover:text-luxury-gold transition-all">Google Play</button>
               <button className="px-6 py-3 border border-white/20 text-xs uppercase tracking-widest hover:border-luxury-gold hover:text-luxury-gold transition-all">App Gallery</button>
             </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/5">
           <div>
             <h5 className="text-luxury-gold font-bold text-sm tracking-widest uppercase mb-6">Visitor Information</h5>
             <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Services</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Mall Map</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Emaar Gift Card</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">The Lounge</a></li>
             </ul>
           </div>
           
           <div>
             <h5 className="text-luxury-gold font-bold text-sm tracking-widest uppercase mb-6">More from Emaar</h5>
             <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
               <li><a href="#" className="hover:text-luxury-gold transition-colors">About us</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">About Dubai Mall</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">About Emaar</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Media Centre</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Emaar Malls</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Careers</a></li>
             </ul>
           </div>

           <div>
             <h5 className="text-luxury-gold font-bold text-sm tracking-widest uppercase mb-6">Information</h5>
             <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
               <li><a href="#" className="hover:text-luxury-gold transition-colors">E-Services/Tenants' Portal</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Leasing Enquiries</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms & Conditions</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Parking FAQs</a></li>
             </ul>
           </div>

           <div>
             <h5 className="text-luxury-gold font-bold text-sm tracking-widest uppercase mb-6">Contact us</h5>
             <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
               <li>UAE ONLY: <span className="text-white">800 DUBAI MALL</span> (800 38224 6255)</li>
               <li><a href="mailto:enquiry@thedubaimall.com" className="hover:text-luxury-gold transition-colors">enquiry@thedubaimall.com</a></li>
               <li className="mt-4"><button className="text-luxury-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors border-b border-luxury-gold pb-1">Chat with Us</button></li>
             </ul>
           </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
           <div className="flex flex-col gap-2">
             <div className="flex gap-4 items-center justify-center md:justify-start">
               <span className="text-white font-bold tracking-widest uppercase text-sm">Emaar Properties</span>
               <span className="text-white/20">|</span>
               <a href="#" className="text-luxury-gold text-xs uppercase tracking-widest hover:text-white transition-colors">View All Group Entities</a>
             </div>
             <p className="text-white/40 text-[10px] tracking-wider uppercase">Emaar Properties PJSC is the Master Developer of Dubai Mall</p>
           </div>
           
           <div className="text-right">
             <div className="text-2xl font-display font-bold tracking-[0.08em] text-luxury-gold mb-2">
               THE <span className="text-white font-light">DUBAI</span> MALL
             </div>
             <p className="text-white/40 text-[10px] tracking-wider uppercase mb-2">The Centre of Now</p>
             <p className="text-white/30 text-[9px] uppercase tracking-widest italic">&copy;2026 Emaar Malls. All rights reserved.</p>
           </div>
        </div>

      </div>
    </footer>
  );
};
