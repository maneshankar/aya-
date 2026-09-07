import React from 'react';
import { ArrowRight, Sparkles, Play, Star, CheckCircle } from 'lucide-react';

export const Hero = ({ onJoinWaitlist, onExploreFreeCourses }) => {
  return (
    <section
      id="overview"
      style={{
        position: 'relative',
        paddingTop: '48px',
        paddingBottom: '90px',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Aurora Ambient Mesh Blur Glow */}
      <div className="aurora-hero-bg" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Kicker Phrase in Elegant Italic Serif */}
        <div style={{ marginBottom: '14px' }}>
          <span className="kicker-phrase">
            Your Craft, in Perfect Rhythm.
          </span>
        </div>

        {/* Big Bold Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 5.8vw, 5rem)',
            fontWeight: '800',
            lineHeight: '1.04',
            letterSpacing: '-0.04em',
            color: 'var(--ink-primary)',
            maxWidth: '860px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px'
          }}
        >
          Master Design,
          <br />
          Not Just Theory
        </h1>

        {/* Subtitle Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            lineHeight: '1.6',
            color: 'var(--ink-secondary)',
            maxWidth: '580px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '32px'
          }}
        >
          Multi-camera ateliers, studio-tested assignments, and 1:1 guidance from renowned makers. Built for creators who take their work seriously.
        </p>

        {/* Minimalist Pill CTA Button with Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '56px' }}>
          <button
            onClick={onExploreFreeCourses}
            className="btn-pill-cta"
            style={{
              padding: '12px 28px',
              fontSize: '12px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 18px rgba(12, 12, 14, 0.08)'
            }}
          >
            <span>TRY IT FOR FREE</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Floating Center Visual / Device Showpiece with Ambient Halo */}
        <div
          style={{
            position: 'relative',
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/* Subtle soft backdrop glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(233, 59, 129, 0.25) 0%, rgba(255, 171, 46, 0.2) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />

          {/* Floating Frame / Device Mockup */}
          <div
            className="animate-float"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '680px',
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '12px',
              boxShadow: '0 25px 60px -12px rgba(12, 12, 14, 0.2), 0 0 1px 1px rgba(12, 12, 14, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: '#0E0D12'
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

              {/* Floating Interactive Live Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(12, 12, 14, 0.75)',
                  backdropFilter: 'blur(12px)',
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em'
                }}
              >
                <span className="status-dot" style={{ backgroundColor: 'var(--aurora-pink)' }} />
                <span>STUDIO SESSION • 4K MULTI-CAM</span>
              </div>

              {/* Floating Bottom Card Over Mockup */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  textAlign: 'left'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--aurora-coral)', fontWeight: '700', textTransform: 'uppercase' }}>
                    CURRENT MASTERCLASS
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                    Tactile Drafting & Spatial Compositions
                  </div>
                </div>

                <button
                  onClick={onExploreFreeCourses}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'var(--ink-primary)',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}
                >
                  <Play size={12} fill="#FFFFFF" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
