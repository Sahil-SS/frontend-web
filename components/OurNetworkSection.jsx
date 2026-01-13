"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const network = [
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Atlassian", logo: "/logos/atlassian.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];

const OurNetworkSection = () => {
  return (
    <section className="relative py-28 bg-black overflow-hidden flex justify-center">
      
      {/* Atmospheric background (subtle, no gimmicks) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-orange-900/10 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-10">
        
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative rounded-3xl
            bg-white
            px-14 py-16
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
          "
        >
          {/* Soft premium glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-400/20 via-transparent to-transparent blur-xl -z-10" />

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className={`${montserrat.className} text-xs uppercase tracking-[0.35em] text-gray-400 mb-3`}
            >
              Our Network
            </p>

            <h3
              className={`${montserrat.className} text-3xl md:text-4xl font-semibold text-black`}
            >
              Built to connect with the tools modern teams trust
            </h3>

            <p
              className={`${montserrat.className} mt-4 text-gray-500 text-sm max-w-xl mx-auto`}
            >
              MT7 is designed to integrate seamlessly into the workflows, platforms,
              and ecosystems that power fast-moving businesses.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
            {network.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center items-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={40}
                  className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurNetworkSection;
