// "use client";

// import LightPillar from "./LightPillar";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Montserrat } from "next/font/google";

// // 1. Configure the font to match your site-wide branding
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "700", "800", "900"],
//   display: "swap",
// });

// export default function Hero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative min-h-screen overflow-hidden bg-black flex justify-center items-center"
//     >
//       {/* BASE DARK BACKGROUND */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#1a0400] to-black" />

//       {/* LIGHT PILLAR */}
//       <LightPillar
//         topColor="#ff2949"
//         rotationSpeed={0.08}
//         pillarRotation={103}
//         className="z-0"
//       />

//       {/* FLOATING ORBS - AMBIENT ANIMATION */}
//       <motion.div
//         className="absolute z-[1] top-10 left-10 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px]"
//         animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute z-[1] bottom-20 right-10 w-[450px] h-[450px] bg-red-600/20 rounded-full blur-[140px]"
//         animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* VIGNETTE OVERLAY */}
//       <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

//       {/* ================= ALIGNMENT CONTAINER (MATCHES NAVBAR ENDINGS) ================= */}
//       <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-14 flex items-center justify-between">
        
//         {/* LEFT CONTENT (TEXT) - Aligns vertically with Navbar Logo */}
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
//           className="max-w-xl"
//         >
//           <h1
//             className={`
//               ${montserrat.className}
//               /* text size reduced by 10% from previous values */
//               text-[2.025rem] md:text-[3.0375rem] font-extrabold leading-tight tracking-tight
//               bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
//               bg-clip-text text-transparent
//               drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
//             `}
//           >
//             Your Business, <br /> Our Network.
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className={`${montserrat.className} mt-6 text-lg text-gray-300 font-light`}
//           >
//             Calm. Dark. Powerful motion that pulls attention without noise.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.6 }}
//             className="mt-10 flex gap-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${montserrat.className} px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition`}
//             >
//               Get Started
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${montserrat.className} px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition`}
//             >
//               View Work
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT CONTENT (STAGGERED CAPSULES) */}
//         <div className="hidden lg:flex gap-8 items-center">
//           {/* Left Capsule - Slanted Lower */}
//           <div className="relative w-56 h-80 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl translate-y-12">
//             <Image src="/work.png" fill className="object-cover" alt="Portfolio Preview" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
//           </div>

//           {/* Right Capsule - Slanted Higher */}
//           <div className="relative w-56 h-80 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl -translate-y-12">
//             <Image src="/office.png" fill className="object-cover" alt="Office Preview" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
"use client";

import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Lazy load the heavy component
//const LazyLightPillar = lazy(() => import("./LightPillar"));

// Configure the font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Load critical CSS
const criticalStyles = `
  .hero-fallback-bg {
    background: radial-gradient(circle at 70% 50%, #ff2949 0%, #2a0a0a 100%);
    opacity: 0.3;
    filter: blur(40px);
  }
  
  .hero-container {
    will-change: transform, opacity;
  }
  
  .hero-image {
    will-change: transform;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Load fallback if Three.js takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 1000); // Show fallback after 1 second

    return () => clearTimeout(timer);
  }, []);

  // Add critical CSS to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = criticalStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 md:pt-0">
      {/* Critical CSS */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Base background (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      
      {/* Fallback background (shown immediately) */}
      {showFallback && (
        <div className="absolute inset-0 hero-fallback-bg z-0" />
      )}

      {/* Lazy loaded LightPillar with Suspense */}
      <Suspense 
        fallback={
          <div className="absolute inset-0 hero-fallback-bg z-0" />
        }
      >
        {/* <LazyLightPillar
          topColor="#ff2949"
          rotationSpeed={0.05}
          pillarRotation={103}
          className="z-0"
          intensity={0.8}
          glowAmount={0.003}
        /> */}
      </Suspense>

      {/* Optimized floating orbs with reduced motion */}
      <motion.div
        className="absolute top-10 left-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[80px] z-0"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[100px] z-0"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      />

      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-black/70" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 hero-container">
        
        {/* Left content - optimized animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut",
            delay: 0.2 
          }}
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          onAnimationComplete={() => setIsLoaded(true)}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`
              ${montserrat.className}
              text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
              bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
              bg-clip-text text-transparent
              mb-6
            `}
          >
            Your Business,
            <br />
            Our Network.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={`${montserrat.className} text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0`}
          >
            Calm. Dark. Powerful motion that pulls attention without noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className={`
                ${montserrat.className}
                px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-lg
                hover:bg-gray-100 active:scale-95 transition-transform duration-200
                focus:outline-none focus:ring-2 focus:ring-white/30
                min-w-[160px]
              `}
            >
              Get Started
            </button>

            <button
              className={`
                ${montserrat.className}
                px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white rounded-lg
                hover:bg-white/10 active:scale-95 transition-transform duration-200
                focus:outline-none focus:ring-2 focus:ring-white/30
                min-w-[160px]
              `}
            >
              View Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right content - images with priority loading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:flex gap-6 items-center relative"
        >
          {/* Left image */}
          <div className="relative w-48 h-64 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hero-image">
            <Image
              src="/work.png"
              alt="Portfolio Preview"
              fill
              className="object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          {/* Right image with offset */}
          <div className="relative w-48 h-64 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hero-image -mt-16">
            <Image
              src="/office.png"
              alt="Office Preview"
              fill
              className="object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Mobile images - separate for better performance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="lg:hidden mt-12 flex justify-center gap-6"
      >
        <div className="relative w-32 h-40 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
          <Image
            src="/work.png"
            alt="Portfolio Preview"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 50vw"
          />
        </div>
        <div className="relative w-32 h-40 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 -mt-8">
          <Image
            src="/office.png"
            alt="Office Preview"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}