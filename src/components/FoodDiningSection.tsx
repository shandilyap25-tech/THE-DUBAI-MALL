import React from 'react';
import { motion } from 'motion/react';

const diningImages = [
  "https://images.openai.com/static-rsc-4/E4_SPQNj3VEaqAzJHVUD8JvX0w8M9GDAlRucp8dLTYIPO8bbdJ9x6QVF0hzLTDO1D8-0FIQhmch90p_kU9ZkbrlWD4zWCgU8oWT9d7I9YkTKJ_IMB-unNm_OQ5wOY1ZSflb1m7keHViH_YI-xM_LUzgFefailYEwZzQnNm7tBaVJQpIkT7016iicZ_Q_AcWz?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/wB4Ek8ZNxbpSlJTfd19xsE7vDnlY_fCnoKgNyerBEWna8MJw5Ek5lBfqcuO6WinMhOsMlJ2bU3JCJUAqWFLmEQRdxEM86rtNMtPj1vkraaRTc9ygBW3kH-FHAqTZYnP-lON9-rFXDO19NPdpMJvArO8dd4jFSQRoUvt2BUox9jQbyLnZO7Up-3h7Akot-u9j?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/hXsMRnTB48sJPPPmfHh_woDquo_AQK7ohzXrypyMkmWfwU8uc3vWCuT1HOD6qF0RRtfL1SuBB14UzZwHzC-UyDTtxxszhHzBGXP4xDt_JMjB9y_hF4w8KBklJf-N8yQMR2BaZvSXMijrM2L8C77mm6ewsf7g32JKFKtMbT_DNts6MOMM7Vtai4YISKLot1uo?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/NjXrbX5BAGwtR9RBnlSRgoNuNf36TrlrsXYnCuL-XLuno919hF9YYYeQJ13LMx_Jbgu8TGkdNE45MhelvWMNZpUOT8VUp0DfSQ6EL1zoXA5kipGIRr3V2pKTUrLHnw_NpoZEx-vqfFTGUIbzvQvbUOzGtGh_kIsF5FeBSndhg-t289i3FPMLzolKBPXKKVh4?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/zNlIO4HtPl2ZGdq7XzLSWs-bDoBA7900ccmDY6ygxD2raz30eW0Eb96o1HvjXBlC5l5KDunE2gNgngJrHd3K2B0RFa1gBnUIt11TS7hym1piHIh5M7iMO7Gq1MjArE9sq5fUNs2KdR58qIl6y566oTrECq05oB-OdX-9FJWBlnEfBY1SIL3miGAUR-xGfliR?purpose=fullsize"
];

export const FoodDiningSection = () => {
  return (
    <section id="dining" className="relative py-24 bg-luxury-dark2 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 max-w-full">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4 font-bold"
            >
              ◈ Culinary Excellence
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-6xl font-display mb-6 font-light leading-tight"
            >
              Dining <em className="italic font-light text-luxury-gold bg-transparent">Experience</em>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="w-[60px] h-[1px] bg-luxury-gold mb-8 md:mb-0 origin-left"
            ></motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-[0.9rem] text-luxury-muted font-light max-w-[320px] leading-[1.8]"
          >
            Explore over 200 restaurants and cafes offering global cuisines — from Michelin-starred chefs to authentic local flavours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5">
          {diningImages.map((img, i) => {
            const labels = ["Fine Dining", "Artisan Cafés", "Global Flavours", "Exclusive Venues", "Street Food Hub"];
            const isFirst = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative overflow-hidden group ${isFirst ? 'md:row-span-2' : ''}`}
                style={{ minHeight: isFirst ? '502px' : '250px' }}
              >
                <img 
                  src={img} 
                  alt="Dining" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-[1.06]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-colors duration-400 flex items-end p-6">
                  <span className="font-display text-[1.3rem] text-luxury-cream opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {labels[i] || "Dining"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
