import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sparkle = ({ size, color, delay }) => (
    <motion.svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute pointer-events-none"
        style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }}
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0],
            rotate: [0, 90, 180],
        }}
        transition={{
            duration: 1.5,
            delay: delay,
            ease: "easeInOut",
        }}
    >
        <path
            d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z"
            fill={color}
        />
    </motion.svg>
);

const SparkleEffect = ({ count = 3, color = "#45c691" }) => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSparkle = {
                id: Math.random(),
                size: Math.random() * 15 + 10,
                delay: Math.random() * 0.5,
            };
            setSparkles(prev => [...prev.slice(-count), newSparkle]);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
            <AnimatePresence>
                {sparkles.map(sparkle => (
                    <Sparkle
                        key={sparkle.id}
                        size={sparkle.size}
                        color={color}
                        delay={sparkle.delay}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default SparkleEffect;
