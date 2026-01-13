"use client";

import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Terminal, Cpu, Cloud, Layout, ShieldCheck } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  {
    id: "engineering",
    title: "Product Engineering",
    desc: "We design and build scalable, production-grade platforms with clean architecture.",
    icon: Terminal,
    visual: "/services/engineering.png",
  },
  {
    id: "architecture",
    title: "System Architecture",
    desc: "Fast, secure, and resilient microservices built for scale.",
    icon: Cpu,
    visual: "/services/architecture.png",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines and deployments built for real-world traffic.",
    icon: Cloud,
    visual: "/services/cloud.png",
  },
  {
    id: "uiux",
    title: "UI/UX Engineering",
    desc: "Premium interfaces that drive clarity and conversion.",
    icon: Layout,
    visual: "/services/uiux.png",
  },
];

const Services2 = () => {
  const [active, setActive] = useState(services[0]);

  // Cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dx = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const dy = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <section
      id="services-2"
      onMouseMove={handleMouseMove}
      className="relative py-36 bg-black overflow-hidden flex justify-center w-full"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ left: dx, top: dy, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-[520px] h-[520px] bg-orange-600/10 blur-[140px] rounded-full"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-14">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
            Services
          </p>
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold mt-8 mb-6 leading-tight bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent`}>
            Built for teams that want to scale without chaos.
          </h2>
          <p className={`${montserrat.className} text-zinc-400 text-lg max-w-2xl`}>
            We don’t just build features — we engineer systems that stay reliable under pressure.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* LEFT — CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = active.id === s.id;

              return (
                <motion.div
                  key={s.id}
                  onMouseEnter={() => setActive(s)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`
                    relative p-8 rounded-[2rem] cursor-pointer
                    border backdrop-blur-xl transition-all
                    ${isActive
                      ? "bg-zinc-900/70 border-orange-500/30 shadow-[0_0_40px_rgba(255,120,0,0.15)]"
                      : "bg-zinc-900/40 border-white/5 hover:border-white/15"}
                  `}
                >
                  <div className="mb-5 p-3 w-fit rounded-2xl bg-white/5 border border-white/10">
                    <Icon size={22} className="text-orange-500" />
                  </div>

                  <h3 className={`${montserrat.className} text-xl font-bold text-white mb-3`}>
                    {s.title}
                  </h3>

                  <p className={`${montserrat.className} text-zinc-400 text-sm leading-relaxed`}>
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — VISUAL PANEL */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur-xl min-h-[420px]"
          >
            <Image
              src={active.visual}
              alt={active.title}
              fill
              className="object-cover grayscale opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className={`${montserrat.className} text-sm text-white/80`}>
                {active.title} — visual overview
              </p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20">
          <motion.div
            whileHover={{ scale: 1.015 }}
            className="p-8 rounded-[2rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-orange-500/20 text-orange-500">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className={`${montserrat.className} text-xl font-bold text-white`}>
                  AI & Technical Consulting
                </h3>
                <p className={`${montserrat.className} text-zinc-400 text-sm`}>
                  Strategic guidance for complex systems and automation.
                </p>
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

export default Services2;
