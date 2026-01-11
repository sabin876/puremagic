import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo_final.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const mainLinks = [
        {
            name: "Cleaning Services",
            href: "#",
            isDropdown: true,
            items: [
                { name: "Commercial Cleaning", slug: "commercial-cleaning" },
                { name: "BnB Cleaning", slug: "bnb-cleaning" },
                { name: "End of Lease", slug: "end-of-lease" },
                { name: "Pressure Wash", slug: "pressure-wash" },
                { name: "Strip and Seal", slug: "strip-and-seal" },
                { name: "Lawn Mowing", slug: "lawn-mowing" },
                { name: "Window Cleaning", slug: "window-cleaning" },
                { name: "Floor Scrubbing", slug: "floor-scrubbing" },
                { name: "Carpet Cleaning", slug: "carpet-cleaning" },
                { name: "Rubbish Removal", slug: "rubbish-removal" }
            ]
        },
        {
            name: "Why Pure Magic?",
            href: "#",
            isDropdown: true,
            items: ["About Us", "Our Guarantee", "Cleaning Process"]
        },
        { name: "FAQ", href: "#" },

        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="w-full font-sans fixed top-0 left-0 right-0 z-50">
            <div className="bg-topbar py-1.5 sm:py-2 px-4 shadow-sm min-h-[32px] flex items-center">
                <div className="container mx-auto flex justify-between items-center relative">
                    {/* Centered Promotional Message */}
                    <p className="text-primary font-medium text-[10px] sm:text-xs md:text-sm tracking-wide flex-grow text-center px-2 sm:pl-20">
                        ✨ Sparkling Homes, Happy Hearts – Experience the <span className="font-bold underline">Pure Magic Clean</span> Today! ✨
                    </p>

                    <div className="flex items-center gap-2 hidden sm:flex pr-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#001E6C] hover:bg-gray-100 transition-colors">
                            <Facebook size={14} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#001E6C] hover:bg-gray-100 transition-colors">
                            <Instagram size={14} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#001E6C] hover:bg-gray-100 transition-colors">
                            <Linkedin size={14} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#001E6C] hover:bg-gray-100 transition-colors">
                            <Twitter size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md py-4 sm:py-5 md:py-6 lg:py-2 transition-all duration-300">
                <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 h-12 sm:h-16 md:h-20 lg:h-16 flex items-center relative w-28 sm:w-40 md:w-48 lg:w-40">
                        <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0 z-50">
                            <img
                                src={logoImg}
                                alt="Pure Magic"
                                className="h-12 sm:h-16 md:h-20 lg:h-16 xl:h-20 w-auto object-contain transition-all duration-300 origin-left hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Right Side Info (Desktop) */}
                    <div className="hidden lg:flex flex-col items-end w-full ml-4 xl:ml-6">
                        {/* Navigation Row */}
                        <div className="flex items-center gap-4 xl:gap-6 mt-1.5">
                            <div className="flex items-center gap-4 xl:gap-5">
                                {mainLinks.map((link, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group h-full flex items-center"
                                        onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                                        onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                                    >
                                        {link.isDropdown ? (
                                            <button className="flex items-center gap-0.5 text-primary font-bold text-sm xl:text-base hover:text-primary-dark transition-colors py-1.5">
                                                {link.name}
                                                <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
                                            </button>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="flex items-center gap-0.5 text-primary font-bold text-sm xl:text-base hover:text-primary-dark transition-colors py-1.5"
                                            >
                                                {link.name}
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
                                                            typeof item === 'string' ? (
                                                                <Link
                                                                    key={i}
                                                                    to={item === "About Us" ? "/about" : "#"}
                                                                    className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-primary font-medium transition-colors"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    key={i}
                                                                    to={`/services/${item.slug}`}
                                                                    className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-primary font-medium transition-colors"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            )
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
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

                            {/* CTA Button */}
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
                                    className="relative block bg-maid-green text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-md font-bold text-sm shadow-md transition-all group overflow-hidden border-none"
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
                                    <span className="relative z-10">Book now</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-1.5 sm:p-2 text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
                    </button>
                </div>
            </nav>

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
                                                {activeDropdown === link.name && (
                                                    <div className="pl-3 sm:pl-4 pb-2 space-y-1.5 sm:space-y-2 text-gray-600">
                                                        {link.items.map((item, i) => (
                                                            typeof item === 'string' ? (
                                                                <Link
                                                                    key={i}
                                                                    to={item === "About Us" ? "/about" : "#"}
                                                                    className="block py-1 text-xs sm:text-sm"
                                                                    onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    key={i}
                                                                    to={`/services/${item.slug}`}
                                                                    className="block py-1 text-xs sm:text-sm"
                                                                    onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            )
                                                        ))}
                                                    </div>
                                                )}
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
                                        <span className="relative z-10">Book now</span>
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
