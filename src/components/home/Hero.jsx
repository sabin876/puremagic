import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Star, ShieldCheck, ArrowRight, ChevronDown, Sparkles, RefreshCw, Leaf, FileCheck, DollarSign } from 'lucide-react';
import heroBg from '../../assets/hero_bg_new.png';
import logoWatermark from '../../assets/logo_white.png';

const Hero = () => {
    return (
        // Adjusted top margin/padding for the compact navbar height
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-24 lg:pt-28">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Pure Magic Cleaning Service"
                    className="w-full h-full object-cover"
                />
                {/* Darker overlay for 'light drak' effect and text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Logo Watermark - Backward Type */}
                <div className="absolute top-1/2 -left-20 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
                    <img src={logoWatermark} alt="" className="h-[600px] w-auto rotate-12" />
                </div>
            </div>

            <div className="container-wrapper relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="flex flex-col items-center"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="text-white font-bold tracking-wider uppercase mb-3 sm:mb-4 text-xs sm:text-sm md:text-base"
                        >
                            Proudly Serving Canberra & All Surrounding Areas
                        </motion.h2>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 relative inline-block"
                        >
                            Professional Cleaning <br />
                            Services You Can Trust

                            {/* Cleaning Sparkle 1 - Moving Star */}
                            <motion.div
                                animate={{
                                    x: [-50, 450],
                                    y: [20, -40],
                                    rotate: [0, 180],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatDelay: 1
                                }}
                                className="absolute top-0 left-0 pointer-events-none text-yellow-300 hidden md:block"
                            >
                                <Sparkles size={52} />
                            </motion.div>

                            {/* Cleaning Sparkle 2 - Twinkling Star */}
                            <motion.div
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.4, 1, 0.4],
                                    rotate: [0, 90, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-6 -right-8 text-[#4ade80] pointer-events-none hidden md:block" // Greenish for eco-friendly hint
                            >
                                <Star size={44} fill="currentColor" />
                            </motion.div>

                            {/* Cleaning Sparkle 3 - Floating */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                className="absolute bottom-4 -left-10 text-blue-300 pointer-events-none hidden md:block"
                            >
                                <Sparkles size={48} />
                            </motion.div>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
                        >
                            Over 18 years of experience delivering spotless results for homes and
                            businesses. Reliable, affordable, and eco-friendly cleaning services.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1a8037] hover:bg-[#146c2e] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-bold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                            >
                                <span>Book now</span>
                                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>
                        </motion.div>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{
                                delay: 2,
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="absolute bottom-[-130px] left-1/2 -translate-x-1/2 text-white/80 hidden lg:flex flex-col items-center gap-1 z-20 pointer-events-none"
                        >
                            <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Feature Bar - Bottom Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 max-w-6xl mx-auto px-4"
                >
                    <div className="bg-[#f5f5dc] rounded-2xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                            {[
                                {
                                    icon: RefreshCw,
                                    title: "ROUTINE CLEANING",
                                    desc: "Weekly or fortnightly services."
                                },
                                {
                                    icon: Leaf,
                                    title: "NO HARSH CHEMICALS",
                                    desc: "We only use eco-friendly products."
                                },
                                {
                                    icon: FileCheck,
                                    title: "REGISTERED PROVIDER",
                                    desc: "Delivering support to NDIS participants."
                                },
                                {
                                    icon: DollarSign,
                                    title: "DISCOUNTS AVAILABLE",
                                    desc: "Special pricing for pensioners."
                                }
                            ].map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/50"
                                    >
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="text-[#1a8037] mb-2">
                                                <Icon size={36} strokeWidth={2} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-xs sm:text-sm tracking-wide">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[#1e40af] text-xs sm:text-sm font-medium leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
