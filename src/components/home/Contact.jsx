import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container-wrapper relative z-10">
                {/* Header Section with Background */}
                <div className="relative mb-8 md:mb-16 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-20 md:py-24 overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-100/50 to-secondary/20" />

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl" />

                    {/* Content */}
                    <div className="text-center max-w-2xl mx-auto relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
                        >
                            GET IN TOUCH
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            We're Here for You
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-base sm:text-lg"
                        >
                            Whether you need a quote or have a question about our cleaning services, reach out to us.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Phone */}
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                                    <p className="text-primary font-semibold text-base">(617) 742-8080</p>
                                    <p className="text-sm text-gray-500 mt-0.5">Available 24/7 for you</p>
                                </div>
                            </div>
                        </Tilt>

                        {/* Email */}
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                                    <p className="text-primary font-semibold text-base">info@puremagic.com.au</p>
                                    <p className="text-sm text-gray-500 mt-0.5">Online support available</p>
                                </div>
                            </div>
                        </Tilt>

                        {/* Location */}
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                                    <p className="text-gray-700 font-medium text-base">Serving all of Canberra</p>
                                    <p className="text-sm text-gray-500 mt-0.5">ACT, Australia</p>
                                </div>
                            </div>
                        </Tilt>

                        {/* Connect with Us */}
                        <div className="pt-4">
                            <h4 className="font-bold text-gray-900 text-lg mb-4">Connect with Us</h4>
                            <div className="flex items-center gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Twitter size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

                        <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Send Us a Message</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Post Code</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                                    placeholder="2600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                                    placeholder="(617) 742-8080"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="commercial-cleaning">Commercial Cleaning</option>
                                    <option value="bnb-cleaning">BnB Cleaning</option>
                                    <option value="end-of-lease">End of Lease Cleaning</option>
                                    <option value="pressure-wash">Pressure Washing</option>
                                    <option value="strip-and-seal">Strip and Seal</option>
                                    <option value="lawn-mowing">Lawn Mowing</option>
                                    <option value="window-cleaning">Window Cleaning</option>
                                    <option value="floor-scrubbing">Floor Scrubbing</option>
                                    <option value="carpet-cleaning">Carpet Cleaning</option>
                                    <option value="rubbish-removal">Rubbish Removal</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md min-h-[48px] flex items-center justify-center gap-2"
                        >
                            <Send size={20} />
                            Send Message
                        </button>
                    </motion.form>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104278.43129592658!2d149.01254388657497!3d35.28131349942485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164a69b0db375d%3A0x500ea6ea441ab30!2sCanberra%20ACT%2C%20Australia!5e0!3m2!1sen!2s!4v1715433445678!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;

