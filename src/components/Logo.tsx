
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = '' }) => {
  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Base with Gradient */}
        <path
          d="M32 4L8 14V30C8 45.464 18.536 56 32 56C45.464 56 56 45.464 56 30V14L32 4Z"
          fill="url(#shield-gradient)"
          stroke="#E0E0E0"
          strokeWidth="1"
        />

        {/* Medical Cross */}
        <rect x="26" y="20" width="12" height="24" rx="1" fill="white" />
        <rect x="20" y="26" width="24" height="12" rx="1" fill="white" />

        {/* Recycling Symbol (3 arrows forming a triangle) */}
        <g transform="translate(32, 42) scale(0.6)">
          <path
            d="M0,-12 L-4,-6 L4,-6 Z"
            fill="#F2FCE2"
            transform="rotate(0)"
          />
          <path
            d="M0,-12 L-4,-6 L4,-6 Z"
            fill="#F2FCE2"
            transform="rotate(120)"
          />
          <path
            d="M0,-12 L-4,-6 L4,-6 Z"
            fill="#F2FCE2"
            transform="rotate(240)"
          />
        </g>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient
            id="shield-gradient"
            x1="8"
            y1="4"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#4EB8B0" />
            <stop offset="100%" stopColor="#33C3F0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
