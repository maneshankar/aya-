import React from 'react';
import { Layers, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const WhatsInTheBox = () => {
  const pillars = [
    {
      number: '01',
      title: 'Studio-Grade Curriculum',
      description: 'Structured, multi-camera masterclasses covering spatial composition, materials, color chemistry, and digital craft.'
    },
    {
      number: '02',
      title: '1:1 Direct Guidance & Critiques',
      description: 'Book personalized 45-minute critique sessions with world-renowned practitioners to troubleshoot and elevate your work.'
    },
    {
      number: '03',
      title: 'Physical Kits & Open Archive',
      description: 'Curated studio tools and pigments delivered to your door, plus open-source reference assets and journal entries.'
    }
  ];

  return (
    <section style={{ padding: '80px 0 90px', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Dual-Column Header Layout (Matches Reference Aesthetic) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            alignItems: 'flex-start',
            marginBottom: '64px'
          }}
          className="statement-grid"
        >
          {/* Left: Bold Editorial Heading with Italic Accent */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                color: 'var(--ink-primary)'
              }}
            >
              Designed to
              <br />
              Help You Create
              <br />
              More <span className="italic-serif" style={{ color: 'var(--ink-primary)' }}>With Less</span>
              <br />
              <span className="italic-serif" style={{ color: 'var(--ink-primary)' }}>Friction</span>
            </h2>
          </div>

          {/* Right: Clean Narrative Description */}
          <div style={{ paddingTop: '8px' }}>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.35vw, 1.2rem)',
                lineHeight: '1.6',
                color: 'var(--ink-secondary)',
                maxWidth: '480px'
              }}
            >
              Our education ecosystem is built for modern practitioners and makers who want to master real craft, develop distinct taste, and stay focused on what matters.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Clean Columns Below */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--aurora-coral)',
                  fontWeight: '700',
                  letterSpacing: '0.06em'
                }}
              >
                {pillar.number}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  color: 'var(--ink-primary)'
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: '1.55',
                  color: 'var(--ink-secondary)'
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .statement-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};
