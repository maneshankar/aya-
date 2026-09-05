import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export const CtaBanner = ({ onEnrollClick, onSyllabusClick }) => {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '60px 0' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          {/* Left copy */}
          <div style={{ maxWidth: '640px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                letterSpacing: '-0.03em',
                marginBottom: '10px'
              }}
            >
              Built for visionary builders,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-terracotta)', fontWeight: '400' }}>
                not algorithms
              </span>
              .
            </h2>
            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>
              Every masterclass cohort prioritizes deep mastery and senior mentorship. Gain instant access to production repos, token pipelines, and lifetime updates.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <button
              onClick={onEnrollClick}
              className="btn-primary"
              style={{ padding: '13px 26px', fontSize: '13.5px' }}
            >
              <span>Enroll in Current Cohort</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onSyllabusClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '13px 22px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '13.5px',
                fontWeight: '600'
              }}
              className="cta-secondary-btn"
            >
              <FileText size={15} />
              <span>Syllabus Guide</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cta-secondary-btn:hover {
          border-color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
};
