import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo_final.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const utilityLinks = [
        { name: "Refer Friends? hello@puremagic.com.au", href: "mailto:hello@puremagic.com.au", icon: Mail },
        { name: "Job Vacancy", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Facebook", href: "https://facebook.com", icon: Facebook },
        { name: "Instagram", href: "https://instagram.com", icon: Instagram },
        { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    ];

    const mainLinks = [
        {
            name: "Cleaning Services",
            href: "#",
            isDropdown: true,
            items: [
                "Commercial Cleaning",
                "BnB Cleaning",
                "End of Lease",
                "Pressure Wash",
                "Strip and Seal",
                "Lawn Mowing",
                "Window Cleaning",
                "Floor Scrubbing"
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
            {/* Top Bar */}
            <div className="bg-topbar text-center py-2 px-4 shadow-sm">
                <p className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide">
                    ✨ Sparkling Homes, Happy Hearts – Experience the <span className="font-bold underline">Pure Magic Clean</span> Today! ✨
                </p>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md py-4 transition-all duration-300">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 h-16 md:h-20 flex items-center relative w-36 md:w-56">
                        <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0 z-50">
                            <img
                                src={logoImg}
                                alt="Pure Magic"
                                className="h-12 sm:h-14 md:h-16 lg:h-[7rem] w-auto object-contain transition-all duration-300 origin-left hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Right Side Info (Desktop) */}
                    <div className="hidden lg:flex flex-col items-end gap-1 w-full ml-8">

                        {/* Top Row: Utility Links */}
                        <div className="flex items-center gap-6 text-xs md:text-sm text-gray-500 font-medium">
                            {utilityLinks.map((link, index) => (
                                <a key={index} href={link.href} className="hover:text-primary transition-colors flex items-center gap-1">
                                    {link.icon ? <link.icon size={18} /> : link.name}
                                </a>
                            ))}
                        </div>

                        {/* Bottom Row: Main Navigation + CTA */}
                        <div className="flex items-center gap-8 mt-2">

                            {/* Navigation Links */}
                            <div className="flex items-center gap-6">
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
                                                className="flex items-center gap-1 text-primary font-bold text-[15px] hover:text-primary-dark transition-colors py-2"
                                            >
                                                {link.name}
                                                <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="flex items-center gap-1 text-primary font-bold text-[15px] hover:text-primary-dark transition-colors py-2"
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
                                                            <a
                                                                key={i}
                                                                href="#"
                                                                className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-primary font-medium transition-colors"
                                                            >
                                                                {item}
                                                            </a>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Phone Number */}
                            <a href="tel:6177428080" className="flex items-center gap-2 text-primary font-medium text-lg hover:text-primary-dark transition-colors">
                                <Phone size={20} fill="currentColor" className="text-primary" />
                                <span>(617) 742-8080</span>
                            </a>

                            {/* CTA Button */}
                            <a
                                href="#"
                                className="bg-maid-green hover:bg-[#1f7d6d] text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-md transition-all transform hover:scale-105"
                            >
                                Book now
                            </a>

                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        <div className="flex flex-col p-4 space-y-4">
                            {/* Mobile Utility Links */}
                            <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-100 items-center">
                                {utilityLinks.map((link, idx) => (
                                    <a key={idx} href={link.href} className="text-xs text-gray-500 font-medium flex items-center gap-1">
                                        {link.icon ? <link.icon size={20} className="text-primary" /> : link.name}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile Main Links */}
                            <div className="space-y-2">
                                {mainLinks.map((link, idx) => (
                                    <div key={idx} className="border-b border-gray-50 last:border-none pb-2">
                                        {link.isDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="w-full flex justify-between items-center py-2 text-gray-800 font-bold text-base sm:text-lg"
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                {activeDropdown === link.name && (
                                                    <div className="pl-4 pb-2 space-y-2 text-gray-600">
                                                        {link.items.map((item, i) => (
                                                            <a key={i} href="#" className="block py-1 text-sm sm:text-base">{item}</a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link to={link.href} className="block py-2 text-gray-800 font-bold text-base sm:text-lg">
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="pt-4 flex flex-col gap-4">
                                <a href="tel:6177428080" className="flex items-center justify-center gap-2 text-primary font-bold text-lg sm:text-xl">
                                    <Phone size={22} className="sm:w-6 sm:h-6" /> (617) 742-8080
                                </a>
                                <a
                                    href="#"
                                    className="block w-full text-center bg-maid-green text-white py-3 sm:py-3.5 rounded-md font-bold text-base sm:text-lg shadow-md min-h-[44px]"
                                >
                                    Book now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
