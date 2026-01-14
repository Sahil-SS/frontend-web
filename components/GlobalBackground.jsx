// components/GlobalBackground.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

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

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
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
  );
};

export default GlobalBackground;