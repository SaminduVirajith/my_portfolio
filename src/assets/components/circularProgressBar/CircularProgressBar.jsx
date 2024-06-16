import React, { useEffect, useState } from 'react';

const CircularProgressBar = ({ progress, size = 100, strokeWidth = 10 }) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="circular-progress-bar"
    >
      <circle
        className="circular-progress-bar-bg"
        stroke="#2e3b55"
        strokeWidth={strokeWidth}
        fill="none"
        cx={center}
        cy={center}
        r={radius}
      />
      <circle
        className="circular-progress-bar-progress"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="none"
        cx={center}
        cy={center}
        r={radius}
        style={{
          transition: 'stroke-dashoffset 1s ease-in-out',
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 210, 255, 1)" />
          <stop offset="100%" stopColor="rgba(58, 123, 213, 1)" />
        </linearGradient>
      </defs>
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dy=".3em"
        fontSize="20px"
        fill="#fff"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
