import React from 'react';

export const Logo = ({ size = 'md', className = '' }) => {
  const fontSizes = {
    sm: '18px',
    md: '22px',
    lg: '28px',
    xl: '36px'
  };

  const currentSize = fontSizes[size] || size;

  return (
    <span
      className={`aya-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontWeight: '900',
        letterSpacing: '-0.04em',
        fontFamily: 'var(--font-sans)',
        fontSize: currentSize,
        lineHeight: '1',
        userSelect: 'none'
      }}
    >
      <span style={{ color: 'var(--ink-primary)' }}>aya</span>
      <span
        style={{
          color: 'var(--accent-terracotta)',
          fontWeight: '900',
          marginLeft: '1px',
          fontSize: '1.05em',
          transform: 'translateY(-1px)',
          display: 'inline-block'
        }}
      >
        +
      </span>
    </span>
  );
};
