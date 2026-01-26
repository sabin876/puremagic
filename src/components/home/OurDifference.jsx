import React from 'react';
import { motion } from 'framer-motion';
import {
    Leaf,
    Baby,
    Dog,
    FlaskRound,
    Wind,
    Globe,
    Check
} from 'lucide-react';

const healthFeatures = [
    {
        icon: Leaf,
        title: "ECO-FRIENDLY",
        subtitle: "products & procedures",
        color: "text-primary"
    },
    {
        icon: Baby,
        title: "Child-Safe",
        subtitle: "products",
        color: "text-maid-green"
    },
    {
        icon: Dog,
        title: "Pet-Friendly",
        subtitle: "PRODUCTS",
        color: "text-primary"
    },
    {
        icon: FlaskRound,
        title: "Bio",
        subtitle: "DETERGENTS",
        color: "text-maid-green"
    },
    {
        icon: Wind,
        title: "Asthma Safe",
        subtitle: "",
        color: "text-primary"
    },
    {
        icon: Globe,
        title: "CLEAN",
        subtitle: "GREEN PLANET",
        color: "text-maid-green"
    }
];

const stats = [
    {
        number: "1000+",
        label: "Homes and offices professionally cleaned every month"
    },
    {
        number: "20,000+",
        label: "Happy customers served across Sydney"
    },
    {
        number: "120+",
        label: "Vetted and experienced cleaning specialists"
    },
    {
        number: "20+",
        label: "Tailored cleaning services to suit every need"
    }
];

const Counter = ({ value }) => {
    const [count, setCount] = React.useState(0);
    const target = parseInt(value.replace(/[,+]/g, ''));
    const suffix = value.match(/[,+]/g)?.join('') || '';
    const nodeRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <span ref={nodeRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const OurDifference = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
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
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-4">
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                            Our Commitment
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] mb-8 leading-tight"
                    >
                        We care about your <span className="text-primary italic">health!</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                    >
                        Here at <span className="text-primary font-semibold">Pure Magic</span> we use environmentally friendly cleaning products, which have been tested for their child and pet safety. Get the best home cleaning service in Sydney NSW.
                    </motion.p>
                </motion.div>

                {/* Features Icons Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24"
                >
                    {healthFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-6 rounded-2xl bg-gray-50 group-hover:bg-primary/5 transition-colors duration-500 transform group-hover:-translate-y-2">
                                <feature.icon className={`w-12 h-12 ${feature.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-1">
                                {feature.title}
                            </h3>
                            {feature.subtitle && (
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                                    {feature.subtitle}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 bg-slate-50 rounded-[3rem] p-12 lg:p-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center px-4 relative"
                        >
                            <h3 className="text-5xl font-black text-primary mb-4 tabular-nums">
                                <Counter value={stat.number} />
                            </h3>
                            <p className="text-slate-600 font-medium leading-relaxed max-w-[200px]">
                                {stat.label}
                            </p>
                            {index !== stats.length - 1 && (
                                <div className="hidden lg:block absolute right-[-1px] top-1/4 bottom-1/4 w-[1px] bg-slate-200" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default OurDifference;
