"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // IMPORTANT: Replace YOUR_ACCESS_KEY_HERE with your key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent!");
      event.target.reset();
    } else {
      setResult("Error. Try again.");
    }
  };

  return (
    <footer className={`relative bg-[#050505] pt-32 pb-16 flex justify-center ${montserrat.className}`}>
      <div className="relative z-20 w-full min-w-[80vw] max-w-[1400px] px-14 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT 8 COLUMNS: BRANDING & NAVIGATION */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {/* Main Messaging */}
          <div className="max-w-xl">
             <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent leading-tight">
                Ready to build <br/> something serious?
             </h3>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
                Engineering modern digital systems with clarity, performance, and long-term vision. Let's build the future together.
             </p>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-22 md:max-w-max pt-4">
            {[
              {t: "Platform", l: ["About", "Services", "Pricing"]}, 
              {t: "Resources", l: ["Blog", "Cases", "Docs"]}, 
              {t: "Contact", l: ["hello@mt7.io", "+91 90000", "Worldwide"]}
            ].map((group, i) => (
              <div key={i} className="min-w-[140px]">
                <h5 className="text-white font-bold mb-6 text-[10px] tracking-[0.2em] uppercase opacity-60">{group.t}</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-medium">
                  {group.l.map((link, j) => (
                    <li key={j} className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT 4 COLUMNS: CONTACT FORM */}
        <div className="lg:col-span-4 bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          {/* UPDATED HEADING WITH GRADIENT COLOR */}
          <h3 className="text-xl font-bold mb-7 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent tracking-tight">
            Let’s Build Together
          </h3>
          
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-300"
            />
            <input 
              type="text" 
              name="contact" 
              placeholder="Your Contact Number" 
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-300"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-300"
            />
            <textarea 
              name="message" 
              placeholder="How can we help?" 
              required
              rows={5} 
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500/50 transition-all resize-none placeholder:text-zinc-300"
            ></textarea>
            
            <motion.button 
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-lg text-xs transition-all shadow-lg mt-1"
            >
              Send Message
            </motion.button>
          </form>
          {result && <p className="text-[10px] text-orange-400 mt-4 text-center font-medium animate-pulse">{result}</p>}
        </div>

        {/* FULL WIDTH BOTTOM BAR */}
        <div className="col-span-full mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-6">
              <span className="text-xl font-black text-white tracking-tighter">MT7.IO</span>
              <div className="flex gap-4 text-[9px] text-gray-600 uppercase tracking-widest font-bold">
                 <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                 <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
              </div>
           </div>
           <p className="text-gray-700 text-[9px] tracking-[0.2em] uppercase font-bold">© {new Date().getFullYear()} MT7.IO Global — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;