import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Calendar, Star, MapPin } from 'lucide-react';
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
            title: 'Trustworthy & Friendly Staff',
            color: '#8BC34A'
        },
        {
            icon: Calendar,
            title: 'You Choose The Schedule',
            color: '#FFC107'
        },
        {
            icon: Star,
            title: 'Only Trained Professionals',
            color: '#8BC34A'
        }
    ];

    const handleGetQuote = () => {
        navigate('/contact');
    };

    const handleFindLocation = () => {
        // Scroll to contact section or navigate to contact page
        navigate('/contact');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Blue Overlay to match the dusting page design */}
                    <div className="absolute inset-0 bg-[#5B8FA3]/85"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
                    {/* Service Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        {service.title}
                    </motion.h1>

                    {/* Service Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
                    >
                        {service.fullDescription}
                    </motion.p>

                    {/* Feature Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-white"
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3"
                                    style={{ backgroundColor: feature.color }}
                                >
                                    <feature.icon size={32} className="md:w-10 md:h-10" strokeWidth={2} />
                                </div>
                                <h3 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={handleGetQuote}
                            className="px-8 py-3.5 bg-[#9FC131] hover:bg-[#8AAD28] text-white font-bold text-base rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                        >
                            Get Quote
                        </button>
                        <button
                            onClick={handleFindLocation}
                            className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-[#5B8FA3] text-white font-bold text-base rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px] flex items-center justify-center gap-2"
                        >
                            <MapPin size={20} />
                            Find Location Near You
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features & Benefits Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0289D1] mb-6">
                                What's Included
                            </h2>
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#9FC131] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-base leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0289D1] mb-6">
                                Key Benefits
                            </h2>
                            <ul className="space-y-3">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#0289D1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-base leading-relaxed">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-[#0289D1] to-[#01568a]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                        Contact us today for a free quote and experience the difference of professional cleaning services.
                    </p>
                    <button
                        onClick={handleGetQuote}
                        className="px-10 py-4 bg-[#9FC131] hover:bg-[#8AAD28] text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Get Your Free Quote Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
