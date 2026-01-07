import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Home, Sparkles, Building2, Droplets, Wrench, PaintBucket, ArrowRight, Star, Disc, Scissors, Sun, Sofa, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import endLeaseImg from '../../assets/end laser.jpg';
import lawnMovingImg from '../../assets/lawan moving.jpg';
import floorScrubbingImg from '../../assets/floor scurbing.jpg';
import pressureWashImg from '../../assets/pressure wash.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const services = [
    {
        icon: Building2,
        title: 'Commercial Cleaning',
        description: 'Professional cleaning solutions for offices and commercial spaces to maintain a pristine business environment.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
        icon: Home,
        title: 'BnB Cleaning',
        description: 'Fast and thorough turnover cleaning for Airbnb and vacation rentals to ensure 5-star guest reviews.',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop'
    },
    {
        icon: Sparkles,
        title: 'End of Lease',
        description: 'Comprehensive bond cleaning services to help you secure your deposit back, guaranteed.',
        image: endLeaseImg
    },
    {
        icon: Droplets,
        title: 'Pressure Wash',
        description: 'High-power pressure washing to remove grime from driveways, patios, and exterior walls.',
        image: pressureWashImg
    },
    {
        icon: PaintBucket,
        title: 'Strip and Seal',
        description: 'Expert floor stripping and sealing to restore the shine and protect your vinyl or hard floors.',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop'
    },
    {
        icon: Scissors,
        title: 'Lawn Mowing',
        description: 'Professional lawn care and mowing services to keep your garden looking neat and tidy.',
        image: lawnMovingImg
    },
    {
        icon: Sun,
        title: 'Window Cleaning',
        description: 'Streak-free window cleaning for crystal clear views, suitable for both residential and commercial.',
        image: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2076&auto=format&fit=crop'
    },
    {
        icon: Disc,
        title: 'Floor Scrubbing',
        description: 'Deep mechanical scrubbing for warehouses and large floor areas to remove heavy chemical and oil buildup.',
        image: floorScrubbingImg
    },
    {
        icon: Sofa,
        title: 'Carpet Cleaning',
        description: 'Professional carpet and upholstery cleaning to remove stains, odors, and allergens for a fresh home.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
    },
    {
        icon: Trash2,
        title: 'Rubbish Removal',
        description: 'Efficient waste and rubbish removal services for homes, offices, and construction sites.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-12 bg-black/10 relative overflow-hidden font-sans">

            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Bubbles - Made more visible */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`bubble-${i}`}
                        className="absolute rounded-full bg-blue-400/30 backdrop-blur-sm border-2 border-white/60 shadow-sm"
                        style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                            left: `${Math.random() * 100}%`,
                            bottom: -100
                        }}
                        animate={{
                            y: [0, -1000],
                            x: [0, Math.random() * 100 - 50],
                            opacity: [0, 1, 0], // Fully visible at peak
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Sparkling Stars - Made larger and brighter */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute text-blue-500/60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1.5, 0], // Larger scale pulse
                            opacity: [0, 1, 0],
                            rotate: [0, 180]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    >
                        <Sparkles size={Math.random() * 30 + 15} fill="currentColor" />
                    </motion.div>
                ))}
            </div>


            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#023e8a] mb-6 relative inline-block">
                        Our Services
                        <motion.div
                            className="absolute -top-6 -right-8 text-yellow-400"
                            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Sparkles size={32} fill="currentColor" />
                        </motion.div>
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg">
                        We provide a wide range of cleaning solutions for every need.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-16"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-auto py-10"> {/* py-10 to allow hover lift */}
                                <Tilt
                                    tiltMaxAngleX={5}
                                    tiltMaxAngleY={5}
                                    scale={1.02}
                                    transitionSpeed={400}
                                    className="h-full"
                                    glareEnable={true}
                                    glareMaxOpacity={0.3}
                                    glarePosition="all"
                                    glareBorderRadius="0.5rem"
                                >
                                    <div className="relative bg-white shadow-xl shadow-gray-200/60 rounded-xl overflow-hidden flex flex-col h-full group border border-gray-100/50">
                                        {/* Top Image Section */}
                                        <div className="h-40 sm:h-44 md:h-48 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-[1.5s] ease-out"
                                            />
                                            {/* Flash effect on hover */}
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className={`flex-1 relative pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-7 md:pb-8 px-4 sm:px-5 text-center flex flex-col items-center ${service.active ? 'bg-[#E1F5FE]/30' : 'bg-white'}`}>

                                            {/* Notch (SVG) */}
                                            <div className="absolute -top-[29px] left-0 w-full h-[30px] z-20 overflow-hidden">
                                                <svg viewBox="0 0 100 100" className="w-full h-full fill-white" preserveAspectRatio="none">
                                                    {/* Triangle Point Up */}
                                                    <path d="M0,100 L50,0 L100,100 Z" className={`${service.active ? 'fill-[#E1F5FE]/30' : 'fill-white'}`} />
                                                </svg>
                                            </div>

                                            {/* Icon with Ring Animation */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30">
                                                <div className="relative">
                                                    {/* Pulsing Ring */}
                                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>

                                                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-white border-[3px] border-[#0289D1] flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300">
                                                        <service.icon size={28} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0289D1] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" strokeWidth={1.5} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <h4 className="text-base sm:text-lg font-extrabold text-[#001E6C] mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs mx-auto line-clamp-3">
                                                {service.description}
                                            </p>

                                            {/* Interactive Button */}
                                            <button className="mt-auto px-5 sm:px-6 py-2 sm:py-2.5 bg-[#0289D1] hover:bg-[#0277bd] text-white text-xs sm:text-sm font-bold rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-1.5 min-h-[40px]">
                                                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </Tilt>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Services;
