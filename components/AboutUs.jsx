"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const AboutSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative pt-10 pb-10 bg-transparent overflow-hidden flex justify-center w-full"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Adjusted px-6 for mobile to match FlowSection */}
      <div className="relative z-30 w-full max-w-325 px-6 md:px-14 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start md:-mt-10">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              About Us
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-0.5 bg-linear-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2
            className={`
            ${montserrat.className}
            text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15]
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
          `}
          >
            We build networks that power modern businesses.
          </h2>

          <p
            className={`${montserrat.className} text-zinc-400 text-lg leading-relaxed max-w-lg font-light mb-5`}
          >
            MT7.IO is a next-generation business networking platform designed to
            help startups and enterprises collaborate, scale faster and build
            meaningful digital ecosystems with confidence.
          </p>
          <Link href="/about">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 69, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} w-fit px-8 py-4 mt-5 bg-[#ff4500] text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-900/20`}
            >
              <span className="flex items-center gap-3">
                Get to Know Us
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>

        {/* RIGHT SIDE — GLASS UI AREA */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 bg-zinc-900/50 backdrop-blur-md group max-w-[100%] md:max-w-[85%] mx-auto"
          >
            <Image
              src="/aboutus.png"
              alt="MT7 Infrastructure"
              fill
              priority
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mt-8 max-w-[100%] md:max-w-[85%] mx-auto">
            {[
              "Scalable Infrastructure",
              "Secure by Design",
              "Global Reach",
              "24/7 Support",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
                className={`
                  ${montserrat.className}
                  p-5 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm
                  text-white text-sm font-medium transition-colors
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#ff6a00]" />
                  <span className="truncate">{item}</span>
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
