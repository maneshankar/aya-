import React from 'react';
import { ArrowRight, CheckCircle2, Terminal, Sparkles, Layers } from 'lucide-react';

export const Hero = ({ onExploreClick, onMethodologyClick }) => {
  return (
    <section style={{ paddingTop: '40px', paddingBottom: '70px', overflow: 'hidden' }}>
      <div className="container">
        {/* Top Cohort Announcement Pill */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              fontSize: '12.5px',
              fontWeight: '500',
              color: 'var(--ink-secondary)'
            }}
          >
            <span className="status-dot"></span>
            <span>Atelier Academy — Taking select cohorts for Q3/Q4</span>
          </div>
        </div>

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
          {/* Left Column: Editorial Headline & Actions */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
                fontWeight: '700',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                color: 'var(--ink-primary)',
                marginBottom: '24px'
              }}
            >
              Next-Gen Mastery for{' '}
              <span className="italic-serif" style={{ fontWeight: '400' }}>
                growing
              </span>
              <br />
              <span className="italic-serif" style={{ fontWeight: '400' }}>
                practitioners
              </span>
              .
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                lineHeight: '1.65',
                color: 'var(--ink-secondary)',
                maxWidth: '540px',
                marginBottom: '32px'
              }}
            >
              We engineer category-defining masterclasses, tactile digital product systems, and search-first web architectures to help ambitious builders outpace their markets.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '44px' }}>
              <button onClick={onExploreClick} className="btn-primary" style={{ padding: '13px 26px', fontSize: '14px' }}>
                <span>Explore Masterclasses</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={onMethodologyClick} className="btn-secondary" style={{ padding: '13px 24px', fontSize: '14px' }}>
                <span>Academy Methodology</span>
              </button>
            </div>

            {/* 3 Pillar Micro Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '20px',
                paddingTop: '28px',
                borderTop: '1px solid var(--border-light)'
              }}
            >
              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  TOP MASTERY
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
                  Design token pipelines & scalable component platforms.
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  AI SWARMS
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
                  Agentic cognitive architectures & autonomous tool calling.
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  EDGE CODE
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
                  Sub-50ms React server pipelines and performance math.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Visual Card */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-medium)',
                aspectRatio: '4/4.5',
                backgroundColor: '#1E1B18'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Masterclass Workshop Session"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(110%) brightness(0.92)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="hero-img"
              />

              {/* Dark editorial floating badge overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(18, 18, 18, 0.88)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 18px',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--accent-terracotta)', textTransform: 'uppercase', fontWeight: '700' }}>
                    COHORT SESSIONS • PRODUCTION REPOSITORIES
                  </div>
                  <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'var(--font-mono)' }}>EST. 2026</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.4', color: 'rgba(255, 255, 255, 0.92)' }}>
                  Rigorous masterclasses & high-velocity code architecture for ambitious practitioners.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Verification Checkpoints */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '56px',
            padding: '24px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                Select Practitioners Only
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                Curated admissions ensuring exceptional peer discourse and senior network density.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
              <Terminal size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                Code-First Synthesis
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                Zero theoretical slides. Clone actual production repositories, token compilers, and CI evals.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
              <Layers size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                Full-Stack Systems
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                Seamless convergence of design engineering, React server components, and AI agents.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 60px !important;
          }
        }
        .hero-img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};
