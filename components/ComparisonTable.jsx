"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { 
  Check,
  X,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  Award,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Star,
  Target,
  ShieldCheck,
  Cpu,
  HardDrive
} from "lucide-react";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const PLANS = [
  {
    name: "Basic Plan",
    price: "$99",
    period: "per month",
    description: "For startups getting started",
    color: "from-gray-500 to-gray-700",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false,
    features: {
      "Performance": { value: "Good", included: true },
      "Security": { value: "Basic", included: true },
      "Support": { value: "Email Only", included: true },
      "Uptime": { value: "99.5%", included: true },
      "Customization": { value: "Limited", included: true },
      "Analytics": { value: "Basic", included: true },
      "API Access": { value: "No", included: false },
      "Team Members": { value: "3", included: true },
      "Storage": { value: "10GB", included: true },
      "Priority Support": { value: "No", included: false },
      "White Label": { value: "No", included: false },
      "Dedicated Manager": { value: "No", included: false },
    }
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "For growing businesses",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true,
    features: {
      "Performance": { value: "Excellent", included: true },
      "Security": { value: "Advanced", included: true },
      "Support": { value: "24/7 Chat", included: true },
      "Uptime": { value: "99.9%", included: true },
      "Customization": { value: "Full", included: true },
      "Analytics": { value: "Advanced", included: true },
      "API Access": { value: "Yes", included: true },
      "Team Members": { value: "10", included: true },
      "Storage": { value: "100GB", included: true },
      "Priority Support": { value: "Yes", included: true },
      "White Label": { value: "No", included: false },
      "Dedicated Manager": { value: "No", included: false },
    }
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "per month",
    description: "For large organizations",
    color: "from-red-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false,
    features: {
      "Performance": { value: "Enterprise", included: true },
      "Security": { value: "Military Grade", included: true },
      "Support": { value: "24/7 Phone", included: true },
      "Uptime": { value: "99.99%", included: true },
      "Customization": { value: "Full + Custom", included: true },
      "Analytics": { value: "Enterprise", included: true },
      "API Access": { value: "Unlimited", included: true },
      "Team Members": { value: "Unlimited", included: true },
      "Storage": { value: "1TB+", included: true },
      "Priority Support": { value: "VIP", included: true },
      "White Label": { value: "Yes", included: true },
      "Dedicated Manager": { value: "Yes", included: true },
    }
  },
  {
    name: "MT7 Premium",
    price: "$999",
    period: "per month",
    description: "Ultimate solution",
    color: "from-yellow-500 via-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false,
    features: {
      "Performance": { value: "Ultimate", included: true },
      "Security": { value: "Quantum", included: true },
      "Support": { value: "Dedicated Team", included: true },
      "Uptime": { value: "100% SLA", included: true },
      "Customization": { value: "Bespoke", included: true },
      "Analytics": { value: "AI-Powered", included: true },
      "API Access": { value: "Premium", included: true },
      "Team Members": { value: "Unlimited+", included: true },
      "Storage": { value: "Unlimited", included: true },
      "Priority Support": { value: "Executive", included: true },
      "White Label": { value: "Premium", included: true },
      "Dedicated Manager": { value: "CTO Level", included: true },
    }
  },
];

const COMPARISON_CATEGORIES = [
  {
    name: "Performance",
    icon: Zap,
    description: "Speed and reliability metrics",
    features: ["Performance", "Uptime", "API Access"]
  },
  {
    name: "Security",
    icon: Shield,
    description: "Protection and compliance",
    features: ["Security", "White Label"]
  },
  {
    name: "Support",
    icon: Users,
    description: "Customer service options",
    features: ["Support", "Priority Support", "Dedicated Manager"]
  },
  {
    name: "Resources",
    icon: HardDrive,
    description: "Storage and team capacity",
    features: ["Team Members", "Storage", "Customization"]
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    description: "Data and insights",
    features: ["Analytics"]
  }
];

