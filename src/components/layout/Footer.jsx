import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo_icon_only.png';

const Footer = () => {
    const instagramImages = [
        "https://images.unsplash.com/photo-1581578731522-632ee0434407?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=200&auto=format&fit=crop"
    ];

    return (
        <footer className="bg-[#050b1a] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
            <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
                <Sparkles size={120} className="text-primary" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
                <Sparkles size={80} className="text-primary" />
            </div>

            {/* Top Central Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full p-2 shadow-[0_0_30px_rgba(3,143,212,0.3)] flex items-center justify-center border-4 border-[#050b1a]"
                >
                    <img src={logoIcon} alt="Pure Magic Logo" className="w-full h-full object-contain" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                            We are <span className="text-primary">Pure Magic!</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            We work with a passion of taking challenges and creating sparkling clean spaces across Australia with professional care.
                        </p>
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Open Hours:</h4>
                            <p className="text-gray-300 text-sm font-medium">Mon - Sat: 8 AM - 5 PM</p>
                            <p className="text-gray-300 text-sm font-medium">Sunday: CLOSED</p>
                        </div>
                    </div>

                    {/* Column 2: Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Newsletter</h3>
                        <p className="text-gray-400 text-sm">Subscribe our newsletter to get our latest update & news.</p>
                        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your mail address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors pr-12"
                            />
                            <button className="absolute right-1 top-1 bottom-1 px-3 bg-primary hover:bg-primary-dark rounded-md transition-colors flex items-center justify-center">
                                <Send size={16} className="text-white" />
                            </button>
                        </form>
                        <div className="flex items-center gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ scale: 1.2, color: '#038fd4' }}
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Official Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Official info:</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-400 font-bold mb-0.5 uppercase tracking-tighter">Location</p>
                                    <p className="text-gray-300 leading-snug">Canberra, ACT<br />Australia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-400 font-bold mb-0.5 uppercase tracking-tighter">Call Now</p>
                                    <p className="text-white text-lg font-black tracking-tighter">0483 982 111</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={18} />
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-400 font-bold mb-0.5 uppercase tracking-tighter">Email Us</p>
                                    <p className="text-gray-300 break-all font-medium">contact@puremagiccleaning.com.au</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Instagram */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Instagram</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {instagramImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    className="aspect-square rounded-lg overflow-hidden border border-white/5 shadow-lg group cursor-pointer"
                                >
                                    <img src={img} alt={`Insta ${idx}`} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] text-center md:text-left">
                        {new Date().getFullYear()} © All rights reserved by <span className="text-primary">PureMagic Cleaning</span>
                    </p>
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">Our Story</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
