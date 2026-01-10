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
        { name: "Locations", href: "#" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="w-full font-sans fixed top-0 left-0 right-0 z-50">
            <div className="bg-topbar py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center relative">
                    {/* Centered Promotional Message */}
                    <p className="text-white font-medium text-[10px] sm:text-xs md:text-sm tracking-wide flex-grow text-center pl-0 sm:pl-20">
                        ✨ Sparkling Homes, Happy Hearts – Experience the <span className="font-bold underline">Pure Magic Clean</span> Today! ✨
                    </p>

                    {/* Social Media Icons (Right) */}
                    <div className="flex items-center gap-3 hidden sm:flex pr-2 text-maid-green">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Facebook size={16} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Instagram size={16} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Twitter size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md py-1 sm:py-1.5 md:py-2 transition-all duration-300">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 h-10 sm:h-12 md:h-14 lg:h-16 flex items-center relative w-24 sm:w-28 md:w-32 lg:w-40">
                        <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0 z-50">
                            <img
                                src={logoImg}
                                alt="Pure Magic"
                                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain transition-all duration-300 origin-left hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Right Side Info (Desktop) */}
                    <div className="hidden lg:flex flex-col items-end w-full ml-4 xl:ml-6">

                        {/* Top Row: Utility Links */}


                        {/* Bottom Row: Main Navigation + CTA */}
                        <div className="flex items-center gap-4 xl:gap-6 mt-1.5">

                            {/* Navigation Links */}
                            <div className="flex items-center gap-4 xl:gap-5">
                                {mainLinks.map((link, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group h-full flex items-center"
                                        onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                                        onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                                    >
                                        {link.isDropdown ? (
                                            <a
                                                href={link.href}
                                                className="flex items-center gap-0.5 text-primary font-bold text-sm xl:text-base hover:text-primary-dark transition-colors py-1.5"
                                            >
                                                {link.name}
                                                <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
                                            </a>
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
                                                                <a
                                                                    key={i}
                                                                    href="#"
                                                                    className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-primary font-medium transition-colors"
                                                                >
                                                                    {item}
                                                                </a>
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
                            <a href="tel:6177428080" className="flex items-center gap-1.5 text-primary font-medium text-base xl:text-lg hover:text-primary-dark transition-colors">
                                <Phone size={18} fill="currentColor" className="text-primary" />
                                <span>(617) 742-8080</span>
                            </a>

                            {/* CTA Button */}
                            <motion.a
                                href="#"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.1, backgroundColor: "#1f7d6d" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-maid-green text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-md font-bold text-sm shadow-md transition-all"
                            >
                                Book now
                            </motion.a>

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
                            {/* Mobile Utility Links */}


                            {/* Mobile Main Links */}
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
                                                                <a key={i} href="#" className="block py-1 text-xs sm:text-sm">{item}</a>
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
                                            <Link to={link.href} className="block py-2 text-gray-800 font-bold text-sm sm:text-base">
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="pt-3 sm:pt-4 flex flex-col gap-3 sm:gap-4">
                                <a href="tel:6177428080" className="flex items-center justify-center gap-2 text-primary font-bold text-base sm:text-lg">
                                    <Phone size={20} className="sm:w-5 sm:h-5" /> (617) 742-8080
                                </a>
                                <motion.a
                                    href="#"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="block w-full text-center bg-maid-green text-white py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base shadow-md min-h-[44px]"
                                >
                                    Book now
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
