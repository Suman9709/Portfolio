import React from 'react';

const BrandLogo = ({ compact = false, className = '' }) => {
  return (
    <div className={`brand-lockup ${className}`.trim()}>
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-label="Suman Kumar monogram">
        <defs>
          <linearGradient id="brandGradient" x1="8" x2="56" y1="6" y2="59" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67e8f9" />
            <stop offset="0.55" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <path d="M32 3.5 56.7 17.8v28.4L32 60.5 7.3 46.2V17.8L32 3.5Z" fill="#0b1020" stroke="url(#brandGradient)" strokeWidth="2.4" />
        <path d="M20 20.5c2.8-3.3 7.1-4.9 11.2-3.8 3.4.9 5.3 3 5.3 5.7 0 2.5-1.6 4.2-5.6 5.7l-4.1 1.5c-2 .7-2.9 1.6-2.9 2.9 0 2 2 3.3 4.8 3.3 3.5 0 6.2-1.5 8.3-4.1" fill="none" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="4.1" />
        <path d="M39.3 17.5v29M39.8 32l10-14.5M40.2 31.8l10.7 14.7" fill="none" stroke="#f8fafc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        <circle cx="14" cy="32" r="2.1" fill="#67e8f9" />
      </svg>
      {!compact && (
        <span className="brand-copy">
          <span className="brand-name">Suman Kumar</span>
          <span className="brand-role">Full-stack developer</span>
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
