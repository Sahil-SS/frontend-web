"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  ArrowUp,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Quick: [
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "/register" },
    ],
    Company: [
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Support", href: "/support" },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <>
      {/* Fade In Transition */}
      <div className="relative h-8 md:h-12 -mt-8 md:-mt-12 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      <footer className="relative bg-black pt-8 md:pt-12 pb-6 md:pb-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle moving gradient */}
          <motion.div
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ x: ["-50%", "50%", "-50%"], y: ["-50%", "50%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl opacity-20"
          />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0.1 }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-[1px] h-[1px] bg-red-500 rounded-full"
                style={{
                  left: `${10 + (i * 10)}%`,
                  top: `${20 + (i * 5)}%`,
                }}
              />
            ))}
          </div>

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 mb-8 md:mb-10">
            {/* Brand & Newsletter - Takes 2 cols on md, 3 on lg */}
            <div className="md:col-span-2 lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <Link 
                    href="/" 
                    className={`${montserrat.className} inline-flex items-baseline gap-1 text-2xl md:text-3xl font-bold text-white group`}
                  >
                    <span className="relative">
                      MT7
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-[2px] bg-red-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <span className="text-red-500">.in</span>
                  </Link>
                  
                  {/* Social Links - Top on mobile, inline on desktop */}
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-black/50 border border-white/10 hover:border-red-500/50 hover:bg-white/5 transition-all duration-200 group"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-2xl">
                  Building cutting-edge digital solutions that drive business growth. 
                  Let's create something exceptional together.
                </p>
                
                {/* Newsletter Subscription */}
                <div>
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Mail size={16} className="text-red-500" />
                    Stay updated with our newsletter
                  </h3>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-xl">
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all backdrop-blur-sm"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/30 text-sm whitespace-nowrap flex items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Links Columns - Stack on mobile, 3 cols on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4 md:col-span-3 lg:col-span-2">
              {Object.entries(footerLinks).map(([category, links], colIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: colIndex * 0.1 }}
                >
                  <h3 className={`${montserrat.className} text-white font-semibold text-xs uppercase tracking-wider mb-3 md:mb-4`}>
                    {category}
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {links.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200"
                        >
                          <span className="relative overflow-hidden">
                            {link.label}
                            <motion.span 
                              className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-500"
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </span>
                          <motion.span
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          >
                            <ArrowRight size={12} className="text-red-500" />
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-red-500/20 via-white/10 to-transparent my-6 md:my-8 origin-left"
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "contact@mt7.in" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <item.icon size={12} className="text-red-500" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-xs">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-500 text-center md:text-left"
              >
                © {new Date().getFullYear()} MT7.in. All rights reserved.
              </motion.p>
              <div className="hidden sm:flex items-center gap-3">
                {["Privacy", "Terms", "Cookies"].map((item, index) => (
                  <React.Fragment key={item}>
                    {index > 0 && <span className="text-gray-700">•</span>}
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-500 hover:text-gray-300 transition-colors group relative"
                    >
                      {item}
                      <motion.span 
                        className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-red-500/50"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-only legal links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 sm:hidden"
          >
            <div className="flex justify-center items-center gap-4 text-xs">
              {["Privacy", "Terms", "Cookies"].map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 && <span className="text-gray-700">•</span>}
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-gray-300 transition-colors group flex items-center gap-1"
                  >
                    {item}
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}