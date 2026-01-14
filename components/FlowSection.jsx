"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const STACK = Array.from({ length: 4 });
const OUTCOMES = Array.from({ length: 2 });

const FlowSection = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" }, 
        opacity: { duration: 0.2 } 
      }
    }
  };

  return (
    <section className="relative py-10 md:py-20 bg-transparent overflow-hidden flex justify-center w-full">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-600/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-800/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl flex flex-col items-start">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              How it works
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>
          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
            Placeholder headline for system flow
          </h2>
        </div>

        {/* ================= FLOW GRID ================= */}
        <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_2.5fr_0.8fr] gap-10 lg:gap-4 items-center">

          {/* 1. LEFT STACK (Entering Flow) */}
          <div className="relative flex flex-row lg:flex-col gap-3 w-full lg:w-auto justify-center">
             <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-[#f97316] lg:hidden">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M0 0 L5 5 L10 0" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
             </div>
            
            {STACK.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-4 py-3 md:px-5 md:py-4 flex-shrink-0"
              >
                <div className="h-2 w-12 md:w-16 bg-white/10 rounded" />
              </motion.div>
            ))}
          </div>

          {/* 2. MIDDLE AREA (Concave Flow Hub) */}
          <div className="relative w-full max-w-[600px] aspect-[16/11] md:aspect-[16/9] min-h-[280px] md:min-h-[300px] flex items-center justify-center scale-90 md:scale-100">
            
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
              viewBox="0 0 600 400" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
                </marker>
              </defs>

              <motion.path className="hidden lg:block" d="M -50,200 L 100,200" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} />
              <motion.path d="M 200,170 C 200,50 400,50 450,170" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />
              <motion.path d="M 450,230 C 400,350 200,350 200,230" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />
              <motion.path d="M 230,200 L 380,200" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />
              <path className="hidden lg:block" d="M 520,200 L 650,200" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

              <circle r="2.5" fill="#fb923c">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 200,170 C 200,50 400,50 450,170" />
              </circle>
              <circle r="2.5" fill="#fb923c">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 450,230 C 400,350 200,350 200,230" />
              </circle>
            </svg>

            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="absolute left-[18%] md:left-[22%] w-20 h-20 md:w-28 md:h-28 border-2 border-orange-500 rounded-2xl bg-black flex items-center justify-center z-10 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              <span className="text-white font-bold text-sm md:text-xl">MT7</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute right-[5%] md:right-[10%] w-32 h-16 md:w-44 md:h-20 border border-white/20 rounded-xl bg-zinc-900/40 backdrop-blur-md flex items-center justify-center z-10">
              <span className="text-white font-bold text-xs md:text-lg uppercase tracking-widest">Clients</span>
            </motion.div>

            <div className="absolute top-[14.5%] md:top-[15%] left-[55%] -translate-x-1/2 text-orange-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Service</div>
            <div className="absolute bottom-[14.5%] md:bottom-[15%] left-[55%] -translate-x-1/2 text-orange-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Request</div>
          </div>

          {/* 3. FAR RIGHT: OUTCOMES (Exiting Flow) */}
          <div className="relative flex flex-row lg:flex-col gap-4 w-full lg:w-auto justify-center">
            {/* Arrow pointing DOWN towards outcomes boxes */}
            <div className="absolute -top-8 left-1/2 w-px h-8 bg-[#f97316] lg:hidden">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M0 0 L5 5 L10 0" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
            </div>

            {OUTCOMES.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-md p-4 md:p-6 shadow-lg flex-shrink-0"
              >
                <div className="h-3 w-16 md:w-24 bg-white/10 rounded" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(FlowSection);