import React from 'react';
import { motion } from 'motion/react';

export const ShoppingSection = () => {
  return (
    <section id="shopping" className="relative py-24 bg-luxury-black overflow-hidden border-t border-luxury-gold/5">
      <div className="max-w-[1300px] mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4 font-bold"
        >
          ◈ Luxury Retail
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl font-display mb-6 font-light leading-tight mt-0"
        >
          Shop the <em className="italic font-light text-luxury-gold bg-transparent">World's Finest</em>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="w-[60px] h-[1px] bg-luxury-gold mb-8 origin-left"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-[0.95rem] text-luxury-muted font-light leading-[1.9] max-w-[500px]"
        >
          Home to every luxury brand imaginable — from Chanel to Louis Vuitton, Rolex to Bulgari — discover exclusive collections and limited editions available only here.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[3px] mt-16 max-w-[1300px] mx-auto bg-luxury-dark2 border border-luxury-dark2">
          {[
            { img: "https://images.openai.com/static-rsc-4/nOJtwFjFPFAGaAmfrcZfKCAnw_H6PFYkYLEmqrak7Nm-hThsMmHpt3rF3otR0olX_boFhLPl8_L-d-NmMpYiNbAaCefbAkVh5Db85vTNxZ20kaBFcYjtIkImC2TiVI3vD6sWZcHA661DxqC66TPHeth52a-FESnAwQJQ0w4kQL8w2dUQPhgN3bUX_bYQdZ97?purpose=fullsize", name: "Luxury Fashion", cat: "Haute Couture & Designer", extraClass: "md:row-span-2 min-h-[600px] md:col-span-2 lg:col-span-1 lg:col-[1.5]" },
            { img: "https://images.openai.com/static-rsc-4/ABlDIoJx_WBkzs9BAHC-eoAxqp4_pqGr7TF46hl0QY4Ic6kVOnu7R45RX_1O8lyN7n3CQBV237YNyL9hS9_P_lcIIcU2DAEq_wtp-VesM2Mh9gt0JkiCwatoxHZ_PS2IUX0PtpAo9yJwK5mP_BWQrs6cVRv3eKDCr-88Be-gVBRdy27-QXJQa01DCyLvaFkD?purpose=fullsize", name: "Jewellery & Watches", cat: "Fine & Luxury" },
            { img: "https://images.openai.com/static-rsc-4/1MJ1VnA62s9NyRBpCEEr70kUX_dyJ47URgqkailleOGRQjZu_k5nbG6gY9raIqwhouTL_LUpBduSnKdYkcmIwI1PElaHYUo1PGvEf16NyBAyubceYvY5Vm4VPJnSBMnBsxL_RlaObh-9DNYB50MEAHhJUWQGChG0iVsv9c3sc2zMHN1mH10zg2tRD8gM1mym?purpose=fullsize", name: "Style & Accessories", cat: "Contemporary & Trend" },
            { img: "https://images.openai.com/static-rsc-4/BbZjMfWGBNxUCBo1i8sKNsyhE-uQPDoipZUDzm9DXJ8ZituBDhxbF0GfL0-t1QbSAUQTXoteBHuBl7UvMfnl9QDdZeB0Ov_jpf2C0HOYJ0dkObDpUZRZHb5v3l5I62cdnq2qNQojLa5qFwzq7RK5Vrf3bdSO9luAQf3-U0aJ6WOsNa6AU1ygE7mnqZcPZ2-g?purpose=fullsize", name: "Beauty & Fragrance", cat: "Premium & Designer" },
            { img: "https://images.openai.com/static-rsc-4/8HQ-UKvm1qYs4fq992GWeF6xn040rsKxQTUMiDl8yJYy4SlpWpKA5chid3pce6UeiFvP7mi7SbQS7Abtg_jUd2lCz9v3KRPzCaqUNoDmhkdV-Tk26AnC_Qs1I87yQCzXNCBUYhV3KSA_pKRG_qLNbGDGr8mhl4DfUf1pjvBesvqCWxZiZt3cSuEdZZwZ1TPh?purpose=fullsize", name: "Ateliers", cat: "Bespoke Services" }
          ].map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative overflow-hidden group ${isFirst ? 'md:row-span-2 min-h-[600px] lg:col-span-1.5' : 'min-h-[300px]'}`}
                style={isFirst ? { gridColumn: "span 1.5" } : {}}
              >
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="font-display text-[1.4rem] text-luxury-cream">{item.name}</div>
                  <div className="text-[0.65rem] tracking-[0.25em] uppercase text-luxury-gold mt-1">{item.cat}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
