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
        color: "text-blue-400"
    },
    {
        icon: Baby,
        title: "Child-Safe",
        subtitle: "products",
        color: "text-blue-400"
    },
    {
        icon: Dog,
        title: "Pet-Friendly",
        subtitle: "PRODUCTS",
        color: "text-blue-400"
    },
    {
        icon: FlaskRound,
        title: "Bio",
        subtitle: "DETERGENTS",
        color: "text-blue-400"
    },
    {
        icon: Wind,
        title: "Asthma Safe",
        subtitle: "",
        color: "text-blue-400"
    },
    {
        icon: Globe,
        title: "CLEAN",
        subtitle: "GREEN PLANET",
        color: "text-blue-400"
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

const OurDifference = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6"
                    >
                        We care about your health!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Here at Pure Magic we use environmentally friendly cleaning products, which have been tested for their child and pet safety, call us for get best home cleaning service Sydney NSW, Book now
                    </motion.p>
                </div>

                {/* Features Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
                    {healthFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                <feature.icon className={`w-16 h-16 ${feature.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className={`font-bold text-lg ${feature.color} mb-1 max-w-[120px]`}>
                                {feature.title}
                            </h3>
                            {feature.subtitle && (
                                <p className="text-sm text-blue-300 font-medium uppercase tracking-wide max-w-[120px]">
                                    {feature.subtitle}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className={`flex flex-col items-center text-center ${index !== stats.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                                } px-4`}
                        >
                            <h3 className="text-4xl font-bold text-[#0f172a] mb-4">
                                {stat.number}
                            </h3>
                            <p className="text-gray-600 font-medium leading-normal max-w-[250px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurDifference;
