import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, Phone, ChevronDown, Facebook, Instagram, Linkedin, Twitter,
    Building2, Home, Key, Waves, Layers, Scissors, Wind, Brush, Sparkles, Trash2,
    Briefcase, ShieldCheck, ClipboardCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VacuumIcon from '../common/VacuumIcon';
import SparkleEffect from '../common/SparkleEffect';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const mainLinks = [
        {
            name: "Cleaning Services",
            href: "#",
            isDropdown: true,
            items: [
                { name: "Commercial Cleaning", slug: "commercial-cleaning", icon: Building2 },
                { name: "BnB Cleaning", slug: "bnb-cleaning", icon: Home },
                { name: "End of Lease", slug: "end-of-lease", icon: Key },
                { name: "Pressure Wash", slug: "pressure-wash", icon: Waves },
                { name: "Strip and Seal", slug: "strip-and-seal", icon: Layers },
                { name: "Lawn Mowing", slug: "lawn-mowing", icon: Scissors },
                { name: "Window Cleaning", slug: "window-cleaning", icon: Wind },
                { name: "Floor Scrubbing", slug: "floor-scrubbing", icon: Brush },
                { name: "Carpet Cleaning", slug: "carpet-cleaning", icon: Sparkles },
                { name: "Rubbish Removal", slug: "rubbish-removal", icon: Trash2 }
            ]
        },
        {
            name: "Why Pure Magic?",
            href: "#",
            isDropdown: true,
            items: [
                { name: "About Us", icon: Briefcase },
                { name: "Our Guarantee", icon: ShieldCheck },
                { name: "Cleaning Process", icon: ClipboardCheck }
            ]
        },
        { name: "FAQ", href: "#" },
        { name: "Blog", href: "/#blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="w-full font-sans fixed top-0 left-0 right-0 z-50">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-1 sm:py-1.5 px-4 shadow-sm min-h-[36px] flex items-center border-b border-white/10"
            >
                <div className="container mx-auto flex justify-between items-center relative gap-4">
                    {/* Left: Location/Hours */}
                    <div className="hidden md:flex items-center gap-4 text-white/90 text-[10px] sm:text-xs">
                        <div className="flex items-center gap-1.5">
                            <Building2 size={14} className="text-secondary" />
                            <span className="font-medium tracking-wide">Sydney, Australia</span>
                        </div>
                        <div className="h-3 w-[1px] bg-white/20"></div>
                        <div className="flex items-center gap-1.5">
                            <ClipboardCheck size={14} className="text-secondary" />
                            <span className="font-medium tracking-wide">Mon - Sat: 8am - 6pm</span>
                        </div>
                    </div>

                    {/* Center: Promotional Message */}
                    <p className="text-white font-medium text-[10px] sm:text-xs md:text-sm tracking-wide flex-grow text-center">
                        ✨ <span className="hidden sm:inline">Sparkling Homes, Happy Hearts –</span> Experience the <span className="font-bold underline decoration-secondary/50 underline-offset-2">Pure Magic Clean</span> Today! ✨
                    </p>

                    {/* Right: Social Links */}
                    <div className="flex items-center gap-2.5 pr-2">
                        <span className="hidden xl:inline text-white/90 text-[11px] font-bold uppercase tracking-widest mr-1">Connect with us:</span>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-maid-green hover:bg-maid-green hover:text-white transition-all duration-300 shadow-sm border border-white/20"
                            title="Facebook"
                        >
                            <Facebook size={16} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-maid-green hover:bg-maid-green hover:text-white transition-all duration-300 shadow-sm border border-white/20"
                            title="Instagram"
                        >
                            <Instagram size={16} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-maid-green hover:bg-maid-green hover:text-white transition-all duration-300 shadow-sm border border-white/20"
                            title="Twitter"
                        >
                            <Twitter size={16} />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Main Navbar */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white shadow-md py-4 sm:py-5 md:py-6 lg:py-2 transition-all duration-300"
            >
                <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-8 flex justify-between items-center">



                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center relative z-50">
                        <Link to="/" className="flex flex-col items-center leading-none group relative">
                            {/* Logo Shine Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-[shine_1.5s_ease-in-out_infinite] pointer-events-none" />

                            {/* Sparkle Effect */}
                            <SparkleEffect count={4} />

                            <div className="flex items-center relative">
                                <motion.span
                                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tighter"
                                    animate={{
                                        textShadow: ["0 0 0px rgba(3,143,212,0)", "0 0 10px rgba(3,143,212,0.3)", "0 0 0px rgba(3,143,212,0)"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    Pure
                                </motion.span>
                                <div className="flex items-baseline">
                                    <motion.span
                                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tighter"
                                        animate={{
                                            textShadow: ["0 0 0px rgba(3,143,212,0)", "0 0 10px rgba(3,143,212,0.3)", "0 0 0px rgba(3,143,212,0)"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    >
                                        M
                                    </motion.span>
                                    <motion.div
                                        animate={{
                                            rotate: [0, -2, 2, -2, 0],
                                            x: [0, -1, 1, -1, 0]
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "easeInOut"
                                        }}
                                        className="inline-flex items-center"
                                    >
                                        <VacuumIcon className="w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11 mx-[1px] self-end mb-0.5 sm:mb-1 filter drop-shadow(0 0 5px rgba(69,198,145,0.4))" />
                                    </motion.div>
                                    <motion.span
                                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tighter"
                                        animate={{
                                            textShadow: ["0 0 0px rgba(3,143,212,0)", "0 0 10px rgba(3,143,212,0.3)", "0 0 0px rgba(3,143,212,0)"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    >
                                        gic
                                    </motion.span>
                                </div>
                            </div>
                            <motion.span
                                className="text-[0.6rem] sm:text-xs md:text-sm font-bold text-primary tracking-[0.2em] mt-1 relative"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                SERVICES
                                <motion.div
                                    className="absolute -right-4 -top-1"
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Sparkles size={12} className="text-maid-green" />
                                </motion.div>
                            </motion.span>
                        </Link>
                    </div>

                    {/* Right Side Info (Desktop) */}
                    <div className="hidden lg:flex flex-col items-end w-full ml-4 xl:ml-6">
                        {/* Navigation Row */}
                        <div className="flex items-center gap-4 xl:gap-6 mt-1.5">
                            <div className="flex items-center gap-4 xl:gap-5">
                                {mainLinks.map((link, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.7 + (idx * 0.1) }}
                                        className="relative group h-full flex items-center overflow-visible"
                                        onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                                        onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                                    >
                                        {/* Floating Bubbles */}
                                        {[...Array(3)].map((_, bubbleIdx) => (
                                            <motion.div
                                                key={bubbleIdx}
                                                className="absolute bottom-0 w-2 h-2 bg-primary/70 rounded-full pointer-events-none"
                                                style={{
                                                    left: `${20 + bubbleIdx * 30}%`,
                                                }}
                                                animate={{
                                                    y: [-5, -60],
                                                    x: [0, (bubbleIdx % 2 === 0 ? 10 : -10)],
                                                    opacity: [0, 0.6, 0],
                                                    scale: [0.5, 1, 0.8],
                                                }}
                                                transition={{
                                                    duration: 3 + bubbleIdx * 0.5,
                                                    repeat: Infinity,
                                                    delay: bubbleIdx * 1.2,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        ))}

                                        {link.isDropdown ? (
                                            <button className="flex items-center gap-0.5 text-primary font-bold text-sm xl:text-base hover:text-primary-dark transition-colors py-1.5 relative">
                                                {link.name}
                                                <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
                                                <motion.span
                                                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: '100%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="flex items-center gap-0.5 text-primary font-bold text-sm xl:text-base hover:text-primary-dark transition-colors py-1.5 relative"
                                            >
                                                {link.name}
                                                <motion.span
                                                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: '100%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </Link>
                                        )}

                                        {/* Dropdown Menu */}
                                        {link.isDropdown && (
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 py-2"
                                                    >
                                                        {link.items.map((item, i) => (
                                                            <Link
                                                                key={i}
                                                                to={item.slug ? `/services/${item.slug}` : (item.name === "About Us" ? "/about" : "#")}
                                                                className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-primary font-medium transition-colors group/item"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                {item.icon && <item.icon size={18} className="text-primary/60 group-hover/item:text-primary transition-colors" />}
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Phone Number */}
                            <motion.a
                                href="tel:6177428080"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center gap-1.5 text-primary font-bold text-base xl:text-lg hover:text-primary-dark transition-colors group"
                            >
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Phone size={18} fill="currentColor" className="text-primary" />
                                </motion.div>
                                <span>(617) 742-8080</span>
                            </motion.a>

                            {/* Book Now Button */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="relative block bg-maid-green text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all group overflow-hidden border-none"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: 'conic-gradient(from 0deg, transparent, transparent, #ffffff, transparent, transparent)',
                                            padding: '2px',
                                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            maskComposite: 'exclude',
                                            WebkitMaskComposite: 'xor',
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                    <span className="relative z-10 text-[0.9rem] sm:text-sm">Get free quote</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Action Area */}
                    <div className="lg:hidden flex items-center gap-3">
                        {/* Mobile Call Button */}
                        <a href="tel:6177428080" className="w-10 h-10 bg-maid-green text-white rounded-lg flex items-center justify-center shadow-md active:scale-95 transition-transform hover:bg-[#349c71]">
                            <Phone size={20} />
                        </a>

                        {/* Mobile Menu Button (Hamburger) */}
                        <button
                            className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center shadow-md active:scale-95 transition-transform hover:bg-primary-dark"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-3 sm:p-4 space-y-3 sm:space-y-4">
                            <div className="space-y-1.5 sm:space-y-2">
                                {mainLinks.map((link, idx) => (
                                    <div key={idx} className="border-b border-gray-50 last:border-none pb-1.5 sm:pb-2">
                                        {link.isDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="w-full flex justify-between items-center py-2 text-gray-800 font-bold text-sm sm:text-base"
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-3 sm:pl-4 pb-2 space-y-1 sm:space-y-1.5 text-gray-600">
                                                                {link.items.map((item, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        to={item.slug ? `/services/${item.slug}` : (item.name === "About Us" ? "/about" : "#")}
                                                                        className="flex items-center gap-3 py-2 text-sm sm:text-base font-medium"
                                                                        onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                                                    >
                                                                        {item.icon && <item.icon size={18} className="text-primary/70" />}
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="block py-2 text-gray-800 font-bold text-sm sm:text-base"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-3 sm:pt-4 flex flex-col gap-3 sm:gap-4">
                                <motion.a
                                    href="tel:6177428080"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex items-center justify-center gap-2 text-primary font-bold text-base sm:text-lg"
                                >
                                    <Phone size={20} className="sm:w-5 sm:h-5" /> (617) 742-8080
                                </motion.a>
                                <motion.div
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="relative block w-full text-center bg-maid-green text-white py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base shadow-md min-h-[44px] group overflow-hidden border-none"
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-md"
                                            style={{
                                                background: 'conic-gradient(from 0deg, transparent, transparent, #22c55e, transparent, transparent)',
                                                padding: '2px',
                                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                maskComposite: 'exclude',
                                                WebkitMaskComposite: 'xor',
                                            }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                        <span className="relative z-10 text-xs sm:text-sm">Get free quote</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
