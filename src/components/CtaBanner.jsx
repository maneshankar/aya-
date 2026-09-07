import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CtaBanner = ({ onJoinWaitlist }) => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#0C0A10',
        color: '#FFFFFF',
        padding: '90px 0',
        overflow: 'hidden'
      }}
    >
      {/* Aurora Sunset Atmospheric Glow inside Dark Banner */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233, 59, 129, 0.45) 0%, rgba(255, 171, 46, 0.35) 50%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121, 71, 255, 0.4) 0%, rgba(233, 59, 129, 0.25) 50%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="cta-grid"
        >
          {/* Left Copy */}
          <div style={{ maxWidth: '640px' }}>
            <div style={{ marginBottom: '12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--aurora-amber)',
                  fontWeight: '700',
                  letterSpacing: '0.06em'
                }}
              >
                <Sparkles size={12} />
                <span>EXPERIENCE AYA+ ATELIER</span>
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.035em',
                marginBottom: '16px'
              }}
            >
              Built for makers,
              <br />
              <span className="italic-serif" style={{ color: 'var(--aurora-coral)' }}>not algorithms.</span>
            </h2>

            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '28px', maxWidth: '520px' }}>
              Live critiques, dedicated mentors, and career-level curriculum from artists leading their industries. Start learning today with zero friction.
            </p>

            <div>
              <button
                onClick={onJoinWaitlist}
                className="btn-pill-gradient"
                style={{
                  padding: '13px 28px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.04em'
                }}
              >
                <span>JOIN THE COHORT</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Visual Badge Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '4/3.2',
                maxWidth: '460px',
                width: '100%',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=85"
                alt="Creative artisan in studio"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12, 10, 16, 0.7) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                GLOBAL ARTISANS & CREATIVE COHORTS
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .cta-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
