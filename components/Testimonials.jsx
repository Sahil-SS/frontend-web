"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Quote } from "lucide-react"; 

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Founder, Fintech Startup",
    quote:
      "MT7.IO helped us move from chaos to clarity. Their engineering decisions saved us months of rework.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Product Lead, SaaS",
    quote:
      "The team understands scale. Everything was built with long-term growth in mind.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Chen",
    role: "CTO, AI Company",
    quote:
      "Clean architecture, solid delivery, zero drama. Exactly what you want from a technical partner.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, Enterprise",
    quote:
      "Their systems scaled seamlessly under real production load. Strong engineering culture.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-black overflow-hidden flex justify-center"
    >
      {/* TOP & BOTTOM BLENDS */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />

      {/* BACKGROUND GLOW */}
      <motion.div
        className="absolute -top-40 left-[-200px] w-[500px] h-[500px] bg-orange-600/20 blur-[160px] rounded-full"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-700/20 blur-[160px] rounded-full"
        animate={{ x: [0, -80, 0], y: [0, -60, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ================= ALIGNMENT CONTAINER (MATCHES NAVBAR) ================= */}
      <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-14">
        
        {/* UPDATED SECTION HEADER - MATCHES SERVICE CODE DESIGN */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              Testimonials
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
            text-[1.68rem] md:text-[2.81rem] font-extrabold mt-8 mb-4
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
          `}>
            Trusted by teams that care about quality
          </h2>
        </div>

        {/* GRID - BOX DESIGN APPLIED FROM SERVICES */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, borderColor: "rgba(255, 69, 0, 0.3)" }}
              className="
                group relative p-8 rounded-[2rem]
                bg-zinc-900/40 backdrop-blur-md
                border border-white/5
                overflow-hidden transition-all duration-300
              "
            >
              {/* Inner Glow on Hover (from Services) */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Quote Text */}
                <p className={`${montserrat.className} text-gray-300 text-[1rem] leading-relaxed mb-8 font-medium italic`}>
                  “{t.quote}”
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className={`${montserrat.className} font-bold text-base text-white`}>{t.name}</p>
                    <p className={`${montserrat.className} text-xs text-orange-400/80 tracking-wide font-semibold`}>{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element (Inspired by Service icons) */}
              <div className="absolute bottom-[-15px] right-[-15px] opacity-5 group-hover:opacity-10 transition-opacity text-orange-500">
                <Quote size={100} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;