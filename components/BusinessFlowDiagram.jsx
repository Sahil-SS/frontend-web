"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BusinessFlowDiagram = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Main flow nodes data
  const flowNodes = [
    {
      id: "wide-box",
      title: "Wide Boxup Alps",
      position: { x: 50, y: 20 },
      size: { width: 200, height: 80 },
      connections: ["semi-leaf", "mail"],
      color: "from-blue-500 to-purple-600",
      icon: "📦",
      type: "main"
    },
    {
      id: "semi-leaf",
      title: "Semi leaf breeding",
      position: { x: 25, y: 40 },
      size: { width: 150, height: 60 },
      connections: ["zero-form"],
      color: "from-emerald-500 to-teal-600",
      icon: "🍃",
      type: "process"
    },
    {
      id: "zero-form",
      title: "Zero form of single",
      position: { x: 15, y: 60 },
      size: { width: 130, height: 50 },
      connections: ["liquid"],
      color: "from-cyan-500 to-blue-600",
      icon: "🌀",
      type: "process"
    },
    {
      id: "liquid",
      title: "Liquids puricure",
      position: { x: 20, y: 80 },
      size: { width: 140, height: 50 },
      connections: ["gr"],
      color: "from-sky-500 to-indigo-600",
      icon: "💧",
      type: "process"
    },
    {
      id: "mail",
      title: "Mail",
      position: { x: 75, y: 40 },
      size: { width: 120, height: 50 },
      connections: ["fruit"],
      color: "from-orange-500 to-red-600",
      icon: "✉️",
      type: "channel"
    },
    {
      id: "fruit",
      title: "Fruit",
      position: { x: 80, y: 60 },
      size: { width: 110, height: 45 },
      connections: ["open"],
      color: "from-green-500 to-lime-600",
      icon: "🍎",
      type: "output"
    },
    {
      id: "open",
      title: "Open",
      position: { x: 85, y: 80 },
      size: { width: 100, height: 40 },
      connections: ["gr"],
      color: "from-yellow-500 to-amber-600",
      icon: "🚪",
      type: "gateway"
    },
    {
      id: "gr",
      title: "GR",
      position: { x: 50, y: 90 },
      size: { width: 180, height: 70 },
      connections: ["cr", "squire"],
      color: "from-purple-500 to-pink-600",
      icon: "📊",
      type: "hub"
    },
    {
      id: "cr",
      title: "CR",
      position: { x: 75, y: 100 },
      size: { width: 100, height: 40 },
      connections: ["etc"],
      color: "from-rose-500 to-red-600",
      icon: "📈",
      type: "metric"
    },
    {
      id: "etc",
      title: "etc.",
      position: { x: 85, y: 115 },
      size: { width: 90, height: 35 },
      connections: [],
      color: "from-gray-500 to-gray-700",
      icon: "⋯",
      type: "other"
    },
    {
      id: "squire",
      title: "Squire",
      position: { x: 30, y: 100 },
      size: { width: 120, height: 50 },
      connections: ["pegnins"],
      color: "from-amber-500 to-orange-600",
      icon: "🛡️",
      type: "guardian"
    },
    {
      id: "pegnins",
      title: "Pegnins",
      position: { x: 20, y: 115 },
      size: { width: 110, height: 45 },
      connections: ["clients"],
      color: "from-violet-500 to-purple-600",
      icon: "⚙️",
      type: "processor"
    },
    {
      id: "clients",
      title: "Clients",
      position: { x: 50, y: 120 },
      size: { width: 160, height: 65 },
      connections: ["world", "jewelry"],
      color: "from-indigo-500 to-blue-600",
      icon: "👥",
      type: "endpoint"
    },
    {
      id: "world",
      title: "World of small mailing of ice capuchus",
      position: { x: 25, y: 140 },
      size: { width: 200, height: 60 },
      connections: [],
      color: "from-blue-400 to-cyan-600",
      icon: "🌍",
      type: "output"
    },
    {
      id: "jewelry",
      title: "Has shiny on jewelry & foam",
      position: { x: 70, y: 140 },
      size: { width: 180, height: 60 },
      connections: [],
      color: "from-yellow-400 to-orange-600",
      icon: "💎",
      type: "output"
    }
  ];

  // Connection paths between nodes
  const connections = [
    { from: "wide-box", to: "semi-leaf", type: "solid", label: "process" },
    { from: "wide-box", to: "mail", type: "dashed", label: "channel" },
    { from: "semi-leaf", to: "zero-form", type: "solid", label: "refine" },
    { from: "zero-form", to: "liquid", type: "solid", label: "transform" },
    { from: "mail", to: "fruit", type: "dashed", label: "deliver" },
    { from: "fruit", to: "open", type: "dashed", label: "access" },
    { from: "liquid", to: "gr", type: "solid", label: "input" },
    { from: "open", to: "gr", type: "dashed", label: "gate" },
    { from: "gr", to: "cr", type: "solid", label: "measure" },
    { from: "gr", to: "squire", type: "solid", label: "protect" },
    { from: "cr", to: "etc", type: "dotted", label: "expand" },
    { from: "squire", to: "pegnins", type: "solid", label: "process" },
    { from: "pegnins", to: "clients", type: "solid", label: "serve" },
    { from: "clients", to: "world", type: "solid", label: "output" },
    { from: "clients", to: "jewelry", type: "solid", label: "value" }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-black overflow-hidden w-full"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Interactive glow that follows mouse */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Static glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/5 blur-[100px] rounded-full" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-4`}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Flow
              </span>
              <span className="text-white"> Architecture</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`${montserrat.className} text-gray-400 text-lg mt-6 max-w-2xl mx-auto`}
          >
            Interactive visualization of our complete business process flow
          </motion.p>
        </div>

        {/* Flow Diagram Container */}
        <div className="relative w-full h-[800px] md:h-[700px] bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden p-4 md:p-8">
          
          {/* Animated background lines */}
          <div className="absolute inset-0">
            {connections.map((conn, index) => {
              const fromNode = flowNodes.find(n => n.id === conn.from);
              const toNode = flowNodes.find(n => n.id === conn.to);
              
              if (!fromNode || !toNode) return null;
              
              const lineStyle = {
                left: `${fromNode.position.x}%`,
                top: `${fromNode.position.y}%`,
                width: `${Math.abs(toNode.position.x - fromNode.position.x)}%`,
                height: `${Math.abs(toNode.position.y - fromNode.position.y)}%`,
              };
              
              return (
                <motion.div
                  key={`line-${index}`}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="absolute pointer-events-none"
                  style={lineStyle}
                >
                  <svg className="w-full h-full">
                    <motion.line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke={
                        conn.type === "dashed" ? "url(#dashed-gradient)" :
                        conn.type === "dotted" ? "url(#dotted-gradient)" :
                        "url(#solid-gradient)"
                      }
                      strokeWidth="2"
                      strokeDasharray={conn.type === "dashed" ? "5,5" : conn.type === "dotted" ? "2,2" : "none"}
                      fill="none"
                    />
                  </svg>
                </motion.div>
              );
            })}
            
            {/* SVG gradients for lines */}
            <svg className="absolute w-0 h-0">
              <defs>
                <linearGradient id="solid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="dashed-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="dotted-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Flow Nodes */}
          {flowNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: index * 0.05 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                zIndex: 50 
              }}
              className={`absolute rounded-xl border border-white/10 backdrop-blur-md p-4 md:p-6 cursor-pointer group
                ${node.type === "main" ? "shadow-2xl shadow-blue-500/20" : ""}
                ${node.type === "hub" ? "shadow-xl shadow-purple-500/20" : ""}
                ${node.type === "endpoint" ? "shadow-lg shadow-indigo-500/20" : ""}
                transition-all duration-300 will-change-transform
              `}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                width: isMobile ? `${Math.min(node.size.width, 120)}px` : `${node.size.width}px`,
                height: isMobile ? `${Math.min(node.size.height, 60)}px` : `${node.size.height}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Node background gradient */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${node.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Node content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-2xl md:text-3xl mb-2">{node.icon}</div>
                <div className={`${montserrat.className} text-white text-xs md:text-sm font-semibold text-center leading-tight`}>
                  {isMobile ? node.title.split(' ')[0] : node.title}
                </div>
                
                {/* Connection dots */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {node.connections.map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: dotIndex * 0.2 }}
                      className="w-1 h-1 rounded-full bg-white/50"
                    />
                  ))}
                </div>
                
                {/* Hover effect - subtle pulse */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`} />
            </motion.div>
          ))}
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.sin(i) * 50, 0],
                y: [0, Math.cos(i) * 50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { color: "bg-blue-500", label: "Process Nodes", type: "solid" },
            { color: "bg-green-500", label: "Data Flow", type: "dashed" },
            { color: "bg-yellow-500", label: "Optional Path", type: "dotted" },
            { color: "bg-purple-500", label: "Decision Points", type: "hub" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className={`${montserrat.className} text-gray-400 text-sm`}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Control Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`${montserrat.className} text-center text-gray-500 text-sm mt-8`}
        >
          <p>Hover over nodes to see details • Click to explore connections • Scroll to zoom</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessFlowDiagram;