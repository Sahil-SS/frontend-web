
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   display: "swap",
// });

// const plans = [
//   {
//     name: "Start-up",
//     price: "$599",
//     subtitle: "1 request at a time",
//     highlight: false,
//   },
//   {
//     name: "Mid-level",
//     price: "$799",
//     subtitle: "2 requests at a time",
//     highlight: true,
//   },
//   {
//     name: "Enterprise",
//     price: "$999",
//     subtitle: "3 requests at a time",
//     highlight: false,
//   },
// ];

// const features = [
//   "Single page website designs",
//   "Logo design",
//   "App design",
//   "Slide decks",
//   "Content calendar",
// ];

// const Pricing = () => {
//   return (
//     <section
//       id="pricing"
//       className="relative pt-20 pb-10 bg-transparent overflow-hidden flex justify-center"
//     >
//       <div className="relative z-10 w-full min-w-[80vw] max-w-[1400px] px-14">
        
//         {/* SECTION HEADER - EXACT MATCH TO SERVICES SIZE AND POSITION */}
//         <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
//           <div className="inline-block">
//             <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
//               Pricing
//             </p>
//             <motion.div 
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
//               className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
//             />
//           </div>

//           {/* FONT SIZE EXACTLY MATCHED TO SERVICES (text-2xl md:text-3xl lg:text-4xl) */}
//           <h2 className={`
//             ${montserrat.className} 
//             text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-8 leading-[1.15]
//             bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
//             bg-clip-text text-transparent
//             drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
//           `}>
//             Affordable pricing plan
//           </h2>
//         </div>

//         {/* PRICING CARDS GRID */}
//         <div className="grid md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.7 }}
//               whileHover={{ y: -10 }}
//               className={`
//                 relative rounded-3xl 
//                 p-7
//                 backdrop-blur-xl border
//                 shadow-2xl transition-all duration-300
//                 ${
//                   plan.highlight
//                     ? "bg-white/10 border-orange-400/40 scale-[1.04] z-10"
//                     : "bg-white/5 border-white/10"
//                 }
//               `}
//             >
//               {plan.highlight && (
//                 <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent blur-xl -z-10" />
//               )}

//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h3 className={`${montserrat.className} text-lg font-bold text-white`}>
//                     {plan.name}
//                   </h3>
//                   <p className={`${montserrat.className} text-xs text-gray-400 mt-1 font-light`}>{plan.subtitle}</p>
//                 </div>

//                 <div className="text-right">
//                   <p className={`${montserrat.className} text-3xl font-extrabold text-white`}>{plan.price}</p>
//                   <p className={`${montserrat.className} text-xs text-gray-400 font-light`}>Per month</p>
//                 </div>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`
//                   ${montserrat.className}
//                   w-full py-2.5 rounded-full text-sm font-bold mb-8 transition-shadow
//                   ${
//                     plan.highlight
//                       ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]"
//                       : "bg-black text-white border border-white/20"
//                   }
//                 `}
//               >
//                 Purchase
//               </motion.button>

//               <div>
//                 <p className={`${montserrat.className} text-sm text-white font-semibold mb-4`}>
//                   What’s included?
//                 </p>

//                 <ul className={`${montserrat.className} space-y-2.5 text-gray-300 text-[13px] font-medium`}>
//                   {features.map((feature) => (
//                     <li key={feature} className="flex items-center gap-3">
//                       <span className="text-orange-400">✓</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  FiCheck,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFire,
  FaCrown,
  FaBolt,
  FaShieldAlt,
  FaRocket,
  FaGem,
} from "react-icons/fa";

