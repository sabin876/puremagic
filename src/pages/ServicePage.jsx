import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Calendar, Star, MapPin, CheckCircle2, ShieldCheck, Zap, Clock, Sparkles, Trophy } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

const ServicePage = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = getServiceBySlug(serviceId);

    // If service not found, redirect to home
    if (!service) {
        navigate('/');
        return null;
    }

    const features = [
        {
            icon: Heart,
            title: 'Reliable Service',
            desc: 'Trusted by thousands of happy customers.',
            color: '#038fd4'
        },
        {
            icon: Calendar,
            title: 'Flexible Timing',
            desc: 'We work around your busy schedule.',
            color: '#4CAF50'
        },
        {
            icon: Star,
            title: 'Expert Quality',
            desc: 'Professionally trained and vetted staff.',
            color: '#FFC107'
        }
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Book Online',
            desc: 'Select your service and preferred time in just a few clicks.'
        },
        {
            number: '02',
            title: 'We Clean',
            desc: 'Our expert team arrives and delivers a professional-grade clean.'
        },
        {
            number: '03',
            title: 'Relax & Enjoy',
            desc: 'Step into your fresh, clean space and enjoy the result.'
        }
    ];

    const handleGetQuote = () => {
        navigate('/contact');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {/* Multi-layered Overlay for better depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>

                    {/* Particle Background */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <SparkleBackground />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-bold mb-6 tracking-widest uppercase border border-white/20">
                                <Sparkles size={14} className="text-yellow-400" />
                                Premium Services
                            </span>

                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[0.9]">
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h1>

                            <p className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-2xl mb-10 font-medium">
                                {service.shortDescription}
                            </p>

                            {/* Quick Stats/Features */}
                            <div className="flex flex-wrap gap-6 md:gap-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-3 text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <ShieldCheck className="text-green-400" size={20} />
                                    </div>
                                    <span className="text-sm md:text-base font-bold tracking-wide">Fully Insured</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-3 text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                                    </div>
                                    <span className="text-sm md:text-base font-bold tracking-wide">5-Star Rated</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center gap-3 text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Zap className="text-blue-400" size={20} />
                                    </div>
                                    <span className="text-sm md:text-base font-bold tracking-wide">Eco-Friendly</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                </motion.div>
            </section>

            {/* Content Deep Dive */}
            <section className="py-20 md:py-32 relative overflow-hidden bg-white">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-lg text-primary text-sm font-black mb-4 uppercase tracking-widest">
                                Excellence in cleaning
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-none">
                                Making Your Space <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Truly Magical</span>
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                                {service.fullDescription}
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((f, i) => (
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        key={i}
                                        className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 text-primary border border-gray-100">
                                            <f.icon size={24} style={{ color: f.color }} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-primary mb-1">{f.title}</h4>
                                            <p className="text-xs text-gray-500 leading-tight">{f.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Point Design: What's Included Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>

                            <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100/50 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <Sparkles size={28} />
                                    </div>
                                    <h4 className="text-3xl font-black text-primary tracking-tight">What's Included</h4>
                                </div>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid gap-3"
                                >
                                    {service.features.map((feature, index) => (
                                        <motion.li
                                            variants={itemVariants}
                                            key={index}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group/item"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover/item:scale-110 transition-transform">
                                                <CheckCircle2 size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700 font-bold text-sm md:text-base">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleGetQuote}
                                    className="w-full mt-10 py-5 bg-primary text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all"
                                >
                                    Book This Service Now
                                    <Zap size={20} className="fill-current text-yellow-400" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits & Process Section */}
            <section className="py-24 md:py-40 bg-primary relative overflow-hidden">
                {/* Decorative Canvas Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
                    <div className="absolute bottom-40 right-10 w-96 h-96 border border-white rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Process Steps */}
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-white/40 font-black tracking-widest text-sm uppercase mb-4">Our Methodology</h2>
                                <h3 className="text-4xl md:text-7xl font-black text-white mb-16 leading-tight">Fast, Simple <br />& Precise</h3>
                            </motion.div>

                            <div className="space-y-12">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        key={i}
                                        className="flex gap-8 group"
                                    >
                                        <div className="relative">
                                            <div className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-white transition-all duration-500 tabular-nums">
                                                {step.number}
                                            </div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                                        </div>
                                        <div className="pt-2 md:pt-4">
                                            <h4 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:translate-x-2 transition-transform">{step.title}</h4>
                                            <p className="text-white/60 text-lg leading-relaxed max-w-md">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.15)" }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        key={index}
                                        className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center mb-8 shadow-lg">
                                            <Trophy className="text-white" size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-white mb-4 leading-tight">{benefit}</h4>
                                        <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 md:py-40 bg-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/2 pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-50 text-green-600 rounded-full text-sm font-black mb-8 border border-green-100 uppercase tracking-widest">
                            <Clock size={16} />
                            Booking Available Today
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-primary mb-8 leading-[0.9] tracking-tighter">
                            Ready for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Pure Magic Touch?</span>
                        </h2>
                        <p className="text-gray-500 text-lg md:text-2xl mb-12 leading-relaxed font-medium">
                            Join over 500+ happy families who trust Pure Magic for their cleaning needs. Get a free, no-obligation quote in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleGetQuote}
                                className="px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl transition-all shadow-2xl shadow-primary/40 hover:bg-primary-dark"
                            >
                                Get Instant Quote
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="px-12 py-5 bg-white border-2 border-primary text-primary hover:bg-primary/5 font-black text-xl rounded-2xl transition-all"
                            >
                                Contact Support
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const SparkleBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-yellow-400 opacity-20"
                    initial={{
                        opacity: 0,
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 180],
                        y: [0, -100]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                >
                    <Sparkles size={Math.random() * 20 + 10} />
                </motion.div>
            ))}
        </div>
    );
};

export default ServicePage;

