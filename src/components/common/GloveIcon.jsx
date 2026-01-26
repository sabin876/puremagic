import React from 'react';

const GloveIcon = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Glove Shape - Green */}
            <path
                d="M30 40 C 30 30, 40 25, 45 35 L 50 30 C 55 25, 65 30, 60 40 L 65 35 C 75 30, 85 45, 75 55 L 70 85 C 68 90, 32 90, 30 85 L 25 55 C 20 45, 30 35, 30 40 Z"
                fill="#45c691"
            />
            {/* Thumb */}
            <path
                d="M30 65 C 20 65, 15 50, 25 45"
                stroke="#45c691"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
            />

            {/* Magic Sparkles */}
            <circle cx="20" cy="30" r="2" fill="#45c691" className="animate-pulse" />
            <circle cx="85" cy="25" r="3" fill="#45c691" className="animate-pulse" />
            <path d="M10 50 L 15 50 M 12.5 47.5 L 12.5 52.5" stroke="#45c691" strokeWidth="1" />

            {/* Shine lines */}
            <path d="M50 15 V 25 M 70 15 L 65 22 M 30 15 L 35 22" stroke="#45c691" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default GloveIcon;
