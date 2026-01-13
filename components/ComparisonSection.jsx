"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const comparison = [
  {
    feature: "Purpose",
    mt7: "Built for execution & outcomes",
    others: "Built for passive networking",
  },
  {
    feature: "Matching",
    mt7: "Intent-based & AI-assisted",
    others: "Manual search & cold outreach",
  },
  {
    feature: "Collaboration",
    mt7: "Shared workspaces with context",
    others: "Fragmented across tools",
  },
  {
    feature: "Signal vs Noise",
    mt7: "High-signal, curated connections",
    others: "Feeds full of irrelevant activity",
  },
  {
    feature: "Scalability",
    mt7: "Designed to scale with teams",
    others: "Breaks down as network grows",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative py-36 bg-black overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[45%] h-[45%] bg-orange-900/10 blur-[200px]" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[45%] h-[45%] bg-red-900/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-14">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p
            className={`${montserrat.className} uppercase tracking-[0.35em] text-xs text-orange-400 mb-4`}
          >
            Why MT7
          </p>

          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6`}
          >
            Networking that actually leads to execution
          </h2>

          <p
            className={`${montserrat.className} text-zinc-400 text-lg max-w-xl`}
          >
            Traditional platforms help you connect. MT7 helps you move forward.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/[0.03]">
          
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent blur-xl pointer-events-none" />

          {/* Header Row */}
          <div className="grid grid-cols-3 px-8 py-6 border-b border-white/10">
            <div />
            <div
              className={`${montserrat.className} text-white font-semibold text-lg`}
            >
              MT7
            </div>
            <div
              className={`${montserrat.className} text-zinc-400 font-semibold text-lg`}
            >
              Traditional Platforms
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 px-8 py-6 border-b border-white/5 last:border-none"
            >
              <div
                className={`${montserrat.className} text-zinc-300 font-medium`}
              >
                {row.feature}
              </div>

              <div
                className={`${montserrat.className} text-white`}
              >
                {row.mt7}
              </div>

              <div
                className={`${montserrat.className} text-zinc-500`}
              >
                {row.others}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
