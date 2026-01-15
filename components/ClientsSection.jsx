"use client";

import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Quote } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const CLIENT_LOGO_ROWS = [
  [
    { name: "GLOBAL HOMES", type: "Real Estate" },
    { name: "CREATIVE", type: "Design Agency" },
    { name: "LUXURY Homes", type: "Real Estate" },
    { name: "Duplex Estates", type: "Real Estate" },
    { name: "GREEN HOUSE", type: "Eco Tech" },
  ],
  [
    { name: "TECHNOVA", type: "Technology" },
    { name: "URBAN LIVING", type: "Property" },
    { name: "INNOVATE", type: "Consulting" },
    { name: "PRIME SPACES", type: "Real Estate" },
    { name: "MODERN LIVING", type: "Interior Design" },
  ],
];

const CLIENT_STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Industries Served" },
];

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

const ClientsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="clients" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={
            reduceMotion ? { opacity: 0.35 } : { opacity: [0.25, 0.45, 0.25] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              Our Clients
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          {/* FONT SIZE EXACTLY MATCHED TO SERVICES (text-2xl md:text-3xl lg:text-4xl) */}
          <h2
            className={`
                    ${montserrat.className} 
                    text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15]
                    bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
                    bg-clip-text text-transparent
                    drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
                  `}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className={`${montserrat.className} text-gray-400 text-lg max-w-3xl mx-auto`}
          >
            From early-stage startups to enterprises, we build systems that
            scale without surprises.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {CLIENT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-black/40 border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Marquees */}
        <div className="overflow-hidden mb-24">
          {[CLIENT_LOGO_ROWS[0], CLIENT_LOGO_ROWS[1]].map((row, idx) => (
            <motion.div
              key={idx}
              className="flex gap-12 mb-10 will-change-transform"
              animate={
                reduceMotion
                  ? false
                  : { x: idx === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }
              }
              transition={{
                duration: idx === 0 ? 40 : 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...row, ...row].map((client, i) => (
                <div
                  key={i}
                  className="min-w-[200px] p-6 rounded-2xl bg-black/30 border border-white/10 text-center"
                >
                  <div className="text-white font-bold">{client.name}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {client.type}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5"
            >
              <p className="text-gray-300 italic mb-8">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-orange-400 text-xs font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
              <Quote
                size={96}
                className="absolute bottom-[-12px] right-[-12px] text-orange-500/10"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ClientsSection);
