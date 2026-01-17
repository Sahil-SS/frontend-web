// "use client";

// import React, { useCallback, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Montserrat } from "next/font/google";
// import { Terminal, Cpu, Cloud, Layout, ShieldCheck, ChevronRight } from "lucide-react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   display: "swap",
// });

// const services = [
//   {
//     id: 1,
//     title: "Product Engineering",
//     desc: "We design and build scalable web platforms.",
//     details: "Full-stack development using Next.js, robust API integrations, and real-time database management systems.",
//     icon: <Terminal className="text-orange-500" size={22} />, 
//     size: "md:col-span-2",
//   },
//   {
//     id: 2,
//     title: "System Architecture",
//     desc: "Fast and resilient microservices.",
//     details: "High-availability clusters, load balancing, and distributed system design for 99.9% uptime.",
//     icon: <Cpu className="text-red-500" size={22} />,
//     size: "md:col-span-1",
//   },
//   {
//     id: 3,
//     title: "Cloud & DevOps",
//     desc: "Pipelines built for real-world scale.",
//     details: "AWS/GCP automation, Kubernetes orchestration, and automated CI/CD security scanning.",
//     icon: <Cloud className="text-orange-400" size={22} />,
//     size: "md:col-span-1",
//   },
//   {
//     id: 4,
//     title: "UI/UX Engineering",
//     desc: "Premium, intuitive interfaces.",
//     details: "Motion design, accessibility-first components, and design system architecture for brand consistency.",
//     icon: <Layout className="text-red-400" size={22} />,
//     size: "md:col-span-2",
//   },
// ];

// const Services = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section id="services" className="relative py-20 bg-transparent overflow-hidden flex justify-center w-full">
//       <div className="relative z-30 w-full max-w-[1400px] px-14">
        
//         {/* SECTION HEADER */}
//         <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-12">
//           <div className="inline-block">
//             <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
//               Services
//             </p>
//             <motion.div 
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
//               className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
//             />
//           </div>

//           <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
//             Built for teams that want to scale without chaos.
//           </h2>
//           <p className={`${montserrat.className} text-zinc-400 text-lg leading-relaxed max-w-2xl font-light`}>
//             We design, build, and optimize systems that are reliable, secure, and ready for real-world traffic.
//           </p>
//         </div>

//         {/* BENTO GRID */}
//         <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2"> 
//           {services.map((service, i) => (
//             <motion.div
//               layout // This creates the reshuffling effect
//               key={service.id}
//               onMouseEnter={() => setHoveredId(service.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 layout: { type: "spring", stiffness: 200, damping: 25 },
//                 delay: i * 0.1 
//               }}
//               whileHover={{ scale: 1.02 }}
//               className={`
//                 ${service.size}
//                 group relative p-7 rounded-[1.5rem] 
//                 bg-zinc-900/40 backdrop-blur-md
//                 border border-white/5
//                 overflow-hidden transition-colors duration-300
//                 ${hoveredId === service.id ? 'border-orange-500/40 bg-zinc-800/60' : ''}
//               `}
//             >
//               {/* Background Glow */}
//               <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'}`} />
              
//               <div className="relative z-10">
//                 <motion.div layout className="mb-4 p-2.5 w-fit rounded-xl bg-white/5 border border-white/10">
//                   {service.icon}
//                 </motion.div>
                
//                 <motion.h3 layout className={`${montserrat.className} text-lg font-bold text-white mb-2`}>
//                   {service.title}
//                 </motion.h3>

//                 <motion.p layout className={`${montserrat.className} text-zinc-400 leading-relaxed font-normal text-sm`}>
//                   {service.desc}
//                 </motion.p>

//                 {/* WINDOW EFFECT (Details revealed on hover) */}
//                 <AnimatePresence>
//                   {hoveredId === service.id && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0, marginTop: 0 }}
//                       animate={{ height: "auto", opacity: 1, marginTop: 16 }}
//                       exit={{ height: 0, opacity: 0, marginTop: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="pt-4 border-t border-white/10">
//                         <p className={`${montserrat.className} text-xs text-orange-400 font-medium mb-2 uppercase tracking-tighter`}>Key Expertise</p>
//                         <p className={`${montserrat.className} text-zinc-300 text-sm leading-relaxed italic`}>
//                           {service.details}
//                         </p>
//                         <div className="mt-4 flex items-center text-orange-500 text-xs font-bold gap-1 group-hover:gap-2 transition-all">
//                           Learn more <ChevronRight size={14} />
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Background Decorative Icon */}
//               <div className="absolute bottom-[-15px] right-[-15px] opacity-5 group-hover:opacity-10 transition-opacity scale-110">
//                 {React.cloneElement(service.icon, { size: 100 })}
//               </div>
//             </motion.div>
//           ))}
          
