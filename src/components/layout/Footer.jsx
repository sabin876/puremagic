import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, CheckCircle, Phone, Mail, MapPin, Send, ShieldCheck, Star, Award } from 'lucide-react';
import logoImg from '../../assets/logo_white.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-20 pb-8 border-t border-gray-800/50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-primary to-primary-light opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container-wrapper relative z-10">
                {/* Newsletter Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-12 border-b border-gray-800/50 items-center">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join our Newsletter</h3>
                        <p className="text-gray-400 max-w-md">Stay updated with our latest cleaning tips, special offers, and housekeeping hacks.</p>
                    </div>
                    <form className="relative group max-w-lg lg:ml-auto w-full" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all text-white placeholder:text-gray-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                            >
                                Subscribe <Send size={18} />
                            </motion.button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <img src={logoImg} alt="PureMagic" className="h-16 w-auto" />
                        </motion.div>
                        <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                            Australia's most trusted cleaning service. We bring professional, eco-friendly, and reliable cleaning solutions to your residential and commercial properties.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Twitter, href: "#" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: 'var(--primary)' }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all text-white hover:text-white"
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {['Home', 'About Us', 'Services', 'Our Process', 'Get a Quote'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-all hover:pl-2 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Specialized Services
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {['House Cleaning', 'End of Lease', 'Office Cleaning', 'Commercial Cleaning', 'Deep Clean'].map((service) => (
                                <li key={service}><a href="#" className="hover:text-primary transition-all hover:pl-2 inline-block">{service}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Contact Details
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-5 text-sm text-gray-400">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Call Us</span>
                                    <span>1300 000 000 (Mon-Fri)</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Email Us</span>
                                    <span>hello@puremagic.com.au</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Location</span>
                                    <span>Sydney, NSW, Australia</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-gray-800/30 mb-12">
                    {[
                        { icon: ShieldCheck, text: "Fully Insured" },
                        { icon: Award, text: "NDIS Provider" },
                        { icon: Star, text: "Top Rated" },
                        { icon: CheckCircle, text: "Police Checked" }
                    ].map((badge, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <badge.icon size={24} className="text-primary" />
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{badge.text}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800/50 pt-8 text-sm text-gray-500">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <p>© {new Date().getFullYear()} PureMagic Cleaning Services. Excellence in every corner.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
