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
      className="relative pt-50 pb-10 bg-black overflow-hidden flex justify-center w-full"
    >
      {/* ================= OPTIMIZED BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top/Bottom Blenders */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />

        {/* Interactive Cursor Glow */}
        <motion.div
          style={{
            left: dx,
            top: dy,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform"
        />

        {/* Static Atmospheric Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />

        {/* Rising Embers (Particles) */}
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
        ))}
      </div>

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

// "use client";

// import React, { useState, useCallback } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import Image from "next/image";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
//   display: "swap",
// });

// const FEATURES = [
//   { title: "Scalable Infrastructure", pos: "top-[-10%] left-[-15%]" },
//   { title: "Secure by Design", pos: "bottom-[15%] left-[-10%]" },
//   { title: "Global Reach", pos: "top-[10%] right-[-15%]" },
//   { title: "24/7 Support", pos: "bottom-[-10%] right-[-5%]" },
// ];

// const AboutSection = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springConfig = { damping: 25, stiffness: 150 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }, [mouseX, mouseY]);

//   return (
//     <section
//       id="about"
//       onMouseMove={handleMouseMove}
//       className="relative py-40 bg-black overflow-hidden flex justify-center w-full"
//     >
//       {/* ================= BACKGROUND (UNTOUCHED VIBE) ================= */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
//         <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
//         <motion.div style={{ left: dx, top: dy, translateX: "-50%", translateY: "-50%" }}
//           className="absolute w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform" />
//         {[...Array(10)].map((_, i) => (
//           <motion.div key={i} animate={{ opacity: [0, 0.4, 0], y: [-20, -150], x: Math.sin(i) * 20 }}
//             transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
//             className="absolute w-1 h-1 bg-orange-500 rounded-full"
//             style={{ left: `${(i * 18) % 100}%`, bottom: "10%" }} />
//         ))}
//       </div>

//       <div className="relative z-30 w-full min-w-[80vw] max-w-[1400px] px-14 grid lg:grid-cols-12 gap-12 items-center">
        
//         {/* LEFT CONTENT (Column 1-5) */}
//         <div className="lg:col-span-5 flex flex-col items-start z-40">
//           <div className="inline-block">
//             <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
//               About Us
//             </p>
//             <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
//               transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
//               className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent" />
//           </div>

//           <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold mt-8 mb-8 leading-[1.1] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
//             We build networks that power modern businesses.
//           </h2>

//           <p className={`${montserrat.className} text-zinc-400 text-lg leading-relaxed max-w-md font-light`}>
//             MT7.IO is a next-generation business networking platform designed to help digital ecosystems scale with confidence.
//           </p>
//         </div>

//         {/* RIGHT VISUAL (Column 6-12) — ASYMMETRIC STACK */}
//         <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
          
//           {/* Main Hero Image Frame - Slightly tilted for character */}
//           <motion.div
//             initial={{ opacity: 0, rotate: 2 }}
//             whileInView={{ opacity: 1, rotate: -2 }}
//             viewport={{ once: true }}
//             className="relative w-[85%] aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl z-20"
//           >
//             <Image src="/aboutus.png" alt="Infrastructure" fill priority className="object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5" />
//           </motion.div>

//           {/* SCATTERED CARDS - This removes the "AI Grid" look */}
//           {FEATURES.map((feature, i) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, scale: 0.8, y: 20 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
//               whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(255,165,0,0.3)" }}
//               className={`
//                 absolute ${feature.pos} z-30
//                 hidden md:flex items-center gap-3
//                 px-6 py-4 rounded-2xl
//                 bg-black/60 backdrop-blur-xl
//                 border border-white/10 
//                 shadow-[0_10px_30px_rgba(0,0,0,0.5)]
//                 whitespace-nowrap
//               `}
//             >
//               <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#ff6a00]" />
//               <span className={`${montserrat.className} text-white text-sm font-semibold tracking-wide uppercase`}>
//                 {feature.title}
//               </span>
//             </motion.div>
//           ))}

//           {/* Mobile Fallback - Stacks neatly on small screens */}
//           <div className="md:hidden grid grid-cols-1 gap-4 mt-8 w-full">
//             {FEATURES.map((f) => (
//               <div key={f.title} className="p-4 rounded-xl bg-white/5 border border-white/10 text-white text-center">
//                 {f.title}
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;