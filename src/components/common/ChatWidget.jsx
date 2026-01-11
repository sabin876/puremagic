import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Minus } from 'lucide-react';
import { getAllServices } from '../../data/servicesData';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm the Pure Magic Assistant. Ask me about our services, pricing, or contact info!", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const services = getAllServices();

    const companyData = {
        phone: "(617) 742-8080",
        email: "info@puremagic.com.au",
        location: "Canberra, ACT, Australia",
        hours: "Available 24/7 for you",
        servicesList: services.map(s => s.title).join(", "),
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMsg.text);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (text) => {
        const lowerText = text.toLowerCase();

        // Contact Info
        if (lowerText.includes('phone') || lowerText.includes('call') || lowerText.includes('number')) {
            return `You can reach us at ${companyData.phone}. We're available 24/7! 📞`;
        }
        if (lowerText.includes('email') || lowerText.includes('mail')) {
            return `You can email us at ${companyData.email}. 📧`;
        }
        if (lowerText.includes('location') || lowerText.includes('address') || lowerText.includes('where')) {
            return `We are located in ${companyData.location} and serve the entire region. 📍`;
        }

        // Services
        if (lowerText.includes('service') || lowerText.includes('offer') || lowerText.includes('do you do')) {
            return `We offer a wide range of professional cleaning services, including: ${companyData.servicesList}. Which one are you interested in?`;
        }

        // Specific Services (Dynamic Check)
        const matchedService = services.find(s => lowerText.includes(s.title.toLowerCase()) || lowerText.includes(s.slug.replace('-', ' ')));
        if (matchedService) {
            return `${matchedService.title}: ${matchedService.shortDescription} Would you like to book this service?`;
        }

        // Pricing/Booking
        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote') || lowerText.includes('book')) {
            return "We offer competitive custom quotes based on your specific needs. Please visit our Contact page to get a free quote or book a service! 💼";
        }

        // Greetings
        if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
            return "Hello! Ready to experience the Pure Magic clean? ✨ How can I help you today?";
        }

        // Default
        return "Thanks for your message! Detailed inquiries are best handled by our team. Please call us at (617) 742-8080 or use the Contact form.";
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 bg-primary text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center group"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-40 right-4 sm:bottom-44 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 font-sans flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Pure Magic Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        <span className="text-xs opacity-90">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                            >
                                <Minus size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-[300px]">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-primary text-white rounded-tr-none'
                                                : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 shrink-0">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-gray-50 text-gray-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 border border-transparent focus:border-primary transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="p-2.5 bg-primary text-white rounded-full hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform duration-200"
                                >
                                    <Send size={18} className={inputText.trim() ? "translate-x-0.5" : ""} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-gray-400">Powered by Pure Magic AI</span>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
