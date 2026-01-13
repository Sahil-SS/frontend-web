"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { 
  Check,
  X,
  Zap,
  Shield,
  Users,
  Clock,
  Award,
  TrendingUp,
  Sparkles,
  Globe,
  Cpu,
  Lock,
  RefreshCw,
  Target,
  Rocket,
  BarChart,
  Heart,
  ThumbsUp,
  Star
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const COMPETITORS = [
  {
    id: "competitor-a",
    name: "Traditional Agencies",
    description: "Old-school digital agencies with limited tech stack",
    color: "from-gray-500 to-gray-700",
    rating: 3.2,
    issues: ["Slow turnaround", "Outdated tech", "Limited scalability"]
  },
  {
    id: "competitor-b", 
    name: "Freelancers",
    description: "Individual developers and designers",
    color: "from-blue-500 to-blue-700",
    rating: 3.8,
    issues: ["Single point of failure", "Limited expertise", "Unreliable"]
  },
  {
    id: "competitor-c",
    name: "Template Solutions",
    description: "One-size-fits-all template providers",
    color: "from-green-500 to-green-700",
    rating: 2.9,
    issues: ["No customization", "Poor performance", "Generic solutions"]
  }
];

const COMPARISON_FEATURES = [
  {
    category: "Development Excellence",
    icon: Cpu,
    features: [
      {
        name: "Modern Tech Stack",
        description: "Latest frameworks and technologies",
        mt7: { value: "React, Next.js, Node.js", strength: 5 },
        competitors: { 
          "Traditional Agencies": 2,
          "Freelancers": 3, 
          "Template Solutions": 1
        }
      },
      {
        name: "Performance Optimization",
        description: "Lightning fast load times and optimization",
        mt7: { value: "98+ Google Score", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 2, 
          "Template Solutions": 1
        }
      },
      {
        name: "Scalability",
        description: "Handles traffic spikes and growth seamlessly",
        mt7: { value: "Enterprise-grade", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 1, 
          "Template Solutions": 1
        }
      }
    ]
  },
  {
    category: "Security & Reliability",
    icon: Shield,
    features: [
      {
        name: "Security Standards",
        description: "Enterprise-level security protocols",
        mt7: { value: "Military Grade", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 2, 
          "Template Solutions": 2
        }
      },
      {
        name: "Uptime Guarantee",
        description: "Service availability and reliability",
        mt7: { value: "99.99% SLA", strength: 5 },
        competitors: { 
          "Traditional Agencies": 4,
          "Freelancers": 2, 
          "Template Solutions": 3
        }
      },
      {
        name: "Data Protection",
        description: "GDPR compliance and data security",
        mt7: { value: "Full Compliance", strength: 5 },
        competitors: { 
          "Traditional Agencies": 4,
          "Freelancers": 1, 
          "Template Solutions": 2
        }
      }
    ]
  },
  {
    category: "Support & Service",
    icon: Users,
    features: [
      {
        name: "Support Response Time",
        description: "Average time to respond to queries",
        mt7: { value: "< 15 minutes", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 2, 
          "Template Solutions": 1
        }
      },
      {
        name: "Dedicated Team",
        description: "Personalized support and account management",
        mt7: { value: "24/7 Dedicated", strength: 5 },
        competitors: { 
          "Traditional Agencies": 4,
          "Freelancers": 1, 
          "Template Solutions": 1
        }
      },
      {
        name: "Update Frequency",
        description: "Regular updates and maintenance",
        mt7: { value: "Weekly Updates", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 2, 
          "Template Solutions": 1
        }
      }
    ]
  },
  {
    category: "Business Value",
    icon: TrendingUp,
    features: [
      {
        name: "ROI Focus",
        description: "Focus on business outcomes and ROI",
        mt7: { value: "Data-Driven ROI", strength: 5 },
        competitors: { 
          "Traditional Agencies": 3,
          "Freelancers": 2, 
          "Template Solutions": 1
        }
      },
      {
        name: "Customization",
        description: "Tailored solutions for unique needs",
        mt7: { value: "100% Custom", strength: 5 },
        competitors: { 
          "Traditional Agencies": 4,
          "Freelancers": 3, 
          "Template Solutions": 1
        }
      },
      {
        name: "Innovation",
        description: "Adoption of latest trends and technologies",
        mt7: { value: "Cutting Edge", strength: 5 },
        competitors: { 
          "Traditional Agencies": 2,
          "Freelancers": 3, 
          "Template Solutions": 1
        }
      }
    ]
  }
];

