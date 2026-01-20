import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Mail, Phone, FileText, Minus } from 'lucide-react';
import VacuumIcon from './VacuumIcon';


const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    },
    exit: { opacity: 0, scale: 0.95, y: 30, transition: { duration: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const ContactFormWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        alert("Message sent! We'll get back to you soon.");
        setIsOpen(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed z-[60] bg-primary text-white shadow-xl hover:bg-primary-dark transition-colors flex items-center justify-center group
                    ${isOpen ? 'hidden sm:flex' : 'flex'}
                    bottom-28 right-4 p-4
                    sm:bottom-28 sm:right-8 sm:p-5
                    rounded-full`}
                style={{ boxShadow: "0 4px 15px rgba(3, 143, 212, 0.3)" }}
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        transition={{ delay: 1, type: "spring", stiffness: 200 }}
                        className="fixed bottom-[173px] right-[75px] sm:bottom-[175px] sm:right-28 bg-white text-primary px-5 py-2.5 rounded-xl shadow-lg border border-gray-100 z-50 flex items-center gap-2 pointer-events-none origin-right"
                    >
                        <span className="text-sm font-bold whitespace-nowrap">Contact Us</span>
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent drop-shadow-sm" />
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Contact Form Window */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 z-[99] sm:hidden backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className={`fixed z-[100] bg-white overflow-hidden border border-gray-100 font-sans flex flex-col shadow-2xl
                                top-24 left-4 right-4 sm:top-auto h-auto max-h-[85vh] sm:h-auto rounded-[2.5rem] sm:rounded-[2rem]
                                sm:bottom-44 sm:right-8 sm:left-auto sm:w-[350px] sm:max-h-[85vh] ring-1 ring-black/5`}
                        >
                            {/* Header Section - Matched to Reference */}
                            <div className="bg-primary-dark p-4 flex justify-between items-center relative overflow-hidden shrink-0">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 overflow-hidden shrink-0">
                                        <div className="flex flex-col items-center justify-center leading-none">
                                            <div className="flex items-center">
                                                <span className="text-[#038fd4] font-extrabold text-[10px] sm:text-xs tracking-tighter">Pure</span>
                                                <div className="flex items-baseline ml-[1px]">
                                                    <span className="text-[#038fd4] font-extrabold text-[10px] sm:text-xs tracking-tighter">M</span>
                                                    <VacuumIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#038fd4] self-end mb-0.5" />
                                                    <span className="text-[#038fd4] font-extrabold text-[10px] sm:text-xs tracking-tighter">gic</span>
                                                </div>
                                            </div>
                                            <span className="text-[#038fd4] font-bold text-[4px] sm:text-[5px] tracking-wider">SERVICES</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm sm:text-base leading-tight">Pure Magic Services</h3>
                                        <p className="text-white/90 text-[10px] sm:text-xs font-medium">We're here to help!</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-full transition-all border border-white/10"
                                >
                                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6">
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1">Name *</label>
                                        <input
                                            type="text"
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-5 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 text-sm placeholder:text-gray-400"
                                            placeholder="Your full name"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-5 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 text-sm placeholder:text-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-5 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 text-sm placeholder:text-gray-400"
                                            placeholder="+61 4XX XXX XXX"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1">Subject *</label>
                                        <input
                                            type="text"
                                            required
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-5 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 text-sm placeholder:text-gray-400"
                                            placeholder="What can we help you with?"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
                                        <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1">Message *</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 text-sm placeholder:text-gray-400 resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        ></textarea>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="pt-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02, translateY: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full bg-primary-dark hover:bg-primary text-white font-black py-3.5 sm:py-4.5 rounded-[1.2rem] sm:rounded-[1.5rem] shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-sm sm:text-base"
                                        >
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                            Send Message
                                        </motion.button>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactFormWidget;
