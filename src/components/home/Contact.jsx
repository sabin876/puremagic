import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container-wrapper relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-wide uppercase text-sm mb-2"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Book Your Clean Today
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg"
                    >
                        Ready to experience the PureMagic difference? Fill out the form below or reach out directly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                                    <p className="text-gray-600 font-medium">+61 (555) 123-4567</p>
                                    <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                                    <p className="text-gray-600 font-medium">hello@puremagic.com.au</p>
                                    <p className="text-sm text-gray-500">Online support 24/7</p>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                                    <p className="text-gray-600 font-medium">Melbourne, VIC</p>
                                    <p className="text-sm text-gray-500">Serving Greater Melbourne Area</p>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="+61 ..." />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white appearance-none">
                                    <option>Commercial Cleaning</option>
                                    <option>BnB Cleaning</option>
                                    <option>End of Lease</option>
                                    <option>Pressure Wash</option>
                                    <option>Strip and Seal</option>
                                    <option>Lawn Mowing</option>
                                    <option>Window Cleaning</option>
                                    <option>Floor Scrubbing</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us about your cleaning needs..."></textarea>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md">
                            Send Message
                        </button>
                    </motion.form>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1647915570087!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
