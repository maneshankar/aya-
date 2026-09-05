import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ onJoinWaitlist, onExploreFreeCourses }) => {
  return (
    <section id="overview" style={{ paddingTop: '36px', paddingBottom: '60px' }}>
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text Content */}
          <div>
            {/* Top Pill */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  fontWeight: '700',
                  color: 'var(--accent-terracotta)',
                  textTransform: 'uppercase'
                }}
              >
                <span className="status-dot"></span>
                <span>NEW IN AYA CLUB • LIVE CRITIQUES ADDED</span>
              </div>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 4.1rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                color: 'var(--ink-primary)',
                marginBottom: '20px'
              }}
            >
              The education platform
              <br />
              built
              <br />
              <span style={{ color: 'var(--accent-terracotta)' }}>for design disciplines</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)',
                lineHeight: '1.6',
                color: 'var(--ink-secondary)',
                maxWidth: '520px',
                marginBottom: '32px'
              }}
            >
              Multi-camera courses by storytellers, independent authors, assignment-led masterclasses, mentoring, and a platform for every discipline.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              <button
                onClick={onJoinWaitlist}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '13.5px' }}
              >
                <span>Join the waitlist</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={onExploreFreeCourses}
                className="btn-secondary"
                style={{ padding: '12px 22px', fontSize: '13.5px' }}
              >
                <span>Explore free courses</span>
              </button>
            </div>

            {/* 3 Metrics Rows */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-light)'
              }}
            >
              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                  COURSES
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                  89 interactive
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                  HRS
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                  500+ hours of video
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                  PLATFORM RATING
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                  4.9 out of 5 stars
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hand drafting visual */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-medium)',
                aspectRatio: '4/4.8',
                backgroundColor: '#1C1917'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85"
                alt="Tactile drawing & industrial drafting masterclass"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
};
