import React from 'react';
import { ArrowRight } from 'lucide-react';

export const StatementSection = ({ onLearnMore }) => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      caption: 'Interactive Design System Architecture Reviews'
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      caption: '1-on-1 Code Critiques with Staff Instructors'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      caption: 'Live Swarm & AI Multi-Agent Hackathons'
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      caption: 'Sub-50ms Edge Performance Diagnostics'
    }
  ];

  return (
    <section id="methodology" style={{ padding: '90px 0 80px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header Tag */}
        <div className="section-tag">
          ABOUT THE ACADEMY
        </div>

        {/* Big Editorial Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
            marginBottom: '48px',
            alignItems: 'flex-end'
          }}
          className="statement-header"
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                color: 'var(--ink-primary)',
                maxWidth: '820px'
              }}
            >
              We build search-first digital systems to help category{' '}
              <span className="italic-serif" style={{ fontWeight: '400' }}>
                leaders
              </span>{' '}
              lead their industries.
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Blending rigorous craft, code architecture, and contemporary aesthetics, we replace generic bootcamps with enduring technical craftsmanship and high-leverage frameworks.
            </p>
            <button
              onClick={onLearnMore}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '700',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid var(--ink-primary)',
                paddingBottom: '2px'
              }}
            >
              <span>Explore Curriculum Syllabus</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 4-Column Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}
        >
          {photos.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                aspectRatio: '3/4',
                backgroundColor: '#1E1E1E',
                border: '1px solid var(--border-medium)'
              }}
              className="photo-card"
            >
              <img
                src={item.url}
                alt={item.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(110%)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="grid-photo"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  opacity: 0.9
                }}
              >
                <div style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.3' }}>
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .statement-header {
            grid-template-columns: 1.4fr 0.8fr !important;
          }
        }
        .photo-card:hover .grid-photo {
          filter: grayscale(0%) contrast(100%);
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