//           {/* SPECIAL BOTTOM CARD */}
//           <motion.div
//             layout
//             className="md:col-span-3 p-8 rounded-[1.5rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
//           >
//             <div className="flex items-center gap-6">
//               <div className="p-4 rounded-full bg-orange-500/20 text-orange-500">
//                 <ShieldCheck size={30} />
//               </div>
//               <div>
//                 <h3 className={`${montserrat.className} text-xl font-bold text-white`}>AI & Technical Consulting</h3>
//                 <p className={`${montserrat.className} text-zinc-400 text-sm`}>Deep guidance for intelligent automation and microservices.</p>
//               </div>
//             </div>
//             <button className={`${montserrat.className} px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95 whitespace-nowrap`}>
//               Book a call
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// Whenever we hover on any card it should get a little bigger and show more detail and also when we hover on the card all other cards should get resuffeled


// another design for bento boxes :

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Terminal, Cpu, Cloud, Layout, ShieldCheck, ChevronRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  {
    id: 1,
    title: "Product Engineering",
    desc: "We design and build scalable web platforms.",
    details: "Full-stack development using Next.js, robust API integrations, and real-time database management.",
    icon: <Terminal className="text-orange-500" size={20} />, 
  },
  {
    id: 2,
    title: "System Architecture",
    desc: "Fast and resilient microservices.",
    details: "High-availability clusters, load balancing, and distributed system design.",
    icon: <Cpu className="text-red-500" size={20} />,
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    desc: "Pipelines built for real-world scale.",
    details: "AWS/GCP automation, Kubernetes orchestration, and automated CI/CD security.",
    icon: <Cloud className="text-orange-400" size={20} />,
  },
  {
    id: 4,
    title: "UI/UX Engineering",
    desc: "Premium, intuitive interfaces.",
    details: "Motion design, accessibility-first components, and design system architecture.",
    icon: <Layout className="text-red-400" size={20} />,
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="relative py-20 bg-transparent overflow-hidden flex justify-center w-full">
      {/* Container max-width and px changed to match FlowSection on mobile */}
      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              Services
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
            Built for teams that want to scale without chaos.
          </h2>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: 4 BENTO BOXES */}
          <motion.div layout className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                layout
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                transition={{ layout: { type: "spring", stiffness: 200, damping: 25 } }}
                className={`
                  group relative p-6 rounded-[1.2rem] 
                  bg-zinc-900/40 backdrop-blur-md
                  border border-white/5 overflow-hidden
                  ${hoveredId === service.id ? 'border-orange-500/40 bg-zinc-800/60' : ''}
                `}
              >
                <div className="relative z-10">
                  <motion.div layout className="mb-3 p-2 w-fit rounded-lg bg-white/5 border border-white/10">
                    {service.icon}
                  </motion.div>
                  
                  <motion.h3 layout className={`${montserrat.className} text-base font-bold text-white mb-1`}>
                    {service.title}
                  </motion.h3>

                  <motion.p layout className={`${montserrat.className} text-zinc-400 text-xs leading-relaxed`}>
                    {service.desc}
                  </motion.p>

                  <AnimatePresence>
                    {hoveredId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-white/10">
                          <p className={`${montserrat.className} text-[10px] text-zinc-300 italic leading-relaxed`}>
                            {service.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* FULL WIDTH CTA CARD */}
            <motion.div
              layout
              className="md:col-span-2 p-6 rounded-[1.2rem] bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-4 mt-2"
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-orange-500" size={24} />
                <h3 className={`${montserrat.className} text-sm font-bold text-white`}>AI & Technical Consulting</h3>
              </div>
              <button className={`${montserrat.className} px-5 py-2 rounded-full bg-white text-black text-[10px] font-bold hover:bg-orange-500 hover:text-white transition-all`}>
                Book call
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE BOX */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src="/services.png"
                alt="Services Visual"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-3xl rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;