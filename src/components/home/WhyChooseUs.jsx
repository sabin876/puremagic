import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Provide All Details',
        description: 'Choose from a variety of services, such as deep cleaning, regular maintenance, move-in/move-out cleaning.'
    },
    {
        number: '02',
        title: 'Schedule Your Service',
        description: 'Choose a convenient date and time for your cleaning. Allowing you to select the best time for your schedule.'
    },
    {
        number: '03',
        title: 'Satisfaction',
        description: 'Our professional cleaners will arrive on time and provide exceptional service, leaving your home clean and ready.'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden font-sans">
            <div className="container-wrapper">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Get <span className="text-maid-green">amazing cleaning</span> in 3 <br className="hidden md:block" /> simple steps
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Discover how easy it is to transform your space. Our seamless process ensures professional results tailored to your schedule and preferences.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full max-w-lg mx-auto lg:max-w-none"
                    >
                        {/* Background Decor: Blue Star Top Left */}
                        <div className="absolute -top-6 -left-6 text-primary z-0 hidden md:block">
                            <Star size={60} fill="currentColor" className="text-primary rotate-12" />
                        </div>

                        {/* Image 1 (Back/Top) */}
                        <div className="absolute top-0 right-10 w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661695562703-9d936181f0bd?q=80&w=1932&auto=format&fit=crop"
                                alt="Cleaning Woman"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 2 (Front/Bottom) */}
                        <div className="absolute bottom-0 left-4 w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20">
                            <img
                                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop"
                                alt="Cleaning Tools"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Bottom shape */}
                        <div className="absolute -bottom-4 -left-4 text-primary z-30">
                            <Star size={40} fill="currentColor" className="text-primary rotate-45" />
                        </div>
                    </motion.div>

                    {/* Right Column: Steps Timeline */}
                    <div className="relative">
                        {/* Vertical Dashed Line */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-primary/30 hidden md:block"></div>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                                >
                                    {/* Number Circle */}
                                    <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/20 bg-white flex items-center justify-center shadow-sm">
                                        <span className="text-primary font-bold text-base sm:text-lg">{step.number}</span>
                                        {/* Inner Ring effect */}
                                        <div className="absolute inset-1 rounded-full border border-primary/10"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-primary text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
