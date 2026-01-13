"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const FlowDiagram = () => {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  // Define exact flow structure from your image
  const flowNodes = [
    // Top layer - Wide Boxup Alps
    {
      id: "wide-boxup-alps",
      title: "Wide Boxup Alps",
      type: "main-entry",
      x: 50,
      y: 10,
      width: 200,
      height: 70,
      color: "from-orange-500 to-red-600",
      connections: ["semi-leaf", "mail", "fruit"],
      description: "Main processing hub"
    },
    
    // Left vertical flow
    {
      id: "semi-leaf",
      title: "Semi leaf breeding",
      type: "process",
      x: 25,
      y: 30,
      width: 160,
      height: 55,
      color: "from-orange-400 to-red-500",
      connections: ["zero-form"],
      description: "Initial processing stage"
    },
    {
      id: "zero-form",
      title: "Zero form of single",
      type: "process",
      x: 20,
      y: 50,
      width: 150,
      height: 50,
      color: "from-orange-400 to-amber-600",
      connections: ["liquids"],
      description: "Single form processing"
    },
    {
      id: "liquids",
      title: "Liquids puricure",
      type: "process",
      x: 25,
      y: 70,
      width: 155,
      height: 50,
      color: "from-amber-500 to-orange-600",
      connections: ["gr"],
      description: "Liquid purification"
    },
    
    // Center vertical flow
    {
      id: "mail",
      title: "Mail",
      type: "channel",
      x: 50,
      y: 30,
      width: 100,
      height: 45,
      color: "from-red-400 to-orange-500",
      connections: ["open"],
      description: "Communication channel"
    },
    {
      id: "fruit",
      title: "Fruit",
      type: "output",
      x: 65,
      y: 30,
      width: 95,
      height: 45,
      color: "from-red-500 to-pink-600",
      connections: ["open"],
      description: "Result output"
    },
    {
      id: "open",
      title: "Open",
      type: "gateway",
      x: 57.5,
      y: 50,
      width: 110,
      height: 48,
      color: "from-orange-500 to-yellow-500",
      connections: ["gr"],
      description: "Access gateway"
    },
    
    // Main hub
    {
      id: "gr",
      title: "GR",
      type: "hub",
      x: 50,
      y: 75,
      width: 120,
      height: 55,
      color: "from-red-600 to-orange-700",
      connections: ["cr", "squire"],
      description: "Main processing hub"
    },
    
    // Right branch
    {
      id: "cr",
      title: "CR",
      type: "metric",
      x: 65,
      y: 90,
      width: 85,
      height: 40,
      color: "from-red-500 to-orange-600",
      connections: ["etc"],
      description: "Critical metrics"
    },
    {
      id: "etc",
      title: "etc.",
      type: "extension",
      x: 70,
      y: 105,
      width: 75,
      height: 38,
      color: "from-gray-600 to-gray-800",
      connections: [],
      description: "Additional processes"
    },
    
    // Left branch
    {
      id: "squire",
      title: "Squire",
      type: "process",
      x: 35,
      y: 90,
      width: 100,
      height: 42,
      color: "from-orange-600 to-amber-700",
      connections: ["pegnins"],
      description: "Processing unit"
    },
    {
      id: "pegnins",
      title: "Pegnins",
      type: "process",
      x: 30,
      y: 105,
      width: 95,
      height: 40,
      color: "from-amber-600 to-yellow-700",
      connections: ["clients"],
      description: "Final processing"
    },
    
    // Bottom layer
    {
      id: "clients",
      title: "Clients",
      type: "endpoint",
      x: 50,
      y: 120,
      width: 130,
      height: 52,
      color: "from-red-700 to-orange-800",
      connections: ["world", "jewelry"],
      description: "Client interface"
    },
    
    // Final outputs
    {
      id: "world",
      title: "World of small mailing of ice capuchus",
      type: "output",
      x: 30,
      y: 140,
      width: 180,
      height: 60,
      color: "from-orange-600 to-red-700",
      connections: [],
      description: "Global distribution"
    },
    {
      id: "jewelry",
      title: "Has shiny on jewelry & foam",
      type: "output",
      x: 70,
      y: 140,
      width: 170,
      height: 60,
      color: "from-red-600 to-pink-700",
      connections: [],
      description: "Premium output delivery"
    }
  ];

  // Connection paths with accurate mapping
  const connections = [
    // From Wide Boxup Alps
    { from: "wide-boxup-alps", to: "semi-leaf", label: "process flow" },
    { from: "wide-boxup-alps", to: "mail", label: "communication" },
    { from: "wide-boxup-alps", to: "fruit", label: "output" },
    
    // Left chain
    { from: "semi-leaf", to: "zero-form", label: "transform" },
    { from: "zero-form", to: "liquids", label: "purify" },
    { from: "liquids", to: "gr", label: "input" },
    
    // Center chain
    { from: "mail", to: "open", label: "deliver" },
    { from: "fruit", to: "open", label: "access" },
    { from: "open", to: "gr", label: "gate" },
    
    // From GR hub
    { from: "gr", to: "cr", label: "measure" },
    { from: "gr", to: "squire", label: "process" },
    
    // Right extensions
    { from: "cr", to: "etc", label: "expand" },
    
    // Left extensions
    { from: "squire", to: "pegnins", label: "refine" },
    { from: "pegnins", to: "clients", label: "deliver" },
    
    // Final outputs
    { from: "clients", to: "world", label: "distribute" },
    { from: "clients", to: "jewelry", label: "deliver" }
  ];

  // Get connection line coordinates
  const getConnectionPoints = (fromId, toId) => {
    const fromNode = flowNodes.find(n => n.id === fromId);
    const toNode = flowNodes.find(n => n.id === toId);
    
    if (!fromNode || !toNode) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    
    return {
      x1: fromNode.x,
      y1: fromNode.y + fromNode.height / 2,
      x2: toNode.x,
      y2: toNode.y - toNode.height / 2
    };
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-[#1a0400] to-black" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-700/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className={`${montserrat.className} uppercase tracking-[0.3em] text-sm font-medium text-orange-500`}>
              Process Flow
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-red-500 mt-2"
            />
          </motion.div>
          
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            <span className="bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent">
              Business Architecture
            </span>
          </h2>
          
          <p className={`${montserrat.className} text-gray-400 text-lg max-w-2xl mx-auto`}>
            Complete visualization of our operational workflow and client delivery process
          </p>
        </div>

        {/* Flow Diagram Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[800px] bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 p-4 md:p-8 overflow-hidden"
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ff4500" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff2949" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="dashed-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffae42" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {connections.map((conn, index) => {
              const points = getConnectionPoints(conn.from, conn.to);
              const isMain = conn.from === "wide-boxup-alps";
              
              return (
                <motion.line
                  key={index}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  x1={`${points.x1}%`}
                  y1={`${points.y1}%`}
                  x2={`${points.x2}%`}
                  y2={`${points.y2}%`}
                  stroke={isMain ? "url(#line-gradient)" : "url(#dashed-gradient)"}
                  strokeWidth="2"
                  strokeDasharray={isMain ? "none" : "5,5"}
                  fill="none"
                  className="drop-shadow-[0_0_8px_rgba(255,69,0,0.3)]"
                />
              );
            })}
          </svg>

          {/* Flow Nodes */}
          {flowNodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: flowNodes.indexOf(node) * 0.05
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 50,
                boxShadow: "0 20px 40px rgba(255, 69, 0, 0.2)"
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`absolute rounded-xl border backdrop-blur-md p-4 cursor-pointer transition-all duration-300
                ${activeNode === node.id ? 'border-orange-500/50' : 'border-white/10'}
                ${node.type === 'main-entry' ? 'shadow-2xl shadow-orange-500/20' : ''}
                ${node.type === 'hub' ? 'shadow-xl shadow-red-500/20' : ''}
              `}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.width}px`,
                height: `${node.height}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Node background */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${node.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Node content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className={`${montserrat.className} text-white font-bold text-sm md:text-base mb-1 leading-tight`}>
                  {node.title}
                </div>
                
                {/* Active state indicator */}
                {activeNode === node.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_#ff6a00]"
                  />
                )}
                
                {/* Connection dots */}
                {node.connections.length > 0 && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {node.connections.map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                        className="w-1 h-1 rounded-full bg-orange-400"
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Hover glow */}
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${node.color} opacity-0 hover:opacity-20 blur-md transition-opacity duration-300`} />
            </motion.div>
          ))}

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: Math.sin(i) * 20,
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 10) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { color: "bg-gradient-to-r from-orange-500 to-red-600", label: "Main Process Flow" },
            { color: "bg-gradient-to-r from-orange-400 to-amber-600", label: "Processing Stages" },
            { color: "bg-gradient-to-r from-red-500 to-pink-600", label: "Output Channels" },
            { color: "bg-gradient-to-r from-red-600 to-orange-800", label: "Endpoints" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className={`${montserrat.className} text-gray-300 text-sm`}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Info Panel */}
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <h3 className={`${montserrat.className} text-white text-xl font-semibold`}>
                {flowNodes.find(n => n.id === activeNode)?.title}
              </h3>
            </div>
            <p className={`${montserrat.className} text-gray-400`}>
              {flowNodes.find(n => n.id === activeNode)?.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FlowDiagram;