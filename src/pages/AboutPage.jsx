import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Shield, UserCheck, Trophy } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const AboutPage = () => {
    const commitments = [
        {
            title: "We are Committed",
            description: "Dedicated to delivering exceptional cleaning results with every visit, ensuring your satisfaction is guaranteed.",
            icon: CheckCircle2,
            color: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            title: "Trusted Professionals",
            description: "Our team consists of highly trained and vetted cleaners who treat your home or office with the utmost respect.",
            icon: UserCheck,
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            title: "Highly Rated Cleaning",
            description: "Recognized as a leading cleaning service provider in Canberra with hundreds of five-star reviews.",
            icon: Trophy,
            color: "text-yellow-500",
            bgColor: "bg-yellow-50"
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-12">
            {/* Hero Section / Breadcrumb */}
            <div className="bg-secondary/30 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#001E6C] mb-4"
                    >
                        About <span className="text-primary">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Dedicated to providing the highest quality cleaning services since 2005.
                    </motion.p>
                </div>
            </div>

            {/* Main Content Section */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side: Overlapping Image Layout */}
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                {/* Main Image */}
                                <Tilt
                                    tiltMaxAngleX={5}
                                    tiltMaxAngleY={5}
                                    scale={1.02}
                                    className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1581578731522-632ee0434407?q=80&w=2070&auto=format&fit=crop"
                                        alt="Professional Cleaner"
                                        className="w-full aspect-[4/5] object-cover"
                                    />
                                </Tilt>

                                {/* Decorative Element */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10 animate-pulse"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-maid-green/10 rounded-full blur-[60px] -z-10 animate-delay-1000"></div>
                            </motion.div>

                            {/* Small Image Top Left */}
                            <motion.div
                                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute -top-6 -left-4 md:-top-12 md:-left-12 z-20 w-28 md:w-48 lg:w-56"
                            >
                                <Tilt
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    className="rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074&auto=format&fit=crop"
                                        alt="Cleaning Detail"
                                        className="w-full h-full object-cover"
                                    />
                                </Tilt>
                            </motion.div>

                            {/* Small Image Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-12 z-20 w-28 md:w-48 lg:w-56"
                            >
                                <Tilt
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    className="rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                                        alt="Kitchen Cleaning"
                                        className="w-full h-full object-cover"
                                    />
                                </Tilt>
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                                className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-8 z-40 bg-primary text-white p-4 md:p-6 rounded-3xl shadow-2xl text-center hidden sm:block"
                            >
                                <div className="text-4xl font-black mb-1">18+</div>
                                <div className="text-xs font-bold uppercase tracking-wider opacity-80 leading-tight">
                                    Years of <br /> Experience
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Content Section */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-6">
                                    <Sparkles size={14} className="animate-pulse" />
                                    <span>Who We Are</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#001E6C] mb-6 leading-tight">
                                    We Are Very Experienced <br />
                                    <span className="text-primary">In Cleaning Services</span>
                                </h2>

                                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                    Pure Magic Cleaning has been a leader in professional cleaning for over 18 years.
                                    We provide comprehensive cleaning solutions tailored to your unique Needs,
                                    ensuring a sparkling and healthy environment for your family or Business.
                                </p>

                                <div className="space-y-6">
                                    {commitments.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (index * 0.1) }}
                                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl border border-gray-100 ${item.bgColor} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                                                <item.icon className={`w-6 h-6 ${item.color}`} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#001E6C] mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-12"
                                >
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-3 px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-sm shadow-xl transition-all hover:-translate-y-1 active:scale-95 group"
                                    >
                                        Learn More About Us
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#001E6C] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2 text-primary">1500+</div>
                            <div className="text-sm font-bold uppercase tracking-widest opacity-60">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2 text-primary">18+</div>
                            <div className="text-sm font-bold uppercase tracking-widest opacity-60">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2 text-primary">50+</div>
                            <div className="text-sm font-bold uppercase tracking-widest opacity-60">Expert Staff</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2 text-primary">100%</div>
                            <div className="text-sm font-bold uppercase tracking-widest opacity-60">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section (Subtle) */}
            <div className="py-12 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">Trusted by families & businesses across Canberra</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        {/* Placeholder logos or icons */}
                        <div className="text-2xl font-black text-gray-500">HOMESTAY</div>
                        <div className="text-2xl font-black text-gray-500">CLEANCO</div>
                        <div className="text-2xl font-black text-gray-500">RESORTLY</div>
                        <div className="text-2xl font-black text-gray-500">HOTELIER</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple ArrowRight icon as it was not imported
const ArrowRight = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default AboutPage;
