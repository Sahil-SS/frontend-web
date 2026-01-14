"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Terminal, Cpu, Cloud, Layout, Sparkles, ShieldCheck } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  {
    title: "Product Engineering",
    desc: "We design and build scalable, production-grade web platforms with clean architecture.",
    icon: <Terminal className="text-orange-500" size={24} />,
    size: "md:col-span-2",
  },
  {
    title: "System Architecture",
    desc: "Fast, secure, and resilient microservices architecture.",
    icon: <Cpu className="text-red-500" size={24} />,
    size: "md:col-span-1",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines and deployments built for real-world scale.",
    icon: <Cloud className="text-orange-400" size={24} />,
    size: "md:col-span-1",
  },
  {
    title: "UI/UX Engineering",
    desc: "Interfaces that feel premium, intuitive, and conversion-focused.",
    icon: <Layout className="text-red-400" size={24} />,
    size: "md:col-span-2",
  },
];

const Services = () => {
  // Cursor tracking for interactive glow (Hardware Accelerated)
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

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative pt-10 pb-10 bg-transparent overflow-hidden flex justify-center w-full"
    >
      {/* ================= OPTIMIZED INTERACTIVE BG ================= */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
        
        <motion.div 
          style={{ left: dx, top: dy, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full z-10 will-change-transform" 
        />
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ opacity: [0, 0.3, 0], y: [-20, -120], x: Math.sin(i) * 15 }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{ left: `${(i * 25) % 100}%`, bottom: "5%" }} 
          />
        ))}
      </div> */}

      <div className="relative z-30 w-full min-w-[80vw] max-w-[1400px] px-14">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              Services
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`
            ${montserrat.className}
            text-4xl md:text-5xl font-bold mt-8 mb-6 leading-tight
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
          `}>
            Built for teams that want to scale without chaos.
          </h2>

          <p className={`${montserrat.className} text-zinc-400 text-lg leading-relaxed font-light max-w-2xl`}>
            We design, build, and optimize systems that are reliable, secure, and ready for real-world traffic.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(255, 69, 0, 0.3)" }}
              className={`
                ${service.size}
                group relative p-8 rounded-[2rem]
                bg-zinc-900/40 backdrop-blur-md
                border border-white/5
                overflow-hidden transition-all duration-300
              `}
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-3`}>
                  {service.title}
                </h3>

                <p className={`${montserrat.className} text-zinc-400 leading-relaxed font-normal text-sm`}>
                  {service.desc}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-[-10px] right-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(service.icon, { size: 80 })}
              </div>
            </motion.div>
          ))}
          
          {/* SPECIAL BOTTOM CARD (Consulting & AI) */}
          <motion.div
            className="md:col-span-3 p-8 rounded-[2rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-orange-500/20 text-orange-500">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className={`${montserrat.className} text-xl font-bold text-white`}>AI & Technical Consulting</h3>
                <p className={`${montserrat.className} text-zinc-400 text-sm`}>Deep guidance for intelligent automation and microservices.</p>
              </div>
            </div>
            <button className={`${montserrat.className} px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95`}>
              Book a call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;



// Whenever we hover on any card it should get a little bigger and show more detail and also when we hover on the card all other cards should get resuffeled