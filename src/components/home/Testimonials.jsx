import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Arlene McCoy',
        role: 'Homeowner',
        content: '"Absolutely amazing service! The team arrived on time and left my house spotless. I’ve never seen my kitchen look this good. They paid attention to every little detail."',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'David Wilson',
        role: 'Business Owner',
        content: '"We hired PureMagic for our office cleaning and they exceeded expectations. Professional, thorough, and very reasonably priced. Highly recommended!"',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Emily Chen',
        role: 'Tenant',
        content: '"Got my full bond back thanks to their end of lease cleaning. They knew exactly what the real estate agents look for. Stress-free experience."',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Michael Brown',
        role: 'Property Manager',
        content: '"I manage multiple properties and PureMagic is my go-to. Reliable, consistent, and easy to communicate with. They make my job so much easier."',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'Jessica Lee',
        role: 'Start-up Founder',
        content: '"Our studio looks brand new every Monday morning. The team is trustworthy and invisible - they just get the work done without any hassle."',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Helper to get consistent 5 items for the "Curve" including wrap-around
    const getVisibleAvatars = () => {
        const count = testimonials.length;
        const avatars = [];
        // We want 2 before, current, and 2 after
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + count) % count;
            avatars.push({ ...testimonials[index], offset: i, originalIndex: index });
        }
        return avatars;
    };

    return (
        <section id="reviews" className="py-20 bg-white relative overflow-hidden font-sans">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-secondary/20 to-transparent -z-[0]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What our Customer say?</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Don't just take our word for it. Read what our Canberra clients have to say about our professional, reliable, and magic cleaning services.
                    </p>
                </div>

                {/* Avatar Slider Section */}
                <div className="relative h-[120px] md:h-[160px] flex items-center justify-center mb-8">
                    {/* Curve Line (Decorative) */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] -z-10 opacity-20 hidden md:block" viewBox="0 0 600 100" fill="none">
                        <path d="M0 100 Q 300 0 600 100" stroke="#0289D1" strokeWidth="2" />
                    </svg>

                    <div className="flex items-center justify-center relative w-full max-w-3xl mx-auto h-full">
                        {getVisibleAvatars().map((item) => {
                            const isCenter = item.offset === 0;
                            const yOffset = Math.abs(item.offset) * 20;
                            const scale = isCenter ? 1.3 : 1 - Math.abs(item.offset) * 0.15;
                            const opacity = isCenter ? 1 : 0.6 - Math.abs(item.offset) * 0.1;

                            return (
                                <motion.div
                                    key={`${item.id}-${item.offset}`}
                                    layout
                                    initial={false}
                                    className={`absolute cursor-pointer transition-all duration-300 rounded-full p-1 ${isCenter ? 'border-4 border-primary shadow-xl' : 'border border-transparent blur-[0.5px]'}`}
                                    animate={{
                                        y: yOffset,
                                        scale: scale,
                                        opacity: opacity,
                                        zIndex: isCenter ? 10 : 5 - Math.abs(item.offset),
                                        x: (typeof window !== 'undefined' && window.innerWidth < 768)
                                            ? item.offset * 40
                                            : item.offset * 60
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    onClick={() => handleDotClick(item.originalIndex)}
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-2 md:-translate-x-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors focus:outline-none"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-2 md:translate-x-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors focus:outline-none"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-[2rem] shadow-soft p-6 md:p-12 text-center"
                        >
                            <div className="flex flex-col items-center">
                                <h3 className="text-primary font-bold text-xl md:text-3xl mb-1">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-500 font-medium text-xs md:text-sm mb-4 md:mb-6">{testimonials[currentIndex].role}</p>

                                <p className="text-gray-600 leading-relaxed md:leading-8 text-sm md:text-lg max-w-2xl mx-auto">
                                    {testimonials[currentIndex].content}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
