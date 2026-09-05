import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { ArrowRight } from 'lucide-react';

export const LearningPillars = () => {
  const [pillars, setPillars] = useState([]);

  useEffect(() => {
    courseApi.getPillars().then(res => {
      if (res.success) setPillars(res.data);
    });
  }, []);

  return (
    <section id="capabilities" style={{ padding: '90px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Tag & Heading */}
        <div style={{ marginBottom: '48px', maxWidth: '820px' }}>
          <div className="section-tag">CAPABILITIES & METHODOLOGY</div>
          <h2 className="section-title-large">
            We craft high-impact learning experiences through <span className="italic-serif">strategic design</span>, seamless coding, and creative thinking.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="pillar-card"
            >
              <div>
                {/* Number / Code Tag */}
                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: 'var(--accent-terracotta)',
                    textTransform: 'uppercase',
                    marginBottom: '14px'
                  }}
                >
                  {pillar.number}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    letterSpacing: '-0.02em',
                    color: 'var(--ink-primary)',
                    marginBottom: '12px'
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-secondary)', marginBottom: '24px' }}>
                  {pillar.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pillar.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12.5px',
                        color: 'var(--ink-secondary)',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
      `}</style>
    </section>
  );
};
