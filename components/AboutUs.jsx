"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const AboutSection = () => {
  // Cursor tracking for the interactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to prevent jitter and keep it "snappy"
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative pt-50 pb-10 bg-transparent overflow-hidden flex justify-center w-full"
    >
      {/* ================= OPTIMIZED BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top/Bottom Blenders */}
        {/* <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" /> */}
        {/* <motion.div
          style={{
            left: dx,
            top: dy,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform"
        />
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.4, 0], 
              y: [-20, -150],
              x: Math.sin(i) * 20 
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${(i * 15) % 100}%`,
              bottom: "10%",
            }}
          />
        ))} */}
      </div>

        {/* Interactive Cursor Glow */}

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-30 w-full min-w-[80vw] max-w-[1400px] px-14 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              About Us
            </p>
            {/* Animated Underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`
            ${montserrat.className}
            text-4xl md:text-5xl font-bold mt-8 mb-8 leading-[1.15]
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
          `}>
            We build networks that power modern businesses.
          </h2>

          <p className={`${montserrat.className} text-zinc-400 text-lg leading-relaxed max-w-lg font-light`}>
            MT7.IO is a next-generation business networking platform designed to
            help startups and enterprises collaborate, scale faster and build
            meaningful digital ecosystems with confidence.
          </p>
        </div>

        {/* RIGHT SIDE — GLASS UI AREA */}
        <div className="relative">
          {/* Main Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 bg-zinc-900/50 backdrop-blur-md group"
          >
            <Image
              src="/aboutus.png"
              alt="MT7 Infrastructure"
              fill
              priority
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Inner Glass Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </motion.div>

          {/* Optimized Glass Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              "Scalable Infrastructure",
              "Secure by Design",
              "Global Reach",
              "24/7 Support",
            ].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className={`
                  ${montserrat.className}
                  p-5 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm
                  text-white text-sm font-medium transition-colors
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#ff6a00]" />
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;