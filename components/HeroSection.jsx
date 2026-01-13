"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Configure the font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  // Initialize floating particles
  const initParticles = useCallback((width, height) => {
    const particles = [];
    const particleCount = 25; // Optimized for performance
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: Math.random() > 0.7 ? "#ff6b35" : 
               Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
        opacity: 0.2 + Math.random() * 0.4,
        wave: Math.random() * Math.PI * 2,
        waveSpeed: 0.01 + Math.random() * 0.02,
      });
    }
    
    return particles;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear with subtle fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    // Draw gradient mesh background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(30, 0, 60, 0.1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 30, 0.15)');
    gradient.addColorStop(1, 'rgba(60, 0, 30, 0.1)');
    
    // Draw mesh lines
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 0.5;
    const gridSize = 60;
    
    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw animated connection lines between particles
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 1;
    
    particlesRef.current.forEach((p1, i) => {
      particlesRef.current.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const opacity = 0.2 * (1 - distance / 150);
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    // Update and draw particles
    const time = Date.now() * 0.001;
    
    particlesRef.current.forEach((p, i) => {
      // Add wave motion
      p.x += Math.sin(time * p.waveSpeed + p.wave) * 0.3;
      p.y += Math.cos(time * p.waveSpeed + p.wave) * 0.3;
      
      // Add mouse interaction
      if (mouseRef.current.active) {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          p.x -= (dx / distance) * force * 2;
          p.y -= (dy / distance) * force * 2;
        }
      }
      
      // Boundary check
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
      
      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
      ctx.fill();
      
      // Add glow
      const glowGradient = ctx.createRadialGradient(
        p.x, p.y, 0,
        p.x, p.y, p.size * 3
      );
      glowGradient.addColorStop(0, p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba'));
      glowGradient.addColorStop(1, p.color.replace(')', `, 0)`).replace('rgb', 'rgba'));
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
    });

    // Draw interactive cursor effect
    if (mouseRef.current.active) {
      const rippleGradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 80
      );
      rippleGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      rippleGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 80, 0, Math.PI * 2);
      ctx.fillStyle = rippleGradient;
      ctx.fill();
    }

    // eslint-disable-next-line react-hooks/immutability
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Mouse movement handler
  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      if (particlesRef.current.length === 0) {
        particlesRef.current = initParticles(canvas.width, canvas.height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles, handleMouseMove, handleMouseLeave]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24"> {/* Added pt-24 to prevent navbar overlap */}
      {/* ================= INTERACTIVE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0518] to-black" />
        
        {/* Animated glow spots */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT - TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Small heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                <p className={`${montserrat.className} text-sm font-medium text-gray-300 tracking-wide`}>
                  Creative digital business
                </p>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`
                ${montserrat.className}
                text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                mb-6
              `}
            >
              <span className="block text-white">
                Grow business
              </span>
              <span className="block relative mt-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  with great advise
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "280px" }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={`${montserrat.className} text-lg text-gray-300/80 font-light leading-relaxed mb-10 max-w-xl`}
            >
              Empower your business to thrive with expert advice tailored to your goals, 
              ensuring growth, innovation, and long-term success. Unlock your potential 
              with trusted guidance.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  ${montserrat.className}
                  px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600
                  text-white font-semibold rounded-xl
                  transition-all duration-300
                  hover:from-blue-700 hover:to-purple-700
                  shadow-lg shadow-blue-500/20
                `}
              >
                Get started now
              </motion.button>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-purple-400" />
                  ))}
                </div>
                <p className={`${montserrat.className} text-gray-400 text-sm`}>
                  Join 4,600+ members
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg"
            >
              {[
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
                { value: "5.0", label: "Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`${montserrat.className} text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - VISUAL ELEMENTS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-[500px] rounded-3xl overflow-hidden 
                       bg-gradient-to-br from-white/10 to-white/5 
                       backdrop-blur-xl border border-white/20
                       shadow-2xl shadow-blue-500/10"
            >
              <Image
                src="/work.png"
                alt="Digital Business Dashboard"
                fill
                className="object-cover opacity-90"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-8 left-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-4"
              >
                <div className="text-white text-lg font-bold">+45%</div>
                <div className="text-gray-300 text-xs mt-1">Growth Rate</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center"
              >
                <div className="text-white text-2xl">🚀</div>
              </motion.div>
            </motion.div>

            {/* Small floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden 
                       bg-gradient-to-br from-white/5 to-white/10 
                       backdrop-blur-xl border border-white/20
                       shadow-xl shadow-purple-500/10 p-6"
            >
              <div className="text-white/80 text-sm mb-2">Connected Businesses</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                4.6K+
              </div>
              <div className="text-gray-400 text-xs mt-2">Active members growing together</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-6 -right-6 w-36 h-36 rounded-full overflow-hidden 
                       bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                       backdrop-blur-xl border border-white/20
                       shadow-xl shadow-blue-500/10 flex flex-col items-center justify-center"
            >
              <div className="text-white text-3xl mb-2">📈</div>
              <div className="text-white text-sm font-medium">Expert Network</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <div className="text-gray-400 text-xs mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}