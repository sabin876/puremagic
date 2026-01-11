import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Tilt from 'react-parallax-tilt';
import {
    Leaf,
    Users,
    ShieldCheck,
    Globe,
    Clock,
    Sparkles,
    ThumbsUp,
    Zap,
    ChevronLeft,
    ChevronRight,
    Sparkle
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const differences = [
    {
        icon: Leaf,
        title: "Sustainable Ops",
        description: "Eco-friendly products & responsible waste management for a greener future.",
        color: "from-green-400 to-emerald-600",
        shadow: "shadow-green-200/50",
        glow: "rgba(34, 197, 94, 0.15)"
    },
    {
        icon: Users,
        title: "People First",
        description: "Experienced, vetted, and passionate cleaning professionals you can trust.",
        color: "from-blue-400 to-indigo-600",
        shadow: "shadow-blue-200/50",
        glow: "rgba(59, 130, 246, 0.15)"
    },
    {
        icon: ShieldCheck,
        title: "Compliance Ready",
        description: "Fully insured and NDIS registered provider meeting all safety standards.",
        color: "from-purple-400 to-violet-600",
        shadow: "shadow-purple-200/50",
        glow: "rgba(168, 85, 247, 0.15)"
    },
    {
        icon: Globe,
        title: "National Quality",
        description: "Providing premium Australian standards with personalized local care.",
        color: "from-orange-400 to-red-600",
        shadow: "shadow-orange-200/50",
        glow: "rgba(249, 115, 22, 0.15)"
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Always available for your cleaning needs, day or night, every single day.",
        color: "from-rose-400 to-red-700",
        shadow: "shadow-red-200/50",
        glow: "rgba(244, 63, 94, 0.15)"
    },
    {
        icon: Sparkles,
        title: "Pure Spaces",
        description: "Where hygiene meets a magical touch, leaving your space crystal clean.",
        color: "from-cyan-400 to-blue-600",
        shadow: "shadow-cyan-200/50",
        glow: "rgba(6, 182, 212, 0.15)"
    },
    {
        icon: ThumbsUp,
        title: "Real Results",
        description: "100% satisfaction guarantee with visible, long-lasting cleaning impact.",
        color: "from-indigo-400 to-blue-700",
        shadow: "shadow-indigo-200/50",
        glow: "rgba(79, 70, 229, 0.15)"
    },
    {
        icon: Zap,
        title: "Smart Tech",
        description: "Easy online booking and real-time updates for a seamless experience.",
        color: "from-yellow-400 to-amber-600",
        shadow: "shadow-amber-200/50",
        glow: "rgba(245, 158, 11, 0.15)"
    }
];

const OurDifference = () => {
    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden font-sans">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-maid-green/10 rounded-full blur-[120px] opacity-60"
            />

            <div className="container-wrapper relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, cubicBezier: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6"
                        >
                            <Sparkle size={16} className="text-primary animate-pulse" />
                            The Pure Magic Way
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                            Our Difference, <span className="relative">
                                <span className="relative z-10 text-primary">at a Glance</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute bottom-2 left-0 h-4 bg-primary/10 -z-0"
                                />
                            </span>
                        </h2>
                        <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto">
                            Powered by people. Enabled by technology. Committed to excellence.
                            Discover why we're the gold standard in professional cleaning.
                        </p>
                    </motion.div>
                </div>

                <div className="relative group px-4 md:px-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        grabCursor={true}
                        centeredSlides={false}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="!pb-20 !pt-4"
                    >
                        {differences.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <Tilt
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    perspective={1000}
                                    scale={1.02}
                                    transitionSpeed={1500}
                                    className="h-full"
                                >
                                    <div
                                        className={`relative h-full bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 shadow-2xl ${item.shadow} group/card transition-all duration-500 overflow-hidden flex flex-col items-center text-center`}
                                        style={{
                                            '--glow-color': item.glow
                                        }}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--glow-color)_0%,transparent_70%)] pointer-events-none" />

                                        {/* Decorative Border Gradient */}
                                        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-80" style={{ background: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }} />

                                        <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover/card:rotate-6 transition-transform duration-500`}>
                                            <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                        </div>

                                        <h3 className="relative z-10 text-2xl font-extrabold text-gray-900 mb-5 group-hover/card:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        <p className="relative z-10 text-gray-500 leading-relaxed font-medium">
                                            {item.description}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-6 w-12 h-1 bg-gray-100 rounded-full group-hover/card:w-20 group-hover/card:bg-primary/30 transition-all duration-500" />
                                    </div>
                                </Tilt>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Enhanced Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-2 border border-white/50">
                        <ChevronLeft size={28} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-[-8px] border border-white/50">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            <style>{`
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    width: 32px;
                    border-radius: 6px;
                    background: var(--maid-green, #269581) !important;
                }
            `}</style>
        </section>
    );
};

export default OurDifference;
