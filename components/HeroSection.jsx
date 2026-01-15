"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import LightPillar from "../components/hero/LightPillar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function HeroSection() {
  const memberImages = [
    "/person1.png",
    "/person2.png",
    "/person3.png",
    "/person4.png",
  ];

  return (
    <section className="relative min-h-screen bg-[transparent] overflow-hidden flex items-center pt-24 pb-20 md:pb-0">
      {/* ================= BACKGROUND ENVIRONMENT ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        /> */}
        <LightPillar
          topColor="#FFA500"
          bottomColor="#E65100"
          intensity={1.5} // Higher intensity looks better in 2D
          pillarWidth={0.5} // 0.4 to 0.7 usually works best
          pillarHeight={1.0} // Controls vertical stretch
          pillarRotation={103}
          className="opacity-70"
        />

        {/* --- BIG FLAME SPHERE IN BACKGROUND ---
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[80vw] h-[80vw] lg:w-[70vw] lg:h-[70vw] xl:w-[60vw] xl:h-[60vw] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,69,0,0.9) 0%, rgba(255,165,0,0.7) 25%, rgba(255,140,0,0.5) 40%, rgba(255,69,0,0.3) 60%, transparent 80%)",
              filter: "blur(100px)",
              transform: "translateY(10%)",
              mixBlendMode: "screen",
              opacity: 0.6
            }}
          />
          
          <div
            className="absolute w-[82vw] h-[82vw] lg:w-[72vw] lg:h-[72vw] xl:w-[62vw] xl:h-[62vw] rounded-full"
            style={{
              background: "transparent",
              border: "3px solid rgba(255,140,0,0.4)",
              filter: "blur(4px)",
              transform: "translateY(10%)",
              mixBlendMode: "screen"
            }}
          />
          
          <div
            className="absolute w-[80.5vw] h-[80.5vw] lg:w-[70.5vw] lg:h-[70.5vw] xl:w-[60.5vw] xl:h-[60.5vw] rounded-full"
            style={{
              background: "transparent",
              border: "2px solid rgba(255,100,0,0.5)",
              filter: "blur(2px)",
              transform: "translateY(10%)",
              mixBlendMode: "screen"
            }}
          />
          
          <div
            className="absolute w-[79vw] h-[79vw] lg:w-[69vw] lg:h-[69vw] xl:w-[59vw] xl:h-[59vw] rounded-full"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,69,0,0.8)",
              filter: "blur(1px)",
              transform: "translateY(10%)",
              mixBlendMode: "screen",
              boxShadow: "inset 0 0 60px rgba(255,140,0,0.3)"
            }}
          />
        </div> */}

        {/* --- LARGE BLENDED FLAME SPHERE --- */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[70vw] h-[70vw] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(255,69,0,0.8) 0%, rgba(255,174,66,0.4) 40%, transparent 70%)",
              filter: "blur(120px)",
              transform: "translateY(-5%)"
            }}
          />
          <div
            className="absolute w-[72vw] h-[72vw] rounded-full"
            style={{
              background: "transparent",
              border: "2.5px solid rgba(255,174,66,0.4)",
              filter: "blur(5px)",
              transform: "translateY(-5%)",
              mixBlendMode: "screen"
            }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-[#050000]/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        /> */}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6"></div>
            <motion.h1
              className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6`}
            >
              <span className="block bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]">
                Grow business
              </span>
              <span className="block relative mt-2">
                <span className="bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]">
                  with great advise
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 h-1 bg-[#ff4500] rounded-full shadow-[0_0_15px_#ff4500]"
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </span>
            </motion.h1>

            <p
              className={`${montserrat.className} text-lg text-gray-200 font-light leading-relaxed mb-10 max-w-xl opacity-90`}
            >
              Empower your business to thrive with expert advice tailored to
              your goals, ensuring growth, innovation, and long-term success.
              Unlock your potential with trusted guidance.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {memberImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-9 h-9 rounded-full border-2 border-black overflow-hidden bg-red-900"
                    >
                      <Image
                        src={src}
                        alt={`Member ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p
                  className={`${montserrat.className} text-gray-300 text-sm font-medium`}
                >
                  Join 4,600+ members
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 69, 0, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`${montserrat.className} w-fit px-8 py-4 bg-[#ff4500] text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-900/20`}
              >
                Get started now
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-red-900/30 pt-8 max-w-lg">
              {[
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
                { value: "5.0", label: "Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#ffae42]">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Vertical spacing adjusted for mobile */}
          <motion.div className="relative mt-20 md:mt-12 lg:mt-0 mb-10 md:mb-0">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden bg-red-950/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-red-500/5"
            >
              <Image
                src="/work.png"
                alt="Digital Business"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-transparent" />
            </motion.div>

            {/* RESPONSIVE 4.6K CONNECTED CARD - Positioned safer for phone screens */}
            <div className="absolute -bottom-8 md:-bottom-5 -left-4 md:-left-5 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border-2 md:border-4 border-[#ff4500]/20 blur-[2px] animate-pulse" />

              <div className="relative w-full h-full rounded-2xl bg-black/90 backdrop-blur-xl border-2 md:border-4 border-[#ff4500]/50 p-4 md:p-6 shadow-[0_0_40px_rgba(255,69,0,0.25)] flex flex-col justify-center text-center lg:text-left">
                <div className="text-gray-300 text-[10px] md:text-[11px] mb-1 font-medium tracking-wide">
                  Connected
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ff4500] drop-shadow-[0_0_12px_rgba(255,69,0,0.6)] whitespace-nowrap">
                  4.6K+
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
