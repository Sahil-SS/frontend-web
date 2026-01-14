"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Client logos data - you can replace these with actual logos
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
  [
    { name: "ELITE HOMES", type: "Real Estate" },
    { name: "DESIGN WORKS", type: "Architecture" },
    { name: "SUMMIT", type: "Corporation" },
    { name: "VISIONARY", type: "Consulting" },
    { name: "URBAN SPACES", type: "Development" },
  ],
];

const CLIENT_STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Industries Served" },
];

const ClientsSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(dy, [0, 600], [5, -5]);
  const rotateY = useTransform(dx, [0, 800], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="clients"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlays */}
        {/* <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" /> */}
        {/* <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" /> */}
        
        {/* Animated gradient glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10 blur-[120px] rounded-full"
        />
        
        {/* Grid pattern overlay */}
        {/* <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        /> */}
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-orange-500 mb-2`}>
              Our Clients
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-transparent mx-auto max-w-xs"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${montserrat.className} text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white`}
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${montserrat.className} text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
          >
            We&apos;ve partnered with renowned names across industries. From startups to Fortune 500 companies, 
            we&apos;ve delivered exceptional results for clients of all sizes.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {CLIENT_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <div className={`${montserrat.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className={`${montserrat.className} text-gray-400 text-sm`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Marquee */}
        <div className="relative overflow-hidden mb-16">
          {/* First Row - Left to Right */}
          <motion.div
            className="flex gap-12 mb-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...CLIENT_LOGO_ROWS[0], ...CLIENT_LOGO_ROWS[0]].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm min-w-[200px] group hover:border-orange-500/30 transition-all duration-300"
              >
                <div className={`${montserrat.className} text-xl font-bold text-white mb-2 text-center`}>
                  {client.name}
                </div>
                <div className={`${montserrat.className} text-xs text-gray-400 text-center`}>
                  {client.type}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Right to Left */}
          <motion.div
            className="flex gap-12 mb-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...CLIENT_LOGO_ROWS[1], ...CLIENT_LOGO_ROWS[1]].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm min-w-[200px] group hover:border-red-500/30 transition-all duration-300"
              >
                <div className={`${montserrat.className} text-xl font-bold text-white mb-2 text-center`}>
                  {client.name}
                </div>
                <div className={`${montserrat.className} text-xs text-gray-400 text-center`}>
                  {client.type}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Third Row - Left to Right (slower) */}
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...CLIENT_LOGO_ROWS[2], ...CLIENT_LOGO_ROWS[2]].map((client, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm min-w-[200px] group hover:border-orange-500/30 transition-all duration-300"
              >
                <div className={`${montserrat.className} text-xl font-bold text-white mb-2 text-center`}>
                  {client.name}
                </div>
                <div className={`${montserrat.className} text-xs text-gray-400 text-center`}>
                  {client.type}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient fades on edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Interactive Testimonials Grid */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
        >
          {[
            {
              quote: "MT7.in transformed our digital infrastructure. Their team delivered beyond expectations.",
              author: "Sarah Chen",
              position: "CTO, Global Homes",
              rating: 5,
            },
            {
              quote: "Professional, innovative, and reliable. The best tech partner we've worked with.",
              author: "Michael Rodriguez",
              position: "CEO, Creative Agency",
              rating: 5,
            },
            {
              quote: "Exceptional service and cutting-edge solutions. Highly recommended for enterprise needs.",
              author: "David Park",
              position: "Head of IT, Luxury Homes",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: "rgba(255, 140, 0, 0.3)" }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform-gpu"
            >
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              
              <blockquote className={`${montserrat.className} text-gray-300 text-lg mb-6 italic`}>
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className={`${montserrat.className} text-white font-semibold`}>
                  {testimonial.author}
                </div>
                <div className={`${montserrat.className} text-gray-400 text-sm`}>
                  {testimonial.position}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
            Ready to join our growing list of satisfied clients?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${montserrat.className} px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300`}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;