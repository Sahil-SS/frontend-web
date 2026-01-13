"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Menu, X, ArrowRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Comparison", href: "/#comparison" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Optimized toggle to prevent re-renders
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{ transform: "translateZ(0)" }} // GPU Acceleration
          className="
            pointer-events-auto
            relative flex items-center justify-between
            px-10 py-3 rounded-full
            min-w-[80vw] max-w-[1200px]
            bg-black/40 backdrop-blur-md
            border border-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            will-change-transform
          "
        >
          {/* Tubelight effect */}
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          
          <Link
            href="/"
            className={`${montserrat.className} flex items-baseline gap-1 font-bold tracking-wider text-white hover:opacity-80 transition-opacity`}
          >
            <span className="text-xl">MT7</span>
            <span className="text-sm text-red-500">.in</span>
          </Link>

          <div className={`${montserrat.className} flex gap-10 text-sm font-medium`}>
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href.replace("#", ""));
              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative py-1 group transition-colors duration-150 ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {label}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-200 ease-out ${active ? "w-full shadow-[0_0_8px_#ef4444]" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>

          <Link
            href="/register"
            className={`${montserrat.className} px-6 py-2 rounded-full text-sm font-semibold text-white bg-red-600 hover:bg-red-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)]`}
          >
            Contact
          </Link>
        </motion.div>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="fixed top-4 left-4 right-4 z-50 md:hidden h-14">
        <div className="flex items-center justify-between px-5 h-full rounded-2xl bg-black/60 backdrop-blur-lg border border-white/10 shadow-2xl overflow-hidden">
          <Link href="/" className={`${montserrat.className} font-bold text-white text-lg`}>
            MT7<span className="text-red-500">.in</span>
          </Link>
          <button onClick={toggleMenu} className="p-2 -mr-2 text-white active:scale-90 transition-transform">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }} // Snappy spring
              style={{ transform: "translateZ(0)" }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-[280px] bg-zinc-950 border-l border-white/10 p-8 flex flex-col will-change-transform shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex justify-between items-center mb-10">
                <span className={`${montserrat.className} text-xl font-bold text-white`}>MT7<span className="text-red-500">.in</span></span>
                <button onClick={closeMenu} className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }} // Faster stagger
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-4 border-b border-white/5"
                    >
                      <span className={`${montserrat.className} text-base text-gray-300 group-active:text-white transition-colors`}>
                        {label}
                      </span>
                      <ArrowRight size={18} className="text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <Link 
                  href="/register" 
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-red-600 text-white font-bold active:scale-[0.98] transition-transform shadow-lg shadow-red-900/20"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}