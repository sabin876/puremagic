import React from 'react';
import { Facebook, Instagram, Twitter, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo_white.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800/50 relative overflow-hidden">
            {/* Decorative top border gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-primary to-primary-light"></div>

            <div className="container-wrapper relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logoImg} alt="PureMagic" className="h-20 w-auto" />
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            Australia's most trusted cleaning service. We bring professional, eco-friendly, and reliable cleaning solutions to your doorstep.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Twitter size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-primary w-fit pb-2">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#home" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Services</a></li>
                            <li><a href="#reviews" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Get a Quote</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-primary w-fit pb-2">Our Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">House Cleaning</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">End of Lease</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Office Cleaning</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Deep Cleaning</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Carpet Cleaning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-primary w-fit pb-2">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>1300 000 000 (Mon-Fri)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>hello@puremagic.com.au</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>Sydney, NSW, Australia</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© {new Date().getFullYear()} PureMagic Cleaning Services. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