/* ✅ SHADCN CAROUSEL IMPORTS */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plans = [
  {
    name: "Spark",
    icon: <FaFire className="text-orange-500" />,
    price: "$599",
    subtitle: "Ignite your journey",
    description: "Perfect for startups ready to make their first mark",
    highlight: false,
    popular: false,
    features: ["Single page website design", "Basic logo concept", "Social media graphics pack", "3 revisions included", "72-hour delivery", "Email support"],
    buttonText: "Start Igniting",
  },
  {
    name: "Blaze",
    icon: <FaBolt className="text-yellow-400" />,
    price: "$799",
    subtitle: "Fuel rapid growth",
    description: "Ideal for growing businesses needing consistent output",
    highlight: true,
    popular: true,
    features: ["2 concurrent requests", "Multi-page website design", "Full branding package", "Unlimited revisions", "48-hour delivery", "Priority support", "Content calendar setup", "Slide deck templates"],
    buttonText: "Fuel Growth",
  },
  {
    name: "Inferno",
    icon: <FaCrown className="text-red-500" />,
    price: "$999",
    subtitle: "Dominate your market",
    description: "Complete solutions for established enterprises",
    highlight: false,
    popular: false,
    features: ["3 concurrent requests", "Complete app UI/UX design", "Full brand system", "Dedicated project manager", "24-hour delivery", "VIP phone support", "Analytics dashboard", "Team training sessions"],
    buttonText: "Dominate Now",
  },
  {
    name: "Nova",
    icon: <FaRocket className="text-blue-400" />,
    price: "$1,299",
    subtitle: "Reach for the stars",
    description: "Advanced automation and custom motion graphics",
    highlight: false,
    popular: false,
    features: ["4 concurrent requests", "Custom Motion Graphics", "Automated Workflow Setup", "E-commerce Optimization", "Bi-weekly Strategy Calls", "Quarterly Brand Audit"],
    buttonText: "Launch Now",
  },
  {
    name: "Aura",
    icon: <FaGem className="text-purple-500" />,
    price: "$1,599",
    subtitle: "Unmatched Prestige",
    description: "The ultimate tier for global luxury brands",
    highlight: false,
    popular: false,
    features: ["Unlimited requests", "On-site team workshop", "Global Brand Guidelines", "24/7 Concierge Support", "White-glove Service", "Lifetime Asset Storage"],
    buttonText: "Join the Elite",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative pt-32 pb-32 overflow-hidden">
      {/* BACKGROUND DECO */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
            style={{ left: `${20 + i * 10}%`, top: `${30 + i * 5}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              Pricing
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
            Affordable pricing plan
          </h2>
        </div>

        {/* ✅ CAROUSEL WITH OVERFLOW FIXES */}
        <div className="relative w-full">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full group overflow-visible"
          >
            <CarouselContent className="-ml-4 overflow-visible py-12 px-2"> 
              {plans.map((plan, index) => (
                <CarouselItem
                  key={plan.name}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 overflow-visible"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -15 }}
                    className="relative h-full"
                  >
                    {/* POPULAR BADGE - Higher Z-index and positioned clearly above */}
                    {plan.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-max">
                        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                          <FiStar className="text-white fill-white" />
                          <span className={`${montserrat.className} text-[10px] font-black text-white tracking-widest`}>
                            MOST POPULAR
                          </span>
                        </div>
                      </div>
                    )}

                    {/* GLOW - Now visible due to overflow-visible */}
                    {plan.highlight && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2rem] blur-xl opacity-30" />
                    )}

                    {/* CARD BODY */}
                    <div className={`relative h-full rounded-[2rem] p-8 border backdrop-blur-xl flex flex-col transition-all duration-300 ${
                      plan.highlight 
                        ? "bg-zinc-900/90 border-orange-500/50 shadow-2xl" 
                        : "bg-black/50 border-white/10"
                    }`}>
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            {plan.icon}
                          </div>
                          <div>
                            <h3 className={`${montserrat.className} text-xl font-bold text-white`}>
                              {plan.name}
                            </h3>
                            <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                              {plan.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                      </div>

                      <div className="mb-8">
                        <div className="flex items-end gap-1">
                          <span className={`${montserrat.className} text-5xl font-black text-white`}>{plan.price}</span>
                          <span className="text-gray-500 mb-2 font-medium">/mo</span>
                        </div>
                      </div>

                      <div className="flex-1 mb-8">
                        <div className="flex items-center gap-2 mb-4 text-white/90 text-sm font-bold uppercase tracking-tighter">
                          <FaShieldAlt className="text-orange-500" />
                          Key Features
                        </div>
                        <ul className="space-y-3">
                          {plan.features.map((f, i) => (
                            <li key={i} className="flex gap-3 text-gray-400 text-sm">
                              <FiCheck className="text-orange-500 mt-1 flex-shrink-0" />
                              <span className="leading-tight">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                        plan.highlight 
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20" 
                          : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                      }`}>
                        {plan.buttonText}
                        <FiChevronRight />
                      </button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* THEMED CONTROLS */}
            <div className="hidden md:block">
              <CarouselPrevious className="bg-orange-600 hover:bg-orange-500 border-none text-white h-12 w-12 -left-6 lg:-left-12 transition-opacity opacity-0 group-hover:opacity-100 shadow-xl shadow-orange-900/20" />
              <CarouselNext className="bg-orange-600 hover:bg-orange-500 border-none text-white h-12 w-12 -right-6 lg:-right-12 transition-opacity opacity-0 group-hover:opacity-100 shadow-xl shadow-orange-900/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Pricing;