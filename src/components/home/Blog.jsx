import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Calendar, ArrowRight, Sparkles, Zap, Leaf, Shield, Clock } from 'lucide-react';

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
        readTime: "5 min read",
        icon: Sparkles,
        category: "Cleaning Tips",
        slug: "kitchen-cleaning-hacks"
    },
    {
        id: 2,
        title: "Eco-Friendly Living",
        excerpt: "Learn how switching to green cleaning products can improve your home's air quality and protect your family.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 08, 2025",
        readTime: "4 min read",
        icon: Leaf,
        category: "Eco-Friendly",
        slug: "eco-friendly-living"
    },
    {
        id: 3,
        title: "Move-Out Checklist",
        excerpt: "Heading out? Follow our comprehensive guide to ensure you get your full bond back without the stress.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074&auto=format&fit=crop",
        date: "Sep 25, 2025",
        readTime: "6 min read",
        icon: Shield,
        category: "End of Lease",
        slug: "move-out-checklist"
    },
    {
        id: 4,
        title: "Commercial Excellence",
        excerpt: "Understanding the key differences between office and home cleaning needs for your business.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        date: "Sep 15, 2025",
        readTime: "5 min read",
        icon: Zap,
        category: "Industry News",
        slug: "commercial-excellence"
    }
];

const Blog = () => {
    const navigate = useNavigate();

    const handleReadMore = (slug) => {
        navigate(`/blog/${slug}`);
    };

    return (
        <section id="blog" className="py-12 bg-[#F8FAFC] relative overflow-hidden font-sans">
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* We need consistent random values to avoid hydration mismatch and lint errors */}
                <Bubbles />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-6"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Insights & Updates</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#001E6C] mb-6 tracking-tight">
                        Latest From <span className="text-primary">Our Blog</span>
                    </h2>
                    <p className="text-gray-500 text-lg sm:text-xl leading-relaxed">
                        Expert cleaning advice, pro tips, and company news to help you maintain a spotless environment.
                    </p>
                </div>

                <div className="max-w-[1200px] mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-16"
                    >
                        {blogPosts.map((post, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <Tilt
                                    tiltMaxAngleX={8}
                                    tiltMaxAngleY={8}
                                    scale={1.02}
                                    transitionSpeed={1000}
                                    className="h-full"
                                >
                                    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-soft hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                                        {/* Image Header */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Floating Category Badge */}
                                            <div className="absolute top-6 left-6 z-20">
                                                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                                                    <post.icon size={14} className="text-primary" />
                                                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest leading-none">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Wrapper */}
                                        <div className="flex-1 p-8 flex flex-col">
                                            {/* Metadata Row */}
                                            <div className="flex items-center gap-4 mb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={13} className="text-primary/60" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={13} className="text-primary/60" />
                                                    {post.readTime}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#001E6C] mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Footer Link */}
                                            <div className="mt-auto">
                                                <button
                                                    onClick={() => handleReadMore(post.slug)}
                                                    className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/link"
                                                >
                                                    <span className="relative">
                                                        Read Full Article
                                                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center transition-all group-hover/link:bg-primary group-hover/link:text-white group-hover/link:translate-x-1">
                                                        <ArrowRight size={16} />
                                                    </div>
                                                </button>
                                            </div>
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

const Bubbles = () => {
    const [bubbles, setBubbles] = React.useState([]);

    React.useEffect(() => {
        const generatedBubbles = [...Array(10)].map((_, i) => ({
            id: i,
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5
        }));
        setBubbles(generatedBubbles);
    }, []);

    if (bubbles.length === 0) return null;

    return (
        <>
            {bubbles.map((bubble) => (
                <motion.div
                    key={`bubble-${bubble.id}`}
                    className="absolute rounded-full bg-primary/5 backdrop-blur-3xl"
                    style={{
                        width: bubble.width,
                        height: bubble.height,
                        left: bubble.left,
                        top: bubble.top,
                    }}
                    animate={{
                        x: bubble.x,
                        y: bubble.y,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </>
    );
};

export default Blog;
