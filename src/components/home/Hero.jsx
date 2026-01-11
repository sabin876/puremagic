import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
            <div className="container-wrapper relative z-10 pt-2 md:pt-8 lg:pt-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto px-6"
                >
                    <h2 className="text-white font-bold tracking-[0.2em] uppercase mb-4 text-[10px] sm:text-sm md:text-base opacity-80">
                        Proudly Serving Canberra & All Surrounding Areas
                    </h2>
                    <h1 className="text-[2.2rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                        Professional Cleaning <br className="hidden sm:block" />
                        <span className="text-white">Services You Can Trust</span>
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-10 sm:mb-12 leading-relaxed max-w-sm sm:max-w-2xl mx-auto opacity-90 font-medium">
                        Over 18 years of experience delivering spotless results.
                        Reliable, affordable, and eco-friendly cleaning services.
                    </p>
                    <div className="flex justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="relative bg-[#1a8037] hover:bg-[#146c2e] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center gap-2 transition-all group overflow-hidden border-none"
                            >
                                {/* Animated Light Border Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full pb-[2px]"
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

                                {/* Inner Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

                                <span className="relative z-10">Book Now</span>
                                <ArrowRight size={20} className="relative z-10" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
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
