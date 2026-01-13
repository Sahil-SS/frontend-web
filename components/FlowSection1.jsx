"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const FlowSection1 = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.5, bounce: 0 }, opacity: { duration: 0.01 } }
    }
  };

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden flex justify-center items-center">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex items-center gap-4 md:gap-8 w-full max-w-[1400px] h-[600px] px-4"
      >
        
        {/* 1. FAR LEFT: Tall Feature Columns (Wide Range Plans etc) */}
        <div className="flex gap-2 h-full py-10">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-10 md:w-16 h-full border border-white/20 rounded-full bg-white/5 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* 2. MIDDLE-LEFT: Small Stacked Boxes (Mesh, Juice, etc) */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className="w-20 md:w-28 h-10 border border-white/20 rounded-lg bg-white/5" />
          ))}
        </div>

        {/* 3. CENTER & CONNECTIONS: The SVG Hub Area */}
        <div className="relative flex-grow h-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
              </marker>
            </defs>

            {/* Path from Stack to MT7 */}
            <motion.path d="M -20,300 L 40,300" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />

            {/* Service Loop (Top) */}
            <motion.path d="M 120,260 C 120,150 250,150 350,220" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />
            
            {/* Request Loop (Bottom) */}
            <motion.path d="M 400,380 C 300,450 150,450 120,340" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />

            {/* Straight flow: MT7 -> Clients */}
            <motion.path d="M 180,300 L 300,300" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />

            {/* Animated Energy Pulses */}
            <circle r="3" fill="#fb923c">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 120,260 C 120,150 250,150 350,220" />
            </circle>
            <circle r="3" fill="#fb923c">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 400,380 C 300,450 150,450 120,340" />
            </circle>
          </svg>

          {/* MT7 Central Box */}
          <motion.div className="w-32 h-32 border-2 border-orange-500 rounded-2xl bg-black flex items-center justify-center z-10 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            <span className={`${montserrat.className} text-white font-bold text-2xl`}>MT7</span>
          </motion.div>

          {/* Labels for Arrows */}
          <div className="absolute top-[25%] left-[55%] text-orange-500 text-[10px] font-bold uppercase tracking-widest">Service</div>
          <div className="absolute bottom-[25%] left-[55%] text-orange-500 text-[10px] font-bold uppercase tracking-widest">Request</div>
        </div>

        {/* 4. CLIENTS BOX */}
        <div className="relative flex items-center justify-center">
          <motion.div className="w-40 md:w-56 h-20 border border-white/40 rounded-xl bg-white/5 flex items-center justify-center z-10">
            <span className={`${montserrat.className} text-white font-bold text-xl uppercase tracking-widest`}>Clients</span>
          </motion.div>
          
          {/* Vertical Splitter Path to Outcomes */}
          <svg className="absolute left-full w-40 h-full overflow-visible pointer-events-none">
            <motion.path d="M 0,300 L 40,300 L 40,150 L 100,150" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />
            <motion.path d="M 40,300 L 40,450 L 100,450" stroke="#f97316" strokeWidth="2" fill="none" variants={draw} markerEnd="url(#arrow)" />
          </svg>
        </div>

        {/* 5. FAR RIGHT: Outcomes (Word of mouth / Less Stress) */}
        <div className="flex flex-col justify-between h-[80%] ml-10">
          <motion.div className="w-56 p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md">
            <div className="w-full h-12 bg-white/10 rounded-lg animate-pulse" />
          </motion.div>
          
          <motion.div className="w-64 p-8 border border-white/20 rounded-3xl bg-white/5 backdrop-blur-md">
             <div className="w-full h-20 bg-white/10 rounded-xl animate-pulse" />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default FlowSection1;