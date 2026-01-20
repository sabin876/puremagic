import React from 'react';

const VacuumIcon = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Hose/Handle Arch - Blue */}
            <path
                d="M35 55 V 35 Q 35 10 65 10 Q 90 10 90 35 V 90"
                stroke="#038fd4"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
            />

            {/* Canister Body - Green */}
            <path
                d="M10 60 Q 10 45 25 45 H 35 Q 45 45 45 60 V 85 H 10 V 60 Z"
                fill="#45c691"
            />
            {/* Body Outline for definition */}
            <path
                d="M10 60 Q 10 45 25 45 H 35 Q 45 45 45 60 V 85 H 10 V 60 Z"
                stroke="#45c691"
                strokeWidth="2"
                fill="none"
            />

            {/* Wheel - White with Blue rim */}
            <circle cx="28" cy="80" r="10" fill="white" stroke="#038fd4" strokeWidth="4" />

            {/* Floor attachment at bottom of hose */}
            <path d="M75 90 H 100" stroke="#038fd4" strokeWidth="8" strokeLinecap="round" />
        </svg>
    );
};

export default VacuumIcon;
