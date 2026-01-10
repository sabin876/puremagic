import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const blogPosts = [
    {
        id: 1,
        title: "Kitchen Cleaning Hacks",
        excerpt: "Discover the secret hacks professional cleaners use to keep kitchens grease-free and shining every day.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 12, 2025",
        author: "Admin",
        category: "CLEANING TIPS"
    },
    {
        id: 2,
        title: "Eco-Friendly Living",
        excerpt: "Learn how switching to green cleaning products can improve your home's air quality and protect your family.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 08, 2025",
        author: "Admin",
        category: "ECO-FRIENDLY"
    },
    {
        id: 3,
        title: "Move-Out Checklist",
        excerpt: "Heading out? Follow our comprehensive guide to ensure you get your full bond back without the stress.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074&auto=format&fit=crop",
        date: "Sep 25, 2025",
        author: "Admin",
        category: "END OF LEASE"
    },
    {
        id: 4,
        title: "Commercial Excellence",
        excerpt: "Understanding the key differences between office and home cleaning needs for your business.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        date: "Sep 15, 2025",
        author: "Admin",
        category: "INDUSTRY NEWS"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-[#F8F9FA] relative overflow-hidden font-sans text-[#333]">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-8 tracking-tight">
                        Our Blog
                    </h2>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto px-4 uppercase tracking-[0.1em] font-medium opacity-80">
                        Stay updated with our latest cleaning tips, eco-friendly hacks, and company news. Our cleaning service provides specialized solutions for homes and businesses.
                    </p>
                </div>

                {/* Vertical Blog Cards */}
                <div className="max-w-[1400px] mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        className="pb-16 h-[450px] md:h-[550px]"
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id} className="w-[300px] md:w-[400px] h-full">
                                <motion.div
                                    className="relative w-full h-full rounded-[1.5rem] overflow-hidden group shadow-xl cursor-pointer bg-white"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500"></div>
                                    </div>

                                    {/* Sideways Text - Adjusted for shorter height */}
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 origin-left -rotate-90 select-none pointer-events-none z-20">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-[0.12em] whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                                {post.category}
                                            </h3>
                                            <div className="w-8 h-[2px] bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    </div>

                                    {/* Card Content on Hover */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-30">
                                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <div className="flex items-center gap-2 mb-3 text-white/70 text-[9px] font-bold uppercase tracking-widest">
                                                <Calendar size={10} className="text-primary" />
                                                {post.date}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-wide">{post.title}</h4>
                                            <p className="text-gray-300 text-[11px] md:text-xs mb-6 leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <button className="px-6 py-2.5 bg-white text-dark text-[9px] font-bold rounded-full hover:bg-primary hover:text-white transition-all uppercase tracking-widest shadow-lg flex items-center gap-2">
                                                Read More <ArrowRight size={12} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Simple Label (Static) */}
                                    <div className="absolute bottom-8 left-8 right-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-8 h-1 bg-white mb-3"></div>
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wider line-clamp-1">{post.title}</h4>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Blog;