const STRENGTH_INDICATORS = {
  1: { label: "Poor", color: "bg-red-500" },
  2: { label: "Basic", color: "bg-orange-500" },
  3: { label: "Good", color: "bg-yellow-500" },
  4: { label: "Great", color: "bg-green-500" },
  5: { label: "Excellent", color: "bg-gradient-to-r from-green-500 to-emerald-500" }
};

const CompSection = () => {
  const [activeCategory, setActiveCategory] = useState("Development Excellence");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const getStrengthBars = (strength) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`w-2 h-6 rounded-sm transition-all duration-300 ${
              level <= strength 
                ? STRENGTH_INDICATORS[strength].color
                : "bg-white/10"
            }`}
          />
        ))}
        <span className={`${montserrat.className} text-xs text-gray-400 ml-2`}>
          {STRENGTH_INDICATORS[strength].label}
        </span>
      </div>
    );
  };

  return (
    <section id="comparison" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
        
        {/* Animated grid background */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,69,0,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,69,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 30, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-72 h-72 rounded-full blur-[120px] opacity-15 ${
              i === 0 ? "bg-red-500 top-1/4 left-1/4" :
              i === 1 ? "bg-orange-500 top-1/3 right-1/4" :
              i === 2 ? "bg-yellow-500 bottom-1/4 left-1/3" :
              "bg-red-600 top-3/4 right-1/3"
            }`}
          />
        ))}
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-orange-500 mb-2 flex items-center justify-center gap-2`}>
              <Sparkles size={14} />
              Why Choose MT7
              <Sparkles size={14} />
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-xs mx-auto"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${montserrat.className} text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white`}
          >
            Superior in <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">Every Way</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${montserrat.className} text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
          >
            Don&apos;t settle for average. See how MT7.in outperforms traditional solutions across every critical metric.
          </motion.p>
        </motion.div>

        {/* Competitors Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`${montserrat.className} text-2xl font-bold text-white mb-8 text-center`}>
            Common Alternatives & Their Limitations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {COMPETITORS.map((competitor, index) => (
              <motion.div
                key={competitor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className={`h-2 rounded-full bg-gradient-to-r ${competitor.color} mb-4`} />
                
                <h4 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>
                  {competitor.name}
                </h4>
                
                <p className={`${montserrat.className} text-gray-400 text-sm mb-4`}>
                  {competitor.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(competitor.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : i < competitor.rating
                            ? "text-yellow-500 fill-yellow-500/50"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`${montserrat.className} text-sm text-gray-400`}>
                    {competitor.rating}/5
                  </span>
                </div>
                
                {/* Issues */}
                <div>
                  <p className={`${montserrat.className} text-sm text-gray-500 mb-2`}>
                    Common Issues:
                  </p>
                  <ul className="space-y-1">
                    {competitor.issues.map((issue, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <X className="w-3 h-3 text-red-500" />
                        <span className={`${montserrat.className} text-xs text-gray-400`}>
                          {issue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {COMPARISON_FEATURES.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-3 rounded-full ${montserrat.className} text-sm font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.category
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-orange-500/30"
                  }`}
                >
                  <Icon size={16} />
                  {category.category}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Comparison Table */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-5 border-b border-white/10">
            <div className="p-6 md:col-span-2 border-r border-white/10 bg-black/60">
              <div className="flex items-center gap-3">
                {(() => {
                  const category = COMPARISON_FEATURES.find(c => c.category === activeCategory);
                  return category?.icon && React.createElement(
                    category.icon,
                    { className: "w-6 h-6 text-orange-500" }
                  );
                })()}
                <div>
                  <h4 className={`${montserrat.className} text-lg font-bold text-white`}>
                    {activeCategory}
                  </h4>
                  <p className={`${montserrat.className} text-gray-400 text-sm`}>
                    Feature comparison
                  </p>
                </div>
              </div>
            </div>
            
            {/* MT7 Column */}
            <div className="p-6 border-r border-white/10 bg-gradient-to-b from-orange-500/10 to-transparent relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <h4 className={`${montserrat.className} text-xl font-bold text-white`}>
                    MT7.in
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className={`${montserrat.className} text-sm text-gray-300`}>
                    5.0/5 Rating
                  </span>
                </div>
              </div>
            </div>
            
            {/* Competitors Columns */}
            {COMPETITORS.map((competitor, index) => (
              <div
                key={competitor.id}
                className={`p-6 ${
                  index < COMPETITORS.length - 1 ? "border-r border-white/10" : ""
                } bg-black/60`}
              >
                <h4 className={`${montserrat.className} text-lg font-bold text-white mb-2`}>
                  {competitor.name}
                </h4>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className={`${montserrat.className} text-sm text-gray-400`}>
                    {competitor.rating}/5
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="divide-y divide-white/10">
            {COMPARISON_FEATURES
              .find(cat => cat.category === activeCategory)
              ?.features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="grid grid-cols-1 md:grid-cols-5 hover:bg-white/5 transition-colors"
                  onMouseEnter={() => setHoveredFeature(feature.name)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Feature Description */}
                  <div className="p-6 md:col-span-2 border-r border-white/10">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-white/5 ${
                        hoveredFeature === feature.name ? "bg-orange-500/10" : ""
                      }`}>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h5 className={`${montserrat.className} font-bold text-white mb-1`}>
                          {feature.name}
                        </h5>
                        <p className={`${montserrat.className} text-gray-400 text-sm`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* MT7 Value */}
                  <div className="p-6 border-r border-white/10 relative overflow-hidden">
                    {hoveredFeature === feature.name && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="mb-3">
                        <p className={`${montserrat.className} text-white font-semibold mb-2`}>
                          {feature.mt7.value}
                        </p>
                        {getStrengthBars(feature.mt7.strength)}
                      </div>
                      {feature.mt7.strength === 5 && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full"
                        >
                          <ThumbsUp className="w-3 h-3 text-green-500" />
                          <span className={`${montserrat.className} text-xs text-green-500`}>
                            Best in Class
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Competitor Values */}
                  {COMPETITORS.map((competitor, compIndex) => {
                    const competitorStrength = feature.competitors[competitor.name ];
                    const isWorse = competitorStrength < feature.mt7.strength;
                    
                    return (
                      <div
                        key={competitor.id}
                        className={`p-6 ${
                          compIndex < COMPETITORS.length - 1 ? "border-r border-white/10" : ""
                        } relative overflow-hidden`}
                      >
                        {hoveredFeature === feature.name && (
                          <motion.div
                            layoutId="highlight"
                            className="absolute inset-0 bg-white/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <div className="relative z-10">
                          <div className="mb-3">
                            <p className={`${montserrat.className} text-gray-400 text-sm mb-2`}>
                              {competitorStrength === 1 && "Poor"}
                              {competitorStrength === 2 && "Basic"}
                              {competitorStrength === 3 && "Average"}
                              {competitorStrength === 4 && "Good"}
                            </p>
                            {getStrengthBars(competitorStrength)}
                          </div>
                          
                          {isWorse && (
                            <div className="flex items-center gap-1">
                              <X className="w-3 h-3 text-red-500" />
                              <span className={`${montserrat.className} text-xs text-red-400`}>
                                {feature.mt7.strength - competitorStrength}x worse
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized performance that outperforms competitors",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: Shield,
              title: "Military Security",
              description: "Enterprise-grade security unmatched in the market",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Users,
              title: "Dedicated Team",
              description: "Personalized support vs generic help desks",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: TrendingUp,
              title: "Proven ROI",
              description: "Data-driven results that deliver real business value",
              color: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>
                {item.title}
              </h4>
              <p className={`${montserrat.className} text-gray-400`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-red-500/5 to-transparent blur-xl -z-10" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full -z-10"
            />
            
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
              Ready to Experience the MT7 Difference?
            </h3>
            
            <p className={`${montserrat.className} text-gray-400 mb-8 max-w-xl mx-auto`}>
              Join hundreds of businesses that have switched to MT7.in and seen immediate improvements in performance, security, and results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${montserrat.className} px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${montserrat.className} px-8 py-4 bg-black border border-white/10 text-white font-bold rounded-full hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <BarChart className="w-5 h-5" />
                See Case Studies
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className={`${montserrat.className} text-2xl font-bold text-white mb-1`}>
                  98%
                </div>
                <div className={`${montserrat.className} text-sm text-gray-400`}>
                  Client Retention
                </div>
              </div>
              <div className="text-center">
                <div className={`${montserrat.className} text-2xl font-bold text-white mb-1`}>
                  4.9/5
                </div>
                <div className={`${montserrat.className} text-sm text-gray-400`}>
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className={`${montserrat.className} text-2xl font-bold text-white mb-1`}>
                  2.5x
                </div>
                <div className={`${montserrat.className} text-sm text-gray-400`}>
                  Better Performance
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompSection;