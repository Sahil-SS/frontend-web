"use client";
import React, { useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const FlowSection2 = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 }
    })
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-black overflow-hidden flex justify-center w-full"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
        
        <motion.div
          style={{
            left: dx,
            top: dy,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full z-10"
        />

        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-[1400px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-4">
            System Architecture
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
            How It Works
          </h2>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* Left Column - Services */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {["Worker Process", "Security Layer", "Load Balancer", "Service Registry"].map((service, i) => (
              <motion.div
                key={service}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={nodeVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className="w-48 p-4 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-orange-500/20 backdrop-blur-md shadow-lg hover:shadow-orange-500/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#ff6a00]" />
                  <span className="text-white text-sm font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Main Services */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6">
            {["Mail", "Fund", "Open", "OG2", "etc", "Ctl"].map((service, i) => (
              <motion.div
                key={service}
                custom={i + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={nodeVariants}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="w-32 h-20 rounded-2xl bg-gradient-to-br from-orange-600/30 to-purple-600/20 border-2 border-orange-500/40 backdrop-blur-md flex items-center justify-center shadow-xl hover:shadow-orange-500/40 transition-all"
              >
                <span className="text-white text-lg font-bold">{service}</span>
              </motion.div>
            ))}
          </div>

          {/* Message Queue */}
          <motion.div
            custom={10}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={nodeVariants}
            whileHover={{ scale: 1.05 }}
            className="absolute left-[60%] top-1/2 -translate-y-1/2 w-40 h-32 rounded-2xl bg-gradient-to-br from-purple-900/40 to-orange-900/30 border-2 border-purple-500/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl hover:shadow-purple-500/30 transition-all"
          >
            <span className="text-white text-xl font-bold mb-2">MQ</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="w-2 h-2 rounded-full bg-purple-400"
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Client & Info Boxes */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <motion.div
              custom={11}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={nodeVariants}
              whileHover={{ scale: 1.05, x: -5 }}
              className="w-56 p-6 rounded-2xl bg-gradient-to-br from-orange-900/40 to-zinc-900/60 border-2 border-orange-500/40 backdrop-blur-md shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#00ff00]" />
                <span className="text-white text-lg font-bold">Client</span>
              </div>
            </motion.div>

            <motion.div
              custom={12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={nodeVariants}
              whileHover={{ scale: 1.05, x: -5 }}
              className="w-56 p-4 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-orange-500/20 backdrop-blur-md shadow-lg"
            >
              <p className="text-zinc-400 text-xs italic">
                Word-of-mouth marketing after growth, etc.
              </p>
            </motion.div>

            <motion.div
              custom={13}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={nodeVariants}
              whileHover={{ scale: 1.05, x: -5 }}
              className="w-56 p-4 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-orange-500/20 backdrop-blur-md shadow-lg"
            >
              <p className="text-zinc-400 text-xs italic">
                Less clunky on founder & team
              </p>
            </motion.div>
          </div>

          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
            {/* Left services to center */}
            <motion.path
              d="M 240 200 Q 350 200 400 300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            
            {/* Center to MQ - Service arrow */}
            <motion.path
              d="M 550 300 L 720 300"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              markerEnd="url(#arrowhead)"
            />
            
            {/* MQ to Client - Request arrow */}
            <motion.path
              d="M 860 280 L 1050 280"
              stroke="url(#gradient3)"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              markerEnd="url(#arrowhead2)"
            />

            {/* Client to MQ - Return arrow */}
            <motion.path
              d="M 1050 320 L 860 320"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
              </linearGradient>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
              </marker>
              <marker
                id="arrowhead2"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#ff6a00" />
              </marker>
            </defs>
          </svg>

          {/* Animated Particles along paths */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_#ff6a00]"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "linear",
              }}
              style={{
                offsetPath: "path('M 550 300 L 720 300 L 1050 280')",
              }}
            />
          ))}

          {/* Labels */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="absolute left-[58%] top-[35%] text-orange-400 text-xs font-semibold"
          >
            Service →
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2 }}
            className="absolute left-[58%] top-[65%] text-purple-400 text-xs font-semibold"
          >
            ← Request
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection2;