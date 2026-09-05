import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaBanner = ({ onJoinWaitlist }) => {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '56px 0' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px'
          }}
        >
          {/* Left copy */}
          <div style={{ maxWidth: '620px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                letterSpacing: '-0.03em',
                marginBottom: '10px'
              }}
            >
              Built for makers, not algorithms.
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.55' }}>
              Live critiques, dedicated mentors, and career-level curriculum from artists and designers leading their industries. Jump in and create your first course today.
            </p>
          </div>

          {/* Right Action Button */}
          <div>
            <button
              onClick={onJoinWaitlist}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '13.5px' }}
            >
              <span>Join the waitlist</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