const FEATURE_ICONS = {
  "Performance": Zap,
  "Security": Shield,
  "Support": Users,
  "Uptime": Globe,
  "Customization": Cpu,
  "Analytics": TrendingUp,
  "API Access": Target,
  "Team Members": Users,
  "Storage": HardDrive,
  "Priority Support": Award,
  "White Label": ShieldCheck,
  "Dedicated Manager": Star,
};

const ComparisonTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (rowName) => {
    setExpandedRows(prev => 
      prev.includes(rowName) 
        ? prev.filter(r => r !== rowName)
        : [...prev, rowName]
    );
  };

  const getFilteredFeatures = () => {
    if (selectedCategory === "all") {
      return Object.keys(PLANS[0].features);
    }
    
    const category = COMPARISON_CATEGORIES.find(cat => cat.name === selectedCategory);
    return category ? category.features : Object.keys(PLANS[0].features);
  };

  const getCategoryForFeature = (featureName) => {
    for (const category of COMPARISON_CATEGORIES) {
      if (category.features.includes(featureName)) {
        return category.name;
      }
    }
    return "General";
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
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,69,0,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,69,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-64 h-64 rounded-full blur-[100px] opacity-20 ${
              i === 0 ? "bg-red-500 top-1/4 left-1/4" :
              i === 1 ? "bg-orange-500 top-1/3 right-1/4" :
              "bg-yellow-500 bottom-1/4 left-1/3"
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
              Choose The Right Plan
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
            Compare Our <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">Plans</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${montserrat.className} text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
          >
            Find the perfect solution for your business needs. All plans include our core features with varying levels of advanced capabilities.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full ${montserrat.className} text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-orange-500/30"
              }`}
            >
              All Features
            </motion.button>
            
            {COMPARISON_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full ${montserrat.className} text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-orange-500/30"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Plans Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {PLANS.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl overflow-hidden border-2 backdrop-blur-sm ${
                  isPopular
                    ? "border-orange-500/50 shadow-2xl shadow-orange-500/20"
                    : "border-white/10"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
                    >
                      MOST POPULAR
                    </motion.div>
                  </div>
                )}

                {/* Plan Image */}
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-60`} />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className={`${montserrat.className} text-2xl font-bold text-white mb-2`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`${montserrat.className} text-4xl font-bold text-white`}>
                          {plan.price}
                        </span>
                        <span className={`${montserrat.className} text-gray-300`}>
                          {plan.period}
                        </span>
                      </div>
                      <p className={`${montserrat.className} text-gray-300 text-sm mt-2`}>
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plan Action */}
                <div className="p-6 bg-black/60">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg ${montserrat.className} font-bold transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/30"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-white/10">
            <div className="p-6 border-r border-white/10 bg-black/60">
              <h4 className={`${montserrat.className} text-lg font-bold text-white`}>
                Features
              </h4>
              <p className={`${montserrat.className} text-gray-400 text-sm mt-1`}>
                Compare all features
              </p>
            </div>
            {PLANS.map((plan, index) => (
              <div
                key={plan.name}
                className={`p-6 ${
                  index < PLANS.length - 1 ? "border-r border-white/10" : ""
                } ${plan.popular ? "bg-orange-500/5" : "bg-black/60"}`}
              >
                <h4 className={`${montserrat.className} text-xl font-bold text-white text-center`}>
                  {plan.name}
                </h4>
                {plan.popular && (
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {getFilteredFeatures().map((featureName, rowIndex) => {
              const FeatureIcon = FEATURE_ICONS[featureName] || Zap;
              const categoryName = getCategoryForFeature(featureName);
              const isExpanded = expandedRows.includes(featureName);
              
              return (
                <React.Fragment key={featureName}>
                  {/* Feature Row - Always Visible */}
                  <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => toggleRow(featureName)}
                  >
                    {/* Feature Name */}
                    <div className="p-4 md:p-6 border-r border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5">
                          <FeatureIcon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <div className={`${montserrat.className} font-medium text-white`}>
                            {featureName}
                          </div>
                          <div className={`${montserrat.className} text-xs text-gray-500 mt-1`}>
                            {categoryName}
                          </div>
                        </div>
                      </div>
                      <button className="lg:hidden">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Plan Columns */}
                    {PLANS.map((plan, planIndex) => {
                        const feature = plan.features[featureName];
                        const isIncluded = feature?.included;
                      const value = feature?.value;
                      
                      return (
                        <div
                          key={`${plan.name}-${featureName}`}
                          className={`p-4 md:p-6 ${
                            planIndex < PLANS.length - 1 ? "border-r border-white/10" : ""
                          } ${plan.popular ? "bg-orange-500/5" : ""} hidden md:block`}
                        >
                          <div className="flex flex-col items-center">
                            {isIncluded ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-2"
                              >
                                <Check className="w-5 h-5 text-green-500" />
                              </motion.div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                                <X className="w-5 h-5 text-red-500" />
                              </div>
                            )}
                            
                            <div className={`${montserrat.className} text-center ${
                              typeof value === "string" && value.toLowerCase() === "yes"
                                ? "text-green-500 font-semibold"
                                : typeof value === "string" && value.toLowerCase() === "no"
                                ? "text-red-500"
                                : "text-gray-300"
                            }`}>
                              {value}
                            </div>
                            
                            {typeof value === "string" && ["Good", "Excellent", "Enterprise", "Ultimate"].includes(value) && (
                              <div className="mt-2 flex gap-1">
                                {["Good", "Excellent", "Enterprise", "Ultimate"].indexOf(value) + 1 > 0 && 
                                  [...Array(["Good", "Excellent", "Enterprise", "Ultimate"].indexOf(value) + 1)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-orange-500" />
                                  ))
                                }
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Expanded Row - Mobile View */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden bg-black/30"
                    >
                      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {PLANS.map((plan) => {
                          const feature = plan.features[featureName];
                          const isIncluded = feature?.included;
                          const value = feature?.value;
                          
                          return (
                            <div key={plan.name} className="text-center">
                              <div className={`${montserrat.className} font-bold text-white mb-2`}>
                                {plan.name}
                              </div>
                              <div className="flex flex-col items-center">
                                {isIncluded ? (
                                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                                    <X className="w-4 h-4 text-red-500" />
                                  </div>
                                )}
                                <div className={`${montserrat.className} text-sm ${
                                  typeof value === "string" && value.toLowerCase() === "yes"
                                    ? "text-green-500"
                                    : typeof value === "string" && value.toLowerCase() === "no"
                                    ? "text-red-500"
                                    : "text-gray-300"
                                }`}>
                                  {value}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Legend & Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className={`${montserrat.className} text-lg font-bold text-white mb-4`}>
              Legend
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className={`${montserrat.className} text-gray-300`}>Feature Included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className={`${montserrat.className} text-gray-300`}>Feature Not Included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <span className={`${montserrat.className} text-gray-300`}>Performance Level</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className={`${montserrat.className} text-lg font-bold text-white mb-4`}>
              Need Help Choosing?
            </h4>
            <p className={`${montserrat.className} text-gray-400 mb-4`}>
              Our experts can help you select the perfect plan based on your specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2`}
            >
              <Users className="w-5 h-5" />
              Talk to an Expert
            </motion.button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
              All Plans Include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Shield, label: "SSL Security" },
                { icon: Globe, label: "Global CDN" },
                { icon: Clock, label: "99.9% Uptime" },
                { icon: Award, label: "24/7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/5"
                >
                  <item.icon className="w-8 h-8 text-orange-500 mb-2" />
                  <span className={`${montserrat.className} text-sm text-gray-300 text-center`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 mx-auto`}
            >
              Start Your Free Trial
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;