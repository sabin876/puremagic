import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import heroBg from '../../assets/hero_bg_new.png';
import heroVideo from '../../assets/Untitled design.mp4';

const Hero = () => {
    const cleanerCards = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1581578731522-632ee0434407?q=80&w=2070&auto=format&fit=crop",
            alt: "Cleaning Professional 1",
            delay: 0.1,
            height: "h-[160px] md:h-[200px]"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074&auto=format&fit=crop",
            alt: "Cleaning Professional 2",
            delay: 0.3,
            height: "h-[190px] md:h-[240px]"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
            alt: "Cleaning Professional 3",
            delay: 0.5,
            height: "h-[220px] md:h-[280px]",
            isCentral: true
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            alt: "Cleaning Professional 4",
            delay: 0.3,
            height: "h-[190px] md:h-[240px]"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
            alt: "Cleaning Professional 5",
            delay: 0.1,
            height: "h-[160px] md:h-[200px]"
        }
    ];

    return (
        <section id="home" className="relative min-h-[700px] md:min-h-screen flex flex-col justify-start overflow-hidden bg-zinc-950 pt-10 sm:pt-14 md:pt-20">
            {/* Full Video Background Section */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroBg}
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            </div>

            {/* Main Content */}
            <div className="container-wrapper relative z-10 pt-10 md:pt-24 lg:pt-32 pb-40 md:pb-64 lg:pb-80 text-center">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Main Headline with Staggered Animation */}
                    <h1 className="text-[1.8rem] xs:text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6 sm:mb-8 tracking-tight max-w-[320px] sm:max-w-none mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block"
                        >
                            Professional
                        </motion.span>{' '}
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="inline-block"
                        >
                            Cleaning
                        </motion.span>{' '}
                        <br className="hidden md:block" />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-[#2d8a63] inline-block relative"
                        >
                            <span className="relative z-10">Services in Australia</span>
                            {/* Shimmer Effect */}
                            <motion.span
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    duration: 2,
                                    delay: 1.2,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                style={{ width: '50%' }}
                            />
                        </motion.span>
                    </h1>

                    {/* Subheadline with Letter-by-Letter Animation */}
                    <motion.h2
                        initial={{ opacity: 0, letterSpacing: '0.5em' }}
                        animate={{ opacity: 0.95, letterSpacing: '0.2em' }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-white font-bold uppercase mb-6 text-[9px] xs:text-[11px] sm:text-sm md:text-base sm:max-w-none mx-auto leading-relaxed whitespace-nowrap"
                    >
                        BEYOND CLEAN, BEYOND EXPECTATIONS
                    </motion.h2>

                    {/* Description with Blur Fade-in */}
                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 0.9, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-xs sm:text-lg md:text-xl text-gray-100 mb-10 sm:mb-12 leading-relaxed max-w-[280px] sm:max-w-2xl mx-auto font-medium"
                    >
                        Trusted by hundreds of satisfied customers across Australia. Professional cleaners offering house cleaning, commercial cleaning, carpet cleaning, and couch cleaning services.
                    </motion.p>

                    {/* Buttons with Enhanced Entrance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
                    >
                        {/* View All Services (Outline) */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                to="/services"
                                className="inline-flex w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg justify-center items-center gap-2 transition-all"
                            >
                                <span>View All Services</span>
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        {/* Get Free Quote (Theme Blue) */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(3,143,212,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl justify-center items-center gap-2 transition-all"
                            >
                                <span>Get Free Quote</span>
                                <Calendar size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Arched Professional Cards Section - Flat Background */}
            <div className="absolute bottom-0 left-0 w-full z-20 pb-6 md:pb-10 flex justify-center items-end gap-1.5 md:gap-4 lg:gap-6 px-4">
                {cleanerCards.map((card) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
                        className={`${card.height} w-[18%] md:w-[160px] lg:w-[190px] min-w-[50px] rounded-[1.25rem] md:rounded-[2rem] border-[3px] md:border-[6px] lg:border-[8px] border-white/90 shadow-2xl overflow-hidden relative group`}
                        style={{
                            zIndex: card.isCentral ? 30 : 20,
                            marginBottom: card.isCentral ? '0' : '15px'
                        }}
                    >
                        <img
                            src={card.image}
                            alt={card.alt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
