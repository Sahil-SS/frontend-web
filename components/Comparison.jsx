"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Check, X, Zap, Shield, Globe, Cpu, Layers } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const COMPARISON_DATA = [
  {
    feature: "Infrastructure Scaling",
    desc: "How the system handles sudden traffic spikes.",
    mt7: "Elastic Real-time Scaling",
    legacy: "Manual Provisioning",
    icon: <Cpu size={20} />,
    status: true,
  },
  {
    feature: "Security Framework",
    desc: "End-to-end encryption and threat detection.",
    mt7: "Zero-Trust Architecture",
    legacy: "Basic SSL/Firewall",
    icon: <Shield size={20} />,
    status: true,
  },
  {
    feature: "Global Latency",
    desc: "Speed of data delivery across continents.",
    mt7: "< 50ms Worldwide",
    legacy: "200ms - 500ms+",
    icon: <Globe size={20} />,
    status: true,
  },
  {
    feature: "Deployment Speed",
    desc: "Time taken from code to live production.",
    mt7: "Instant CI/CD",
    legacy: "Weekly Release Cycles",
    icon: <Zap size={20} />,
    status: true,
  },
  {
    feature: "System Architecture",
    desc: "The underlying structure of the network.",
    mt7: "Microservices & Edge",
    legacy: "Monolithic Bloat",
    icon: <Layers size={20} />,
    status: true,
  },
];

const Comparison = () => {
  return (
    <section id="comparison" className={`relative py-32 bg-[#050505] overflow-hidden flex justify-center w-full ${montserrat.className}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-orange-500 mb-4">Benchmarks</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">EVOLUTION</span> OF SPEED
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Why settle for legacy constraints when you can build on the future? 
              See how MT7.IO outpaces traditional infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/20 backdrop-blur-sm">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">
            <div className="col-span-6 md:col-span-5 p-6 md:p-10">
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Feature</span>
            </div>
            <div className="col-span-3 md:col-span-3 p-6 md:p-10 border-l border-white/10 bg-orange-500/5">
              <span className="text-xs font-black tracking-widest text-orange-500 uppercase flex items-center gap-2">
                MT7.IO <Zap size={14} className="fill-orange-500" />
              </span>
            </div>
            <div className="col-span-3 md:col-span-4 p-6 md:p-10 border-l border-white/10">
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Others</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {COMPARISON_DATA.map((row, idx) => (
              <motion.div 
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors group"
              >
                {/* Feature Description */}
                <div className="col-span-6 md:col-span-5 p-6 md:p-10 flex gap-6 items-start">
                  <div className="hidden md:flex w-10 h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
                    {row.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base mb-1">{row.feature}</h4>
                    <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed hidden md:block">{row.desc}</p>
                  </div>
                </div>

                {/* MT7 Column */}
                <div className="col-span-3 md:col-span-3 p-6 md:p-10 border-l border-white/10 bg-orange-500/[0.02] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Check size={16} className="text-orange-500" />
                    <span className="text-white font-bold text-[11px] md:text-sm">{row.mt7}</span>
                  </div>
                </div>

                {/* Others Column */}
                <div className="col-span-3 md:col-span-4 p-6 md:p-10 border-l border-white/10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1 opacity-40">
                    <X size={16} className="text-zinc-500" />
                    <span className="text-zinc-400 font-medium text-[11px] md:text-sm">{row.legacy}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Comparison */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl border border-dashed border-white/10">
          <p className="text-zinc-400 text-sm font-medium">
            Stop dealing with legacy friction. Join the next generation of business networking.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-orange-600 hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Upgrade Your Stack
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;