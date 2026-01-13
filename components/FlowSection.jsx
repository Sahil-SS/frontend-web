"use client";

import React from "react";
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
  return (
    <section className="relative py-40 bg-black overflow-hidden flex justify-center w-full">
      
      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />

        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-600/10 blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-red-800/10 blur-[160px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 w-full max-w-[1400px] px-12">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p className={`${montserrat.className} text-xs tracking-[0.3em] uppercase text-orange-500 mb-4`}>
            How it works
          </p>
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold leading-tight text-white`}>
            Placeholder headline for system flow
          </h2>
        </div>

        {/* ================= FLOW GRID ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 items-center">

          {/* LEFT STACK */}
          <div className="flex flex-col gap-6">
            {STACK.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-6 py-5"
              >
                <div className="h-3 w-24 bg-white/10 rounded" />
              </motion.div>
            ))}
          </div>

          {/* LINE → CORE */}
          <FlowLine direction="right" />

          {/* CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/15 bg-zinc-900/60 backdrop-blur-xl px-10 py-14 shadow-[0_0_80px_rgba(255,115,0,0.15)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="h-4 w-32 bg-white/20 rounded mb-6" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3 w-full bg-white/10 rounded" />
              ))}
            </div>
          </motion.div>

          {/* LINE → CLIENT */}
          <FlowLine direction="right" />

          {/* CLIENT + OUTCOMES */}
          <div className="flex flex-col items-center gap-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md px-10 py-6"
            >
              <div className="h-4 w-28 bg-white/20 rounded" />
            </motion.div>

            <div className="flex flex-col gap-6">
              {OUTCOMES.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-6 py-4"
                >
                  <div className="h-3 w-36 bg-white/10 rounded" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlowSection;

/* ================= FLOW LINE COMPONENT ================= */

const FlowLine = ({ direction = "right" }) => {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative w-32 h-[2px] origin-left bg-gradient-to-r from-orange-500 via-orange-400 to-transparent"
      >
        <motion.span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};
