// // components/GlobalBackground.jsx
// "use client";

// import React, { useEffect, useCallback } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const GlobalBackground = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const springConfig = { damping: 25, stiffness: 150 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const handleMouseMove = useCallback((e) => {
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   }, [mouseX, mouseY]);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [handleMouseMove]);

//   return (
//     // Added bg-black here to ensure the glows pop
//     <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202]">
//       {/* Interactive Cursor Glow */}
//       <motion.div
//         style={{
//           left: dx,
//           top: dy,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         className="absolute w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform"
//       />

//       {/* Static Atmospheric Glows */}
//       <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/20 blur-[150px] rounded-full" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />

//       {/* --- EDITED SECTION: REALISTIC FIRE EMBERS --- */}
//       {/* Increased count slightly for better density */}
//       {[...Array(20)].map((_, i) => {
//         // Generate some random variations for natural look
//         const randomDuration = 5 + Math.random() * 5; // Between 5s and 10s rise time
//         const randomDelay = Math.random() * 5; // Staggered start
//         const randomScale = 0.8 + Math.random() * 0.5; // Varying sizes
//         const randomXDrift = (Math.random() - 0.5) * 150; // Drift left or right during rise

//         return (
//         <motion.div
//           key={i}
//           // Start just below the screen visible area
//           initial={{ opacity: 0, y: "105vh", scale: 0 }}
//           animate={{ 
//             // Lifecycle: Burst bright -> dim slightly while rising -> fade out completely
//             opacity: [0, 1, 0.8, 0], 
//             // Movement: Rise from bottom to near top of screen
//             y: ["105vh", "10vh"],
//             // Drift: Add horizontal wavering due to heat turbulence
//             x: [0, randomXDrift / 2, randomXDrift],
//             // Burnout: Grow rapidly at start, shrink as they cool/die
//             scale: [0, randomScale, randomScale * 0.5, 0]
//           }}
//           transition={{
//             duration: randomDuration,
//             repeat: Infinity,
//             delay: randomDelay,
//             // easeOut makes them start fast (hot thermal updraft) and slow down near top
//             ease: "easeOut", 
//           }}
//           // Styling: Small size, bright core, intense fiery glow
//           className="absolute w-[3px] h-[3px] bg-amber-200 rounded-full will-change-transform"
//           style={{
//             // Spread them horizontally across the bottom center
//             left: `${20 + Math.random() * 60}%`, 
//             // Intense, multi-layered fiery shadow + slight blur for gaseous look
//             boxShadow: "0 0 8px 2px rgba(255, 80, 0, 0.8), 0 0 16px 4px rgba(255, 0, 0, 0.4)",
//             filter: 'blur(0.5px)'
//           }}
//         />
//       )})}
//        {/* --- END EDITED SECTION --- */}
//     </div>
//   );
// };

// export default GlobalBackground;

// "use client";

// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// const GlobalBackground = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const springConfig = { damping: 30, stiffness: 100 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const handleMouseMove = useCallback((e) => {
//     // Using innerWidth/Height to normalize coordinates if needed, 
//     // but direct pixel values work best for absolute positioning.
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   }, [mouseX, mouseY]);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [handleMouseMove]);

//   // Generate particles once to avoid re-renders
//   const particles = useMemo(() => {
//     return [...Array(20)].map((_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       left: `${Math.random() * 100}%`,
//       delay: Math.random() * 5,
//       duration: 10 + Math.random() * 10,
//       xOffset: Math.random() * 100 - 50,
//     }));
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050505]">
//       {/* 1. Grain/Noise Overlay (The "Secret Sauce") */}
//       <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay pointer-events-none" 
//            style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>

//       {/* 2. Interactive Cursor Glow (Multi-layered for depth) */}
//       <motion.div
//         style={{ left: dx, top: dy, translateX: "-50%", translateY: "-50%" }}
//         className="absolute w-[800px] h-[800px] bg-orange-600/10 blur-[120px] rounded-full z-10 will-change-transform"
//       />
//       <motion.div
//         style={{ left: dx, top: dy, translateX: "-50%", translateY: "-50%" }}
//         className="absolute w-[300px] h-[300px] bg-orange-400/10 blur-[80px] rounded-full z-10 will-change-transform"
//       />

//       {/* 3. Static Atmospheric Depth */}
//       <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/15 blur-[160px] rounded-full" />
//       <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-900/10 blur-[160px] rounded-full" />
      
//       {/* 4. Subtle Center Vignette */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

//       {/* 5. Improved Rising Embers */}
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           initial={{ opacity: 0, y: "10vh" }}
//           animate={{ 
//             opacity: [0, 0.7, 0], 
//             y: ["100vh", "-10vh"],
//             x: [0, p.xOffset],
//             scale: [1, 1.5, 0.5]
//           }}
//           transition={{
//             duration: p.duration,
//             repeat: Infinity,
//             delay: p.delay,
//             ease: "linear",
//           }}
//           className="absolute rounded-full bg-orange-500/60 blur-[1px]"
//           style={{
//             left: p.left,
//             width: p.size,
//             height: p.size,
//             boxShadow: '0 0 8px rgba(249, 115, 22, 0.8)',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default GlobalBackground;

"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LightPillar from "./hero/LightPillar"; // Adjust path as needed

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Performance: Memoize particles so they don't regenerate on every mouse move
  const emberParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      randomDuration: 5 + Math.random() * 5,
      randomDelay: Math.random() * 5,
      randomScale: 0.8 + Math.random() * 0.5,
      randomXDrift: (Math.random() - 0.5) * 150,
      left: `${20 + Math.random() * 60}%`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202]">
      
      {/* ================= LIGHT PILLAR (One instance for all sections) ================= */}
      {/* Positioned absolutely within the fixed background. 
          As the user scrolls, the pillar stays fixed, 
          making it feel like a massive world-object. */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#FFA500"
          bottomColor="#E65100"
          intensity={1.1} // Reduced slightly for global visibility
          pillarWidth={0.5}
          pillarHeight={1.0}
          pillarRotation={103}
          className="opacity-50" // High performance blend
        />
      </div>

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

      {/* Realistic Fire Embers */}
      {emberParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: "105vh", scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.8, 0], 
            y: ["105vh", "10vh"],
            x: [0, p.randomXDrift / 2, p.randomXDrift],
            scale: [0, p.randomScale, p.randomScale * 0.5, 0]
          }}
          transition={{
            duration: p.randomDuration,
            repeat: Infinity,
            delay: p.randomDelay,
            ease: "easeOut", 
          }}
          className="absolute w-[3px] h-[3px] bg-amber-200 rounded-full will-change-transform"
          style={{
            left: p.left,
            boxShadow: "0 0 8px 2px rgba(255, 80, 0, 0.8), 0 0 16px 4px rgba(255, 0, 0, 0.4)",
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Added a bottom vignette to ground the sections */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
    </div>
  );
};

export default GlobalBackground;