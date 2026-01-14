"use client";

import React from "react";
import { motion } from "framer-motion";
// 1. Import Montserrat
import { Montserrat } from "next/font/google";

// 2. Configure Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plans = [
  {
    name: "Start-up",
    price: "$599",
    subtitle: "1 request at a time",
    highlight: false,
  },
  {
    name: "Mid-level",
    price: "$799",
    subtitle: "2 requests at a time",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    subtitle: "3 requests at a time",
    highlight: false,
  },
];

const features = [
  "Single page website designs",
  "Logo design",
  "App design",
  "Slide decks",
  "Content calendar",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative pt-32 pb-10 bg-transparent overflow-hidden flex justify-center"
    >
      {/* ================= BLEND TOP & BOTTOM ================= */}
      {/* <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" /> */}

      {/* ================= BACKGROUND GLOW ================= */}
      {/* <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[200px] rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-14">
        
        {/* SECTION HEADER (KEPT UPDATED DESIGN) */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-400 mb-4`}>
              Pricing
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`
            ${montserrat.className} 
            text-[2.025rem] md:text-[3.375rem] font-extrabold mt-8 mb-4
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
          `}>
            Affordable pricing plan
          </h2>
        </div>

        {/* PRICING CARDS GRID (RESTORED TO OLD DESIGN) */}
        <div className="grid md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className={`
                relative rounded-3xl 
                p-7
                backdrop-blur-xl border
                shadow-2xl transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-white/10 border-orange-400/40 scale-[1.04] z-10"
                    : "bg-white/5 border-white/10"
                }
              `}
            >
              {/* STATIC GLOW FOR HIGHLIGHTED PLAN (RESTORED) */}
              {plan.highlight && (
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent blur-xl -z-10" />
              )}

              {/* PLAN HEADER (RESTORED) */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold text-white`}>
                    {plan.name}
                  </h3>
                  <p className={`${montserrat.className} text-xs text-gray-400 mt-1 font-light`}>{plan.subtitle}</p>
                </div>

                <div className="text-right">
                  <p className={`${montserrat.className} text-3xl font-extrabold text-white`}>{plan.price}</p>
                  <p className={`${montserrat.className} text-xs text-gray-400 font-light`}>Per month</p>
                </div>
              </div>

              {/* BUTTON (RESTORED) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  ${montserrat.className}
                  w-full py-2.5 rounded-full text-sm font-bold mb-8 transition-shadow
                  ${
                    plan.highlight
                      ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                      : "bg-black text-white border border-white/20"
                  }
                `}
              >
                Purchase
              </motion.button>

              {/* FEATURES (RESTORED) */}
              <div>
                <p className={`${montserrat.className} text-sm text-white font-semibold mb-4`}>
                  What’s included?
                </p>

                <ul className={`${montserrat.className} space-y-2.5 text-gray-300 text-[13px] font-medium`}>
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-orange-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;