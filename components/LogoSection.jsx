"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

// Replace these with your actual logo paths
const LOGOS = [
  { name: "Discord", src: "/logos/discord.svg" },
  { name: "Webflow", src: "/logos/webflow.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Atlassian", src: "/logos/atlassian.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
];

const LogoSection = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden flex justify-center w-full">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-600/10 blur-[150px] rounded-full" /> */}
      </div>

      <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-6 md:px-14">
        
        {/* GLASS CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/30 backdrop-blur-xl p-12 md:p-20 overflow-hidden"
        >
          {/* CONTENT LAYOUT */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block mb-4">
              <p className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] font-bold text-orange-500`}>
                Trusted Partners
              </p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-orange-500/50 mt-1"
              />
            </div>

            <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight`}>
              Powering the next generation <br className="hidden md:block" /> 
              of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffae42] to-[#ff4500]">digital ecosystems.</span>
            </h2>
          </div>

          {/* INFINITE LOGO TICKER */}
          <div className="relative mt-10">
            {/* Fade Overlays for the ticker edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent z-10" />

            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
              >
                {/* Duplicate the array to create seamless loop */}
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div key={i} className="flex items-center gap-3 group transition-all duration-300">
                    <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50">
                      {/* Using a placeholder circle to represent the logo icon */}
                      <div className="w-5 h-5 rounded-sm border-2 border-white/20 group-hover:border-orange-400 group-hover:rotate-45 transition-all duration-500" />
                    </div>
                    <span className={`${montserrat.className} text-xl md:text-2xl font-bold text-white/30 group-hover:text-white transition-colors`}>
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* BOTTOM SUBTEXT */}
          <p className={`${montserrat.className} text-center mt-16 text-zinc-500 text-xs font-medium tracking-widest uppercase opacity-60`}>
            Integrated with over 50+ enterprise tools & platforms
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;