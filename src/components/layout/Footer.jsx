import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ShieldCheck, CheckCircle, Star, MessageSquare, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white px-4 sm:px-6 lg:px-8 pb-8 pt-12">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Container - Matches Image Design */}
                <div className="bg-maid-green rounded-[2rem] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">

                    {/* Brand Blue Version - Applying User Theme */}
                    <div className="absolute inset-0 z-0 bg-primary"></div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        {/* Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-6 sm:mb-8"
                        >
                            <Star size={18} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-sm sm:text-base font-semibold tracking-wide">4.7/5 Rating • 500+ Happy Customers</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1]"
                        >
                            Ready to Experience the <span className="text-orange-400">Difference?</span>
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Professional, reliable, and eco-friendly cleaning solutions in Australia.
                        </motion.p>

                        {/* CTA Buttons - Matching Image Precisely */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
                        >
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-3"
                            >
                                <Calculator size={22} className="text-primary" />
                                Get Free Quote
                            </Link>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            >
                                <MessageSquare size={22} className="text-white" />
                                Contact Us
                            </Link>
                        </motion.div>

                        {/* Contact Info Bar - Inner Card Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-4 sm:p-8 mb-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                                {/* CALL NOW */}
                                <div className="flex items-center gap-4 justify-center md:px-4 pb-6 md:pb-0">
                                    <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                                        <Phone size={24} className="text-orange-400" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">CALL NOW</span>
                                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">0483 982 111</span>
                                    </div>
                                </div>

                                {/* EMAIL US */}
                                <div className="flex items-center gap-4 justify-center md:px-4 py-6 md:py-0">
                                    <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                                        <Mail size={24} className="text-green-400" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">EMAIL US</span>
                                        <span className="text-[14px] sm:text-[16px] font-bold text-white break-all">contact@puremagiccleaning.com.au</span>
                                    </div>
                                </div>

                                {/* RESPONSE TIME */}
                                <div className="flex items-center gap-4 justify-center md:px-4 pt-6 md:pt-0">
                                    <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                                        <Clock size={24} className="text-blue-400" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">RESPONSE TIME</span>
                                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Within 2 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Trust Badges - Text with small dot separators */}
                        <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-widest">
                            <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1 rounded-full">
                                <ShieldCheck size={14} className="text-primary" />
                                <span>Fully Insured & Licensed</span>
                            </div>
                            <span className="hidden sm:inline opacity-30">|</span>
                            <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1 rounded-full">
                                <Clock size={14} className="text-primary" />
                                <span>24/7 Emergency Service</span>
                            </div>
                            <span className="hidden sm:inline opacity-30">|</span>
                            <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1 rounded-full">
                                <Star size={14} className="text-primary" />
                                <span>100% Satisfaction Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Credits */}
                <div className="mt-8 text-center text-gray-400 text-[10px] tracking-widest uppercase font-bold">
                    <p>© {new Date().getFullYear()} PureMagic Cleaning Australia. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
