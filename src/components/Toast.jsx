import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 300,
        backgroundColor: 'var(--ink-primary)',
        color: '#FFFFFF',
        padding: '12px 18px',
        borderRadius: 'var(--radius-sm)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
        fontWeight: '500',
        animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <CheckCircle2 size={16} color="var(--accent-terracotta)" />
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          marginLeft: '4px'
        }}
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
};
