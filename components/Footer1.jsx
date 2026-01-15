"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Real WhatsApp SVG Path Component
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
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
    { isWhatsApp: true, href: "https://wa.me/yournumber", label: "WhatsApp" },
  ];

  return (
    <>
      <div className="relative h-12 -mt-12 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent" />
      </div>

      <footer className="relative bg-black pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <Link 
                  href="/" 
                  className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white group`}
                >
                  <span className="relative">
                    MT7<span className="text-red-500">.in</span>
                    <motion.span className="absolute -bottom-1 left-0 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>

                {/* Social Icons Container */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      {social.isWhatsApp ? (
                        <WhatsAppIcon className="text-gray-400 hover:text-white transition-colors" />
                      ) : (
                        <social.icon className="text-gray-400 hover:text-white transition-colors" size={18} />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                Building cutting-edge digital solutions that drive business growth. 
                We specialize in scaling platforms and crafting intuitive user experiences.
              </p>

              <div className="flex flex-col gap-4">
                <h3 className="text-white font-semibold flex items-center gap-2 text-base">
                  <Mail size={18} className="text-red-500" />
                  Stay updated with our newsletter
                </h3>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className={`${montserrat.className} text-white font-bold text-xs uppercase tracking-widest mb-6`}>
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                        >
                          {link.label}
                          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                <Phone size={14} className="text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                <Mail size={14} className="text-red-500" />
                <span>contact@mt7.in</span>
              </div>
            </div>

            <div className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} MT7.in. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}