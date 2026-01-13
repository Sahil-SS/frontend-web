"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const steps = [
  { title: "Discover", desc: "Identify founders, teams, and opportunities aligned with your goals." },
  { title: "Match", desc: "AI-driven matching connects you with the right people instantly." },
  { title: "Collaborate", desc: "Engage inside a shared, secure digital workspace." },
  { title: "Execute", desc: "Turn conversations into real execution and outcomes." },
  { title: "Scale", desc: "Leverage insights to grow faster across your network." },
];

const MT7FlowSection = () => {
  return (
    <section className="relative py-36 bg-black overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[-20%] w-[50%] h-[50%] bg-orange-900/10 blur-[200px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[50%] h-[50%] bg-red-900/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-14">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <p className={`${montserrat.className} uppercase tracking-[0.35em] text-xs text-orange-400 mb-4`}>
            The MT7 Flow
          </p>

          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
            From connection to execution — seamlessly
          </h2>

          <p className={`${montserrat.className} text-zinc-400 text-lg max-w-xl`}>
            MT7 transforms fragmented networking into a structured, scalable system
            designed for modern businesses.
          </p>
        </div>

        {/* Flow Container */}
        <div className="relative">

          {/* SVG Animated Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            {steps.slice(0, -1).map((_, i) => (
              <motion.path
                key={i}
                d={`M ${200 + i * 220} 150 L ${350 + i * 220} 150`}
                fill="transparent"
                stroke="rgba(255,140,0,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Blocks */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="
                  relative rounded-2xl
                  p-6
                  bg-white/[0.04]
                  backdrop-blur-xl
                  border border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                "
              >
                {/* Glow dot */}
                <div className="w-2 h-2 rounded-full bg-orange-500 mb-4 shadow-[0_0_12px_rgba(255,140,0,0.9)]" />

                <h4 className={`${montserrat.className} text-white font-semibold text-lg mb-2`}>
                  {step.title}
                </h4>

                <p className={`${montserrat.className} text-zinc-400 text-sm leading-relaxed`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT7FlowSection;
